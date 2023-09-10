
function removedefault(ar){
    ar.forEach(btn=>btn.addEventListener("click",(ev)=>{
        ev.preventDefault()
    }))
}
function removehide(btn){
    btn.forEach(btn1=>{
        btn1.addEventListener("click",(ev)=>{
        ev.preventDefault()
        if(btn1.nextElementSibling.classList.contains("hide")){
            btn1.nextElementSibling.classList.remove("hide")
        }
       else{
        btn1.nextElementSibling.classList.add("hide")
       }
    })
})
}
