const express = require("express");
const v1UserRoutes = require("./v1/routes/userRoutes");
const v1PostRoutes = require("./v1/routes/postRoutes");
const { specs, swaggerUi } = require('./swagger');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/v1/users', v1UserRoutes);
app.use('/v1/posts', v1PostRoutes);

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;