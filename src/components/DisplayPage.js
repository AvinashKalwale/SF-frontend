import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./displayPage.css"
function DisplayPage() {
  let [data, setData] = useState([]);
  let navigate = useNavigate()

  const getData = () => {
    axios.get(`https://stackfusion-zh11.onrender.com/user`)
      .then((data) => {
        console.log(data.data.data);
        setData(data.data.data)
      })
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div id='main-container'>
      <button id='back-btn' onClick={() => {
        navigate(-1)
      }}>Back</button>
      <div id='container'>
      <h1>STACK FUSION</h1>
          <h3>Full-stack Developer Assignment</h3>
        <h2>Users List</h2>
            {data.map((data, index) => {
              return <div className='div' key={data._id}>

                <div>{data.name}</div>
                <div>{data.email}</div>
                <div>{data.mobile}</div>
                <div>{data.DOB}</div>

              </div>
            })}
         
      </div>

    </div>
  )
}

export default DisplayPage
