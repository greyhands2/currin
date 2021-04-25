//using a closure and a lambda concept here to be able to catch any error for our controllers
module.exports.asyncCatcher =  (func) => ( (req, res, next) => (  func(req, res, next).catch( (er)=>(next(er)) ) ) );

