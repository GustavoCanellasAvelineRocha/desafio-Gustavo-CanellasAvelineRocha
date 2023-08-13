import {ListaCardapio} from "./lista-cardapio";

function calcular(metodoDePagamento,itens){
    const cardapio = ListaCardapio();

    let resultado

    if(metodoDePagamento === "dinheiro"){
        resultado = calcularDinheiro(itens,cardapio)
    } else if(metodoDePagamento === "credito"){
        resultado =calcularCredito(itens,cardapio)
    } else resultado = calcularDebito(itens,cardapio)

    return formatar(resultado);
}

function calcularDebito(itens,cardapio){
    let total = 0
    for (const pedido of itens) {
        const divisor = pedido.split(",")
        const nome = divisor[0]
        const custoItem = cardapio.get(nome)
        const quant = divisor[1]
        const quantItem = parseInt(quant)
        const custoTotalItem = custoItem*quantItem;
        total += custoTotalItem;
    }
    return total
}

function calcularCredito(itens,cardapio){
    let total = 0
    for (const pedido of itens) {
        const divisor = pedido.split(",")
        const nome = divisor[0]
        const custoItem = cardapio.get(nome)
        const quant = divisor[1]
        const quantItem = parseInt(quant)
        const custoTotalItem = custoItem*quantItem;
        total += custoTotalItem;
    }
    return total + (total * 0.03)
}

function calcularDinheiro(itens,cardapio){
    let total = 0
    for (const pedido of itens) {
        const divisor = pedido.split(",")
        const nome = divisor[0]
        const custoItem = cardapio.get(nome)
        const quant = divisor[1]
        const quantItem = parseInt(quant)
        const custoTotalItem = custoItem*quantItem;
        total += custoTotalItem;
    }
    return  total - (total * 0.05)
}

function formatar(resultado){
    return "R$ " + resultado.toFixed(2).replace(".",",")
}

export {calcular}