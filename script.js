var palavraUm = "";
palavraUm = "estudo";
var palavraDois = "";
palavraDois = "escudo";
console.log(AnalizarPalavras(palavraUm, palavraDois));
function AnalizarPalavras(ParametroUm, ParametroDois) {
    var resultado = false;
    var ultimoUm = ParametroUm.substring(ParametroUm.length - 3);
    var ultimoDois = ParametroDois.substring(ParametroDois.length - 3);
    console.log(ultimoUm, ultimoDois);
    if (ultimoUm == ultimoDois) {
        return resultado = true;
    }
    else {
        return resultado;
    }
}
