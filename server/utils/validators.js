module.exports.validateRegisterInput = (
    username, 
    email,
    password,
) => {
    // check username can't be empty
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username cant be empty'
    }
    //check email to not be empty
    if(email.trim() === ''){
        errors.email = 'Email cant be empty'
    }
    else{
        //check for valid email address
        const regEx =  /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = 'Email must be valid email address'
        }
    }
    // check for password
    if(password === ''){
        errors.password = 'Password cant be empty'
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
    
}

module.exports.validateLoginInput = (
    username,
    password
) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username cant be empty'
    }
    
    if(password === ''){
        errors.password = 'Password cant be empty'
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
}