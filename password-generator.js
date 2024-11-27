const generator = require('generate-password');

const generatePassword = () => {
    const password = generator.generate({
        length: 10,
        numbers: true,
    });
    console.log('Mot de passe généré :', password);
};

generatePassword();
