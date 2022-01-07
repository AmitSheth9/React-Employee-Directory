import React from 'react'
import { getProfile } from '../../services/profiles'
import { createProfile } from '../../services/profiles'
import { useUser } from '../../context/UserContext'
import AuthForm from '../../components/AuthForm/AuthForm'
import { useState, useEffect } from 'react/cjs/react.development'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import { useHistory } from 'react-router-dom'

export default function Profile() {
    const auth = useUser();
    const history = useHistory();
    const [name, setName] = useState('');
    const [bd, setBD] = useState('');
    const [about, setAbout] = useState('');
    const [hasProfile, setHasProfile] = useState(false)
    const [profile, setProfile] = useState({});
    

    useEffect( async () => {
        const returnedProfile = await getProfile();
        if(profile) {
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
            {hasProfile ? <div>{auth.user.email}'s Profile
                <p>Name: {profile.name}</p>
                <p>Email: {profile.email}</p>
                <p>Birthday: {profile.birthday}</p>
                <p>About: {profile.bio}</p>
                <button onClick={handleClick}>Edit Profile</button>
                </div> :
                <ProfileForm 
                    handleSubmit={handleSubmit}
                    named={name}
                    setNamed={setName}
                    bd ={bd}
                    setBD={setBD}
                    about={about}
                    setAbout={setAbout} 
                    formTitle='Create Profilex' />      
            }
        </div>
    )
}
