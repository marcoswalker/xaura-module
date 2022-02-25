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
        <input type="button" id="enviar" value="Enviar Pesquisa" style="width: 100%;"/>
    `;
    let dialog = new Dialog({
        title: "Votação",
        content: dialog_html,
        buttons: {},
        render: html => {
            let titulo = $(html.find("#titulo"));
            let lista = $(html.find("#lista"));
            $(html.find("#adicionar")).click(function () {
                lista.append(`<li><input class="check" type="checkbox" value="${titulos.length}"/>${titulo.val()}</li>`);
                titulos.push(titulo.val());
                titulo.val("");
                $(html.find('.check')).change(function (event) {
                    $(html.find('.check')).not(event.currentTarget).prop('checked', false);
                });
            }); 
            $(html.find("#enviar")).click(function () {
                let checkeds = $("input[type='checkbox']:checked");
                let escolha = checkeds.length > 0 ? checkeds[0].value: false;
                const socketData = {
                    type: "vote",
                    user: game.user.name,
                    titulos: titulos,
                    escolha: escolha
                };
                console.log(socketData);
                game.socket.emit('module.xaura-module', socketData);
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
    console.log(socketData);
}