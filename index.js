// index.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./app/routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// swagger
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./app/swagger');

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
