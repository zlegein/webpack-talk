### Why Webpack

Concatenating all your JS into 1 file is the wrong approach.
Larger the SPA the bigger this file is going to be.

Only download the JS you need for each "Page"
Page == Entrypoint

Each page should not download shared libraries again.

Each entrypoint in your app should only download what it needs

Module System - a way of expressing dependencies between modules

Modules have a fine grain dependency graph

allows for optimizing bundles

gulp and grunt work great on files, suck for modules

work with aschronous syntax and out of the box

forces you to architect around a dependency graph of modules rather than flat files

browserify - makes one giant js file

requirejs - issues to many http request, no notion of multiple entry points


webpack is fed a configuration object. Depending on your usage of webpack there are two ways to pass this configuration object:

two ways to load

cli - read from webpack.config.js file

module.exports = {
    // configuration
};

Nodejs.api pass the config object as a parameter

webpack({
    // configuration
}, callback);


doesn't need to be pure json, use any javascript you want


entry - entry point for the bundle

string - resolves to a module loaded upon startup

array - all are loaded at startup the last is exported

object - creates multiple entry bundles, chunks them by name

{
    entry: {
        page1: "./page1",
        page2: ["./entry1", "./entry2"]
    },
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    }
}


output - where you want bundles to go

path - The output directory as absolute path

publicPath - The output.path from the view of the Javascript / HTML page.

css problem






