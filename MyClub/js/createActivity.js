requirejs.config({
    paths:
    {
        'ojs': '../lib/jet/3.0.0/js/libs/oj/v3.0.0/debug',
        'knockout': '../lib/jet/3.0.0/js/libs/knockout/knockout-3.4.0.debug',
        'jquery': '../lib/jet/3.0.0/js/libs/jquery/jquery-3.1.1.min',
        'promise': '../lib/jet/3.0.0/js/libs/es6-promise/es6-promise.min',
        'ojL10n': '../lib/jet/3.0.0/js/libs/oj/v3.0.0/ojL10n',
        'jqueryui-amd': '../lib/jet/3.0.0/js/libs/jquery/jqueryui-amd-1.12.0.min',
        'ojdnd': '../lib/jet/3.0.0/js/libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
        'hammerjs': '../lib/jet/3.0.0/js/libs/hammer/hammer-2.0.8.min',
        'ojtranslations': '../lib/jet/3.0.0/js/libs/oj/v3.0.0/resources',
        'text': '../lib/jet/3.0.0/js/libs/text/text',
        'css': '../lib/jet/3.0.0/js/libs/require-css/css',
        'customElements': '../lib/jet/3.0.0/js/libs/webcomponents/CustomElements.min'

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



require(['ojs/ojcore', 'knockout', 'jquery',
    'ojs/ojknockout', 'ojs/ojinputtext', 'ojs/ojinputnumber',
    'ojs/ojradioset', 'ojs/ojcheckboxset',
    'ojs/ojselectcombobox',
    'ojs/ojdatetimepicker', 'ojs/ojtimezonedata'],
    function (oj, ko, $) {
        function StateModel() {
            var self = this;
            self.placeholder = ko.observable(true);
            
            self.startDate = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            self.startTime = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            self.endDate = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            self.endTime = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            
            
    }
        $(
            function () {
                ko.applyBindings(new StateModel(),
                    document.getElementById('form-container'));
            }
        );
    });
