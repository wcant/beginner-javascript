
function Gallery(gallery) {
    if(!gallery) {
        throw new Error('No Gallery Found');
    }

    //First, we need to save reference to the gallery div
    // as we will need it for the prototype methods
    this.gallery = gallery;

    // here we changes these from const to this. to surface the variables
    // to be available on the prototype
    this.images = Array.from(gallery.querySelectorAll('img'));
    this.modal = document.querySelector('.modal');
    this.prevButton = this.modal.querySelector('.prev');
    this.nextButton = this.modal.querySelector('.next');

    // bind our methods to the instance when we need them
    this.showNextImage = this.showNextImage.bind(this);
    this.showPrevImage = this.showPrevImage.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    // These are our event listeners
    this.images.forEach(image => image.addEventListener('click', (e) => this.showImage(e.currentTarget)));

    // allow for enter key to select images (tabindex=0 lets users tab through the images)
    this.images.forEach(image => {
        image.addEventListener('keyup', e => {
            if(e.key === 'Enter') this.showImage(e.currentTarget);
        });
    });

    this.modal.addEventListener('click', this.handleClickOutside);

    // move these to top to
    //window.addEventListener('keyup', handleKeyUp);
    //nextButton.addEventListener('click', showNextImage);
}


Gallery.prototype.openModal = function() {
    console.info('Opening modal....');
    // First chekc if the modal is already open
    if(this.modal.matches('.open')) {
        console.info('Modal already open...');
    }
    this.modal.classList.add('open');

    // Event listeners to be bound when we open the modal:
    window.addEventListener('keyup', this.handleKeyUp);
    this.nextButton.addEventListener('click', this.showNextImage);
    this.prevButton.addEventListener('click', this.showPrevImage);

}

Gallery.prototype.closeModal = function() {
    this.modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard
    window.removeEventListener('keyup', this.handleKeyUp);
    this.nextButton.removeEventListener('click', this.showNextImage);
    this.prevButton.removeEventListener('click', this.showPrevImage);
}

Gallery.prototype.handleClickOutside = function(event) {
    // check if there's a parent element with class .modalInner
    // to see if the click was inside the modal
    event.target.closest('.modalInner') ? null : this.closeModal();

    // another method
    // if (event.target === event.currentTarget) {
    //     closeModal();
    // }

}

Gallery.prototype.handleKeyUp = function(event) {
    if (event.key === 'Escape') return this.closeModal();
    if (event.key === 'ArrowRight') return this.showNextImage();
    if (event.key === 'ArrowLeft') return this.showPrevImage();
}

Gallery.prototype.showNextImage = function() {
    console.log(this);
    this.showImage(this.currentImage.nextElementSibling || 
        this.gallery.firstElementChild);
}

Gallery.prototype.showPrevImage = function() {
    this.showImage(this.currentImage.previousElementSibling || 
        this.gallery.lastElementChild);
}

Gallery.prototype.showImage = function(el) {
    if(!el) {
        console.info('no image to show');
        return;
    }

    // update the modal with this info
    console.log(el);
    this.modal.querySelector('img').src = el.src;
    this.modal.querySelector('h2').textContent = el.title;
    this.modal.querySelector('figure p'). textContent = el.dataset.description;
    this.currentImage = el;
    this.openModal();
}


// use it on the page

gallery1 = new Gallery(document.querySelector('.gallery1'));
gallery2 = new Gallery(document.querySelector('.gallery2'));


console.log(gallery1, gallery2);
