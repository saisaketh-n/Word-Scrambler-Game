var wordTable = document.querySelectorAll('td');
var eggs = document.querySelectorAll('img');
var livesImages = document.getElementById('lives');
var titleDisplay = document.getElementById('title-display');
var blankSpaces = document.getElementById('blank-spaces');
var answerList = document.querySelectorAll('li');
var levelDisplay = document.getElementById('level-display');
var biggerBoard = document.querySelectorAll('.level-up-invisible');
var rightHalf = document.getElementById('right-half');
var directions = document.createElement('h2');

var quitBtn = document.getElementById('quit');
quitBtn.addEventListener('click', quit);

var hintBtn = document.getElementById('hint');  
hintBtn.addEventListener("click", hint);

var retryBtn = document.getElementById('retry');
retryBtn.addEventListener("click", retryLevel);

var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');
var t6 = document.getElementById('t6');
var t7 = document.getElementById('t7');
var t8 = document.getElementById('t8');
var t9 = document.getElementById('t9');
var l1 = document.getElementById('l1');
var l2 = document.getElementById('l2');
var l3 = document.getElementById('l3');
var l4 = document.getElementById('l4');
var l5 = document.getElementById('l5');
var l6 = document.getElementById('l6');
var l7 = document.getElementById('l7');

var startBtn;

var gameWon;
var gameOver;
var level = 0;

var lifeLoss;
var lives = [];

var lettersPlayed = [];
var completedWords = [];

var levelsArray = [
        {board: shuffleArray(["B","U","T","T","E","R","F","L","Y"]),
         hint: "Insect with colorful wings : starts with 'B'",
         levelAnswers: ["BUTTERFLY"],
         image: "heart.png"
        } ,
        {board: shuffleArray(["A","M","B","U","L","A","N","C","E"]),
         hint: "A vehicle used to transport sick or injured people to the hospital : starts with 'A'",
         levelAnswers: ["AMBULANCE"],
         image: "heart.png"
        } ,
        {board: shuffleArray(["E","D","U","C","A","T","I","O","N"]),
         hint: "The process of acquiring knowledge, skills, and values : starts with 'E'",
         levelAnswers: ["EDUCATION"],
         image: "heart.png"
        } ,
        {board: shuffleArray(["D","I","F","F","E","R","E","N","T"]),
         hint: "not alike, distinct or separate : starts with 'D'",
         levelAnswers: [ "DIFFERENT"],
         image: "heart.png"
        } ,
        {board: shuffleArray(["B","A","R","O","M","E","T","E","R"]),
         hint: "An instrument for measuring atmospheric pressure : starts with 'B'",
         levelAnswers: ["BAROMETER"],
         image: "heart.png"
        } ,
        {board: shuffleArray(["P","A","R","A","S","I","T","E","S"]),
         hint: "organisms that live in or on another organism : starts with 'P'",
         levelAnswers: ["PARASITES"],
         image: "heart.png"
        } ,
        {board: shuffleArray(["P","R","O","C","E","S","S","O","R"]),
         hint: "Central unit of a computer : starts with 'P'",
         levelAnswers: ["PROCESSOR"],
         image: "heart.png"
        } ,
        {board: shuffleArray(["E","N","T","R","E","P","R","E","N","E","U","R","S","H","I","P"]),
         hint: "The activity of creating or starting a new business or venture in order to make a profit : starts with 'E'",
         levelAnswers: ["ENTREPRENEURSHIP"],
         image: "heart.png"
        } ,
        {board: shuffleArray(["R","E","S","P","O","N","S","I","B","I","L","I","T","I","E","S"]),
          hint: "The opportunity or ability to act independently and take decisions without authorization : starts with 'R'",
          levelAnswers: ["RESPONSIBILITIES"],
          image: "heart.png"
        } ,
        {board: shuffleArray(["N","A","T","I","O","N","A","L","I","S","A","T","I","O","N","S"]),
         hint: "The process of taking privately-controlled companies, industries, or assets and putting them under the control of the government : starts with 'N'",
         levelAnswers: ["NATIONALISATIONS"],
         image: "heart.png"
        } ,
]

function retryLevel(){
    completedWords.length = 0;
    lettersPlayed.length = 0;
    gameWon = false;
    gameOver = false;
    levelDisplay.textContent = "Level: " + (level + 1);
    for(let cube of wordTable){
        cube.style.borderColor = "black";
    }
    addClickListener()
    answerDisplay();
    boardLetterAssigner();
}

function hint(){
    alert(levelsArray[level].hint);
}

function quit(){
    level = 0;
    if(level==0)
       quitBtn.disable='true' 
    
    else
    quitBtn.disable='false' 


    gameWon = false;
    gameOver = false;
    lifeLoss = false;
    addClickListener()
    answerDisplay();
    completedWords.length = 0;
    lettersPlayed.length = 0;
    levelDisplay.textContent = "Level: " + (level + 1);
    score.innerText="score : " + 0;
    boardLetterAssigner();
    lives = [];
    lifeCreator();
}

function shuffleArray(arrayBoard){
    let list = arrayBoard.length;
    let index;
    let element;
    while(list>0){
        index = Math.floor(Math.random() * list);
        list--;
        element = arrayBoard[list];
        arrayBoard[list] = arrayBoard[index];
        arrayBoard[index] = element;
    }
    return arrayBoard;
}

