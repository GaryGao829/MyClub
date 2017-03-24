/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$79$$, $ko$$10$$) {
  $oj$$79$$.$KnockoutUtils$ = function $$oj$$79$$$$KnockoutUtils$$() {
  };
  $goog$exportPath_$$("KnockoutUtils", $oj$$79$$.$KnockoutUtils$, $oj$$79$$);
  $oj$$79$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$79$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$79$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$79$$.$KnockoutUtils$.$subscriptionProp$ = "oj.collectionSubscription";
  $oj$$79$$.$KnockoutUtils$.$updatingCollectionFunc$ = "oj.collectionUpdatingFunc";
  $oj$$79$$.$KnockoutUtils$.map = function $$oj$$79$$$$KnockoutUtils$$map$($m$$28$$, $callback$$147$$, $array$$18_data$$182_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$333$$) {
        $koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] || $m$$28$$.set($argProp$$, $value$$333$$);
      };
    }
    var $koObject$$, $i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$, $converted_index$$339_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if ($m$$28$$ instanceof $oj$$79$$.$Collection$) {
      $i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$ = Array($m$$28$$.$_getLength$());
      $koObject$$ = $array$$18_data$$182_updateObservable_updateObservableArrayRemove$$ ? $ko$$10$$.observableArray($i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$) : $i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$;
      $oj$$79$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$28$$);
      if ($array$$18_data$$182_updateObservable_updateObservableArrayRemove$$) {
        for ($i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$ = 0;$i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$ < $m$$28$$.$_modelIndices$.length;$i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$339_updateObservableArrayReset$$ = $m$$28$$.$_modelIndices$[$i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$], $koObject$$()[$converted_index$$339_updateObservableArrayReset$$] = $oj$$79$$.$KnockoutUtils$.map($m$$28$$.$_atInternal$($converted_index$$339_updateObservableArrayReset$$, null, !0, !1), $callback$$147$$);
        }
      } else {
        for ($i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$ = 0;$i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$ < $m$$28$$.$_modelIndices$.length;$i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$339_updateObservableArrayReset$$ = $m$$28$$.$_modelIndices$[$i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$], $koObject$$[$converted_index$$339_updateObservableArrayReset$$] = $oj$$79$$.$KnockoutUtils$.map($m$$28$$.$_atInternal$($converted_index$$339_updateObservableArrayReset$$, null, !0, !1), $callback$$147$$);
        }
      }
      $i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$ = function $$i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$$($changes$$7$$) {
        var $i$$535$$;
        try {
          if (!$koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$79$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for ($i$$535$$ = 0;$i$$535$$ < $changes$$7$$.length;$i$$535$$++) {
              var $index$$340$$ = $changes$$7$$[$i$$535$$].index, $model$$103$$ = $oj$$79$$.$KnockoutUtils$.$_getModel$($changes$$7$$[$i$$535$$].value), $status$$34$$ = $changes$$7$$[$i$$535$$].status;
              "added" === $status$$34$$ ? $index$$340$$ >= $m$$28$$.length - 1 ? $m$$28$$.add($model$$103$$) : $m$$28$$.add($model$$103$$, {at:$index$$340$$}) : "deleted" === $status$$34$$ && $m$$28$$.$_removeInternal$($model$$103$$, $index$$340$$);
            }
            $m$$28$$.comparator && ($koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$124$$, $b$$72$$) {
              return $oj$$79$$.$KnockoutUtils$.$_callSort$($a$$124$$, $b$$72$$, $m$$28$$.comparator, $m$$28$$, this);
            }), $koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] = !1);
          }
        } catch ($e$$140$$) {
          throw $e$$140$$;
        } finally {
          $koObject$$[$oj$$79$$.$KnockoutUtils$.$collUpdatingProp$] = !1;
        }
      };
      $array$$18_data$$182_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && ($koObject$$[$oj$$79$$.$KnockoutUtils$.$updatingCollectionFunc$] = $i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$, $koObject$$[$oj$$79$$.$KnockoutUtils$.$subscriptionProp$] = $koObject$$.subscribe($i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$, null, "arrayChange"));
      $array$$18_data$$182_updateObservable_updateObservableArrayRemove$$ = function $$array$$18_data$$182_updateObservable_updateObservableArrayRemove$$$($model$$104$$, $collection$$60$$, $options$$426$$) {
        var $index$$341$$;
        try {
          !$koObject$$[$oj$$79$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$60$$ instanceof $oj$$79$$.$Collection$ && ($koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$341$$ = $options$$426$$.index, $koObject$$.splice($index$$341$$, 1));
        } catch ($e$$141$$) {
          throw $e$$141$$;
        } finally {
          $koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$ = function $$i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$$($model$$105$$, $collection$$61$$, $options$$427$$) {
        var $index$$342$$, $newObservable$$;
        try {
          if (!$koObject$$[$oj$$79$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$61$$ instanceof $oj$$79$$.$Collection$ && ($koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$342$$ = $collection$$61$$.$_localIndexOf$($model$$105$$), void 0 !== $index$$342$$ && -1 < $index$$342$$)) {
            if ($newObservable$$ = $oj$$79$$.$KnockoutUtils$.map($model$$105$$, $callback$$147$$), $options$$427$$.fillIn) {
              for (var $i$$536$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$536$$ < $index$$342$$;$i$$536$$++) {
                $koObject$$.splice($i$$536$$, 0, $oj$$79$$.$KnockoutUtils$.map($collection$$61$$.$_atInternal$($i$$536$$, null, !0, !1), $callback$$147$$));
              }
              $koObject$$.splice($index$$342$$, 1, $newObservable$$);
            } else {
              $koObject$$.splice($index$$342$$, 0, $newObservable$$);
            }
          }
        } catch ($e$$142$$) {
          throw $e$$142$$;
        } finally {
          $koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $converted_index$$339_updateObservableArrayReset$$ = function $$converted_index$$339_updateObservableArrayReset$$$($collection$$62$$) {
        try {
          !$koObject$$[$oj$$79$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$62$$ instanceof $oj$$79$$.$Collection$ && ($koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$10$$.isObservable($koObject$$) ? ($koObject$$[$oj$$79$$.$KnockoutUtils$.$subscriptionProp$] && $koObject$$[$oj$$79$$.$KnockoutUtils$.$subscriptionProp$].dispose(), $koObject$$.removeAll(), $koObject$$[$oj$$79$$.$KnockoutUtils$.$updatingCollectionFunc$] && $koObject$$.subscribe($koObject$$[$oj$$79$$.$KnockoutUtils$.$updatingCollectionFunc$], 
          null, "arrayChange")) : $koObject$$ = []);
        } catch ($e$$143$$) {
          throw $e$$143$$;
        } finally {
          $koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$63$$) {
        try {
          !$koObject$$[$oj$$79$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$63$$ instanceof $oj$$79$$.$Collection$ && ($koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$125$$, $b$$73$$) {
            return $oj$$79$$.$KnockoutUtils$.$_callSort$($a$$125$$, $b$$73$$, $m$$28$$.comparator, $collection$$63$$, this);
          }));
        } catch ($e$$144$$) {
          throw $e$$144$$;
        } finally {
          $koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$28$$.$OnInternal$($oj$$79$$.$Events$.$EventType$.ADD, $i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$28$$.$OnInternal$($oj$$79$$.$Events$.$EventType$.REMOVE, $array$$18_data$$182_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$28$$.$OnInternal$($oj$$79$$.$Events$.$EventType$.RESET, $converted_index$$339_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$28$$.$OnInternal$($oj$$79$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0);
    } else {
      if (void 0 === $m$$28$$) {
        return;
      }
      $koObject$$ = {};
      $array$$18_data$$182_updateObservable_updateObservableArrayRemove$$ = $m$$28$$.attributes;
      $i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$ = null;
      for ($i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$ in $array$$18_data$$182_updateObservable_updateObservableArrayRemove$$) {
        $array$$18_data$$182_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$) && ($converted_index$$339_updateObservableArrayReset$$ = $ko$$10$$.observable($m$$28$$.get($i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$] = $converted_index$$339_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = 
        $_makeUpdateModel$$($i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$), $updateModel_updateObservableArraySort$$.$_prop$ = $i$$534_prealloc_prop$$86_updateCollection_updateObservableArrayAdd$$, $converted_index$$339_updateObservableArrayReset$$.subscribe && $converted_index$$339_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$));
      }
      $array$$18_data$$182_updateObservable_updateObservableArrayRemove$$ = function $$array$$18_data$$182_updateObservable_updateObservableArrayRemove$$$($model$$106$$) {
        var $attrs$$23$$, $prop$$87$$;
        try {
          for ($prop$$87$$ in $koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$23$$ = $model$$106$$.$changedAttributes$(), $attrs$$23$$) {
            if ($attrs$$23$$.hasOwnProperty($prop$$87$$)) {
              $koObject$$[$prop$$87$$]($model$$106$$.get($prop$$87$$));
            }
          }
        } catch ($e$$145$$) {
          throw $e$$145$$;
        } finally {
          $koObject$$[$oj$$79$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$28$$.$OnInternal$($oj$$79$$.$Events$.$EventType$.CHANGE, $array$$18_data$$182_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$79$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$28$$);
      $callback$$147$$ && $callback$$147$$($koObject$$);
    }
    return $koObject$$;
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$79$$.$KnockoutUtils$.map, $oj$$79$$);
  $oj$$79$$.$KnockoutUtils$.$_getModel$ = function $$oj$$79$$$$KnockoutUtils$$$_getModel$$($val$$95$$) {
    return $val$$95$$ instanceof $oj$$79$$.$Model$ ? $val$$95$$ : $val$$95$$.hasOwnProperty($oj$$79$$.$KnockoutUtils$.$internalObjectProperty$) ? $val$$95$$[$oj$$79$$.$KnockoutUtils$.$internalObjectProperty$] : $val$$95$$;
  };
  $oj$$79$$.$KnockoutUtils$.$_callSort$ = function $$oj$$79$$$$KnockoutUtils$$$_callSort$$($a$$126$$, $b$$74$$, $comparator$$16$$, $collection$$64$$, $caller$$8$$) {
    return $oj$$79$$.$Collection$.$SortFunc$($oj$$79$$.$KnockoutUtils$.$_getModel$($a$$126$$), $oj$$79$$.$KnockoutUtils$.$_getModel$($b$$74$$), $comparator$$16$$, $collection$$64$$, $caller$$8$$);
  };
  $oj$$79$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$79$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$6$$, $value$$334$$) {
    Object.defineProperty($object$$6$$, $oj$$79$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$334$$, enumerable:!1});
  };
});
