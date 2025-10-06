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

function dividir(op){
    visor.value = visor.value/100

}


// funçao para apagar(backspace)
function apagar() {
    visor.value = visor.value.slice(0, -1)
}


//funçao para limpar todos os dados e recomeçar os cauculos
function limpar() {
    visor.value = ""
    num1 = null
    num2 = null
    operador = null
}

//apagar apenas o numero que esta no visor
function limparatual() {
    visor.value = ""
}

function salvarnumeroraiz(op){
    resultado = (Number(visor.value)**(1/2))
    var numerovisor = visor.value
    historico.push(`${n1} ${operador} ${n2}= ${resultado}`)
    visor.value = resultado
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

function mostrar_historico(){
    var list = document.getElementById('list_hist')
    list.innerHTML = historico.map(item => `<p>${item}</p>`).join("")
}

function limpar_historico(){
    localStorage.removeItem("historico")
    historico = []
    mostrar_historico()
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
        case '^': resultado = n1 ** n2; break
        case 'r': resultado = (n1 ** (1/2)); break

    }
    
    historico.push(`${n1} ${operador} ${n2}= ${resultado}`)
    //mostra o resultado e redefine os parametros
    visor.value = resultado
    num1 = resultado
    operador = null

    localStorage.setItem("historico", JSON.stringify(historico))
    mostrar_historico()
}
