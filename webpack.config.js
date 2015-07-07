module.exports = {
    entry:[
    	'./component/Index.js'
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
	    	{ 
                test: /\.jsx?$/, 
                loaders: ['jsx?harmony']
            },
            {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader'
            }
	    ]
	}
};