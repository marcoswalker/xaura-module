Hooks.once("init", function () {
    const midiQOL = game.modules.get('midi-qol');
    let ptbr = midiQOL.languages.find(a => a.lang == "pt-BR");
    ptbr['path'] = "modules/xaura-module/midi-lang/pt-BR.json";
});

Hooks.once('ready', function () {
    $('#logo').attr('src', '/modules/xaura-module/assets/DD_TOP.png');
});

Hooks.once('diceSoNiceReady', function (dice) {
    dice.addSystem({ id: game.system.id, name: "DnD5E"}, true);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/logodice.png'
      ],
      system: game.system.id
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          'modules/xaura-module/assets/logodice.png'
        ],
        system: game.system.id
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          'modules/xaura-module/assets/logodice.png'
        ],
        system: game.system.id
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'modules/xaura-module/assets/logodice.png'
      ],
      system: game.system.id
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          'modules/xaura-module/assets/logodice.png',
        ],
        system: game.system.id
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        'modules/xaura-module/assets/logodice.png',
      ],
      system: game.system.id
    });
    dice.addSystem({ id: "Clerigo", name: "Clerigo"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/Clerigodice.png'
      ],
      system: "Clerigo"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          'modules/xaura-module/assets/Clerigodice.png'
        ],
        system: "Clerigo"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          'modules/xaura-module/assets/Clerigodice.png'
        ],
        system: "Clerigo"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'modules/xaura-module/assets/Clerigodice.png'
      ],
      system: "Clerigo"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          'modules/xaura-module/assets/Clerigodice.png',
        ],
        system: "Clerigo"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        'modules/xaura-module/assets/Clerigodice.png',
      ],
      system: "Clerigo"
    });
    dice.addSystem({ id: "Bardo", name: "Bardo"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/Barddice.png'
      ],
      system: "Bardo"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          'modules/xaura-module/assets/Barddice.png'
        ],
        system: "Bardo"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          'modules/xaura-module/assets/Barddice.png'
        ],
        system: "Bardo"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'modules/xaura-module/assets/Barddice.png'
      ],
      system: "Bardo"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          'modules/xaura-module/assets/Barddice.png',
        ],
        system: "Bardo"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        'modules/xaura-module/assets/Barddice.png',
      ],
      system: "Bardo"
    });
    dice.addSystem({ id: "Guerreiro", name: "Guerreiro"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/Guerreirodice.png'
      ],
      system: "Guerreiro"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          'modules/xaura-module/assets/Guerreirodice.png'
        ],
        system: "Guerreiro"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          'modules/xaura-module/assets/Guerreirodice.png'
        ],
        system: "Guerreiro"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'modules/xaura-module/assets/Guerreirodice.png'
      ],
      system: "Guerreiro"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          'modules/xaura-module/assets/Guerreirodice.png',
        ],
        system: "Guerreiro"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        'modules/xaura-module/assets/Guerreirodice.png',
      ],
      system: "Guerreiro"
    });
    dice.addSystem({ id: "Monge", name: "Monge"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/Mongedice.png'
      ],
      system: "Monge"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          'modules/xaura-module/assets/Mongedice.png'
        ],
        system: "Monge"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          'modules/xaura-module/assets/Mongedice.png'
        ],
        system: "Monge"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'modules/xaura-module/assets/Mongedice.png'
      ],
      system: "Monge"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          'modules/xaura-module/assets/Mongedice.png',
        ],
        system: "Monge"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        'modules/xaura-module/assets/Mongedice.png',
      ],
      system: "Monge"
    });
    dice.addColorset({
      name: game.system.id,
      description: ' * DnD5E * ',
      category: 'Colors',
      foreground: '#000000',
      background: '#000000',
      outline: '#ff0000',
      edge: '#ff0000', 
      texture: 'metal',
      material: 'metal',
      font: 'Didot',
      default: true,
    });
    dice.addColorset({
      name: "Clerigo",
      description: ' * Clerigo * ',
      category: 'Colors',
      foreground: '#140141',
      background: '#140141',
      outline: '#79a3f7',
      edge: '#79a3f7', 
      texture: 'wood',
      material: 'wood',
      font: 'Luminari',
      default: false,
    });
    dice.addColorset({
      name: "Bardo",
      description: ' * Bardo * ',
      category: 'Colors',
      foreground: '#1d5f0f',
      background: '#1d5f0f',
      outline: '#efdc58',
      edge: '#efdc58', 
      texture: 'radial',
      material: 'metal',
      font: 'Courier',
      default: false,
    });
    dice.addColorset({
      name: "Guerreiro",
      description: ' * Guerreiro * ',
      category: 'Colors',
      foreground: '#4101d5',
      background: '#b4b5b6',
      outline: '#b30059',
      edge: '#4101d5', 
      texture: 'metal',
      material: 'metal',
      font: 'Arial',
      default: false,
    });
    dice.addColorset({
      name: "Monge",
      description: ' * Monge * ',
      category: 'Colors',
      foreground: '#ff0000',
      background: '#3d07bb',
      outline: '#ffffff',
      edge: '#ffffff', 
      texture: 'skulls',
      material: 'plastic',
      font: 'Didot',
      default: false,
    });
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