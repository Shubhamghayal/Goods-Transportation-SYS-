const user = require("./../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


exports.registerUser = async (req, res) => {
    try {
        console.log(req.body);
        const f = await user.findOne({ email: req.body.email })
        if (f) {
            return res.status(400).json({
                success: false,
                message: "email already exist,please register with another email "
            })
        }

        req.body.password = bcrypt.hashSync(req.body.password)
        const result = await user.create(req.body)
        const token = jwt.sign({ id: result._id }, process.env.JWT_KEY)
        res.json({
            success: true,
            message: `${result.name} registered successfully`,
            result: {
                name: result.name,
                email: result.email,
                token
            }
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: `error ${error.message}`
        })
    }
}

exports.getAllRegisteredUser = async (req, res) => {
    try {
        const result = await user.find()
        res.json({
            success: true,
            count: result.length,
            message: `All users fetched successfully`,
            result
        })
    } catch (error) {
        res.status(400).json({
            message: `error ${error.message}`
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await user.findOne({ email })
        if (!result) {
            return res.status(400).json({ message: "email not found" })
        }
        const found = bcrypt.compareSync(password, result.password)
        if (!found) {
            return res.status(400).json({ message: "password are not matched" })
        }

        res.json({
            message: "login success",
            result: {
                name: result.name,
                email: result.email,
            },
        })
    } catch (error) {
        res.status(400).json({
            message: `error ${error.message}`
        })
    }
}









