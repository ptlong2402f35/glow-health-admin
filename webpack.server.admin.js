const path = require("path");

module.exports = {
	entry: "./src_ssr_admin/index.ts",
	target: "node",
	mode: "production",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"],
				},
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ["ts-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
	},
	output: {
		path: path.resolve(__dirname, "public_ssr_admin/"),
		publicPath: "/public_ssr_admin/",
		filename: "index.js",
	},
};
