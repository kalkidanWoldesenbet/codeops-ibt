import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const previousElement = document.activeElement;

    modalRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousElement?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex="-1"
    >
      {children}

      <button onClick={onClose}>
        Close
      </button>
    </div>,
    document.body
  );
}

export default Modal;