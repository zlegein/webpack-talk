<section>
    <h5>Loaders</h5>
    <pre class="">

<span class="fragment">$ npm install xxx-loader --save-dev</span>

<span class="fragment">
require('!style!css!./file.css');
</span>
<span class="fragment">
$ webpack --module-bind 'css=style!css'
</span>
<span class="fragment">
module.exports = {
  module: {
    loaders: [
      <span class="fragment zoom-in highlight-current-green">{ test: /\.css$/, loader: 'style!css' }</span>,
      <span class="fragment zoom-in highlight-current-green">{ test: /\.png$/, loader: "url?limit=100000" }</span>,
      <span class="fragment zoom-in highlight-current-green">{ test: /\.html$/, loader: "raw" }</span>,
    ]
  }
};
</span>

    </pre>

    <aside class="notes">
        -loaders: allow you to preprocess files as you require() or “load” them.</br>
        -loaders: basically allow you to require everything.(css, html, images)</br>
        -loaders: can transform files from different languages(Typescript to Javascript)(es6 to es5)</br>
        -works like gulp where loaders can be chained.</br>
        SETUP</br>
        -specify in require statement. separating loaders with bang</br>
        -bind loaders to an extension on command line, same syntax as before</br>
        -use the preferred config method</br>
        HOW TO READ THESE</br>
        -css files will run through the css-loader where it will find url() and @import expressions and resolve them</br>
        -The style-loader will insert the raw css into a style tag on your page.</br>
        -you can pass options to loaders as query parameters</br>
        -url-loader - works like the file loader, but can return a Data Url if the file is smaller than specified limit.</br>
        -file-loader - Emits the file into the output folder and returns the (relative) url</br>
        -raw-loader - Loads raw content of a file (as utf-8) (directive templateUrl -> template: require('filename')</br>
        QUESTIONS
    </aside>
</section>
