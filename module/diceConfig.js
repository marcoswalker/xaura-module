export function diceConfig(dice) {
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
    //Bruxo
    dice.addSystem({ id: "Bruxo", name: "Bruxo"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/warlock.png'
      ],
      system: "Bruxo"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          'modules/xaura-module/assets/warlock.png'
        ],
        system: "Bruxo"
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
          'modules/xaura-module/assets/warlock.png'
        ],
        system: "Bruxo"
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
        'modules/xaura-module/assets/warlock.png'
      ],
      system: "Bruxo"
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
          'modules/xaura-module/assets/warlock.png',
        ],
        system: "Bruxo"
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
        'modules/xaura-module/assets/warlock.png',
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
      system: "Feiticeiro"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          'modules/xaura-module/assets/wizard.png'
        ],
        system: "Feiticeiro"
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
          'modules/xaura-module/assets/wizard.png'
        ],
        system: "Feiticeiro"
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
        'modules/xaura-module/assets/wizard.png'
      ],
      system: "Feiticeiro"
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
          'modules/xaura-module/assets/wizard.png',
        ],
        system: "Feiticeiro"
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
        'modules/xaura-module/assets/wizard.png',
      ],
      system: "Feiticeiro"
    });
    // Ladino
    dice.addSystem({ id: "Ladino", name: "Ladino"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/Ladino.png'
      ],
      system: "Ladino"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          'modules/xaura-module/assets/Ladino.png'
        ],
        system: "Ladino"
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
          'modules/xaura-module/assets/Ladino.png'
        ],
        system: "Ladino"
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
        'modules/xaura-module/assets/Ladino.png'
      ],
      system: "Ladino"
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
          'modules/xaura-module/assets/Ladino.png',
        ],
        system: "Ladino"
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
        'modules/xaura-module/assets/Ladino.png',
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
    dice.addSystem({ id: "PactOfDragons", name: "Pact Of Dragons"}, false);
    dice.addDicePreset({
      type: 'd2',
      labels: [
        '1',
        'modules/xaura-module/assets/PODdice.png'
      ],
      system: "PactOfDragons"
    });
    dice.addDicePreset({
        type: 'd6',
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          'modules/xaura-module/assets/PODdice.png'
        ],
        system: "PactOfDragons"
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
          'modules/xaura-module/assets/PODdice.png'
        ],
        system: "PactOfDragons"
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
        'modules/xaura-module/assets/PODdice.png'
      ],
      system: "PactOfDragons"
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
          'modules/xaura-module/assets/PODdice.png',
        ],
        system: "PactOfDragons"
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
        'modules/xaura-module/assets/PODdice.png',
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
}