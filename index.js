const Koa = require('koa');
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = require('./router');
app.use(router.routes());

app.use(serve('../../client'));
app.use(bodyParser());


app.listen(3000, ()=> console.log(`port 3000`))