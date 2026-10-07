# Calculator

HTML, CSS ve saf JavaScript ile yazılmış, tarayıcıda çalışan basit bir hesap makinesi. Herhangi bir kütüphane veya kurulum gerektirmez.

## Özellikler

- Toplama, çıkarma, çarpma ve bölme
- `C` ile her şeyi temizleme
- `⌫` ile son karakteri silme
- `%` ile girilen sayıyı 100'e bölme
- `()` ile otomatik açma/kapama parantezi
- Ondalıklı sayı desteği
- Geçersiz işlemde ekranda `Hata` mesajı

## Kullanım

1. Projeyi indir veya klonla.
2. `index.html` dosyasını tarayıcıda aç.

Başka bir şey yapmana gerek yok.

## Dosya Yapısı

```
.
├── index.html   # Sayfa yapısı ve tuşlar
├── style.css    # Görünüm ve renkler
└── script.js    # Hesaplama mantığı
```

## Nasıl Çalışır?

- `ifade`: Arka planda biriken tam işlem (ör. `12+5*`). Ekranda görünmez.
- `ekranDegeri`: Ekranda görünen, o an girilen sayı.
- Bir işlem tuşuna (`+ - x /`) basılınca girilen sayı `ifade`'ye eklenir ve ekran sıfırlanır.
- `=` tuşuna basılınca `ifade + ekranDegeri` birleştirilip `eval()` ile hesaplanır, sonuç ekrana yazılır.

## Kullanılan Teknolojiler

- HTML5
- CSS3 (Flexbox ve Grid)
- JavaScript (ES6)

## Bilinen Sınırlamalar ve Geliştirme Fikirleri

- Hesaplama için `eval()` kullanılıyor. Kişisel bir proje için sorun değil, ancak gerçek bir uygulamada güvenlik açısından tercih edilmez. İleride kendi ifade çözümleyicini yazarak değiştirebilirsin.
- Bir işlem tuşuna basınca ilk sayı ekrandan kaybolur (`0` görünür); klasik hesap makinelerinde ilk sayı ekranda kalır.
- Parantezler yalnızca o an girilen sayı alanında tutulduğu için, işlem tuşundan sonra parantez durumu beklenmedik davranabilir.
- Klavye desteği yok; ileride eklenebilir.
- `0.1 + 0.2` gibi işlemlerde JavaScript'in ondalık hassasiyet sorunu görülebilir.

## Lisans

Bu proje kişisel öğrenme amaçlıdır. Dilediğin lisansı ekleyebilirsin (ör. MIT).
