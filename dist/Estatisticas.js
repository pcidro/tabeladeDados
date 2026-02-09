import countyBy from "./countBy.js";
function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    pagamento;
    status;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
    }
    setTotal() {
        return this.transacoes
            .filter(filtrarValor)
            .reduce((acc, item) => acc + item.valor, 0);
    }
    setPagamento() {
        const pagamentos = this.transacoes.map((transacao) => transacao.pagamento);
        const total = countyBy(pagamentos);
        return total;
    }
    setStatus() {
        const status = this.transacoes.map((statuscompra) => statuscompra.status);
        const total = countyBy(status);
        return total;
    }
}
