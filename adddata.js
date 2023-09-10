function statesofcountry(el){
    el.forEach(element=>{
        element.addEventListener("click",(e)=>{
          let countryid=element.id;
          let filteredstates=statearray.filter((state)=>state.country_id==countryid);
          states.innerHTML=``;
          addToStates(filteredstates)
          addToCities(cityarray);
        })
    })
}
function citiesofstates(el){
    el.forEach(element=>{
        element.addEventListener("click",(e)=>{
          let stateid=element.id;
          let filteredcities=cityarray.filter((city)=>city.state_id==stateid);
          cities.innerHTML=``;
          addToCities(filteredcities)
        })
    })
}
removehide(dropdown_button);
function addToCountries(data){
    data.forEach(element=>{
        let newel=document.createElement("li");
        newel.innerHTML=`<li><a href="" class="clickcountry country" id="${element.id}">${element.name}</a></li>`;
        
        countries.appendChild(newel);
    })
    statesofcountry(document.querySelectorAll(".country"))
    removedefault(document.querySelectorAll(".clickcountry"));
}
function addToStates(data){
    data.forEach(element=>{
        let newel=document.createElement("li");
        newel.innerHTML=`<li><a href="" class="clickstate state" id="${element.id}">${element.name}</a></li>`;
        
        states.appendChild(newel);
    })
    citiesofstates(document.querySelectorAll(".state"));
    removedefault(document.querySelectorAll(".clickstate"));
}
function addToCities(data){
    data.forEach(element=>{
        let newel=document.createElement("li");
        newel.innerHTML=`<li><a href="" class="clickcity city el" id="${element.id}">${element.name}</a></li>`;
        cities.appendChild(newel);
    })
    removedefault(document.querySelectorAll(".clickcity"));

}
