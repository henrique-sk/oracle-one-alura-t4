// const names = ['Test', 'Junk', 'Windows', 'Freeway'];

// for(let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// names.forEach(function(aName, i) {
//   console.log(aName, i)
// });

// function ourForEach(arr, aFunction) {
//   for(let i = 0; i < arr.length; i++) {
//     const arrayItem = arr[i];
//     aFunction(arrayItem, i);
//   }
// }

// ourForEach(names, function(aName, i) {
//   console.log(aName, i);
// });

// const names = ['Test', 'Junk', 'Windows', 'Freeway'];
// const forEachReturn = names.forEach(function(aName, i) {
//   console.log(aName, i);
// });

// console.log(forEachReturn);


// map will create a new array list
const names = ['Test', 'Junk', 'Windows', 'Freeway'];

function ourMap(arr, aFunction) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    const arrayItem = arr[i];
    newArray.push(aFunction(arrayItem, i));
  }
  return newArray;
}

// const returnFromOurMap = names.map(function(aName, i) {
const returnFromOurMap = ourMap(names, function(aName, i) {
  console.log(aName, i)

  return `<li>${aName}</li>`;
});

console.log(returnFromOurMap);
