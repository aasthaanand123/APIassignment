# API INTEGRATION WITH CLIENT SIDE

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

### 2.
