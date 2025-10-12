// adicionando eventlistenes aos elementos html
soma.addEventListener('click', () => salvarnumero('+'))
subtracao.addEventListener('click', () => salvarnumero('-'))
divisao.addEventListener('click', () => salvarnumero('/'))
mutiplicacao.addEventListener('click', () => salvarnumero('*'))
raiz.addEventListener('click', () => salvarnumeroraiz('r'))
potencia.addEventListener('click', () => salvarnumero('^'))

porcem.addEventListener('click', () => dividir('%'))

//permite que seja usado o teclado numerico para calcular
document.addEventListener('keydown', function (event) {
    if (/[0-9.]/.test(event.key)) addnumber(event.key);
    if (['+', '-', '*', '/', '^'].includes(event.key)) salvarnumero(event.key);
    if (['%'].includes(event.key)) dividir(event.key);
    if (['r', 'R'].includes(event.key)) salvarnumeroraiz(event.key);
    if (event.key === 'Enter') calcular();
    if (event.key === 'Backspace') apagar();
});

//percorre o array da classe numeros para adicionar um eventlistener em cada elemento
for (let btn of numero) {
    btn.addEventListener('click', () => addnumber(btn.value))
}
limpa.addEventListener('click', () => limpar())
limpar_atual.addEventListener('click', () => limparatual())
apaga.addEventListener('click', () => apagar())
igual.addEventListener('click', () => calcular())
hist.addEventListener('click', () => mostrar_historico())
limpar_hist.addEventListener('click', () => limpar_historico())

//trata a entrada de dados para que o usuario nao possa enviar letras
visor.addEventListener("keypress", function (event) {
    const char = event.key
    if (!/[0-9.]/.test(char)) {
        event.preventDefault()
    }
})