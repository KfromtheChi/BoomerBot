import { useState } from 'react';
import { changePassword } from '../../../utilities/users-service';

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
        <div>
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    New Password:
                    <input type="password" value={newPassword} onChange={handleChange} />
                </label>
                <button type="submit">Change Password</button>
            </form>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};