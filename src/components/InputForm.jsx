import Modal from './UI/Modal';

const InputForm = ({ onClose }) => {
  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Modal onClose={onClose}>
      <form onSubmit={formHandler}>
        <label htmlFor="title" style={{ color: 'black' }}>
          Title :
        </label>
        <input id="title" />
        <label htmlFor="password" style={{ color: 'black' }}>
          Password :
        </label>
        <input id="password" />
        <br />
        <button type="submit">Add</button>
        <button onClick={onClose}>Close</button>
      </form>
    </Modal>
  );
};

export default InputForm;
