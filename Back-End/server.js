const express = require("express");
const cors = require("cors");
require("dotenv").config();
const redis = require("redis"); // Require the redis package
let dbConnect = require("./dbConnect");

var corsOptions = {
    origin: ["http://localhost:5173","http://192.168.1.73:5174"]
};

const app = express();

const client = redis.createClient({
    host: process.env.REDIS_HOST || "127.0.0.1", // Redis server host
    port: process.env.REDIS_PORT || 6379,       // Redis server port
});

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

let shoeRoutes = require('./routes/shoeRoutes');
app.use('/api/shoes', shoeRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
