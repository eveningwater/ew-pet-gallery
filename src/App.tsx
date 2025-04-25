import { useState } from "react";
import "./App.css";
import CatGallery from "./components/CatGallery";
import CatModal from "./components/CatModal";
import { Cat } from "./types/cat";
import { openNewWindow } from "./utils";

function App() {
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);

  const handleSelectCat = (cat: Cat) => {
    setSelectedCat(cat);
  };

  const handleCloseModal = () => {
    setSelectedCat(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="mr-2">🐱</span> 宠物图库
            </h1>
            <div className="flex items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                数据来源于网络
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 cursor-pointer w-5 text-black hover:text-gray-600 transition duration-200"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={() => {
                  openNewWindow(
                    "https://github.com/eveningwater/ew-pet-gallery"
                  );
                }}
              >
                <path
                  fill-rule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.297 3.438 9.799 8.207 11.39.6.111.828-.261.828-.58v-2.26c-3.338.728-4.034-1.618-4.034-1.618-.545-1.387-1.333-1.756-1.333-1.756-1.087-.743.082-.728.082-.728 1.203.085 1.835 1.233 1.835 1.233 1.066 1.826 2.8 1.296 3.493.992.107-.773.418-1.295.759-1.595-2.664-.304-5.467-1.332-5.467-5.928 0-1.307.467-2.377 1.24-3.213-.124-.304-.537-.912.115-1.892 0 0 1.008-.32 3.304 1.232.956-.268 1.97-.402 2.986-.406 1.016.004 2.03.138 2.986.406 2.296-1.553 3.304-1.232 3.304-1.232.652.98.24 1.588.115 1.892.773.836 1.24 1.906 1.24 3.213 0 4.6-2.806 5.624-5.478 5.928.4.342.755.994.755 1.99v2.365c0 .319.225.693.828.58C20.564 21.799 24 17.297 24 12c0-6.627-5.373-12-12-12z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <main>
        <CatGallery onSelectCat={handleSelectCat} />
      </main>

      <CatModal cat={selectedCat} onClose={handleCloseModal} />

      <footer className="bg-white dark:bg-gray-800 mt-12 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} 宠物图库 - 使用 React + TypeScript +
            Tailwind CSS 构建
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
