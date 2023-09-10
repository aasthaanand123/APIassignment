window.addEventListener("load",()=>{
    axios.get('http://localhost:3844/').then(
        (response)=>{
            console.log(response.data)
            for(let i=0;i<response.data.length;i++){
                if(i==0){
                    addToCountries(response.data[i].data)
                    
                }
                else if(i==1){
                    addToStates(response.data[i].data);
                }
                else{
                   addToCities(response.data[i].data)
                }
            }
        }
    ).catch();
})