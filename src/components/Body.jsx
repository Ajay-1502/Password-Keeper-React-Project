import { useState, useContext } from 'react';
import PasswordContext from './context/password-context';
import InputForm from './InputForm';

const Body = () => {
  const [showModal, setShowModal] = useState(false);
  const passwordCtx = useContext(PasswordContext);

  const openPasswordHandler = () => {
    setShowModal(true);
  };

  const closePasswordHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1>Password Keeper</h1>
      <h3>Total Passwords : {passwordCtx.passwords.length}</h3>
      <button style={{ marginBottom: '2rem' }} onClick={openPasswordHandler}>
        Add New Password
      </button>
      <br />
      <label htmlFor="search"> Search :</label>
      <input id="search" type="text" />

      {showModal && <InputForm onClose={closePasswordHandler} />}
    </>
  );
};

export default Body;
