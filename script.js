console.log("script is working! Let's play some Towers");

let disk = null;

// calculate the number of moves
function minPossibleNumOfMoves () {
    let solution = (2**3)-1;
    if (solution < 10) {
        document.querySelector("#min-possible-moves").innerHTML = "00" + solution;
    } else if (solution < 100) {
        document.querySelector("#min-possible-moves").innerHTML = "0" + solution;
    } else {
        document.querySelector("#min-possible-moves").innerHTML = solution;
    }
}

// add 1 to score each time a disk is moved
function addToScore () {
    let score = document.querySelector("#score").innerText;
    
    // if counter is less than 10, then fill one 0 before the score
    if (parseInt(score) < 9) {
        score = "00" + (parseInt(score)+1);
    } else score = "0" + (parseInt(score)+1);

    // save the new score "number of moves"
    document.querySelector("#score").innerHTML = score;
}

// event listener for when towers are clicked
const towers = document.getElementsByClassName("tower");
for (tower of towers) {
    tower.addEventListener('click', function (tower) {
        if (disk == null) {
            disk = tower.target.firstElementChild;
        } else {
            tower.target.prepend(disk);
            addToScore();
            disk = null;
        }
    })
}

// a function that makes each of the disks draggable
function disksDraggable () {
    for (tower of towers) {
        // set the disk's draggability to false if it is not on top
        if (tower.hasChildNodes) {
            for (let i=0; i<tower.childElementCount; i++){
                tower.children[i].setAttribute("draggable", "false")
            }
        }
        // tower.children.setAttribute("draggable", "false")
        if (tower.firstElementChild != null) tower.firstElementChild.setAttribute("draggable", "true");
    }
}
// run function on current board
disksDraggable();
minPossibleNumOfMoves();

// functions for when the disk is dragged
function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
} 
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.prepend(document.getElementById(data));
    addToScore();
    disksDraggable();
}

// about the game modal
// open the "learn to play" modal by clicking the button
document.getElementById('open-modal').addEventListener('click', function () {
    document.getElementById('modal').style.display = "block";
});

// close the modal
document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('modal').style.display = "none";
}); 