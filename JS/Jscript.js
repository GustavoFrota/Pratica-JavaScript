alert("-----Sistema de Notas-----")
let instituição = prompt("Digite o nome da Escola: ")
let Nome = prompt("Digite o primeiro nome do estudante: ") 
let Sobrenome = prompt("Digite o sobrenome do estudante: ") 
alert(`Bem-vindo(a) ${Nome} ${Sobrenome} ao Sistema de Notas da escola ${instituição}`)

let nota1 = prompt("Digite a nota de português: ")
nota1 = Number(nota1)
let nota2 = prompt("Digite a nota de inglês: ")
nota2 = Number(nota2)
let nota3 = prompt("Digite a nota de matemática: ")
nota3 = Number(nota3)
let nota4 = prompt("Digite a nota de filosofia: ")
nota4 = Number(nota4)
let nota5 = prompt("Digite a nota de redação: ")
nota5 = Number(nota5)
let nota6 = prompt("Digite a nota de sociologia: ")
nota6 = Number(nota6)
let nota7 = prompt("Digite a nota de geografia: ")
nota7 = Number(nota7)
let nota8 = prompt("Digite a nota de química: ")
nota8 = Number(nota8)
let nota9 = prompt("Digite a nota de física: ")
nota9 = Number(nota9)
let nota10 = prompt("Digite a nota de biologia: ")
nota10 = Number(nota10)
let nota11 = prompt("digite a nota de artes: ")
nota11 = Number(nota11)
let nota12 = prompt("Digite a nota de educaão física: ")
nota12 = Number(nota12)

if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5) || isNaN(nota6) || isNaN(nota7) || isNaN(nota8) || isNaN(nota9) || isNaN(nota10) || isNaN(nota11) || isNaN(nota12)) {
  alert("Por favor, digite apenas números válidos")  
} else {
let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10 + nota11 + nota12) / 12
let media_formatada = media.toFixed(1)
alert(`A média de ${Nome} foi ${media_formatada}`) 

switch(true) {
    case(media > 10):
     alert("Média acima de 10. Tente novamente")
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
}