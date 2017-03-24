/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "jqueryui-amd/core", "jqueryui-amd/widget", "ojs/ojmessaging"], function($oj$$3$$, $$$$3$$) {
  function $_applyToComponents$$($subtreeRoot$$, $callback$$76$$) {
    function $processFunc$$() {
      var $jelem$$ = $$$$3$$(this), $names$$ = $jelem$$.data($_OJ_WIDGET_NAMES_DATA$$);
      if (null != $names$$) {
        for (var $i$$80$$ = 0;$i$$80$$ < $names$$.length;$i$$80$$++) {
          var $instance$$1$$ = $jelem$$.data("oj-" + $names$$[$i$$80$$]);
          null != $instance$$1$$ && $callback$$76$$($instance$$1$$);
        }
      }
    }
    var $locator$$ = $$$$3$$($subtreeRoot$$);
    $locator$$.hasClass($_OJ_COMPONENT_NODE_CLASS$$) && $processFunc$$.call($subtreeRoot$$);
    $locator$$.find("." + $_OJ_COMPONENT_NODE_CLASS$$).each($processFunc$$);
  }
  function $__ojDynamicGetter$$($callback$$77$$) {
    this.$getCallback$ = function $this$$getCallback$$() {
      return $callback$$77$$;
    };
  }
  function $_accumulateValues$$($target$$72$$, $source$$7$$, $valueInArray$$) {
    Object.keys($source$$7$$).forEach(function($key$$26$$) {
      var $holder$$ = $target$$72$$[$key$$26$$] || [], $sourceVal$$1$$ = $source$$7$$[$key$$26$$];
      $valueInArray$$ ? $holder$$ = $holder$$.concat($sourceVal$$1$$) : $holder$$.push($sourceVal$$1$$);
      $target$$72$$[$key$$26$$] = $holder$$;
    });
    return $target$$72$$;
  }
  function $_defineDynamicProperty$$($self$$40$$, $originalDefaultValue$$, $constructorValue$$, $options$$116$$, $prop$$52$$, $getter$$, $contextCallback$$) {
    var $override$$ = $constructorValue$$, $replaced$$ = !1, $overriddenSubkeys$$ = {};
    delete $options$$116$$[$prop$$52$$];
    Object.defineProperty($options$$116$$, $prop$$52$$, {get:function() {
      if ($replaced$$ || null != $self$$40$$.$_settingNestedKey$) {
        return $override$$;
      }
      var $defaultVal$$ = $getter$$($contextCallback$$ ? $contextCallback$$() : $prop$$52$$);
      return $_mergeOptionLayers$$([$originalDefaultValue$$, $defaultVal$$, $override$$], $overriddenSubkeys$$);
    }, set:function($value$$67$$) {
      $override$$ = $value$$67$$;
      null != $self$$40$$.$_settingNestedKey$ ? $overriddenSubkeys$$[$self$$40$$.$_settingNestedKey$] = !0 : $replaced$$ = !0;
    }, enumerable:!0});
  }
  function $_getCompoundDynamicGetter$$($values$$5$$) {
    if (1 === $values$$5$$.length) {
      var $hasGetters_val$$19$$ = $values$$5$$[0];
      return $hasGetters_val$$19$$ instanceof $__ojDynamicGetter$$ ? $hasGetters_val$$19$$.$getCallback$() : null;
    }
    for (var $hasGetters_val$$19$$ = !1, $i$$81$$ = 0;$i$$81$$ < $values$$5$$.length && !$hasGetters_val$$19$$;$i$$81$$++) {
      var $value$$68$$ = $values$$5$$[$i$$81$$];
      null != $value$$68$$ && $value$$68$$ instanceof $__ojDynamicGetter$$ && ($hasGetters_val$$19$$ = !0);
    }
    return $hasGetters_val$$19$$ ? function($context$$32$$) {
      var $resolvedVals$$ = [];
      $values$$5$$.forEach(function($value$$69$$) {
        null != $value$$69$$ && $value$$69$$ instanceof $__ojDynamicGetter$$ ? $resolvedVals$$.push($value$$69$$.$getCallback$()($context$$32$$)) : $resolvedVals$$.push($value$$69$$);
      });
      return $_mergeOptionLayers$$($resolvedVals$$);
    } : null;
  }
  function $_mergeOptionLayers$$($values$$6$$, $overriddenSubkeys$$1$$) {
    for (var $result$$3$$ = void 0, $i$$82$$ = 0;$i$$82$$ < $values$$6$$.length;$i$$82$$++) {
      var $value$$70$$ = $values$$6$$[$i$$82$$];
      void 0 !== $value$$70$$ && ($result$$3$$ = $$$$3$$.isPlainObject($value$$70$$) ? $_mergeObjectsWithExclusions$$($$$$3$$.isPlainObject($result$$3$$) ? [$result$$3$$, $value$$70$$] : [$value$$70$$], $i$$82$$ == $values$$6$$.length - 1 ? null : $overriddenSubkeys$$1$$, null) : $value$$70$$);
    }
    return $result$$3$$;
  }
  function $_mergeObjectsWithExclusions$$($input$$1$$, $ignoreSubkeys$$, $basePath$$) {
    for (var $target$$73$$ = {}, $inputLength$$ = $input$$1$$.length, $inputIndex$$ = 0;$inputIndex$$ < $inputLength$$;$inputIndex$$++) {
      for (var $source$$8$$ = $input$$1$$[$inputIndex$$], $keys$$5$$ = Object.keys($source$$8$$), $i$$83$$ = 0;$i$$83$$ < $keys$$5$$.length;$i$$83$$++) {
        var $key$$27$$ = $keys$$5$$[$i$$83$$], $path$$6$$ = null == $ignoreSubkeys$$ ? null : null == $basePath$$ ? $key$$27$$ : $basePath$$ + "." + $key$$27$$;
        if (null == $ignoreSubkeys$$ || !$ignoreSubkeys$$[$path$$6$$]) {
          var $value$$71$$ = $source$$8$$[$key$$27$$];
          void 0 !== $value$$71$$ && ($target$$73$$[$key$$27$$] = $$$$3$$.isPlainObject($value$$71$$) ? $_mergeObjectsWithExclusions$$($$$$3$$.isPlainObject($target$$73$$[$key$$27$$]) ? [$target$$73$$[$key$$27$$], $value$$71$$] : [$value$$71$$], $ignoreSubkeys$$, $path$$6$$) : $value$$71$$);
        }
      }
    }
    return $target$$73$$;
  }
  function $_returnTrue$$() {
    return!0;
  }
  $oj$$3$$.Components = {};
  $goog$exportPath_$$("Components", $oj$$3$$.Components, $oj$$3$$);
  $oj$$3$$.Components.$setDefaultOptions$ = function $$oj$$3$$$Components$$setDefaultOptions$$($options$$117$$) {
    var $props$$4$$ = $oj$$3$$.Components.$_defaultProperties$ || {};
    Object.keys($options$$117$$).forEach(function($key$$28$$) {
      var $value$$72$$ = $options$$117$$[$key$$28$$];
      if (!$oj$$3$$.$CollectionUtils$.isPlainObject($value$$72$$)) {
        throw "Invalid default options";
      }
      $props$$4$$[$key$$28$$] = $_accumulateValues$$($props$$4$$[$key$$28$$] || {}, $value$$72$$, !1);
    });
    $oj$$3$$.Components.$_defaultProperties$ = $props$$4$$;
  };
  $goog$exportPath_$$("Components.setDefaultOptions", $oj$$3$$.Components.$setDefaultOptions$, $oj$$3$$);
  $oj$$3$$.Components.$getDefaultOptions$ = function $$oj$$3$$$Components$$getDefaultOptions$$() {
    return $oj$$3$$.Components.$_defaultProperties$ || {};
  };
  $goog$exportPath_$$("Components.getDefaultOptions", $oj$$3$$.Components.$getDefaultOptions$, $oj$$3$$);
  $oj$$3$$.Components.$createDynamicPropertyGetter$ = function $$oj$$3$$$Components$$createDynamicPropertyGetter$$($callback$$78$$) {
    return new $__ojDynamicGetter$$($callback$$78$$);
  };
  $goog$exportPath_$$("Components.createDynamicPropertyGetter", $oj$$3$$.Components.$createDynamicPropertyGetter$, $oj$$3$$);
  $oj$$3$$.Components.$getWidgetConstructor$ = function $$oj$$3$$$Components$$getWidgetConstructor$$($element$$12$$, $widgetName$$2$$) {
    var $jelem$$1$$ = $$$$3$$($element$$12$$), $data$$48_func$$5$$ = $jelem$$1$$.data($_OJ_WIDGET_NAMES_DATA$$);
    return $data$$48_func$$5$$ && (null == $widgetName$$2$$ ? $widgetName$$2$$ = $data$$48_func$$5$$[0] : 0 > $data$$48_func$$5$$.indexOf($widgetName$$2$$) && ($widgetName$$2$$ = void 0), null != $widgetName$$2$$ && ($data$$48_func$$5$$ = $jelem$$1$$[$widgetName$$2$$], "function" === typeof $data$$48_func$$5$$)) ? $data$$48_func$$5$$.bind($jelem$$1$$) : null;
  };
  $goog$exportPath_$$("Components.getWidgetConstructor", $oj$$3$$.Components.$getWidgetConstructor$, $oj$$3$$);
  $oj$$3$$.Components.$subtreeAttached$ = function $$oj$$3$$$Components$$subtreeAttached$$($node$$6$$) {
    $oj$$3$$.$DomUtils$.$fixResizeListeners$($node$$6$$);
    $_applyToComponents$$($node$$6$$, function($instance$$2$$) {
      $instance$$2$$.$_NotifyAttached$();
    });
  };
  $goog$exportPath_$$("Components.subtreeAttached", $oj$$3$$.Components.$subtreeAttached$, $oj$$3$$);
  $oj$$3$$.Components.$subtreeDetached$ = function $$oj$$3$$$Components$$subtreeDetached$$($node$$7$$) {
    $_applyToComponents$$($node$$7$$, function($instance$$3$$) {
      $instance$$3$$.$_NotifyDetached$();
    });
  };
  $goog$exportPath_$$("Components.subtreeDetached", $oj$$3$$.Components.$subtreeDetached$, $oj$$3$$);
  $oj$$3$$.Components.$subtreeShown$ = function $$oj$$3$$$Components$$subtreeShown$$($node$$8$$) {
    $oj$$3$$.$DomUtils$.$fixResizeListeners$($node$$8$$);
    $_applyToComponents$$($node$$8$$, function($instance$$4$$) {
      $instance$$4$$.$_NotifyShown$();
    });
  };
  $goog$exportPath_$$("Components.subtreeShown", $oj$$3$$.Components.$subtreeShown$, $oj$$3$$);
  $oj$$3$$.Components.$subtreeHidden$ = function $$oj$$3$$$Components$$subtreeHidden$$($node$$9$$) {
    $_applyToComponents$$($node$$9$$, function($instance$$5$$) {
      $instance$$5$$.$_NotifyHidden$();
    });
  };
  $goog$exportPath_$$("Components.subtreeHidden", $oj$$3$$.Components.$subtreeHidden$, $oj$$3$$);
  $oj$$3$$.Components.$isComponentInitialized$ = function $$oj$$3$$$Components$$isComponentInitialized$$($jelement$$) {
    var $widgets$$ = $jelement$$.data($_OJ_WIDGET_NAMES_DATA$$);
    return $$$$3$$.isArray($widgets$$) && -1 < $widgets$$.indexOf("ojPopup") && $jelement$$.is("." + $_OJ_COMPONENT_NODE_CLASS$$) ? !0 : !1;
  };
  $oj$$3$$.Components.$__getDefaultOptions$ = function $$oj$$3$$$Components$$__getDefaultOptions$$($hierarchyNames$$) {
    for (var $defaults$$ = {}, $allProperties$$ = $oj$$3$$.Components.$getDefaultOptions$(), $i$$84$$ = $hierarchyNames$$.length - 1;0 <= $i$$84$$;$i$$84$$--) {
      var $props$$5$$ = $allProperties$$[$hierarchyNames$$[$i$$84$$]];
      void 0 !== $props$$5$$ && ($defaults$$ = $_accumulateValues$$($defaults$$, $props$$5$$, !0));
    }
    return $defaults$$;
  };
  $oj$$3$$.Components.$_OJ_CONTAINER_ATTR$ = "data-oj-container";
  var $_OJ_WIDGET_NAMES_DATA$$ = "oj-component-names", $_OJ_COMPONENT_NODE_CLASS$$ = "oj-component-initnode";
  (function() {
    var $_ojLastTouch$$ = 0, $_hasDocumentTouchEndHandler$$ = !1;
    $$$$3$$.widget("oj.baseComponent", {options:{contextMenu:null, rootAttributes:null, optionChange:void 0, destroy:void 0}, refresh:function() {
      this.$_propertyContext$ = null;
    }, _createWidget:function($options$$118$$, $element$$13$$) {
      this.$_originalDefaults$ = this.options || {};
      this.$_constructorOptions$ = $options$$118$$ || {};
      this._super($options$$118$$, $element$$13$$);
      this.$_AfterCreateEvent$();
    }, $_SetRootAttributes$:function() {
      var $unsupportedAttrs_value$$73$$ = this.options.rootAttributes;
      if ($unsupportedAttrs_value$$73$$) {
        var $widget$$ = this.widget();
        if (null != $widget$$) {
          var $classValue_styleValue$$ = $unsupportedAttrs_value$$73$$["class"];
          $classValue_styleValue$$ && $widget$$.addClass($classValue_styleValue$$);
          if ($classValue_styleValue$$ = $unsupportedAttrs_value$$73$$.style) {
            var $currStyle$$ = $widget$$.attr("style");
            $currStyle$$ ? $widget$$.attr("style", $currStyle$$ + ";" + $classValue_styleValue$$) : $widget$$.attr("style", $classValue_styleValue$$);
          }
          $unsupportedAttrs_value$$73$$ = $$$$3$$.extend({}, $unsupportedAttrs_value$$73$$);
          delete $unsupportedAttrs_value$$73$$["class"];
          delete $unsupportedAttrs_value$$73$$.style;
          $widget$$.attr($unsupportedAttrs_value$$73$$);
          delete $unsupportedAttrs_value$$73$$.id;
          $unsupportedAttrs_value$$73$$ = Object.keys($unsupportedAttrs_value$$73$$);
          if ($unsupportedAttrs_value$$73$$.length) {
            throw Error("Unsupported values passed to rootAttributes option: " + $unsupportedAttrs_value$$73$$.toString());
          }
        }
      }
    }, _create:function() {
      this.$_SaveAttributes$(this.element);
      this.$_InitOptions$(this.$_originalDefaults$, this.$_constructorOptions$);
      delete this.$_originalDefaults$;
      delete this.$_constructorOptions$;
      this._ComponentCreate();
      this.$_AfterCreate$();
      this.element.addClass($_OJ_COMPONENT_NODE_CLASS$$);
    }, $_InitOptions$:function($originalDefaults$$, $constructorOptions$$) {
      this.$_setupDefaultOptions$($originalDefaults$$, $constructorOptions$$);
      this.$_initContextMenuOption$($constructorOptions$$);
    }, _ComponentCreate:function() {
      var $element$$inline_489$$ = this.element, $widgetName$$inline_490$$ = this.widgetName, $data$$inline_491$$ = $element$$inline_489$$.data($_OJ_WIDGET_NAMES_DATA$$);
      $data$$inline_491$$ || ($data$$inline_491$$ = [], $element$$inline_489$$.data($_OJ_WIDGET_NAMES_DATA$$, $data$$inline_491$$));
      0 > $data$$inline_491$$.indexOf($widgetName$$inline_490$$) && $data$$inline_491$$.push($widgetName$$inline_490$$);
    }, $_AfterCreate$:function() {
      this.$_SetRootAttributes$();
      this.$contextMenuEventNamespace$ = this.eventNamespace + "contextMenu";
      this.$_setupContextMenu$(!0);
    }, $_AfterCreateEvent$:$$$$3$$.noop, $_SaveAttributes$:function() {
    }, $_SaveAllAttributes$:function($element$$15$$) {
      var $self$$41$$ = this;
      this.$_savedAttributes$ = [];
      $$$$3$$.each($element$$15$$, function($index$$77$$, $ele$$) {
        var $saveAttributes$$ = {}, $attributes$$10$$ = $ele$$.attributes;
        $self$$41$$.$_savedAttributes$.push({element:$ele$$, attributes:$saveAttributes$$});
        $$$$3$$.each($attributes$$10$$, function($index$$78$$, $attr$$10$$) {
          var $attrName$$ = $attr$$10$$.name;
          $saveAttributes$$[$attrName$$] = {attr:$attr$$10$$.value, prop:$$$$3$$($ele$$).prop($attrName$$)};
        });
      });
    }, $_GetSavedAttributes$:function($element$$16$$) {
      var $savedAttributes$$ = this.$_savedAttributes$;
      if (void 0 === $savedAttributes$$) {
        return null;
      }
      $element$$16$$ = $element$$16$$[0];
      for (var $i$$85$$ = 0, $j$$5$$ = $savedAttributes$$.length;$i$$85$$ < $j$$5$$;$i$$85$$++) {
        var $curr$$ = $savedAttributes$$[$i$$85$$];
        if ($curr$$.element === $element$$16$$) {
          return $curr$$.attributes;
        }
      }
      return{};
    }, $_RestoreAttributes$:function() {
    }, $_RestoreAllAttributes$:function() {
      $$$$3$$.each(this.$_savedAttributes$, function($index$$79$$, $savedAttr$$) {
        var $element$$17$$ = $$$$3$$($savedAttr$$.element), $attributes$$11$$ = $savedAttr$$.attributes;
        if (1 === $element$$17$$.length) {
          for (var $currAttr$$ = $savedAttr$$.element.attributes, $removeAttr$$ = [], $i$$86$$ = 0, $j$$6$$ = $currAttr$$.length;$i$$86$$ < $j$$6$$;$i$$86$$++) {
            $currAttr$$[$i$$86$$].name in $attributes$$11$$ || $removeAttr$$.push($currAttr$$[$i$$86$$].name);
          }
          $i$$86$$ = 0;
          for ($j$$6$$ = $removeAttr$$.length;$i$$86$$ < $j$$6$$;$i$$86$$++) {
            $element$$17$$.removeAttr($removeAttr$$[$i$$86$$]);
          }
          for (var $attribute$$1$$ in $attributes$$11$$) {
            $element$$17$$.attr($attribute$$1$$, $attributes$$11$$[$attribute$$1$$].attr);
          }
        }
      });
    }, $_GetTranslationsSectionName$:function() {
      return this.widgetFullName;
    }, $_CompareOptionValues$:function($option$$, $value1$$6$$, $value2$$6$$) {
      return $value1$$6$$ == $value2$$6$$;
    }, $getTranslatedString$:function($key$$29$$, $var_args$$48$$) {
      var $params$$5$$ = {}, $pattern$$2$$;
      2 < arguments.length ? $params$$5$$ = Array.prototype.slice.call(arguments, 1) : 2 == arguments.length && ($params$$5$$ = arguments[1], "object" === typeof $params$$5$$ || $params$$5$$ instanceof Array || ($params$$5$$ = [$params$$5$$]));
      $pattern$$2$$ = this.option($_OJ_TRANSLATIONS_PREFIX$$ + $key$$29$$);
      return null == $pattern$$2$$ ? $key$$29$$ : $oj$$3$$.$Translations$.$applyParameters$($pattern$$2$$.toString(), $params$$5$$);
    }, getNodeBySubId:function($locator$$1$$) {
      return null == $locator$$1$$ || null == $locator$$1$$.subId ? this.element ? this.element[0] : null : null;
    }, getSubIdByNode:function() {
      return null;
    }, destroy:function() {
      this._trigger("destroy");
      this._super();
      this.$_removeContextMenuBehavior$();
      this.element.removeClass($_OJ_COMPONENT_NODE_CLASS$$);
      this.widget().removeClass("oj-disabled");
      this.$_removeStateClasses$(this.element);
      var $element$$inline_493$$ = this.element, $index$$inline_496_widgetName$$inline_494$$ = this.widgetName, $data$$inline_495$$ = $element$$inline_493$$.data($_OJ_WIDGET_NAMES_DATA$$);
      $data$$inline_495$$ && ($index$$inline_496_widgetName$$inline_494$$ = $data$$inline_495$$.indexOf($index$$inline_496_widgetName$$inline_494$$), 0 <= $index$$inline_496_widgetName$$inline_494$$ && ($data$$inline_495$$.splice($index$$inline_496_widgetName$$inline_494$$, 1), 0 === $data$$inline_495$$.length && $element$$inline_493$$.removeData($_OJ_WIDGET_NAMES_DATA$$)));
      this.$_RestoreAttributes$();
      this.$_initialCmDomAttr$ ? this.element.attr("contextmenu", this.$_initialCmDomAttr$) : this.element.removeAttr("contextmenu");
      this.$_propertyContext$ = null;
    }, option:function($optionName$$, $value$$74$$) {
      if (0 === arguments.length) {
        return $$$$3$$.widget.extend({}, this.options);
      }
      var $i$$87_key$$30$$ = arguments[0], $options$$119$$ = $i$$87_key$$30$$, $context$$33_subkey$$1$$ = null, $flags$$3$$ = {};
      if ("string" === typeof $i$$87_key$$30$$) {
        var $options$$119$$ = {}, $parts$$3$$ = $i$$87_key$$30$$.split("."), $i$$87_key$$30$$ = $parts$$3$$.shift();
        if ($parts$$3$$.length) {
          var $context$$33_subkey$$1$$ = $parts$$3$$.join("."), $curOption$$;
          try {
            1 < arguments.length && (this.$_settingNestedKey$ = $context$$33_subkey$$1$$), $curOption$$ = $options$$119$$[$i$$87_key$$30$$] = $$$$3$$.widget.extend({}, this.options[$i$$87_key$$30$$]);
          } finally {
            this.$_settingNestedKey$ = null;
          }
          for ($i$$87_key$$30$$ = 0;$i$$87_key$$30$$ < $parts$$3$$.length - 1;$i$$87_key$$30$$++) {
            $curOption$$[$parts$$3$$[$i$$87_key$$30$$]] = $curOption$$[$parts$$3$$[$i$$87_key$$30$$]] || {}, $curOption$$ = $curOption$$[$parts$$3$$[$i$$87_key$$30$$]];
          }
          $i$$87_key$$30$$ = $parts$$3$$.pop();
          if (1 === arguments.length) {
            return void 0 === $curOption$$[$i$$87_key$$30$$] ? null : $curOption$$[$i$$87_key$$30$$];
          }
          $curOption$$[$i$$87_key$$30$$] = $value$$74$$;
        } else {
          if (1 === arguments.length) {
            return void 0 === this.options[$i$$87_key$$30$$] ? null : this.options[$i$$87_key$$30$$];
          }
          $options$$119$$[$i$$87_key$$30$$] = $value$$74$$;
        }
        $flags$$3$$ = arguments[2] || $flags$$3$$;
      } else {
        $flags$$3$$ = arguments[1] || $flags$$3$$;
      }
      null != $context$$33_subkey$$1$$ && ($flags$$3$$ = $$$$3$$.widget.extend({}, $flags$$3$$, {subkey:$context$$33_subkey$$1$$}));
      ($context$$33_subkey$$1$$ = $flags$$3$$ ? $flags$$3$$._context : null) && $context$$33_subkey$$1$$.$internalSet$ ? this.$_internalSetOptions$($options$$119$$, $flags$$3$$) : this._setOptions($options$$119$$, $flags$$3$$);
      return this;
    }, $_internalSetOptions$:function($options$$120$$, $flags$$4$$) {
      for (var $key$$31$$ in $options$$120$$) {
        var $value$$75$$ = $options$$120$$[$key$$31$$], $oldValue$$ = this.options[$key$$31$$];
        this.options[$key$$31$$] = $value$$75$$;
        this.$_optionChanged$($key$$31$$, $value$$75$$, $oldValue$$, $flags$$4$$);
      }
    }, _setOptions:function($options$$121$$, $flags$$5$$) {
      for (var $key$$32$$ in $options$$121$$) {
        this._setOption($key$$32$$, $options$$121$$[$key$$32$$], $flags$$5$$);
      }
      return this;
    }, _setOption:function($key$$33$$, $value$$76$$, $flags$$6$$) {
      var $originalValue$$ = this.options[$key$$33$$];
      if ("disabled" === $key$$33$$) {
        this.options[$key$$33$$] = $value$$76$$, this.widget().toggleClass("oj-disabled", !!$value$$76$$).attr("aria-disabled", $value$$76$$), $value$$76$$ && this.$_removeStateClasses$(this.widget());
      } else {
        try {
          var $subkey$$2$$ = null == $flags$$6$$ ? null : $flags$$6$$.subkey;
          null != $subkey$$2$$ && (this.$_settingNestedKey$ = $subkey$$2$$);
          this._super($key$$33$$, $value$$76$$);
        } finally {
          this.$_settingNestedKey$ = null;
        }
        "contextMenu" === $key$$33$$ && this.$_setupContextMenu$(!1);
      }
      this.$_optionChanged$($key$$33$$, $value$$76$$, $originalValue$$, $flags$$6$$);
      return this;
    }, $_optionChanged$:function($key$$34_optionChangeData$$, $value$$77$$, $originalValue$$1$$, $flags$$7$$) {
      var $changed$$ = !1, $context$$34$$ = null, $writeback$$ = !1, $originalEvent$$ = null, $optionMetadata$$ = null, $extraData$$;
      $flags$$7$$ && ($changed$$ = $flags$$7$$.changed, $context$$34$$ = $flags$$7$$._context) && ($originalEvent$$ = $context$$34$$.originalEvent, $writeback$$ = void 0 === $context$$34$$.$writeback$ ? null != $originalEvent$$ : $context$$34$$.$writeback$, $optionMetadata$$ = $context$$34$$.$optionMetadata$, $extraData$$ = $context$$34$$.$extraData$);
      if ($changed$$ || !this.$_CompareOptionValues$($key$$34_optionChangeData$$, $originalValue$$1$$, $value$$77$$)) {
        $optionMetadata$$ = $optionMetadata$$ || {}, $optionMetadata$$.writeback = $writeback$$ ? "shouldWrite" : "shouldNotWrite", $key$$34_optionChangeData$$ = {option:$key$$34_optionChangeData$$, previousValue:$originalValue$$1$$, value:$value$$77$$, optionMetadata:$optionMetadata$$}, null != $extraData$$ && ($key$$34_optionChangeData$$ = $$$$3$$.extend({}, $extraData$$, $key$$34_optionChangeData$$)), this._trigger("optionChange", $originalEvent$$, $key$$34_optionChangeData$$);
      }
    }, _trigger:function($type$$63$$, $event$$16$$, $data$$49$$) {
      return this.$_trigger2$($type$$63$$, $event$$16$$, $data$$49$$).proceed;
    }, $_trigger2$:function($type$$64$$, $event$$17$$, $data$$50$$) {
      var $callback$$79$$ = this.options[$type$$64$$];
      $data$$50$$ = $data$$50$$ || {};
      $event$$17$$ = $$$$3$$.Event($event$$17$$, $_OJ_COMPONENT_EVENT_OVERRIDES$$);
      $event$$17$$.type = (this.widgetEventPrefix + $type$$64$$).toLowerCase();
      $event$$17$$.target = this.element[0];
      this.element.trigger($event$$17$$, $data$$50$$);
      return{proceed:!($$$$3$$.isFunction($callback$$79$$) && !1 === $callback$$79$$.apply(this.element[0], [$event$$17$$].concat($data$$50$$)) || $event$$17$$.isDefaultPrevented()), event:$event$$17$$};
    }, $_initContextMenuOption$:function($constructorOptions$$1$$) {
      var $contextMenu$$ = this.element.attr("contextmenu");
      this.$_initialCmDomAttr$ = $contextMenu$$;
      !$contextMenu$$ || "contextMenu" in $constructorOptions$$1$$ || this.option("contextMenu", document.getElementById($contextMenu$$), {_context:{$internalSet$:!0}});
    }, $_setupContextMenu$:function($id$$12_isCreateTime$$) {
      this.$_removeContextMenuBehavior$();
      if (this.options.contextMenu) {
        var $rootNode$$ = this.widget(), $initNode$$ = this.element;
        $id$$12_isCreateTime$$ && !$initNode$$.is($rootNode$$) && $initNode$$.removeAttr("contextmenu");
        ($id$$12_isCreateTime$$ = $$$$3$$(this.options.contextMenu).attr("id")) && $rootNode$$.attr("contextmenu", $id$$12_isCreateTime$$);
        var $self$$42$$ = this;
        this.$_preventKeyUpEventIfMenuOpen$ = function $this$$_preventKeyUpEventIfMenuOpen$$($event$$18$$) {
          121 == $event$$18$$.which && $event$$18$$.shiftKey && $self$$42$$.$_getContextMenuNode$().is(":visible") && $event$$18$$.preventDefault();
        };
        var $pressHoldThreshold$$ = $_PRESS_HOLD_THRESHOLD$$, $isPressHold$$ = !1, $touchInProgress$$ = !1, $touchPageX$$, $touchPageY$$, $doubleOpenTimer$$, $doubleOpenType$$ = null, $launch$$ = function $$launch$$$($event$$19$$, $eventType$$25$$, $pressHold$$) {
          $isPressHold$$ = $pressHold$$;
          var $menu$$ = $self$$42$$.$_getContextMenu$();
          if ($isPressHold$$) {
            $rootNode$$.one("touchend" + $self$$42$$.$contextMenuEventNamespace$, function() {
              $menu$$.$__contextMenuPressHoldJustEnded$(!0);
              setTimeout(function() {
                $menu$$.$__contextMenuPressHoldJustEnded$(!1);
              }, 50);
            });
          }
          "touchstart" === $doubleOpenType$$ && "contextmenu" === $event$$19$$.type || "contextmenu" === $doubleOpenType$$ && "touchstart" === $event$$19$$.type ? ($doubleOpenType$$ = null, clearTimeout($doubleOpenTimer$$)) : $event$$19$$.isDefaultPrevented() || $event$$19$$.originalEvent && $event$$19$$.originalEvent.defaultPrevented || $self$$42$$.$_IsEffectivelyDisabled$() || ($self$$42$$.$_NotifyContextMenuGesture$($menu$$, $event$$19$$, $eventType$$25$$), !$self$$42$$.$_getContextMenuNode$().is(":visible") || 
          ($event$$19$$.preventDefault(), document.addEventListener("keyup", $self$$42$$.$_preventKeyUpEventIfMenuOpen$), "touchstart" !== $event$$19$$.type && "contextmenu" !== $event$$19$$.type)) || ($doubleOpenType$$ = $event$$19$$.type, $doubleOpenTimer$$ = setTimeout(function() {
            $doubleOpenType$$ = null;
          }, 300));
        };
        this.$_clickListener$ = function $this$$_clickListener$$($event$$21$$) {
          $isPressHold$$ && ($event$$21$$.preventDefault(), $event$$21$$.stopPropagation(), $isPressHold$$ = !1);
        };
        $rootNode$$[0].addEventListener("click", this.$_clickListener$, !0);
        $rootNode$$.on("touchstart" + this.$contextMenuEventNamespace$ + " mousedown" + this.$contextMenuEventNamespace$ + " keydown" + this.$contextMenuEventNamespace$ + " ", function($event$$22$$) {
          if ("mousedown" !== $event$$22$$.type || !$self$$42$$.$_getContextMenu$().$__contextMenuPressHoldJustEnded$()) {
            $isPressHold$$ = !1;
            if ("touchstart" === $event$$22$$.type && 1 === $event$$22$$.originalEvent.touches.length) {
              var $firstTouch$$ = $event$$22$$.originalEvent.touches[0];
              $touchPageX$$ = $firstTouch$$.pageX;
              $touchPageY$$ = $firstTouch$$.pageY;
              $touchInProgress$$ = !0;
              this.$_contextMenuPressHoldTimer$ = setTimeout($launch$$.bind(void 0, $event$$22$$, "touch", !0), $pressHoldThreshold$$);
            }
            return!0;
          }
        }).on("touchmove" + this.$contextMenuEventNamespace$, function($event$$23_firstTouch$$1$$) {
          $event$$23_firstTouch$$1$$ = $event$$23_firstTouch$$1$$.originalEvent.touches[0];
          if (5 < Math.abs($touchPageX$$ - $event$$23_firstTouch$$1$$.pageX) || 5 < Math.abs($touchPageY$$ - $event$$23_firstTouch$$1$$.pageY)) {
            $touchInProgress$$ = !1, clearTimeout(this.$_contextMenuPressHoldTimer$);
          }
          return!0;
        }).on("touchend" + this.$contextMenuEventNamespace$ + " touchcancel" + this.$contextMenuEventNamespace$, function() {
          $touchInProgress$$ = !1;
          clearTimeout(this.$_contextMenuPressHoldTimer$);
          return!0;
        }).on("keydown" + this.$contextMenuEventNamespace$ + " contextmenu" + this.$contextMenuEventNamespace$, function($event$$25$$) {
          ("contextmenu" === $event$$25$$.type || 121 == $event$$25$$.which && $event$$25$$.shiftKey) && $launch$$($event$$25$$, $touchInProgress$$ ? "touch" : "keydown" === $event$$25$$.type ? "keyboard" : "mouse", !1);
          return!0;
        }).addClass($oj$$3$$.$DomUtils$.$isTouchSupported$() ? "oj-menu-context-menu-launcher" : void 0);
      }
    }, $_setContextMenuIvars$:function() {
      this.$_contextMenuNode$ = $$$$3$$(this.options.contextMenu).first();
      this.$_contextMenu$ = this.$_contextMenuNode$.data("oj-ojMenu");
      if (!this.$_contextMenu$) {
        throw Error('"contextMenu" option set to "' + this.options.contextMenu + '", which does not reference a valid JET Menu.');
      }
      var $self$$43$$ = this;
      this.$_contextMenuNode$.on("ojclose" + this.$contextMenuEventNamespace$, function() {
        document.removeEventListener("keyup", $self$$43$$.$_preventKeyUpEventIfMenuOpen$);
      });
    }, $_getContextMenu$:function() {
      this.$_contextMenu$ || this.$_setContextMenuIvars$();
      return this.$_contextMenu$;
    }, $_getContextMenuNode$:function() {
      this.$_contextMenuNode$ || this.$_setContextMenuIvars$();
      return this.$_contextMenuNode$;
    }, $_removeContextMenuBehavior$:function() {
      this.widget().removeAttr("contextmenu").off(this.$contextMenuEventNamespace$).removeClass("oj-menu-context-menu-launcher")[0].removeEventListener("click", this.$_clickListener$, !0);
      this.$_contextMenuNode$ && this.$_contextMenuNode$.off(this.$contextMenuEventNamespace$);
      clearTimeout(this.$_contextMenuPressHoldTimer$);
      this.$_contextMenuNode$ = this.$_contextMenu$ = void 0;
    }, $_NotifyContextMenuGesture$:function($menu$$1$$, $event$$27$$, $eventType$$27$$) {
      this.$_OpenContextMenu$($event$$27$$, $eventType$$27$$);
    }, $_OpenContextMenu$:function($event$$28$$, $defaults$$1_eventType$$28$$, $openOptions$$, $submenuOpenOptions$$, $menu$$2_shallow$$) {
      $defaults$$1_eventType$$28$$ = {launcher:this.element, position:{mouse:{my:"start top", at:"start bottom", of:$event$$28$$, collision:"flipfit"}, touch:{my:"start\x3e40 center", at:"start bottom", of:$event$$28$$, collision:"flipfit"}, keyboard:{my:"start top", at:"start bottom", of:"launcher", collision:"flipfit"}}[$defaults$$1_eventType$$28$$]};
      var $forcedOptions$$ = {initialFocus:"menu"};
      $openOptions$$ = $menu$$2_shallow$$ ? $$$$3$$.extend($defaults$$1_eventType$$28$$, $openOptions$$, $forcedOptions$$) : $$$$3$$.extend(!0, $defaults$$1_eventType$$28$$, $openOptions$$, $forcedOptions$$);
      $menu$$2_shallow$$ = this.$_getContextMenu$();
      $menu$$2_shallow$$.$__openingContextMenu$ = !0;
      $menu$$2_shallow$$.open($event$$28$$, $openOptions$$, $submenuOpenOptions$$);
      $menu$$2_shallow$$.$__openingContextMenu$ = !1;
    }, $_removeStateClasses$:function($element$$18$$) {
      $element$$18$$.removeClass("oj-hover oj-focus oj-focus-highlight oj-active");
      $element$$18$$.find(".oj-hover").removeClass("oj-hover");
      $element$$18$$.find(".oj-focus").removeClass("oj-focus");
      $element$$18$$.find(".oj-focus-highlight").removeClass("oj-focus-highlight");
      $element$$18$$.find(".oj-active").removeClass("oj-active");
    }, $_addDocumentTouchEndHandler$:function() {
      !$_hasDocumentTouchEndHandler$$ && $oj$$3$$.$DomUtils$.$isTouchSupported$() && ($$$$3$$(document).on("touchend" + this.eventNamespace + " touchcancel" + this.eventNamespace, this.$_hoverAndActiveEndHandler$.bind(this, !0)), $_hasDocumentTouchEndHandler$$ = !0);
    }, $_isRealMouseEvent$:function() {
      return $oj$$3$$.$DomUtils$.$isTouchSupported$() ? 500 < Date.now() - $_ojLastTouch$$ : !0;
    }, $_AddHoverAndActiveListeners$:function($options$$122$$) {
      var $element$$19$$;
      $$$$3$$.isPlainObject($options$$122$$) ? $element$$19$$ = $options$$122$$.element : ($element$$19$$ = $options$$122$$, $options$$122$$ = {});
      var $afterToggle$$ = $options$$122$$.afterToggle || $$$$3$$.noop;
      if ($oj$$3$$.$DomUtils$.$isTouchSupported$()) {
        $element$$19$$.on("touchstart" + this.eventNamespace, this.$_hoverAndActiveStartHandler$.bind(this, "oj-active", $afterToggle$$)).on("touchend" + this.eventNamespace + " touchcancel" + this.eventNamespace, this.$_hoverAndActiveEndHandler$.bind(this, !0, $afterToggle$$));
      }
      $element$$19$$.on("mouseenter" + this.eventNamespace, this.$_hoverAndActiveStartHandler$.bind(this, "oj-hover", $afterToggle$$)).on("mouseleave" + this.eventNamespace, this.$_hoverAndActiveEndHandler$.bind(this, !1, $afterToggle$$));
      $element$$19$$.on("mousedown" + this.eventNamespace, this.$_hoverAndActiveStartHandler$.bind(this, "oj-active", $afterToggle$$)).on("mouseup" + this.eventNamespace, function($event$$30$$) {
        $$$$3$$($event$$30$$.currentTarget).removeClass("oj-active");
        $afterToggle$$($event$$30$$.type);
      });
    }, $_RemoveHoverAndActiveListeners$:function($element$$20$$) {
      $element$$20$$ && $$$$3$$($element$$20$$).off(this.eventNamespace);
    }, $_hoverAndActiveStartHandler$:function($markerClass$$, $afterToggleFunction$$, $event$$31$$) {
      var $elem$$15$$ = $$$$3$$($event$$31$$.currentTarget);
      $elem$$15$$.hasClass("oj-disabled") || "touchstart" !== $event$$31$$.type && !this.$_isRealMouseEvent$($event$$31$$) || ($elem$$15$$.addClass($markerClass$$), $afterToggleFunction$$($event$$31$$.type));
    }, $_hoverAndActiveEndHandler$:function($isTouchEvent$$, $afterToggleFunction$$1$$, $event$$32$$) {
      var $elem$$16$$ = $$$$3$$($event$$32$$.currentTarget);
      $isTouchEvent$$ && ($_ojLastTouch$$ = Date.now());
      $elem$$16$$.removeClass("oj-hover").removeClass("oj-active");
      $afterToggleFunction$$1$$($event$$32$$.type);
    }, _hoverable:function($element$$21$$) {
      this._on($element$$21$$, {mouseenter:function($event$$33$$) {
        $$$$3$$($event$$33$$.currentTarget).hasClass("oj-disabled") || $$$$3$$($event$$33$$.currentTarget).addClass("oj-hover");
      }, mouseleave:function($event$$34$$) {
        $$$$3$$($event$$34$$.currentTarget).removeClass("oj-hover");
      }});
    }, _focusable:function($options$$123$$) {
      function $applyBothClasses$$($element$$24$$) {
        $element$$24$$.addClass("oj-focus");
        $self$$45$$.$_shouldApplyFocusHighlight$($options$$123$$.getFocusHighlightPolicy, $options$$123$$.recentPointer) && $element$$24$$.addClass("oj-focus-highlight");
        $afterToggle$$1$$("focusin");
      }
      function $applyOnlyFocus$$($element$$23$$) {
        $element$$23$$.addClass("oj-focus");
        $afterToggle$$1$$("focusin");
      }
      var $self$$45$$ = this, $element$$22$$;
      $$$$3$$.isPlainObject($options$$123$$) ? $element$$22$$ = $options$$123$$.element : ($element$$22$$ = $options$$123$$, $options$$123$$ = {});
      var $afterToggle$$1$$ = $options$$123$$.afterToggle || $$$$3$$.noop;
      ($options$$123$$.setupHandlers || function($focusInHandler$$, $focusOutHandler$$) {
        $self$$45$$._on($element$$22$$, {focusin:function($event$$35$$) {
          $focusInHandler$$($$$$3$$($event$$35$$.currentTarget));
        }, focusout:function($event$$36$$) {
          $focusOutHandler$$($$$$3$$($event$$36$$.currentTarget));
        }});
      })($options$$123$$.applyHighlight ? $applyBothClasses$$ : $applyOnlyFocus$$, function($element$$25$$) {
        $element$$25$$.removeClass("oj-focus oj-focus-highlight");
        $afterToggle$$1$$("focusout");
      });
    }, $_activeable$:function($element$$26$$) {
      this._on($element$$26$$, {mousedown:function($event$$37$$) {
        $$$$3$$($event$$37$$.currentTarget).addClass("oj-active");
      }, mouseup:function($event$$38$$) {
        $$$$3$$($event$$38$$.currentTarget).removeClass("oj-active");
      }});
    }, $_UnregisterChildNode$:function($element$$27$$) {
      this.$_RemoveHoverAndActiveListeners$($element$$27$$);
      if ($element$$27$$) {
        var $bindings$$ = this.bindings;
        $bindings$$ && (this.bindings = $$$$3$$($bindings$$.not($element$$27$$)));
      }
    }, $getResource$:function($key$$35$$) {
      return this.option($_OJ_TRANSLATIONS_PREFIX$$ + $key$$35$$);
    }, $_GetReadingDirection$:function() {
      return $oj$$3$$.$DomUtils$.$getReadingDirection$();
    }, $_NotifyAttached$:function() {
      this.$_propertyContext$ = null;
    }, $_NotifyDetached$:function() {
      this.$_propertyContext$ = null;
      this.$_removeStateClasses$(this.widget());
    }, $_NotifyShown$:function() {
    }, $_NotifyHidden$:function() {
    }, $_IsEffectivelyDisabled$:function() {
      return this.options.disabled || this.$_ancestorDisabled$ ? !0 : !1;
    }, $__setAncestorComponentDisabled$:function($disabled$$) {
      this.$_ancestorDisabled$ = $disabled$$;
    }, $_getTranslationSectionLoader$:function() {
      var $sectionNames$$ = [], $self$$46$$ = this, $index$$80$$ = 0;
      this.$_traverseWidgetHierarchy$(function($name$$67_proto$$1$$) {
        $name$$67_proto$$1$$ = 0 == $index$$80$$ ? $self$$46$$.$_GetTranslationsSectionName$() : $name$$67_proto$$1$$.widgetFullName;
        $index$$80$$++;
        var $section$$ = $oj$$3$$.$Translations$.$getComponentTranslations$($name$$67_proto$$1$$);
        null == $section$$ || $$$$3$$.isEmptyObject($section$$) || $sectionNames$$.push($name$$67_proto$$1$$);
      });
      var $count$$21$$ = $sectionNames$$.length;
      return 0 < $count$$21$$ ? function() {
        if (1 == $count$$21$$) {
          return $oj$$3$$.$Translations$.$getComponentTranslations$($sectionNames$$[0]);
        }
        for (var $trs$$ = {}, $i$$88$$ = $count$$21$$ - 1;0 <= $i$$88$$;$i$$88$$--) {
          $$$$3$$.widget.extend($trs$$, $oj$$3$$.$Translations$.$getComponentTranslations$($sectionNames$$[$i$$88$$]));
        }
        return $trs$$;
      } : null;
    }, $_getDynamicPropertyContext$:function() {
      if (!this.$_propertyContext$) {
        var $c$$30$$ = {};
        this.$_propertyContext$ = $c$$30$$;
        for (var $element$$28$$ = this.element[0], $elem$$inline_498$$ = $element$$28$$, $containers$$inline_499$$ = [];$elem$$inline_498$$;) {
          var $ga$$inline_500_name$$inline_501$$ = $elem$$inline_498$$.getAttribute, $ga$$inline_500_name$$inline_501$$ = $ga$$inline_500_name$$inline_501$$ ? $ga$$inline_500_name$$inline_501$$.call($elem$$inline_498$$, $oj$$3$$.Components.$_OJ_CONTAINER_ATTR$) : null;
          null != $ga$$inline_500_name$$inline_501$$ && $containers$$inline_499$$.push($ga$$inline_500_name$$inline_501$$);
          $elem$$inline_498$$ = $elem$$inline_498$$.parentNode;
        }
        $c$$30$$.containers = $containers$$inline_499$$;
        $c$$30$$.element = $element$$28$$;
      }
      return this.$_propertyContext$;
    }, $_setupDefaultOptions$:function($originalDefaults$$1$$, $constructorOptions$$2$$) {
      var $options$$124$$ = this.options, $translationLoader$$ = this.$_getTranslationSectionLoader$(), $currVal$$ = $constructorOptions$$2$$[$_OJ_TRANSLATIONS_OPTION$$];
      null == $translationLoader$$ || void 0 !== $currVal$$ && !$$$$3$$.isPlainObject($currVal$$) || $_defineDynamicProperty$$(this, void 0, $constructorOptions$$2$$[$_OJ_TRANSLATIONS_OPTION$$], $options$$124$$, $_OJ_TRANSLATIONS_OPTION$$, $translationLoader$$);
      this.$_loadGlobalDefaultOptions$($originalDefaults$$1$$, $constructorOptions$$2$$);
    }, $_loadGlobalDefaultOptions$:function($originalDefaults$$2$$, $constructorOptions$$3$$) {
      var $options$$125$$ = this.options, $widgetHierNames$$ = [];
      this.$_traverseWidgetHierarchy$(function($proto$$2$$) {
        $widgetHierNames$$.push($proto$$2$$.widgetName);
      });
      $widgetHierNames$$.push("default");
      var $defaults$$2$$ = $oj$$3$$.Components.$__getDefaultOptions$($widgetHierNames$$);
      if (!$$$$3$$.isEmptyObject($defaults$$2$$)) {
        var $self$$47$$ = this, $contextCallback$$1$$ = function $$contextCallback$$1$$$() {
          return $self$$47$$.$_getDynamicPropertyContext$();
        }, $prop$$54$$;
        for ($prop$$54$$ in $defaults$$2$$) {
          var $val$$20$$ = $constructorOptions$$3$$[$prop$$54$$];
          if (void 0 === $val$$20$$ || $$$$3$$.isPlainObject($val$$20$$)) {
            var $defaultValueList_list$$ = $defaults$$2$$[$prop$$54$$];
            if ($defaultValueList_list$$) {
              var $callback$$80$$ = $_getCompoundDynamicGetter$$($defaultValueList_list$$);
              $callback$$80$$ ? $_defineDynamicProperty$$(this, $originalDefaults$$2$$[$prop$$54$$], $val$$20$$, $options$$125$$, $prop$$54$$, $callback$$80$$, $contextCallback$$1$$) : ($defaultValueList_list$$ = [$originalDefaults$$2$$[$prop$$54$$]].concat($defaultValueList_list$$), $defaultValueList_list$$.push($val$$20$$), $options$$125$$[$prop$$54$$] = $_mergeOptionLayers$$($defaultValueList_list$$));
            }
          }
        }
      }
    }, $_traverseWidgetHierarchy$:function($callback$$81$$) {
      for (var $proto$$3$$ = this.constructor.prototype;null != $proto$$3$$ && "oj" === $proto$$3$$.namespace;) {
        $callback$$81$$($proto$$3$$), $proto$$3$$ = Object.getPrototypeOf($proto$$3$$);
      }
    }, $_shouldApplyFocusHighlight$:function($focusPolicyCallback$$, $recentPointerCallback$$) {
      switch(($focusPolicyCallback$$ || this.$_getFocusHighlightPolicy$)()) {
        case "all":
          return!0;
        case "none":
          return!1;
        default:
          return!(this.$_recentPointer$() || $recentPointerCallback$$ && $recentPointerCallback$$());
      }
    }, $_getFocusHighlightPolicy$:function() {
      return $_FOCUS_HIGHLIGHT_POLICY$$;
    }, $_recentPointer$:function() {
      return Date.now() - $_pointerTimestamp$$ < ($_pointerTimestampIsTouchStart$$ ? $_TOUCHSTART_THRESHOLD$$ : $_POINTER_THRESHOLD$$);
    }});
    delete $$$$3$$.fn.baseComponent;
    var $_PRESS_HOLD_THRESHOLD$$ = 750, $_FOCUS_HIGHLIGHT_POLICY$$ = ($oj$$3$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-focus-config") || {}).focusHighlightPolicy, $_pointerTimestamp$$ = 0, $_pointerTimestampIsTouchStart$$, $_POINTER_THRESHOLD$$ = 600, $_TOUCHSTART_THRESHOLD$$ = $_PRESS_HOLD_THRESHOLD$$ + 600;
    document.addEventListener("mousedown", function() {
      var $now$$ = Date.now();
      if (!$_pointerTimestampIsTouchStart$$ || $now$$ > $_pointerTimestamp$$ + $_PRESS_HOLD_THRESHOLD$$) {
        $_pointerTimestamp$$ = $now$$, $_pointerTimestampIsTouchStart$$ = !1;
      }
    }, !0);
    document.addEventListener("touchstart", function() {
      $_pointerTimestamp$$ = Date.now();
      $_pointerTimestampIsTouchStart$$ = !0;
    }, !0);
    document.addEventListener("mouseup", function() {
      $_pointerTimestamp$$ = Date.now();
      $_pointerTimestampIsTouchStart$$ = !1;
    }, !0);
    document.addEventListener("touchend", function() {
      $_pointerTimestamp$$ = Date.now();
      $_pointerTimestampIsTouchStart$$ = !1;
    }, !0);
  })();
  $oj$$3$$.$__registerWidget$ = function $$oj$$3$$$$__registerWidget$$($name$$68_namespace$$3$$, $base$$3_nameArray_simpleName$$, $prototype$$1$$, $isHidden$$) {
    $$$$3$$.widget($name$$68_namespace$$3$$, $base$$3_nameArray_simpleName$$, $prototype$$1$$);
    $isHidden$$ && delete $$$$3$$.fn[$name$$68_namespace$$3$$.split(".")[1]];
    if ("oj.oj" === $name$$68_namespace$$3$$.substring(0, 5) || "oj._oj" === $name$$68_namespace$$3$$.substring(0, 6)) {
      $base$$3_nameArray_simpleName$$ = $name$$68_namespace$$3$$.split(".");
      $name$$68_namespace$$3$$ = $base$$3_nameArray_simpleName$$[0];
      $base$$3_nameArray_simpleName$$ = $base$$3_nameArray_simpleName$$[1];
      var $fullName$$ = $name$$68_namespace$$3$$ + "-" + $base$$3_nameArray_simpleName$$;
      $$$$3$$.expr[":"][("_" === $base$$3_nameArray_simpleName$$.substring(0, 1) ? "_" + $name$$68_namespace$$3$$ + "-" + $base$$3_nameArray_simpleName$$.substring(3) : $name$$68_namespace$$3$$ + "-" + $base$$3_nameArray_simpleName$$.substring(2)).toLowerCase()] = function $$$$$3$$$expr$__1$_$$base$$3_nameArray_simpleName$$$substring$_$$name$$68_namespace$$3$$$__2$$base$$3_nameArray_simpleName$$$substring$$name$$68_namespace$$3$$$__3$$base$$3_nameArray_simpleName$$$substring$toLowerCase$($elem$$17$$) {
        return!!$$$$3$$.data($elem$$17$$, $fullName$$);
      };
    }
  };
  var $_OJ_TRANSLATIONS_OPTION$$ = "translations", $_OJ_TRANSLATIONS_PREFIX$$ = $_OJ_TRANSLATIONS_OPTION$$ + ".", $_OJ_COMPONENT_EVENT_OVERRIDES$$ = {isDefaultPrevented:function() {
    return!1;
  }, preventDefault:function() {
    this.isDefaultPrevented = $_returnTrue$$;
  }, stopPropagation:function() {
    this.isPropagationStopped = $_returnTrue$$;
  }, stopImmediatePropagation:function() {
    this.isImmediatePropagationStopped = $_returnTrue$$;
  }};
  $$$$3$$(document).ready(function() {
    var $div$$inline_503$$ = $$$$3$$("\x3cdiv style\x3d'border: 1px solid;border-color:red green;position: absolute;top: -999px;background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs\x3d);'\x3e\x3c/div\x3e"), $bki$$inline_504$$;
    $div$$inline_503$$.appendTo("body");
    $bki$$inline_504$$ = $div$$inline_503$$.css("backgroundImage");
    $div$$inline_503$$.css("borderTopColor") != $div$$inline_503$$.css("borderRightColor") && (null == $bki$$inline_504$$ || "none" != $bki$$inline_504$$ && "url (invalid-url:)" != $bki$$inline_504$$) || $$$$3$$("body").addClass("oj-hicontrast");
    $div$$inline_503$$.remove();
  });
  $oj$$3$$.$DomUtils$ = {};
  $oj$$3$$.$DomUtils$.$_HTML_START_TAG$ = "\x3chtml\x3e";
  $oj$$3$$.$DomUtils$.$_HTML_END_TAG$ = "\x3c/html\x3e";
  $oj$$3$$.$DomUtils$.$_LEGAL_ELEMENTS$ = {SPAN:1, B:1, I:1, EM:1, BR:1, HR:1, LI:1, OL:1, UL:1, P:1, TT:1, BIG:1, SMALL:1, PRE:1};
  $oj$$3$$.$DomUtils$.$_LEGAL_ATTRIBUTES$ = {"class":1, style:1};
  $oj$$3$$.$DomUtils$.$isHTMLContent$ = function $$oj$$3$$$$DomUtils$$$isHTMLContent$$($content$$4$$) {
    return 0 === $content$$4$$.indexOf($oj$$3$$.$DomUtils$.$_HTML_START_TAG$) && $content$$4$$.lastIndexOf($oj$$3$$.$DomUtils$.$_HTML_END_TAG$) === $content$$4$$.length - 7 ? !0 : !1;
  };
  $oj$$3$$.$DomUtils$.$cleanHtml$ = function $$oj$$3$$$$DomUtils$$$cleanHtml$$($value$$78$$) {
    var $offSpan$$ = $$$$3$$(document.createElement("span")).get(0);
    ($offSpan$$.innerHTML = $value$$78$$) && 0 <= $value$$78$$.indexOf("\x3c") && $oj$$3$$.$DomUtils$.$_cleanElementHtml$($offSpan$$);
    return $offSpan$$;
  };
  $oj$$3$$.$DomUtils$.$_cleanElementHtml$ = function $$oj$$3$$$$DomUtils$$$_cleanElementHtml$$($node$$11$$) {
    for (var $children$$ = $node$$11$$.childNodes, $child$$1$$, $attrs$$19$$, $attr$$11$$, $childHasAttr$$, $i$$89$$, $count$$22$$ = $children$$.length - 1;0 <= $count$$22$$;) {
      if (($child$$1$$ = $children$$.item($count$$22$$)) && 1 === $child$$1$$.nodeType) {
        if ($oj$$3$$.$DomUtils$.$_LEGAL_ELEMENTS$[$child$$1$$.nodeName]) {
          $attrs$$19$$ = $child$$1$$.attributes;
          for ($i$$89$$ = $attrs$$19$$.length - 1;0 <= $i$$89$$;$i$$89$$--) {
            $attr$$11$$ = $attrs$$19$$[$i$$89$$], ($childHasAttr$$ = void 0 !== $$$$3$$($child$$1$$).attr($attr$$11$$.name)) && ($oj$$3$$.$DomUtils$.$_LEGAL_ATTRIBUTES$[$attr$$11$$.name] || $child$$1$$.removeAttribute($attr$$11$$.nodeName));
          }
          $oj$$3$$.$DomUtils$.$_cleanElementHtml$($child$$1$$);
        } else {
          $child$$1$$ && $node$$11$$.removeChild($child$$1$$);
        }
      }
      $count$$22$$--;
    }
  };
  $oj$$3$$.$DomUtils$.$isAncestor$ = function $$oj$$3$$$$DomUtils$$$isAncestor$$($ancestorNode$$, $node$$12$$) {
    for (var $parentNode$$1$$ = $node$$12$$.parentNode;$parentNode$$1$$;) {
      if ($parentNode$$1$$ == $ancestorNode$$) {
        return!0;
      }
      $parentNode$$1$$ = $parentNode$$1$$.parentNode;
    }
    return!1;
  };
  $oj$$3$$.$DomUtils$.$isAncestorOrSelf$ = function $$oj$$3$$$$DomUtils$$$isAncestorOrSelf$$($ancestorNode$$1$$, $node$$13$$) {
    return $node$$13$$ == $ancestorNode$$1$$ ? !0 : $oj$$3$$.$DomUtils$.$isAncestor$($ancestorNode$$1$$, $node$$13$$);
  };
  $oj$$3$$.$DomUtils$.$addResizeListener$ = function $$oj$$3$$$$DomUtils$$$addResizeListener$$($elem$$18$$, $listener$$32$$, $collapseEventTimeout$$) {
    var $jelem$$2$$ = $$$$3$$($elem$$18$$), $tracker$$ = $jelem$$2$$.data($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
    null == $tracker$$ && ($tracker$$ = new $oj$$3$$.$DomUtils$.$_ResizeTracker$($elem$$18$$), $jelem$$2$$.data($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$, $tracker$$), $tracker$$.start());
    $tracker$$.addListener($listener$$32$$, $collapseEventTimeout$$);
  };
  $oj$$3$$.$DomUtils$.$removeResizeListener$ = function $$oj$$3$$$$DomUtils$$$removeResizeListener$$($elem$$19$$, $listener$$33$$) {
    var $jelem$$3$$ = $$$$3$$($elem$$19$$), $tracker$$1$$ = $jelem$$3$$.data($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
    null != $tracker$$1$$ && ($tracker$$1$$.removeListener($listener$$33$$), $tracker$$1$$.$isEmpty$() && ($tracker$$1$$.stop(), $jelem$$3$$.removeData($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$)));
  };
  $oj$$3$$.$DomUtils$.$fixResizeListeners$ = function $$oj$$3$$$$DomUtils$$$fixResizeListeners$$($subtreeRoot$$1$$) {
    $$$$3$$($subtreeRoot$$1$$).find(".oj-helper-detect-expansion").parent().each(function($index$$81$$, $div$$1$$) {
      var $tracker$$2$$ = $$$$3$$($div$$1$$).data($oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$);
      null != $tracker$$2$$ && $tracker$$2$$.$init$(!0);
    });
  };
  $oj$$3$$.$DomUtils$.$isMetaKeyPressed$ = function $$oj$$3$$$$DomUtils$$$isMetaKeyPressed$$($evt$$17$$) {
    var $agentInfo$$ = $oj$$3$$.$AgentUtils$.$getAgentInfo$();
    return $oj$$3$$.$AgentUtils$.$OS$.$MAC$ === $agentInfo$$.os ? $evt$$17$$.metaKey : $evt$$17$$.ctrlKey;
  };
  $oj$$3$$.$DomUtils$.$_invokeAfterPaint$ = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function($fn$$5$$) {
    return window.setTimeout($fn$$5$$, 0);
  }).bind(window);
  $oj$$3$$.$DomUtils$.$_cancelInvokeAfterPaint$ = (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function($id$$13$$) {
    return window.clearTimeout($id$$13$$);
  }).bind(window);
  $oj$$3$$.$DomUtils$.$_ResizeTracker$ = function $$oj$$3$$$$DomUtils$$$_ResizeTracker$$($div$$2$$) {
    function $_checkSize$$($fireEvent$$) {
      var $adjusted$$ = !1;
      if (null != $_detectExpansion$$.offsetParent) {
        var $newWidth$$ = $_detectExpansion$$.offsetWidth, $newHeight$$ = $_detectExpansion$$.offsetHeight;
        if ($_oldWidth$$ !== $newWidth$$ || $_oldHeight$$ !== $newHeight$$) {
          $_retrySetScroll$$ = $_RETRY_MAX_COUNT$$, $_adjust$$($newWidth$$, $newHeight$$), $adjusted$$ = !0, $fireEvent$$ && $_notifyListeners$$(!0);
        }
      }
      return $adjusted$$;
    }
    function $_notifyListeners$$($i$$90_useAfterPaint$$) {
      var $newWidth$$1$$ = $div$$2$$.offsetWidth, $newHeight$$1$$ = $div$$2$$.offsetHeight;
      $_listeners$$.has() && ($i$$90_useAfterPaint$$ ? (null !== $_invokeId$$ && $oj$$3$$.$DomUtils$.$_cancelInvokeAfterPaint$($_invokeId$$), $_invokeId$$ = $oj$$3$$.$DomUtils$.$_invokeAfterPaint$(function() {
        $_invokeId$$ = null;
        $_listeners$$.fire($newWidth$$1$$, $newHeight$$1$$);
      })) : $_listeners$$.fire($newWidth$$1$$, $newHeight$$1$$));
      for ($i$$90_useAfterPaint$$ = 0;$i$$90_useAfterPaint$$ < $_collapsingManagers$$.length;$i$$90_useAfterPaint$$++) {
        $_collapsingManagers$$[$i$$90_useAfterPaint$$].$getCallback$()($newWidth$$1$$, $newHeight$$1$$);
      }
    }
    function $_handleScroll$$($evt$$18$$) {
      $evt$$18$$.stopPropagation();
      !$_checkSize$$(!0) && 0 < $_retrySetScroll$$ && null != $_detectExpansion$$.offsetParent && (0 == $_detectExpansion$$.scrollLeft || 0 == $_detectExpansion$$.scrollTop) && ($_retrySetScroll$$--, $_adjust$$($_oldWidth$$, $_oldHeight$$));
    }
    function $_handleResize$$() {
      $_notifyListeners$$(!1);
    }
    function $_adjust$$($width$$12$$, $height$$11$$) {
      $_oldWidth$$ = $width$$12$$;
      $_oldHeight$$ = $height$$11$$;
      var $expansionChildStyle$$ = $_detectExpansion$$.firstChild.style, $delta$$1$$ = 1;
      do {
        $expansionChildStyle$$.width = $width$$12$$ + $delta$$1$$ + "px", $expansionChildStyle$$.height = $height$$11$$ + $delta$$1$$ + "px", $_detectExpansion$$.scrollLeft = $_detectExpansion$$.scrollTop = $delta$$1$$, $delta$$1$$++;
      } while ((0 == $_detectExpansion$$.scrollTop || 0 == $_detectExpansion$$.scrollLeft) && 5 >= $delta$$1$$);
      $_detectContraction$$.scrollLeft = $width$$12$$;
      $_detectContraction$$.scrollTop = $height$$11$$;
    }
    var $_listeners$$ = $$$$3$$.Callbacks(), $_collapsingManagers$$ = [], $_collapsingListeners$$ = [], $_RETRY_MAX_COUNT$$ = 2, $_retrySetScroll$$ = 0, $_invokeId$$ = null, $_oldWidth$$ = null, $_oldHeight$$ = null, $_detectExpansion$$ = null, $_detectContraction$$ = null, $_resizeListener$$ = null, $_scrollListener$$ = null;
    this.addListener = function $this$addListener$($listener$$34$$, $collapseEventTimeout$$1$$) {
      void 0 === $collapseEventTimeout$$1$$ || 0 === $collapseEventTimeout$$1$$ ? $_listeners$$.add($listener$$34$$) : ($_collapsingManagers$$.push(new $oj$$3$$.$DomUtils$.$_collapsingListenerManager$($listener$$34$$, $collapseEventTimeout$$1$$)), $_collapsingListeners$$.push($listener$$34$$));
    };
    this.removeListener = function $this$removeListener$($listener$$35$$) {
      var $index$$82$$ = $_collapsingListeners$$.indexOf($listener$$35$$);
      0 <= $index$$82$$ ? ($_collapsingListeners$$.splice($index$$82$$, 1), $_collapsingManagers$$.splice($index$$82$$, 1)[0].stop()) : $_listeners$$.remove($listener$$35$$);
    };
    this.$isEmpty$ = function $this$$isEmpty$$() {
      return!$_listeners$$.has() && 0 == $_collapsingListeners$$.length;
    };
    this.start = function $this$start$() {
      $_scrollListener$$ = $_handleScroll$$.bind(this);
      if ($div$$2$$.attachEvent) {
        $_resizeListener$$ = $_handleResize$$.bind(this), $div$$2$$.attachEvent("onresize", $_resizeListener$$);
      } else {
        var $contractionChild_firstChild$$ = $div$$2$$.childNodes[0];
        $_detectExpansion$$ = document.createElement("div");
        $_detectExpansion$$.className = "oj-helper-detect-expansion";
        var $expansionChild$$ = document.createElement("div");
        $_detectExpansion$$.appendChild($expansionChild$$);
        null != $contractionChild_firstChild$$ ? $div$$2$$.insertBefore($_detectExpansion$$, $contractionChild_firstChild$$) : $div$$2$$.appendChild($_detectExpansion$$);
        $_detectExpansion$$.addEventListener("scroll", $_scrollListener$$, !1);
        $_detectContraction$$ = document.createElement("div");
        $_detectContraction$$.className = "oj-helper-detect-contraction";
        $contractionChild_firstChild$$ = document.createElement("div");
        $contractionChild_firstChild$$.style.width = "200%";
        $contractionChild_firstChild$$.style.height = "200%";
        $_detectContraction$$.appendChild($contractionChild_firstChild$$);
        $div$$2$$.insertBefore($_detectContraction$$, $_detectExpansion$$);
        $_detectContraction$$.addEventListener("scroll", $_scrollListener$$, !1);
        this.$init$(!1);
      }
    };
    this.stop = function $this$stop$() {
      null != $_invokeId$$ && ($oj$$3$$.$DomUtils$.$_cancelInvokeAfterPaint$($_invokeId$$), $_invokeId$$ = null);
      null != $_detectExpansion$$ ? ($_detectExpansion$$.removeEventListener("scroll", $_scrollListener$$), $_detectContraction$$.removeEventListener("scroll", $_scrollListener$$), $div$$2$$.removeChild($_detectExpansion$$), $div$$2$$.removeChild($_detectContraction$$)) : $div$$2$$.detachEvent("onresize", $_resizeListener$$);
    };
    this.$init$ = function $this$$init$$($isFixup$$) {
      var $adjusted$$1$$ = $_checkSize$$($isFixup$$);
      $isFixup$$ && !$adjusted$$1$$ && null != $_detectExpansion$$.offsetParent && $_adjust$$($_oldWidth$$, $_oldHeight$$);
    };
  };
  $oj$$3$$.$DomUtils$.$_RESIZE_TRACKER_KEY$ = "_ojResizeTracker";
  $oj$$3$$.$DomUtils$.$isValidIdentifier$ = function $$oj$$3$$$$DomUtils$$$isValidIdentifier$$($name$$69$$) {
    return/^[A-Za-z][0-9A-Z_a-z-]*$/.test($name$$69$$);
  };
  $oj$$3$$.$DomUtils$.$_collapsingListenerManager$ = function $$oj$$3$$$$DomUtils$$$_collapsingListenerManager$$($originalCallback$$, $timeout$$) {
    function $_callback$$() {
      $_lastArgs$$ = Array.prototype.slice.call(arguments);
      null == $_timerId$$ && ($_timerId$$ = window.setTimeout($_timerCallback$$, $timeout$$));
    }
    function $_timerCallback$$() {
      $originalCallback$$.apply(null, $_lastArgs$$);
      $_timerId$$ = null;
    }
    var $_lastArgs$$ = null, $_timerId$$ = null;
    this.$getCallback$ = function $this$$getCallback$$() {
      return $_callback$$;
    };
    this.stop = function $this$stop$() {
      null != $_timerId$$ && (window.clearTimeout($_timerId$$), $_timerId$$ = null);
    };
  };
  $oj$$3$$.$DomUtils$.$isTouchSupported$ = function $$oj$$3$$$$DomUtils$$$isTouchSupported$$() {
    return "ontouchstart" in window || 0 < navigator.msMaxTouchPoints || 0 < navigator.maxTouchPoints;
  };
  $oj$$3$$.$DomUtils$.$setInKoRemoveNode$ = function $$oj$$3$$$$DomUtils$$$setInKoRemoveNode$$($node$$14$$) {
    $oj$$3$$.$DomUtils$.$_koRemoveNode$ = $node$$14$$;
  };
  $oj$$3$$.$DomUtils$.unwrap = function $$oj$$3$$$$DomUtils$$unwrap$($locator$$2$$, $replaceLocator$$) {
    var $koRemoveNode$$ = $oj$$3$$.$DomUtils$.$_koRemoveNode$;
    $koRemoveNode$$ && $koRemoveNode$$ == $locator$$2$$.parent().get(0) || (1 < arguments.length ? $replaceLocator$$.replaceWith($locator$$2$$) : $locator$$2$$.unwrap());
  };
  $oj$$3$$.$DomUtils$.$isChromeEvent$ = function $$oj$$3$$$$DomUtils$$$isChromeEvent$$($JSCompiler_temp$$9_event$$39$$) {
    function $_isChromeEventWebkit$$($event$$42$$) {
      var $domTarget$$ = $event$$42$$.target, $target$$74$$ = $$$$3$$($domTarget$$), $pos$$ = $domTarget$$.getBoundingClientRect(), $sbw$$ = $oj$$3$$.$DomUtils$.$getScrollBarWidth$(), $isLTR$$ = "ltr" === $oj$$3$$.$DomUtils$.$getReadingDirection$();
      return $isLTR$$ && ("HTML" === $domTarget$$.nodeName || "visible" !== $target$$74$$.css("overflow-x")) && $event$$42$$.clientX > $pos$$.right - $sbw$$ ? !0 : !$isLTR$$ && "HTML" === $domTarget$$.nodeName && $event$$42$$.clientX > $pos$$.left - $sbw$$ ? !0 : !$isLTR$$ && "visible" !== $target$$74$$.css("overflow-x") && $event$$42$$.clientX < $pos$$.left + $sbw$$ ? !0 : ("HTML" === $domTarget$$.nodeName || "visible" !== $target$$74$$.css("overflow-y")) && $event$$42$$.clientY > $pos$$.bottom - 
      $sbw$$ ? !0 : !1;
    }
    if (!("clientX" in $JSCompiler_temp$$9_event$$39$$ && "clientY" in $JSCompiler_temp$$9_event$$39$$)) {
      return!1;
    }
    var $agentInfo$$1$$ = $oj$$3$$.$AgentUtils$.$getAgentInfo$();
    if ($oj$$3$$.$AgentUtils$.$OS$.$ANDROID$ === $agentInfo$$1$$.os || $oj$$3$$.$AgentUtils$.$OS$.$IOS$ === $agentInfo$$1$$.os) {
      $JSCompiler_temp$$9_event$$39$$ = !1;
    } else {
      var $JSCompiler_temp$$10$$;
      if ($oj$$3$$.$AgentUtils$.$ENGINE$.$GECKO$ === $agentInfo$$1$$.engine) {
        try {
          $JSCompiler_temp$$10$$ = $JSCompiler_temp$$9_event$$39$$.originalTarget.localName ? !1 : !0;
        } catch ($e$$inline_507$$) {
          $JSCompiler_temp$$10$$ = !0;
        }
      } else {
        $JSCompiler_temp$$10$$ = $oj$$3$$.$AgentUtils$.$ENGINE$.$WEBKIT$ === $agentInfo$$1$$.engine ? $_isChromeEventWebkit$$($JSCompiler_temp$$9_event$$39$$) : $oj$$3$$.$AgentUtils$.$BROWSER$.$IE$ === $agentInfo$$1$$.browser ? $_isChromeEventWebkit$$($JSCompiler_temp$$9_event$$39$$) : !1;
      }
      $JSCompiler_temp$$9_event$$39$$ = $JSCompiler_temp$$10$$;
    }
    return $JSCompiler_temp$$9_event$$39$$;
  };
  $oj$$3$$.$DomUtils$.$getScrollBarWidth$ = function $$oj$$3$$$$DomUtils$$$getScrollBarWidth$$() {
    var $scrollBarMeasure_scrollBarWidth$$ = $oj$$3$$.$DomUtils$.$_scrollBarWidth$;
    if ($$$$3$$.isNumeric($scrollBarMeasure_scrollBarWidth$$)) {
      return $scrollBarMeasure_scrollBarWidth$$;
    }
    $scrollBarMeasure_scrollBarWidth$$ = $$$$3$$("\x3cdiv /\x3e");
    $$$$3$$(document.body).append($scrollBarMeasure_scrollBarWidth$$);
    $scrollBarMeasure_scrollBarWidth$$.width(50).height(50).css({overflow:"scroll", visibility:"hidden", position:"absolute"});
    var $insideWidth_scrollBarMeasureContent$$ = $$$$3$$("\x3cdiv /\x3e");
    $insideWidth_scrollBarMeasureContent$$.height(1);
    $scrollBarMeasure_scrollBarWidth$$.append($insideWidth_scrollBarMeasureContent$$);
    var $insideWidth_scrollBarMeasureContent$$ = $insideWidth_scrollBarMeasureContent$$.width(), $outsideWitdh$$ = $scrollBarMeasure_scrollBarWidth$$.width();
    $scrollBarMeasure_scrollBarWidth$$.remove();
    return $scrollBarMeasure_scrollBarWidth$$ = $oj$$3$$.$DomUtils$.$_scrollBarWidth$ = $outsideWitdh$$ - $insideWidth_scrollBarMeasureContent$$;
  };
  $oj$$3$$.$DomUtils$.$getReadingDirection$ = function $$oj$$3$$$$DomUtils$$$getReadingDirection$$() {
    var $dir$$ = document.documentElement.getAttribute("dir");
    $dir$$ && ($dir$$ = $dir$$.toLowerCase());
    return "rtl" === $dir$$ ? "rtl" : "ltr";
  };
  $oj$$3$$.$DomUtils$.$getCSSLengthAsInt$ = function $$oj$$3$$$$DomUtils$$$getCSSLengthAsInt$$($cssLength_intLength$$) {
    return isNaN($cssLength_intLength$$) ? $cssLength_intLength$$ && 0 < $cssLength_intLength$$.length && "auto" != $cssLength_intLength$$ ? ($cssLength_intLength$$ = parseInt($cssLength_intLength$$, 10), isNaN($cssLength_intLength$$) && ($cssLength_intLength$$ = 0), $cssLength_intLength$$) : 0 : $cssLength_intLength$$;
  };
  $oj$$3$$.$DomUtils$.$getCSSLengthAsFloat$ = function $$oj$$3$$$$DomUtils$$$getCSSLengthAsFloat$$($cssLength$$1_floatLength$$) {
    return isNaN($cssLength$$1_floatLength$$) ? $cssLength$$1_floatLength$$ && 0 < $cssLength$$1_floatLength$$.length ? ($cssLength$$1_floatLength$$ = parseFloat($cssLength$$1_floatLength$$), isNaN($cssLength$$1_floatLength$$) && ($cssLength$$1_floatLength$$ = 0), $cssLength$$1_floatLength$$) : 0 : $cssLength$$1_floatLength$$;
  };
  $oj$$3$$.$DomUtils$.$_LOGICAL_PARENT_DATA$ = "oj-logical-parent";
  $oj$$3$$.$DomUtils$.$getLogicalParent$ = function $$oj$$3$$$$DomUtils$$$getLogicalParent$$($element$$29$$) {
    if ($element$$29$$) {
      return $element$$29$$.data($oj$$3$$.$DomUtils$.$_LOGICAL_PARENT_DATA$);
    }
  };
  $oj$$3$$.$DomUtils$.$setLogicalParent$ = function $$oj$$3$$$$DomUtils$$$setLogicalParent$$($element$$30$$, $parent$$2$$) {
    $element$$30$$ && (null === $parent$$2$$ ? $element$$30$$.removeData($oj$$3$$.$DomUtils$.$_LOGICAL_PARENT_DATA$) : $element$$30$$.data($oj$$3$$.$DomUtils$.$_LOGICAL_PARENT_DATA$, $parent$$2$$));
  };
  $oj$$3$$.$DomUtils$.$isLogicalAncestorOrSelf$ = function $$oj$$3$$$$DomUtils$$$isLogicalAncestorOrSelf$$($ancestorNode$$2$$, $node$$15$$) {
    $oj$$3$$.$Assert$.$assertDomElement$($ancestorNode$$2$$);
    $oj$$3$$.$Assert$.$assertDomElement$($node$$15$$);
    for (var $parentNode$$2$$ = $node$$15$$;$parentNode$$2$$;) {
      if ($parentNode$$2$$ == $ancestorNode$$2$$) {
        return!0;
      }
      var $logicalParent$$ = $oj$$3$$.$DomUtils$.$getLogicalParent$($$$$3$$($parentNode$$2$$)), $parentNode$$2$$ = $logicalParent$$ ? $logicalParent$$[0] : $parentNode$$2$$.parentNode;
    }
    return!1;
  };
  $oj$$3$$.$DomUtils$.$validateURL$ = function $$oj$$3$$$$DomUtils$$$validateURL$$($href_protocol$$1$$) {
    var $link$$ = document.createElement("a");
    $link$$.href = $href_protocol$$1$$;
    $href_protocol$$1$$ = $link$$.protocol;
    null != $href_protocol$$1$$ && ($href_protocol$$1$$ = $href_protocol$$1$$.toLowerCase());
    if (0 > ["http:", "https:"].indexOf($href_protocol$$1$$)) {
      throw $href_protocol$$1$$ + " is not a valid URL protocol";
    }
  };
  $oj$$3$$.$DomUtils$.$_supressNativeContextMenu$ = function $$oj$$3$$$$DomUtils$$$_supressNativeContextMenu$$() {
    $$$$3$$(document.body).hasClass("oj-hybrid") && document.body.addEventListener("contextmenu", function($event$$43$$) {
      $event$$43$$.preventDefault();
    }, !0);
  };
  $oj$$3$$.$DomUtils$.$_supressNativeContextMenu$();
  $oj$$3$$.$ComponentMessaging$ = function $$oj$$3$$$$ComponentMessaging$$($component$$) {
    this.Init($component$$);
  };
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$ComponentMessaging$, $oj$$3$$.$Object$, "oj.ComponentMessaging");
  $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$ = {NONE:"none", $NOTEWINDOW$:"notewindow", $PLACEHOLDER$:"placeholder", $INLINE$:"inline"};
  $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$ = {};
  $oj$$3$$.$ComponentMessaging$.$registerMessagingStrategy$ = function $$oj$$3$$$$ComponentMessaging$$$registerMessagingStrategy$$($type$$65$$, $strategyConstructorCallback$$) {
    $type$$65$$ && "function" === typeof $strategyConstructorCallback$$ && ($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$[$type$$65$$] = $strategyConstructorCallback$$);
  };
  $oj$$3$$.$ComponentMessaging$.prototype.Init = function $$oj$$3$$$$ComponentMessaging$$$Init$($component$$1$$) {
    $oj$$3$$.$ComponentMessaging$.$superclass$.Init.call(this);
    this.$_component$ = $component$$1$$;
    this.$_activated$ = !1;
    this.$_initializeMessagingStrategies$();
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$activate$ = function $$oj$$3$$$$ComponentMessaging$$$$activate$$($launcher$$, $contentElement$$, $content$$5$$) {
    var $that$$ = this;
    $oj$$3$$.$Assert$.$assertObject$($content$$5$$);
    this.$_launcher$ = $launcher$$;
    this.$_contentElement$ = $contentElement$$;
    this.$_messagingContent$ = $oj$$3$$.$CollectionUtils$.$copyInto$(this.$_messagingContent$ || {}, $content$$5$$);
    this.$_activated$ ? this.$_reactivate$() : ($$$$3$$.each(this.$_strategies$, function($i$$91$$, $strategy$$) {
      $strategy$$.$activate$($that$$);
    }), this.$_activated$ = !0);
  };
  $oj$$3$$.$ComponentMessaging$.prototype.update = function $$oj$$3$$$$ComponentMessaging$$$update$($content$$6$$) {
    $oj$$3$$.$Assert$.$assertObject$($content$$6$$);
    $oj$$3$$.$Assert$.$assertBoolean$(this.$_activated$);
    this.$_messagingContent$ = $oj$$3$$.$CollectionUtils$.$copyInto$(this.$_messagingContent$ || {}, $content$$6$$);
    this.$_activated$ && $$$$3$$.each(this.$_strategies$, function($i$$92$$, $strategy$$1$$) {
      $strategy$$1$$.$shouldUpdate$($content$$6$$) && $strategy$$1$$.update();
    });
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$deactivate$ = function $$oj$$3$$$$ComponentMessaging$$$$deactivate$$() {
    $$$$3$$.each(this.$_strategies$, function($i$$93$$, $strategy$$2$$) {
      $strategy$$2$$.$deactivate$();
    });
    this.$_activated$ = !1;
    this.$_contentElement$ = this.$_launcher$ = this.$_component$ = null;
    this.$_strategies$ = {};
  };
  $oj$$3$$.$ComponentMessaging$.prototype.close = function $$oj$$3$$$$ComponentMessaging$$$close$() {
    $$$$3$$.each(this.$_strategies$, function($i$$94$$, $strategy$$3$$) {
      $strategy$$3$$.close();
    });
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_createMessagingStrategy$ = function $$oj$$3$$$$ComponentMessaging$$$$_createMessagingStrategy$$($type$$66$$, $artifactsForType$$) {
    return new ($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$[$type$$66$$] || $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE_TO_CALLBACK$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE])($artifactsForType$$);
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getComponent$ = function $$oj$$3$$$$ComponentMessaging$$$$_getComponent$$() {
    return this.$_component$ || null;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getLauncher$ = function $$oj$$3$$$$ComponentMessaging$$$$_getLauncher$$() {
    return this.$_launcher$ || null;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getContentElement$ = function $$oj$$3$$$$ComponentMessaging$$$$_getContentElement$$() {
    return this.$_contentElement$ || null;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getMessagingContent$ = function $$oj$$3$$$$ComponentMessaging$$$$_getMessagingContent$$() {
    return this.$_messagingContent$ || {};
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_getResolvedMessagingDisplayOptions$ = function $$oj$$3$$$$ComponentMessaging$$$$_getResolvedMessagingDisplayOptions$$() {
    var $artifactsByDisplayType$$ = {}, $artifactDisplayTypeResolved$$ = !1, $displayTypes$$, $displayType_key$$36$$, $compPH$$ = this.$_component$.options.placeholder, $artifact$$, $keys$$7$$, $i$$95$$, $j$$7$$, $messagingPreferences$$ = this.$_component$.options.displayOptions || {}, $$messagingPreferences$$ = {};
    $keys$$7$$ = Object.keys($messagingPreferences$$);
    for ($i$$95$$ = 0;$i$$95$$ < $keys$$7$$.length;$i$$95$$++) {
      $displayType_key$$36$$ = $keys$$7$$[$i$$95$$];
      $displayTypes$$ = $messagingPreferences$$[$displayType_key$$36$$];
      $artifactDisplayTypeResolved$$ = !1;
      $artifact$$ = $displayType_key$$36$$ + "";
      if (Array.isArray($displayTypes$$)) {
        for ($j$$7$$ = 0;$j$$7$$ < $displayTypes$$.length;$j$$7$$++) {
          $displayType_key$$36$$ = $displayTypes$$[$j$$7$$], $artifactDisplayTypeResolved$$ || ($artifactDisplayTypeResolved$$ = this.$_resolveDisplayTypeForArtifact$($artifact$$, $displayType_key$$36$$, $compPH$$, $$messagingPreferences$$));
        }
      } else {
        "string" === typeof $displayTypes$$ && ($artifactDisplayTypeResolved$$ || ($artifactDisplayTypeResolved$$ = this.$_resolveDisplayTypeForArtifact$($artifact$$, $displayTypes$$, $compPH$$, $$messagingPreferences$$)));
      }
      $artifactDisplayTypeResolved$$ || ($$messagingPreferences$$[$artifact$$] = $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE);
    }
    $$$$3$$.each($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$, function($type$$67$$, $name$$70$$) {
      $artifactsByDisplayType$$[$name$$70$$] = [];
    });
    $$$$3$$.each($$messagingPreferences$$, function($artifact$$1$$, $displayType$$1$$) {
      $artifactsByDisplayType$$[$displayType$$1$$].push($artifact$$1$$);
    });
    return $artifactsByDisplayType$$;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_resolveDisplayTypeForArtifact$ = function $$oj$$3$$$$ComponentMessaging$$$$_resolveDisplayTypeForArtifact$$($artifact$$2$$, $displayType$$2$$, $compPH$$1$$, $$messagingPreferences$$1$$) {
    var $artifactDisplayTypeResolved$$1$$ = !1;
    switch($displayType$$2$$) {
      case $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$:
        "converterHint" !== $artifact$$2$$ || $artifactDisplayTypeResolved$$1$$ || $compPH$$1$$ || ($$messagingPreferences$$1$$[$artifact$$2$$] = $displayType$$2$$, $artifactDisplayTypeResolved$$1$$ = !0);
        break;
      case $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$INLINE$:
        "messages" !== $artifact$$2$$ || $artifactDisplayTypeResolved$$1$$ || ($$messagingPreferences$$1$$[$artifact$$2$$] = $displayType$$2$$, $artifactDisplayTypeResolved$$1$$ = !0);
        break;
      default:
        $artifactDisplayTypeResolved$$1$$ || ($$messagingPreferences$$1$$[$artifact$$2$$] = $displayType$$2$$, $artifactDisplayTypeResolved$$1$$ = !0);
    }
    return $artifactDisplayTypeResolved$$1$$;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_initializeMessagingStrategies$ = function $$oj$$3$$$$ComponentMessaging$$$$_initializeMessagingStrategies$$() {
    var $artifactsByDisplayType$$1_displayInline$$ = this.$_getResolvedMessagingDisplayOptions$(), $displayInNoteWindow$$ = $artifactsByDisplayType$$1_displayInline$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$], $displayNone$$ = $artifactsByDisplayType$$1_displayInline$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE], $displayInPlaceholder$$ = $artifactsByDisplayType$$1_displayInline$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$], $artifactsByDisplayType$$1_displayInline$$ = 
    $artifactsByDisplayType$$1_displayInline$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$INLINE$], $messagingStrategies$$ = {};
    0 < $displayInNoteWindow$$.length && ($messagingStrategies$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$] = this.$_createMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$, $displayInNoteWindow$$));
    0 < $displayInPlaceholder$$.length && ($messagingStrategies$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$] = this.$_createMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$, $displayInPlaceholder$$));
    0 < $artifactsByDisplayType$$1_displayInline$$.length && ($messagingStrategies$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$INLINE$] = this.$_createMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$INLINE$, $artifactsByDisplayType$$1_displayInline$$));
    $messagingStrategies$$[$oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE] = this.$_createMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE, $displayNone$$);
    this.$_strategies$ = $messagingStrategies$$;
  };
  $oj$$3$$.$ComponentMessaging$.prototype.$_reactivate$ = function $$oj$$3$$$$ComponentMessaging$$$$_reactivate$$() {
    var $artifactsByDisplayType$$2$$ = this.$_getResolvedMessagingDisplayOptions$(), $strategy$$4$$, $cm$$ = this;
    $$$$3$$.each($artifactsByDisplayType$$2$$, function($type$$68$$, $artifactsForType$$1$$) {
      $type$$68$$ += "";
      $strategy$$4$$ = $cm$$.$_strategies$[$type$$68$$];
      $artifactsForType$$1$$ && 0 < $artifactsForType$$1$$.length ? $strategy$$4$$ ? $strategy$$4$$ && $strategy$$4$$.$reactivate$($artifactsForType$$1$$) : ($strategy$$4$$ = $cm$$.$_createMessagingStrategy$($type$$68$$, $artifactsForType$$1$$), $cm$$.$_strategies$[$type$$68$$] = $strategy$$4$$, $strategy$$4$$.$activate$($cm$$)) : $strategy$$4$$ && $oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE !== $type$$68$$ && ($strategy$$4$$.$deactivate$(), delete $cm$$.$_strategies$[$type$$68$$]);
    });
  };
  $oj$$3$$.$MessagingStrategy$ = function $$oj$$3$$$$MessagingStrategy$$($displayOptions$$) {
    this.Init($displayOptions$$);
  };
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$MessagingStrategy$, $oj$$3$$.$Object$, "oj.MessagingStrategy");
  $oj$$3$$.$MessagingStrategy$.prototype.Init = function $$oj$$3$$$$MessagingStrategy$$$Init$($displayOptions$$1$$) {
    $oj$$3$$.$Assert$.$assertArray$($displayOptions$$1$$);
    $oj$$3$$.$MessagingStrategy$.$superclass$.Init.call(this);
    this.$_displayOptions$ = $displayOptions$$1$$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$activate$ = function $$oj$$3$$$$MessagingStrategy$$$$activate$$($cm$$1$$) {
    this.$_componentMessaging$ = $cm$$1$$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$deactivate$ = function $$oj$$3$$$$MessagingStrategy$$$$deactivate$$() {
  };
  $oj$$3$$.$MessagingStrategy$.prototype.close = function $$oj$$3$$$$MessagingStrategy$$$close$() {
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$reactivate$ = function $$oj$$3$$$$MessagingStrategy$$$$reactivate$$($newDisplayOptions$$) {
    this.Init($newDisplayOptions$$);
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$shouldUpdate$ = function $$oj$$3$$$$MessagingStrategy$$$$shouldUpdate$$() {
    return!0;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.update = function $$oj$$3$$$$MessagingStrategy$$$update$() {
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetLauncher$ = function $$oj$$3$$$$MessagingStrategy$$$$GetLauncher$$() {
    return this.$_componentMessaging$.$_getLauncher$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetContentElement$ = function $$oj$$3$$$$MessagingStrategy$$$$GetContentElement$$() {
    return this.$_componentMessaging$.$_getContentElement$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetComponent$ = function $$oj$$3$$$$MessagingStrategy$$$$GetComponent$$() {
    return this.$_componentMessaging$.$_getComponent$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetMessages$ = function $$oj$$3$$$$MessagingStrategy$$$$GetMessages$$() {
    return this.$GetValidityState$().$_messages$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetMaxSeverity$ = function $$oj$$3$$$$MessagingStrategy$$$$GetMaxSeverity$$() {
    return this.$GetValidityState$().$getMaxSeverity$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetConverterHint$ = function $$oj$$3$$$$MessagingStrategy$$$$GetConverterHint$$() {
    var $hints$$ = [], $converterHint_mc$$ = this.$_getMessagingContent$();
    ($converterHint_mc$$ = $converterHint_mc$$ && $converterHint_mc$$.$converterHint$) && $hints$$.push($converterHint_mc$$);
    return $hints$$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetValidatorHints$ = function $$oj$$3$$$$MessagingStrategy$$$$GetValidatorHints$$() {
    var $hints$$1$$ = [], $mc$$1$$ = this.$_getMessagingContent$();
    $$$$3$$.each($mc$$1$$ && $mc$$1$$.$validatorHint$ || [], function($index$$84$$, $hint$$1$$) {
      $hints$$1$$.push($hint$$1$$);
    });
    return $hints$$1$$;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetTitle$ = function $$oj$$3$$$$MessagingStrategy$$$$GetTitle$$() {
    var $mc$$2$$ = this.$_getMessagingContent$();
    return $mc$$2$$ && $mc$$2$$.title || "";
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$GetValidityState$ = function $$oj$$3$$$$MessagingStrategy$$$$GetValidityState$$() {
    var $mc$$3$$ = this.$_getMessagingContent$();
    return $mc$$3$$ && $mc$$3$$.$validityState$ || null;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$HasMessages$ = function $$oj$$3$$$$MessagingStrategy$$$$HasMessages$$() {
    var $messages$$2$$ = this.$GetMessages$();
    return $messages$$2$$ && 0 < $messages$$2$$.length ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$ShowMessages$ = function $$oj$$3$$$$MessagingStrategy$$$$ShowMessages$$() {
    return-1 !== this.$_displayOptions$.indexOf("messages") ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$ShowConverterHint$ = function $$oj$$3$$$$MessagingStrategy$$$$ShowConverterHint$$() {
    return-1 !== this.$_displayOptions$.indexOf("converterHint") ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$ShowValidatorHint$ = function $$oj$$3$$$$MessagingStrategy$$$$ShowValidatorHint$$() {
    return-1 !== this.$_displayOptions$.indexOf("validatorHint") ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$ShowTitle$ = function $$oj$$3$$$$MessagingStrategy$$$$ShowTitle$$() {
    return-1 !== this.$_displayOptions$.indexOf("title") ? !0 : !1;
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$IsInvalid$ = function $$oj$$3$$$$MessagingStrategy$$$$IsInvalid$$() {
    return this.$GetValidityState$().$isInvalid$();
  };
  $oj$$3$$.$MessagingStrategy$.prototype.$_getMessagingContent$ = function $$oj$$3$$$$MessagingStrategy$$$$_getMessagingContent$$() {
    return this.$_componentMessaging$ ? this.$_componentMessaging$.$_getMessagingContent$() : {};
  };
  $oj$$3$$.$DefaultMessagingStrategy$ = function $$oj$$3$$$$DefaultMessagingStrategy$$($displayOptions$$2$$) {
    this.Init($displayOptions$$2$$);
  };
  $oj$$3$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.NONE, $oj$$3$$.$DefaultMessagingStrategy$);
  $oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$ = "oj-invalid";
  $oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$ = "oj-warning";
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$DefaultMessagingStrategy$, $oj$$3$$.$MessagingStrategy$, "oj.DefaultMessagingStrategy");
  $oj$$3$$.$DefaultMessagingStrategy$.prototype.update = function $$oj$$3$$$$DefaultMessagingStrategy$$$update$() {
    $oj$$3$$.$DefaultMessagingStrategy$.$superclass$.update.call(this);
    var $launcher$$1$$ = this.$GetLauncher$(), $maxSeverity$$1$$ = this.$GetMaxSeverity$(), $removeClasses$$1$$ = [], $addClasses$$1$$ = [], $invalid$$ = !1, $jqRoot$$ = this.$GetComponent$().widget();
    $launcher$$1$$ && (this.$IsInvalid$() ? ($removeClasses$$1$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$), $addClasses$$1$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$), $invalid$$ = !0) : this.$HasMessages$() && $maxSeverity$$1$$ === $oj$$3$$.$Message$.$SEVERITY_LEVEL$.WARNING ? ($removeClasses$$1$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$), $addClasses$$1$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$)) : 
    ($removeClasses$$1$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$), $removeClasses$$1$$.push($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$)), $jqRoot$$.removeClass($removeClasses$$1$$.join(" ")).addClass($addClasses$$1$$.join(" ")), this.$GetContentElement$().attr({"aria-invalid":$invalid$$}));
  };
  $oj$$3$$.$DefaultMessagingStrategy$.prototype.$deactivate$ = function $$oj$$3$$$$DefaultMessagingStrategy$$$$deactivate$$() {
    this.$GetComponent$().widget().removeClass($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_INVALID$).removeClass($oj$$3$$.$DefaultMessagingStrategy$.$_SELECTOR_STATE_WARNING$);
    this.$GetContentElement$().removeAttr("aria-invalid");
    $oj$$3$$.$DefaultMessagingStrategy$.$superclass$.$deactivate$.call(this);
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$($displayOptions$$3$$) {
    this.Init($displayOptions$$3$$);
  };
  $oj$$3$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$3$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$PLACEHOLDER$, $oj$$3$$.$PlaceholderMessagingStrategy$);
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$PlaceholderMessagingStrategy$, $oj$$3$$.$MessagingStrategy$, "oj.PlaceholderMessagingStrategy");
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.Init = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$Init$($displayOptions$$4$$) {
    $oj$$3$$.$PlaceholderMessagingStrategy$.$superclass$.Init.call(this, $displayOptions$$4$$);
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$activate$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$activate$$($cm$$2$$) {
    $oj$$3$$.$PlaceholderMessagingStrategy$.$superclass$.$activate$.call(this, $cm$$2$$);
    this.$_refreshPlaceholder$();
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$reactivate$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$reactivate$$($newDisplayOptions$$1$$) {
    $oj$$3$$.$PlaceholderMessagingStrategy$.$superclass$.$reactivate$.call(this, $newDisplayOptions$$1$$);
    this.$_refreshPlaceholder$();
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$shouldUpdate$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$shouldUpdate$$($content$$8$$) {
    return $content$$8$$ && void 0 !== $content$$8$$.$converterHint$ ? !0 : !1;
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.update = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$update$() {
    $oj$$3$$.$PlaceholderMessagingStrategy$.$superclass$.update.call(this);
    this.$_refreshPlaceholder$();
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$_refreshPlaceholder$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$_refreshPlaceholder$$() {
    var $content$$9_hints$$2_launcher$$2$$ = this.$GetLauncher$();
    this.$ShowPlaceholderContent$() && $content$$9_hints$$2_launcher$$2$$ && ($content$$9_hints$$2_launcher$$2$$ = this.$GetConverterHint$(), $content$$9_hints$$2_launcher$$2$$ = $content$$9_hints$$2_launcher$$2$$.length ? $content$$9_hints$$2_launcher$$2$$[0] : "", this.$GetComponent$().option({placeholder:$content$$9_hints$$2_launcher$$2$$}, {_context:{$internalMessagingSet$:!0}}));
  };
  $oj$$3$$.$PlaceholderMessagingStrategy$.prototype.$ShowPlaceholderContent$ = function $$oj$$3$$$$PlaceholderMessagingStrategy$$$$ShowPlaceholderContent$$() {
    return this.$ShowConverterHint$();
  };
  $oj$$3$$.$ComponentValidity$ = function $$oj$$3$$$$ComponentValidity$$($valid$$1$$, $messages$$3$$) {
    this.Init($valid$$1$$, $messages$$3$$);
  };
  $oj$$3$$.$ComponentValidity$.$isInvalid$ = function $$oj$$3$$$$ComponentValidity$$$isInvalid$$($messages$$4$$) {
    return $oj$$3$$.$Message$.$getMaxSeverity$($messages$$4$$) >= $oj$$3$$.$Message$.$SEVERITY_LEVEL$.ERROR ? !0 : !1;
  };
  $oj$$3$$.$Object$.$createSubclass$($oj$$3$$.$ComponentValidity$, $oj$$3$$.$Object$, "oj.ComponentValidity");
  $oj$$3$$.$ComponentValidity$.prototype.Init = function $$oj$$3$$$$ComponentValidity$$$Init$($valid$$2$$, $messages$$5$$) {
    $oj$$3$$.$ComponentValidity$.$superclass$.Init.call(this);
    this.$_initialize$($messages$$5$$);
  };
  $oj$$3$$.$ComponentValidity$.prototype.$isInvalid$ = function $$oj$$3$$$$ComponentValidity$$$$isInvalid$$() {
    return this.$_invalid$;
  };
  $oj$$3$$.$ComponentValidity$.prototype.$getMaxSeverity$ = function $$oj$$3$$$$ComponentValidity$$$$getMaxSeverity$$() {
    return this.$_maxSeverity$;
  };
  $oj$$3$$.$ComponentValidity$.prototype.update = function $$oj$$3$$$$ComponentValidity$$$update$($valid$$3$$, $messages$$6$$) {
    this.$_initialize$($messages$$6$$);
  };
  $oj$$3$$.$ComponentValidity$.prototype.$_initialize$ = function $$oj$$3$$$$ComponentValidity$$$$_initialize$$($messages$$7$$) {
    this.$_compMessages$ = $messages$$7$$;
    this.$_messages$ = this.$_getImmediateMessages$();
    this.$_maxSeverity$ = $oj$$3$$.$Message$.$getMaxSeverity$(this.$_messages$);
    this.$_invalid$ = $oj$$3$$.$ComponentValidity$.$isInvalid$(this.$_messages$);
  };
  $oj$$3$$.$ComponentValidity$.prototype.$_getImmediateMessages$ = function $$oj$$3$$$$ComponentValidity$$$$_getImmediateMessages$$() {
    for (var $messages$$8$$ = this.$_compMessages$ || [], $immediateMsgs$$ = [], $msg$$3$$, $index$$85$$ = 0;$index$$85$$ < $messages$$8$$.length;$index$$85$$++) {
      $msg$$3$$ = $messages$$8$$[$index$$85$$], $msg$$3$$ instanceof $oj$$3$$.$ComponentMessage$ && !$msg$$3$$.$canDisplay$() || $immediateMsgs$$.push($msg$$3$$);
    }
    return $immediateMsgs$$;
  };
  $oj$$3$$.$FocusUtils$ = {};
  $oj$$3$$.$FocusUtils$.$_TABBABLE$ = ":tabbable";
  $oj$$3$$.$FocusUtils$.$containsFocus$ = function $$oj$$3$$$$FocusUtils$$$containsFocus$$($element$$31$$) {
    var $activeElem$$ = document.activeElement;
    return $element$$31$$ && $activeElem$$ ? $oj$$3$$.$DomUtils$.$isAncestorOrSelf$($element$$31$$, $activeElem$$) : !1;
  };
  $oj$$3$$.$FocusUtils$.$focusElement$ = function $$oj$$3$$$$FocusUtils$$$focusElement$$($element$$32$$) {
    $element$$32$$.focus();
  };
  $oj$$3$$.$FocusUtils$.$focusFirstTabStop$ = function $$oj$$3$$$$FocusUtils$$$focusFirstTabStop$$($element$$33_focusElement$$) {
    ($element$$33_focusElement$$ = $oj$$3$$.$FocusUtils$.$getFirstTabStop$($element$$33_focusElement$$)) && $oj$$3$$.$FocusUtils$.$focusElement$($element$$33_focusElement$$);
  };
  $oj$$3$$.$FocusUtils$.$getFirstTabStop$ = function $$oj$$3$$$$FocusUtils$$$getFirstTabStop$$($element$$34_jqFocusables$$) {
    var $jqElem$$ = $$$$3$$($element$$34_jqFocusables$$);
    return $jqElem$$.is($oj$$3$$.$FocusUtils$.$_TABBABLE$) ? $element$$34_jqFocusables$$ : ($element$$34_jqFocusables$$ = $jqElem$$.find($oj$$3$$.$FocusUtils$.$_TABBABLE$)) && 0 < $element$$34_jqFocusables$$.length ? $element$$34_jqFocusables$$[0] : null;
  };
  $oj$$3$$.$FocusUtils$.$isFocusable$ = function $$oj$$3$$$$FocusUtils$$$isFocusable$$($element$$35$$) {
    return $$$$3$$($element$$35$$).is(":focusable") && ("A" !== $element$$35$$.nodeName || $element$$35$$.hasAttribute("tabindex") || $oj$$3$$.$AgentUtils$.$getAgentInfo$().browser !== $oj$$3$$.$AgentUtils$.$BROWSER$.$SAFARI$) ? !0 : !1;
  };
  $oj$$3$$.$Test$ = {};
  $goog$exportPath_$$("Test", $oj$$3$$.$Test$, $oj$$3$$);
  $oj$$3$$.$Test$.ready = !1;
  $goog$exportPath_$$("Test.ready", $oj$$3$$.$Test$.ready, $oj$$3$$);
  $oj$$3$$.$Test$.$domNodeForLocator$ = function $$oj$$3$$$$Test$$$domNodeForLocator$$($element$$36_locator$$3_widgetConst$$) {
    var $locObj$$ = $element$$36_locator$$3_widgetConst$$;
    if ($oj$$3$$.$StringUtils$.$isString$($element$$36_locator$$3_widgetConst$$)) {
      try {
        $locObj$$ = $$$$3$$.parseJSON($element$$36_locator$$3_widgetConst$$);
      } catch ($e$$30$$) {
        return null;
      }
    }
    return $locObj$$ && $locObj$$.element && ($element$$36_locator$$3_widgetConst$$ = $$$$3$$($locObj$$.element)) ? ($element$$36_locator$$3_widgetConst$$ = $oj$$3$$.Components.$getWidgetConstructor$($element$$36_locator$$3_widgetConst$$[0], $locObj$$.component), delete $locObj$$.element, $element$$36_locator$$3_widgetConst$$("getNodeBySubId", $locObj$$)) : null;
  };
  $goog$exportPath_$$("Test.domNodeForLocator", $oj$$3$$.$Test$.$domNodeForLocator$, $oj$$3$$);
  $oj$$3$$.$Test$.$getOpenPopupCount$ = function $$oj$$3$$$$Test$$$getOpenPopupCount$$() {
    return $oj$$3$$.$ZOrderUtils$.$getOpenPopupCount$();
  };
  $goog$exportPath_$$("Test.getOpenPopupCount", $oj$$3$$.$Test$.$getOpenPopupCount$, $oj$$3$$);
  $oj$$3$$.$Test$.$findOpenPopups$ = function $$oj$$3$$$$Test$$$findOpenPopups$$() {
    return $oj$$3$$.$ZOrderUtils$.$findOpenPopups$();
  };
  $goog$exportPath_$$("Test.findOpenPopups", $oj$$3$$.$Test$.$findOpenPopups$, $oj$$3$$);
  $oj$$3$$.$Test$.$compareStackingContexts$ = function $$oj$$3$$$$Test$$$compareStackingContexts$$($el1$$, $el2$$) {
    return $oj$$3$$.$ZOrderUtils$.$compareStackingContexts$($el1$$, $el2$$);
  };
  $goog$exportPath_$$("Test.compareStackingContexts", $oj$$3$$.$Test$.$compareStackingContexts$, $oj$$3$$);
});
