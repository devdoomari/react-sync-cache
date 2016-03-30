const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const host = 'localhost';
const port = 3001
new WebpackDevServer(webpack(config), {
  publicPath: '',
  hot: true,
  historyApiFallback: true,
}).listen(port, host, function(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Listening at http://'+host+":"+port);
});
