import * as Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hi there you!';
});

app.listen(3000);
