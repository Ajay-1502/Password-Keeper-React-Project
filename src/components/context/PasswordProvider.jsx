import { useState } from 'react';
import PasswordContext from './password-context';

const PasswordProvider = (props) => {
  const [allPasswords, setAllPasswords] = useState([]);

  const addPasswordHandler = (title, password) => {
    let passwordDetails = {
      title: title,
      password: password,
    };

    setAllPasswords((prev) => {
      const updated = [...prev, { ...passwordDetails }];
      return updated;
    });
  };

  const passwordObj = {
    passwords: allPasswords,
    addPassword: addPasswordHandler,
    removePassword: () => {},
  };

  return (
    <PasswordContext.Provider value={passwordObj}>
      {props.children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
