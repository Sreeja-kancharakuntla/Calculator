let input=document.querySelector("#input-box");
let buttons=document.querySelectorAll("button");

let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(evt)=>{
        if(evt.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(evt.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(evt.target.innerHTML=='Delete'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=evt.target.innerHTML;
            input.value=string;
        }

    });
});
//disabling keys on keyboard
input.addEventListener('keydown', function(e) {
    // Allow: numbers, operators, backspace, delete, arrow keys, enter
    const allowedKeys = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Delete',
        'ArrowLeft', 'ArrowRight'
    ];

    if (!allowedKeys.includes(e.key)) {
        e.preventDefault(); // Block all other keys like letters
    }

    // Optional: Handle "Enter" to evaluate
    if (e.key === 'Enter') {
        string = eval(string);
        input.value = string;
    }
});
