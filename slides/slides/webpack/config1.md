<section>
    <pre class="stretch highlight cpp">
    <p>webpack.config.js</p>
        module.exports = {
               <span class="fragment zoom-in highlight-current-green">entry: "./entry.js",</span>
               output: {
                   path: __dirname,
                   filename: "bundle.js"
               }
           };
    </pre>
    <aside class="notes">
        -Just like grunt and gulp we define a main config file. Configuration can be plain old javascript objects.
        -Lots of configuration options. way more than we will go over.
    </aside>
</section>
