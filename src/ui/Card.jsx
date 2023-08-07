import React from "react";
import styles from "./Card.module.css";

export default function Card({ contact, onClick }) {
  return (
    <div onClick={onClick} className={`card ${!contact.isImportant && styles['card--not-important']}`}>
      <div className={styles['card-pic']}>
        <div className={styles['card-pic__pic']} />
      </div>
      <div className={styles['card-name']}>
        {contact?.name}
      </div>
      <div className={styles['card-number']}>
        {contact?.number}
      </div>
    </div>
  )
}