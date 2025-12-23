document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#0f172a";
document.body.style.color = "white";

const app = document.createElement("div");
app.style.display = "flex";
app.style.flexDirection = "column";
app.style.alignItems = "center";
app.style.justifyContent = "center";
app.style.height = "100vh";
document.body.appendChild(app);

const title = document.createElement("h1");
title.innerText = "🌍 Air Quality Index";
title.style.marginBottom = "10px";
app.appendChild(title);

const city = document.createElement("p");
city.style.fontSize = "18px";
city.innerText = "Detecting location...";
app.appendChild(city);

const box = document.createElement("div");
box.style.width = "220px";
box.style.height = "220px";
box.style.borderRadius = "50%";
box.style.display = "flex";
box.style.flexDirection = "column";
box.style.alignItems = "center";
box.style.justifyContent = "center";
box.style.fontSize = "40px";
box.style.margin = "20px";
box.style.transition = "0.5s";
app.appendChild(box);

const label = document.createElement("p");
label.style.fontSize = "20px";
label.style.margin = "5px";
app.appendChild(label);

const msg = document.createElement("p");
msg.style.fontSize = "14px";
msg.style.textAlign = "center";
msg.style.width = "280px";
msg.style.opacity = "0.9";
app.appendChild(msg);

function generateAQI() {
  return Math.floor(Math.random() * 350) + 20;
}

function updateAQI() {
  const aqi = generateAQI();
  box.innerText = aqi;

  if (aqi <= 50) {
    box.style.background = "#22c55e";
    label.innerText = "Good 😊";
    msg.innerText = "Air quality is satisfactory.";
  } else if (aqi <= 100) {
    box.style.background = "#84cc16";
    label.innerText = "Moderate 🙂";
    msg.innerText = "Acceptable air quality.";
  } else if (aqi <= 200) {
    box.style.background = "#facc15";
    label.innerText = "Unhealthy 😷";
    msg.innerText = "Sensitive groups may experience health effects.";
  } else if (aqi <= 300) {
    box.style.background = "#f97316";
    label.innerText = "Very Unhealthy 🚫";
    msg.innerText = "Health alert: everyone may experience effects.";
  } else {
    box.style.background = "#dc2626";
    label.innerText = "Hazardous ☠️";
    msg.innerText = "Emergency conditions. Avoid outdoor activity.";
  }
}

if (navigator.language === "en-IN") {
  city.innerText = "📍 Location: India";
} else {
  city.innerText = "📍 Location: Unknown";
}
updateAQI();

setInterval(updateAQI, 4000);
