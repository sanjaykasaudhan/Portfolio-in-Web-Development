let clesius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");

function celToFar(){
    let output = (parseFloat(fahrenheit.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}


function farToCel(){
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celcius.value = parseFloat(output.toFixed(2));
    console.log(output);
    
}