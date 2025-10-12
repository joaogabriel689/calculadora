// recebendo os elementos do html
var visor = document.getElementById("tn1")
var soma = document.getElementById('somar')
var subtracao = document.getElementById('subtrair')
var mutiplicacao = document.getElementById('mutiplicar')
var divisao = document.getElementById('dividir')
var numero = document.getElementsByClassName('numeros')
var limpa = document.getElementById('limpar')
var igual = document.getElementById('calcular')
var apaga = document.getElementById('apagar')
var ponto = document.getElementById('ponto')
var limpar_atual = document.getElementById('limpar_atual')
var porcem = document.getElementById('porcem')
var potencia = document.getElementById('potencia')
var raiz = document.getElementById('raiz')
var hist = document.getElementById('hist')
var list = document.getElementById('list_hist')
var limpar_hist = document.getElementById("limpar_hist")


// declaraçao de variaveis globais
var num1 = null
var operador = null
var num2 = null
var resultado = null
var historico = JSON.parse(localStorage.getItem("historico")) || []
