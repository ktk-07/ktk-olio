let projectHeader = document.getElementById("projectHeader");
let animatedHeader = false;
let gridAnimated = false;
let filterBoxAnimated = false;
let aboutmePageAnimated = false;

let contactPageAnimated = false;
let userDetails = document.getElementById("userDetails");
let formSubmitBtn = document.getElementById("formSubmitBtn");
let uDTitle = document.getElementById("uDTitle");


let projectGridCell = document.getElementsByClassName("projectGridCell");
let projectFilterBox = document.getElementById("projectFilterBox");


// Query Selector is faster than document.getElementById;
let canvasPart = document.querySelector("#canvasPart");
let ds1 = document.querySelector("#description1");
let ds2 = document.querySelector("#description2");
let ds3 = document.querySelector("#description3");
let amTitle = document.querySelector("#amTitle");
let navOptionsBox = document.querySelector("#navOptionsBox");

let navBarAnimated = false;
let navOptionsDivBtn = document.querySelectorAll(".navOptionsDivBtn");

function colorNavBtn(pageInfo){
    let pageTarget = pageInfo;
    for(let btn of navOptionsBtn){
        let btnInfo = btn.dataset.pageinfo;
        if(btnInfo == pageTarget){
            btn.classList.add("toggleNavBtn");
            btn.parentNode.classList.add("toggleBackground");
        }else{
            btn.classList.remove("toggleNavBtn");
            btn.parentNode.classList.remove("toggleBackground");
        }
    }
}

window.addEventListener("scroll",(event)=>{
    let scrollYVal = window.scrollY;

    if(!navBarAnimated && scrollYVal >= 400){
        for(let i = 0 ; i<navOptionsDivBtn.length;i++){
            navOptionsDivBtn[i].style.display="block";
            switch(i){
                case 0:
                    navOptionsDivBtn[i].style.animation = `animateOptionsBtn${i+1} 0.5s ease-out ${i*0.1}s both`;
                    break;
                case 1:
                    navOptionsDivBtn[i].style.animation = `animateOptionsBtn${i+1} 0.5s ease-out ${i*0.1}s both`;                
                    break;
                case 2:
                    navOptionsDivBtn[i].style.animation = `animateOptionsBtn${i+1} 0.5s ease-out ${i*0.1}s both`;                    
                    break;
                case 3:
                    navOptionsDivBtn[i].style.animation = `animateOptionsBtn${i+1} 0.5s ease-out ${i*0.1}s both`;
                    break;
                case 4:
                    navOptionsDivBtn[i].style.animation = `animateOptionsBtn${i+1} 0.5s ease-out ${i*0.1}s both`;
                    break;
                default:
                    break;
            }
        }
        navBarAnimated = true;
    }else if(!aboutmePageAnimated && scrollYVal >= 1000){
        amTitle.style.animation = "shiftDown 0.4s ease-out 0.1s both";
        ds1.style.animation = "shiftUp 0.4s ease-out 0.3s both";
        ds2.style.animation = "shiftUp 0.4s ease-out 0.5s both";
        ds3.style.animation = "shiftUp 0.4s ease-out 0.7s both";
        canvasPart.style.animation = "shiftLeft 0.4s ease-out 0.1s both";
        aboutmePageAnimated = true;
    }else if(scrollYVal >= 1700 && !animatedHeader){
            projectHeader.style.animation = "projectHeader 0.3s ease-out 0.2s both";
            animatedHeader = true;
    }else if(!filterBoxAnimated && scrollYVal >= 1700){
        projectFilterBox.style.animation = "filterAnimation 0.3s ease-out 0.2s both";
        filterBoxAnimated = true;
    }else if(!gridAnimated && scrollYVal >= 1900){
        for(let i = 0 ; i < projectGridCell.length; i++){
            switch(i){
                case 0:
                    projectGridCell[i].style.animation = "gridAnimator 0.5s ease-out 0.1s both";
                    break;       
                case 1:
                    projectGridCell[i].style.animation = "gridAnimator 0.5s ease-out 0.2s both";
                    break;
                case 2:
                    projectGridCell[i].style.animation = "gridAnimator 0.5s ease-out 0.3s both";
                    break;
                case 3:
                    projectGridCell[i].style.animation = "gridAnimator 0.5s ease-out 0.4s both";
                    break;
                case 4:
                    projectGridCell[i].style.animation = "gridAnimator 0.5s ease-out 0.5s both";
                    break;
                case 5:
                    projectGridCell[i].style.animation = "gridAnimator 0.5s ease-out 0.6s both";
                    break;
                default:
                    break;
            }
        }
        gridAnimated = true;
    }else if(!contactPageAnimated && scrollYVal >= 2500){
        formSubmitBtn.style.animation = "moveRight 0.4s ease-out 1 0.1s both";
        userDetails.style.animation = "scaleOut 0.4s ease-out 1 0.1s both";
        uDTitle.style.animation = "moveDown 0.4s ease-out 1 0.1s both";
        contactPageAnimated = true;
    }

    if(navBarAnimated && scrollYVal < 50){
        for(let i = 0 ; i<navOptionsDivBtn.length;i++){
            switch(i){
                case 0:
                    navOptionsDivBtn[i+4].style.animation = `animateDown${i+5} 0.5s ease-out ${i*0.05}s backwards`;
                    break;
                case 1:
                    navOptionsDivBtn[i+2].style.animation = `animateDown${i+3} 0.5s ease-out ${i*0.05}s backwards`;                
                    break;
                case 2:
                    navOptionsDivBtn[i].style.animation = `animateDown${i+1} 0.5s ease-out ${i*0.05}s backwards`;                    
                    break;
                case 3:
                    navOptionsDivBtn[i-2].style.animation = `animateDown${-1} 0.5s ease-out ${i*0.05}s backwards`;
                    break;
                case 4:
                    navOptionsDivBtn[i-4].style.animation = `animateDown${i-3} 0.5s ease-out ${i*0.05}s backwards`;
                    break;
                default:
                    break;
            }
        }
        for(let btn of navOptionsBtn){
            btn.classList.remove("toggleNavBtn");
            btn.parentNode.classList.remove("toggleBackground");
        }
        navBarAnimated = false;
        setTimeout(()=>{
            for(let i = 0 ; i < navOptionsDivBtn.length ;i++){
                navOptionsDivBtn[i].style.display = "none";
            }
        },500);
    }
});


window.addEventListener("scroll",(event)=>{
    // home,cv,more,projects,contact
    let scrollYVal = window.scrollY;
    if(scrollYVal  < 500){
        colorNavBtn("home");
    }else if(scrollYVal < 1400){
        colorNavBtn("cv");
    }else if(scrollYVal < 2000){
        colorNavBtn("more");
    }else if(scrollYVal < 2700){
        colorNavBtn("projects");
    }else{
        colorNavBtn("contact");
    }
});