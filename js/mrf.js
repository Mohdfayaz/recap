//let numbers = [3, 7, 2, 1, 5, 4];

//square each of the number in the array
// output: [9, 49, 4, 1, 25, 16]

// without using map method
//function square(numbers) {
  //  let squares = [];

    //for (let i = 0; i < numbers.length; i++) {
      //  squares.push(numbers[i] **2);
    //}


//console.log(squares);

//function squarer(value, index, array) {
  //  return value ** 2;
//}
//let numbers = [3, 7, 2, 1, 5, 4];

//console.log(numbers.map(squarer));

// filter method

//function filterEven(value, index, array) {
    //return value % 2 == 0; {
      //  return true;
    //    return false;
  //  }
//}

//let numbers = [3, 7, 2, 1, 5, 4];

//console.log(numbers.filter(filterEven));


//reduce method
//function reducer(previousValue, currentValue) {
   // return previousValue + currentValue;
//}
//let numbers = [3, 7, 2, 1, 5, 4];

//console.log(numbers.reduce(reducer));

let numbers = [3, 7, 2, 2, 1, 1, 5, 4];

//output: [3, 7, 2, 1, 5, 4]

//console.log(numbers.reduce((p, c) => {
  //  if (!p.includes(c)){
  //          return [...p, c];
//} else {
    //return p;
//}
//}, []));
function reducer(p, c) {
    if (!p.includes(c)) {
        return p;
    } else {
        return [...p, c];
    }
}
console.log(numbers.reduce(reducer, []));