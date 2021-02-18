const testRouteAdmin = require("./admin/otherRoutes/testRoute.ts");
const testRouteApp = require("./application/otherRoutes/testRoute.ts");



const indexRoutes = require("express") .Router()


indexRoutes.use("/", testRouteAdmin)
indexRoutes.use("/", testRouteApp)

//export { routes }
module.exports = indexRoutes