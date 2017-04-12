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
        	console.log(window.location.href);
            var self = this;
            var user_id = 2;
            var activityId = 1;
            var activityInfoURL = 'http://slc11jru.us.oracle.com:8080/restsql/res/Activity';
            var unenrollURL = 'http://slc11jru.us.oracle.com:8080/restsql/res/UserCampaign?activity_id=' + activityId + '&user_id=' + user_id;
            var enrollURL = 'http://slc11jru.us.oracle.com:8080/restsql/res/UserCampaign';
            var tableContent = [];
            self.attendee = new oj.ArrayTableDataSource(tableContent, { idAttribute: 'MemberId' });

            self.activity_name = ko.observable("Name to get");
            self.activity_location = ko.observable("Location to get");
            self.activity_start = ko.observable("Starts At 2017-09-23 11:00");
            self.activity_end = ko.observable("Ends At 2017-09-23 23:00");
            self.activity_type = ko.observable("Others");
            self.activity_desc = ko.observable("some description");
            self.unenrollBtnListener = function () {
                unenroll();
            }
            self.enrollBtnListener = function () {
                enroll();
            }
            getActivityDetail(activityId);


            //get activity information
            function getActivityDetail(Id) {
                $.ajax({
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
                            self.activity_location = item.description;
                            self.activity_start = item.start_time;
                            self.activity_end = item.end_time;
                            self.activity_desc = item.description;
                            self.activity_type = item.activity_type
                        })
                    },
                    error(textStatus, errorThrown) {
                        console.log("ERROR in getting activity info ");
                        console.log(textStatus);
                    },
                });
            }


            // unenroll
            function unenroll() {
                $.ajax({
                    //TODO construct complete url 
                    url: unenrollURL,
                    beforeSend: function (xhrObj) {
                        xhrObj.setRequestHeader("Accept", "application/json");
                        //TODO check certification info
                        //xhrObj.setRequestHeader("Authorization", "Basic " + btoa("scmoperations:Welcome1"));
                    },
                    type: 'DELETE',
                    dataType: 'json',
                    async: false,
                    success(data, textStatus) {
                        //TODO  modify structure
                        if (data.rowsAffected == 0) {
                            console.log("you are not in this activity");
                            alert("unEnroll failed")
                        }else if(data.rowsAffected > 0){
                            console.log("unenroll successfully");
                        }
                    },
                    error(textStatus, errorThrown) {
                        console.log("ERROR in deleting activity attendendee ");
                        console.log(textStatus);
                    },
                });
            }

            //enroll
            function enroll() {
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

                    var url = enrollURL;
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
                                alert("enroll failed");
                            }
                        }
                    }
                    xmlhttp.open(method, url, true);
                    xmlhttp.setRequestHeader("Accept", MEDIA_TYPE_JSON);
                    if (contentType != null) {
                        xmlhttp.setRequestHeader("Content-Type", contentType);
                    }
                    xmlhttp.send(requestBody);
                }
                //Enroll activity
                function enrollActivity() {

                    var body = "";
                    var contentType = "";
                    var attributes = [
                        "activity_id",
                        activityId,
                        "user_id",
                        user_id];
                    body = buildUrlEncodedBody(attributes);
                    if (body == "") {
                        alert("parameter missing");
                        return;
                    }
                    contentType = MEDIA_TYPE_URLENCODED;

                    doCreate("POST", body, contentType);
                }
                enrollActivity();
            }


        }
        $(function () {
            ko.applyBindings(new model(),
                document.getElementById('activityDetail'));
        })

    });