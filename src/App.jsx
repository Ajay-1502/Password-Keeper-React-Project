import Body from './components/Body';
import DisplayPasswords from './components/DisplayPasswords';
import PasswordProvider from './components/context/PasswordProvider';
import './App.css';

function App() {
  return (
    <PasswordProvider>
      <Body />
      <DisplayPasswords />
    </PasswordProvider>
  );
}

export default App;
