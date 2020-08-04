const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message-box');
const restart = document.querySelector('.restart-btn');
const result = document.querySelector('.result');
const player1 = 'X';
const player2 = 'O';
let currentPlayer
let playCycleEndValue = false;
let values = []
let vIndex ;
let ValueArrayLength = 0
const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function startgame(e){
    vIndex = +e.target.id;
    changeCurrentPlayer();
    e.target.textContent = currentPlayer;
    values[vIndex] = currentPlayer;
    ValueArrayLength++ ;
    if(checkwinner(currentPlayer)){
        message.style.display = 'block';
        result.innerHTML = `${currentPlayer} won`;
    } else if(ValueArrayLength == 9){
        message.style.display = 'block';
        result.innerHTML = `Match Draw` ;
    }
}

function changeCurrentPlayer(){
    if(playCycleEndValue){
        currentPlayer = player2;
        playCycleEndValue = false;
    } else{
        currentPlayer = player1;
        playCycleEndValue = true;
    }
}

function checkwinner(currentPlayer){
    return winningCombination.some((individual) => {
        return individual.every((index) => {
                    return values[index] === currentPlayer ;
                })
    });
}

function triggersGame(){
    cells.forEach(cell => {
        cell.textContent = ''
        cell.addEventListener('click', startgame, {once : true});
    });
}
triggersGame();

restart.addEventListener('click', () =>{
    values = [] ;
    ValueArrayLength = 0
    message.style.display = 'none';
    triggersGame();
});
console.log('hi');