import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";
import { formatarDataExtenso } from "./stringToDate.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    displayTable(transacoes);
}
handleData();
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
