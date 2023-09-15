let number = document.getElementById("number1");
let counter = 0;
setInterval(() => {
    if(counter == 70){
        clearInterval();
    } else{
        counter +=1;
        number.innerHTML = counter + "%";
    }
    
}, 30);


let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
    if(counter2 == 30){
        clearInterval();
    } else{
        counter2 +=1;
        number.innerHTML = counter2 + "%";
    }
    
}, 50);

let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
    if(counter3 == 30){
        clearInterval();
    } else{
        counter3 +=1;
        number.innerHTML = counter3 + "%";
    }
    
}, 50);

AOS.init();
