import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

function AboutMe() {
    return (
        <div className='bg-gradient-to-br from-gray-900 via-gray-600 to-black h-screen flex justify-center items-center'>
            <Fade>

                <div className='max-w-md bg-gradient-to-br from-gray-600 via-black to-white rounded-xl shadow-2xl p-10 shadow-white flex flex-col items-center justify-center gap-y-7'>

                    <div className='w-44'>
                        <img src="/pfp.jpeg" className='rounded-full' />
                    </div>

                    <div className='text-slate-400 leading-relaxed'>
                        Hey! I'm DarkSoul a.k.a Mahesh, this is my first Full Stack Project -- A Bookmark Manager, I've built this project using MERN stack.
                        Impressed with the UI? Well I spent 1 year mastering frontend designs, So why wouldn't you be?
                        Did you find any bugs? You can always reach out to me & this repo is public, feel free to fork anything time and fix it!
                        I'm off to build more projects, stay tuned!
                    </div>

                    <div className='flex items-center justify-between w-full'>

                        <div className='text-slate-400'>
                            <Link to={'/home'}>&#8592; back</Link>
                        </div>

                        <div className='flex gap-x-1'>
                            <a href="https://x.com/drcsoul" target='_blank'>
                                <img src="/icons/x.png" className='w-10' />
                            </a>
                            <a href="https://www.linkedin.com/in/maheshhkumarg/" target='_blank'>
                                <img src="/icons/linkedin.png" className='w-10' />
                            </a>
                            <a href="https://github.com/darkkksoul" target='_blank'>
                                <img src="/icons/github.png" className='w-10' />
                            </a>
                        </div>
                    </div>


                </div>
            </Fade>

        </div>
    )
}

export default AboutMe