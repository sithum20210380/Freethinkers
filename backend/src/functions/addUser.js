const { app } = require('@azure/functions');
const sql = require('mssql');
const bcrypt = require('bcryptjs');
const { DB_CONFIG } = require('../constants/database');
const { v4: uuidv4 } = require('uuid');
const joi = require('joi');

app.http('addUser', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const pool = await new sql.ConnectionPool(DB_CONFIG).connect();
        const dataStr = await request.text();
        const data = JSON.parse(dataStr);

        try {
            const schema = joi.object({
                fNmae: joi.string().required(),
                lName: joi.string().required(),
                email: joi.string().email().required(),
                password: joi.string().required(),
                userName: joi.string().required(),
                mobileNo: joi.string().required(),
            });

            const { error } = schema.validate(data);

            if (error) {
                context.res = {
                    status: 400,
                    body: error.message
                };
                return;
            }

            const userId = uuidv4();
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(data.password, salt);

            const request = await pool.request()
                .input('id', sql.VarChar, userId)
                .input('fName', sql.VarChar, data.fName)
                .input('lName', sql.VarChar, data.lName)
                .input('email', sql.VarChar, data.email)
                .input('password', sql.VarChar, hashedPassword)
                .input('userName', sql.VarChar, data.userName)
                .input('mobileNo', sql.VarChar, data.mobileNo)
                .input('role', sql.DateTime, 'user')
                .input('adminType', sql.DateTime, 'user')
                .query('INSERT INTO [dbo].[users] (id, fName, lName, email, password, userName, mobileNo, role, adminType) VALUES (@id, @fName, @lName, @email, @password, @userName, @mobileNo, @role, @adminType)');


            context.res = {
                status: 200,
                body: 'User added successfully'
            };

        } catch (error) {
            context.res = {
                status: 500,
                body: error.message
            };
        } finally {
            await pool.close();
        }
    }
});
