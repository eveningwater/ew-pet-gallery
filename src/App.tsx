import { useState } from "react";
import "./App.css";
import CatGallery from "./components/CatGallery";
import CatModal from "./components/CatModal";
import { Cat } from "./types/cat";

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
            <p className="text-sm text-gray-600 dark:text-gray-400">
              数据来源于网络
            </p>
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
