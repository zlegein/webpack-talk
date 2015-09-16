<section>
<h5>Hot Module Replacement</h5>
    <pre>
    <div class="fragment" data-fragment-index="1">
    <span class="fragment zoom-in highlight-current-green" data-fragment-index="4">Module A</span> <-- has replacement code
    <span>   |   </span>
    <span class="fragment zoom-in highlight-current-green" data-fragment-index="3">Module B</span>
    <span>   |   </span>
    <span class="fragment zoom-in highlight-current-green" data-fragment-index="2">Module C</span>
    </div>
    <ul>
    <li class="fragment" data-fragment-index="5"><i>style-loader</i> has implemented this feature</li>
    <li class="fragment" data-fragment-index="6" style="color:orange;">This is an experimental feature</li>
    </ul>
    </pre>
    <aside class="notes">
        -Module A is a hot module, meaning it implements the HMR API and ties into specific events in its management pipeline.</br>
        -Module C is updated, parent is module B which isn't hot, then B and C are now outdated</br>
        -Module A CAN handle the update, so new Module B and C are injected</br>
        -If it gets all the way to the entry module then it will reload the whole page.</br>
        -some loaders generate modules that are hot-updateable(the style-loader is one of them)</br>
        -developers can decide which modules they would want to be hot-updatebale</br>
        -QUESTIONS
    </aside>
</section>