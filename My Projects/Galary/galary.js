const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const node = document.querySelectorAll(".gallery-img");
let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
    node[currentlySelected].classList.remove('active');
    currentlySelected--;
    node[currentlySelected].classList.add('active');
    nextBtn.disabled = false;
    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function() {

    node[currentlySelected].classList.remove("active");
    currentlySelected++;
    node[currentlySelected].classList.add('active');
    prevBtn.disabled = false;

    if (node.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }
});