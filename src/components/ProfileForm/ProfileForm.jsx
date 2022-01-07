import React from 'react'
import { useUser } from '../../context/UserContext'

export default function ProfileForm({handleSubmit, named, setNamed, bd, setBD, about, setAbout, formTitle }) {
    const auth = useUser();
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>{formTitle}</legend>
                    <label>Name
                        <input 
                        value={named}
                        onChange={(e)=>setNamed(e.target.value)}
                            />
                    </label>
                    <label>Email &nbsp;
                        {auth.user.email}
                    </label>
                    <label>&nbsp;Birthdate
                        <input 
                        value={bd}
                        onChange={(e)=>setBD(e.target.value)}
                        />
                    </label>
                    <label>About
                        <input
                        value={about}
                        onChange={(e)=>setAbout(e.target.value)}
                        />
                    </label>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
            
        </div>
        
    )
}
