'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="Layer Up Logo" 
              width={40} 
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-gray-900">Layer Up</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/upload" 
              className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-md"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/services" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Services
              </Link>
              <Link 
                href="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                href="/upload" 
                onClick={() => setIsMenuOpen(false)}
                className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-md text-center"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

