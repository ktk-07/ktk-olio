let navBar = document.getElementById("navBox");
let menuBtn = document.getElementById("menuBtn");
let closeMenuBtn = document.getElementById("closeMenuBtn");
let pages = document.getElementsByClassName("page");

menuBtn.addEventListener("click",()=>{
    if(navBar.classList.contains("toggleNavBar")){
        navBar.style.maxWidth = "150px";
        navBar.classList.toggle("toggleNavBar");
        menuBtn.style.opacity = "0";
        for(let page of pages){
            page.style.width= "90vw";
        }
    }
})

closeMenuBtn.addEventListener("click",()=>{
    navBar.style.maxWidth = "0px";
    navBar.classList.toggle("toggleNavBar");
    menuBtn.style.opacity = "1";
    for(let page of pages){
        page.style.width= "100vw";
    }
})

let acc = document.getElementsByClassName("accordion");
let aContent = document.getElementsByClassName("accordion-content");

// Can't forget if you are targeting CSS style you need to use .style


acc[0].addEventListener("click",()=>{
    if(acc[0].classList.contains("toggleAccord")){
        acc[0].style.maxHeight = "150px";
        //the reason why this does not work is because the content itself is hiddne
        //console.log(aContent[0].style.height);
        //acc[0].style.maxHeight =   `${acc[0].style.maxHeight + aContent[0].OffsetHeight}px`
        //so it returns 0;
        acc[0].classList.toggle("toggleAccord");

    }else{
        acc[0].classList.toggle("toggleAccord");
        acc[0].style.maxHeight = "20px";
    }
})

//let x = "";
// same as input() in python and scanf()/gets()/getchar();
//x = prompt("Input name");
// wow i actually forgot .splice only works on arrays;
// I need to review switch statement and basically the %*c formatt specifier in printf() and scanf() functions in c.

//alert("Hello " +x.slice(0,1).toUpperCase() + x.slice(1));
//console.log(x);


