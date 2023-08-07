import { useEffect, useState } from 'react'
import Card from './Card'
import styles from './App.module.css'
import contactsServices from '../services/contacts';
import Modal from './Modal';
import AddCard from './AddCard';

function App() {

  const [contacts, setContacts] = useState([]);
  const loadContacts = useEffect(() => {
    contactsServices.getAll()
      .then(res => setContacts(res));
  }, [])

  const createContacts = () => {
    contactsServices.create()
      .then(res => {
        setContacts(prevState => {
          return [...prevState, res]
        })
      });
  }

  const toggleImportance = (id) => {
    contactsServices.toggleImportance(id)
      .then(res => {
        setContacts(contacts.map(c => c.id !== id ? c : res.data))
      })
  }

  return (
    <>
      <div className={styles["grid-container"]}>
        {contacts?.map(contact =>
          <div className={styles["grid-element"]} key={contact.id}>
            <Card contact={contact} onClick={() => toggleImportance(contact.id)} />
          </div>
        )}
        <div className={styles["grid-element"]}>
          <AddCard onClick={createContacts} />
        </div>
      </div>
    </>
  )
}

export default App
