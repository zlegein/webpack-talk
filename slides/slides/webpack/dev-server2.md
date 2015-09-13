<section>
    <pre>
    <span class="fragment">
    module.exports = {
        entry: {
            app: [<span class="fragment zoom-in highlight-current-green">'webpack-dev-server/client?http//localhost:8080'</span>,
                  'webpack/hot/dev-server',
                  './js/app.js'
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    };
    </span>
    <span class="fragment">
    &lt;html&gt;
      &lt;body&gt;
         &lt;script src="http://localhost:8080/webpack-dev-server.js"> &lt;/script&gt;
      &lt;/body&gt;
    &lt;/html&gt;
    </span>
    <span class="fragment">http://localhost:8080/webpack-dev-server</span>
    </pre>
    <aside class="notes">
        -in order to get all the hot reloading fanciness working, this is what is needed
        -add dev server script and the hot loading script to your bundle
        -then add the HMR plugin as a plugin
        -you can instead add the dev server script in your index.html file or hit this url and have the dev server
        serve your app in iframe mode.
        -QUESTIONS
    </aside>
</section>
