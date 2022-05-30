import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const EditStudent = () => {

    const submitHandler = (e) => {
        
    }

    return (
        <>
            <Nav />
            <div className='inn'>
                <form>

                    <div className='inn_one'>
                        <b>
                            <label>Name:</label>
                            <input type="text" />
                        </b>
                        <b>
                            <label>Age:</label>
                            <input type="number" />
                        </b>
                    </div>

                    <div className='inn_two'>
                        <b>
                            <label>Course:</label>
                            <input type="text" />
                        </b>
                        <b>
                            <label>Batch:</label>
                            <input type="text" />
                        </b>
                    </div>
                    <Link to="/student">
                        <button className='submit_btn' onClick={submitHandler} >Update</button>
                    </Link>
                    <Link to="/student"><button className='submit_btn'>Cancel</button></Link>
                </form>
            </div>
        </>
    )
}

export default EditStudent;