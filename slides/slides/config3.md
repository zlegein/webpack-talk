<section>
    <h5>Loader Order</h5>

   <li>preloaders specified in the configuration</li>
   <li>loaders specified in the configuration</li>
   <li>loaders specified in the request</li> (e.g. require('raw!./file.js'))
   <li>postLoaders specified in the configuration</li>
    <p>loader overrides</p>
       <li>adding ! to a request will disable configured preLoaders
           require("!raw!./script.coffee")</li>
       <li>adding !! to a request will disable all loaders specified in the configuration
           require("!!raw!./script.coffee")</li>
       <li>adding -! to a request will disable configured preLoaders and loaders but not the postLoaders
            require("-!raw!./script.coffee")</li>
    <aside class="notes">
        -loaders: basically allow you to require everything.(css, html, images)
        -works like gulp where loaders can be chained.
        -preloaders - used as a means to run checks on types of files before you run through the beefier loader
        -preload example would be to lint your js before you want to run the loaders
        -preload only

    </aside>
</section>

