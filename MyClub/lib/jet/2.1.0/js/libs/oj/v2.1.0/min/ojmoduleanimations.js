/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","promise","ojs/ojanimation"],function(a,g){a.$={};a.$.Q0={coverStart:{lr:"oj-animation-coverstart",zp:"oj-animation-coverstart",Ap:!0},coverUp:{zp:"oj-animation-coverup",Ap:!0},fade:{lr:"oj-animation-fade",zp:"oj-animation-fade",Ap:!1},pushStart:{lr:"oj-animation-revealstart",zp:"oj-animation-coverstart",Ap:!1},pushEnd:{lr:"oj-animation-revealend",zp:"oj-animation-coverend",Ap:!1},revealDown:{lr:"oj-animation-revealdown",Ap:!1},revealEnd:{lr:"oj-animation-revealend",
zp:"oj-animation-revealend",Ap:!1},zoomIn:{zp:"oj-animation-zoomin",Ap:!0},zoomOut:{lr:"oj-animation-zoomout",Ap:!1}};a.$.i3=function(a,b,d){var e=$(a);return new Promise(function(a){function c(){a(!0)}var g="oj-"+d,l=g+"-active";e.addClass(b);e.addClass(g);window.requestAnimationFrame(function(){e.addClass(l)});if((g=e.css("animationDuration")||e.css("webkitAnimationDuration"))&&"0s"!=g)e.on("animationend webkitAnimationEnd",c);else if((g=e.css("transitionDuration")||e.css("webkitTransitionDuration"))&&
"0s"!=g)e.on("transitionend webkitTransitionEnd",c);else a(!0)})};a.$.eoa=function(c,b,d){var e=[];d=a.$.Q0[d];c&&d&&d.lr&&e.push(a.$.i3(c,d.lr,"leave"));b&&d&&d.zp&&e.push(a.$.i3(b,d.zp,"enter"));return Promise.all(e)};a.$.Q2=function(a,b){for(var d=g.virtualElements.firstChild(a);d;)1==d.nodeType?b.push(d):8==d.nodeType&&this.Q2(d,b),d=g.virtualElements.nextSibling(d)};a.$.Loa=function(a,b){a._ojOldRoot=b};a.$.cua=function(a){return a._ojOldRoot};a.$.zR=function(c){if(c.isInitial)return!1;if(1==
c.node.nodeType)return!0;if(8==c.node.nodeType){var b=[];a.$.Q2(c.node,b);if(b&&1==b.length)return a.$.Loa(c,b[0]),!0}return!1};a.$.i7=function(c){var b;1==c.node.nodeType?b=c.node:8==c.node.nodeType&&(b=a.$.cua(c));return b};a.$.by=function(a){var b=$(document.createElement("div")),d={position:"absolute",height:a.offsetHeight+"px",width:a.offsetWidth+"px",left:a.offsetLeft+"px",top:a.offsetTop+"px"};b.appendTo(a.offsetParent);b.css(d);b.addClass("oj-animation-host-viewport");a=document.createElement("div");
a.className="oj-animation-host";b.append(a);return a};a.$.d5=function(c,b){var d={},e=a.$.Q0[b],f=a.$.i7(c);e&&(e.zp&&!e.Ap&&(d.newViewParent=a.$.by(f)),e.lr&&(d.oldViewParent=a.$.by(f)),e.zp&&e.Ap&&(d.newViewParent=a.$.by(f)));return d};a.$.b5=function(c,b){return a.$.eoa(c.oldViewParent,c.newViewParent,b).then(function(){a.$.I$(c)})};a.$.Faa=function(a,b){var d=a[b];d&&(d=d.parentNode)&&d.parentNode&&d.parentNode.removeChild(d)};a.$.I$=function(c){c.removeOldView();c.insertNewView();a.$.Faa(c,"newViewParent");
a.$.Faa(c,"oldViewParent")};a.$.kq=function(c){return{canAnimate:a.$.zR,prepareAnimation:function(b){return a.$.d5(b,c)},animate:function(b){return a.$.b5(b,c)}}};a.$.QS=function(c){null==a.$.PU&&(a.$.PU=a.nd.uf("oj-animation-navigate-methods"));return a.$.PU?a.$.PU[c]:null};a.$.Fya=function(c,b){return a.$.QS(b)&&a.$.zR(c)};a.$.Gya=function(c,b){var d=a.$.QS(b);return a.$.d5(c,d)};a.$.Eya=function(c,b){var d=a.$.QS(b);return a.$.b5(c,d)};a.$.WI=function(c){return{canAnimate:function(b){return a.$.Fya(b,
c)},prepareAnimation:function(b){return a.$.Gya(b,c)},animate:function(b){return a.$.Eya(b,c)}}};a.$.KEa=a.$.kq("coverStart");o_("ModuleAnimations.coverStart",a.$.KEa,a);a.$.$Ia=a.$.kq("revealEnd");o_("ModuleAnimations.revealEnd",a.$.$Ia,a);a.$.LEa=a.$.kq("coverUp");o_("ModuleAnimations.coverUp",a.$.LEa,a);a.$.ZIa=a.$.kq("revealDown");o_("ModuleAnimations.revealDown",a.$.ZIa,a);a.$.VZ=a.$.kq("zoomIn");o_("ModuleAnimations.zoomIn",a.$.VZ,a);a.$.WZ=a.$.kq("zoomOut");o_("ModuleAnimations.zoomOut",a.$.WZ,
a);a.$.vFa=a.$.kq("fade");o_("ModuleAnimations.fade",a.$.vFa,a);a.$.yIa=a.$.kq("pushStart");o_("ModuleAnimations.pushStart",a.$.yIa,a);a.$.xIa=a.$.kq("pushEnd");o_("ModuleAnimations.pushEnd",a.$.xIa,a);a.$.dha=a.$.WI("navChild");o_("ModuleAnimations.navChild",a.$.dha,a);a.$.eha=a.$.WI("navParent");o_("ModuleAnimations.navParent",a.$.eha,a);a.$.oFa=a.$.dha;o_("ModuleAnimations.drillIn",a.$.oFa,a);a.$.pFa=a.$.eha;o_("ModuleAnimations.drillOut",a.$.pFa,a);a.$.gIa=a.$.WI("navSiblingEarlier");o_("ModuleAnimations.navSiblingEarlier",
a.$.gIa,a);a.$.hIa=a.$.WI("navSiblingLater");o_("ModuleAnimations.navSiblingLater",a.$.hIa,a);a.$.xJa=function(c){return new function(){function b(a){return function(b){return d[a].call(d,b)}}var d,e=this;this.canAnimate=function(f){var g=c(f);d=null==g?null:a.ModuleAnimations[g];if(!d)return!1;for(var g=["prepareAnimation","animate"],k=0;k<g.length;k++){var l=g[k];e[l]=b(l)}return b("canAnimate")(f)}}};o_("ModuleAnimations.switcher",a.$.xJa,a);a.$.MEa=function(c,b,d){return{canAnimate:a.$.zR,prepareAnimation:function(e){var f=
{};e=a.$.i7(e);b&&!d&&(f.newViewParent=a.$.by(e));c&&(f.oldViewParent=a.$.by(e));b&&d&&(f.newViewParent=a.$.by(e));return f},animate:function(d){var f=d.oldViewParent,g=d.newViewParent,k=[];f&&c&&k.push(a.W.Nn(f,"close",c));g&&b&&k.push(a.W.Nn(g,"open",b));return Promise.all(k).then(function(){a.$.I$(d)})}}};o_("ModuleAnimations.createAnimation",a.$.MEa,a)});