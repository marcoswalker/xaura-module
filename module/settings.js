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
    game.settings.register("xaura-module", "FundoFicha", {
        name: "Usar imagem de fundo da ficha.",
        hint: "Selecione para usar imagem de fundo das fichas.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => {location.reload();}
    });
    game.settings.register("xaura-module", "EscondeLogo", {
        name: "Esconder logo Beyond da ficha.",
        hint: "Esconder logo módulo My Beyound das fichas.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => {location.reload();}
    });
}