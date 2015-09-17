
<section>
    <h3>Opinionated</h3>
    <p class="fragment">assumes you need to move files from a source directory to a destination directory</p>
    <p class="fragment">assumes you are working with javascript libraries in module formats (CommonJS, AMD, ES6)</p>
    <p class="fragment">assumes you will want to use various transformers</p>
    <aside class="notes">
        -grunt had its opinion on how you would deal with your client side code</br>
        -gulp thought this opinion wasn't entirely correct and removed all the opinions and let the developer decide</br>
        -webpack moves back to having an opinion on how we manage our code.</br>
        -webpack can handle all of these formats unlike others that only handle one</br>
        -it can also, handle both npm and bower packages, but prefers npm and states this in the docs.</br>
        -NPM maintains its dependency graph which is more in-line with how webpack works</br>
        -vs Bower which removes the dependency graph entirely.</br>
        -lastly, assumes you will want transformations</br>
        QUESTIONS
        </aside>
</section>
