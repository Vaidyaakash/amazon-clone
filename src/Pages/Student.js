import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import data from './Details'

const Student = () => {

    // const student = useContext(data);

    return (
        <>
            <Nav />
            <div className='add__students'>
                <h1>Student Details</h1>
                <Link to="/addstudent">
                    <button className='student_add_button' >Add New Students</button>
                </Link>
            </div>
            <div className='table_data'>
                <table align="center" border="2" width="90%">
                    <tr height="60px">
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>

                    <tr height="40px">
                        <td>{data.Name}</td>
                        <td>{data.Age}</td>
                        <td>{data.Course}</td>
                        <td>{data.Batch}</td>
                        <td><Link to='/edit'>Edit</Link></td>
                    </tr>

                </table>
            </div>
        </>
    )
}
export default Student;

