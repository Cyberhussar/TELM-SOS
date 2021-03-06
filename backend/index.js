const Koa = require("koa");
const cors = require("koa-cors");
const bodyParser = require('koa-bodyparser');

const CallRouter = require("./routes/calls/index");
const UsersRouter = require("./routes/users/index");

const app = new Koa();

app.use(cors({ origin: true }));
app.use(bodyParser());
app.use(CallRouter.routes());
app.use(CallRouter.allowedMethods());
app.use(UsersRouter.routes());
app.use(UsersRouter.allowedMethods());

app.listen(8888);