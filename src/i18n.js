import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "TravelGuide",
      home: "Home",
      destinations: "Destinations",
      blog: "Blog",
      favorites: "Favorites",
      madeBy: "Made by Arda Dumanoğlu",
      discover: "Discover Your Dream Vacation",
      bestDestinations: "Best destinations at the best prices",
      exploreNow: "Explore Now",
      popularDestinations: "Popular Destinations",
      seeDetails: "See Details",
      searchPlaceholder: "Search destinations...",
      happyCustomers: "Happy Customers",
      testimonials:
        "Experience the unforgettable travel moments from our guests",
      whyChooseUs: "Why Choose Us",
      bestPriceGuarantee: "Best Price Guarantee",
      bestPriceDesc:
        "We offer unforgettable vacation experiences at the best prices",
      specialRoutes: "Special Routes",
      specialRoutesDesc: "Unique routes carefully selected by our expert team",
      support: "24/7 Support",
      supportDesc: "We are with you at every moment of your journey",
      specialOffers: "Special Offers",
      earlyBooking: "Early Booking Offer",
      earlyBookingDesc: "Up to 25% discount on summer vacation bookings!",
      lastMinute: "Last Minute Deals",
      lastMinuteDesc: "Don't miss this week's special last minute deals!",
      seeMore: "See More",
      copied: "Copied!",
      seeDetails: "See Details",
      backToHome: "← Back to Home",
      noFavorites: "You haven't added any favorites yet.",
      viewAll: "View All",
      // Blog related translations
      travelBlog: "Travel Blog",
      readMore: "Read More →",
      allCategories: "All",
      summer: "Summer",
      culture: "Culture",
      gastronomy: "Gastronomy",
      tips: "Travel Tips",
      nature: "Nature",
      adventure: "Adventure",
      testimonials: {
        role1: "Traveler & Photographer",
        role2: "Business Person",
        role3: "Writer",
        quote1:
          "The Cappadocia tour was amazing! Perfect organization and very knowledgeable guide. Will definitely choose again.",
        quote2:
          "Our family Aegean tour exceeded our expectations. There were great activities for children too.",
        quote3:
          "The Eastern Express journey was one of the best experiences of my life. Everything was well thought out.",
        dest1: "Cappadocia Tour",
        dest2: "Aegean Tour",
        dest3: "Eastern Express Tour",
        date1: "March 2024",
        date2: "April 2024",
        date3: "February 2024",
      },
      priceTag: "Starting from $",
      currency: "USD",
      newsletter: {
        title: "Join Our Newsletter",
        placeholder: "Your email address",
        button: "Subscribe",
        success: "Successfully subscribed to our newsletter!",
      },
      footer: {
        about: "Your guide for unforgettable travel experiences.",
        social: "Social Media",
        contact: "Contact",
        rights: "All rights reserved.",
      },
      destinationsContent: {
        title: "Popular Destinations",
        seeMore: "See More",
        notFound: "No destinations found matching your search.",
        tryAgain: "Please try a different search.",
        reservationSuccess: "✓ Your reservation is confirmed! Redirecting...",
        makeReservation: "Make Reservation",
        cappadocia: {
          title: "Cappadocia",
          description:
            "One of Turkey's most impressive natural beauties, Cappadocia offers an unforgettable experience with its fairy chimneys, underground cities and hot air balloon tours.",
          price: "Starting from $100",
          highlights: [
            "Hot Air Balloon",
            "Göreme Open Air Museum",
            "Underground Cities",
            "Cave Hotels",
          ],
        },
        pamukkale: {
          title: "Pamukkale",
          description:
            "Famous for its white travertine terraces and ancient ruins, Pamukkale offers a unique combination of natural and historical beauty.",
          price: "Starting from $80",
          highlights: [
            "Travertine Terraces",
            "Ancient Hierapolis",
            "Cleopatra's Pool",
            "Thermal Springs",
          ],
        },
        ephesus: {
          title: "Ephesus",
          description:
            "One of the best-preserved ancient cities in the Mediterranean, Ephesus showcases remarkable Greco-Roman architecture and history.",
          price: "Starting from $90",
          highlights: [
            "Library of Celsus",
            "Temple of Hadrian",
            "Great Theater",
            "House of Virgin Mary",
          ],
        },
        istanbul: {
          title: "Istanbul",
          description:
            "Where East meets West, Istanbul offers a rich blend of history, culture, and modern life with its iconic landmarks and vibrant atmosphere.",
          price: "Starting from $120",
          highlights: [
            "Hagia Sophia",
            "Blue Mosque",
            "Grand Bazaar",
            "Bosphorus Tour",
          ],
        },
        antalya: {
          title: "Antalya",
          description:
            "With its turquoise waters, ancient cities, and magnificent beaches, Antalya, the pearl of the Mediterranean, is ideal for those seeking both history and beach holidays.",
          price: "Starting from $90",
          highlights: [
            "Kaleiçi Old Town",
            "Düden Waterfalls",
            "Konyaaltı Beach",
            "Aspendos Ancient Theater",
          ],
        },
        mardin: {
          title: "Mardin",
          description:
            "Known as the capital of stone craftsmanship, Mardin takes you on a journey through time with its historical texture, traditional architecture, and unique Mesopotamian landscape.",
          price: "Starting from $85",
          highlights: [
            "Mardin Castle",
            "Deyrulzafaran Monastery",
            "Old Bazaar",
            "Zinciriye Madrasah",
          ],
        },
        gobekli: {
          title: "Göbeklitepe",
          description:
            "Considered the world's oldest temple, Göbeklitepe is called the zero point of history. It offers a unique experience for those interested in archaeology.",
          price: "Starting from $95",
          highlights: [
            "Prehistoric Ruins",
            "Guided Tours",
            "Archaeological Museum",
            "Local Cuisine Experience",
          ],
        },
        nemrut: {
          title: "Mount Nemrut",
          description:
            "Listed as a UNESCO World Heritage site, Mount Nemrut captivates visitors with its giant statues and unique sunrise view.",
          price: "Starting from $110",
          highlights: [
            "Giant Statues",
            "Sunrise and Sunset Views",
            "Commagene Kingdom Ruins",
            "Mountain Hiking",
          ],
        },
      },
      blogContent: {
        title: "Travel Blog",
        categories: {
          all: "All",
          summer: "Summer",
          culture: "Culture Tours",
          gastronomy: "Gastronomy",
          tips: "Travel Tips",
          nature: "Nature",
          adventure: "Adventure",
        },
        posts: {
          seeMore: "See More Posts",
          remaining: "more posts available",
          readMore: "Read More",
          post1: {
            title: "2024 Summer's Top 5 Beaches",
            category: "summer",
            date: "April 15, 2024",
            author: "Ayşe Yılmaz",
            summary:
              "Discover Turkey's most beautiful beaches you must visit this summer...",
          },
          post2: {
            title: "Best Coffee Shops of 2024",
            category: "lifestyle",
            date: "April 20, 2024",
            author: "Mehmet Demir",
            summary: "Explore Istanbul's best coffee spots...",
          },
          post3: {
            title: "Digital Minimalism: Simplifying Modern Life",
            category: "lifestyle",
            date: "April 25, 2024",
            author: "Zeynep Kaya",
            summary: "Tips for minimalist living in the digital age...",
          },
          post4: {
            title: "Budget Travel Tips in 2024",
            category: "tips",
            date: "April 8, 2024",
            author: "Can Yıldız",
            summary:
              "Tips and tricks for budget travelers looking to maximize their travel experience...",
          },
          post5: {
            title: "Hidden Gems of Black Sea",
            category: "nature",
            date: "May 5, 2024",
            author: "Elif Öztürk",
            summary:
              "Explore the undiscovered beauty of Black Sea region's plateaus, forests and unique culture...",
          },
          post6: {
            title: "Hot Air Balloon Experience in Cappadocia",
            category: "adventure",
            date: "May 10, 2024",
            author: "Ahmet Kaya",
            summary:
              "Experience the magical sunrise over Cappadocia's fairy chimneys from a hot air balloon...",
          },
          post7: {
            title: "Mardin: A Historical Journey",
            category: "culture",
            date: "May 15, 2024",
            author: "Sevgi Kılıç",
            summary:
              "Discover the rich history and architecture of Mardin's stone houses and ancient streets...",
          },
          post8: {
            title: "Secret Beaches of Bodrum",
            category: "summer",
            date: "May 20, 2024",
            author: "Ayşe Yılmaz",
            summary:
              "Escape the crowds and discover Bodrum's hidden coves and peaceful beaches...",
          },
          post9: {
            title: "Eastern Express Adventure",
            category: "adventure",
            date: "May 25, 2024",
            author: "Mehmet Demir",
            summary:
              "A magical journey through snowy landscapes on the Eastern Express...",
          },
          post10: {
            title: "Istanbul's Historic Districts and Street Food",
            category: "culture",
            date: "May 30, 2024",
            author: "Zeynep Kaya",
            summary:
              "Explore the historic peninsula while tasting Istanbul's famous street food...",
          },
        },
      },
      blogPost: {
        posts: {
          1: {
            id: 1,
            title: "2024 Summer's Top 5 Beaches",
            category: "summer",
            image:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            date: "April 15, 2024",
            author: "Ayşe Yılmaz",
            authorTitle: "Travel Writer & Photographer",
            readingTime: "8 minutes",
            views: 12500,
            likes: 834,
            tags: ["beach", "summer", "vacation", "travel", "nature"],
            summary:
              "Discover Turkey's most beautiful beaches you must visit this summer...",
            content: `
              <div class="space-y-6">
                <p class="text-lg leading-relaxed">Turkey's magnificent beaches welcome thousands of tourists every year. These paradise corners, which stand out with their unique natural beauties, crystal clear waters, and magnificent beaches, offer an unforgettable holiday experience...</p>
                
                <div class="space-y-8 mt-8">
                  <div>
                    <h3 class="text-2xl font-semibold mb-3">1. Kaputaş Beach - Kaş</h3>
                    <p>With its magnificent turquoise waters and impressive landscape, Kaputaş Beach is one of Turkey's most photogenic spots...</p>
                    <div class="mt-4 space-y-2">
                      <p class="font-medium">🏊‍♂️ Featured Activities:</p>
                      <ul class="list-disc pl-5 space-y-1">
                        <li>Snorkeling to discover colorful marine life</li>
                        <li>Perfect spots for sunset photography</li>
                        <li>Cliff jumping (at safe spots)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            `,
          },
          // ... diğer İngilizce post içerikleri
        },
      },
      whyChooseUs: {
        title: "Why Choose Us?",
        features: {
          priceGuarantee: {
            icon: "🎯",
            title: "Best Price Guarantee",
            description:
              "We offer unforgettable vacation experiences at the best prices",
          },
          specialRoutes: {
            icon: "🎨",
            title: "Special Routes",
            description: "Unique routes carefully selected by our expert team",
          },
          support: {
            icon: "🎉",
            title: "24/7 Support",
            description: "We are with you at every moment of your journey",
          },
        },
      },
      specialOffers: {
        title: "Special Offers",
        earlyBooking: {
          title: "Early Booking Offer",
          description: "Up to 25% discount on summer vacation bookings!",
          buttonText: "See Details",
          code: "✓ Your discount code: EARLY25",
          copied: "Copied!",
        },
        lastMinute: {
          title: "Last Minute Deals",
          description: "Don't miss this week's special last minute deals!",
          buttonText: "See Details",
          code: "✓ Your discount code: LASTMIN20",
          copied: "Copied!",
        },
      },
      titles: {
        testimonials: "Happy Customers",
        testimonialsSubtitle:
          "Experience unforgettable travel moments from our guests",
        popularDestinations: "Popular Destinations",
        travelBlog: "Travel Blog",
      },
      footer: {
        about: {
          title: "TravelGuide",
          description: "Your guide for unforgettable travel experiences.",
        },
        newsletter: {
          title: "Join Our Newsletter",
          placeholder: "Your email address",
          button: "Subscribe",
          success: "Successfully subscribed to our newsletter!",
        },
        social: {
          title: "Social Media",
          facebook: "Facebook",
          instagram: "Instagram",
          twitter: "Twitter",
        },
        contact: {
          title: "Contact",
          email: "Email: info@travelguide.com",
          phone: "Phone: +90 123 456 7890",
          address: "Address: Istanbul, Turkey",
        },
        copyright:
          "© 2024 TravelGuide. Made by Arda Dumanoğlu. All rights reserved.",
      },
    },
  },
  tr: {
    translation: {
      welcome: "TravelGuide",
      home: "Ana Sayfa",
      destinations: "Destinasyonlar",
      blog: "Blog",
      favorites: "Favoriler",
      madeBy: "Made by Arda Dumanoğlu",
      discover: "Hayalinizdeki Tatili Keşfedin",
      bestDestinations: "En güzel destinasyonlar, en uygun fiyatlarla",
      exploreNow: "Hemen Keşfet",
      popularDestinations: "Popüler Destinasyonlar",
      seeDetails: "Detayları Gör",
      searchPlaceholder: "Destinasyon ara...",
      happyCustomers: "Mutlu Müşterilerimiz",
      testimonials:
        "Unutulmaz seyahat deneyimleri yaşayan misafirlerimizin yorumları",
      whyChooseUs: "Neden Bizi Seçmelisiniz?",
      bestPriceGuarantee: "En İyi Fiyat Garantisi",
      bestPriceDesc:
        "En uygun fiyatlarla unutulmaz tatil deneyimleri sunuyoruz",
      specialRoutes: "Özel Seçilmiş Rotalar",
      specialRoutesDesc:
        "Uzman ekibimiz tarafından özenle seçilmiş benzersiz rotalar",
      support: "7/24 Destek",
      supportDesc: "Seyahatinizin her anında yanınızdayız",
      specialOffers: "Özel Fırsatlar",
      earlyBooking: "Erken Rezervasyon Fırsatı",
      earlyBookingDesc: "Yaz tatili rezervasyonlarında %25'e varan indirimler!",
      lastMinute: "Son Dakika Fırsatları",
      lastMinuteDesc: "Bu haftaya özel son dakika fırsatlarını kaçırmayın!",
      seeMore: "Daha Fazla Gör",
      copied: "Kopyalandı!",
      seeDetails: "Detayları Gör",
      backToHome: "← Geri Dön",
      noFavorites: "Henüz favori eklemediniz.",
      viewAll: "Tümünü Gör",
      // Blog related translations
      travelBlog: "Seyahat Blogu",
      readMore: "Devamını Oku →",
      allCategories: "Tümü",
      summer: "Yaz Tatili",
      culture: "Kültür Turları",
      gastronomy: "Gastronomi",
      tips: "Seyahat İpuçları",
      nature: "Doğa",
      adventure: "Macera",
      testimonials: {
        role1: "Gezgin & Fotoğrafçı",
        role2: "İş İnsanı",
        role3: "Yazar",
        quote1:
          "Kapadokya turu muhteşemdi! Organizasyon kusursuzdu ve rehberimiz çok bilgiliydi. Kesinlikle tekrar tercih edeceğim.",
        quote2:
          "Ailece çıktığımız Ege turu beklentilerimizin çok üzerindeydi. Çocuklar için de çok keyifli aktiviteler vardı.",
        quote3:
          "Doğu Ekspresi yolculuğu hayatımın en güzel deneyimlerinden biriydi. Her şey düşünülmüştü.",
        dest1: "Kapadokya Turu",
        dest2: "Ege Turu",
        dest3: "Doğu Ekspresi Turu",
        date1: "Mart 2024",
        date2: "Nisan 2024",
        date3: "Şubat 2024",
      },
      priceTag: "Başlangıç fiyatı $",
      currency: "USD",
      newsletter: {
        title: "Bültenimize Katılın",
        placeholder: "E-posta adresiniz",
        button: "Abone Ol",
        success: "Bültenimize başarıyla abone oldunuz!",
      },
      footer: {
        about: "Unutulmaz seyahat deneyimleri için rehberiniz.",
        social: "Sosyal Medya",
        contact: "İletişim",
        rights: "Tüm hakları saklıdır.",
      },
      destinationsContent: {
        title: "Popüler Destinasyonlar",
        seeMore: "Daha Fazla Gör",
        notFound: "Aradığınız kriterlere uygun destinasyon bulunamadı.",
        tryAgain: "Lütfen farklı bir arama yapmayı deneyin.",
        reservationSuccess: "✓ Rezervasyonunuz alındı! Yönlendiriliyorsunuz...",
        makeReservation: "Rezervasyon Yap",
        cappadocia: {
          title: "Kapadokya",
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
        pamukkale: {
          title: "Pamukkale",
          description:
            "Beyaz traverten terasları ve antik kalıntılarıyla ünlü Pamukkale, doğal ve tarihi güzelliklerin eşsiz bir birleşimini sunuyor.",
          price: "1600₺'den başlayan fiyatlarla",
          highlights: [
            "Traverten Terasları",
            "Antik Hierapolis",
            "Kleopatra Havuzu",
            "Termal Kaynaklar",
          ],
        },
        ephesus: {
          title: "Efes",
          description:
            "Akdeniz'in en iyi korunmuş antik kentlerinden biri olan Efes, etkileyici Greco-Romen mimarisi ve tarihiyle göz kamaştırıyor.",
          price: "1800₺'den başlayan fiyatlarla",
          highlights: [
            "Celsus Kütüphanesi",
            "Hadrian Tapınağı",
            "Büyük Tiyatro",
            "Meryem Ana Evi",
          ],
        },
        istanbul: {
          title: "İstanbul",
          description:
            "Doğu ile Batı'nın buluştuğu İstanbul, ikonik yapıları ve canlı atmosferiyle tarih, kültür ve modern yaşamın zengin bir karışımını sunuyor.",
          price: "2400₺'den başlayan fiyatlarla",
          highlights: [
            "Ayasofya",
            "Sultan Ahmet Camii",
            "Kapalı Çarşı",
            "Boğaz Turu",
          ],
        },
        antalya: {
          title: "Antalya",
          description:
            "Turkuaz suları, antik kentleri ve muhteşem plajlarıyla Akdeniz'in incisi Antalya, hem tarih hem deniz tatili arayanlar için ideal.",
          price: "1800₺'den başlayan fiyatlarla",
          highlights: [
            "Kaleiçi",
            "Düden Şelalesi",
            "Konyaaltı Plajı",
            "Aspendos Antik Tiyatrosu",
          ],
        },
        mardin: {
          title: "Mardin",
          description:
            "Taş işçiliğinin başkenti Mardin, tarihi dokusu, geleneksel mimarisi ve eşsiz Mezopotamya manzarasıyla zamanda yolculuğa çıkarıyor.",
          price: "1700₺'den başlayan fiyatlarla",
          highlights: [
            "Mardin Kalesi",
            "Deyrulzafaran Manastırı",
            "Eski Çarşı",
            "Zinciriye Medresesi",
          ],
        },
        gobekli: {
          title: "Göbeklitepe",
          description:
            "Dünyanın en eski tapınağı olarak kabul edilen Göbeklitepe, tarihin sıfır noktası olarak adlandırılıyor. Arkeolojiye ilgi duyanlar için eşsiz bir deneyim sunuyor.",
          price: "1900₺'den başlayan fiyatlarla",
          highlights: [
            "Tarih Öncesi Kalıntılar",
            "Rehberli Turlar",
            "Arkeoloji Müzesi",
            "Yerel Mutfak Deneyimi",
          ],
        },
        nemrut: {
          title: "Nemrut Dağı",
          description:
            "UNESCO Dünya Mirası Listesi'nde yer alan Nemrut Dağı, dev heykelleri ve eşsiz gün doğumu manzarasıyla ziyaretçilerini büyülüyor.",
          price: "2200₺'den başlayan fiyatlarla",
          highlights: [
            "Dev Heykeller",
            "Gün Doğumu ve Batımı",
            "Kommagene Krallığı Kalıntıları",
            "Dağ Yürüyüşleri",
          ],
        },
      },
      blogContent: {
        title: "Seyahat Blogu",
        categories: {
          all: "Tümü",
          summer: "Yaz Tatili",
          culture: "Kültür Turları",
          gastronomy: "Gastronomi",
          tips: "Seyahat İpuçları",
          nature: "Doğa",
          adventure: "Macera",
        },
        posts: {
          seeMore: "Daha Fazla Göster",
          remaining: "blog daha var",
          readMore: "Devamını Oku",
          post1: {
            title: "2024 Yazının En Popüler 5 Plajı",
            category: "summer",
            date: "15 Nisan 2024",
            author: "Ayşe Yılmaz",
            summary:
              "Bu yaz mutlaka ziyaret etmeniz gereken Türkiye'nin en güzel plajlarını sizler için derledik...",
          },
          post2: {
            title: "2024'ün En İyi Kahve Mekanları",
            category: "lifestyle",
            date: "20 Nisan 2024",
            author: "Mehmet Demir",
            summary: "İstanbul'un en iyi kahve duraklarını keşfedin...",
          },
          post3: {
            title: "Dijital Minimalizm: Modern Yaşamda Sadeleşme",
            category: "lifestyle",
            date: "25 Nisan 2024",
            author: "Zeynep Kaya",
            summary: "Dijital çağda minimalist yaşam için ipuçları...",
          },
          post4: {
            title: "Minimum Bütçeyle Maximum Tatil",
            category: "tips",
            date: "8 Nisan 2024",
            author: "Can Yıldız",
            summary:
              "Ekonomik tatil yapmak isteyenler için püf noktaları ve öneriler...",
          },
          post5: {
            title: "Karadeniz'in Saklı Cennetleri",
            category: "nature",
            date: "5 Mayıs 2024",
            author: "Elif Öztürk",
            summary:
              "Karadeniz'in eşsiz doğasını ve saklı kalmış güzelliklerini keşfedin...",
          },
          post6: {
            title: "Kapadokya'da Balon Turu Deneyimi",
            category: "adventure",
            date: "10 Mayıs 2024",
            author: "Ahmet Kaya",
            summary:
              "Kapadokya'nın peri bacaları üzerinde gün doğumunu izlemenin büyüleyici deneyimi...",
          },
          post7: {
            title: "Mardin'in Tarihi Dokusu ve Kültürü",
            category: "culture",
            date: "15 Mayıs 2024",
            author: "Sevgi Kılıç",
            summary:
              "Taş evleri, dar sokakları ve zengin kültürel mirasıyla Mardin'i keşfedin...",
          },
          post8: {
            title: "Bodrum'un Gizli Koyları",
            category: "summer",
            date: "20 Mayıs 2024",
            author: "Ayşe Yılmaz",
            summary:
              "Bodrum'un kalabalıktan uzak, huzurlu koylarını keşfedin...",
          },
          post9: {
            title: "Kars'ta Doğu Ekspresi ile Masalsı Yolculuk",
            category: "adventure",
            date: "25 Mayıs 2024",
            author: "Mehmet Demir",
            summary:
              "Doğu Ekspresi ile Kars'ın büyülü atmosferini deneyimleyin...",
          },
          post10: {
            title: "İstanbul'un Tarihi Semtleri ve Sokak Lezzetleri",
            category: "culture",
            date: "30 Mayıs 2024",
            author: "Zeynep Kaya",
            summary:
              "Tarihi yarımada ve sokak lezzetlerinin izinde unutulmaz bir gezi...",
          },
        },
      },
      blogPost: {
        posts: {
          1: {
            id: 1,
            title: "2024 Yazının En Popüler 5 Plajı",
            category: "summer",
            image:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            date: "15 Nisan 2024",
            author: "Ayşe Yılmaz",
            authorTitle: "Seyahat Yazarı & Fotoğrafçı",
            readingTime: "8 dakika",
            views: 12500,
            likes: 834,
            tags: ["plaj", "yaz", "tatil", "gezi", "doğa"],
            summary:
              "Bu yaz mutlaka ziyaret etmeniz gereken Türkiye'nin en güzel plajlarını sizler için derledik...",
            content: `
              <div class="space-y-6">
                <p class="text-lg leading-relaxed">Türkiye'nin muhteşem plajları her yıl binlerce turisti ağırlıyor. Eşsiz doğal güzellikleri, berrak suları ve muhteşem kumsallarıyla öne çıkan bu plajlar, unutulmaz bir tatil deneyimi sunuyor...</p>
                
                <div class="space-y-8 mt-8">
                  <div>
                    <h3 class="text-2xl font-semibold mb-3">1. Kaputaş Plajı - Kaş</h3>
                    <p>Muhteşem turkuaz suları ve etkileyici manzarasıyla Kaputaş Plajı, Türkiye'nin en fotojenik noktalarından biri...</p>
                    <div class="mt-4 space-y-2">
                      <p class="font-medium">🏊‍♂️ Öne Çıkan Aktiviteler:</p>
                      <ul class="list-disc pl-5 space-y-1">
                        <li>Şnorkelle dalış yapabilir, renkli deniz yaşamını keşfedebilirsiniz</li>
                        <li>Gün batımı fotoğrafçılığı için ideal manzaralar</li>
                        <li>Kayalıklardan atlayış (güvenli noktalarda)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            `,
          },
          // ... diğer Türkçe post içerikleri
        },
      },
      whyChooseUs: {
        title: "Neden Bizi Seçmelisiniz?",
        features: {
          priceGuarantee: {
            icon: "🎯",
            title: "En İyi Fiyat Garantisi",
            description:
              "En uygun fiyatlarla unutulmaz tatil deneyimleri sunuyoruz",
          },
          specialRoutes: {
            icon: "🎨",
            title: "Özel Seçilmiş Rotalar",
            description:
              "Uzman ekibimiz tarafından özenle seçilmiş benzersiz rotalar",
          },
          support: {
            icon: "🎉",
            title: "7/24 Destek",
            description: "Seyahatinizin her anında yanınızdayız",
          },
        },
      },
      specialOffers: {
        title: "Özel Fırsatlar",
        earlyBooking: {
          title: "Erken Rezervasyon Fırsatı",
          description: "Yaz tatili rezervasyonlarında %25'e varan indirimler!",
          buttonText: "Detayları Gör",
          code: "✓ İndirim kodunuz: ERKEN25",
          copied: "Kopyalandı!",
        },
        lastMinute: {
          title: "Son Dakika Fırsatları",
          description: "Bu haftaya özel son dakika fırsatlarını kaçırmayın!",
          buttonText: "Detayları Gör",
          code: "✓ İndirim kodunuz: SONDAKIKA20",
          copied: "Kopyalandı!",
        },
      },
      titles: {
        testimonials: "Mutlu Müşterilerimiz",
        testimonialsSubtitle:
          "Unutulmaz seyahat deneyimleri yaşayan misafirlerimizin yorumları",
        popularDestinations: "Popüler Destinasyonlar",
        travelBlog: "Seyahat Blogu",
      },
      footer: {
        about: {
          title: "TravelGuide",
          description: "Unutulmaz seyahat deneyimleri için rehberiniz.",
        },
        newsletter: {
          title: "Bültenimize Katılın",
          placeholder: "E-posta adresiniz",
          button: "Abone Ol",
          success: "Bültenimize başarıyla abone oldunuz!",
        },
        social: {
          title: "Sosyal Medya",
          facebook: "Facebook",
          instagram: "Instagram",
          twitter: "Twitter",
        },
        contact: {
          title: "İletişim",
          email: "Email: info@travelguide.com",
          phone: "Tel: +90 123 456 7890",
          address: "Adres: İstanbul, Türkiye",
        },
        copyright:
          "© 2024 TravelGuide. Made by Arda Dumanoğlu. Tüm hakları saklıdır.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // changed from 'tr' to 'en'
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["navigator", "localStorage", "cookie", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
