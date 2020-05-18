//o DOM padrão especifica que o método getElementsByTagName no código abaixo deve retornar uma lista de todos os elementos <p> no documento:

var paragraphs = document.getElementsByTagName("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);