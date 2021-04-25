//using a closure and a lambda concept here to be able to catch any error for our controllers
const funcCatcher =  (func) => ( (req, res, next) => {
    
    try {
        func(req, res, next)
    } catch(er){
        console.log(er)
        next(er);
    }
    


} );



module.exports = funcCatcher;
