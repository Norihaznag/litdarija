'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        placeholder="What do you want to learn today?"
        className="w-full bg-white text-gray-800 rounded-md pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search courses"
      />
      <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
      <button 
        type="submit" 
        className="absolute right-2 top-2 bg-emerald-500 text-white p-1 rounded"
        aria-label="Submit search"
      >
        <Search size={16} />
      </button>
    </form>
  );
}