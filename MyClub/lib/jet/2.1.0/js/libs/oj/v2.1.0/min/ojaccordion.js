/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojcollapsible"],function(a,g){(function(){a.Na("oj.ojAccordion",g.oj.baseComponent,{widgetEventPrefix:"oj",options:{multiple:!1,expanded:null,beforeExpand:null,expand:null,beforeCollapse:null,collapse:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-accordion oj-component").attr("role","group");this.options.expanded=this.H5(this.options.expanded);this.Ff()},ih:function(a,b,d){this.jh(b,d,{launcher:this.element.find(".oj-collapsible-header-icon").first()})},
_destroy:function(){this.element.removeClass("oj-accordion oj-component").removeAttr("role");this.element.children().removeClass("oj-accordion-collapsible");this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy")},_setOption:function(a,b,d){if("multiple"===a)!1==b&&!0==this.options.multiple&&this.element.children(".oj-expanded").first().siblings(".oj-collapsible").ojCollapsible("collapse",!1);else if("expanded"===a){this.GBa(b);return}this._super(a,
b,d)},refresh:function(){this._super();this.Ff()},Ff:function(){this.fya();this._setOption("disabled",this.options.disabled);this.h9=!0;this._setOption("expanded",this.options.expanded);this.h9=!1;this.nn()},fya:function(){this.element.children(":oj-collapsible").each(function(){g(this).ojCollapsible("option","expandArea","header")});this.cp=this.element.children().not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible")},
nn:function(){var a={keydown:this.Ev,ojbeforeexpand:this.xoa,ojexpand:this.Mra,ojbeforecollapse:this.voa,ojcollapse:this.xpa};this._off(this.cp);this._on(this.cp,a)},Ev:function(a){if(!a.altKey&&!a.ctrlKey&&(g(a.target).hasClass("oj-collapsible-header")||g(a.target).hasClass("oj-collapsible-header-icon"))){var b=g.ui.keyCode,d=this.cp.not(".oj-disabled"),e=d.length,f=g(a.target).closest(".oj-collapsible"),h=d.index(f),k=!1;if(0<=h)switch(a.keyCode){case b.RIGHT:case b.DOWN:k=d[(h+1)%e];break;case b.LEFT:case b.UP:k=
d[(h-1+e)%e];break;case b.HOME:k=d[0];break;case b.END:k=d[e-1]}k&&(f&&g(f).trigger("ojfocusout"),g(k).trigger("ojfocus"),a.preventDefault())}},T5:function(a){return!this.options.multiple&&(a=g(a.target).closest(".oj-collapsible"),a.parent().is(":oj-ojAccordion"))?a.siblings(".oj-collapsible.oj-expanded").map(function(){return g(this).data("oj-ojCollapsible")}):g()},xoa:function(a){if(!this.PJ(a))return!0;var b,d=this,e;this.T5(a).each(function(){var f=this.element;e=d.Ky(f,g(a.target));f={header:f.find(".oj-collapsible-header"),
content:f.find(".oj-collapsible-content")};return b=this._trigger("beforeCollapse",a,f)});e||(e=d.Ky(null,g(a.target)));this.options.multiple||this._trigger("beforeExpand",a,e);return b},Mra:function(a,b){if(this.PJ(a)&&!this.RR){var d,e=this;this.T5(a).each(function(){this.collapse(!1,a,b);d=e.Ky(this.element,g(a.target))});d||(d=e.Ky(null,g(a.target)));this.options.multiple||this._trigger("expand",a,d);this.LW()}},voa:function(a,b){return this.PJ(a)&&!this.options.multiple?this._trigger("beforeCollapse",
a,this.O8(a,b)):!0},xpa:function(a,b){if(!this.RR&&this.PJ(a)){var d=this.O8(a,b);this.options.multiple||this._trigger("collapse",a,d);this.LW()}},Ky:function(a,b){return{fromCollapsible:a,toCollapsible:b}},O8:function(a,b){var d;if(b.toCollapsible)d=b;else{if(a.originalEvent&&a.originalEvent.target){var e=g(a.originalEvent.target);e.hasClass("oj-collapsible")&&(d=this.Ky(g(a.target),e))}d||(d=this.Ky(g(a.target),null))}return d},PJ:function(a){return g(a.target).is(this.cp)},LW:function(){var c,
b=[];this.cp.each(function(a){g(this).ojCollapsible("option","expanded")&&(c=g(this).attr("id"),b.push(c?c:a))});a.b.u4(this.options.expanded,b)||this.option("expanded",b,{_context:{ob:!0,Ed:!0}})},H5:function(a){if(Array.isArray(a)){var b,d=[];this.element.children().each(function(e){(b=g(this).attr("id"))?-1!=a.indexOf(b)?d.push(b):-1!=a.indexOf(e)&&d.push(b):-1!=a.indexOf(e)&&d.push(e)});!this.options.multiple&&1<d.length&&(d=[d[d.length-1]]);return d}return null},GBa:function(c){this.h9||(c=this.H5(c));
if(c){var b=this,d,e,f,h=0;this.cp.each(function(k){d=g(this);e=d.attr("id");f=!1;e?e==c[h]&&(f=!0):k==c[h]&&(f=!0);f&&h++;d.ojCollapsible("option","expanded")!==f&&(a.r.warn("JET Accordion: override collapsible "+k+" expanded setting"),b.RR=!0,d.ojCollapsible("option","expanded",f),b.RR=!1)})}this.LW()},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;var b=a.subId;a=a.index;if("number"!==typeof a||0>a||a>=this.cp.length)return null;a=this.cp[a];switch(b){case "oj-accordion-content":b=
"oj-collapsible-content";break;case "oj-accordion-header":b="oj-collapsible-header";break;case "oj-accordion-disclosure":case "oj-accordion-header-icon":b="oj-collapsible-disclosure";break;case "oj-accordion-collapsible":return a;default:return null}return g(a).ojCollapsible("getNodeBySubId",{subId:b})},getSubIdByNode:function(a){for(var b=-1,d=a;d;){b=Array.prototype.indexOf.call(this.cp,d);if(-1!=b)break;d=d.parentElement}d=null;if(-1!=b)switch(a=(a=g(this.cp[b]).ojCollapsible("getSubIdByNode",
a))?a:{},a.subId){case "oj-collapsible-content":d="oj-accordion-content";break;case "oj-collapsible-header":d="oj-accordion-header";break;case "oj-collapsible-disclosure":case "oj-collapsible-header-icon":d="oj-accordion-disclosure";break;default:d="oj-accordion-collapsible"}return d?{subId:d,index:b}:null}})})();a.Components.Ta("ojAccordion","baseComponent",{properties:{expanded:{type:"Array"},multiple:{type:"boolean"}},methods:{refresh:{}},extension:{_widgetName:"ojAccordion"}});a.Components.register("oj-accordion",
a.Components.getMetadata("ojAccordion"))});