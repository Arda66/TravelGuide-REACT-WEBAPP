import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";
import { useTranslation } from "react-i18next";

function Header({ onSearch }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { favorites } = useFavorites();
  const totalFavorites = favorites.blogs.length + favorites.destinations.length;
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://flagcdn.com/w160/gb.png", // Increased resolution
    },
    {
      code: "tr",
      name: "Türkçe",
      flag: "https://flagcdn.com/w160/tr.png", // Increased resolution
    },
  ];

  const handleNavigation = (link) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Sayfa yüklendikten sonra scroll yapılması için timeout kullanıyoruz
      setTimeout(() => {
        const element = document.getElementById(link);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false); // Dropdown'ı kapat
    // Dil değişikliğini localStorage'a kaydet
    localStorage.setItem("i18nextLng", lng);
  };

  // Mevcut dili al
  const currentLanguage =
    i18n.language || window.localStorage.getItem("i18nextLng") || "en";

  return (
    <header className="bg-blue-600 text-white py-4 sticky top-0 z-40">
      <nav className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl md:text-3xl font-bold tracking-tight"
            >
              {t("welcome")}
            </Link>
            <button
              className="md:hidden p-2 hover:bg-blue-500 rounded"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
            >
              🔍
            </button>
          </div>

          {isSearchVisible && (
            <div className="w-full md:w-auto py-4 md:py-0">
              <input
                type="search"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Destinasyon ara..."
                className="px-4 py-2 rounded text-gray-800 w-full md:w-64"
              />
            </div>
          )}

          <ul className="flex flex-wrap items-center gap-6 mt-4 md:mt-0">
            <li>
              <button
                onClick={() => handleNavigation("home")}
                className="hover:text-blue-200 cursor-pointer"
              >
                {t("home")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("destinations")}
                className="hover:text-blue-200 cursor-pointer"
              >
                {t("destinations")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("blog")}
                className="hover:text-blue-200 cursor-pointer"
              >
                {t("blog")}
              </button>
            </li>
            <li className="hidden md:block">
              <button
                onClick={() => {
                  if (location.pathname !== "/") {
                    navigate("/");
                    setTimeout(() => {
                      handleNavigation("destinations");
                      !isSearchVisible && setIsSearchVisible(!isSearchVisible);
                      document.querySelector("input[type='search']")?.focus();
                    }, 100);
                  } else {
                    handleNavigation("destinations");
                    !isSearchVisible && setIsSearchVisible(!isSearchVisible);
                    setTimeout(() => {
                      document.querySelector("input[type='search']")?.focus();
                    }, 0);
                  }
                }}
                className="hover:text-blue-200"
              >
                🔍
              </button>
            </li>
            <li>
              <Link
                to="/favorites"
                className="hover:text-blue-200 cursor-pointer flex items-center gap-2"
              >
                {t("favorites")}
                {totalFavorites > 0 && (
                  <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalFavorites}
                  </span>
                )}
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 hover:text-blue-200 py-2"
              >
                <span>
                  <img
                    src={
                      languages.find((lang) => lang.code === currentLanguage)
                        ?.flag
                    }
                    alt={
                      languages.find((lang) => lang.code === currentLanguage)
                        ?.name
                    }
                    className="w-5 h-5 inline-block"
                  />
                </span>
                <span>{currentLanguage.toUpperCase()}</span>
                <span
                  className={`transition-transform duration-200 ${
                    isLangMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden min-w-[120px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-gray-100
                        ${
                          i18n.language === lang.code
                            ? "text-blue-600"
                            : "text-gray-700"
                        }`}
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-5 h-5 object-cover"
                      />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
