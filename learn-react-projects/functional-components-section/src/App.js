import './App.css';
import FormInput from './Components/FormInput';
import React, { useState } from 'react';
const App = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const initialState = [
    {
      id: 1, name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "your first name requierd",
      label: "First Name",

      required: true,
    }, {
      id: 2, name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "your last name requierd",
      label: "Last Name",

      required: true,
    },

    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>

        <h1>Log in</h1>
        {initialState.map((input) => (<FormInput key={input.id}{...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;