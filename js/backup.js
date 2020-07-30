'use strict';

{
  const words = [
    'apple',
    'sky',
    'blue',
    'middle',
    'set',
  ];

  // let quest = quests[Math.floor(Math.random() * 4)];
  let word = words[Math.floor(Math.random() * words.length)];
  let loc = 0;
  let score = 0;
  let miss = 0;

  const target1 = document.getElementById('target1');
  const target2 = document.getElementById('target2');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');

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

  document.getElementById("target1").style.visibility ="hidden";

  window.addEventListener('click', () => {
  updateTarget();
  target1.style.visibility ="visible";
  });

  window.addEventListener('keyup', e => {
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
