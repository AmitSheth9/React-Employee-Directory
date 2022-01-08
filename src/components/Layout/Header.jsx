import React from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext'
import { signOutUser } from '../../services/users';
import { useHistory } from 'react-router-dom';
import styles from './Header.css'

export default function Header() {
    const auth = useUser();
    const history = useHistory();

    

    const handleClick = async () => {
        const userOut = await signOutUser();
        auth.setUser({});
        history.replace('/');
    }
    return (
        <div className={styles.container}>
            <div className={styles.acme}>
                <Link to='/'>ACME INC</Link>
            </div>
            <div className={styles.status}>
            {auth.user.email ? `Welcome, ${auth.user.email}` : ''}
            </div>
            <div>
            {auth.user.email ? <button onClick={handleClick}>Sign Out</button> : <div className={styles.authstatus}>  <Link to='/login'>  Sign in</Link></div> }
            
            <br/><br/>
            </div>
            <br/><br/>
        </div>
    )
}
