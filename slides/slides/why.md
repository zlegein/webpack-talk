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
        -took a lot of best practices from the server side and introduced them to the client side and used tools like gulp and grunt to deal with the dev ops side of front end development</br>
        -that worked well, but as these SPA's grew we were throwing more and more client side code and resources into them</br>
        -we ended up with the foamy latte problem</br>
        -in order to combat the foamy latte problem we need to move away from concatenating everyting into these monolithic bloated files</br>
        -And start breaking these up into more palatable modules that forces you to architect around a dependency graph of modules rather than flat files</br>
   </aside>
</section>

