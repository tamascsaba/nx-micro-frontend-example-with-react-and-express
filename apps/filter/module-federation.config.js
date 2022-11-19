// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'filter',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
