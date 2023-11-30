// let a = 0 ;
// const random = Math.floor(Math.random() * 100) + 1;
// let totalcount = 0 ;
// while (a!==random) {
//     a = prompt("enter the number")//
//     console.log(a)
// a = Number.parseInt(a)
// totalcount++;

// if(a<0){
//     alert("this is in valid number")
//     alert("try again");
// }
// else if(a<random){
//     alert("your number is smaller than the actual number")
//     alert("try again") ;
 
// }
// else if(a>random& a<100 ){
//     alert("your number is bigger than the actual number")
//     alert("try again");
// }
// else if(a>100){
//     alert("this is not valid number")
//     alert("try again");
// }
// else if(a===random){
//     alert("congratulatinos!!!,this is a corect number")
// }
// else{
//     alert("you are in correct") 
//     alert("try again");
// }

// }
// console.log(totalcount)

// alert("your score is " + (100 - totalcount))
// //a = prompt("enter the number")
// //console.log(a)
// //a = Number.parseInt(a)
// alert(`your score is ${100-totalcount}`)





// //console.log("you are ",(a=random? "true" : "false"))

let a = 0;
const random = Math.floor(Math.random() * 100) + 1;
let totalcount = 0;

while (a !== random) {
  a = Number(prompt("Enter the number"));
  console.log(a);
  totalcount++;

  if (a < 0 || a > 100 || isNaN(a)) {
    alert("Invalid number. Please try again.");
  } else if (a < random) {
    alert("Your number is smaller than the actual number. Please try again.");
  } else if (a > random) {
    alert("Your number is bigger than the actual number. Please try again.");
  } else {
    alert("Congratulations! This is the correct number.");
  }
}

console.log(totalcount);
alert(`Your score is ${100 - totalcount}`);

