const interface = require('readline-sync');

//soma, subtração, divisão, multiplicação e sair
let response = "";


do{
    console.log('\033[2J');
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Divisão");
    console.log("4. Multiplicação");
    console.log("5. Sair");
    response = interface.question("Que operacao deseja realizar, escreva o numero: ");

    if(response != "5"){
        const firstNumber = interface.question("Digite o primeiro numero: ");
        const secondNumber = interface.question("Digite o segundo numero: ");

        switch(response){
            case "1":
            var result = parseInt(firstNumber) + parseInt(secondNumber);
            console.log("O resultado é: " + result);
            break;

            case "2":
            var result = parseInt(firstNumber) - parseInt(secondNumber);
            console.log("O resultado é: " + result);
            break;

            case "3":
            var result = parseInt(firstNumber) / parseInt(secondNumber);
            console.log("O resultado é: " + result);
            break;

            case "4":
            var result = parseInt(firstNumber) * parseInt(secondNumber);
            console.log("O resultado é: " + result);
            break;

                default:
                break;
        
            }

            interface.question("Aperte Enter para contínuar");
            
    }
} while(response != "5");
