const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const { DESTRUCTION } = require('dns');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'J.A.T.E',
      }),
      new InjectManifest({
        swSrc:'./src-sw.js',
        swDest:'src-sw.js',
      }),
      new WebpackPwaManifest({
        name: 'Text editor',
        short_name: 'J.A.T.E',
        display: 'standalone',
        inject: true,
        fingerprints: false,
        start_url: '/',
        publicPath: '/',
        description: 'text editor PWA',
        background_color: '#0025',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons')
          },
        ]
      })
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
