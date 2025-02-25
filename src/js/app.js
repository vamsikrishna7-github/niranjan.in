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
    // console.log(window.innerWidth);
    const container = document.querySelector('.cust-js');

    if (window.innerWidth >= 994) {
        container.classList.add('w-75');
        // console.log("added");
    } else {
        container.classList.remove('w-75');
        // console.log("removed");
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
        // console.log("added " +'250px');
    }
});

// scroll button
function onscrollTop(t) {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
        t.classList.add('d-none');;
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    const upbtn =document.querySelector('.onscrollTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            upbtn.classList.remove('d-none');
        } else {
            upbtn.classList.add('d-none');
        }
    });
});

// // responsive nav
// function activelink(link){
//     const links = document.querySelectorAll('.nav-link');
//     links.forEach(l => {
//         l.classList.remove('active');
//     });
//     link.classList.add('active');
// }


function activelink(){
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-link');
    const homelink = document.getElementsByName('home')[0];
    sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        console.log(`Section ${section.id} is in view.`);
        links.forEach(link => {
            if(link.name === section.id){
                link.classList.add('active');
                if(homelink) homelink.classList.remove('active');
            }
        });
       } else {
         links.forEach(link => {
            if(link.name === section.id){
                if(section.id === 'experience'){
                    if(homelink) homelink.classList.add('active');
                }
                link.classList.remove('active');
            }
         });
        }
   });
}

window.addEventListener('scroll', activelink);



// email validation section
function validateEmail(Vmail) {
    const send = document.getElementById('submit');

    if (!Vmail.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        if (send) send.classList.add('disabled'); 

        Vmail.classList.remove('border-dark', 'border-success', 'text-success');
        Vmail.classList.add('border-danger', 'text-danger');

        return false;
    } else {
        if (send) send.classList.remove('disabled');
        Vmail.classList.remove('border-danger', 'text-danger', 'border-dark');
        Vmail.classList.add('btn-success', 'text-success');

        return true;
    }
}

// response
function messageSend(btn) {
    const email = document.getElementById('email');
    btn.classList.remove('btn-dark');
    btn.classList.add('btn-success');
    btn.innerHTML = 'Message Sent';
    document.querySelector('.message').innerHTML = '<img class="mt-1" width="19" height="19" src="https://img.icons8.com/material-rounded/19/40C057/approval.png" alt="approval"/>&nbsp;	 Thank you for your message! I will get back to you soon.';

    setTimeout(() => {
        btn.classList.remove('btn-success');
        btn.classList.add('btn-dark');
        btn.innerHTML = 'Get In Touch';
        document.getElementById("myForm").reset();
        email.classList.add('border-dark');
        if (btn) btn.classList.add('disabled');
    }, 1000);
}
