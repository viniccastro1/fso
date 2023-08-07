import React from "react";
import styles from './Modal.module.css'

const Modal = ({ children, onClose, open }) => {

  const onCloseP = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  if (!open) return null;

  return (
    <div className={styles.modal} onClick={onCloseP}>
      <div className={styles['modal-window']}>{children}</div>
    </div>
  )
}

export default Modal;