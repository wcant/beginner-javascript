function wait(ms=0) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
    return Math.floor(randomNumber*(max-min) + min);
}


// async for of loop
// async function draw(el) {
//     const text = el.textContent;
//     let soFar = '';
//     // get min/max ranges from elements

//     const { typeMin, typeMax } = el.dataset;

//     for (const letter of text) {
//         soFar+=letter;
//         el.textContent = soFar;
//         // calcuate type speed from random number in the range
//         await wait(getRandomBetween(typeMin, typeMax));
//     }
// }

// recursion

function draw(el) {
    let index = 1;
    const text = el.textContent;
    const { typeMin, typeMax } = el.dataset;
    async function drawLetter() {
        el.textContent = text.slice(0,index);
        index += 1;
        // exit condition
        //wait for some time
        await  wait(getRandomBetween(typeMin, typeMax));
        if (index <= text.length) {
            drawLetter();

        }

    }
    // when this function draw() runs, kick off drawLetter
    drawLetter()

}


document.querySelectorAll(`[data-type]`).forEach(draw);


