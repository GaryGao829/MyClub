/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojpagingtabledatasource", "ojs/ojarraydatagriddatasource"], function($oj$$75$$) {
  $oj$$75$$.$PagingHeaderSet$ = function $$oj$$75$$$$PagingHeaderSet$$($headerSet$$19$$, $startIndex$$41$$) {
    this.$m_headerSet$ = $headerSet$$19$$;
    this.$m_startIndex$ = $startIndex$$41$$;
  };
  $goog$exportPath_$$("PagingHeaderSet", $oj$$75$$.$PagingHeaderSet$, $oj$$75$$);
  $oj$$75$$.$PagingHeaderSet$.prototype.getData = function $$oj$$75$$$$PagingHeaderSet$$$getData$($index$$335$$, $level$$67$$) {
    return this.$m_headerSet$.getData($index$$335$$ + this.$m_startIndex$, $level$$67$$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getData", {getData:$oj$$75$$.$PagingHeaderSet$.prototype.getData});
  $oj$$75$$.$PagingHeaderSet$.prototype.getMetadata = function $$oj$$75$$$$PagingHeaderSet$$$getMetadata$($index$$336$$, $level$$68$$) {
    return this.$m_headerSet$.getMetadata($index$$336$$ + this.$m_startIndex$, $level$$68$$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getMetadata", {getMetadata:$oj$$75$$.$PagingHeaderSet$.prototype.getMetadata});
  $oj$$75$$.$PagingHeaderSet$.prototype.getCount = function $$oj$$75$$$$PagingHeaderSet$$$getCount$() {
    return this.$m_headerSet$.getCount();
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getCount", {getCount:$oj$$75$$.$PagingHeaderSet$.prototype.getCount});
  $oj$$75$$.$PagingHeaderSet$.prototype.getLevelCount = function $$oj$$75$$$$PagingHeaderSet$$$getLevelCount$() {
    return this.$m_headerSet$.getLevelCount();
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getLevelCount", {getLevelCount:$oj$$75$$.$PagingHeaderSet$.prototype.getLevelCount});
  $oj$$75$$.$PagingHeaderSet$.prototype.getExtent = function $$oj$$75$$$$PagingHeaderSet$$$getExtent$($index$$337$$, $level$$69$$) {
    return this.$m_headerSet$.getExtent($index$$337$$ + this.$m_startIndex$, $level$$69$$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getExtent", {getExtent:$oj$$75$$.$PagingHeaderSet$.prototype.getExtent});
  $oj$$75$$.$PagingHeaderSet$.prototype.getDepth = function $$oj$$75$$$$PagingHeaderSet$$$getDepth$($index$$338$$, $level$$70$$) {
    return this.$m_headerSet$.getDepth($index$$338$$ + this.$m_startIndex$, $level$$70$$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getDepth", {getDepth:$oj$$75$$.$PagingHeaderSet$.prototype.getDepth});
  $oj$$75$$.$PagingHeaderSet$.prototype.$getHeaderSet$ = function $$oj$$75$$$$PagingHeaderSet$$$$getHeaderSet$$() {
    return this.$m_headerSet$;
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getHeaderSet", {$getHeaderSet$:$oj$$75$$.$PagingHeaderSet$.prototype.$getHeaderSet$});
  $oj$$75$$.$PagingHeaderSet$.prototype.$getStartIndex$ = function $$oj$$75$$$$PagingHeaderSet$$$$getStartIndex$$() {
    return this.$m_startIndex$;
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getStartIndex", {$getStartIndex$:$oj$$75$$.$PagingHeaderSet$.prototype.$getStartIndex$});
  $oj$$75$$.$PagingDataGridDataSource$ = function $$oj$$75$$$$PagingDataGridDataSource$$($dataSource$$11$$) {
    if (!($dataSource$$11$$ instanceof $oj$$75$$.$DataGridDataSource$)) {
      throw new $oj$$75$$.$Message$("Not a datagridatasource", "Not a datagridatasource", $oj$$75$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.$dataSource$ = $dataSource$$11$$;
    this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("PagingDataGridDataSource", $oj$$75$$.$PagingDataGridDataSource$, $oj$$75$$);
  $oj$$75$$.$Object$.$createSubclass$($oj$$75$$.$PagingDataGridDataSource$, $oj$$75$$.$DataGridDataSource$, "oj.PagingDataGridDataSource");
  $oj$$75$$.$PagingDataGridDataSource$.prototype.Init = function $$oj$$75$$$$PagingDataGridDataSource$$$Init$() {
    $oj$$75$$.$PagingDataGridDataSource$.$superclass$.Init.call(this);
    this.$_registerEventListeners$();
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.Init", {Init:$oj$$75$$.$PagingDataGridDataSource$.prototype.Init});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$75$$$$PagingDataGridDataSource$$$$_registerEventListeners$$() {
    this.$dataSource$.on("change", this.$_handleChange$.bind(this));
  };
  $oj$$75$$.$PagingDataGridDataSource$.prototype.getPage = function $$oj$$75$$$$PagingDataGridDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getPage", {getPage:$oj$$75$$.$PagingDataGridDataSource$.prototype.getPage});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.setPage = function $$oj$$75$$$$PagingDataGridDataSource$$$setPage$($value$$330$$, $options$$404$$) {
    $options$$404$$ = $options$$404$$ || {};
    $value$$330$$ = parseInt($value$$330$$, 10);
    try {
      $oj$$75$$.$PagingDataGridDataSource$.$superclass$.handleEvent.call(this, $oj$$75$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$330$$, previousPage:this.$_page$});
    } catch ($err$$29$$) {
      return Promise.reject(null);
    }
    this.$_pageSize$ = null != $options$$404$$.pageSize ? $options$$404$$.pageSize : this.$_pageSize$;
    $options$$404$$.startIndex = $value$$330$$ * this.$_pageSize$;
    var $previousPage$$3$$ = this.$_page$;
    this.$_page$ = $value$$330$$;
    this.$_startIndex$ = $options$$404$$.startIndex;
    var $self$$237$$ = this;
    return new Promise(function($resolve$$78$$, $reject$$73$$) {
      $self$$237$$.$_fetchInternal$($options$$404$$).then(function() {
        $resolve$$78$$(null);
      }, function() {
        $self$$237$$.$_page$ = $previousPage$$3$$;
        $self$$237$$.$_startIndex$ = $self$$237$$.$_page$ * $self$$237$$.$_pageSize$;
        $reject$$73$$(null);
      });
    });
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.setPage", {setPage:$oj$$75$$.$PagingDataGridDataSource$.prototype.setPage});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.$_fetchInternal$ = function $$oj$$75$$$$PagingDataGridDataSource$$$$_fetchInternal$$($options$$405$$) {
    this.$_initialized$ = !0;
    this.$_startIndex$ = $options$$405$$.startIndex;
    var $self$$238$$ = this;
    return new Promise(function($resolve$$79$$) {
      $self$$238$$.handleEvent("change", {operation:"sync", pageSize:$self$$238$$.$_pageSize$});
      $resolve$$79$$(void 0);
    });
  };
  $oj$$75$$.$PagingDataGridDataSource$.prototype.fetch = function $$oj$$75$$$$PagingDataGridDataSource$$$fetch$($options$$406$$) {
    this.$_pageSize$ = $options$$406$$.pageSize + $options$$406$$.startIndex;
    $options$$406$$.startIndex = 0;
    return this.$_fetchInternal$($options$$406$$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetch", {fetch:$oj$$75$$.$PagingDataGridDataSource$.prototype.fetch});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.getStartItemIndex = function $$oj$$75$$$$PagingDataGridDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$75$$.$PagingDataGridDataSource$.prototype.getStartItemIndex});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.getEndItemIndex = function $$oj$$75$$$$PagingDataGridDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$75$$.$PagingDataGridDataSource$.prototype.getEndItemIndex});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.getPageCount = function $$oj$$75$$$$PagingDataGridDataSource$$$getPageCount$() {
    var $totalSize$$5$$ = this.totalSize();
    return-1 == $totalSize$$5$$ ? -1 : Math.ceil($totalSize$$5$$ / this.$_pageSize$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getPageCount", {getPageCount:$oj$$75$$.$PagingDataGridDataSource$.prototype.getPageCount});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.$_handleChange$ = function $$oj$$75$$$$PagingDataGridDataSource$$$$_handleChange$$($options$$407$$) {
    switch($options$$407$$.operation) {
      case "refresh":
        this.$_startIndex$ = 0;
        this.handleEvent("change", {operation:"sync", pageSize:this.$_pageSize$});
        this.handleEvent($oj$$75$$.$PagingTableDataSource$.$EventType$.REFRESH, null);
        break;
      case "reset":
        this.handleEvent($oj$$75$$.$PagingTableDataSource$.$EventType$.RESET, null);
        break;
      case "insert":
        this.handleEvent($oj$$75$$.$PagingTableDataSource$.$EventType$.ADD, {index:$options$$407$$.indexes.row});
        break;
      case "delete":
        this.handleEvent($oj$$75$$.$PagingTableDataSource$.$EventType$.REMOVE, null);
        break;
      case "update":
        $options$$407$$.indexes.row = 0 <= $options$$407$$.indexes.row - this.$_startIndex$ ? $options$$407$$.indexes.row - this.$_startIndex$ : -1;
        this.handleEvent("change", $options$$407$$);
        break;
      default:
        this.handleEvent("change", $options$$407$$), this.handleEvent($oj$$75$$.$PagingTableDataSource$.$EventType$.SYNC, null);
    }
  };
  $oj$$75$$.$PagingDataGridDataSource$.prototype.getCount = function $$oj$$75$$$$PagingDataGridDataSource$$$getCount$($axis$$95$$) {
    var $count$$61$$ = this.$dataSource$.getCount($axis$$95$$);
    return "row" === $axis$$95$$ && 0 <= $count$$61$$ ? this.$_startIndex$ + this.$_pageSize$ < $count$$61$$ ? this.$_pageSize$ : $count$$61$$ - this.$_startIndex$ : $count$$61$$;
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCount", {getCount:$oj$$75$$.$PagingDataGridDataSource$.prototype.getCount});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.getCountPrecision = function $$oj$$75$$$$PagingDataGridDataSource$$$getCountPrecision$($axis$$96$$) {
    return this.$dataSource$.getCountPrecision($axis$$96$$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCountPrecision", {getCountPrecision:$oj$$75$$.$PagingDataGridDataSource$.prototype.getCountPrecision});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.fetchHeaders = function $$oj$$75$$$$PagingDataGridDataSource$$$fetchHeaders$($headerRange$$23$$, $callbacks$$54$$, $callbackObjects$$28$$) {
    var $headerSet$$20$$;
    null == this.$_initialized$ ? ($headerSet$$20$$ = new $oj$$75$$.$ArrayHeaderSet$(0, 0, $headerRange$$23$$.axis, null), null != $callbacks$$54$$ && $callbacks$$54$$.success && $callbacks$$54$$.success.call($callbackObjects$$28$$.success, $headerSet$$20$$, $headerRange$$23$$)) : "row" === $headerRange$$23$$.axis ? ($headerRange$$23$$.start += this.$_startIndex$, $headerRange$$23$$.start + $headerRange$$23$$.count > this.$_startIndex$ + this.$_pageSize$ && ($headerRange$$23$$.count = this.$_pageSize$ - 
    $headerRange$$23$$.start), this.$_pendingRowHeaderCallback$ = {callbacks:$callbacks$$54$$, callbackObjects:$callbackObjects$$28$$}, this.$dataSource$.fetchHeaders($headerRange$$23$$, {success:this.$_handleRowHeaderFetchSuccess$.bind(this), error:this.$_handleRowHeaderFetchError$.bind(this)}, $callbackObjects$$28$$)) : this.$dataSource$.fetchHeaders($headerRange$$23$$, $callbacks$$54$$, $callbackObjects$$28$$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchHeaders", {fetchHeaders:$oj$$75$$.$PagingDataGridDataSource$.prototype.fetchHeaders});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.$_handleRowHeaderFetchSuccess$ = function $$oj$$75$$$$PagingDataGridDataSource$$$$_handleRowHeaderFetchSuccess$$($headerSet$$21$$, $headerRange$$24$$) {
    var $pagingHeaderSet$$, $callback$$143$$, $callbackObject$$;
    $headerRange$$24$$.start -= this.$_startIndex$;
    $headerRange$$24$$.count += 1;
    $pagingHeaderSet$$ = new $oj$$75$$.$PagingHeaderSet$($headerSet$$21$$, this.$_startIndex$);
    $callback$$143$$ = this.$_pendingRowHeaderCallback$.callbacks.success;
    $callbackObject$$ = this.$_pendingRowHeaderCallback$.callbackObjects.success;
    this.$_pendingRowHeaderCallback$ = null;
    $callback$$143$$.call($callbackObject$$, $pagingHeaderSet$$, $headerRange$$24$$);
  };
  $oj$$75$$.$PagingDataGridDataSource$.prototype.$_handleRowHeaderFetchError$ = function $$oj$$75$$$$PagingDataGridDataSource$$$$_handleRowHeaderFetchError$$($error$$52$$) {
    var $callback$$144$$, $callbackObject$$1$$;
    $callback$$144$$ = this.$_pendingRowHeaderCallback$.callbacks.error;
    $callbackObject$$1$$ = this.$_pendingRowHeaderCallback$.callbackObjects.error;
    this.$_pendingRowHeaderCallback$ = null;
    $callback$$144$$.call($callbackObject$$1$$, $error$$52$$);
  };
  $oj$$75$$.$PagingDataGridDataSource$.prototype.fetchCells = function $$oj$$75$$$$PagingDataGridDataSource$$$fetchCells$($cellRanges$$10$$, $callbacks$$55$$, $callbackObjects$$29$$) {
    var $cellSet$$18_i$$525$$;
    if (null == this.$_initialized$) {
      $cellSet$$18_i$$525$$ = new $oj$$75$$.$ArrayCellSet$(0, 0, 0, 0, null), null != $callbacks$$55$$ && $callbacks$$55$$.success && $callbacks$$55$$.success.call($callbackObjects$$29$$.success, $cellSet$$18_i$$525$$, $cellRanges$$10$$);
    } else {
      for ($cellSet$$18_i$$525$$ = 0;$cellSet$$18_i$$525$$ < $cellRanges$$10$$.length;$cellSet$$18_i$$525$$ += 1) {
        "row" === $cellRanges$$10$$[$cellSet$$18_i$$525$$].axis && ($cellRanges$$10$$[$cellSet$$18_i$$525$$].start += this.$_startIndex$, $cellRanges$$10$$[$cellSet$$18_i$$525$$].start + $cellRanges$$10$$[$cellSet$$18_i$$525$$].count > this.$_startIndex$ + this.$_pageSize$ && ($cellRanges$$10$$[$cellSet$$18_i$$525$$].count = this.$_pageSize$ - $cellRanges$$10$$[$cellSet$$18_i$$525$$].start));
      }
      this.$_pendingCellCallback$ = {callbacks:$callbacks$$55$$, callbackObjects:$callbackObjects$$29$$};
      this.$dataSource$.fetchCells($cellRanges$$10$$, {success:this.$_handleCellsFetchSuccess$.bind(this), error:this.$_handleCellsFetchError$.bind(this)}, $callbackObjects$$29$$);
    }
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchCells", {fetchCells:$oj$$75$$.$PagingDataGridDataSource$.prototype.fetchCells});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.$_handleCellsFetchSuccess$ = function $$oj$$75$$$$PagingDataGridDataSource$$$$_handleCellsFetchSuccess$$($cellSet$$19$$, $cellRanges$$11$$) {
    var $i$$526_pagedCellSet$$, $callback$$145$$, $callbackObject$$2$$;
    for ($i$$526_pagedCellSet$$ = 0;$i$$526_pagedCellSet$$ < $cellRanges$$11$$.length;$i$$526_pagedCellSet$$ += 1) {
      "row" === $cellRanges$$11$$[$i$$526_pagedCellSet$$].axis && ($cellRanges$$11$$[$i$$526_pagedCellSet$$].start -= this.$_startIndex$, $cellRanges$$11$$[$i$$526_pagedCellSet$$].count += 1);
    }
    $i$$526_pagedCellSet$$ = new $oj$$75$$.$PagingCellSet$($cellSet$$19$$, this.$_startIndex$);
    $callback$$145$$ = this.$_pendingCellCallback$.callbacks.success;
    $callbackObject$$2$$ = this.$_pendingCellCallback$.callbackObjects.success;
    this.$_pendingCellCallback$ = null;
    this.$_endIndex$ = this.$_startIndex$ + $cellSet$$19$$.getCount("row") - 1;
    this.handleEvent("sync", {data:Array($cellSet$$19$$.getCount("row")), startIndex:this.$_startIndex$});
    $callback$$145$$.call($callbackObject$$2$$, $i$$526_pagedCellSet$$, $cellRanges$$11$$);
  };
  $oj$$75$$.$PagingDataGridDataSource$.prototype.$_handleCellsFetchError$ = function $$oj$$75$$$$PagingDataGridDataSource$$$$_handleCellsFetchError$$($error$$53$$) {
    var $callback$$146$$, $callbackObject$$3$$;
    $callback$$146$$ = this.$_pendingCellCallback$.callbacks.error;
    $callbackObject$$3$$ = this.$_pendingCellCallback$.callbackObjects.error;
    this.$_pendingCellCallback$ = null;
    $callback$$146$$.call($callbackObject$$3$$, $error$$53$$);
  };
  $oj$$75$$.$PagingDataGridDataSource$.prototype.keys = function $$oj$$75$$$$PagingDataGridDataSource$$$keys$($indexes$$37$$) {
    return this.$dataSource$.keys({column:$indexes$$37$$.column, row:$indexes$$37$$.row + this.$_startIndex$});
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.keys", {keys:$oj$$75$$.$PagingDataGridDataSource$.prototype.keys});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.indexes = function $$oj$$75$$$$PagingDataGridDataSource$$$indexes$($indexes$$38_keys$$61$$) {
    $indexes$$38_keys$$61$$ = this.$dataSource$.indexes($indexes$$38_keys$$61$$);
    -1 != $indexes$$38_keys$$61$$.row && ($indexes$$38_keys$$61$$.row -= this.$_startIndex$);
    return $indexes$$38_keys$$61$$;
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.indexes", {indexes:$oj$$75$$.$PagingDataGridDataSource$.prototype.indexes});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.getCapability = function $$oj$$75$$$$PagingDataGridDataSource$$$getCapability$($feature$$16$$) {
    return this.$dataSource$.getCapability($feature$$16$$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCapability", {getCapability:$oj$$75$$.$PagingDataGridDataSource$.prototype.getCapability});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.size = function $$oj$$75$$$$PagingDataGridDataSource$$$size$() {
    var $count$$62$$;
    if (null == this.$_initialized$) {
      return-1;
    }
    $count$$62$$ = this.$dataSource$.getCount("row");
    return this.$dataSource$.getCount("row") > this.$_pageSize$ ? this.$_pageSize$ : $count$$62$$;
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.size", {size:$oj$$75$$.$PagingDataGridDataSource$.prototype.size});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.sort = function $$oj$$75$$$$PagingDataGridDataSource$$$sort$($criteria$$9$$, $callbacks$$56$$, $callbackObjects$$30$$) {
    this.$dataSource$.sort($criteria$$9$$, $callbacks$$56$$, $callbackObjects$$30$$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.sort", {sort:$oj$$75$$.$PagingDataGridDataSource$.prototype.sort});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.totalSize = function $$oj$$75$$$$PagingDataGridDataSource$$$totalSize$() {
    return null == this.$_initialized$ ? -1 : this.$dataSource$.getCount("row");
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.totalSize", {totalSize:$oj$$75$$.$PagingDataGridDataSource$.prototype.totalSize});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.totalSizeConfidence = function $$oj$$75$$$$PagingDataGridDataSource$$$totalSizeConfidence$() {
    return "actual";
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$75$$.$PagingDataGridDataSource$.prototype.totalSizeConfidence});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.moveOK = function $$oj$$75$$$$PagingDataGridDataSource$$$moveOK$($rowToMove$$9$$, $referenceRow$$15$$, $position$$48$$) {
    return this.$dataSource$.moveOK($rowToMove$$9$$, $referenceRow$$15$$, $position$$48$$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.moveOK", {moveOK:$oj$$75$$.$PagingDataGridDataSource$.prototype.moveOK});
  $oj$$75$$.$PagingDataGridDataSource$.prototype.move = function $$oj$$75$$$$PagingDataGridDataSource$$$move$($moveKey$$2$$, $atKey$$2$$, $position$$49$$, $callbacks$$57$$, $callbackObjects$$31$$) {
    this.$dataSource$.move($moveKey$$2$$, $atKey$$2$$, $position$$49$$, $callbacks$$57$$, $callbackObjects$$31$$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.move", {move:$oj$$75$$.$PagingDataGridDataSource$.prototype.move});
  $oj$$75$$.$PagingCellSet$ = function $$oj$$75$$$$PagingCellSet$$($cellSet$$20$$, $startIndex$$42$$) {
    this.$m_cellSet$ = $cellSet$$20$$;
    this.$m_startIndex$ = $startIndex$$42$$;
  };
  $goog$exportPath_$$("PagingCellSet", $oj$$75$$.$PagingCellSet$, $oj$$75$$);
  $oj$$75$$.$PagingCellSet$.prototype.getData = function $$oj$$75$$$$PagingCellSet$$$getData$($indexes$$39$$) {
    return this.$m_cellSet$.getData({column:$indexes$$39$$.column, row:$indexes$$39$$.row + this.$m_startIndex$});
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getData", {getData:$oj$$75$$.$PagingCellSet$.prototype.getData});
  $oj$$75$$.$PagingCellSet$.prototype.getMetadata = function $$oj$$75$$$$PagingCellSet$$$getMetadata$($indexes$$40$$) {
    return this.$m_cellSet$.getMetadata({column:$indexes$$40$$.column, row:$indexes$$40$$.row + this.$m_startIndex$});
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getMetadata", {getMetadata:$oj$$75$$.$PagingCellSet$.prototype.getMetadata});
  $oj$$75$$.$PagingCellSet$.prototype.getCount = function $$oj$$75$$$$PagingCellSet$$$getCount$($axis$$97$$) {
    return this.$m_cellSet$.getCount($axis$$97$$);
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getCount", {getCount:$oj$$75$$.$PagingCellSet$.prototype.getCount});
  $oj$$75$$.$PagingCellSet$.prototype.$getCellSet$ = function $$oj$$75$$$$PagingCellSet$$$$getCellSet$$() {
    return this.$m_cellSet$;
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getCellSet", {$getCellSet$:$oj$$75$$.$PagingCellSet$.prototype.$getCellSet$});
  $oj$$75$$.$PagingCellSet$.prototype.$getStartIndex$ = function $$oj$$75$$$$PagingCellSet$$$$getStartIndex$$() {
    return this.$m_startIndex$;
  };
  $oj$$75$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getStartIndex", {$getStartIndex$:$oj$$75$$.$PagingCellSet$.prototype.$getStartIndex$});
});
