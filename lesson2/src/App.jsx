import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', salary:200000 },
    { id: 2, name: 'Jane Doe', salary:300000 },
  ])
  const salaryUp = id => {
    setUsers(users.map(user => user.id === id ? { ...user, salary: user.salary + 10000 } : user))
  }
  const salaryDown = id => {
    setUsers(users.map(user => user.id === id  && user.salary > 50000 ? { ...user, salary: user.salary - 50000 } : user))
  }
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  return (
    <>
    {/* <img src={viteLogo} className="logo vite" alt="Vite logo"/>
    <img src={reactLogo} className="logo react" alt="React logo"/>
      <h1>barev {
        4 + 3
        }</h1>
      <h2>Number</h2>
      <button onClick={() => setCounter(counter + 1)}>up!!! {counter}</button> */}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>salary</th>
            <th>actions</th>
            <th>down</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.salary}</td>
                <td>
                  <button onClick={() => salaryUp(user.id)}>salary up</button>
                </td>
                <td>
                  <button onClick={() => salaryDown(user.id)}>salary down</button>
                </td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>delete</button>
                </td>

              </tr>
              ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App
