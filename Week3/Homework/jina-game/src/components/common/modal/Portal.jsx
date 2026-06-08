import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  const portalElement = document.getElementById("modal-root");

  if (!portalElement) {
    console.error("Modal root element not found");
    return null;
  }

  return ReactDOM.createPortal(children, portalElement);
};

export default ModalPortal;
