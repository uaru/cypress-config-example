// import * as webpack from "@cypress/webpack-preprocessor";
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const webpack = require('@cypress/webpack-preprocessor');

module.exports = async (on, config) => {
    await addCucumberPreprocessorPlugin(on, config);
    on(
        "file:preprocessor",
        webpack({
            webpackOptions: {
                resolve: {
                    extensions: [".ts", ".js"],
                },
                module: {
                    rules: [
                        {
                            test: /\.ts$/,
                            exclude: [/node_modules/],
                            use: [
                                {
                                    loader: "ts-loader",
                                },
                            ],
                        },
                        {
                            test: /\.feature$/,
                            use: [
                                {
                                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                                    options: config,
                                },
                            ],
                        },
                    ],
                },
            },
        })
    );

    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
};