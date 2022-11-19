// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'data',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
