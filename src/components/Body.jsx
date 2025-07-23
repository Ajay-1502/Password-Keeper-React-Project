import { useState } from 'react';
import InputForm from './InputForm';

const Body = () => {
  const [showModal, setShowModal] = useState(false);

  const openPasswordHandler = () => {
    setShowModal(true);
  };

  const closePasswordHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1>Password Keeper</h1>
      <h3>Total Password :</h3>
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
