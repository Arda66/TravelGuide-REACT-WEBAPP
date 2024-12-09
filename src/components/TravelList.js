import { useState, useMemo, memo } from "react";
import { useFavorites } from "../contexts/FavoritesContext";
import ShareButtons from "./ShareButtons";
import { useTranslation } from "react-i18next";

const DestinationCard = memo(({ dest, onSelect }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite("destinations", dest.id);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={dest.image + "?w=400&q=75"}
          alt={dest.title}
          className="w-full h-48 object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x200?text=Loading...";
          }}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite("destinations", dest);
          }}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{dest.title}</h3>
        <p className="text-gray-600 line-clamp-2">{dest.description}</p>
        <p className="text-blue-600 font-semibold my-2">{dest.price}</p>
        <button
          onClick={() => onSelect(dest)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Detayları Gör
        </button>
      </div>
    </div>
  );
});

function TravelList({ searchQuery }) {
  const { t } = useTranslation();
  const [selectedDest, setSelectedDest] = useState(null);
  const [reserved, setReserved] = useState(false);
  const [showAll, setShowAll] = useState(false); // 'Daha Fazla Gör' durumu

  const destinations = [
    {
      id: 1,
      title: t("destinationsContent.cappadocia.title"),
      description: t("destinationsContent.cappadocia.description"),
      price: t("destinationsContent.cappadocia.price"),
      image: "https://images.unsplash.com/photo-1647768283986-8442b7bc5c43",
      highlights: t("destinationsContent.cappadocia.highlights", {
        returnObjects: true,
      }),
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
      price: "1800���'den başlayan fiyatlarla",
      highlights: [
        "Mardin Kalesi",
        "Deyrulzafaran Manastırı",
        "Eski Çarşı",
        "Zinciriye Medresesi",
      ],
    },
    {
      id: 6,
      title: "Göbeklitepe",
      image: "https://images.unsplash.com/photo-1515442261606-59c7b2f1e379",
      description:
        "Dünyanın en eski tapınağı olarak kabul edilen Göbeklitepe, tarihin sıfır noktası olarak adlandırılıyor. Arkeolojiye ilgi duyanlar için eşsiz bir deneyim sunuyor.",
      price: "2300₺'den başlayan fiyatlarla",
      highlights: [
        "Tarih Öncesi Kalıntılar",
        "Rehberli Turlar",
        "Arkeoloji Müzesi",
        "Yerel Mutfak Deneyimi",
      ],
    },
    {
      id: 7,
      title: "Pamukkale",
      image: "https://images.unsplash.com/photo-1585325701954-677ab1ec5e9a",
      description:
        "Bembeyaz travertenleri ve sıcak termal sularıyla ünlü Pamukkale, doğanın mucizesini gözler önüne seriyor.",
      price: "1900₺'den başlayan fiyatlarla",
      highlights: [
        "Travertenler",
        "Hierapolis Antik Kenti",
        "Kleopatra Havuzu",
        "Termal Oteller",
      ],
    },
    {
      id: 8,
      title: "Nemrut Dağı",
      image: "https://images.unsplash.com/photo-1582560478080-1a20bb05ca84",
      description:
        "UNESCO Dünya Mirası Listesi'nde yer alan Nemrut Dağı, dev heykelleri ve eşsiz gün doğumu manzarasıyla ziyaretçilerini büyülüyor.",
      price: "2100₺'den başlayan fiyatlarla",
      highlights: [
        "Dev Heykeller",
        "Gün Doğumu ve Batımı",
        "Kommagene Krallığı Kalıntıları",
        "Dağ Yürüyüşleri",
      ],
    },
  ];

  const [itemsToShow, setItemsToShow] = useState(5); // 5 öğe + 1 "Daha Fazla Gör" butonu

  const handleReservation = () => {
    setReserved(true);
    setTimeout(() => {
      setReserved(false);
      setSelectedDest(null);
    }, 2000);
  };

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const filteredDestinations = useMemo(
    () =>
      destinations.filter(
        (dest) =>
          dest.title.toLowerCase().includes(searchQuery?.toLowerCase() || "") ||
          dest.description
            .toLowerCase()
            .includes(searchQuery?.toLowerCase() || "")
      ),
    [searchQuery]
  );

  const displayedDestinations = useMemo(() => {
    const filtered = destinations.filter(
      (dest) =>
        dest.title.toLowerCase().includes(searchQuery?.toLowerCase() || "") ||
        dest.description
          .toLowerCase()
          .includes(searchQuery?.toLowerCase() || "")
    );
    return showAll ? filtered : filtered.slice(0, itemsToShow);
  }, [searchQuery, showAll, itemsToShow]);

  return (
    <>
      {filteredDestinations.length === 0 ? (
        <div className="text-center text-gray-600 py-8">
          <p className="text-xl">
            Aradığınız kriterlere uygun destinasyon bulunamadı.
          </p>
          <p className="mt-2">Lütfen farklı bir arama yapmayı deneyin.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              dest={dest}
              onSelect={setSelectedDest}
            />
          ))}
          {!showAll && destinations.length > itemsToShow && (
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
              onClick={handleSeeMore}
            >
              <div className="p-4 text-center">
                <div className="text-4xl mb-2">🌟</div>
                <h3 className="text-xl font-bold mb-2">Daha Fazla Gör</h3>
                <p className="text-gray-600">
                  {destinations.length - itemsToShow} destinasyon daha var
                </p>
              </div>
            </div>
          )}
        </div>
      )}

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
              src={selectedDest.image + "?w=800&q=80"}
              alt={selectedDest.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
              loading="lazy"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/800x400?text=Loading...";
              }}
            />
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">{selectedDest.title}</h2>
              <ShareButtons
                url={window.location.origin + "/#destinations"}
                title={`${selectedDest.title} - TravelGuide'da keşfet!`}
              />
            </div>
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

export default memo(TravelList);
