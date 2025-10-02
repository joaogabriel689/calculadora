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
        
        var num1 = null
        var operador = null
        var num2 = null
        var resultado = null

        soma.addEventListener('click', () => salvarnumero('+'))
        subtracao.addEventListener('click', () => salvarnumero('-'))
        divisao.addEventListener('click', () => salvarnumero('/'))
        mutiplicacao.addEventListener('click', () => salvarnumero('*'))
        for (let btn of numero) {
            btn.addEventListener('click', () => addnumber(btn.value))
        }
        limpa.addEventListener('click', () => limpar())
        apaga.addEventListener('click', () => apagar())
        igual.addEventListener('click', () => calcular())

       function addnumber(number){
        visor.value += number
        
       }
        function apagar(){
            visor.value = visor.value.slice(0, -1)
        }

       function limpar(){
        visor.value = ""
        res.innerHTML = `resutado:`
        num1 = null
        num2 = null
        operador = null
       }
       function salvarnumero(op){
            if (num1 ===null ){
               num1 = visor.value 
            }
            operador = op
            visor.value = ""
       }
        function calcular(){
            var n1 = Number(num1)
            var n2 = Number(visor.value)  
            if (operador==='-'){
                resultado = n1 - n2
            }
            if (operador==='+'){
                resultado = n1 + n2

            }
            if (operador==='*'){
                resultado = n1 * n2
            }
            if (operador==='/'){
                if (n2===0){
                    res.innerHTML = `nao é possivel dividir por zero`
                    return
                }else{
                    resultado = n1 / n2
                }
            }
            res.innerHTML = `resltado: ${resultado}`
            visor.value = resultado
            num1 = resultado
        }