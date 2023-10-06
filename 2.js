function Eqc_Of_User() {
    const selecionarNumero = document.getElementById("UserNumber").value;
    let table = []

    for ( i = 1 ; i <= 10 ; i++) {
       const calculo = selecionarNumero * i; 
        table.push(`${i} x ${selecionarNumero} = ${calculo}`)
        let result = document.getElementById(`UserMultiplication`).innerHTML = `${table.join("<br>")}`;
    }

}
function click_limpar() {
    document.getElementById(`UserNumber`).value = ``;
    document.getElementById(`UserMultiplication`).innerHTML = ``;

}