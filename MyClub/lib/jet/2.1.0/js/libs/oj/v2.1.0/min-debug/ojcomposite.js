/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "ojs/ojknockout"], function($oj$$68$$, $ko$$7$$) {
  function $PropertyUpdater$$($element$$237$$, $bindingContext$$47$$, $parseFunction$$) {
    function $_setPropertyFromAttribute$$($metadata$$17$$, $propName$$6$$, $attrVal$$1_value$$314$$) {
      $_setupExpression$$($attrVal$$1_value$$314$$, $propName$$6$$, $metadata$$17$$) || $metadata$$17$$.readOnly || ($attrVal$$1_value$$314$$ = $parseFunction$$ ? $parseFunction$$($attrVal$$1_value$$314$$, $propName$$6$$, $metadata$$17$$, function($value$$315$$) {
        return $_coerceValue$$($value$$315$$, $metadata$$17$$.type);
      }) : $_coerceValue$$($attrVal$$1_value$$314$$, $metadata$$17$$.type), $_setElementProperty$$($propName$$6$$, $attrVal$$1_value$$314$$));
    }
    function $_coerceValue$$($val$$75$$, $type$$106$$) {
      switch($type$$106$$.toLowerCase()) {
        case "boolean":
          return Boolean($val$$75$$);
        case "number":
          return Number($val$$75$$);
        case "string":
          return $val$$75$$;
        default:
          try {
            return JSON.parse($val$$75$$);
          } catch ($ex$$2$$) {
            return $val$$75$$;
          }
        ;
      }
    }
    function $_attributeToPropertyName$$($attr$$21$$) {
      return $attr$$21$$.toLowerCase().replace(/-(.)/g, function($match$$26$$, $group1$$) {
        return $group1$$.toUpperCase();
      });
    }
    function $_setupExpression$$($attrVal$$2_info$$5$$, $propName$$7$$, $metadata$$18$$) {
      $attrVal$$2_info$$5$$ = $oj$$68$$.$ExpressionUtils$.$getExpressionInfo$($attrVal$$2_info$$5$$);
      delete $propsWithLocalValue$$[$propName$$7$$];
      var $changeListener_oldListener_readOnly$$4$$ = $expressionListeners$$[$propName$$7$$];
      $changeListener_oldListener_readOnly$$4$$ && ($changeListener_oldListener_readOnly$$4$$.dispose(), delete $expressionListeners$$[$propName$$7$$]);
      if ($changeListener_oldListener_readOnly$$4$$ = $changeListeners$$[$propName$$7$$]) {
        $element$$237$$.removeEventListener($propName$$7$$ + $_CHANGED_EVENT_SUFFIX$$, $changeListener_oldListener_readOnly$$4$$), delete $changeListeners$$[$propName$$7$$];
      }
      var $cleanupObservableListener$$, $changeListener_oldListener_readOnly$$4$$ = $metadata$$18$$.readOnly;
      $changeListener_oldListener_readOnly$$4$$ || ($cleanupObservableListener$$ = function $$cleanupObservableListener$$$() {
        var $observableListener$$ = $observableListeners$$[$propName$$7$$];
        $observableListener$$ && ($observableListener$$.dispose(), delete $observableListeners$$[$propName$$7$$]);
      }, $cleanupObservableListener$$());
      var $expr$$5$$ = $attrVal$$2_info$$5$$.expr;
      if ($expr$$5$$) {
        var $evaluator$$ = $oj$$68$$.$ComponentBinding$.$__CreateEvaluator$($expr$$5$$);
        $changeListener_oldListener_readOnly$$4$$ || $ko$$7$$.ignoreDependencies(function() {
          $expressionListeners$$[$propName$$7$$] = $ko$$7$$.computed(function() {
            $cleanupObservableListener$$();
            if (!$propsWithLocalValue$$[$propName$$7$$]) {
              var $value$$316$$ = $evaluator$$($bindingContext$$47$$);
              $ko$$7$$.isObservable($value$$316$$) ? $observableListeners$$[$propName$$7$$] = $_setAndWatchObservableValue$$($propName$$7$$, $value$$316$$) : $_setElementProperty$$($propName$$7$$, $value$$316$$);
            }
          });
        });
        $changeListeners$$[$propName$$7$$] = $_listenToPropertyChanges$$($propName$$7$$, $expr$$5$$, $evaluator$$, $metadata$$18$$.writeback && !$attrVal$$2_info$$5$$.$downstreamOnly$);
        return!0;
      }
      return!1;
    }
    function $_setAndWatchObservableValue$$($propName$$8$$, $value$$317$$) {
      $ko$$7$$.ignoreDependencies(function() {
        $_setElementProperty$$($propName$$8$$, $ko$$7$$.utils.unwrapObservable($value$$317$$));
      });
      return $value$$317$$.subscribe(function($newVal$$5$$) {
        $propsWithLocalValue$$[$propName$$8$$] || $_setElementProperty$$($propName$$8$$, $newVal$$5$$);
      });
    }
    function $_listenToPropertyChanges$$($propName$$9$$, $expr$$6$$, $evaluator$$1$$, $writable$$) {
      function $listener$$43$$($evt$$29$$) {
        var $written$$ = !1;
        $_settingProperty$$ || ($writable$$ && $ko$$7$$.ignoreDependencies(function() {
          var $value$$318$$ = $evt$$29$$.detail.value, $target$$140_writerExpr$$1$$ = $evaluator$$1$$($bindingContext$$47$$);
          $ko$$7$$.isWriteableObservable($target$$140_writerExpr$$1$$) ? ($written$$ = !0, $target$$140_writerExpr$$1$$($value$$318$$)) : ($target$$140_writerExpr$$1$$ = $oj$$68$$.$ExpressionUtils$.$getPropertyWriterExpression$($expr$$6$$), null != $target$$140_writerExpr$$1$$ && ($oj$$68$$.$ComponentBinding$.$__CreateEvaluator$($target$$140_writerExpr$$1$$)($bindingContext$$47$$)($value$$318$$), $written$$ = !0));
        }), $written$$ || ($propsWithLocalValue$$[$propName$$9$$] = !0));
      }
      $element$$237$$.addEventListener($propName$$9$$ + $_CHANGED_EVENT_SUFFIX$$, $listener$$43$$);
      return $listener$$43$$;
    }
    function $_propertyNameToAttribute$$($name$$130$$) {
      return $name$$130$$.replace(/([A-Z])/g, function($match$$27$$) {
        return "-" + $match$$27$$.toLowerCase();
      });
    }
    function $_setElementProperty$$($propName$$10$$, $value$$319$$) {
      $_settingProperty$$ = !0;
      try {
        $element$$237$$[$propName$$10$$] = $value$$319$$;
      } finally {
        $_settingProperty$$ = !1;
      }
    }
    this.$setup$ = function $this$$setup$$($metadata$$19_names$$3$$) {
      var $metadataProps$$ = $metadata$$19_names$$3$$.properties;
      if ($metadataProps$$) {
        $originalMethods$$.setAttribute = $element$$237$$.setAttribute;
        $originalMethods$$.removeAttribute = $element$$237$$.removeAttribute;
        $element$$237$$.setAttribute = function $$element$$237$$$setAttribute$($name$$131$$, $value$$320$$) {
          $changeAttribute$$($name$$131$$, $value$$320$$, $originalMethods$$.setAttribute);
        };
        $element$$237$$.removeAttribute = function $$element$$237$$$removeAttribute$($name$$132$$) {
          $changeAttribute$$($name$$132$$, null, $originalMethods$$.removeAttribute);
        };
        var $changeAttribute$$ = function $$changeAttribute$$$($name$$133$$, $value$$321$$, $operation$$10$$) {
          $name$$133$$ = $name$$133$$.toLowerCase();
          var $previousValue$$2$$ = $element$$237$$.getAttribute($name$$133$$);
          $operation$$10$$.apply($element$$237$$, arguments);
          var $newValue$$30$$ = $element$$237$$.getAttribute($name$$133$$), $propName$$11$$ = $_attributeToPropertyName$$($name$$133$$);
          $element$$237$$.hasOwnProperty($propName$$11$$) && $newValue$$30$$ !== $previousValue$$2$$ && $_setPropertyFromAttribute$$($metadataProps$$[$propName$$11$$], $propName$$11$$, $newValue$$30$$);
        };
        $metadata$$19_names$$3$$ = Object.keys($metadataProps$$);
        $_initializing$$ = !0;
        try {
          $metadata$$19_names$$3$$.forEach(function($name$$134$$) {
            var $attrName$$1_attrVal$$3$$ = $_propertyNameToAttribute$$($name$$134$$), $propertyMetadata$$ = $metadataProps$$[$name$$134$$];
            $element$$237$$.hasAttribute($attrName$$1_attrVal$$3$$) ? ($attrName$$1_attrVal$$3$$ = $element$$237$$.getAttribute($attrName$$1_attrVal$$3$$), $_setPropertyFromAttribute$$($propertyMetadata$$, $name$$134$$, $attrName$$1_attrVal$$3$$)) : $propertyMetadata$$.readOnly || ($element$$237$$[$name$$134$$] = $propertyMetadata$$.value);
          });
        } finally {
          $_initializing$$ = !1;
        }
      }
      return this;
    };
    this.$isInitializing$ = function $this$$isInitializing$$() {
      return $_initializing$$;
    };
    this.$teardown$ = function $this$$teardown$$($element$$238$$) {
      var $names$$4$$;
      [$observableListeners$$, $expressionListeners$$].forEach(function($i$$451_listeners$$) {
        $names$$4$$ = Object.keys($i$$451_listeners$$);
        for ($i$$451_listeners$$ = 0;$i$$451_listeners$$ < $names$$4$$.length;$i$$451_listeners$$++) {
          $expressionListeners$$[$names$$4$$[$i$$451_listeners$$]].dispose();
        }
      });
      $observableListeners$$ = {};
      $expressionListeners$$ = {};
      $names$$4$$ = Object.keys($originalMethods$$);
      var $i$$450$$;
      for ($i$$450$$ = 0;$i$$450$$ < $names$$4$$.length;$i$$450$$++) {
        var $method$$9_prop$$82$$ = $names$$4$$[$i$$450$$];
        $element$$238$$[$method$$9_prop$$82$$] = $originalMethods$$[$method$$9_prop$$82$$];
      }
      $originalMethods$$ = {};
      $names$$4$$ = Object.keys($changeListeners$$);
      for ($i$$450$$ = 0;$i$$450$$ < $names$$4$$.length;$i$$450$$++) {
        $method$$9_prop$$82$$ = $names$$4$$[$i$$450$$], $element$$238$$.removeEventListener($method$$9_prop$$82$$ + $_CHANGED_EVENT_SUFFIX$$, $changeListeners$$[$method$$9_prop$$82$$]);
      }
      $changeListeners$$ = {};
    };
    var $expressionListeners$$ = {}, $observableListeners$$ = {}, $changeListeners$$ = {}, $originalMethods$$ = {}, $propsWithLocalValue$$ = {}, $_initializing$$, $_settingProperty$$, $_CHANGED_EVENT_SUFFIX$$ = "-changed";
  }
  function $_getResourcePromise$$($descriptor$$3$$, $resourceType$$) {
    var $key$$194_promise$$15$$ = null, $val$$76_value$$322$$ = $descriptor$$3$$[$resourceType$$];
    if (null != $val$$76_value$$322$$) {
      $key$$194_promise$$15$$ = Object.keys($val$$76_value$$322$$)[0];
      $val$$76_value$$322$$ = $val$$76_value$$322$$[$key$$194_promise$$15$$];
      if (null == $key$$194_promise$$15$$) {
        throw "Invalid component descriptor key";
      }
      switch($key$$194_promise$$15$$) {
        case "inline":
          $key$$194_promise$$15$$ = Promise.resolve($val$$76_value$$322$$);
          break;
        case "promise":
          $key$$194_promise$$15$$ = $val$$76_value$$322$$;
          break;
        default:
          throw "Invalid descriptor key " + $key$$194_promise$$15$$ + " for the resopurce type: " + $resourceType$$;;
      }
    }
    return $key$$194_promise$$15$$;
  }
  function $_invokeCompositeViewModelMethod$$($model$$95$$, $handler$$55_key$$195_name$$136$$, $args$$24$$) {
    if (null != $model$$95$$ && ($handler$$55_key$$195_name$$136$$ = $oj$$68$$.$Composite$.$defaults$[$handler$$55_key$$195_name$$136$$], null != $handler$$55_key$$195_name$$136$$ && $model$$95$$ && ($handler$$55_key$$195_name$$136$$ = $model$$95$$[$handler$$55_key$$195_name$$136$$], "function" === typeof $handler$$55_key$$195_name$$136$$))) {
      return $ko$$7$$.ignoreDependencies($handler$$55_key$$195_name$$136$$, $model$$95$$, $args$$24$$);
    }
  }
  function $_setupProperties$$($element$$239$$, $props$$27$$, $metadata$$20$$, $propertyUpdater$$) {
    $_enumMetadataProperty$$($metadata$$20$$, "properties", function($name$$137$$, $propMetadata$$) {
      $_defineDynamicCompositeProperty$$($element$$239$$, $props$$27$$, $name$$137$$, $propMetadata$$, $propertyUpdater$$);
    });
  }
  function $_setupMethods$$($element$$240$$, $metadata$$21$$, $model$$96$$) {
    $_enumMetadataProperty$$($metadata$$21$$, "methods", function($name$$138$$) {
      var $internalName$$ = $metadata$$21$$.methods[$name$$138$$].internalName;
      $element$$240$$[$name$$138$$] = $internalName$$ ? $model$$96$$[$internalName$$].bind($model$$96$$) : $model$$96$$[$name$$138$$].bind($model$$96$$);
    });
  }
  function $_defineDynamicCompositeProperty$$($element$$241$$, $props$$28$$, $name$$139$$, $metadata$$22$$, $propertyUpdater$$1$$) {
    function $innerSet$$($evt$$inline_1294_val$$77$$) {
      var $old$$ = $propertyTracker$$.peek();
      $old$$ !== $evt$$inline_1294_val$$77$$ && ($propertyTracker$$($evt$$inline_1294_val$$77$$), $propertyUpdater$$1$$.$isInitializing$() || ($evt$$inline_1294_val$$77$$ = new CustomEvent($name$$139$$ + "-changed", {detail:{value:$evt$$inline_1294_val$$77$$, previousValue:$old$$}}), $element$$241$$.dispatchEvent($evt$$inline_1294_val$$77$$)));
    }
    var $propertyTracker$$ = $ko$$7$$.observable();
    $_defineDynamicObjectProperty$$($props$$28$$, $name$$139$$, function() {
      return $propertyTracker$$();
    }, $innerSet$$);
    $_defineDynamicObjectProperty$$($element$$241$$, $name$$139$$, function() {
      return $propertyTracker$$.peek();
    }, function($val$$78$$) {
      if ($metadata$$22$$.readOnly) {
        throw "Read-only property " + $name$$139$$ + " cannot be set";
      }
      $innerSet$$($val$$78$$);
    });
  }
  function $_defineDynamicObjectProperty$$($obj$$68$$, $name$$140$$, $getter$$3$$, $setter$$) {
    Object.defineProperty($obj$$68$$, $name$$140$$, {configurable:!0, enumerable:!0, get:$getter$$3$$, set:$setter$$});
  }
  function $_enumMetadataProperty$$($metadata$$23$$, $property$$26$$, $callback$$138$$) {
    if ($metadata$$23$$) {
      var $properties$$8$$ = $metadata$$23$$[$property$$26$$] || {};
      Object.keys($properties$$8$$).forEach(function($name$$142$$) {
        $callback$$138$$($name$$142$$, $properties$$8$$[$name$$142$$]);
      });
    }
  }
  function $_resetElement$$($element$$243$$, $metadata$$24$$) {
    ["methods", "properties"].forEach(function($type$$108$$) {
      $_enumMetadataProperty$$($metadata$$24$$, $type$$108$$, function($name$$143$$) {
        delete $element$$243$$[$name$$143$$];
      });
    });
  }
  function $_createSlotMap$$($childNodeList_element$$244$$) {
    var $slotMap$$ = {};
    $childNodeList_element$$244$$ = $childNodeList_element$$244$$.childNodes;
    for (var $i$$452$$ = 0;$i$$452$$ < $childNodeList_element$$244$$.length;$i$$452$$++) {
      var $child$$14$$ = $childNodeList_element$$244$$[$i$$452$$];
      if ((1 === $child$$14$$.nodeType || 3 === $child$$14$$.nodeType) && (3 !== $child$$14$$.nodeType || $child$$14$$.nodeValue.trim())) {
        var $savedSlot_slot$$ = $child$$14$$.__oj_slots;
        ($savedSlot_slot$$ = null != $savedSlot_slot$$ ? $savedSlot_slot$$ : $child$$14$$.getAttribute && $child$$14$$.getAttribute("slot")) || ($savedSlot_slot$$ = "");
        $slotMap$$[$savedSlot_slot$$] || ($slotMap$$[$savedSlot_slot$$] = []);
        $slotMap$$[$savedSlot_slot$$].push($child$$14$$);
      }
    }
    return $slotMap$$;
  }
  function $_storeNodes$$($element$$245$$, $view$$4$$) {
    var $nodeStorage$$, $childNodes$$ = $element$$245$$.childNodes;
    if ($childNodes$$) {
      $nodeStorage$$ = document.createElement("div");
      $nodeStorage$$.setAttribute("data-bind", "_ojNodeStorage_");
      $nodeStorage$$.style.display = "none";
      $view$$4$$.push($nodeStorage$$);
      for (var $assignableNodes$$ = [], $i$$453$$ = 0;$i$$453$$ < $childNodes$$.length;$i$$453$$++) {
        var $node$$115$$ = $childNodes$$[$i$$453$$];
        1 !== $node$$115$$.nodeType && 3 !== $node$$115$$.nodeType || $assignableNodes$$.push($node$$115$$);
      }
      $assignableNodes$$.forEach(function($node$$116$$) {
        $nodeStorage$$.appendChild($node$$116$$);
      });
    }
    return $nodeStorage$$;
  }
  $ko$$7$$.bindingHandlers._ojNodeStorage_ = {init:function $$ko$$7$$$bindingHandlers$_ojNodeStorage_$init$() {
    return{controlsDescendantBindings:!0};
  }};
  $ko$$7$$.bindingHandlers._ojSlot_ = {init:function $$ko$$7$$$bindingHandlers$_ojSlot_$init$($element$$247$$, $valueAccessor$$27_values$$15$$, $allBindingsAccessor$$22_unwrap$$1$$, $assignedNodes_slots_viewModel$$7$$, $bindingContext$$48_i$$454_slotName$$) {
    $ko$$7$$.utils.domNodeDisposal.addDisposeCallback($element$$247$$, function cleanup$$1($bindingContext$$49_nodeStorage$$1$$) {
      if ($bindingContext$$49_nodeStorage$$1$$ = $bindingContext$$49_nodeStorage$$1$$.__oj_nodestorage) {
        for (var $node$$118$$;$node$$118$$ = $ko$$7$$.virtualElements.firstChild($element$$247$$);) {
          null != $node$$118$$.__oj_slots && $bindingContext$$49_nodeStorage$$1$$.appendChild($node$$118$$);
        }
      }
    }.bind(null, $bindingContext$$48_i$$454_slotName$$));
    $assignedNodes_slots_viewModel$$7$$ = $bindingContext$$48_i$$454_slotName$$.__oj_slots;
    $valueAccessor$$27_values$$15$$ = $valueAccessor$$27_values$$15$$();
    $allBindingsAccessor$$22_unwrap$$1$$ = $ko$$7$$.utils.unwrapObservable;
    $bindingContext$$48_i$$454_slotName$$ = $allBindingsAccessor$$22_unwrap$$1$$($valueAccessor$$27_values$$15$$.name) || "";
    var $index$$320$$ = $allBindingsAccessor$$22_unwrap$$1$$($valueAccessor$$27_values$$15$$.index);
    if ($assignedNodes_slots_viewModel$$7$$ = null != $index$$320$$ ? [$assignedNodes_slots_viewModel$$7$$[$bindingContext$$48_i$$454_slotName$$][$index$$320$$]] : $assignedNodes_slots_viewModel$$7$$[$bindingContext$$48_i$$454_slotName$$]) {
      for ($bindingContext$$48_i$$454_slotName$$ = 0;$bindingContext$$48_i$$454_slotName$$ < $assignedNodes_slots_viewModel$$7$$.length;$bindingContext$$48_i$$454_slotName$$++) {
        $assignedNodes_slots_viewModel$$7$$[$bindingContext$$48_i$$454_slotName$$].__oj_slots = $allBindingsAccessor$$22_unwrap$$1$$($valueAccessor$$27_values$$15$$.slot) || "";
      }
      $ko$$7$$.virtualElements.setDomNodeChildren($element$$247$$, $assignedNodes_slots_viewModel$$7$$);
      return{controlsDescendantBindings:!0};
    }
  }};
  $ko$$7$$.virtualElements.allowedBindings._ojSlot_ = !0;
  (function() {
    $oj$$68$$.$__KO_CUSTOM_BINDING_PROVIDER_INSTANCE$.$addPostprocessor$({nodeHasBindings:function($node$$119$$, $wrappedReturn$$) {
      return $wrappedReturn$$ || 1 === $node$$119$$.nodeType && $oj$$68$$.$Composite$.$__GetDescriptor$($node$$119$$.nodeName.toLowerCase());
    }, getBindingAccessors:function($name$$144_node$$120$$, $bindingContext$$50$$, $wrappedReturn$$1$$) {
      if (1 === $name$$144_node$$120$$.nodeType && ($name$$144_node$$120$$ = $name$$144_node$$120$$.nodeName.toLowerCase(), $oj$$68$$.$Composite$.$__GetDescriptor$($name$$144_node$$120$$))) {
        $wrappedReturn$$1$$ = $wrappedReturn$$1$$ || {};
        if ($wrappedReturn$$1$$.ojComposite) {
          throw "Cannot use ojComposite binding on a custom element whose name is already registered for a composite binding";
        }
        var $bindingValue$$2$$ = {name:$name$$144_node$$120$$};
        $wrappedReturn$$1$$.ojComposite = function $$wrappedReturn$$1$$$ojComposite$() {
          return $bindingValue$$2$$;
        };
      }
      return $wrappedReturn$$1$$;
    }, preprocessNode:function($node$$121$$, $wrappedReturn$$2$$) {
      var $attrs$$22_newNodes$$;
      if (1 === $node$$121$$.nodeType && "oj-slot" === $node$$121$$.nodeName.toLowerCase()) {
        $attrs$$22_newNodes$$ = ["name", "slot", "index"];
        for (var $binding$$8_closeComment$$ = "ko _ojSlot_:{", $parent$$48_valueExpressions$$ = [], $child$$15_i$$455_openComment$$ = 0;$child$$15_i$$455_openComment$$ < $attrs$$22_newNodes$$.length;$child$$15_i$$455_openComment$$++) {
          var $attr$$22$$ = $attrs$$22_newNodes$$[$child$$15_i$$455_openComment$$], $attrValue$$inline_1296_expr$$7$$;
          $attrValue$$inline_1296_expr$$7$$ = $node$$121$$.getAttribute($attr$$22$$);
          if (null != $attrValue$$inline_1296_expr$$7$$) {
            var $exp$$inline_1297$$ = $oj$$68$$.$ExpressionUtils$.$getExpressionInfo$($attrValue$$inline_1296_expr$$7$$).expr;
            null == $exp$$inline_1297$$ && ($exp$$inline_1297$$ = "'" + $attrValue$$inline_1296_expr$$7$$ + "'");
            $attrValue$$inline_1296_expr$$7$$ = $exp$$inline_1297$$;
          } else {
            $attrValue$$inline_1296_expr$$7$$ = null;
          }
          $attrValue$$inline_1296_expr$$7$$ && $parent$$48_valueExpressions$$.push($attr$$22$$ + ":" + $attrValue$$inline_1296_expr$$7$$);
        }
        $binding$$8_closeComment$$ += $parent$$48_valueExpressions$$.join(",");
        $child$$15_i$$455_openComment$$ = document.createComment($binding$$8_closeComment$$ + "}");
        $binding$$8_closeComment$$ = document.createComment("/ko");
        $attrs$$22_newNodes$$ = [$child$$15_i$$455_openComment$$];
        $parent$$48_valueExpressions$$ = $node$$121$$.parentNode;
        for ($parent$$48_valueExpressions$$.insertBefore($child$$15_i$$455_openComment$$, $node$$121$$);0 < $node$$121$$.childNodes.length;) {
          $child$$15_i$$455_openComment$$ = $node$$121$$.childNodes[0], $parent$$48_valueExpressions$$.insertBefore($child$$15_i$$455_openComment$$, $node$$121$$), $attrs$$22_newNodes$$.push($child$$15_i$$455_openComment$$);
        }
        $attrs$$22_newNodes$$.push($binding$$8_closeComment$$);
        $parent$$48_valueExpressions$$.replaceChild($binding$$8_closeComment$$, $node$$121$$);
      }
      return $attrs$$22_newNodes$$ ? $attrs$$22_newNodes$$ : $wrappedReturn$$2$$;
    }});
  })();
  $oj$$68$$.$Composite$ = {};
  $oj$$68$$.$Composite$.$defaults$ = {initializeMethod:"initialize", activatedMethod:"activated", attachedMethod:"attached", bindingsAppliedMethod:"bindingsApplied", disposeMethod:"dispose"};
  $goog$exportPath_$$("Composite.defaults", $oj$$68$$.$Composite$.$defaults$, $oj$$68$$);
  $oj$$68$$.$Composite$.register = function $$oj$$68$$$$Composite$$register$($name$$145$$, $descriptor$$5$$) {
    $oj$$68$$.$Composite$.$_registry$[$name$$145$$] = $descriptor$$5$$;
  };
  $goog$exportPath_$$("Composite.register", $oj$$68$$.$Composite$.register, $oj$$68$$);
  $oj$$68$$.$Composite$.$__GetDescriptor$ = function $$oj$$68$$$$Composite$$$__GetDescriptor$$($name$$146$$) {
    return $oj$$68$$.$Composite$.$_registry$[$name$$146$$];
  };
  $oj$$68$$.$Composite$.$_registry$ = {};
  $ko$$7$$.bindingHandlers.ojComposite = {init:function $$ko$$7$$$bindingHandlers$ojComposite$init$() {
    return{controlsDescendantBindings:!0};
  }, update:function $$ko$$7$$$bindingHandlers$ojComposite$update$($element$$249$$, $valueAccessor$$29$$, $allBindingsAccessor$$24$$, $viewModel$$9$$, $bindingContext$$52$$) {
    function $cleanup$$2$$($isNodeDispose$$) {
      $propertyUpdater$$2$$ && ($propertyUpdater$$2$$.$teardown$($element$$249$$), $propertyUpdater$$2$$ = null);
      $nodeDisposed$$ = $isNodeDispose$$;
      $_invokeCompositeViewModelMethod$$($childViewModel$$, "disposeMethod", [$element$$249$$]);
      $childViewModel$$ = null;
      $compMetadata$$ && $_resetElement$$($element$$249$$, $compMetadata$$);
      $nodeStorage$$2$$ && ($element$$249$$.removeChild($nodeStorage$$2$$), $nodeStorage$$2$$ = null);
      $compMetadata$$ = null;
      $props$$29$$ = {};
    }
    function $wrapToCheckLoadId$$($func$$11$$) {
      return function($id$$65$$) {
        if ($nodeDisposed$$ || $id$$65$$ != $pendingLoadId$$) {
          throw $_INTERRUPTED_ERROR$$;
        }
        return $func$$11$$.apply(this, Array.prototype.slice.call(arguments, 1));
      }.bind(null, $pendingLoadId$$);
    }
    var $_INTERRUPTED_ERROR$$ = Error(), $childViewModel$$, $propertyUpdater$$2$$, $pendingLoadId$$ = -1, $nodeDisposed$$ = !1, $compMetadata$$, $props$$29$$ = {}, $nodeStorage$$2$$, $unwrap$$2$$ = $ko$$7$$.utils.unwrapObservable;
    $ko$$7$$.ignoreDependencies(function() {
      $ko$$7$$.computed(function() {
        $pendingLoadId$$++;
        $element$$249$$.dispatchEvent(new CustomEvent("pending", {bubbles:!0}));
        $cleanup$$2$$(!1);
        var $name$$147_propertiesInitializedPromise_value$$324$$ = $unwrap$$2$$($valueAccessor$$29$$()) || {}, $name$$147_propertiesInitializedPromise_value$$324$$ = $unwrap$$2$$($name$$147_propertiesInitializedPromise_value$$324$$.name), $descriptor$$6$$ = $oj$$68$$.$Composite$.$__GetDescriptor$($name$$147_propertiesInitializedPromise_value$$324$$);
        if (!$descriptor$$6$$) {
          throw "Composite is missing a descriptor";
        }
        var $metadataPromise_modelInstancePromise_slotsPromise$$ = $_getResourcePromise$$($descriptor$$6$$, "metadata"), $name$$147_propertiesInitializedPromise_value$$324$$ = null;
        $metadataPromise_modelInstancePromise_slotsPromise$$ && ($name$$147_propertiesInitializedPromise_value$$324$$ = $metadataPromise_modelInstancePromise_slotsPromise$$.then($wrapToCheckLoadId$$(function($metadata$$25$$) {
          $metadata$$25$$ ? ($compMetadata$$ = $metadata$$25$$, $propertyUpdater$$2$$ = new $PropertyUpdater$$($element$$249$$, $bindingContext$$52$$, $descriptor$$6$$.parseFunction), $_setupProperties$$($element$$249$$, $props$$29$$, $metadata$$25$$, $propertyUpdater$$2$$), $propertyUpdater$$2$$.$setup$($metadata$$25$$)) : $oj$$68$$.$Logger$.$warning$("ojComposite is being loaded without metadata. No element properties will be set up");
          return $props$$29$$;
        })));
        var $resolveSlotsPromise$$, $metadataPromise_modelInstancePromise_slotsPromise$$ = new Promise(function($resolve$$71$$) {
          $resolveSlotsPromise$$ = $resolve$$71$$;
        }), $unique$$1$$ = $_UNIQUE$$ + $_UNIQUE_INCR$$++, $vmContext$$ = {element:$element$$249$$, props:$name$$147_propertiesInitializedPromise_value$$324$$, slotNodeCounts:$metadataPromise_modelInstancePromise_slotsPromise$$, unique:$unique$$1$$}, $metadataPromise_modelInstancePromise_slotsPromise$$ = null, $activatedPromise_modelPromise$$1$$ = $_getResourcePromise$$($descriptor$$6$$, "viewModel");
        $activatedPromise_modelPromise$$1$$ && ($metadataPromise_modelInstancePromise_slotsPromise$$ = $activatedPromise_modelPromise$$1$$.then($wrapToCheckLoadId$$(function($model$$97$$) {
          return $model$$97$$ = "function" === typeof $model$$97$$ ? new $model$$97$$($vmContext$$) : $_invokeCompositeViewModelMethod$$($model$$97$$, "initializeMethod", [$vmContext$$]) || $model$$97$$;
        })));
        $activatedPromise_modelPromise$$1$$ = null;
        $metadataPromise_modelInstancePromise_slotsPromise$$ && ($activatedPromise_modelPromise$$1$$ = $metadataPromise_modelInstancePromise_slotsPromise$$.then($wrapToCheckLoadId$$(function($model$$98$$) {
          return $_invokeCompositeViewModelMethod$$($model$$98$$, "activatedMethod", [$vmContext$$]);
        })));
        var $viewPromise$$1$$ = $_getResourcePromise$$($descriptor$$6$$, "view");
        $viewPromise$$1$$ && ($viewPromise$$1$$ = $viewPromise$$1$$.then($wrapToCheckLoadId$$(function($content$$inline_1310_view$$5$$) {
          if ("string" === typeof $content$$inline_1310_view$$5$$) {
            $content$$inline_1310_view$$5$$ = $ko$$7$$.utils.parseHtmlFragment($content$$inline_1310_view$$5$$);
          } else {
            if (window.DocumentFragment ? $content$$inline_1310_view$$5$$ instanceof DocumentFragment : $content$$inline_1310_view$$5$$ && 11 === $content$$inline_1310_view$$5$$.nodeType) {
              $content$$inline_1310_view$$5$$ = $ko$$7$$.utils.arrayPushAll([], $content$$inline_1310_view$$5$$.childNodes);
            } else {
              if (Array.isArray($content$$inline_1310_view$$5$$)) {
                $content$$inline_1310_view$$5$$ = $ko$$7$$.utils.arrayPushAll([], $content$$inline_1310_view$$5$$);
              } else {
                throw "The View (" + $content$$inline_1310_view$$5$$ + ") has an unsupported type";
              }
            }
          }
          return $content$$inline_1310_view$$5$$;
        })));
        var $cssPromise$$ = $_getResourcePromise$$($descriptor$$6$$, "css");
        $cssPromise$$ && ($cssPromise$$ = $cssPromise$$.then($wrapToCheckLoadId$$(function($css$$2$$) {
          var $style$$11$$ = document.createElement("style");
          $style$$11$$.type = "text/css";
          $style$$11$$.styleSheet ? $style$$11$$.styleSheet.cssText = $css$$2$$ : $style$$11$$.appendChild(document.createTextNode($css$$2$$));
          document.head.appendChild($style$$11$$);
        })));
        $ko$$7$$.applyBindingsToDescendants($bindingContext$$52$$, $element$$249$$);
        Promise.all([$viewPromise$$1$$, $metadataPromise_modelInstancePromise_slotsPromise$$, $name$$147_propertiesInitializedPromise_value$$324$$, $cssPromise$$, $activatedPromise_modelPromise$$1$$]).then(function($id$$66$$, $values$$16$$) {
          if (!$nodeDisposed$$ && $id$$66$$ == $pendingLoadId$$) {
            var $childBindingContext$$1_view$$6$$ = $values$$16$$[0];
            if (!$childBindingContext$$1_view$$6$$) {
              throw "ojComposite is missing a View";
            }
            var $slotMap$$1$$ = $_createSlotMap$$($element$$249$$), $slotNodeCounts$$ = {}, $slot$$1$$;
            for ($slot$$1$$ in $slotMap$$1$$) {
              $slotNodeCounts$$[$slot$$1$$] = $slotMap$$1$$[$slot$$1$$].length;
            }
            $resolveSlotsPromise$$($slotNodeCounts$$);
            $nodeStorage$$2$$ = $_storeNodes$$($element$$249$$, $childBindingContext$$1_view$$6$$);
            $ko$$7$$.virtualElements.setDomNodeChildren($element$$249$$, $childBindingContext$$1_view$$6$$);
            $childViewModel$$ = $values$$16$$[1];
            $_invokeCompositeViewModelMethod$$($childViewModel$$, "attachedMethod", [$vmContext$$]);
            $childBindingContext$$1_view$$6$$ = $bindingContext$$52$$.createChildContext($childViewModel$$, void 0, function($ctx$$3$$) {
              $ctx$$3$$.__oj_slots = $slotMap$$1$$;
              $ctx$$3$$.__oj_nodestorage = $nodeStorage$$2$$;
              $ctx$$3$$.$slotNodeCounts = $slotNodeCounts$$;
              $ctx$$3$$.$props = $props$$29$$;
              $ctx$$3$$.$unique = $unique$$1$$;
            });
            $compMetadata$$ && $childViewModel$$ && $_setupMethods$$($element$$249$$, $compMetadata$$, $childViewModel$$);
            $ko$$7$$.applyBindingsToDescendants($childBindingContext$$1_view$$6$$, $element$$249$$);
            $_invokeCompositeViewModelMethod$$($childViewModel$$, "bindingsAppliedMethod", [$vmContext$$]);
            $element$$249$$.dispatchEvent(new CustomEvent("ready", {bubbles:!0}));
          }
        }.bind(null, $pendingLoadId$$), function($id$$67$$, $reason$$10$$) {
          $reason$$10$$ !== $_INTERRUPTED_ERROR$$ && null != $reason$$10$$ && $oj$$68$$.$Logger$.error($reason$$10$$);
        }.bind(null, $pendingLoadId$$));
      }, null, {disposeWhenNodeIsRemoved:$element$$249$$});
    });
    $ko$$7$$.utils.domNodeDisposal.addDisposeCallback($element$$249$$, $cleanup$$2$$.bind(null, !0, $bindingContext$$52$$));
  }};
  var $_UNIQUE_INCR$$ = 0, $_UNIQUE$$ = "_ojcomposite";
});
