import { useState } from "react";

function TravelList({ searchQuery }) {
  const [selectedDest, setSelectedDest] = useState(null);
  const [reserved, setReserved] = useState(false);

  const destinations = [
    {
      id: 1,
      title: "Kapadokya",
      image: "https://images.unsplash.com/photo-1647768283986-8442b7bc5c43",
      description:
        "Türkiye'nin en etkileyici doğal güzelliklerinden biri olan Kapadokya, peri bacaları, yeraltı şehirleri ve sıcak hava balon turlarıyla unutulmaz bir deneyim sunuyor.",
      price: "2000₺'den başlayan fiyatlarla",
      highlights: [
        "Sıcak Hava Balonu",
        "Göreme Açık Hava Müzesi",
        "Yeraltı Şehirleri",
        "Kaya Oteller",
      ],
    },
    {
      id: 2,
      title: "Antalya",
      image: "https://images.unsplash.com/photo-1711712667984-5b9b291272c0",
      description:
        "Turkuaz suları, antik kentleri ve muhteşem plajlarıyla Akdeniz'in incisi Antalya, hem tarih hem deniz tatili arayanlar için ideal.",
      price: "1500₺'den başlayan fiyatlarla",
      highlights: [
        "Kaleiçi",
        "Düden Şelalesi",
        "Konyaaltı Plajı",
        "Aspendos Antik Tiyatrosu",
      ],
    },
    {
      id: 3,
      title: "İstanbul",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b",
      description:
        "İki kıtayı birleştiren şehir İstanbul, tarihi yarımadası, boğaz manzarası ve zengin kültürel mirası ile dünyanın en özel şehirlerinden biri.",
      price: "2500₺'den başlayan fiyatlarla",
      highlights: ["Ayasofya", "Topkapı Sarayı", "Kapalıçarşı", "Boğaz Turu"],
    },
    {
      id: 4,
      title: "Bodrum",
      image: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe",
      description:
        "Eğlence ve lüksün buluştuğu Bodrum, masmavi koyları, begonvil süslü sokakları ve canlı gece hayatıyla unutulmaz bir tatil vadediyor.",
      price: "2200₺'den başlayan fiyatlarla",
      highlights: [
        "Bodrum Kalesi",
        "Halikarnas Mozolesi",
        "Bardakçı Koyu",
        "Yalıkavak Marina",
      ],
    },
    {
      id: 5,
      title: "Mardin",
      image: "https://images.unsplash.com/photo-1710835644558-10c4774c0795",
      description:
        "Taş işçiliğinin başkenti Mardin, tarihi dokusu, geleneksel mimarisi ve eşsiz Mezopotamya manzarasıyla zamanda yolculuğa çıkarıyor.",
      price: "1800₺'den başlayan fiyatlarla",
      highlights: [
        "Mardin Kalesi",
        "Deyrulzafaran Manastırı",
        "Eski Çarşı",
        "Zinciriye Medresesi",
      ],
    },
  ];

  const handleReservation = () => {
    setReserved(true);
    setTimeout(() => {
      setReserved(false);
      setSelectedDest(null);
    }, 2000);
  };

  const filteredDestinations = destinations.filter(
    (dest) =>
      dest.title.toLowerCase().includes(searchQuery?.toLowerCase() || "") ||
      dest.description.toLowerCase().includes(searchQuery?.toLowerCase() || "")
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{dest.title}</h3>
              <p className="text-gray-600 line-clamp-2">{dest.description}</p>
              <p className="text-blue-600 font-semibold my-2">{dest.price}</p>
              <button
                onClick={() => setSelectedDest(dest)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Detayları Gör
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Improved Modal */}
      {selectedDest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setSelectedDest(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <span className="text-gray-600">×</span>
            </button>
            <img
              src={selectedDest.image}
              alt={selectedDest.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">{selectedDest.title}</h2>
            <p className="text-gray-600 mb-4">{selectedDest.description}</p>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Öne Çıkanlar:</h3>
              <ul className="list-disc list-inside">
                {selectedDest.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-600">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-blue-600 font-bold text-lg">
              {selectedDest.price}
            </p>
            {!reserved ? (
              <button
                onClick={handleReservation}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Rezervasyon Yap
              </button>
            ) : (
              <div className="mt-4 text-green-600 font-bold">
                ✓ Rezervasyonunuz alındı! Yönlendiriliyorsunuz...
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default TravelList;
