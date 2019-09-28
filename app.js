// main UI contnet 
const contentUI = document.querySelector('.list-content');
const listUI = document.querySelector('.list');
let seconds = 0;
let minutes = 0;
let interval;
let allCards = [];

// create element Node ... 
const createTimerNode = () => {
    const timerNode = document.createElement('section');
    // make it a11y 
    timerNode.setAttribute('role','timer');
    timerNode.tabIndex = 0 ;
    timerNode.className = 'timer-node';
    let timer = document.createElement('strong');
    timer.className = 'timer';
    timer.textContent = `${minutes}0:0${seconds}`;
    timerNode.appendChild(timer);
    contentUI.insertBefore(timerNode, listUI);
}

createTimerNode();

const createItems = (list) => {
    // temporary element 
    const fragment = document.createDocumentFragment();
    for (let i = 0; i <= 8; i++) {
        let li = document.createElement('li');
        li.className = 'item';
        fragment.appendChild(li);
    }
    list.appendChild(fragment);
}
createItems(listUI);

// delegation event
listUI.addEventListener('click', (e) => {
    // check before execut . 
    if (!e.target.matches('li')) return;
    // To avoid to change background color that already has. 
    if (e.target.classList.contains('added')) return;
    changeColor(e.target);
    allCards.push(e.target);
    if (allCards.length === 1) {
        timerCount();
    }
    if (isAllCardsOpened()) {
        mdtoast('Greate you do it 👍 👍 ', { duration: 10000, type: mdtoast.SUCCESS }).show();
        clearInterval(interval);
    }
    isClicked = false;
});
let timerCount = () => { interval = setInterval(updateSeconds, 1000) };
let updateSeconds = () => {
    const timerNode = document.querySelector('.timer');
    seconds++;
    if (seconds === 60) {
        minutes++; seconds = 0;
    }
    // tenrary operator .
    timerNode.innerHTML = `0${minutes}:${seconds > 9 ? seconds : `0${seconds}`}`
}

function isAllCardsOpened() {
    if (allCards.length === 9) return true
    return false;
}


// random color 
function randomColor(number) {
    return Math.floor(Math.random() * number);
}

// change bg color 
function changeColor(target) {
    let color = `rgb( ${randomColor(200)},${randomColor(250)},${randomColor(250)})`;
    target.classList.add('added');
    target.style.backgroundColor = color;
}
