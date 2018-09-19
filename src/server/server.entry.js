const {createApp} = require('../app.js');

export default context => {
  const {app} = createApp();
  return app;
};
