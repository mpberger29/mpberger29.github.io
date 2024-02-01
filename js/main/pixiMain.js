// Charge le canvas pour mettre en place le depth map
const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
});
document.getElementById("menu").appendChild(app.view);

const img = new PIXI.Sprite.from("img/accueil.jpg");
img.alpha = 0.3;
app.stage.addChild(img);

const map = new PIXI.Sprite.from("img/accueil-map.jpg");
app.stage.addChild(map);

const displacementFilter = new PIXI.filters.DisplacementFilter(map);
app.stage.filters = [displacementFilter];

document.addEventListener("mousemove", (e) => {
  displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 30;
  displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 30;
});