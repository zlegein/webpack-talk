<section>
<h5>Live Reloading</h5>
    <pre>
    <span class="fragment">
    module.exports = {
        entry: {
            <span class="fragment zoom-in highlight-current-green">app: ['webpack-dev-server/client?http//localhost:9000',
                  'webpack/hot/dev-server',
                  './js/app.js'
            ]</span>
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    };
    </span>
    <span class="fragment">
    &lt;script src="http://localhost:8080/webpack-dev-server.js"> &lt;/script&gt;
    </span>
    <span class="fragment">http://localhost:8080/webpack-dev-server</span>
    </pre>
    <aside class="notes">
        -in order to get all the hot reloading fanciness working, this is what is needed</br>
        -add dev server script and the hot loading script to your bundle</br>
        -then add the HMR plugin as a plugin</br>
        -you can instead add the dev server script in your index.html file or hit this url and have the dev server
        serve your app in iframe mode.</br>
        QUESTIONS
    </aside>
</section>
