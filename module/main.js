import { diceConfig } from "./diceConfig.js";
import {SystemSettings} from "./settings.js";

let pause_sound;

Hooks.once("init", function () {
  const midiQOL = game.modules.get('midi-qol');
  let ptbr = midiQOL.languages.find(a => a.lang == "pt-BR");
  ptbr['path'] = "/modules/xaura-module/midi-lang/pt-BR.json";
  SystemSettings();
});

Hooks.once('ready', async function () {
  $('#logo').attr('src', '/modules/xaura-module/assets/DD_TOP.png');
  $('#pause img').attr('src', "/modules/xaura-module/assets/pause.png");
  ui['pause']['options']['template'] = "/modules/xaura-module/templates/pause.html";
  pause_sound = await AudioHelper.preloadSound("/modules/xaura-module/assets/pause.wav");
  if (game.settings.get("xaura-module", "OcultarMacros")) {
    $('#hotbar').addClass('esconde');
  } else {
    $('#hotbar').removeClass('esconde');
  }
  if (game.settings.get("xaura-module", "OcultarPlayers")) {
    $('#players').addClass('esconde');
  } else {
    $('#players').removeClass('esconde');
  }
  let ocultos = false;
  $('#logo').click(function () {
    if (!ocultos) {
      $('#controls').addClass('esconde');
      ocultos = true;
    } else {
      $('#controls').removeClass('esconde');
      ocultos = false;
    }
  });  
});

Hooks.on('renderActorSheet', function(document, html) {
  const setting = game.settings.get('xaura-module', 'FundoFicha');
  if (setting) {
    $(`#actor-${document.actor.id}`).addClass('fundoFicha');
    $(`#actor-${document.actor.id} section`).css('background','none');
  }
  if (game.settings.get('xaura-module', 'EscondeLogo')) {
    $('#ddbImporterButton').addClass('esconde')
  } else {
    $('#ddbImporterButton').removeClass('esconde')
  }
});

Hooks.once('diceSoNiceReady', function (dice) {
  diceConfig(dice);
});

Hooks.on('pauseGame', function (paused) {
  if (paused) pause_sound.play({ volume:1.0, loop:false}, false);
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
});

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
  if (!game.user.isGM) return;
  const combats = combatTracker.combats;
  if (combats.length > 0) {
    let header = html.find("#combat-round");
    header.append(`<nav class="encounters flexrow">
      <a class="combat-control setarIniciativa" title="Somar Iniciativa para vários combatentes.">
      <i class="fas fa-exchange-alt"></i>
      </a>
    </nav>`);
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
              $(".mudar:checked").each(function (index, c) {
                let combatId = $(c).val();
                let combatante = currentCombat.combatants.find(c => c.id == combatId);
                let iniciativaAtual = combatante.initiative;
                valor = parseInt(valor);
                currentCombat.setInitiative(combatId, parseInt(iniciativaAtual + valor));
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