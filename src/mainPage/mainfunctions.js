let exploreBtn = document.getElementById("exploreBtn");
let mainSect = document.getElementsByTagName("main");
let scrollUpBtn = document.getElementById("scrollUpBtn");
let aboveOrBelow = true;


//NavOptionsBtn already Declared In loadingAnimation.js

/* 
    Recap on scrollTo
    window.scrollTo(x,y)
    x and y are the amount of coordinates to scroll too;
    by inputing an object/(hashtable);
    {
        top:..,
        left:..,
        behaviour:...
    }

 */
// usage of window.scrollTo();

let scrollAmount = {
    top:window.innerHeight,
    left:0,
    behavior: "smooth"
}

// I removed this because it was so useless Godamn. when it use in ipad pro mode , the window.innerHeight apparently does get the right amount

// exploreBtn.addEventListener("click",()=>{
//    window.scrollTo(scrollAmount);
// })

let scrollUpAmount = {
    top:0,
    left:0,
    behavior:"smooth"
}

scrollUpBtn.addEventListener("click",()=>{
    window.scrollTo(scrollUpAmount);

})

function animateNavBar(){
    for (let i in navOptionsBtn){
        //console.log(i);
    }
}

animateNavBar();

function forAlert(){
    alert("feature not available as of right now")
}
