let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrng')
let guesses = document.getElementById("guesses")

let answer = Math.floor(Math.random()*100)+1;
console.log(answer);

let numGuesses = 0;
btn.addEventListener('click',()=>{
    guessesNumber();
})
function guessesNumber(){
    if(input.value<1|| input.value>100 || isNaN(input.value)){
        
        wrng.innerHTML="Enter between 1 to 100";
}
else{
    numGuesses ++;
    guesses.innerHTML = "No. of Guess : "+numGuesses;
}

}