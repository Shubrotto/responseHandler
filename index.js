require("dotenv").config();
const Koa = require("koa");
const router = require("./router");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
const port = process.env.port || 5000;

app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
