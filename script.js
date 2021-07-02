// DEEL 1 ***********************************************

const bigFiveButtons = document.querySelectorAll('.big-five-button');

const spottedList = document.getElementById("spotted-animals-list");

Array.from(bigFiveButtons).forEach(function(button) {
    button.addEventListener('click', function(event) {
        //console.log(event.target.textContent);
        const newListElement = document.createElement("li");
        newListElement.innerHTML = event.target.textContent;
        spottedList.appendChild(newListElement);
        });
});

// DEEL 2 ***********************************************

const removeTheFirstButton = document.querySelector('#remove-first-item-button');

removeTheFirstButton.addEventListener('click', function() {
    const child = spottedList.getElementsByTagName('li')[0];
    spottedList.removeChild(child);
});

// DEEL 3 ***********************************************

const removeAllButton = document.querySelector('#remove-all-button');

removeAllButton.addEventListener('click', function(){
    const chi = spottedList.getElementsByTagName('li');
    while(spottedList.firstChild) {
        spottedList.removeChild(spottedList.firstChild)
    }
});