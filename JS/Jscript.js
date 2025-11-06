alert("Olá")
let Nome = prompt("Digite o seu primeiro nome")
let Sobrenome = prompt("Digite o seu sobrenome") 
alert(`Olá, me chamo ${Nome} ${Sobrenome} !`)

let nota1 = prompt("Digite a primeira nota: ")
nota1 = Number(nota1)
let nota2 = prompt("Digite a segunda nota: ")
nota2 = Number(nota2)
let nota3 = prompt("Digite a terceira nota: ")
nota3 = Number(nota3)
let nota4 = prompt("Digite a quarta nota: ")
nota4 = Number(nota4)
let media = (nota1 + nota2 + nota3 + nota4) / 4
alert(`A média de ${Nome} foi ${media}`)

if(media >= 6) {
    alert("Parabéns você foi aprovado!")
} else {
    alert("Sinto muito você foi reprovado, estude mais")
}