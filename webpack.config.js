module.exports = {
	entry: "./public/index.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-2']
				}
			}
		]
	},
	watch: true
}