
<section>
    <h5>Source Maps</h5>
    <pre>
        <span class="fragment">
            module.exports = {
                devtool: "eval"
            }
        </span>
        <span class="fragment">
            module.exports = {
                devtool: "@cheap-source-map"
            }
        </span>
        <span class="fragment">
            module.exports = {
                devtool: "#source-map"
            }
        </span>
    </pre>
    <aside class="notes">
        -devtool config provides various methods of including source maps</br>
        -lots of options, mainly out of people complaining up and down the high quality/slow processing spectrum</br>
        -eval- is just the generated code - low quality source map, super fast processing good for development</br>
        -cheap-source-map- no column mappings - transformed code, fast processing, so if you are using es6 it will be es5 code</br>
        -source-map - provides mappings to line/column numbers for debugging. slow, high quality original source, slow processing</br>
        -more options available in the docs</br>
        -default pragma is #</br>
        -QUESTIONS
    </aside>
</section>
