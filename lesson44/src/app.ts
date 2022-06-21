import express from 'express';
import 'reflect-metadata';

const app = express();

app.listen(5500, () => {
    console.log('Server has started!!!!!');
});
