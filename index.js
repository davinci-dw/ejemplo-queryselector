const TITULO_MODAL = "¡Bienvenido!";
const CONTENIDO_MODAL = "No te olvides de suscribirte al canal";

const pageModal = document.getElementById("pageModal");
const modalTitle = pageModal.querySelector(".modal-title");
modalTitle.innerHTML = TITULO_MODAL;

const parraph = pageModal.querySelector(".modal-body > p");
parraph.innerHTML = CONTENIDO_MODAL;

const modalCloseButton = pageModal.querySelector(".modal-footer > .btn-secondary");
const modalCtaButton = pageModal.querySelector(".modal-footer > .btn-primary");

modalCloseButton.innerHTML = "Cerrar";
modalCtaButton.innerHTML = "Aceptar";

const modalCta = document.querySelector("#modalCta");

modalCta.addEventListener("click", (event) => {
    pageModal.style.display = "block";
});


modalCtaButton.addEventListener("click", (event) => {
    pageModal.style.display = "none";
});

/*setTimeout(() => {
}, 5000);*/