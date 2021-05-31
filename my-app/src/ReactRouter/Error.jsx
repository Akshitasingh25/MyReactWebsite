import React from 'react'
import { NavLink } from 'react-router-dom'

const Error=()=> {
    return (
        <div>
            <h1>Oops!page not found</h1>

            <NavLink to="/">Go Back</NavLink>
        </div>
    )
}

export default Error
