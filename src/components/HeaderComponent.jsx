import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-gray-950/80 border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter glow-text flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white text-sm shrink-0">EM</div>
               <span className="truncate">Employee System</span>
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
                <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
                <Link to="/employees" className="hover:text-purple-400 transition-colors">Employees</Link>
            </nav>
            <div className="hidden md:flex items-center gap-4">
                <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sign In</button>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium py-1.5 px-4 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.4)] hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] transition-all">Sign Up</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-gray-300 hover:text-white p-2" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
            <div className="md:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur-xl absolute w-full shadow-2xl">
                <div className="flex flex-col px-4 py-4 gap-2">
                    <Link to="/" className="text-gray-300 hover:text-purple-400 font-medium py-3 border-b border-gray-800/50" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/employees" className="text-gray-300 hover:text-purple-400 font-medium py-3 border-b border-gray-800/50" onClick={() => setIsMenuOpen(false)}>Employees</Link>
                    <div className="flex flex-col gap-3 pt-4 pb-2">
                        <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 text-left">Sign In</button>
                        <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium py-2.5 px-4 rounded-full text-center">Sign Up</button>
                    </div>
                </div>
            </div>
        )}
    </header>
  )
}

export default HeaderComponent