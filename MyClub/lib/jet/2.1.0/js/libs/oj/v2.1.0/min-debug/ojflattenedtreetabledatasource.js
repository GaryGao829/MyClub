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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$83$$, $$$$75$$) {
  $oj$$83$$.$FlattenedTreeTableDataSource$ = function $$oj$$83$$$$FlattenedTreeTableDataSource$$($data$$185$$, $options$$443$$) {
    $options$$443$$ = $options$$443$$ || {};
    if (!($data$$185$$ instanceof $oj$$83$$.$FlattenedTreeDataSource$)) {
      throw Error($oj$$83$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$83$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$_data$ = $data$$185$$;
    this.$_eventHandlers$ = [];
    this.$_startIndex$ = 0;
    this.$_nodeSetList$ = [];
    null == this.$_data$.$getOption$("fetchSize") && (this.$_data$.$getFetchSize$ = function $this$$_data$$$getFetchSize$$() {
      return-1;
    });
    var $self$$252$$ = this;
    this.$_data$.$insertRows$ = function $this$$_data$$$insertRows$$($insertAtIndex$$2$$, $i$$556_insertAtKey$$1$$, $nodeSet$$35$$) {
      var $j$$61$$, $row$$95$$, $rowIdx$$47$$, $rowKey$$57$$, $rowArray$$14$$ = [], $keyArray$$6$$ = [], $indexArray$$5$$ = [];
      for ($i$$556_insertAtKey$$1$$ = 0;$i$$556_insertAtKey$$1$$ < $nodeSet$$35$$.getCount();$i$$556_insertAtKey$$1$$++) {
        $row$$95$$ = $nodeSet$$35$$.getData($i$$556_insertAtKey$$1$$);
        $rowKey$$57$$ = $nodeSet$$35$$.getMetadata($i$$556_insertAtKey$$1$$).key;
        $rowIdx$$47$$ = $insertAtIndex$$2$$ + $i$$556_insertAtKey$$1$$;
        $self$$252$$.$_nodeSetList$.splice($rowIdx$$47$$, 0, {});
        $self$$252$$.$_nodeSetList$[$rowIdx$$47$$].nodeSet = $nodeSet$$35$$;
        $self$$252$$.$_nodeSetList$[$rowIdx$$47$$].startIndex = $insertAtIndex$$2$$;
        for ($j$$61$$ = $rowIdx$$47$$ + 1;$j$$61$$ < $self$$252$$.$_nodeSetList$.length;$j$$61$$++) {
          $self$$252$$.$_nodeSetList$[$j$$61$$].startIndex += 1;
        }
        $rowArray$$14$$.push($self$$252$$.$_wrapWritableValue$($rowIdx$$47$$, $row$$95$$));
        $keyArray$$6$$.push($rowKey$$57$$);
        $indexArray$$5$$.push($rowIdx$$47$$);
        $self$$252$$.$_rows$.data.splice($rowIdx$$47$$, 0, $row$$95$$);
        $self$$252$$.$_rows$.keys.splice($rowIdx$$47$$, 0, $rowKey$$57$$);
        $self$$252$$.$_rows$.indexes.splice($rowIdx$$47$$, 0, $rowIdx$$47$$);
      }
      $self$$252$$.$_pageSize$ || $oj$$83$$.$TableDataSource$.$superclass$.handleEvent.call($self$$252$$, $oj$$83$$.$TableDataSource$.$EventType$.ADD, {data:$rowArray$$14$$, keys:$keyArray$$6$$, indexes:$indexArray$$5$$});
      $self$$252$$.$_realignRowIndices$();
      $self$$252$$.$_pageSize$ && setTimeout(function() {
        $self$$252$$.$_data$.refresh();
        $self$$252$$.$_rows$ = null;
        $self$$252$$.fetch();
      }, 0);
    };
    this.$_data$.$removeRows$ = function $this$$_data$$$removeRows$$($rowKeys$$2$$) {
      var $i$$557$$, $j$$62$$, $rowIdx$$48$$, $rowArray$$15$$ = [], $keyArray$$7$$ = [], $indexArray$$6$$ = [];
      for ($i$$557$$ = 0;$i$$557$$ < $rowKeys$$2$$.length;$i$$557$$++) {
        $rowIdx$$48$$ = $rowKeys$$2$$[$i$$557$$].index - $i$$557$$;
        $rowArray$$15$$.push("");
        $keyArray$$7$$.push("");
        $indexArray$$6$$.push($rowIdx$$48$$);
        $self$$252$$.$_nodeSetList$.splice($rowIdx$$48$$, 1);
        for ($j$$62$$ = $rowIdx$$48$$ + 1;$j$$62$$ < $self$$252$$.$_nodeSetList$.length;$j$$62$$++) {
          $self$$252$$.$_nodeSetList$[$j$$62$$].startIndex -= 1;
        }
        $self$$252$$.$_rows$.data.splice($rowIdx$$48$$, 1);
        $self$$252$$.$_rows$.keys.splice($rowIdx$$48$$, 1);
        $self$$252$$.$_rows$.indexes.splice($rowIdx$$48$$, 1);
      }
      $self$$252$$.$_pageSize$ || $oj$$83$$.$TableDataSource$.$superclass$.handleEvent.call($self$$252$$, $oj$$83$$.$TableDataSource$.$EventType$.REMOVE, {data:$rowArray$$15$$, keys:$keyArray$$7$$, indexes:$indexArray$$6$$});
      $self$$252$$.$_realignRowIndices$();
      $self$$252$$.$_pageSize$ && setTimeout(function() {
        $self$$252$$.$_data$.refresh();
        $self$$252$$.$_rows$ = null;
        $self$$252$$.fetch();
      }, 0);
    };
    this.Init();
    if (null != $options$$443$$ && ("enabled" == $options$$443$$.startFetch || null == $options$$443$$.startFetch) || null == $options$$443$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("FlattenedTreeTableDataSource", $oj$$83$$.$FlattenedTreeTableDataSource$, $oj$$83$$);
  $oj$$83$$.$Object$.$createSubclass$($oj$$83$$.$FlattenedTreeTableDataSource$, $oj$$83$$.$TableDataSource$, "oj.FlattenedTreeTableDataSource");
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.Init = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$Init$() {
    $oj$$83$$.$FlattenedTreeTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.Init", {Init:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.Init});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.getCapability = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getCapability", {getCapability:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.getCapability});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$getWrappedDataSource$() {
    return this.$_data$;
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.fetch = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$fetch$($options$$444$$) {
    $options$$444$$ = $options$$444$$ || {};
    return "init" != $options$$444$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$444$$) : Promise.resolve();
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.fetch", {fetch:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.fetch});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.at = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$at$($index$$351$$) {
    var $row$$97$$;
    $row$$97$$ = 0 > $index$$351$$ || $index$$351$$ >= this.$_rows$.length ? null : {data:this.$_rows$.data[$index$$351$$], index:$index$$351$$, key:this.$_rows$.keys[$index$$351$$]};
    return new Promise(function($resolve$$82$$) {
      $resolve$$82$$($row$$97$$);
    });
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.at", {at:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.at});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.collapse = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$collapse$($rowKey$$58$$) {
    this.$_data$.collapse($rowKey$$58$$);
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.collapse", {collapse:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.collapse});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.expand = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$expand$($rowKey$$59$$) {
    this.$_data$.expand($rowKey$$59$$);
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.expand", {expand:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.expand});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.get = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$get$($id$$78_result$$83$$) {
    var $rowIdx$$49$$ = this.$_data$.$getIndex$(Object($id$$78_result$$83$$));
    $id$$78_result$$83$$ = {data:this.$_wrapWritableValue$($rowIdx$$49$$, this.$_rows$.data[$rowIdx$$49$$]), key:$id$$78_result$$83$$, index:$rowIdx$$49$$};
    return Promise.resolve($id$$78_result$$83$$);
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.get", {get:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.get});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.on = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$on$($eventType$$57$$, $eventHandler$$7$$) {
    if ("expand" == $eventType$$57$$ || "collapse" == $eventType$$57$$) {
      this.$_data$.on($eventType$$57$$, $eventHandler$$7$$);
    } else {
      $oj$$83$$.$FlattenedTreeTableDataSource$.$superclass$.on.call(this, $eventType$$57$$, $eventHandler$$7$$);
    }
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.on", {on:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.on});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.off = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$off$($eventType$$58$$, $eventHandler$$8$$) {
    "expand" == $eventType$$58$$ || "collapse" == $eventType$$58$$ ? this.$_data$.off($eventType$$58$$, $eventHandler$$8$$) : $oj$$83$$.$FlattenedTreeTableDataSource$.$superclass$.off.call(this, $eventType$$58$$, $eventHandler$$8$$);
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.off", {off:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.off});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.sort = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$sort$($criteria$$12$$) {
    null == $criteria$$12$$ ? $criteria$$12$$ = this.sortCriteria : this.sortCriteria = $criteria$$12$$;
    var $self$$254$$ = this;
    $criteria$$12$$.axis = "column";
    return new Promise(function($resolve$$83$$, $reject$$78$$) {
      $self$$254$$.$_data$.getWrappedDataSource().sort($criteria$$12$$, {success:function() {
        setTimeout(function() {
          $self$$254$$.$_data$.refresh();
          $self$$254$$.$_rows$ = null;
          var $result$$84$$ = {header:$criteria$$12$$.key, direction:$criteria$$12$$.direction};
          $oj$$83$$.$TableDataSource$.$superclass$.handleEvent.call($self$$254$$, $oj$$83$$.$TableDataSource$.$EventType$.SORT, $result$$84$$);
          $resolve$$83$$($result$$84$$);
        }, 0);
      }.bind(this), error:function($status$$35$$) {
        $reject$$78$$($status$$35$$);
      }.bind(this)});
    });
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.sort", {sort:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.sort});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.totalSize = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$totalSize$() {
    return-1;
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSize", {totalSize:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.totalSize});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.totalSizeConfidence = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$totalSizeConfidence$() {
    return "unknown";
  };
  $oj$$83$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$83$$.$FlattenedTreeTableDataSource$.prototype.totalSizeConfidence});
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.$_getMetadata$ = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$$_getMetadata$$($index$$352$$) {
    return this.$_nodeSetList$[$index$$352$$].nodeSet.getMetadata($index$$352$$ - this.$_nodeSetList$[$index$$352$$].startIndex);
  };
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$$_fetchInternal$$($options$$447$$) {
    $options$$447$$ = $options$$447$$ || {};
    this.$_startFetch$($options$$447$$);
    this.$_startIndex$ = null == $options$$447$$.startIndex ? this.$_startIndex$ : $options$$447$$.startIndex;
    var $rangeCount$$1_rowArray$$16$$ = Number.MAX_VALUE;
    this.$_pageSize$ = null == $options$$447$$.pageSize ? this.$_pageSize$ : $options$$447$$.pageSize;
    null != this.$_pageSize$ && ($rangeCount$$1_rowArray$$16$$ = this.$_pageSize$);
    var $startIndex$$43$$ = this.$_startIndex$;
    if (null != this.$_rows$) {
      if (null != this.$_pageSize$) {
        var $endIndex$$20_result$$85$$ = this.$_rows$.data.length - 1;
        if (this.$_startIndex$ + this.$_pageSize$ - 1 <= $endIndex$$20_result$$85$$) {
          var $endIndex$$20_result$$85$$ = $oj$$83$$.$FlattenedTreeTableDataSource$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, this.$_pageSize$), $rangeCount$$1_rowArray$$16$$ = [], $keyArray$$8$$ = [], $i$$558$$;
          for ($i$$558$$ = this.$_startIndex$;$i$$558$$ <= $endIndex$$20_result$$85$$;$i$$558$$++) {
            $rangeCount$$1_rowArray$$16$$[$i$$558$$ - this.$_startIndex$] = this.$_wrapWritableValue$($i$$558$$, this.$_rows$.data[$i$$558$$]), $keyArray$$8$$[$i$$558$$ - this.$_startIndex$] = this.$_getMetadata$($i$$558$$).key;
          }
          $endIndex$$20_result$$85$$ = {data:$rangeCount$$1_rowArray$$16$$, keys:$keyArray$$8$$, startIndex:this.$_startIndex$};
          this.$_endFetch$($options$$447$$, $endIndex$$20_result$$85$$, null);
          return Promise.resolve($endIndex$$20_result$$85$$);
        }
        this.$_startIndex$ <= $endIndex$$20_result$$85$$ && ($startIndex$$43$$ = $endIndex$$20_result$$85$$ + 1);
      } else {
        this.$_data$.refresh(), this.$_rows$ = null;
      }
    } else {
      $startIndex$$43$$ = 0;
    }
    var $rangeOption$$ = {start:$startIndex$$43$$, count:$rangeCount$$1_rowArray$$16$$}, $self$$255$$ = this;
    return new Promise(function($resolve$$84$$, $reject$$79$$) {
      $self$$255$$.$_data$.$fetchRows$($rangeOption$$, {success:function($endIndex$$21_nodeSet$$37_result$$86$$) {
        $self$$255$$.$_handleFetchRowsSuccess$($endIndex$$21_nodeSet$$37_result$$86$$, $startIndex$$43$$);
        $options$$447$$.refresh = !0;
        $endIndex$$21_nodeSet$$37_result$$86$$ = $oj$$83$$.$FlattenedTreeTableDataSource$.$_getEndIndex$($self$$255$$.$_rows$, $self$$255$$.$_startIndex$, $self$$255$$.$_pageSize$);
        var $rowArray$$17$$ = [], $keyArray$$9$$ = [], $i$$559$$;
        for ($i$$559$$ = $self$$255$$.$_startIndex$;$i$$559$$ <= $endIndex$$21_nodeSet$$37_result$$86$$;$i$$559$$++) {
          $rowArray$$17$$[$i$$559$$ - $self$$255$$.$_startIndex$] = $self$$255$$.$_wrapWritableValue$($i$$559$$, $self$$255$$.$_rows$.data[$i$$559$$]), $keyArray$$9$$[$i$$559$$ - $self$$255$$.$_startIndex$] = $self$$255$$.$_getMetadata$($i$$559$$).key;
        }
        $endIndex$$21_nodeSet$$37_result$$86$$ = {data:$rowArray$$17$$, keys:$keyArray$$9$$, startIndex:$self$$255$$.$_startIndex$};
        $self$$255$$.$_endFetch$($options$$447$$, $endIndex$$21_nodeSet$$37_result$$86$$, null);
        $resolve$$84$$($endIndex$$21_nodeSet$$37_result$$86$$);
      }.bind(this), error:function($error$$55$$) {
        $self$$255$$.$_endFetch$($options$$447$$, null, $error$$55$$);
        $reject$$79$$($error$$55$$);
      }.bind(this)});
    });
  };
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$$_handleFetchRowsSuccess$$($nodeSet$$38$$, $startIndex$$44$$) {
    var $i$$560$$, $rowIdx$$50$$;
    for ($i$$560$$ = 0;$i$$560$$ < $nodeSet$$38$$.getCount();$i$$560$$++) {
      $rowIdx$$50$$ = $startIndex$$44$$ + $i$$560$$, this.$_nodeSetList$[$rowIdx$$50$$] = {}, this.$_nodeSetList$[$rowIdx$$50$$].nodeSet = $nodeSet$$38$$, this.$_nodeSetList$[$rowIdx$$50$$].startIndex = $startIndex$$44$$;
    }
    this.$_rows$ || (this.$_rows$ = {}, this.$_rows$.data = [], this.$_rows$.keys = [], this.$_rows$.indexes = []);
    $oj$$83$$.$FlattenedTreeTableDataSource$.$_getRowArray$($nodeSet$$38$$, this, this.$_rows$);
  };
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.$_startFetch$ = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$$_startFetch$$($options$$448$$) {
    $options$$448$$.silent || $oj$$83$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$83$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$448$$.startIndex});
  };
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.$_endFetch$ = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$$_endFetch$$($options$$449$$, $result$$87$$, $error$$56$$) {
    null != $error$$56$$ ? $oj$$83$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$83$$.$TableDataSource$.$EventType$.ERROR, $error$$56$$) : $options$$449$$.silent || $oj$$83$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$83$$.$TableDataSource$.$EventType$.SYNC, $result$$87$$);
  };
  $oj$$83$$.$FlattenedTreeTableDataSource$.$_getEndIndex$ = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$_getEndIndex$$($rows$$18$$, $startIndex$$45$$, $pageSize$$14$$) {
    var $endIndex$$22$$ = $rows$$18$$.data.length - 1;
    0 < $pageSize$$14$$ && ($endIndex$$22$$ = $startIndex$$45$$ + $pageSize$$14$$ - 1, $endIndex$$22$$ = $endIndex$$22$$ > $rows$$18$$.data.length - 1 ? $rows$$18$$.data.length - 1 : $endIndex$$22$$);
    return $endIndex$$22$$;
  };
  $oj$$83$$.$FlattenedTreeTableDataSource$.$_getRowArray$ = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$_getRowArray$$($nodeSet$$39$$, $endIndex$$23_rowSet$$, $rows$$19$$) {
    $endIndex$$23_rowSet$$ = $nodeSet$$39$$.getCount() - 1;
    var $i$$561$$;
    for ($i$$561$$ = $nodeSet$$39$$.getStart();$i$$561$$ <= $endIndex$$23_rowSet$$;$i$$561$$++) {
      var $row$$99$$ = $nodeSet$$39$$.getData($i$$561$$);
      $rows$$19$$.data[$i$$561$$] = $row$$99$$;
      $rows$$19$$.keys[$i$$561$$] = "";
      $rows$$19$$.indexes[$i$$561$$] = $i$$561$$;
    }
  };
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.$_realignRowIndices$ = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$$_realignRowIndices$$() {
    for (var $i$$562$$ = 0;$i$$562$$ < this.$_rows$.data.length;$i$$562$$++) {
      this.$_rows$.indexes[$i$$562$$] = $i$$562$$;
    }
  };
  $oj$$83$$.$FlattenedTreeTableDataSource$.prototype.$_wrapWritableValue$ = function $$oj$$83$$$$FlattenedTreeTableDataSource$$$$_wrapWritableValue$$($index$$353$$, $m$$29$$) {
    var $clonedRow$$2$$ = $$$$75$$.extend(!0, {}, $m$$29$$), $self$$256$$ = this, $prop$$89$$;
    for ($prop$$89$$ in $clonedRow$$2$$) {
      $clonedRow$$2$$.hasOwnProperty($prop$$89$$) && function() {
        var $localProp$$2$$ = $prop$$89$$;
        Object.defineProperty($clonedRow$$2$$, $prop$$89$$, {get:function() {
          return $self$$256$$.$_rows$.data[$index$$353$$][$localProp$$2$$];
        }, set:function($newValue$$34$$) {
          $self$$256$$.$_rows$.data[$index$$353$$][$localProp$$2$$] = $newValue$$34$$;
        }});
      }();
    }
    return $clonedRow$$2$$;
  };
});
