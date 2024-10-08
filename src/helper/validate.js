import toast from 'react-hot-toast'

/**validate login page username */
export async function usernameValidate(values){
    const errors  = usernameVerify({},values);
    return errors;
}
export async function passwordValidate(values){
    const errors = passwordVerify({},values);

    return errors;
}
 

export async function resetPasswordValidation(values){
    const errors = passwordVerify({},values);
    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("Password not match....!");
    }
}

export async function registerValidation(values){
    const errors = usernameVerify({}, values)
    passwordVerify(errors, values);
    emailVerify(errors , values);

    return errors;
}

/**validate profile pic */
export async function  profileValiation(values){
    const errors = emailVerify({},values);
    return errors;
}






/**validate password*/
function passwordVerify(errors ={},values){

const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error('Password required...!');
    }else if(values.password.includes(" ")){
        errors.password = toast.error('Wrong Password ...!');
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 characters long");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character");
    } return errors;
}



/**validate username */
function usernameVerify(error ={},values){
    if(!values.username){
        error.username = toast.error('username required...!');
        
    }else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username...!');
    }
    return error;
}

function emailVerify(error = {}, values){
    if(!values.email){
        error.email = toast.error("Email Required....!");

    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!");
    }else if(!/^[A-Z0-9._%+-]+@[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email address...!")
    }
    return error;
}
