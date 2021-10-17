function Slider(slider) {
    if(!slider instanceof Element) {
        throw new Error('No slider passed in');
    }
    this.slider = slider;


    // select the elements needed for the slider
    this.slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    // when this slider is created run the start slider function
    this.startSlider();
    this.applyClasses();
    //this.move = this.move.bind(this);

    // event listeners
    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', () => this.move());

}



Slider.prototype.startSlider = function() {
    this.current = this.slider.querySelector('.current') || 
        this.slides.firstElementChild;

    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;

    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
    console.log(this.prev, this.current, this.next);
}

Slider.prototype.applyClasses = function() {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
}

Slider.prototype.move = function(direction) {

    // remove classes off the "current" set of slides
    // current.classList.remove('current');
    // prev.classList.remove('prev');
    // next.classList.remove('next');

    // if (direction === 'back') {
    //     prev = prev.previousElementSibling || slides.lastElementChild;
    //     current = current.previousElementSibling || slides.lastElementChild;
    //     next = next.previousElementSibling || slides.lastElementChild;
    // } else {
    //     prev = prev.nextElementSibling || slides.firstElementChild;
    //     current = current.nextElementSibling || slides.firstElementChild;
    //     next = next.nextElementSibling || slides.firstElementChild;
    // }

    //alternative method

    // first, remove all the classes from the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);

    // use destructuring to assign the new slides their updated values
    if (direction === 'back') {
        [this.prev, this.current, this.next] = [
            this.prev.previousElementSibling || this.slides.lastElementChild, 
            this.prev, 
            this.current];
    } else {
        [this.prev, this.current, this.next] = [
            this.current, 
            this.next, 
            this.next.nextElementSibling || this.slides.firstElementChild];
    }
    this.applyClasses();
}


mySlider = new Slider(document.querySelector('.slider'));
dogSlider = new Slider(document.querySelector('.dog-slider'));