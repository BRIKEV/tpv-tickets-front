const { defineConfig } = require('cypress');
const { devServer } = require('@cypress/webpack-dev-server');

module.exports = defineConfig({
  // Component testing, JavaScript, Vue CLI, Webpack
  component: {
    module: {
      rules: [
        // ... other rules
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
      ],
    },
    devServer,
    devServerConfig: {},
  },
});
