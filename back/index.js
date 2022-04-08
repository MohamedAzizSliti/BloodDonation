const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const centerRoute = require("./routes/centerRoutes")

dotenv.config();
/* Connect To DB */
mongoose
    .connect(
        process.env.MONGO_URL
    )
    .then(() =>
        console.log("DB Connection Successfull !")
    ).catch((err) =>
        console.log(err));
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/center", centerRoute);


app.listen(process.env.PORT, () => {
    console.log("backend server is Running! at " + process.env.PORT);
})