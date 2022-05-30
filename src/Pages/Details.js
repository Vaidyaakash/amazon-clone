import React, { createContext, useState } from 'react'

const data = createContext();

const Details = (props) => {

    const [student, setStudent] = useState([
        {
            "Name": "raj",
            "Age": "20",
            "Course": "HTML",
            "Batch": "june",
            "id": "1"
        },
        {
            "Name": "ravi",
            "Age": "22",
            "Course": "css",
            "Batch": "feb",
            "id": "2"
        },
        {
            "Name": "vicky",
            "Age": "24",
            "Course": "react",
            "Batch": "april",
            "id": "3"
        },
    ])

    return (
        <div>
            <data.Provider value={[student, setStudent]}>
                {props.children}
            </data.Provider>
        </div>
    )
}

export default Details;