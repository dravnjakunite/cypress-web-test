const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ke1qcf',
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
