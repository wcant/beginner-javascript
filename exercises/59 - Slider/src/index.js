function Slider(slider) {
    if(!slider instanceof Element) {
        throw new Error('No slider passed in');
    }

    // create some variables for working with the slider
    let current;
    let prev;
    let next;
    // select the elements needed for the slider
    const slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');


    function startSlider() {
        current = slider.querySelector('.current') || 
            slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log(prev, current, next);
    }

    function applyClasses() {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    function move(direction) {

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
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);

        // use destructuring to assign the new slides their updated values
        if (direction === 'back') {
            [prev, current, next] = [
                prev.previousElementSibling || slides.lastElementChild, 
                prev, 
                current];
        } else {
            [prev, current, next] = [
                current, 
                next, 
                next.nextElementSibling || slides.firstElementChild];
        }
        applyClasses();
    }

    function handleButtonClick(event) {
        if (event.currentTarget.classList[0] === 'goToPrev') {
            return move('back');
        }
        
        if (event.currentTarget.classList[0] === 'goToNext') {
            return move('forward');
        }
    }

    // event listeners
    prevButton.addEventListener('click', handleButtonClick);
    nextButton.addEventListener('click', handleButtonClick);

    // when this slider is created run the start slider function
    startSlider();
    applyClasses();


}



const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));