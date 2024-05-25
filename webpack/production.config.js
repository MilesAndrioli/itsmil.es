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
            // add production Optimization rules
        },
    };

    const plugins = [
        ...Base.plugins,
        ...[
            // add production Plugins rules
        ],
    ];

    /**
     * Add sourcemap if enabled
     */
    const sourceMap = {
        devtool: projectOptions.projectSourceMaps.enable
            ? projectOptions.projectSourceMaps.devtool
            : false,
    };

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
        devtool: sourceMap.devtool,
        optimization: optimizationRules,
        module: { rules: [jsRules, cssRules] },
        plugins: plugins,
    };
};
