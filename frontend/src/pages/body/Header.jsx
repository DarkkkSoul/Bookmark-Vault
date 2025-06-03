import React from "react";

function Header() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Bookmark Vault</h1>
        <ul className="flex items-center space-x-4">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Show Bookmarks
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Create Bookmark
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Username</span>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
