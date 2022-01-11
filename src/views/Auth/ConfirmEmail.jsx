import React from 'react'
import { Link } from 'react-router-dom'

export default function ConfirmEmail() {
    return (
        <div>
            Thank you for signing up. Please check your email to verify your account! Then <Link to='/login'>Sign in Here</Link>
        </div>
    )
}
