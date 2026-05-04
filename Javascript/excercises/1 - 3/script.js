// excercise 1

// while(condition) {
//     let a =Math.floor(1 + Math.random() * 99);
//     let b = prompt("Enter a number to guess between 1 - 100")
//     if (a == b) {
//         return console.log(`You have guessed it correctly and the number was ${a}`);
//     }
//     else  {continue;}
// }

//second try
// let rnum = Math.floor(1 + Math.random() * 99);
// let guess = null;

// while (rnum != guess) {
//     guess = Number(prompt("Enter your number to guess : "));

//     if(guess == rnum) {
//         alert(`you have guessed it correctly and the number was ${rnum}`);
//     }
//     else if(guess < rnum) {
//         alert(" guessed higher");
//     }
//     else if(guess > rnum) {
//         alert(" guessed lower");
//     }
// }

//third

// confirm("Do you want to play ");

// while(true) {

    
//     let input = prompt("Enter : \n s : stone \n p : Paper \n sr : scissors");
//     let rcomp = Math.floor( 1 + Math.random() * 2);
//     let computer;
//     if(rcomp == 1) {
//         computer = "s"
//     }
//     else if (rcomp == 2) {
//         computer = "p"
//     }
//     else{
//         computer = "sr"
//     }
    
//     if(input == computer) {
//         alert(`it's a tie`);
//     }
//     else if(input == 's' && computer == 'p') {
//         alert("you loss - comp chose p")
//     }
//     else if(input == 's' && computer == 'sr') {
//         alert("you won- comp chose sr")
//     }
//     else if(input == 'p' && computer == 's') {
//         alert("you won- comp chose s")
//     }
//     else if(input == 'p' && computer == 'sr') {
//         alert("you loss- comp chose sr")
//     }
//     else if(input == 'sr' && computer == 's') {
//         alert("you loss- comp chose s")
//     }
//     else if(input == 'sr' && computer == 'p') {
//         alert("you won- comp chose p")
//     }else if(input == ''){
//         alert("invalid input")
//     }
    
//     confirm("Do you want to play again : \n Press 'Enter' to play \n Press 'cancel' to exit")
    
// }\


//fourth

// let URL = "https://official-joke-api.appspot.com/jokes/ten";

// (async function getjoke() {
//     let response = await fetch(URL);
//     // console.log(response);
//     let data = await response.json();
//     let arr = [...data];
//     // console.log(arr) 

//     let n = Math.floor(1 + Math.random() * 9);
//     // console.log(arr[n]);
    
//     btn1 = document.getElementById("btn");
//     btn1.addEventListener("click",function () {
//         // console.log(arr[n].setup)
//         document.getElementById("joke").innerHTML = arr[n].setup
//     });

//     btn2 = document.getElementById("btn2");
//     btn2.addEventListener("click",function () {
//         // console.log(arr[n].punchline)
//         document.getElementById("punchline").innerHTML = arr[n].punchline
//     });


// })();




