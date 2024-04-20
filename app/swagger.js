const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'My API',
        version: '1.0.0',
        description: 'My API Description: Vanilla Express CRUD: Without ORM',
    },
};

const options = {
    swaggerDefinition,
    // apis: ['./app/routes/*.js'], // Path to the API routes in your Node.js application
    // apis: ['./app/controllers/*.js'], // Path to the API routes in your Node.js application
    apis: ['./app/models/*.js'], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;