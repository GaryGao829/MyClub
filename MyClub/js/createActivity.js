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
    'ojs/ojdatetimepicker', 'ojs/ojtimezonedata', 'ojs/ojswitch'],
    function (oj, ko, $) {
        function StateModel() {
            var self = this;
            self.placeholder = ko.observable(true);
            self.startDate = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            self.startTime = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            self.endDate = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            self.endTime = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            self.isPublished = ko.observable(false);
            self.submitBtnClick = function () {
                console.log("submit button click")
                var name = $("#activityNameInput").ojInputText("option", "value");
                var location = $("#activityLocation").ojInputText("option", "value");
                var startDate = $("#startDate").ojInputDate("option", "value");
                var startTime = $("#startTime").ojInputTime("option", "value").substr(1);
                var endDate = $("#endDate").ojInputDate("option", "value");
                var endTime = $("#endTime").ojInputTime("option", "value").substr(1);
                var type = $("#activityType").ojInputText("option", "value");
                var description = $("#activityDesc").ojTextArea("option", "value");
                var isPub = $("#isPublishedSwitch").ojSwitch("option", "value") ? 1 : 0;


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

                    var url = "http://slc11jru.us.oracle.com:8080/restsql" + "/res/" + "Activity";
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

                function createActivity() {
                    var body = "";
                    var contentType = "";
                    var attributes = ["activity_name",
                        name,
                        "activity_owner",
                        "julia",
                        "start_time",
                        startDate + ' ' + startTime,
                        "end_time",
                        endDate + ' ' + endTime,
                        "location",
                        location,
                        "description",
                        description,
                        "activity_type",
                        type,
                        "isPublished",
                        isPub];
                    body = buildUrlEncodedBody(attributes);
                    if (name == "") {
                        alert("At least one name/value required");
                        return;
                    }
                    contentType = MEDIA_TYPE_URLENCODED;

                    doCreate("POST", body, contentType);
                }
                createActivity();
            }
        }
        $(
            function () {
                ko.applyBindings(new StateModel(),
                    document.getElementById('form-container'));
            }
        );
    });
