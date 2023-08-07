const form = document.getElementById('form_input');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputName = document.getElementById('name');
    const inputTel = document.getElementById('tel');

    let linha = '<tr>';
    linha += `<td>${inputName.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpTabel = document.querySelector('tbody');
    corpTabel.innerHTML = linhas;

    inputName.value = '';
    inputTel.value = '';
})