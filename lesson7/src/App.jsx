import { useEffect, useState } from 'react';
import './App.css';
import { Post } from './post';
import { UserList } from './UserList';
import { AddUser } from './AddUser';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', profession: 'Writer'},
    { id: 2, name: 'Jane Doe', profession: 'Stager'},
    { id: 3, name: 'Tom and Jerry', profession: 'Actor'}
  ]);
  const handleAdd = obj => {
    setUsers([...users, {...obj, id:Date.now()}]);
  }
  return <div>
    <UserList users={users}/>
    <AddUser onAdd={handleAdd} users={users}></AddUser>
  </div>
}

export default App;


