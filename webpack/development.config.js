module.exports = (projectOptions) => {
    process.env.NODE_ENV = "development";

    const Base = require("./base.config")(projectOptions);

    const jsRules = {
        ...Base.jsRules,
        ...{
            // add development JS rules
        },
    };

    const cssRules = {
        ...Base.cssRules,
        ...{
            // add development CSS rules
        },
    };

    const optimizationRules = {
        ...Base.optimizationRules,
        ...{
            // add development Optimization rules
        },
    };

    const plugins = [
        ...Base.plugins,
        ...[
            // add development Plugins rules
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
        mode: "development",
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
