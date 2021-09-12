//let slider1 = getNewSlider();

/*const slider1 = {
    imagesUrls: [],
    currentImageIndex: 0,
    showPrevBtn: null, //document.querySelector('.show-prev-btn'),
    showNextBtn: null, //document.querySelector('.show-next-btn'),
    slideImage: null, //document.querySelector('.slide-img'),

    start: function (elId) {
        var that = this;

        let el = document.querySelector('#' + elId);

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-img');

        //subscribe to events
        this.showPrevBtn.addEventListener('click', function(e) {
            that.onShowPrevBtnClick(e);
            //this.onShowPrevBtnClick;  
        });

        this.showNextBtn.addEventListener('click', function(e){
            that.onShowNextBtnClick(e);  
        });
        // crete images array
        this.imagesUrls.push('imgs/img_1231.png');
        this.imagesUrls.push('imgs/img_1232.jpg');
        this.imagesUrls.push('imgs/img_1233.jpg');
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    },

    onShowPrevBtnClick: function (event) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;
        //disabled prev btn if need
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function (event) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
        //disbled next btn if need
        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }
}*/