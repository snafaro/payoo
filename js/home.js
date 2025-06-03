
document.getElementById('add-btn').addEventListener('click', e => {
    e.preventDefault();
    const pin = document.getElementById('pin').value;
    const amount = parseFloat(document.getElementById('cash-in').value);
    const balance = parseFloat(document.getElementById('balance').innerText);
    if(pin === "1234"){
        const updateBalance = balance + amount;
        document.getElementById('balance').innerText = updateBalance;
    }
    else{
        alert('Invalid Pin Number');
    }
});

document.getElementById('withdraw-btn').addEventListener('click', e => {
    e.preventDefault();
    const pin = document.getElementById('pinTwo').value;
    const amount = parseFloat(document.getElementById('cash-out').value);
    const balance = parseFloat(document.getElementById('balance').innerText);
    if(pin === "1234"){
        const updateBalance = balance - amount;
        document.getElementById('balance').innerText = updateBalance;
    }
    else{
        alert('Invalid Pin Number');
    }
})

document.getElementById('addMoney').addEventListener('click', e => {
    document.getElementById('addForm').classList.remove('hidden');
    document.getElementById('addMoney').classList.add('border','border-blue-600');
    document.getElementById('outForm').classList.add('hidden');
    document.getElementById('withdrawMoney').classList.remove('border','border-blue-600');
});
document.getElementById('withdrawMoney').addEventListener('click', e => {
    document.getElementById('outForm').classList.remove('hidden');
    document.getElementById('addForm').classList.add('hidden');
    document.getElementById('addMoney').classList.remove('border','border-blue-600');
    document.getElementById('withdrawMoney').classList.add('border','border-blue-600');
});