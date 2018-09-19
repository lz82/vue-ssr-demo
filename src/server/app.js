import Koa from 'koa2';

import Router from 'koa-router';

import fs from 'fs';
import path from 'path';

// import axios from 'axios';

import createApp from '../app.js';

console.log(createApp);

// import ServerRender from 'vue-server-renderer';
const ServerRender = require('vue-server-renderer'); // 不能以import的方式引入

const app = new Koa();

const router = new Router();

router.get('*', (ctx, next) => {
  // const app = new Vue({
  //   template: `
  //               <div >
  //                 this is from vue-server-renderer
  //                 url:{{url}}
  //               </div>
  //             `,

  //   data () {
  //     return {
  //       url: ''
  //     };
  //   },

  //   created () {
  //     // this.$nextTick(() => {
  //       axios.get('https://api.github.com/users/lz82')
  //       .then(res => {
  //         this.url = res.data.url;
  //         console.log(this.url);
  //       });
  //     // });
  //     // this.url = ctx.request.header.host;
  //   }
  // });
  const app = createApp(ctx);

  // const render = ServerRender.createRenderer();
  const template = fs.readFileSync(path.resolve(__dirname, './template/homepage.template.html'), 'utf-8');
  const render = ServerRender.createRenderer({
    template: template
  });

<<<<<<< HEAD
  const content = {
    title: 'this is ssr demo',
=======
  const context = {
    title: 'vue ssr demo',
>>>>>>> 4a61f016465aa817a20b68b28edb39e6fa93a097
    meta: `
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <meta name="description" content="Vue.js 服务端渲染指南">
          `
  };

<<<<<<< HEAD
  render.renderToString(app, content)
=======
  render.renderToString(app, context)
>>>>>>> 4a61f016465aa817a20b68b28edb39e6fa93a097
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
