<section>
    <h5>webpack.config.js continued</h5>
    <pre class="stretch highlight cpp">
        module.exports = {
            context: \_\_dirname + "/app",
            entry: {
                app: './src/app.js'
            }
            output: {
                path: __dirname, // absolute path
                filename: "[name].[hash].bundle.js"
            },
            module: {
                <span class="fragment zoom-in highlight-current-green">loaders: </span> [
                    { test: /\.css$/, loader: "style!css" }
                ]
            }
        };
    </pre>
    <aside class="notes">
        -loaders: basically allow you to require everything.(css, html, images)
        -works like gulp where loaders can be chained.

    </aside>
</section>

