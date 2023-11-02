const Companies = require("../models/companies");

const initialCompaniesData = [
  {
    companyName: "Şirket 1",
    companyLegalNumber: 12345,
    incorporationCountry: "Ülke 1",
    website: "www.sirket1.com",
  },
  {
    companyName: "Şirket 2",
    companyLegalNumber: 54321,
    incorporationCountry: "Ülke 2",
    website: "www.sirket2.com",
  },
  {
    companyName: "Şirket 3",
    companyLegalNumber: 98765,
    incorporationCountry: "Ülke 3",
    website: "www.sirket3.com",
  },
  {
    companyName: "Şirket 4",
    companyLegalNumber: 13579,
    incorporationCountry: "Ülke 4",
    website: "www.sirket4.com",
  },
  {
    companyName: "Şirket 5",
    companyLegalNumber: 24680,
    incorporationCountry: "Ülke 5",
    website: "www.sirket5.com",
  },
  {
    companyName: "Şirket 6",
    companyLegalNumber: 11223,
    incorporationCountry: "Ülke 6",
    website: "www.sirket6.com",
  },
  {
    companyName: "Şirket 7",
    companyLegalNumber: 998877,
    incorporationCountry: "Ülke 7",
    website: "www.sirket7.com",
  },
  {
    companyName: "Şirket 8",
    companyLegalNumber: 76543,
    incorporationCountry: "Ülke 8",
    website: "www.sirket8.com",
  },
  {
    companyName: "Şirket 9",
    companyLegalNumber: 54321,
    incorporationCountry: "Ülke 9",
    website: "www.sirket9.com",
  },
  {
    companyName: "Şirket 10",
    companyLegalNumber: 98765,
    incorporationCountry: "Ülke 10",
    website: "www.sirket10.com",
  },
  {
    companyName: "Şirket 11",
    companyLegalNumber: 12345,
    incorporationCountry: "Ülke 11",
    website: "www.sirket11.com",
  },
  {
    companyName: "Şirket 12",
    companyLegalNumber: 54321,
    incorporationCountry: "Ülke 12",
    website: "www.sirket12.com",
  },
  {
    companyName: "Şirket 13",
    companyLegalNumber: 98765,
    incorporationCountry: "Ülke 13",
    website: "www.sirket13.com",
  },
  {
    companyName: "Şirket 14",
    companyLegalNumber: 12345,
    incorporationCountry: "Ülke 14",
    website: "www.sirket14.com",
  },
  {
    companyName: "Şirket 15",
    companyLegalNumber: 54321,
    incorporationCountry: "Ülke 15",
    website: "www.sirket15.com",
  },
  {
    companyName: "Şirket 16",
    companyLegalNumber: 98765,
    incorporationCountry: "Ülke 16",
    website: "www.sirket16.com",
  },
  {
    companyName: "Şirket 17",
    companyLegalNumber: 12345,
    incorporationCountry: "Ülke 17",
    website: "www.sirket17.com",
  },
  {
    companyName: "Şirket 18",
    companyLegalNumber: 54321,
    incorporationCountry: "Ülke 18",
    website: "www.sirket18.com",
  },
  {
    companyName: "Şirket 19",
    companyLegalNumber: 98765,
    incorporationCountry: "Ülke 19",
    website: "www.sirket19.com",
  },
  {
    companyName: "Şirket 20",
    companyLegalNumber: 13579,
    incorporationCountry: "Ülke 20",
    website: "www.sirket20.com",
  },
];

const seedInitialData = async () => {
  try {
    await Companies.create(initialCompaniesData);
    console.log("Başlangıç verileri başarıyla eklendi (companies).");
  } catch (error) {
    console.error(
      "Başlangıç verilerini eklerken hata oluştu:(companies) ",
      error
    );
  }
};

module.exports = seedInitialData;
