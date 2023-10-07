let screen = document.querySelector('input');
let equalBtn = document.querySelector('.btn-equal');
let clearBtn = document.querySelector('.btn-clear');
let numbersAndOperators = document.querySelectorAll('.btn');

// screen.setAttribute('value', '');
// screen.value = '';

numbersAndOperators.forEach((item)=>{
    item.addEventListener('click', () => {
        // screen.setAttribute('value', screen.getAttribute('value') + item.getAttribute('data-num'));
        screen.value += item.dataset.num;
    })
});

clearBtn.addEventListener('click', () => {
    // screen.setAttribute('value', '');
    screen.value = '';
})

equalBtn.addEventListener('click', () => {
    // const result = eval(screen.getAttribute('value'));
    // screen.setAttribute('value', result);
    if(screen.value === ''){
        let result = '';
    } else {
        let result = eval(screen.value);
    }
    screen.value = result;
})

