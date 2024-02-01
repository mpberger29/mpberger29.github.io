// Animations
const starter = document.querySelector(".start button");
const container = document.querySelector(".choice");
const backButton = document.querySelector("#retour");

// Démarre la selection de choix
starter.addEventListener("click", e => {
  container.style.display = "flex";
  backButton.style.display = "block";
  e.target.parentNode.style.display = "none";

  // Google Analytics
  gtag("get", "G-F27MFR8WG0", "hasConsent", (target) => {
    if (!target) {
      gtag("consent", "update", {
        analytics_storage: "granted",
      });
      gtag("set", {hasConsent: true});
    }
  });
});

backButton.addEventListener("click", e => {
  container.style.display = "none";
  backButton.style.display = "none";
  document.querySelector(".start").style.display = "flex";
});

// Redirections
document
  .querySelectorAll(".choice div button")[0]
  .addEventListener("click", () => {
    window.modal({
      title: "Le mot de la direction",
      youtube: "KvxhWoSN-vg",
      button: "Continuer vers la visite"
    }, () => {
      window.location.redirect("/circuit.html?parcours=lycee");
    });
  });
  
document
  .querySelectorAll(".choice div button")[1]
  .addEventListener("click", () => {
    window.location.redirect("/circuit.html?parcours=college");
  });


document.querySelector("#dateActuelle").innerHTML = new Date().getFullYear();