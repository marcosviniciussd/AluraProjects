
var peso = 100;
var altura = 2;

var DiferenteZero = (altura =! 0);

if(DiferenteZero)
{
    var imc = peso / (altura * altura);
    console.log(imc);
}
else
{
    console.log("Informações Incorretas");
}
