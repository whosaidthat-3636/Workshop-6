let font1;
let userInput;
let button;
let poem = []; 

function preload() {
  font1 = loadFont('monofonto rg.otf');
}

function setup() {
  createCanvas(600, 400);
  textFont(font1);

  userInput = createInput();
  userInput.position(80, 60);

  button = createButton('Add to poem');
  button.position(userInput.x + 170, userInput.y);
  button.mousePressed(newLine);
}

function draw() {
  background(230, 215, 255); 
  writePoem();  
}

function newLine() {
  let userLine = userInput.value();
  userInput.value('');
  let words = RiTa.tokenize(userLine);

  for (let x = 0; x < words.length; x++) {
    if (RiTa.isStopWord(words[x])) {
      words[x] = RiTa.pluralize(words[x + 1]);
    } else {
      if (RiTa.isNoun(words[x])) {
        words[x] = RiTa.randomWord("n"); 
      }
    }
  }

  userLine = RiTa.untokenize(words);
  poem.push(userLine);
}

function writePoem() {
  fill(0);  
  for (let x = 0; x < poem.length; x++) {
    text(poem[x], 253, 110 + x * 20);  
  }
}
