import React from 'react'
import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { signUpUser } from '../../services/users';
import { signInUser } from '../../services/users';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AuthForm() {
    const auth = useUser();
    const history = useHistory();
    const [logIn, setLogIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorx, setErrorX] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/register' ) {
            setLogIn(false);
        }
        else if (location.pathname === '/login') {
            setLogIn(true);
        }
        
    }, [logIn])
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
      try {
        console.log(auth.user, 'submit');
        if(!email || password.length < 8 ) {
            throw new Error('Invalid attempt. Must be valid email and password of 8 characters')
        }
    } catch (error) {
      setErrorX(error.message);
      }
        
        if(location.pathname === '/register') {
            const returned = await signUpUser(email, password);
            console.log(returned);
            history.replace('/confirm-email');

        }
        if(location.pathname = '/login') {
            const userIn = await signInUser(email, password);
            console.log(userIn, 'userIn')
            auth.setUser({id: userIn.id, email: userIn.email});
            console.log(auth.user);
            history.replace('/profile')
        }
      
    }
    console.log(auth.user, 'outside');
    
    return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>{location.pathname==='/register' ? 'Create Account': 'Sign In'}</legend>
                    <label>Email:
                        <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/> 
                    </label>
                    <label>Password:
                        <input 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </label>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
            <div>{location.pathname === '/register' ? <p>Already have an account?<Link to='/login'>Sign In</Link></p> : <p>Don't have an account? <Link to='/register'>Create an account here</Link></p>}
            </div>
        </div>
        </div>
    )
}
