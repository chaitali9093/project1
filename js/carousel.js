// let count=1;
// let slide1=document.getElementById("slide1");
// let slide2=document.getElementById("slide2");
// let slide3=document.getElementById("slide3");

// function showSlide(num) {
//   count = count + num;
//   console.log("count", count);
//   if (count % 3 == 1 || count % 3 == -1) {
//     slide1.style.display = "block";
//     slide2.style.display = "none";
//     slide3.style.display = "none";
//   } else if (count % 3 == 2 || count % 3 == -2) {
//     slide1.style.display = "none";
//     slide2.style.display = "block";
//     slide3.style.display = "none";
//   } else {
//     slide1.style.display = "none";
//     slide2.style.display = "none";
//     slide3.style.display = "block";
//   }
// }

// setTimeout(function,time)
// setInterval(function,time)
// function display(){
//     console.log("hello world");
//     console.log("...........");
// }

// setTimeout(display,2000)
// setInterval(display,2000);
let count=1;
function display() {
  if (count % 3 == 1) {
    slide1.style.display = "block";
    slide2.style.display = "none";
    slide3.style.display = "none";
  } else if (count % 3 == 2) {
    slide1.style.display = "none";
    slide2.style.display = "block";
    slide3.style.display = "none";
  } else {
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "block";
  }
  count=count+1;
}
setInterval(display, 2000);
