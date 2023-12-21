import { useState } from 'react';
import './ChangePassword.css'
import { updatePassword } from '../../../../utilities/users-service';

//change password page functionality - responsible for taking new password and sending it to the server.
export default function ChangePasswordPage({ setUser }) {
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //new password change entry
    const handleNewChange = (evt) => {
        setNewPassword(evt.target.value);
    }   
    const handleOldChange = (evt) => {
        setOldPassword(evt.target.value);
    }   
    // submit new password change
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // Call API to change password
        try {
            // Call changePassword to initiate the name change process and update in real time
            const user = await updatePassword({
                oldPassword: oldPassword,
                newPassword: newPassword,
            });
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
                <h2 className='pass-header'>Change Password</h2>
                <form onSubmit={handleSubmit}>
                    <label className='label'>
                        Enter Old Password:
                        <input type="password" value={oldPassword} className="form-input" onChange={handleOldChange} />
                    </label><br />
                    <label className='label1'>
                        Enter New Password:
                        <input type="password" value={newPassword} className="form-input" onChange={handleNewChange} />
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