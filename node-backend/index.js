var express = require('express');
const sql = require('mssql');
const bcrypt = require('bcryptjs');
const DB_CONFIG = require('./database');
const { v4: uuidv4 } = require('uuid');
const joi = require('joi');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/addUser', async function (req, res) {
    const dataString = req.body;
    const data = JSON.parse(dataString);


    console.log(dataString);

    // try {
    //     const schema = joi.object({
    //         fNmae: joi.string().required(),
    //         lName: joi.string().required(),
    //         email: joi.string().email().required(),
    //         password: joi.string().required(),
    //         userName: joi.string().required(),
    //         mobileNo: joi.string().required(),
    //     });

    //     const { error } = schema.validate(data);

    //     if (error) {
    //         res
    //             .status(400)
    //             .send(error.details[0].message);
    //         return;
    //     }


    //     const userId = uuidv4();
    //     const salt = await bcrypt.genSalt(10);
    //     const hashedPassword = await bcrypt.hash(data.password, salt);

    //     const request = await pool.request()
    //         .input('id', sql.VarChar, userId)
    //         .input('fName', sql.VarChar, data.fName)
    //         .input('lName', sql.VarChar, data.lName)
    //         .input('email', sql.VarChar, data.email)
    //         .input('password', sql.VarChar, hashedPassword)
    //         .input('userName', sql.VarChar, data.userName)
    //         .input('mobileNo', sql.VarChar, data.mobileNo)
    //         .input('role', sql.DateTime, 'user')
    //         .input('adminType', sql.DateTime, 'user')
    //         .query('INSERT INTO [dbo].[users] (id, fName, lName, email, password, userName, mobileNo, role, adminType) VALUES (@id, @fName, @lName, @email, @password, @userName, @mobileNo, @role, @adminType)');

    //     res.status(200).send('User added successfully');

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send('Internal Server Error');
    // }
});

app.listen(6000, function () {
    console.log('Example app listening on port 6000!');
});
