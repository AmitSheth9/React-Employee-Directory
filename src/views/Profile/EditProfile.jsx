import React from 'react'
import ProfileForm from '../../components/ProfileForm/ProfileForm'
import { useUser } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { updateProfile } from '../../services/profiles';
import styles from './EditProfile.css'

export default function EditProfile() {
    const auth = useUser();
    const history = useHistory();
    const [name, setName] = useState('');
    const [bd, setBD] = useState('');
    const [about, setAbout] = useState('');
    const [hasProfile, setHasProfile] = useState(false)
    const [profile, setProfile] = useState({});
    
    const handleEdit = async (e) => {
        e.preventDefault();
        const profileUpdated = await updateProfile({ name, email: auth.user.email, bio: about, birthday: bd})
        history.replace('/profile');
    }
    return (
        <div>
            <ProfileForm
            handleSubmit={handleEdit}
            named={name}
            setNamed={setName}
            bd={bd}
            setBD={setBD}
            about={about}
            setAbout={setAbout}
            formTitle='Edit Profile'
            />
        </div>
    )
}
