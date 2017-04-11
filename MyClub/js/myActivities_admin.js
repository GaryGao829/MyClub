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
            var user = 'julia'; //todo change
            var activityUrl = 'http://slc11jru.us.oracle.com:8080/restsql/res/Activity?activity_owner='; 
            
            // var tableContent = [
            //     { ActivitiyId: '11', ActivityName: 'act A', ActivityOwner: 'xxxxxxm',StartDate:'sd',EndDate:'ed',Location:'loc',Published:'yes' },
            //     { ActivitiyId: '12', ActivityName: 'act B', ActivityOwner: 'asdfm',StartDate:'sd',EndDate:'ed',Location:'loc',Published:'yes' },
            //     { ActivitiyId: '13', ActivityName: 'act C', ActivityOwner: 'tfffomsfadsfas',StartDate:'sd',EndDate:'ed',Location:'loc',Published:'yes' },
            //     { ActivitiyId: '14', ActivityName: 'act D', ActivityOwner: 'tddoffff',StartDate:'sd',EndDate:'ed',Location:'loc',Published:'yes' }
            // ];
            var tableContent = [];
            getMyActivities(tableContent, user);
            self.activities = new oj.ArrayTableDataSource(tableContent, { idAttribute: 'ActivityId' });

            function getMyActivities(contentTable, user) {
                console.log("in get my activities fun");
                console.log(activityUrl + user);
                $.ajax({
                    //TODO construct complete url 
                    url: activityUrl + user,
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
                            contentTable.push({ ActivityId: item.activity_id, ActivityName: item.activity_name, ActivityOwner: item.activity_owner, StartDate: item.start_time, EndDate: item.end_time, Location: item.location,ActivityType:item.activity_type ,Published: item.isPublished })
                        })
                    },
                    error(textStatus, errorThrown) {
                        console.log("ERROR in getting activity info ");
                        console.log(textStatus);
                    },
                });
            }
            self.manageBtnClick = function () {
                var selObj = $('#manageActivityTable').ojTable("option", "selection");
                if (selObj == null || selObj.length == 0) {
                    return;
                }
                var rowIndex = selObj[0].startIndex.row;
                var selectedRow = $('#manageActivityTable').ojTable("option", "data")._data[rowIndex];
                var actSelId = selectedRow.ActivityId;
                console.log(actSelId);
                return actSelId;
            }

        }
        $(function () {
            ko.applyBindings(new model(),
                document.getElementById('myActivities'));
        })
    });


