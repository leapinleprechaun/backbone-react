module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            // { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {test : /\.jsx?/,include : APP_DIR, exclude: /node_modules/, loader : 'babel'}
        ]
    }
};

//https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack