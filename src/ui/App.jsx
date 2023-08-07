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

  const createContact = () => {
    contactsServices.create()
      .then(res => {
        setContacts(prevState => {
          return [...prevState, res]
        })
      });
  }

  const deleteContact = (id) => {
    contactsServices.delete(id)
      .then(() => {
        setContacts(contacts.filter(e => e.id !== id))
      })
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
            <Card
              contact={contact}
              onDelete={() => deleteContact(contact.id)}
              onToggleImportance={() => toggleImportance(contact.id)}
            />
          </div>
        )}
        <div className={styles["grid-element"]}>
          <AddCard onClick={createContact} setContacts={setContacts} />
        </div>
      </div>
    </>
  )
}

export default App
