const jwt = require("jsonwebtoken")


exports.loginonly = (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({ message: "Please Provide Token" })
        }
        jwt.verify(token, "123")
        next()
    } catch (error) {
        res.status(401).json({ message: "error" + error })
    }
}