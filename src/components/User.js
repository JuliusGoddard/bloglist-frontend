import userService from '../services/users'
import { useState, useEffect } from 'react'


const User = () => {

const [users, setUsers] = useState([])
     
const handleClick = (u) => {
    setUsers([u])
    }

const handleback = () => {
userService.getAll().then(users => {setUsers(users)})
    }

useEffect(() => {
    userService
      .getAll()
      .then(users => {
        setUsers(users)
      })
  }, [])

  
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  if (!users) {
    return null
  }

  if (users.length === 1) {
    return (
        <div>
            <h2>{users.map(u => u.username)}'s entries</h2>
            {users.map(u => u.blogs.map(u => <li key={u.id} style={blogStyle}>{u.title}</li>))}<button onClick={() => handleback()}>Back</button>
        </div>
    )
  }



    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(u => <li key={u.id} style={blogStyle}>{u.username}: {u.blogs.length}<button onClick={() => handleClick(u)}>Show posts</button></li>)}
            </ul>
        </div>
    )
}

export default User