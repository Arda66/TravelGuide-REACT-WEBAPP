import { useState } from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useTranslation();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First column */}
          <div>
            <h4 className="text-lg font-bold mb-4">
              {t("footer.about.title")}
            </h4>
            <p className="text-gray-400">{t("footer.about.description")}</p>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-bold mb-4">
              {t("footer.newsletter.title")}
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("footer.newsletter.placeholder")}
                className="w-full px-3 py-2 rounded text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
              >
                {t("footer.newsletter.button")}
              </button>
            </form>
            {subscribed && (
              <p className="text-green-400 mt-2">
                {t("footer.newsletter.success")}
              </p>
            )}
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Sosyal Medya</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-400">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-400">
                Twitter
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">İletişim</h4>
            <p className="text-gray-400">Email: info@travelguide.com</p>
            <p className="text-gray-400">Tel: +90 123 456 7890</p>
            <p className="text-gray-400">Adres: İstanbul, Türkiye</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
