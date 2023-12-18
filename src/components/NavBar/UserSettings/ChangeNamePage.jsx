import { useState } from 'react';
import { changeName } from '../../../utilities/users-api';

//name page functionality
export default function ChangeNamePage() {
    const [newName, setNewName] = useState('');
    const [message, setMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //new name change entry
    const handleChange = (evt) => {
        setNewName(evt.target.value);
    }   

    // submit new name change
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // Call API to change name
        // await api.changeName(newName)
        try {
            await changeName(newName);
            // update state
            setNewName(newName);
            setSuccessMessage('Your name has been changed!');
                setErrorMessage('');
        } catch (err) {
            setErrorMessage('Change of name failed.');
            setSuccessMessage('');
        }
    }

    // change name form
    return (
        <div>
            <h1>Change Name</h1>
            <form >
                <label>
                    New Name:
                    <input type="text" value={newName} onChange={handleChange} />
                </label>
                <button onSubmit={handleSubmit}type="submit">Change Name</button>
            </form>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}{successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    );
};

// export default function ChangeNamePage() {
//     const [newName, setNewName] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleChange = (evt) => {
//         setNewName(evt.target.value);
//     }
//     const handleSubmit = async (evt) => {
//         evt.preventDefault();
//         try {
//             await changeName(newName);
//             setSuccessMessage('Your name has been changed!');
//             setErrorMessage(''); // Clear any previous error messages
//         } catch (err) {
//             setErrorMessage('Change of name failed.');
//             setSuccessMessage(''); // Clear any previous success messages
//         }
//     }
//     return (
//         <div>
//             <h1>Change Name</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     New Name:
//                     <input type="text" value={newName} onChange={handleChange} />
//                 </label>
//                 <button type="submit">Change Name</button>
//             </form>
//             {successMessage && <div className="success-message">{successMessage}</div>}
//             {errorMessage && <div className="error-message">{errorMessage}</div>}
//         </div>
//     );
// };














