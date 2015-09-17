<section>
    <h5>Plugins</h5>
<pre>
<span class="fragment">
var ExtractTextPlugin =
    require("extract-text-webpack-plugin");

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
        -The ExtractTextPlugin is a plugin you will see a lot dealing with css</br>
            -- instead of allowing the css-loader and the style-loader to inline the css into javascript, it will extract it.</br>
            -- and then put all the css into a separate css file.</br>
            -- this is faster as the styles now have their own file and can be loaded in parallel.</br>
        QUESTIONS
    </aside>
</section>
