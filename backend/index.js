import mongoose from 'mongoose';
import express from "express";
//import multer from 'multer';
 import cors from 'cors';
import * as UserController from "./controllers/UserController.js";
// import {check} from 'express-validator';

mongoose
    .connect('mongodb+srv://hdzy:WIMrlFLnni0vtxG9@group.vui9gwg.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

const app = express();

app.use(cors());

app.use(express.json());

app.post('/register', UserController.register);
app.get('/login', UserController.login);

app.listen(3000, (err) => {
 if (err) console.log(err);
 else console.log('OK!');
});