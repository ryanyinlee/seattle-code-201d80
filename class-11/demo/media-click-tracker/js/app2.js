
const goatImageOne = document.getElementById('left_goat_image');
goatImageOne.addEventListener("click", handleGoatClick);

// create functions

function handleGoatClick(event) {
    // track times this goat has been clicked
    // increment round counter

    // if rounds remain, then
    // render new set of goats
    // generate a new set of goats

    // otherwise
    // show report
}

function generateGoatSet() {
    // need a full set to draw from
    const allGoats = ['cruisin-goat', 'sweater-goat', 'goat-away', 'float-your-goat', 'kissing-goat'];
}

function renderGoats (goatOneTitle, goatTwoTitle) {
const goatImageOne = document.getElementById('left_goat_img');

// const goatOneTitle = ;
// const goatTwoTitle = ;

//goatImageOne.src = "assets/images/cruisin-goat.jpg";
goatImageOne.src = `assets/images/${goatOneTitle}.jpg`;


const goatNameOne = document.getElementById('left_goat_name');
goatNameOne.textContent = "cruisin goat";

const goatImageTwo = document.getElementById('right_goat_img');

// goatImageTwo.src = "assets/images/smiling-goat.jpg";
goatImageTwo.src = `assets/images/${goatTwoTitle}.jpg`;

const goatNameTwo = document.getElementById('right_goat_name');
goatNameTwo.textContent = "smilin goat";
}
renderGoats('cruisin-goat', 'smiling-goat');