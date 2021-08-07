const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: "sarmistha20@navgurukul.org",
        pass: process.env.PASSWORD
    }
});



module.exports.mailSender = async (req, res) => {
    const { to, subject, text } = req.body;
    const mailData = {
        from: "sarmistha20@navgurukul.org",
        to: to,
        subject: subject,
        text: text
    };
    try {
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.log(err.message);
                return res.status(401)
                    .json({
                        message: err.message,
                        status: 401
                    });
            } else {
                console.log(info.messageId);
                return res.status(200)
                    .json({
                        message: info.messageId,
                        status: 200
                    });
            };
        });
    } catch (error) {
        console.log(error);
        return res.status(500)
            .json({
                message: error.message,
                status: 500
            });
    };
};