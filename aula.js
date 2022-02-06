console.log('%c Hello World ','color:hsl(240, 100%, 90%);background-color:hsl(240, 100%, 50%);');
console.log("-".repeat(589))

console.log("IF .. Else")

console.log("-".repeat(589))

var data = new Date();
var hora = data.getHours();
var min     = data.getMinutes();
console.log(hora + " horas");
console.log(min + " minutos");

if (hora > 6 && hora < 12){
    console.log("Bom dia");
    }
    else if (hora > 12 && hora < 18){
        console.log("Boa tarde");
    }
    else {
        console.log("boa noite")
    }








