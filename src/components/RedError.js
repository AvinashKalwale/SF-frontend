import { ErrorMessage } from 'formik'
import React from 'react'
import "./formPage.css"
function RedError({name}) {
  return (
    <div className='error'>
      <ErrorMessage name={name}/>
    </div>
  )
}

export default RedError
