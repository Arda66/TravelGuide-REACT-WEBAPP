import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";
import { useTranslation } from "react-i18next";

function Blog() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toggleFavorite, isFavorite } = useFavorites();
  const [showAll, setShowAll] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(5);

  const categories = [
    { id: "all", name: t("blogContent.categories.all") },
    { id: "summer", name: t("blogContent.categories.summer") },
    { id: "culture", name: t("blogContent.categories.culture") },
    { id: "gastronomy", name: t("blogContent.categories.gastronomy") },
    { id: "tips", name: t("blogContent.categories.tips") },
    { id: "nature", name: t("blogContent.categories.nature") },
    { id: "adventure", name: t("blogContent.categories.adventure") },
  ];

  const getBlogImage = (id) => {
    const images = {
      1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      2: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8",
      3: "https://images.unsplash.com/photo-1528909760809-0251be5d2111",
      4: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
      5: "https://images.unsplash.com/photo-1599424102613-e9e1ecf396b7",
      6: "https://images.unsplash.com/photo-1716594993172-b895213512ed",
      7: "https://images.unsplash.com/photo-1710835643934-f9aaf8b2ccc9",
      8: "https://images.unsplash.com/photo-1591078314943-85c674b3789b",
      9: "https://images.unsplash.com/photo-1509853940202-99b010d7ebb7",
      10: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    };
    return images[id];
  };

  const blogPosts = useMemo(() => {
    const postKeys = Array.from({ length: 10 }, (_, i) => i + 1);

    return postKeys.map((id) => ({
      id,
      title: t(`blogContent.posts.post${id}.title`),
      category: t(`blogContent.posts.post${id}.category`),
      image: getBlogImage(id),
      date: t(`blogContent.posts.post${id}.date`),
      author: t(`blogContent.posts.post${id}.author`),
      summary: t(`blogContent.posts.post${id}.summary`),
    }));
  }, [t, i18n.language]);

  const filteredPosts = useMemo(
    () =>
      selectedCategory === "all"
        ? blogPosts
        : blogPosts.filter((post) => post.category === selectedCategory),
    [selectedCategory, blogPosts, i18n.language]
  );

  const displayedPosts = showAll
    ? filteredPosts
    : filteredPosts.slice(0, itemsToShow);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative">
              <img
                src={post.image + "?w=400&q=75"} // URL parametreleri ile boyut ve kalite kontrolü
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x200?text=Loading...";
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite("blogs", post);
                }}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
              >
                {isFavorite("blogs", post.id) ? "❤️" : "🤍"}
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
              <h2 className="text-xl font-bold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                {t("blogContent.posts.readMore")}
              </Link>
            </div>
          </article>
        ))}
        {!showAll && filteredPosts.length > itemsToShow && (
          <article
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer flex items-center justify-center"
            onClick={handleSeeMore}
          >
            <div className="p-6 text-center">
              <div className="text-4xl mb-2">📚</div>
              <h2 className="text-xl font-bold mb-3">
                {t("blogContent.posts.seeMore")}
              </h2>
              <p className="text-gray-600">
                {filteredPosts.length - itemsToShow}{" "}
                {t("blogContent.posts.remaining")}
              </p>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}

export default Blog;
