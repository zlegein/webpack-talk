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
        -Uglify is an example of a plugin you would want to use only after all the loaders have completed transformations.</br>
        QUESTIONS
    </aside>
</section>
