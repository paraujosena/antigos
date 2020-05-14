      /*PODE SER SÓ ALERT*/
      //window.alert('PRIMEIRA MENSAGEM')
      //window.confirm('Curtindo a experiencia?')

      var n1 = Number(window.prompt('digite um numero'))
      var n2 = Number(window.prompt('digite outro numero'))
      // podiamos usar parseInt, parseFloar, ou Number.parseInt e Number.parseFloar
      // com string usamos o String(var) ou var,toString()
      var soma = n1+n2;
            
      alert('a soma dos numeros é ' + soma + '!')
      alert(`a soma entre ${n1} e ${n2} é ${soma}`)
      /*
  > var nome = 'pedro'
undefined
> var idade = 25
undefined
> var nota = 10
undefined
> `o aluno ${nome} de ${idade} anos tirou a nota ${nota}`
'o aluno pedro de 25 anos tirou a nota 10'
      */