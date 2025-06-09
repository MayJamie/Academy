/** @format */

const path = require('path');

const handleFiles = (filenames, separator = ' --file ') =>
    filenames.map((file) => path.relative(process.cwd(), file)).join(separator);

const prettierCommand = (filenames) =>
    `npx prettier --write ${handleFiles(filenames, ' ')}`;

module.exports = {
    '*.{js,jsx,ts,tsx}': [prettierCommand],
    '*.{md,json}': [prettierCommand],
};
