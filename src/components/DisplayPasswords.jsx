import { useContext } from 'react';
import PasswordContext from './context/password-context';

const DisplayPasswords = () => {
  const passwordCtx = useContext(PasswordContext);

  return (
    <>
      <h2>All Passwords</h2>

      {passwordCtx.passwords.map((item, index) => {
        return (
          <div key={index}>
            <span style={{ marginRight: '1rem' }}>Username : {item.title}</span>
            <span style={{ marginRight: '1rem' }}>
              Password : {item.password}
            </span>
            <button style={{ marginRight: '1rem', marginBottom: '1rem' }}>
              Edit
            </button>
            <button
              style={{ marginRight: '1rem' }}
              onClick={() => passwordCtx.removePassword(item)}
            >
              {' '}
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default DisplayPasswords;
