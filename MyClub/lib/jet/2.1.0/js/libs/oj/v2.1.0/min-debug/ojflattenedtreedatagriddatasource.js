/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojrowexpander"], function($oj$$73$$) {
  $oj$$73$$.$FlattenedTreeHeaderSet$ = function $$oj$$73$$$$FlattenedTreeHeaderSet$$($start$$69$$, $end$$22$$, $headers$$10$$, $nodeSet$$27$$, $rowHeader$$24$$) {
    $oj$$73$$.$Assert$.$assertArrayOrNull$($headers$$10$$);
    this.$m_start$ = $start$$69$$;
    this.$m_end$ = $end$$22$$;
    this.$m_headers$ = $headers$$10$$;
    this.$m_nodeSet$ = $nodeSet$$27$$;
    this.$m_rowHeader$ = $rowHeader$$24$$;
  };
  $goog$exportPath_$$("FlattenedTreeHeaderSet", $oj$$73$$.$FlattenedTreeHeaderSet$, $oj$$73$$);
  $oj$$73$$.$FlattenedTreeHeaderSet$.prototype.getData = function $$oj$$73$$$$FlattenedTreeHeaderSet$$$getData$($index$$331$$, $level$$63$$) {
    var $rowData$$5$$;
    $oj$$73$$.$Assert$.assert($index$$331$$ <= this.$m_end$ && $index$$331$$ >= this.$m_start$, "index out of bounds");
    $oj$$73$$.$Assert$.assert(null == $level$$63$$ || 0 == $level$$63$$, "level out of bounds");
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? ($rowData$$5$$ = this.$m_nodeSet$.getData($index$$331$$ - this.$m_start$ + this.$m_nodeSet$.getStart()), null != $rowData$$5$$ ? $rowData$$5$$.get ? $rowData$$5$$.get(this.$m_rowHeader$) : $rowData$$5$$[this.$m_rowHeader$] : null) : this.$m_headers$[$index$$331$$];
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getData", {getData:$oj$$73$$.$FlattenedTreeHeaderSet$.prototype.getData});
  $oj$$73$$.$FlattenedTreeHeaderSet$.prototype.getMetadata = function $$oj$$73$$$$FlattenedTreeHeaderSet$$$getMetadata$($index$$332$$, $level$$64$$) {
    $oj$$73$$.$Assert$.assert($index$$332$$ <= this.$m_end$ && $index$$332$$ >= this.$m_start$, "index out of bounds");
    $oj$$73$$.$Assert$.assert(null == $level$$64$$ || 0 == $level$$64$$, "level out of bounds");
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? this.$m_nodeSet$.getMetadata($index$$332$$ - this.$m_start$ + this.$m_nodeSet$.getStart()) : {key:this.getData($index$$332$$)};
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getMetadata", {getMetadata:$oj$$73$$.$FlattenedTreeHeaderSet$.prototype.getMetadata});
  $oj$$73$$.$FlattenedTreeHeaderSet$.prototype.getCount = function $$oj$$73$$$$FlattenedTreeHeaderSet$$$getCount$() {
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? Math.min(this.$m_nodeSet$.getCount(), this.$m_end$ - this.$m_start$) : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getCount", {getCount:$oj$$73$$.$FlattenedTreeHeaderSet$.prototype.getCount});
  $oj$$73$$.$FlattenedTreeHeaderSet$.prototype.getLevelCount = function $$oj$$73$$$$FlattenedTreeHeaderSet$$$getLevelCount$() {
    return 0 < this.getCount() ? 1 : 0;
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getLevelCount", {getLevelCount:$oj$$73$$.$FlattenedTreeHeaderSet$.prototype.getLevelCount});
  $oj$$73$$.$FlattenedTreeHeaderSet$.prototype.getExtent = function $$oj$$73$$$$FlattenedTreeHeaderSet$$$getExtent$($index$$333$$, $level$$65$$) {
    $oj$$73$$.$Assert$.assert($index$$333$$ <= this.$m_end$ && $index$$333$$ >= this.$m_start$, "index out of bounds");
    $oj$$73$$.$Assert$.assert(null == $level$$65$$ || 0 == $level$$65$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getExtent", {getExtent:$oj$$73$$.$FlattenedTreeHeaderSet$.prototype.getExtent});
  $oj$$73$$.$FlattenedTreeHeaderSet$.prototype.getDepth = function $$oj$$73$$$$FlattenedTreeHeaderSet$$$getDepth$($index$$334$$, $level$$66$$) {
    $oj$$73$$.$Assert$.assert($index$$334$$ <= this.$m_end$ && $index$$334$$ >= this.$m_start$, "index out of bounds");
    $oj$$73$$.$Assert$.assert(null == $level$$66$$ || 0 == $level$$66$$, "level out of bounds");
    return 1;
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getDepth", {getDepth:$oj$$73$$.$FlattenedTreeHeaderSet$.prototype.getDepth});
  $oj$$73$$.$FlattenedTreeCellSet$ = function $$oj$$73$$$$FlattenedTreeCellSet$$($startRow$$11$$, $endRow$$5$$, $startColumn$$4$$, $endColumn$$3$$, $nodeSet$$28$$, $columns$$27$$) {
    $oj$$73$$.$Assert$.$assertArrayOrNull$($columns$$27$$);
    this.$m_startRow$ = $startRow$$11$$;
    this.$m_endRow$ = $endRow$$5$$;
    this.$m_startColumn$ = $startColumn$$4$$;
    this.$m_endColumn$ = $endColumn$$3$$;
    this.$m_nodeSet$ = $nodeSet$$28$$;
    this.$m_columns$ = $columns$$27$$;
  };
  $goog$exportPath_$$("FlattenedTreeCellSet", $oj$$73$$.$FlattenedTreeCellSet$, $oj$$73$$);
  $oj$$73$$.$FlattenedTreeCellSet$.prototype.getData = function $$oj$$73$$$$FlattenedTreeCellSet$$$getData$($indexes$$31_returnObj$$4_row$$92$$) {
    var $column$$32_getter$$4_relIndex$$2$$, $columnKey$$8$$, $rowData$$6$$, $setter$$1$$;
    $column$$32_getter$$4_relIndex$$2$$ = this.$_getRelIndexes$($indexes$$31_returnObj$$4_row$$92$$);
    if (null == $column$$32_getter$$4_relIndex$$2$$) {
      return null;
    }
    $indexes$$31_returnObj$$4_row$$92$$ = $column$$32_getter$$4_relIndex$$2$$[0];
    $column$$32_getter$$4_relIndex$$2$$ = $column$$32_getter$$4_relIndex$$2$$[1];
    $oj$$73$$.$Assert$.assert($indexes$$31_returnObj$$4_row$$92$$ < this.$m_nodeSet$.getStart() + this.$m_nodeSet$.getCount() && $column$$32_getter$$4_relIndex$$2$$ < this.$m_columns$.length);
    $columnKey$$8$$ = this.$m_columns$[$column$$32_getter$$4_relIndex$$2$$];
    $rowData$$6$$ = this.$m_nodeSet$.getData($indexes$$31_returnObj$$4_row$$92$$);
    return null != $rowData$$6$$ ? ($indexes$$31_returnObj$$4_row$$92$$ = {}, $column$$32_getter$$4_relIndex$$2$$ = $rowData$$6$$.get ? function() {
      return $rowData$$6$$.get($columnKey$$8$$);
    } : function() {
      return $rowData$$6$$[$columnKey$$8$$];
    }, $setter$$1$$ = $rowData$$6$$.set ? function($newValue$$32$$) {
      return $rowData$$6$$.set($columnKey$$8$$, $newValue$$32$$);
    } : function($newValue$$33$$) {
      $rowData$$6$$[$columnKey$$8$$] = $newValue$$33$$;
    }, Object.defineProperty($indexes$$31_returnObj$$4_row$$92$$, "data", {get:$column$$32_getter$$4_relIndex$$2$$, set:$setter$$1$$}), $indexes$$31_returnObj$$4_row$$92$$) : null;
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getData", {getData:$oj$$73$$.$FlattenedTreeCellSet$.prototype.getData});
  $oj$$73$$.$FlattenedTreeCellSet$.prototype.getMetadata = function $$oj$$73$$$$FlattenedTreeCellSet$$$getMetadata$($indexes$$32_metadata$$26_row$$93$$) {
    var $column$$33_columnKey$$9_relIndex$$3$$;
    $column$$33_columnKey$$9_relIndex$$3$$ = this.$_getRelIndexes$($indexes$$32_metadata$$26_row$$93$$);
    if (null == $column$$33_columnKey$$9_relIndex$$3$$) {
      return null;
    }
    $indexes$$32_metadata$$26_row$$93$$ = $column$$33_columnKey$$9_relIndex$$3$$[0];
    $column$$33_columnKey$$9_relIndex$$3$$ = $column$$33_columnKey$$9_relIndex$$3$$[1];
    $oj$$73$$.$Assert$.assert($indexes$$32_metadata$$26_row$$93$$ < this.$m_nodeSet$.getStart() + this.$m_nodeSet$.getCount() && $column$$33_columnKey$$9_relIndex$$3$$ < this.$m_columns$.length);
    $column$$33_columnKey$$9_relIndex$$3$$ = this.$m_columns$[$column$$33_columnKey$$9_relIndex$$3$$];
    $indexes$$32_metadata$$26_row$$93$$ = this.$m_nodeSet$.getMetadata($indexes$$32_metadata$$26_row$$93$$);
    $indexes$$32_metadata$$26_row$$93$$.keys = {row:$indexes$$32_metadata$$26_row$$93$$.key, column:$column$$33_columnKey$$9_relIndex$$3$$};
    return $indexes$$32_metadata$$26_row$$93$$;
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getMetadata", {getMetadata:$oj$$73$$.$FlattenedTreeCellSet$.prototype.getMetadata});
  $oj$$73$$.$FlattenedTreeCellSet$.prototype.$_getRelIndexes$ = function $$oj$$73$$$$FlattenedTreeCellSet$$$$_getRelIndexes$$($column$$34_indexes$$33$$) {
    var $row$$94$$;
    $oj$$73$$.$Assert$.$assertObject$($column$$34_indexes$$33$$);
    if (null == this.$m_nodeSet$ || 0 == this.$m_nodeSet$.length) {
      return null;
    }
    $row$$94$$ = $column$$34_indexes$$33$$.row - this.$m_startRow$ + this.$m_nodeSet$.getStart();
    $column$$34_indexes$$33$$ = $column$$34_indexes$$33$$.column;
    $oj$$73$$.$Assert$.$assertNumber$($row$$94$$, null);
    $oj$$73$$.$Assert$.$assertNumber$($column$$34_indexes$$33$$, null);
    $oj$$73$$.$Assert$.assert(0 <= $row$$94$$ && 0 <= $column$$34_indexes$$33$$);
    return[$row$$94$$, $column$$34_indexes$$33$$];
  };
  $oj$$73$$.$FlattenedTreeCellSet$.prototype.getStart = function $$oj$$73$$$$FlattenedTreeCellSet$$$getStart$($axis$$90$$) {
    return "row" === $axis$$90$$ ? this.$m_startRow$ : "column" === $axis$$90$$ ? this.$m_startColumn$ : 0;
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getStart", {getStart:$oj$$73$$.$FlattenedTreeCellSet$.prototype.getStart});
  $oj$$73$$.$FlattenedTreeCellSet$.prototype.getCount = function $$oj$$73$$$$FlattenedTreeCellSet$$$getCount$($axis$$91$$) {
    return "row" === $axis$$91$$ ? Math.min(this.$m_endRow$ - this.$m_startRow$, this.$m_nodeSet$.getCount()) : "column" === $axis$$91$$ ? this.$m_endColumn$ - this.$m_startColumn$ : 0;
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getCount", {getCount:$oj$$73$$.$FlattenedTreeCellSet$.prototype.getCount});
  $oj$$73$$.$FlattenedTreeDataGridDataSource$ = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$($treeDataSource$$2$$, $options$$402$$) {
    $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.constructor.call(this, $treeDataSource$$2$$, $options$$402$$);
  };
  $goog$exportPath_$$("FlattenedTreeDataGridDataSource", $oj$$73$$.$FlattenedTreeDataGridDataSource$, $oj$$73$$);
  $oj$$73$$.$Object$.$createSubclass$($oj$$73$$.$FlattenedTreeDataGridDataSource$, $oj$$73$$.$FlattenedTreeDataSource$, "oj.FlattenedTreeDataGridDataSource");
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.Init = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$Init$() {
    $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.Init.call(this);
    this.$m_columns$ = $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "columns");
    this.$m_rowHeader$ = $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "rowHeader");
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.Init", {Init:$oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.Init});
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.getCountPrecision = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$getCountPrecision$($axis$$92$$) {
    return "row" === $axis$$92$$ ? "estimate" : "actual";
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCountPrecision", {getCountPrecision:$oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.getCountPrecision});
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.getCount = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$getCount$($axis$$93$$) {
    return "row" === $axis$$93$$ ? -1 : "column" === $axis$$93$$ ? this.$m_columns$.length : 0;
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCount", {getCount:$oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.getCount});
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.fetchHeaders = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$fetchHeaders$($headerRange$$19$$, $callbacks$$45$$, $callbackObjects$$21$$) {
    var $axis$$94_columnCount$$8$$, $headerSet$$16$$;
    $axis$$94_columnCount$$8$$ = $headerRange$$19$$.axis;
    if ("column" === $axis$$94_columnCount$$8$$) {
      $axis$$94_columnCount$$8$$ = $headerRange$$19$$.start + $headerRange$$19$$.count, $axis$$94_columnCount$$8$$ > this.getCount("column") && ($axis$$94_columnCount$$8$$ = this.getCount("column") - $headerRange$$19$$.start), $headerSet$$16$$ = new $oj$$73$$.$FlattenedTreeHeaderSet$($headerRange$$19$$.start, $axis$$94_columnCount$$8$$, this.$m_columns$);
    } else {
      if ("row" === $axis$$94_columnCount$$8$$) {
        if (null != this.$m_rowHeader$) {
          this.$m_fetchHeaderRequest$ = {range:$headerRange$$19$$, callbacks:$callbacks$$45$$, callbackObjects:$callbackObjects$$21$$};
          return;
        }
        $headerSet$$16$$ = new $oj$$73$$.$ArrayHeaderSet$($headerRange$$19$$.start, $headerRange$$19$$.start, $axis$$94_columnCount$$8$$, null);
      }
    }
    null != $headerSet$$16$$ && null != $callbacks$$45$$ && null != $callbacks$$45$$.success && (null == $callbackObjects$$21$$ && ($callbackObjects$$21$$ = {}), $callbacks$$45$$.success.call($callbackObjects$$21$$.success, $headerSet$$16$$, $headerRange$$19$$));
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchHeaders", {fetchHeaders:$oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.fetchHeaders});
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.fetchCells = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$fetchCells$($cellRanges$$8$$, $callbacks$$46$$, $callbackObjects$$22$$) {
    var $i$$519$$, $cellRange$$13$$, $rowStart$$18$$, $rowCount$$20$$;
    for ($i$$519$$ = 0;$i$$519$$ < $cellRanges$$8$$.length;$i$$519$$++) {
      if ($cellRange$$13$$ = $cellRanges$$8$$[$i$$519$$], "row" == $cellRange$$13$$.axis) {
        $rowStart$$18$$ = $cellRange$$13$$.start;
        $rowCount$$20$$ = $cellRange$$13$$.count;
        break;
      }
    }
    $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.$fetchRows$.call(this, {start:$rowStart$$18$$, count:$rowCount$$20$$}, {success:function($nodeSet$$29$$) {
      this.$_handleFetchRowsSuccess$($nodeSet$$29$$, $cellRanges$$8$$, $callbacks$$46$$, $callbackObjects$$22$$, 0);
    }.bind(this), error:function($status$$32$$) {
      this.$_handleFetchRowsError$($status$$32$$, {start:$rowStart$$18$$, count:$rowCount$$20$$}, $callbacks$$46$$, $callbackObjects$$22$$);
    }.bind(this)});
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchCells", {fetchCells:$oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.fetchCells});
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.keys = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$keys$($indexes$$34$$) {
    var $rowIndex$$23$$, $colIndex$$1$$;
    $rowIndex$$23$$ = $indexes$$34$$.row;
    $colIndex$$1$$ = $indexes$$34$$.column;
    return new Promise(function($resolve$$76$$) {
      $rowIndex$$23$$ > $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getFetchedRange$.call(this).end || $colIndex$$1$$ > this.$m_columns$.length ? $resolve$$76$$(null) : $resolve$$76$$({row:$oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.getKey.call(this, $rowIndex$$23$$), column:this.$m_columns$[$colIndex$$1$$]});
    }.bind(this));
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.keys", {keys:$oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.keys});
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.indexes = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$indexes$($keys$$58$$) {
    var $rowIndex$$24$$, $colIndex$$2$$, $rowKey$$56$$, $colKey$$, $i$$520$$;
    $rowKey$$56$$ = $keys$$58$$.row;
    $colKey$$ = $keys$$58$$.column;
    return new Promise(function($resolve$$77$$) {
      $rowIndex$$24$$ = $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getIndex$.call(this, $rowKey$$56$$);
      for ($i$$520$$ = 0;$i$$520$$ < this.$m_columns$.length;$i$$520$$++) {
        if (this.$m_columns$[$i$$520$$] === $colKey$$) {
          $colIndex$$2$$ = $i$$520$$;
          break;
        }
      }
      0 <= $rowIndex$$24$$ || 0 <= $colIndex$$2$$ ? $resolve$$77$$({row:$rowIndex$$24$$, column:$colIndex$$2$$}) : $resolve$$77$$(null);
    }.bind(this));
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.indexes", {indexes:$oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.indexes});
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.sort = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$sort$($criteria$$8$$, $callbacks$$47$$, $callbackObjects$$23$$) {
    return $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).sort($criteria$$8$$, {success:function() {
      this.$_handleSortSuccess$($callbacks$$47$$, $callbackObjects$$23$$);
    }.bind(this), error:$callbacks$$47$$.error});
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.sort", {sort:$oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.sort});
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleSortSuccess$ = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$$_handleSortSuccess$$($callbacks$$48$$, $callbackObjects$$24$$) {
    this.refresh();
    $callbacks$$48$$.success && (null == $callbackObjects$$24$$ && ($callbackObjects$$24$$ = {}), $callbacks$$48$$.success.call($callbackObjects$$24$$.success));
  };
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.move = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$move$($rowToMove$$8$$, $referenceRow$$14$$, $position$$47$$, $callbacks$$49$$) {
    $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).move($rowToMove$$8$$, $referenceRow$$14$$, $position$$47$$, $callbacks$$49$$);
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.move", {move:$oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.move});
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$getCapability$($feature$$15$$) {
    return "default" === $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).getCapability($feature$$15$$) ? "column" : "none";
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCapability", {getCapability:$oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability});
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.$insertMetadata$ = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$$insertMetadata$$($key$$206$$, $metadata$$27$$) {
    $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.$insertMetadata$.call(this, $key$$206$$, $metadata$$27$$);
  };
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsSuccess$$($cellSet$$16_nodeSet$$30$$, $cellRanges$$9$$, $callbacks$$50$$, $callbackObjects$$25$$) {
    var $headerRange$$20_i$$521$$, $cellRange$$14$$, $rowStart$$19$$, $rowCount$$21$$, $columnStart$$9$$, $columnCount$$9$$;
    for ($headerRange$$20_i$$521$$ = 0;$headerRange$$20_i$$521$$ < $cellRanges$$9$$.length;$headerRange$$20_i$$521$$++) {
      $cellRange$$14$$ = $cellRanges$$9$$[$headerRange$$20_i$$521$$], "row" == $cellRange$$14$$.axis ? ($rowStart$$19$$ = $cellRange$$14$$.start, $rowCount$$21$$ = $cellRange$$14$$.count) : "column" == $cellRange$$14$$.axis && ($columnStart$$9$$ = $cellRange$$14$$.start, $columnCount$$9$$ = $cellRange$$14$$.count, $columnStart$$9$$ + $columnCount$$9$$ > this.getCount("column") && ($columnCount$$9$$ = this.getCount("column") - $columnStart$$9$$));
    }
    this.$m_fetchHeaderRequest$ && ($headerRange$$20_i$$521$$ = this.$m_fetchHeaderRequest$.range, $headerRange$$20_i$$521$$.start == $rowStart$$19$$ && $headerRange$$20_i$$521$$.count == $rowCount$$21$$ && this.$_handleRowHeaderFetchSuccess$($cellSet$$16_nodeSet$$30$$, $headerRange$$20_i$$521$$, this.$m_fetchHeaderRequest$.callbacks, this.$m_fetchHeaderRequest$.callbackObjects), this.$m_fetchHeaderRequest$ = null);
    $cellSet$$16_nodeSet$$30$$ = new $oj$$73$$.$FlattenedTreeCellSet$($rowStart$$19$$, $rowStart$$19$$ + $rowCount$$21$$, $columnStart$$9$$, $columnStart$$9$$ + $columnCount$$9$$, $cellSet$$16_nodeSet$$30$$, this.$m_columns$);
    $callbacks$$50$$.success && (null == $callbackObjects$$25$$ && ($callbackObjects$$25$$ = {}), $callbacks$$50$$.success.call($callbackObjects$$25$$.success, $cellSet$$16_nodeSet$$30$$, $cellRanges$$9$$));
  };
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsError$ = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsError$$($status$$33$$, $headerCallbacks_range$$29$$, $callbacks$$51$$, $callbackObjects$$26$$) {
    var $headerCallbackObjects_headerRange$$21$$;
    this.$m_fetchHeaderRequest$ && ($headerCallbackObjects_headerRange$$21$$ = this.$m_fetchHeaderRequest$.range, $headerCallbackObjects_headerRange$$21$$.start == $headerCallbacks_range$$29$$.start && $headerCallbackObjects_headerRange$$21$$.count == $headerCallbacks_range$$29$$.count && ($headerCallbacks_range$$29$$ = this.$m_fetchHeaderRequest$.callbacks, $headerCallbackObjects_headerRange$$21$$ = this.$m_fetchHeaderRequest$.callbackObjects, $headerCallbacks_range$$29$$.error && (null == $headerCallbackObjects_headerRange$$21$$ && 
    ($headerCallbackObjects_headerRange$$21$$ = {}), $headerCallbacks_range$$29$$.error.call($headerCallbackObjects_headerRange$$21$$.error, $status$$33$$))), this.$m_fetchHeaderRequest$ = null);
    $callbacks$$51$$.error && (null == $callbackObjects$$26$$ && ($callbackObjects$$26$$ = {}), $callbacks$$51$$.success.call($callbackObjects$$26$$.error, $status$$33$$));
  };
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleRowHeaderFetchSuccess$ = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$$_handleRowHeaderFetchSuccess$$($headerSet$$17_nodeSet$$31$$, $headerRange$$22$$, $callbacks$$52$$, $callbackObjects$$27$$) {
    $headerSet$$17_nodeSet$$31$$ = new $oj$$73$$.$FlattenedTreeHeaderSet$($headerRange$$22$$.start, $headerRange$$22$$.start + $headerRange$$22$$.count, this.$m_columns$, $headerSet$$17_nodeSet$$31$$, this.$m_rowHeader$);
    $callbacks$$52$$.success && (null == $callbackObjects$$27$$ && ($callbackObjects$$27$$ = {}), $callbacks$$52$$.success.call($callbackObjects$$27$$.success, $headerSet$$17_nodeSet$$31$$, $headerRange$$22$$));
  };
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.$insertRows$ = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$$insertRows$$($event$$776_insertAtIndex$$1$$, $cellSet$$17_insertAtRowKey$$, $nodeSet$$32$$) {
    var $headerSet$$18$$, $i$$522$$, $keys$$59$$, $indexes$$35$$;
    $headerSet$$18$$ = null;
    this.$m_rowHeader$ && ($headerSet$$18$$ = new $oj$$73$$.$FlattenedTreeHeaderSet$($event$$776_insertAtIndex$$1$$, $event$$776_insertAtIndex$$1$$ + $nodeSet$$32$$.getCount(), this.$m_columns$, $nodeSet$$32$$, this.$m_rowHeader$));
    $cellSet$$17_insertAtRowKey$$ = new $oj$$73$$.$FlattenedTreeCellSet$($event$$776_insertAtIndex$$1$$, $event$$776_insertAtIndex$$1$$ + $nodeSet$$32$$.getCount(), 0, this.$m_columns$.length, $nodeSet$$32$$, this.$m_columns$);
    $keys$$59$$ = [];
    $indexes$$35$$ = [];
    for ($i$$522$$ = 0;$i$$522$$ < $nodeSet$$32$$.getCount();$i$$522$$++) {
      $keys$$59$$.push({row:this.$_getEntry$($event$$776_insertAtIndex$$1$$ + $i$$522$$).key}), $indexes$$35$$.push({row:$event$$776_insertAtIndex$$1$$ + $i$$522$$, column:-1});
    }
    $event$$776_insertAtIndex$$1$$ = {source:this, operation:"insert"};
    $event$$776_insertAtIndex$$1$$.result = $cellSet$$17_insertAtRowKey$$;
    $headerSet$$18$$ && ($event$$776_insertAtIndex$$1$$.header = $headerSet$$18$$);
    $event$$776_insertAtIndex$$1$$.keys = $keys$$59$$;
    $event$$776_insertAtIndex$$1$$.indexes = $indexes$$35$$;
    $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$776_insertAtIndex$$1$$);
  };
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.$removeRows$ = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$$removeRows$$($event$$777_rowKeys$$1$$) {
    var $keys$$60$$, $i$$523$$, $indexes$$36$$;
    $keys$$60$$ = [];
    $indexes$$36$$ = [];
    for ($i$$523$$ = 0;$i$$523$$ < $event$$777_rowKeys$$1$$.length;$i$$523$$++) {
      $keys$$60$$.push({row:$event$$777_rowKeys$$1$$[$i$$523$$].key}), $indexes$$36$$.push({row:$event$$777_rowKeys$$1$$[$i$$523$$].index, column:-1});
    }
    $event$$777_rowKeys$$1$$ = {source:this, operation:"delete"};
    $event$$777_rowKeys$$1$$.keys = $keys$$60$$;
    $event$$777_rowKeys$$1$$.indexes = $indexes$$36$$;
    $oj$$73$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$777_rowKeys$$1$$);
  };
  $oj$$73$$.$FlattenedTreeDataGridDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$73$$$$FlattenedTreeDataGridDataSource$$$$handleMaxCountReached$$($range$$30$$, $callbacks$$53$$) {
    $callbacks$$53$$.success.call(null, new $oj$$73$$.$EmptyNodeSet$(null, $range$$30$$.start));
  };
});
