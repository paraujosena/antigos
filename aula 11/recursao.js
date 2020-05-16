
//let nlet = [1,2,3] assim não pode

//um array pode ser um objeto, cada posição do array pode ser outro objeto.
var pessoa = { firstName: "pedro", lastName: "sena", yOld: 25, dateBorn: "07-04-1994" }
var nvar = [1, 2, 3]
var svar = ['pedro', "sena"]
var arrayInfinito = []

//imprimindo os valores contidos no array
console.log(nvar, svar)

// imprimindo o tamanho de cada array
console.log(`o tamanho do vetor de numeros é ${nvar.lenght} e o tamanho do vetor de nomes é ${svar.lenght}`)

//imprimir valor selecionado dentro do array
console.log(nvar[0], svar[0])

//descobrindo se tem alguma posição com o valor informado dentro do array. Caso não exista, retorna -1
console.log(nvar.indexOf(2))

/*
//fatorial por recursividade

function fat(v){
    if (v == 1){
      return 1
    } else {
      return v*=fat(v-1)
  }
}

*/