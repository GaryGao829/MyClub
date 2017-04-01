/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","ojs/ojmodel"],function(a,g){a.kb=function(){};o_("KnockoutUtils",a.kb,a);a.kb.mY="oj._internalObj";a.kb.ck="oj._underUpdate";a.kb.Iz="oj.collectionUpdating";a.kb.GZ="oj.collectionSubscription";a.kb.PZ="oj.collectionUpdatingFunc";a.kb.map=function(c,b,d){function e(b){return function(d){f[a.kb.ck]||c.set(b,d)}}var f,h,k,l;if(c instanceof a.l){h=Array(c.mf());f=d?g.observableArray(h):h;a.kb.mca(f,c);if(d)for(h=0;h<c.ad.length;h++)k=c.ad[h],f()[k]=a.kb.map(c.aq(k,null,
!0,!1),b);else for(h=0;h<c.ad.length;h++)k=c.ad[h],f[k]=a.kb.map(c.aq(k,null,!0,!1),b);h=function(b){var d;try{if(!f[a.kb.ck]){f[a.kb.Iz]=!0;for(d=0;d<b.length;d++){var e=b[d].index,g=a.kb.Rc(b[d].value),h=b[d].status;"added"===h?e>=c.length-1?c.add(g):c.add(g,{at:e}):"deleted"===h&&c.Qv(g,e)}c.comparator&&(f[a.kb.ck]=!0,f.sort(function(b,d){return a.kb.U3(b,d,c.comparator,c,this)}),f[a.kb.ck]=!1)}}catch(k){throw k;}finally{f[a.kb.Iz]=!1}};d&&f.subscribe&&(f[a.kb.PZ]=h,f[a.kb.GZ]=f.subscribe(h,null,
"arrayChange"));d=function(b,c,d){var e;try{!f[a.kb.Iz]&&c instanceof a.l&&(f[a.kb.ck]=!0,e=d.index,f.splice(e,1))}catch(g){throw g;}finally{f[a.kb.ck]=!1}};h=function(c,d,e){var g,h;try{if(!f[a.kb.Iz]&&d instanceof a.l&&(f[a.kb.ck]=!0,g=d.eya(c),void 0!==g&&-1<g))if(h=a.kb.map(c,b),e.fillIn){for(var k=Array.isArray(f)?f.length:f().length;k<g;k++)f.splice(k,0,a.kb.map(d.aq(k,null,!0,!1),b));f.splice(g,1,h)}else f.splice(g,0,h)}catch(l){throw l;}finally{f[a.kb.ck]=!1}};k=function(b){try{!f[a.kb.Iz]&&
b instanceof a.l&&(f[a.kb.ck]=!0,g.isObservable(f)?(f[a.kb.GZ]&&f[a.kb.GZ].dispose(),f.removeAll(),f[a.kb.PZ]&&f.subscribe(f[a.kb.PZ],null,"arrayChange")):f=[])}catch(c){throw c;}finally{f[a.kb.ck]=!1}};l=function(b){try{!f[a.kb.Iz]&&b instanceof a.l&&(f[a.kb.ck]=!0,f.sort(function(d,e){return a.kb.U3(d,e,c.comparator,b,this)}))}catch(d){throw d;}finally{f[a.kb.ck]=!1}};c.Lp(a.ka.Q.ADD,h,void 0,void 0,!0);c.Lp(a.ka.Q.REMOVE,d,void 0,void 0,!0);c.Lp(a.ka.Q.RESET,k,void 0,void 0,!0);c.Lp(a.ka.Q.SORT,
l,void 0,void 0,!0)}else{if(void 0===c)return;f={};d=c.attributes;h=null;for(h in d)d.hasOwnProperty(h)&&(k=g.observable(c.get(h)),f[h]=k,l=e(h),l.ZKa=h,k.subscribe&&k.subscribe(l));d=function(b){var c,d;try{for(d in f[a.kb.ck]=!0,c=b.eX(),c)if(c.hasOwnProperty(d))f[d](b.get(d))}catch(e){throw e;}finally{f[a.kb.ck]=!1}};c.Lp(a.ka.Q.CHANGE,d,void 0,void 0,!0);a.kb.mca(f,c);b&&b(f)}return f};o_("KnockoutUtils.map",a.kb.map,a);a.kb.Rc=function(c){return c instanceof a.D?c:c.hasOwnProperty(a.kb.mY)?c[a.kb.mY]:
c};a.kb.U3=function(c,b,d,e,f){return a.l.n0(a.kb.Rc(c),a.kb.Rc(b),d,e,f)};a.kb.mca=function(c,b){Object.defineProperty(c,a.kb.mY,{value:b,enumerable:!1})}});