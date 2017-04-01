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
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","jqueryui-amd/widgets/draggable","ojs/ojtouchproxy"],function(a,g){(function(){a.Na("oj.ojSlider",g.oj.editableValue,{defaultElement:"\x3cinput\x3e",version:"1.0.1",widgetEventPrefix:"oj",options:{distance:0,max:100,min:0,orientation:"horizontal",readOnly:!1,disabled:!1,step:1,type:"fromMin",value:0,rawValue:void 0},t$:5,fca:null,dg:function(){return"rtl"===a.u.wn()},_ComponentCreate:function(){this._super();this.e9=!1;this.element.is("INPUT")?(this.e9=
!0,this.element[0].style&&(this.ICa=this.element[0].style.cssText),this.c9=this.element.css("display"),this.element.css("display","none"),this.Rm=this.oe?g(this.oe):g(this.element).wrap("\x3cdiv\x3e \x3c/div\x3e").parent()):this.Rm=this.element;this.v4()},v4:function(){this.o$=[];this.Ri=null;var a="oj-slider ",a=this.wd()?a+"oj-slider-vertical":a+"oj-slider-horizontal",a=a+" oj-component oj-form-control";this.options.pN&&(a+=" oj-read-only");this.options.disabled&&(a+=" oj-disabled");this.Rm.removeClass();
this.Rm.addClass(a);this.Wh="range"===this.options.type?!0:!1;this.S3();this.Aqa();this.Spa();this.Koa();this.wqa();this.Dqa();this.xE();this.nn()},Hh:function(){this._super();this.Vy();var a,b=this.lla();if(b){a=this.Rm.find(".oj-slider-thumb");var d=b.attr("id");d||(d=b.attr("for"));a.attr("aria-labelledby",d);1<b.length&&1<a.length&&a[1].attr("aria-labelledby",String(d))}else if(b=this.element.attr("aria-label"))a=this.Rm.find(".oj-slider-thumb"),a.attr("aria-label",b)},lla:function(){var a=this.psa();
if(null!==a&&0!==a.length)return a;a=this.osa();return null!==a&&0!==a.length?a:null},osa:function(){var a=this.element.prop("id");if(void 0!==a){var b=g("label[for\x3d'"+a+"']");if(0<b.length)return b;a="span[for\x3d'"+a+"']";if(0!==g(a).length)return g(a)}return null},psa:function(){var a=this.element.attr("aria-labelledby");if(void 0!==a){var b=g("label[id\x3d'"+a+"']");if(0<b.length)return b;a=g("span[id\x3d'"+a+"']");if(0<a.length)return a}return null},widget:function(){return this.Rm},ul:function(a){this.fca=
a},Ag:function(){return this.fca},JI:function(){return this.element[0].id},hT:function(a){return this.JI()+"-thumb"+a},l6:function(){return this.JI()+"-barValue"},rsa:function(){return this.JI()+"-barBack"},Rta:function(){return this.JI()+"-sliderWrapper"},Dqa:function(){var a,b,d="",e="class\x3d'oj-slider-thumb ui-state-default' tabindex\x3d'0' role\x3d'slider'"+("aria-valuemin \x3d '"+this.He()+"' ")+("aria-valuemax \x3d '"+this.mh()+"' ")+"\x3e\x3c/span\x3e",f=[];b=this.Wh?2:1;for(a=0;a<b;a++)d=
"\x3cspan "+("id\x3d'"+this.hT(a)+"' ")+e,f.push(d);this.Si=g(f.join("")).appendTo(this.Ml);this.Zs=this.Si.eq(0);var h=this;a=0;this.Si.each(function(){g(this).data("oj-slider-thumb-index",a++);h.wd()&&g(this).attr("aria-orientation","vertical");h.options.disabled?(g(this).attr("aria-disabled","true"),g(this).removeAttr("tabindex")):g(this).removeAttr("aria-disabled");h.options.readOnly?g(this).attr("title","read only"):g(this).removeAttr("title")})},Aqa:function(){var a=this.Rta(),b=this.Rm.find("#"+
a);b.length&&b.remove();this.Ml=g("\x3cdiv\x3e\x3c/div\x3e");g(this.Ml).attr("id",a);this.Ml.addClass("oj-slider-container");this.element.after(this.Ml);this.Ml[0].style.cssText=this.ICa;this.wd()&&""===this.Ml[0].style.height&&(this.Ml[0].style.height="150px")},Spa:function(){var a=this.rsa(),b=this.Rm.find("#"+a);b.length&&b.remove();this.De=g("\x3cdiv\x3e\x3c/div\x3e");b="oj-slider-bar";b=this.wd()?b+" oj-slider-vertical":b+" oj-slider-horizontal";g(this.De).attr("id",a);this.De.addClass(b);this.Ml.append(this.De);
var d=this;this.De.on("mousedown"+d.eventNamespace,function(a){d.Maa(a);d.vD(a);d.FC().focus()})},Koa:function(){this.options.type&&(this.options.value?this.Wh&&2!==this.options.value.length&&(this.options.value=[0<this.options.value.length?this.options.value[0]:this.He(),this.mh()],this.option("value",this.options.value,{_context:{Ed:!0,ob:!0}})):(this.options.value=this.Wh?[this.He(),this.mh()]:this.He(),this.option("value",this.options.value,{_context:{Ed:!0,ob:!0}})))},wqa:function(){var a=this.options,
b="";if(a.type){this.Cc=g("\x3cdiv\x3e\x3c/div\x3e");g(this.Cc).attr("id",this.l6());this.Ml.append(this.Cc);var b="oj-slider-range oj-slider-bar-value",d=this;this.Cc.on("mousedown"+d.eventNamespace,function(a){d.Maa(a);d.vD(a);d.FC().focus()});this.Cc=this.Ml.find("#"+this.l6());var e="";"fromMin"===a.type?e=" oj-slider-range-min":"fromMax"===a.type&&(e=" oj-slider-range-max");this.Cc.addClass(b+e)}else this.Cc&&this.Cc.remove(),this.Cc=null},rCa:function(c){this.jW=a.Bg.hda(c)},SCa:function(c){a.Bg.Lha(c)},
nn:function(){this.zu()&&this._hoverable(this.Rm);this.Si.toArray().forEach(function(a){a=g(a);this.Lu(a);this._on(a,this.VCa);this.rCa(a);this._focusable({element:a,applyHighlight:!0})},this)},_GetMessagingLauncherElement:function(){return this.Rm},Wf:function(){return this.FC()},l5:function(){this.Si.toArray().forEach(function(a){a=g(a);this.SCa(a)},this);this.Cc&&this.Cc.remove();this.Ml&&this.Ml.remove()},pDa:function(){a.u.unwrap(this.element,this.Rm);this.element.css("display",this.c9);this.Lx(this.element)},
_destroy:function(){this.l5();this.pDa();return this._super()},Maa:function(a){var b,d,e,f=this,h=this.options;e=0;this.s4=this.Zs;if(h.disabled||h.readOnly)return!1;b=this.vta({x:a.pageX,y:a.pageY});d=this.mh()-this.He()+1;this.Wh&&this.Si.each(function(a){var c=Math.abs(b-f.jv(a));if(d>c||d===c&&(a===f.Rxa||f.jv(a)===h.min))d=c,this.s4=g(this),e=a});this.Ri=e;if(!this.s4)return!0;this.Si.hasClass("ui-state-hover")||this.To(a,e,b);this.FC().addClass("oj-active").focus();this.Cc.addClass("oj-active");
return!0},Mwa:function(a,b){var d=this.options;if(d.disabled||d.readOnly)return!1;b.removeClass("oj-focus-highlight");b.addClass("oj-active").focus();this.Cc.addClass("oj-active");return!0},xya:function(a,b){var d=this.h7(b);this.To(a,this.Ri,d,!0);d=100*this.J6(b);this.Wh?this.Kba(d,this.Ri):this.Hba(d);return!1},vD:function(a,b){this.Si.removeClass("oj-active");this.Cc.removeClass("oj-active");var d=this.h7(b);this.To(a,this.Ri,d);this.xk(a,this.Ri,!1);this.Ri=null;return!1},wd:function(){return"vertical"===
this.options.orientation},j7:function(a){1<a&&(a=1);0>a&&(a=0);this.wd()&&(a=1-a);return a},vta:function(a){var b=this.Xsa(a);a=this.mh()-this.He();this.dg()&&!this.wd()&&(b=1-b);return this.Kk(this.He()+b*a)},Xsa:function(a){var b;this.wd()?(b=this.De.height(),a=a.y-this.De.offset().top):(b=this.De.width(),a=a.x-this.De.offset().left);return 0===b?1:b=this.j7(a/b)},FC:function(){return this.Wh?g(this.Si[this.Ri]):this.Zs},J6:function(a){var b;(b=a)||(b=this.FC());this.wd()?(a=b.outerHeight()/2,a=
b.offset().top+a,b=this.De.height(),a-=this.De.offset().top):(a=b.outerWidth()/2,a=b.offset().left+a,b=this.De.width(),a-=this.De.offset().left);return 0===b?1:b=this.j7(a/b)},h7:function(a){var b;a=this.J6(a);b=this.mh()-this.He();this.dg()&&!this.wd()&&(a=1-a);return this.Kk(this.He()+a*b)},wta:function(a){return this.jv(a?0:1)},rta:function(a,b,d){return 2===this.options.value.length&&(0===a&&b>d||1===a&&b<d)?d:b},To:function(a,b,d,e){var f;this.Wh?(f=this.wta(b),d=this.rta(b,d,f),d!==this.jv(b)&&
this.XBa(a,b,d,e)):d!==this.A7()&&(this.fCa(a,d,e),e||this.e9&&this.element.val(d))},fCa:function(a,b,d){this.YJ=this.Kk(b);d||(this.ic(this.YJ,a),this.xE());this.Vp(this.YJ,a)},xk:function(a,b,d){this.Wh?(this.N9=this.sta(b,this.o$[b]),this.Vp(this.N9,a),d||this.ic(this.N9,a)):(this.Vp(this.YJ,a),d||this.ic(this.YJ,a));this.Rxa=b},sta:function(a,b){var d,e;d=this.options.value.slice();for(e=0;e<d.length;e+=1)d[e]=this.Kk(d[e]);a===this.Ri&&(d[a]=b);return d},A7:function(){return this.R7()},jv:function(a){return this.bua(a)},
XBa:function(a,b,d,e){this.o$[b]=this.Kk(d);this.xk(a,b,e);e||this.xE()},_setOption:function(a,b,d){"value"===a&&(Array.isArray(b)?isNaN(b[0])?(this.Wh=!1,this.No(a,b[0])):this.Wh=!0:(this.Wh=!1,this.No(a,b)));b="max"===a||"min"===a?this.No(a,b):"step"===a?this.DD(b):b;"disabled"!==a&&this._super(a,b,d);"readOnly"===a&&(this.options.pN=b);"disabled"===a&&(this.options.disabled=b);switch(a){case "value":this.xE();this.Vy();break;case "min":case "max":this.S3();this.xE();this.Vy();break;case "orientation":case "readonly":case "step":case "type":case "disabled":this.Kza()}},
Kza:function(){this.l5();this.v4();this.Hh()},R7:function(){var a=this.options.value;return a=this.Kk(a)},bua:function(a){return this.Kk(this.options.value[a])},Kk:function(a){if(a<=this.He())return this.He();if(a>=this.mh())return this.mh();var b=0<this.options.step?this.options.step:1,d=(a-this.He())%b;a-=d;2*Math.abs(d)>=b&&(a+=0<d?b:-b);return parseFloat(a.toFixed(5))},S3:function(){var a=this.He();this.max=0!==(this.options.max-a)/this.options.step%1?this.options.max-(this.options.max-a)%this.options.step:
this.options.max},He:function(){return this.options.min},mh:function(){return this.max},K6:function(){var a;a=0<this.options.step?(this.mh()-this.He())/this.options.step:100;a=(this.wd()?this.De.height():this.De.width())/a;1>a&&(a=1);return this.wd()?[1,a]:[a,1]},iT:function(a){return(this.jv(a)-this.He())/(this.mh()-this.He())},xE:function(){var a,b,d,e;this.Wh?this.Si.toArray().forEach(function(b,d){var e=g(b);a=100*this.iT(d);this.dg()&&!this.wd()&&(a=100-a);this.wd()?g(e).css({top:100-a+"%"}):
g(e).css({left:a+"%"});g(e).attr("aria-valuenow",this.jv(d));this.Kba(a,d)},this):(b=this.R7(),d=this.He(),e=this.mh(),a=e!==d?(b-d)/(e-d)*100:0,this.dg()&&!this.wd()&&(a=100-a),this.wd()?this.Zs.css({top:100-a+"%"}):this.Zs.css({left:a+"%"}),g(this.Zs).attr("aria-valuenow",b),this.Hba(a))},Hba:function(a){var b=this.options.type;this.wd()?("fromMin"===b&&this.Cc.css({height:a+"%"}),"fromMax"===b&&this.Cc.css({height:100-a+"%"})):this.dg()?("fromMin"===b&&this.Cc.css({width:100-a+"%"}),"fromMax"===
b&&this.Cc.css({width:a+"%"})):("fromMin"===b&&this.Cc.css({width:a+"%"}),"fromMax"===b&&this.Cc.css({width:100-a+"%"}))},Kba:function(a,b){var d=this.Cc.attr("id");if(0===b)switch(d=100*this.iT(1),this.options.type){case "fromMin":this.wd()?this.Cc.css({height:a+"%"}):this.Cc.css({width:a+"%"});break;case "range":this.wd()?(this.Cc.css({top:100-d+"%"}),this.Cc.css({height:d-a+"%"})):this.dg()?(this.Cc.css({left:100-d+"%"}),this.Cc.css({width:d-(100-a)+"%"})):(this.Cc.css({left:a+"%"}),this.Cc.css({width:d-
a+"%"}))}else{var e=100*this.iT(0);switch(this.options.type){case "fromMax":this.wd()?this.Cc.css({height:100-a+"%"}):this.Cc.css({width:100-a+"%"});break;case "range":this.wd()?document.getElementById(d)&&(this.Cc.css({top:100-a+"%"}),this.Cc.css({height:a-e+"%"})):this.dg()?document.getElementById(d)&&(this.Cc.css({left:a+"%"}),this.Cc.css({width:-a+100-e+"%"})):document.getElementById(d)&&this.Cc.css({width:a-parseInt(document.getElementById(d).style.left,10)+"%"})}}},VCa:{keydown:function(a){var b,
d,e,f=g(a.target).data("oj-slider-thumb-index");this.Ri=f;switch(a.keyCode){case g.ui.keyCode.HOME:case g.ui.keyCode.END:case g.ui.keyCode.PAGE_UP:case g.ui.keyCode.PAGE_DOWN:case g.ui.keyCode.UP:case g.ui.keyCode.RIGHT:case g.ui.keyCode.DOWN:case g.ui.keyCode.LEFT:a.preventDefault(),g(a.target).addClass("oj-active")}e=this.options.step;b=this.Wh?d=this.jv(f):d=this.A7();switch(a.keyCode){case g.ui.keyCode.HOME:d=this.He();break;case g.ui.keyCode.END:d=this.mh();break;case g.ui.keyCode.PAGE_UP:d=
this.Kk(b+(this.mh()-this.He())/this.t$);break;case g.ui.keyCode.PAGE_DOWN:d=this.Kk(b-(this.mh()-this.He())/this.t$);break;case g.ui.keyCode.UP:if(b===this.mh())return;d=this.Kk(b+e);break;case g.ui.keyCode.RIGHT:if(!this.dg()||this.wd()){if(b===this.mh())return;b+=e}else{if(b===this.He())return;b-=e}d=this.Kk(b);break;case g.ui.keyCode.DOWN:if(b===this.He())return;d=this.Kk(b-e);break;case g.ui.keyCode.LEFT:if(!this.dg()||this.wd()){if(b===this.He())return;b-=e}else{if(b===this.mh())return;b+=e}d=
this.Kk(b)}this.To(a,f,d)},keyup:function(a){switch(a.keyCode){case g.ui.keyCode.HOME:case g.ui.keyCode.END:case g.ui.keyCode.PAGE_UP:case g.ui.keyCode.PAGE_DOWN:case g.ui.keyCode.UP:case g.ui.keyCode.RIGHT:case g.ui.keyCode.DOWN:case g.ui.keyCode.LEFT:var b=g(a.target).data("oj-slider-thumb-index");this.Ri=b;this.xk(a,b,!1);g(a.target).removeClass("oj-active");this.Ri=null}}},Xf:function(c,b){var d=this.options,e=this;this._superApply(arguments);a.Me.np([{ga:"disabled",Od:!0},{ga:"value"},{ga:"title"},
{ga:"min"},{ga:"max"},{ga:"step"}],b,this,function(a){for(var b=["value","step","min","max"],c=0;c<b.length;c++){var g=b[c],m=g in a?a[g]:d[g];null!=m&&("step"===g?a[g]=e.DD(m):"min"===g||"max"===g?a[g]=e.No(g,m):"value"===g&&(Array.isArray(m)?a[g]=m:a[g]=e.No(g,m)))}});if(void 0===d.value)throw Error(this.F("noValue"));if(null!=d.min&&null!=d.max){if(d.max<d.min)throw Error(this.F("maxMin"));if(d.value<d.min||d.value>d.max)throw Error(this.F("valueRange"));}},getNodeBySubId:function(a){if(null==
a)return this.element?this.element[0]:null;a=a.subId;return"oj-slider-thumb-0"===a?this.widget().find(".oj-slider-thumb")[0]:"oj-slider-thumb-1"===a?this.widget().find(".oj-slider-thumb")[1]:"oj-slider-bar"===a||"oj-slider-bar-value"===a?this.widget().find("."+a)[0]:null},getSubIdByNode:function(a){if(null!=a){if(a.id===this.hT(0)&&g(a).hasClass("oj-slider-thumb"))return{subId:"oj-slider-thumb-0"};if(a.id===this.hT(1)&&g(a).hasClass("oj-slider-thumb"))return{subId:"oj-slider-thumb-1"};if(g(a).hasClass("oj-slider-bar"))return{subId:"oj-slider-bar"};
if(g(a).hasClass("oj-slider-bar-value"))return{subId:"oj-slider-bar-value"}}return null},_GetDefaultStyleClass:function(){return"oj-slider"},No:function(a,b){var d;d=null!==b?+b:b;if(isNaN(d))throw Error(this.F("optionNum",{option:a}));return d},DD:function(a){if(null===a)return 1;a=this.No("step",a);if(0>=a)throw Error(this.F("invalidStep"));if(null===a||0>=a)a=1;return a},CKa:function(){return this.De.offset().left+this.De.width()},LKa:function(){return this.De.offset().left},T3:function(a){var b=
this.K6(),d=a[0].style,e=this;a.draggable({axis:this.wd()?"y":"x",grid:b,disabled:!1,start:function(b){a[0]===g(e.Si)[0]?e.Ri=0:a[0]===g(e.Si)[1]&&(e.Ri=1);e.Mwa(b,a)},drag:function(b,h){var k=h.position;e.wd()?(d.left="",k.left=""):(d.top="",k.top="");e.xya(b,a);e.wd()?(0>k.top&&(k.top=0),k.top>e.De.height()&&(k.top=e.De.height())):(0>k.left&&(k.left=0),k.left>e.De.width()&&(k.left=e.De.width()));if(e.Wh){var l;l=0===e.Ri?g(e.Si[1]):g(e.Si[0]);if(e.wd()){var m=a.outerHeight()/2,s=e.De.offsetParent().offset().top;
l=l.offset().top+m-s}else m=a.outerWidth()/2,s=e.De.offsetParent().offset().left,l=l.offset().left+m-s;0===e.Ri?e.wd()?k.top<l&&(k.top=l):e.dg()?k.left<l&&(k.left=l):k.left>l&&(k.left=l):e.wd()?k.top>l&&(k.top=l):e.dg()?k.left>l&&(k.left=l):k.left<l&&(k.left=l)}},stop:function(b){this.style.width="";this.style.height="";e.vD(b,a)}})},Vy:function(){this.options.disabled||(this.Wh?this.Si.toArray().forEach(function(a){a=g(a);this.T3(a)},this):this.T3(this.Zs))},wKa:function(){this.Wh?this.Si.toArray().forEach(function(a){a=
g(a);a.is(".ui-draggable")&&a.draggable("disable")},this):this.Zs.is(".ui-draggable")&&this.Zs.draggable("disable")}})})();a.Components.Ta("ojSlider","editableValue",{properties:{disabled:{type:"boolean"},max:{type:"number"},min:{type:"number"},orientation:{type:"string"},rawValue:{type:"number|Array\x3cNumber\x3e",readOnly:!0,writeback:!0},step:{type:"number"},type:{type:"string"},value:{type:"number|Array\x3cNumber\x3e",writeback:!0}},methods:{},extension:{_hasWrapper:!0,_innerElement:"input",_widgetName:"ojSlider"}});
a.Components.register("oj-slider",a.Components.getMetadata("ojSlider"))});