function ListaCardapio(){
    const cardapio=new Map();
    cardapio.set("cafe",3)
    cardapio.set("chantily",1.5)
    cardapio.set("suco",6.20)
    cardapio.set("sanduiche",6.50)
    cardapio.set("queijo",2)
    cardapio.set("salgado",7.25)
    cardapio.set("combo1",9.50)
    cardapio.set("combo2",7.50)

    return cardapio
}

export {ListaCardapio}