function agir () {
let instituição = document.getElementById("escola").value
let Nome = document.getElementById("nome").value
let Sobrenome = document.getElementById("sobrenome").value
let serie = document.getElementById("serie").value



let nota1 = document.getElementById("nota1").value
let nota2 = document.getElementById("nota2").value
let nota3 = document.getElementById("nota3").value
let nota4 = document.getElementById("nota4").value
let nota5 = document.getElementById("nota5").value
let nota6 = document.getElementById("nota6").value
let nota7 = document.getElementById("nota7").value
let nota8 = document.getElementById("nota8").value
let nota9 = document.getElementById("nota9").value
let nota10 = document.getElementById("nota10").value
let nota11 = document.getElementById("nota11").value
let nota12 = document.getElementById("nota12").value

if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5) || isNaN(nota6) || isNaN(nota7) || isNaN(nota8) || isNaN(nota9) || isNaN(nota10) || isNaN(nota11) || isNaN(nota12)) {
document.getElementById("resultado").innerHTML = " Preencha todas as notas."
}

const media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10 + nota11 + nota12) / 12
let situacao = " "
if (media >= 7) {
  situacao = " Aprovado"
} else if (media >=5) {
  situacao = " Recuperação"
} else {
  situacao = " reprovado"
}
document.getElementById("resultado").innerHTML = `A situação de ${Nome} ${Sobrenome} da série ${serie} é ${situacao}`
}
