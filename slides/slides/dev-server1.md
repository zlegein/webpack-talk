
<section>
    <h5>Webpack Dev Server</h5>
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
        -development server that automatically refreshes content in the browser while you develop your application.</br>
        -equivalent to tools such as LiveReload or Browsersync</br>
        -You should not use the webpack-dev-server as a backend. Its only purpose is to serve static (webpacked) assets.</br>
        -you can install globally and run separate from project</br>
        -or add it as an npm script for the project.</br>
        QUESTIONS
    </aside>
</section>


