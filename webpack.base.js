const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
  // Tell webpack to run babel on every file it runs through
  mode: 'development',
  plugins: [ 
    //new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',//for async
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          // require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
            'isomorphic-style-loader',
            // {
            //   loader: MiniCssExtractPlugin.loader,
            // },
            //require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: true,
                //localIdentName: '[path][name]__[local]--[hash:base64:5]',
                //hashPrefix: 'hash'
              },
            },
            require.resolve('sass-loader')
        ]
      }
    ]
  }
};
