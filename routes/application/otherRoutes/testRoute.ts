// Modules
const testRouteAppR = require("express").Router()

// Middleware
const middlewareTestTestRouteApp = require("../../../middlewares/middlewareTest.ts");


//#region test app route
testRouteAppR.get('/testApp', middlewareTestTestRouteApp, (req, res) => {

    console.log("Test worked yay !!")
    res.setHeader("Content-Type", "application/json"); // Typage de la data de retour
    res.status(200).json({message: "bonjour neoDomo (app)"});
})
//#endregion

module.exports = testRouteAppR
