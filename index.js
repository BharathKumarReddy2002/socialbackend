const express = require("express");
const app = express();
const format = require("date-format");

const PORT = process.env.PORT || 4000 ; 

app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello from LCO</h1>")
})



app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "bharath",
        followers: 60,
        follows: 70,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    }

    res.status(200).json(instaSocial);
})

app.get("/api/v1/facebook", (req, res) => {
    const facebookSocial = {
        username: "bharathreddy",
        followers: 65,
        follows: 75,
        date:format.asString("dd[MM] - hh:mm:ss", new Date())
    }

    res.status(200).json(facebookSocial);
})

app.get("/api/v1/linkedin", (req, res) => {
    const linkedinSocial = {
        username: "bharathKumarReddy",
        followers: 30,
        follows: 40,
        date:format.asString("dd[MM] - hh:mm:ss", new Date())
    }

    res.status(200).json(linkedinSocial);
})

app.get("/api/v1/:token", (req, res) => {
    res.status(200).json({params: req.params.token})
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})