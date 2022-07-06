'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelectorAll('.show-modal');
console.log(openBtn);

const openWindow = function () {
    console.log(`Button clicked`);
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeWindow = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i < openBtn.length; i++)
    openBtn[i].addEventListener('click' , openWindow)
    closeBtn.addEventListener('click',closeWindow)
    overlay.addEventListener('click', closeWindow)

    document.addEventListener('keydown', function(e) {
        console.log(e.key);
        //                         i don't need this
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeWindow()
        }
        
    })

    
        
