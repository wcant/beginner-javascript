function Slider(slider) {
    if(!slider instanceof Element) {
        throw new Error('No slider passed in');
    }
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));