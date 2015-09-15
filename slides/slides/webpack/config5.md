<section>
    <h5>Plugins</h5>
    <pre>
        <span class="fragment">$ npm install xxx-plugin --save-dev</span>
        <span class="fragment">
        var webpack = require('webpack');
        module.exports = {
            plugins: [
                new webpack.optimize.UglifyJsPlugin({
                    sourceMap: false,
                    mangle: false
                })
            ]
        }
        [http://webpack.github.io/docs/list-of-plugins.html](http://webpack.github.io/docs/list-of-plugins.html)
        </span>
        <span class="fragment">
        var ExtractTextPlugin = require("extract-text-webpack-plugin");
        module.exports = {
            module: {
                loaders: [
                    {
                        test: /\.css$/,
                        loader: ExtractTextPlugin.extract("style", "css")
                    }
                ]
            },
            plugins: [
                new ExtractTextPlugin("styles.css")
            ]
        }
        </span>

    </pre>

    <aside class="notes">
        -plugins provided added functionality to various transformation phases</br>
        -two types of plugins(built-in and others)</br>
        -whats the difference between a plugin and a loader?
            - because there are things you want to do post transformation
        QUESTIONS
    </aside>
</section>
