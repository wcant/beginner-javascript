export async function fetchJoke() {
    const res = await fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      }
    });
    const data = await res.json();
    return data;
  }
  