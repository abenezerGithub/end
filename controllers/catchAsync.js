module.exports = fn => {
    return async  function (req,res,next) {
        fn(req,res,next).catch(err => next(err))
    }
}