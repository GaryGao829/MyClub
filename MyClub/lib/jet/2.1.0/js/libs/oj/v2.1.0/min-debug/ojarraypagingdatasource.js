/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojdatasource-common"], function($oj$$76$$, $$$$69$$, $ko$$8$$) {
  $oj$$76$$.$ArrayPagingDataSource$ = function $$oj$$76$$$$ArrayPagingDataSource$$($data$$181$$) {
    this.data = $data$$181$$;
    this.current = 0;
    this.Init();
    this.$_setPageSize$(10);
  };
  $goog$exportPath_$$("ArrayPagingDataSource", $oj$$76$$.$ArrayPagingDataSource$, $oj$$76$$);
  $oj$$76$$.$Object$.$createSubclass$($oj$$76$$.$ArrayPagingDataSource$, $oj$$76$$.$DataSource$, "oj.ArrayPagingDataSource");
  $oj$$76$$.$ArrayPagingDataSource$.prototype.Init = function $$oj$$76$$$$ArrayPagingDataSource$$$Init$() {
    $oj$$76$$.$ArrayPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.Init", {Init:$oj$$76$$.$ArrayPagingDataSource$.prototype.Init});
  $oj$$76$$.$ArrayPagingDataSource$.prototype.$_getSize$ = function $$oj$$76$$$$ArrayPagingDataSource$$$$_getSize$$() {
    return this.$_hasMore$() ? this.$currentPageSize$ : this.totalSize() - this.current;
  };
  $oj$$76$$.$ArrayPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$76$$$$ArrayPagingDataSource$$$$_refreshDataWindow$$($options$$408$$) {
    $options$$408$$ = $options$$408$$ || {};
    this.$dataWindow$ = Array(this.$_getSize$());
    for (var $i$$527$$ = 0;$i$$527$$ < this.$dataWindow$.length;$i$$527$$++) {
      this.$dataWindow$[$i$$527$$] = this.data[this.current + $i$$527$$];
    }
    this.$_refreshObservableDataWindow$();
    this.$_endIndex$ = this.$_startIndex$ + this.$dataWindow$.length - 1;
    $options$$408$$.silent || this.handleEvent("sync", {data:this.$dataWindow$, startIndex:this.current});
  };
  $oj$$76$$.$ArrayPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$76$$$$ArrayPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$528$$ = 0;$i$$528$$ < this.$dataWindow$.length;$i$$528$$++) {
        this.$observableDataWindow$.push(this.$dataWindow$[$i$$528$$]);
      }
    }
  };
  $oj$$76$$.$ArrayPagingDataSource$.prototype.handleEvent = function $$oj$$76$$$$ArrayPagingDataSource$$$handleEvent$($eventType$$55$$, $event$$781$$) {
    return $oj$$76$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$55$$, $event$$781$$);
  };
  $oj$$76$$.$ArrayPagingDataSource$.prototype.$getWindow$ = function $$oj$$76$$$$ArrayPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$76$$.$ArrayPagingDataSource$.prototype.$getWindow$});
  $oj$$76$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$76$$$$ArrayPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$8$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$76$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$76$$.$ArrayPagingDataSource$.prototype.getPage = function $$oj$$76$$$$ArrayPagingDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getPage", {getPage:$oj$$76$$.$ArrayPagingDataSource$.prototype.getPage});
  $oj$$76$$.$ArrayPagingDataSource$.prototype.setPage = function $$oj$$76$$$$ArrayPagingDataSource$$$setPage$($value$$331$$, $options$$409$$) {
    $options$$409$$ = $options$$409$$ || {};
    $value$$331$$ = parseInt($value$$331$$, 10);
    try {
      $oj$$76$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $oj$$76$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$331$$, previousPage:this.$_page$});
    } catch ($err$$30$$) {
      return Promise.reject(null);
    }
    this.pageSize = null != $options$$409$$.pageSize ? $options$$409$$.pageSize : this.pageSize;
    $options$$409$$.startIndex = $value$$331$$ * this.pageSize;
    var $previousPage$$4$$ = this.$_page$;
    this.$_page$ = $value$$331$$;
    this.$_startIndex$ = $options$$409$$.startIndex;
    var $self$$239$$ = this;
    return new Promise(function($resolve$$80$$, $reject$$75$$) {
      $self$$239$$.$_fetchInternal$($options$$409$$).then(function() {
        $oj$$76$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call($self$$239$$, $oj$$76$$.$PagingModel$.$EventType$.PAGE, {page:$self$$239$$.$_page$, previousPage:$previousPage$$4$$});
        $resolve$$80$$(null);
      }, function() {
        $self$$239$$.$_page$ = $previousPage$$4$$;
        $self$$239$$.$_startIndex$ = $self$$239$$.$_page$ * $self$$239$$.pageSize;
        $reject$$75$$(null);
      });
    });
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.setPage", {setPage:$oj$$76$$.$ArrayPagingDataSource$.prototype.setPage});
  $oj$$76$$.$ArrayPagingDataSource$.prototype.getStartItemIndex = function $$oj$$76$$$$ArrayPagingDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$76$$.$ArrayPagingDataSource$.prototype.getStartItemIndex});
  $oj$$76$$.$ArrayPagingDataSource$.prototype.getEndItemIndex = function $$oj$$76$$$$ArrayPagingDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$76$$.$ArrayPagingDataSource$.prototype.getEndItemIndex});
  $oj$$76$$.$ArrayPagingDataSource$.prototype.getPageCount = function $$oj$$76$$$$ArrayPagingDataSource$$$getPageCount$() {
    var $totalSize$$6$$ = this.totalSize();
    return-1 == $totalSize$$6$$ ? -1 : Math.ceil($totalSize$$6$$ / this.pageSize);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getPageCount", {getPageCount:$oj$$76$$.$ArrayPagingDataSource$.prototype.getPageCount});
  $oj$$76$$.$ArrayPagingDataSource$.prototype.fetch = function $$oj$$76$$$$ArrayPagingDataSource$$$fetch$($options$$410_opts$$38$$) {
    $options$$410_opts$$38$$ = $options$$410_opts$$38$$ || {};
    if (void 0 !== $options$$410_opts$$38$$.pageSize && void 0 !== $options$$410_opts$$38$$.startIndex) {
      if (!this.$_hasMore$()) {
        return Promise.resolve();
      }
      this.$currentPageSize$ = $options$$410_opts$$38$$.startIndex + $options$$410_opts$$38$$.pageSize;
    }
    this.$_refreshDataWindow$(null);
    return Promise.resolve();
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.fetch", {fetch:$oj$$76$$.$ArrayPagingDataSource$.prototype.fetch});
  $oj$$76$$.$ArrayPagingDataSource$.prototype.$_fetchInternal$ = function $$oj$$76$$$$ArrayPagingDataSource$$$$_fetchInternal$$($options$$411$$) {
    var $opts$$39$$ = $options$$411$$ || {};
    void 0 !== $opts$$39$$.startIndex && (this.current = $opts$$39$$.startIndex);
    void 0 !== $opts$$39$$.pageSize && (this.$currentPageSize$ = this.pageSize = $opts$$39$$.pageSize);
    this.$_refreshDataWindow$($options$$411$$);
    return Promise.resolve({data:this.$dataWindow$, startIndex:this.current});
  };
  $oj$$76$$.$ArrayPagingDataSource$.prototype.$_hasMore$ = function $$oj$$76$$$$ArrayPagingDataSource$$$$_hasMore$$() {
    return this.current + this.$currentPageSize$ < this.totalSize();
  };
  $oj$$76$$.$ArrayPagingDataSource$.prototype.$_setPageSize$ = function $$oj$$76$$$$ArrayPagingDataSource$$$$_setPageSize$$($n$$40$$) {
    this.$currentPageSize$ = this.pageSize = $n$$40$$;
    this.$_refreshDataWindow$(null);
  };
  $oj$$76$$.$ArrayPagingDataSource$.prototype.totalSize = function $$oj$$76$$$$ArrayPagingDataSource$$$totalSize$() {
    return this.data.length;
  };
  $oj$$76$$.$ArrayPagingDataSource$.prototype.totalSizeConfidence = function $$oj$$76$$$$ArrayPagingDataSource$$$totalSizeConfidence$() {
    return "actual";
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$76$$.$ArrayPagingDataSource$.prototype.totalSizeConfidence});
  $oj$$76$$.$ArrayPagingDataSource$.prototype.getCapability = function $$oj$$76$$$$ArrayPagingDataSource$$$getCapability$() {
    return null;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getCapability", {getCapability:$oj$$76$$.$ArrayPagingDataSource$.prototype.getCapability});
});
