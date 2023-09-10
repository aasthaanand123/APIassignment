window.addEventListener("load",()=>{
    axios.get('http://localhost:3844/').then(
        (response)=>{
            for(let i=0;i<response.data.length;i++){
                if(i==0){
                    countryarray=response.data[i].data;
                    addToCountries(response.data[i].data)
                    
                }
                else if(i==1){
                    statearray=response.data[i].data;
                    addToStates(response.data[i].data);
                }
                else{
                    cityarray=response.data[i].data
                   addToCities(response.data[i].data)
                }
            }
        }
    ).catch();
})
