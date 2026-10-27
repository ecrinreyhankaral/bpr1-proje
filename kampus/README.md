# Renkli Atölye — Altı sayfalık statik site

BPR201 - İnternet Tabanlı Programlama
Dr. Öğr. Üyesi Serkan AKSU
http://www.serkanaksu.net
aksu@bartin.edu.tr

## İlk kez çalıştırma
1. GitHub hesabında `kampus-kulubu` adlı repository oluştur. Add README seçeneğini aç.
2. ZIP'i aç. `index.html`, `etkinlikler.html`, `hakkimizda.html`, `style.css` ve `README.md` dosyalarını repository köküne yükle (Add file / Upload files). ZIP dosyasının kendisini yükleme.
3. Commit changes ile kaydet.
4. Code / Codespaces / Create codespace on main seç. Kurulumun bitmesini bekle.
5. Terminal / New Terminal aç. Aşağıdaki komutu çalıştır:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

6. Ports panelinde 8000 portunu bul. Gerekirse Forward a Port ile 8000 ekle. Open in Browser seç. Port Private kalabilir.
7. Ana Sayfa, Koleksiyon, Atölye, Takı, Mum ve Örgü & El İşi bağlantılarını dene.
8. HTML/CSS değişikliğinden sonra dosyayı kaydet (Ctrl+S veya Mac'te Cmd+S), browser sayfasını yenile.

Codespaces varsayılan ortamında Python bulunur. `python3 --version` ile kontrol et. Bu projede npm, framework, database veya uygulama kurulumu gerekmez. Python yalnızca hazır dosyaları sunar. Yerel bilgisayarda HTML dosyalarını çift tıklayarak da açabilirsin.

## Dosyalar
- index.html: Atölye tanıtımı ve öne çıkan ürünler
- etkinlikler.html: Aranabilir el yapımı ürün koleksiyonu
- hakkimizda.html: Atölyenin hikayesi ve değerleri
- taki-yapimi.html: Takı atölyesi ve randevu seçenekleri
- mum-yapimi.html: Mum atölyesi ve randevu seçenekleri
- orgu-el-isi.html: Örgü ve el işi atölyesi randevuları
- style.css: Ortak renk paleti, sayfa düzeni ve mobil görünüm
- appointments.js: Atölye randevu seçimini sayfada gösterir
- search.js: Koleksiyondaki ürünleri arama alanına göre filtreler

## Copilot alıştırması
Önce dosyayı aç. Chat içinde şunu sor:

> HTML öğrenmeye yeni başladım. index.html içindeki nav bölümünü satır satır Türkçe açıkla. Kodu değiştirme. href ve aria-current terimlerinin görevini anlat.

Sonra şu küçük değişikliği iste:

> Yalnızca etkinlikler.html dosyasına mevcut catalog-item yapısını kullanarak el yapımı bir ürün ekle. Ürün adı, türü ve kısa açıklaması olsun. Yeni paket veya çerçeve ekleme. Değişen satırları açıkla.

Öneriyi oku. Yeni ürünün koleksiyonda göründüğünü ve diğer sayfaların açıldığını kontrol et. AI_NOTLARI.md dosyasına hangi yardımı aldığını ve nasıl test ettiğini yaz. Copilot erişimin yoksa bir catalog-item bloğunu kendin çoğalt.

## Kaydet ve GitHub'a gönder
Source Control bölümünde diff'i incele. İlgili dosyaları + ile stage et. Anlamlı mesajla Commit yap. Ardından Sync Changes veya Push seç. GitHub repository sayfasında yeni commit'i doğrula.

## Dersi bitirme
Terminalde Ctrl+C ile web server'ı durdur. https://github.com/codespaces sayfasında ortamın ... menüsünden Stop codespace seç. Sekmeyi kapatmak yeterli değildir. Stop depolamayı silmez. Delete öncesinde dosyaların GitHub'a push edildiğini kontrol et.

## Sık sorunlar
- Directory listing: index.html yanlış klasörde. Dosyaları repository köküne taşı veya doğru klasörde server'ı başlat.
- Address already in use: Önce çalışan server'ı Ctrl+C ile kapat. Gerekirse 8001 kullan ve Ports'ta 8001 aç.
- CSS görünmüyor: Dosya adı style.css ve link yolu aynı olmalı. Büyük/küçük harfe dikkat et.
- Copilot yanıt vermiyor: Hesabı, planı ve kotayı kontrol et. Proje AI olmadan da çalışır.

## Kaynaklar
https://github.com/signup
https://github.com/settings/education/benefits
https://docs.github.com/en/codespaces/quickstart
https://docs.github.com/en/codespaces/reference/using-github-copilot-in-github-codespaces

Bu proje eğitim amaçlı statik bir site örneğidir. Ürün açıklamaları ve marka kurgusaldır; sipariş, ödeme veya stok sistemi içermez. Ürün fotoğrafları Unsplash, yazı tipleri Google Fonts üzerinden yüklenir; bu görsellerin ve yazı tiplerinin görüntülenmesi için internet bağlantısı gerekir.
