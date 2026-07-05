const SECRET_CODE = "TWO MAGICIAN";

function checkCode() {
    const input = document.getElementById("code").value.trim();

    if (input.toUpperCase() !== SECRET_CODE) {
        alert("Wrong Code");
        return;
    }

    const ticketsDiv = document.getElementById("tickets");
    document.querySelector(".overlay").style.display = "none";
    ticketsDiv.innerHTML = "";
    ticketsDiv.style.display = "block";

    for (let i = 0; i < tickets.length; i++) {
        ticketsDiv.innerHTML += `
        <div class="ticket">
            <h2>Ticket ${i + 1}</h2>

            <img src="${tickets[i].egypt.photo}" width="150">
            <p>${tickets[i].egypt.name}</p>

            <h3>VS</h3>

            <img src="${tickets[i].argentina.photo}" width="150">
            <p>${tickets[i].argentina.name}</p>
        </div>
        `;
    }
}
