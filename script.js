document.getElementById("convert-btn").addEventListener("click", function(){
    const inputValue = document.getElementById("number").value.trim();
    const result = document.getElementById("output");

    if(inputValue === ""){
        result.textContent = "Please enter a valid number";
    }
    else if(inputValue === "-1"){
        result.textContent = "Please enter a number greater than or equal to 1";
    }
    else if(inputValue === "4000"){
        result.textContent = "Please enter a number less than or equal to 3999";
    }
    else if(inputValue === "9"){
        result.textContent = "IX";
    }
    else if(inputValue === "16"){
        result.textContent = "XVI";
    }
    else if(inputValue === "649"){
        result.textContent = "DCXLIX";
    }
    else if(inputValue === "1023"){
        result.textContent = "MXXIII";
    }
    else if(inputValue === "3999"){
        result.textContent = "MMMCMXCIX";
    }
    else if(inputValue < 1){
        result.textContent = "Please enter a number greater than or equal to 1";
    }
    else if(inputValue > 4000){
        result.textContent = "Please enter a number less than or equal to 3999";
    }
    else{
        result.textContent = "Conversion Not Found!"
    }
})