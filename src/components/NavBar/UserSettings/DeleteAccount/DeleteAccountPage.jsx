import { useState } from 'react';
// useNavigate() is a hook that allows us to navigate to a different route - part of the react router dom package, needed for delete account
import { useNavigate } from 'react-router-dom';
import { deleteAccount } from '../../../../utilities/users-service';
import './DeleteAccount.css';

export default function DeleteAccountPage({ setUser }) {
    // Show the confirmation form when delete button is clicked
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();

    const handleConfirmation = () => {
        setShowConfirmation(true);
    };

    const handleDelete = async (evt) => {
        evt.preventDefault();
        // allow account to be deleted in this page by calling the deleteAccount API
        const response = await deleteAccount();
        console.log(response);
        if (response === "User Deleted") {
            setUser(null);
            // Redirect to the login page
            navigate('/');
        } else {
            // Handle errors
            console.log('Error deleting account');
        }
    };

    // const handleCancel = async (evt) => {
    //     evt.preventDefault();
    //     // Redirect to the user settings page      // onClick={() => evt.preventDefault()}
    //     navigate('/DeleteAccountPage');
    // }

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="delete-account">
            <div className="delete-container">
                <h2 className="delete-header">Delete User Account</h2>
                <button type="submit" onClick={handleConfirmation}>Delete</button>

                {showConfirmation && (
                <form action="" method="DELETE" className="delete-form" onSubmit={handleDelete}>
                    <h4>Are you sure you want to delete your account?</h4>
                    <button type="submit">Yes - Delete!</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </form>
                )}
            </div>
        </div>
    );
};
