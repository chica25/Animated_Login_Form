function animatedForm() {
    const arrows = document.querySelectorAll('.fas fa-arrow-down');
   
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if(input.type === 'text' && validateUser(input))
       
        })
    })
}

function validateUser(user){
    if(user.value.length < 6){
        error('rgb(189, 87, 87');
    } else {
        error('rgba(87,189,130');
        return true;
    }
}

function nextSlide(parent, nextForm) {
    parent.classList.add('innactive')
    parent.classList.remove('active')
    nextForm.classList.add('active')
}

function error(color) {
    document.style.backgroundColor = color;
}

animatedForm();