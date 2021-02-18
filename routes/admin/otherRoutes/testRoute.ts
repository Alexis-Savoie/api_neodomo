const testRouteAdminR = require("express").Router()

// Middleware
const middlewareTestTestRouteAdmin = require("../../../middlewares/middlewareTest.ts");

//#region test app route
testRouteAdminR.get('/testAdmin',  middlewareTestTestRouteAdmin, (req, res) => {

    console.log("Test worked yay !!")
    res.setHeader("Content-Type", "application/json"); // Typage de la data de retour
    res.status(200).json({message: "bonjour neoDomo (admin)"});
})
//#endregion

module.exports = testRouteAdminR
