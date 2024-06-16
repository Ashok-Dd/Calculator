function display_on_screen(buttonId) {
    let screen = document.getElementById('screen'); 
    switch(buttonId){
        case 'ac':
            screen.innerHTML = '';
            break;
        case 'backspace':
            let currentText = screen.innerHTML;
            screen.innerHTML = currentText.slice(0, -1);
            break;
        case 'fact':
            screen.innerHTML += buttonId;
            let number = parseInt(screen.innerHTML);
            screen.innerHTML = factorial(number);
            break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            screen.innerHTML += buttonId;    
            break;
        case '=':
            let expression = screen.innerHTML;
            screen.innerHTML = evaluate(expression);
            break;
        default:
            screen.innerHTML += buttonId;    
            break;
    }
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function evaluate(expression) {

    try {
        return eval(expression);
    } catch (e) {
        return "Error";
    }
}
