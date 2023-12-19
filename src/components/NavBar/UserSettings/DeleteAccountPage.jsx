import { useState } from 'react';
// useNavigate() is a hook that allows us to navigate to a different route - part of the react router dom package, needed for delete account
import { useNavigate } from 'react-router-dom';
import { deleteAccount } from '../../../utilities/users-service';

export default function DeleteAccountPage() {
    // Show the confirmation form when delete button is clicked
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();

    const handleDelete = async (evt) => {
        setShowConfirmation(true);
        // allow account to be deleted in this page by calling the deleteAccount API
        const response = await deleteAccount();
        if (response.ok) {
            // Redirect to the login page
            navigate.push('/LoginPage');
        } else {
            // Handle errors
            console.log('Error deleting account');
        }
    };

    // const handleCancel = async (evt) => {
    //     evt.preventDefault();
    //     // Redirect to the user settings page
    //     navigate('/DeleteAccountPage');
    // }

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="delete-account">
            <h1>Delete User Account</h1>
            <button type="submit" onClick={handleDelete}>Delete</button>

            {showConfirmation && (
            <form action="" method="POST">
                <h4>Are you sure you want to delete your account?</h4>
                <input type="submit" value="Yes - Delete!" class="btn" />
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
            )}
        </div>
    );
};
