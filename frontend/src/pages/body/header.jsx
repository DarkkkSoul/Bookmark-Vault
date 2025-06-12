import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {

            const response = await fetch('http://localhost:5000/api/v1/auth/logout', {
                method: 'POST',
                credentials: 'include'
            });


            if (response.ok) {
                navigate('/login');
            }

        } catch (error) {
            console.error(error);
            console.log("Server Error");
        }
    }

    return (
        <header className="bg-gradient-to-r from-gray-800 via-gray-600 to-black fixed top-0 left-0 right-0 z-10">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex items-center justify-center">
                        <img src="./vault-logo.png" className='w-6 h-7 mr-3' />
                        <Link to="/" className="text-2xl font-bold text-white transition-colors">
                            Bookmark Vault
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            type="submit"
                            className="text-black font-semibold py-2 px-6 rounded-lg duration-200 bg-white bg-opacity-80 hover:bg-gradient-to-tl from-gray-900 via-gray-500 to-white transition-all hover:text-white hover:scale-110 active:scale-95"
                            onClick={handleLogOut}
                        >
                            LogOut
                        </button>
                    </div>

                </div>
            </div>

        </header>
    )
}

export default Header