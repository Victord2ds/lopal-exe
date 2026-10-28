// alert('Captive Portal da Padaria');

// const PASSWORD = 'pao123';
// let attempts = 0;

// while (attempts < 3) {
//     let enter_password = prompt("Digite a senha para acessar a rede Wi-Fi:");

//     if (enter_password === PASSWORD) {
//         alert("Conectado, bom café!");
//         break;
//     } else {
//         alert("Senha incorreta! ;@");
//     }

//     if (attempts === 2) {
//         alert("bloqueado!");
//     }

//     attempts++;
// }

// alert ("contagem ano novo!");
// let attempts = 10;
// while (attempts > 0) {
//     alert(attempts);

//     attempts--;
// }

// alert ("Feliz Ano Novo!");

alert ("Cofrinho do pedro");

let total = 0;
let semanas = 0;
const meta = 300;

while (total < meta) {
    let ganho = Number(prompt("Digite o valor da semana:"));
    if (ganho <= 0) {
        alert("Valor inválido!");
    } else {
        total += ganho;
        semanas++;

        if (total < meta) {
            alert("ainda faltam R$" + (meta - total) + " para atingir a meta.");
        }
    }
    alert("Você consegue comprar a bicicleta.");
}