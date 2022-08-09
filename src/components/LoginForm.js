import React from 'react'
import styled from 'styled-components'

  const LoginForm = ({ handleLogin, setUsername, setPassword, username, password}) => {
 
    const Button = styled.button`
    background: Bisque;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid Chocolate;
    border-radius: 3px;
  `
  
  const Input = styled.input`
    margin: 0.25em;
  `
    return(
 <div>
      <h2>login</h2>
    <form onSubmit={handleLogin}>
      <div>
        username
        <Input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <Input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <Button type="submit">login</Button>
    </form>
    </div>
    )
  };

  export default LoginForm