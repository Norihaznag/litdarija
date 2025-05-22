export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-emerald-500 border-r-transparent align-middle" role="status"></div>
        <p className="mt-4 text-xl font-medium text-gray-700">Loading DarijaLearn...</p>
      </div>
    </div>
  );
}