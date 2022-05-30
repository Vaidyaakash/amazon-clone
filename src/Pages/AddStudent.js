import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Nav from './Nav';

const AddStudent = () => {

  const [data, setData] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
  })

  const [collect, setCollect] = useState([])

  const Submited = (e) => {
    e.preventDefault();
    const newData = { ...data, id: Math.random().toString() * 10000000000 }
    setCollect([...collect, newData])
    console.log(collect);
  }


  const eventHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    // console.log(data);
  }


  return (
    <>
      {/* <Nav /> */}
      <div className='inn'>
        <form onSubmit={Submited}>

          <div className='inn_one'>
            <b>
              <label>Name:</label>
              <input
                type="text"
                name='name'
                value={data.name}
                onChange={eventHandler}
              />
            </b>
            <b>
              <label>Age:</label>
              <input
                name='age'
                value={data.age}
                onChange={eventHandler}
                type="number" />
            </b>
          </div>

          <div className='inn_two'>
            <b>
              <label>Course:</label>
              <input
                name='course'
                value={data.course}
                onChange={eventHandler}
                type="text"
              />
            </b>
            <b>
              <label>Batch:</label>
              <input
                name='batch'
                value={data.batch}
                onChange={eventHandler}
                type="text" />
            </b>
          </div>
          <Link to="/student">
          <button type='submit'>Submit</button>
          </Link>
          <Link to="/student">
            <button type='submit'>Cancel</button>
          </Link>
        </form>
      </div>
    </>
  )
}

export default AddStudent;