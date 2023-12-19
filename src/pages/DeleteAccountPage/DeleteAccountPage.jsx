import React, { useState } from 'react';
import DeleteAccountForm from '../../components/DeleteAccountForm/DeleteAccountFormDeleteAccountForm';
import { deleteUserAccount } from '../../utilities/users-service'; 

const DeleteAccountPage = () => {
    const [showDeleteAccountForm, setShowDeleteAccountForm] = useState(false);
  const handleDeleteAccount = async () => {
    // Implement your API function to delete the user account
    await deleteUserAccount();
  };

  return (
    <div>
      <h1>Account Settings</h1>
      <DeleteAccountForm onDeleteAccountPage={handleDeleteAccountPage} />
      {/* Other account settings components */}
    </div>
  );
};

export default AccountSettingsPage;


// import { useHistory } from 'react-router-dom';

// export default function DeleteAccountPage() {
//     const history = useHistory();

//     return (
//         <div class="delete-account">
//             <h1>Delete Account</h1>
//             <button type="submit" onClick={handleDeleteAccountPage}>Delete</button>

//             <h4>Are you sure you want to delete your account?</h4>
//             <form action="" method="POST">
//                 <input type="submit" value="Yes - Delete!" class="btn" />
//                 <button type="submit" onClick={handleCancelDelete}>Cancel</button>
//             </form>
            
//         </div>
//     );
// };
