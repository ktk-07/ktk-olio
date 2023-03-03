let changeLang = false;
let finDescript = false;
let removeName = true;
let typeWord = false;
let id;
let typing = false;


let heading = document.getElementById("heading");
let info = document.getElementById("info");

const removeWords = ()=>{
    let str =  info.textContent;
    if(str.length > 0){
        info.textContent = str.slice(0,str.length-1);
    }else if(str.length == 0 ){
        clearInterval(id);
        typeWords();
    }
}

const typeWords = (x=75)=>{
    let i = 0
    let str = "I am a Fullstack Web Developer";
    let newId;
    newId = setInterval(()=>{
        if(i !== str.length ){
            info.textContent += str.substring(i,++i);
        }else if (i === str.length){
            clearInterval(newId);
            typing = false;
        }
        
    },x)
}



function typeWriterEffect(){
    // if(stillTyping){
    //     id = setInterval(removeWords,100);
    // }
    typing = true;
    setTimeout(()=>{
        id = setInterval(removeWords,30);
    },1500)
    
}

window.addEventListener("load",(e)=>{
    setTimeout(typeWriterEffect(),500);
});

const retypeInitial = ()=>{

}

info.addEventListener("click",(e)=>{
    if(!typing){
        info.textContent = "James HERE!";
        setTimeout(()=>{
            id = setInterval(removeWords,30);
        },1500);
        typing = true;
    }
})