const express = require("express");
const v1UserRoutes = require("./v1/routes/userRoutes");
const v1PostRoutes = require("./v1/routes/postRoutes");

const app = express();

app.use('/v1/users', v1UserRoutes);
app.use('/v1/posts', v1PostRoutes);

app.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = app;