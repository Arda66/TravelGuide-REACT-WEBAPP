import { useState } from "react";
import Header from "./components/Header";
import TravelList from "./components/TravelList";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPost from "./components/BlogPost";

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

  return (
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
                    'url("https://images.unsplash.com/photo-1499856871958-5b9627545d1a")',
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
                        <h3 className="text-xl font-bold mb-2">7/24 Destek</h3>
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
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
