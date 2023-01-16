import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
    <nav class="bg-orange-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 sticky top-0 z-50">
  <div class="flex flex-wrap justify-between items-center mx-auto">
    <a href="https://webforprofessionals.com/" class="flex items-center">
        <img src="https://i0.wp.com/webforprofessionals.com/wp-content/uploads/2020/09/cropped-facebooklogo.jpg?resize=202%2C99&ssl=1" class="mr-3 h-6 sm:h-9" alt="Web For Professionals Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Web For Professionals</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    <ul class="flex flex-col p-0 mt-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:dark:bg-gray-900">
        <li>
          <Link className="block py-2 pr-4 pl-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-black" to="/">Home</Link>
        </li>
        <li>
        <Link className="block py-2 pr-4 pl-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-black" to="/blogform">Add an Article</Link>
        </li>
        <li>
        <Link className="block py-2 pr-4 pl-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-black" to="/users">Users</Link>
        </li>
        <li>
        <Link className="block py-2 pr-4 pl-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-black" to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header