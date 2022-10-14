// let palavraUm: string = ""
// palavraUm = "estudo"
// let palavraDois: string = ""
// palavraDois = "escudo"
// console.log(AnalizarPalavras(palavraUm, palavraDois))
// function AnalizarPalavras(ParametroUm: string, ParametroDois: string): boolean {
//     let resultado: boolean = false
//     let ultimoUm = ParametroUm.substring(ParametroUm.length - 3)
//     let ultimoDois = ParametroDois.substring(ParametroDois.length - 3)
//     console.log(ultimoUm, ultimoDois)
//     if (ultimoUm == ultimoDois) {
//         return resultado = true
//     } else {
//         return resultado
//     }

// }

// let palavra: string
// palavra = "Projetosprotese"
// console.log(ConverterPalavra(palavra))
// function ConverterPalavra(ParametroPalavra: string) {
//     let palavraArray: string[] = ParametroPalavra.split("")
//     let arrayFinal: string[] = []
//     palavraArray.forEach(letra => {
//         let verificacao: string[] = palavraArray.filter(x => x == letra)
//         if (verificacao.length == 1) {
//             arrayFinal.push("(")
//         } else {
//             arrayFinal.push(")")
//         }
//     })
//     return arrayFinal.join("")
// }

console.log(AnalizarNumeros(16,6))
function AnalizarNumeros(numero : number, digito : number): number{
    let contador : number = 0
    let arrayNumber : number[] = []
    for(let i = 0; i <= numero; i++){
        arrayNumber.push(i*i)
    }
    let numberString : string = arrayNumber.join("")
    for(let i = 0; i < numberString.length; i++){
        if(numberString.charAt(i) == digito.toString()){
            contador++
        }
    }
    return contador
}