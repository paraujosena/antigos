
var hora = prompt('informe o horario')
function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
msg.innerHTML=` Agora são ${hora} horas!`

if(hora >= 0 && hora < 12){
    //BOM DIA
    img.src='manha.jpg'
}else if (hora >= 12 && hora < 18){
    //BOA TARDE
    img.src='tarde.jpg'
}else if (hora >=18 && hora < 24){
    //BOA NOITE
    img.src='noite.jpg'
}

}