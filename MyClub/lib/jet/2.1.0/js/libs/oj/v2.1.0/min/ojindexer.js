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
define(["ojs/ojcore","jquery","hammerjs","promise","ojs/ojjquery-hammer","ojs/ojcomponentcore"],function(a,g,c){(function(){a.Na("oj.ojIndexer",g.oj.baseComponent,{defaultElement:"\x3cul\x3e",version:"1.2",widgetEventPrefix:"oj",options:{data:null},_ComponentCreate:function(){this._super();this.$a()},Hh:function(){var a;this._super();this.H4();this.kz();this.eqa();a=this.us()[0];this.jn(a);this.dAa(a)},_destroy:function(){var b,c;this._super();this.Az();this.element.removeClass("oj-component-initnode");
b=this.us()[0];this.Vo(b);this.nDa(b);c=this.SI();null!=c&&this.RY&&c.off(a.vg.Q.CHANGE,this.RY);a.u.unwrap(this.element,g(b))},_setOption:function(a,c){this._superApply(arguments);"data"==a&&this.refresh()},widget:function(){return this.us()},refresh:function(){this._super();this.element.empty();this.H4();this.kz();this.Bt=null},getNodeBySubId:function(a){var c,e,f,h,k;if(null==a)return this.element?this.element[0]:null;if("oj-indexer-prefix"===a.subId)for(a=a.prefix,c=this.element.children("li"),
e=0;e<c.length;e++){h=c.get(e);if(g(h).attr("data-range")==a)return h;k=g(h).attr("data-includes");if(null!=k)for(k=k.split("|"),f=0;f<k.length;f++)if(k[f]==a)return h}return null},getSubIdByNode:function(a){return null!=a&&(a=g(a).attr("data-range"),null!=a)?{subId:"oj-indexer-prefix",prefix:a}:null},kz:function(){this.element.attr("role","slider").attr("aria-orientation","vertical").attr("aria-describedby",this.element.prop("id")+":desc").attr("aria-valuemin",0).attr("aria-valuemax",Math.max(0,
this.element.children().length-1))},Az:function(){this.element.removeAttr("role").removeAttr("aria-orientation").removeAttr("aria-describedby").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuetext")},eqa:function(){var b,c;b=a.u.af()?"ariaTouchInstructionText":"ariaKeyboardInstructionText";c=g(document.createElement("div"));c.prop("id",this.element.prop("id")+":desc");c.addClass("oj-helper-hidden-accessible").text(this.F(b));this.us().append(c)},us:function(){null==this.mF&&
(this.mF=this.bqa());return this.mF},bqa:function(){var a;this.oe?a=g(this.oe):(a=g(document.createElement("div")),this.element.parent()[0].replaceChild(a[0],this.element[0]));a.addClass("oj-indexer oj-component");a.prepend(this.element);return a},H4:function(){var a,c,e,f,g,k,l;a=this.SI();if(null!=a){c=this.element;e=a.getIndexablePrefixes();f=a.getPrefixes();a=this.F("indexerOthers");g=this.widget().outerHeight();k=this.XH(e[0],f);c.append(k);k=k.outerHeight();g=Math.floor(g/k);this.us().removeClass("oj-indexer-abbr");
g=Math.floor((e.length+1)/g)+1;1<g&&this.us().addClass("oj-indexer-abbr");for(k=1+g;k<e.length;k=k+g+1)1<g?(l=this.zqa(e,k-g,k-1),c.append(l)):k--,l=e[k],l=this.XH(l,f),c.append(l);e=this.XH(e[e.length-1],f);c.append(e);e=this.XH(a);e.attr("data-others","true");c.append(e)}},XH:function(a,c){var e=g(document.createElement("li"));e.attr("data-range",a).text(a);null!=c&&-1==c.indexOf(a)&&e.addClass("oj-disabled");return e},zqa:function(a,c,e){var f,h="";f=g(document.createElement("li"));for(f.addClass("oj-indexer-ellipsis").attr("data-range",
a[c+Math.round((e-c)/2)]);c<e;c++)h=h+a[c]+"|";h+=a[e];f.attr("data-includes",h);return f},$a:function(){var b=this,c;this.element.uniqueId().addClass("oj-component-initnode").attr("tabIndex",0);this._on(this.element,{click:function(a){b.uua(a)},keydown:function(a){b.pv(a)},focus:function(a){b.Xua(a)},blur:function(a){b.mua(a)}});c=this.SI();null!=c&&(this.RY=function(){b.refresh()},c.on(a.vg.Q.CHANGE,this.RY));this._focusable({applyHighlight:!0,setupHandlers:function(a,c){b.qy=a;b.dv=c}})},uua:function(a){0===
a.button&&(a=g(a.target),this.IV(a))},Xua:function(){this.us().addClass("oj-focus-ancestor");null==this.Bt?this.Nj(this.element.children("li").first()):this.Nj(this.Bt)},mua:function(){this.us().removeClass("oj-focus-ancestor")},pv:function(a){var c,e=!1;switch(a.keyCode){case 38:c=this.Bt.prev();break;case 40:c=this.Bt.next();break;case 13:this.IV(this.Bt),e=!0}null!=c&&0<c.length&&(e=!0,this.Nj(c));e&&a.preventDefault()},Nj:function(a){null!=this.Bt&&this.dv(this.Bt);this.qy(a);this.rDa(a);this.Bt=
a},SI:function(){var a=this.option("data");if(null!=a&&(void 0==a.setPrefix||void 0==a.getIndexablePrefixes||void 0==a.getPrefixes))throw"Invalid IndexerModel";return a},IV:function(b){var c=b.attr("data-range");b.attr("data-others")&&(c=a.vg.PREFIX_OTHERS);this.JV(c)},JV:function(a){var c=this,e;this.SI().setPrefix(a).then(function(a){null!=a&&(e=c.cg(a),null!=e&&c.Nj(e))})},rDa:function(b){var c,e="";c=b.attr("data-includes");null!=c?(c=c.split("|"),0<c.length&&(e=this.F("ariaInBetweenText",{first:c[0],
second:c[c.length-1]}))):(c=b.attr("data-range"),e=c===a.vg.PREFIX_OTHERS?this.F("ariaOthersLabel"):c);b.hasClass("oj-disabled")&&(e=e+". "+this.F("ariaDisabledLabel"));this.element.attr("aria-valuetext",e);this.element.attr("aria-valuenow",b.index())},cg:function(a){var c,e,f,h,k;c=this.element.children();for(e=0;e<c.length;e++)if(f=c.get(e),h=g(f).attr("data-range"),k=g(f).attr("data-includes"),null!=h&&h==a||null!=k&&-1<k.indexOf(a))return g(f);return null},Vo:function(b){b&&this.Jg&&a.u.lm(b,
this.Jg)},jn:function(b){b&&(null==this.Jg&&(this.Jg=this.Hg.bind(this)),a.u.Mk(b,this.Jg))},nDa:function(a){g(a).off("panstart panmove panend")},dAa:function(a){var d=this,e,f,h,k,l,m,s,t,r,n,p,q;e={recognizers:[[c.Pan,{direction:c.DIRECTION_VERTICAL}]]};g(a).$j(e).on("panstart",function(a){f=a.gesture.target;h=d.element[0].getBoundingClientRect().left+5;k=f.getBoundingClientRect().top;d.IV(g(f));l=f;m=f.getAttribute("data-range");s=k}).on("panmove",function(a){t=s;s=k+a.gesture.deltaY;f=document.elementFromPoint(h,
s);null!=f&&(r=s-t,l==f?(n=f.getAttribute("data-includes"),null!=n&&(n=n.split("|"),p=n.indexOf(m),q=null,0<r&&p<n.length-1?q=n[p+1]:0>r&&0<p&&(q=n[p-1]),null!=q&&(m=q,d.JV(q)))):f.hasAttribute("data-range")&&(n=f.getAttribute("data-includes"),q=null,null!=n&&(0<r&&f==l.nextElementSibling?q=n[0]:0>r&&f==l.previousElementSibling&&(q=n[n.length-1])),null==q&&(q=f.getAttribute("data-range")),l=f,m=q,d.JV(m)))}).on("panend",function(){q=s=m=l=null})},Hg:function(a,c){0<a&&0<c&&this.refresh()}})})();a.Ei=
function(a){this.Ga=a;this.Init()};o_("ListViewIndexerModel",a.Ei,a);a.b.ta(a.Ei,a.mj,"oj.ListViewIndexerModel");a.Ei.prototype.getIndexablePrefixes=function(){return this.Ga.Y.F("indexerCharacters").split("|")};a.b.g("ListViewIndexerModel.prototype.getIndexablePrefixes",{getIndexablePrefixes:a.Ei.prototype.getIndexablePrefixes});a.Ei.prototype.getPrefixes=function(){null==this.$W&&(this.$W=this.qsa());return this.$W};a.b.g("ListViewIndexerModel.prototype.getPrefixes",{getPrefixes:a.Ei.prototype.getPrefixes});
a.Ei.prototype.qsa=function(){var a=[],c=this.Ga.OC();if(null!=c)for(var e=this.getIndexablePrefixes(),f=0;f<e.length;f++){var h=e[f];c.each(function(){if(0==g(this).text().indexOf(h))return a.push(h),!1})}return a};a.Ei.prototype.setPrefix=function(b){return b==a.vg.PREFIX_OTHERS?this.YBa():this.$Ba(b)};a.b.g("ListViewIndexerModel.prototype.setPrefix",{setPrefix:a.Ei.prototype.setPrefix});a.Ei.prototype.YBa=function(){var b,c=this,e,f,h,k,l;b=this.getIndexablePrefixes();return new Promise(function(m){e=
null;f=c.Ga.OC();null!=f&&f.each(function(){h=g(this).text();for(k=0;k<b.length;k++)if(l=b[k],0==h.indexOf(l))return!0;e=this;return!1});e?(c.Ga.hba(e),m(a.vg.PREFIX_OTHERS)):m(null)})};a.Ei.prototype.$Ba=function(a){var c,e,f=this,g=null,k;c=this.getIndexablePrefixes();e=c.indexOf(a);return new Promise(function(l){if(-1==e)l(null);else{for(;e<c.length;){a=c[e];k=f.$ra(a);if(null!=k){f.Ga.hba(k);g=a;break}e++}l(g)}})};a.Ei.prototype.$ra=function(a){var c,e,f;e=this.Ga.OC();null!=e&&e.each(function(){f=
g(this).text();if(0==f.indexOf(a))return c=this,!1});return c};a.Ei.prototype.lea=function(){this.$W=null;this.handleEvent(a.vg.Q.CHANGE,{})};a.vg=function(){};o_("IndexerModel",a.vg,a);a.vg.PREFIX_OTHERS="__others__";o_("IndexerModel.PREFIX_OTHERS",a.vg.PREFIX_OTHERS,a);a.vg.Q={CHANGE:"change"};o_("IndexerModel.EventType",a.vg.Q,a);a.vg.prototype.setPrefix=function(){};a.b.g("IndexerModel.prototype.setPrefix",{setPrefix:a.vg.prototype.setPrefix});a.vg.prototype.getIndexablePrefixes=function(){};
a.b.g("IndexerModel.prototype.getIndexablePrefixes",{getIndexablePrefixes:a.vg.prototype.getIndexablePrefixes});a.vg.prototype.getPrefixes=function(){};a.b.g("IndexerModel.prototype.getPrefixes",{getPrefixes:a.vg.prototype.getPrefixes});a.Components.Ta("ojIndexer","baseComponent",{properties:{data:{}},methods:{getNodeBySubId:{},getSubIdByNode:{},refresh:{},widget:{}},extension:{_hasWrapper:!0,_innerElement:"ul",_widgetName:"ojIndexer"}});a.Components.register("oj-indexer",a.Components.getMetadata("ojIndexer"))});