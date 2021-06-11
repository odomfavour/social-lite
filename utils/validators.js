module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    gender,
    phone
) => {
    const errors = {};
    if(username.trim() == '') {
        errors.username = 'Username must not be empty';
    }
    if(email.trim() === ''){
        errors.email = 'Email must not be empty';
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)) {
            errors.email = 'Email must be a valid email address'
        }
    }
    if(password === '') {
        errors.password = 'Password must not empty';

    } else if(password !== confirmPassword) {
        errors.confirmPassword = 'Passwords must match';
        // console.log(password)
        // console.log(confirmPassword)
    }

    if(firstName === '') {
        errors.firstName = 'put a first name';
    }
    if(lastName === '') {
        errors.lastName = 'put a last name';
    }
    if(phone === '') {
        errors.lastName = 'put a phone number';
    }
    if(gender === '') {
        errors.gender = 'you have a gender';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.validateLoginInput = (email, password) => {
    const errors = {};

    if(email.trim() === ''){
        errors.email = 'Email must not be empty';
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)) {
            errors.email = 'Email must be a valid email address'
        }
    }

    if(password === '') {
        errors.password = 'Password must not be empty'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}