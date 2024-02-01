// Fenêtre gestion cookies
const infoBoxContainer = document.querySelector(".infoBoxContainer");
const infoBox = document.querySelector(".infoBox");
const cookiesBand = document.querySelector(".cookiesBand");
const GoogleAnalyticsCheckbox = document.querySelector("#GoogleAnalyticsCheckbox");

// Première visite
if (localStorage.getItem("cookiesValidated") === null) {
    gtag("consent", "default", {
        ad_storage: "denied",
        analytics_storage: "denied",
        wait_for_update: 500
    });
    cookiesBand.style.display = "flex";
    gtag("set", {hasConsent: false});
}

document
  .querySelector("#cookiesButton")
  .addEventListener("click", () => {
    infoBoxContainer.style.display = "flex";
  });

document
  .querySelector("#infoBoxClose")
  .addEventListener("click", () => {
    infoBoxContainer.style.display = "none";
  });

document
  .querySelector("#cookiesClose")
  .addEventListener("click", () => {
    localStorage.setItem("cookiesValidated", "true")
    cookiesBand.style.transform = "translateY(100vh)";
  })

GoogleAnalyticsCheckbox.addEventListener("change", () => {
    gtag("set", {hasConsent: true});
    if (GoogleAnalyticsCheckbox.checked) {
        gtag("consent", "update", {
            analytics_storage: "granted",
          });
    } else {
        gtag("consent", "update", {
            analytics_storage: "denied",
          });
    }
})