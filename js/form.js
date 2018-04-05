var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
	event.preventDefault();//utilizando preventdefault para previnir o comportamento padrão de usuários do browser, nesse caso, canelar o do formulário 	

	var form = document.querySelector("#form-adiciona");

	// Extraindo informações do paciente no form
	var paciente = obtemPacienteDoFormulario(form);
	console.log(paciente);
	//Cria Tr e Tds

	var pacienteTr = montaTr(paciente);

	//Adicionando paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

	form.reset();

})

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