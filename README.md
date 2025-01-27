# Workshop-6
Link: [https://whosaidthat-3636.github.io/Workshop-6/]

## Tasks
- Create an interactive nonsense poem generator using the rita.js library.
- Use at least three different functions from the rita.js library to process the user's input.

## Documentation
### 1) Setup 
- Preloading font
- Creating text box and button to submit for display for user
```
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
```

### 2) RiTa
- Using Rita.tokenize, RiTa.pluralize, RiTa.isNoun
- The idea is to 
