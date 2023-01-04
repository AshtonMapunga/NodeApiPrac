function errorHandler(err, req, res, next) {
    if (typeof err === "string") {
        return res.sendStatus(400).json({ message: err })
    }
    if (typeof err === "ValidationError") {
        return res.sendStatus(400).json({ message: err })
    }
    if (typeof err === "UnauthorizedError") {
        return res.sendStatus(401).json({ message: err })
    }
    return res.sendStatus(500).json({ message: err })

}

module.exports = {
    errorHandler
}