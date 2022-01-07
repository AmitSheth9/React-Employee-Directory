import React from 'react'
import { useUser } from '../../context/UserContext'
import styles from './ProfileForm.css'

export default function ProfileForm({handleSubmit, named, setNamed, bd, setBD, about, setAbout, formTitle }) {
    const auth = useUser();
    
    return (
        <div>
            <form className={styles.form}onSubmit={handleSubmit}>
                <fieldset>
                    <legend>{formTitle}</legend>
                    <label>Name:
                        <input 
                        value={named}
                        onChange={(e)=>setNamed(e.target.value)}
                            />
                    </label><br/>
                    <label>Email: &nbsp;
                        {auth.user.email}
                    </label><br/>
                    <label>Birthdate:
                        <input 
                        value={bd}
                        onChange={(e)=>setBD(e.target.value)}
                        />
                    </label><br/>
                    <label>About:
                        <input
                        value={about}
                        onChange={(e)=>setAbout(e.target.value)}
                        />
                    </label><br/>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
            
        </div>
        
    )
}
