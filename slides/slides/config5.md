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
</pre>

    <aside class="notes">
        -plugins provided added functionality to various transformation phases</br>
        -two types of plugins(built-in and others)</br>
        -whats the difference between a plugin and a loader?</br>
            -- there are things you want to do post transformation</br>
            -- there are things you want to augment during the loader life cycle</br>
        -Here is an example of the uglify plugin where you would only want to use after all the loaders have completed transformations.</br>
        QUESTIONS
    </aside>
</section>
