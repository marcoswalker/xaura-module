import { diceConfig } from "./diceConfig.js";
import {SystemSettings} from "./settings.js";

let pause_sound;
let ocultos = false;

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
  if (document.actor.data.type != "character") return;
  if (game.settings.get('xaura-module', 'FundoFicha')) {
    $(`#actor-${document.actor.id}`).addClass('fundoFicha');
    $(`#actor-${document.actor.id} section`).css('background','none');
  }
  if (game.settings.get('xaura-module', 'EscondeLogo')) {
    $('#ddbImporterButton').addClass('esconde');
  }
});

Hooks.on('renderSidebar', function () {
  if (game.settings.get('xaura-module', 'FundoChat')) {
    $('#sidebar').attr('style', 'background-size: auto 100vh !important;');
    $('#sidebar').addClass('fundoFolha');
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

Hooks.on('midi-qol.RollComplete', function (workflow) {
  if (!workflow.damageList) return;
  let users = [];
  let chatContent = `<table>
    <tr>
      <th>Target</th>
      <th>HP Antes</th>
      <th>Dano</th>
      <th>Tipo</th>
    </tr>`;
  for (let damage of workflow.damageList) {
    let damageDetail = workflow.damageDetail[0];
    let damageType = damageDetail.type.charAt(0).toUpperCase() + damageDetail.type.slice(1);
    let token = Array.from(workflow.targets).find(d => d.actor.id == damage.actorId);
    if (token.actor.data.type == "character") {
      chatContent += `<tr>
        <td>${token.data.name}</td>
        <td style="text-align:center;">${damage.oldHP}</td>
        <td style="text-align:center;">${damage.appliedDamage}</td>
        <td>${game.i18n.translations.DND5E['Damage'+damageType]}</td>
      </tr>`;
    } else {
      chatContent += `<tr>
        <td>${token.data.name}</td>
        <td style="text-align:center;"></td>
        <td style="text-align:center;">${damage.appliedDamage}</td>
        <td>${game.i18n.translations.DND5E['Damage'+damageType]}</td>
      </tr>`;
    }
    for (let user of game.users) {
      if (token.actor.testUserPermission(user, 'ENTITY_PERMISSIONS.OWNER') || workflow.actor.testUserPermission(user, 'ENTITY_PERMISSIONS.OWNER')) {
        users.push(user.id);
      }
    }
  }
  chatContent += `</table>`;
  ChatMessage.create({
    whisper: users,
    content: chatContent,
    speaker: ChatMessage.getSpeaker({ actor: workflow.actor })
  });
});