/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojdatasource-common", "ojs/ojmodel", "ojs/ojknockout-model"], function($oj$$66$$, $$$$60$$, $ko$$6$$) {
  $oj$$66$$.$CollectionPagingDataSource$ = function $$oj$$66$$$$CollectionPagingDataSource$$($collection$$58$$) {
    this.$collection$ = $collection$$58$$;
    this.current = 0;
    this.Init();
    this.$dataWindow$ = [];
    this.$_setPageSize$(10);
  };
  $goog$exportPath_$$("CollectionPagingDataSource", $oj$$66$$.$CollectionPagingDataSource$, $oj$$66$$);
  $oj$$66$$.$Object$.$createSubclass$($oj$$66$$.$CollectionPagingDataSource$, $oj$$66$$.$DataSource$, "oj.CollectionPagingDataSource");
  $oj$$66$$.$CollectionPagingDataSource$.prototype.Init = function $$oj$$66$$$$CollectionPagingDataSource$$$Init$() {
    $oj$$66$$.$CollectionPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.Init", {Init:$oj$$66$$.$CollectionPagingDataSource$.prototype.Init});
  $oj$$66$$.$CollectionPagingDataSource$.prototype.$_getSize$ = function $$oj$$66$$$$CollectionPagingDataSource$$$$_getSize$$() {
    return this.$_hasMore$() ? this.$currentPageSize$ : this.totalSize() - this.current;
  };
  $oj$$66$$.$CollectionPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$66$$$$CollectionPagingDataSource$$$$_refreshDataWindow$$() {
    this.$dataWindow$ = Array(this.$_getSize$());
    var $self$$220$$ = this;
    return this.$collection$.$IterativeAt$(this.current, this.current + this.$dataWindow$.length).then(function($array$$16$$) {
      for (var $i$$441$$ = 0;$i$$441$$ < $array$$16$$.length;$i$$441$$++) {
        $self$$220$$.$dataWindow$[$i$$441$$] = $array$$16$$[$i$$441$$];
      }
      $self$$220$$.$_refreshObservableDataWindow$();
      $self$$220$$.$_endIndex$ = $self$$220$$.$_startIndex$ + $self$$220$$.$dataWindow$.length - 1;
    });
  };
  $oj$$66$$.$CollectionPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$66$$$$CollectionPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$442$$ = 0;$i$$442$$ < this.$dataWindow$.length;$i$$442$$++) {
        this.$observableDataWindow$.push($oj$$66$$.$KnockoutUtils$.map(this.$dataWindow$[$i$$442$$]));
      }
    }
  };
  $oj$$66$$.$CollectionPagingDataSource$.prototype.$getWindow$ = function $$oj$$66$$$$CollectionPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$66$$.$CollectionPagingDataSource$.prototype.$getWindow$});
  $oj$$66$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$66$$$$CollectionPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$6$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$66$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$66$$.$CollectionPagingDataSource$.prototype.getPage = function $$oj$$66$$$$CollectionPagingDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getPage", {getPage:$oj$$66$$.$CollectionPagingDataSource$.prototype.getPage});
  $oj$$66$$.$CollectionPagingDataSource$.prototype.setPage = function $$oj$$66$$$$CollectionPagingDataSource$$$setPage$($value$$313$$, $options$$376$$) {
    $options$$376$$ = $options$$376$$ || {};
    $value$$313$$ = parseInt($value$$313$$, 10);
    try {
      $oj$$66$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $oj$$66$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$313$$, previousPage:this.$_page$});
    } catch ($err$$24$$) {
      return Promise.reject(null);
    }
    this.pageSize = null != $options$$376$$.pageSize ? $options$$376$$.pageSize : this.pageSize;
    $options$$376$$.startIndex = $value$$313$$ * this.pageSize;
    var $previousPage$$2$$ = this.$_page$;
    this.$_page$ = $value$$313$$;
    this.$_startIndex$ = $options$$376$$.startIndex;
    var $self$$221$$ = this;
    return new Promise(function($resolve$$69$$, $reject$$65$$) {
      $self$$221$$.$_fetchInternal$($options$$376$$).then(function() {
        $oj$$66$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call($self$$221$$, $oj$$66$$.$PagingModel$.$EventType$.PAGE, {page:$self$$221$$.$_page$, previousPage:$previousPage$$2$$});
        $resolve$$69$$(null);
      }, function() {
        $self$$221$$.$_page$ = $previousPage$$2$$;
        $self$$221$$.$_startIndex$ = $self$$221$$.$_page$ * $self$$221$$.pageSize;
        $reject$$65$$(null);
      });
    });
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.setPage", {setPage:$oj$$66$$.$CollectionPagingDataSource$.prototype.setPage});
  $oj$$66$$.$CollectionPagingDataSource$.prototype.getStartItemIndex = function $$oj$$66$$$$CollectionPagingDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$66$$.$CollectionPagingDataSource$.prototype.getStartItemIndex});
  $oj$$66$$.$CollectionPagingDataSource$.prototype.getEndItemIndex = function $$oj$$66$$$$CollectionPagingDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$66$$.$CollectionPagingDataSource$.prototype.getEndItemIndex});
  $oj$$66$$.$CollectionPagingDataSource$.prototype.getPageCount = function $$oj$$66$$$$CollectionPagingDataSource$$$getPageCount$() {
    var $totalSize$$3$$ = this.totalSize();
    return-1 == $totalSize$$3$$ ? -1 : Math.ceil($totalSize$$3$$ / this.pageSize);
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getPageCount", {getPageCount:$oj$$66$$.$CollectionPagingDataSource$.prototype.getPageCount});
  $oj$$66$$.$CollectionPagingDataSource$.prototype.fetch = function $$oj$$66$$$$CollectionPagingDataSource$$$fetch$($options$$377$$) {
    var $opts$$31$$ = $options$$377$$ || {};
    if (void 0 !== $opts$$31$$.pageSize && void 0 !== $opts$$31$$.startIndex) {
      if (!this.$_hasMore$()) {
        return this.$_processSuccess$(null), Promise.resolve();
      }
      this.$currentPageSize$ = $opts$$31$$.startIndex + $opts$$31$$.pageSize;
      var $self$$222$$ = this;
      return this.$_refreshDataWindow$().then(function() {
        $self$$222$$.$_processSuccess$(null);
      });
    }
    return this.$_fetchInternal$($options$$377$$);
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.fetch", {fetch:$oj$$66$$.$CollectionPagingDataSource$.prototype.fetch});
  $oj$$66$$.$CollectionPagingDataSource$.prototype.$_fetchInternal$ = function $$oj$$66$$$$CollectionPagingDataSource$$$$_fetchInternal$$($options$$378$$) {
    var $opts$$32$$ = $options$$378$$ || {};
    void 0 !== $opts$$32$$.startIndex && (this.current = $opts$$32$$.startIndex);
    void 0 !== $opts$$32$$.pageSize && (this.$currentPageSize$ = this.pageSize = $opts$$32$$.pageSize);
    var $self$$223$$ = this;
    return new Promise(function($resolve$$70$$) {
      try {
        $self$$223$$.$collection$.fetch({success:function() {
          $self$$223$$.$_refreshDataWindow$().then(function() {
            $self$$223$$.$_processSuccess$($opts$$32$$);
            $resolve$$70$$({data:$self$$223$$.$getWindow$(), startIndex:$self$$223$$.current});
          });
        }});
      } catch ($e$$106$$) {
        $self$$223$$.$_refreshDataWindow$().then(function() {
          $self$$223$$.$_processSuccess$($opts$$32$$);
          $resolve$$70$$({data:$self$$223$$.$getWindow$(), startIndex:$self$$223$$.current});
        });
      }
    });
  };
  $oj$$66$$.$CollectionPagingDataSource$.prototype.$_processSuccess$ = function $$oj$$66$$$$CollectionPagingDataSource$$$$_processSuccess$$($options$$379_opts$$33$$) {
    $options$$379_opts$$33$$ = $options$$379_opts$$33$$ || {};
    $options$$379_opts$$33$$.silent || this.handleEvent("sync", {data:this.$getWindow$(), startIndex:this.current});
    $options$$379_opts$$33$$.success && $options$$379_opts$$33$$.success();
  };
  $oj$$66$$.$CollectionPagingDataSource$.prototype.handleEvent = function $$oj$$66$$$$CollectionPagingDataSource$$$handleEvent$($eventType$$50$$, $event$$703$$) {
    return $oj$$66$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$50$$, $event$$703$$);
  };
  $oj$$66$$.$CollectionPagingDataSource$.prototype.$_hasMore$ = function $$oj$$66$$$$CollectionPagingDataSource$$$$_hasMore$$() {
    return this.current + this.$currentPageSize$ < this.totalSize();
  };
  $oj$$66$$.$CollectionPagingDataSource$.prototype.$_setPageSize$ = function $$oj$$66$$$$CollectionPagingDataSource$$$$_setPageSize$$($n$$27$$) {
    this.$currentPageSize$ = this.pageSize = $n$$27$$;
  };
  $oj$$66$$.$CollectionPagingDataSource$.prototype.size = function $$oj$$66$$$$CollectionPagingDataSource$$$size$() {
    var $w$$7$$ = this.$getWindow$();
    return $w$$7$$ ? $w$$7$$.length : 0;
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.size", {size:$oj$$66$$.$CollectionPagingDataSource$.prototype.size});
  $oj$$66$$.$CollectionPagingDataSource$.prototype.totalSize = function $$oj$$66$$$$CollectionPagingDataSource$$$totalSize$() {
    return this.$collection$.length;
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.totalSize", {totalSize:$oj$$66$$.$CollectionPagingDataSource$.prototype.totalSize});
  $oj$$66$$.$CollectionPagingDataSource$.prototype.totalSizeConfidence = function $$oj$$66$$$$CollectionPagingDataSource$$$totalSizeConfidence$() {
    return "actual";
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$66$$.$CollectionPagingDataSource$.prototype.totalSizeConfidence});
  $oj$$66$$.$CollectionPagingDataSource$.prototype.getCapability = function $$oj$$66$$$$CollectionPagingDataSource$$$getCapability$() {
    return null;
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getCapability", {getCapability:$oj$$66$$.$CollectionPagingDataSource$.prototype.getCapability});
});
