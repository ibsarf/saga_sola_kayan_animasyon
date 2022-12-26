let contain=document.querySelectorAll(".contain");

window.addEventListener("scroll",()=>{
    let heigthTo=(window.innerHeight/6)*4;
    console.log("he    :"+heigthTo);
    contain.forEach((box)=>{
        let trigger=box.getBoundingClientRect().y;
        if(trigger<heigthTo){
            console.log(trigger);
            box.classList.add("active")
        }else{
            box.classList.remove("active")
        } 
    })
    
})