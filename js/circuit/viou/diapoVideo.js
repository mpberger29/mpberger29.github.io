// Partie video

let diapoVideo;
let pushed;
let acc = 0;

function changeVideo(index) {
  for (const video of diapoVideo) {
    video.style.display = "none";
  }
  diapoVideo[index].style.display = "flex";
}

function videoIntegre() {
  diapoVideo = document.querySelector(".b-videos").children;
  changeVideo(0);

  acc = 0;
  pushed = document.getElementsByClassName("zmdi-videos");
  if (diapoVideo.length === 1) {
    for (const elem of pushed) {
      elem.style.opacity = .6;
      elem.style.cursor = "not-allowed";
    }
  }
  pushed[0].addEventListener("click", (e) => {
    acc -= 1;
    if (acc < 0) {
      acc = diapoVideo.length - 1;
    }
    changeVideo(acc);
  });

  pushed[1].addEventListener("click", (e) => {
    acc += 1;
    if (acc > diapoVideo.length - 1) {
      acc = 0;
    }
    changeVideo(acc);
  });
}
