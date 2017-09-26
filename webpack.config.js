const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const nodeEnv = process.env.NODE_ENV || "development";
const isProd = nodeEnv === "production";

let config = {
    devtool: isProd ? "hidden-source-map" : "source-map",
    context: path.resolve("./src"),
    entry: {
        app: ["./ts/index.ts", "./ts/index.tsx"],
        vendor: "./ts/vendor.ts"
    },
    output: {
        path: path.resolve("./dist/js"),
        filename: "[name].bundle.js",
        sourceMapFilename: "[name].bundle.map",
        devtoolModuleFilenameTemplate: function (info) {
            return "file:///" + info.absoluteResourcePath;
        },
        // publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.tsx?$/,
                exclude: ["node_modules"],
                use: ["awesome-typescript-loader", "source-map-loader"]
            },
            {test: /\.html$/, loader: "html-loader"},
            {test: /\.css$/, loaders: ["style-loader", "css-loader"]}
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".json"]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                // eslint-disable-line quote-prop
                NODE_ENV: JSON.stringify(nodeEnv)
            }
        }),
        new HtmlWebpackPlugin({
            title: "Typescript Webpack Starter",
            template: "!!ejs-loader!src/main.html"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
            filename: "vendor.bundle.js"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false},
            sourceMap: true
        }),
        new DashboardPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                tslint: {
                    emitErrors: true,
                    failOnHint: true
                }
            }
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        compress: true,
        port: 3001,
        hot: true
    }
};

module.exports = config;





