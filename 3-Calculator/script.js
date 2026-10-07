const ekran = document.querySelector('#ekran');
const tuslar = document.querySelectorAll('.tus');

let ifade = '';       // arka planda biriken tam işlem (görünmez)
let ekranDegeri = ''; // ekranda görünen kısım (şu an girilen sayı)
let acikParantez = 0;

tuslar.forEach(function (tus) {
    tus.addEventListener('click', function () {

        // C - Temizle
        if (tus.id === 'temizle-btn') {
            ifade = '';
            ekranDegeri = '';
            acikParantez = 0;
            ekran.textContent = '0';
            return;
        }

        // ⌫ - Sil
        if (tus.id === 'sil-btn') {
            ekranDegeri = ekranDegeri.slice(0, -1);
            ekran.textContent = ekranDegeri || '0';
            return;
        }

        // % - yüzde (girilen sayıyı 100'e böler)
        if (tus.id === 'yuzde-btn') {
            if (ekranDegeri !== '') {
                ekranDegeri = String(parseFloat(ekranDegeri) / 100);
                ekran.textContent = ekranDegeri;
            }
            return;
        }

        // () - açık/kapalı parantez otomatik seçimi
        if (tus.id === 'parantez-btn') {
            if (acikParantez === 0 || /[\+\-\*\/\(]$/.test(ekranDegeri) || ekranDegeri === '') {
                ekranDegeri += '(';
                acikParantez++;
            } else {
                ekranDegeri += ')';
                acikParantez--;
            }
            ekran.textContent = ekranDegeri;
            return;
        }

        // İşlem tuşları (+ - * /)
        if (tus.classList.contains('islem')) {
            if (ekranDegeri === '' && ifade === '') return; // başta operatörle başlanmasın
            ifade += ekranDegeri + tus.dataset.op;
            ekranDegeri = '';        // 1. sayı ekrandan kaybolur, 2. sayı girilmeye hazır
            ekran.textContent = '0';
            return;
        }

        // = - Eşittir
        if (tus.id === 'esittir-btn') {
            const tamIfade = ifade + ekranDegeri;
            if (tamIfade === '') return;
            try {
                const sonuc = eval(tamIfade);
                ekran.textContent = sonuc;
                ifade = '';
                ekranDegeri = String(sonuc);
                acikParantez = 0;
            } catch (e) {
                ekran.textContent = 'Hata';
                ifade = '';
                ekranDegeri = '';
            }
            return;
        }

        // Sayılar ve nokta
        ekranDegeri += tus.textContent;
        ekran.textContent = ekranDegeri;
    });
});