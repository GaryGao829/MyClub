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
    'ojs/ojknockout', 'promise', 'ojs/ojtable', 'ojs/ojarraytabledatasource',
    'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojSwitch', 'ojs/ojselectcombobox'], function (oj, ko, $) {
        function model() {
            var self = this;
            var activityId = 7;
            var activityInfoURL = 'http://slc11jru.us.oracle.com:8080/restsql/res/Activity';
            var attendeeInfoURL = 'http://slc11jru.us.oracle.com:8080/restsql/res/QueryEnrollUser';
            var kickAttendeeURL = 'http://slc11jru.us.oracle.com:8080/restsql/res/UserCampaign';
            // var tableContent = [
            //     { MemberId: '1234', Name: 'Tom A', Mailbox: 'toma@xx.com' },
            //     { MemberId: '1235', Name: 'Tom B', Mailbox: 'tomb@xx.com' },
            //     { MemberId: '1236', Name: 'Tom C', Mailbox: 'tomc@xx.com' },
            //     { MemberId: '1237', Name: 'Tom D', Mailbox: 'tomd@xx.com' }
            // ];
            // self.attendee = new oj.ArrayTableDataSource(tableContent, { idAttribute: 'MemberId' });

            self.switchStatus = ko.observable(false);
            self.activity_name = ko.observable("Name to get");
            self.activity_location = ko.observable("Location to get");
            self.activity_start = ko.observable("Starts At 2017-09-23 11:00");
            self.activity_end = ko.observable("Ends At 2017-09-23 23:00");
            self.activity_desc = ko.observable("some description");
            self.isPub = ko.observable(false);
            self.activity_type = ko.observable('');
            getActivityDetail(activityId);

            var tableContent = [];
            getActivityAttendee(tableContent, activityId);
            self.attendee = new oj.ArrayTableDataSource(tableContent, { idAttribute: 'Mailbox' });

            self.kickBtnListener = function () {
                var selObj = $('#attendeeTable').ojTable("option", "selection");
                if (selObj == null || selObj.length == 0) {
                    return;
                }
                var rowIndex = selObj[0].startIndex.row;
                var selectedRow = $('#attendeeTable').ojTable("option", "data")._data[rowIndex];
                var actSelId = selectedRow.UserId;
                console.log(actSelId);
                kickAttendees(actSelId);
            }
            self.updateBtnListener = function () {
                console.log("click update btn");
                updateActivity(activityId);
                getActivityDetail(activityId);
            }
            self.deleteActivityBtnListener = function(){
                console.log("click delete button");
                deleteActivity(activityId);
            }

            //get activity information
            function getActivityDetail(Id) {
                $.ajax({
                    //TODO construct complete url 
                    url: activityInfoURL + "/" + Id,
                    beforeSend: function (xhrObj) {
                        xhrObj.setRequestHeader("Accept", "application/json");
                        //TODO check certification info
                        //xhrObj.setRequestHeader("Authorization", "Basic " + btoa("scmoperations:Welcome1"));
                    },
                    type: 'GET',
                    dataType: 'json',
                    async: false,
                    success(data, textStatus) {
                        $.each(data.activitys, function (i, item) {
                            console.log("get activity info success")
                            self.activity_name = item.activity_name;
                            self.activity_location = item.location;
                            self.activity_start = item.start_time;
                            self.activity_end = item.end_time;
                            self.activity_desc = item.description;
                            self.isPub = item.isPublished;
                            self.activity_type = item.activity_type;
                        })
                    },
                    error(textStatus, errorThrown) {
                        console.log("ERROR in getting activity info ");
                        console.log(textStatus);
                    },
                });
            }
            //delete activity
            function deleteActivity(Id){
                $.ajax({
                    //TODO construct complete url 
                    url: activityInfoURL + "/" + Id,
                    beforeSend: function (xhrObj) {
                        xhrObj.setRequestHeader("Accept", "application/json");
                        //TODO check certification info
                        //xhrObj.setRequestHeader("Authorization", "Basic " + btoa("scmoperations:Welcome1"));
                    },
                    type: 'DELETE',
                    dataType: 'json',
                    async: false,
                    success(data, textStatus) {
                            alert("delete activity successfully");
                            window.close();                    
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
                    url: attendeeInfoURL + '/' + Id,
                    beforeSend: function (xhrObj) {
                        xhrObj.setRequestHeader("Accept", "application/json");
                    },
                    type: 'GET',
                    dataType: 'json',
                    async: false,
                    success(data, textStatus) {
                        $.each(data.activitys, function (i, item) {
                            console.log("get activity attendendee success")
                            $.each(item.userss, function (j, subItem) {
                                if (!subItem.email) return [];
                                contentTable.push({ UserId: subItem.user_id, FirstName: subItem.first_name, LastName: subItem.last_name, Mailbox: subItem.email });
                            })
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
                    //TODO Correct URL !!!
                    url: kickAttendeeURL + "?activity_id=" + activityId + '&' + 'user_id=' + attendeeToBeDel,
                    beforeSend: function (xhrObj) {
                        xhrObj.setRequestHeader("Accept", "application/json");
                        //TODO check certification info
                        //xhrObj.setRequestHeader("Authorization", "Basic " + btoa("scmoperations:Welcome1"));
                    },
                    type: 'DELETE',
                    dataType: 'json',
                    async: false,
                    success() {
                        console.log("kick off success");
                        refreshTable();
                    },
                    error(textStatus, errorThrown) {
                        console.log("ERROR in deleting activity attendendee ");
                        console.log(textStatus);
                    },
                });
            }
            function refreshTable() {
                var newContent = [];
                getActivityAttendee(newContent, activityId);
                var tableData = new oj.ArrayTableDataSource(newContent, { idAttribute: 'UserId' });
                $('#attendeeTable').ojTable("option", "data", tableData);
                $('#attendeeTable').ojTable('refresh');
            }


            function updateActivity(Id) {
                var MEDIA_TYPE_URLENCODED = "application/x-www-form-urlencoded";
                var MEDIA_TYPE_JSON = "application/json";
                var MEDIA_TYPE_XML = "application/xml";

                function buildUrlEncodedBody(attributes) {
                    var body = "";
                    var i = 0;
                    while (i < attributes.length) {
                        if (attributes[i] != "" && attributes[i + 1] != "") {
                            if (body.length > 0) {
                                body = body + "&";
                            }
                            body = body + escape(attributes[i]) + "=" + escape(attributes[i + 1]);
                        }
                        i = i + 2;
                    }
                    return body;
                }
                function prepResponseBodyForDisplay(responseBody, accept) {
                    var html = "<pre style='margin-top:0'>";
                    for (i = 0; i < responseBody.length; i++) {
                        character = responseBody.charAt(i);
                        if (character == "\t") {
                            html = html + "&nbsp;&nbsp;&nbsp;";
                        } else {
                            if (accept == MEDIA_TYPE_XML) {
                                if (character == "<") {
                                    html = html + "&lt;";
                                } else if (character == ">") {
                                    html = html + "&gt;";
                                } else {
                                    html = html + character;
                                }
                            } else {   // contentType == MEDIA_TYPE_JSON
                                if (character == "\t") {
                                    html = html + "&nbsp;&nbsp;&nbsp;";
                                } else {
                                    html = html + character;
                                }
                            }
                        }
                    }
                    return html + "</pre>";
                }


                function doCreate(method, requestBody, contentType) {

                    var url = "http://slc11jru.us.oracle.com:8080/restsql" + "/res/" + "Activity" + "/" + Id;
                    var responseBody = "";
                    var xmlhttp;
                    if (navigator.appName == "Microsoft Internet Explorer") {
                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    } else {
                        xmlhttp = new XMLHttpRequest();
                    }
                    xmlhttp.onreadystatechange = function () {
                        if (xmlhttp.readyState == 4) {
                            if (xmlhttp.status == 200) {
                                responseBody = prepResponseBodyForDisplay(xmlhttp.responseText, MEDIA_TYPE_JSON);
                            } else {
                                responseBody = "<code>" + xmlhttp.responseText + "</code>";

                            }
                        }
                    }
                    xmlhttp.open(method, url, true);
                    xmlhttp.setRequestHeader("Accept", MEDIA_TYPE_JSON);
                    if (contentType != null) {
                        xmlhttp.setRequestHeader("Content-Type", contentType);
                    }
                    xmlhttp.send(requestBody);
                    alert("create successfully");
                }

                function updateActivity() {
                    var body = "";
                    var contentType = "";
                    var act_type = self.activity_type ? '' + self.activity_type : 'Others';
                    var isPub_type = self.isPub ? 1 : 0;
                    var attributes = [
                        "activity_name",
                        self.activity_name,
                        "activity_owner",
                        "julia",
                        "start_time",
                        self.activity_start,
                        "end_time",
                        self.activity_end,
                        "location",
                        self.activity_location,
                        "description",
                        self.activity_desc,
                        "activity_type",
                        act_type,
                        "isPublished",
                        isPub_type];
                    body = buildUrlEncodedBody(attributes);
                    if (self.activity_name == "") {
                        console.log(attributes);
                        alert("At least one name/value required");
                        return;
                    }
                    contentType = MEDIA_TYPE_URLENCODED;

                    doCreate("PUT", body, contentType);
                }
                updateActivity();

            }




        }
        $(function () {
            ko.applyBindings(new model(),
                document.getElementById('activityDetail'));
        })

    });