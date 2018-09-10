import Koa from 'koa2';

import Router from 'koa-router';

import Vue from 'vue';
import fs from 'fs';
import path from 'path';

// import ServerRender from 'vue-server-renderer';
const ServerRender = require('vue-server-renderer'); // 不能以import的方式引入

const app = new Koa();

const router = new Router();

router.get('/', (ctx, next) => {
  const app = new Vue({
    template: '<div>this is from vue-server-renderer</div>'
  });

  // const render = ServerRender.createRenderer();
  const template = fs.readFileSync(path.resolve(__dirname, './template/homepage.template.html'), 'utf-8');
  console.log(template);
  const render = ServerRender.createRenderer({
    template: template
  });

  const context = {
    title: 'vue ssr demo',
    meta: `
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <meta name="description" content="Vue.js 服务端渲染指南">
          `
  };

  render.renderToString(app, context)
  .then(html => {
    ctx.status = 200;
    ctx.body = html;
  })
  .catch(err => {
    ctx.status = 500;
    ctx.body = 'Internal Server Error';
    throw err;
  });
});

app
.use(router.routes())
.use(router.allowedMethods())
.listen(4000);
