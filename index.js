import Express from "express";
import Products from "./products.js" 
import Time from "./time.js"

const app = Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({extended: true}))

app.get("/time/:id", (req, res) => {
    console
    res.json(Time.find((time) => {
        return +req.params.id === time.id
    }))
})

app.get("/products/:id", (req, res) => {
    console
    res.json(Products.find((product) => {
        return +req.params.id === product.id
    }))
}) 

app.post("/add", (req, res)=> {
    const params = req.body;
    console.log(params);
    res.send("Yeah, i heard you");
})

app.listen(port, () => console.log("listening on port " + port))
/*

app.get() reads, =>  
app.get(path, (callback, listener)) => 
app.get("/", (req, res) => {
    res.send('Hello World') 

})

app.post() writes
app.put() updates
app.delete() deletes

*/  