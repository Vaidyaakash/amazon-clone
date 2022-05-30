import React from 'react'
import { Link } from 'react-router-dom'

const Edit = () => {
    return (
        <div>
            <div className='inn'>

                <form >

                    <div className='inn_one'>
                        <b>
                            <label>Name:</label>
                            <input
                                type="text"
                                name='name'
                            />
                        </b>
                        <b>
                            <label>Age:</label>
                            <input
                                name='age'
                                type="number" />
                        </b>
                    </div>

                    <div className='inn_two'>
                        <b>
                            <label>Course:</label>
                            <input
                                name='course'
                                type="text"
                            />
                        </b>
                        <b>
                            <label>Batch:</label>
                            <input
                                name='batch'
                                type="text" />
                        </b>
                    </div>
                    <Link to="/student">
                        <button type='submit'>Update</button>
                    </Link>
                    <Link to="/student">
                        <button type='submit'>Cancel</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Edit