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
    'ojs/ojknockout', 'promise', 'ojs/ojtable', 'ojs/ojarraytabledatasource', 'ojs/ojselectcombobox', 'ojs/ojinputtext', 'ojs/ojbutton'], function (oj, ko, $) {
        function model() {
            var self = this;
            var baseURL = 'http://slc11jru.us.oracle.com:8080/restsql/res/Activity?isPublished=1';
            var type; // 如果从类型方块 跳转过来 ， 赋值。
            self.keyword = ko.observable();
            self.searchBtnClick = function () {
                var keyword = $("#search-input").ojInputSearch("option", "rawValue");
                var newContent = [];
                searchActivity(newContent, keyword, type);
                var tableData = new oj.ArrayTableDataSource(newContent, { idAttribute: 'ActivityId' });
                $('#activityTable').ojTable("option", "data", tableData);
                $('#activityTable').ojTable('refresh');


            }

            function searchActivity(contentTable, keyword, type) {
                var keyword_param = keyword ? '&description=%25' + keyword + '%' : '';
                var type_param = type ? '&activity_type=keyword' : '';
                console.log("in searchActivity fun");
                $.ajax({
                    //TODO construct complete url 
                    url: baseURL + keyword_param + type_param,
                    beforeSend: function (xhrObj) {
                        xhrObj.setRequestHeader("Accept", "application/json");
                    },
                    type: 'GET',
                    dataType: 'json',
                    async: false,
                    success(data, textStatus) {
                        //TODO  modify structure
                        $.each(data.activitys, function (i, item) {
                            console.log("get activity info success");
                            contentTable.push({ ActivityId: item.activity_id, ActivityName: item.activity_name, ActivityOwner: item.activity_owner, StartDate: item.start_time, EndDate: item.end_time, Location: item.location, ActivityType: item.activity_type, Description:item.description})
                        })
                    },
                    error(textStatus, errorThrown) {
                        console.log("ERROR in getting activity info ");
                        console.log(textStatus);
                    },
                });
            }

            var tableContent = [];
            searchActivity(tableContent, null, null);
            self.activities = new oj.ArrayTableDataSource(tableContent, { idAttribute: 'ActivityId' });

        }
        $(function () {
            ko.applyBindings(new model(),
                document.getElementById('myActivities'));
        })
    });
