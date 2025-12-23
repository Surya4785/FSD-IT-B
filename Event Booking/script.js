document.body.innerHTML = "";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#f4f6f8";
document.body.style.padding = "20px";

const title = document.createElement("h1");
title.innerText = "🎟 Event Booking System";
title.style.textAlign = "center";
document.body.appendChild(title);

const events = [
  { id: 1, name: "Music Concert", seats: 5 },
  { id: 2, name: "Tech Seminar", seats: 3 },
  { id: 3, name: "Art Workshop", seats: 4 }
];

let bookings = JSON.parse(localStorage.getItem("bookings")) || {};

const container = document.createElement("div");
document.body.appendChild(container);

function renderEvents() {
  container.innerHTML = "";

  events.forEach(event => {
    const booked = bookings[event.id] || 0;
    const available = event.seats - booked;

    const card = document.createElement("div");
    card.style.background = "white";
    card.style.margin = "15px auto";
    card.style.padding = "15px";
    card.style.maxWidth = "400px";
    card.style.borderRadius = "8px";
    card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

    const name = document.createElement("h3");
    name.innerText = event.name;

    const total = document.createElement("p");
    total.innerText = "Total Seats: " + event.seats;

    const avail = document.createElement("p");
    avail.innerText = "Available Seats: " + available;

    const btn = document.createElement("button");
    btn.innerText = "Book Seat";
    btn.style.padding = "8px 15px";
    btn.style.background = available > 0 ? "#007bff" : "gray";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";
    btn.disabled = available === 0;

    btn.onclick = () => bookEvent(event.id);

    card.appendChild(name);
    card.appendChild(total);
    card.appendChild(avail);
    card.appendChild(btn);

    container.appendChild(card);
  });
}

function bookEvent(id) {
  bookings[id] = (bookings[id] || 0) + 1;
  localStorage.setItem("bookings", JSON.stringify(bookings));
  alert("✅ Booking Successful!");
  renderEvents();
}

renderEvents();