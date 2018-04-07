var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0 ; i < pacientes.length ; i++) {


	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = 	paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);


	if (!pesoEhValido) {
		pesoEhValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaEhValida){
		alturaEhValida = false;
		tdImc.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
		//paciente.style.backgroundColor = "lightcoral";
	}

	if( alturaEhValida && pesoEhValido){		
		var imc = peso /( altura * altura);
		tdImc.textContent = imc.toFixed(2);

	}

	//console.log(paciente.textContent);//tr
}

function validaPeso(peso){
	if(peso >= 0 && peso <= 1000){
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura <= 3.0){
		return true;
	}else{
		return false;
	}
}

function calculaImc(peso,altura){
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}



titulo.addEventListener("click",mostraMensagem); //ao inves de mostra mensage, pode ser passada uma função anonima <function(){console.log("Olha só, anonimamente");}

function mostraMensagem(){
	console.log("Olá, eu fui clicado!");
}