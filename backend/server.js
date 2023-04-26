const express = require("express")
const cors = require("cors")
const db = require("./config/db")

const app = express()
require("dotenv").config({ path: "./.env" })
db()
app.use(express.json())
app.use(cors())

app.use("/user", require("./routes/userRoutes"))
const PORT = process.env.PORT || 5000
app.listen(PORT,
    console.log(`SERVER RUNNING http://localhost:${PORT}`))