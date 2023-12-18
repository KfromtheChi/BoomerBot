import { useState } from 'react';
import * as usersService from '../../../utilities/users-service';

// name page functionality
export default function ChangeNamePage() {
    const [newName, setNewName] = useState('');

    // new name change entry
    const handleChange = (evt) => {
        setNewName(evt.target.value);
    }

    // submit new name change
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // setUser(newName);
        // Call API to change name
        // This is a placeholder, replace with your actual API call
        // await api.changeName(newName);
    }

    // change name form
    return (
        <div>
            <h1>Change Name</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    New Name:
                    <input type="text" value={newName} onChange={evt => setNewName(evt.target.value)} />
                </label>
                <input type="submit" value="Change Name" />
            </form>
        </div>
    );
};