<section>
    <pre class="stretch highlight cpp">
        <span class="fragment fade-in" style="position:absolute; margin-left: auto; margin-right: auto; left: 0; right: 0;" data-fragment-index="0">
           \_\_\_\_\_\_\_\_\_\_\_\_\_
          |    SPA      |
          |             |
          |             |
          |             |
          |             |
          |             |
          |\_\_\_\_\_\_\_\_\_\_\_\_\_|
        </span>
        <span class="fragment fade-in" style="position:absolute; margin-left: auto; margin-right: auto; left: 0; right: 0;" data-fragment-index="1">
           \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
          |      SPA       |
          |                |
          |                |
          |                |
          |                |
          |                |
          |\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_|
        </span>

        <span class="fragment fade-in" style="position:absolute; margin-left: auto; margin-right: auto; left: 0; right: 0;" data-fragment-index="2">
           \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
          |         SPA           |
          |                       |
          |                       |
          |                       |
          |                       |
          |                       |
          |                       |
          |                       |
          |                       |
          |                       |
          |\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_|
        </span>
    </pre>
    <aside class="notes">
        -SPA came about because we wanted a way to modify the data on the page
        without modifing the page itself.<br>
        -Great load it up and zip around the app.<br>
        -Quickly realizing that these apps are really bloated.<br>
        -Finding out that concatenating all your JS into 1 file is the wrong approach.<br>
        -Larger the SPA the bigger this file is going to be.<br>
        -Only download the JS you need for each page.<br>
        -Forces you to architect around a dependency graph of modules rather than flat files.<br>
        -Little bit smarter about throwing everything in the boat.
   </aside>
</section>

