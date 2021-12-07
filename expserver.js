const express = require("express");
const bodyParser=require("body-parser");


const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res)
{
    res.send("Welcome");
})
app.get("/abt", function(req, res)
{
    res.send("I m a SDE 1 ");
})
app.get("/contact", function(req, res)
{
    res.send(" ++ 8787080870");
})
app.get("/calculator", function(req, res)
{
    res.sendFile(__dirname+"/index.html");
})
app.post("/calculator", function(req,res)
{
    res.send("Thanks fr the Response");

    let n1=Number(req.body.v1);
    let n2=Number(req.body.v2);

    let sum=n1/n2;

    res.send("the sum of the numbers is" + sum);
})

app.listen(3000,function(req, res)
{
console.log("Server is running at port no. 3000");
})
