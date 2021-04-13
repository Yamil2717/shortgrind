export default function validateInfo(values) {
    let errors = {}

    // Username
    if(!values.username.trim()) {
        errors.username = 'Account name required';
    }
    if(values.username.length < 4) {
        errors.username = 'Account name too short';
    }
    //Email
    if(!values.email){
        errors.email = 'Email required';
    } else if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    //Passwords
    if(!values.password) {
        errors.password = 'Password is required';
    } else if(values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }
    if(!values.repassword) {
        errors.repassword = 'Password is required';
    } else if (values.repassword !== values.password) {
        errors.repassword = 'Passwords do not match';
    }
    return errors;
}
