import { useFavorites } from "../contexts/FavoritesContext";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.blogs.length === 0 && favorites.destinations.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-8">Favorilerim</h1>
        <p className="text-gray-600">Henüz favori eklemediniz.</p>
        <Link
          to="/"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Ana sayfaya dön
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Favorilerim</h1>

      {favorites.destinations.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Favori Destinasyonlarım</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.destinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{dest.title}</h3>
                  <p className="text-gray-600 mb-4">{dest.description}</p>
                  <button
                    onClick={() => toggleFavorite("destinations", dest)}
                    className="text-red-600 hover:text-red-800"
                  >
                    ❤️ Favorilerden Çıkar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {favorites.blogs.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Favori Blog Yazılarım</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.blogs.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Okumaya Devam Et
                    </Link>
                    <button
                      onClick={() => toggleFavorite("blogs", post)}
                      className="text-red-600 hover:text-red-800"
                    >
                      ❤️ Favorilerden Çıkar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Favorites;
