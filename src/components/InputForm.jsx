import { useState, useContext } from 'react';
import PasswordContext from './context/password-context';
import Modal from './UI/Modal';

const InputForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');

  const passwordCtx = useContext(PasswordContext);

  const formHandler = (e) => {
    e.preventDefault();
    if (title.trim().length > 0 && password.trim().length > 0) {
      passwordCtx.addPassword(title, password);
    } else {
      alert('Invalid Input');
    }
  };

  return (
    <>
      <Modal onClose={onClose}>
        <form onSubmit={formHandler}>
          <label htmlFor="title" style={{ color: 'black' }}>
            Title :
          </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="password" style={{ color: 'black' }}>
            Password :
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </Modal>
    </>
  );
};

export default InputForm;
