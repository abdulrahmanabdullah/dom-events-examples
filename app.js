// Get main view 
// main contnet UI 
const contentUI = document.querySelector('.list-content');
const listUI = document.querySelector('.list');


function createItems(list) {
    for (let i = 0; i <= 8; i++) {
        const li = document.createElement('li');
        li.className = 'item';
        list.appendChild(li);
    }

}


// unordered list listener 
listUI.addEventListener('click', (e) => {
    // check before execut this event 
    if (!e.target.matches('li')) return
    // To avoid to change background color that already has. 
    if(e.target.classList.contains('added')) return ;
    changeColor(e.target);
});




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

createItems(listUI);