// #region midleware to check input data syntax
const middlewareTest = (req, res, next) => {
    console.log("Bonjour, ceci est un middleware de test !")
    next();
    
};
//#endregion

// Exports all the functions
module.exports = middlewareTest
