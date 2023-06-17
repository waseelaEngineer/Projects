
let a = document.getElementById('a');
let b = document.getElementById('b');
let birds = document.getElementById('birds');
let sun = document.getElementById('sun');
let c = document.getElementById('c');

let d = document.getElementById('d');
let e = document.getElementById('e');
let f = document.getElementById('f');
let g = document.getElementById('g');
let h = document.getElementById('h');

let shark = document.getElementById('shark');
let faang = document.getElementById('faang');
let hacker = document.getElementById('hacker');

let btn = document.querySelector(".btn");
let string = document.querySelector(".string");





window.onscroll=function(){
    let value = scrollY;

    a.style.left = value + 'px';
    faang.style.left = (88 + value) + 'px';
    b.style.right = value*0.3 + 'px';
    shark.style.right = (400 + value)*0.3 + 'px';
    birds.style.left = (value+400) +'px';
    sun.style.top = value + 'px';
    c.style.top = (800-(value*0.5)) + 'px';
    hacker.style.top = (870-(value*0.5)) + 'px';
}

function setupTabs(){
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.content[data-tab="${tabNumber}"]`);
            
            sideBar.querySelectorAll(".button").forEach(button => {
                button.classList.remove("button--active");
             });
    
            tabsContainer.querySelectorAll(".content").forEach(tab => {
                tab.classList.remove("content--active");
            });
            
            button.classList.add("button--active");
            tabToActivate.classList.add("content--active");
         });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
});