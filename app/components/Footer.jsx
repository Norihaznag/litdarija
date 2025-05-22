import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-emerald-600 mb-4">DarijaLearn</h3>
            <p className="text-gray-500">
              Bringing quality education to Moroccans in their native language.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Courses</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/courses/finance" className="hover:text-emerald-600">Finance</Link></li>
              <li><Link href="/courses/web-development" className="hover:text-emerald-600">Web Development</Link></li>
              <li><Link href="/courses/construction" className="hover:text-emerald-600">Construction</Link></li>
              <li><Link href="/courses" className="hover:text-emerald-600">All Categories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/about" className="hover:text-emerald-600">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-emerald-600">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-600">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-600">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/help" className="hover:text-emerald-600">Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-600">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-emerald-600">Privacy Policy</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-600">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© {new Date().getFullYear()} DarijaLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}