/** @format */

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */
const { version } = require('./package.json');
const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const baseNextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    publicRuntimeConfig: {
        version,
    },
    modularizeImports: {
        '@mui/material': {
            transform: '@mui/material/{{member}}',
        },
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
        '@mui/styles': {
            transform: '@mui/styles/{{member}}',
        },
        '@mui/lab': {
            transform: '@mui/lab/{{member}}',
        },
    },
    onDemandEntries: {
        // Period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 600 * 1000,
        // Number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 15,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles/sass')],
        logger: {
            warn: (message) => {
                // eslint-disable-next-line no-console
                console.warn(message);
            },
            debug: (message) => {
                // eslint-disable-next-line no-console
                console.log(message);
            },
        },
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                path: false,
                worker_threads: false,
            };
        }

        return config;
    },
};

module.exports = baseNextConfig;
