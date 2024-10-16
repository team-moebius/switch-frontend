module.exports = function (api) {
  const isStorybook = api.env('storybook');

  if (!isStorybook) api.cache(true);

  const presets = ['babel-preset-expo'];

  const plugins = [];

  if (isStorybook) {
    presets.push('module:metro-react-native-babel-preset');
    plugins.push(
      ['@babel/plugin-transform-class-properties'],
      ['@babel/plugin-transform-private-methods'],
      ['@babel/plugin-transform-private-property-in-object']
    );
  }

  return {
    presets,
    plugins,
  };
};
