<section>
<h5>How does it work</h5>
<div><i class="fragment zoom-in highlight-current-green">module.hot.accept</i> - Is module hot enabled</div>
<div><i class="fragment zoom-in highlight-current-green">module.hot.check</i> - Check loaded modules for updates</div>
<div><i class="fragment zoom-in highlight-current-green">module.hot.apply</i> -  Apply updates if found</div>
<aside class="notes">
- need to implement module.hot.accept somewhere up the chain.</br>
- code asks HMR runtime to check for updates.</br>
- HMR runtime downloads updates tells app that updates available.</br>
- code asks HMR runtime to apply updates.</br>
- HMR runtime applies the updates.</br>
- developers can decide which modules they would want to be hot-updatebale</br>
- some loaders generate modules that are hot-updateable(the style-loader is one of them)</br>
QUESTIONS
</aside>
</section>
