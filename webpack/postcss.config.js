/**
 * PostCSS configuration file as configured under cssRules.use['postcss-loader']
 * in development.js and production.js
 *
 * @docs https://postcss.org/docs/
 * @plugins https://postcss.org/docs/postcss-plugins
 */
module.exports = (projectOptions) => {
    let plugins = [];

    if (projectOptions.projectCss.use === "sass") {
        plugins.push(require("autoprefixer"));
    } else {
        plugins.push(require("@tailwindcss/postcss"));
    }

    return {
        plugins: plugins,
    };
};
