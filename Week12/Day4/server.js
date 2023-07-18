const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const arr =  ["hello", {car:"Lambo",year: 2009}];
app.post("/",(req,res) =>{
    const obj = {
        name: "ME"
    };
    arr.push(obj);
    res.send(obj);
})
app.get("/",(req,res)=>{
    res.send(arr);
})


app.listen(port, ()=> console.log(`I'm listening`))