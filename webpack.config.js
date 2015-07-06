module.exports = {
    entry:[
    	'./component/index.js'
    ],
    output: {
	    path: __dirname + '/assets/',
	    publicPath: "/assets/",
	    filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
	    loaders: [
	    	{ test: /\.jsx?$/, loaders: ['jsx?harmony']}
	    ]
	}
};