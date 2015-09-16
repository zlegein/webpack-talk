<section>
    <p>webpack.config.js</p>
    <pre class="stretch highlight cpp">
        module.exports = {
            <span class="fragment zoom-in highlight-current-green">context:</span> \_\_dirname + "/src",
            <span class="fragment zoom-in highlight-current-green">entry:</span> {
                app: 'app.js'
            }
            <span class="fragment zoom-in highlight-current-green">output:</span> {
                path: __dirname, // absolute path
                filename: "[name].[hash].bundle.js"
            }
        };
    </pre>
    <aside class="notes">
        -Tackling the first opinion, we set up the source and destination points.</br>
        -CONTEXT: base directory (absolute path) default is current directory.</br>
        -ENTRY: entry point for the bundle (whatever it finds in the dependency graph will be in that bundle)</br>
        ---string - resolves to a module loaded upon startup.</br>
        ---array - all are loaded at startup the last is exported(multiple modules in one bundle)</br>
        ---object - creates multiple entry bundles, chunks them by name</br>
        -OUTPUT: where we want the bundle to go</br>
        -....Webpack can only handle JavaScript natively... so that is where loaders come in</br>
        QUESTIONS
    </aside>
</section>
