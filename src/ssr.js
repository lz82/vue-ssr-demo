const Vue = require('vue');
const ServerRender = require('vue-server-renderer');

/* eslint-disable */
const app = new Vue({
  template: `<div>this is a ssr page.</div>`
});

const render = ServerRender.createRenderer();

render.renderToString(app)
.then(html => {
  console.log(html);
})
.catch(err => {
  console.log(err);
  throw err;
});
