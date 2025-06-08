import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
              LitDarija
            </h3>
            <p className="text-gray-400">
              Empowering Moroccans through quality education in Darija
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Courses</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/courses/finance" className="hover:text-white transition-colors">Finance</Link></li>
              <li><Link href="/courses/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/courses/construction" className="hover:text-white transition-colors">Construction</Link></li>
              <li><Link href="/courses/design" className="hover:text-white transition-colors">Design</Link></li>
              <li><Link href="/courses/business" className="hover:text-white transition-colors">Business</Link></li>
              <li><Link href="/courses/health" className="hover:text-white transition-colors">Health & Fitness</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">All Categories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/instructors" className="hover:text-white transition-colors">Become Instructor</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Community Guidelines</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} LitDarija. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}