import { ListaCardapio } from "./lista-cardapio";

function validar(metodoDePagamento, itens) {
  const cardapio = ListaCardapio();

  if (!validarCarrinhoVazio(itens)) {
    return "Não há itens no carrinho de compra!";
  }

  if (!validarQuantidadeItens(itens)) {
    return "Quantidade inválida!";
  }

  if (!validarItemInvalido(itens, cardapio)) {
    return "Item inválido!";
  }

  if (!validarMetodoPagamento(metodoDePagamento)) {
    return "Forma de pagamento inválida!";
  }

  if (!validarExtras(itens)) {
    return "Item extra não pode ser pedido sem o principal";
  }

  return "";
}

function validarMetodoPagamento(metodoDePagamento) {
  if (
    metodoDePagamento === "credito" ||
    metodoDePagamento === "dinheiro" ||
    metodoDePagamento === "debito"
  )
    return true;
  else return false;
}

function validarQuantidadeItens(itens) {
  for (const item of itens) {
    const divisor = item.split(",");
    const quant = divisor[1];
    const num = parseInt(quant);
    if (num === 0) {
      return false;
    }
  }
  return true;
}

function validarCarrinhoVazio(itens) {
  if (itens.length === 0) return false;
  else return true;
}

function validarExtras(itens) {
  let [cafe, chantily, sanduiche, queijo] = [false, false, false, false];
  for (const item of itens) {
    const divisor = item.split(",");
    const itemAux = divisor[0];
    if (itemAux === "cafe") {
      cafe = true;
    } else if (itemAux === "chantily") {
      chantily = true;
    } else if (itemAux === "sanduiche") {
      sanduiche = true;
    } else if (itemAux === "queijo") {
      queijo = true;
    }
  }

  if (queijo === true && sanduiche === false) return false;
  else if (chantily === true && cafe === false) return false;
  else return true;
}

function validarItemInvalido(itens, cardapio) {
  for (const item of itens) {
    const divisor = item.split(",");
    const verificaItem = divisor[0];
    const itemAux = divisor[1];
    if (!itemAux) {
      return false;
    } else if (!cardapio.has(verificaItem)) {
      return false;
    }
  }
  return true;
}

export { validar };
