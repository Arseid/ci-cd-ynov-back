const express = require("express");

const app = express();

const v1UserRoutes = require("./v1/routes/userRoutes");

app.use('/v1/users', v1UserRoutes);

app.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = app;