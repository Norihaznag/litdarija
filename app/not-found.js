import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-emerald-600">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-6">Page Not Found</h2>
      <p className="text-gray-600 max-w-md text-center mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium transition duration-200"
      >
        Return to Homepage
      </Link>
    </div>
  );
}