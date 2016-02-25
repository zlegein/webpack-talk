<section>
    <h5>Loader Order</h5>
    <div class="fragment">
        <div>preloaders specified in the configuration</div>
        <div>loaders specified in the configuration</div>
        <div>loaders specified in the request (e.g. require('raw!./file.js'))</div>
        <div>postLoaders specified in the configuration</div>
    </div>
    <p></p>
    <div class="fragment">
        <h5>loader overrides</h5>
        <div>! will disable configured preLoaders<div>
        <pre>require("!raw!./script.coffee")</pre>
        <div>!! will disable all loaders specified in the configuration<div>
        <pre>require("!!raw!./script.coffee")</pre>
        <div>-! will disable configured preLoaders and loaders but not the postLoaders<div>
        <pre>require("-!raw!./script.coffee")</pre>
    </div>
    <aside class="notes">
        -if you want a one off loader override on a specific file you can use these options</br>
        -QUESTIONS
    </aside>
</section>

