<style>span {font-size:40pt;}</style>
<section>
<h5>Hot Module Replacement</h5>
    <pre>
    <div class="fragment" data-fragment-index="1">
    <span class="fragment zoom-in highlight-current-green large-span" data-fragment-index="4">Module A</span> <-- has replacement code
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
        -Three modules C->B->A, where A is the hot module, meaning it communicates with the HMR runtime about updated modules</br>
        -Module C is updated, it will ask B if it can handle the update. It can't, so both are outdated</br>
        -Module A IS hot and CAN handle the update, so new Module B and C are injected</br>
        -If it gets all the way to the entry module then it will reload the whole page.</br>
        -Style Loader</br>
        -QUESTIONS
    </aside>
</section>
