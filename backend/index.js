const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const database = require('./mongodb/connection.js')
const authRouter = require('./routes/auth.js')
const companiesRoutes = require("./routes/companies.js");
const produstRoutes = require("./routes/product.js")
const companiesModel = require("./mongodb/models/companies.js")
const productsModel = require("./mongodb/models/product.js")
dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/',authRouter)

app.use("/comp", companiesRoutes);
app.use("/prod", produstRoutes);



app.get("/getComp/:id", async (req, res) => {
 const id = req.params.id;
companiesModel.findById({_id:id})
.then(comp => res.json(comp))
.catch(err => res.json(err))
  });

app.put('/updateComp/:id', async (req,res) =>{
 const id = req.params.id;
 companiesModel.findByIdAndUpdate(
   { _id: id },
   {
     companyLegalNumber: req.body.companyLegalNumber,
     companyName: req.body.companyName,
     incorporationCountry: req.body.incorporationCountry,
     website: req.body.website,
   } )
     .then((comp) => res.json(comp))
     .catch((err) => res.json(err))

  })

app.delete('/deleteComp/:id', async(req,res) => {
  const id = req.params.id;
  companiesModel
    .findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
})

app.post("/createComp", async (req, res) => {
  try {
    const { companyLegalNumber, companyName, incorporationCountry, website } =
      req.body;

    if (isNaN(companyLegalNumber)) {
      return res
        .status(400)
        .json({ error: "companyLegalNumber yalnızca  numara olmalıdır." });
    }

    const comp = await companiesModel.create({
      companyLegalNumber,
      companyName,
      incorporationCountry,
      website,
    });
    res.json(comp);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({
        error:
          "Şirket oluşturulurken bir hata oluştu. Lütfen girdiğiniz bilgileri kontrol edin.",
      });
  }
});



/////////////////
app.get("/getProd/:id", async (req, res) => {
  const id = req.params.id;
  productsModel
    .findById({ _id: id })
    .then((comp) => res.json(comp))
    .catch((err) => res.json(err));
});

app.put("/updateProd/:id", async (req, res) => {
  const id = req.params.id;
  productsModel
    .findByIdAndUpdate(
      { _id: id },
      {
        productAmount: req.body.productAmount,
        productCategory: req.body.productCategory,
        productName: req.body.productName,
        amountUnit: req.body.amountUnit,
      }
    )
    .then((comp) => res.json(comp))
    .catch((err) => res.json(err));
});

app.delete("/deleteProd/:id", async (req, res) => {
  const id = req.params.id;
  productsModel
    .findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.post("/createProd", async (req, res) => {
  try {
    const { productAmount, productCategory, productName, amountUnit } =
      req.body;

    if (isNaN(productAmount)) {
      return res.status(400).json({
        error: "Product Amount yalnızca numara olmalıdır.",
      });
    }

    const comp = await productsModel.create({
      productAmount,
      productCategory,
      productName,
      amountUnit,
    });
    res.json(comp);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error:
        "Şirket oluşturulurken bir hata oluştu. Lütfen girdiğiniz bilgileri kontrol edin.",
    });
  }
});


//Total Companies
app.get("/getTotalCompanies", async (req, res) => {
  try {
    const totalCompanies = await companiesModel.countDocuments();
    res.json({ totalCompanies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Bir hata oluştu." });
  }
});


//Last 3 compinies


const PORT = process.env.PORT || 4000;

database()

app.listen(PORT, () =>{
  console.log("server is running", PORT)
})