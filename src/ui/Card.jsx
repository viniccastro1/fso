import React from "react";
import styles from "./Card.module.css";

export default function Card({ contact, onToggleImportance, onDelete }) {
  const { id } = contact;

  const onDeletePropag = (e) => {
    e.stopPropagation();
    onDelete();
  }

  return (
    <div className={`card ${styles['contact-card']} ${!contact.isImportant && styles['card--not-important']}`}>
      <div className={styles['card-pic']}>
        <div className={styles['card-pic__pic']} />
      </div>
      <div className={styles['card-name']}>
        {contact?.name}
      </div>
      <div className={styles['card-number']}>
        {contact?.number}
      </div>

      <div className={styles['card-actions']}>

        <button className="btn btn-sm btn-primary btn-outline" onClick={onToggleImportance}>
          IMPORTANCE
        </button>

        <button className="btn btn-sm btn-primary" onClick={onDeletePropag}>
          DELETE
        </button>
      </div>
    </div>
  )
}