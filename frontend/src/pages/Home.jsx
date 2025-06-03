import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200">
      {/* Main Content */}
      <main className="flex flex-col items-center w-full flex-1 justify-center py-8">
        {/* Input Section */}
        <section className="w-full max-w-md bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100 rounded-lg shadow-md p-6 mb-8 border-2 border-blue-300/60">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Add a Bookmark
          </h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-md font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Bookmark title"
              />
            </div>
            <div>
              <label
                htmlFor="url"
                className="block text-md font-medium text-gray-700 mb-1"
              >
                URL
              </label>
              <input
                type="url"
                id="url"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-md font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Work, Personal"
              />
            </div>
            <button
              type="submit"
              className="w-17 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
          </form>
        </section>

        {/* Display Section */}
        <section className="w-full max-w-md bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-lg shadow-md p-6 border-2 border-pink-300/60">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Your Bookmarks
          </h2>
          {/* Placeholder for bookmarks list */}
          <div className="text-gray-500 text-center">No bookmarks yet.</div>
        </section>
      </main>
    </div>
  );
}

export default Home;
