
<section>
<h5>Live Reloading Simplified</h5>
    <pre>
    <span class="fragment" data-fragment-index="1">
    {
      "scripts": {
        "dev": "webpack-dev-server <span class="fragment zoom-in highlight-current-green" data-fragment-index="2">--hot --inline</span> --port 9000"
      }
    }
    </span>
    <span class="fragment" data-fragment-index="2">
    module.exports = {
        entry: {
            app: [<span class="fragment zoom-in highlight-current-green" data-fragment-index="3">'webpack-dev-server/client?http//localhost:8080'</span>,
                  <span class="fragment zoom-in highlight-current-green" data-fragment-index="5">'webpack/hot/dev-server'</span>,
                  './js/app.js'
            ]
        },
        plugins: [
            <span class="fragment zoom-in highlight-current-green" data-fragment-index="4">new webpack.HotModuleReplacementPlugin()</span>
        ]
    };
    </span>
    </pre>
    <aside class="notes">
        - add --inline and you can remove the dev server script from your bundle
        - add --hot and you can remove the HotModuleReplacementPlugin plugin, it will do this for you, and you don't want to add this twice
        - add --hot and --inline and you can remove the hot loading script from your bundle
        QUESTIONS
    </aside>
</section>


