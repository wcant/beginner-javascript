function wait(ms=0) {
    return new Promise(function(resolve){
        setTimeout(resolve,50);
    })
}


async function destroyPopup(popup) {
    popup.classList.remove('open');
    await wait(1000);
    // remove popup entirely
    popup.remove();
    popup = null;
}

function ask(options) {
    return new Promise( async function(resolve) {
        // first we ened to create a popup with all the fields
        const popup = document.createElement('form');
        popup.classList.add('popup');
        popup.insertAdjacentHTML('afterbegin', `
            <fieldset>
                <label>${options.title}</label>
                <input type='text' name='input' />
                <button type='submit'>Submit</button>
            </fieldset>
        `)
        console.log(popup);
        // check if they want a cancel button
        if (options.cancel) {
            const skipButton = document.createElement('button');
            skipButton.type = 'button';
            skipButton.textContent = 'Cancel';
            popup.firstElementChild.appendChild(skipButton);
            // todo: listen for a click on the cancel button
            skipButton.addEventListener('click', () => {
                resolve(null);
                destroyPopup(popup);
            }, {once: true});
        }
        // listen for the submit event on the input
        popup.addEventListener('submit', function(e) {
            e.preventDefault();
            resolve(e.target.input.value);
            //destroy popup
            destroyPopup(popup);
        }, {once: true});
        // when someone does submit it we want to resolve the data that was in the input box

        // insert popup into the dom
        document.body.appendChild(popup);
        // put a very small timeout before we add the open class
        // setTimeout(function() {
        //     popup.classList.add('open');
        // }, 50);
        await wait(50);
        
        popup.classList.add('open');
    })
}

// select all buttons that have a question

async function askQuestion(e) {
    const button = e.currentTarget;
    const cancel = 'cancel' in button.dataset; // or just use button.hasAttribute('data-cancel');
    const answer = await ask({ 
        title: button.dataset.question,
        cancel,
    });

}


const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

//const result = Promise.resolve(ask({title: 'hello', cancel:true}));
//console.log(ask({title: 'hello', cancel:true}));
//console.log(result);

const questions = [
    { title: 'What is your name?' },
    { title: 'What is your age?', cancel:true },
    { title: 'What is your dogs name?'},
]

// const answers = Promise.all([
//     ask(questions[0]),
//     ask(questions[1]),
//     ask(questions[2]),
// ])

//const qPromises = Promise.all(questions.map(ask)).then(data => console.log(data));


async function asyncMap(array, callback) {
    // make an array to store results
    const results = [];
    for (const item of array) {
        const result = await callback(item);
        results.push(result);
    }
    // when we are done with the loop, return it
    return results;
}

// async function askMany() {
//     for (const question of questions) {
//         const answer = await ask(question);
//         console.log(answer);
//     }
// }

async function go() {
    const answers = await asyncMap(questions, ask);
    console.log(answers);
}

//askMany();
go();