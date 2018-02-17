const path = require("path");

module.exports = function (app) {
    // Sets up routes to the home and survey html pages
    //==============================================================
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
}

