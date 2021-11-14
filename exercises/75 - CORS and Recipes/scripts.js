const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = 'http://localhost.com:8080'
//const proxy = 'https://cors-anywhere.herokuapp.com'

async function fetchRecipes (query) {
    const res = await fetch(`${proxy}/${baseEndpoint}/?q=${query}`);
    const data = await res.json();
    console.log(data);
}

fetchRecipes('pizza');