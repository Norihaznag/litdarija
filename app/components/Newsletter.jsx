'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Mock API call - replace with actual newsletter subscription API
      await new Promise(resolve => setTimeout(resolve, 800));
      setStatus('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive updates on new courses, special offers, and learning tips in Moroccan Darija.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-4 py-3 rounded-md md:rounded-r-none mb-3 md:mb-0 text-gray-800 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <button 
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-md md:rounded-l-none font-medium transition duration-200 whitespace-nowrap"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        
        {status && (
          <p className={`mt-4 ${status.includes('error') ? 'text-red-400' : 'text-emerald-400'}`}>
            {status}
          </p>
        )}
      </div>
    </section>
  );
}