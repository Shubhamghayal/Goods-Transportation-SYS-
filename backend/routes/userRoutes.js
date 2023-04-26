const { getAllRegisteredUser, registerUser, login } = require("../controllers/userController")

const router = require("express").Router()

router
    .get("/", getAllRegisteredUser)
    .post("/register", registerUser)
    .post("/login", login)


module.exports = router