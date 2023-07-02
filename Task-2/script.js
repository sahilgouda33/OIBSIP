// 8th code goes, writing the code for sticky navabar
const header = document.querySelector("header");
function stickyNavbar() {
    header.classList.toggle("scrolled", window.scrollY > 0);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);
// --end--

// 11th code continues here, adding the scroll reveal animation
let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});
sr.reveal(".showcase-info", {delay: 600});
sr.reveal(".showcase-image", {origin: "left", delay: 700});
sr.reveal(".about", {origin:"bottom", delay: 700});
sr.reveal(".skills", {origin:"bottom", delay: 700});
sr.reveal(".services", {origin:"bottom", delay: 700});
sr.reveal(".portfolio", {origin:"bottom", delay: 700});
sr.reveal(".contact", {origin:"left", delay: 700});
// --end--

// 16th code goes header, adding the skill progress bar animation
const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", ()=>{
    if(!skillsPlayed)skillsCounter();
    // 19th code continue here
    mlCounter();
});

function hasReached(el) {
    let topPosition  = el.getBoundingClientRect().top;

    if(window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
    
}

function updateCount(num, maxNum){
    let currentNum = +num.innerText;

    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }
}

let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill)) return;

    skillsPlayed = true;

    sk_counters.forEach((counter, i)=>{
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);

        progress_bars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateCount(counter, target);
        }, 400);
    })

    progress_bars.forEach(
        (p) => (p.style.animation = "progress 2s ease-in-out forwards")
    );
}

// 19th code goes here, adding the services counter
const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

let mlPlayed = false;
function mlCounter(){
    if(!hasReached(ml_section)) return;
    mlPlayed = true;
    ml_counters.forEach((ctr) => {
        let target = +ctr.dataset.target;

        setTimeout(()=>{
            updateCount(ctr, target);
        }, 400);
    });
}
// --end--

// 23rd code goes here, coding the portfolio filter animation using mixitup
var mixer = mixitup('.portfolio-gallery', {
    selectors: {
        target: '.prt-card'
    },
    animation: {
        duration: 500
    }
});
// --end--

// 29th code goes header, writing the script for change of theme
const toggle_btn = document.querySelector(".toggle-btn");

function changeTheme(){
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-moon", "uil-sun");
    } else {
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-sun", "uil-moon");
    }
}

toggle_btn.addEventListener("click", ()=>{
    changeTheme();
});
// --end--

// --32nd code goes header, writing the code for menu-bar--
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".links");
hamburger.addEventListener("click", ()=>{
    document.body.classList.toggle("open");
    // --write the below code after body.open .links--
    document.body.classList.toggle("stopScrolling");
});
// --write the below code after body.open .links--
links.forEach((link)=>link.addEventListener("click", ()=>{
        document.body.classList.remove("open");
        document.body.classList.remove("stopScrolling");
}));