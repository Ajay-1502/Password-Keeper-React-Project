import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
