import './App.css';
import { Formik } from 'formik';


function App() {
  return (
    <div className="App">



      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: 'Hatice',
          lastName: 'KATRANCI',
          email: 'hatice@gmail.com',
          gender: '',
          hobies: [],
          country: "",

        }}
        onSubmit={(values) => {

          console.log(values);
        }}
      >
        {
          ({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input name='firstName' value={values.firstName} onChange={handleChange}></input>

              <br></br>
              <br></br>
              <br></br>


              <label htmlFor="lastName">Last Name</label>
              <input name='lastName' value={values.lastName} onChange={handleChange}></input>

              <br></br>
              <br></br>
              <br></br>

              <label htmlFor="email">Email</label>
              <input name='email' value={values.email} onChange={handleChange}></input>

              <br></br>
              <br></br>
              <br></br>
              <br></br>


              <label htmlFor="gender">Gender</label>
              <br>
              </br>

              <span>Male</span>
              <input type='radio' name='gender' value="male" onChange={handleChange} checked={values.gender === ""}></input>
              <span>Female</span>
              <input type='radio' name='gender' value="female" onChange={handleChange}></input>




              <br></br>
              <br></br>
              <br></br>
              <br></br>



              <div>
                <input type='checkbox' name='hobies' value="football" onChange={handleChange}></input>
                football
              </div>

              <div>
                <input type='checkbox' name='hobies' value="cinema" onChange={handleChange}></input>
                cinema
              </div>

              <div>
                <input type='checkbox' name='hobies' value="photography" onChange={handleChange}></input>
                photography
              </div>

              <br></br>
              <br></br>
              <br></br>
              <br></br>

            <select name="country" value={values.country} onChange={handleChange}>
              <option value="tr">Turkey</option>
              <option value="en">England</option>
              <option value="usa">USA</option>
            </select>


              <br></br>
              <br></br>
              <br></br>
              <br></br>




              <button type="submit">Submit</button>


              <br></br>
              <br></br>
              <br></br>
              <br></br>

              {JSON.stringify(values)}

            </form>

          )
        }



      </Formik>


    </div>
  );
}

export default App;
