<section>
    <h3>Webpack vs Browserify</h3>
    <div class="fragment">Browserify was designed to bundle node packages for the browser</div>
    <div class="fragment">It can handle other resources(css, images, fonts), do code splitting and transformation, with plugins.</div>
    <div class="fragment">Webpack was designed to bundle anything</div>
    <aside class="notes">
        -is similar to browserify, but this is a dev-ops tool, so if it works, keep it.</br>
        -the plugins are forcing browserify to do things it wasn't originally designed to do, so configs can get messy.</br>
        -webpack is a tool which takes JavaScript modules with dependencies and bundles them into files</br>
        -it doesn't care what those dependencies are, they just need to be javascript modules.</br>
        -in the case of css, images and fonts... webpack uses loaders to turn anything into javascript modules.</br>
    </aside>
</section>



