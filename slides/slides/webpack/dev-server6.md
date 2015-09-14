<section>
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
        -Module A has hot replacement code
        -Module C is updated, parent is module B which doesn't have HRC and can't handle update, then B and C are now outdated
        -Module A CAN handle the update, so new Module B and C are injected
        -If it gets all the way to the entry module then it will reload the whole page.
        -DEMO
        -QUESTIONS
    </aside>
</section>
