var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

//criando funções


function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2); 
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <=3){
        return true;
    }
    else{
        return false;
    }
}


//Notas

//O Javascript possuí dois tipos de funções, as funções anônimas e as funções nomeadas.

//As funções nomeadas, como o próprio nome diz, são as funções que levam um nome em sua criação e que podem ser invocadas posteriormente, como a função mostraMensagem:

//function mostraMensagem(){
    //console.log("Fui clicado");
//}

//Já as funções anônimas, são funções que não tem nome e só são chamadas no contexto aonde foram declaradas. Elas são muito usadas em conjunto com a função addEventListener(), onde normalmente a ação que desejamos chamar só deve ser chamada naquele local.

//titulo.addEventListener("click", function(){
   // console.log("Fui clicado");
//});