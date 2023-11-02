const Products = require("../models/product");

const initialProductsData = [
  {
    productName: "Televizyon",
    productCategory: "Elektronik",
    productAmount: 799.99,
    amountUnit: "Adet",
    companyId: 3,
  },
  {
    productName: "Laptop",
    productCategory: "Elektronik",
    productAmount: 1299.99,
    amountUnit: "Adet",
    companyId: 2,
  },
  {
    productName: "Telefon",
    productCategory: "Elektronik",
    productAmount: 599.99,
    amountUnit: "Adet",
    companyId: 1,
  },
  {
    productName: "Kamera",
    productCategory: "Elektronik",
    productAmount: 299.99,
    amountUnit: "Adet",
    companyId: 4,
  },
  {
    productName: "Bisiklet",
    productCategory: "Spor",
    productAmount: 299.99,
    amountUnit: "Adet",
    companyId: 5,
  },
  {
    productName: "Masa",
    productCategory: "Mobilya",
    productAmount: 199.99,
    amountUnit: "Adet",
    companyId: 3,
  },
  {
    productName: "Koltuk",
    productCategory: "Mobilya",
    productAmount: 399.99,
    amountUnit: "Adet",
    companyId: 2,
  },
  {
    productName: "Çamaşır Makinesi",
    productCategory: "Ev Aletleri",
    productAmount: 499.99,
    amountUnit: "Adet",
    companyId: 4,
  },
  {
    productName: "Mikrodalga Fırın",
    productCategory: "Ev Aletleri",
    productAmount: 99.99,
    amountUnit: "Adet",
    companyId: 1,
  },
  {
    productName: "Buzdolabı",
    productCategory: "Ev Aletleri",
    productAmount: 599.99,
    amountUnit: "Adet",
    companyId: 5,
  },
  {
    productName: "Spor Ayakkabı",
    productCategory: "Spor",
    productAmount: 79.99,
    amountUnit: "Çift",
    companyId: 3,
  },
  {
    productName: "Çocuk Oyuncakları",
    productCategory: "Oyuncaklar",
    productAmount: 19.99,
    amountUnit: "Adet",
    companyId: 2,
  },
  {
    productName: "Şampuan",
    productCategory: "Kozmetik",
    productAmount: 9.99,
    amountUnit: "Şişe",
    companyId: 1,
  },
  {
    productName: "Güneş Gözlüğü",
    productCategory: "Aksesuar",
    productAmount: 49.99,
    amountUnit: "Adet",
    companyId: 4,
  },
  {
    productName: "Ofis Sandalyesi",
    productCategory: "Mobilya",
    productAmount: 149.99,
    amountUnit: "Adet",
    companyId: 5,
  },
  {
    productName: "Çanta",
    productCategory: "Aksesuar",
    productAmount: 29.99,
    amountUnit: "Adet",
    companyId: 2,
  },
  {
    productName: "Yatak",
    productCategory: "Mobilya",
    productAmount: 399.99,
    amountUnit: "Adet",
    companyId: 1,
  },
  {
    productName: "Saat",
    productCategory: "Aksesuar",
    productAmount: 99.99,
    amountUnit: "Adet",
    companyId: 3,
  },
  {
    productName: "Oyun Konsolu",
    productCategory: "Elektronik",
    productAmount: 399.99,
    amountUnit: "Adet",
    companyId: 4,
  },
];
const seedInitialData = async () => {
  try {
    await Products.create(initialProductsData);
    console.log("Başlangıç verileri başarıyla eklendi (products).");
  } catch (error) {
    console.error("Başlangıç verilerini eklerken hata oluştu (products): ", error);
  }
};

module.exports = seedInitialData;
