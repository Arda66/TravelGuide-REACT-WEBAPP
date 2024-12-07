import { useState } from "react";
import Header from "./components/Header";
import TravelList from "./components/TravelList";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import Favorites from "./components/Favorites"; // Favorites bileşenini import et
import { FavoritesProvider } from "./contexts/FavoritesContext"; // FavoritesProvider'ı import et

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showOfferDetails, setShowOfferDetails] = useState(null);

  const handleOfferClick = (offerType) => {
    setShowOfferDetails(offerType);
    setTimeout(() => setShowOfferDetails(null), 2000);
  };

  const scrollToDestinations = () => {
    document.getElementById("destinations").scrollIntoView({
      behavior: "smooth",
    });
  };

  const testimonials = [
    {
      id: 1,
      name: "Ayşe Yılmaz",
      role: "Gezgin & Fotoğrafçı",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=100&w=400&auto=format&fit=crop",
      quote:
        "Kapadokya turu muhteşemdi! Organizasyon kusursuzdu ve rehberimiz çok bilgiliydi. Kesinlikle tekrar tercih edeceğim.",
      rating: 5,
      destination: "Kapadokya Turu",
      date: "Mart 2024",
    },
    {
      id: 2,
      name: "Mehmet Demir",
      role: "İş İnsanı",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=100&w=400&auto=format&fit=crop",
      quote:
        "Ailece çıktığımız Ege turu beklentilerimizin çok üzerindeydi. Çocuklar için de çok keyifli aktiviteler vardı.",
      rating: 5,
      destination: "Ege Turu",
      date: "Nisan 2024",
    },
    {
      id: 3,
      name: "Zeynep Kaya",
      role: "Yazar",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=100&w=400&auto=format&fit=crop",
      quote:
        "Doğu Ekspresi yolculuğu hayatımın en güzel deneyimlerinden biriydi. Her şey düşünülmüştü, mükemmel bir organizasyondu.",
      rating: 5,
      destination: "Doğu Ekspresi Turu",
      date: "Şubat 2024",
    },
  ];

  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col min-h-screen">
                <Header onSearch={setSearchQuery} />

                {/* Hero Section */}
                <section
                  id="home"
                  className="relative h-[80vh] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80")',
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h1 className="text-5xl font-bold mb-4">
                        Hayalinizdeki Tatili Keşfedin
                      </h1>
                      <p className="text-xl mb-8">
                        En güzel destinasyonlar, en uygun fiyatlarla
                      </p>
                      <button
                        onClick={scrollToDestinations}
                        className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        Hemen Keşfet
                      </button>
                    </div>
                  </div>
                </section>

                <main className="flex-grow">
                  {/* Popular Destinations */}
                  <section
                    id="destinations"
                    className="container mx-auto px-4 py-16"
                  >
                    <h2 className="text-3xl font-bold text-center mb-12">
                      Popüler Destinasyonlar
                    </h2>
                    <TravelList searchQuery={searchQuery} />
                  </section>

                  {/* Blog Section */}
                  <section id="blog">
                    <Blog />
                  </section>

                  {/* Testimonials Section */}
                  <section className="py-16 bg-gradient-to-b from-white to-gray-50">
                    <div className="container mx-auto px-4">
                      <h2 className="text-3xl font-bold text-center mb-4">
                        Mutlu Müşterilerimiz
                      </h2>
                      <p className="text-gray-600 text-center mb-12">
                        Unutulmaz seyahat deneyimleri yaşayan misafirlerimizin
                        yorumları
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                          <div
                            key={testimonial.id}
                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                          >
                            <div className="flex items-center mb-4">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full object-cover shadow-lg"
                                loading="lazy"
                              />
                              <div className="ml-4">
                                <h3 className="font-bold">
                                  {testimonial.name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  {testimonial.role}
                                </p>
                              </div>
                            </div>
                            <div className="mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-400">
                                  ★
                                </span>
                              ))}
                            </div>
                            <blockquote className="text-gray-700 mb-4 italic">
                              "{testimonial.quote}"
                            </blockquote>
                            <div className="text-sm text-gray-600">
                              <p>{testimonial.destination}</p>
                              <p>{testimonial.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Why Choose Us */}
                  <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4">
                      <h2 className="text-3xl font-bold text-center mb-12">
                        Neden Bizi Seçmelisiniz?
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                          <div className="text-4xl mb-4">🎯</div>
                          <h3 className="text-xl font-bold mb-2">
                            En İyi Fiyat Garantisi
                          </h3>
                          <p className="text-gray-600">
                            En uygun fiyatlarla unutulmaz tatil deneyimleri
                            sunuyoruz.
                          </p>
                        </div>
                        <div className="text-center p-6">
                          <div className="text-4xl mb-4">🎨</div>
                          <h3 className="text-xl font-bold mb-2">
                            Özel Seçilmiş Rotalar
                          </h3>
                          <p className="text-gray-600">
                            Uzman ekibimiz tarafından özenle seçilmiş benzersiz
                            rotalar.
                          </p>
                        </div>
                        <div className="text-center p-6">
                          <div className="text-4xl mb-4">🎉</div>
                          <h3 className="text-xl font-bold mb-2">
                            7/24 Destek
                          </h3>
                          <p className="text-gray-600">
                            Seyahatinizin her anında yanınızdayız.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Special Offers */}
                  <section className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center mb-12">
                      Özel Fırsatlar
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                          Erken Rezervasyon Fırsatı
                        </h3>
                        <p className="mb-4">
                          {showOfferDetails === "early"
                            ? "✓ İndirim kodunuz: ERKEN25"
                            : "Yaz tatili rezervasyonlarında %25'e varan indirimler!"}
                        </p>
                        <button
                          onClick={() => handleOfferClick("early")}
                          className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          {showOfferDetails === "early"
                            ? "Kopyalandı!"
                            : "Detayları Gör"}
                        </button>
                      </div>
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                          Son Dakika Fırsatları
                        </h3>
                        <p className="mb-4">
                          {showOfferDetails === "last"
                            ? "✓ İndirim kodunuz: SONDAKIKA20"
                            : "Bu haftaya özel son dakika fırsatlarını kaçırmayın!"}
                        </p>
                        <button
                          onClick={() => handleOfferClick("last")}
                          className="bg-white text-green-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          {showOfferDetails === "last"
                            ? "Kopyalandı!"
                            : "Detayları Gör"}
                        </button>
                      </div>
                    </div>
                  </section>
                </main>

                <Footer />
              </div>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <>
                <Header onSearch={setSearchQuery} />
                <BlogPost />
                <Footer />
              </>
            }
          />
          <Route
            path="/favorites"
            element={
              <>
                <Header onSearch={setSearchQuery} />
                <Favorites />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
