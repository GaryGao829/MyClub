requirejs.config({
    paths:
    {
        'ojs': '../lib/jet/2.1.0/js/libs/oj/v2.1.0/debug',
        'knockout': '../lib/jet/2.1.0/js/libs/knockout/knockout-3.4.0.debug',
        'jquery': '../lib/jet/2.1.0/js/libs/jquery/jquery-3.1.0.min',
        'promise': '../lib/jet/2.1.0/js/libs/es6-promise/es6-promise.min',
        'ojL10n': '../lib/jet/2.1.0/js/libs/oj/v2.1.0/ojL10n',
        'jqueryui-amd': '../lib/jet/2.1.0/js/libs/jquery/jqueryui-amd-1.12.0.min',
        'ojdnd': '../lib/jet/2.1.0/js/libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
        'hammerjs': '../lib/jet/2.1.0/js/libs/hammer/hammer-2.0.8.min',
        'ojtranslations': '../lib/jet/2.1.0/js/libs/oj/v2.1.0/resources',
        'text': '../lib/jet/2.1.0/js/libs/text/text',
        'css': '../lib/jet/2.1.0/js/libs/require-css/css',
        'demo': 'demo',
    },
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        }
    },
    config: {
        ojL10n: {
            merge: {

            }
        }
    }
});
require(['ojs/ojcore', 'knockout', 'jquery', 'demo'], function (oj, ko, $, demo) { }
)