
let filterBtns = document.getElementsByClassName("projectFilterBtn");
let gridCells = document.getElementsByClassName("projectGridCell");
let gridBox = document.getElementById("projectGridBox");
let allBtn = document.getElementById("allBtn");
let perProBtn = document.getElementById("perProBtn");
let clientBtn = document.getElementById("clientBtn");
let colorBox = document.querySelector("#colorBox")


let imgArr = []

for(let btn of filterBtns){
    btn.addEventListener("click",(event)=>{
        let filterType = event.target.dataset.filtertype;
        for (let btn of filterBtns){
            btn.style.color = "rgb(175, 255, 56)"
            btn.style.backgroundColor = "rgb(30, 29, 29)";
        }
        event.currentTarget.style.color = "rgb(30, 29, 29)";
        event.currentTarget.style.backgroundColor = "rgb(175, 255, 56)";
        animateColorBox(filterType);
        filterGrid(filterType);
    })
}

// switch(i){
//     case 0:
//         projectGridCell[i].style.animation = "gridAnimator 0.5s ease-out 0.1s both";
//         break;       
//     case 1:
//         projectGridCell[i].style.animation = "gridAnimator 0.5s ease-out 0.2s both";
//         break;
//     case 2:
//         projectGridCell[i].style.animation = "gridAnimator 0.5s ease-out 0.3s both";
//         break;
//     case 3:
//         projectGridCell[i].style.animation = "gridAnimator 0.5s ease-out 0.4s both";
//         break;
//     case 4:
//         projectGridCell[i].style.animation = "gridAnimator 0.5s ease-out 0.5s both";
//         break;
//     case 5:
//         projectGridCell[i].style.animation = "gridAnimator 0.5s ease-out 0.6s both";
//         break;
//     default:
//         break;
// }

const animateColorBox = (val)=>{
    // Use offset instead of percentages
    switch(val){
        case "rp":
            colorBox.style.left = "32.5%";
            break;
        case "jp":
            colorBox.style.left = "54.7%";
            break;
        case "cp":
            colorBox.style.left = "77%";
            break;
        case "all":
            colorBox.style.left = "10%";
        default :
            break;
    }
}



function filterGrid(filterType){
    for (let cell of gridCells){
        let cellInfo = cell.dataset.info.split(" ");
        if(cellInfo.indexOf(filterType) <0){
            cell.style.animation = "fadeout 0.5s ease-out 0.1s both"
            setTimeout(()=>{
                cell.style.display = "none";
            },600)
        }else{
            cell.style.display = "block";
            cell.style.animation = "gridAnimator 0.5s ease-out 0.1s both";
        }
    }
}

// need to fade the image in and out.
// and probably add more design
// i'll probably put the images in the imgArr


// for(let cell of gridCell){
//     cell.addEventListener("mouseover",(event)=>{
//         event.target.style.backgroundImage = "none";
//     })
    
//     cell.addEventListener("mouseout",(event)=>{
//         event.target.style.backgroundImage = "url(https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg)";
//     })
// }

