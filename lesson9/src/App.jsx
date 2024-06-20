import { useEffect, useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { number } from 'prop-types'
function App() {
  const [users, setUsers] = useState([])
  const AddItem = obj => {
    setUsers([...users, obj])
  }
  const DeleteUser = id => {
    axios
    .delete(`http://localhost:3004/users/${id}`)
    .then(setUsers(users.filter(user => user.id !== id)))
    .then(toast.success("user deleted successfully"))
  }
  const UpSalary = data => {
    const index = users.findIndex(user => user.id == data)
    users[index].salary = String(Number(users[index].salary) + 50000)
    axios.put(`http://localhost:3004/users/${data}`, users[index])
      .then(setUsers([...users]))
    
  }
  useEffect(() => {
    axios
      .get('http://localhost:3004/users')
      .then(res => {
        setUsers(res.data)
      })
  }, [])
  return (
    <div className='row'>
      <AddUser onAdd={AddItem}
      />
      <UserList
        users={users}
        onDelete={DeleteUser}
        onUpSalary={UpSalary}
      />
    </div>
  )
}
export default App
