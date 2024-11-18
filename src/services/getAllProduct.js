import image1 from "../assets/1.png";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/3.png";
import image4 from "../assets/4.jpeg";
import image5 from "../assets/5.jpeg";

export const getAllProducts = () => {
  return [
    {
      id: "1",
      slug: "MAKE-UP-FOR-EVER-Ultra-HD-foundation",
      name: "MAKE UP FOR EVER Ultra HD Foundation",
      category: `Foundation`,
      categorySlug: "foundation",
      price: 630_000,
      stock: 4,
      imageUrl: image1,
      description: `Foundation ini dirancang untuk tampilan kulit wajah yang terlihat alami namun tetap flawless, cocok untuk semua jenis kulit. Dengan formula yang ringan, produk ini memberikan hasil seperti kulit kedua, sempurna untuk fotografi dan video beresolusi tinggi. Teksturnya mudah diaplikasikan dan tahan lama, membuatnya ideal untuk aktivitas sehari-hari maupun acara formal. Harganya berkisar Rp630.000, menawarkan kualitas premium yang sering digunakan oleh para profesional makeup​`,
    },
    {
      id: "2",
      slug: "Pixy-UV-Whitening-Concealing-foundation",
      name: "Pixy UV Whitening Concealing Base",
      category: `Foundation`,
      categorySlug: "foundation",
      price: 39_000,
      stock: 30,
      imageUrl: image2,
      description: `Produk multifungsi ini menggabungkan foundation dan concealer dalam satu kemasan dengan harga yang sangat terjangkau, mulai dari Rp39.000. Foundation ini hadir dalam bentuk stik dengan tekstur creamy yang memudahkan aplikasi. Dilengkapi dengan SPF 35 dan PA+++ untuk melindungi kulit dari paparan sinar matahari, serta formula 2-way whitening untuk efek mencerahkan. Tahan hingga 12 jam dan cocok untuk kulit kering karena mengandung Jojoba Oil, memberikan hasil yang natural dan coverage yang buildable.`,
    },
    {
      id: "3",
      slug: "Viva-Ultra-foundation",
      name: "Viva Ultra Foundation",
      category: `Foundation`,
      categorySlug: "foundation",
      price: 6_000,
      stock: 50,
      imageUrl: image3,
      description: `Sebagai pilihan ekonomis dengan harga mulai Rp6.000, foundation cair ini terkenal dengan teksturnya yang ringan dan mudah dibaurkan, cocok untuk pemula. Mengandung pelembap untuk menjaga hidrasi kulit, membuatnya ideal untuk kulit kering. Meski sangat terjangkau, Viva tetap memperhatikan kualitasnya sehingga banyak digunakan untuk riasan sederhana sehari-hari. Produk ini memiliki daya coverage yang cukup baik untuk menyamarkan ketidaksempurnaan kecil.`,
    },
    {
      id: "4",
      slug: "Maybelline-Superstay-Matte-Ink-lipstick",
      name: "Maybelline Superstay Matte Ink",
      category: `Lipstick`,
      categorySlug: "lipstick",
      price: 125_000,
      stock: 30,
      imageUrl: image4,
      description: `Lipstik cair ini memberikan hasil matte dengan daya tahan luar biasa hingga 16 jam tanpa transfer. Didesain dengan aplikator presisi, produk ini mudah diaplikasikan dan tersedia dalam berbagai warna intens untuk segala suasana. Cocok untuk aktivitas panjang tanpa perlu sering touch-up, lipstik ini sangat diminati karena kualitasnya yang premium dengan harga sekitar Rp125.000, menjadikannya salah satu pilihan terbaik di kategori lipstik matte tahan lama.`,
    },
    {
      id: "5",
      slug: "Wardah-Colorfit-Velvet-Matte-Lip-Mousse-lipstick",
      name: "Wardah Colorfit Velvet Matte Lip Mousse",
      category: `Lipstick`,
      categorySlug: "lipstick",
      price: 65_000,
      stock: 0,
      imageUrl: image5,
      description: `Dengan tekstur seperti mousse, lipstik ini terasa lembut dan ringan di bibir, memberikan hasil matte yang natural. Teknologi color binding-nya membuat warna tahan lama bahkan dengan aktivitas makan atau minum. Harganya mulai dari Rp65.000, dan tersedia dalam banyak pilihan warna yang cocok untuk berbagai skin tone. Produk ini menjadi favorit karena memberikan hasil akhir yang cantik tanpa membuat bibir terasa kering, ideal untuk pemakaian sehari-hari maupun acara spesial.`,
    },
  ];
};
