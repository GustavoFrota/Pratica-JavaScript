alert("Olá")
let Atual = prompt("Digite o ano atual: ")
Atual = Number(Atual)
let Anterior = prompt("Digite o ano em que você nasceu: ")
Anterior = Number(Anterior)
let Idade = Atual - Anterior
alert(`Você tem ${Idade} anos!`)
if(Idade >= 18) {
    alert("Você é adulto.")
}
else {
    alert("Você é uma criança.")
}