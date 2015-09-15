<section>
    <h5>Configs</h5>
    <pre class="">

        <span class="fragment">$ npm install webpack --save-dev</span>

        <span class="fragment">
        $ webpack --config webpack.config.js

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
        -lots of stuff going on behind these basic configs, handles a lot of the dirty work for you.
        -however, if you want to get dirty, you can.
        -just like grunt and gulp we need to feed webpack the configuration options<br/>
        -this can be done via the cli, by specifying the file with the config option<br/>
        -use nodejs api and pass the config object as a param<br/>
    </aside>
</section>
