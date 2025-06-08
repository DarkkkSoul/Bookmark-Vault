import BookmarkCard from './components/bookmarkcard'

function Home() {
  // Demo bookmark data
  const demoBookmarks = [
    {
      id: 1,
      title: "React Documentation",
      url: "https://react.dev",
      category: "Development"
    },
    {
      id: 2,
      title: "Tailwind CSS",
      url: "https://tailwindcss.com",
      category: "Design"
    },
    {
      id: 3,
      title: "GitHub",
      url: "https://github.com",
      category: "Development"
    },
    {
      id: 4,
      title: "Dribbble",
      url: "https://dribbble.com",
      category: "Design"
    },
    {
      id: 5,
      title: "Stack Overflow",
      url: "https://stackoverflow.com",
      category: "Development"
    },
    {
      id: 6,
      title: "Unsplash",
      url: "https://unsplash.com",
      category: "Images"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Create Bookmark Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Bookmark</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter bookmark title"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="News">News</option>
                  <option value="Social">Social</option>
                  <option value="Images">Images</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                URL
              </label>
              <input
                type="url"
                id="url"
                name="url"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="https://example.com"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Save Bookmark
            </button>
          </form>
        </div>

        {/* Show Bookmarks Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Bookmarks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoBookmarks.map((bookmark) => (
              <BookmarkCard 
                key={bookmark.id}
                title={bookmark.title}
                url={bookmark.url}
                category={bookmark.category}
              />
            ))}
          </div>

          {demoBookmarks.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📑</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No bookmarks yet</h3>
              <p className="text-gray-600">Create your first bookmark above to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home