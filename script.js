const nome = []
const telefone = []

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();


    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';


    const table = document.getElementById('contactTable');
    const newRow = table.insertRow(-1);


    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);

    nameCell.textContent = name;
    phoneCell.textContent = phone;

    if (nome.includes(name.value)) {
        alert(`O nome: ${nameCell.value} já foi inserido!`)
        alert(`O telefone: ${phoneCell.value} já foi inserido!`)
    } else {
        nome.push(name.value)
        telefone.push(parseFloat(phone.value))

    }
});