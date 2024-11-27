import { useState } from "react";

function Header({ onSearch }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const handleNavigation = (link) => {
    setActiveLink(link);

    // Sayfada ilgili bölüme scroll
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <header className="bg-blue-600 text-white py-4 sticky top-0 z-40">
      <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => handleNavigation("home")}
        >
          TravelGuide
        </div>

        {isSearchVisible && (
          <div className="w-full md:w-auto order-3 md:order-none mt-4 md:mt-0">
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Destinasyon ara..."
              className="px-4 py-2 rounded text-gray-800 w-full md:w-64"
            />
          </div>
        )}

        <ul className="flex space-x-6 items-center">
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("home");
              }}
              className={`hover:text-blue-200 cursor-pointer ${
                activeLink === "home" ? "border-b-2" : ""
              }`}
            >
              Ana Sayfa
            </a>
          </li>
          <li>
            <a
              href="#destinations"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("destinations");
              }}
              className={`hover:text-blue-200 cursor-pointer ${
                activeLink === "destinations" ? "border-b-2" : ""
              }`}
            >
              Destinasyonlar
            </a>
          </li>
          <li>
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("blog");
              }}
              className={`hover:text-blue-200 cursor-pointer ${
                activeLink === "blog" ? "border-b-2" : ""
              }`}
            >
              Blog
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                handleNavigation("destinations");
                setIsSearchVisible(!isSearchVisible);
              }}
              className="hover:text-blue-200"
            >
              🔍
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
