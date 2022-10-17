
// let printValuesOf = (jsObject, ...keys) => {
//     for (let i = 0; i <= keys.length; i++) {
//       let key = keys[key];
//       console.log(jsObject[keys]); ///reference error
//     }
//   }
  
//   let simpsonsCatchphrases = {
//     lisa: 'BAAAAAART!',
//     bart: 'Eat My Shorts!',
//     marge: 'Mmm~mmmmm',
//     homer: 'd\'oh!',   // syntax error
//     maggie: '(Pacifier Suck)',
//   };
  
//   printValuesOf(simpsonsCatchphrases, 'lisa', 'bart', 'homer');
  
  // Expected console output:
  
  // BAAAAAART!
  // Eat My Shorts!
  // d'oh!
  
  // Returns undefined 
  
// //
// var numbers = { a: 13, b: 37, c: 42 };




// Object.values(numbers).map(num => {
//   return num * 2; 
// });



let printValuesOf = (jsObject,...keys) => {
  for (let i = 0; i <= keys.length; i++) {
    let key = keys[i];
    console.log(jsObject[key]);
  }
}

let simpsonsCatchphrases = {
  lisa: 'BAAAAAART!',
  bart: 'Eat My Shorts!',
  marge: 'Mmm~mmmmm',
  homer: 'd\'oh!',
  maggie: '(Pacifier Suck)',
};

printValuesOf(simpsonsCatchphrases, 'lisa', 'bart', 'homer');