import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-100 flex flex-col justify-between shadow-lg">
      <nav className="mt-8">
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="flex items-center p-3 text-gray-700 hover:bg-blue-100 hover:text-gray-800 rounded-lg transition-colors"
            >
              <i className="inline-block w-6 h-6 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 9v-6h4v6" />
                </svg>
              </i>
              <span className="font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center p-3 text-gray-700 hover:bg-blue-100 hover:text-gray-800 rounded-lg transition-colors"
            >
              <i className="inline-block w-6 h-6 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zM9 7h2v6H9V7z" clipRule="evenodd" />
                </svg>
              </i>
              <span className="font-medium">About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/images"
              className="flex items-center p-3 text-gray-700 hover:bg-blue-100 hover:text-gray-800 rounded-lg transition-colors"
            >
              <i className="inline-block w-6 h-6 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </i>
              <span className="font-medium">Images</span>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="flex items-center p-3 text-gray-700 hover:bg-blue-100 hover:text-gray-800 rounded-lg transition-colors"
            >
              <i className="inline-block w-6 h-6 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v4a6 6 0 0012 0V8a6 6 0 00-6-6z" />
                </svg>
              </i>
              <span className="font-medium">Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Navbar