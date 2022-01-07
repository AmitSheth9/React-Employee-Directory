import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../context/UserContext'

export default function Home() {
    const auth = useUser();
    return (
        <div>
            Welcome to the ACME Employee Directory. An account is an employee requirement. Please <Link to='/register'>create an account</Link> and complete your profile. 

            Already have an account? <Link to='/login'>Sign in</Link>
        </div>
    )
}
