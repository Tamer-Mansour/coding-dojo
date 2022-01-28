export default function validateInfo(values) {
    let errors = {}
    if(!values.firstName.trim()){
        errors.firstName = "First name required";
    }
    if(!values.lastName.trim()){
        errors.lastName = "Last Name is required"
    }
    if(!values.email){
        errors.email = "Email requierd";
    }else if (!/^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i.test(values.email)){
        errors.email = "Email address is invalid";
    }
    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length<6){
        errors.password = "Password needs to be 6 charecters or more"
    }
    if(!values.confirmPassword){
        errors.confirmPassword = "Confirm Password is required"
    }else if (values.confirmPassword !== values.password){
        errors.confirmPassword = "Passwords do not match"
    }
    return errors;
}