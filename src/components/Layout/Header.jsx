import React from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext'
import { signOutUser } from '../../services/users';
import { useHistory } from 'react-router-dom';

export default function Header() {
    const auth = useUser();
    const history = useHistory();

    const handleClick = async () => {
        const userOut = await signOutUser();
        auth.setUser({});
        history.replace('/login');
    }
    return (
        <div>
            <div>
            {auth.user.email ? `Welcome ${auth.user.email}` : <p>Not Signed In<Link to='/login'>Sign in</Link></p>}
            </div>
        <div>
            {auth.user.email ? <button onClick={handleClick}>Sign Out</button> : <p></p>}
        </div>
        </div>
    )
}
