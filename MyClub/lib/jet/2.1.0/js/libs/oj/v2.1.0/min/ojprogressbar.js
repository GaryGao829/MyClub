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
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(a,g){(function(){a.Na("oj.ojProgressbar",g.oj.baseComponent,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{max:100,value:0,disabled:!1},min:0,Jy:!1,_ComponentCreate:function(){this._super();this.oldValue=this.options.value=this.y4();this.element.addClass("oj-progressbar").attr({role:"progressbar","aria-valuemin":this.min});this.TZ=g("\x3cdiv class\x3d'oj-progressbar-value'\x3e\x3c/div\x3e").appendTo(this.element);
this.oaa()},Xf:function(a,b){var d=this.element;this._super(a,b);void 0===b.max&&(d=d.attr("max")||void 0,null!=d&&(this.options.max=d))},y4:function(a){void 0===a&&(a=this.options.value);this.Jy=-1==a;"number"!==typeof a&&(a=isNaN(a)?0:Number(a));return this.Jy?-1:Math.min(this.options.max,Math.max(this.min,a))},_setOptions:function(a,b){var d=a.value;delete a.value;this._super(a,b);this.options.disabled||(this.options.value=this.y4(d),this.oaa())},_setOption:function(a,b,d){"max"===a&&(b=Math.max(this.min,
b));this._super(a,b,d)},fza:function(){return this.Jy?100:100*(this.options.value-this.min)/(this.options.max-this.min)},oaa:function(){var a=this.options.value,b=this.fza();this.TZ.toggle(this.Jy||a>this.min).width(b.toFixed(0)+"%");this.element.toggleClass("oj-progressbar-indeterminate",this.Jy);this.Jy?(this.element.attr({"aria-valuetext":"In Progress"}),this.element.removeAttr("aria-valuenow"),this.element.removeAttr("aria-valuemin"),this.element.removeAttr("aria-valuemax"),this.MF||(this.MF=
g("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.TZ),this.MF.addClass("oj-indeterminate"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":a}),this.MF&&(this.MF.remove(),this.MF=null))},_destroy:function(){this.element.removeClass("oj-progressbar").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.TZ.remove();this._super()}})})();a.Components.Ta("ojProgressbar","baseComponent",{properties:{disabled:{},
max:{},value:{}},methods:{},extension:{_widgetName:"ojProgressbar"}});a.Components.register("oj-progressbar",a.Components.getMetadata("ojProgressbar"))});