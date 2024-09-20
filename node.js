

const progress = document.querySelector('.progress'); 
const circle = document.querySelectorAll('.circal'); 
const btnNext = document.querySelector('#next')
const btnPrev = document.querySelector('#prev')

let activeIteration = 1; 

function update() {
    if (activeIteration <= 3) {
        circle[activeIteration].classList.add('active');
        // console.log(circle);
        activeIteration++;
    }
}

btnNext.addEventListener('click', () => {
    if (activeIteration <= 3) {
        update();
        
        let currentWidth = parseFloat(progress.style.width) || 0;
        progress.style.width = (currentWidth + 33.3) + '%'; 
        // console.log(activeIteration);
        
        if (activeIteration > 3) {
            btnNext.disabled = true;
        }
        btnPrev.disabled = false;
    }
});

function noUpdate() {
    if (activeIteration > 1) {
        circle[activeIteration-1].classList.remove('active');
        // console.log(circle);
        activeIteration--;
    }
}

btnPrev.addEventListener('click', () => {
    if (activeIteration > 1) {
        noUpdate();
        
        let currentWidth = parseFloat(progress.style.width) || 0;
        progress.style.width = (currentWidth - 33.3) + '%'; 
        // console.log(activeIteration);

        if (activeIteration <= 1) {
            btnPrev.disabled = true;
        }
        btnNext.disabled = false;
    }
});
