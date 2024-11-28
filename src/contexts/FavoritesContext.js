import { createContext, useState, useContext, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites
      ? JSON.parse(savedFavorites)
      : { blogs: [], destinations: [] };
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (type, item) => {
    setFavorites((prev) => {
      const array = prev[type];
      const exists = array.find((i) => i.id === item.id);

      if (exists) {
        return {
          ...prev,
          [type]: array.filter((i) => i.id !== item.id),
        };
      }

      return {
        ...prev,
        [type]: [...array, item],
      };
    });
  };

  const isFavorite = (type, id) => {
    return favorites[type].some((item) => item.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
