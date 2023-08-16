const defualtGreenLetters = ["e", "n", "i", "t", "r", "l"];
let chosenLetters = defualtGreenLetters;
const words = document.querySelector(".words");
let lettersTotype = [];
let i = 0;

const keys = [...document.getElementsByClassName("key")]

const drawWorlds = function () {
  const lettersHtml = [];
  const wordsNum = 25;
  let word = "";
  let letterHtml = "";
  let firstLetter = null;

  for (let i = 1; i <= wordsNum; i++) {
    word = generateWord(chosenLetters) + " ";
    for (let j = 0; j < word.length; j++) {
      letterHtml = `<span class="letter">${word[j].toLowerCase()}</span>`;
      lettersHtml.push(letterHtml);
    }
  }
  words.innerHTML = lettersHtml.join("");
  lettersTotype = document.querySelectorAll(".words span");
  console.log(lettersTotype);
  firstLetter = lettersTotype[0];
  firstLetter.classList.add("letter-to-type");
   showPressedKey(firstLetter.innerHTML);
};

window.addEventListener("DOMContentLoaded", drawWorlds);



const showPressedKey = function(key){
  for(let i = 0;i<keys.length;i++){
    if (key === keys[i].innerHTML.toLowerCase()) {
      keys[i].classList.add("show-letter");
    }
  }
}

const removePressedKey = function (key) {
  for (let i = 0; i < keys.length; i++) {
    if (key === keys[i].innerHTML.toLowerCase()) {
      keys[i].classList.remove("show-letter");
    }
  }
};



window.addEventListener("keypress", function (e) {
  let letterToType = lettersTotype[i];
  if (letterToType.textContent === e.key) {
    let letterTyped = letterToType;
    letterToType = lettersTotype[++i];
    removePressedKey(letterTyped.innerHTML);
    showPressedKey(letterToType.innerHTML);
    console.log(letterToType.innerHTML);
    letterTyped.classList.remove("letter-to-type");
    letterToType.classList.add("letter-to-type");
  }
  if (i === lettersTotype.length - 1) {
    drawWorlds();
  }
});

function generateWord(letters) {
  const wordLength = generateWordLength();
  let word = "";
  for (let i = 0; i <= wordLength; i++) {
    let index = generateRandomNumber(letters.length);
    word += chosenLetters[index];
  }
  return word;
}

function generateWordLength() {
  return Math.floor(Math.random() * 6 + 3);
}

function generateRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}
