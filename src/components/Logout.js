import React from 'react'

  const Logout = ({handleLogout}) => {
    return <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded-full" onClick={handleLogout}>logout</button>;
  };

export default Logout