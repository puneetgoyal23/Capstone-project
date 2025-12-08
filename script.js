const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeBtn.textContent = themeBtn.textContent === "🌙" ? "☀️" : "🌙";
  });
}

const greet = document.getElementById("greet");
if (greet) {
  const hour = new Date().getHours();
  let msg = "";
  if (hour < 12) msg = "Good Morning!";
  else if (hour < 18) msg = "Good Afternoon!";
  else msg = "Good Evening!";
  greet.textContent = msg;
}

const cartCount = document.getElementById("cartCount");
let count = 0;

if (window.location.pathname.endsWith("menu.html") && cartCount) {
  const menuCards = document.querySelectorAll(".card");
  menuCards.forEach(card => {
    card.addEventListener("click", () => {
      count++;
      cartCount.textContent = count;
    });
  });
}
