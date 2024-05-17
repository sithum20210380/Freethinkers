const FormDataModel = require('../models/usermodel');

exports.registerUser = (req, res) => {
    const { email, password } = req.body;

    FormDataModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json({ success: false, message: "Already registered" });
            } else {
                FormDataModel.create(req.body)
                    .then(newUser => res.json({ success: true, message: 'User registered successfully', user: newUser }))
                    .catch(err => res.json({ success: false, message: 'Error registering user', err }));
            }
        })
        .catch(err => res.json({ success: false, message: 'Error checking user registration', err }));
};

exports.loginUser = (req, res) => {
    const { userName, password } = req.body;

    FormDataModel.findOne({ userName: userName })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json(user);
                } else {
                    res.json({ success: false, message: 'Wrong password' });
                }
            } else {
                res.json({ success: false, message: 'No records found' });
            }
        })
        .catch(err => res.json(err));
};
