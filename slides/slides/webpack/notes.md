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

