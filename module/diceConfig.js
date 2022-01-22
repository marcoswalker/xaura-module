export function diceConfig(dice, user) {
    dice.addSystem({ id: game.system.id, name: "DnD5E"}, true);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/logodice.png'
      ],
      bumpMaps: [,
        "modules/xaura-module/assets/logodice_bump.png"
      ],
      system: game.system.id
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1', '2', '3', '4', '5',
          'modules/xaura-module/assets/logodice.png'
        ],
        bumpMaps: [,,,,,
          "modules/xaura-module/assets/logodice_bump.png"
        ],
        system: game.system.id
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1', '2', '3', '4', '5', '6', '7',
          'modules/xaura-module/assets/logodice.png'
        ],
        bumpMaps: [,,,,,,,
          "modules/xaura-module/assets/logodice_bump.png"
        ],
        system: game.system.id
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'modules/xaura-module/assets/logodice.png'
      ],
      bumpMaps: [,,,,,,,,,
        "modules/xaura-module/assets/logodice_bump.png"
      ],
      system: game.system.id
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
          'modules/xaura-module/assets/logodice.png',
        ],
        bumpMaps: [,,,,,,,,,,,
          "modules/xaura-module/assets/logodice_bump.png"
        ],
        system: game.system.id
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        'modules/xaura-module/assets/logodice.png',
      ],
      bumpMaps: [,,,,,,,,,,,,,,,,,,,
        "modules/xaura-module/assets/logodice_bump.png"
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
      bumpMaps: [,
        "modules/xaura-module/assets/Clerigodice_bump.png"
      ],
      system: "Clerigo"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1', '2', '3', '4', '5',
          'modules/xaura-module/assets/Clerigodice.png'
        ],
        bumpMaps: [,,,,,
          "modules/xaura-module/assets/Clerigodice_bump.png"
        ],
        system: "Clerigo"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1', '2', '3', '4', '5', '6', '7',
          'modules/xaura-module/assets/Clerigodice.png'
        ],
        bumpMaps: [,,,,,,,
          "modules/xaura-module/assets/Clerigodice_bump.png"
        ],
        system: "Clerigo"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'modules/xaura-module/assets/Clerigodice.png'
      ],
      bumpMaps: [,,,,,,,,,
        "modules/xaura-module/assets/Clerigodice_bump.png"
      ],
      system: "Clerigo"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
          'modules/xaura-module/assets/Clerigodice.png',
        ],
        bumpMaps: [,,,,,,,,,,,
          "modules/xaura-module/assets/Clerigodice_bump.png"
        ],
        system: "Clerigo"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        'modules/xaura-module/assets/Clerigodice.png',
      ],
      bumpMaps: [,,,,,,,,,,,,,,,,,,,
        "modules/xaura-module/assets/Clerigodice_bump.png"
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
      bumpMaps: [,
        "modules/xaura-module/assets/Barddice_bump.png"
      ],
      system: "Bardo"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1', '2', '3', '4', '5',
          'modules/xaura-module/assets/Barddice.png'
        ],
        bumpMaps: [,,,,,
          "modules/xaura-module/assets/Barddice_bump.png"
        ],
        system: "Bardo"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1', '2', '3', '4', '5', '6', '7',
          'modules/xaura-module/assets/Barddice.png'
        ],
        bumpMaps: [,,,,,,,
          "modules/xaura-module/assets/Barddice_bump.png"
        ],
        system: "Bardo"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'modules/xaura-module/assets/Barddice.png'
      ],
      bumpMaps: [,,,,,,,,,
        "modules/xaura-module/assets/Barddice_bump.png"
      ],
      system: "Bardo"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
          'modules/xaura-module/assets/Barddice.png',
        ],
        bumpMaps: [,,,,,,,,,,,
          "modules/xaura-module/assets/Barddice_bump.png"
        ],
        system: "Bardo"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        'modules/xaura-module/assets/Barddice.png',
      ],
      bumpMaps: [,,,,,,,,,,,,,,,,,,,
        "modules/xaura-module/assets/Barddice_bump.png"
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
      bumpMaps: [,
        "modules/xaura-module/assets/Guerreirodice_bump.png"
      ],
      system: "Guerreiro"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1', '2', '3', '4', '5',
          'modules/xaura-module/assets/Guerreirodice.png'
        ],
        bumpMaps: [,,,,,
          "modules/xaura-module/assets/Guerreirodice_bump.png"
        ],
        system: "Guerreiro"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1', '2', '3', '4', '5', '6', '7',
          'modules/xaura-module/assets/Guerreirodice.png'
        ],
        bumpMaps: [,,,,,,,
          "modules/xaura-module/assets/Guerreirodice_bump.png"
        ],
        system: "Guerreiro"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'modules/xaura-module/assets/Guerreirodice.png'
      ],
      bumpMaps: [,,,,,,,,,
        "modules/xaura-module/assets/Guerreirodice_bump.png"
      ],
      system: "Guerreiro"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
          'modules/xaura-module/assets/Guerreirodice.png',
        ],
        bumpMaps: [,,,,,,,,,,,
          "modules/xaura-module/assets/Guerreirodice_bump.png"
        ],
        system: "Guerreiro"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        'modules/xaura-module/assets/Guerreirodice.png',
      ],
      bumpMaps: [,,,,,,,,,,,,,,,,,,,
        "modules/xaura-module/assets/Guerreirodice_bump.png"
      ],
      system: "Guerreiro"
    });
    //Bruxo
    dice.addSystem({ id: "Bruxo", name: "Bruxo"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/warlock.png'
      ],
      bumpMaps: [,
        "modules/xaura-module/assets/warlock_bump.png"
      ],
      system: "Bruxo"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1', '2', '3', '4', '5',
          'modules/xaura-module/assets/warlock.png'
        ],
        bumpMaps: [,,,,,
          "modules/xaura-module/assets/warlock_bump.png"
        ],
        system: "Bruxo"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1', '2', '3', '4', '5', '6', '7',
          'modules/xaura-module/assets/warlock.png'
        ],
        bumpMaps: [,,,,,,,
          "modules/xaura-module/assets/warlock_bump.png"
        ],
        system: "Bruxo"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'modules/xaura-module/assets/warlock.png'
      ],
      bumpMaps: [,,,,,,,,,
        "modules/xaura-module/assets/warlock_bump.png"
      ],
      system: "Bruxo"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
          'modules/xaura-module/assets/warlock.png',
        ],
        bumpMaps: [,,,,,,,,,,,
          "modules/xaura-module/assets/warlock_bump.png"
        ],
        system: "Bruxo"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        'modules/xaura-module/assets/warlock.png',
      ],
      bumpMaps: [,,,,,,,,,,,,,,,,,,,
        "modules/xaura-module/assets/warlock_bump.png"
      ],
      system: "Bruxo"
    });
    //
    // Feiticeiro
    dice.addSystem({ id: "Feiticeiro", name: "Feiticeiro"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/wizard.png'
      ],
      bumpMaps: [,
        "modules/xaura-module/assets/wizard_bump.png"
      ],
      system: "Feiticeiro"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1', '2', '3', '4', '5',
          'modules/xaura-module/assets/wizard.png'
        ],
        bumpMaps: [,,,,,
          "modules/xaura-module/assets/wizard_bump.png"
        ],
        system: "Feiticeiro"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1', '2', '3', '4', '5', '6', '7', 
          'modules/xaura-module/assets/wizard.png'
        ],
        bumpMaps: [,,,,,,,
          "modules/xaura-module/assets/wizard_bump.png"
        ],
        system: "Feiticeiro"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'modules/xaura-module/assets/wizard.png'
      ],
      bumpMaps: [,,,,,,,,,
        "modules/xaura-module/assets/wizard_bump.png"
      ],
      system: "Feiticeiro"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1',  '2',  '3',  '4',  '5',  '6',  '7',  '8',  '9',  '10',   '11',
          'modules/xaura-module/assets/wizard.png',
        ],
        bumpMaps: [,,,,,,,,,,,
          "modules/xaura-module/assets/wizard_bump.png"
        ],
        system: "Feiticeiro"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        'modules/xaura-module/assets/wizard.png',
      ],
      bumpMaps: [,,,,,,,,,,,,,,,,,,,
        "modules/xaura-module/assets/wizard_bump.png"
      ],
      system: "Feiticeiro"
    });
    // FeitiBruxo
    dice.addSystem({ id: "FeitiBruxo", name: "FeitiBruxo"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/wizlock.png'
      ],
      bumpMaps: [,
        "modules/xaura-module/assets/wizlock_bump.png"
      ],
      system: "FeitiBruxo"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1', '2', '3', '4', '5',
          'modules/xaura-module/assets/wizlock.png'
        ],
        bumpMaps: [,,,,,
          "modules/xaura-module/assets/wizlock_bump.png"
        ],
        system: "FeitiBruxo"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1', '2', '3', '4', '5', '6', '7', 
          'modules/xaura-module/assets/wizlock.png'
        ],
        bumpMaps: [,,,,,,,
          "modules/xaura-module/assets/wizlock_bump.png"
        ],
        system: "FeitiBruxo"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'modules/xaura-module/assets/wizlock.png'
      ],
      bumpMaps: [,,,,,,,,,
        "modules/xaura-module/assets/wizlock_bump.png"
      ],
      system: "FeitiBruxo"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1',  '2',  '3',  '4',  '5',  '6',  '7',  '8',  '9',  '10',   '11',
          'modules/xaura-module/assets/wizlock.png',
        ],
        bumpMaps: [,,,,,,,,,,,
          "modules/xaura-module/assets/wizlock_bump.png"
        ],
        system: "FeitiBruxo"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        'modules/xaura-module/assets/wizlock.png',
      ],
      bumpMaps: [,,,,,,,,,,,,,,,,,,,
        "modules/xaura-module/assets/wizlock_bump.png"
      ],
      system: "FeitiBruxo"
    });
    // Ladino
    dice.addSystem({ id: "Ladino", name: "Ladino"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/Ladino.png'
      ],
      bumpMaps: [,
        "modules/xaura-module/assets/Ladino_bump.png"
      ],
      system: "Ladino"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1', '2', '3', '4', '5', 
          'modules/xaura-module/assets/Ladino.png'
        ],
        bumpMaps: [,,,,,
          "modules/xaura-module/assets/Ladino_bump.png"
        ],
        system: "Ladino"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1', '2', '3', '4', '5', '6', '7', 
          'modules/xaura-module/assets/Ladino.png'
        ],
        bumpMaps: [,,,,,,,
          "modules/xaura-module/assets/Ladino_bump.png"
        ],
        system: "Ladino"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'modules/xaura-module/assets/Ladino.png'
      ],
      bumpMaps: [,,,,,,,,,
        "modules/xaura-module/assets/Ladino_bump.png"
      ],
      system: "Ladino"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
          'modules/xaura-module/assets/Ladino.png',
        ],
        bumpMaps: [,,,,,,,,,,,
          "modules/xaura-module/assets/Ladino_bump.png"
        ],
        system: "Ladino"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        'modules/xaura-module/assets/Ladino.png',
      ],
      bumpMaps: [,,,,,,,,,,,,,,,,,,,
        "modules/xaura-module/assets/Ladino_bump.png"
      ],
      system: "Ladino"
    });
    //
    dice.addSystem({ id: "Monge", name: "Monge"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/Mongedice.png'
      ],
      bumpMaps: [,
        "modules/xaura-module/assets/Mongedice_bump.png"
      ],
      system: "Monge"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1',  '2',  '3',  '4',  '5',
          'modules/xaura-module/assets/Mongedice.png'
        ],
        bumpMaps: [,,,,,
          "modules/xaura-module/assets/Mongedice_bump.png"
        ],
        system: "Monge"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1', '2', '3', '4', '5', '6', '7',
          'modules/xaura-module/assets/Mongedice.png'
        ],
        bumpMaps: [,,,,,,,
          "modules/xaura-module/assets/Mongedice_bump.png"
        ],
        system: "Monge"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'modules/xaura-module/assets/Mongedice.png'
      ],
      bumpMaps: [,,,,,,,,,
        "modules/xaura-module/assets/Mongedice_bump.png"
      ],
      system: "Monge"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
          'modules/xaura-module/assets/Mongedice.png',
        ],
        bumpMaps: [,,,,,,,,,,,
          "modules/xaura-module/assets/Mongedice_bump.png"
        ],
        system: "Monge"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
        'modules/xaura-module/assets/Mongedice.png',
      ],
      bumpMaps: [,,,,,,,,,,,,,,,,,,,
        "modules/xaura-module/assets/Mongedice_bump.png"
      ],
      system: "Monge"
    });
    dice.addSystem({ id: "PactOfDragons", name: "Pact Of Dragons"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/PODdice.png'
      ],
      bumpMaps: [,
        "modules/xaura-module/assets/PODdice_bump.png"
      ],
      system: "PactOfDragons"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1', '2', '3', '4', '5',
          'modules/xaura-module/assets/PODdice.png'
        ],
        bumpMaps: [,,,,,
          "modules/xaura-module/assets/PODdice_bump.png"
        ],
        system: "PactOfDragons"
    });
    dice.addDicePreset({
        type: 'd8',
        labels: [
          '1', '2', '3', '4', '5', '6', '7',
          'modules/xaura-module/assets/PODdice.png'
        ],
        bumpMaps: [,,,,,,,
          "modules/xaura-module/assets/PODdice_bump.png"
        ],
        system: "PactOfDragons"
    });
    dice.addDicePreset({
      type: 'd10',
      labels: [
        '1','2','3','4','5','6','7','8','9',
        'modules/xaura-module/assets/PODdice.png'
      ],
      bumpMaps: [,,,,,,,,,
        "modules/xaura-module/assets/PODdice_bump.png"
      ],
      system: "PactOfDragons"
    });
    dice.addDicePreset({
        type: 'd12',
        labels: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
          'modules/xaura-module/assets/PODdice.png',
        ],
        bumpMaps: [,,,,,,,,,,,
          "modules/xaura-module/assets/PODdice_bump.png"
        ], 
        system: "PactOfDragons"
    });
    dice.addDicePreset({
      type: 'd20',
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        'modules/xaura-module/assets/PODdice.png',
      ],
      bumpMaps: [,,,,,,,,,,,,,,,,,,,
        "modules/xaura-module/assets/PODdice_bump.png"
      ],    
      system: "PactOfDragons"
    });
    dice.addColorset({
      name: game.system.id,
      description: ' * DnD5E * ',
      category: 'Colors',
      foreground: '#ff0000',
      background: '#2e0000',
      outline: '#ffffff',
      edge: '#000000', 
      texture: 'dragon',
      material: 'plastic',
      font: 'MagicSchool',
      default: true,
    });

    // USER'S CONFIG

    switch (user.data.name) {
      case "Pirata":
        user.setFlag('dice-so-nice', 'appearance', { 
          global: {
            system: "PactOfDragons"
          }
        });
        break;
      case "Daniel":
        user.setFlag('dice-so-nice', 'appearance', { 
          global: {
            system: "Guerreiro"
          }
        });
        break;
      case "Vinicius":
        user.setFlag('dice-so-nice', 'appearance', {
          global: {
            system: "Clerigo"
          }
        });
        break;
      case "Xandão":
        user.setFlag('dice-so-nice', 'appearance', { 
          global: {
            system: "Bardo"
          }
        });
        break;
      case "João Pedro":
        user.setFlag('dice-so-nice', 'appearance', { 
          global: {
            system: "Ladino"
          }
        });
        break;
      case "Marcelo":
        user.setFlag('dice-so-nice', 'appearance', { 
          global: { 
            "labelColor": "#000000",
            "diceColor": "#2c0061",
            "outlineColor": "#ff0000",
            "edgeColor": "#000000",
	          "texture": "fire",
            "material": "plastic",
            "font": "MagicSchool",
            "colorset": "custom",
            "system": "FeitiBruxo" 
          } 
        });
        break;
      case "Xaura":
        user.setFlag('dice-so-nice', 'appearance', { 
          "global": { 
            "labelColor": "#ff0000", 
            "diceColor": "#000000", 
            "outlineColor": "#ffffff", 
            "edgeColor": "#ff0000",
            "texture": "metal", 
            "material": "metal", 
            "font": "MagicSchool", 
            "colorset": "custom", 
            "system": "Monge" } 
        });
        user.setFlag('dice-so-nice', 'sfxList', [
          {
            "diceType": "d20",
            "onResult": [
                "20"
            ],
            "specialEffect": "PlayAnimationBright"
          }
        ]);
        user.setFlag('dice-so-nice', 'settings', {
          "enabled": true,
          "showExtraDice": false,
          "hideAfterRoll": true,
          "timeBeforeHide": "4000",
          "hideFX": "fadeOut",
          "autoscale": true,
          "scale": 75,
          "speed": "1",
          "shadowQuality": "high",
          "bumpMapping": true,
          "sounds": true,
          "soundsSurface": "felt",
          "soundsVolume": 0.5,
          "canvasZIndex": "over",
          "throwingForce": "strong",
          "useHighDPI": true,
          "showOthersSFX": true,
          "muteSoundSecretRolls": false,
          "enableFlavorColorset": true,
          "rollingArea": false
        });
        break;
      default:
        break;
    }

}