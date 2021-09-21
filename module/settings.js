export const SystemSettings = function() {
    game.settings.register("xaura-module", "FundoFicha", {
        name: "Usar imagem de fundo da ficha.",
        hint: "Selecione para usar imagem de fundo na ficha.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => {location.reload();}
    });
    game.settings.register("xaura-module", "FundoChat", {
        name: "Usar imagem de fundo no Chat.",
        hint: "Selecione para usar imagem de fundo no Chat.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => {location.reload();}
    });
    game.settings.register("xaura-module", "EscondeLogo", {
        name: "Esconder logo Beyond da ficha.",
        hint: "Esconder logo do módulo D&D Beyound na ficha.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => {location.reload();}
    });
}