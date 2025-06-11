import { useEffect, useState } from 'react'
import BookmarkCard from './components/bookmarkcard.jsx'
import {useNavigate} from 'react-router-dom'

function Home() {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

    const handleCreateSubmit = async (e)=>{
        e.preventDefault();
        
        try {

            const response = await fetch('http://localhost:5000/api/v1/bookmark',{
                method : 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({title, category, url})
            })

            const data = await response.json();

            if(response.ok){
                setMessage(data.message);
            } else{
                setMessage(data.errorMessage);
            }

            
        } catch (error) {
            console.error('Error during ')
            setMessage('Server Error! Try again later');
        }
    }  

    useEffect(() => {
        if(message){
            setTimeout(()=>{
                setMessage('');
            },2000);
        }
    }, [message])
    
    
    // display bookmarks

    const [bookmarks, setBookmarks] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(()=>{
        const getBookmarks = async () =>{
            try {
                const response = await fetch('http://localhost:5000/api/v1/bookmark/user',{
                    method:'GET',
                    credentials:'include'
                });
    
                const data = await response.json();

                if(response.ok){
                    setBookmarks(data.data.bookmarks);
                } else{
                    setErrorMsg(data.errorMessage);
                }

            } catch (error) {
                console.error(error);
                setErrorMsg('Network Error, try again later!');
            }
        }
    
        getBookmarks();

    },[bookmarks]);

    return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-600 to-black pt-24 py-8">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Create Bookmark Section */}
        <div className="bg-gradient-to-tl from-gray-900 via-gray-600 to-gray-600 rounded-xl shadow-sm p-8 mb-12">
            
          <h2 className="text-2xl font-bold text-white mb-6">Create New Bookmark</h2>
          
          <form className="space-y-6" onSubmit={handleCreateSubmit} >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-white mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-all duration-200 bg-slate-200"
                  placeholder="Enter bookmark title"
                  required
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-white mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-all duration-200 bg-slate-200"
                  required
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
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

              <label htmlFor="url" className="block text-sm font-medium text-white mb-2 ">
                URL
              </label>
              <input
                type="url"
                id="url"
                name="url"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-all duration-200 bg-slate-200"
                placeholder="https://example.com"
                required
                value={url}
                onChange={(e)=>setUrl(e.target.value)}
              />
            </div>

            <button
            type="submit"
            className="text-black font-semibold py-2 px-6 rounded-lg duration-200 bg-white bg-opacity-80 hover:bg-gradient-to-tl from-gray-900 via-gray-500 to-white transition-all hover:text-white hover:scale-110 active:scale-95"
          >
            Save
          </button>
          </form>

          {message && <p className='text-center text-white'>{message}</p>}

        </div>

        {/* Show Bookmarks Section */}
        <div className="bg-gradient-to-tl from-gray-900 via-gray-600 to-gray-600 rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Your Bookmarks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarks.map((bookmark) => (
              <BookmarkCard 
                key={bookmark._id}
                id={bookmark._id}
                title={bookmark.title}
                url={bookmark.url}
                category={bookmark.category}
              />
            ))}
          </div>

          {bookmarks.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📑</div>
              <h3 className="text-lg font-medium text-white mb-2">No bookmarks yet</h3>
              <p className="text-white">Create your first bookmark above</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home