let score = 0;
let highScore = 0;
let points = 0;
let difficulty = 0;
let lifes = 0;
let randomNum = 0;

let pScore = document.getElementById('score');
let pHighScore = document.getElementById('highScore');
let playerLifes = document.getElementById('playerLifes');

let easy = document.getElementById('easy');
let normal = document.getElementById('normal');
let hard = document.getElementById('hard');
let displayGame = document.getElementById('display');
let btnStart = document.getElementById('startGameBtn');
let comparebtn = document.getElementById('comparebtn');
let continuebtn = document.getElementById('continuebtn');
let pTitle = document.getElementById('pTitle');

pScore.textContent = score;
pHighScore.textContent = highScore;

easy.addEventListener('click',()=>{
    easy.checked = true;
    normal.checked = false;
    hard.checked = false;
    points = 100;
    difficulty = 1;
    lifes = 10;
    console.log(lifes)
})
normal.addEventListener('click',()=>{
    normal.checked = true;
    easy.checked = false;
    hard.checked = false;
    points = 70;
    difficulty = 2;
    lifes = 7;
    console.log(lifes)
})
hard.addEventListener('click',()=>{
    hard.checked = true;
    easy.checked = false;
    normal.checked = false;
    points = 50;
    difficulty = 3;
    lifes = 5;
    console.log(lifes)
})

function startGame(){
    if(easy.checked == true || normal.checked == true || hard.checked == true){
        easy.disabled = true;
        normal.disabled = true;
        hard.disabled = true;
        displayGame.disabled = false;
        btnStart.disabled = true;
        comparebtn.disabled = false;
        playerLifes.innerText = `Tienes ${lifes} intentos`;
        randomNum = Math.floor(Math.random()*100) + 1
    }else{
        alert('Por favor seleccione una dificultad')
    }
}

function resetGame(){
    points = 0
    score = 0
    easy.disabled = false;
    easy.checked = false;
    normal.disabled = false;
    normal.checked = false;
    hard.disabled = false;
    hard.checked = false;
    difficulty = 0;
    displayGame.disabled = true;
    btnStart.disabled = false;
    comparebtn.disabled = true;
    randomNum = 0;
    displayGame.value = "";
    playerLifes.innerText = "";
    pTitle.style.color = "#000";
    pTitle.innerText= "Ingresa un Número entre 1 y el 100"
    pScore.textContent = score;
    continuebtn.disabled = true
}
function compareNumber(){
    let numberSelect = parseInt(displayGame.value)
    
    if(numberSelect < 1 || numberSelect > 100 || isNaN(numberSelect)){
        pTitle.style.color = "#fe0d0d";
        return
    }
    if(numberSelect === randomNum){
        pTitle.innerText = '¡Felicidades acertaste!';
        pTitle.style.color = "green";
        score += points;
        pScore.textContent = score
        displayGame.disabled = true;
        comparebtn.disabled = true;
        continuebtn.disabled = false;
    }else if(numberSelect < randomNum){
        pTitle.textContent = " El número secreto es mas alto";
        points -= 10;
        lifes -= 1;
        playerLifes.innerText = `Tienes ${lifes} intentos`
        if(lifes === 0){
            pTitle.innerText = "Game Over";
            pTitle.style.color = "#fe0d0d";
            displayGame.disabled = true;
            comparebtn.disabled = true;
            continuebtn.disabled = true;
            if(score > highScore){
                highScore = score
                pHighScore.innerText = highScore
            }
        }
    }else{
        pTitle.textContent = " El número secreto es menor";
        points -= 10;
        lifes -= 1;
        playerLifes.innerText = `Tienes ${lifes} intentos`;
        if(lifes === 0){
            pTitle.innerText = "Game Over";
            pTitle.style.color = "#fe0d0d";
            displayGame.disabled = true;
            comparebtn.disabled = true;
            continuebtn.disabled = true;
            if(score > highScore){
                highScore = score
                pHighScore.innerText = highScore
            }
        }
    }    
}

function continueGame(){
    randomNum = Math.floor(Math.random()*100) + 1;
    pTitle.innerText= "Ingresa un Número entre 1 y el 100";
    pTitle.style.color = '#000';
    displayGame.value = "";
    displayGame.disabled = false;
    comparebtn.disabled = false;
    if(difficulty === 1){
        lifes = 10;
        playerLifes.innerText = `Tienes ${lifes} intentos`;
        points = 100
    }else if(difficulty === 2){
        lifes = 7;
        playerLifes.innerText = `Tienes ${lifes} intentos`;
        points = 70
    }else if(difficulty === 3){
        lifes = 5;
        playerLifes.innerText = `Tienes ${lifes} intentos`;
        points = 50
    }
}

function closeModal(){
    let modal = document.querySelector('.modal-container');
    modal.classList.add('close')
}