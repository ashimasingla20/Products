const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin")
module.exports = {
  // Tell webpack to run babel on every file it runs through
  mode: 'development',
  plugins: [ new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()],
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
          {
            loader: MiniCssExtractPlugin.loader,
          },
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
            {
              loader: MiniCssExtractPlugin.loader,
            },
            //require.resolve('style-loader'),
            require.resolve('css-loader'),
            require.resolve('sass-loader')
        ]
      }
    ]
  }
};
