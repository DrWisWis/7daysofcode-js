let acertou = false
let n = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute

for(i = 0; i < 3; i++){
    chute = prompt("Qual é o numero que eu estou pensando de 0 a 10")

    if(chute == n){
        alert(`Meus parabens! vc acertou! O numero que eu estava pensando era ${n} !`)
        acertou = true
        break
    }
    alert("Errado!")
}

if(!acertou){
    alert(`Infelizmente, vc não acertou. O numero era ${n}!`)
}