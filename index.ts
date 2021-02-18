// set NODE_ENV=production

const express = require("express") 
const bodyParser = require("body-parser")

const app = express() // Instance Express

const port = 8020 // Port ecoute du server

//import { routes } from "./routes/indexRoute.ts"
const routes = require("./routes/indexRoute.ts");


//import middleware from "./src/routes/otherRoutes/middleware"

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Middelware
//app.use("/", middleware.middleware)


app.use(routes)


// Run serve
app.listen(port, () => console.log(`listening on http://localhost:${port}`))
