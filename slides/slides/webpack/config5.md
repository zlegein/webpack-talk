<section>
    <pre class="">

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
        -plugins provided added functionality to various transformation phases
        -two types of plugins(built-in and others)
        -why use plugin when you can use a loader?
    </aside>
</section>
