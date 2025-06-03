import React from "react";

function Header() {
  return (
    <nav className="bg-gradient-to-br from-blue-500 via-purple-400 to-pink-300 py-4 shadow border-b-1 border-b-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Bookmark Vault</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
