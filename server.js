const express=require("express");
const bodyParser=require("body-parser")
const app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT=3844;
const cors=require("cors");
const axios=require("axios");
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
})
app.listen(PORT,()=>{
    console.log(`server is started at http://localhost:${PORT}`)
})