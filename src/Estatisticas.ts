import countyBy from "./countBy.js";

type TransacaoValor = Transacao & {
  valor: number;
};

function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes: Transacao[];
  total;
  pagamento;
  status;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
  }

  private setTotal() {
    return this.transacoes
      .filter(filtrarValor)
      .reduce((acc, item) => acc + item.valor, 0);
  }

  private setPagamento() {
    const pagamentos = this.transacoes.map((transacao) => transacao.pagamento);

    const total = countyBy(pagamentos);
    return total;
  }

  private setStatus() {
    const status = this.transacoes.map((statuscompra) => statuscompra.status);

    const total = countyBy(status);
    return total;
  }
}
