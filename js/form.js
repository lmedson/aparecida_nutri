var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
	event.preventDefault();//utilizando preventdefault para previnir o comportamento padrão de usuários do browser, nesse caso, canelar o do formulário 	

	var form = document.querySelector("#form-adiciona");

	// Extraindo informações do paciente no form
	var paciente = obtemPacienteDoFormulario(form);
	console.log(paciente);
	//Cria Tr e Tds
	var pacienteTr = montaTr(paciente);

	var erros = validaPaciente(paciente);
	console.log(erros);
	if(erros.length > 0){
		exibeMensagensDeErro(erros);

		return;
	}

	if(!validaPaciente(paciente)){
		console.log("Paciente Inválido");
		return;
	}
	//Adicionando paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

	form.reset();
	var mensagemsErro = document.querySelector("#mensagens-erro");
	mensagemsErro.innerHTML = "";

})

function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function obtemPacienteDoFormulario(form) {

    var paciente = {	
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	//var nomeTd = montaTd(paciente.nome, "info-nome");
	//var pesoTd = montaTd(paciente.peso, "info-peso");
	//var alturaTd = montaTd(paciente.altura, "info-altura");
	//var gorduraTd = montaTd(paciente.gordura, "info-gordura");
	//var imcTd = montaTd(paciente.imc, "info-imc");

	//adicionando os valores dentro dos trs
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr; 
}

function montaTd(dado,classe){
	var td = document.querySelector("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validaPaciente(paciente){

	var erros = [];

	if( paciente.nome.length == 0){
		erros.push("O nome nao pode ser em branco");
	}
	if(!validaPeso(paciente.peso)){
		erros.push("Peso é inválido");
	}

	if(!validaAltura(paciente.altura)){
		erros.push("Altura é inválda");
	}

	if(paciente.gordura.length == 0){
		erros.push("A gordura não pode ser em branco");
	}

	if(paciente.altura.length == 0){
		erros.push("A altura não pode ser em branco");
	}

	if(paciente.peso.length == 0){
		erros.push("O peso não pode ser em branco");
	}

	return erros;
}