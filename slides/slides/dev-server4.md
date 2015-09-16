<section>
<h5>Live Reloading Simplified</h5>
    <pre>
    <span class="fragment">
    module.exports = {
        entry: "./entry.js",
        output: {
            path: __dirname,
            filename: "bundle.js",
            <span class="fragment zoom-in highlight-current-green">publicPath:</span> "http://localhost:9000"
        }
    };
    </span>
    <span class="fragment">app: ['webpack-dev-server/<span class="fragment zoom-in highlight-current-green">client?http//localhost:9000</span>']</span>
    </pre>
    <aside class="notes">
        -The last step here is to tell webpack to make requests to the dev-server, we do this by providing the full url
        in the output.publicPath.</br>
        -this replaces the need for the client param when we added our dev server script to our bundle</br>
        -QUESTIONS
    </aside>
</section>



