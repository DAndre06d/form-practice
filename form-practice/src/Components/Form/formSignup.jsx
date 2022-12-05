import React from "react"
import useForm from "./useFrom"

const FormSignup = () => {
  const {handleChange, values} = useForm();
  return (
    <div>
        <div className="form-content-right">
            <form className="form">
                <h1> Get started with us today! Create an account now.</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label"> Username</label>
                    <input type="text" name="username" 
                    className="form-input" 
                    placeholder="Enter your username" 
                    id="username" 
                    value={values?.username}
                    onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="Enter your email" 
                    id="email"
                    value={values?.email}
                    onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" 
                    name="passwod" 
                    className="form-input" 
                    placeholder="Enter your Password" 
                    id="email"
                    value={values?.password}
                    onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="cpassword" 
                    name="cpassword" 
                    className="form-input" 
                    placeholder="Confirm your password" 
                    id="email"
                    value={values?.cpassword} 
                    onChange={handleChange}/>
                </div>
                <button className="form-input-btn" type="submit">
                    Sign up
                </button>
                <span className="form-input-login">
                    Already have an account?<a href="#">Log in now </a>
                </span>
            </form>
        </div>
    </div>
  )
}

export default FormSignup