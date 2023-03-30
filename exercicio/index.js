function verificar(nome, anoNascimento) {
    let idade = 2023 - anoNascimento
     let retornaFuncao = verificarfuncao(nome, idade)
     console.log(retornaFuncao)
    //verificarfuncao(nome, idade)
}

// function verificarIdade(nome, idadePessoal) {
//     if (idadePessoal >= 18) {
//         return `Ola ${nome} sua idade: ${idadePessoal} vc e maior de Idade`
//     } else {
//         return `Ola ${nome} sua idade: ${idadePessoal} vc e menor de Idade`
//     }
// }

const verificarfuncao = (nome, idadePessoal) => {
    if (idadePessoal >= 18) {
        return `Ola ${nome} sua idade: ${idadePessoal} vc e maior de Idade`
    } else {
        return `Ola ${nome} sua idade: ${idadePessoal} vc e menor de Idade`
    }
}



function imprimir() {
    verificar('henrique', 1988)
}

imprimir()