const express = require("express");
const router = express.Router();
const weatherApiRouter = require("./apis.js");

router.use('/weather', weatherApiRouter);

router.get("/test/route", (req, res) => {
    res.send("test route");
})
module.exports = router;