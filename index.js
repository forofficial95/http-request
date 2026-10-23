import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>hello man,how are you</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About me and my friends </h1><p> MY name is Mazain </p>");
});

app.listen(port, () =>{
    console.log (`server running on port ${port}.`);
})