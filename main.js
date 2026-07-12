const mobileToggle = document.querySelector('#mobile-toggle');
const pages = document.querySelector('#pages');

mobileToggle.addEventListener('click', function() {
    if(mobileToggle.classList.contains('active')) { 
    mobileToggle.classList.remove('active');
    pages.classList.remove('active');
    }
    else {
    mobileToggle.classList.add('active');
    pages.classList.add('active');
    }
});
