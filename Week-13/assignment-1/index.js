const express = require("express");
const router = require("./weatherApp/routes");
const port = process.env.port || 3000;
const app = express();

app.use(router);

app.get("/", (req, res) => {
    res.send("Hello !!!!!!")
});

app.listen(port, err => {
    if (err)
        return console.log("ERROR", err);
    console.log(`Server Up and Running on Port - ${port}`)
})