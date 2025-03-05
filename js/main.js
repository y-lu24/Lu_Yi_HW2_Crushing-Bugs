let theButtons = document.querySelectorAll('#buttonHolder img'),
puzzleBoard = document.querySelector('.puzzle-board'),
puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
dropZones = document.querySelectorAll('.drop-zone'),

    draggedPiece;


function changeBGImage() {
	
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() {
    console.log('started dragging this piece: ', this);
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault(); 
    console.log('you dragged over me');
}

function handleDrop(e) {
    e.preventDefault();
    console.log('dropped something on me');
	// bug fix #1 should go here, and it's at most 3 lines of JS code
	if (this.children.length > 0) {
        document.querySelector('.puzzle-pieces').appendChild(this.firstChild);
    }
	// this line is going to move the dragged piece from the left side of the board
	// into whatever drop zone we choose. appendChild means "add element to the container"
    this.appendChild(draggedPiece);
}

// event listeners
// add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener('click', changeBGImage));

// add drag event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

// add the dragover AND the drop event handling to each drop zone
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

// add the drop event handling
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));