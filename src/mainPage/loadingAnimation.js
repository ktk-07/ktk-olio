let aboutBtn = document.querySelector("#aboutMe");
let projectsBtn = document.querySelector("#projectsBtn");
let contactMeBtn = document.querySelector("#contactMeBtn");

let footer = document.querySelector("#pageFooter");
let loadingPage = document.querySelector("#loadingPage");
let navOptionsBtn = document.querySelectorAll(".navOptionsBtn");

const log = (arg)=>{
    return console.log(arg);
}


console.log(window.innerHeight);
console.log(window.innerWidth);


for(let btn of navOptionsBtn){
    console.log(btn.parentNode);
    btn.addEventListener("click",(e)=>{
        // e.preventDefault();
        let pageTarget = e.target.dataset.pageinfo;
        for(let removeBtn of navOptionsBtn){
            removeBtn.classList.remove("toggleNavBtn");
            removeBtn.parentNode.classList.remove("toggleBackground");
        }
        btn.classList.add("toggleNavBtn");
        btn.parentNode.classList.add("toggleBackground")
        console.log(btn.parentNode);
        //loadingPage.style.display = "block";
        setTimeout(()=>{
            //loadingPage.style.display = "none";
        },1500)
        // for(let page of pages){
        //     let pageInfo = page.dataset.pageinfo;
        //     if(pageTarget != pageInfo){
        //         page.style.display = "none";
        //     }else{
        //         page.style.display = "block";
        //     }
        // }
        // footer.style.display = "block";
    })
}


