document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const km = parseFloat(document.getElementById("km").value);
    const age = document.getElementById("age").value;

    const ticketDetails = document.getElementById("ticket-details");
    ticketDetails.innerHTML = "";

    const prezzo = km * 0.21;

    if (age === "junior") {
        prezzo = prezzo - (prezzo * 0.2);
    } else if (age === "senior") {
        prezzo = prezzo - (prezzo * 0.4);
    }

    var codiceCP = Math.floor(Math.random() * 10000) + 90000;

    ticketDetails.innerHTML = `
        <div class="row">
            <div class="col name">
                ${name}
            </div>
            <div class="col">
                 ${age}
            </div>
            <div class="col">
                 ${Math.floor(Math.random() * 10) + 1}
            </div>
            <div class="col">
                ${codiceCP}
            </div>
            <div class="col">
                ${prezzo.toFixed(2)}€
            </div>
        </div>
    `;
});




