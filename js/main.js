'use strict';

{
  const words = [
    'apple',
    'sky',
    'blue',
    'middle',
    'set',
    'rain',
    'employment',
    'power',
    'form',
    'goal',
  ];

  // let quest = quests[Math.floor(Math.random() * 4)];
  let word = words[Math.floor(Math.random() * words.length)];
  let loc = 0;
  let score = 0;
  let miss = 0;
  const timeLimit = 4 * 5000;
  let startTime;
  let isPlaying = false;

  const target1 = document.getElementById('target1');
  const target2 = document.getElementById('target2');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');

  switch (word) {
    case 'apple':
      target1.innerHTML = ('りんご');
      break;
    case 'sky':
      target1.innerHTML = ('空');
      break;
    case 'blue':
      target1.innerHTML = ('青');
      break;
    case 'middle':
      target1.innerHTML = ('中間');
      break;
    case 'set':
      target1.innerHTML = ('セット');
      break;
    case 'rain':
      target1.innerHTML = ('雨');
      break;
    case 'employment':
      target1.innerHTML = ('就職');
      break;
    case 'power':
      target1.innerHTML = ('力');
      break;
    case 'form':
      target1.innerHTML = ('形式');
      break;
    case 'goal':
      target1.innerHTML = ('終点');
      break;
    default:
  }

  // target2.textContent = word;

  function updateTarget() {
    let placeholder = '';
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    target2.textContent = placeholder + word.substring(loc);
  }

  function updateTimer() {
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);

    const timeoutId = setTimeout(() => {
         updateTimer();
      }, 10);
    
      if (timeLeft < 0) {
        isPlaying = false;

        clearTimeout(timeoutId);
        timerLabel.textContent = '0.00';
        setTimeout(() => {
        showResult();
      }, 100);
      }
  }

  function showResult() {
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    var result = confirm(`${score} OKタイプ, ${miss} ミス, ${accuracy.toFixed(2)}% の精度!` + '\n' + 'リトライしますか？');
    if(result) {
      window.location.reload();
    } else {

    }
  }

  document.getElementById("target1").style.visibility ="hidden";

  window.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;

  updateTarget();
  target1.style.visibility ="visible";
  startTime = Date.now();
  updateTimer();
  });

  window.addEventListener('keyup', e => {
    if (isPlaying !== true) {
      return;
    }

    if (e.key === word[loc]) {
      loc++;
      if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
        switch (word) {
          case 'apple':
            target1.innerHTML = ('りんご');
            break;
          case 'sky':
            target1.innerHTML = ('空');
            break;
          case 'blue':
            target1.innerHTML = ('青');
            break;
          case 'middle':
            target1.innerHTML = ('中間');
            break;
          case 'set':
            target1.innerHTML = ('セット');
            break;
          case 'rain':
            target1.innerHTML = ('雨');
            break;
          case 'employment':
            target1.innerHTML = ('就職');
            break;
          case 'power':
            target1.innerHTML = ('力');
            break;
          case 'form':
            target1.innerHTML = ('形式');
            break;
          case 'goal':
            target1.innerHTML = ('終点');
            break;
          default:
        }
      }
      score++;
      scoreLabel.textContent = score;
      updateTarget();
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  });
}
