const TITULO_MODAL = "¡Bienvenido!";
const CONTENIDO_MODAL = "No te olvides de suscribirte al canal";

const pageModal = document.getElementById("pageModal");
console.log(pageModal);
pageModal.style.display = "block";
const modalTitle = pageModal.querySelector(".modal-title");
modalTitle.innerHTML = TITULO_MODAL;

const parraph = pageModal.querySelector(".modal-body > p");
parraph.innerHTML = CONTENIDO_MODAL;


/*setTimeout(() => {
    pageModal.style.display = "none";
}, 5000);*/