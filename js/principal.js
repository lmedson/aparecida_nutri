var titulo = document.querySelector(".titulo");//boa prática, não buscar pela tag, e sim pela id ou classe
			console.log(titulo);
			console.log(titulo.textContent);//textcontent permite ter acesso a variável de titulo 
			console.log("fui carregado de fora");
			titulo.textContent = "Aparecida Nutricionista"; //

			console.log(document.querySelector("#tabela-pacientes").textContent);