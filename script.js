console.log("script is working");

const openButton = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-modal');

const openModal = () => {
    modal.style.display = "block";
}
const closeModal = () => {
    modal.style.display = "none";
}

// open the "about game" modal by clicking the button
openButton.addEventListener('click', openModal);

// close the modal
closeButton.addEventListener('click', closeModal);