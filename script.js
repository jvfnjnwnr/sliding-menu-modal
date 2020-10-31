const modalOpenButton = document.querySelector("#open-button");
const modalCloseButton = document.querySelector("#close-button");
const menuToggleButton = document.querySelector("#toggle");

const modalContainer = document.querySelector("#modal-container");
const menuContainer = document.querySelector(".top-nav");

const state = {
	modalIsOpen: false,
	menuIsOpen: false,
};

const toggleModal = () => {
	if (state.modalIsOpen === false) {
		modalContainer.style.display = "flex";
		state.modalIsOpen = true;
	} else {
		modalContainer.style.display = "none";
		state.modalIsOpen = false;
	}
};

const toggleMenu = () => {
	if (state.menuIsOpen === false) {
		menuContainer.style.transform = "translateX(0%)";
		state.menuIsOpen = true;
	} else {
		menuContainer.style.transform = "translate(-100%)";
		state.menuIsOpen = false;
	}
};

modalOpenButton.addEventListener("click", toggleModal);
modalCloseButton.addEventListener("click", toggleModal);
menuToggleButton.addEventListener("click", toggleMenu);
