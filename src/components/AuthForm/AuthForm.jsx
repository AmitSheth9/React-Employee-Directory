import React from 'react'
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { signUpUser } from '../../services/users';
import { signInUser } from '../../services/users';
import { useHistory } from 'react-router-dom';

export default function AuthForm() {
    const auth = useUser();
    const history = useHistory();
    //const [signedIn, setSignedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(auth.user, 'submit');

        if(!auth.signedIn) {
            const returned = await signUpUser(email, password);
            history.replace('/confirm-email');

        }
        if(auth.signedIn) {
            const userIn = await signInUser(email, password);
            auth.setUser({id: userIn.id, email: userIn.email});
        }
    }
    console.log(auth.user, 'outside');
    
    return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>{!auth.signedIn ? 'Create Account': 'Sign In'}</legend>
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
        </div>
        </div>
    )
}
