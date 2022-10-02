import { diceConfig } from "./diceConfig.js";
import {SystemSettings} from "./settings.js";

let ocultos = false;

class XPause extends Application {
  static get defaultOptions() {
    const options = super.defaultOptions;
    options.id = "pause";
    options.template = "/modules/xaura-module/templates/pause.hbs";
    options.popOut = false;
    return options;
  }

  /** @override */
  getData(options) {
    return { paused: game.paused };
  }
}

Hooks.once("init", function () { 

  const midiQOL = game.modules.get('midi-qol');
  let ptbr = midiQOL.languages.find(a => a.lang == "pt-BR");
  ptbr['path'] = "/modules/xaura-module/midi-lang/pt-BR.json";
  SystemSettings();

  CONFIG.ui.pause = XPause;

  CONFIG.Combat.sounds = Object.assign({ 
    xaura: {
      label: "Xaura",
      startEncounter: ["/modules/xaura-module/assets/combat/vo_anno_fight04.wav"],
      yourTurn: [
        "/modules/xaura-module/assets/combat/Bar_datewithdeath.wav",
        "/modules/xaura-module/assets/combat/Bar_meetdeath.wav",
        "/modules/xaura-module/assets/combat/Bar_pleasecontinue.wav"
      ],
      nextUp: [
        "/modules/xaura-module/assets/combat/Nec_soonperhaps.wav",
        "/modules/xaura-module/assets/combat/Nec_tellmemore.wav",
        "/modules/xaura-module/assets/combat/Nec_letsgo.wav"
      ]
    }
  }, CONFIG.Combat.sounds);

});

Hooks.once('ready', function () {
  
  
  game.settings.set('core', 'combatTheme', 'xaura');
  $('#logo').attr('src', '/modules/xaura-module/assets/DD_TOP.png');
  $('#logo').click(function () {
    if (!ocultos) {
      $('#controls').addClass('esconde');
      $('#navigation').addClass('esconde');
      $('#hotbar').addClass('esconde');
      $('#players').addClass('esconde');
      ocultos = true;
    } else {
      $('#controls').removeClass('esconde');
      $('#navigation').removeClass('esconde');
      $('#players').removeClass('esconde');
      $('#hotbar').removeClass('esconde');
      ocultos = false;
    }
  });  
  if (!game.user.isGM) return;
  if (game.settings.get('babele', 'directory') != "modules/xaura-module/babele-lang") {
    game.settings.set('babele','directory', 'modules/xaura-module/babele-lang');
  }
});

Hooks.on('renderPlayerList', function () {
  if (ocultos) {
    $('#players').addClass('esconde');
  } else {
    $('#players').removeClass('esconde');
  }
});

Hooks.on('renderSceneNavigation', function () {
  if (ocultos) {
    $('#navigation').addClass('esconde');
  } else {
    $('#navigation').removeClass('esconde');
  }
});

Hooks.on('renderSceneControls', function () {
  if (ocultos) {
    $('#controls').addClass('esconde');
  } else {
    $('#controls').removeClass('esconde');
  }
});

Hooks.on('renderActorSheet', function(document, html) {
  if (document.actor.type != "character") return;
  if (game.settings.get('xaura-module', 'FundoFicha')) {
    $(html).addClass('fundoFicha');
    $(html.find('section')).css('background','none');
  }
  if (game.settings.get('xaura-module', 'EscondeLogo')) {
    $('#ddbImporterButton').addClass('esconde');
  }
  $(`<a class="convert-ouro" style="margin-left: 5px;" title="Converter moedas para Ouro."><i class="fas fa-coins"></i></a>`).insertAfter($(html.find('.currency-convert')));
  $(html.find('.currency-convert')).css('display','none');
  $(html.find('.convert-ouro')).click(function (event) {
    let dialog = new Dialog({
      title: "Converter moedas para Ouro",
      content: `<p>Você deseja mesmo converter todas suas moedas para <strong>Ouro</strong>?</p><p>Essa operação não tem volta!</p>`,
      buttons: {
        sim: {
          icon: '<i class="fas fa-check"></i>',
          label: "Sim",
          callback: html => {
            const actor = document.actor;

            let sobra_cobre = actor.system.currency.cp % 100;
            let ouro_cobre = Math.floor(actor.system.currency.cp / 100); // Cobre

            let sobra_prata = actor.system.currency.sp % 10;
            let ouro_prata = Math.floor(actor.system.currency.sp / 10); // Prata

            let sobra_elektro = actor.system.currency.ep % 2;
            let ouro_elektro = Math.floor(actor.system.currency.ep / 2); // Elektro

            let ouro_platina = actor.system.currency.pp * 10; // Platina

            let novo_ouro = actor.system.currency.gp + ouro_cobre + ouro_prata + ouro_elektro + ouro_platina; // Ouro total
            actor.update({
              'system.currency.cp': sobra_cobre,
              'system.currency.ep': sobra_elektro,
              'system.currency.gp': novo_ouro,
              'system.currency.pp': 0,
              'system.currency.sp': sobra_prata
            });            
          }
        },
        nao: {
          icon: '<i class="fas fa-times"></i>',
          label: "Não",
          callback: () => {}
        }
      },
      default: "nao"
    }).render(true);
  });
});

