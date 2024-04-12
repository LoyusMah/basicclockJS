function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, 0);
  const mari = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const minute = now.getMinutes().toString().padStart(2, 0);
  const second = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}: ${minute}: ${second}`;
  document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);
