let palavraUm: string = ""
palavraUm = "estudo"
let palavraDois: string = ""
palavraDois = "escudo"
console.log(AnalizarPalavras(palavraUm, palavraDois))
function AnalizarPalavras(ParametroUm: string, ParametroDois: string): boolean {
    let resultado: boolean = false
    let ultimoUm = ParametroUm.substring(ParametroUm.length - 3)
    let ultimoDois = ParametroDois.substring(ParametroDois.length - 3)
    console.log(ultimoUm, ultimoDois)
    if (ultimoUm == ultimoDois) {
        return resultado = true
    } else {
        return resultado
    }

}
