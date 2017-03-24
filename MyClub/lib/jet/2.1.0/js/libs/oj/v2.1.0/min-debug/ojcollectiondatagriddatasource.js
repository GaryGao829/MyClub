/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel", "ojs/ojarraydatagriddatasource"], function($oj$$44$$) {
  $oj$$44$$.$CollectionHeaderSet$ = function $$oj$$44$$$$CollectionHeaderSet$$($start$$60$$, $end$$18$$, $headers$$9$$, $rowHeader$$23$$, $sortInfo$$) {
    $oj$$44$$.$Assert$.$assertArrayOrNull$($headers$$9$$);
    this.$m_start$ = $start$$60$$;
    this.$m_end$ = $end$$18$$;
    this.$m_headers$ = $headers$$9$$;
    this.$m_rowHeader$ = $rowHeader$$23$$;
    this.$m_sortInfo$ = $sortInfo$$;
  };
  $goog$exportPath_$$("CollectionHeaderSet", $oj$$44$$.$CollectionHeaderSet$, $oj$$44$$);
  $oj$$44$$.$CollectionHeaderSet$.prototype.$setModels$ = function $$oj$$44$$$$CollectionHeaderSet$$$$setModels$$($models$$15$$) {
    $oj$$44$$.$Assert$.$assertArray$($models$$15$$);
    null != $models$$15$$ && $models$$15$$.length === this.getCount() && (this.$m_models$ = $models$$15$$);
  };
  $oj$$44$$.$CollectionHeaderSet$.prototype.getData = function $$oj$$44$$$$CollectionHeaderSet$$$getData$($index$$249$$, $level$$54$$) {
    var $model$$70$$;
    $oj$$44$$.$Assert$.assert($index$$249$$ <= this.$m_end$ && $index$$249$$ >= this.$m_start$, "index out of bounds");
    $oj$$44$$.$Assert$.assert(null == $level$$54$$ || 0 == $level$$54$$, "level out of bounds");
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $model$$70$$ = this.$m_models$[$index$$249$$ - this.$m_start$];
      return $model$$70$$.get(this.$m_rowHeader$);
    }
    return this.$m_headers$[$index$$249$$];
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getData", {getData:$oj$$44$$.$CollectionHeaderSet$.prototype.getData});
  $oj$$44$$.$CollectionHeaderSet$.prototype.getMetadata = function $$oj$$44$$$$CollectionHeaderSet$$$getMetadata$($index$$250$$, $level$$55$$) {
    var $data$$155_model$$71$$;
    $oj$$44$$.$Assert$.assert($index$$250$$ <= this.$m_end$ && $index$$250$$ >= this.$m_start$, "index out of bounds");
    $oj$$44$$.$Assert$.assert(null == $level$$55$$ || 0 == $level$$55$$, "level out of bounds");
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $data$$155_model$$71$$ = this.$m_models$[$index$$250$$ - this.$m_start$];
      return{key:$oj$$44$$.$CollectionDataGridUtils$.$_getModelKey$($data$$155_model$$71$$)};
    }
    $data$$155_model$$71$$ = this.getData($index$$250$$, $level$$55$$);
    return this.$m_sortInfo$.key === $data$$155_model$$71$$ ? {key:$data$$155_model$$71$$, sortDirection:this.$m_sortInfo$.direction} : {key:$data$$155_model$$71$$};
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getMetadata", {getMetadata:$oj$$44$$.$CollectionHeaderSet$.prototype.getMetadata});
  $oj$$44$$.$CollectionHeaderSet$.prototype.getLevelCount = function $$oj$$44$$$$CollectionHeaderSet$$$getLevelCount$() {
    return 0 < this.getCount() ? 1 : 0;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getLevelCount", {getLevelCount:$oj$$44$$.$CollectionHeaderSet$.prototype.getLevelCount});
  $oj$$44$$.$CollectionHeaderSet$.prototype.getExtent = function $$oj$$44$$$$CollectionHeaderSet$$$getExtent$($index$$251$$, $level$$56$$) {
    $oj$$44$$.$Assert$.assert($index$$251$$ <= this.$m_end$ && $index$$251$$ >= this.$m_start$, "index out of bounds");
    $oj$$44$$.$Assert$.assert(null == $level$$56$$ || 0 == $level$$56$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getExtent", {getExtent:$oj$$44$$.$CollectionHeaderSet$.prototype.getExtent});
  $oj$$44$$.$CollectionHeaderSet$.prototype.getDepth = function $$oj$$44$$$$CollectionHeaderSet$$$getDepth$($index$$252$$, $level$$57$$) {
    $oj$$44$$.$Assert$.assert($index$$252$$ <= this.$m_end$ && $index$$252$$ >= this.$m_start$, "index out of bounds");
    $oj$$44$$.$Assert$.assert(null == $level$$57$$ || 0 == $level$$57$$, "level out of bounds");
    return 1;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getDepth", {getDepth:$oj$$44$$.$CollectionHeaderSet$.prototype.getDepth});
  $oj$$44$$.$CollectionHeaderSet$.prototype.getCount = function $$oj$$44$$$$CollectionHeaderSet$$$getCount$() {
    return Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCount", {getCount:$oj$$44$$.$CollectionHeaderSet$.prototype.getCount});
  $oj$$44$$.$CollectionHeaderSet$.prototype.getStart = function $$oj$$44$$$$CollectionHeaderSet$$$getStart$() {
    return this.$m_start$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getStart", {getStart:$oj$$44$$.$CollectionHeaderSet$.prototype.getStart});
  $oj$$44$$.$CollectionHeaderSet$.prototype.$getEnd$ = function $$oj$$44$$$$CollectionHeaderSet$$$$getEnd$$() {
    return this.$m_end$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getEnd", {$getEnd$:$oj$$44$$.$CollectionHeaderSet$.prototype.$getEnd$});
  $oj$$44$$.$CollectionHeaderSet$.prototype.$getHeaders$ = function $$oj$$44$$$$CollectionHeaderSet$$$$getHeaders$$() {
    return this.$m_headers$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getHeaders", {$getHeaders$:$oj$$44$$.$CollectionHeaderSet$.prototype.$getHeaders$});
  $oj$$44$$.$CollectionHeaderSet$.prototype.$getRowHeader$ = function $$oj$$44$$$$CollectionHeaderSet$$$$getRowHeader$$() {
    return this.$m_rowHeader$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getRowHeader", {$getRowHeader$:$oj$$44$$.$CollectionHeaderSet$.prototype.$getRowHeader$});
  $oj$$44$$.$CollectionCellSet$ = function $$oj$$44$$$$CollectionCellSet$$($startRow$$9$$, $endRow$$3$$, $startColumn$$2$$, $endColumn$$1$$, $columns$$25$$) {
    $oj$$44$$.$Assert$.$assertArrayOrNull$($columns$$25$$);
    this.$m_startRow$ = $startRow$$9$$;
    this.$m_endRow$ = $endRow$$3$$;
    this.$m_startColumn$ = $startColumn$$2$$;
    this.$m_endColumn$ = $endColumn$$1$$;
    this.$m_columns$ = $columns$$25$$;
  };
  $goog$exportPath_$$("CollectionCellSet", $oj$$44$$.$CollectionCellSet$, $oj$$44$$);
  $oj$$44$$.$CollectionCellSet$.prototype.$setModels$ = function $$oj$$44$$$$CollectionCellSet$$$$setModels$$($models$$16$$) {
    $oj$$44$$.$Assert$.$assertArray$($models$$16$$);
    null != $models$$16$$ && $models$$16$$.length === this.getCount("row") && (this.$m_models$ = $models$$16$$);
  };
  $oj$$44$$.$CollectionCellSet$.prototype.getData = function $$oj$$44$$$$CollectionCellSet$$$getData$($indexes$$23_returnObj$$2$$) {
    var $columnKey$$2$$, $model$$72$$;
    $model$$72$$ = this.$_getModel$($indexes$$23_returnObj$$2$$);
    if (null == $model$$72$$) {
      return null;
    }
    $columnKey$$2$$ = this.$m_columns$[$indexes$$23_returnObj$$2$$.column];
    $indexes$$23_returnObj$$2$$ = {};
    Object.defineProperty($indexes$$23_returnObj$$2$$, "data", {get:function() {
      return $model$$72$$.get($columnKey$$2$$);
    }, set:function($newValue$$22$$) {
      $model$$72$$.set($columnKey$$2$$, $newValue$$22$$, {silent:!0});
    }});
    return $indexes$$23_returnObj$$2$$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getData", {getData:$oj$$44$$.$CollectionCellSet$.prototype.getData});
  $oj$$44$$.$CollectionCellSet$.prototype.getMetadata = function $$oj$$44$$$$CollectionCellSet$$$getMetadata$($indexes$$24$$) {
    var $model$$73$$;
    $model$$73$$ = this.$_getModel$($indexes$$24$$);
    return null == $model$$73$$ ? null : {keys:{row:$oj$$44$$.$CollectionDataGridUtils$.$_getModelKey$($model$$73$$), column:this.$m_columns$[$indexes$$24$$.column]}};
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getMetadata", {getMetadata:$oj$$44$$.$CollectionCellSet$.prototype.getMetadata});
  $oj$$44$$.$CollectionCellSet$.prototype.$_getModel$ = function $$oj$$44$$$$CollectionCellSet$$$$_getModel$$($column$$28_indexes$$25$$) {
    var $row$$83$$;
    if (null == this.$m_models$) {
      return null;
    }
    $oj$$44$$.$Assert$.$assertObject$($column$$28_indexes$$25$$);
    $row$$83$$ = $column$$28_indexes$$25$$.row;
    $column$$28_indexes$$25$$ = $column$$28_indexes$$25$$.column;
    $oj$$44$$.$Assert$.assert($row$$83$$ >= this.$m_startRow$ && $row$$83$$ <= this.$m_endRow$ && $column$$28_indexes$$25$$ >= this.$m_startColumn$ && $column$$28_indexes$$25$$ <= this.$m_endColumn$);
    return this.$m_models$[$row$$83$$ - this.$m_startRow$];
  };
  $oj$$44$$.$CollectionCellSet$.prototype.getCount = function $$oj$$44$$$$CollectionCellSet$$$getCount$($axis$$71$$) {
    return "row" === $axis$$71$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$71$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCount", {getCount:$oj$$44$$.$CollectionCellSet$.prototype.getCount});
  $oj$$44$$.$CollectionCellSet$.prototype.$getStartRow$ = function $$oj$$44$$$$CollectionCellSet$$$$getStartRow$$() {
    return this.$m_startRow$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartRow", {$getStartRow$:$oj$$44$$.$CollectionCellSet$.prototype.$getStartRow$});
  $oj$$44$$.$CollectionCellSet$.prototype.$getEndRow$ = function $$oj$$44$$$$CollectionCellSet$$$$getEndRow$$() {
    return this.$m_endRow$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndRow", {$getEndRow$:$oj$$44$$.$CollectionCellSet$.prototype.$getEndRow$});
  $oj$$44$$.$CollectionCellSet$.prototype.$getStartColumn$ = function $$oj$$44$$$$CollectionCellSet$$$$getStartColumn$$() {
    return this.$m_startColumn$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartColumn", {$getStartColumn$:$oj$$44$$.$CollectionCellSet$.prototype.$getStartColumn$});
  $oj$$44$$.$CollectionCellSet$.prototype.$getEndColumn$ = function $$oj$$44$$$$CollectionCellSet$$$$getEndColumn$$() {
    return this.$m_endColumn$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndColumn", {$getEndColumn$:$oj$$44$$.$CollectionCellSet$.prototype.$getEndColumn$});
  $oj$$44$$.$CollectionCellSet$.prototype.$getColumns$ = function $$oj$$44$$$$CollectionCellSet$$$$getColumns$$() {
    return this.$m_columns$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getColumns", {$getColumns$:$oj$$44$$.$CollectionCellSet$.prototype.$getColumns$});
  $oj$$44$$.$CollectionDataGridUtils$ = function $$oj$$44$$$$CollectionDataGridUtils$$() {
  };
  $oj$$44$$.$CollectionDataGridUtils$.$_getModelKey$ = function $$oj$$44$$$$CollectionDataGridUtils$$$_getModelKey$$($model$$74$$) {
    var $key$$165$$;
    $key$$165$$ = $model$$74$$.$GetId$();
    null == $key$$165$$ && ($key$$165$$ = $model$$74$$.$GetCid$());
    return $key$$165$$;
  };
  $oj$$44$$.$CollectionDataGridDataSource$ = function $$oj$$44$$$$CollectionDataGridDataSource$$($collection$$32$$, $options$$347$$) {
    this.$collection$ = $collection$$32$$;
    null != $options$$347$$ && (this.$rowHeader$ = $options$$347$$.rowHeader, this.columns = $options$$347$$.columns);
    this.$_setSortInfo$();
    $oj$$44$$.$CollectionDataGridDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionDataGridDataSource", $oj$$44$$.$CollectionDataGridDataSource$, $oj$$44$$);
  $oj$$44$$.$Object$.$createSubclass$($oj$$44$$.$CollectionDataGridDataSource$, $oj$$44$$.$DataGridDataSource$, "oj.CollectionDataGridDataSource");
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.Init = function $$oj$$44$$$$CollectionDataGridDataSource$$$Init$() {
    $oj$$44$$.$CollectionDataGridDataSource$.$superclass$.Init.call(this);
    this.$pendingHeaderCallback$ = {};
    this.$_registerEventListeners$();
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.Init", {Init:$oj$$44$$.$CollectionDataGridDataSource$.prototype.Init});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_registerEventListeners$$() {
    this.$collection$.on("add", this.$_handleModelAdded$.bind(this));
    this.$collection$.on("remove", this.$_handleModelDeleted$.bind(this));
    this.$collection$.on("change", this.$_handleModelChanged$.bind(this));
    this.$collection$.on("refresh", this.$_handleCollectionRefresh$.bind(this));
    this.$collection$.on("reset", this.$_handleCollectionReset$.bind(this));
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_isDataAvailable$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_isDataAvailable$$() {
    return null != this.data;
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.getCount = function $$oj$$44$$$$CollectionDataGridDataSource$$$getCount$($axis$$72$$) {
    var $totalSize$$;
    void 0 == this.precision && (this.precision = {});
    if ("row" == $axis$$72$$) {
      $totalSize$$ = this.$_totalSize$();
      if (-1 === $totalSize$$ || 0 === $totalSize$$ && (!this.$_isDataAvailable$() || 0 < this.$_size$())) {
        return this.precision[$axis$$72$$] = "estimate", -1;
      }
      this.precision[$axis$$72$$] = "exact";
      return this.$_size$();
    }
    if ("column" == $axis$$72$$) {
      if (null != this.columns) {
        return this.precision[$axis$$72$$] = "exact", this.columns.length;
      }
      this.precision[$axis$$72$$] = "estimate";
      return-1;
    }
    return 0;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCount", {getCount:$oj$$44$$.$CollectionDataGridDataSource$.prototype.getCount});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.getCountPrecision = function $$oj$$44$$$$CollectionDataGridDataSource$$$getCountPrecision$($axis$$73$$) {
    null != this.precision && null != this.precision[$axis$$73$$] || this.getCount($axis$$73$$);
    return this.precision[$axis$$73$$];
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCountPrecision", {getCountPrecision:$oj$$44$$.$CollectionDataGridDataSource$.prototype.getCountPrecision});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.fetchHeaders = function $$oj$$44$$$$CollectionDataGridDataSource$$$fetchHeaders$($headerRange$$14$$, $callbacks$$20$$, $callbackObjects$$4$$) {
    var $axis$$74$$, $callback$$127$$;
    null != $callbacks$$20$$ && ($axis$$74$$ = $headerRange$$14$$.axis, $callback$$127$$ = {}, $callback$$127$$.$headerRange$ = $headerRange$$14$$, $callback$$127$$.callbacks = $callbacks$$20$$, $callback$$127$$.$callbackObjects$ = $callbackObjects$$4$$, this.$pendingHeaderCallback$[$axis$$74$$] = $callback$$127$$);
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchHeaders", {fetchHeaders:$oj$$44$$.$CollectionDataGridDataSource$.prototype.fetchHeaders});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_handleHeaderFetchSuccess$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_handleHeaderFetchSuccess$$($headerRange$$15$$, $callbacks$$21$$, $callbackObjects$$5$$, $actualRange_end$$19$$) {
    var $axis$$75$$, $start$$61$$, $count$$52$$, $headerSet$$14$$;
    $axis$$75$$ = $headerRange$$15$$.axis;
    $start$$61$$ = $headerRange$$15$$.start;
    $count$$52$$ = $headerRange$$15$$.count;
    if ("column" === $axis$$75$$) {
      null != this.columns ? ($actualRange_end$$19$$ = Math.min(this.columns.length, $start$$61$$ + $count$$52$$), $headerSet$$14$$ = new $oj$$44$$.$CollectionHeaderSet$($start$$61$$, $actualRange_end$$19$$, this.columns, void 0, this.$_sortInfo$)) : $headerSet$$14$$ = new $oj$$44$$.$ArrayHeaderSet$($start$$61$$, $start$$61$$, $axis$$75$$, null);
    } else {
      if ("row" === $axis$$75$$) {
        if (null != this.$rowHeader$) {
          null != $actualRange_end$$19$$ && ($count$$52$$ = $actualRange_end$$19$$.count);
          $actualRange_end$$19$$ = Math.min(this.$_size$(), $start$$61$$ + $count$$52$$);
          $headerSet$$14$$ = new $oj$$44$$.$CollectionHeaderSet$($start$$61$$, $actualRange_end$$19$$, this.columns, this.$rowHeader$);
          this.$_resolveModels$($start$$61$$, $actualRange_end$$19$$, $headerSet$$14$$, $headerRange$$15$$, $callbacks$$21$$, $callbackObjects$$5$$);
          return;
        }
        $headerSet$$14$$ = new $oj$$44$$.$ArrayHeaderSet$($start$$61$$, $start$$61$$, $axis$$75$$, null);
      }
    }
    null != $callbacks$$21$$ && $callbacks$$21$$.success && $callbacks$$21$$.success.call($callbackObjects$$5$$.success, $headerSet$$14$$, $headerRange$$15$$);
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_getRanges$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_getRanges$$($cellRanges$$1$$) {
    var $i$$409$$, $cellRange$$11$$, $rowStart$$13$$, $rowCount$$18$$, $colStart$$1$$, $colCount$$3$$;
    for ($i$$409$$ = 0;$i$$409$$ < $cellRanges$$1$$.length;$i$$409$$ += 1) {
      $cellRange$$11$$ = $cellRanges$$1$$[$i$$409$$], "row" === $cellRange$$11$$.axis ? ($rowStart$$13$$ = $cellRange$$11$$.start, $rowCount$$18$$ = $cellRange$$11$$.count) : "column" === $cellRange$$11$$.axis && ($colStart$$1$$ = $cellRange$$11$$.start, $colCount$$3$$ = $cellRange$$11$$.count);
    }
    return{rowStart:$rowStart$$13$$, rowCount:$rowCount$$18$$, colStart:$colStart$$1$$, colCount:$colCount$$3$$};
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_handleCellFetchSuccess$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_handleCellFetchSuccess$$($cellRanges$$2$$, $callbacks$$22$$, $callbackObjects$$6$$, $actualRange$$1_rowEnd$$2$$) {
    var $cellSet$$14_colEnd_ranges$$4$$, $rowStart$$14$$, $colStart$$2$$;
    $cellSet$$14_colEnd_ranges$$4$$ = this.$_getRanges$($cellRanges$$2$$);
    $rowStart$$14$$ = $cellSet$$14_colEnd_ranges$$4$$.rowStart;
    $actualRange$$1_rowEnd$$2$$ = null != $actualRange$$1_rowEnd$$2$$ ? Math.min(this.$_size$(), $rowStart$$14$$ + $actualRange$$1_rowEnd$$2$$.count) : Math.min(this.$_size$(), $rowStart$$14$$ + $cellSet$$14_colEnd_ranges$$4$$.rowCount);
    $colStart$$2$$ = $cellSet$$14_colEnd_ranges$$4$$.colStart;
    $cellSet$$14_colEnd_ranges$$4$$ = Math.min(null == this.columns ? 0 : this.columns.length, $colStart$$2$$ + $cellSet$$14_colEnd_ranges$$4$$.colCount);
    $cellSet$$14_colEnd_ranges$$4$$ = new $oj$$44$$.$CollectionCellSet$($rowStart$$14$$, $actualRange$$1_rowEnd$$2$$, $colStart$$2$$, $cellSet$$14_colEnd_ranges$$4$$, this.columns);
    this.$_resolveModels$($rowStart$$14$$, $actualRange$$1_rowEnd$$2$$, $cellSet$$14_colEnd_ranges$$4$$, $cellRanges$$2$$, $callbacks$$22$$, $callbackObjects$$6$$);
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_resolveModels$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_resolveModels$$($i$$410_rowStart$$15$$, $rowEnd$$3$$, $set$$4$$, $ranges$$5$$, $callbacks$$23$$, $callbackObjects$$7$$) {
    var $promises$$;
    for ($promises$$ = [];$i$$410_rowStart$$15$$ < $rowEnd$$3$$;$i$$410_rowStart$$15$$++) {
      $promises$$.push(this.$collection$.at($i$$410_rowStart$$15$$, {deferred:!0}));
    }
    Promise.all($promises$$).then(function($models$$17$$) {
      $set$$4$$.$setModels$($models$$17$$);
      $callbacks$$23$$.success.call($callbackObjects$$7$$.success, $set$$4$$, $ranges$$5$$);
    });
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.fetchCells = function $$oj$$44$$$$CollectionDataGridDataSource$$$fetchCells$($cellRanges$$3$$, $callbacks$$24$$, $callbackObjects$$8$$) {
    null != $callbacks$$24$$ && (this.$pendingCellCallback$ = {}, this.$pendingCellCallback$.$cellRanges$ = $cellRanges$$3$$, this.$pendingCellCallback$.callbacks = $callbacks$$24$$, this.$pendingCellCallback$.$callbackObjects$ = $callbackObjects$$8$$);
    this.$_fetchCells$($cellRanges$$3$$);
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchCells", {fetchCells:$oj$$44$$.$CollectionDataGridDataSource$.prototype.fetchCells});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderCallbacks$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_processPendingHeaderCallbacks$$($axis$$76$$) {
    var $pendingCallback$$, $headerRange$$16$$, $callbacks$$25$$, $callbackObjects$$9$$, $actualRange$$2$$;
    $pendingCallback$$ = this.$pendingHeaderCallback$[$axis$$76$$];
    null != $pendingCallback$$ && ($headerRange$$16$$ = $pendingCallback$$.$headerRange$, $callbacks$$25$$ = $pendingCallback$$.callbacks, $callbackObjects$$9$$ = $pendingCallback$$.$callbackObjects$, "row" === $axis$$76$$ && ($actualRange$$2$$ = $pendingCallback$$.$actualRange$), this.$_handleHeaderFetchSuccess$($headerRange$$16$$, $callbacks$$25$$, $callbackObjects$$9$$, $actualRange$$2$$), this.$pendingHeaderCallback$[$axis$$76$$] = null);
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellCallbacks$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_processPendingCellCallbacks$$() {
    this.$_handleCellFetchSuccess$(this.$pendingCellCallback$.$cellRanges$, this.$pendingCellCallback$.callbacks, this.$pendingCellCallback$.$callbackObjects$, this.$pendingCellCallback$.$actualRange$);
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_fetchCells$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_fetchCells$$($cellRanges$$5_ranges$$6$$) {
    var $rowStart$$16$$;
    $cellRanges$$5_ranges$$6$$ = this.$_getRanges$($cellRanges$$5_ranges$$6$$);
    $rowStart$$16$$ = $cellRanges$$5_ranges$$6$$.rowStart;
    this.$collection$.$setRangeLocal$($rowStart$$16$$, $cellRanges$$5_ranges$$6$$.rowCount).then(function($actual$$5$$) {
      this.data = !0;
      this.$_setActualCallbackRanges$($actual$$5$$.start, $actual$$5$$.count);
      void 0 === this.columns ? this.$collection$.at($rowStart$$16$$, {deferred:!0}).then(function($model$$75$$) {
        null != $model$$75$$ && this.$_setupColumns$($model$$75$$);
        this.$_fetchCellsComplete$();
      }.bind(this)) : this.$_fetchCellsComplete$();
    }.bind(this), function($e$$97$$) {
      this.$_fetchCellsError$($e$$97$$);
    }.bind(this));
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsError$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_fetchCellsError$$($error$$42$$) {
    $oj$$44$$.$Logger$.error($error$$42$$);
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderErrorCallbacks$("column", $error$$42$$), this.$_processPendingHeaderErrorCallbacks$("row", $error$$42$$));
    null != this.$pendingCellCallback$ && this.$_processPendingCellErrorCallbacks$($error$$42$$);
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderErrorCallbacks$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_processPendingHeaderErrorCallbacks$$($axis$$77$$, $error$$43$$) {
    var $headerRange$$17_pendingCallback$$1$$, $callbacks$$27$$, $callbackObjects$$11$$;
    $headerRange$$17_pendingCallback$$1$$ = this.$pendingHeaderCallback$[$axis$$77$$];
    null != $headerRange$$17_pendingCallback$$1$$ && ($callbacks$$27$$ = $headerRange$$17_pendingCallback$$1$$.callbacks, $callbackObjects$$11$$ = $headerRange$$17_pendingCallback$$1$$.$callbackObjects$, $headerRange$$17_pendingCallback$$1$$ = $headerRange$$17_pendingCallback$$1$$.$headerRange$, $callbacks$$27$$.error && $callbacks$$27$$.error.call($callbackObjects$$11$$.error, $error$$43$$, $headerRange$$17_pendingCallback$$1$$), this.$pendingHeaderCallback$[$axis$$77$$] = null);
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellErrorCallbacks$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_processPendingCellErrorCallbacks$$($error$$44$$) {
    var $callbacks$$28$$, $callbackObjects$$12$$, $cellRanges$$6$$;
    $callbacks$$28$$ = this.$pendingCellCallback$.callbacks;
    $callbackObjects$$12$$ = this.$pendingCellCallback$.$callbackObjects$;
    $cellRanges$$6$$ = this.$pendingCellCallback$.$cellRanges$;
    $callbacks$$28$$.error && $callbacks$$28$$.error.call($callbackObjects$$12$$.error, $error$$44$$, $cellRanges$$6$$);
    this.$pendingCellCallback$ = null;
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsComplete$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_fetchCellsComplete$$() {
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderCallbacks$("column"), this.$_processPendingHeaderCallbacks$("row"));
    null != this.$pendingCellCallback$ && this.$_processPendingCellCallbacks$();
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_setActualCallbackRanges$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_setActualCallbackRanges$$($start$$62$$, $count$$53$$) {
    var $actualRange$$4$$ = {start:$start$$62$$, count:$count$$53$$};
    null != this.$pendingHeaderCallback$.row && (this.$pendingHeaderCallback$.row.$actualRange$ = $actualRange$$4$$);
    null != this.$pendingCellCallback$ && (this.$pendingCellCallback$.$actualRange$ = $actualRange$$4$$);
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_setupColumns$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_setupColumns$$($model$$76$$) {
    this.columns = $model$$76$$.keys();
    -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1);
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.keys = function $$oj$$44$$$$CollectionDataGridDataSource$$$keys$($indexes$$26$$) {
    var $rowIndex$$16$$, $columnIndex$$5$$, $rowKey$$46$$, $columnKey$$3$$, $self$$184$$;
    $rowIndex$$16$$ = $indexes$$26$$.row;
    $columnIndex$$5$$ = $indexes$$26$$.column;
    $self$$184$$ = this;
    return new Promise(function($resolve$$59$$) {
      $self$$184$$.$collection$.at($rowIndex$$16$$, {deferred:!0}).then(function($rowModel$$) {
        null == $rowModel$$ ? $resolve$$59$$({row:null, column:null}) : ($rowKey$$46$$ = $oj$$44$$.$CollectionDataGridUtils$.$_getModelKey$($rowModel$$), null == $self$$184$$.columns && $self$$184$$.$_setupColumns$($rowModel$$), $columnKey$$3$$ = $self$$184$$.columns[$columnIndex$$5$$], $resolve$$59$$({row:$rowKey$$46$$, column:$columnKey$$3$$}));
      }.bind($self$$184$$));
    });
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.keys", {keys:$oj$$44$$.$CollectionDataGridDataSource$.prototype.keys});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.indexes = function $$oj$$44$$$$CollectionDataGridDataSource$$$indexes$($keys$$52$$) {
    var $rowKey$$47$$, $columnKey$$4$$, $columnIndex$$6$$, $self$$185$$;
    $rowKey$$47$$ = $keys$$52$$.row;
    $columnKey$$4$$ = $keys$$52$$.column;
    $self$$185$$ = this;
    return new Promise(function($resolve$$60$$) {
      $self$$185$$.$collection$.indexOf($rowKey$$47$$, {deferred:!0}).then(function($rowIndex$$17$$) {
        -1 === $rowIndex$$17$$ ? $resolve$$60$$({row:-1, column:-1}) : null == $self$$185$$.columns ? $self$$185$$.$collection$.at($rowIndex$$17$$, {deferred:!0}).then(function($model$$77$$) {
          $self$$185$$.$_setupColumns$($model$$77$$);
          $columnIndex$$6$$ = $self$$185$$.columns.indexOf($columnKey$$4$$);
          -1 === $columnIndex$$6$$ && ($rowIndex$$17$$ = -1);
          $resolve$$60$$({row:$rowIndex$$17$$, column:$columnIndex$$6$$});
        }.bind($self$$185$$)) : ($columnIndex$$6$$ = $self$$185$$.columns.indexOf($columnKey$$4$$), -1 === $columnIndex$$6$$ && ($rowIndex$$17$$ = -1), $resolve$$60$$({row:$rowIndex$$17$$, column:$columnIndex$$6$$}));
      }.bind($self$$185$$));
    });
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.indexes", {indexes:$oj$$44$$.$CollectionDataGridDataSource$.prototype.indexes});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.getCapability = function $$oj$$44$$$$CollectionDataGridDataSource$$$getCapability$($feature$$7$$) {
    return "sort" === $feature$$7$$ ? "column" : "move" === $feature$$7$$ ? "row" : null;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCapability", {getCapability:$oj$$44$$.$CollectionDataGridDataSource$.prototype.getCapability});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.sort = function $$oj$$44$$$$CollectionDataGridDataSource$$$sort$($axis$$78_criteria$$3$$, $callbacks$$29$$, $callbackObjects$$13$$) {
    var $comparator$$12$$, $direction$$19$$, $key$$166$$;
    null == $callbackObjects$$13$$ && ($callbackObjects$$13$$ = {});
    null == $axis$$78_criteria$$3$$ ? this.$_resetSortOrder$($callbacks$$29$$, $callbackObjects$$13$$) : ($direction$$19$$ = $axis$$78_criteria$$3$$.direction, $key$$166$$ = $axis$$78_criteria$$3$$.key, $axis$$78_criteria$$3$$ = $axis$$78_criteria$$3$$.axis, "column" === $axis$$78_criteria$$3$$ ? (this.$collection$.$IsVirtual$() ? (this.$collection$.comparator = $key$$166$$, this.$collection$.sortDirection = "ascending" === $direction$$19$$ ? 1 : -1) : ("ascending" === $direction$$19$$ && ($comparator$$12$$ = 
    function $$comparator$$12$$$($a$$114$$, $b$$66$$) {
      var $as$$, $bs$$;
      $a$$114$$ = $a$$114$$.get($key$$166$$);
      $b$$66$$ = $b$$66$$.get($key$$166$$);
      $as$$ = isNaN($a$$114$$);
      $bs$$ = isNaN($b$$66$$);
      $a$$114$$ instanceof Date && ($a$$114$$ = $a$$114$$.toISOString(), $as$$ = !0);
      $b$$66$$ instanceof Date && ($b$$66$$ = $b$$66$$.toISOString(), $bs$$ = !0);
      return $as$$ && $bs$$ ? $a$$114$$ < $b$$66$$ ? -1 : $a$$114$$ === $b$$66$$ ? 0 : 1 : $as$$ ? 1 : $bs$$ ? -1 : $a$$114$$ - $b$$66$$;
    }), "descending" === $direction$$19$$ && ($comparator$$12$$ = function $$comparator$$12$$$($a$$115$$, $b$$67$$) {
      var $as$$1$$, $bs$$1$$;
      $a$$115$$ = $a$$115$$.get($key$$166$$);
      $b$$67$$ = $b$$67$$.get($key$$166$$);
      $as$$1$$ = isNaN($a$$115$$);
      $bs$$1$$ = isNaN($b$$67$$);
      $a$$115$$ instanceof Date && ($a$$115$$ = $a$$115$$.toISOString());
      $b$$67$$ instanceof Date && ($b$$67$$ = $b$$67$$.toISOString());
      return $as$$1$$ && $bs$$1$$ ? $a$$115$$ > $b$$67$$ ? -1 : $a$$115$$ === $b$$67$$ ? 0 : 1 : $as$$1$$ ? -1 : $bs$$1$$ ? 1 : $b$$67$$ - $a$$115$$;
    }), this.$collection$.comparator = $comparator$$12$$), this.$collection$.sort(), this.$_setSortInfo$($key$$166$$), null != $callbacks$$29$$ && null != $callbacks$$29$$.success && $callbacks$$29$$.success.call($callbackObjects$$13$$.success)) : null != $callbacks$$29$$ && null != $callbacks$$29$$.error && $callbacks$$29$$.error.call($callbackObjects$$13$$.error, "Axis value not supported"));
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.sort", {sort:$oj$$44$$.$CollectionDataGridDataSource$.prototype.sort});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_resetSortOrder$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_resetSortOrder$$($callbacks$$30$$, $callbackObjects$$14$$) {
    this.$collection$.comparator = null;
    this.$collection$.reset();
    null != $callbacks$$30$$ && null != $callbacks$$30$$.success && $callbacks$$30$$.success.call($callbackObjects$$14$$.success);
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_setSortInfo$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_setSortInfo$$($key$$167$$) {
    var $comparator$$13$$, $direction$$20$$;
    $comparator$$13$$ = this.$collection$.comparator;
    $direction$$20$$ = -1 === this.$collection$.sortDirection ? "descending" : "ascending";
    null == $key$$167$$ && "function" === typeof $comparator$$13$$ ? this.$_sortInfo$ = {} : (this.$_sortInfo$ = {}, this.$_sortInfo$.axis = "column", this.$_sortInfo$.direction = $direction$$20$$, this.$_sortInfo$.key = null == $key$$167$$ ? $comparator$$13$$ : null);
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.move = function $$oj$$44$$$$CollectionDataGridDataSource$$$move$($moveKey$$, $atKey$$, $position$$28$$, $callbacks$$31$$, $callbackObjects$$15$$) {
    var $indexPromise$$;
    this.$collection$.get($moveKey$$, {deferred:!0}).then(function($moveModel$$) {
      null == $atKey$$ ? (this.$collection$.remove($moveModel$$), this.$collection$.add($moveModel$$), null != $callbacks$$31$$ && null != $callbacks$$31$$.success && $callbacks$$31$$.success.call($callbackObjects$$15$$.success)) : ($moveKey$$ === $atKey$$ ? ($indexPromise$$ = this.$collection$.indexOf($atKey$$, {deferred:!0}), this.$collection$.remove($moveModel$$)) : (this.$collection$.remove($moveModel$$), $indexPromise$$ = this.$collection$.indexOf($atKey$$, {deferred:!0})), $indexPromise$$.then(function($newIndex$$3$$) {
        this.$collection$.add($moveModel$$, {at:$newIndex$$3$$, $force$:!0});
        null != $callbacks$$31$$ && null != $callbacks$$31$$.success && $callbacks$$31$$.success.call($callbackObjects$$15$$.success);
      }.bind(this)));
    }.bind(this));
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.move", {move:$oj$$44$$.$CollectionDataGridDataSource$.prototype.move});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.moveOK = function $$oj$$44$$$$CollectionDataGridDataSource$$$moveOK$() {
    return "valid";
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.moveOK", {moveOK:$oj$$44$$.$CollectionDataGridDataSource$.prototype.moveOK});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_getModelEvent$$($operation$$7$$, $rowKey$$48$$, $columnKey$$5$$, $rowIndex$$18$$, $columnIndex$$7$$) {
    var $event$$613$$ = {source:this};
    $event$$613$$.operation = $operation$$7$$;
    $event$$613$$.keys = {row:$rowKey$$48$$, column:$columnKey$$5$$};
    $event$$613$$.indexes = {row:$rowIndex$$18$$, column:$columnIndex$$7$$};
    return $event$$613$$;
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_handleModelAdded$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_handleModelAdded$$($model$$78$$) {
    this.handleEvent("change", this.$_getModelEvent$("insert", $oj$$44$$.$CollectionDataGridUtils$.$_getModelKey$($model$$78$$), null, $model$$78$$.index, -1));
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_handleModelDeleted$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_handleModelDeleted$$($model$$79$$, $collection$$34$$, $args$$22$$) {
    this.handleEvent("change", this.$_getModelEvent$("delete", $oj$$44$$.$CollectionDataGridUtils$.$_getModelKey$($model$$79$$), null, $args$$22$$.index, -1));
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_handleModelChanged$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_handleModelChanged$$($model$$80$$) {
    this.handleEvent("change", this.$_getModelEvent$("update", $oj$$44$$.$CollectionDataGridUtils$.$_getModelKey$($model$$80$$), null, $model$$80$$.index, -1));
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionRefresh$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_handleCollectionRefresh$$() {
    this.data = null;
    this.handleEvent("change", this.$_getModelEvent$("refresh", null, null));
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionReset$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_handleCollectionReset$$() {
    this.data = null;
    this.handleEvent("change", this.$_getModelEvent$("reset", null, null));
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_size$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_size$$() {
    return this.$collection$.size();
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$_totalSize$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$_totalSize$$() {
    return void 0 === this.$collection$.totalResults ? -1 : this.$collection$.totalResults;
  };
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$getCollection$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$getCollection$$() {
    return this.$collection$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCollection", {$getCollection$:$oj$$44$$.$CollectionDataGridDataSource$.prototype.$getCollection$});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$getColumns$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$44$$.$CollectionDataGridDataSource$.prototype.$getColumns$});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$ = function $$oj$$44$$$$CollectionDataGridDataSource$$$$getRowHeader$$() {
    return this.$rowHeader$;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getRowHeader", {$getRowHeader$:$oj$$44$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$});
  $oj$$44$$.$CollectionDataGridDataSource$.prototype.getData = function $$oj$$44$$$$CollectionDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$44$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getData", {getData:$oj$$44$$.$CollectionDataGridDataSource$.prototype.getData});
});
