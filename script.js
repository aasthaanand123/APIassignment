const countries=document.querySelector(".countries-dropdown");
const states=document.querySelector(".states-dropdown");
const cities=document.querySelector(".cities-dropdown");
window.addEventListener("load",()=>{
    axios.get('https://d32sbion19muhj.cloudfront.net/pub/interview/countries').then(
        (response)=>{
            console.log(response)
        }
    ).catch();
})