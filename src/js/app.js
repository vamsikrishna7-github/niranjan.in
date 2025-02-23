/* home contact buttons skills buttons */
function mEnter(btn){
    const img=btn.querySelector(".contact-btn");
    img.style.filter = 'brightness(0) invert(1)';
}
function mExit(btn){
    const img=btn.querySelector(".contact-btn");
    img.style.filter = 'brightness(0) invert(0)';
}

/* myskills grid */
window.addEventListener('resize', () => {
    console.log(window.innerWidth);
    const container = document.querySelector('.cust-js');

    if (window.innerWidth >= 994) {
        container.classList.add('w-75');
        console.log("added");
    } else {
        container.classList.remove('w-75');
        console.log("removed");
    }

    /* My Projects */
    if(window.innerWidth < 334){
        const skills = document.querySelectorAll('.project-img');
        skills.forEach(skill => {
            skill.style.width = '250px';
        });
    }
    else{
        const skills = document.querySelectorAll('.project-img');
        skills.forEach(skill => {
            skill.style.width = '300px';
        });
    }
});

/* My Projects */
document.addEventListener('DOMContentLoaded', () => {
    if(window.innerWidth <= 334){
        const skills = document.querySelectorAll('.project-img');
        skills.forEach(skill => {
            skill.style.width = '250px';
        });
        console.log("added " +'250px');
    }
});

