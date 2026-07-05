const SECRET_CODE = "TWO MAGICIAN";

function checkCode() {

    const input = document.getElementById("code").value.trim();
    const message = document.getElementById("message");

    if (input.toUpperCase() !== SECRET_CODE) {
        message.style.color = "#ff4444";
        message.innerHTML = "❌ Wrong Secret Code";
        return;
    }

    message.style.color = "#00ff99";
    message.innerHTML = "✅ Access Granted";

    document.querySelector(".overlay").style.display = "none";

    const ticketsDiv = document.getElementById("tickets");

    ticketsDiv.style.display = "flex";

    tickets.forEach((ticket, index) => {

        ticketsDiv.innerHTML += `

        <div class="ticket">

            <h3>🎫 Ticket ${index + 1}</h3>

            <div class="player">

                <img src="${ticket.egypt.photo}" alt="${ticket.egypt.name}">

                <h4>${ticket.egypt.name}</h4>

                <img class="jersey" src="${ticket.egypt.jersey}" alt="Egypt Jersey">

            </div>

            <div class="vs">VS</div>

            <div class="player">

                <img src="${ticket.argentina.photo}" alt="${ticket.argentina.name}">

                <h4>${ticket.argentina.name}</h4>

                <img class="jersey" src="${ticket.argentina.jersey}" alt="Argentina Jersey">

            </div>

        </div>

        `;

    });

}
