import bcrypt from "bcryptjs";
import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import {validationResult} from "express-validator";

export const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            passwordHash: passHash,
            university: req.body.university,
            group: req.body.group
        })

        const user = await doc.save();


        const token = jwt.sign(
            {
                _id: user._id
            },
            'secret',
            {
                expiresIn: '30d'
            });

        const {passwordHash, ...userDate} = user._doc;

        res.json({...userDate, token});
    } catch (err) {
        console.log(err);
        res.status(500).send('Ошибка при регистрации');
    }
};

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email});

        if (!user) {
            return res.status(404).json({errors: [{msg: 'Ошибка авторизации'}]});
        }

        const isValid = await bcrypt.compare(req.body.password, user._doc.passwordHash);

        if (!isValid) {
            return res.status(404).json({errors: [{msg: 'Ошибка авторизации'}]});
        }

        const token = jwt.sign(
            {
                _id: user._id
            },
            'secret',
            {
                expiresIn: '30d'
            });

        const {passwordHash, ...userDate} = user._doc;

        res.json({...userDate, token});

    } catch (err) {
        console.log(err);
        res.status(500).send('Ошибка при авторизации');
    }
};