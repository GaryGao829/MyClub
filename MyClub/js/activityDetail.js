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
            var activityId;
            var activityInfoURL;
            var tableContent = [
                { MemberId: '1234', Name: 'Tom A', Mailbox: 'toma@xx.com' },
                { MemberId: '1235', Name: 'Tom B', Mailbox: 'tomb@xx.com' },
                { MemberId: '1236', Name: 'Tom C', Mailbox: 'tomc@xx.com' },
                { MemberId: '1237', Name: 'Tom D', Mailbox: 'tomd@xx.com' }
            ];
            self.attendee = new oj.ArrayTableDataSource(tableContent, { idAttribute: 'MemberId' });

            self.activity_name = ko.observable("Name to get");
            self.activity_location = ko.observable("Location to get");
            self.activity_start = ko.observable("Starts At 2017-09-23 11:00");
            self.activity_end = ko.observable("Ends At 2017-09-23 23:00");
            self.activity_desc = ko.observable("some description");
            self.kickBtnListener = function () {
                console.log("click button");
                var attendeeTobeDel = currentSelection();
                if (attendeeTobeDel === null ) {
                    window.alert("Select attendee first");
                    return;
                }
                //kickAttendees(attendeeTobeDel);
            }

            // getActivityDetail(activityId);
            // getActivityAttendee(tableContent,activityId);


            //get activity information
            function getActivityDetail(Id) {
                $.ajax({
                    //TODO construct complete url 
                    url: activityInfoURL + "?q=SomeServiceName" + Id,
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

            //get activity attendendee
            function getActivityAttendee(contentTable, Id) {
                $.ajax({
                    //TODO construct complete url 
                    url: activityInfoURL + "?q=SomeServiceName" + Id,
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
                            console.log("get activity attendendee success")
                            //TODO fill in the content 
                            //contentTable.push({ SupplyPlan: item.CollabName, LastPublished: item.LastPublished, OrderForecasts: item.OrderForecasts, UndefinedRelationships: item.UnmanagedCount, DefinedRelationships: item.ManagedCount, PublishedBy: item.Publisher });
                        })
                    },
                    error(textStatus, errorThrown) {
                        console.log("ERROR in getting activity attendendee ");
                        console.log(textStatus);
                    },
                });
            }

            //Delete attendees
            function kickAttendees(attendeeToBeDel) {
                if (!attendeeToBeDel) {
                    return;
                }
                $.ajax({
                    //TODO construct complete url 
                    url: activityInfoURL + "?q=SomeServiceName" + attendeeToBeDel,
                    beforeSend: function (xhrObj) {
                        xhrObj.setRequestHeader("Accept", "application/json");
                        //TODO check certification info
                        //xhrObj.setRequestHeader("Authorization", "Basic " + btoa("scmoperations:Welcome1"));
                    },
                    type: 'POST',
                    dataType: 'json',
                    async: false,
                    success(data, textStatus) {
                        //TODO  modify structure
                        $.each(data.items, function (i, item) {
                            console.log("delete successful")
                        })
                    },
                    error(textStatus, errorThrown) {
                        console.log("ERROR in deleting activity attendendee ");
                        console.log(textStatus);
                    },
                });
            }

            //Current Selection value of table
            function currentSelection() {
                var selectionObj = $("#attendeeTable").ojTable("option", "selection");
                var selectionTxt = "";
                if (!selectionObj) {
                    return null;
                }
                var i = 0;
                for (i = 0; i < selectionObj.length; i++) {
                    var range = selectionObj[i];
                    var startIndex = range.startIndex;
                    var endIndex = range.endIndex;
                    var startKey = range.startKey;
                    var endKey = range.endKey;

                    if (startIndex != null && startIndex.row != null) {
                        //row selection
                        selectionTxt = selectionTxt + "Row Selection\n";
                        selectionTxt = selectionTxt + "start row index: " + startIndex.row + ", end row index: " + endIndex.row + "\n";
                    }
                    if (startKey != null && startKey.row != null) {
                        selectionTxt = selectionTxt + "start row key: " + startKey.row + ", end row key: " + endKey.row + "\n";
                    }

                    if (startIndex != null && startIndex.column != null) {
                        //column selection
                        selectionTxt = selectionTxt + "Column Selection\n";
                        selectionTxt = selectionTxt + "start column index: " + startIndex.column + ", end column index: " + endIndex.column + "\n";
                    }
                    if (startKey != null && startKey.column != null) {
                        selectionTxt = selectionTxt + "start column key: " + startKey.column + ", end column key: " + endKey.column + "\n";
                    }
                }
                console.log(selectionTxt);

            };


        }
        $(function () {
            ko.applyBindings(new model(),
                document.getElementById('activityDetail'));
        })

    });