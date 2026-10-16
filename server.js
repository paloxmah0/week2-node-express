const express = require ("express");
const app = express();
const port = process.env.PORT ;



app.use (express.json());
app.use(express.static("public"));
app.use ((req,res,next)=>{
    console.log(`${new Date()}, ${req.method}, ${req.url}`);
    next();
});

app.get ("/",(req,res)=>{
    res.send("My Week 2 Api")
});

app.post("/user",(req,res)=>{
    const {name , email}= req.body;
    if (!name || !email){
        return res.status(400).json({Error:"missing data"});
    }
    res.json({message: `Hello ${name}`});
});

app.get("/user/:id",(req,res)=>{
    const id = req.params.id;
    console.log(id);
    res.send(`User id is ${id}`);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});