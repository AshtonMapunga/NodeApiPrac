const bcrypt = require("bcryptjs")
const express = require("express")
const router = express.Router()
const Userdb = require("../module/module")


router.post("/register", async(req, res) => {
    const Savetodb = Userdb(req.body)
    const salt = bcryptjs.genSyncSalt(10)

    req.body.password = bcryptjs.hashSync(password, salt)
    try {
        const Saved = await Savetodb.save()
        if (!Saved) throw error
        res.send(Savetodb)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router