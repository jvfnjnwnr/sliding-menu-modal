const modalOpenButton = document.querySelector("#open-button");
const modalCloseButton = document.querySelector("#close-button");
const menuToggleButton = document.querySelector("#toggle");

const modalContainer = document.querySelector("#modal-container");
const menuContainer = document.querySelector(".top-nav");

const hideModal = (event) => {
	if (event.target == modalContainer || event.target == modalCloseButton) {
		modalContainer.classList.add("hide-modal");
		setTimeout(() => {
			modalContainer.classList.remove("show-modal");
		}, 350);
	}
};

menuToggleButton.addEventListener("click", () =>
	menuContainer.classList.toggle("slide-nav")
);

modalOpenButton.addEventListener("click", () => {
	modalContainer.classList.remove("hide-modal");
	modalContainer.classList.add("show-modal");
});

modalCloseButton.addEventListener("click", hideModal);

window.addEventListener("click", hideModal);
