const Router = require("koa-router");
const { get, post } = require("./controller/userController");
const router = new Router();

router.get("/", get);
router.post("/user", post);

module.exports = router;
