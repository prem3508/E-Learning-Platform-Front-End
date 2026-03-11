const progressFill = document.getElementById('progress-fill');
const completeBtn = document.getElementById('complete-btn');

let progress = 0;

completeBtn.addEventListener('click', () => {
    if(progress < 100){
        progress += 25;
        if(progress > 100) progress = 100;
        progressFill.style.width = progress + '%';
        progressFill.textContent = progress + '%';
    }
});
