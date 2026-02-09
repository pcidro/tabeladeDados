/**
 *
 * Recebe String '1.200,50 retorna number:1200.50
 *
 */
export default function moedaParaNumero(moeda) {
    const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
    if (isNaN(numero)) {
        return null;
    }
    else {
        return numero;
    }
}
