const express = require("express");
const router = express.Router();
const companiesController = require("../controllers/companies");

router.get("/companies", companiesController.listAllCompanies);

router.post("/companies", companiesController.createCompany);

router.put("/companies/:id", companiesController.updateCompany);

router.delete("/companies/:id", companiesController.deleteCompany);

module.exports = router;
