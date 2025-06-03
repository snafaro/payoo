document.getElementById("log-btn").addEventListener("click", e => {
    e.preventDefault();
    const pin = document.getElementById('pin').value;
    const number = document.getElementById('number').value;
    if(number === "01753062812" && pin === "1234"){
        window.location.href = "/home.html"
    }
    else{
        alert("your pin or number is incorrect");
    }
})