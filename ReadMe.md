# API INTEGRATION WITH CLIENT

### 1. Used server side proxy to overcome cors limitations for browser interaction

        app.use(cors())
        let endpoints = [
            'https://d32sbion19muhj.cloudfront.net/pub/interview/countries',
            'https://d32sbion19muhj.cloudfront.net/pub/interview/states',
            'https://d32sbion19muhj.cloudfront.net/pub/interview/cities',
        ];
        app.get("/",(req,res)=>{
            axios
            .all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((responses) => {
            res.json(responses.map((response) => response.data));
            })
            .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "An error occurred" });
            });
        })`

### 2. Modular code used

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
        ).catch((err)=>{
            console.log(err)
        });
    })

### 3. No helping libraries used