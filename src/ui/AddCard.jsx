import React from "react";
import styles from './AddCard.module.css'

const AddCard = ({ onClick }) => {
  return (
    <div className={`${styles['add-card']} card`} onClick={onClick}>
      <p className={styles['add-card__plus']}>+</p>
      <p>Create Contact</p>
    </div>
  )
}

export default AddCard;