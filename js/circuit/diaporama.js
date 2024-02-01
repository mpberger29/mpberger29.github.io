const diapo = document.querySelector(".list").children;
for(const image of diapo){
    image.style.display = "none";
}
diapo[0].style.display = "flex";
