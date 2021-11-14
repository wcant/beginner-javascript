
//export function returnHi(name) {
function returnHi(name) {
    return `hi ${name}`;
}

const first = 'wes';
export default first;

//export const last = 'cantrell';
const last = 'cantrell';

const middle = 'bob';

// named exports -  can have as many as we want
export { last, middle, returnHi };