
import { useHistory } from 'react-router-dom';
import { onDeleteAccount } from '../../components/DeleteAccountForm/DeleteAccountForm';


export default function DeleteAccountPage() {
    const history = useHistory();

   
    //     <div class="delete-account">
    //         <h1>Delete Account</h1>
    //         <button type="submit" onClick={handleDeleteAccountPage}>Delete</button>

    //         <h4>Are you sure you want to delete your account?</h4>
    //         <form action="" method="POST">
    // const handleDeleteAccount = async (evt) => {
    //     evt.preventDefault();
    //     // Call onDeleteAccount to initiate the account deletion process
    //     await onDeleteAccount();
    //     // Redirect to the login page
    //     history.push('/LoginPage');
    // };

    // const handleCancelDelete = async (evt) => {
    //     evt.preventDefault();
    //     // Redirect to the user settings page
    //     history.push('/DeleteAccountPage');
    // }

    return (
        <div className="delete-account">
            <h1>Delete User Account</h1>
            <button type="submit" onClick={handleDeleteAccount}>Delete</button>

            <form action="" method="POST">
                <h4>Are you sure you want to delete your account?</h4>
                <input type="submit" value="Yes - Delete!" class="btn" />
                <button type="submit" onClick={handleCancelDelete}>Cancel</button>
            </form>
            
        </div>
    );
};