Hooks.on('renderSidebar', function () {
  if (game.settings.get('xaura-module', 'FundoChat')) {
    $('#sidebar').attr('style', 'background-size: auto 100vh !important;');
    $('#sidebar').addClass('fundoFolha');
  } 
});

Hooks.once('diceSoNiceReady', function (dice) {
  diceConfig(dice, game.user);
});

Hooks.on('pauseGame',async function (paused) {
  if (paused) {
    let pauseSound = await game.audio.preload("/modules/xaura-module/assets/pause.wav");
    pauseSound.play({ volume:1.0, loop:false}, false);
  }
});

Hooks.on("getSceneControlButtons", (controls) => {
  const bar = controls.find(c => c.name === "token");
  if (!game.user.isGM) {
    bar.tools.push({
      name: "Centralizar Canvas no Token",
      icon: "fas fa-anchor",
      title: "Centralizar Canvas no Token",
      onClick: async () => centralizaToken(),
      button: true
    });
  }
  bar.tools.push({
    name: "Mensagens do Usuário",
    icon: "fas fa-comments",
    title: "Mensagens do chat apenas do usuário.",
    onClick: async () => user_messages(),
    button: true
  });
});

async function user_messages() {
  const messages = game.messages.filter(b => b.user.id == game.user.id);
  let dialog = new Dialog({
    title: `Mensagens do ${game.user.name}`,
    content: "<ol id='user_messages' style='width: 100%; padding-left: 5px; padding-right: 5px; background-color: none;'></ol>",
    buttons: {},
    render: async (html) => {
      for (let mess of messages) {
        let mess_html = await mess.getHTML();
        $(html.find("#user_messages")).append($(mess_html));
      }
    }
  },{height: 800, width: 400, popOut: true, classes: ["mensagensDialog"]});
  dialog.render(true);
}

async function centralizaToken () {
  if (canvas.tokens.controlled.length) {
    await canvas.animatePan({x: canvas.tokens.controlled[0].position.x, y: canvas.tokens.controlled[0].position.y});
  } else if (canvas.tokens.ownedTokens.length) {
    await canvas.animatePan({x: canvas.tokens.ownedTokens[0].position.x, y: canvas.tokens.ownedTokens[0].position.y});
  } else {
    ui.notifications.warn("Você não possui nenhum token na cena!");
  }
}

Hooks.on("renderCombatTracker",function (combatTracker, html) {
  if (combatTracker.combats.length > 0) {
    if (!combatTracker.options.popOut) combatTracker.renderPopout();
  } 
  if (!game.user.isGM) return;
  const combats = combatTracker.combats;
  if (combats.length > 0) {
    let header = html.find("div[class='encounter-controls flexrow combat']");
    header.append(`<a class="combat-button setarIniciativa" title="Somar Iniciativa para vários combatentes.">
      <i class="fas fa-exchange-alt"></i>
      </a>`);
    let currentCombat = combatTracker.viewed;
    let combatants = currentCombat.combatants;
    $('.setarIniciativa').on('click', function (event) {
      let dialogContent = `<div class="mediaeval">
        <ul class="combatates" style="list-style-type:none;"></ul>
        <label for="valor">Somar na Iniciativa:</label>
        <input type="number" name="valor" id="valor" value="0" style="width:50px;margin-left:10px;text-align:center;margin-bottom:10px;" class="valorIniciativa"/>
      </div>`;
      let dialog = new Dialog({
        title: "Somar Iniciativa",
        content: dialogContent,
        buttons: {
          vai: {
            icon: '<i class="fas fa-check"></i>',
            label: 'Somar Iniciativa',
            callback: html => {
              let valor = html.find('.valorIniciativa').val();
              $(".mudar:checked").each(async function (index, c) {
                let combatId = $(c).val();
                let combatante = currentCombat.combatants.find(c => c.id == combatId);
                let iniciativaAtual = combatante.initiative;
                valor = parseInt(valor);
                await currentCombat.setInitiative(combatId, parseInt(iniciativaAtual + valor));
              });
            }
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: 'Cancelar'
          }
        },
        default: "cancel",
        render: html => {
          combatants.forEach(function (combatant) {
            html.find('.combatates').append(`<li style="margin-bottom:5px;"><input type="checkbox" class="mudar" value="${combatant.id}"/> ${combatant.name}</li>`);
          });
        }
      });
      dialog.render(true);
    });
  }
});

Hooks.on('renderChatMessage', function(chatMessage, html, messageData) {
  if (!game.settings.get('xaura-module', 'FundoChat')) return;
  $(html[0]).attr('style', 'background: none !important');
  $(html.find('.message-content')).attr('style', 'background: none !important');
});