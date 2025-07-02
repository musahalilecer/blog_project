import React from 'react'

const Navbar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-100 flex flex-col justify-between shadow-lg">
      <nav className="mt-8">
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-blue-100 hover:text-gray-800 rounded-lg transition-colors">
              <i className="inline-block w-6 h-6 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 9v-6h4v6m5-3l2 2M3 12l2 2" />
                </svg>
              </i>
              <span className="font-medium">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-blue-100 hover:text-gray-800 rounded-lg transition-colors">
              <i className="inline-block w-6 h-6 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h10l4 4v11a1 1 0 01-1 1H4a2 2 0 01-2-2V5z" />
                </svg>
              </i>
              <span className="font-medium">Blogs</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-blue-100 hover:text-gray-800 rounded-lg transition-colors">
              <i className="inline-block w-6 h-6 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </i>
              <span className="font-medium">Images</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-blue-100 hover:text-gray-800 rounded-lg transition-colors">
              <i className="inline-block w-6 h-6 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8S2 14.418 2 10 5.582 2 10 2s8 3.582 8 8zm-8-4a1 1 0 00-.707 1.707l1.414 1.414a1 1 0 010 1.414L9.293 12.293A1 1 0 1010.707 13.707l1.414-1.414a3 3 0 000-4.242l-1.414-1.414A1 1 0 0010 6z" clipRule="evenodd" />
                </svg>
              </i>
              <span className="font-medium">About</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-blue-100 hover:text-gray-800 rounded-lg transition-colors">
              <i className="inline-block w-6 h-6 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </i>
              <span className="font-medium">Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="mb-8">
        <ul className="space-y-3">
          <li>
            <a href="#" className="flex items-center p-3 text-gray-500 hover:bg-blue-100 hover:text-gray-800 rounded-lg transition-colors">
              <i className="inline-block w-5 h-5 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v4a6 6 0 0012 0V8a6 6 0 00-6-6z" />
                  <path d="M10 12a2 2 0 002-2H8a2 2 0 002 2z" />
                </svg>
              </i>
              <span>Login</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-500 hover:bg-blue-100 hover:text-gray-800 rounded-lg transition-colors">
              <i className="inline-block w-5 h-5 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-2a4 4 0 00-8 0v2M12 7a4 4 0 110-8 4 4 0 010 8z" />
                </svg>
              </i>
              <span>Register</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Navbar