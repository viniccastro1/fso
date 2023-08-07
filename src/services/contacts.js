import axios from "axios"

const SERVER_URL = 'http://localhost:3001/contacts'

const getAll = () => {
  return axios.get(SERVER_URL)
    .then(res => res.data)
}

const create = () => {
  const newContact = {
    name: "Contact",
    isImportant: false,
    number: "+00 00 00000 0000"
  }
  return axios.post(SERVER_URL, newContact)
    .then(res => res.data)
}

const toggleImportance = (id) => {
  const url = SERVER_URL + '/' + id;
  return axios.get(url)
    .then(res => {
      const updatedNote = { ...res.data, isImportant: !res.data.isImportant };
      return axios.put(url, updatedNote)
    })
}

export default { getAll, create, toggleImportance }