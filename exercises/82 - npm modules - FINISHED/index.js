import wait from 'waait';
//import faker from 'faker';
//also can just import name from faker
import { name } from 'faker';
import axios from 'axios';
import { intersection, isEqual } from 'lodash';
import to from 'await-to-js';
import { resolveConfig } from 'prettier';

//console.log(`Hello ${faker.name.firstName()}`);

// how to get an array of 10 names?
// the second argument of .from() is a map function that 
// determines each element
const fakeNames = Array.from({length: 10}, name.firstName);
console.log(fakeNames);

async function go() {
    console.log('going');
    await wait(2000);
    console.log('ending');
}

//go();


async function getJoke() {
    const { data } = await axios.get('https://icanhazdadjoke.com', 
    {
        headers: {
            Accept: 'application/json',
        }
    });
    console.log(data);
}

getJoke();


const a = [1,2,3,4,5,6,7,8,9];
const b = [4,56,7,34,9,2];

const sameValues = intersection(a,b);
console.log(sameValues);


const person1 = { name: 'wes' };
const person2 = { name: 'wes' };
console.log(isEqual(person1, person2));



function checkIfNameIsCool(firstName) {
    return new Promise(function(resolve, reject) {
        if(firstName === 'wes') {
            resolve('cool');
            return;
        }
        reject(new Error('not a cool name'));
    })
}

async function checkName() {
    const [err, successValue] = await to(checkIfNameIsCool('wes'));
    console.log(successValue);

    if(err) {
        //deal with it
        console.log(err);
    } else {
        console.log(successValue);
    }
}

checkName();