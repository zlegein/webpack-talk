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
    </span>
    <span class="fragment">
    var ExtractTextPlugin = require("extract-text-webpack-plugin");
    module.exports = {
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: <span class="fragment zoom-in highlight-current-green">ExtractTextPlugin.extract("style", "css")</span>
                }
            ]
        },
        plugins: [
            <span class="fragment zoom-in highlight-current-green">new ExtractTextPlugin("styles.css")</span>
        ]
    }
    </span>
    </pre>

    <aside class="notes">
        -plugins provided added functionality to various transformation phases</br>
        -two types of plugins(built-in and others)</br>
        -whats the difference between a plugin and a loader?</br>
            -- there are things you want to do post transformation</br>
            -- there are things you want to augment during the loader life cycle</br>
        -Uglify is an example of a plugin you would want to use only after all the loaders have completed transformations.</br>
        -The ExtractTextPlugin is a plugin you will see a lot dealing with css</br>
            -- instead of allowing the css-loader and the style-loader to inline the css into javascript, it will extract it.</br>
            -- and then put all the css into a separate css file.</br>
            -- this is faster as the styles now have their own file and can be loaded in parallel.</br>
        QUESTIONS
    </aside>
</section>
