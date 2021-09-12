Hooks.once("init", function () {
    const midiQOL = game.modules.get('midi-qol');
    let ptbr = midiQOL.languages.find(a => a.lang == "pt-BR");
    ptbr['path'] = "modules/xaura-module/midi-lang/pt-BR.json";
});