console.log("script is working");

let disk = null;

// event listener for when towers are clicked
const towers = document.getElementsByClassName("tower");
for (tower of towers) {
    tower.addEventListener('click', function (tower) {
        if (disk == null) {
            disk = tower.target.firstElementChild;
        } else {
            tower.target.prepend(disk);
            disk = null;
        }
    })
}

// event listener for when disk is dragged


// about the game modal
// open the "learn to play" modal by clicking the button
document.getElementById('open-modal').addEventListener('click', function () {
    document.getElementById('modal').style.display = "block";
});

// close the modal
document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('modal').style.display = "none";
}); 