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
        plugins.push(
            require("autoprefixer")
            // require("postcss-import-ext-glob"),
            // require("postcss-import"),
            // require("postcss-nested-ancestors"),
            // require("postcss-nested"),
            // require("postcss-advanced-variables")
        );
    }

    return {
        plugins: plugins,
    };
};
