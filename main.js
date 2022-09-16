let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let playerChoose = document.getElementById('playerChoose')
let computerChoose = document.getElementById('computerChoose');
let result = document.getElementById('result');
let Pscore = 0;
let Cscore = 0;
rock.onclick = function(){
  let Pchoose = 'Rock';
  playerChoose.innerHTML = Pchoose;
  let Cchoose = '';
  let rps = ['Rock','Paper','Scissor',
  'Rock','Paper','Scissor'
  ,'Rock','Paper','Scissor'];
  for(let i = 0; i <9 ; i++){
    let choose = Math.floor(Math.random()*rps.length);
    Cchoose = rps[choose];
  };
  computerChoose.innerHTML = Cchoose;
if (Cchoose == 'Rock') {
  result.innerHTML = 'Draw';
  result.style.background = '#737374';
}
else if (Cchoose == 'Paper'){
  result.innerHTML = 'You lose!';
  result.style.background = '#FF4242';
  Cscore ++;
  computerScore.innerHTML = Cscore;
}
else if (Cchoose == 'Scissor') {
  result.innerHTML = 'You win!';
  result.style.background = '#00F661';
  Pscore++;
  playerScore.innerHTML = Pscore;
}
};
paper.onclick = function() {
  let Pchoose = 'Paper'
  playerChoose.innerHTML = Pchoose;
  let Cchoose = '';
  let rps = ['Rock', 'Paper', 'Scissor',
    'Rock', 'Paper', 'Scissor'
    , 'Rock', 'Paper', 'Scissor'];
  for (let i = 0; i < 9; i++) {
    let choose = Math.floor(Math.random() * rps.length);
    Cchoose = rps[choose];
  };
  computerChoose.innerHTML = Cchoose;
  if (Cchoose == 'Paper') {
    result.innerHTML = 'Draw';
    result.style.background = '#737374';
  }
  else if (Cchoose == 'Scissor') {
    result.innerHTML = 'You lose!';
    result.style.background = '#FF4242';
    Cscore++;
    computerScore.innerHTML = Cscore;
  }
  else if (Cchoose == 'Rock') {
    result.innerHTML = 'You win!';
    result.style.background = '#00F661';
    Pscore++;
    playerScore.innerHTML = Pscore;
  }
};
scissor.onclick = function() {
  let Pchoose = 'Scissor'
  playerChoose.innerHTML = Pchoose;
  let Cchoose = '';
  let rps = ['Rock', 'Paper', 'Scissor',
    'Rock', 'Paper', 'Scissor'
    , 'Rock', 'Paper', 'Scissor'];
  for (let i = 0; i < 9; i++) {
    let choose = Math.floor(Math.random() * rps.length);
    Cchoose = rps[choose];
  };
  computerChoose.innerHTML = Cchoose;
  if (Cchoose == 'Scissor') {
    result.innerHTML = 'Draw';
    result.style.background = '#737374';
  }
  else if (Cchoose == 'Rock') {
    result.innerHTML = 'You lose!';
    result.style.background = '#FF4242';
    Cscore++;
    computerScore.innerHTML = Cscore;
  }
  else if (Cchoose == 'Paper') {
    result.innerHTML = 'You win!';
    result.style.background = '#00F661';
    Pscore++;
    playerScore.innerHTML = Pscore;
  }
};
