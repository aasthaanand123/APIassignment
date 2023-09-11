
function removedefault(ar){
    ar.forEach(btn=>btn.addEventListener("click",(ev)=>{
        ev.preventDefault()
    }))
}
function togglebtn(btn1){
    if(btn1.nextElementSibling.classList.contains("hide")){
        btn1.nextElementSibling.classList.remove("hide")
    }
   else{
    btn1.nextElementSibling.classList.add("hide")
   }
}
function removehide(btn){
    console.log(btn)
    btn.forEach(btn1=>{
        btn1.addEventListener("click",(ev)=>{
            ev.preventDefault()
            newbtns=[...btn].filter(bt=>bt!=btn1);
            console.log(newbtns)
            newbtns.forEach(bt1=>{
             if(!bt1.nextElementSibling.classList.contains("hide")){
                 bt1.nextElementSibling.classList.add("hide")
             }
            })
       
       
        togglebtn(btn1)
     
    })
})
}
