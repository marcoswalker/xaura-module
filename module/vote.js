Hooks.on("getSceneControlButtons", (controls) => {
    const bar = controls.find(c => c.name === "token");
    bar.tools.push({
      name: "Iniciar Votação",
      icon: "fas fa-vote-yea",
      title: "Iniciar Votação para todos jogadores.",
      onClick: async () => set_votation(),
      button: true
    });
});

function set_votation(event) {
    let titulos = [];
    const dialog_html = `
        <label for="titulo">Opção: </label>
        <input type="text" id="titulo" style="width: 250px;"/>
        <input type="button" id="adicionar" value="Adicionar"/>
        <ul id="lista" style="height: 400px; list-style-type: none;"></ul>
    `;
    let dialog = new Dialog({
        title: "Votação",
        content: dialog_html,
        buttons: {
            "enviar": {
                label: "Enviar",
                icon: '<i class="fas fa-check"></i>',
                callback: html => {
                    let checkeds = $("input[type='checkbox']:checked");
                    let escolha = checkeds.length > 0 ? checkeds[0].value: false;
                    const socketData = {
                        type: "vote",
                        user: game.user.name,
                        titulos: titulos,
                        escolha: escolha
                    };
                    if (escolha) {
                        ChatMessage.create({
                            user: game.user.id,
                            content: `${game.user.name} vota por: ${titulos[escolha]}`
                        });
                    }
                    game.socket.emit('module.xaura-module', socketData);
                }
            }
        },
        render: html => {
            let titulo = $(html.find("#titulo"));
            let lista = $(html.find("#lista"));
            let addOption = function () {
                lista.append(`<li><input class="check" type="checkbox" value="${titulos.length}"/>${titulo.val()}</li>`);
                titulos.push(titulo.val());
                titulo.val("");
                $(html.find('.check')).change(function (event) {
                    $(html.find('.check')).not(event.currentTarget).prop('checked', false);
                });
            }
            $(html.find("#adicionar")).click(addOption);
            $(html.find("#titulo")).on("keypress", function (event) {
                if (event.which === 13) addOption();
            }); 
        }
    }).render(true);
}

Hooks.on("ready", function () {
    game.socket.on("module.xaura-module", socketData => {
       if (socketData.type == "vote") recebeSocket(socketData);
    });
});

function recebeSocket(socketData) {
    let dialog_html = `
    <ul style="list-style-type: none; height: 400px;" id="lista"></ul>`;
    let dialog = new Dialog({
        title: `Votação iniciado por ${socketData.user}`,
        content: dialog_html,
        buttons: {
            "enviar": {
                label: "Enviar",
                icon: '<i class="fas fa-check"></i>',
                callback: html => {
                    let checkeds = $("input[type='checkbox']:checked");
                    ChatMessage.create({
                        user: game.user.id,
                        content: `${game.user.name} vota por: ${checkeds[0].value}`
                    });
                }
            }
        },
        render: html => {
            for (let titulo of socketData.titulos) {
                $(html.find("#lista")).append(`<li><input type="checkbox" class="check" value="${titulo}">${titulo}</li>`);
            }
            $(html.find('.check')).change(function (event) {
                $(html.find('.check')).not(event.currentTarget).prop('checked', false);
            });
        }
    }).render(true);
}