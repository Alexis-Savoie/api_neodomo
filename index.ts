// set NODE_ENV=production

const express = require("express") // Chargement Express
const bodyParser = require("body-parser")
const app = express() // Instance Express

const port = process.env.PORT || 8020 // Port ecoute du server

/*
const route = require("./src/routes/indexRoute")

const middleware = require("./src/routes/otherRoutes/middleware")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Middelware
app.use("/", middleware.middleware)
app.use(route)
*/

//#region test route
app.get('/test', (req, res) => {

    console.log("Test worked yay !!")
    res.setHeader("Content-Type", "application/json"); // Typage de la data de retour
    res.status(200).json({message: "bonjour API_NEODOMO"});
})
//#endregion

// Run serve
app.listen(port, () => console.log(`listening on http://localhost:${port}`))
