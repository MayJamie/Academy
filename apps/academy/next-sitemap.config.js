/** @format */

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    /* eslint-disable turbo/no-undeclared-env-vars -- allow */
    siteUrl:
        process.env.SITE_URL ||
        process.env.VERCEL_URL ||
        'https://academy.ideffect.com/',
    generateRobotsTxt: true, // (optional)
    // ...other options
};
