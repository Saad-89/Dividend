const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  // Modify resolver to support SVG files with react-native-svg-transformer
  return mergeConfig(config, {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: config.resolver.assetExts.filter(ext => ext !== 'svg'), // Remove 'svg' from assetExts
      sourceExts: [...config.resolver.sourceExts, 'svg'], // Add 'svg' to sourceExts
    },
  });
})();


// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);



