import { useEffect, useState } from "react"

function BookmarkCard({ title, url, category, id }) {
    // Function to get category color
    const getCategoryColor = (category) => {
        const colors = {
            'Development': 'bg-blue-100 text-blue-800',
            'Design': 'bg-purple-100 text-purple-800',
            'News': 'bg-red-100 text-red-800',
            'Social': 'bg-green-100 text-green-800',
            'Images': 'bg-yellow-100 text-yellow-800',
            'Other': 'bg-gray-100 text-gray-800'
        }
        return colors[category] || colors['Other']
    }

    // Function to extract domain from URL
    const getDomain = (url) => {
        try {
            return new URL(url).hostname
        } catch {
            return url
        }
    }

    const [msg, setMsg] = useState('');


    const deleteBookmark = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/v1/bookmark/' + id, {
                method: "DELETE"
            });

            const data = await response.json();

            if (response.ok) {
                setMsg(data.message);
            } else {
                setMsg(data.errorMessage);
            }

        } catch (error) {
            console.error(error);
            console.log("Server Error");
        }
    }

    // useEffect(() => {
    //     if (msg) {
    //         setTimeout(() => {
    //             setMsg('');
    //         }, 2000)
    //     }
    // }, [msg])

    return (
        <div className="bg-slate-200 border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 group">
            {/* {msg && <p className="text-sm text-red-500 mb-4">{msg}</p>} */}


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

                    {/* <button className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button> */}

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