// Partie images

let diapo;
let actualIndex;
let pushers;

function changePicture(index) {
  for (const image of diapo) {
    image.style.display = "none";
  }
  diapo[index].style.display = "flex";
}

function diapoImg() {
  diapoVideo = document.querySelector(".b-diaporama").children;
  changePicture(0);

  actualIndex = 0;

  pushers = document.querySelectorAll(".zmdi-diaporama");
  pushers[0].addEventListener("click", (e) => {
    actualIndex -= 1;
    if (actualIndex < 0) {
      actualIndex = diapo.length - 1;
    }
    changePicture(actualIndex);
  });

  pushers[1].addEventListener("click", (e) => {
    actualIndex += 1;
    if (actualIndex > diapo.length - 1) {
      actualIndex = 0;
    }
    changePicture(actualIndex);
  });
}
