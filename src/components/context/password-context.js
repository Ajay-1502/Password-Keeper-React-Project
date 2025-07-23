import React from 'react';

const PasswordContext = React.createContext({
  password: [],
  addPassword: () => {},
  removePassword: () => {},
});

export default PasswordContext;
