function click_calcular() {
    let ValorA = Number(document.getElementById('ValorA').value);
    const mult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    document.getElementById('resposta').innerHTML = '';
    for (const tabuada of mult) {
        if (tabuada) {
            document.getElementById('resposta').innerHTML += `A tabuada é ${tabuada * ValorA} </br>`;
        }
    }
}
function click_limpar() {
    document.getElementById(`ValorA`).value = ``;
    document.getElementById(`resposta`).innerHTML = ``;

}