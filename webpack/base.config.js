const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const WebpackBar = require("webpackbar");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (projectOptions) => {
    const jsRules = {
        test: projectOptions.projectJs.rules.test,
        include: projectOptions.projectJsPath,
        exclude: /(node_modules|bower_components|vendor)/,
    };

    const cssRules = {
        test:
            projectOptions.projectCss.use === "sass"
                ? projectOptions.projectCss.rules.sass.test
                : projectOptions.projectCss.rules.postcss.test,
        // exclude: /(node_modules|bower_components|vendor)/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: require(projectOptions.projectCss.postCss)(
                        projectOptions
                    ),
                },
            },
        ],
    };
    if (projectOptions.projectCss.use === "sass") {
        cssRules.use.push({
            loader: "sass-loader",
        });
    }

    const optimizationRules = {};

    const plugins = [
        new WebpackBar({ reporters: ["profile"], profile: true }),
        new MiniCssExtractPlugin({
            filename: projectOptions.projectCss.filename,
        }),
        new CleanWebpackPlugin(),
    ];

    // Add Browsersync to plugins if enabled
    if (projectOptions.browserSync.enable === true) {
        const browserSyncOptions = {
            host: projectOptions.browserSync.host,
            port: projectOptions.browserSync.port,
            proxy: projectOptions.browserSync.proxy,
            files: projectOptions.browserSync.files,
        };
        plugins.push(
            new BrowserSyncPlugin(browserSyncOptions, {
                reload: projectOptions.browserSync.reload,
            })
        );
    }

    return {
        jsRules: jsRules,
        cssRules: cssRules,
        optimizations: optimizationRules,
        plugins: plugins,
    };
};
