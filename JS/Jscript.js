alert("Olá")
let dia_aniversario = prompt("Digite o dia do seu aniversário: ")
dia_aniversario = Number(dia_aniversario)
let mes_aniversario = prompt("Digite o mês do seu aniversário: ")
mes_aniversario = Number(mes_aniversario)
let festa

if(isNaN(dia_aniversario) || isNaN(mes_aniversario)) {
  alert("Por favor digite apenas números")
} else {
 festa = [dia_aniversario, mes_aniversario] }

let dia = prompt("Digite o dia: ")
dia = Number(dia)
let mes = prompt("Digite o mês: ")
mes = Number(mes)

if(isNaN(dia) || isNaN(mes)) {
  alert("Por favor digite apenas números")
} else {
let surpresa = [dia, mes] 

if(festa[0] === surpresa[0] && festa[1] === surpresa[1]) {
  alert("Feliz aniversário!")
} else {
  alert("Hoje não é seu aniversário")
} }