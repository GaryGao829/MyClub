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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$26$$, $$$$24$$) {
  $oj$$26$$.$ArrayTableDataSource$ = function $$oj$$26$$$$ArrayTableDataSource$$($data$$142$$, $options$$291$$) {
    this.data = {};
    if (!($data$$142$$ instanceof Array) && "function" != typeof $data$$142$$ && "function" != typeof $data$$142$$.$subscribe$) {
      throw Error($oj$$26$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$26$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    null != $options$$291$$ && null != $options$$291$$.idAttribute || $oj$$26$$.$Logger$.info($oj$$26$$.$ArrayTableDataSource$.$_LOGGER_MSG$._INFO_ARRAY_TABLE_DATASOURCE_IDATTR);
    $oj$$26$$.$ArrayTableDataSource$.$superclass$.constructor.call(this, $data$$142$$, $options$$291$$);
    this.$_eventHandlers$ = [];
    this.$_rows$ = {};
    if (null != $data$$142$$ && void 0 !== $data$$142$$ && (this.$_idAttribute$ = null, null != $options$$291$$ && null != $options$$291$$.idAttribute && (this.$_idAttribute$ = $options$$291$$.idAttribute), this.$_data$ = $data$$142$$ instanceof Array ? $data$$142$$ : $data$$142$$(), this.$_totalSize$ = this.$_data$.length, !($data$$142$$ instanceof Array))) {
      var $self$$168$$ = this;
      $data$$142$$.subscribe(function($changes$$5$$) {
        if ($self$$168$$.$_isDataLoaded$()) {
          var $i$$373$$, $rowArray$$3$$ = [], $indexArray$$2$$ = [];
          for ($i$$373$$ = 0;$i$$373$$ < $changes$$5$$.length;$i$$373$$++) {
            "deleted" === $changes$$5$$[$i$$373$$].status && $rowArray$$3$$.push($changes$$5$$[$i$$373$$].value);
          }
          $self$$168$$.remove($rowArray$$3$$, null);
          $rowArray$$3$$ = [];
          $indexArray$$2$$ = [];
          for ($i$$373$$ = 0;$i$$373$$ < $changes$$5$$.length;$i$$373$$++) {
            "added" === $changes$$5$$[$i$$373$$].status && ($rowArray$$3$$.push($changes$$5$$[$i$$373$$].value), $indexArray$$2$$.push($changes$$5$$[$i$$373$$].index));
          }
          $self$$168$$.add($rowArray$$3$$, {at:$indexArray$$2$$});
        }
      }, null, "arrayChange");
    }
    if (null != $options$$291$$ && ("enabled" == $options$$291$$.startFetch || null == $options$$291$$.startFetch) || null == $options$$291$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("ArrayTableDataSource", $oj$$26$$.$ArrayTableDataSource$, $oj$$26$$);
  $oj$$26$$.$Object$.$createSubclass$($oj$$26$$.$ArrayTableDataSource$, $oj$$26$$.$TableDataSource$, "oj.ArrayTableDataSource");
  $oj$$26$$.$ArrayTableDataSource$.prototype.$comparator$ = null;
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.comparator", {$comparator$:$oj$$26$$.$ArrayTableDataSource$.prototype.$comparator$});
  $oj$$26$$.$ArrayTableDataSource$.prototype.sortCriteria = null;
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.sortCriteria", {sortCriteria:$oj$$26$$.$ArrayTableDataSource$.prototype.sortCriteria});
  $oj$$26$$.$ArrayTableDataSource$.prototype.Init = function $$oj$$26$$$$ArrayTableDataSource$$$Init$() {
    $oj$$26$$.$ArrayTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.Init", {Init:$oj$$26$$.$ArrayTableDataSource$.prototype.Init});
  $oj$$26$$.$ArrayTableDataSource$.prototype.add = function $$oj$$26$$$$ArrayTableDataSource$$$add$($m$$19$$, $options$$292$$) {
    $options$$292$$ = $options$$292$$ || {};
    this.$_checkDataLoaded$();
    return this.$_addToRowSet$($m$$19$$, $options$$292$$.at, $options$$292$$);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.add", {add:$oj$$26$$.$ArrayTableDataSource$.prototype.add});
  $oj$$26$$.$ArrayTableDataSource$.prototype.at = function $$oj$$26$$$$ArrayTableDataSource$$$at$($index$$233$$) {
    this.$_checkDataLoaded$();
    var $row$$74$$;
    $row$$74$$ = 0 > $index$$233$$ || $index$$233$$ >= this.$_rows$.data.length ? null : {data:this.$_rows$.data[$index$$233$$], index:$index$$233$$, key:this.$_getId$(this.$_rows$.data[$index$$233$$])};
    return new Promise(function($resolve$$41$$) {
      $resolve$$41$$($row$$74$$);
    });
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.at", {at:$oj$$26$$.$ArrayTableDataSource$.prototype.at});
  $oj$$26$$.$ArrayTableDataSource$.prototype.change = function $$oj$$26$$$$ArrayTableDataSource$$$change$($m$$20$$, $options$$294$$) {
    $options$$294$$ = $options$$294$$ || {};
    this.$_checkDataLoaded$();
    var $silent$$25$$ = $options$$294$$.silent, $i$$374$$, $row$$75$$, $key$$152$$, $changedRow$$, $rowArray$$4$$ = {data:[], keys:[], indexes:[]};
    $m$$20$$ instanceof Array || ($m$$20$$ = [$m$$20$$]);
    for ($i$$374$$ = 0;$i$$374$$ < $m$$20$$.length;$i$$374$$++) {
      $row$$75$$ = $m$$20$$[$i$$374$$], null != $row$$75$$ && ($key$$152$$ = this.$_getId$($row$$75$$), $changedRow$$ = this.$_getInternal$($key$$152$$, null), $rowArray$$4$$.data.push($row$$75$$), $rowArray$$4$$.keys.push($key$$152$$), $rowArray$$4$$.indexes.push($changedRow$$.index), this.$_rows$.data[$changedRow$$.index] = $row$$75$$);
    }
    !$silent$$25$$ && 0 < $rowArray$$4$$.data.length && $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.CHANGE, $rowArray$$4$$);
    return Promise.resolve($rowArray$$4$$);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.change", {change:$oj$$26$$.$ArrayTableDataSource$.prototype.change});
  $oj$$26$$.$ArrayTableDataSource$.prototype.fetch = function $$oj$$26$$$$ArrayTableDataSource$$$fetch$($options$$295$$) {
    $options$$295$$ = $options$$295$$ || {};
    return "init" != $options$$295$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$295$$) : Promise.resolve();
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.fetch", {fetch:$oj$$26$$.$ArrayTableDataSource$.prototype.fetch});
  $oj$$26$$.$ArrayTableDataSource$.prototype.get = function $$oj$$26$$$$ArrayTableDataSource$$$get$($id$$46$$, $options$$296$$) {
    $options$$296$$ = $options$$296$$ || {};
    this.$_checkDataLoaded$();
    return Promise.resolve(this.$_getInternal$($id$$46$$, $options$$296$$));
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.get", {get:$oj$$26$$.$ArrayTableDataSource$.prototype.get});
  $oj$$26$$.$ArrayTableDataSource$.prototype.getCapability = function $$oj$$26$$$$ArrayTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.getCapability", {getCapability:$oj$$26$$.$ArrayTableDataSource$.prototype.getCapability});
  $oj$$26$$.$ArrayTableDataSource$.prototype.remove = function $$oj$$26$$$$ArrayTableDataSource$$$remove$($m$$21$$, $options$$297$$) {
    $options$$297$$ = $options$$297$$ || {};
    this.$_checkDataLoaded$();
    return this.$_removeInternal$($m$$21$$, $options$$297$$);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.remove", {remove:$oj$$26$$.$ArrayTableDataSource$.prototype.remove});
  $oj$$26$$.$ArrayTableDataSource$.prototype.reset = function $$oj$$26$$$$ArrayTableDataSource$$$reset$($data$$143$$, $options$$298$$) {
    $options$$298$$ = $options$$298$$ || {};
    $options$$298$$.previousRows = this.$_rows$;
    var $silent$$26$$ = $options$$298$$.silent;
    null != $data$$143$$ && (this.$_data$ = $data$$143$$);
    this.$_rows$ = {};
    this.$_totalSize$ = 0;
    $silent$$26$$ || $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.RESET, null);
    return Promise.resolve();
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.reset", {reset:$oj$$26$$.$ArrayTableDataSource$.prototype.reset});
  $oj$$26$$.$ArrayTableDataSource$.prototype.sort = function $$oj$$26$$$$ArrayTableDataSource$$$sort$($criteria$$2$$) {
    null == $criteria$$2$$ ? $criteria$$2$$ = this.sortCriteria : this.sortCriteria = $criteria$$2$$;
    this.$_checkDataLoaded$();
    var $self$$169$$ = this;
    return new Promise(function($resolve$$42$$) {
      $criteria$$2$$ = $criteria$$2$$ || {};
      var $comparator$$9$$ = $self$$169$$.$_getComparator$();
      $self$$169$$.$_rows$.data.sort(function($a$$106$$, $b$$61$$) {
        return $oj$$26$$.$ArrayTableDataSource$.$_sortFunc$($a$$106$$, $b$$61$$, $comparator$$9$$, $self$$169$$);
      });
      $self$$169$$.$_sorted$ = !0;
      var $result$$59$$ = {header:$criteria$$2$$.key, direction:$criteria$$2$$.direction};
      $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call($self$$169$$, $oj$$26$$.$TableDataSource$.$EventType$.SORT, $result$$59$$);
      $resolve$$42$$($result$$59$$);
    });
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.sort", {sort:$oj$$26$$.$ArrayTableDataSource$.prototype.sort});
  $oj$$26$$.$ArrayTableDataSource$.prototype.totalSize = function $$oj$$26$$$$ArrayTableDataSource$$$totalSize$() {
    return this.$_totalSize$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.totalSize", {totalSize:$oj$$26$$.$ArrayTableDataSource$.prototype.totalSize});
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_addToRowSet$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_addToRowSet$$($m$$22$$, $index$$234$$, $i$$376_options$$299$$) {
    var $j$$53_key$$153$$, $row$$76$$;
    $i$$376_options$$299$$ = $i$$376_options$$299$$ || {};
    var $silent$$27$$ = $i$$376_options$$299$$.silent, $rowArray$$5$$ = {data:[], keys:[], indexes:[]};
    $m$$22$$ instanceof Array || ($m$$22$$ = [$m$$22$$]);
    null == $index$$234$$ || $index$$234$$ instanceof Array || ($index$$234$$ = [$index$$234$$]);
    for ($i$$376_options$$299$$ = 0;$i$$376_options$$299$$ < $m$$22$$.length;$i$$376_options$$299$$++) {
      if ($row$$76$$ = $m$$22$$[$i$$376_options$$299$$], null != $row$$76$$) {
        $j$$53_key$$153$$ = this.$_getId$($row$$76$$);
        $rowArray$$5$$.data.push($row$$76$$);
        $rowArray$$5$$.keys.push($j$$53_key$$153$$);
        if (!0 == this.$_sorted$ && 0 < this.$_rows$.data.length) {
          for ($j$$53_key$$153$$ = 0;$j$$53_key$$153$$ < this.$_rows$.data.length;$j$$53_key$$153$$++) {
            if (0 > $oj$$26$$.$ArrayTableDataSource$.$_sortFunc$($row$$76$$, this.$_rows$.data[$j$$53_key$$153$$], this.$_getComparator$(), this)) {
              this.$_rows$.data.splice($j$$53_key$$153$$, 0, $row$$76$$);
              $rowArray$$5$$.indexes.push($j$$53_key$$153$$);
              break;
            } else {
              if ($j$$53_key$$153$$ == this.$_rows$.data.length - 1) {
                this.$_rows$.data.push($row$$76$$);
                $rowArray$$5$$.indexes.push($j$$53_key$$153$$ + 1);
                break;
              }
            }
          }
        } else {
          null == $index$$234$$ ? (this.$_rows$.data.push($row$$76$$), $rowArray$$5$$.indexes.push(this.$_rows$.data.length - 1)) : (this.$_rows$.data.splice($index$$234$$[$i$$376_options$$299$$], 0, $row$$76$$), $rowArray$$5$$.indexes.push($index$$234$$[$i$$376_options$$299$$]));
        }
        this.$_totalSize$++;
        this.$_realignRowIndices$();
      }
    }
    !$silent$$27$$ && 0 < $rowArray$$5$$.data.length && $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.ADD, $rowArray$$5$$);
    return Promise.resolve($rowArray$$5$$);
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_checkDataLoaded$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_checkDataLoaded$$() {
    this.$_isDataLoaded$() || (this.$_rows$ = this.$_getRowArray$(this.$_data$), this.$_totalSize$ = this.$_data$.length);
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_isDataLoaded$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_isDataLoaded$$() {
    return null == this.$_rows$ || null == this.$_rows$.data ? !1 : !0;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_fetchInternal$$($options$$300$$) {
    $options$$300$$ = $options$$300$$ || {};
    this.$_startFetch$($options$$300$$);
    this.$_checkDataLoaded$();
    var $pageSize$$5_result$$60$$;
    try {
      $pageSize$$5_result$$60$$ = 0 < $options$$300$$.pageSize ? $options$$300$$.pageSize : -1;
      this.$_startIndex$ || (this.$_startIndex$ = 0);
      this.$_startIndex$ = null == $options$$300$$.startIndex ? this.$_startIndex$ : $options$$300$$.startIndex;
      var $endIndex$$16$$ = $oj$$26$$.$ArrayTableDataSource$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, $pageSize$$5_result$$60$$), $rowArray$$6$$ = [], $keyArray$$ = [], $i$$377$$, $wrappedRow$$;
      for ($i$$377$$ = this.$_startIndex$;$i$$377$$ <= $endIndex$$16$$;$i$$377$$++) {
        $wrappedRow$$ = this.$_wrapWritableValue$($i$$377$$, this.$_rows$.data[$i$$377$$]), $rowArray$$6$$[$i$$377$$ - this.$_startIndex$] = $wrappedRow$$, $keyArray$$[$i$$377$$ - this.$_startIndex$] = this.$_getId$(this.$_rows$.data[$i$$377$$]);
      }
    } catch ($err$$21$$) {
      return this.$_endFetch$($options$$300$$, null, $err$$21$$), Promise.reject($err$$21$$);
    }
    $endIndex$$16$$ < this.$_startIndex$ && (this.$_startIndex$ = $endIndex$$16$$ + 1);
    $options$$300$$.pageSize = $pageSize$$5_result$$60$$;
    $options$$300$$.startIndex = this.$_startIndex$;
    $options$$300$$.refresh = !0;
    $pageSize$$5_result$$60$$ = {data:$rowArray$$6$$, keys:$keyArray$$, startIndex:this.$_startIndex$};
    this.$_endFetch$($options$$300$$, $pageSize$$5_result$$60$$, null);
    return Promise.resolve($pageSize$$5_result$$60$$);
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getInternal$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getInternal$$($id$$47$$) {
    var $i$$378$$, $j$$54_wrappedRow$$1$$, $row$$77$$, $key$$154$$, $result$$61$$ = null;
    for ($i$$378$$ = 0;$i$$378$$ < this.$_rows$.data.length;$i$$378$$++) {
      if ($row$$77$$ = this.$_rows$.data[$i$$378$$], void 0 !== $row$$77$$) {
        if ($key$$154$$ = this.$_getId$($row$$77$$), $$$$24$$.isArray($key$$154$$) && $$$$24$$.isArray($id$$47$$)) {
          if ($key$$154$$.length == $id$$47$$.length) {
            var $equal$$ = !0;
            for ($j$$54_wrappedRow$$1$$ = 0;$j$$54_wrappedRow$$1$$ < $id$$47$$.length;$j$$54_wrappedRow$$1$$++) {
              if ($key$$154$$[$j$$54_wrappedRow$$1$$] != $id$$47$$[$j$$54_wrappedRow$$1$$]) {
                $equal$$ = !1;
                break;
              }
            }
            $equal$$ && ($j$$54_wrappedRow$$1$$ = this.$_wrapWritableValue$($i$$378$$, $row$$77$$), $result$$61$$ = {data:$j$$54_wrappedRow$$1$$, key:$key$$154$$, index:this.$_rows$.indexes[$i$$378$$]});
          }
        } else {
          $key$$154$$ == $id$$47$$ && ($j$$54_wrappedRow$$1$$ = this.$_wrapWritableValue$($i$$378$$, $row$$77$$), $result$$61$$ = {data:$j$$54_wrappedRow$$1$$, key:$key$$154$$, index:this.$_rows$.indexes[$i$$378$$]});
        }
      }
    }
    return $result$$61$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getComparator$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getComparator$$() {
    var $comparator$$10$$ = this.comparator;
    if (null == $comparator$$10$$) {
      var $key$$155$$ = this.sortCriteria.key, $direction$$13$$ = this.sortCriteria.direction;
      "ascending" == $direction$$13$$ ? $comparator$$10$$ = function $$comparator$$10$$$($row$$78$$) {
        return $$$$24$$.isFunction($row$$78$$[$key$$155$$]) ? $row$$78$$[$key$$155$$]() : $row$$78$$[$key$$155$$];
      } : "descending" == $direction$$13$$ && ($comparator$$10$$ = function $$comparator$$10$$$($rowA$$, $rowB$$) {
        var $a$$107$$, $b$$62$$;
        $$$$24$$.isFunction($rowA$$[$key$$155$$]) ? ($a$$107$$ = $rowA$$[$key$$155$$](), $b$$62$$ = $rowB$$[$key$$155$$]()) : ($a$$107$$ = $rowA$$[$key$$155$$], $b$$62$$ = $rowB$$[$key$$155$$]);
        return $a$$107$$ === $b$$62$$ ? 0 : $a$$107$$ > $b$$62$$ ? -1 : 1;
      });
    }
    return $comparator$$10$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_realignRowIndices$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_realignRowIndices$$() {
    for (var $i$$379$$ = 0;$i$$379$$ < this.$_rows$.data.length;$i$$379$$++) {
      this.$_rows$.indexes[$i$$379$$] = $i$$379$$;
    }
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_removeInternal$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_removeInternal$$($m$$23$$, $options$$302$$) {
    var $i$$380$$, $deletedRow_key$$156_row$$79$$;
    $options$$302$$ = $options$$302$$ || {};
    var $silent$$28$$ = $options$$302$$.silent, $rowArray$$7$$ = {data:[], keys:[], indexes:[]};
    $m$$23$$ instanceof Array || ($m$$23$$ = [$m$$23$$]);
    var $sortedRowArray$$ = [];
    for ($i$$380$$ = 0;$i$$380$$ < $m$$23$$.length;$i$$380$$++) {
      $deletedRow_key$$156_row$$79$$ = $m$$23$$[$i$$380$$], null != $deletedRow_key$$156_row$$79$$ && ($deletedRow_key$$156_row$$79$$ = this.$_getId$($deletedRow_key$$156_row$$79$$), $deletedRow_key$$156_row$$79$$ = this.$_getInternal$($deletedRow_key$$156_row$$79$$, null), null != $deletedRow_key$$156_row$$79$$ && $sortedRowArray$$.push({data:$deletedRow_key$$156_row$$79$$.data, key:$deletedRow_key$$156_row$$79$$.key, index:$deletedRow_key$$156_row$$79$$.index}));
    }
    $sortedRowArray$$.sort(function($a$$108$$, $b$$63$$) {
      return $a$$108$$.index - $b$$63$$.index;
    });
    for ($i$$380$$ = 0;$i$$380$$ < $sortedRowArray$$.length;$i$$380$$++) {
      $rowArray$$7$$.data.push($sortedRowArray$$[$i$$380$$].data), $rowArray$$7$$.keys.push($sortedRowArray$$[$i$$380$$].key), $rowArray$$7$$.indexes.push($sortedRowArray$$[$i$$380$$].index);
    }
    for ($i$$380$$ = $rowArray$$7$$.indexes.length - 1;0 <= $i$$380$$;$i$$380$$--) {
      this.$_rows$.data.splice($rowArray$$7$$.indexes[$i$$380$$], 1), this.$_rows$.indexes.splice($rowArray$$7$$.indexes[$i$$380$$], 1), this.$_totalSize$--, this.$_realignRowIndices$();
    }
    !$silent$$28$$ && 0 < $rowArray$$7$$.data.length && $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.REMOVE, $rowArray$$7$$);
    return Promise.resolve($rowArray$$7$$);
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_startFetch$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_startFetch$$($options$$303$$) {
    $options$$303$$.silent || $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$303$$.startIndex});
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_endFetch$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_endFetch$$($options$$304$$, $result$$62$$, $error$$40$$) {
    null != $error$$40$$ ? $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.ERROR, $error$$40$$) : $options$$304$$.silent || $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.SYNC, $result$$62$$);
  };
  $oj$$26$$.$ArrayTableDataSource$.$_compareKeys$ = function $$oj$$26$$$$ArrayTableDataSource$$$_compareKeys$$($keyA$$4$$, $keyB$$4$$, $direction$$14$$) {
    if ("descending" == $direction$$14$$) {
      if ($keyA$$4$$ < $keyB$$4$$) {
        return 1;
      }
      if ($keyB$$4$$ < $keyA$$4$$) {
        return-1;
      }
    } else {
      if ($keyA$$4$$ > $keyB$$4$$) {
        return 1;
      }
      if ($keyB$$4$$ > $keyA$$4$$) {
        return-1;
      }
    }
    return 0;
  };
  $oj$$26$$.$ArrayTableDataSource$.$_getEndIndex$ = function $$oj$$26$$$$ArrayTableDataSource$$$_getEndIndex$$($rows$$16$$, $startIndex$$39$$, $pageSize$$6$$) {
    var $endIndex$$17$$ = $rows$$16$$.data.length - 1;
    0 < $pageSize$$6$$ && ($endIndex$$17$$ = $startIndex$$39$$ + $pageSize$$6$$ - 1, $endIndex$$17$$ = $endIndex$$17$$ > $rows$$16$$.data.length - 1 ? $rows$$16$$.data.length - 1 : $endIndex$$17$$);
    return $endIndex$$17$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.$_getKey$ = function $$oj$$26$$$$ArrayTableDataSource$$$_getKey$$($val$$59$$, $attr$$20$$) {
    return $$$$24$$.isFunction($val$$59$$[$attr$$20$$]) ? $val$$59$$[$attr$$20$$]() : $val$$59$$[$attr$$20$$];
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getRowArray$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getRowArray$$($values$$14$$) {
    var $endIndex$$18$$ = $values$$14$$.length - 1, $rowArray$$8$$ = {}, $i$$381$$, $prop$$72$$;
    $rowArray$$8$$.data = [];
    $rowArray$$8$$.indexes = [];
    this.$_attributes$ = null;
    for ($i$$381$$ = 0;$i$$381$$ <= $endIndex$$18$$;$i$$381$$++) {
      var $clonedRowValues$$ = {}, $rowValues$$ = $values$$14$$[$i$$381$$];
      for ($prop$$72$$ in $rowValues$$) {
        $rowValues$$.hasOwnProperty($prop$$72$$) && ($clonedRowValues$$[$prop$$72$$] = $rowValues$$[$prop$$72$$], 0 == $i$$381$$ && (null == this.$_attributes$ && (this.$_attributes$ = []), this.$_attributes$.push($prop$$72$$)));
      }
      $rowArray$$8$$.data[$i$$381$$] = $clonedRowValues$$;
      $rowArray$$8$$.indexes[$i$$381$$] = $i$$381$$;
    }
    return $rowArray$$8$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getId$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getId$$($errDetail$$8_row$$81$$) {
    var $id$$48$$, $idAttribute$$ = this.$_getIdAttr$($errDetail$$8_row$$81$$);
    if ($$$$24$$.isArray($idAttribute$$)) {
      var $i$$382$$;
      $id$$48$$ = [];
      for ($i$$382$$ = 0;$i$$382$$ < $idAttribute$$.length;$i$$382$$++) {
        if ($idAttribute$$[$i$$382$$] in $errDetail$$8_row$$81$$) {
          $id$$48$$[$i$$382$$] = $oj$$26$$.$ArrayTableDataSource$.$_getKey$($errDetail$$8_row$$81$$, $idAttribute$$[$i$$382$$]);
        } else {
          throw $errDetail$$8_row$$81$$ = $oj$$26$$.$Translations$.$applyParameters$($oj$$26$$.$ArrayTableDataSource$.$_LOGGER_MSG$._ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW, [$idAttribute$$[$i$$382$$]]), Error($errDetail$$8_row$$81$$);
        }
      }
    } else {
      if ($idAttribute$$ in $errDetail$$8_row$$81$$) {
        $id$$48$$ = $oj$$26$$.$ArrayTableDataSource$.$_getKey$($errDetail$$8_row$$81$$, $idAttribute$$);
      } else {
        throw $errDetail$$8_row$$81$$ = $oj$$26$$.$Translations$.$applyParameters$($oj$$26$$.$ArrayTableDataSource$.$_LOGGER_MSG$._ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW, [$idAttribute$$]), Error($errDetail$$8_row$$81$$);
      }
    }
    return $id$$48$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getIdAttr$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getIdAttr$$($row$$82$$) {
    if (null != this.$_idAttribute$) {
      return this.$_idAttribute$;
    }
    if (null == this.$_attributes$) {
      this.$_attributes$ = [];
      for (var $prop$$73$$ in $row$$82$$) {
        $row$$82$$.hasOwnProperty($prop$$73$$) && this.$_attributes$.push($prop$$73$$);
      }
    }
    return this.$_attributes$.hasOwnProperty("id") ? "id" : this.$_attributes$;
  };
  $oj$$26$$.$ArrayTableDataSource$.$_sortFunc$ = function $$oj$$26$$$$ArrayTableDataSource$$$_sortFunc$$($a$$109_attrs1$$2$$, $attrs2$$2_b$$64$$, $comparator$$11_i$$383$$, $keyB$$5_self$$172$$) {
    var $keyA$$5_retVal$$16$$, $direction$$15$$ = $keyB$$5_self$$172$$.sortCriteria.direction;
    if ($$$$24$$.isFunction($comparator$$11_i$$383$$)) {
      if (1 === $comparator$$11_i$$383$$.length) {
        $keyA$$5_retVal$$16$$ = $comparator$$11_i$$383$$.call($keyB$$5_self$$172$$, $a$$109_attrs1$$2$$);
        $keyB$$5_self$$172$$ = $comparator$$11_i$$383$$.call($keyB$$5_self$$172$$, $attrs2$$2_b$$64$$);
        $a$$109_attrs1$$2$$ = $oj$$26$$.$StringUtils$.$isString$($keyA$$5_retVal$$16$$) ? $keyA$$5_retVal$$16$$.split(",") : [$keyA$$5_retVal$$16$$];
        $attrs2$$2_b$$64$$ = $oj$$26$$.$StringUtils$.$isString$($keyB$$5_self$$172$$) ? $keyB$$5_self$$172$$.split(",") : [$keyB$$5_self$$172$$];
        for ($comparator$$11_i$$383$$ = 0;$comparator$$11_i$$383$$ < $a$$109_attrs1$$2$$.length;$comparator$$11_i$$383$$++) {
          if ($keyA$$5_retVal$$16$$ = $oj$$26$$.$ArrayTableDataSource$.$_compareKeys$($a$$109_attrs1$$2$$[$comparator$$11_i$$383$$], $attrs2$$2_b$$64$$[$comparator$$11_i$$383$$], $direction$$15$$), 0 !== $keyA$$5_retVal$$16$$) {
            return $keyA$$5_retVal$$16$$;
          }
        }
        return 0;
      }
      return $comparator$$11_i$$383$$.call($keyB$$5_self$$172$$, $a$$109_attrs1$$2$$, $attrs2$$2_b$$64$$);
    }
    if ($oj$$26$$.$StringUtils$.$isString$($comparator$$11_i$$383$$)) {
      var $attrs$$21$$ = $comparator$$11_i$$383$$.split(",");
      for ($comparator$$11_i$$383$$ = 0;$comparator$$11_i$$383$$ < $attrs$$21$$.length;$comparator$$11_i$$383$$++) {
        if ($keyA$$5_retVal$$16$$ = $oj$$26$$.$ArrayTableDataSource$.$_getKey$($a$$109_attrs1$$2$$, $attrs$$21$$[$comparator$$11_i$$383$$]), $keyB$$5_self$$172$$ = $oj$$26$$.$ArrayTableDataSource$.$_getKey$($attrs2$$2_b$$64$$, $attrs$$21$$[$comparator$$11_i$$383$$]), $keyA$$5_retVal$$16$$ = $oj$$26$$.$ArrayTableDataSource$.$_compareKeys$($keyA$$5_retVal$$16$$, $keyB$$5_self$$172$$, $direction$$15$$), 0 !== $keyA$$5_retVal$$16$$) {
          return $keyA$$5_retVal$$16$$;
        }
      }
    }
    return 0;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_wrapWritableValue$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_wrapWritableValue$$($index$$236$$, $m$$24$$) {
    var $clonedRow$$ = $$$$24$$.extend(!0, {}, $m$$24$$), $self$$173$$ = this, $prop$$74$$;
    for ($prop$$74$$ in $clonedRow$$) {
      $clonedRow$$.hasOwnProperty($prop$$74$$) && function() {
        var $localProp$$ = $prop$$74$$;
        Object.defineProperty($clonedRow$$, $prop$$74$$, {get:function() {
          return $self$$173$$.$_rows$.data[$index$$236$$][$localProp$$];
        }, set:function($newValue$$21$$) {
          $self$$173$$.$_rows$.data[$index$$236$$][$localProp$$] = $newValue$$21$$;
        }});
      }();
    }
    return $clonedRow$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.$_LOGGER_MSG$ = {_INFO_ARRAY_TABLE_DATASOURCE_IDATTR:"idAttribute option has not been specified. Will default to using 'id' if the field exists. If not, will use all the fields.", _ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW:"Specified idAttribute {0} not in row data. Please ensure all specified idAttribute fields are in the row data or do not specify idAttribute and all fields will be used as id."};
});
