/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery"],function(a){a.vm=function(a){this.data=a;this.Init()};o_("DataSource",a.vm,a);a.b.ta(a.vm,a.mj,"oj.DataSource");a.vm.prototype.Init=function(){a.vm.t.Init.call(this)};a.b.g("DataSource.prototype.Init",{Init:a.vm.prototype.Init});a.tu=function(g){a.tu.t.constructor.call(this,g)};o_("TreeDataSource",a.tu,a);a.b.ta(a.tu,a.vm,"oj.TreeDataSource");a.aa=function(g,c){if(this.constructor==a.aa)throw Error(a.aa.od.fKa+"\n"+a.aa.od.eKa);this.data=g;this.options=c;this.pa=0;this.Init()};
o_("TableDataSource",a.aa,a);a.b.ta(a.aa,a.vm,"oj.TableDataSource");a.aa.prototype.Init=function(){a.aa.t.Init.call(this)};a.b.g("TableDataSource.prototype.Init",{Init:a.aa.prototype.Init});a.aa.prototype.sortCriteria=null;a.b.g("TableDataSource.prototype.sortCriteria",{sortCriteria:a.aa.prototype.sortCriteria});a.aa.prototype.totalSizeConfidence=function(){return"actual"};a.b.g("TableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.aa.prototype.totalSizeConfidence});a.aa.Q={ADD:"add",
REMOVE:"remove",RESET:"reset",REFRESH:"refresh",SORT:"sort",CHANGE:"change",REQUEST:"request",SYNC:"sync",ERROR:"error"};o_("TableDataSource.EventType",a.aa.Q,a);a.aa.od={_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY:"oj.TableDataSource constructor called.",_ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL:"Please do not instantiate oj.TableDataSource. Please use one of the subclasses instead such as oj.ArrayTableDataSource or oj.CollectionTableDataSource.",_ERR_DATA_INVALID_TYPE_SUMMARY:"Invalid data type.",
_ERR_DATA_INVALID_TYPE_DETAIL:"Please specify the appropriate data type."};a.Dr=function(g){a.Dr.t.constructor.call(this,g)};o_("DataGridDataSource",a.Dr,a);a.b.ta(a.Dr,a.vm,"oj.DataGridDataSource")});