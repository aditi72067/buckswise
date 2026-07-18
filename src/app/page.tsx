export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-bold text-blue-600">
        BucksWise
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Manage your money wisely.
      </p>

      <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
        Get Started
      </button>
    </main>
  );
}