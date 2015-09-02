Supported module formats: AMD, CommonJS

    Via loader (plug-in): ES6

Supported package managers: Bower, npm
Loaders for non-code: CSS, templates, …
On-demand loading (chunked transfer)
Built-in development server



code snippet

Input: is specified via the property entry. This is where the execution of JavaScript code starts.

Output: webpack bundles the entry file and everything it depends on into the output file bundle.js
 (which resides in the same directory as webpack.config.js).


 Property test: specifies what files the loader should be used for.
 Single test: regular expression or string with an absolute path
 Multiple tests: array of single tests (logical “and”)
