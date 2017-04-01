/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(a,g){function c(a,c,e,f,g,k,l){this.pd=a;this.Yya=c;this.$x=e;this.EH=f;g&&(g.uIa&&(this.qza=g.uIa),g.jIa&&(this.Jya=g.jIa),g.vha&&(this.rza=g.vha),g.gha&&(this.Kya=g.gha),g.uha&&(this.pza=g.uha),g.fha&&(this.Iya=g.fha));k&&(k.Wha&&(this.dba=k.Wha),k.AFa&&(this.hS=k.AFa),k.yEa&&(this.Qu=k.yEa),k.Mk&&(this.wH=k.Mk),k.lm&&(this.rK=k.lm),k.GE&&(this.xj=k.GE),k.QF&&(this.hg=k.QF),k.Sfa&&(this.XT=k.Sfa));l&&(l.Mda&&(this.A4=l.Mda),l.qga&&(this.RJ=
l.qga),l.Vfa&&(this.Gy=l.Vfa));this.CH=!0;this.py=0;a=navigator.userAgent.toLowerCase();if(-1!==a.indexOf("gecko/"))this.roa=!0;else if(-1!==a.indexOf("opera"))this.soa=!0;else if(-1!==a.indexOf("applewebkit")||-1!==a.indexOf("safari"))this.toa=!0}c.prototype.Mn=function(a){var d=this;if(a){this.cqa();this.uqa(this.qza,this.rza,this.pza);this.gqa(this.Jya,this.Kya,this.Iya);var e=this.Mj;this.G3=e.offsetWidth;this.F3=e.offsetHeight;this.wJ();this.uJ();this.wD=function(a){d.Nva(a)};c.Nh(this.pd,"mousewheel",
this.wD);c.Nh(this.pd,"wheel",this.wD);this.kW=function(a){d.VT(a)};c.Nh(this.ee,"touchstart",this.kW);this.iW=function(a){d.UT(a)};c.Nh(this.ee,"touchmove",this.iW);this.sE=function(a){d.RT(a)};c.Nh(this.ee,"touchend",this.sE);c.Nh(this.ee,"touchcancel",this.sE);this.VU=0}else this.taa();this.cR();this.d3(a);this.Hg(!0);a&&this.wH&&(this.Hj=function(){d.Hg(!1)},this.wH.call(this.Qu,this.pd,this.Hj),this.wH.call(this.Qu,this.ee,this.Hj))};c.prototype.destroy=function(){var a=this.pd;c.gg(a,"mousewheel",
this.wD);c.gg(a,"wheel",this.wD);c.gg(this.ee,"touchstart",this.kW);c.gg(this.ee,"touchmove",this.iW);c.gg(this.ee,"touchend",this.sE);c.gg(this.ee,"touchcancel",this.sE);this.sE=this.iW=this.kW=this.wD=null;this.rK&&this.Hj&&(this.rK.call(this.Qu,a,this.Hj),this.rK.call(this.Qu,this.ee,this.Hj));this.Hj=null;this.NAa(this.ee,a);this.o3=null;a.removeChild(this.ee);a.removeChild(this.Mj);a.removeChild(this.Hk);this.ee=this.Hk=this.Mj=null;this.cR();this.$x=this.Qu=this.XT=this.hg=this.xj=this.rK=this.wH=
this.hS=this.dba=this.pd=null};c.prototype.aF=function(){this.Hg(!1)};c.prototype.OAa=function(a,c){for(var e=null,f=a.childNodes;0<f.length;){e||(e=[]);var g=f[0];c.appendChild(g);1===g.nodeType&&(e.push(g),this.RJ&&this.xj(g,this.RJ))}return e};c.prototype.NAa=function(a,c){if(a)for(var e=a.childNodes;0<e.length;){var f=e[0];c.appendChild(f);1===f.nodeType&&this.RJ&&this.hg(f,this.RJ)}};c.IC=function(a){var c=a.ownerDocument.defaultView,e=null;return e=c?c.getComputedStyle(a,null):a.currentStyle};
c.Ssa=function(a){a=c.IC(a);return c.Ni(a.width)};c.Rsa=function(a){a=c.IC(a);return c.Ni(a.height)};c.Ni=function(a){return 0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=0),a):0};c.Nh=function(a,c,e){a.addEventListener?a.addEventListener(c,e,!1):a.attachEvent&&a.attachEvent("on"+c,e)};c.gg=function(a,c,e){a.removeEventListener?a.removeEventListener(c,e,!1):a.detachEvent&&a.detachEvent("on"+c,e)};c.dua=function(a){var c=0;return c=null!=a.wheelDelta?a.wheelDelta:null!=a.deltaY?-a.deltaY:-a.detail};
c.uKa=function(){var a=document.createElement("div");a.style.display="table";return a};c.vKa=function(){var a=document.createElement("div");a.style.display="table-row";return a};c.tKa=function(){var a=document.createElement("div");a.style.display="table-cell";return a};c.fLa=function(a,c,e,f){var g=document.createElement("div"),k=g.style;k.display="inline-block";g.appendChild(a);c.appendChild(g);e&&(k.maxWidth=g.offsetWidth+"px");f&&(k.maxHeight=g.offsetHeight+"px");return g};c.prototype.vd=function(){return"horizontal"===
this.Yya};c.prototype.sxa=function(){return!this.v6().hasChildNodes()};c.prototype.taa=function(){this.VU=this.Cj();this.MV(0);this.wJ();this.uJ()};c.prototype.cR=function(){this.NK=this.Gf=null};c.prototype.Hg=function(a){a||this.taa();this.cR();this.Gf&&this.NK||(this.Gf=this.b$());a||this.d3(!1);this.Zna()};c.prototype.Zna=function(){var a=this.Mj.style,c=this.Hk.style,e=this.ee,f=this.Gf;this.vd()?(e=.5*(f.Vj-e.offsetHeight),a.top=e+"px",c.top=e+"px"):(e=.5*(f.vi-e.offsetWidth),this.EH&&(e=-e),
a.left=e+"px",c.left=e+"px")};c.prototype.d3=function(a){var d=this.ee,e=this.vd(),f=e?c.Ssa(this.pd):c.Rsa(this.pd);this.uD=0;this.sD=e?d.scrollWidth-f+this.G3:d.scrollHeight-f+this.F3;0>this.sD&&(this.sD=0);this.wJ();this.uJ();this.lz(a?this.uD:this.VU,!0);this.VU=0};c.prototype.cqa=function(){var a=this,d=this.pd,e=document.createElement("div");this.ee=e;this.A4&&this.xj(e,this.A4);var f=this.OAa(d,e);if(this.$x)for(var f=[],g=this.$x.children,k=g.length,l=0;l<k;l++){var m=g[l];1===m.nodeType&&
f.push(m)}this.o3=f;d.appendChild(e);c.Nh(e,"scroll",function(){a.Zva()})};c.prototype.uqa=function(a,d,e){var f=this,g=document.createElement("div");this.Hk=g;a&&g.setAttribute("id",a);g.setAttribute("class",d);g.setAttribute("aria-hidden","true");c.Nh(g,"click",function(){f.fba()});e&&g.appendChild(e);this.pd.insertBefore(g,this.ee)};c.prototype.gqa=function(a,d,e){var f=this,g=document.createElement("div");this.Mj=g;a&&g.setAttribute("id",a);g.setAttribute("class",d);g.setAttribute("aria-hidden",
"true");c.Nh(g,"click",function(){f.eba()});e&&g.appendChild(e);this.pd.appendChild(g)};c.prototype.v6=function(){var a=this.$x;a||(a=this.ee);return a};c.prototype.b$=function(){var a=this.o3,c={vi:0,Vj:0},e=[];if(this.v6().hasChildNodes()&&a&&0<a.length)for(var f=this.vd(),g=0,g=this.ee.scrollWidth,k=0,l=null,m=0;m<a.length;m++){var s=a[m];if(1===s.nodeType){var t=s.offsetWidth,r=s.offsetHeight,n={vi:t,Vj:r,id:s.id};if(f){var p=s.offsetLeft;this.$x||0!==p||(s=s.parentNode,p=s.offsetLeft);n.start=
this.EH?g-(p+t):p;0===m&&(k=n.start);n.start-=k;c.vi=n.start+t;c.Vj=Math.max(c.Vj,r);n.end=c.vi-1}else p=s.offsetTop,this.$x||0!==p||(s=s.parentNode,p=s.offsetTop),n.start=p,c.vi=Math.max(c.vi,t),c.Vj=n.start+r,n.end=c.Vj-1;l&&l.end>=n.start&&(t=l.end-(n.start-1),l.end-=t,f?l.vi-=t:l.Vj-=t);e.push(n);l=n}}this.NK=e;return c};c.prototype.Dy=function(){if(!this.NK){var a=this.b$();this.Gf||(this.Gf=a)}return this.NK};c.prototype.ACa=function(){this.hg(this.Mj,this.Gy)};c.prototype.BCa=function(){this.hg(this.Hk,
this.Gy)};c.prototype.uJ=function(){this.xj(this.Mj,this.Gy)};c.prototype.wJ=function(){this.xj(this.Hk,this.Gy)};c.prototype.Py=function(){return!this.XT(this.Mj,this.Gy)};c.prototype.mD=function(){return!this.XT(this.Hk,this.Gy)};c.prototype.mS=function(){return this.vd()?this.G3:this.F3};c.prototype.sDa=function(a){var c=this.mS(),e=this.Cj(),f=this.XJ();a<=this.uD?(this.mD()&&(e-=c),this.wJ()):f&&(this.mD()||(e+=c),this.BCa());a>=this.sD?(this.Py(),this.uJ()):f&&(this.Py(),this.ACa());this.MV(e)};
c.prototype.MV=function(a){var c=this.ee;this.vd()?c.scrollLeft=this.mR(a):c.scrollTop=a};c.prototype.KC=function(){var a=this.ee;return this.vd()?a.offsetWidth:a.offsetHeight};c.prototype.lz=function(a,c){this.as||(this.CH=!1,this.sba(a,c))};c.prototype.sba=function(a,d){if(!this.sxa()){this.as=!0;a=this.Gpa(a);this.sDa(a);var e=this.dba;if(d||!e||a===this.Cj())this.v$(this.CH?this.Cj():a);else{var f=this;e.call(this.Qu,this.ee,this.mR(a),Math.abs(this.Cj()-a)/c.yma,function(){f.v$(a)})}}};c.prototype.Cj=
function(){var a=this.ee;return this.vd()?this.Mpa(a.scrollLeft):a.scrollTop};c.prototype.XJ=function(){var a=this.ee;return this.vd()?a.scrollWidth>a.offsetWidth:a.scrollHeight>a.offsetHeight};c.prototype.Gpa=function(a){!this.XJ()||a<this.uD?a=this.uD:a>this.sD&&(a=this.sD);return a};c.prototype.Nva=function(a){var d=this.as;if(this.XJ()&&!this.as){var e=c.dua(a);0>e&&this.Py()?(d=!0,this.eba()):0<e&&this.mD()&&(d=!0,this.fba())}d&&(a.preventDefault(),a.stopPropagation())};c.prototype.VT=function(a){a=
a.touches;this.XJ()&&!this.as&&1===a.length&&(this.xl=!0,a=a[0],this.XK=this.vd()?a.pageX:a.pageY,this.lW=this.Cj(),this.gDa=this.O3(),this.hDa=this.P3(),this.Jca=this.Py(),this.Kca=this.mD())};c.prototype.UT=function(a){var d=this.vd(),e=a.touches[0],e=(d?e.pageX:e.pageY)-this.XK,f=d&&this.EH?0<e:0>e,g=f&&this.Jca||!f&&this.Kca;if(this.xl&&g){g=this.ee;if(Math.abs(e)<c.Pma*(d?g.offsetWidth:g.offsetHeight)){if(this.lz(this.lW-e,!0),this.Jca&&!this.Py()||this.Kca&&!this.mD())this.xl=!1}else this.lz(f?
this.gDa:this.hDa,!1),this.xl=!1;this.Rv=!0}this.Rv&&(a.preventDefault(),a.stopPropagation())};c.prototype.RT=function(){this.xl&&this.lz(this.lW,!1);this.Rv=this.xl=!1};c.prototype.Zva=function(){this.CH&&!this.as&&this.sba(this.Cj(),!0)};c.prototype.v$=function(a){this.MV(a);this.HBa();this.as=!1;if(this.hS){this.py=this.M3();a=this.N3();var c=this.Dy(),e=c[this.py];this.py!==a&&this.Cj()>e.start&&this.py<c.length-2&&(this.py++,e=c[this.py]);this.dsa=e.id;this.hS.call(this.Qu,this.dsa)}};c.prototype.HBa=
function(){var a=this;window.setTimeout(function(){a&&(a.CH=!0)},0)};c.prototype.eba=function(){this.as||this.lz(this.O3(),!1)};c.prototype.fba=function(){this.as||this.lz(this.P3(),!1)};c.prototype.O3=function(){var a=this.Poa(),c=0;return c=a===this.M3()?this.Cj()+this.KC():this.Roa(a)};c.prototype.P3=function(){var a=this.Qoa(),c=0,c=a===this.N3()?this.Cj()-this.KC():this.Ooa(a);this.Py()||(c+=this.mS());c<this.mS()&&(c=this.uD);return c};c.prototype.Roa=function(a){return this.Dy()[a].start};
c.prototype.Ooa=function(a){return this.Dy()[a].end-this.KC()+1};c.prototype.M3=function(){var a=this.KH(this.Cj());return 0>a?0:a};c.prototype.N3=function(){var a=this.KH(this.Cj()+this.KC()-1),c=this.Dy();return 0>a?c.length-1:a};c.prototype.Qoa=function(){var a=this.KH(this.Cj()-1);return 0>a?0:a};c.prototype.Poa=function(){var a=this.KH(this.Cj()+this.KC()),c=this.Dy();return 0>a?c.length-1:a};c.prototype.KH=function(a){for(var c=this.Dy(),e=0;e<c.length;e++)if(a<=c[e].end)return e;return-1};
c.prototype.mR=function(a){var c=a;if(this.EH&&this.vd())if(this.roa)c=-a;else if(this.toa||this.soa)c=this.ee,c=c.scrollWidth-c.offsetWidth-a;return c};c.prototype.Mpa=function(a){return this.mR(a)};c.yma=1.1;c.Pma=.33;(function(){a.Na("oj.ojConveyorBelt",g.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{orientation:"horizontal",contentParent:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-conveyorbelt oj-component");this.options.disabled&&
a.r.warn(b);this.$a(!0)},refresh:function(){this._super();var a="rtl"===this.hd()!==this.Ph;a&&this.FR();this.$a(a)},Sp:function(){this._super();this.Ge?this.$a(this.Ge[0]):this.Wx&&this.Wx.aF()},Or:function(){this._super();this.Ge&&this.$a(this.Ge[0])},$a:function(b){var e=this.element,f=this.options,h=f.orientation;"vertical"===h?e.addClass("oj-conveyorbelt-vertical"):e.removeClass("oj-conveyorbelt-vertical");if(this.cC()){this.Ge=null;this.Ph="rtl"===this.hd();if(b&&!this.Wx){var k=null,l=null,
m=null,s=null,t=null;"vertical"!==h?(k="oj-enabled oj-conveyorbelt-overflow-indicator oj-start oj-default",l="oj-enabled oj-conveyorbelt-overflow-indicator oj-end oj-default",m=this.WH("oj-conveyorbelt-overflow-icon oj-start"),s=this.WH("oj-conveyorbelt-overflow-icon oj-end"),t=this.coa):(k="oj-enabled oj-conveyorbelt-overflow-indicator oj-top oj-default",l="oj-enabled oj-conveyorbelt-overflow-indicator oj-bottom oj-default",m=this.WH("oj-conveyorbelt-overflow-icon oj-top"),s=this.WH("oj-conveyorbelt-overflow-icon oj-bottom"),
t=this.doa);var r={};r.vha=k;r.gha=l;r.uha=m;r.fha=s;k={};k.Mk=a.u.Mk;k.lm=a.u.lm;k.GE=this.Mna;k.QF=this.AAa;k.Sfa=this.rwa;"enabled"!==a.fa.FX()&&(k.Wha=t);t=null;f.contentParent&&(t=g(f.contentParent)[0]);this.Wx=new c(e[0],h,t,this.Ph,r,k,{Mda:"oj-conveyorbelt-content-container",qga:"oj-conveyorbelt-item",Vfa:"oj-helper-hidden"})}this.Wx.Mn(b);b&&(b=e.find(".oj-conveyorbelt-overflow-indicator"),this.mCa(b))}else e=!1,this.Ge&&(e=this.Ge[0]),this.Ge=[b||e]},_destroy:function(){this.FR();this.element.removeClass("oj-conveyorbelt oj-component oj-conveyorbelt-vertical");
this._super()},_setOption:function(c,e,f){var g=!1,k=this.options;switch(c){case "containerParent":case "orientation":g=k.orientation!=e;break;case "disabled":a.r.warn(b)}g&&this.FR();this._super(c,e,f);g&&this.$a(!0)},FR:function(){var a=this.Wx;a&&(this.element.find(".oj-conveyorbelt-overflow-indicator").off(this.eventNamespace),a.destroy());this.Wx=null},cC:function(){var a=document.createElement("div"),b=a.style;b.width="10px";b.height="10px";b["-webkit-flex"]="0 0 auto";b.flex="0 0 auto";b=this.element[0];
b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(g){}b.removeChild(a);return c},mCa:function(a){this.Qe({element:a,afterToggle:function(b){"mouseenter"===b?a.removeClass("oj-default"):"mouseleave"===b&&a.addClass("oj-default")}});this.ok({element:a,afterToggle:function(b){"mousedown"===b||"touchstart"===b?a.removeClass("oj-default"):"mouseup"!==b&&"touchend"!==b&&"touchcancel"!==b||a.addClass("oj-default")}})},WH:function(a){var b=document.createElement("span");b.setAttribute("class",
"oj-component-icon "+a);return b},coa:function(a,b,c,h){var k={};k.scrollLeft=b;g(a).animate(k,c,"swing",h)},doa:function(a,b,c,h){var k={};k.scrollTop=b;g(a).animate(k,c,"swing",h)},Mna:function(a,b){g(a).addClass(b)},AAa:function(a,b){g(a).removeClass(b)},rwa:function(a,b){return g(a).hasClass(b)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-conveyorbelt-start-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-start")[0]:
"oj-conveyorbelt-end-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-end")[0]:"oj-conveyorbelt-top-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-top")[0]:"oj-conveyorbelt-bottom-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-bottom")[0]:null},getSubIdByNode:function(a){for(var b=this.getNodeBySubId({subId:"oj-conveyorbelt-start-overflow-indicator"}),c=this.getNodeBySubId({subId:"oj-conveyorbelt-end-overflow-indicator"}),
g=this.getNodeBySubId({subId:"oj-conveyorbelt-top-overflow-indicator"}),k=this.getNodeBySubId({subId:"oj-conveyorbelt-bottom-overflow-indicator"}),l=this.element[0];a&&a!=l;){if(a===b)return{subId:"oj-conveyorbelt-start-overflow-indicator"};if(a===c)return{subId:"oj-conveyorbelt-end-overflow-indicator"};if(a===g)return{subId:"oj-conveyorbelt-top-overflow-indicator"};if(a===k)return{subId:"oj-conveyorbelt-bottom-overflow-indicator"};a=a.parentElement}return null}});var b="JET ConveyorBelt: 'disabled' option not supported"})();
a.Components.Ta("ojConveyorBelt","baseComponent",{properties:{contentParent:{type:"string"},disabled:{type:"boolean"},orientation:{type:"string"}},methods:{refresh:{}},extension:{_widgetName:"ojConveyorBelt"}});a.Components.register("oj-conveyor-belt",a.Components.getMetadata("ojConveyorBelt"))});