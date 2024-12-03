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
