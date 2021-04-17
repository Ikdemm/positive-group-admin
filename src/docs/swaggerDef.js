const swaggerDef = {
    openapi: '3.0.0',
    info: {
        title: 'Positive Group User Side',
        version: '1.0.0',
    },
    servers: [
        {
            url: "http://localhost:3000/api"
        }
    ]
}

module.exports = swaggerDef;
