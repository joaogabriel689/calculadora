// recebendo os elementos do html
var res = document.getElementById("res")
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


// declaraçao de variaveis globais
var num1 = null
var operador = null
var num2 = null
var resultado = null



// adicionando eventlistenes aos elementos html
soma.addEventListener('click', () => salvarnumero('+'))
subtracao.addEventListener('click', () => salvarnumero('-'))
divisao.addEventListener('click', () => salvarnumero('/'))
mutiplicacao.addEventListener('click', () => salvarnumero('*'))

//permite que seja usado o teclado numerico para calcular
document.addEventListener('keydown', function (event) {
    if (/[0-9.]/.test(event.key)) addnumber(event.key);
    if (['+', '-', '*', '/'].includes(event.key)) salvarnumero(event.key);
    if (event.key === 'Enter') calcular();
    if (event.key === 'Backspace') apagar();
});

//percorre o array da classe numeros para adicionar um eventlistener em cada elemento
for (let btn of numero) {
    btn.addEventListener('click', () => addnumber(btn.value))
}
limpa.addEventListener('click', () => limpar())
limpar_atual.addEventListener('click', () => limpar_atual())
apaga.addEventListener('click', () => apagar())
igual.addEventListener('click', () => calcular())

//trata a entrada de dados para que o usuario nao possa enviar letras
visor.addEventListener("keypress", function (event) {
    const char = event.key
    if (!/[0-9.]/.test(char)) {
        event.preventDefault()
    }
})

//inicio da sessao de funçoes
//funçao para adicionar um numero no visor
function addnumber(number) {
    //verifica se o usuario esta tentando adicionar 2 pontos no visor e caso positivo nega ao usuario
    if (number === "." && visor.value.includes(".")) {
        return
    }
    // adiciona o numero ao visor
    visor.value += number
}


// funçao para apagar(backspace)
function apagar() {
    visor.value = visor.value.slice(0, -1)
}


//funçao para limpar todos os dados e recomeçar os cauculos
function limpar() {
    visor.value = ""
    res.innerHTML = `resultado:`
    num1 = null
    num2 = null
    operador = null
}
function limpar_atual() {
    visor.value = ""
}



//funçao para salvar o numero que esta no visor
function salvarnumero(op) {
    //garante que o usuario nao consiga salvar o "vazio"
    if (visor.value === "") return;
    //verifica se é o primeiro calculo ou se esta utilizando o resultado anterior para um novo calculo 
    if (num1 === null) {
        num1 = Number(visor.value);
    } else {
        calcular();
    }
    //recebe o operador a ser utilizado e apaga os numeros do visor
    operador = op;
    visor.value = "";
}



//funçao de calculo
function calcular() {
    //garante que nenhum dos parametros estejam vazios
    if (num1 === null || visor.value === "" || operador === null) return

    //atribui o valor salvo em num1 para n1 e o valor do visor para n2
    var n1 = Number(num1)
    var n2 = Number(visor.value)


    // verifica ao operador, faz o calculo e atribui a var resultaddo
    switch (operador) {
        case '+': resultado = n1 + n2; break
        case '-': resultado = n1 - n2; break
        case '*': resultado = n1 * n2; break
        case '/':
            if (n2 === 0) {
                res.innerHTML = `nao é possivel dividir por 0`
            } else {
                resultado = n1 / n2
            }; break

    }
    //mostra o resultado e redefine os parametros
    res.innerHTML = `resultado: ${resultado}`
    visor.value = resultado
    num1 = resultado
    operador = null
}
