import React from 'react'

  const LoginForm = ({ handleLogin, setUsername, setPassword, username, password}) => {
 

    return(
 <div className="flex h-screen bg-background bg-cover bg-no-repeat z-0">
  <div className="m-auto shadow-2xl px-40 py-20 z-50 bg-white rounded-md">
      <h2 className="text-5xl py-6 text-center font-bold">Login</h2>
    <form onSubmit={handleLogin}>
    <div id="alert-border-1" class="flex p-4 mb-4 bg-blue-100 border-t-4 border-blue-500 dark:bg-blue-200" role="alert">
    <svg class="flex-shrink-0 w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <div class="ml-3 text-xl font-medium text-blue-700">
      DEAR VIEWERS: USE THE FOLLOWING LOGIN DETAILS TO TEST APP: Username: mmm | Password: mmm
    </div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-100 dark:bg-blue-200 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 dark:hover:bg-blue-300 inline-flex h-8 w-8" data-dismiss-target="#alert-border-1" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
      <div className="py-6">
        username
        <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          value={username}
          name="Username"
          data-cy="username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="password"
          value={password}
          name="Password"
          data-cy="password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded-full" type="submit" data-cy="login">login</button>
    
    </form>
    </div>
    </div>
    )
  };

  export default LoginForm