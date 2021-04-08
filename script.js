


//Funçao que ia descobrir se o Primeiro número é
//maior, menor ou igual ao Segundo Número
function discoveryNum(numberOne,numberTwo){
	var p = document.querySelector('.p-one');
	console.log("Número Escolhidos " + numberOne +" + " + numberTwo);
	
   //Valindando/Annalisando os Dois Números
	if(numberOne < numberTwo){
		p.textContent = "O 1° número que é: " + numberOne + " ,é menor que o 2° que é: " + numberTwo;
	}else if (numberOne > numberTwo){
		p.textContent = "O 1° número que é: " + numberOne + " ,é maior que o 2° que é: " + numberTwo;
	}else if(numberOne == numberTwo){
		p.textContent = "O 1° número que é: " + numberOne + " ,é igual ao 2° que é: " + numberTwo;
	}
}

//Função que vai dar a resposta para o User,
//transformando os número de String para Number
function getResult(){
	let numberOne = parseInt(document.querySelector('#putOne').value);
	let numberTwo = parseInt(document.querySelector('#putTwo').value);
	
   //Chamando a Função DiscoveryNum, para que a validação dos Números ocorra.
	discoveryNum(numberOne,numberTwo);
}

//Quando o User cliclar o botão a funçao de getResult ocorrerá e 
//aparecerá o resultado em tela
document.querySelector(".btn-fun").addEventListener("click", getResult);

// Criando uma função para abrir e fechar o modal
function openmodal(idModal){
   
   //Criando uma variável para receber o parametro da função e  
  
   const modal = document.getElementById(idModal);
//Criando um If para abir e fechar o Modal
      
   if(modal){
         //Adicionando a classe "mostrar" para Abrir o Modal
         
         modal.classList.add('mostrar');
         //Declarando que quando o Usuario cliclar no Botão "X" ou fora do modal para que
         //O modal se feche
         
         modal.addEventListener('click', (e) => {
         if(e.target.id == idModal || e.target.className == 'close' ){
         //Declarando que Quando o Usuario clicar no "X" ou fora do modal
         //A classe "mostrar" seja removida e o Modal se feche
         
         modal.classList.remove('mostrar')
         //Salvando a decisão do Usuario no LocalStorage do Navegador
         
         localStorage.closeModal = idModal;
      } 
      });
      }
}

//Criando uma varialvel para abrir o Modal quando o botão "Click me"
//For pressionado

const button = document.querySelector('.button-one');
//Declarando que quando o Usuario clicar no botão, o modal se abra

button.addEventListener('click', () => openmodal('register-modal'));

