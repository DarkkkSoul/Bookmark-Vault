import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Bookmark Vault
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header