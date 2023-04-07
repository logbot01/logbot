module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        fallback: {
          "crypto": require.resolve("crypto-browserify"),
          "timers": require.resolve("timers-browserify"),
          "stream": require.resolve("stream-browserify"),
          "zlib": require.resolve("zlib-browserify")
        }
      }      
  };