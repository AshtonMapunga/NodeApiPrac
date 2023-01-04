const jw = require('jsonwebtoken')


function authenticateToken(res, req, next) {
    const authToken = req.headers['authorization']
    const token = authToken && authToken.split(' ')[1]

    if (token == null) res.sendStatus(401);

    jw.verify(token, Snippert_SceretKEY, (err, user) => {
        if (err) res.sendStatus(403)
        req.user = user;
        next()
    })
}

function generatacssToken(username) {
    return jw.sign({ data: username }, Snippert_SceretKEY, { expires: '1h' })
}

module.exports = {
    authenticateToken,
    generatacssToken
}