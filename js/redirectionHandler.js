// Permettra à la page de se fade avant la redirection
window.location.redirect = function (url) {
  document.body.classList.add("fade-out"); // Ajoute la classe
  setTimeout(() => {
    return (window.location.href = url);
  }, 1000);
};

// Permettra à la page de se fade après le chargement de la page
document.body.classList.add("fade-in"); // Ajoute la classe
