import axios from "axios"

const CONTACTS_URL = 'http://localhost:3001/contacts'

const getAll = () => {
  return axios.get(CONTACTS_URL)
    .then(res => res.data)
}

const create = () => {
  const newContact = {
    name: "Contact",
    isImportant: false,
    number: "+00 00 00000 0000"
  }
  return axios.post(CONTACTS_URL, newContact)
    .then(res => res.data)
}

const toggleImportance = (id) => {
  return axios.get(`${CONTACTS_URL}/${id}`)
    .then(res => {
      const updatedNote = { ...res.data, isImportant: !res.data.isImportant };
      return axios.put(`${CONTACTS_URL}/${id}`, updatedNote)
    })
}

const deleteContact = (id) => {
  return axios.delete(`${CONTACTS_URL}/${id}`)
    .then(res => res)
}

export default { getAll, create, toggleImportance, delete: deleteContact }