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





module.exports = router;
