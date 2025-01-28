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
- Using Rita.tokenize, RiTa.pluralize, RiTa.isNoun, RiTa.concordance
```
 for (let x = 0; x < words.length; x++) {
	if (RiTa.isStopWord(words[x])) {
      words[x] = RiTa.pluralize(words[x + 1]);
    } else {
      if (RiTa.isNoun(words[x])) {
        words[x] = RiTa.randomWord("n"); 
      }
    }
  }
```
- Words in an array is ran through
- StopWord falls under RiTa.concordance refers words like 'the','and','a','of'
  * taken from the reference
    "{boolean} options.ignoreStopWords: Ignore words like 'the', 'and', 'a', 'of', etc, as specified in RiTa.STOP_WORDS"
-  If StopWord is mentioned in userinput text, next word would be in plural form
-  Or else (no StopWord), checks if the current word is a noun (RiTa.isNoun), it will be replaced by a random noun (RiTa.randomWord("n")


## Notes

## 1) User input for text
```
let font1;
let userInput;
let button;
let userLine;

//using array
let poem = [];

function preload(){
font1 = loadFont('file path.otf');}

in SETUP
userInput = createInput();
userInput.position(x, y);
button = createButton('add to poem');
button.position(userInput.x, userInput.y);
	- this positions the button right beneath the userInput
	- plus/minus to x/y coordinate to adjust 
mousePressed(newLine);

in DRAW
text('text here', x, y);
text(variable, x, y);
writePoem();

after DRAW
function newLine(){
user line = userInput.value();
poem.push(userLine);
}
	- when button is clicked, add on inputs will be displayed

function writePoem(){
for(x = 0; x<poem.length; x++>)}
text(poem[x]), x, y,);
	- this cycles through the array
	- for text to appear further down each time, on y: start number + x * value 
```

### 2) Clearing input
 - clearing input in input box after button is pressed
```
function newLine(){
userLine = userInput.value();
userInput.value('');
	- empty string
poem.push(userLine);
}
```

### 3) Getting RiTa with the sketch
```
function name(){
userLine = userInput.value();
userInput.value('');
let words = RiTa.tokenize(userLine);
- tokenize: the splitting of string to words
let r = floor(random(0, words.length));
	- floor: whole number
	- random words in input
poem.push(userLine);
```

### 4) Rhyming words
```
let rhymes = RiTa.rhymesSync(words['chosen word']));
```

### 5) Selecting one word from array, replacing word taken
```
let changedWord = random(rhymes);
words [r] = changedWord;
```

### 6) Putting it back into one string
```
userLine = RiTa.untokenize(words);

function name(){
userLine = userInput.value();
userInput.value('');
let words = RiTa.tokenize(userLine);
let r = floor(random(0, words.length));
let rhymes = RiTa.rhymesSync(words['chosen word']));
let changedWord = random(rhymes);
words [r] = changedWord;
userLine = RiTa.untokenize(words);
poem.push(userLine);
```

### 7)) If unable to rhyme
- introduce if statement
- unable to find rhyme statement just repeats rather than blank
```
if (rhymes.length === 0){
poem.push(userLine);
} else {
let changedWord = random(rhymes);
```

### 8) Check with nouns
- button press, two lines added, one user, one generated
```
let userInput;
let button;
let userLine;
let response;

let poem[];

function preload(){
font1 = loadFont('filepath.otf');}

SETUP
textFont(font1);
userInput = createInput();
userInput.position(x, y);
button = createButton('add to poem');
button.position(userInput.x, userInput.y + 21);
button.mousePressed(newLine);

DRAW
writePoem();

function newLine(){
userLine = userInput.value();
userInput.value('')
poem.push(userLine);
let words = RiTa.tokenize(userLine);
for(x = 0; x<words.length; x++){
if(RiTa.isNoun(words[x])){
response += RiTa.randomWord({pos: "nn"});
}
	- if RiTa finds a noun, it will replace with a random noun instead
} else {
response +=words[i];
	- whatever else is in the array
poem.push(reponse);}
```

### 5) Reset after each response
```
let words = RiTa.tokenize(userLine);
response = ' ';

response +=words[x];
}
response += ' ';
```
