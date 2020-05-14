var nome = prompt('Digite seu nome')
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.</br>`)
document.write(`Seu nome com maiusculas: ${nome.toUpperCase()}, com minusculas: ${nome.toLowerCase()}.</br>`)
//numero com casa decimal var.toFixed(qtd)
// trocar caracteres .replace('.',',')
/*
    > a.toFixed(2)
    '1945.70'
    > a.toFixed(2).replace('.',',')
    '1945,70'
    a.toLoca
    > a.toLocaleString('pt-br',{style:'currency', currency:'BRL'}) 
    'R$ 1,945.70'
*/