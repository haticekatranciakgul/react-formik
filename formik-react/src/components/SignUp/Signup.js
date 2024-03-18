import React from 'react'
import { useFormik } from 'formik';
import validationSchema from '../validation/Validations';

function Signup() {

    const {handleSubmit, handleChange, values } = useFormik({
        initialValues: {
          email: '',
          password:'',
          passwordConfirm:''
            
        },
        onSubmit: values => {
          console.log(values);
    
        },
        validationSchema
      });

  return (
    <div>
         <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <label >Email</label>
              <input name='email' value={values.email} onChange={handleChange}></input>

              <br></br>
              <br></br>
              <label >Password</label>
              <input name='password' value={values.password} onChange={handleChange}></input>

              <br></br>
              <br></br>

              <label >Password Confirm</label>
              <input name='passwordConfirm' value={values.passwordConfirm} onChange={handleChange}></input>

              <br></br>
              <br></br>



              <button type="submit">Submit</button>


              <br></br>
              <br></br>


              {JSON.stringify(values)}

            </form>
      
    </div>
  )
}

export default Signup
