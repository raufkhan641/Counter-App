
let count = 0;
function increment(){    
    count++;
    updateDisplay()
}

function decrement(){
    count--;
    updateDisplay()
}
function reset(){
    count = 0;
    updateDisplay()
}
function updateDisplay(){
    console.log(count);
    document.querySelector("#count").innerText = count;
}