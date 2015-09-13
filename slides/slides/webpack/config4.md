<section>
    <pre class="">

        <span class="fragment">$ npm install xxx-loader --save-dev</span>

        <span class="fragment">
        require('!style!css!./file.css');
        </span>
        <span class="fragment">
        module.exports = {
          module: {
            loaders: [
              { test: /\.css$/, loader: 'style!css' },
              { test: /\.png$/, loader: "url?limit=100000" },
              { test: /\.html$/, loader: "raw" }
            ]
          }
        };
        </span>

    </pre>

    <aside class="notes">
        -loaders: basically you are requiring everything.
        -can be chained
        -use config
        -The css-loader will go through the CSS file and find url() and @import expressions and resolve them
        -The style-loader will insert the raw css into a style tag on your page.
        -url-loader - works like the file loader, but can return a Data Url if the file is smaller than a limit.
        -file-loader - Emits the file into the output folder and returns the (relative) url
        -raw-loader - Loads raw content of a file (as utf-8) (directive templateUrl -> template: require('filename')
    </aside>
</section>
