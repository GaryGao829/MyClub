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
    'ojs/ojknockout', 'promise', 'ojs/ojtable', 'ojs/ojarraytabledatasource', 'ojs/ojinputtext', 'ojs/ojbutton'], function (oj, ko, $) {
        function model() { 
            var self = this;
            var userId;
            var tableContent = [
                { ActivitiyId: '11', ActivityName: 'act A', balabala: 'xxxxxxm' },
                { ActivitiyId: '12', ActivityName: 'act B', balabala: 'asdfm' },
                { ActivitiyId: '13', ActivityName: 'act C', balabala: 'tfffomsfadsfas' },
                { ActivitiyId: '14', ActivityName: 'act D', balabala: 'tddoffff' }
            ];
            //self.activities = getMyActivities(userId);
            self.activities = new oj.ArrayTableDataSource(tableContent, { idAttribute: 'ActivitiyId' });

            function getMyActivities(userId){
                $.ajax({
                    //TODO construct complete url 
                    url: "someurl" + "?q=SomeServiceName" + userId,
                    beforeSend: function (xhrObj) {
                        xhrObj.setRequestHeader("Accept", "application/json");
                        //TODO check certification info
                        //xhrObj.setRequestHeader("Authorization", "Basic " + btoa("scmoperations:Welcome1"));
                    },
                    type: 'GET',
                    dataType: 'json',
                    async: false,
                    success(data, textStatus) {
                        //TODO  modify structure
                        $.each(data.items, function (i, item) {
                            console.log("get activity info success")
                            //TODO fill in the content 
                        })
                    },
                    error(textStatus, errorThrown) {
                        console.log("ERROR in getting activity info ");
                        console.log(textStatus);
                    },
                });
            }
        }
        $(function () {
            ko.applyBindings(new model(),
                document.getElementById('myActivities'));
        })
    });


