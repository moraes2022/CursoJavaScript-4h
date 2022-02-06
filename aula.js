console.log('%c Hello World ','color:hsl(240, 100%, 90%);background-color:hsl(240, 100%, 50%);');
console.log("-".repeat(589))

console.log("Treinamento 6 - Functions")

console.log("-".repeat(589))
console.log("//Verbo + substantivo")
let corSite = "Azul";
function resetaCor(){
    corSite = " "
}
console.log("let corSite = " + corSite)
console.log("function resetaCor(){");
console.log("corSite = '' ");
console.log("}");
console.log(corSite);
resetaCor()
console.log(corSite + "sem cor")

    /*let corSite = "azul";
    function resetaCor(cor, tonalidade){
        corSite = cor + tonalidade;
}
console.log(corSite);
resetaCor("verde", " claro");
console.log(corSite);
*/

console.log("exercicio proposto")
function somar(a, b){
return a + b
}
console.log(somar);
console.log("a=1.4, b=10*3")
console.log("a+b = " + somar(1.4, 10*3))

