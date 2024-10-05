// eslint-disable-next-line react/prop-types
const Modal = ({ children, id }) => {
  return (
    <dialog id={id} className={`modal  `}>
      {children}
    </dialog>
  );
};

export default Modal;
