/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "promise", "ojs/ojdatasource-common"], function($oj$$18$$, $$$$17$$) {
  $oj$$18$$.$Cube$ = function $$oj$$18$$$$Cube$$($rowset$$, $layout$$) {
    this.Init();
    this.$_rows$ = $rowset$$;
    this.$_layout$ = $layout$$;
    this.$BuildCube$();
  };
  $goog$exportPath_$$("Cube", $oj$$18$$.$Cube$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$Cube$, $oj$$18$$.$Object$, "oj.Cube");
  $oj$$18$$.$Cube$.prototype.Init = function $$oj$$18$$$$Cube$$$Init$() {
    $oj$$18$$.$Cube$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$Cube$.prototype.$getAxes$ = function $$oj$$18$$$$Cube$$$$getAxes$$() {
    var $cube_i$$318$$ = this.$_getPinnedCube$(), $axes$$ = [];
    Array.prototype.push.apply($axes$$, $cube_i$$318$$ ? $cube_i$$318$$.$getAxes$() : this.$_axes$);
    for ($cube_i$$318$$ = 2;$cube_i$$318$$ < this.$_axes$.length;$cube_i$$318$$++) {
      $axes$$.push(this.$_axes$[$cube_i$$318$$]);
    }
    return $axes$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.getAxes", {$getAxes$:$oj$$18$$.$Cube$.prototype.$getAxes$});
  $oj$$18$$.$Cube$.prototype.$_getNonPageLayout$ = function $$oj$$18$$$$Cube$$$$_getNonPageLayout$$() {
    return this.$_axes$;
  };
  $oj$$18$$.$Cube$.prototype.$getValues$ = function $$oj$$18$$$$Cube$$$$getValues$$($ind_indices$$5_val$$46$$) {
    var $cube$$1_origRet$$ = this.$_getPinnedCube$();
    $ind_indices$$5_val$$46$$ = $cube$$1_origRet$$.$_normalizeIndices$($ind_indices$$5_val$$46$$);
    for ($ind_indices$$5_val$$46$$ = $cube$$1_origRet$$ = $cube$$1_origRet$$.$_walkIndex$($ind_indices$$5_val$$46$$, 0, []);Array.isArray($ind_indices$$5_val$$46$$) && 1 === $ind_indices$$5_val$$46$$.length;) {
      if ($ind_indices$$5_val$$46$$ = $ind_indices$$5_val$$46$$[0], !Array.isArray($ind_indices$$5_val$$46$$)) {
        return $ind_indices$$5_val$$46$$;
      }
    }
    return $cube$$1_origRet$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.getValues", {$getValues$:$oj$$18$$.$Cube$.prototype.$getValues$});
  $oj$$18$$.$Cube$.prototype.setPage = function $$oj$$18$$$$Cube$$$setPage$($pin$$) {
    this.$_pin$ = $pin$$ instanceof Array ? $pin$$ : [$pin$$];
  };
  $oj$$18$$.$Cube$.prototype.$pivot$ = function $$oj$$18$$$$Cube$$$$pivot$$($axisFrom_axisToObj_levelFromObj$$, $levelFrom$$, $axisTo_levelsFrom$$, $levelTo$$, $type$$85$$) {
    var $layout$$1_levelsTo$$ = this.$_layout$, $axisFromObj$$ = this.$_findAxisInLayout$($axisFrom_axisToObj_levelFromObj$$);
    if (!$axisFromObj$$) {
      return!1;
    }
    $axisFrom_axisToObj_levelFromObj$$ = null;
    $axisTo_levelsFrom$$ < $layout$$1_levelsTo$$.length ? $axisFrom_axisToObj_levelFromObj$$ = this.$_findAxisInLayout$($axisTo_levelsFrom$$) : ($axisFrom_axisToObj_levelFromObj$$ = {axis:$axisTo_levelsFrom$$, levels:[]}, $layout$$1_levelsTo$$.push($axisFrom_axisToObj_levelFromObj$$));
    $axisTo_levelsFrom$$ = $axisFromObj$$.levels;
    $layout$$1_levelsTo$$ = $axisFrom_axisToObj_levelFromObj$$.levels;
    $axisFrom_axisToObj_levelFromObj$$ = $levelFrom$$ < $axisTo_levelsFrom$$.length ? $axisTo_levelsFrom$$[$levelFrom$$] : null;
    if (!$axisFrom_axisToObj_levelFromObj$$) {
      return!1;
    }
    $levelTo$$ >= $layout$$1_levelsTo$$.length ? ($layout$$1_levelsTo$$.push($axisFrom_axisToObj_levelFromObj$$), $axisTo_levelsFrom$$.splice($levelFrom$$, 1)) : $type$$85$$ === $oj$$18$$.$Cube$.$PivotType$.SWAP ? ($axisTo_levelsFrom$$[$levelFrom$$] = $layout$$1_levelsTo$$[$levelTo$$], $layout$$1_levelsTo$$[$levelTo$$] = $axisFrom_axisToObj_levelFromObj$$) : ($type$$85$$ === $oj$$18$$.$Cube$.$PivotType$.AFTER && $levelTo$$++, $layout$$1_levelsTo$$.splice($levelTo$$, 0, $axisFrom_axisToObj_levelFromObj$$), 
    $layout$$1_levelsTo$$ === $axisTo_levelsFrom$$ && $levelTo$$ < $levelFrom$$ && $levelFrom$$++, $axisTo_levelsFrom$$.splice($levelFrom$$, 1));
    this.$BuildCube$();
    return!0;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.pivot", {$pivot$:$oj$$18$$.$Cube$.prototype.$pivot$});
  $oj$$18$$.$Cube$.prototype.$_findAxisInLayout$ = function $$oj$$18$$$$Cube$$$$_findAxisInLayout$$($axis$$44$$) {
    for (var $i$$319$$ = 0;$i$$319$$ < this.$_layout$.length;$i$$319$$++) {
      if (this.$_layout$[$i$$319$$].axis === $axis$$44$$) {
        return this.$_layout$[$i$$319$$];
      }
    }
    return null;
  };
  $oj$$18$$.$Cube$.prototype.$getLayout$ = function $$oj$$18$$$$Cube$$$$getLayout$$() {
    return this.$_layout$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.getLayout", {$getLayout$:$oj$$18$$.$Cube$.prototype.$getLayout$});
  $oj$$18$$.$Cube$.$PivotType$ = {BEFORE:"before", AFTER:"after", SWAP:"swap"};
  $goog$exportPath_$$("Cube.PivotType", $oj$$18$$.$Cube$.$PivotType$, $oj$$18$$);
  $oj$$18$$.$Cube$.prototype.$_walkIndex$ = function $$oj$$18$$$$Cube$$$$_walkIndex$$($count$$33_indices$$6$$, $depth$$12_loc$$4$$, $location$$24$$) {
    var $returnValue$$6$$ = [];
    if (0 === $count$$33_indices$$6$$.length) {
      return $depth$$12_loc$$4$$ = $location$$24$$.slice(0), this.$_getValue$($depth$$12_loc$$4$$);
    }
    var $remaining$$ = $count$$33_indices$$6$$.slice(1), $start$$42$$ = $count$$33_indices$$6$$[0].start;
    $count$$33_indices$$6$$ = $count$$33_indices$$6$$[0].count;
    for ($location$$24$$[$depth$$12_loc$$4$$] = $start$$42$$;$location$$24$$[$depth$$12_loc$$4$$] < $start$$42$$ + $count$$33_indices$$6$$;$location$$24$$[$depth$$12_loc$$4$$]++) {
      $returnValue$$6$$.push(this.$_walkIndex$($remaining$$, $depth$$12_loc$$4$$ + 1, $location$$24$$));
    }
    return $returnValue$$6$$;
  };
  $oj$$18$$.$Cube$.prototype.$_normalizeIndices$ = function $$oj$$18$$$$Cube$$$$_normalizeIndices$$($indices$$7$$) {
    var $ind$$1$$ = [];
    if (!$indices$$7$$) {
      return $ind$$1$$;
    }
    for (var $numAxes$$ = Math.min($indices$$7$$.length, this.$_axes$.length), $a$$103$$ = 0;$a$$103$$ < $numAxes$$;$a$$103$$++) {
      var $index$$156$$ = $indices$$7$$[$a$$103$$];
      $index$$156$$ instanceof Object && ($index$$156$$.hasOwnProperty("start") || $index$$156$$.hasOwnProperty("count")) ? $index$$156$$.hasOwnProperty("start") ? $index$$156$$.hasOwnProperty("count") ? $ind$$1$$.push(this.$_generateIndex$($index$$156$$.start, $index$$156$$.count, $a$$103$$)) : $ind$$1$$.push(this.$_generateIndex$($index$$156$$.start, 1, $a$$103$$)) : $ind$$1$$.push(this.$_generateIndex$(0, $index$$156$$.count, $a$$103$$)) : $ind$$1$$.push(this.$_generateIndex$($index$$156$$, 1, 
      $a$$103$$));
    }
    return $ind$$1$$;
  };
  $oj$$18$$.$Cube$.prototype.$_generateIndex$ = function $$oj$$18$$$$Cube$$$$_generateIndex$$($start$$43$$, $count$$34$$, $axis$$45_trueCount$$) {
    $axis$$45_trueCount$$ = this.$getAxes$()[$axis$$45_trueCount$$].getExtent();
    if ($start$$43$$ >= $axis$$45_trueCount$$ || 0 > $start$$43$$) {
      $start$$43$$ = 0;
    }
    $count$$34$$ = Math.min($count$$34$$, $axis$$45_trueCount$$ - $start$$43$$);
    return{start:$start$$43$$, index:$start$$43$$, count:$count$$34$$};
  };
  $oj$$18$$.$Cube$.prototype.$_getValue$ = function $$oj$$18$$$$Cube$$$$_getValue$$($indices$$8$$) {
    var $hash$$2_key$$100_obj$$61$$ = this.$_createCubeKeys$($indices$$8$$);
    return $hash$$2_key$$100_obj$$61$$ && ($hash$$2_key$$100_obj$$61$$ = $hash$$2_key$$100_obj$$61$$.$GetHashCodes$(), 0 < $hash$$2_key$$100_obj$$61$$.length && ($hash$$2_key$$100_obj$$61$$ = this.$_data$[$hash$$2_key$$100_obj$$61$$[0].key])) ? new $oj$$18$$.$CubeDataValue$($hash$$2_key$$100_obj$$61$$.value, $indices$$8$$, $hash$$2_key$$100_obj$$61$$.$aggType$, $hash$$2_key$$100_obj$$61$$.rows, $hash$$2_key$$100_obj$$61$$.$square$) : new $oj$$18$$.$CubeDataValue$(null, $indices$$8$$, void 0, []);
  };
  $oj$$18$$.$Cube$.prototype.$GenerateAxes$ = function $$oj$$18$$$$Cube$$$$GenerateAxes$$() {
    var $nonPageLayout_pageLayout$$ = this.$_getPageLayout$();
    this.$_pin$ = [];
    for (var $i$$320$$ = 0;$i$$320$$ < $nonPageLayout_pageLayout$$.length;$i$$320$$++) {
      this.$_getAxis$($nonPageLayout_pageLayout$$[$i$$320$$].axis, $nonPageLayout_pageLayout$$[$i$$320$$].levels), this.$_pin$.push({axis:$nonPageLayout_pageLayout$$[$i$$320$$].axis, index:0});
    }
    if (0 === $nonPageLayout_pageLayout$$.length) {
      for ($nonPageLayout_pageLayout$$ = this.$_getNonPageLayout$(), $i$$320$$ = 0;$i$$320$$ < $nonPageLayout_pageLayout$$.length;$i$$320$$++) {
        this.$_getAxis$($nonPageLayout_pageLayout$$[$i$$320$$].axis, $nonPageLayout_pageLayout$$[$i$$320$$].levels);
      }
    }
  };
  $oj$$18$$.$Cube$.prototype.$_getPageLayout$ = function $$oj$$18$$$$Cube$$$$_getPageLayout$$() {
    for (var $pageOnlyLayout$$ = [], $i$$321$$ = 0;$i$$321$$ < this.$_layout$.length;$i$$321$$++) {
      1 < this.$_layout$[$i$$321$$].axis && $pageOnlyLayout$$.push(this.$_layout$[$i$$321$$]);
    }
    return $pageOnlyLayout$$;
  };
  $oj$$18$$.$Cube$.prototype.$_getNonPageLayout$ = function $$oj$$18$$$$Cube$$$$_getNonPageLayout$$() {
    for (var $nonPageLayout$$1$$ = [], $i$$322$$ = 0;$i$$322$$ < this.$_layout$.length;$i$$322$$++) {
      2 > this.$_layout$[$i$$322$$].axis && $nonPageLayout$$1$$.push(this.$_layout$[$i$$322$$]);
    }
    return $nonPageLayout$$1$$;
  };
  $oj$$18$$.$Cube$.prototype.$BuildCube$ = function $$oj$$18$$$$Cube$$$$BuildCube$$() {
    this.$_axes$ = [];
    this.$_data$ = [];
    this.$_cubes$ = [];
    this.$GenerateAxes$();
    if (null !== this.$_rows$) {
      for (var $row$$63$$ = 0;$row$$63$$ < this.$_rows$.length;$row$$63$$++) {
        for (var $pageHashObj_pageKey$$ = new $oj$$18$$.$CubeKeys$, $axis$$48_hash$$3_pageHash$$ = 2;$axis$$48_hash$$3_pageHash$$ < this.$_axes$.length;$axis$$48_hash$$3_pageHash$$++) {
          $pageHashObj_pageKey$$ = this.$_axes$[$axis$$48_hash$$3_pageHash$$].$ProcessRow$(this.$_rows$[$row$$63$$], $pageHashObj_pageKey$$);
        }
        for (var $pageHashObj_pageKey$$ = $pageHashObj_pageKey$$.$GetHashCodes$(), $ph$$ = 0;$ph$$ < $pageHashObj_pageKey$$.length;$ph$$++) {
          var $axis$$48_hash$$3_pageHash$$ = $pageHashObj_pageKey$$[$ph$$].key, $cube$$2$$ = this.$_cubes$[$axis$$48_hash$$3_pageHash$$];
          $cube$$2$$ || ($cube$$2$$ = this.$_cubes$[$axis$$48_hash$$3_pageHash$$] = this.$GenerateCube$(this.$_getNonPageLayout$()));
          for (var $dataHash_keys$$27$$ = new $oj$$18$$.$CubeKeys$, $h$$5_maxAxes$$ = $cube$$2$$.$_axes$.length, $axis$$48_hash$$3_pageHash$$ = 0;$axis$$48_hash$$3_pageHash$$ < $h$$5_maxAxes$$;$axis$$48_hash$$3_pageHash$$++) {
            $dataHash_keys$$27$$ = $cube$$2$$.$_axes$[$axis$$48_hash$$3_pageHash$$].$ProcessRow$(this.$_rows$[$row$$63$$], $dataHash_keys$$27$$);
          }
          $dataHash_keys$$27$$ = $axis$$48_hash$$3_pageHash$$ = $dataHash_keys$$27$$.$GetHashCodes$();
          if (void 0 !== $pageHashObj_pageKey$$[$ph$$].$dataValue$) {
            for ($dataHash_keys$$27$$ = [], $h$$5_maxAxes$$ = 0;$h$$5_maxAxes$$ < $axis$$48_hash$$3_pageHash$$.length;$h$$5_maxAxes$$++) {
              $dataHash_keys$$27$$.push($pageHashObj_pageKey$$[$ph$$]);
            }
          }
          $cube$$2$$.$_storeData$($axis$$48_hash$$3_pageHash$$, $dataHash_keys$$27$$, this.$_rows$[$row$$63$$]);
        }
      }
    }
  };
  $oj$$18$$.$Cube$.prototype.$_storeData$ = function $$oj$$18$$$$Cube$$$$_storeData$$($hash$$4$$, $dataHash$$1$$, $row$$64$$) {
    for (var $i$$323$$ = 0;$i$$323$$ < $hash$$4$$.length;$i$$323$$++) {
      this.$_data$[$hash$$4$$[$i$$323$$].key] = this.$_aggregate$($dataHash$$1$$[$i$$323$$], this.$_data$[$hash$$4$$[$i$$323$$].key], $row$$64$$);
    }
  };
  $oj$$18$$.$Cube$.prototype.$_getPinnedCube$ = function $$oj$$18$$$$Cube$$$$_getPinnedCube$$() {
    return this.$_cubes$[this.$_getHashFromPin$(this.$_pin$)];
  };
  $oj$$18$$.$Cube$.prototype.$_getHashFromPin$ = function $$oj$$18$$$$Cube$$$$_getHashFromPin$$($pin$$1$$) {
    var $keys$$28$$ = new $oj$$18$$.$CubeKeys$;
    if ($pin$$1$$ && 0 < $pin$$1$$.length) {
      $pin$$1$$.sort(function($a$$104$$, $b$$60$$) {
        return $a$$104$$.axis - $b$$60$$.axis;
      });
      for (var $axes$$1$$ = this.$_axes$, $i$$324$$ = 0;$i$$324$$ < $pin$$1$$.length;$i$$324$$++) {
        $keys$$28$$ = $axes$$1$$[$pin$$1$$[$i$$324$$].axis].$GetCubeKeys$($pin$$1$$[$i$$324$$].index, $keys$$28$$);
      }
    }
    return $keys$$28$$.$GetHashCodes$()[0].key;
  };
  $oj$$18$$.$Cube$.$_isValid$ = function $$oj$$18$$$$Cube$$$_isValid$$($value$$252$$) {
    return $value$$252$$ ? void 0 !== $value$$252$$.value && null !== $value$$252$$.value : !1;
  };
  $oj$$18$$.$Cube$.prototype.$_createAggValue$ = function $$oj$$18$$$$Cube$$$$_createAggValue$$($value$$253$$, $aggType$$, $rows$$14$$, $retObj$$12_row$$65$$, $props$$15$$) {
    $rows$$14$$.push($retObj$$12_row$$65$$);
    $retObj$$12_row$$65$$ = {};
    for (var $p$$5$$ in $props$$15$$) {
      $props$$15$$.hasOwnProperty($p$$5$$) && ($retObj$$12_row$$65$$[$p$$5$$] = $props$$15$$[$p$$5$$]);
    }
    $retObj$$12_row$$65$$.value = $value$$253$$;
    $retObj$$12_row$$65$$.$aggType$ = $aggType$$;
    $retObj$$12_row$$65$$.rows = $rows$$14$$;
    return $retObj$$12_row$$65$$;
  };
  $oj$$18$$.$Cube$.$_isNumber$ = function $$oj$$18$$$$Cube$$$_isNumber$$($value$$254$$) {
    return $oj$$18$$.$StringUtils$.$isString$($value$$254$$.value) ? !1 : !isNaN($value$$254$$.value);
  };
  $oj$$18$$.$Cube$.prototype.$_aggregate$ = function $$oj$$18$$$$Cube$$$$_aggregate$$($hash$$5_val$$47$$, $currValue$$2$$, $row$$66$$) {
    var $aggObj$$ = this.$GetAggType$($hash$$5_val$$47$$.$dataValue$), $aggType$$1$$ = $aggObj$$.$aggregation$, $avg_validCurr$$ = $oj$$18$$.$Cube$.$_isValid$($currValue$$2$$), $validHash$$ = $oj$$18$$.$Cube$.$_isValid$($hash$$5_val$$47$$), $isNumCurr$$ = $avg_validCurr$$ && $oj$$18$$.$Cube$.$_isNumber$($currValue$$2$$), $isNumHash$$ = $validHash$$ && $oj$$18$$.$Cube$.$_isNumber$($hash$$5_val$$47$$);
    switch($aggType$$1$$) {
      case $oj$$18$$.$CubeAggType$.SUM:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$($currValue$$2$$.value + $hash$$5_val$$47$$.value, $aggType$$1$$, $currValue$$2$$.rows, $row$$66$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$66$$, {}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$47$$.value, $aggType$$1$$, [], $row$$66$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$66$$, {}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.AVERAGE:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$(($currValue$$2$$.$sum$ + $hash$$5_val$$47$$.value) / ($currValue$$2$$.rows.length + 1), $aggType$$1$$, $currValue$$2$$.rows, $row$$66$$, {$sum$:$currValue$$2$$.$sum$ + $hash$$5_val$$47$$.value}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$66$$, {$sum$:$currValue$$2$$.$sum$}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$47$$.value, 
        $aggType$$1$$, [], $row$$66$$, {$sum$:$hash$$5_val$$47$$.value}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$66$$, {$sum$:NaN}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.VARIANCE:
      ;
      case $oj$$18$$.$CubeAggType$.STDDEV:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? ($avg_validCurr$$ = $currValue$$2$$.value + ($hash$$5_val$$47$$.value - $currValue$$2$$.value) / ($currValue$$2$$.rows.length + 1), this.$_createAggValue$($avg_validCurr$$, $aggType$$1$$, $currValue$$2$$.rows, $row$$66$$, {$square$:$currValue$$2$$.$square$ + ($hash$$5_val$$47$$.value - $currValue$$2$$.value) * ($hash$$5_val$$47$$.value - $avg_validCurr$$)})) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, 
        $row$$66$$, {$square$:NaN}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$47$$.value, $aggType$$1$$, [], $row$$66$$, {$square$:0}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$66$$, {$square$:NaN}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.NONE:
        return this.$_createAggValue$(null, $aggType$$1$$, $avg_validCurr$$ ? $currValue$$2$$.rows : [], $row$$66$$, {});
      case $oj$$18$$.$CubeAggType$.FIRST:
        return $avg_validCurr$$ ? this.$_createAggValue$($currValue$$2$$.value, $aggType$$1$$, $currValue$$2$$.rows, $row$$66$$, {}) : $validHash$$ ? this.$_createAggValue$($hash$$5_val$$47$$.value, $aggType$$1$$, [], $row$$66$$, {}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.MIN:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$(Math.min($currValue$$2$$.value, $hash$$5_val$$47$$.value), $aggType$$1$$, $currValue$$2$$.rows, $row$$66$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$66$$, {}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$47$$.value, $aggType$$1$$, [], $row$$66$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$66$$, {}) : 
        $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.MAX:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$(Math.max($currValue$$2$$.value, $hash$$5_val$$47$$.value), $aggType$$1$$, $currValue$$2$$.rows, $row$$66$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$66$$, {}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$47$$.value, $aggType$$1$$, [], $row$$66$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$66$$, {}) : 
        $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.COUNT:
        return $avg_validCurr$$ && $validHash$$ ? this.$_createAggValue$($currValue$$2$$.value + 1, $aggType$$1$$, $currValue$$2$$.rows, $row$$66$$, {}) : $validHash$$ && !$avg_validCurr$$ ? this.$_createAggValue$(1, $aggType$$1$$, [], $row$$66$$, {}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.CUSTOM:
        return $hash$$5_val$$47$$ = $aggObj$$.$callback$.call(this, $avg_validCurr$$ ? $currValue$$2$$.value : void 0, $validHash$$ ? $hash$$5_val$$47$$.value : void 0), this.$_createAggValue$($hash$$5_val$$47$$, $aggType$$1$$, $avg_validCurr$$ ? $currValue$$2$$.rows : [], $row$$66$$, {});
    }
  };
  $oj$$18$$.$Cube$.prototype.$_getAxis$ = function $$oj$$18$$$$Cube$$$$_getAxis$$($axis$$49$$, $levels$$) {
    $axis$$49$$ >= this.$_axes$.length && Array.prototype.push.apply(this.$_axes$, Array($axis$$49$$ - this.$_axes$.length + 1));
    this.$_axes$[$axis$$49$$] || (this.$_axes$[$axis$$49$$] = new $oj$$18$$.$CubeAxis$($levels$$, $axis$$49$$, this));
    return this.$_axes$[$axis$$49$$];
  };
  $oj$$18$$.$Cube$.prototype.$_createCubeKeys$ = function $$oj$$18$$$$Cube$$$$_createCubeKeys$$($indices$$9$$) {
    for (var $axes$$2$$ = this.$getAxes$(), $keys$$29$$ = new $oj$$18$$.$CubeKeys$, $a$$105$$ = 0;$a$$105$$ < $indices$$9$$.length;$a$$105$$++) {
      $keys$$29$$ = $axes$$2$$[$a$$105$$].$GetCubeKeys$($indices$$9$$[$a$$105$$], $keys$$29$$);
    }
    return $keys$$29$$;
  };
  $oj$$18$$.$Cube$.prototype.$ProcessLevel$ = function $$oj$$18$$$$Cube$$$$ProcessLevel$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Cube$.prototype.$GenerateCube$ = function $$oj$$18$$$$Cube$$$$GenerateCube$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Cube$.prototype.$GenerateLevel$ = function $$oj$$18$$$$Cube$$$$GenerateLevel$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Cube$.prototype.$GetAggType$ = function $$oj$$18$$$$Cube$$$$GetAggType$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
    return{};
  };
  $oj$$18$$.$CubeAggType$ = {SUM:"sum", AVERAGE:"avg", STDDEV:"stddev", VARIANCE:"variance", NONE:"none", FIRST:"first", MIN:"min", MAX:"max", COUNT:"count", CUSTOM:"custom"};
  $goog$exportPath_$$("CubeAggType", $oj$$18$$.$CubeAggType$, $oj$$18$$);
  $oj$$18$$.$CubeAxisValue$ = function $$oj$$18$$$$CubeAxisValue$$($value$$255$$, $label$$14$$, $level$$38$$, $parent$$13$$) {
    this.Init();
    this.$_children$ = [];
    this.$_parent$ = $parent$$13$$;
    this.$_cubeLevel$ = $level$$38$$;
    this.$_data$ = {};
    this.$_data$.value = $value$$255$$;
    this.$_data$.label = $label$$14$$;
  };
  $goog$exportPath_$$("CubeAxisValue", $oj$$18$$.$CubeAxisValue$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeAxisValue$, $oj$$18$$.$Object$, "oj.CubeAxisValue");
  $oj$$18$$.$CubeAxisValue$.prototype.Init = function $$oj$$18$$$$CubeAxisValue$$$Init$() {
    $oj$$18$$.$CubeAxisValue$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$getLevel$ = function $$oj$$18$$$$CubeAxisValue$$$$getLevel$$() {
    return this.$_cubeLevel$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getLevel", {$getLevel$:$oj$$18$$.$CubeAxisValue$.prototype.$getLevel$});
  $oj$$18$$.$CubeAxisValue$.prototype.getDepth = function $$oj$$18$$$$CubeAxisValue$$$getDepth$() {
    return 1;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getDepth", {getDepth:$oj$$18$$.$CubeAxisValue$.prototype.getDepth});
  $oj$$18$$.$CubeAxisValue$.prototype.$getParents$ = function $$oj$$18$$$$CubeAxisValue$$$$getParents$$() {
    for (var $parents$$3$$ = [], $parent$$14$$ = this.$_parent$;$parent$$14$$ && $parent$$14$$.$_parent$;) {
      $parents$$3$$.unshift($parent$$14$$), $parent$$14$$ = $parent$$14$$.$_parent$;
    }
    return $parents$$3$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getParents", {$getParents$:$oj$$18$$.$CubeAxisValue$.prototype.$getParents$});
  $oj$$18$$.$CubeAxisValue$.prototype.getChildren = function $$oj$$18$$$$CubeAxisValue$$$getChildren$() {
    return this.$_children$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getChildren", {getChildren:$oj$$18$$.$CubeAxisValue$.prototype.getChildren});
  $oj$$18$$.$CubeAxisValue$.prototype.getExtent = function $$oj$$18$$$$CubeAxisValue$$$getExtent$() {
    if (-1 < this.$_extent$) {
      return this.$_extent$;
    }
    if (this.$_children$ && 0 !== this.$_children$.length) {
      for (var $c$$45$$ = this.$_extent$ = 0;$c$$45$$ < this.getChildren().length;$c$$45$$++) {
        this.$_extent$ += this.getChildren()[$c$$45$$].getExtent();
      }
    } else {
      this.$_extent$ = 1;
    }
    return this.$_extent$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getExtent", {getExtent:$oj$$18$$.$CubeAxisValue$.prototype.getExtent});
  $oj$$18$$.$CubeAxisValue$.prototype.getStart = function $$oj$$18$$$$CubeAxisValue$$$getStart$() {
    if (-1 < this.$_start$) {
      return this.$_start$;
    }
    if (!this.$_parent$) {
      return 0;
    }
    for (var $start$$44$$ = this.$_parent$.getStart(), $currChild$$ = this.$_parent$.$_getPrevChild$(this);$currChild$$;) {
      $start$$44$$ += $currChild$$.getExtent(), $currChild$$ = this.$_parent$.$_getPrevChild$($currChild$$);
    }
    return this.$_start$ = $start$$44$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getStart", {getStart:$oj$$18$$.$CubeAxisValue$.prototype.getStart});
  $oj$$18$$.$CubeAxisValue$.prototype.$getValue$ = function $$oj$$18$$$$CubeAxisValue$$$$getValue$$() {
    return this.$_data$.value;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getValue", {$getValue$:$oj$$18$$.$CubeAxisValue$.prototype.$getValue$});
  $oj$$18$$.$CubeAxisValue$.prototype.$getLabel$ = function $$oj$$18$$$$CubeAxisValue$$$$getLabel$$() {
    return this.$_data$.label ? this.$_data$.label : this.$getValue$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getLabel", {$getLabel$:$oj$$18$$.$CubeAxisValue$.prototype.$getLabel$});
  $oj$$18$$.$CubeAxisValue$.prototype.$GetChild$ = function $$oj$$18$$$$CubeAxisValue$$$$GetChild$$($key$$101_val$$48$$) {
    var $c$$46_childLevel$$ = this.$_getChildLevel$();
    if (null === $c$$46_childLevel$$) {
      return null;
    }
    if ($c$$46_childLevel$$.$isDataValue$()) {
      return this.$_getDataValueChild$($key$$101_val$$48$$);
    }
    if ($key$$101_val$$48$$ = $key$$101_val$$48$$[$c$$46_childLevel$$.attribute]) {
      for ($c$$46_childLevel$$ = 0;$c$$46_childLevel$$ < this.$_children$.length;$c$$46_childLevel$$++) {
        if (this.$_children$[$c$$46_childLevel$$].$getValue$() === $key$$101_val$$48$$) {
          return this.$_children$[$c$$46_childLevel$$];
        }
      }
    }
    return null;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_getDataValueChild$ = function $$oj$$18$$$$CubeAxisValue$$$$_getDataValueChild$$($key$$102$$) {
    for (var $c$$47$$ = 0;$c$$47$$ < this.$_children$.length;$c$$47$$++) {
      var $val$$49$$ = this.$_children$[$c$$47$$].$getValue$();
      if ($key$$102$$.hasOwnProperty($val$$49$$) && $key$$102$$[$val$$49$$] === $val$$49$$) {
        return this.$_children$[$c$$47$$];
      }
    }
    return null;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_getChildLevel$ = function $$oj$$18$$$$CubeAxisValue$$$$_getChildLevel$$() {
    return this.$_children$ && 0 < this.$_children$.length ? this.$_children$[0].$getLevel$() : null;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$GetChildAt$ = function $$oj$$18$$$$CubeAxisValue$$$$GetChildAt$$($index$$157$$) {
    return this.$_findChild$($index$$157$$, 0, this.$_children$.length - 1);
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_findChild$ = function $$oj$$18$$$$CubeAxisValue$$$$_findChild$$($index$$158$$, $start$$45$$, $end$$13$$) {
    if ($start$$45$$ > $end$$13$$) {
      return null;
    }
    var $mid$$1$$ = Math.floor(($start$$45$$ + $end$$13$$) / 2), $value$$256$$ = this.$_children$[$mid$$1$$], $valStart$$ = $value$$256$$.getStart();
    return $valStart$$ > $index$$158$$ ? this.$_findChild$($index$$158$$, $start$$45$$, $mid$$1$$ - 1) : $valStart$$ + $value$$256$$.getExtent() - 1 < $index$$158$$ ? this.$_findChild$($index$$158$$, $mid$$1$$ + 1, $end$$13$$) : $value$$256$$;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$AddNode$ = function $$oj$$18$$$$CubeAxisValue$$$$AddNode$$($newValue$$20_value$$257$$, $label$$15$$, $level$$39$$) {
    for (var $c$$48$$ = 0;$c$$48$$ < this.$_children$.length;$c$$48$$++) {
      if (this.$_children$[$c$$48$$].$getValue$() === $newValue$$20_value$$257$$) {
        return this.$_children$[$c$$48$$];
      }
    }
    $newValue$$20_value$$257$$ = new $oj$$18$$.$CubeAxisValue$($newValue$$20_value$$257$$, $label$$15$$, $level$$39$$, this);
    this.$_children$.push($newValue$$20_value$$257$$);
    return $newValue$$20_value$$257$$;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$GetHashCode$ = function $$oj$$18$$$$CubeAxisValue$$$$GetHashCode$$() {
    var $obj$$62$$ = {};
    $obj$$62$$[this.$getLevel$().attribute] = this.$getValue$();
    return $obj$$62$$;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_getPrevChild$ = function $$oj$$18$$$$CubeAxisValue$$$$_getPrevChild$$($currChild$$1$$) {
    for (var $c$$49$$ = 0;$c$$49$$ < this.$_children$.length;$c$$49$$++) {
      if (this.$_children$[$c$$49$$] === $currChild$$1$$) {
        if (0 < $c$$49$$) {
          return this.$_children$[$c$$49$$ - 1];
        }
        break;
      }
    }
    return null;
  };
  $oj$$18$$.$CubeAxis$ = function $$oj$$18$$$$CubeAxis$$($levels$$2$$, $axis$$51_i$$325$$, $cube$$3$$) {
    this.Init();
    this.axis = $axis$$51_i$$325$$;
    this.$_levels$ = [];
    for ($axis$$51_i$$325$$ = 0;$axis$$51_i$$325$$ < $levels$$2$$.length;$axis$$51_i$$325$$++) {
      this.$_levels$.push($cube$$3$$.$GenerateLevel$($levels$$2$$[$axis$$51_i$$325$$], this));
    }
    this.$_cube$ = $cube$$3$$;
    this.$_values$ = new $oj$$18$$.$CubeAxisValue$(null, null, null, null);
  };
  $goog$exportPath_$$("CubeAxis", $oj$$18$$.$CubeAxis$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeAxis$, $oj$$18$$.$Object$, "oj.CubeAxis");
  $oj$$18$$.$CubeAxis$.prototype.Init = function $$oj$$18$$$$CubeAxis$$$Init$() {
    $oj$$18$$.$CubeAxis$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeAxis$.prototype.$getLevels$ = function $$oj$$18$$$$CubeAxis$$$$getLevels$$() {
    return this.$_levels$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getLevels", {$getLevels$:$oj$$18$$.$CubeAxis$.prototype.$getLevels$});
  $oj$$18$$.$CubeAxis$.prototype.getExtent = function $$oj$$18$$$$CubeAxis$$$getExtent$() {
    return this.$_values$.getExtent();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getExtent", {getExtent:$oj$$18$$.$CubeAxis$.prototype.getExtent});
  $oj$$18$$.$CubeAxis$.prototype.$getValues$ = function $$oj$$18$$$$CubeAxis$$$$getValues$$($index$$159$$) {
    for (var $values$$9$$ = [], $node$$64$$ = this.$_values$;$node$$64$$;) {
      ($node$$64$$ = $node$$64$$.$GetChildAt$($index$$159$$)) && $values$$9$$.push($node$$64$$);
    }
    return $values$$9$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getValues", {$getValues$:$oj$$18$$.$CubeAxis$.prototype.$getValues$});
  $oj$$18$$.$CubeAxis$.prototype.$getIndex$ = function $$oj$$18$$$$CubeAxis$$$$getIndex$$($key$$103_keyVal$$) {
    $key$$103_keyVal$$ = $key$$103_keyVal$$ ? JSON.parse($key$$103_keyVal$$) : {};
    for (var $node$$65$$ = this.$_values$, $lastNode$$ = null;$node$$65$$;) {
      $lastNode$$ = $node$$65$$, $node$$65$$ = $node$$65$$.$GetChild$($key$$103_keyVal$$);
    }
    return $lastNode$$ ? $lastNode$$.getStart() : -1;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getIndex", {$getIndex$:$oj$$18$$.$CubeAxis$.prototype.$getIndex$});
  $oj$$18$$.$CubeAxis$.prototype.$GetCubeKeys$ = function $$oj$$18$$$$CubeAxis$$$$GetCubeKeys$$($index$$160$$, $keys$$31$$) {
    return this.$GetPartialCubeKeys$($index$$160$$, this.$getLevels$().length - 1, $keys$$31$$);
  };
  $oj$$18$$.$CubeAxis$.prototype.$GetPartialCubeKeys$ = function $$oj$$18$$$$CubeAxis$$$$GetPartialCubeKeys$$($index$$161_values$$10$$, $level$$40_stopLevel$$, $keys$$32$$) {
    $index$$161_values$$10$$ = this.$getValues$($index$$161_values$$10$$);
    $level$$40_stopLevel$$ = this.$getLevels$()[$level$$40_stopLevel$$];
    for (var $v$$2$$ = 0;$v$$2$$ < $index$$161_values$$10$$.length;$v$$2$$++) {
      var $val$$50$$ = $index$$161_values$$10$$[$v$$2$$];
      $val$$50$$.$getLevel$().$isDataValue$() ? $keys$$32$$.$AddDataValue$($val$$50$$.$getValue$()) : $keys$$32$$.$UpdateKeys$($val$$50$$);
      if ($val$$50$$.$getLevel$() === $level$$40_stopLevel$$) {
        break;
      }
    }
    return $keys$$32$$;
  };
  $oj$$18$$.$CubeAxis$.prototype.$ProcessRow$ = function $$oj$$18$$$$CubeAxis$$$$ProcessRow$$($row$$68$$, $keys$$33$$) {
    return this.$_cube$.$ProcessLevel$(this, 0, this.$_values$, $row$$68$$, $keys$$33$$, !0);
  };
  $oj$$18$$.$CubeDataValue$ = function $$oj$$18$$$$CubeDataValue$$($value$$258$$, $indices$$10$$, $aggType$$2$$, $rows$$15$$, $square$$) {
    this.Init();
    this.$_data$ = {};
    this.$_data$.value = $value$$258$$;
    this.$_data$.$indices$ = $indices$$10$$;
    this.$_data$.$aggType$ = $aggType$$2$$;
    this.$_data$.rows = $rows$$15$$;
    this.$_data$.$square$ = $square$$;
  };
  $goog$exportPath_$$("CubeDataValue", $oj$$18$$.$CubeDataValue$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeDataValue$, $oj$$18$$.$Object$, "oj.CubeDataValue");
  $oj$$18$$.$CubeDataValue$.prototype.Init = function $$oj$$18$$$$CubeDataValue$$$Init$() {
    $oj$$18$$.$CubeDataValue$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeDataValue$.prototype.$getValue$ = function $$oj$$18$$$$CubeDataValue$$$$getValue$$() {
    switch(this.$_data$.$aggType$) {
      case $oj$$18$$.$CubeAggType$.STDDEV:
        return Math.sqrt(this.$_getVariance$());
      case $oj$$18$$.$CubeAggType$.VARIANCE:
        return this.$_getVariance$();
      default:
        return this.$_data$.value;
    }
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getValue", {$getValue$:$oj$$18$$.$CubeDataValue$.prototype.$getValue$});
  $oj$$18$$.$CubeDataValue$.prototype.$getIndices$ = function $$oj$$18$$$$CubeDataValue$$$$getIndices$$() {
    return this.$_data$.$indices$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getIndices", {$getIndices$:$oj$$18$$.$CubeDataValue$.prototype.$getIndices$});
  $oj$$18$$.$CubeDataValue$.prototype.$getRows$ = function $$oj$$18$$$$CubeDataValue$$$$getRows$$() {
    return this.$_data$.rows;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getRows", {$getRows$:$oj$$18$$.$CubeDataValue$.prototype.$getRows$});
  $oj$$18$$.$CubeDataValue$.prototype.$getAggregation$ = function $$oj$$18$$$$CubeDataValue$$$$getAggregation$$() {
    return this.$_data$.$aggType$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getAggregation", {$getAggregation$:$oj$$18$$.$CubeDataValue$.prototype.$getAggregation$});
  $oj$$18$$.$CubeDataValue$.prototype.$_getVariance$ = function $$oj$$18$$$$CubeDataValue$$$$_getVariance$$() {
    if (isNaN(this.$_data$.$square$)) {
      return NaN;
    }
    var $count$$35$$ = this.$_data$.rows.length;
    return 1 < $count$$35$$ ? this.$_data$.$square$ / ($count$$35$$ - 1) : 0;
  };
  $oj$$18$$.$CubeCellSet$ = function $$oj$$18$$$$CubeCellSet$$($cube$$4$$, $cellRange$$9$$) {
    var $startRow$$8$$ = $cellRange$$9$$.row ? $cellRange$$9$$.row.start : 0, $rowCount$$16$$ = $cellRange$$9$$.row ? $cellRange$$9$$.row.count : 0, $startColumn$$1$$ = $cellRange$$9$$.column ? $cellRange$$9$$.column.start : 0, $colCount$$2$$ = $cellRange$$9$$.column ? $cellRange$$9$$.column.count : 0;
    $oj$$18$$.$Assert$.$assertNumber$($startRow$$8$$, null);
    $oj$$18$$.$Assert$.$assertNumber$($rowCount$$16$$, null);
    $oj$$18$$.$Assert$.$assertNumber$($startColumn$$1$$, null);
    $oj$$18$$.$Assert$.$assertNumber$($colCount$$2$$, null);
    this.$_cube$ = $cube$$4$$;
    this.$_starts$ = {row:$startRow$$8$$, column:$startColumn$$1$$};
    this.$_values$ = this.$_cube$.$getValues$([{start:$startColumn$$1$$, count:$colCount$$2$$}, {start:$startRow$$8$$, count:$rowCount$$16$$}]);
    $colCount$$2$$ = this.$_values$.length;
    0 < $colCount$$2$$ && ($rowCount$$16$$ = this.$_values$[0].length);
    this.$_counts$ = {row:$rowCount$$16$$, column:$colCount$$2$$};
  };
  $goog$exportPath_$$("CubeCellSet", $oj$$18$$.$CubeCellSet$, $oj$$18$$);
  $oj$$18$$.$CubeCellSet$.prototype.getData = function $$oj$$18$$$$CubeCellSet$$$getData$($cell$$31_indexes$$16$$) {
    return($cell$$31_indexes$$16$$ = this.$_values$[$cell$$31_indexes$$16$$.column - this.$_starts$.column][$cell$$31_indexes$$16$$.row - this.$_starts$.row]) ? $cell$$31_indexes$$16$$.$getValue$() : null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getData", {getData:$oj$$18$$.$CubeCellSet$.prototype.getData});
  $oj$$18$$.$CubeCellSet$.prototype.getMetadata = function $$oj$$18$$$$CubeCellSet$$$getMetadata$($indexes$$17$$) {
    var $obj$$63$$ = {keys:{}};
    $obj$$63$$.keys.row = this.$_getAxisMetadata$($indexes$$17$$, "row", 2);
    $obj$$63$$.keys.column = this.$_getAxisMetadata$($indexes$$17$$, "column", 1);
    return $obj$$63$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getMetadata", {getMetadata:$oj$$18$$.$CubeCellSet$.prototype.getMetadata});
  $oj$$18$$.$CubeCellSet$.prototype.$_getAxisMetadata$ = function $$oj$$18$$$$CubeCellSet$$$$_getAxisMetadata$$($indexes$$18$$, $axis$$52$$, $keys$$34_len$$18$$) {
    var $axes$$3$$ = this.$_cube$.$getAxes$();
    return void 0 !== $indexes$$18$$[$axis$$52$$] && $axes$$3$$.length >= $keys$$34_len$$18$$ ? ($keys$$34_len$$18$$ = new $oj$$18$$.$CubeKeys$, $keys$$34_len$$18$$ = $axes$$3$$[$oj$$18$$.$CubeDataGridDataSource$.$_convertAxes$($axis$$52$$)].$GetCubeKeys$($indexes$$18$$[$axis$$52$$], $keys$$34_len$$18$$), $keys$$34_len$$18$$.$GetHashCodes$()[0].key) : null;
  };
  $oj$$18$$.$CubeCellSet$.prototype.getStart = function $$oj$$18$$$$CubeCellSet$$$getStart$($axis$$53$$) {
    return this.$_starts$[$axis$$53$$];
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getStart", {getStart:$oj$$18$$.$CubeCellSet$.prototype.getStart});
  $oj$$18$$.$CubeCellSet$.prototype.getCount = function $$oj$$18$$$$CubeCellSet$$$getCount$($axis$$54$$) {
    return this.$_counts$[$axis$$54$$];
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getCount", {getCount:$oj$$18$$.$CubeCellSet$.prototype.getCount});
  $oj$$18$$.$DataValueAttributeCube$ = function $$oj$$18$$$$DataValueAttributeCube$$($rowset$$1$$, $layout$$3$$, $dataValues$$) {
    this.Init();
    this.$_dataValues$ = $dataValues$$;
    this.$_buildAggTypeLookup$();
    $oj$$18$$.$DataValueAttributeCube$.$superclass$.constructor.call(this, $rowset$$1$$, $layout$$3$$);
  };
  $goog$exportPath_$$("DataValueAttributeCube", $oj$$18$$.$DataValueAttributeCube$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$DataValueAttributeCube$, $oj$$18$$.$Cube$, "oj.DataValueAttributeCube");
  $oj$$18$$.$DataValueAttributeCube$.prototype.$_rows$ = null;
  $oj$$18$$.$DataValueAttributeCube$.prototype.Init = function $$oj$$18$$$$DataValueAttributeCube$$$Init$() {
    $oj$$18$$.$DataValueAttributeCube$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$BuildCube$ = function $$oj$$18$$$$DataValueAttributeCube$$$$BuildCube$$() {
    $oj$$18$$.$DataValueAttributeCube$.$superclass$.$BuildCube$.call(this);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$GetAggType$ = function $$oj$$18$$$$DataValueAttributeCube$$$$GetAggType$$($dataValue$$1$$) {
    return this.$_dataValueAggType$[$dataValue$$1$$];
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$GenerateLevel$ = function $$oj$$18$$$$DataValueAttributeCube$$$$GenerateLevel$$($level$$41$$, $axis$$55$$) {
    return $level$$41$$.dataValue ? new $oj$$18$$.$CubeLevel$(null, $axis$$55$$, !0) : new $oj$$18$$.$CubeLevel$($level$$41$$.attribute, $axis$$55$$, !1);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$GenerateCube$ = function $$oj$$18$$$$DataValueAttributeCube$$$$GenerateCube$$($layout$$4$$) {
    return new $oj$$18$$.$DataValueAttributeCube$(null, $layout$$4$$, this.$_dataValues$);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$ProcessLevel$ = function $$oj$$18$$$$DataValueAttributeCube$$$$ProcessLevel$$($axis$$56$$, $levelNum$$1$$, $currNode$$1_node$$66$$, $row$$70$$, $keys$$35$$, $addKeys$$1$$) {
    if ($levelNum$$1$$ >= $axis$$56$$.$getLevels$().length) {
      return $keys$$35$$;
    }
    var $level$$42$$ = $axis$$56$$.$getLevels$()[$levelNum$$1$$];
    if ($level$$42$$.$isDataValue$()) {
      return this.$_processDataValue$($axis$$56$$, $currNode$$1_node$$66$$, $row$$70$$, $levelNum$$1$$, $keys$$35$$);
    }
    $currNode$$1_node$$66$$ = $currNode$$1_node$$66$$.$AddNode$($row$$70$$[$level$$42$$.attribute], null, $level$$42$$);
    $addKeys$$1$$ && $keys$$35$$.$UpdateKeys$($currNode$$1_node$$66$$);
    return this.$ProcessLevel$($axis$$56$$, $levelNum$$1$$ + 1, $currNode$$1_node$$66$$, $row$$70$$, $keys$$35$$, $addKeys$$1$$);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$_processDataValue$ = function $$oj$$18$$$$DataValueAttributeCube$$$$_processDataValue$$($axis$$57$$, $node$$67$$, $row$$71$$, $levelNum$$2$$, $keys$$36$$) {
    for (var $dsKeysAdded$$ = !0, $d$$7$$ = 0;$d$$7$$ < this.$_dataValues$.length;$d$$7$$++) {
      var $dvAttr$$ = this.$_dataValues$[$d$$7$$].attribute, $currNode$$2_dvLabel$$ = this.$_dataValues$[$d$$7$$].label;
      $row$$71$$.hasOwnProperty($dvAttr$$) && ($currNode$$2_dvLabel$$ = $node$$67$$.$AddNode$($dvAttr$$, $currNode$$2_dvLabel$$, $axis$$57$$.$getLevels$()[$levelNum$$2$$]), $keys$$36$$.$AddDataValue$($dvAttr$$, $row$$71$$[$dvAttr$$]), this.$ProcessLevel$($axis$$57$$, $levelNum$$2$$ + 1, $currNode$$2_dvLabel$$, $row$$71$$, $keys$$36$$, $dsKeysAdded$$), $dsKeysAdded$$ = !1);
    }
    return $keys$$36$$;
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$_buildAggTypeLookup$ = function $$oj$$18$$$$DataValueAttributeCube$$$$_buildAggTypeLookup$$() {
    this.$_dataValueAggType$ = [];
    for (var $i$$326$$ = 0;$i$$326$$ < this.$_dataValues$.length;$i$$326$$++) {
      var $dv$$ = this.$_dataValues$[$i$$326$$];
      this.$_dataValueAggType$[$dv$$.attribute] = $dv$$.aggregation ? {$aggregation$:$dv$$.aggregation, $callback$:$dv$$.callback} : {$aggregation$:$oj$$18$$.$CubeAggType$.SUM, $callback$:$dv$$.callback};
    }
  };
  $oj$$18$$.$CubeKeys$ = function $$oj$$18$$$$CubeKeys$$() {
    this.$_key$ = [];
    this.$_data$ = [];
  };
  $oj$$18$$.$CubeKeys$.prototype.$UpdateKeys$ = function $$oj$$18$$$$CubeKeys$$$$UpdateKeys$$($node$$68$$) {
    this.$_key$.push($node$$68$$);
  };
  $oj$$18$$.$CubeKeys$.prototype.$AddDataValue$ = function $$oj$$18$$$$CubeKeys$$$$AddDataValue$$($name$$118$$, $value$$260$$) {
    this.$_data$.push({name:$name$$118$$, value:$value$$260$$});
  };
  $oj$$18$$.$CubeKeys$.prototype.$GetHashCodes$ = function $$oj$$18$$$$CubeKeys$$$$GetHashCodes$$() {
    var $codes$$ = [], $keyHash$$ = this.$_buildKeyHash$();
    if (0 === this.$_data$.length) {
      $codes$$.push({key:JSON.stringify($keyHash$$)});
    } else {
      for (var $d$$8$$ = 0;$d$$8$$ < this.$_data$.length;$d$$8$$++) {
        var $copy$$ = $$$$17$$.extend(!0, {}, $keyHash$$);
        $copy$$[this.$_data$[$d$$8$$].name] = this.$_data$[$d$$8$$].name;
        $codes$$.push({key:JSON.stringify($copy$$), $dataValue$:this.$_data$[$d$$8$$].name, value:this.$_data$[$d$$8$$].value});
      }
    }
    return $codes$$;
  };
  $oj$$18$$.$CubeKeys$.prototype.$_buildKeyHash$ = function $$oj$$18$$$$CubeKeys$$$$_buildKeyHash$$() {
    for (var $keyHash$$1$$ = {}, $k$$15$$ = 0;$k$$15$$ < this.$_key$.length;$k$$15$$++) {
      var $hc$$ = this.$_key$[$k$$15$$].$GetHashCode$(), $p$$6$$;
      for ($p$$6$$ in $hc$$) {
        $hc$$.hasOwnProperty($p$$6$$) && ($keyHash$$1$$[$p$$6$$] = $hc$$[$p$$6$$]);
      }
    }
    return $keyHash$$1$$;
  };
  $oj$$18$$.$CubeHeaderSet$ = function $$oj$$18$$$$CubeHeaderSet$$($axis$$58$$, $cube$$5$$, $start$$46$$, $count$$36$$) {
    this.$_cube$ = $cube$$5$$;
    this.$_axis$ = $axis$$58$$;
    this.$_start$ = void 0 === $start$$46$$ ? 0 : $start$$46$$;
    this.$_count$ = void 0 === $count$$36$$ ? this.$_axis$.getExtent() : Math.min($count$$36$$, this.$_axis$.getExtent() - $start$$46$$);
    this.$_end$ = $start$$46$$ + $count$$36$$ - 1;
  };
  $goog$exportPath_$$("CubeHeaderSet", $oj$$18$$.$CubeHeaderSet$, $oj$$18$$);
  $oj$$18$$.$CubeHeaderSet$.prototype.getData = function $$oj$$18$$$$CubeHeaderSet$$$getData$($index$$162$$, $level$$43$$) {
    var $val$$51$$ = this.$_getValue$($index$$162$$, $level$$43$$);
    return $val$$51$$ ? $val$$51$$.$getLabel$() : null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getData", {getData:$oj$$18$$.$CubeHeaderSet$.prototype.getData});
  $oj$$18$$.$CubeHeaderSet$.prototype.getMetadata = function $$oj$$18$$$$CubeHeaderSet$$$getMetadata$($index$$163$$, $level$$44$$) {
    var $hash$$6_keys$$37$$ = new $oj$$18$$.$CubeKeys$, $hash$$6_keys$$37$$ = this.$_axis$.$GetPartialCubeKeys$($index$$163$$, $level$$44$$, $hash$$6_keys$$37$$);
    return($hash$$6_keys$$37$$ = $hash$$6_keys$$37$$.$GetHashCodes$()) && 0 < $hash$$6_keys$$37$$.length ? {key:$hash$$6_keys$$37$$[0].key} : null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getMetadata", {getMetadata:$oj$$18$$.$CubeHeaderSet$.prototype.getMetadata});
  $oj$$18$$.$CubeHeaderSet$.prototype.getLevelCount = function $$oj$$18$$$$CubeHeaderSet$$$getLevelCount$() {
    return this.$_axis$.$getLevels$().length;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getLevelCount", {getLevelCount:$oj$$18$$.$CubeHeaderSet$.prototype.getLevelCount});
  $oj$$18$$.$CubeHeaderSet$.prototype.getExtent = function $$oj$$18$$$$CubeHeaderSet$$$getExtent$($index$$164$$, $level$$45$$) {
    var $start$$47_val$$52$$ = this.$_getValue$($index$$164$$, $level$$45$$), $extent$$2$$ = $start$$47_val$$52$$.getExtent(), $start$$47_val$$52$$ = $start$$47_val$$52$$.getStart(), $end$$14$$ = $start$$47_val$$52$$ + $extent$$2$$ - 1, $after$$ = $index$$164$$ < $start$$47_val$$52$$ + $extent$$2$$ - 1;
    $start$$47_val$$52$$ < this.$_start$ && ($extent$$2$$ -= this.$_start$ - $start$$47_val$$52$$);
    $end$$14$$ > this.$_end$ && ($extent$$2$$ -= $end$$14$$ - this.$_end$);
    return{extent:$extent$$2$$, more:{before:$index$$164$$ > $start$$47_val$$52$$, after:$after$$}};
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getExtent", {getExtent:$oj$$18$$.$CubeHeaderSet$.prototype.getExtent});
  $oj$$18$$.$CubeHeaderSet$.prototype.getDepth = function $$oj$$18$$$$CubeHeaderSet$$$getDepth$($index$$165$$, $level$$46$$) {
    return this.$_getValue$($index$$165$$, $level$$46$$).getDepth();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getDepth", {getDepth:$oj$$18$$.$CubeHeaderSet$.prototype.getDepth});
  $oj$$18$$.$CubeHeaderSet$.prototype.getCount = function $$oj$$18$$$$CubeHeaderSet$$$getCount$() {
    return this.$_count$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getCount", {getCount:$oj$$18$$.$CubeHeaderSet$.prototype.getCount});
  $oj$$18$$.$CubeHeaderSet$.prototype.getStart = function $$oj$$18$$$$CubeHeaderSet$$$getStart$() {
    return this.$_start$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getStart", {getStart:$oj$$18$$.$CubeHeaderSet$.prototype.getStart});
  $oj$$18$$.$CubeHeaderSet$.prototype.$_getValue$ = function $$oj$$18$$$$CubeHeaderSet$$$$_getValue$$($index$$166$$, $level$$47$$) {
    void 0 === $level$$47$$ && ($level$$47$$ = 0);
    var $values$$11$$ = this.$_axis$.$getValues$($index$$166$$);
    return $values$$11$$ && $values$$11$$.length > $level$$47$$ ? $values$$11$$[$level$$47$$] : null;
  };
  $oj$$18$$.$CubeDataGridDataSource$ = function $$oj$$18$$$$CubeDataGridDataSource$$($cube$$6$$) {
    $oj$$18$$.$CubeDataGridDataSource$.$superclass$.constructor.call(this, $cube$$6$$);
  };
  $goog$exportPath_$$("CubeDataGridDataSource", $oj$$18$$.$CubeDataGridDataSource$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeDataGridDataSource$, $oj$$18$$.$DataGridDataSource$, "oj.CubeDataGridDataSource");
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$setCube$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$setCube$$($cube$$7$$) {
    this.data = $cube$$7$$;
    this.$_fireRefresh$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.setCube", {$setCube$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$setCube$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.setPage = function $$oj$$18$$$$CubeDataGridDataSource$$$setPage$($indices$$11$$) {
    this.data.setPage($indices$$11$$);
    this.$_fireRefresh$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.setPage", {setPage:$oj$$18$$.$CubeDataGridDataSource$.prototype.setPage});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_fireRefresh$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_fireRefresh$$() {
    this.handleEvent("change", {source:this, operation:"refresh"});
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.getCount = function $$oj$$18$$$$CubeDataGridDataSource$$$getCount$($axis$$59_axisObj$$) {
    return($axis$$59_axisObj$$ = this.$_getAxis$($axis$$59_axisObj$$)) ? $axis$$59_axisObj$$.getExtent() : 0;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.getCount", {getCount:$oj$$18$$.$CubeDataGridDataSource$.prototype.getCount});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.getCountPrecision = function $$oj$$18$$$$CubeDataGridDataSource$$$getCountPrecision$() {
    return "exact";
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.getCountPrecision", {getCountPrecision:$oj$$18$$.$CubeDataGridDataSource$.prototype.getCountPrecision});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.fetchHeaders = function $$oj$$18$$$$CubeDataGridDataSource$$$fetchHeaders$($headerRange$$13$$, $callbacks$$6$$, $callbackObjects$$) {
    var $cubeheaders$$ = new $oj$$18$$.$CubeHeaderSet$(this.$_getAxis$($headerRange$$13$$.axis), this.data, $headerRange$$13$$.start, $headerRange$$13$$.count);
    $callbacks$$6$$.success.call($callbackObjects$$ ? $callbackObjects$$.success : void 0, $cubeheaders$$, $headerRange$$13$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.fetchHeaders", {fetchHeaders:$oj$$18$$.$CubeDataGridDataSource$.prototype.fetchHeaders});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.fetchCells = function $$oj$$18$$$$CubeDataGridDataSource$$$fetchCells$($cellRange$$10$$, $callbacks$$7$$, $callbackObjects$$1$$) {
    for (var $cubecells_obj$$64$$ = {}, $i$$327$$ = 0;$i$$327$$ < $cellRange$$10$$.length;$i$$327$$++) {
      var $start$$48$$ = void 0 === $cellRange$$10$$[$i$$327$$].start ? 0 : $cellRange$$10$$[$i$$327$$].start;
      if ("row" === $cellRange$$10$$[$i$$327$$].axis) {
        var $count$$37$$ = void 0 === $cellRange$$10$$[$i$$327$$].count ? this.data.$getAxes$()[1].getExtent() : $cellRange$$10$$[$i$$327$$].count;
        $cubecells_obj$$64$$.row = {start:$start$$48$$, count:$count$$37$$};
      }
      "column" === $cellRange$$10$$[$i$$327$$].axis && ($count$$37$$ = void 0 === $cellRange$$10$$[$i$$327$$].count ? this.data.$getAxes$()[0].getExtent() : $cellRange$$10$$[$i$$327$$].count, $cubecells_obj$$64$$.column = {start:$start$$48$$, count:$count$$37$$});
    }
    $cubecells_obj$$64$$ = new $oj$$18$$.$CubeCellSet$(this.data, $cubecells_obj$$64$$);
    $callbacks$$7$$.success.call($callbackObjects$$1$$ ? $callbackObjects$$1$$.success : void 0, $cubecells_obj$$64$$, $cellRange$$10$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.fetchCells", {fetchCells:$oj$$18$$.$CubeDataGridDataSource$.prototype.fetchCells});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.keys = function $$oj$$18$$$$CubeDataGridDataSource$$$keys$($indexes$$19$$) {
    var $retObj$$13$$ = {}, $retObj$$13$$ = this.$_getKey$($indexes$$19$$, "row", $retObj$$13$$), $retObj$$13$$ = this.$_getKey$($indexes$$19$$, "column", $retObj$$13$$);
    return Promise.resolve($retObj$$13$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.keys", {keys:$oj$$18$$.$CubeDataGridDataSource$.prototype.keys});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_getKey$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_getKey$$($indexes$$20_item$$14$$, $axis$$61$$, $retObj$$14$$) {
    var $axisObj$$1$$ = this.$_getAxis$($axis$$61$$);
    $indexes$$20_item$$14$$ = $indexes$$20_item$$14$$[$axis$$61$$];
    var $keys$$38$$ = new $oj$$18$$.$CubeKeys$, $keys$$38$$ = $axisObj$$1$$ ? $axisObj$$1$$.$GetCubeKeys$($indexes$$20_item$$14$$, $keys$$38$$) : "";
    $retObj$$14$$[$axis$$61$$] = $keys$$38$$.$GetHashCodes$()[0].key;
    return $retObj$$14$$;
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.indexes = function $$oj$$18$$$$CubeDataGridDataSource$$$indexes$($keys$$39$$) {
    var $retObj$$15$$ = {}, $retObj$$15$$ = this.$_getIndex$($keys$$39$$, "row", $retObj$$15$$), $retObj$$15$$ = this.$_getIndex$($keys$$39$$, "column", $retObj$$15$$);
    return Promise.resolve($retObj$$15$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.indexes", {indexes:$oj$$18$$.$CubeDataGridDataSource$.prototype.indexes});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_getIndex$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_getIndex$$($keys$$40$$, $axis$$62$$, $retObj$$16$$) {
    $retObj$$16$$[$axis$$62$$] = this.$_getAxis$($axis$$62$$).$getIndex$($keys$$40$$[$axis$$62$$]);
    return $retObj$$16$$;
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.sort = function $$oj$$18$$$$CubeDataGridDataSource$$$sort$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.sort", {sort:$oj$$18$$.$CubeDataGridDataSource$.prototype.sort});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.move = function $$oj$$18$$$$CubeDataGridDataSource$$$move$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.move", {move:$oj$$18$$.$CubeDataGridDataSource$.prototype.move});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.moveOK = function $$oj$$18$$$$CubeDataGridDataSource$$$moveOK$() {
    return "invalid";
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.moveOK", {moveOK:$oj$$18$$.$CubeDataGridDataSource$.prototype.moveOK});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.getCapability = function $$oj$$18$$$$CubeDataGridDataSource$$$getCapability$($feature$$4$$) {
    switch($feature$$4$$) {
      case "sort":
        return "none";
      case "move":
        return "none";
    }
    return null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.getCapability", {getCapability:$oj$$18$$.$CubeDataGridDataSource$.prototype.getCapability});
  $oj$$18$$.$CubeDataGridDataSource$.$_convertAxes$ = function $$oj$$18$$$$CubeDataGridDataSource$$$_convertAxes$$($axis$$63$$) {
    return "row" === $axis$$63$$ ? 1 : 0;
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_getAxis$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_getAxis$$($axis$$64_axisNum$$) {
    $axis$$64_axisNum$$ = $oj$$18$$.$CubeDataGridDataSource$.$_convertAxes$($axis$$64_axisNum$$);
    var $axes$$4$$ = this.data.$getAxes$();
    return $axes$$4$$.length > $axis$$64_axisNum$$ ? $axes$$4$$[$axis$$64_axisNum$$] : null;
  };
  $oj$$18$$.$DataColumnCube$ = function $$oj$$18$$$$DataColumnCube$$($rowset$$2$$, $layout$$5$$, $dataValues$$1$$) {
    this.Init();
    this.$_dataValues$ = $dataValues$$1$$;
    this.$_valueAttr$ = $dataValues$$1$$.valueAttr;
    this.$_labelAttr$ = $dataValues$$1$$.labelAttr;
    var $defAgg$$ = $dataValues$$1$$.defaultAggregation;
    this.$_defaultAggregation$ = $defAgg$$ ? $oj$$18$$.$DataColumnCube$.$_getDefaultAgg$($defAgg$$) : {$aggregation$:$oj$$18$$.$CubeAggType$.SUM};
    this.$_aggregation$ = $dataValues$$1$$.aggregation;
    this.$_buildAggTypeLookup$();
    $oj$$18$$.$DataColumnCube$.$superclass$.constructor.call(this, $rowset$$2$$, $layout$$5$$);
  };
  $goog$exportPath_$$("DataColumnCube", $oj$$18$$.$DataColumnCube$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$DataColumnCube$, $oj$$18$$.$Cube$, "oj.DataColumnCube");
  $oj$$18$$.$DataColumnCube$.prototype.Init = function $$oj$$18$$$$DataColumnCube$$$Init$() {
    $oj$$18$$.$DataColumnCube$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$BuildCube$ = function $$oj$$18$$$$DataColumnCube$$$$BuildCube$$() {
    $oj$$18$$.$DataColumnCube$.$superclass$.$BuildCube$.call(this);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$GetAggType$ = function $$oj$$18$$$$DataColumnCube$$$$GetAggType$$($dataValue$$2$$) {
    return this.$_dataValueAggType$[$dataValue$$2$$] ? this.$_dataValueAggType$[$dataValue$$2$$] : this.$_defaultAggregation$;
  };
  $oj$$18$$.$DataColumnCube$.prototype.$GenerateCube$ = function $$oj$$18$$$$DataColumnCube$$$$GenerateCube$$($layout$$6$$) {
    return new $oj$$18$$.$DataColumnCube$(null, $layout$$6$$, this.$_dataValues$);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$GenerateLevel$ = function $$oj$$18$$$$DataColumnCube$$$$GenerateLevel$$($level$$48$$, $axis$$65$$) {
    return $level$$48$$.attribute === this.$_labelAttr$ ? new $oj$$18$$.$CubeLevel$($level$$48$$.attribute, $axis$$65$$, !0) : new $oj$$18$$.$CubeLevel$($level$$48$$.attribute, $axis$$65$$, !1);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$ProcessLevel$ = function $$oj$$18$$$$DataColumnCube$$$$ProcessLevel$$($axis$$66$$, $levelNum$$3$$, $currNode$$3_node$$69$$, $row$$72$$, $keys$$41$$, $addKeys$$2$$) {
    if ($levelNum$$3$$ >= $axis$$66$$.$getLevels$().length) {
      return $keys$$41$$;
    }
    var $level$$49$$ = $axis$$66$$.$getLevels$()[$levelNum$$3$$], $value$$261$$ = $row$$72$$[$level$$49$$.attribute];
    $currNode$$3_node$$69$$ = $currNode$$3_node$$69$$.$AddNode$($value$$261$$, null, $level$$49$$);
    $level$$49$$.$isDataValue$() ? $keys$$41$$.$AddDataValue$($value$$261$$, $row$$72$$[this.$_valueAttr$]) : $keys$$41$$.$UpdateKeys$($currNode$$3_node$$69$$);
    return this.$ProcessLevel$($axis$$66$$, $levelNum$$3$$ + 1, $currNode$$3_node$$69$$, $row$$72$$, $keys$$41$$, $addKeys$$2$$);
  };
  $oj$$18$$.$DataColumnCube$.$_getDefaultAgg$ = function $$oj$$18$$$$DataColumnCube$$$_getDefaultAgg$$($agg$$1$$) {
    return $oj$$18$$.$StringUtils$.$isString$($agg$$1$$) ? {$aggregation$:$agg$$1$$} : {$aggregation$:$agg$$1$$.aggregation, $callback$:$agg$$1$$.callback};
  };
  $oj$$18$$.$DataColumnCube$.prototype.$_buildAggTypeLookup$ = function $$oj$$18$$$$DataColumnCube$$$$_buildAggTypeLookup$$() {
    this.$_dataValueAggType$ = [];
    if (this.$_aggregation$) {
      for (var $i$$328$$ = 0;$i$$328$$ < this.$_aggregation$.length;$i$$328$$++) {
        var $dv$$1$$ = this.$_aggregation$[$i$$328$$], $agg$$2$$ = $dv$$1$$.aggregation;
        this.$_dataValueAggType$[$dv$$1$$.value] = $agg$$2$$ ? {$aggregation$:$agg$$2$$, $callback$:$dv$$1$$.callback} : this.$_defaultAggregation$;
      }
    }
  };
  $oj$$18$$.$CubeLevel$ = function $$oj$$18$$$$CubeLevel$$($attribute$$5$$, $axis$$67$$, $dataValue$$3$$) {
    this.Init();
    this.attribute = $attribute$$5$$;
    this.$_axisObj$ = $axis$$67$$;
    this.axis = $axis$$67$$.axis;
    this.$_dataValue$ = $dataValue$$3$$;
  };
  $goog$exportPath_$$("CubeLevel", $oj$$18$$.$CubeLevel$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeLevel$, $oj$$18$$.$Object$, "oj.CubeLevel");
  $oj$$18$$.$CubeLevel$.prototype.Init = function $$oj$$18$$$$CubeLevel$$$Init$() {
    $oj$$18$$.$CubeLevel$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeLevel$.prototype.$getValue$ = function $$oj$$18$$$$CubeLevel$$$$getValue$$($index$$167_values$$12$$) {
    if ($index$$167_values$$12$$ = this.$_axisObj$.$getValues$($index$$167_values$$12$$)) {
      for (var $v$$3$$ = 0;$v$$3$$ < $index$$167_values$$12$$.length;$v$$3$$++) {
        if ($index$$167_values$$12$$[$v$$3$$].$getLevel$() === this) {
          return $index$$167_values$$12$$[$v$$3$$];
        }
      }
    }
    return null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeLevel.prototype.getValue", {$getValue$:$oj$$18$$.$CubeLevel$.prototype.$getValue$});
  $oj$$18$$.$CubeLevel$.prototype.$isDataValue$ = function $$oj$$18$$$$CubeLevel$$$$isDataValue$$() {
    return this.$_dataValue$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeLevel.prototype.isDataValue", {$isDataValue$:$oj$$18$$.$CubeLevel$.prototype.$isDataValue$});
  $oj$$18$$.$CubeLevel$.prototype.$_dataValue$ = !1;
  $oj$$18$$.$CubeLevel$.prototype.$_axisObj$ = null;
});
