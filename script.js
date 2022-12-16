let insideMas = ['<img src="./images/heart.png" alt="heart">', '<img src="./images/skull.png" alt="skull">', '<img src="./images/stair.png" alt="stair">', '<img src="./images/stairdown.png" alt="stairdown">'];
let floorCount = 1;
let floor = document.querySelector('.floor');

let heartCount = 2;
let hearts = document.querySelector('.heart');


let shuffledArr = () => {
  insideMas.sort(function(){
  return Math.random() - 0.5;
});
}
shuffledArr();

let insideItem = document.querySelectorAll('.randitem');
for (let i=0; i<insideItem.length; i++) {
  insideItem[i].innerHTML = insideMas[i];
}

let doors = document.querySelectorAll('.doors');
    for( let i=0; i<doors.length; i++) {
    doors[i].classList.add(`floor${floorCount}`);
 }


let container = document.querySelector('.container');
container.onclick = function(event) {
  if (event.target.classList.contains('doors')) {
    event.target.classList.remove(`floor${floorCount}`);
    event.target.lastChild.classList.remove('hide');
    
    if (event.target.lastChild.lastChild.getAttribute('alt') == 'stair') {
      event.target.classList.add('stairbg');
      setTimeout(pass,1000); 
  }
    if (event.target.lastChild.lastChild.getAttribute('alt') == 'stairdown') {
      event.target.classList.add('stairdownbg');
      setTimeout(down,1000); 
  }

  
  if (event.target.lastChild.lastChild.getAttribute('alt') == 'heart') {
    event.target.classList.add('heartbg');
    event.target.lastChild.lastChild.classList.add('animatedheart');
    heartCount++;
    hearts.textContent = heartCount;
  }
  if(event.target.lastChild.lastChild.getAttribute('alt') == 'skull') {
    event.target.classList.add('skullbg');
    event.target.lastChild.lastChild.classList.add('animatedskull');
    heartCount--;
    hearts.textContent = heartCount;
    if (heartCount == 0) setTimeout(toEnd,800);
  }
}
}


function pass() {
  floorCount++;
  if (floorCount == 9) setTimeout(win, 1000)
  floor.textContent = floorCount;

  container.classList.remove(`conbg${floorCount-1}`);
  container.classList.add(`conbg${floorCount}`);

  for( let i=0; i<doors.length; i++) {
    doors[i].classList.remove(`floor${floorCount-1}`,'skullbg','heartbg','stairbg','stairdownbg');
    doors[i].classList.add(`floor${floorCount}`);
    doors[i].lastChild.classList.add('hide');  
}

shuffledArr();

for (let i=0; i<insideItem.length; i++) {
insideItem[i].innerHTML = insideMas[i];
}
}

function down() {
  if (floorCount == 1) return false;
  else {
  floorCount--;
  floor.textContent = floorCount;

  container.classList.remove(`conbg${floorCount+1}`);
  container.classList.add(`conbg${floorCount}`);

  for( let i=0; i<doors.length; i++) {
    doors[i].classList.remove(`floor${floorCount+1}`,'skullbg','heartbg','stairbg','stairdownbg');
    doors[i].classList.add(`floor${floorCount}`);
    doors[i].lastChild.classList.add('hide');  
}

shuffledArr();

for (let i=0; i<insideItem.length; i++) {
insideItem[i].innerHTML = insideMas[i];
}
}
}

function toEnd() {
  let end = document.createElement('div');
  end.className = 'end';
  end.textContent = 'Ты не прошел!!!';
  let endButton = document.createElement('button');
  endButton.classList = 'endButton';
  endButton.textContent = "Попробовать еще";
  endButton.onclick = function() {window.location.reload();}
  container.innerHTML = '';
  container.append(end);
  container.append(endButton);
  
}

function win() {
  let win = document.createElement('div');
  win.className = 'win';
  win.textContent = 'Восхищены вашей интуицией!Поздравляем!Сможете ещё?';
  let winButton = document.createElement('button');
  winButton.classList = 'winButton';
  winButton.textContent = "Смогу";
  winButton.onclick = function() {window.location.reload();}
  container.innerHTML = '';
  container.append(win);
  container.append(winButton);
}





