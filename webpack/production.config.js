const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (projectOptions) => {
    process.env.NODE_ENV = "production";

    const Base = require("./base.config")(projectOptions);

    const jsRules = {
        ...Base.jsRules,
        ...{
            // add production JS rules
        },
    };

    const cssRules = {
        ...Base.cssRules,
        ...{
            // add production CSS rules
        },
    };

    const optimizationRules = {
        ...Base.optimizationRules,
        ...{
            minimizer: [new CssMinimizerPlugin()],
        },
    };

    const plugins = [
        ...Base.plugins,
        ...[
            // add production Plugins rules
        ],
    ];

    /**
     * The configuration that's being returned to webpack
     */
    return {
        mode: "production",
        entry: projectOptions.projectJs.entry,
        output: {
            path: projectOptions.projectOutput,
            filename: projectOptions.projectJs.filename,
        },
        devtool: false,
        optimization: optimizationRules,
        module: { rules: [jsRules, cssRules] },
        plugins: plugins,
    };
};
