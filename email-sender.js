const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'oussamaabrougui32@gmail.com',
        pass: 'oussama1920' 
    }
});

const mailOptions = {
    from: 'oussamaabrougui32@gmail.com',
    to: 'oussamaabrougui5@gmail.com',
    subject: 'Test Node.js Email',
    text: 'Ceci est un test d\'envoi d\'email depuis Node.js'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Erreur :', error);
    }
    console.log('Email envoyé :', info.response);
});
