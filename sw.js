importScripts('js/sw-toolbox.js');

toolbox.precache([
    'css/styles.css',
    'js/lib/kotlin.js',
    'js/companion.js',
    'js/teleguide-web.js',
    'index.html',
]);

toolbox.router.default = toolbox.networkFirst;
toolbox.options.networkTimeoutSeconds = 5;

toolbox.router.get('icons/*', toolbox.fastest);
