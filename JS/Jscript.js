alert("Sistema de Notas")
let Nome = prompt("Digite o primeiro nome do estudante") 
let Sobrenome = prompt("Digite o sobrenome do estudante") 
alert(`Bem-vindo(a) ${Nome} ${Sobrenome} ao Sistema de Notas`)

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

switch(true) {
    case(media > 10):
     alert("Média acima de 10, tente novamente")
    break;
    case(media == 10):
     alert(`Exelente! Continue assim ${Nome}.`)
     break;
    case(media >= 7):
     alert("Aprovado")
     break;
    case(media >= 5):
     alert("Recuperação")
     break;
    default:
        alert("Reprovado")
        break;
}