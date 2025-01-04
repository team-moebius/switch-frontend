const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.resolver.assetExts.push('ttf');
config.resolver.extraNodeModules = {
  src: path.resolve(__dirname, 'src'),
};

module.exports = config;
