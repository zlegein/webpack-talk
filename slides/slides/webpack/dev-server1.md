
<section>
    <h3 class="fragment">Webpack Dev Server</h3>
    <p class="fragment">node.js express server that uses a connect-based middleware stack.</p>
    <pre>
        <span class="fragment">$ npm install webpack-dev-server --save-dev</span>
        <span class="fragment">
        {
          "scripts": {
            "dev": "webpack-dev-server --port 9000"
          }
        }
        </span>
        <span class="fragment">$ npm run dev</span>
    </pre>
    <aside class="notes">
        -development server that automatically refreshes content in the browser while you develop your application.
        -equivalent to tools such as LiveReload or Browsersync
        -You should not use the webpack-dev-server as a backend. Its only purpose is to serve static (webpacked) assets.
    </aside>
</section>


