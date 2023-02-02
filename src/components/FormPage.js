import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import RedError from "./RedError";
import axios from 'axios';
import "./formPage.css"
function FormPage() {

  let navigate = useNavigate()
  const NewValidations = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    DOB: Yup.date().required(),
    mobile: Yup.string()
      .required()
  })
  return (
    <div id='main-container'>
      <Formik
        validationSchema={NewValidations}
        initialValues={{ name: "", email: "", DOB: "", mobile: "" }}
        onSubmit={(values) => {
          let birthYear = values.DOB.split("-")[0]
          let todaysDate = new Date()
          let todaysYear = todaysDate.getFullYear()
          if (todaysYear - birthYear >= 18) {
            axios.post('https://stackfusion-zh11.onrender.com/user', values)
              .then(function (response) {
                alert("User added")
                navigate("/DisplayPage")
              })
              .catch(function (error) {
                console.log(error);
              })
          } else {
            alert("age must not be less than 18 years")
          }
        }}
      >

        <Form className='App'>
          <div className='App-header'>
          <h1>STACK FUSION</h1>
          <h3>Full-stack Developer Assignment</h3>
            <div><label htmlFor="">Enter Name: </label>
            <Field className='input' type="text" name="name" />
            <RedError name="name" />
            </div>
            <div><label htmlFor="">Enter Email: </label>
            <Field className='input2'  type="text" name="email" />
            <RedError name="email" />
            </div>
            <div><label htmlFor="">Enter DOB: </label>
            <Field className='input3'  type="date" name="DOB" />
            <RedError name="DOB" />
            </div>
            <div><label htmlFor="">Mobile: </label>
            <Field className='input4'  type="text" name="mobile" />
            <RedError name="mobile" />
            </div>
          <button type='submit'>Submit</button>
          </div>
        </Form>
      </Formik>

    </div>
  )
}

export default FormPage