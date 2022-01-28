import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values, [name]: value
        });
    };
    const handleSubmit = event => {
        event.preventDefault();
        setIsSubmitting(true);
        setErrors(validate(values));
    };
    useEffect(() => {
        if (Object.key(errors).length === 0 && isSubmitting) {
            callback();
        }
        return;
    }, [errors]
    );
    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }
}
export default useForm;