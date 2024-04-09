import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="w-full relative flex items-center justify-between mx-auto px-4 py-3"
      style={{ backgroundColor: "#D9D9D9" }}
    >
      <div>
        <Link href="/">
          <span className="text-lg font-bold mr-6">Blog posts</span>
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/">
          <span className="text-sm mr-4">Blogs</span>
        </Link>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="pr-10 pl-2 py-1 rounded border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
          />
          <svg
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 15l-5-5m5 0l-5 5m5-5V3a9 9 0 10-18 0h1c0 4.97 4.03 9 9 9z"
            />
          </svg>
        </div>
        <div>
          <Link href="/create-blog-post">
            <button className="bg-gray-400 hover:bg-gray-300 text-white font-bold py-1 px-2 rounded">
              Create Blog Post
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

