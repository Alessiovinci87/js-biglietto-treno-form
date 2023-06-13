document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var km = parseFloat(document.getElementById("km").value);
    var age = document.getElementById("age").value;

    var ticketDetails = document.getElementById("ticket-details");
    ticketDetails.innerHTML = "";

    var prezzo = km * 0.21;

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



