import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const DeleteAccountForm = ({ onDeleteAccount }) => {
  const [confirmation, setConfirmation] = useState('');
  const history = useHistory();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // confirm delete
    if (confirmation === 'DELETE') {
      try {
        // Call onDeleteAccount to initiate the account deletion process
        await onDeleteAccount();
        // Redirect to login page
        history.push('/LoginPage');
      
      } catch (error) {
        // Handle deletion error
        console.error('Error deleting account:', error);
        // You might want to display an error message to the user
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Delete Account
      </label>
      <button type="submit">Delete Account</button>
    </form>
  );
  };
}