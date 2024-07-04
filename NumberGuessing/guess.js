let userin =document.getElementById('guess-input');
// console.log(guess);

let btn = document.getElementById('guess-btn');
// console.log(btn);

let res = document.getElementById('result');
// console.log(res);

const guess = parseInt(Math.random()*5 + 1);
// const guess=parseInt(4);
// console.log(guess);

btn.addEventListener('click' , function () {
    
    // alert("Hello Coder")

    
    let userinput = parseInt(userin.value);

    if(userinput === guess){
       res.innerHTML = "YOu WON"
    }
    else if(userinput > 101 ){
        res.innerHTML = "Enter Guess Between 1-100";
    }
    else{
        res.innerHTML = "Opps...Sorry Try Again Later";
    }

})
