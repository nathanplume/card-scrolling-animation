const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerPoint = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
        // using .top property to see where top of box is
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerPoint) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }

    });
}