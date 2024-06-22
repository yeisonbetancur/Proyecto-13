const rock = document.querySelector('#rock1');
const paper = document.querySelector('#paper1');
const scissors = document.querySelector('#scissor1');
const rock2 = document.querySelector('#rock2');
const paper2 = document.querySelector('#paper2');
const scissors2 = document.querySelector('#scissor2');
const result = document.querySelector('.result');
let player1Move;
let player2Move;
let i = 1;
let j = 1;
let player1Score = 0;
let player2Score = 0;
let bot=false;
const randomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Retorna un numero aleatorio entre min y max
};
const getRandomMove = () => {
  let value = randomValue(0,2)
  if (value == 0){
    return "rock"
  }
  if (value == 1){
    return "paper"
  }
  if (value == 2){
    return "scissor"
  }
}
function hideOverlay() {
  let el = document.getElementById("overlay");
  el.setAttribute("style", "display:none;");

}

//1 o 2
document.addEventListener('click', function(event) {
  if (event.target.tagName === 'INPUT') {
    hideOverlay()
    i=prompt("ingrese la cantidad de rondas");
    if (event.target.id == "twoPeoples") {
      rock.addEventListener('click', leer);
      paper.addEventListener('click', leer);
      scissors.addEventListener('click', leer);
      rock2.addEventListener('click', leer2);
      paper2.addEventListener('click', leer2);
      scissors2.addEventListener('click', leer2);
    } else if (event.target.id == "onePeople") {
      rock.addEventListener('click', leer);
      paper.addEventListener('click', leer);
      scissors.addEventListener('click', leer);
      player2Move = getRandomMove();
      bot = true;
    }
  }
})



function leer(event) {



  const imagenId = event.target.className;
  player1Move = imagenId;
  rock.removeEventListener('click', leer);
  paper.removeEventListener('click', leer);
  scissors.removeEventListener('click', leer);
  compare();


};
function leer2(event) {
 
  
  const imagenId = event.target.className; 
  player2Move = imagenId;
  rock2.removeEventListener('click', leer2);
  paper2.removeEventListener('click', leer2);
  scissors2.removeEventListener('click', leer2);
  compare();

};
function compare() {
  if (player1Move == player2Move) {
    result.textContent = `Partida ${j} [empate]      JUGADOR 1: ${player1Score} JUGADOR 2: ${player2Score};`;
      j++;
    if(i>1 && bot==false){
      i--;
      player1Move = 0;
      player2Move = 0;
      rock.addEventListener('click', leer);
      paper.addEventListener('click', leer);
      scissors.addEventListener('click', leer);
      rock2.addEventListener('click', leer2);
      paper2.addEventListener('click', leer2);
      scissors2.addEventListener('click', leer2);
    }else if(i>1 && bot==true){
      i--;
      player1Move = 0;
      player2Move = getRandomMove();
      rock.addEventListener('click', leer);
      paper.addEventListener('click', leer);
      scissors.addEventListener('click', leer);
    }
  } else if ((player1Move === "rock" && player2Move === "scissor") ||
    (player1Move === "paper" && player2Move === "rock") ||
    (player1Move === "scissor" && player2Move === "paper")) {
      player1Score++;
    result.textContent = `Partida ${j} [Jugador 1 gana]      JUGADOR 1: ${player1Score} JUGADOR 2: ${player2Score};`;
      j++;
    if(i>1 && bot==false){
      i--;
      player1Move = 0;
      player2Move = 0;
      rock.addEventListener('click', leer);
      paper.addEventListener('click', leer);
      scissors.addEventListener('click', leer);
      rock2.addEventListener('click', leer2);
      paper2.addEventListener('click', leer2);
      scissors2.addEventListener('click', leer2);
    }else if(i>1 && bot==true){
      i--;
      player1Move = 0;
      player2Move = getRandomMove();
      rock.addEventListener('click', leer);
      paper.addEventListener('click', leer);
      scissors.addEventListener('click', leer);
    }
  } else if ((player1Move === "paper" && player2Move === "scissor") ||
    (player1Move === "scissor" && player2Move === "rock") ||
    (player1Move === "rock" && player2Move === "paper")) {
      player2Score++;
    result.textContent = `Partida ${j} [Jugador 2 gana]      JUGADOR 1: ${player1Score} JUGADOR 2: ${player2Score};`;
      j++;
    if(i>1 && bot==false){
      i--;
      player1Move = 0;
      player2Move = 0;
      rock.addEventListener('click', leer);
      paper.addEventListener('click', leer);
      scissors.addEventListener('click', leer);
      rock2.addEventListener('click', leer2);
      paper2.addEventListener('click', leer2);
      scissors2.addEventListener('click', leer2);
    }else if(i>1 && bot==true){
      i--;
      player1Move = 0;
      player2Move = getRandomMove();
      rock.addEventListener('click', leer);
      paper.addEventListener('click', leer);
      scissors.addEventListener('click', leer);
    }
  }
console.log (i)
};

