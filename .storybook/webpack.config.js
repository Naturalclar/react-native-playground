const path = require('path');

module.exports = async ({config}) => {
  config.module.rules.push({
    test: /\.tsx?$/,

    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@babel/preset-typescript'],
        },
      },
    ],
  });
  config.module.rules.push({
    test: /\.jsx?$/,
    include: [
      path.resolve(__dirname, '../node_modules/react-native'),
      path.resolve(__dirname, '../node_modules/react-native-vector-icons'),
    ],
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            'module:metro-react-native-babel-preset',
            '@babel/preset-flow',
          ],
        },
      },
    ],
  });
  // convert react-native to react-native-web for storybook
  config.resolve.alias['react-native$'] = require.resolve('react-native-web');
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
