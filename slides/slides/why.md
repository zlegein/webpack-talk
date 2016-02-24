<section>
    <p>Today’s websites are evolving into web apps</p>
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
        <span class="fragment fade-in" style="position:absolute; margin-left: auto; margin-right: auto; left: 0; right: 0;" data-fragment-index="3">
            <img src="images/bloated.jpg"/>
        </span>

    </pre>
    <aside class="notes">
        -SPA came about because we wanted a way of manipulating the data on a page without the overhead of reloading the whole page.<br>
        -More and more javascript powering these webapps and the challenge now is trying to keep our code organized and performant</br>
        -This is where concatenating all this javascript into one bloated file is not the right approach. gulp and grunt</br>
        -One of the best ways to keep this code organized is to break it up into modules</br>
        -And it forces you to architect around a dependency graph of modules rather than flat files.<br>
   </aside>
</section>

