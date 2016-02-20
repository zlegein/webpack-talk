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
    </pre>
    <aside class="notes">
        -Module A is a hot module, meaning it communicates with the HMR runtime about updated modules.</br>
        -Module C is updated, parent is module B which isn't hot, then B and C are now outdated</br>
        -Module A CAN handle the update, so new Module B and C are injected</br>
        -If it gets all the way to the entry module then it will reload the whole page.</br>

        -QUESTIONS
    </aside>
</section>
