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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel"], function($oj$$69$$, $$$$62$$) {
  $oj$$69$$.$CollectionTableDataSource$ = function $$oj$$69$$$$CollectionTableDataSource$$($data$$168$$, $options$$383$$) {
    this.data = {};
    if (!($data$$168$$ instanceof $oj$$69$$.$Collection$)) {
      throw Error($oj$$69$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$69$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    $oj$$69$$.$CollectionTableDataSource$.$superclass$.constructor.call(this, $data$$168$$, $options$$383$$);
    this.$_collection$ = $data$$168$$;
    this.$_addCollectionEventListeners$();
    this.Init();
    if (null != $options$$383$$ && ("enabled" == $options$$383$$.startFetch || null == $options$$383$$.startFetch) || null == $options$$383$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("CollectionTableDataSource", $oj$$69$$.$CollectionTableDataSource$, $oj$$69$$);
  $oj$$69$$.$Object$.$createSubclass$($oj$$69$$.$CollectionTableDataSource$, $oj$$69$$.$TableDataSource$, "oj.CollectionTableDataSource");
  $oj$$69$$.$CollectionTableDataSource$.prototype.$comparator$ = null;
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.comparator", {$comparator$:$oj$$69$$.$CollectionTableDataSource$.prototype.$comparator$});
  $oj$$69$$.$CollectionTableDataSource$.prototype.Init = function $$oj$$69$$$$CollectionTableDataSource$$$Init$() {
    $oj$$69$$.$CollectionTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.Init", {Init:$oj$$69$$.$CollectionTableDataSource$.prototype.Init});
  $oj$$69$$.$CollectionTableDataSource$.prototype.at = function $$oj$$69$$$$CollectionTableDataSource$$$at$($index$$321$$, $options$$384$$) {
    $options$$384$$ = $options$$384$$ || {};
    $options$$384$$.deferred = !0;
    var $model$$99$$ = this.$_collection$.at($index$$321$$, $options$$384$$), $self$$225$$ = this;
    $self$$225$$.$_isFetchingForAt$ = !0;
    var $row$$87$$;
    return new Promise(function($resolve$$72$$, $reject$$67$$) {
      null != $model$$99$$ ? $model$$99$$.then(function($resolvedModel$$) {
        $self$$225$$.$_isFetchingForAt$ = !1;
        $row$$87$$ = {data:$resolvedModel$$.attributes, index:$index$$321$$, key:$resolvedModel$$.id};
        $resolve$$72$$($row$$87$$);
      }, function($e$$108$$) {
        $self$$225$$.$_isFetchingForAt$ = !1;
        $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call($self$$225$$, $oj$$69$$.$TableDataSource$.$EventType$.ERROR, $e$$108$$);
        $reject$$67$$($e$$108$$);
      }) : $resolve$$72$$(null);
    });
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.at", {at:$oj$$69$$.$CollectionTableDataSource$.prototype.at});
  $oj$$69$$.$CollectionTableDataSource$.prototype.fetch = function $$oj$$69$$$$CollectionTableDataSource$$$fetch$($options$$385$$) {
    $options$$385$$ = $options$$385$$ || {};
    return "init" != $options$$385$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$385$$) : Promise.resolve();
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.fetch", {fetch:$oj$$69$$.$CollectionTableDataSource$.prototype.fetch});
  $oj$$69$$.$CollectionTableDataSource$.prototype.get = function $$oj$$69$$$$CollectionTableDataSource$$$get$($id$$68$$, $options$$386$$) {
    $options$$386$$ = $options$$386$$ || {};
    $options$$386$$.deferred = !0;
    var $model$$100$$ = this.$_collection$.get($id$$68$$, $options$$386$$), $self$$226$$ = this, $row$$88$$;
    return new Promise(function($resolve$$73$$, $reject$$68$$) {
      null != $model$$100$$ ? $model$$100$$.then(function($resolvedModel$$1$$) {
        $row$$88$$ = {data:$resolvedModel$$1$$.attributes, index:$resolvedModel$$1$$.index, key:$resolvedModel$$1$$.id};
        $resolve$$73$$($row$$88$$);
      }, function($e$$109$$) {
        $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call($self$$226$$, $oj$$69$$.$TableDataSource$.$EventType$.ERROR, $e$$109$$);
        $reject$$68$$($e$$109$$);
      }) : $resolve$$73$$(null);
    });
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.get", {get:$oj$$69$$.$CollectionTableDataSource$.prototype.get});
  $oj$$69$$.$CollectionTableDataSource$.prototype.sort = function $$oj$$69$$$$CollectionTableDataSource$$$sort$($criteria$$7$$) {
    null == $criteria$$7$$ ? $criteria$$7$$ = this.sortCriteria : this.sortCriteria = $criteria$$7$$;
    var $comparator$$15$$ = this.comparator, $self$$227$$ = this;
    return new Promise(function($resolve$$74$$) {
      null == $comparator$$15$$ ? ($self$$227$$.$_collection$.comparator = $criteria$$7$$.key, $self$$227$$.$_collection$.sortDirection = "ascending" == $criteria$$7$$.direction ? 1 : -1) : $self$$227$$.$_collection$.comparator = $comparator$$15$$;
      $self$$227$$.$_collection$.sort(null);
      $resolve$$74$$({header:$criteria$$7$$.key, direction:$criteria$$7$$.direction});
    });
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.sort", {sort:$oj$$69$$.$CollectionTableDataSource$.prototype.sort});
  $oj$$69$$.$CollectionTableDataSource$.prototype.totalSize = function $$oj$$69$$$$CollectionTableDataSource$$$totalSize$() {
    var $totalSize$$4$$ = 0 <= this.$_collection$.totalResults ? this.$_collection$.totalResults : -1;
    if (-1 < $totalSize$$4$$) {
      var $size$$31$$ = this.$_collection$.size();
      return $size$$31$$ > $totalSize$$4$$ ? $size$$31$$ : $totalSize$$4$$;
    }
    if (0 < this.$_fetchResultSize$) {
      $totalSize$$4$$ = this.$_fetchResultSize$;
    } else {
      if ("atLeast" == this.totalSizeConfidence()) {
        return this.$_collection$.size();
      }
    }
    return $totalSize$$4$$;
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSize", {totalSize:$oj$$69$$.$CollectionTableDataSource$.prototype.totalSize});
  $oj$$69$$.$CollectionTableDataSource$.prototype.totalSizeConfidence = function $$oj$$69$$$$CollectionTableDataSource$$$totalSizeConfidence$() {
    return 0 <= this.$_collection$.totalResults ? "actual" : this.$_collection$.hasMore ? "atLeast" : "unknown";
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$69$$.$CollectionTableDataSource$.prototype.totalSizeConfidence});
  $oj$$69$$.$CollectionTableDataSource$.prototype.$_addCollectionEventListeners$ = function $$oj$$69$$$$CollectionTableDataSource$$$$_addCollectionEventListeners$$() {
    var $self$$228$$ = this;
    this.$_collection$.on($oj$$69$$.$Events$.$EventType$.SYNC, function($event$$722_result$$75$$) {
      if ($event$$722_result$$75$$ instanceof $oj$$69$$.$Collection$ && !$self$$228$$.$_isFetchingForAt$ && !$self$$228$$.$_isFetching$) {
        var $startIndex$$40$$ = $event$$722_result$$75$$.offset, $pageSize$$10$$ = $event$$722_result$$75$$.lastFetchCount;
        0 < $pageSize$$10$$ ? ($self$$228$$.$_startIndex$ = $startIndex$$40$$, $self$$228$$.$_pageSize$ = $pageSize$$10$$, $self$$228$$.$_isFetchingForAt$ = !0, $event$$722_result$$75$$.$IterativeAt$($startIndex$$40$$, $startIndex$$40$$ + $pageSize$$10$$).then(function($modelArray$$2$$) {
          $self$$228$$.$_isFetchingForAt$ = !1;
          var $rowArray$$9$$ = [], $keyArray$$1$$ = [], $i$$456$$, $modelClone$$;
          for ($i$$456$$ = 0;$i$$456$$ < $modelArray$$2$$.length;$i$$456$$++) {
            null != $modelArray$$2$$[$i$$456$$] && ($modelClone$$ = $modelArray$$2$$[$i$$456$$].clone(), $rowArray$$9$$.push($modelClone$$.attributes), $keyArray$$1$$.push($modelClone$$.id));
          }
          $self$$228$$.$_endFetch$.call($self$$228$$, {silent:!1}, {data:$rowArray$$9$$, keys:$keyArray$$1$$, startIndex:$startIndex$$40$$}, null);
        })) : ($event$$722_result$$75$$ = $self$$228$$.$_getRowArray$(), $self$$228$$.$_endFetch$.call($self$$228$$, {silent:!1}, $event$$722_result$$75$$, null));
      }
    });
    this.$_collection$.on($oj$$69$$.$Events$.$EventType$.ALLADDED, function($event$$723$$, $modelArray$$3$$) {
      var $rowArray$$10$$ = [], $keyArray$$2$$ = [], $indexArray$$3$$ = [], $i$$457$$, $modelClone$$1$$;
      for ($i$$457$$ = 0;$i$$457$$ < $modelArray$$3$$.length;$i$$457$$++) {
        $modelClone$$1$$ = $modelArray$$3$$[$i$$457$$].clone(), $rowArray$$10$$.push($modelClone$$1$$.attributes), $keyArray$$2$$.push($modelClone$$1$$.id), $indexArray$$3$$.push($modelClone$$1$$.index);
      }
      $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call($self$$228$$, $oj$$69$$.$TableDataSource$.$EventType$.ADD, {data:$rowArray$$10$$, keys:$keyArray$$2$$, indexes:$indexArray$$3$$});
    });
    this.$_collection$.on($oj$$69$$.$Events$.$EventType$.ALLREMOVED, function($event$$724$$, $modelArray$$4$$) {
      var $rowArray$$11$$ = [], $keyArray$$3$$ = [], $indexArray$$4$$ = [], $i$$458$$, $modelClone$$2$$;
      for ($i$$458$$ = 0;$i$$458$$ < $modelArray$$4$$.length;$i$$458$$++) {
        $modelClone$$2$$ = $modelArray$$4$$[$i$$458$$].clone(), $rowArray$$11$$.push($modelClone$$2$$.attributes), $keyArray$$3$$.push($modelClone$$2$$.id), $indexArray$$4$$.push($modelClone$$2$$.index);
      }
      $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call($self$$228$$, $oj$$69$$.$TableDataSource$.$EventType$.REMOVE, {data:$rowArray$$11$$, keys:$keyArray$$3$$, indexes:$indexArray$$4$$});
    });
    this.$_collection$.on($oj$$69$$.$Events$.$EventType$.RESET, function($event$$725$$) {
      $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call($self$$228$$, $oj$$69$$.$TableDataSource$.$EventType$.RESET, $event$$725$$);
    });
    this.$_collection$.on($oj$$69$$.$Events$.$EventType$.SORT, function($event$$726$$, $eventOpts$$2$$) {
      if (null == $eventOpts$$2$$ || !$eventOpts$$2$$.add) {
        var $sortCriteria$$1$$ = {};
        null == $event$$726$$ || null == !$event$$726$$.comparator || $$$$62$$.isFunction($event$$726$$.comparator) || ($sortCriteria$$1$$.header = $event$$726$$.comparator, $sortCriteria$$1$$.direction = 1 === $event$$726$$.sortDirection ? "ascending" : "descending");
        $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call($self$$228$$, $oj$$69$$.$TableDataSource$.$EventType$.SORT, $sortCriteria$$1$$);
      }
    });
    this.$_collection$.on($oj$$69$$.$Events$.$EventType$.CHANGE, function($event$$727$$) {
      $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call($self$$228$$, $oj$$69$$.$TableDataSource$.$EventType$.CHANGE, {data:[$event$$727$$.attributes], keys:[$event$$727$$.id], indexes:[$event$$727$$.index]});
    });
    this.$_collection$.on($oj$$69$$.$Events$.$EventType$.DESTROY, function($event$$728$$) {
      $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call($self$$228$$, $oj$$69$$.$TableDataSource$.$EventType$.DESTROY, $event$$728$$);
    });
    this.$_collection$.on($oj$$69$$.$Events$.$EventType$.REFRESH, function($event$$729$$) {
      $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call($self$$228$$, $oj$$69$$.$TableDataSource$.$EventType$.REFRESH, $event$$729$$);
    });
    this.$_collection$.on($oj$$69$$.$Events$.$EventType$.ERROR, function($collection$$59$$, $xhr$$24$$, $options$$387$$) {
      $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call($self$$228$$, $oj$$69$$.$TableDataSource$.$EventType$.ERROR, $collection$$59$$, $xhr$$24$$, $options$$387$$);
    });
  };
  $oj$$69$$.$CollectionTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$69$$$$CollectionTableDataSource$$$$_fetchInternal$$($options$$388$$) {
    this.$_startFetch$($options$$388$$);
    $options$$388$$ = $options$$388$$ || {};
    var $self$$229$$ = this;
    this.$_isPaged$ = 0 < $options$$388$$.pageSize ? !0 : !1;
    this.$_startIndex$ = null == $options$$388$$.startIndex ? this.$_startIndex$ : $options$$388$$.startIndex;
    this.$_pageSize$ = 0 < $options$$388$$.pageSize ? $options$$388$$.pageSize : -1;
    $options$$388$$.pageSize = this.$_pageSize$;
    $options$$388$$.startIndex = this.$_startIndex$;
    $options$$388$$.refresh = !0;
    return new Promise(function($resolve$$75$$, $reject$$70$$) {
      var $pageSize$$11$$ = $self$$229$$.$_pageSize$;
      $self$$229$$.$_isPaged$ || ($pageSize$$11$$ = 25);
      $self$$229$$.$_collection$.$setRangeLocal$($self$$229$$.$_startIndex$, $pageSize$$11$$).then(function($actual$$6$$) {
        var $result$$77_rowArray$$12$$;
        if ($self$$229$$.$_isPaged$) {
          $result$$77_rowArray$$12$$ = [];
          var $keyArray$$4$$ = [], $i$$459$$, $modelClone$$3$$;
          for ($i$$459$$ = 0;$i$$459$$ < $actual$$6$$.models.length;$i$$459$$++) {
            $modelClone$$3$$ = $actual$$6$$.models[$i$$459$$].clone(), $result$$77_rowArray$$12$$[$i$$459$$] = $modelClone$$3$$.attributes, $keyArray$$4$$[$i$$459$$] = $modelClone$$3$$.id;
          }
          $result$$77_rowArray$$12$$ = {data:$result$$77_rowArray$$12$$, keys:$keyArray$$4$$, startIndex:$self$$229$$.$_startIndex$};
          $actual$$6$$.models.length < $self$$229$$.$_pageSize$ ? 0 > $self$$229$$.totalSize() && ($self$$229$$.$_fetchResultSize$ = $self$$229$$.$_startIndex$ + $actual$$6$$.models.length) : $self$$229$$.$_fetchResultSize$ = null;
        } else {
          $result$$77_rowArray$$12$$ = $self$$229$$.$_getRowArray$();
        }
        $self$$229$$.$_endFetch$.call($self$$229$$, $options$$388$$, $result$$77_rowArray$$12$$, null);
        $resolve$$75$$($result$$77_rowArray$$12$$);
      }, function($error$$49$$) {
        $self$$229$$.$_endFetch$.call($self$$229$$, $options$$388$$, null, $error$$49$$);
        $reject$$70$$($error$$49$$);
      });
    });
  };
  $oj$$69$$.$CollectionTableDataSource$.prototype.$_startFetch$ = function $$oj$$69$$$$CollectionTableDataSource$$$$_startFetch$$($options$$389$$) {
    this.$_isFetching$ = !0;
    $options$$389$$.silent || $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$69$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$389$$.startIndex});
  };
  $oj$$69$$.$CollectionTableDataSource$.prototype.$_endFetch$ = function $$oj$$69$$$$CollectionTableDataSource$$$$_endFetch$$($options$$390$$, $result$$78$$, $error$$50$$) {
    this.$_isFetching$ = !1;
    null != $error$$50$$ ? $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$69$$.$TableDataSource$.$EventType$.ERROR, $error$$50$$) : $options$$390$$.silent || $oj$$69$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$69$$.$TableDataSource$.$EventType$.SYNC, $result$$78$$);
  };
  $oj$$69$$.$CollectionTableDataSource$.prototype.$_getRowArray$ = function $$oj$$69$$$$CollectionTableDataSource$$$$_getRowArray$$() {
    var $endIndex$$19$$ = this.$_collection$.size() - 1, $rowArray$$13$$ = [], $keyArray$$5$$ = [], $i$$460$$, $model$$101_wrappedRow$$2$$, $modelClone$$4$$;
    for ($i$$460$$ = 0;$i$$460$$ <= $endIndex$$19$$;$i$$460$$++) {
      $model$$101_wrappedRow$$2$$ = this.$_collection$.at($i$$460$$), $modelClone$$4$$ = $model$$101_wrappedRow$$2$$.clone(), $model$$101_wrappedRow$$2$$ = this.$_wrapWritableValue$($modelClone$$4$$, $modelClone$$4$$.attributes), $rowArray$$13$$[$i$$460$$] = $model$$101_wrappedRow$$2$$, $keyArray$$5$$[$i$$460$$] = $modelClone$$4$$.id;
    }
    return{data:$rowArray$$13$$, keys:$keyArray$$5$$, startIndex:this.$_startIndex$};
  };
  $oj$$69$$.$CollectionTableDataSource$.prototype.getCapability = function $$oj$$69$$$$CollectionTableDataSource$$$getCapability$() {
    return null;
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.getCapability", {getCapability:$oj$$69$$.$CollectionTableDataSource$.prototype.getCapability});
  $oj$$69$$.$CollectionTableDataSource$.prototype.$_wrapWritableValue$ = function $$oj$$69$$$$CollectionTableDataSource$$$$_wrapWritableValue$$($model$$102$$, $m$$25$$) {
    var $clonedRow$$1$$ = $$$$62$$.extend(!0, {}, $m$$25$$), $prop$$83$$;
    for ($prop$$83$$ in $clonedRow$$1$$) {
      $clonedRow$$1$$.hasOwnProperty($prop$$83$$) && function() {
        var $localProp$$1$$ = $prop$$83$$;
        Object.defineProperty($m$$25$$, $prop$$83$$, {get:function() {
          return $model$$102$$.get($localProp$$1$$);
        }, set:function($newValue$$31$$) {
          $model$$102$$.set($localProp$$1$$, $newValue$$31$$);
        }});
      }();
    }
    return $clonedRow$$1$$;
  };
});
