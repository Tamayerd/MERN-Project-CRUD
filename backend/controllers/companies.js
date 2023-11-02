const Companies = require("../mongodb/models/companies")

exports.listAllCompanies = async(req, res) => {
    try {
          const companies = await Companies.find();
          res.json(companies);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}
exports.createCompany = async (req, res) => {
  const { companyName, companyLegalNumber, incorporationCountry, website } =
    req.body;
  const newCompany = new Companies({
    companyName,
    companyLegalNumber,
    incorporationCountry,
    website,
  });

  try {
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Companies.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCompany);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.deleteCompany = async (req, res) => {
  try {
    await Companies.findByIdAndRemove(req.params.id);
    res.json({ message: "Şirket başarıyla silindi." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
