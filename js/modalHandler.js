window.modal = function({ title, youtube=null, button }, callback){
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal_container");

    const modal = document.createElement("div");
    modal.innerHTML = `<span class="title">${title}</span>`;
    if(youtube != null) modal.innerHTML += `<iframe src="https://www.youtube.com/embed/${youtube}" frameborder="0"></iframe>`;
    modal.innerHTML += '<div class="buttonContent"></div>';

    const confirmbtn = document.createElement("button");
    confirmbtn.addEventListener("click", callback);
    confirmbtn.innerText = button;

    const closeButton = document.createElement("button");
    closeButton.addEventListener("click", () => modalContainer.parentNode.removeChild(modalContainer));
    closeButton.innerText = "Retour";

    modal.querySelector(".buttonContent").append(closeButton, confirmbtn);
    modalContainer.append(modal);
    document.body.append(modalContainer);
}