import { useState } from "react";
import { changeName } from "../../../../utilities/users-service";
import "./ChangeName.css";

//name page functionality
export default function ChangeNamePage({ setUser }) {
  const [newName, setNewName] = useState("");
  const [message, setMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //new name change entry
  const handleChange = (evt) => {
    setNewName(evt.target.value);
  };

  // submit new name change
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // Call API to change name
    // await api.changeName(newName)
    try {
      // Call changeName to initiate the name change process and update in real time
      const user = await changeName(newName);
      setNewName(newName);
      // Update the user info in state (App)
      setUser(user);
      setSuccessMessage("Your name has been changed!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Change of name failed.");
      setSuccessMessage("");
    }
  };

  // change name form
  return (
    <div className="name-container">
    <div className="changeName">
      <div className="form-detail">
      <form onSubmit={handleSubmit} className="formchange">
        <label>
          Type A New Name:
          <input
            type="text"
            value={newName}
            onChange={handleChange}
            className="inputchange"
          />
        </label>
        <button type="submit" >Update Name</button>
      </form>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
    </div>
    </div>
  );
}
