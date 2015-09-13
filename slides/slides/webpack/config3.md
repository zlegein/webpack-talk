<section>
    <pre class="stretch highlight cpp">
    <p>webpack.config.js continued</p>
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
        -loaders: basically you are requiring everything.
        -can be chained

    </aside>
</section>

