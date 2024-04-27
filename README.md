# Cyber-LocalApiProject-React


[github-project.webm](https://github.com/alicankocman/Cyber-LocalApiProject-React/assets/88544926/4aae1708-01e2-4b83-8d10-8c1f7226a610)


# Cyber LocalApiProject-React

Bu proje, Cyber isimli bir yerel API kullanarak veri alışverişi yapan bir React uygulamasını içerir. Cyber API, belirli bir yerel sunucuda barındırılan ve genellikle geliştirme veya test amaçları için kullanılan bir uygulama programlama arayüzüdür.

## Proje Yapısı

- **src/components**: Uygulamanın bileşenlerinin bulunduğu dizin.
  - **Header.js**: Sayfa başlığını içeren bileşen.
  - **PostList.js**: API'den gelen gönderileri listeleyen bileşen.
  - **PostForm.js**: Yeni gönderi oluşturmayı sağlayan bileşen.
- **src/services**: API çağrılarını işleyen servis dosyalarının bulunduğu dizin.
  - **api.js**: Cyber API ile iletişim kurmak için axios kütüphanesini kullanan fonksiyonlar içerir.

## Kurulum

1. Projeyi klonlayın:

    ```
    git clone https://github.com/alicankocman/Cyber-LocalApiProject-React.git
    ```

2. Proje dizinine gidin:

    ```
    cd Cyber-LocalApiProject-React
    ```

3. Gerekli bağımlılıkları yükleyin:

    ```
    npm install
    ```

4. Uygulamayı başlatın:

    ```
    npm start
    ```

## Kullanım

Uygulama başlatıldıktan sonra tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görüntüleyebilirsiniz. Başlık çubuğunda "Posts" sekmesine tıklayarak mevcut gönderileri görüntüleyebilir veya "New Post" sekmesine tıklayarak yeni bir gönderi oluşturabilirsiniz.
