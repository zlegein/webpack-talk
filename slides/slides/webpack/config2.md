<section>
    <pre class="stretch highlight cpp">
    <p>webpack.config.js</p>
        module.exports = {
            <span class="fragment zoom-in highlight-current-green">context:</span> \_\_dirname + "/app",
            <span class="fragment zoom-in highlight-current-green">entry:</span> {
                app: './src/app.js'
            }
            <span class="fragment zoom-in highlight-current-green">output:</span> {
                path: __dirname, // absolute path
                filename: "[name].[hash].bundle.js"
            }
        };
    </pre>
    <aside class="notes">
        -Just like grunt and gulp we define a main config file. Configuration can be plain old javascript objects.
        -Lots of configuration options. way more than we will go over.
        -CONTEXT: base directory (absolute path) default is current directory
        -ENTRY: entry point for the bundle (whatever it finds in the dependency graph will be in that bundle)
        ---string - resolves to a module loaded upon startup
        ---array - all are loaded at startup the last is exported(multiple modules in one bundle)
        ---object - creates multiple entry bundles, chunks them by name
        -OUTPUT: where we want the bundle to go
        -Webpack can only handle JavaScript natively... so that is where loaders come in

    </aside>
</section>
