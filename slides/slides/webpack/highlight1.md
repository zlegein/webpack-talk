
<section>
    <h3>Opinionated</h3>
    <p class="fragment">assumes you need to move files from a source directory to a destination directory</p>
    <p class="fragment">assumes you are working with javascript libraries in module formats (CommonJS, AMD, ES6)</p>
    <p class="fragment">assumes you will want to use various transformers</p>
    <aside class="notes">
        -webpack can handle all of these formats but prefers CommonJS.
        -it can also, handle both npm and bower packages, but highly prefers npm.
        -NPM maintains its dependency graph which is more in-line with how webpack works
        -vs Bower which removes the dependency graph entirely.
        </aside>
</section>
