import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import {UserController} from './controllers/';

const app = express();
app.use(bodyParser.json());

const User = new UserController();
mongoose.connect('mongodb://localhost:27017/chat', {
     useNewUrlParser: true, useCreateIndex: true, 
     useFindAndModify: true 
    }) // connection to DB


app.get('/users/:id', User.index);
app.post('/registration', User.create);
app.delete('/users/:id', User.delete);

app.listen(3001, function () {
    console.log('example app listenning at port 3001')
})