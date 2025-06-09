/** @format */

const baseNextConfig = require('../../base-next-config');

module.exports = {
    ...baseNextConfig,
    reactStrictMode: true,
    transpilePackages: ['shared-client', 'shared-server'],
};
