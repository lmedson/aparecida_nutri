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

	var pesoEhValido = true;
	var alturaEhValida = true;


	if (peso <= 0 || peso >= 1000) {
		console.log("peso inválido");
		pesoEhValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	if (altura < 0 || altura >3.00 ){
		console.log("Altura inválida");
		alturaEhValida = false;
		tdImc.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
		//paciente.style.backgroundColor = "lightcoral";
	}

	if( alturaEhValida && pesoEhValido){		
		var imc = peso /( altura * altura);
		tdImc.textContent = imc.toFixed(2);

	}

	console.log(paciente.textContent);//tr
}



var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
	event.preventDefault(event);//utilizando preventdefault para previnir o comportamento padrão de usuários do browser, nesse caso, canelar o do formulário 	

	var form = document.querySelector("#form-adiciona");
	//pegando os dados do form e armazenando em variaveis
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;
	//criando tr
	var pacienteTr = document.createElement("tr");
	//criando tds
	var nomeTd =  document.createElement("td");
	var pesoTd =  document.createElement("td");
	var alturaTd =  document.createElement("td");
	var gorduraTd =  document.createElement("td");
	var imcTd =  document.createElement("td");
	//preenchendo tds com valores do form
	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	//adicionando os valores dentro dos trs
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	//levando o td criado para dentro da tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);


})

titulo.addEventListener("click",mostraMensagem); //ao inves de mostra mensage, pode ser passada uma função anonima <function(){console.log("Olha só, anonimamente");}

function mostraMensagem(){
	console.log("Olá, eu fui clicado!");
}