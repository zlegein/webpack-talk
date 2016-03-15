<section>
    <h5>Configs</h5>
<pre>
<span class="fragment">$ npm install webpack --save-dev</span>
<span class="fragment">
$ webpack <span class="fragment zoom-in highlight-current-green">--config</span> webpack.config.js

module.exports = {
  // configuration
};
</span>
<span class="fragment">
var webpack = require("webpack");

webpack({
  // configuration
});
 </span>
</pre>

    <aside class="notes">
        -just like grunt and gulp we need to feed webpack the configuration options<br/>
        -this can be done via the cli, by specifying the file with the config option<br/>
        -use nodejs api and pass the config object as a param<br/>
        -**the configurations for webpack are just a plain old javascript object</br>
    </aside>
</section>
