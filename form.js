function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');
   
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            // console.log(input);
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if(input.type === 'text' && validateUser(input)) {
                nextSlide(parent, nextForm)
            } else if(input.type === 'email' && validateEmail(input)){
                nextSlide(parent, nextForm)
            } else if(input.type === 'password' && validateUser(input)){
                nextSlide(parent, nextForm)
            }
       
        })
    });
}

function validateUser(user){
    if(user.value.length < 6){
        error('rgba(240, 52, 52, 1');
    } else {
        error('rgba(87,189,130');
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        return true;
    } else {
        error('rgba(87,189,130');

    }
}

function nextSlide(parent, nextForm){
        parent.classList.add('innactive')
        parent.classList.remove('active')
        nextForm.classList.add('active')
    }


function error(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();