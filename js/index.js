let slider1 = sliderFactory.creatNewSlider();
let slider2 = sliderFactory.creatNewSlider();

//let cont1 =  document.querySelector('itk-slider1')
//let cont2 =  document.querySelector('itk-slider2')

slider1.start('itk-slider1');
slider2.start('itk-slider2');

/*let imagesUrls = [];
let currentImageIndex = 0 ;
//find elements
const showPrevBtn = document.getElementById('show-prev-btn');
const showNextBtn = document.getElementById('show-next-btn');
const slideImage = document.getElementById('slide-img');

//subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// crete images array
imagesUrls.push('imgs/img_1231.png');
imagesUrls.push('imgs/img_1232.jpg');
imagesUrls.push('imgs/img_1233.jpg');

slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;

//function definitions
function onShowPrevBtnClick(event){
    console.log('prev cliked');
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;
    
    //disabled prev btn if need
    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick(event){
    console.log('next cliked');
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    //disbled next btn if need
    if (currentImageIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}*/


