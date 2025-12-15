import { elHands,elUser,elRobot, elRefershGame, elGameZone,elResultZone} from "./html-el.js";

//   robot choose 
function robotchoose() {
    const hands = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.trunc(Math.random() * hands.length);
    return hands[randomIndex];
};
// swap zones   

function swapZone (boolean) {
     if (boolean) {
        elGameZone.style.display = 'none';
         elResultZone.style.display = 'flex';
     }
        else {
         elGameZone.style.display = 'block';
         elResultZone.style.display = 'none';
}}

// Find winner
 let score=0;
 function findWinner (user, robot) {
    if (user === robot) {
        return 'TIE';
    }else if (user === 'paper' && robot === 'scissors') {
        score=score+1/2;
        return 'ROBOT';
    }else  if (user === 'scissors' && robot === 'rock' ) {
        score=score-1/2;
        return 'ROBOT';
    }else  if (user === 'rock' && robot === 'paper') {
        score=score+1/2;
        return 'ROBOT';
    }else {
        score=score-1/2;
        return 'USER';
    }
 }

// Hand
elHands.forEach(elhand => {
    elhand.addEventListener('click', (evnt) => {
         swapZone (true);
            
        const user = evnt.target.alt;
        const robot = robotchoose();
  

        elUser.src = evnt.target.src;
        elRobot.src = "./img/hand-load.svg";

        setTimeout(() => {
            elRobot.src = `./img/${robot}.png`;
          const winner = findWinner(user, robot);
            alert(winner);
        }, 1000 ,)
        ;
    })});

// Refresh game
elRefershGame.addEventListener('click', () => {
    swapZone (false);
});

