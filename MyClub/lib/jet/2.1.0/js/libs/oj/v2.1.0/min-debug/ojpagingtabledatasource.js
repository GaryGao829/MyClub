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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$64$$) {
  $oj$$64$$.$PagingTableDataSource$ = function $$oj$$64$$$$PagingTableDataSource$$($dataSource$$4$$) {
    if (!($dataSource$$4$$ instanceof $oj$$64$$.$TableDataSource$)) {
      throw Error($oj$$64$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$64$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$dataSource$ = $dataSource$$4$$;
    this.$_startIndex$ = 0;
    this.$_endIndex$ = -1;
    this.Init();
  };
  $goog$exportPath_$$("PagingTableDataSource", $oj$$64$$.$PagingTableDataSource$, $oj$$64$$);
  $oj$$64$$.$Object$.$createSubclass$($oj$$64$$.$PagingTableDataSource$, $oj$$64$$.$TableDataSource$, "oj.PagingTableDataSource");
  $oj$$64$$.$PagingTableDataSource$.prototype.Init = function $$oj$$64$$$$PagingTableDataSource$$$Init$() {
    $oj$$64$$.$PagingTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.Init", {Init:$oj$$64$$.$PagingTableDataSource$.prototype.Init});
  $oj$$64$$.$PagingTableDataSource$.prototype.getWrappedDataSource = function $$oj$$64$$$$PagingTableDataSource$$$getWrappedDataSource$() {
    return this.$dataSource$;
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$64$$.$PagingTableDataSource$.prototype.getWrappedDataSource});
  $oj$$64$$.$PagingTableDataSource$.prototype.getPage = function $$oj$$64$$$$PagingTableDataSource$$$getPage$() {
    return "loadMore" == this.$_fetchType$ ? 0 : this.$_getPageFromStartIndex$();
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getPage", {getPage:$oj$$64$$.$PagingTableDataSource$.prototype.getPage});
  $oj$$64$$.$PagingTableDataSource$.prototype.setPage = function $$oj$$64$$$$PagingTableDataSource$$$setPage$($value$$311$$, $options$$371$$) {
    $options$$371$$ = $options$$371$$ || {};
    $value$$311$$ = parseInt($value$$311$$, 10);
    try {
      $oj$$64$$.$PagingTableDataSource$.$superclass$.handleEvent.call(this, $oj$$64$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$311$$, previousPage:this.$_getPageFromStartIndex$()});
    } catch ($err$$23$$) {
      return Promise.reject(null);
    }
    var $previousPage$$1$$ = this.$_getPageFromStartIndex$();
    this.$_pageSize$ = null != $options$$371$$.pageSize ? $options$$371$$.pageSize : this.$_pageSize$;
    $options$$371$$.pageSize = this.$_pageSize$;
    $options$$371$$.startIndex = $value$$311$$ * this.$_pageSize$;
    this.$_startIndex$ = null == $options$$371$$.startIndex ? this.$_startIndex$ : $options$$371$$.startIndex;
    this.$_fetchType$ = "page";
    var $self$$216$$ = this;
    return new Promise(function($resolve$$67$$, $reject$$63$$) {
      0 < $self$$216$$.$_pageSize$ ? $self$$216$$.$dataSource$.fetch($options$$371$$).then(function($result$$71$$) {
        $result$$71$$.startIndex = 0;
        $self$$216$$.$_updateEndIndex$($result$$71$$.data.length);
        $oj$$64$$.$PagingTableDataSource$.$superclass$.handleEvent.call($self$$216$$, $oj$$64$$.$PagingModel$.$EventType$.PAGE, {page:$self$$216$$.$_getPageFromStartIndex$(), previousPage:$previousPage$$1$$});
        $resolve$$67$$(null);
      }, function() {
        $self$$216$$.$_startIndex$ = $previousPage$$1$$ * $self$$216$$.$_pageSize$;
        $reject$$63$$(null);
      }) : $resolve$$67$$(null);
    });
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.setPage", {setPage:$oj$$64$$.$PagingTableDataSource$.prototype.setPage});
  $oj$$64$$.$PagingTableDataSource$.prototype.getStartItemIndex = function $$oj$$64$$$$PagingTableDataSource$$$getStartItemIndex$() {
    return "loadMore" == this.$_fetchType$ ? 0 : this.$_startIndex$;
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$64$$.$PagingTableDataSource$.prototype.getStartItemIndex});
  $oj$$64$$.$PagingTableDataSource$.prototype.getEndItemIndex = function $$oj$$64$$$$PagingTableDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$64$$.$PagingTableDataSource$.prototype.getEndItemIndex});
  $oj$$64$$.$PagingTableDataSource$.prototype.getPageCount = function $$oj$$64$$$$PagingTableDataSource$$$getPageCount$() {
    var $totalSize$$1$$ = this.totalSize();
    return-1 == $totalSize$$1$$ ? -1 : Math.ceil($totalSize$$1$$ / this.$_pageSize$);
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getPageCount", {getPageCount:$oj$$64$$.$PagingTableDataSource$.prototype.getPageCount});
  $oj$$64$$.$PagingTableDataSource$.prototype.at = function $$oj$$64$$$$PagingTableDataSource$$$at$($index$$315$$, $options$$372$$) {
    return this.$dataSource$.at($index$$315$$, $options$$372$$);
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.at", {at:$oj$$64$$.$PagingTableDataSource$.prototype.at});
  $oj$$64$$.$PagingTableDataSource$.prototype.fetch = function $$oj$$64$$$$PagingTableDataSource$$$fetch$($options$$373$$) {
    $options$$373$$ = $options$$373$$ || {};
    if (null == $options$$373$$.startIndex) {
      return this.setPage(this.getPage());
    }
    this.$_fetchType$ = "loadMore";
    this.$_startIndex$ = null == $options$$373$$.startIndex ? this.$_startIndex$ : $options$$373$$.startIndex;
    var $pageSize$$9$$ = null != $options$$373$$.pageSize ? $options$$373$$.pageSize : this.$_pageSize$;
    $options$$373$$.pageSize = $pageSize$$9$$;
    $options$$373$$.startIndex = this.$_startIndex$;
    var $self$$217$$ = this;
    return new Promise(function($resolve$$68$$, $reject$$64$$) {
      0 < $pageSize$$9$$ ? $self$$217$$.$dataSource$.fetch($options$$373$$).then(function($result$$72$$) {
        $self$$217$$.$_updateEndIndex$($result$$72$$.data.length);
        $resolve$$68$$($result$$72$$);
      }, function($e$$105$$) {
        $reject$$64$$($e$$105$$);
      }) : $resolve$$68$$(null);
    });
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.fetch", {fetch:$oj$$64$$.$PagingTableDataSource$.prototype.fetch});
  $oj$$64$$.$PagingTableDataSource$.prototype.get = function $$oj$$64$$$$PagingTableDataSource$$$get$($id$$63$$, $options$$374$$) {
    return this.$dataSource$.get($id$$63$$, $options$$374$$);
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.get", {get:$oj$$64$$.$PagingTableDataSource$.prototype.get});
  $oj$$64$$.$PagingTableDataSource$.prototype.getCapability = function $$oj$$64$$$$PagingTableDataSource$$$getCapability$($feature$$12$$) {
    return this.$dataSource$.getCapability($feature$$12$$);
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getCapability", {getCapability:$oj$$64$$.$PagingTableDataSource$.prototype.getCapability});
  $oj$$64$$.$PagingTableDataSource$.prototype.on = function $$oj$$64$$$$PagingTableDataSource$$$on$($eventType$$48$$, $eventHandler$$3$$) {
    var $self$$218$$ = this, $dataSource$$5$$ = this.$dataSource$;
    if ($eventType$$48$$ == $oj$$64$$.$TableDataSource$.$EventType$.SYNC) {
      var $ev$$4$$ = function $$ev$$4$$$($event$$697$$) {
        $self$$218$$.$_handleSyncEvent$($event$$697$$, $eventHandler$$3$$);
      };
      $dataSource$$5$$.on($eventType$$48$$, $ev$$4$$);
      return $ev$$4$$;
    }
    if ($eventType$$48$$ == $oj$$64$$.$TableDataSource$.$EventType$.ADD || $eventType$$48$$ == $oj$$64$$.$TableDataSource$.$EventType$.REMOVE || $eventType$$48$$ == $oj$$64$$.$TableDataSource$.$EventType$.CHANGE) {
      return $ev$$4$$ = function $$ev$$4$$$($event$$698$$) {
        $self$$218$$.$_handleRowEvent$($event$$698$$, $eventHandler$$3$$);
      }, $dataSource$$5$$.on($eventType$$48$$, $ev$$4$$), $ev$$4$$;
    }
    if ($eventType$$48$$ == $oj$$64$$.$TableDataSource$.$EventType$.REFRESH || $eventType$$48$$ == $oj$$64$$.$TableDataSource$.$EventType$.RESET) {
      return $ev$$4$$ = function $$ev$$4$$$($event$$699$$) {
        $self$$218$$.$_startIndex$ = 0;
        $eventHandler$$3$$($event$$699$$);
      }, $dataSource$$5$$.on($eventType$$48$$, $ev$$4$$), $ev$$4$$;
    }
    if ($eventType$$48$$ == $oj$$64$$.$PagingModel$.$EventType$.PAGE || $eventType$$48$$ == $oj$$64$$.$PagingModel$.$EventType$.BEFOREPAGE || $eventType$$48$$ == $oj$$64$$.$PagingModel$.$EventType$.PAGECOUNT) {
      $oj$$64$$.$PagingTableDataSource$.$superclass$.on.call(this, $eventType$$48$$, $eventHandler$$3$$);
    } else {
      $dataSource$$5$$.on($eventType$$48$$, $eventHandler$$3$$);
    }
    return $eventHandler$$3$$;
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.on", {on:$oj$$64$$.$PagingTableDataSource$.prototype.on});
  $oj$$64$$.$PagingTableDataSource$.prototype.off = function $$oj$$64$$$$PagingTableDataSource$$$off$($eventType$$49$$, $eventHandler$$4$$) {
    return $eventType$$49$$ == $oj$$64$$.$PagingModel$.$EventType$.PAGE || $eventType$$49$$ == $oj$$64$$.$PagingModel$.$EventType$.PAGECOUNT ? ($oj$$64$$.$PagingTableDataSource$.$superclass$.off.call(this, $eventType$$49$$, $eventHandler$$4$$), $eventHandler$$4$$) : this.$dataSource$.off($eventType$$49$$, $eventHandler$$4$$);
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.off", {off:$oj$$64$$.$PagingTableDataSource$.prototype.off});
  $oj$$64$$.$PagingTableDataSource$.prototype.sort = function $$oj$$64$$$$PagingTableDataSource$$$sort$($criteria$$6$$) {
    null == $criteria$$6$$ ? $criteria$$6$$ = this.sortCriteria : this.sortCriteria = $criteria$$6$$;
    return this.$dataSource$.sort($criteria$$6$$);
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.sort", {sort:$oj$$64$$.$PagingTableDataSource$.prototype.sort});
  $oj$$64$$.$PagingTableDataSource$.prototype.totalSize = function $$oj$$64$$$$PagingTableDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize();
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSize", {totalSize:$oj$$64$$.$PagingTableDataSource$.prototype.totalSize});
  $oj$$64$$.$PagingTableDataSource$.prototype.totalSizeConfidence = function $$oj$$64$$$$PagingTableDataSource$$$totalSizeConfidence$() {
    return this.$dataSource$.totalSizeConfidence();
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$64$$.$PagingTableDataSource$.prototype.totalSizeConfidence});
  $oj$$64$$.$PagingTableDataSource$.prototype.$_getPageFromStartIndex$ = function $$oj$$64$$$$PagingTableDataSource$$$$_getPageFromStartIndex$$() {
    return 0 < this.$_pageSize$ ? Math.floor(this.$_startIndex$ / this.$_pageSize$) : 0;
  };
  $oj$$64$$.$PagingTableDataSource$.prototype.$_handleRowEvent$ = function $$oj$$64$$$$PagingTableDataSource$$$$_handleRowEvent$$($event$$700$$, $eventHandler$$5$$) {
    var $ignoreRows$$ = [], $i$$440$$;
    for ($i$$440$$ = 0;$i$$440$$ < $event$$700$$.indexes.length;$i$$440$$++) {
      var $rowIdx$$46$$ = $event$$700$$.indexes[$i$$440$$];
      void 0 !== $rowIdx$$46$$ && ($rowIdx$$46$$ -= this.$_startIndex$, (0 > $rowIdx$$46$$ || $rowIdx$$46$$ >= this.$_startIndex$ + this.$_pageSize$) && $ignoreRows$$.push($i$$440$$));
    }
    if (0 < $ignoreRows$$.length) {
      for ($ignoreRows$$.sort(function($a$$118$$, $b$$70$$) {
        return $a$$118$$ - $b$$70$$;
      }), $i$$440$$ = $ignoreRows$$.length - 1;0 <= $i$$440$$;$i$$440$$--) {
        $event$$700$$.data.splice($ignoreRows$$[$i$$440$$], 1), $event$$700$$.indexes.splice($ignoreRows$$[$i$$440$$], 1), $event$$700$$.keys.splice($ignoreRows$$[$i$$440$$], 1);
      }
    }
    this.$_updateEndIndex$($event$$700$$.data.length);
    $event$$700$$.startIndex = this.$_startIndex$;
    $eventHandler$$5$$($event$$700$$);
  };
  $oj$$64$$.$PagingTableDataSource$.prototype.$_handleSyncEvent$ = function $$oj$$64$$$$PagingTableDataSource$$$$_handleSyncEvent$$($event$$701$$, $eventHandler$$6$$) {
    $event$$701$$.startIndex != this.$_startIndex$ && (this.$_startIndex$ = $event$$701$$.startIndex);
    this.$_updateEndIndex$($event$$701$$.data.length);
    if ("page" == this.$_fetchType$) {
      var $clonedEvent$$ = {};
      $oj$$64$$.$CollectionUtils$.$copyInto$($clonedEvent$$, $event$$701$$);
      $clonedEvent$$.startIndex = 0;
      $eventHandler$$6$$($clonedEvent$$);
    } else {
      $eventHandler$$6$$($event$$701$$);
    }
  };
  $oj$$64$$.$PagingTableDataSource$.prototype.$_updateEndIndex$ = function $$oj$$64$$$$PagingTableDataSource$$$$_updateEndIndex$$($resultSize$$) {
    var $totalSize$$2$$ = this.totalSize();
    0 < $totalSize$$2$$ ? (this.$_endIndex$ = this.$_startIndex$ + this.$_pageSize$ - 1, this.$_endIndex$ = this.$_endIndex$ > $totalSize$$2$$ - 1 ? $totalSize$$2$$ - 1 : this.$_endIndex$) : this.$_endIndex$ = 0 < $resultSize$$ ? this.$_startIndex$ + $resultSize$$ - 1 : -1;
  };
  $oj$$64$$.$PagingTableDataSource$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", SYNC:"sync", REFRESH:"refresh", SORT:"sort"};
  $goog$exportPath_$$("PagingTableDataSource.EventType", $oj$$64$$.$PagingTableDataSource$.$EventType$, $oj$$64$$);
  $oj$$64$$.$PagingModel$ = function $$oj$$64$$$$PagingModel$$() {
  };
  $goog$exportPath_$$("PagingModel", $oj$$64$$.$PagingModel$, $oj$$64$$);
  $oj$$64$$.$PagingModel$.prototype.getPage = function $$oj$$64$$$$PagingModel$$$getPage$() {
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getPage", {getPage:$oj$$64$$.$PagingModel$.prototype.getPage});
  $oj$$64$$.$PagingModel$.prototype.setPage = function $$oj$$64$$$$PagingModel$$$setPage$() {
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.setPage", {setPage:$oj$$64$$.$PagingModel$.prototype.setPage});
  $oj$$64$$.$PagingModel$.prototype.getStartItemIndex = function $$oj$$64$$$$PagingModel$$$getStartItemIndex$() {
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getStartItemIndex", {getStartItemIndex:$oj$$64$$.$PagingModel$.prototype.getStartItemIndex});
  $oj$$64$$.$PagingModel$.prototype.getEndItemIndex = function $$oj$$64$$$$PagingModel$$$getEndItemIndex$() {
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getEndItemIndex", {getEndItemIndex:$oj$$64$$.$PagingModel$.prototype.getEndItemIndex});
  $oj$$64$$.$PagingModel$.prototype.getPageCount = function $$oj$$64$$$$PagingModel$$$getPageCount$() {
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getPageCount", {getPageCount:$oj$$64$$.$PagingModel$.prototype.getPageCount});
  $oj$$64$$.$PagingModel$.prototype.totalSize = function $$oj$$64$$$$PagingModel$$$totalSize$() {
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.totalSize", {totalSize:$oj$$64$$.$PagingModel$.prototype.totalSize});
  $oj$$64$$.$PagingModel$.prototype.totalSizeConfidence = function $$oj$$64$$$$PagingModel$$$totalSizeConfidence$() {
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$64$$.$PagingModel$.prototype.totalSizeConfidence});
  $oj$$64$$.$PagingModel$.$EventType$ = {BEFOREPAGE:"beforePage", PAGE:"page", PAGECOUNT:"pageCount"};
  $goog$exportPath_$$("PagingModel.EventType", $oj$$64$$.$PagingModel$.$EventType$, $oj$$64$$);
});
