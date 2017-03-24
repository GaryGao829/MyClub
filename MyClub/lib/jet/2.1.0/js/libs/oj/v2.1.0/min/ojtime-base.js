/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtToolkit"],function(a,g){a.Na("oj.dvtTimeComponent",g.oj.dvtBaseComponent,{rj:function(){return["optionChange","viewportChange"]},Ji:function(){var c=this._super(),b=a.hb.UE("wide");c["DvtUtilBundle.MONTH_JANUARY"]=b[0];c["DvtUtilBundle.MONTH_FEBRUARY"]=b[1];c["DvtUtilBundle.MONTH_MARCH"]=b[2];c["DvtUtilBundle.MONTH_APRIL"]=b[3];c["DvtUtilBundle.MONTH_MAY"]=b[4];c["DvtUtilBundle.MONTH_JUNE"]=b[5];c["DvtUtilBundle.MONTH_JULY"]=
b[6];c["DvtUtilBundle.MONTH_AUGUST"]=b[7];c["DvtUtilBundle.MONTH_SEPTEMBER"]=b[8];c["DvtUtilBundle.MONTH_OCTOBER"]=b[9];c["DvtUtilBundle.MONTH_NOVEMBER"]=b[10];c["DvtUtilBundle.MONTH_DECEMBER"]=b[11];b=a.hb.PE("wide");c["DvtUtilBundle.DAY_SUNDAY"]=b[0];c["DvtUtilBundle.DAY_MONDAY"]=b[1];c["DvtUtilBundle.DAY_TUESDAY"]=b[2];c["DvtUtilBundle.DAY_WEDNESDAY"]=b[3];c["DvtUtilBundle.DAY_THURSDAY"]=b[4];c["DvtUtilBundle.DAY_FRIDAY"]=b[5];c["DvtUtilBundle.DAY_SATURDAY"]=b[6];b=a.hb.PE("abbreviated");c["DvtUtilBundle.DAY_SHORT_SUNDAY"]=
b[0];c["DvtUtilBundle.DAY_SHORT_MONDAY"]=b[1];c["DvtUtilBundle.DAY_SHORT_TUESDAY"]=b[2];c["DvtUtilBundle.DAY_SHORT_WEDNESDAY"]=b[3];c["DvtUtilBundle.DAY_SHORT_THURSDAY"]=b[4];c["DvtUtilBundle.DAY_SHORT_FRIDAY"]=b[5];c["DvtUtilBundle.DAY_SHORT_SATURDAY"]=b[6];return c},ql:function(a){if("viewportChange"===a.type){var b=(new Date(a.viewportStart)).toISOString(),d=(new Date(a.viewportEnd)).toISOString();a=a.minorAxisScale;var e={viewportStart:b,viewportEnd:d,minorAxisScale:a};this.ce("viewportStart",
b);this.ce("viewportEnd",d);this.ce("minorAxis.scale",a);this._trigger("viewportChange",null,e)}else this._super(a)},Rp:function(){null==this.options._resources&&(this.options._resources={});var c=this.options._resources,b=a.Ea.qn("datetime"),d=b.createConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),e=b.createConverter({hour:"numeric",minute:"2-digit"}),f=b.createConverter({hour:"numeric"}),g=b.createConverter({month:"numeric",day:"2-digit"}),k=b.createConverter({month:"long"}),b=b.createConverter({year:"numeric"});
c.converter={seconds:d,minutes:e,hours:f,days:g,weeks:g,months:k,quarters:k,years:b}},getContextByNode:function(a){return this.getSubIdByNode(a)}});a.Components.Ta("dvtTimeComponent","dvtBaseComponent",{properties:{},methods:{getContextByNode:{}},extension:{_widgetName:"dvtTimeComponent"}})});