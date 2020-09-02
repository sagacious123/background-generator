const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const body = document.querySelector("body");
const h3 = document.querySelector("h3");
const input = document.querySelectorAll("input"); 


for(i = 0; i < input.length; i++) {
    input[i].addEventListener("input", function() {
        body.style.background = 
        "linear-gradient(to right, " 
        + input1.value 
        + ", " 
        + input2.value 
        + ")";
        
        // body.style.background = 
        // `linear-gradient(to right, ${input1.value}, ${input2.value})`;

        h3.innerHTML = body.style.background + ";"; 
    })
}