import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log("Usuarios");

    response.json([]);
});

app.listen(3333);
