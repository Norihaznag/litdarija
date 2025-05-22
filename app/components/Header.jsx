'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Settings, User, Menu } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            className="mr-4 h-6 w-6 text-gray-500 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu />
          </button>
          <Link href="/" className="text-2xl font-bold text-emerald-600">
            Darija<span className="text-gray-800">Learn</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <Link href="/courses" className="hover:text-emerald-600">All Courses</Link>
          <Link href="/about" className="hover:text-emerald-600">About Us</Link>
          <Link href="/contact" className="hover:text-emerald-600">Contact</Link>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden">
            <div className="flex flex-col p-4">
              <Link href="/" className="py-2 hover:text-emerald-600">Home</Link>
              <Link href="/courses" className="py-2 hover:text-emerald-600">All Courses</Link>
              <Link href="/about" className="py-2 hover:text-emerald-600">About Us</Link>
              <Link href="/contact" className="py-2 hover:text-emerald-600">Contact</Link>
            </div>
          </div>
        )}
        
        <div className="flex items-center space-x-3">
          <button 
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Settings"
          >
            <Settings size={20} className="text-gray-600" />
          </button>
          <button 
            className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md"
            aria-label="Sign in"
          >
            <User size={18} />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
}