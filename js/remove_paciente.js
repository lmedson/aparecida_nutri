//OBS.: um evento funciona subindo da tag filha mais profunda até a tag colocada na função

var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	//var alvoEvento = event.target;
	//var paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover
	//paiDoAlvo.remove()	;
	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function(){
		event.target.parentNode.remove();
	},500);

});








//pacientes.forEach(function(paciente){
//	paciente.addEventListener("dblclick", function(){
//		console.log("teste");
//		this.remove();
//	});
//});
