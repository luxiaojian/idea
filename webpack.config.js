const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const postcssNested = require('postcss-nested');
const postcssOpacity = require('postcss-opacity');

const rootPaths = [
  path.join(__dirname, './src/')
];

module.exports = {
  entry: {
    app: './src/index.js',
    example: './examples/index.js',
    vendor: [
      'vue', 'vue-router'
    ]
  },

  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: '[name].js'
  },

  vue: {
    loaders: {
      javascript: 'babel?presets=es2015',
      css: ExtractTextPlugin.extract('style', 'css')
    },
    postcss: [postcssNested()]
  },

  babel: {
    presets: ['es2015']
  },

  module: {
    preLoaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader' }
    ],
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?compatibility=ie8!postcss') },
      { test: /\.html$/, loader: 'html' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?(\?t=\d{10})?$/, loader: "url-loader?limit=10000&minetype=application/font-woff&name=[path][name].[hash:6].[ext]" },
      { test: /\.jpe?g$|\.gif$|\.png$/, loader: "url-loader?limit=10000&name=[path][name].[hash:6].[ext]" },
      { test: /\.(ttf|svg|eot)(\?v=[0-9]\.[0-9]\.[0-9])?(\?t=\d{10})?$/, loader: "file-loader?name=[path][name].[hash:6].[ext]" }
    ]
  },

  resolve: {
    root: rootPaths
  },

  postcss: function() {
    return [
      cssImport({
        path: [path.join(__dirname, './css')],
        onImport: function (files) {
          files.forEach(this.addDependency);
        }.bind(this)
      }),
      postcssNested,
      postcssOpacity,
      cssnext({ browsers: ['ie >= 8', 'chrome >= 26', 'Firefox ESR'] })
    ];
  },

  plugins: [
    new ExtractTextPlugin("example.css")
  ]
};

