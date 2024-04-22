function validarFormulario() {
    var valorA = parseInt(document.getElementById('A').value);
    var valorB = parseInt(document.getElementById('B').value);

    if (valorB <= valorA) {
        alert("O número B deve ser maior que o número A.");
        return false;
    } else {
        alert("O número B é maior que o número A. Formulário válido!");
        return true;
    }
}