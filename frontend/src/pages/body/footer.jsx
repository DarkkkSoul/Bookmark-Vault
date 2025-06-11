import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-300 to-gray-800 text-black">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="py-4 relative">

                    <div className="text-center">
                        <p className=" text-sm">
                            © 2025 Bookmark Vault. All rights reserved.
                        </p>
                        <p className="text-xs mt-2">
                            Keep your favorite websites organized in one place
                        </p>
                    </div>

                    <div className="absolute bottom-5 right-7 flex justify-center items-center gap-x-2">
                        <p className="text-sm">Developed By</p>
                        <Link to={'/aboutme'}>
                            <img src="/dark-soul.png" className="rounded-full w-10" />
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer