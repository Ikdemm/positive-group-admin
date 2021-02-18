require('dotenv')
const nodemailer = require('nodemailer')

module.exports = {

    sendEmail: (to, subject, text) => {

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                type: 'OAuth2',
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
                clientId: process.env.MAIL_CLIENT_ID,
                clientSecret: process.env.MAIL_SECRET,
                accessToken: process.env.MAIL_TOKEN
            }
        });

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: to,
            subject: subject,
            text: text
        };

        return transporter.sendMail(mailOptions)
    }
}

