// Set your release date here (YYYY-MM-DDTHH:MM:SSZ or local format)
const releaseDate = new Date("2025-06-23T15:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = releaseDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "the wiki has released!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent =
    `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
