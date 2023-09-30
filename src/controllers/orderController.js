const router = require("express").Router();
const orderService = require("../services/orderService")

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const { fullname, order, address, dayForDelivery,timeForDelivery } = req.body;
  console.log(req.body)

  await orderService.create({ 
    fullname,
    order,
    address,
    dayForDelivery,
    timeForDelivery
  })
  res.redirect('/')
})



router.get("/binds", async (req, res) => {
  const { search, from, to } = req.query;
  const orders = await orderService.getAll(search, from, to);

  res.render("index", { orders, search, from, to });
});


module.exports = router;
