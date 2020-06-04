var hchoice, pscore, score;
score = 0;
document.querySelector('.rock').addEventListener('click', function() {
  cleareverything();
  var displayDOM = document.querySelector('.rock.ppick');
  displayDOM.style.display = 'block';
  var displayDOM = document.querySelector('.paper.ppick');
  displayDOM.style.display = 'none';
  var displayDOM = document.querySelector('.scissors.ppick');
  displayDOM.style.display = 'none';
  housechoice();
  if (hchoice == 'rock') {
    var displayDOM = document.querySelector('.rock.hpick');
    displayDOM.style.display = 'initial';
    var displayDOM = document.querySelector('.paper.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.scissors.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.tie');
    displayDOM.style.display = 'block';
  }
  if (hchoice == 'paper') {
    var displayDOM = document.querySelector('.paper.hpick');
    displayDOM.style.display = 'initial';
    var displayDOM = document.querySelector('.rock.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.scissors.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.youlose');
    displayDOM.style.display = 'block';
    pscore--;
    score = score + pscore;
    document.getElementById('score').innerHTML = score;
  }
  if (hchoice == 'scissors') {
    var displayDOM = document.querySelector('.scissors.hpick');
    displayDOM.style.display = 'initial';
    var displayDOM = document.querySelector('.paper.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.rock.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.youwin');
    displayDOM.style.display = 'block';
    pscore++;
    score = score + pscore;
    document.getElementById('score').innerHTML = score;
  }
})


document.querySelector('.paper').addEventListener('click', function() {
  cleareverything();
  var displayDOM = document.querySelector('.rock.ppick');
  displayDOM.style.display = 'none';
  var displayDOM = document.querySelector('.paper.ppick');
  displayDOM.style.display = 'initial';
  var displayDOM = document.querySelector('.scissors.ppick');
  displayDOM.style.display = 'none';
  housechoice();
  if (hchoice == 'rock') {
    var displayDOM = document.querySelector('.rock.hpick');
    displayDOM.style.display = 'initial';
    var displayDOM = document.querySelector('.paper.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.scissors.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.youwin');
    displayDOM.style.display = 'block';
    pscore++;
    score = score + pscore;
    document.getElementById('score').innerHTML = score;
  }
  if (hchoice == 'paper') {
    var displayDOM = document.querySelector('.paper.hpick');
    displayDOM.style.display = 'initial';
    var displayDOM = document.querySelector('.rock.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.scissors.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.tie');
    displayDOM.style.display = 'block';
  }
  if (hchoice == 'scissors') {
    var displayDOM = document.querySelector('.scissors.hpick');
    displayDOM.style.display = 'initial';
    var displayDOM = document.querySelector('.paper.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.rock.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.youlose');
    displayDOM.style.display = 'block';
    pscore--;
    score = score + pscore;
    document.getElementById('score').innerHTML = score;
  }
})

document.querySelector('.scissors').addEventListener('click', function() {
  cleareverything();
  var displayDOM = document.querySelector('.rock.ppick');
  displayDOM.style.display = 'none';
  var displayDOM = document.querySelector('.paper.ppick');
  displayDOM.style.display = 'none';
  var displayDOM = document.querySelector('.scissors.ppick');
  displayDOM.style.display = 'initial';
  housechoice();
  if (hchoice == 'rock') {
    var displayDOM = document.querySelector('.rock.hpick');
    displayDOM.style.display = 'initial';
    var displayDOM = document.querySelector('.paper.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.scissors.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.youlose');
    displayDOM.style.display = 'block';
    pscore--;
    score = score + pscore;
    document.getElementById('score').innerHTML = score;
  }
  if (hchoice == 'paper') {
    var displayDOM = document.querySelector('.paper.hpick');
    displayDOM.style.display = 'initial';
    var displayDOM = document.querySelector('.rock.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.scissors.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.youwin');
    displayDOM.style.display = 'block';
    pscore++;
    score = score + pscore;
    document.getElementById('score').innerHTML = score;
  }
  if (hchoice == 'scissors') {
    var displayDOM = document.querySelector('.scissors.hpick');
    displayDOM.style.display = 'initial';
    var displayDOM = document.querySelector('.paper.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.rock.hpick');
    displayDOM.style.display = 'none';
    var displayDOM = document.querySelector('.tie');
    displayDOM.style.display = 'block';
  }
})

function cleareverything() {
  pscore = 0;
  var displayDOM = document.querySelector('.buttons');
  displayDOM.style.display = 'none';
  var displayDOM = document.querySelector('.result');
  displayDOM.style.display = 'initial';
  var displayDOM = document.querySelector('.tie');
  displayDOM.style.display = 'none';
  var displayDOM = document.querySelector('.youlose');
  displayDOM.style.display = 'none';
  var displayDOM = document.querySelector('.youwin');
  displayDOM.style.display = 'none';
}

function housechoice() {
  var housechoicenum = Math.floor(Math.random() * 3) + 1;
  if (housechoicenum == 1) {
    hchoice = 'rock';
  }
  if (housechoicenum == 2) {
    hchoice = 'paper';
  }
  if (housechoicenum == 3) {
    hchoice = 'scissors';
  }
}

document.querySelector('.playagain').addEventListener('click', function() {
  var displayDOM = document.querySelector('.result');
  displayDOM.style.display = 'none';
  var displayDOM = document.querySelector('.buttons');
  displayDOM.style.display = 'flex';
})
document.querySelector('.rulesbutton').addEventListener('click', function() {
  var displayDOM = document.querySelector('.popup');
  displayDOM.style.display = 'block';
  var backgrounddisplayDOM = document.querySelector('.background');
  backgrounddisplayDOM.style.opacity = '0.2';
  var foregrounddisplayDOM = document.querySelector('.popup');
  foregrounddisplayDOM.style.opacity = '1';
})

document.querySelector('.close').addEventListener('click', function() {
  var displayDOM = document.querySelector('.popup');
  displayDOM.style.display = 'none';
  var backgrounddisplayDOM = document.querySelector('.background');
  backgrounddisplayDOM.style.opacity = '1';
})
