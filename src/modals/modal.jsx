import "./modal.css";

const Modal = ({ children, isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay-glass">
      <div className="modal-content-glass">{children}</div>
      <button className="modal-close-glass" onClick={() => setIsOpen(false)}>X</button>
    </div>
  );
};

export default Modal;
