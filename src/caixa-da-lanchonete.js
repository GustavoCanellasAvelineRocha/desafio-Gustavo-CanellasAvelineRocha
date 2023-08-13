import { validar } from "./validar";
import { calcular } from "./calcular";

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    const valido = validar(metodoDePagamento, itens);
    if (valido != "") {
      return valido;
    }

    return calcular(metodoDePagamento, itens);
  }
}

export { CaixaDaLanchonete };
