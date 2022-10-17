const greekGods = [
    "Aphrodite",
    "Ares",
    "Artemis",
    "Athena",
    "Poseidon",
    "Zeus",
  ];

  //console.log(greekGods[3])


//   console.log(greekGods[0]);
// setTimeout(function () {
//   console.log(greekGods[1]);
// }, 1000);
// console.log(greekGods[2]);


const myInterval = setInterval(setColor, 500);

function setColor() {
  let x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

function stopColor() {
  clearInterval(myInterval);
} 