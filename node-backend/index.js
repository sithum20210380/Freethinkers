const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const FormDataModel = require('./models/usermodel');
const bcrypt = require('bcrypt');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;
// Connect to MongoDB
mongoose.connect('mongodb+srv://freethinkers:freethinkers@cluster0.15vaxf6.mongodb.net/');

app.post('/register', (req, res) => {
  // To post / insert data into database
  const { email, password } = req.body;
  FormDataModel.findOne({ email: email })
      .then(user => {
          if (user) {
              res.json("Already registered")
          }
          else {
              FormDataModel.create(req.body)
                  .then(users => res.json(users))
                  .catch(err => res.json(err))
          }
      })

})

// Endpoint for login
app.post('/login', async (req, res) => {
  const { userName, password, DTPCode } = req.body;

  try {
      const user = await FormDataModel.findOne({ userName: userName, DTPCode: DTPCode });

      if (!user) {
          return res.status(404).json({ message: 'No records found!' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
          return res.status(401).json({ message: 'Wrong password' });
      }

      // Check user role and send appropriate response
      if (user.role === 'Admin') {
          res.json("Admin login successful");
      } else if (user.role === 'user') {
          res.json("User login successful");
      } else {
          res.json("Unknown role");
      }
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
});


app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});