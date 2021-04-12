console.log("script is working! Let's play some Towers");

let disk = null;
let numOfDisks = 3;

if (localStorage.getItem("numOfDisks") !== 3) numOfDisks = localStorage.getItem("numOfDisks");
document.getElementById("disk-range").value = numOfDisks;

// populate the board with number of disks inputed
function populateBoard () {
    for (let i = 1; i <= numOfDisks; i++) {
        let disk = document.createElement("div")
        // class="disk small" id="1" ondragstart="dragStart(event)"
        disk.setAttribute("class", "disk");
        disk.setAttribute("id", "disk"+i);
        disk.setAttribute("ondragstart", "dragStart(event)");

        document.querySelector(".source").appendChild(disk);
    }
}

// calculate the minimum number of moves to solve the game
function minPossibleNumOfMoves (n) {
    let solution = (2**n)-1;
    if (solution < 10) document.querySelector("#min-possible-moves").innerHTML = "00" + solution;
    else if (solution < 100) document.querySelector("#min-possible-moves").innerHTML = "0" + solution;
    else document.querySelector("#min-possible-moves").innerHTML = solution;
}

// add or take away disks
function changeDiskPopulation (value) {
    localStorage.setItem("numOfDisks",document.getElementById("disk-range").value.toString())
    location.reload();
}

// add 1 to score each time a disk is moved
function addToScore () {
    let score = document.querySelector("#score").innerText;
    
    // if counter is less than 10, then fill one 0 before the score
    if (parseInt(score) < 9) score = "00" + (parseInt(score)+1);
    else score = "0" + (parseInt(score)+1);

    // save the new score "number of moves"
    document.querySelector("#score").innerHTML = score;
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

// preventing the user from placing a larger disk on a smaller one
function isLegalMove (event, data) {
    if (event.target.children[0] === undefined) {
        event.target.prepend(document.getElementById(data));
        addToScore();
    }
    else if (data < event.target.children[0].getAttribute("id")) {
        event.target.prepend(document.getElementById(data));
        addToScore();
    }
    else alert("That is an illegal move!")
}

// functions to drag the disks from tower to tower
// the start of the drag
function dragStart(event) {
    event.dataTransfer.setData("disk", event.target.id);
    event.dataTransfer.effectAllowed = "move";
} 
// dragging the disk
function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}
// entering a tower div
function dragEnter(event) {
    
}
function dragend(event) {
    event.preventDefault();
}
// dropping the disk
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("disk");
    isLegalMove(event, data);
    disksDraggable();
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

// set the board
populateBoard();
minPossibleNumOfMoves(numOfDisks);
disksDraggable();

// slider to set how many disks
document.getElementById("disk-range").addEventListener('change', function() {
    let value = document.getElementById("disk-range").value
    changeDiskPopulation(value);
})

// about the game modal
// open the "learn to play" modal by clicking the button
document.getElementById('open-modal').addEventListener('click', function () {
    document.getElementById('modal').style.display = "block";
});

// close the modal
document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('modal').style.display = "none";
}); 

// reset the board
document.getElementById("reload").addEventListener('click', function () {
    location.reload();
});