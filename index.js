//find elements
const showPrevBtn = document.getElementById('show-prev-btn');
const showNextBtn = document.getElementById('show-next-btn');
const slideImage = document.getElementById('slide-img');

//subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// crete images array
let imagesUrls = [];
imagesUrls.push('imgs/img_1231.png');
imagesUrls.push('imgs/img_1232.jpg');
imagesUrls.push('imgs/img_1233.jpg');


let currentImageIndex = 0 ;
showPrevBtn.disabled = true;

slideImage.src = imagesUrls[currentImageIndex];












//function definitions
function onShowPrevBtnClick(){
    console.log('prev cliked');
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;
    
    //disabled prev btn if need
    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick(){
    console.log('next cliked');
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    //disbled next btn if need
    if (currentImageIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}