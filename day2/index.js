const name = prompt("Qual o seu nome?")
const age = prompt("Quantos anos vc tem?")
const ling_prop = prompt("Qual linguagem de programação vc esta estudanto?")

console.log(`Olá ${name}, você tem ${age} anos e já está aprendendo ${ling_prop}  `)

let n = prompt(`Você gosta de estudar ${ling_prop}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (n == 1) {
    console.log("Muito bom! Continue estudando e você terá muito sucesso.")
} else {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?")
}