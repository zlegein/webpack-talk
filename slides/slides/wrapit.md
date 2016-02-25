<section>
    <h5>Webpack 2</h5>
    <div>Tree Shaking dead code elimination algorithm for ECMAScript 2015+</div>
    <p></p>
    <div>CommonJS Out, Native Imports In</div>
    <aside class="notes">
        -eliminates unused ES6 exports, even if its in the dependency graph.</br>
        -one of the big hits from the JSPM world on webpack was that it couldn't handle native imports and had to convert to CommonJS.</br>
        -which is big because Common JS leaves export references alive, so anything exported, used or not, is in your bundle.
    </aside>
</section>
