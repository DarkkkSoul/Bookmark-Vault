import { useEffect, useState } from "react"

function BookmarkCard({ title, url, category, id, onBookmarkDeleted }) {

    const getCategoryColor = (category) => {
        const colors = {
            'Entertainment': 'bg-pink-100 text-pink-800',
            'Development': 'bg-blue-100 text-blue-800',
            'Education': 'bg-purple-100 text-purple-800',
            'News': 'bg-red-100 text-red-800',
            'Social': 'bg-green-100 text-green-800',
            'Images': 'bg-yellow-100 text-yellow-800',
            'Others': 'bg-gray-100 text-gray-800'
        }
        return colors[category] || colors['Other'];
    }

    const getDomain = (url) => {
        try {
            return new URL(url).hostname
        } catch {
            return url
        }
    }

    const [msg, setMsg] = useState('');


    const deleteBookmark = async () => {
        if (window.confirm("Are you sure you want to delete this bookmark?")) {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/bookmark/${id}`, {
                    method: "DELETE",
                    credentials: 'include'
                });

                const data = await response.json();

                if (response.ok) {
                    setMsg(data.message);
                    if (onBookmarkDeleted) {
                        onBookmarkDeleted();
                    }
                } else {
                    setMsg(data.errorMessage);
                }

            } catch (error) {
                console.error("Error during bookmark deletion:", error);
                setMsg("Server Error! Try again later.");
            }
        }
    }

    useEffect(() => {
        if (msg) {
            const timer = setTimeout(() => {
                setMsg('');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [msg]);

    return (
        <div className="bg-slate-200 border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 group">
            {msg && <p className="text-sm text-red-500 mb-4 text-center">{msg}</p>} {/* Display the message */}

            <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {title}
                </h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(category)}`}>
                    {category}
                </span>
            </div>

            <p className="text-sm text-gray-500 mb-4 truncate">
                {getDomain(url)}
            </p>

            <div className="flex items-center justify-between">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                >
                    Visit Site →
                </a>

                <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-red-500 transition-colors duration-200" onClick={deleteBookmark}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookmarkCard