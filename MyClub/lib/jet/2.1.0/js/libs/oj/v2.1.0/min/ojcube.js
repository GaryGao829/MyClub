/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","promise","ojs/ojdatasource-common"],function(a,g){a.Fb=function(a,b){this.Init();this.ya=a;this.Kj=b;this.Ww()};o_("Cube",a.Fb,a);a.b.ta(a.Fb,a.b,"oj.Cube");a.Fb.prototype.Init=function(){a.Fb.t.Init.call(this)};a.Fb.prototype.Oq=function(){var a=this.l7(),b=[];Array.prototype.push.apply(b,a?a.Oq():this.Oh);for(a=2;a<this.Oh.length;a++)b.push(this.Oh[a]);return b};a.b.g("Cube.prototype.getAxes",{Oq:a.Fb.prototype.Oq});a.Fb.prototype.TS=function(){return this.Oh};a.Fb.prototype.Vq=
function(a){var b=this.l7();a=b.Nya(a);for(a=b=b.cda(a,0,[]);Array.isArray(a)&&1===a.length;)if(a=a[0],!Array.isArray(a))return a;return b};a.b.g("Cube.prototype.getValues",{Vq:a.Fb.prototype.Vq});a.Fb.prototype.setPage=function(a){this.YU=a instanceof Array?a:[a]};a.Fb.prototype.rha=function(c,b,d,e,f){var g=this.Kj,k=this.R5(c);if(!k)return!1;c=null;d<g.length?c=this.R5(d):(c={axis:d,levels:[]},g.push(c));d=k.levels;g=c.levels;c=b<d.length?d[b]:null;if(!c)return!1;e>=g.length?(g.push(c),d.splice(b,
1)):f===a.Fb.wO.SWAP?(d[b]=g[e],g[e]=c):(f===a.Fb.wO.AFTER&&e++,g.splice(e,0,c),g===d&&e<b&&b++,d.splice(b,1));this.Ww();return!0};a.b.g("Cube.prototype.pivot",{rha:a.Fb.prototype.rha});a.Fb.prototype.R5=function(a){for(var b=0;b<this.Kj.length;b++)if(this.Kj[b].axis===a)return this.Kj[b];return null};a.Fb.prototype.aM=function(){return this.Kj};a.b.g("Cube.prototype.getLayout",{aM:a.Fb.prototype.aM});a.Fb.wO={BEFORE:"before",AFTER:"after",SWAP:"swap"};o_("Cube.PivotType",a.Fb.wO,a);a.Fb.prototype.cda=
function(a,b,d){var e=[];if(0===a.length)return b=d.slice(0),this.Dl(b);var f=a.slice(1),g=a[0].start;a=a[0].count;for(d[b]=g;d[b]<g+a;d[b]++)e.push(this.cda(f,b+1,d));return e};a.Fb.prototype.Nya=function(a){var b=[];if(!a)return b;for(var d=Math.min(a.length,this.Oh.length),e=0;e<d;e++){var f=a[e];f instanceof Object&&(f.hasOwnProperty("start")||f.hasOwnProperty("count"))?f.hasOwnProperty("start")?f.hasOwnProperty("count")?b.push(this.wI(f.start,f.count,e)):b.push(this.wI(f.start,1,e)):b.push(this.wI(0,
f.count,e)):b.push(this.wI(f,1,e))}return b};a.Fb.prototype.wI=function(a,b,d){d=this.Oq()[d].getExtent();if(a>=d||0>a)a=0;b=Math.min(b,d-a);return{start:a,index:a,count:b}};a.Fb.prototype.Dl=function(c){var b=this.Wpa(c);return b&&(b=b.lu(),0<b.length&&(b=this.i[b[0].key]))?new a.zi(b.value,c,b.qL,b.rows,b.Vt):new a.zi(null,c,void 0,[])};a.Fb.prototype.uja=function(){var a=this.yta();this.YU=[];for(var b=0;b<a.length;b++)this.iq(a[b].axis,a[b].levels),this.YU.push({axis:a[b].axis,index:0});if(0===
a.length)for(a=this.TS(),b=0;b<a.length;b++)this.iq(a[b].axis,a[b].levels)};a.Fb.prototype.yta=function(){for(var a=[],b=0;b<this.Kj.length;b++)1<this.Kj[b].axis&&a.push(this.Kj[b]);return a};a.Fb.prototype.TS=function(){for(var a=[],b=0;b<this.Kj.length;b++)2>this.Kj[b].axis&&a.push(this.Kj[b]);return a};a.Fb.prototype.Ww=function(){this.Oh=[];this.i=[];this.wR=[];this.uja();if(null!==this.ya)for(var c=0;c<this.ya.length;c++){for(var b=new a.um,d=2;d<this.Oh.length;d++)b=this.Oh[d].O_(this.ya[c],
b);for(var b=b.lu(),e=0;e<b.length;e++){var d=b[e].key,f=this.wR[d];f||(f=this.wR[d]=this.$N(this.TS()));for(var g=new a.um,k=f.Oh.length,d=0;d<k;d++)g=f.Oh[d].O_(this.ya[c],g);g=d=g.lu();if(void 0!==b[e].Zda)for(g=[],k=0;k<d.length;k++)g.push(b[e]);f.HCa(d,g,this.ya[c])}}};a.Fb.prototype.HCa=function(a,b,d){for(var e=0;e<a.length;e++)this.i[a[e].key]=this.Yna(b[e],this.i[a[e].key],d)};a.Fb.prototype.l7=function(){return this.wR[this.ata(this.YU)]};a.Fb.prototype.ata=function(c){var b=new a.um;if(c&&
0<c.length){c.sort(function(a,b){return a.axis-b.axis});for(var d=this.Oh,e=0;e<c.length;e++)b=d[c[e].axis].jG(c[e].index,b)}return b.lu()[0].key};a.Fb.H9=function(a){return a?void 0!==a.value&&null!==a.value:!1};a.Fb.prototype.Sd=function(a,b,d,e,f){d.push(e);e={};for(var g in f)f.hasOwnProperty(g)&&(e[g]=f[g]);e.value=a;e.qL=b;e.rows=d;return e};a.Fb.Ig=function(c){return a.bb.Ke(c.value)?!1:!isNaN(c.value)};a.Fb.prototype.Yna=function(c,b,d){var e=this.bO(c.Zda),f=e.Dz,g=a.Fb.H9(b),k=a.Fb.H9(c),
l=g&&a.Fb.Ig(b),m=k&&a.Fb.Ig(c);switch(f){case a.yi.SUM:return g&&k?l&&m?this.Sd(b.value+c.value,f,b.rows,d,{}):this.Sd(NaN,f,b.rows,d,{}):k&&!g?m?this.Sd(c.value,f,[],d,{}):this.Sd(NaN,f,[],d,{}):b;case a.yi.AVERAGE:return g&&k?l&&m?this.Sd((b.LA+c.value)/(b.rows.length+1),f,b.rows,d,{LA:b.LA+c.value}):this.Sd(NaN,f,b.rows,d,{LA:b.LA}):k&&!g?m?this.Sd(c.value,f,[],d,{LA:c.value}):this.Sd(NaN,f,[],d,{LA:NaN}):b;case a.yi.VARIANCE:case a.yi.STDDEV:return g&&k?l&&m?(g=b.value+(c.value-b.value)/(b.rows.length+
1),this.Sd(g,f,b.rows,d,{Vt:b.Vt+(c.value-b.value)*(c.value-g)})):this.Sd(NaN,f,b.rows,d,{Vt:NaN}):k&&!g?m?this.Sd(c.value,f,[],d,{Vt:0}):this.Sd(NaN,f,[],d,{Vt:NaN}):b;case a.yi.NONE:return this.Sd(null,f,g?b.rows:[],d,{});case a.yi.FIRST:return g?this.Sd(b.value,f,b.rows,d,{}):k?this.Sd(c.value,f,[],d,{}):b;case a.yi.MIN:return g&&k?l&&m?this.Sd(Math.min(b.value,c.value),f,b.rows,d,{}):this.Sd(NaN,f,b.rows,d,{}):k&&!g?m?this.Sd(c.value,f,[],d,{}):this.Sd(NaN,f,[],d,{}):b;case a.yi.MAX:return g&&
k?l&&m?this.Sd(Math.max(b.value,c.value),f,b.rows,d,{}):this.Sd(NaN,f,b.rows,d,{}):k&&!g?m?this.Sd(c.value,f,[],d,{}):this.Sd(NaN,f,[],d,{}):b;case a.yi.COUNT:return g&&k?this.Sd(b.value+1,f,b.rows,d,{}):k&&!g?this.Sd(1,f,[],d,{}):b;case a.yi.CUSTOM:return c=e.Mc.call(this,g?b.value:void 0,k?c.value:void 0),this.Sd(c,f,g?b.rows:[],d,{})}};a.Fb.prototype.iq=function(c,b){c>=this.Oh.length&&Array.prototype.push.apply(this.Oh,Array(c-this.Oh.length+1));this.Oh[c]||(this.Oh[c]=new a.yh(b,c,this));return this.Oh[c]};
a.Fb.prototype.Wpa=function(c){for(var b=this.Oq(),d=new a.um,e=0;e<c.length;e++)d=b[e].jG(c[e],d);return d};a.Fb.prototype.mx=function(){a.o.kd()};a.Fb.prototype.$N=function(){a.o.kd()};a.Fb.prototype.aO=function(){a.o.kd()};a.Fb.prototype.bO=function(){a.o.kd();return{}};a.yi={SUM:"sum",AVERAGE:"avg",STDDEV:"stddev",VARIANCE:"variance",NONE:"none",FIRST:"first",MIN:"min",MAX:"max",COUNT:"count",CUSTOM:"custom"};o_("CubeAggType",a.yi,a);a.gd=function(a,b,d,e){this.Init();this.kf=[];this.Mv=e;this.Lqa=
d;this.i={};this.i.value=a;this.i.label=b};o_("CubeAxisValue",a.gd,a);a.b.ta(a.gd,a.b,"oj.CubeAxisValue");a.gd.prototype.Init=function(){a.gd.t.Init.call(this)};a.gd.prototype.mw=function(){return this.Lqa};a.b.g("CubeAxisValue.prototype.getLevel",{mw:a.gd.prototype.mw});a.gd.prototype.getDepth=function(){return 1};a.b.g("CubeAxisValue.prototype.getDepth",{getDepth:a.gd.prototype.getDepth});a.gd.prototype.Zea=function(){for(var a=[],b=this.Mv;b&&b.Mv;)a.unshift(b),b=b.Mv;return a};a.b.g("CubeAxisValue.prototype.getParents",
{Zea:a.gd.prototype.Zea});a.gd.prototype.getChildren=function(){return this.kf};a.b.g("CubeAxisValue.prototype.getChildren",{getChildren:a.gd.prototype.getChildren});a.gd.prototype.getExtent=function(){if(-1<this.ly)return this.ly;if(this.kf&&0!==this.kf.length)for(var a=this.ly=0;a<this.getChildren().length;a++)this.ly+=this.getChildren()[a].getExtent();else this.ly=1;return this.ly};a.b.g("CubeAxisValue.prototype.getExtent",{getExtent:a.gd.prototype.getExtent});a.gd.prototype.getStart=function(){if(-1<
this.Pj)return this.Pj;if(!this.Mv)return 0;for(var a=this.Mv.getStart(),b=this.Mv.o7(this);b;)a+=b.getExtent(),b=this.Mv.o7(b);return this.Pj=a};a.b.g("CubeAxisValue.prototype.getStart",{getStart:a.gd.prototype.getStart});a.gd.prototype.ie=function(){return this.i.value};a.b.g("CubeAxisValue.prototype.getValue",{ie:a.gd.prototype.ie});a.gd.prototype.RX=function(){return this.i.label?this.i.label:this.ie()};a.b.g("CubeAxisValue.prototype.getLabel",{RX:a.gd.prototype.RX});a.gd.prototype.vja=function(a){var b=
this.wsa();if(null===b)return null;if(b.gA())return this.Jsa(a);if(a=a[b.attribute])for(b=0;b<this.kf.length;b++)if(this.kf[b].ie()===a)return this.kf[b];return null};a.gd.prototype.Jsa=function(a){for(var b=0;b<this.kf.length;b++){var d=this.kf[b].ie();if(a.hasOwnProperty(d)&&a[d]===d)return this.kf[b]}return null};a.gd.prototype.wsa=function(){return this.kf&&0<this.kf.length?this.kf[0].mw():null};a.gd.prototype.wja=function(a){return this.aS(a,0,this.kf.length-1)};a.gd.prototype.aS=function(a,
b,d){if(b>d)return null;var e=Math.floor((b+d)/2),f=this.kf[e],g=f.getStart();return g>a?this.aS(a,b,e-1):g+f.getExtent()-1<a?this.aS(a,e+1,d):f};a.gd.prototype.LN=function(c,b,d){for(var e=0;e<this.kf.length;e++)if(this.kf[e].ie()===c)return this.kf[e];c=new a.gd(c,b,d,this);this.kf.push(c);return c};a.gd.prototype.xja=function(){var a={};a[this.mw().attribute]=this.ie();return a};a.gd.prototype.o7=function(a){for(var b=0;b<this.kf.length;b++)if(this.kf[b]===a){if(0<b)return this.kf[b-1];break}return null};
a.yh=function(c,b,d){this.Init();this.axis=b;this.Q9=[];for(b=0;b<c.length;b++)this.Q9.push(d.aO(c[b],this));this.qC=d;this.Mg=new a.gd(null,null,null,null)};o_("CubeAxis",a.yh,a);a.b.ta(a.yh,a.b,"oj.CubeAxis");a.yh.prototype.Init=function(){a.yh.t.Init.call(this)};a.yh.prototype.jp=function(){return this.Q9};a.b.g("CubeAxis.prototype.getLevels",{jp:a.yh.prototype.jp});a.yh.prototype.getExtent=function(){return this.Mg.getExtent()};a.b.g("CubeAxis.prototype.getExtent",{getExtent:a.yh.prototype.getExtent});
a.yh.prototype.Vq=function(a){for(var b=[],d=this.Mg;d;)(d=d.wja(a))&&b.push(d);return b};a.b.g("CubeAxis.prototype.getValues",{Vq:a.yh.prototype.Vq});a.yh.prototype.Rk=function(a){a=a?JSON.parse(a):{};for(var b=this.Mg,d=null;b;)d=b,b=b.vja(a);return d?d.getStart():-1};a.b.g("CubeAxis.prototype.getIndex",{Rk:a.yh.prototype.Rk});a.yh.prototype.jG=function(a,b){return this.u_(a,this.jp().length-1,b)};a.yh.prototype.u_=function(a,b,d){a=this.Vq(a);b=this.jp()[b];for(var e=0;e<a.length;e++){var f=a[e];
f.mw().gA()?d.KN(f.ie()):d.LO(f);if(f.mw()===b)break}return d};a.yh.prototype.O_=function(a,b){return this.qC.mx(this,0,this.Mg,a,b,!0)};a.zi=function(a,b,d,e,f){this.Init();this.i={};this.i.value=a;this.i.tHa=b;this.i.qL=d;this.i.rows=e;this.i.Vt=f};o_("CubeDataValue",a.zi,a);a.b.ta(a.zi,a.b,"oj.CubeDataValue");a.zi.prototype.Init=function(){a.zi.t.Init.call(this)};a.zi.prototype.ie=function(){switch(this.i.qL){case a.yi.STDDEV:return Math.sqrt(this.S7());case a.yi.VARIANCE:return this.S7();default:return this.i.value}};
a.b.g("CubeDataValue.prototype.getValue",{ie:a.zi.prototype.ie});a.zi.prototype.Tea=function(){return this.i.tHa};a.b.g("CubeDataValue.prototype.getIndices",{Tea:a.zi.prototype.Tea});a.zi.prototype.ffa=function(){return this.i.rows};a.b.g("CubeDataValue.prototype.getRows",{ffa:a.zi.prototype.ffa});a.zi.prototype.tea=function(){return this.i.qL};a.b.g("CubeDataValue.prototype.getAggregation",{tea:a.zi.prototype.tea});a.zi.prototype.S7=function(){if(isNaN(this.i.Vt))return NaN;var a=this.i.rows.length;
return 1<a?this.i.Vt/(a-1):0};a.tm=function(c,b){var d=b.row?b.row.start:0,e=b.row?b.row.count:0,f=b.column?b.column.start:0,g=b.column?b.column.count:0;a.o.Fq(d,null);a.o.Fq(e,null);a.o.Fq(f,null);a.o.Fq(g,null);this.qC=c;this.bW={row:d,column:f};this.Mg=this.qC.Vq([{start:f,count:g},{start:d,count:e}]);g=(d=Array.isArray(this.Mg))?this.Mg.length:1;0<g&&(e=d?this.Mg[0].length:1);this.Rpa={row:e,column:g}};o_("CubeCellSet",a.tm,a);a.tm.prototype.getData=function(a){var b=a.row;a=a.column;return(b=
Array.isArray(this.Mg)?this.Mg[a-this.bW.column][b-this.bW.row]:this.Mg)?b.ie():null};a.b.g("CubeCellSet.prototype.getData",{getData:a.tm.prototype.getData});a.tm.prototype.getMetadata=function(a){var b={keys:{}};b.keys.row=this.k6(a,"row",2);b.keys.column=this.k6(a,"column",1);return b};a.b.g("CubeCellSet.prototype.getMetadata",{getMetadata:a.tm.prototype.getMetadata});a.tm.prototype.k6=function(c,b,d){var e=this.qC.Oq();return void 0!==c[b]&&e.length>=d?(d=new a.um,d=e[a.Hc.D4(b)].jG(c[b],d),d.lu()[0].key):
null};a.tm.prototype.getStart=function(a){return this.bW[a]};a.b.g("CubeCellSet.prototype.getStart",{getStart:a.tm.prototype.getStart});a.tm.prototype.getCount=function(a){return this.Rpa[a]};a.b.g("CubeCellSet.prototype.getCount",{getCount:a.tm.prototype.getCount});a.Bi=function(c,b,d){this.Init();this.ms=d;this.zQ();a.Bi.t.constructor.call(this,c,b)};o_("DataValueAttributeCube",a.Bi,a);a.b.ta(a.Bi,a.Fb,"oj.DataValueAttributeCube");a.Bi.prototype.ya=null;a.Bi.prototype.Init=function(){a.Bi.t.Init.call(this)};
a.Bi.prototype.Ww=function(){a.Bi.t.Ww.call(this)};a.Bi.prototype.bO=function(a){return this.ey[a]};a.Bi.prototype.aO=function(c,b){return c.dataValue?new a.lj(null,b,!0):new a.lj(c.attribute,b,!1)};a.Bi.prototype.$N=function(c){return new a.Bi(null,c,this.ms)};a.Bi.prototype.mx=function(a,b,d,e,f,g){if(b>=a.jp().length)return f;var k=a.jp()[b];if(k.gA())return this.xza(a,d,e,b,f);d=d.LN(e[k.attribute],null,k);g&&f.LO(d);return this.mx(a,b+1,d,e,f,g)};a.Bi.prototype.xza=function(a,b,d,e,f){for(var g=
!0,k=0;k<this.ms.length;k++){var l=this.ms[k].attribute,m=this.ms[k].label;d.hasOwnProperty(l)&&(m=b.LN(l,m,a.jp()[e]),f.KN(l,d[l]),this.mx(a,e+1,m,d,f,g),g=!1)}return f};a.Bi.prototype.zQ=function(){this.ey=[];for(var c=0;c<this.ms.length;c++){var b=this.ms[c];this.ey[b.attribute]=b.aggregation?{Dz:b.aggregation,Mc:b.callback}:{Dz:a.yi.SUM,Mc:b.callback}}};a.um=function(){this.yU=[];this.i=[]};a.um.prototype.LO=function(a){this.yU.push(a)};a.um.prototype.KN=function(a,b){this.i.push({name:a,value:b})};
a.um.prototype.lu=function(){var a=[],b=this.Eoa();if(0===this.i.length)a.push({key:JSON.stringify(b)});else for(var d=0;d<this.i.length;d++){var e=g.extend(!0,{},b);e[this.i[d].name]=this.i[d].name;a.push({key:JSON.stringify(e),Zda:this.i[d].name,value:this.i[d].value})}return a};a.um.prototype.Eoa=function(){for(var a={},b=0;b<this.yU.length;b++){var d=this.yU[b].xja(),e;for(e in d)d.hasOwnProperty(e)&&(a[e]=d[e])}return a};a.Ug=function(a,b,d,e){this.qC=b;this.aC=a;this.Pj=void 0===d?0:d;this.Ppa=
void 0===e?this.aC.getExtent():Math.min(e,this.aC.getExtent()-d);this.D5=d+e-1};o_("CubeHeaderSet",a.Ug,a);a.Ug.prototype.getData=function(a,b){var d=this.Dl(a,b);return d?d.RX():null};a.b.g("CubeHeaderSet.prototype.getData",{getData:a.Ug.prototype.getData});a.Ug.prototype.getMetadata=function(c,b){var d=new a.um,d=this.aC.u_(c,b,d);return(d=d.lu())&&0<d.length?{key:d[0].key}:null};a.b.g("CubeHeaderSet.prototype.getMetadata",{getMetadata:a.Ug.prototype.getMetadata});a.Ug.prototype.getLevelCount=function(){return this.aC.jp().length};
a.b.g("CubeHeaderSet.prototype.getLevelCount",{getLevelCount:a.Ug.prototype.getLevelCount});a.Ug.prototype.getExtent=function(a,b){var d=this.Dl(a,b),e=d.getExtent(),d=d.getStart(),f=d+e-1,g=a<d+e-1;d<this.Pj&&(e-=this.Pj-d);f>this.D5&&(e-=f-this.D5);return{extent:e,more:{before:a>d,after:g}}};a.b.g("CubeHeaderSet.prototype.getExtent",{getExtent:a.Ug.prototype.getExtent});a.Ug.prototype.getDepth=function(a,b){return this.Dl(a,b).getDepth()};a.b.g("CubeHeaderSet.prototype.getDepth",{getDepth:a.Ug.prototype.getDepth});
a.Ug.prototype.getCount=function(){return this.Ppa};a.b.g("CubeHeaderSet.prototype.getCount",{getCount:a.Ug.prototype.getCount});a.Ug.prototype.getStart=function(){return this.Pj};a.b.g("CubeHeaderSet.prototype.getStart",{getStart:a.Ug.prototype.getStart});a.Ug.prototype.Dl=function(a,b){void 0===b&&(b=0);var d=this.aC.Vq(a);return d&&d.length>b?d[b]:null};a.Hc=function(c){a.Hc.t.constructor.call(this,c)};o_("CubeDataGridDataSource",a.Hc,a);a.b.ta(a.Hc,a.Dr,"oj.CubeDataGridDataSource");a.Hc.prototype.$ha=
function(a){this.data=a;this.Y5()};a.b.g("CubeDataGridDataSource.prototype.setCube",{$ha:a.Hc.prototype.$ha});a.Hc.prototype.setPage=function(a){this.data.setPage(a);this.Y5()};a.b.g("CubeDataGridDataSource.prototype.setPage",{setPage:a.Hc.prototype.setPage});a.Hc.prototype.Y5=function(){this.handleEvent("change",{source:this,operation:"refresh"})};a.Hc.prototype.getCount=function(a){return(a=this.iq(a))?a.getExtent():0};a.b.g("CubeDataGridDataSource.prototype.getCount",{getCount:a.Hc.prototype.getCount});
a.Hc.prototype.getCountPrecision=function(){return"exact"};a.b.g("CubeDataGridDataSource.prototype.getCountPrecision",{getCountPrecision:a.Hc.prototype.getCountPrecision});a.Hc.prototype.fetchHeaders=function(c,b,d){var e=new a.Ug(this.iq(c.axis),this.data,c.start,c.count);b.success.call(d?d.success:void 0,e,c)};a.b.g("CubeDataGridDataSource.prototype.fetchHeaders",{fetchHeaders:a.Hc.prototype.fetchHeaders});a.Hc.prototype.fetchCells=function(c,b,d){for(var e={},f=0;f<c.length;f++){var g=void 0===
c[f].start?0:c[f].start;if("row"===c[f].axis){var k=void 0===c[f].count?this.data.Oq()[1].getExtent():c[f].count;e.row={start:g,count:k}}"column"===c[f].axis&&(k=void 0===c[f].count?this.data.Oq()[0].getExtent():c[f].count,e.column={start:g,count:k})}e=new a.tm(this.data,e);b.success.call(d?d.success:void 0,e,c)};a.b.g("CubeDataGridDataSource.prototype.fetchCells",{fetchCells:a.Hc.prototype.fetchCells});a.Hc.prototype.keys=function(a){var b={},b=this.jc(a,"row",b),b=this.jc(a,"column",b);return Promise.resolve(b)};
a.b.g("CubeDataGridDataSource.prototype.keys",{keys:a.Hc.prototype.keys});a.Hc.prototype.jc=function(c,b,d){var e=this.iq(b);c=c[b];var f=new a.um,f=e?e.jG(c,f):"";d[b]=f.lu()[0].key;return d};a.Hc.prototype.indexes=function(a){var b={},b=this.Ej(a,"row",b),b=this.Ej(a,"column",b);return Promise.resolve(b)};a.b.g("CubeDataGridDataSource.prototype.indexes",{indexes:a.Hc.prototype.indexes});a.Hc.prototype.Ej=function(a,b,d){d[b]=this.iq(b).Rk(a[b]);return d};a.Hc.prototype.sort=function(){a.o.kd()};
a.b.g("CubeDataGridDataSource.prototype.sort",{sort:a.Hc.prototype.sort});a.Hc.prototype.move=function(){a.o.kd()};a.b.g("CubeDataGridDataSource.prototype.move",{move:a.Hc.prototype.move});a.Hc.prototype.moveOK=function(){return"invalid"};a.b.g("CubeDataGridDataSource.prototype.moveOK",{moveOK:a.Hc.prototype.moveOK});a.Hc.prototype.getCapability=function(a){switch(a){case "sort":return"none";case "move":return"none"}return null};a.b.g("CubeDataGridDataSource.prototype.getCapability",{getCapability:a.Hc.prototype.getCapability});
a.Hc.D4=function(a){return"row"===a?1:0};a.Hc.prototype.iq=function(c){c=a.Hc.D4(c);var b=this.data.Oq();return b.length>c?b[c]:null};a.Ai=function(c,b,d){this.Init();this.ms=d;this.KDa=d.valueAttr;this.Qxa=d.labelAttr;var e=d.defaultAggregation;this.a5=e?a.Ai.Lsa(e):{Dz:a.yi.SUM};this.oQ=d.aggregation;this.zQ();a.Ai.t.constructor.call(this,c,b)};o_("DataColumnCube",a.Ai,a);a.b.ta(a.Ai,a.Fb,"oj.DataColumnCube");a.Ai.prototype.Init=function(){a.Ai.t.Init.call(this)};a.Ai.prototype.Ww=function(){a.Ai.t.Ww.call(this)};
a.Ai.prototype.bO=function(a){return this.ey[a]?this.ey[a]:this.a5};a.Ai.prototype.$N=function(c){return new a.Ai(null,c,this.ms)};a.Ai.prototype.aO=function(c,b){return c.attribute===this.Qxa?new a.lj(c.attribute,b,!0):new a.lj(c.attribute,b,!1)};a.Ai.prototype.mx=function(a,b,d,e,f,g){if(b>=a.jp().length)return f;var k=a.jp()[b],l=e[k.attribute];d=d.LN(l,null,k);k.gA()?f.KN(l,e[this.KDa]):f.LO(d);return this.mx(a,b+1,d,e,f,g)};a.Ai.Lsa=function(c){return a.bb.Ke(c)?{Dz:c}:{Dz:c.aggregation,Mc:c.callback}};
a.Ai.prototype.zQ=function(){this.ey=[];if(this.oQ)for(var a=0;a<this.oQ.length;a++){var b=this.oQ[a],d=b.aggregation;this.ey[b.value]=d?{Dz:d,Mc:b.callback}:this.a5}};a.lj=function(a,b,d){this.Init();this.attribute=a;this.s3=b;this.axis=b.axis;this.Z4=d};o_("CubeLevel",a.lj,a);a.b.ta(a.lj,a.b,"oj.CubeLevel");a.lj.prototype.Init=function(){a.lj.t.Init.call(this)};a.lj.prototype.ie=function(a){if(a=this.s3.Vq(a))for(var b=0;b<a.length;b++)if(a[b].mw()===this)return a[b];return null};a.b.g("CubeLevel.prototype.getValue",
{ie:a.lj.prototype.ie});a.lj.prototype.gA=function(){return this.Z4};a.b.g("CubeLevel.prototype.isDataValue",{gA:a.lj.prototype.gA});a.lj.prototype.Z4=!1;a.lj.prototype.s3=null});