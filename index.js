require('dotenv').config();
const express = require('express');
const app = express();

const mailRouts = require('./routes/mail.routes');


app.use(express.json());

app.use('/mail_text', mailRouts);


app.listen(process.env.PORT, () => {
    console.log(`server is working on port ${process.env.PORT}`);
});