export function randomItemFromArray(arr, not){
    let randIndex = Math.floor(Math.random()*arr.length); 
    let item = arr[randIndex];
    if (item === not) {
        return randomItemFromArray(arr, not);
    }
     return item;
  }