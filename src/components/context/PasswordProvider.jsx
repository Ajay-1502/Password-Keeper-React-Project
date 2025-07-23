import { useState } from 'react';
import PasswordContext from './password-context';

const PasswordProvider = (props) => {
  const [allPasswords, setAllPasswords] = useState([]);

  const addPasswordHandler = (id, title, password) => {
    let passwordDetails = {
      id: id,
      title: title,
      password: password,
    };

    setAllPasswords((prev) => {
      const updated = [...prev, { ...passwordDetails }];
      console.log(updated);
      return updated;
    });
  };

  const removePasswordHandler = (inputPassword) => {
    setAllPasswords((prev) => {
      return prev.filter((password) => {
        return inputPassword.id != password.id;
      });
    });
  };

  const passwordObj = {
    passwords: allPasswords,
    addPassword: addPasswordHandler,
    removePassword: removePasswordHandler,
  };

  return (
    <PasswordContext.Provider value={passwordObj}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
