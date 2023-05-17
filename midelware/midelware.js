module.exports = (err, req, res, next) => {
    console.error(err)
    if (err.code & err.message) {
        return res.status(400).send({
            error: true,
            req: req.url,
            method: req.method,
            message: req.message
        })
    }
}