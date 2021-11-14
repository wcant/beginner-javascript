import { fetchJoke} from './scripts.js';
import { randomItemFromArray } from './util.js';
import { jokeButton, jokeHolder } from './elements.js';
import buttonText from '../data/buttonText.js';

export async function handleClick() {
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
  }
  