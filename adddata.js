const countries=document.querySelector(".countrieslist");
const states=document.querySelector(".stateslist");
const cities=document.querySelector(".citieslist");
function addToCountries(data){
    data.forEach(element=>{
        let newel=document.createElement("li");
        newel.innerHTML=`<li><a href="" class="clickcountry">${element.name}</a></li>`;
        newel.classList.add("country",`${element.id}`)
        countries.appendChild(newel);
    })
    removedefault(document.querySelectorAll(".clickcountry"));
}
function addToStates(data){
    data.forEach(element=>{
        let newel=document.createElement("li");
        newel.innerHTML=`<li><a href="" class="clickstate">${element.name}</a></li>`;
        newel.classList.add("state",`${element.id}`)
        states.appendChild(newel);
    })
    removedefault(document.querySelectorAll(".clickstate"));
}
function addToCities(data){
    data.forEach(element=>{
        let newel=document.createElement("li");
        newel.innerHTML=`<li><a href="" class="clickcity">${element.name}</a></li>`;
        newel.classList.add("city",`${element.id}`)
        cities.appendChild(newel);
    })
    removedefault(document.querySelectorAll(".clickcity"));
}
