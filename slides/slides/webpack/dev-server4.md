<section>
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
    </pre>
    <aside class="notes">
        -The last step here is to tell webpack to make requests to the dev-server, we do this by providing the full url
        in the output.publicPath
        -QUESTIONS
    </aside>
</section>



