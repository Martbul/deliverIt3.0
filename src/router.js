const router = require("express").Router();
const homeController = require("./controllers/homeController");
const cubeController = require("./controllers/cubeController");
const orderController = require("./controllers/orderController");

router.use(homeController);
router.use("/cubes", cubeController);
router.use("/orders",orderController);

router.get("*", (req, res) => {
  res.redirect("/404");
});

module.exports = router;
