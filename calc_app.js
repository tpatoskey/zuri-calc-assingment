let num1 = prompt('Enter num 1: ');
num1 = parseInt(num1);
let options = prompt("Enter '+', '-', '*', '/': ");
let num2 = prompt('Enter num 2: ');
num2 = parseInt(num2);



let result = 0;

if (options === '+'){
    result = num1 + num2;
}else if (options === '-'){
    result = num1 - num2;
}else if (options === '*'){
    result = num1 * num2;
}else if (options === '/'){
    result = num1 / num2;
}

console.log(result);