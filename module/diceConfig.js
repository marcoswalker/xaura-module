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
}