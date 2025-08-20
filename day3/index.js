let back
let front

let area = prompt("Se quer seguir para área de Front-End ou seguir para a área de Back-End.'Escreva como esta na pergunta.'")
if(area.toLowerCase == Front-End){
    front = prompt("Vc quer aprender REACT ou VUE")
} else if (area.toLowerCase == Back-End){
    back = prompt("Vc quer aprender C# ou Java")
} else {
    alert("Você não digitou nenhuma area válida")
}

let seguir = prompt("Vc quer seguir na area ou se tornar um Full-Stack")
alert("Muito Bom, vc tera muito sucesso!")

let continuar = "ok";

while (continuar.toLowerCase() === "ok") {
    const tecnologiaExtra = prompt("Qual tecnologia você gostaria de aprender?");
    alert(`Muito bom! ${tecnologiaExtra} é uma ótima tecnologia!`);
    continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' para sim ou qualquer outra coisa para sair.");
}

alert("Parabéns pela sua jornada de aprendizado!");