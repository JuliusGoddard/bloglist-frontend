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
    paddingTop: 0,
    paddingLeft: 10,
    border: "solid",
    borderWidth: 1,
    marginBottom: 2,
    background: "white"
  };

  const postStyle = {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
    background: "white"
  };


  const titleStyle = {
    paddingTop: 10,
    paddingLeft: 10
  }

  if (!users) {
    return null
  }

  if (users.length === 1) {
    return (
        <div>
            <h2 className="text-2xl font-bold" style={titleStyle}>{users.map(u => u.username)}'s entries</h2>
            {users.map(u => u.blogs.map(u => <li key={u.id} style={postStyle}>{u.title}</li>))}<button className="bg-orange-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded-full" onClick={() => handleback()}>Back</button>
        </div>
    )
  }



    return (
      <div>
        <h2 className="text-2xl font-bold py-2" style={titleStyle}>Users</h2>
      
        <div className="py-2 px-10 bg-orange-100 shadow-2xl">
         
            
            
           
            <ul>
                {users.map(u =>
          <li key={u.id}> <p className="text-xl"><strong>{u.username}</strong><button className="bg-orange-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded-full mx-4" onClick={() => handleClick(u)}>Show posts</button></p> </li>)}
            </ul>
        
                    
        </div>
        </div>
    )
}

export default User