import { FC, useEffect, useState } from "react";
import { Cat } from "../types/cat";
import { fetchCats } from "../services/catApi";
import CatCard from "./CatCard";

interface CatGalleryProps {
  onSelectCat: (cat: Cat) => void;
}

const CatGallery: FC<CatGalleryProps> = ({ onSelectCat }) => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadCats = async () => {
    try {
      setLoading(true);
      setError(null);
      const newCats = await fetchCats(12);
      setCats(newCats);
    } catch (err) {
      setError("加载猫咪图片失败，请稍后再试");
      console.error("Failed to load cats:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCats();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          宠物图库
        </h2>
        <button
          onClick={loadCats}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          disabled={loading}
        >
          {loading ? "加载中..." : "刷新"}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cats.map((cat) => (
            <CatCard key={cat.id} cat={cat} onClick={onSelectCat} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CatGallery;
