import Estatisticas from "./Estatisticas.js";
import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";
import { formatarDataExtenso } from "./stringToDate.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    displayTable(transacoes);
    preencherEstatisticas(transacoes);
}
handleData();
function preencherEstatisticas(transacoes) {
    const data = new Estatisticas(transacoes);
    const totalElement = document.querySelector("#total");
    if (totalElement) {
        totalElement.innerText =
            "Total:" +
                data.total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                });
    }
    const pagamentoElement = document.getElementById("pagamento");
    if (pagamentoElement) {
        Object.keys(data.pagamento).forEach((chave) => {
            pagamentoElement.innerHTML += `<p>${chave}:${data.pagamento[chave]}</p>`;
        });
        console.log;
    }
    const StatusElement = document.getElementById("status");
    if (StatusElement) {
        Object.keys(data.status).forEach((chave) => {
            StatusElement.innerHTML += `<p>${chave}:${data.status[chave]}</p>`;
        });
    }
}
function displayTable(transacoes) {
    const tabela = document.querySelector("#transacoes tbody");
    if (!tabela)
        return;
    transacoes.forEach((transacao) => {
        tabela.innerHTML += `
<tr>
<td>${transacao.nome}</td>
<td>${transacao.email}</td>
<td>R$ ${transacao.moeda}</td>
<td>${transacao.pagamento}</td>
<td>${transacao.status}</td>
<td>${formatarDataExtenso(transacao.data)}</td>
</tr>

`;
    });
}
