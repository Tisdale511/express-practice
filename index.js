import Express from "express";

const app = Express();
const port = 3000;
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
app.get("/", (req, res) => {
    res.send('Hello World');
}) 

app.listen(port, () => console.log("listening on port " + port))