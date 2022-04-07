let nums = document.querySelectorAll(".carres1 #num");
let numss = document.querySelectorAll(".carres2 #num");

let section = document.querySelector(".three");
let started = false; // Function Started ? No

let section1 = document.querySelector(".percent");
let spans = document.querySelectorAll(".progress span");
console.log(section.offsetTop);
console.log(section1.offsetTop);
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
      numss.forEach((num) => startCount(num));
    }
    started = true;
  }
/*
  if (window.scrollY >= section1.offsetTop) {
    console.log("Reached Section Three");
    
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  */
  pour();
  scrollFunction();
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

/*
let section1 = document.querySelector(".percent");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  */
function pour()  {
  if (window.scrollY >=section1.offsetTop-500) {
    console.log("Reached Section Three");
  
    spans.forEach((span) => {
      span.style.width = span.dataset.width;

    });
  }
}



var mybutton = document.querySelector(".button");

// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollY > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}