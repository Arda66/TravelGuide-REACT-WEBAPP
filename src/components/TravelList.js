import { useState, useMemo, memo } from "react";
import { useFavorites } from "../contexts/FavoritesContext";
import ShareButtons from "./ShareButtons";
import { useTranslation } from "react-i18next";

const DestinationCard = memo(({ dest, onSelect, t }) => {
  // t'yi props olarak alıyoruz
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
          {t("seeDetails")} {/* Burayı çeviri ile güncelliyoruz */}
        </button>
      </div>
    </div>
  );
});

function TravelList({ searchQuery }) {
  const { t, i18n } = useTranslation(); // i18n'i de alalım
  const [selectedDest, setSelectedDest] = useState(null);
  const [reserved, setReserved] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(5);

  // Fonksiyonu destinations useMemo'sundan önce tanımlıyoruz
  const getDestinationImage = (key) => {
    const images = {
      cappadocia:
        "https://images.unsplash.com/photo-1647768283986-8442b7bc5c43",
      antalya: "https://images.unsplash.com/photo-1711712667984-5b9b291272c0",
      istanbul: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b",
      pamukkale: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe",
      mardin: "https://images.unsplash.com/photo-1710835644558-10c4774c0795",
      gobekli: "https://images.unsplash.com/photo-1581921171595-c27a4137d868",
      ephesus: "https://images.unsplash.com/photo-1680191572004-4cd142ef7eeb",
      nemrut: "https://images.unsplash.com/photo-1642667857358-aeb08be02e81",
    };
    return images[key];
  };

  // Destinations array'ini kaldırıp, destinasyonları dinamik olarak oluşturalım
  const destinations = useMemo(() => {
    const destinationKeys = [
      "cappadocia",
      "antalya",
      "istanbul",
      "pamukkale",
      "mardin",
      "gobekli",
      "ephesus",
      "nemrut",
    ];

    return destinationKeys.map((key, index) => ({
      id: index + 1,
      title: t(`destinationsContent.${key}.title`),
      description: t(`destinationsContent.${key}.description`),
      price: t(`destinationsContent.${key}.price`),
      image: getDestinationImage(key), // Bu fonksiyonu aşağıda tanımlayacağız
      highlights: t(`destinationsContent.${key}.highlights`, {
        returnObjects: true,
      }),
    }));
  }, [t, i18n.language]); // i18n.language'i dependency olarak ekliyoruz

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
    [searchQuery, destinations, i18n.language] // destinations ve i18n.language'i ekledik
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
  }, [searchQuery, showAll, itemsToShow, destinations, i18n.language]); // destinations ve i18n.language'i ekledik

  return (
    <>
      {filteredDestinations.length === 0 ? (
        <div className="text-center text-gray-600 py-8">
          <p className="text-xl">{t("destinationsContent.notFound")}</p>
          <p className="mt-2">{t("destinationsContent.tryAgain")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              dest={dest}
              onSelect={setSelectedDest}
              t={t} // t fonksiyonunu prop olarak geçiyoruz
            />
          ))}
          {!showAll && destinations.length > itemsToShow && (
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
              onClick={handleSeeMore}
            >
              <div className="p-4 text-center">
                <div className="text-4xl mb-2">🌟</div>
                <h3 className="text-xl font-bold mb-2">{t("seeMore")}</h3>
                <p className="text-gray-600">
                  {destinations.length - itemsToShow}{" "}
                  {t("destinationsContent.seeMore")}
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
              <h3 className="font-bold mb-2">{t("highlights")}:</h3>{" "}
              {/* Başlığı çeviri ile güncelliyoruz */}
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
                {t("destinationsContent.makeReservation")}
              </button>
            ) : (
              <div className="mt-4 text-green-600 font-bold">
                {t("destinationsContent.reservationSuccess")}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default memo(TravelList);
