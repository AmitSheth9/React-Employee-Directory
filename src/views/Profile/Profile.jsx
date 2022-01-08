import React from 'react'
import { getProfile } from '../../services/profiles'
import { createProfile } from '../../services/profiles'
import { useUser } from '../../context/UserContext'
import AuthForm from '../../components/AuthForm/AuthForm'
import { useState, useEffect } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import { useHistory } from 'react-router-dom'
import styles from './Profile.css'

export default function Profile() {
    const auth = useUser();
    const history = useHistory();
    const [named, setNamed] = useState('');
    const [bd, setBD] = useState('');
    const [about, setAbout] = useState('');
    const [hasProfile, setHasProfile] = useState('')
    const [profile, setProfile] = useState({});
    

    useEffect( async () => {
        const returnedProfile = await getProfile();
        console.log(returnedProfile)
        if(returnedProfile.name) {
            setHasProfile(true);
            setProfile(returnedProfile);
            console.log(returnedProfile);
        }
        else {
            setHasProfile(false)
        }
    }, [])

    const handleClick = () => {
        history.replace('/profile/edit');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const profileCreated = createProfile({ name, email: auth.user.email, bio: about, birthday: bd})
    }
    return (
        <div>
            {!hasProfile ? <ProfileForm 
                    handleSubmit={handleSubmit}
                    named={named}
                    setNamed={setNamed}
                    bd ={bd}
                    setBD={setBD}
                    about={about}
                    setAbout={setAbout} 
                    formTitle='Create Profilex' />    
                    
                    : <div className={styles.container}>{auth.user.email}'s Profile
                <p>Name: {profile.name}</p>
                <p>Email: {profile.email}</p>
                <p>Birthday: {profile.birthday}</p>
                <p>About: {profile.bio}</p>
                <button onClick={handleClick}>Edit Profile</button>
                </div> 
                  
            }
        </div>
    )
}
