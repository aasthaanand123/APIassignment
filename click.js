
function removedefault(ar){
    ar.forEach(btn=>btn.addEventListener("click",(ev)=>{
        ev.preventDefault()
    }))
}