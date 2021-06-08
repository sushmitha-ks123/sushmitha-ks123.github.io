document.querySelectorAll('.accordian-button').forEach(input => {

    input.addEventListener('click', () => {

        const Content_accordian = input.nextElementSibling;

        input.classList.toggle('accordian-button--active');

        if (input.classList.contains('accordian-button--active')) {
            // Content_accordian.sty
            Content_accordian.style.maxHeight = Content_accordian + "px";
        } else {
            Content_accordian.style.maxHeight = 0;
        }
    });
})