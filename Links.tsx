"use client"
import { useRouter } from "next/navigation";


export default function Links() {
  const router = useRouter();

  const navigateTo = (path:any) => {
    router.push(path);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <nav className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <ul className="flex flex-col space-y-4">
          <li>
            <button
              onClick={() => navigateTo("/navbar")}
              className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300"
            >
              NavBar
            </button>
          </li>
          <li>
            <button
              onClick={() => navigateTo("/contact")}
              className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300"
            >
              Contact
            </button>
          </li>
          <li>
            <button
              onClick={() => navigateTo("/about")}
              className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => navigateTo("/footer")}
              className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300"
            >
              Footer
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
