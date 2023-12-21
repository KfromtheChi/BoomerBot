import { useState } from 'react';
import { changePassword } from '../../../../utilities/users-service';
import './ChangePassword.css'

//change password page functionality
export default function ChangePasswordPage({setUser}) {
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //new password change entry
    const handleChange = (evt) => {
        setNewPassword(evt.target.value);
    }   

    // submit new password change
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // Call API to change password
        try {
            // Call changePassword to initiate the name change process and update in real time
            const user = await changePassword(newPassword);
            // Clear password field
            setNewPassword('');
            // Update the user info in state (App)
            setUser(user);
            setSuccessMessage('Your password has been changed!');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Password change failed.');
            setSuccessMessage('');
        }
    }

    // change password form
    return (
    <div className="form-container">
        <div className="changePassword">
            <div className="password-form">
                <form onSubmit={handleSubmit}>
                    <label>
                        Type New Password Below:
                        <input type="password" className="inputchange" value={newPassword} onChange={handleChange} />
                    </label>
                    <button type="submit">Change Password</button>
                </form>
                {successMessage && <div className="success-message">{successMessage}</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
        </div>
    </div>
    );
};