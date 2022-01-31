import React from 'react';
import validate from './validateinfo';
import useForm from './useForm';
import './Form.css';


const FormSignup = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)
    return (
        <form class="form-inputs" onSubmit={handleSubmit} noValidate >
            <div class="mb-3 row coll animate__animated animate__rubberBand  " >
                <label class="col-sm-2 col-form-label animate__animated animate__rubberBand " for="firstName">First name </label>
                <div class="col-sm-10">
                    <input type="text"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                        name="firstName"
                        class="animate__animated animate__rubberBand "
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
            </div >
            <div class="mb-3 row coll animate__animated animate__rubberBand ">
                <label class="col-sm-2 col-form-label animate__animated animate__rubberBand " for="LastName">Last name </label>
                <div class="col-sm-10">
                    <input type="text"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                        name="lastName"
                        class="animate__animated animate__rubberBand "
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>
            </div>
            <div class="mb-3 row coll animate__animated animate__rubberBand ">
                <label class="col-sm-2 col-form-label animate__animated animate__rubberBand " for="Email">Email </label>
                <div class="col-sm-10">
                    <input type="text"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        name="email"
                        class="animate__animated animate__rubberBand "
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
            </div>
            <div class="mb-3 row coll animate__animated animate__rubberBand ">
                <label class="col-sm-2 col-form-label animate__animated animate__rubberBand " for="Password">Password </label>
                <div class="col-sm-10">
                    <input type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        name="password"
                        class="animate__animated animate__rubberBand "
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
            </div>
            <div class="mb-3 row coll animate__animated animate__rubberBand ">
                <label class="col-sm-2 col-form-label animate__animated animate__rubberBand " for="confirmPassword">Confirm Password </label>
                <div class="col-sm-10">
                    <input type="password"
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        name="confirmPassword"
                        class="animate__animated animate__rubberBand "
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
            </div>
            <input class="animate__animated animate__rubberBand " type="submit" />
            <h1 class="animate__animated animate__rubberBand ">Your form data is :</h1>
            <br />
            <br />
            <h6 class="animate__animated animate__rubberBand "><b>First name is :</b> {values.firstName}</h6>
            <br />
            <h6 class="animate__animated animate__rubberBand "><b>Last name is :</b> {values.lastName}</h6>
            <br />
            <h6 class="animate__animated animate__rubberBand "><b>Email is :</b> {values.email}</h6>
            <br />
            <h6 class="animate__animated animate__rubberBand "><b>Password is :</b> {values.password}</h6>
            <br />
            <h6 class="animate__animated animate__rubberBand "><b>Confirmation Password :</b> {values.confirmPassword}</h6>
        </form>
    );
}
export default FormSignup;