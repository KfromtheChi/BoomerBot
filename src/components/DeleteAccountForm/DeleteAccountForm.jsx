// DeleteAccountForm.js


import { useHistory } from 'react-router-dom';

const DeleteAccountForm = ({ onDeleteAccount }) => {
  const [confirmation, setConfirmation] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You may want to add additional confirmation logic here
    if (confirmation === 'DELETE') {
      try {
        // Call onDeleteAccount to initiate the account deletion process
        await onDeleteAccount();

        // Redirect to a different page after successful deletion
        history.push('/goodbye');
      } catch (error) {
        // Handle deletion error
        console.error('Error deleting account:', error);
        // You might want to display an error message to the user
      }
    } else {
      // Display an error message for incorrect confirmation
      // You might want to use state to manage error messages
      console.error('Incorrect confirmation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To confirm, type "DELETE":
        <input
          type="text"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        />
      </label>
      <button type="submit">Delete Account</button>
    </form>
  );
};

export default DeleteAccountForm;
