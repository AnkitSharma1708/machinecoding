import React, { useState } from 'react'

const Form = () => {

  const [formData , setFormData] = useState({
    name : '' ,
    email : '' ,
    password : '',
  });

  const [error, setError] = useState({});

  const validate = () => {
    let newError = {};
    if (!formData.name) newError.name = "Name is Required";
    if (!formData.email) newError.email = "Email is Required";
    if (!formData.password) newError.password ="Password is Required";
    else if(formData.password.length < 6) newError.password = "Password must have 6 Characters";
    setError(newError);
    return Object.keys(newError).length == 0;
  }

  const handleChange = (e)=> {
    setFormData({...formData , [e.target.name] : e.target.value});
  }

  const handleSubmit = () => {
    e.preventDefault();
    if(validate()){
      console.log("Form is Submitted ::" , formData);
      alert("Form is Submitted");
      setFormData({name : '' , email : '' , password : ' '});
    } 
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Name : </label>
          <input type="text" name='name' id='name' value={formData.name} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange}/>
        </div>
        <button type="submit">Login</button>
        <button type="reset">Cancle</button>
      </form>
    </>
  )
}

export default Form