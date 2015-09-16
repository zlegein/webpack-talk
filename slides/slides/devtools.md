
<section>
    <h5>Source Maps</h5>
    <pre>
        <span class="fragment">
        {
            devtool: "eval"
        }
        </span>
        <span class="fragment">"@cheap-source-map"</span>
        <span class="fragment">"#source-map"</span>

    </pre>
    <aside class="notes">
        -devtool config provides various methods of including source maps
        -lots of options, mainly out of people complaining up and down the high quality/slow processing spectrum
        -eval- is just the generated code - low quality source map, super fast processing
        -cheap-source-map- no column mappings - transformed code, fast processing, so if you are using es6 it will be es5 code
        -source-map - provides mappings to line/column numbers for debugging. slow, high quality original source, slow processing
        -more options available in the docs
        -default pragma is #
        -QUESTIONS
    </aside>
</section>
