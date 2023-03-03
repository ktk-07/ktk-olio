let popChar = document.getElementsByClassName("pop");
let popChar2 = document.getElementsByClassName("pop2");

window.addEventListener("load",(event)=>{
    setTimeout(()=>{
        for(let i = 0 ; i< popChar.length;i++){
            if(i < 12){
                popChar[i].style.animation = `pop 0.5s ease-out ${i/10}s both`;
                setTimeout(()=>{
                    popChar[i].style.animation = "";
                },2000)
            }else{
                break;
            }
        }
    },550);

    for(let i = 0 ; i< popChar.length;i++){
        popChar[i].addEventListener("mouseover",(event)=>{
            popChar[i].style.animation = "pop 0.69s ease-out 0s both";
            setTimeout(()=>{
                popChar[i].style.animation = "";
            },750)
        })
    }
});

