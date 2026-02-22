import React from 'react'

const FooterComponent = () => {
  return (
    <footer className="w-full py-6 mt-12 border-t border-gray-800 bg-gray-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} by JavaGuides. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default FooterComponent