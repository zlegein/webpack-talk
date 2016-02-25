<section>
    <h5>Loaders</h5>
    <div class="fragment">allows you to preprocess files as you require() or “load” them.</div>
    <p></p>
    <div class="fragment">loaders allow you to require everything(css, html, images)</div>
    <p></p>
    <div class="fragment">can transform files from different languages(Typescript to Javascript)(es6 to es5)</div>
    <p></p>
    <div class="fragment">loaders can be chained</div>
    <p></p>
    <div class="fragment">provides preloaders and postloaders</div>
    <aside class="notes">
        -loaders: allow you to preprocess files as you require() or “load” them.</br>
        -loaders: basically allow you to require everything.(css, html, images).</br>
        -loaders: can transform files from different languages(Typescript to Javascript)(es6 to es5)</br>
        -works like gulp where loaders can be chained.</br>
        -preloaders - used as a means to run checks on types of files before you run through the beefier loader.</br>
        -preload example would be to lint your js before you want to run the loaders or do image compression.</br>
        -postloaders would be for code coverage instrumentation.</br>
    </aside>
</section>

