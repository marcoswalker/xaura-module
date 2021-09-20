export const SystemSettings = function() {
    game.settings.register("xaura-module", "OcultarMacros", {
        name: "Ocultar Barra de Macros",
        hint: "Selecione para ocultar barra de Macros.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => {location.reload();}
    });
    game.settings.register("xaura-module", "OcultarPlayers", {
        name: "Ocultar Barra de Jogadores",
        hint: "Selecione para ocultar barra de Jogadores.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => {location.reload();}
    });
}