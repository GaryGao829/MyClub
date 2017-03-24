/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$60$$) {
  $oj$$60$$.$ArrayDataGridDataSource$ = function $$oj$$60$$$$ArrayDataGridDataSource$$($data$$158$$, $options$$361$$) {
    if (!($data$$158$$ instanceof Array) && "function" != typeof $data$$158$$ && "function" != typeof $data$$158$$.$subscribe$) {
      throw Error("_ERR_DATA_INVALID_TYPE_SUMMARY\n_ERR_DATA_INVALID_TYPE_DETAIL");
    }
    this.$rowHeaderKey$ = this.$_getRowHeaderFromOptions$($options$$361$$);
    null != $options$$361$$ && (this.columns = $options$$361$$.columns, this.sortCriteria = $options$$361$$.initialSort);
    $oj$$60$$.$ArrayDataGridDataSource$.$superclass$.constructor.call(this, $data$$158$$);
  };
  $goog$exportPath_$$("ArrayDataGridDataSource", $oj$$60$$.$ArrayDataGridDataSource$, $oj$$60$$);
  $oj$$60$$.$Object$.$createSubclass$($oj$$60$$.$ArrayDataGridDataSource$, $oj$$60$$.$DataGridDataSource$, "oj.ArrayDataGridDataSource");
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.Init = function $$oj$$60$$$$ArrayDataGridDataSource$$$Init$() {
    null == this.columns && (this.columns = this.$_getColumnsForScaffolding$(this.$getDataArray$()));
    this.$_initializeRowKeys$();
    "function" == typeof this.data && this.data.subscribe(this.$_subscribe$.bind(this), null, "arrayChange");
    $oj$$60$$.$ArrayDataGridDataSource$.$superclass$.Init.call(this);
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.Init", {Init:$oj$$60$$.$ArrayDataGridDataSource$.prototype.Init});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$comparator$ = null;
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.comparator", {$comparator$:$oj$$60$$.$ArrayDataGridDataSource$.prototype.$comparator$});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.sortCriteria = null;
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.sortCriteria", {sortCriteria:$oj$$60$$.$ArrayDataGridDataSource$.prototype.sortCriteria});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_getRowHeaderFromOptions$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_getRowHeaderFromOptions$$($option$$40_options$$362$$) {
    if (null != $option$$40_options$$362$$ && null != $option$$40_options$$362$$.rowHeader) {
      if ($option$$40_options$$362$$ = $option$$40_options$$362$$.rowHeader, "object" === typeof $option$$40_options$$362$$) {
        if (null != $option$$40_options$$362$$["default"] && "none" == $option$$40_options$$362$$["default"]) {
          return;
        }
      } else {
        if (null != $option$$40_options$$362$$) {
          return $option$$40_options$$362$$;
        }
      }
    }
    return "m_defaultIndex";
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_initializeRowKeys$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_initializeRowKeys$$() {
    var $data$$159$$;
    $data$$159$$ = this.$getDataArray$();
    for (this.$lastKey$ = 0;this.$lastKey$ < $data$$159$$.length;this.$lastKey$ += 1) {
      $data$$159$$[this.$lastKey$].ojKey = this.$lastKey$.toString();
    }
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_getColumnsForScaffolding$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_getColumnsForScaffolding$$($data$$160$$) {
    var $propertyName$$8$$, $columns$$26$$;
    if ("number" !== typeof $data$$160$$.length || 0 === $data$$160$$.length) {
      return[];
    }
    $columns$$26$$ = [];
    for ($propertyName$$8$$ in $data$$160$$[0]) {
      $data$$160$$[0].hasOwnProperty($propertyName$$8$$) && (void 0 != this.$rowHeaderKey$ && $propertyName$$8$$ == this.$rowHeaderKey$ || $columns$$26$$.push($propertyName$$8$$));
    }
    return $columns$$26$$;
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.getCount = function $$oj$$60$$$$ArrayDataGridDataSource$$$getCount$($axis$$79$$) {
    return "row" === $axis$$79$$ ? this.$_size$() : "column" === $axis$$79$$ ? this.columns.length : 0;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCount", {getCount:$oj$$60$$.$ArrayDataGridDataSource$.prototype.getCount});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.getCountPrecision = function $$oj$$60$$$$ArrayDataGridDataSource$$$getCountPrecision$() {
    return "exact";
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCountPrecision", {getCountPrecision:$oj$$60$$.$ArrayDataGridDataSource$.prototype.getCountPrecision});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_getHeaderData$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_getHeaderData$$($axis$$81$$, $index$$292$$) {
    var $data$$161$$;
    if ("row" === $axis$$81$$) {
      if (void 0 == this.$rowHeaderKey$) {
        return null;
      }
      if ("m_defaultIndex" == this.$rowHeaderKey$) {
        return this.$_getRowKeyByIndex$($index$$292$$);
      }
      $data$$161$$ = this.$getDataArray$();
      return $data$$161$$[$index$$292$$][this.$rowHeaderKey$];
    }
    if ("column" === $axis$$81$$) {
      return this.columns[$index$$292$$];
    }
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_getHeaderMetadata$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_getHeaderMetadata$$($axis$$82$$, $index$$293$$) {
    var $key$$176$$;
    if ("row" === $axis$$82$$) {
      return{key:this.$_getRowKeyByIndex$($index$$293$$)};
    }
    if ("column" === $axis$$82$$) {
      return $key$$176$$ = this.$_getHeaderData$($axis$$82$$, $index$$293$$), null != this.sortCriteria && this.sortCriteria.key === $key$$176$$ ? {key:this.$_getHeaderData$($axis$$82$$, $index$$293$$), sortDirection:this.sortCriteria.direction} : {key:$key$$176$$};
    }
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.fetchHeaders = function $$oj$$60$$$$ArrayDataGridDataSource$$$fetchHeaders$($headerRange$$18$$, $callbacks$$32$$, $callbackObjects$$16$$) {
    var $axis$$83_headerSet$$15$$, $start$$63$$, $count$$54_end$$20$$, $data$$162$$;
    $axis$$83_headerSet$$15$$ = $headerRange$$18$$.axis;
    $start$$63$$ = $headerRange$$18$$.start;
    $count$$54_end$$20$$ = $headerRange$$18$$.count;
    $start$$63$$ = Math.max(0, $start$$63$$);
    "column" === $axis$$83_headerSet$$15$$ ? $count$$54_end$$20$$ = Math.min(this.columns.length, $start$$63$$ + $count$$54_end$$20$$) : ($data$$162$$ = this.$getDataArray$(), $count$$54_end$$20$$ = void 0 === this.$rowHeaderKey$ ? $start$$63$$ : Math.min($data$$162$$.length, $start$$63$$ + $count$$54_end$$20$$));
    $axis$$83_headerSet$$15$$ = new $oj$$60$$.$ArrayHeaderSet$($start$$63$$, $count$$54_end$$20$$, $axis$$83_headerSet$$15$$, this);
    null != $callbacks$$32$$ && null != $callbacks$$32$$.success && (null == $callbackObjects$$16$$ && ($callbackObjects$$16$$ = {}), $callbacks$$32$$.success.call($callbackObjects$$16$$.success, $axis$$83_headerSet$$15$$, $headerRange$$18$$));
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchHeaders", {fetchHeaders:$oj$$60$$.$ArrayDataGridDataSource$.prototype.fetchHeaders});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_getCellData$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_getCellData$$($row$$84$$, $column$$29$$) {
    var $col$$3$$ = this.columns[$column$$29$$];
    return this.$getDataArray$()[$row$$84$$][$col$$3$$];
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_setCellData$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_setCellData$$($row$$85$$, $column$$30$$, $newValue$$28$$) {
    this.$getDataArray$()[$row$$85$$][this.columns[$column$$30$$]] = $newValue$$28$$;
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_getCellMetadata$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_getCellMetadata$$($row$$86$$, $column$$31$$) {
    return{keys:{row:this.$_getRowKeyByIndex$($row$$86$$), column:this.columns[$column$$31$$]}};
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.fetchCells = function $$oj$$60$$$$ArrayDataGridDataSource$$$fetchCells$($cellRanges$$7$$, $callbacks$$33$$, $callbackObjects$$17$$) {
    var $cellSet$$15_i$$434$$, $cellRange$$12$$, $rowStart$$17$$, $rowEnd$$4$$, $colStart$$3$$, $colEnd$$1$$;
    for ($cellSet$$15_i$$434$$ = 0;$cellSet$$15_i$$434$$ < $cellRanges$$7$$.length;$cellSet$$15_i$$434$$ += 1) {
      $cellRange$$12$$ = $cellRanges$$7$$[$cellSet$$15_i$$434$$], "row" === $cellRange$$12$$.axis ? ($rowStart$$17$$ = $cellRange$$12$$.start, $rowEnd$$4$$ = Math.min(this.$_size$(), $rowStart$$17$$ + $cellRange$$12$$.count)) : "column" === $cellRange$$12$$.axis && ($colStart$$3$$ = $cellRange$$12$$.start, $colEnd$$1$$ = Math.min(this.columns.length, $colStart$$3$$ + $cellRange$$12$$.count));
    }
    void 0 === $rowEnd$$4$$ || void 0 === $colEnd$$1$$ ? null != $callbacks$$33$$ && null != $callbacks$$33$$.error && (null == $callbackObjects$$17$$ && ($callbackObjects$$17$$ = {}), $callbacks$$33$$.error.call($callbackObjects$$17$$.error)) : ($cellSet$$15_i$$434$$ = new $oj$$60$$.$ArrayCellSet$($rowStart$$17$$, $rowEnd$$4$$, $colStart$$3$$, $colEnd$$1$$, this), null != $callbacks$$33$$ && null != $callbacks$$33$$.success && (null == $callbackObjects$$17$$ && ($callbackObjects$$17$$ = {}), $callbacks$$33$$.success.call($callbackObjects$$17$$.success, 
    $cellSet$$15_i$$434$$, $cellRanges$$7$$)));
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchCells", {fetchCells:$oj$$60$$.$ArrayDataGridDataSource$.prototype.fetchCells});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.keys = function $$oj$$60$$$$ArrayDataGridDataSource$$$keys$($indexes$$27$$) {
    var $rowIndex$$19$$ = $indexes$$27$$.row, $columnIndex$$8$$ = $indexes$$27$$.column;
    return new Promise(function($resolve$$62$$) {
      $resolve$$62$$({row:this.$_getRowKeyByIndex$($rowIndex$$19$$), column:this.columns[$columnIndex$$8$$]});
    }.bind(this));
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.keys", {keys:$oj$$60$$.$ArrayDataGridDataSource$.prototype.keys});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.indexes = function $$oj$$60$$$$ArrayDataGridDataSource$$$indexes$($keys$$56$$) {
    var $rowKey$$52$$ = $keys$$56$$.row, $columnKey$$6$$ = $keys$$56$$.column;
    return new Promise(function($resolve$$63$$) {
      $resolve$$63$$({row:this.$_getRowIndexByKey$($rowKey$$52$$), column:this.columns.indexOf($columnKey$$6$$)});
    }.bind(this));
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.indexes", {indexes:$oj$$60$$.$ArrayDataGridDataSource$.prototype.indexes});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.sort = function $$oj$$60$$$$ArrayDataGridDataSource$$$sort$($criteria$$4_headerIndex$$3_headerKey$$2$$, $callbacks$$34$$, $callbackObjects$$18$$) {
    var $sortArray$$ = [], $newColumns$$ = [], $axis$$84_i$$435$$;
    null != $callbacks$$34$$ && null == $callbackObjects$$18$$ && ($callbackObjects$$18$$ = {});
    void 0 == this.$origData$ && (this.$_origSortCriteria$ = this.sortCriteria, this.$origData$ = this.data.slice());
    null == $criteria$$4_headerIndex$$3_headerKey$$2$$ ? $criteria$$4_headerIndex$$3_headerKey$$2$$ = this.sortCriteria : this.sortCriteria = $criteria$$4_headerIndex$$3_headerKey$$2$$;
    if (null == $criteria$$4_headerIndex$$3_headerKey$$2$$) {
      this.$_resetSortOrder$($callbacks$$34$$, $callbackObjects$$18$$);
    } else {
      if ($axis$$84_i$$435$$ = $criteria$$4_headerIndex$$3_headerKey$$2$$.axis, $criteria$$4_headerIndex$$3_headerKey$$2$$ = $criteria$$4_headerIndex$$3_headerKey$$2$$.key, "column" === $axis$$84_i$$435$$) {
        this.$getDataArray$().sort(this.$_getComparator$()), null != $callbacks$$34$$ && null != $callbacks$$34$$.success && $callbacks$$34$$.success.call($callbackObjects$$18$$.success);
      } else {
        if ("row" === $axis$$84_i$$435$$) {
          $criteria$$4_headerIndex$$3_headerKey$$2$$ = this.$_getRowIndexByKey$($criteria$$4_headerIndex$$3_headerKey$$2$$);
          for ($axis$$84_i$$435$$ = 0;$axis$$84_i$$435$$ < this.columns.length;$axis$$84_i$$435$$ += 1) {
            $sortArray$$[$axis$$84_i$$435$$] = this.$getDataArray$()[$criteria$$4_headerIndex$$3_headerKey$$2$$][this.columns[$axis$$84_i$$435$$]];
          }
          $sortArray$$.sort(this.$_getComparator$());
          for ($axis$$84_i$$435$$ = 0;$axis$$84_i$$435$$ < this.columns.length;$axis$$84_i$$435$$ += 1) {
            $newColumns$$[$axis$$84_i$$435$$] = this.columns[$sortArray$$.indexOf(this.$getDataArray$()[$criteria$$4_headerIndex$$3_headerKey$$2$$][this.columns[$axis$$84_i$$435$$]])];
          }
          this.$origColumns$ = this.columns;
          this.columns = $newColumns$$;
          null != $callbacks$$34$$ && null != $callbacks$$34$$.success && $callbacks$$34$$.success.call($callbackObjects$$18$$.success);
        } else {
          null !== $callbacks$$34$$ && null != $callbacks$$34$$.error && $callbacks$$34$$.error.call($callbackObjects$$18$$.error, "Invalid axis value");
        }
      }
    }
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.sort", {sort:$oj$$60$$.$ArrayDataGridDataSource$.prototype.sort});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_resetSortOrder$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_resetSortOrder$$($callbacks$$35$$, $callbackObjects$$19$$) {
    null != this.$origData$ && (this.data = this.$origData$, this.sortCriteria = this.$_origSortCriteria$);
    null != this.$origColumns$ && (this.columns = this.$origColumns$);
    null != $callbacks$$35$$ && null != $callbacks$$35$$.success && $callbacks$$35$$.success.call($callbackObjects$$19$$.success);
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.getCapability = function $$oj$$60$$$$ArrayDataGridDataSource$$$getCapability$($feature$$10$$) {
    return "sort" === $feature$$10$$ ? "column" : "move" === $feature$$10$$ ? "row" : null;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCapability", {getCapability:$oj$$60$$.$ArrayDataGridDataSource$.prototype.getCapability});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_getComparator$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_getComparator$$() {
    var $comparator$$14_key$$177$$, $direction$$23$$, $axis$$85$$;
    $comparator$$14_key$$177$$ = this.comparator;
    return null == $comparator$$14_key$$177$$ ? ($comparator$$14_key$$177$$ = this.sortCriteria.key, $direction$$23$$ = this.sortCriteria.direction, $axis$$85$$ = this.sortCriteria.axis, this.$_naturalSort$($direction$$23$$, $comparator$$14_key$$177$$, $axis$$85$$)) : $comparator$$14_key$$177$$;
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_naturalSort$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_naturalSort$$($direction$$24$$, $key$$178$$, $axis$$86$$) {
    if ("ascending" === $direction$$24$$) {
      return function($a$$116$$, $b$$68$$) {
        var $as$$2$$, $bs$$2$$;
        void 0 != $key$$178$$ && "column" == $axis$$86$$ && ($a$$116$$ instanceof Array ? ($a$$116$$ = $a$$116$$[parseInt($key$$178$$, 10)], $b$$68$$ = $b$$68$$[parseInt($key$$178$$, 10)]) : ($a$$116$$ = $a$$116$$[$key$$178$$], $b$$68$$ = $b$$68$$[$key$$178$$]));
        $as$$2$$ = isNaN($a$$116$$);
        $bs$$2$$ = isNaN($b$$68$$);
        $a$$116$$ instanceof Date && ($a$$116$$ = $a$$116$$.toISOString(), $as$$2$$ = !0);
        $b$$68$$ instanceof Date && ($b$$68$$ = $b$$68$$.toISOString(), $bs$$2$$ = !0);
        return $as$$2$$ && $bs$$2$$ ? $a$$116$$ < $b$$68$$ ? -1 : $a$$116$$ === $b$$68$$ ? 0 : 1 : $as$$2$$ ? 1 : $bs$$2$$ ? -1 : $a$$116$$ - $b$$68$$;
      };
    }
    if ("descending" === $direction$$24$$) {
      return function($a$$117$$, $b$$69$$) {
        var $as$$3$$, $bs$$3$$;
        void 0 != $key$$178$$ && "column" == $axis$$86$$ && ($a$$117$$ instanceof Array ? ($a$$117$$ = $a$$117$$[parseInt($key$$178$$, 10)], $b$$69$$ = $b$$69$$[parseInt($key$$178$$, 10)]) : ($a$$117$$ = $a$$117$$[$key$$178$$], $b$$69$$ = $b$$69$$[$key$$178$$]));
        $as$$3$$ = isNaN($a$$117$$);
        $bs$$3$$ = isNaN($b$$69$$);
        $a$$117$$ instanceof Date && ($a$$117$$ = $a$$117$$.toISOString(), $as$$3$$ = !0);
        $b$$69$$ instanceof Date && ($b$$69$$ = $b$$69$$.toISOString(), $bs$$3$$ = !0);
        return $as$$3$$ && $bs$$3$$ ? $a$$117$$ > $b$$69$$ ? -1 : $a$$117$$ === $b$$69$$ ? 0 : 1 : $as$$3$$ ? -1 : $bs$$3$$ ? 1 : $b$$69$$ - $a$$117$$;
      };
    }
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.move = function $$oj$$60$$$$ArrayDataGridDataSource$$$move$($moveKey$$1$$, $atKey$$1$$) {
    var $atKeyIndex_event$$681_moveKeyIndex$$, $moveData$$;
    $atKeyIndex_event$$681_moveKeyIndex$$ = this.$_getRowIndexByKey$($moveKey$$1$$);
    $moveData$$ = this.data.splice($atKeyIndex_event$$681_moveKeyIndex$$, 1)[0];
    this.data instanceof Array && ($atKeyIndex_event$$681_moveKeyIndex$$ = this.$_getModelEvent$("delete", $moveKey$$1$$, null, $atKeyIndex_event$$681_moveKeyIndex$$, -1, !0), this.handleEvent("change", $atKeyIndex_event$$681_moveKeyIndex$$));
    null === $atKey$$1$$ ? (this.data.push($moveData$$), $atKeyIndex_event$$681_moveKeyIndex$$ = this.data.length - 1) : ($atKeyIndex_event$$681_moveKeyIndex$$ = this.$_getRowIndexByKey$($atKey$$1$$), this.data.splice($atKeyIndex_event$$681_moveKeyIndex$$, 0, $moveData$$));
    this.data instanceof Array && ($atKeyIndex_event$$681_moveKeyIndex$$ = this.$_getModelEvent$("insert", $moveKey$$1$$, null, $atKeyIndex_event$$681_moveKeyIndex$$, -1), this.handleEvent("change", $atKeyIndex_event$$681_moveKeyIndex$$));
    null != this.$origData$ && (this.$origData$ = this.data.slice());
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.move", {move:$oj$$60$$.$ArrayDataGridDataSource$.prototype.move});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.moveOK = function $$oj$$60$$$$ArrayDataGridDataSource$$$moveOK$() {
    return "valid";
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.moveOK", {moveOK:$oj$$60$$.$ArrayDataGridDataSource$.prototype.moveOK});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$getDataArray$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$getDataArray$$() {
    return "function" === typeof this.data ? this.data() : this.data;
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_getRowIndexByKey$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_getRowIndexByKey$$($key$$179$$) {
    var $i$$436$$, $data$$164$$ = this.$getDataArray$();
    for ($i$$436$$ = 0;$i$$436$$ < $data$$164$$.length;$i$$436$$++) {
      if ($data$$164$$[$i$$436$$].ojKey === $key$$179$$) {
        return $i$$436$$;
      }
    }
    return-1;
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_getRowKeyByIndex$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_getRowKeyByIndex$$($index$$294$$) {
    var $data$$165$$ = this.$getDataArray$();
    return $data$$165$$[$index$$294$$] ? $data$$165$$[$index$$294$$].ojKey : null;
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_getModelEvent$$($operation$$8$$, $rowKey$$53$$, $columnKey$$7$$, $rowIndex$$20$$, $columnIndex$$9$$, $silent$$29$$) {
    var $event$$682$$ = {source:this};
    $event$$682$$.operation = $operation$$8$$;
    $event$$682$$.keys = {row:$rowKey$$53$$, column:$columnKey$$7$$};
    $event$$682$$.indexes = {row:$rowIndex$$20$$, column:$columnIndex$$9$$};
    $event$$682$$.silent = $silent$$29$$;
    return $event$$682$$;
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_subscribe$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_subscribe$$($changes$$6$$) {
    var $i$$437$$, $move_rowData$$4_rowKey$$54$$, $change$$5_event$$683_rowIndex$$21$$, $added$$2$$ = !1;
    $move_rowData$$4_rowKey$$54$$ = !1;
    var $keys$$57$$ = [], $indexes$$28$$ = [];
    for ($i$$437$$ = 0;$i$$437$$ < $changes$$6$$.length;$i$$437$$++) {
      $change$$5_event$$683_rowIndex$$21$$ = $changes$$6$$[$i$$437$$];
      if (void 0 !== $change$$5_event$$683_rowIndex$$21$$.moved) {
        $move_rowData$$4_rowKey$$54$$ = !0;
        $change$$5_event$$683_rowIndex$$21$$ = this.$_getModelEvent$("refresh", null, null);
        this.handleEvent("change", $change$$5_event$$683_rowIndex$$21$$);
        break;
      }
      "added" === $change$$5_event$$683_rowIndex$$21$$.status && ($added$$2$$ = !0);
    }
    if (!$move_rowData$$4_rowKey$$54$$) {
      for ($i$$437$$ = 0;$i$$437$$ < $changes$$6$$.length;$i$$437$$++) {
        $change$$5_event$$683_rowIndex$$21$$ = $changes$$6$$[$i$$437$$], "deleted" === $change$$5_event$$683_rowIndex$$21$$.status && ($move_rowData$$4_rowKey$$54$$ = $change$$5_event$$683_rowIndex$$21$$.value, $change$$5_event$$683_rowIndex$$21$$ = $change$$5_event$$683_rowIndex$$21$$.index, $move_rowData$$4_rowKey$$54$$ = $move_rowData$$4_rowKey$$54$$.ojKey, $keys$$57$$.push({row:$move_rowData$$4_rowKey$$54$$, column:-1}), $indexes$$28$$.push({row:$change$$5_event$$683_rowIndex$$21$$, column:-1}))
        ;
      }
      0 < $keys$$57$$.length && ($change$$5_event$$683_rowIndex$$21$$ = {source:this, operation:"delete", keys:$keys$$57$$, indexes:$indexes$$28$$, silent:$added$$2$$}, this.handleEvent("change", $change$$5_event$$683_rowIndex$$21$$));
      for ($i$$437$$ = 0;$i$$437$$ < $changes$$6$$.length;$i$$437$$++) {
        $change$$5_event$$683_rowIndex$$21$$ = $changes$$6$$[$i$$437$$], "added" === $change$$5_event$$683_rowIndex$$21$$.status && ($move_rowData$$4_rowKey$$54$$ = $change$$5_event$$683_rowIndex$$21$$.value, $change$$5_event$$683_rowIndex$$21$$ = $change$$5_event$$683_rowIndex$$21$$.index, null == $move_rowData$$4_rowKey$$54$$.ojKey && ($move_rowData$$4_rowKey$$54$$.ojKey = this.$lastKey$.toString(), this.$lastKey$++), $move_rowData$$4_rowKey$$54$$ = $move_rowData$$4_rowKey$$54$$.ojKey, $change$$5_event$$683_rowIndex$$21$$ = 
        this.$_getModelEvent$("insert", $move_rowData$$4_rowKey$$54$$, null, $change$$5_event$$683_rowIndex$$21$$, -1), this.handleEvent("change", $change$$5_event$$683_rowIndex$$21$$));
      }
    }
    null != this.$origData$ && (this.$origData$ = this.data.slice());
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$_size$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$_size$$() {
    return this.$getDataArray$().length;
  };
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$getRowHeaderKey$$() {
    return this.$rowHeaderKey$;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getRowHeaderKey", {$getRowHeaderKey$:$oj$$60$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.$getColumns$ = function $$oj$$60$$$$ArrayDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$60$$.$ArrayDataGridDataSource$.prototype.$getColumns$});
  $oj$$60$$.$ArrayDataGridDataSource$.prototype.getData = function $$oj$$60$$$$ArrayDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getData", {getData:$oj$$60$$.$ArrayDataGridDataSource$.prototype.getData});
  $oj$$60$$.$ArrayHeaderSet$ = function $$oj$$60$$$$ArrayHeaderSet$$($start$$64$$, $end$$21$$, $axis$$87$$, $callback$$133$$) {
    this.$m_start$ = $start$$64$$;
    this.$m_end$ = $end$$21$$;
    this.$m_axis$ = $axis$$87$$;
    this.$m_callback$ = $callback$$133$$;
  };
  $goog$exportPath_$$("ArrayHeaderSet", $oj$$60$$.$ArrayHeaderSet$, $oj$$60$$);
  $oj$$60$$.$ArrayHeaderSet$.prototype.getData = function $$oj$$60$$$$ArrayHeaderSet$$$getData$($index$$295$$, $level$$58$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$60$$.$Assert$.assert($index$$295$$ <= this.$m_end$ && $index$$295$$ >= this.$m_start$, "index out of bounds");
    $oj$$60$$.$Assert$.assert(null == $level$$58$$ || 0 == $level$$58$$, "level out of bounds");
    return this.$m_callback$.$_getHeaderData$(this.$m_axis$, $index$$295$$);
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getData", {getData:$oj$$60$$.$ArrayHeaderSet$.prototype.getData});
  $oj$$60$$.$ArrayHeaderSet$.prototype.getMetadata = function $$oj$$60$$$$ArrayHeaderSet$$$getMetadata$($index$$296$$, $level$$59$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$60$$.$Assert$.assert($index$$296$$ <= this.$m_end$ && $index$$296$$ >= this.$m_start$, "index out of bounds");
    $oj$$60$$.$Assert$.assert(null == $level$$59$$ || 0 == $level$$59$$, "level out of bounds");
    return this.$m_callback$.$_getHeaderMetadata$(this.$m_axis$, $index$$296$$);
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getMetadata", {getMetadata:$oj$$60$$.$ArrayHeaderSet$.prototype.getMetadata});
  $oj$$60$$.$ArrayHeaderSet$.prototype.getLevelCount = function $$oj$$60$$$$ArrayHeaderSet$$$getLevelCount$() {
    return 0 < this.getCount() ? 1 : 0;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getLevelCount", {getLevelCount:$oj$$60$$.$ArrayHeaderSet$.prototype.getLevelCount});
  $oj$$60$$.$ArrayHeaderSet$.prototype.getExtent = function $$oj$$60$$$$ArrayHeaderSet$$$getExtent$($index$$297$$, $level$$60$$) {
    $oj$$60$$.$Assert$.assert($index$$297$$ <= this.$m_end$ && $index$$297$$ >= this.$m_start$, "index out of bounds");
    $oj$$60$$.$Assert$.assert(null == $level$$60$$ || 0 == $level$$60$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getExtent", {getExtent:$oj$$60$$.$ArrayHeaderSet$.prototype.getExtent});
  $oj$$60$$.$ArrayHeaderSet$.prototype.getDepth = function $$oj$$60$$$$ArrayHeaderSet$$$getDepth$($index$$298$$, $level$$61$$) {
    $oj$$60$$.$Assert$.assert($index$$298$$ <= this.$m_end$ && $index$$298$$ >= this.$m_start$, "index out of bounds");
    $oj$$60$$.$Assert$.assert(null == $level$$61$$ || 0 == $level$$61$$, "level out of bounds");
    return 1;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getDepth", {getDepth:$oj$$60$$.$ArrayHeaderSet$.prototype.getDepth});
  $oj$$60$$.$ArrayHeaderSet$.prototype.getCount = function $$oj$$60$$$$ArrayHeaderSet$$$getCount$() {
    return null == this.$m_callback$ ? 0 : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getCount", {getCount:$oj$$60$$.$ArrayHeaderSet$.prototype.getCount});
  $oj$$60$$.$ArrayHeaderSet$.prototype.getStart = function $$oj$$60$$$$ArrayHeaderSet$$$getStart$() {
    return this.$m_start$;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getStart", {getStart:$oj$$60$$.$ArrayHeaderSet$.prototype.getStart});
  $oj$$60$$.$ArrayCellSet$ = function $$oj$$60$$$$ArrayCellSet$$($startRow$$10$$, $endRow$$4$$, $startColumn$$3$$, $endColumn$$2$$, $callback$$134$$) {
    this.$m_startRow$ = $startRow$$10$$;
    this.$m_endRow$ = $endRow$$4$$;
    this.$m_startColumn$ = $startColumn$$3$$;
    this.$m_endColumn$ = $endColumn$$2$$;
    this.$m_callback$ = $callback$$134$$;
  };
  $goog$exportPath_$$("ArrayCellSet", $oj$$60$$.$ArrayCellSet$, $oj$$60$$);
  $oj$$60$$.$ArrayCellSet$.prototype.getData = function $$oj$$60$$$$ArrayCellSet$$$getData$($indexes$$29_returnObj$$3$$) {
    var $self$$205$$, $rowIndex$$22$$, $columnIndex$$10$$;
    $self$$205$$ = this;
    $rowIndex$$22$$ = $indexes$$29_returnObj$$3$$.row;
    $columnIndex$$10$$ = $indexes$$29_returnObj$$3$$.column;
    $indexes$$29_returnObj$$3$$ = {};
    Object.defineProperty($indexes$$29_returnObj$$3$$, "data", {get:function() {
      return $self$$205$$.$m_callback$.$_getCellData$($rowIndex$$22$$, $columnIndex$$10$$);
    }, set:function($newValue$$29$$) {
      $self$$205$$.$m_callback$.$_setCellData$($rowIndex$$22$$, $columnIndex$$10$$, $newValue$$29$$);
    }});
    return $indexes$$29_returnObj$$3$$;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getData", {getData:$oj$$60$$.$ArrayCellSet$.prototype.getData});
  $oj$$60$$.$ArrayCellSet$.prototype.getMetadata = function $$oj$$60$$$$ArrayCellSet$$$getMetadata$($indexes$$30$$) {
    return this.$m_callback$.$_getCellMetadata$($indexes$$30$$.row, $indexes$$30$$.column);
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getMetadata", {getMetadata:$oj$$60$$.$ArrayCellSet$.prototype.getMetadata});
  $oj$$60$$.$ArrayCellSet$.prototype.getStart = function $$oj$$60$$$$ArrayCellSet$$$getStart$($axis$$88$$) {
    return "row" == $axis$$88$$ ? this.$m_startRow$ : "column" == $axis$$88$$ ? this.$m_startColumn$ : -1;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStart", {getStart:$oj$$60$$.$ArrayCellSet$.prototype.getStart});
  $oj$$60$$.$ArrayCellSet$.prototype.getCount = function $$oj$$60$$$$ArrayCellSet$$$getCount$($axis$$89$$) {
    return "row" === $axis$$89$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$89$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getCount", {getCount:$oj$$60$$.$ArrayCellSet$.prototype.getCount});
  $oj$$60$$.$ArrayCellSet$.prototype.$getStartRow$ = function $$oj$$60$$$$ArrayCellSet$$$$getStartRow$$() {
    return this.$m_startRow$;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartRow", {$getStartRow$:$oj$$60$$.$ArrayCellSet$.prototype.$getStartRow$});
  $oj$$60$$.$ArrayCellSet$.prototype.$getStartColumn$ = function $$oj$$60$$$$ArrayCellSet$$$$getStartColumn$$() {
    return this.$m_startColumn$;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartColumn", {$getStartColumn$:$oj$$60$$.$ArrayCellSet$.prototype.$getStartColumn$});
});
