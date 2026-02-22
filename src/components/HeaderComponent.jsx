import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-gray-950/80 border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold tracking-tighter glow-text flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white text-sm">EM</div>
               Employee System
            </Link>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
                <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
                <Link to="/employees" className="hover:text-purple-400 transition-colors">Employees</Link>
            </nav>
            <div className="flex items-center gap-4">
                <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sign In</button>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium py-1.5 px-4 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.4)] hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] transition-all">Sign Up</button>
            </div>
        </div>
    </header>
  )
}

export default HeaderComponent