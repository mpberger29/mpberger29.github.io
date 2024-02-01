export class Box {
  // création d'une classe nommée Box
  constructor( // initialisation à partir de constructor
    id,
    elements = {
      description: { content: "", type: "p" },
      diaporama: {
        content: [],
        type: "img",
      },
      videos: {
        content: [],
        type: "iframe",
      },
      animation: { content: [], type: "iframe" },
    }
  ) {
    this.id = id;
    this.elements = elements;
    // ensuite on initialise à partir de rien le style de notre boîte
  }

  //fonction form pour insérer dans le html tous les onglets existants, on se base sur this.elements
  form() {
    let upper = `
    <div class="centered">
    <div class="upward">
    <div class="onglets">
  `;

    let basse = `
  <div class="global">
  `;
    //on boucle sur chaque élement de notre objet transformé en tableau pour rendre plus facile
    for (const i of Object.entries(this.elements)) {
      // on regarde sur l'élement existe grâce à la partie "exists" renseignée.
      //dans le cas où l'élement existe, on l'ajoute dans upper (partie boutons)
      upper += `
        <button class="choose ${i[0]}">${i[0]}</button>
        `;
      // on va créer les différents compartiments
      // si le compartiment est un array, cela veut dire qu'il y a plusieurs parties de nombre indertiminés, on les trâite donc
      if (Array.isArray(i[1].content)) {
        let top = `
          <div id="${i[0]}" class="receptacle">
          `;
        if (i[0] === "diaporama" || i[0] === "videos") {
          top += `
            <i class="zmdi-${i[0]} zmdi zmdi-caret-left zmdi-hc-4x"></i>
            <div class="b-${i[0]}">
            `;
        }
        for (const element of i[1].content) {
          // pour chaque élement de notre array
          top += `<${i[1].type} src="${element}"></${i[1].type}>`; // on fait une balise de type suivant notre élement et de source donnée.
        }
        if (i[0] === "diaporama" || i[0] === "videos") {
          top += `
            </div>
            <i class="zmdi-${i[0]} zmdi zmdi-caret-right zmdi-hc-4x"></i>
            `;
        }
        top += `
          </div>
          `; // enfin on ferme la div
        basse += top; // on ajoute le résultat à basse pour passer à la suivante
      } else {
        basse += `
          <div id="${i[0]}" class="receptacle">
            <${i[1].type}>${i[1].content}</${i[1].type}>
          </div>
          `; // dans le cas où il n'y a pas d'array, on a juste un texte, donc on l'ajoute directement dans notre text "basse".
      }
    }
    upper += `</div>
    <i class="close zmdi zmdi-close zmdi-hc-3x"></i>
    </div>
    
    `; // div de fin pour fermer notre div class="onglets"
    basse += `</div>
              </div>`;
    return upper + basse;
  }
  mount() {
    //on créer l'élément div
    const container = document.createElement("div");
    //donne une classe et une structure html
    container.classList.add("parent");
    container.innerHTML = this.form();
    // on ajoute tout dans une boîte avec un id précisé
    document.getElementById(this.id).appendChild(container);
  }
}
