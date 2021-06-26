require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan"); 
const routerNavigation = require("./src")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-request-With, Content-Type, Accept, Authorization"
    );
    next();
});
app.use("/", routerNavigation);
app.get("*", (request, response) => {
    response.status(404).send("Path not found!")
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Express app is listening on host: ${process.env.IP} and port: ${process.env.PORT}`)
});