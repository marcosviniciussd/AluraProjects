
var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var paciente2 = {"peso" : peso2, "altura" : altura2};

var tdAltura = document.getElementById("altura-1");
var tdPeso = document.getElementById("peso-1");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var paciente1 = {"peso" : peso1, "altura": altura1};

var pacientes = [paciente1, paciente2];

var primeiro = pacientes[0];
var segundo = pacientes[1];

var posicaoAtual = 0;
while(posicaoAtual <= pacientes.length -1)
{
    var paciente = pacientes[posicaoAtual];

    if(paciente.altura != 0)
    {   
        var imc = paciente.peso / (paciente.altura * paciente.altura);
        var tdImc = document.getElementById("imc-2");
        tdImc.textContent = imc;
    }
    else
    {
        console.log("Informações Incorretas, Valores Incorretos...");
    }

    posicaoAtual++;
}


