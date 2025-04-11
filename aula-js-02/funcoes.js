function SomaSimples (){
    return 3 + 4
}

console.log(SomaSimples())

function SomaComParametros(n1, n2){
    return n1 + n2
}

console.log(SomaComParametros(4, 4))
console.log(SomaComParametros(10, 4))

//Função Anonima ou Arrouw Function
const Potencia = (n, e) => {
    console.log(`${n} elevado a ${e} é ${Math.pow(n, e)}`)
}
Potencia(3,2)

// Função que calcule a média do aluno e exiba o resultado
// media >= 6,00 = Aprovado
// media >= 4,00 || < 6,00 = Recuperação
// media < 4,00 = Reprovado



const ResultadoMedia = (n1, n2, n3, n4) =>{
    let Media= (n1 + n2 + n3 + n4) / 4

    if (Media >= 6) {
        return "Aprovado"
    } else if (Media >= 4) {
        return "recuperação"
    } else 
    return "reprovado"

}
console.log (ResultadoMedia(3,5,8,7))



