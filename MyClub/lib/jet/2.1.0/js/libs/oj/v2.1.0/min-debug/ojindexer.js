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
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$36$$, $$$$33$$, $Hammer$$4$$) {
  (function() {
    $oj$$36$$.$__registerWidget$("oj.ojIndexer", $$$$33$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", version:"1.2", widgetEventPrefix:"oj", options:{data:null}, _ComponentCreate:function() {
      this._super();
      this.$_setup$();
    }, $_AfterCreate$:function() {
      var $container$$29$$;
      this._super();
      this.$_createIndexerContent$();
      this.$_setAriaProperties$();
      this.$_createInstructionText$();
      $container$$29$$ = this.$_getIndexerContainer$()[0];
      this.$_registerResizeListener$($container$$29$$);
      this.$_registerTouchHandler$($container$$29$$);
    }, _destroy:function() {
      var $container$$30$$, $model$$66$$;
      this._super();
      this.$_unsetAriaProperties$();
      this.element.removeClass("oj-component-initnode");
      $container$$30$$ = this.$_getIndexerContainer$()[0];
      this.$_unregisterResizeListener$($container$$30$$);
      this.$_unregisterTouchHandler$($container$$30$$);
      $model$$66$$ = this.$_getIndexerModel$();
      null != $model$$66$$ && this.$m_indexerModelListener$ && $model$$66$$.off($oj$$36$$.$IndexerModel$.$EventType$.$CHANGE$, this.$m_indexerModelListener$);
      $oj$$36$$.$DomUtils$.unwrap(this.element, $$$$33$$($container$$30$$));
    }, _setOption:function($key$$160$$, $value$$282$$) {
      this._superApply(arguments);
      "data" == $key$$160$$ && this.refresh();
    }, widget:function() {
      return this.$_getIndexerContainer$();
    }, refresh:function() {
      this._super();
      this.element.empty();
      this.$_createIndexerContent$();
      this.$_setAriaProperties$();
      this.$m_current$ = null;
    }, getNodeBySubId:function($locator$$37_prefix$$19$$) {
      var $prefixes$$, $i$$395$$, $j$$56$$, $node$$92$$, $includes$$;
      if (null == $locator$$37_prefix$$19$$) {
        return this.element ? this.element[0] : null;
      }
      if ("oj-indexer-prefix" === $locator$$37_prefix$$19$$.subId) {
        for ($locator$$37_prefix$$19$$ = $locator$$37_prefix$$19$$.prefix, $prefixes$$ = this.element.children("li"), $i$$395$$ = 0;$i$$395$$ < $prefixes$$.length;$i$$395$$++) {
          $node$$92$$ = $prefixes$$.get($i$$395$$);
          if ($$$$33$$($node$$92$$).attr("data-range") == $locator$$37_prefix$$19$$) {
            return $node$$92$$;
          }
          $includes$$ = $$$$33$$($node$$92$$).attr("data-includes");
          if (null != $includes$$) {
            for ($includes$$ = $includes$$.split("|"), $j$$56$$ = 0;$j$$56$$ < $includes$$.length;$j$$56$$++) {
              if ($includes$$[$j$$56$$] == $locator$$37_prefix$$19$$) {
                return $node$$92$$;
              }
            }
          }
        }
      }
      return null;
    }, getSubIdByNode:function($node$$93_prefix$$20$$) {
      return null != $node$$93_prefix$$20$$ && ($node$$93_prefix$$20$$ = $$$$33$$($node$$93_prefix$$20$$).attr("data-range"), null != $node$$93_prefix$$20$$) ? {subId:"oj-indexer-prefix", prefix:$node$$93_prefix$$20$$} : null;
    }, $_setAriaProperties$:function() {
      this.element.attr("role", "slider").attr("aria-orientation", "vertical").attr("aria-describedby", this.element.prop("id") + ":desc").attr("aria-valuemin", 0).attr("aria-valuemax", Math.max(0, this.element.children().length - 1));
    }, $_unsetAriaProperties$:function() {
      this.element.removeAttr("role").removeAttr("aria-orientation").removeAttr("aria-describedby").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuetext");
    }, $_createInstructionText$:function() {
      var $key$$161$$, $text$$23$$;
      $key$$161$$ = $oj$$36$$.$DomUtils$.$isTouchSupported$() ? "ariaTouchInstructionText" : "ariaKeyboardInstructionText";
      $text$$23$$ = $$$$33$$(document.createElement("div"));
      $text$$23$$.prop("id", this.element.prop("id") + ":desc");
      $text$$23$$.addClass("oj-helper-hidden-accessible").text(this.$getTranslatedString$($key$$161$$));
      this.$_getIndexerContainer$().append($text$$23$$);
    }, $_getIndexerContainer$:function() {
      null == this.$m_container$ && (this.$m_container$ = this.$_createIndexerContainer$());
      return this.$m_container$;
    }, $_createIndexerContainer$:function() {
      var $container$$31$$ = $$$$33$$(document.createElement("div"));
      $container$$31$$.addClass("oj-indexer oj-component");
      this.element.parent()[0].replaceChild($container$$31$$[0], this.element[0]);
      $container$$31$$.prepend(this.element);
      return $container$$31$$;
    }, $_createIndexerContent$:function() {
      var $model$$67_prefixOthers$$, $root$$29$$, $last$$4_others_prefixes$$1$$, $availablePrefixes$$, $height$$49_max$$7_skip$$4$$, $first$$8_i$$396_itemHeight$$, $item$$113_prefix$$21$$;
      $model$$67_prefixOthers$$ = this.$_getIndexerModel$();
      if (null != $model$$67_prefixOthers$$) {
        $root$$29$$ = this.element;
        $last$$4_others_prefixes$$1$$ = $model$$67_prefixOthers$$.getIndexablePrefixes();
        $availablePrefixes$$ = $model$$67_prefixOthers$$.getPrefixes();
        $model$$67_prefixOthers$$ = this.$getTranslatedString$("indexerOthers");
        $height$$49_max$$7_skip$$4$$ = this.widget().outerHeight();
        $first$$8_i$$396_itemHeight$$ = this.$_createItem$($last$$4_others_prefixes$$1$$[0], $availablePrefixes$$);
        $root$$29$$.append($first$$8_i$$396_itemHeight$$);
        $first$$8_i$$396_itemHeight$$ = $first$$8_i$$396_itemHeight$$.outerHeight();
        $height$$49_max$$7_skip$$4$$ = Math.floor($height$$49_max$$7_skip$$4$$ / $first$$8_i$$396_itemHeight$$);
        this.$_getIndexerContainer$().removeClass("oj-indexer-abbr");
        $height$$49_max$$7_skip$$4$$ = Math.floor(($last$$4_others_prefixes$$1$$.length + 1) / $height$$49_max$$7_skip$$4$$) + 1;
        1 < $height$$49_max$$7_skip$$4$$ && this.$_getIndexerContainer$().addClass("oj-indexer-abbr");
        for ($first$$8_i$$396_itemHeight$$ = 1 + $height$$49_max$$7_skip$$4$$;$first$$8_i$$396_itemHeight$$ < $last$$4_others_prefixes$$1$$.length;$first$$8_i$$396_itemHeight$$ = $first$$8_i$$396_itemHeight$$ + $height$$49_max$$7_skip$$4$$ + 1) {
          1 < $height$$49_max$$7_skip$$4$$ ? ($item$$113_prefix$$21$$ = this.$_createSeparator$($last$$4_others_prefixes$$1$$, $first$$8_i$$396_itemHeight$$ - $height$$49_max$$7_skip$$4$$, $first$$8_i$$396_itemHeight$$ - 1), $root$$29$$.append($item$$113_prefix$$21$$)) : $first$$8_i$$396_itemHeight$$--, $item$$113_prefix$$21$$ = $last$$4_others_prefixes$$1$$[$first$$8_i$$396_itemHeight$$], $item$$113_prefix$$21$$ = this.$_createItem$($item$$113_prefix$$21$$, $availablePrefixes$$), $root$$29$$.append($item$$113_prefix$$21$$)
          ;
        }
        $last$$4_others_prefixes$$1$$ = this.$_createItem$($last$$4_others_prefixes$$1$$[$last$$4_others_prefixes$$1$$.length - 1], $availablePrefixes$$);
        $root$$29$$.append($last$$4_others_prefixes$$1$$);
        $last$$4_others_prefixes$$1$$ = this.$_createItem$($model$$67_prefixOthers$$);
        $last$$4_others_prefixes$$1$$.attr("data-others", "true");
        $root$$29$$.append($last$$4_others_prefixes$$1$$);
      }
    }, $_createItem$:function($prefix$$22$$, $availablePrefixes$$1$$) {
      var $item$$114$$ = $$$$33$$(document.createElement("li"));
      $item$$114$$.attr("data-range", $prefix$$22$$).text($prefix$$22$$);
      null != $availablePrefixes$$1$$ && -1 == $availablePrefixes$$1$$.indexOf($prefix$$22$$) && $item$$114$$.addClass("oj-disabled");
      return $item$$114$$;
    }, $_createSeparator$:function($indexString$$, $from$$3_i$$397$$, $to$$3$$) {
      var $item$$115$$, $includes$$1$$ = "";
      $item$$115$$ = $$$$33$$(document.createElement("li"));
      for ($item$$115$$.addClass("oj-indexer-ellipsis").attr("data-range", $indexString$$[$from$$3_i$$397$$ + Math.round(($to$$3$$ - $from$$3_i$$397$$) / 2)]);$from$$3_i$$397$$ < $to$$3$$;$from$$3_i$$397$$++) {
        $includes$$1$$ = $includes$$1$$ + $indexString$$[$from$$3_i$$397$$] + "|";
      }
      $includes$$1$$ += $indexString$$[$to$$3$$];
      $item$$115$$.attr("data-includes", $includes$$1$$);
      return $item$$115$$;
    }, $_setup$:function() {
      var $self$$175$$ = this, $model$$68$$;
      this.element.uniqueId().addClass("oj-component-initnode").attr("tabIndex", 0);
      this._on(this.element, {click:function($event$$552$$) {
        $self$$175$$.$_handleClick$($event$$552$$);
      }, keydown:function($event$$553$$) {
        $self$$175$$.$_handleKeyDown$($event$$553$$);
      }, focus:function($event$$554$$) {
        $self$$175$$.$_handleFocus$($event$$554$$);
      }, blur:function($event$$555$$) {
        $self$$175$$.$_handleBlur$($event$$555$$);
      }});
      $model$$68$$ = this.$_getIndexerModel$();
      null != $model$$68$$ && (this.$m_indexerModelListener$ = function $this$$m_indexerModelListener$$() {
        $self$$175$$.refresh();
      }, $model$$68$$.on($oj$$36$$.$IndexerModel$.$EventType$.$CHANGE$, this.$m_indexerModelListener$));
      this._focusable({applyHighlight:!0, setupHandlers:function($focusInHandler$$2$$, $focusOutHandler$$2$$) {
        $self$$175$$.$_focusInHandler$ = $focusInHandler$$2$$;
        $self$$175$$.$_focusOutHandler$ = $focusOutHandler$$2$$;
      }});
    }, $_handleClick$:function($event$$556_target$$127$$) {
      0 === $event$$556_target$$127$$.button && ($event$$556_target$$127$$ = $$$$33$$($event$$556_target$$127$$.target), this.$_setCurrent$($event$$556_target$$127$$));
    }, $_handleFocus$:function() {
      this.$_getIndexerContainer$().addClass("oj-focus-ancestor");
      null == this.$m_current$ ? this.$_setFocus$(this.element.children("li").first()) : this.$_setFocus$(this.$m_current$);
    }, $_handleBlur$:function() {
      this.$_getIndexerContainer$().removeClass("oj-focus-ancestor");
    }, $_handleKeyDown$:function($event$$559$$) {
      var $next$$7$$, $processed$$8$$ = !1;
      switch($event$$559$$.keyCode) {
        case 38:
          $next$$7$$ = this.$m_current$.prev();
          break;
        case 40:
          $next$$7$$ = this.$m_current$.next();
          break;
        case 13:
          this.$_setCurrent$(this.$m_current$), $processed$$8$$ = !0;
      }
      null != $next$$7$$ && 0 < $next$$7$$.length && ($processed$$8$$ = !0, this.$_setFocus$($next$$7$$));
      $processed$$8$$ && $event$$559$$.preventDefault();
    }, $_setFocus$:function($item$$116$$) {
      null != this.$m_current$ && this.$_focusOutHandler$(this.$m_current$);
      this.$_focusInHandler$($item$$116$$);
      this.$_updateAriaProperties$($item$$116$$);
      this.$m_current$ = $item$$116$$;
    }, $_getIndexerModel$:function() {
      var $model$$69$$ = this.option("data");
      if (null != $model$$69$$ && (void 0 == $model$$69$$.setPrefix || void 0 == $model$$69$$.getIndexablePrefixes || void 0 == $model$$69$$.getPrefixes)) {
        throw "Invalid IndexerModel";
      }
      return $model$$69$$;
    }, $_setCurrent$:function($item$$117$$) {
      var $prefix$$23$$ = $item$$117$$.attr("data-range");
      $item$$117$$.attr("data-others") && ($prefix$$23$$ = $oj$$36$$.$IndexerModel$.PREFIX_OTHERS);
      this.$_setCurrentPrefix$($prefix$$23$$);
    }, $_setCurrentPrefix$:function($prefix$$24$$) {
      var $self$$176$$ = this, $item$$118$$;
      this.$_getIndexerModel$().setPrefix($prefix$$24$$).then(function($val$$62$$) {
        null != $val$$62$$ && ($item$$118$$ = $self$$176$$.$_findItem$($val$$62$$), null != $item$$118$$ && $self$$176$$.$_setFocus$($item$$118$$));
      });
    }, $_updateAriaProperties$:function($item$$119$$) {
      var $includes$$2_val$$63$$, $valueText$$ = "";
      $includes$$2_val$$63$$ = $item$$119$$.attr("data-includes");
      null != $includes$$2_val$$63$$ ? ($includes$$2_val$$63$$ = $includes$$2_val$$63$$.split("|"), 0 < $includes$$2_val$$63$$.length && ($valueText$$ = this.$getTranslatedString$("ariaInBetweenText", {first:$includes$$2_val$$63$$[0], second:$includes$$2_val$$63$$[$includes$$2_val$$63$$.length - 1]}))) : ($includes$$2_val$$63$$ = $item$$119$$.attr("data-range"), $valueText$$ = $includes$$2_val$$63$$ === $oj$$36$$.$IndexerModel$.PREFIX_OTHERS ? this.$getTranslatedString$("ariaOthersLabel") : $includes$$2_val$$63$$);
      $item$$119$$.hasClass("oj-disabled") && ($valueText$$ = $valueText$$ + ". " + this.$getTranslatedString$("ariaDisabledLabel"));
      this.element.attr("aria-valuetext", $valueText$$);
      this.element.attr("aria-valuenow", $item$$119$$.index());
    }, $_findItem$:function($prefix$$25$$) {
      var $children$$11$$, $i$$398$$, $item$$120$$, $value$$283$$, $includes$$3$$;
      $children$$11$$ = this.element.children();
      for ($i$$398$$ = 0;$i$$398$$ < $children$$11$$.length;$i$$398$$++) {
        if ($item$$120$$ = $children$$11$$.get($i$$398$$), $value$$283$$ = $$$$33$$($item$$120$$).attr("data-range"), $includes$$3$$ = $$$$33$$($item$$120$$).attr("data-includes"), null != $value$$283$$ && $value$$283$$ == $prefix$$25$$ || null != $includes$$3$$ && -1 < $includes$$3$$.indexOf($prefix$$25$$)) {
          return $$$$33$$($item$$120$$);
        }
      }
      return null;
    }, $_unregisterResizeListener$:function($element$$218$$) {
      $element$$218$$ && this.$_resizeHandler$ && $oj$$36$$.$DomUtils$.$removeResizeListener$($element$$218$$, this.$_resizeHandler$);
    }, $_registerResizeListener$:function($element$$219$$) {
      $element$$219$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$36$$.$DomUtils$.$addResizeListener$($element$$219$$, this.$_resizeHandler$));
    }, $_unregisterTouchHandler$:function($element$$220$$) {
      $$$$33$$($element$$220$$).off("panstart panmove panend");
    }, $_registerTouchHandler$:function($element$$221$$) {
      var $self$$177$$ = this, $options$$340$$, $target$$128$$, $x$$55$$, $y$$39$$, $currentTarget$$, $currentPrefix$$, $currentY$$, $previousY$$, $delta$$7$$, $range$$26$$, $index$$239$$, $prefix$$26$$;
      $options$$340$$ = {recognizers:[[$Hammer$$4$$.Pan, {direction:$Hammer$$4$$.DIRECTION_VERTICAL}]]};
      $$$$33$$($element$$221$$).$ojHammer$($options$$340$$).on("panstart", function($event$$560$$) {
        $target$$128$$ = $event$$560$$.gesture.target;
        $x$$55$$ = $self$$177$$.element[0].getBoundingClientRect().left + 5;
        $y$$39$$ = $target$$128$$.getBoundingClientRect().top;
        $self$$177$$.$_setCurrent$($$$$33$$($target$$128$$));
        $currentTarget$$ = $target$$128$$;
        $currentPrefix$$ = $target$$128$$.getAttribute("data-range");
        $currentY$$ = $y$$39$$;
      }).on("panmove", function($event$$561$$) {
        $previousY$$ = $currentY$$;
        $currentY$$ = $y$$39$$ + $event$$561$$.gesture.deltaY;
        $target$$128$$ = document.elementFromPoint($x$$55$$, $currentY$$);
        null != $target$$128$$ && ($delta$$7$$ = $currentY$$ - $previousY$$, $currentTarget$$ == $target$$128$$ ? ($range$$26$$ = $target$$128$$.getAttribute("data-includes"), null != $range$$26$$ && ($range$$26$$ = $range$$26$$.split("|"), $index$$239$$ = $range$$26$$.indexOf($currentPrefix$$), $prefix$$26$$ = null, 0 < $delta$$7$$ && $index$$239$$ < $range$$26$$.length - 1 ? $prefix$$26$$ = $range$$26$$[$index$$239$$ + 1] : 0 > $delta$$7$$ && 0 < $index$$239$$ && ($prefix$$26$$ = $range$$26$$[$index$$239$$ - 
        1]), null != $prefix$$26$$ && ($currentPrefix$$ = $prefix$$26$$, $self$$177$$.$_setCurrentPrefix$($prefix$$26$$)))) : $target$$128$$.hasAttribute("data-range") && ($range$$26$$ = $target$$128$$.getAttribute("data-includes"), $prefix$$26$$ = null, null != $range$$26$$ && (0 < $delta$$7$$ && $target$$128$$ == $currentTarget$$.nextElementSibling ? $prefix$$26$$ = $range$$26$$[0] : 0 > $delta$$7$$ && $target$$128$$ == $currentTarget$$.previousElementSibling && ($prefix$$26$$ = $range$$26$$[$range$$26$$.length - 
        1])), null == $prefix$$26$$ && ($prefix$$26$$ = $target$$128$$.getAttribute("data-range")), $currentTarget$$ = $target$$128$$, $currentPrefix$$ = $prefix$$26$$, $self$$177$$.$_setCurrentPrefix$($currentPrefix$$)));
      }).on("panend", function() {
        $prefix$$26$$ = $currentY$$ = $currentPrefix$$ = $currentTarget$$ = null;
      });
    }, $_handleResize$:function($width$$45$$, $height$$50$$) {
      0 < $width$$45$$ && 0 < $height$$50$$ && this.refresh();
    }});
  })();
  $oj$$36$$.$ListViewIndexerModel$ = function $$oj$$36$$$$ListViewIndexerModel$$($listview$$) {
    this.$listview$ = $listview$$;
    this.Init();
  };
  $goog$exportPath_$$("ListViewIndexerModel", $oj$$36$$.$ListViewIndexerModel$, $oj$$36$$);
  $oj$$36$$.$Object$.$createSubclass$($oj$$36$$.$ListViewIndexerModel$, $oj$$36$$.$EventSource$, "oj.ListViewIndexerModel");
  $oj$$36$$.$ListViewIndexerModel$.prototype.getIndexablePrefixes = function $$oj$$36$$$$ListViewIndexerModel$$$getIndexablePrefixes$() {
    return this.$listview$.$ojContext$.$getTranslatedString$("indexerCharacters").split("|");
  };
  $oj$$36$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.getIndexablePrefixes", {getIndexablePrefixes:$oj$$36$$.$ListViewIndexerModel$.prototype.getIndexablePrefixes});
  $oj$$36$$.$ListViewIndexerModel$.prototype.getPrefixes = function $$oj$$36$$$$ListViewIndexerModel$$$getPrefixes$() {
    null == this.$availablePrefixes$ && (this.$availablePrefixes$ = this.$_getAvailablePrefixes$());
    return this.$availablePrefixes$;
  };
  $oj$$36$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.getPrefixes", {getPrefixes:$oj$$36$$.$ListViewIndexerModel$.prototype.getPrefixes});
  $oj$$36$$.$ListViewIndexerModel$.prototype.$_getAvailablePrefixes$ = function $$oj$$36$$$$ListViewIndexerModel$$$$_getAvailablePrefixes$$() {
    var $results$$10$$ = [], $groupItems$$5$$ = this.$listview$.$_getGroupItemsCache$();
    if (null != $groupItems$$5$$) {
      for (var $prefixes$$3$$ = this.getIndexablePrefixes(), $i$$399$$ = 0;$i$$399$$ < $prefixes$$3$$.length;$i$$399$$++) {
        var $prefix$$27$$ = $prefixes$$3$$[$i$$399$$];
        $groupItems$$5$$.each(function() {
          if (0 == $$$$33$$(this).text().indexOf($prefix$$27$$)) {
            return $results$$10$$.push($prefix$$27$$), !1;
          }
        });
      }
    }
    return $results$$10$$;
  };
  $oj$$36$$.$ListViewIndexerModel$.prototype.setPrefix = function $$oj$$36$$$$ListViewIndexerModel$$$setPrefix$($prefix$$28$$) {
    return $prefix$$28$$ == $oj$$36$$.$IndexerModel$.PREFIX_OTHERS ? this.$_setOtherPrefix$() : this.$_setPrefix$($prefix$$28$$);
  };
  $oj$$36$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.setPrefix", {setPrefix:$oj$$36$$.$ListViewIndexerModel$.prototype.setPrefix});
  $oj$$36$$.$ListViewIndexerModel$.prototype.$_setOtherPrefix$ = function $$oj$$36$$$$ListViewIndexerModel$$$$_setOtherPrefix$$() {
    var $prefixes$$4$$, $self$$178$$ = this, $match$$23$$, $groupItems$$6$$, $content$$37$$, $i$$400$$, $prefix$$29$$;
    $prefixes$$4$$ = this.getIndexablePrefixes();
    return new Promise(function($resolve$$45$$) {
      $match$$23$$ = null;
      $groupItems$$6$$ = $self$$178$$.$listview$.$_getGroupItemsCache$();
      null != $groupItems$$6$$ && $groupItems$$6$$.each(function() {
        $content$$37$$ = $$$$33$$(this).text();
        for ($i$$400$$ = 0;$i$$400$$ < $prefixes$$4$$.length;$i$$400$$++) {
          if ($prefix$$29$$ = $prefixes$$4$$[$i$$400$$], 0 == $content$$37$$.indexOf($prefix$$29$$)) {
            return!0;
          }
        }
        $match$$23$$ = this;
        return!1;
      });
      $match$$23$$ ? ($self$$178$$.$listview$.$_scrollToGroupHeader$($match$$23$$), $resolve$$45$$($oj$$36$$.$IndexerModel$.PREFIX_OTHERS)) : $resolve$$45$$(null);
    });
  };
  $oj$$36$$.$ListViewIndexerModel$.prototype.$_setPrefix$ = function $$oj$$36$$$$ListViewIndexerModel$$$$_setPrefix$$($prefix$$30$$) {
    var $prefixes$$5$$, $index$$242$$, $self$$179$$ = this, $match$$24$$ = null, $groupHeader$$2$$;
    $prefixes$$5$$ = this.getIndexablePrefixes();
    $index$$242$$ = $prefixes$$5$$.indexOf($prefix$$30$$);
    return new Promise(function($resolve$$46$$) {
      if (-1 == $index$$242$$) {
        $resolve$$46$$(null);
      } else {
        for (;$index$$242$$ < $prefixes$$5$$.length;) {
          $prefix$$30$$ = $prefixes$$5$$[$index$$242$$];
          $groupHeader$$2$$ = $self$$179$$.$_findGroupHeader$($prefix$$30$$);
          if (null != $groupHeader$$2$$) {
            $self$$179$$.$listview$.$_scrollToGroupHeader$($groupHeader$$2$$);
            $match$$24$$ = $prefix$$30$$;
            break;
          }
          $index$$242$$++;
        }
        $resolve$$46$$($match$$24$$);
      }
    });
  };
  $oj$$36$$.$ListViewIndexerModel$.prototype.$_findGroupHeader$ = function $$oj$$36$$$$ListViewIndexerModel$$$$_findGroupHeader$$($prefix$$31$$) {
    var $match$$25$$, $groupItems$$7$$, $content$$38$$;
    $groupItems$$7$$ = this.$listview$.$_getGroupItemsCache$();
    null != $groupItems$$7$$ && $groupItems$$7$$.each(function() {
      $content$$38$$ = $$$$33$$(this).text();
      if (0 == $content$$38$$.indexOf($prefix$$31$$)) {
        return $match$$25$$ = this, !1;
      }
    });
    return $match$$25$$;
  };
  $oj$$36$$.$ListViewIndexerModel$.prototype.$fireChangeEvent$ = function $$oj$$36$$$$ListViewIndexerModel$$$$fireChangeEvent$$() {
    this.$availablePrefixes$ = null;
    this.handleEvent($oj$$36$$.$IndexerModel$.$EventType$.CHANGE, {});
  };
  $oj$$36$$.$IndexerModel$ = function $$oj$$36$$$$IndexerModel$$() {
  };
  $goog$exportPath_$$("IndexerModel", $oj$$36$$.$IndexerModel$, $oj$$36$$);
  $oj$$36$$.$IndexerModel$.PREFIX_OTHERS = "__others__";
  $goog$exportPath_$$("IndexerModel.PREFIX_OTHERS", $oj$$36$$.$IndexerModel$.PREFIX_OTHERS, $oj$$36$$);
  $oj$$36$$.$IndexerModel$.$EventType$ = {CHANGE:"change"};
  $goog$exportPath_$$("IndexerModel.EventType", $oj$$36$$.$IndexerModel$.$EventType$, $oj$$36$$);
  $oj$$36$$.$IndexerModel$.prototype.setPrefix = function $$oj$$36$$$$IndexerModel$$$setPrefix$() {
  };
  $oj$$36$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.setPrefix", {setPrefix:$oj$$36$$.$IndexerModel$.prototype.setPrefix});
  $oj$$36$$.$IndexerModel$.prototype.getIndexablePrefixes = function $$oj$$36$$$$IndexerModel$$$getIndexablePrefixes$() {
  };
  $oj$$36$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.getIndexablePrefixes", {getIndexablePrefixes:$oj$$36$$.$IndexerModel$.prototype.getIndexablePrefixes});
  $oj$$36$$.$IndexerModel$.prototype.getPrefixes = function $$oj$$36$$$$IndexerModel$$$getPrefixes$() {
  };
  $oj$$36$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.getPrefixes", {getPrefixes:$oj$$36$$.$IndexerModel$.prototype.getPrefixes});
});
