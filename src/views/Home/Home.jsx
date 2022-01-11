import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import styles from './Home.css'

export default function Home() {
    const auth = useUser();
    return (
        <div className = {styles.home}>
            Welcome to the ACME Employee Directory. An account and Profile is an employee requirement. <br/>
            
            {!auth.user.email ? <div>Please <Link to='/register'>create an account</Link> and complete your profile. 

            Already have an account? <Link to='/login'>Sign in</Link>
            </div>
            :
                <Link to='/profile'> Visit the Profile Page</Link> }
            
        </div>
    )
}
