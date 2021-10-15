Hooks.on("renderActorSheet", function (sheet, html, character) {
    if (character.actor.type !== "character") return;
    let inventory = html.find('.inventory .inventory-list .item-list');
    $(inventory).each(function (index, inv) {
        let item = $(inv).find('.item');
        item.each(function (n, i) {
            let toggle = $(i).find('.item-controls .item-toggle');
            $('<a style="margin-left:5px;" class="tradePertence" title="Mandar para amigo" data-actor-id="'+ character.actor._id +'" data-item-id="'+ $(i).data('itemId') +'"><i class="fas fa-handshake"></i></a>').insertBefore(toggle);
        });
    });
    html.find(".tradePertence").click(mandaPertence.bind(this));
});

Hooks.on("ready", function () {
    game.socket.on('module.xaura-module', tradeData => {
        recebeSocket(tradeData);
    });
});

function recebeSocket(tradeData) {
    if (game.user.character === null) return;
    const targetActor = game.actors.get(tradeData.targetActor);
    if (game.user.character !== targetActor) return;
    const actor = game.actors.get(tradeData.currentActor);
    let itemquevai = tradeData.itemc;
    itemquevai.data.quantity = tradeData.quant;
    targetActor.createEmbeddedDocuments("Item", [itemquevai]);//targetActor.createOwnedItem(itemquevai);
    const chatData = {
        user: game.user.id,
        speaker: ChatMessage.getSpeaker({
            actor: game.user.character
        })
    };
    chatData.content = "<p><img src='"+ actor.img +"' style='float: left; margin-left: auto; margin-right: auto; width: 40%;border: 0px;' /><img src='modules/xaura-module/assets/pause.png' style='float: left;margin-top:25px; margin-left: auto; margin-right: auto; width: 20%;border: 0px;'/><img src='"+ targetActor.img +"' style='float: left; width: 40%; margin-left: auto; margin-right: auto;border: 0px;' /></p><p class='rola_desc' style='display: block;margin-left:auto;margin-right:auto;margin-top:60%;'>"+ "<b>" + actor.data.name + "</b> acaba de presentear <b>"+ targetActor.data.name +"</b> com <b>"+ String(tradeData.quant) +"</b> <b>"+ itemquevai.name +"</b>." +"</p>";
    ChatMessage.create(chatData);
    ui.notifications.info("Você acaba de receber " + tradeData.quant + " " + itemquevai.name + " de " + actor.data.name);
}

function mandaPertence (event) {
    const currentActor = $(event.currentTarget).data("actorId");
    const itemId = $(event.currentTarget).data("itemId");
    const actor = game.actors.get(currentActor);
    const item =  actor.data.items.get(itemId);
    const items = item.clone();
    const users = game.users;

    let dialog = new Dialog({
        title: "Enviar item para jogador",
        content: "<div><label style='margin-right:10px;' class='mediaeval'>Quantidade:</label><input class='quant' type='number' id='quantPert' style='width:40px;'/><label style='margin-right:10px;margin-left:10px;' class='mediaeval'>Jogador:</label><select id='userSelectx' class='users_names'></select></div>",
        buttons: {
            sim : {
                icon: '<i class="fas fa-check"></i>',
                label: "Enviar",
                callback: () => {
                    let quant = parseInt($('.quant').val());
                    const user = game.users.get($('.users_names').val());
                    if (quant > 0 && user !== null) {
                        if (quant > item.data.data.quantity){
                            ui.notifications.warn("Você não pode enviar mais itens que você tem!");
                        } else if (quant == items.data.data.quantity) {
                            const tradeData = {
                                itemc: items.data,
                                currentActor: currentActor,
                                targetActor: user.character.id,
                                quant: quant
                            };
                            game.socket.emit('module.xaura-module', tradeData);
                            actor.deleteEmbeddedDocuments("Item", [itemId]);//actor.deleteOwnedItem(itemId);
                        } else {
                            const tradeData = {
                                itemc: items.data,
                                currentActor: currentActor,
                                targetActor: user.character.id,
                                quant: quant
                            };
                            game.socket.emit('module.xaura-module', tradeData);
                            actor.updateEmbeddedDocuments("Item", [{'_id': item._id, 'data.quantity': items.data.data.quantity - quant}])
                        }
                    } else if (user === null) {
                        ui.notifications.warn("Tem que ter outro jogador online!");
                    } else ui.notifications.warn("Escolha um valor maior que zero!");
                }
            },
            nao : {
                icon: '<i class="fas fa-times"></i>',
                label: "Cancelar",
                callback: () => {}
            }
        },
        default: "nao",
        render: html => {
            for (let user of users) {
                if (user.active && user.character !== null && user !== game.user && !user.isGM) $('.users_names').append("<option value='"+user.id+"'>"+user.data.name+"</option>");
            }
        },
    });
    dialog.render(true);
}