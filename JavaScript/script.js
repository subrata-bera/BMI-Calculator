let weight = document.querySelector("#txtweight");
let height = document.querySelector("#txtheight");
let btn = document.querySelector("button");
let main = document.querySelector(".main");

function CalculateBMI(){
    let height_f = parseFloat(height.value);
    let height_m = height_f * 0.3048;
    let weight_int = parseFloat(weight.value);
    let bmi = weight_int / (height_m * height_m);
    let para = document.createElement("p");
    para.innerText = `Your BMI is ${bmi.toFixed(2)}`;
    main.appendChild(para);
}

btn.addEventListener("click", () => {
    if(weight.value != "" && height.value != ""){
        CalculateBMI();
    }
    else{
        alert("Please fill all details.");
    }
});








