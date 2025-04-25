import { FC } from "react";
import { Cat } from "../types/cat";

interface CatCardProps {
  cat: Cat;
  onClick?: (cat: Cat) => void;
}

const CatCard: FC<CatCardProps> = ({ cat, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onClick && onClick(cat)}
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
        <img
          src={cat.url}
          alt={`Cat ${cat.id}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">ID: {cat.id}</p>
      </div>
    </div>
  );
};

export default CatCard;
