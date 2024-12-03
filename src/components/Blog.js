import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toggleFavorite, isFavorite } = useFavorites();
  const [showAll, setShowAll] = useState(false); // 'Daha Fazla Gör' durumu

  const categories = [
    { id: "all", name: "Tümü" },
    { id: "summer", name: "Yaz Tatili" },
    { id: "culture", name: "Kültür Turları" },
    { id: "gastronomy", name: "Gastronomi" },
    { id: "tips", name: "Seyahat İpuçları" },
    { id: "nature", name: "Doğa" },
    { id: "adventure", name: "Macera" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "2024 Yazının En Popüler 5 Plajı",
      category: "summer",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      date: "15 Nisan 2024",
      author: "Ayşe Yılmaz",
      summary:
        "Bu yaz mutlaka ziyaret etmeniz gereken Türkiye'nin en güzel plajlarını sizler için derledik...",
    },
    {
      id: 2,
      title: "Ege'nin Antik Kentleri: Tam Gün Rotası",
      category: "culture",
      image: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8",
      date: "12 Nisan 2024",
      author: "Mehmet Demir",
      summary:
        "Efes'ten Bergama'ya, Ege'nin en etkileyici antik kentlerini kapsayan muhteşem bir rota...",
    },
    {
      id: 3,
      title: "Sokak Lezzetleri Rehberi: İstanbul",
      category: "gastronomy",
      image: "https://images.unsplash.com/photo-1528909760809-0251be5d2111",
      date: "10 Nisan 2024",
      author: "Zeynep Kaya",
      summary:
        "İstanbul'un en lezzetli sokak yemeklerini tadabileceğiniz mekanlar ve ipuçları...",
    },
    {
      id: 4,
      title: "Minimum Bütçeyle Maximum Tatil",
      category: "tips",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
      date: "8 Nisan 2024",
      author: "Can Yıldız",
      summary:
        "Ekonomik tatil yapmak isteyenler için püf noktaları ve öneriler...",
    },
    {
      id: 5,
      title: "Karadeniz'in Saklı Cennetleri",
      category: "nature",
      image: "https://images.unsplash.com/photo-1547043594-4191000dc1eb",
      date: "5 Mayıs 2024",
      author: "Elif Öztürk",
      summary:
        "Karadeniz'in eşsiz doğasını ve saklı kalmış güzelliklerini keşfedin. Yaylaların serinliği, ormanların huzuru ve yerel kültürün sıcaklığı sizleri bekliyor.",
    },
    {
      id: 6,
      title: "Kapadokya'da Balon Turu Deneyimi",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1520670604026-6c664d47bed2",
      date: "10 Mayıs 2024",
      author: "Ahmet Kaya",
      summary:
        "Kapadokya'nın büyülü atmosferinde güneşin doğuşuna tanıklık ederken balon turu yapmanın heyecanını anlatıyoruz.",
    },
    {
      id: 7,
      title: "Mardin'in Tarihi Dokusu ve Kültürü",
      category: "culture",
      image: "https://images.unsplash.com/photo-1600566752442-a0f2fdba5844",
      date: "15 Mayıs 2024",
      author: "Sevgi Kılıç",
      summary:
        "Taş evleri, dar sokakları ve zengin kültürel mirasıyla Mardin'i keşfedin.",
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const [itemsToShow, setItemsToShow] = useState(5); // 5 öğe + 1 "Daha Fazla Gör" butonu

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const displayedPosts = showAll
    ? filteredPosts
    : filteredPosts.slice(0, itemsToShow);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Seyahat Blogu</h1>

      {/* Categories */}
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

      {/* Blog Posts Grid */}
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
                Devamını Oku →
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
              <h2 className="text-xl font-bold mb-3">Daha Fazla Gör</h2>
              <p className="text-gray-600">
                {filteredPosts.length - itemsToShow} blog daha var
              </p>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}

export default Blog;
