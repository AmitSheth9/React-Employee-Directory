import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            Welcome to the ACME Employee Directory. An account is an employee requirement. Please <Link to='/register'>create an account</Link> and complete your profile. 

            Already have an account? <Link to='/login'>Sign in</Link>
        </div>
    )
}
