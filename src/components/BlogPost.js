import { useParams, Link } from "react-router-dom";
import ShareButtons from "./ShareButtons";

function BlogPost() {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "2024 Yazının En Popüler 5 Plajı",
      category: "summer",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      date: "15 Nisan 2024",
      author: "Ayşe Yılmaz",
      authorTitle: "Seyahat Yazarı & Fotoğrafçı",
      readingTime: "8 dakika",
      views: 12500,
      likes: 834,
      tags: ["plaj", "yaz", "tatil", "gezi", "doğa"],
      summary:
        "Bu yaz mutlaka ziyaret etmeniz gereken Türkiye'nin en güzel plajlarını sizler için derledik. Eşsiz manzaralar ve benzersiz deneyimler sizi bekliyor...",
      content: `
          <div class="space-y-6">
            <p class="text-lg leading-relaxed">Türkiye'nin muhteşem plajları her yıl binlerce turisti ağırlıyor. Eşsiz doğal güzellikleri, berrak suları ve muhteşem kumsallarıyla öne çıkan bu plajlar, unutulmaz bir tatil deneyimi sunuyor. 2024 yazında popülerliği artacak olan bu cennet köşeleri, sizler için detaylıca araştırdık ve deneyimledik.</p>
            
            <div class="space-y-8 mt-8">
              <div>
                <h3 class="text-2xl font-semibold mb-3">1. Kaputaş Plajı - Kaş</h3>
                <p>Muhteşem turkuaz suları ve etkileyici manzarasıyla Kaputaş Plajı, Türkiye'nin en fotojenik noktalarından biri. Dik merdivenlerle inilen plaj, doğal güzelliğini korumayı başarmış nadir yerlerden. Berrak suları ve çevresindeki kayalık yapı, ziyaretçilere benzersiz bir deneyim sunuyor.</p>
                <div class="mt-4 space-y-2">
                  <p class="font-medium">🏊‍♂️ Öne Çıkan Aktiviteler:</p>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Şnorkelle dalış yapabilir, renkli deniz yaşamını keşfedebilirsiniz</li>
                    <li>Gün batımı fotoğrafçılığı için ideal manzaralar yakalayabilirsiniz</li>
                    <li>Kayalıklardan atlayış yapabilirsiniz (güvenli noktalarda)</li>
                  </ul>
                  <p class="font-medium mt-4">🎯 Pratik Bilgiler:</p>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>En ideal ziyaret zamanı: Haziran-Eylül arası</li>
                    <li>Giriş ücreti: Ücretsiz</li>
                    <li>Park yeri mevcut</li>
                    <li>Plaj şemsiyesi ve şezlong kiralama imkanı var</li>
                  </ul>
                </div>
              </div>
              
              <!-- Diğer Plajlar Buraya Eklenebilir -->
              
            </div>
            
            <div class="mt-8 space-y-4">
              <h3 class="text-xl font-semibold">Ziyaret Öncesi Öneriler</h3>
              <div class="bg-blue-50 p-6 rounded-lg space-y-3">
                <p class="font-medium">✅ Kontrol Listesi:</p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Plajların güncel durumunu ve hava koşullarını kontrol edin</li>
                  <li>Yüksek sezonda erken saatlerde ziyaret etmeyi tercih edin</li>
                  <li>Doğal yaşamı korumak için çevre dostu güneş kremleri kullanın</li>
                  <li>Değerli eşyalarınız için kilitli dolap hizmeti olup olmadığını öğrenin</li>
                  <li>Bazı plajlarda kredi kartı geçmeyebilir, yanınızda nakit bulundurun</li>
                </ul>
              </div>
            </div>
          </div>
        `,
    },
    {
      id: 2,
      title: "2024'ün En İyi Kahve Mekanları",
      category: "lifestyle",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      date: "20 Nisan 2024",
      author: "Mehmet Demir",
      authorTitle: "Kahve Tutkunu & Blogger",
      readingTime: "7 dakika",
      views: 9800,
      likes: 620,
      tags: ["kahve", "lifestyle", "İstanbul", "mekan", "kültür"],
      summary: "İstanbul'un en iyi kahve duraklarını keşfedin...",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">Kahve tutkunları için İstanbul'un en özel mekanlarını derledik. Her biri kendine özgü atmosferi ve özel kahve seçenekleriyle öne çıkan bu mekanlar, gerçek kahve deneyimi arayanlar için vazgeçilmez duraklar haline geldi. İşte 2024'ün en iyi kahve mekanları:</p>
          
          <div class="space-y-8 mt-8">
            <div>
              <h3 class="text-2xl font-semibold mb-3">1. Coffee Brew Lab - Karaköy</h3>
              <p>Profesyonel baristalar tarafından özenle hazırlanan üçüncü dalga kahveleriyle ünlü. Kendi kavurdukları çekirdekleri ve farklı demleme yöntemleriyle benzersiz bir deneyim sunuyor.</p>
              <div class="mt-4 space-y-2">
                <p class="font-medium">☕ Öne Çıkan Özellikler:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Espresso bazlı özel karışımlar</li>
                  <li>V60, Aeropress gibi alternatif demleme yöntemleri</li>
                  <li>Atölye çalışmaları ve kahve tadım etkinlikleri</li>
                </ul>
                <p class="font-medium mt-4">📍 Pratik Bilgiler:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Adres: Karaköy, İstanbul</li>
                  <li>Çalışma Saatleri: 08:00 - 22:00</li>
                  <li>Wi-Fi ve Elektrik Prizleri Mevcut</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 class="text-2xl font-semibold mb-3">2. Ministry of Coffee - Nişantaşı</h3>
              <p>Minimalist tasarımı ve uzman kadrosuyla dikkat çeken mekan, dünya çapında özenle seçilmiş kahve çekirdekleriyle misafirlerini ağırlıyor.</p>
              <div class="mt-4 space-y-2">
                <p class="font-medium">🌟 Öne Çıkan Özellikler:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Single Origin kahveler</li>
                  <li>El yapımı tatlı ve atıştırmalıklar</li>
                  <li>Sanatsal ve rahat atmosfer</li>
                </ul>
                <p class="font-medium mt-4">📍 Pratik Bilgiler:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Adres: Nişantaşı, İstanbul</li>
                  <li>Çalışma Saatleri: 09:00 - 23:00</li>
                  <li>Rezervasyon Gerekmiyor</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 class="text-2xl font-semibold mb-3">3. Coffee Department - Bebek</h3>
              <p>Boğaz manzarasına karşı kahvenizi yudumlayabileceğiniz şık bir mekan. Ev yapımı tatlıları ve özel kahve menüsüyle öne çıkıyor.</p>
              <div class="mt-4 space-y-2">
                <p class="font-medium">🏞️ Öne Çıkan Özellikler:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Boğaz manzaralı teras</li>
                  <li>Ev yapımı kek ve kurabiyeler</li>
                  <li>Özel latte sanatları</li>
                </ul>
                <p class="font-medium mt-4">📍 Pratik Bilgiler:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Adres: Bebek, İstanbul</li>
                  <li>Çalışma Saatleri: 07:00 - 21:00</li>
                  <li>Kedilere Açık Alan</li>
                </ul>
              </div>
            </div>
            
            <!-- Diğer Kahve Mekanları Buraya Eklenebilir -->
            <div>
              <h3 class="text-2xl font-semibold mb-3">4. Coffee Co - Kadıköy</h3>
              <p>Vintage dekorasyonu ve sıcak atmosferiyle dikkat çeken mekan, seçkin kahve çeşitleri ve ev yapımı tatlılarıyla ön plana çıkıyor.</p>
              <div class="mt-4 space-y-2">
                <p class="font-medium">🌿 Öne Çıkan Özellikler:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Organik kahve çeşitleri</li>
                  <li>Vegan tatlı seçenekleri</li>
                  <li>Kitap okuma köşesi</li>
                </ul>
                <p class="font-medium mt-4">📍 Pratik Bilgiler:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Adres: Kadıköy, İstanbul</li>
                  <li>Çalışma Saatleri: 08:30 - 22:30</li>
                  <li>Sessiz Çalışma Alanı Mevcut</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="mt-8 space-y-4">
            <h3 class="text-xl font-semibold">Kahve Keyfi İçin İpuçları</h3>
            <div class="bg-green-50 p-6 rounded-lg space-y-3">
              <p class="font-medium">✅ İpuçları:</p>
              <ul class="list-disc pl-5 space-y-2">
                <li>Kahve seçerken taze çekirdekleri tercih edin</li>
                <li>Demleme yöntemini kahvenizin türüne göre seçin</li>
                <li>İyi bir kahve makinesi veya demleme ekipmanı kullanın</li>
                <li>Kahvenizi demledikten hemen sonra tüketmeye özen gösterin</li>
                <li>Mekanların özel kahve etkinliklerini takip edin</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 3,
      title: "Dijital Minimalizm: Modern Yaşamda Sadeleşme",
      category: "lifestyle",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103",
      date: "25 Nisan 2024",
      author: "Zeynep Kaya",
      authorTitle: "Teknoloji ve Yaşam Koçu",
      readingTime: "6 dakika",
      views: 7600,
      likes: 540,
      tags: ["dijital", "minimalizm", "yaşam", "teknoloji", "sadeleşme"],
      summary: "Dijital çağda minimalist yaşam için ipuçları...",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">Modern yaşamın karmaşasında dijital minimalizm, zihinsel ve duygusal huzur için bir çıkış yolu sunuyor. İşte hayatınızı sadeleştirmek için pratik öneriler:</p>
          
          <div class="space-y-8 mt-8">
            <div>
              <h3 class="text-2xl font-semibold mb-3">Dijital Detoks</h3>
              <p>Günlük hayatımızda teknolojinin yeri yadsınamaz, ancak bilinçli kullanım çok önemli. Her gün belirli saatleri "dijital detoks" için ayırın. Telefonunuzu uzak tutun, bildirimlerinizi kapatın ve kendinize zaman ayırın.</p>
              <div class="mt-4 space-y-2">
                <p class="font-medium">📅 Nasıl Uygulanır:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Akşam yemeklerinden sonra telefonunuzu bir kenara bırakın</li>
                  <li>Hafta sonları belirli saatlerde sosyal medyadan uzak durun</li>
                  <li>Uyku öncesi ekran kullanımını azaltın</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 class="text-2xl font-semibold mb-3">Dosya Organizasyonu</h3>
              <p>Dijital dosyalarınızı düzenli olarak organize edin. Gereksiz dosyaları silin, önemli belgeleri kategorize edin ve yedeklemelerinizi düzenli yapın.</p>
              <div class="mt-4 space-y-2">
                <p class="font-medium">🗂️ İpuçları:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Dosya adlandırma kuralları oluşturun</li>
                  <li>Bulut depolama hizmetlerini kullanarak yedekleme yapın</li>
                  <li>Belirli zamanlarda (örneğin ayda bir) dosya temizliği yapın</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 class="text-2xl font-semibold mb-3">Sosyal Medya Düzeni</h3>
              <p>Takip ettiğiniz hesapları gözden geçirin. Size değer katmayan içerikleri temizleyin. Sosyal medya kullanım sürenizi sınırlandırın.</p>
              <div class="mt-4 space-y-2">
                <p class="font-medium">📱 Adımlar:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Takip listenizi düzenleyin ve gereksiz hesapları bırakın</li>
                  <li>Her platformda günlük kullanım süresi sınırı belirleyin</li>
                  <li>Kaliteli içerik üreten hesapları ön plana çıkarın</li>
                </ul>
              </div>
            </div>
            
            <!-- Diğer Minimalizm Konuları Buraya Eklenebilir -->
            
          </div>
          
          <div class="mt-8 space-y-4">
            <h3 class="text-xl font-semibold">Minimalist Yaşam İçin Ekstra Öneriler</h3>
            <div class="bg-yellow-50 p-6 rounded-lg space-y-3">
              <p class="font-medium">✅ Öneriler:</p>
              <ul class="list-disc pl-5 space-y-2">
                <li>Fiziksel eşyalarınızı sadeleştirin ve gereksizlerden kurtulun</li>
                <li>Rutinlerinizi basitleştirerek stres seviyenizi düşürün</li>
                <li>Mindfulness ve meditasyon gibi pratiklerle zihinsel dinginlik kazanın</li>
                <li>Kaliteli zaman geçirmek için planlar yapın ve önceliklerinizi belirleyin</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 4,
      title: "Sürdürülebilir Yaşam İçin 5 Kolay Adım",
      category: "lifestyle",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      date: "30 Nisan 2024",
      author: "Can Yıldız",
      authorTitle: "Çevre Aktivisti & Yazar",
      readingTime: "7 dakika",
      views: 8400,
      likes: 710,
      tags: ["sürdürülebilirlik", "çevre", "yaşam", "ekoloji", "yeşil"],
      summary: "Çevre dostu bir yaşam için basit öneriler...",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">Sürdürülebilir bir yaşam tarzına geçiş sandığınızdan daha kolay olabilir. İşte günlük hayatınızda uygulayabileceğiniz çevre dostu öneriler:</p>
          
          <div class="space-y-8 mt-8">
            <div>
              <h3 class="text-2xl font-semibold mb-3">1. Tek Kullanımlık Plastikten Kaçının</h3>
              <p>Yeniden kullanılabilir su şişeleri, bez çantalar ve kahve termosları kullanın. Plastik pipetler yerine metal veya cam alternatiflerini tercih edin.</p>
              <div class="mt-4 space-y-2">
                <p class="font-medium">♻️ Alternatifler:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Paslanmaz çelik veya cam su şişeleri</li>
                  <li>Doğal liflerden yapılmış çantalar</li>
                  <li>Silicone veya metal pipetler</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 class="text-2xl font-semibold mb-3">2. Enerji Verimliliği</h3>
              <p>LED ampuller kullanın, kullanmadığınız elektronik aletleri prizde bırakmayın ve enerji tasarruflu ev aletleri tercih edin.</p>
              <div class="mt-4 space-y-2">
                <p class="font-medium">💡 Enerji Tasarrufu İpuçları:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Evde LED ampuller kullanarak enerji tüketimini azaltın</li>
                  <li>Elektronik cihazları tamamen kapatarak bekleme modundan kaçının</li>
                  <li>Enerji verimli A+++ sınıfı beyaz eşyalar tercih edin</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 class="text-2xl font-semibold mb-3">3. Geri Dönüşüm ve Kompost</h3>
              <p>Atıklarınızı ayrıştırın, organik atıklarınızı kompost yapın ve geri dönüştürülebilir malzemeleri uygun şekilde ayırın.</p>
              <div class="mt-4 space-y-2">
                <p class="font-medium">♻️ Uygulamalar:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Evde ayrı atık kutuları oluşturun (organik, kağıt, plastik, cam)</li>
                  <li>Kompost yaparak organik atıkları değerlendirin</li>
                  <li>Geri dönüşüm merkezlerini ziyaret ederek doğru şekilde atık bırakın</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 class="text-2xl font-semibold mb-3">4. Su Tasarrufu</h3>
              <p>Muslukları kapalı tutun, su verimli duş başlıkları kullanın ve gereksiz su tüketiminden kaçının.</p>
              <div class="mt-4 space-y-2">
                <p class="font-medium">🚰 Su Tasarrufu Yöntemleri:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Musluk sızıntılarını hemen tamir edin</li>
                  <li>Duş süresini kısaltın ve suyu akarken kullanmayın</li>
                  <li>Bahçe sulamasını sabah erken saatlere planlayın</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 class="text-2xl font-semibold mb-3">5. Sürdürülebilir Ulaşım</h3>
              <p>Toplu taşıma araçlarını kullanın, bisiklete binin veya yürüyüş yaparak karbon ayak izinizi azaltın.</p>
              <div class="mt-4 space-y-2">
                <p class="font-medium">🚴‍♂️ Ulaşım Seçenekleri:</p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Toplu taşıma araçlarını tercih edin</li>
                  <li>Yakın mesafelerde yürümeyi veya bisiklete binmeyi planlayın</li>
                  <li>Elektrikli araç kullanıyorsanız, şarj altyapısını göz önünde bulundurun</li>
                </ul>
              </div>
            </div>
            
          </div>
          
          <div class="mt-8 space-y-4">
            <h3 class="text-xl font-semibold">Günlük Hayatta Sürdürülebilirliği Artırmanın Yolları</h3>
            <div class="bg-green-50 p-6 rounded-lg space-y-3">
              <p class="font-medium">✅ Ek Öneriler:</p>
              <ul class="list-disc pl-5 space-y-2">
                <li>Doğa dostu temizlik ürünleri kullanın</li>
                <li>Yerel ve organik ürünleri tercih edin</li>
                <li>Atık azaltma prensibini benimseyin ve geri dönüşüm alışkanlığı kazanın</li>
                <li>Enerji tasarrufu sağlayan teknolojilere yatırım yapın</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 5,
      title: "Karadeniz'in Saklı Cennetleri",
      category: "nature",
      image: "https://images.unsplash.com/photo-1547043594-4191000dc1eb",
      date: "5 Mayıs 2024",
      author: "Elif Öztürk",
      authorTitle: "Doğa Fotoğrafçısı & Yazar",
      readingTime: "12 dakika",
      views: 14500,
      likes: 960,
      tags: ["Karadeniz", "doğa", "keşif", "yayla", "kültür"],
      summary:
        "Karadeniz'in eşsiz doğasını ve saklı kalmış güzelliklerini keşfedin. Yaylaların serinliği, ormanların huzuru ve yerel kültürün sıcaklığı sizleri bekliyor.",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Karadeniz, doğa tutkunları için bir cennettir. Bölgenin yemyeşil vadileri, sisle kaplı yaylaları ve masalsı atmosferi her yıl binlerce turisti kendine çeker. Ancak Karadeniz, yalnızca popüler yaylalarla değil, keşfedilmeyi bekleyen saklı cennetleriyle de sizi büyüleyecek.
          </p>
          
          <div class="space-y-8 mt-8">
            <div>
              <h3 class="text-2xl font-semibold mb-3">1. Pokut Yaylası</h3>
              <p>
                Bulut deniziyle ünlü Pokut Yaylası, doğanın en huzurlu halini sunuyor. Ahşap yayla evleri arasında yürürken, 
                çiçek kokularıyla dolu tertemiz bir hava sizi saracak. Sabahın erken saatlerinde güneşin doğuşunu izlemek unutulmaz bir deneyim sunar.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>En iyi ziyaret zamanı: Yaz ayları (Haziran-Ağustos)</li>
                <li>Aktiviteler: Fotoğrafçılık, trekking, manzara izleme</li>
                <li>Pratik bilgi: Yayla yolları için arazi aracı tercih edilmelidir</li>
              </ul>
            </div>
    
            <div>
              <h3 class="text-2xl font-semibold mb-3">2. Zilkale ve Fırtına Deresi</h3>
              <p>
                Tarihi Zilkale, Fırtına Deresi'ni izleyen eşsiz bir manzaraya sahiptir. Kale, Karadeniz'in tarihini yansıtan mimari yapısıyla ve çevresindeki ormanlarla büyüler. Zilkale'nin ardından, Fırtına Deresi boyunca rafting yapabilirsiniz.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Aktiviteler: Rafting, fotoğrafçılık, doğa yürüyüşü</li>
                <li>Giriş ücreti: 30 TL (2024 fiyatları)</li>
              </ul>
            </div>
    
            <div>
              <h3 class="text-2xl font-semibold mb-3">3. Sümela Manastırı</h3>
              <p>
                Sümela Manastırı, Karadeniz'in en ikonik tarihi yapılarından biridir. Sarp bir yamaca kurulu olan bu manastır, 
                büyüleyici bir atmosfere sahiptir. Hem kültür hem de doğa severlerin mutlaka görmesi gereken bir noktadır.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Giriş ücreti: 100 TL (2024 fiyatları)</li>
                <li>Ziyaret saatleri: 08:00 - 17:00</li>
              </ul>
            </div>
          </div>
    
          <div class="mt-8">
            <h3 class="text-xl font-semibold">Ziyaret Öncesi Öneriler</h3>
            <div class="bg-blue-50 p-6 rounded-lg space-y-3">
              <ul class="list-disc pl-5">
                <li>Yanınıza mutlaka yağmurluk alın; Karadeniz sık sık yağış alır</li>
                <li>Yürüyüş ayakkabılarıyla rahat bir keşif yapabilirsiniz</li>
                <li>Yöresel lezzetleri tatmayı unutmayın: Muhlama, mısır ekmeği, laz böreği</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 6,
      title: "Kapadokya'da Balon Turu Deneyimi",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1520670604026-6c664d47bed2",
      date: "10 Mayıs 2024",
      author: "Ahmet Kaya",
      authorTitle: "Macera Yazarı & Fotoğrafçı",
      readingTime: "14 dakika",
      views: 16500,
      likes: 1240,
      tags: ["Kapadokya", "macera", "balon turu", "doğa"],
      summary:
        "Kapadokya'nın büyülü atmosferinde balon turu deneyimi yaşayın. Peribacalarının eşsiz manzarasında unutulmaz bir yolculuk sizi bekliyor.",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Kapadokya, yalnızca Türkiye’nin değil, dünyanın da en etkileyici turizm destinasyonlarından biridir. Sabahın ilk ışıklarında başlayan balon turları, sizi peri masallarını andıran bir yolculuğa çıkarır. Bölgenin nefes kesen manzarasını gökyüzünden izlemek hayatınız boyunca unutamayacağınız bir anı olacaktır.
          </p>
    
          <div class="space-y-8 mt-8">
            <div>
              <h3 class="text-2xl font-semibold mb-3">1. Balon Turu Hakkında Bilgiler</h3>
              <p>
                Balon turları, sabah saat 5-6 gibi başlar. Tur şirketleri, konuklarını otellerinden alır ve kalkış alanına götürür. 
                Uçuş yaklaşık 1 saat sürer ve güneşin doğuşuyla Kapadokya'nın eşsiz manzarası birleşerek büyüleyici bir görüntü oluşturur.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Fiyat: Ortalama 3000-3500 TL (2024 fiyatları)</li>
                <li>En iyi mevsim: İlkbahar ve sonbahar</li>
              </ul>
            </div>
    
            <div>
              <h3 class="text-2xl font-semibold mb-3">2. Peribacaları ve Gökyüzü</h3>
              <p>
                Uçuş sırasında Göreme, Avanos ve Uçhisar gibi bölgeleri gökyüzünden izleyebilirsiniz. Balonun sunduğu eşsiz perspektif, 
                peri bacalarının zarafetini daha da artırır.
              </p>
            </div>
    
            <div>
              <h3 class="text-2xl font-semibold mb-3">3. Balon Turu Sonrası</h3>
              <p>
                Tur sonrasında katılımcılara genellikle sertifika ve şampanya ikramı yapılır. Ayrıca bölgenin ünlü kaya otellerinde konaklayarak bu büyülü atmosferin tadını çıkarabilirsiniz.
              </p>
            </div>
          </div>
    
          <div class="mt-8">
            <h3 class="text-xl font-semibold">Ziyaret Öncesi Öneriler</h3>
            <div class="bg-blue-50 p-6 rounded-lg space-y-3">
              <ul class="list-disc pl-5">
                <li>Balon turu rezervasyonunuzu önceden yapmayı unutmayın</li>
                <li>Sabahın erken saatlerinde serin olabileceği için yanınıza mont alın</li>
                <li>Balon turundan sonra Kapadokya’nın yeraltı şehirlerini keşfetmeyi ihmal etmeyin</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 7,
      title: "Mardin'in Tarihi Dokusu ve Kültürü",
      category: "culture",
      image: "https://images.unsplash.com/photo-1600566752442-a0f2fdba5844",
      date: "15 Mayıs 2024",
      author: "Sevgi Kılıç",
      authorTitle: "Kültür Yazarı & Tarihçi",
      readingTime: "15 dakika",
      views: 21000,
      likes: 1850,
      tags: ["Mardin", "tarih", "kültür", "gezi"],
      summary:
        "Taş evleri, dar sokakları ve zengin kültürel mirasıyla Mardin'in büyüleyici atmosferini keşfedin.",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Mardin, tarihi taş evleri, dar sokakları ve Mezopotamya Ovası'na bakan manzarasıyla sizi adeta geçmişe götüren bir şehir. 
            Birçok medeniyete ev sahipliği yapmış bu büyüleyici yer, ziyaretçilerine tarih, kültür ve lezzet dolu bir deneyim sunuyor.
          </p>
    
          <div class="space-y-8 mt-8">
            <div>
              <h3 class="text-2xl font-semibold mb-3">1. Mardin Taş Evleri</h3>
              <p>
                Mardin'in taş evleri, şehrin tarihini ve kültürel mirasını yansıtan benzersiz yapılardır. Evlerin mimarisi, Mezopotamya’nın sıcak iklimine uygun olarak tasarlanmıştır. Her biri, tarihi bir hikaye barındırıyor.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Öne çıkan özellik: Eşsiz taş işçiliği</li>
                <li>Pratik bilgi: Sokaklar dar olduğu için yürüyerek keşfetmek daha uygun</li>
              </ul>
            </div>
    
            <div>
              <h3 class="text-2xl font-semibold mb-3">2. Dara Antik Kenti</h3>
              <p>
                Mardin yakınlarındaki Dara Antik Kenti, Mezopotamya'nın en önemli tarihi yerlerinden biridir. Yeraltı su sarnıçları ve kazılarla ortaya çıkan tarihi yapılar mutlaka görülmelidir.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Öne çıkan nokta: Yeraltı sarnıçları</li>
                <li>Giriş önerisi: Sabah erken saatler</li>
              </ul>
            </div>
    
            <div>
              <h3 class="text-2xl font-semibold mb-3">3. Yöresel Lezzetler</h3>
              <p>
                Kaburga dolması, sembusek ve zerde tatlısı gibi lezzetlerle Mardin mutfağı, ziyaretçilerine unutulmaz bir gastronomi deneyimi sunuyor.
              </p>
            </div>
          </div>
    
          <div class="mt-8">
            <h3 class="text-xl font-semibold">Ziyaret Öncesi Öneriler</h3>
            <div class="bg-yellow-50 p-6 rounded-lg space-y-3">
              <ul class="list-disc pl-5">
                <li>Yanınızda rahat yürüyüş ayakkabıları bulundurun</li>
                <li>Yerel rehber eşliğinde tarihi mekanları keşfetmek için bir tur planlayın</li>
                <li>Mardin’in yerel pazarlarından hediyelik eşyalar almayı unutmayın</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 8,
      title: "Bodrum’un Gizli Koyları",
      category: "summer",
      image: "https://images.unsplash.com/photo-1517620428470-b1ab2127c3c5",
      date: "20 Mayıs 2024",
      author: "Ayşe Yılmaz",
      authorTitle: "Seyahat Yazarı & Fotoğrafçı",
      readingTime: "12 dakika",
      views: 15500,
      likes: 1020,
      tags: ["Bodrum", "koylar", "tatil", "deniz"],
      summary:
        "Bodrum'un kalabalıktan uzak, doğa ile iç içe gizli koylarını keşfedin. Tatilinizi huzur içinde geçirebileceğiniz bu koylar sizi bekliyor.",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Bodrum, yalnızca eğlenceli gece hayatıyla değil, aynı zamanda saklı kalmış koylarıyla da ünlüdür. Turkuaz renkli suları, yemyeşil doğası ve sessiz ortamıyla bu koylar, ziyaretçilere huzurlu bir tatil deneyimi sunuyor.
          </p>
    
          <div class="space-y-8 mt-8">
            <div>
              <h3 class="text-2xl font-semibold mb-3">1. Cennet Koyu</h3>
              <p>
                Şehrin kalabalığından uzaklaşmak isteyenler için ideal bir nokta. Doğanın içinde yüzmek ve dinlenmek isteyenler için eşsiz bir deneyim sunuyor.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Aktiviteler: Şnorkelle dalış, doğa yürüyüşü</li>
                <li>Pratik bilgi: Kendi yiyecek ve içeceğinizi yanınızda getirin</li>
              </ul>
            </div>
    
            <div>
              <h3 class="text-2xl font-semibold mb-3">2. Mazı Köyü</h3>
              <p>
                Bodrum’un en az bilinen bölgelerinden biri olan Mazı Köyü çevresindeki koylar, doğal güzellikleriyle dikkat çeker. Burada huzurlu bir tatil geçirmek mümkündür.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Öne çıkan koylar: Hurma ve Çakıllıyalı koyları</li>
                <li>Pratik bilgi: Araba ile ulaşım sağlanabilir</li>
              </ul>
            </div>
          </div>
    
          <div class="mt-8">
            <h3 class="text-xl font-semibold">Ziyaret Öncesi Öneriler</h3>
            <div class="bg-blue-50 p-6 rounded-lg space-y-3">
              <ul class="list-disc pl-5">
                <li>Şnorkel ve su geçirmez telefon kılıfı yanınıza alın</li>
                <li>Erken saatlerde giderek kalabalıktan kaçının</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 9,
      title: "Kars’ta Doğu Ekspresi ile Masalsı Yolculuk",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1516967124798-4b494d8f8b35",
      date: "25 Mayıs 2024",
      author: "Mehmet Demir",
      authorTitle: "Seyahat Yazarı",
      readingTime: "15 dakika",
      views: 18500,
      likes: 1450,
      tags: ["Kars", "Doğu Ekspresi", "kış", "tren"],
      summary:
        "Doğu Ekspresi ile Kars'ın büyülü atmosferinde masalsı bir yolculuk yapın. Karlarla kaplı dağlar ve eşsiz doğal güzellikler sizi bekliyor.",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            Türkiye’nin en eşsiz rotalarından biri olan Doğu Ekspresi, Ankara’dan başlayarak karla kaplı doğanın büyüleyici manzaraları arasında Kars’a kadar uzanır. Bu yolculuk, kış aylarında hem macera hem de nostalji dolu bir deneyim sunar.
          </p>
    
          <div class="space-y-8 mt-8">
            <div>
              <h3 class="text-2xl font-semibold mb-3">1. Masalsı Tren Yolculuğu</h3>
              <p>
                Doğu Ekspresi, yolcularına pencerelerden izlenebilecek eşsiz doğa manzaraları ve sıcak bir atmosfer sunar. Özellikle kış aylarında, beyaz örtüyle kaplanmış dağlar ve köyler yolculuğu unutulmaz kılar.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Rota: Ankara’dan Kars’a yaklaşık 24 saat süren bir yolculuk</li>
                <li>Öne çıkan deneyim: Güneş doğarken tren penceresinden doğayı izlemek</li>
              </ul>
            </div>
    
            <div>
              <h3 class="text-2xl font-semibold mb-3">2. Kars’ın Tarihi ve Doğal Güzellikleri</h3>
              <p>
                Kars’a vardığınızda Ani Harabeleri, Çıldır Gölü ve Kars Kalesi gibi tarihi ve doğal güzellikleri mutlaka ziyaret etmelisiniz. Çıldır Gölü'nde buz üzerinde balık avlama deneyimi ise bölgenin eşsiz aktivitelerinden biridir.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Mutlaka görün: Ani Harabeleri</li>
                <li>Özel aktivite: Çıldır Gölü’nde buz üzerinde yürüyüş</li>
              </ul>
            </div>
          </div>
    
          <div class="mt-8">
            <h3 class="text-xl font-semibold">Ziyaret Öncesi Öneriler</h3>
            <div class="bg-yellow-50 p-6 rounded-lg space-y-3">
              <ul class="list-disc pl-5">
                <li>Sıcak tutacak kıyafetler yanınıza alın</li>
                <li>Buzlu yollara karşı uygun ayakkabılar tercih edin</li>
                <li>Fotoğraf makinesiyle unutulmaz kareler yakalayın</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 10,
      title: "İstanbul’un Tarihi Semtleri ve Sokak Lezzetleri",
      category: "culture",
      image: "https://images.unsplash.com/photo-1566438485761-57f7cf6c8e47",
      date: "30 Mayıs 2024",
      author: "Zeynep Kaya",
      authorTitle: "Gastronomi Uzmanı & Kültür Rehberi",
      readingTime: "15 dakika",
      views: 13500,
      likes: 1040,
      tags: ["İstanbul", "tarih", "yemek", "sokak lezzetleri", "gezi"],
      summary:
        "İstanbul’un tarihi dokusunu keşfederken lezzet dolu sokak yemekleriyle benzersiz bir deneyim yaşayın. Tarihi yarımadadan Balat’a uzanan unutulmaz bir rota sizleri bekliyor.",
      content: `
        <div class="space-y-6">
          <p class="text-lg leading-relaxed">
            İstanbul, yüzyıllardır medeniyetlerin beşiği olmuş, tarihi ve kültürel zenginliklerle dolu bir şehirdir. Her sokağı bir hikaye anlatırken, her köşesinde tadabileceğiniz sokak lezzetleri ile şehrin ruhunu hissedebilirsiniz. Tarihi yarımadanın eşsiz atmosferinde gezinirken, sokak yemekleriyle damaklarınıza unutulmaz bir lezzet şöleni yaşatabilirsiniz.
          </p>
    
          <div class="space-y-8 mt-8">
            <div>
              <h3 class="text-2xl font-semibold mb-3">1. Tarihi Yarımada: İstanbul’un Kalbi</h3>
              <p>
                Sultanahmet, Ayasofya, Topkapı Sarayı ve Yerebatan Sarnıcı, İstanbul’un tarihi mirasını yansıtan en önemli yapılardır. Tarihi yarımada, sizi yüzyıllar öncesine götüren bir zaman tüneli gibidir. Meydandaki satıcıların sunduğu simit ve taze sıkılmış portakal suyu eşliğinde yürüyüşünüzü daha da keyifli hale getirebilirsiniz.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Öne çıkan mekanlar: Ayasofya, Sultanahmet Camii, Topkapı Sarayı</li>
                <li>Giriş önerileri: Sabah erken saatlerde ziyaret edin</li>
                <li>Lezzet önerisi: Tarihi Sultanahmet Köftecisi’nde öğle yemeği</li>
              </ul>
            </div>
    
            <div>
              <h3 class="text-2xl font-semibold mb-3">2. Balat: Renkli Sokaklar ve Tarih</h3>
              <p>
                Tarihi evleri ve renkli sokaklarıyla ünlü Balat, aynı zamanda sokak yemekleriyle de dikkat çeker. Balat’ta keşfedeceğiniz küçük kafelerde kahvaltınızı yapabilir, ara sokaklarda yerel lezzetlerin tadına bakabilirsiniz.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Denenecek lezzetler: Midye dolma, kokoreç, çay ve kahve eşliğinde tatlılar</li>
                <li>Öne çıkan noktalar: Fener Rum Patrikhanesi, Balat Çarşısı</li>
              </ul>
            </div>
    
            <div>
              <h3 class="text-2xl font-semibold mb-3">3. Eminönü: Sokak Lezzetlerinin Merkezi</h3>
              <p>
                Eminönü’nde deniz kenarında yer alan balık ekmek tekneleri, şehrin en popüler sokak yemeklerinden birini sunar. Yanında turşu suyu içmeyi unutmayın. Ayrıca, Mısır Çarşısı’nda baharatların arasında gezinerek tarihi atmosferi hissedebilirsiniz.
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Denenecek lezzetler: Balık ekmek, turşu suyu, halka tatlı</li>
                <li>Alışveriş önerisi: Mısır Çarşısı’ndan yerel baharatlar</li>
              </ul>
            </div>
          </div>
    
          <div class="mt-8">
            <h3 class="text-xl font-semibold">Ziyaret Öncesi Öneriler</h3>
            <div class="bg-yellow-50 p-6 rounded-lg space-y-3">
              <ul class="list-disc pl-5">
                <li>Tarihi mekanları keşfetmek için sabah erken saatleri tercih edin</li>
                <li>Sokak lezzetlerini tatmak için hijyenik yerleri tercih edin</li>
                <li>Fotoğraf makinenizi yanınıza almayı unutmayın; özellikle Balat sokaklarında harika kareler yakalayabilirsiniz</li>
                <li>Eminönü'nde alışveriş yaparken pazarlık yapmayı ihmal etmeyin</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
  ];

  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 mb-6 inline-block transition duration-300 ease-in-out"
      >
        ← Geri Dön
      </Link>

      <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[500px] object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/800x500?text=Loading..."; // fallback image
          }}
        />

        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="px-3 py-1 bg-gray-100 rounded-full">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="font-medium">{post.author}</span>
            </div>
            <ShareButtons url={window.location.href} title={post.title} />
          </div>

          <h1 className="text-4xl font-bold mb-8 text-gray-900">
            {post.title}
          </h1>

          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}

export default BlogPost;
