/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojdnd"], function($oj$$71$$, $$$$64$$) {
  function $MasonryLayoutCommon$$($elem$$121$$, $rtl$$8_sizeDivWrapper$$, $automationEnabled_style$$12$$, $selectors$$8_sizeDiv$$, $styles$$2$$, $callbackInfo$$) {
    null == $MasonryLayoutCommon$$.$_agentTypeAndVersion$ && ($MasonryLayoutCommon$$.$_agentTypeAndVersion$ = $MasonryLayoutCommon$$.$_getAgentTypeAndVersion$());
    this.$_elem$ = $elem$$121$$;
    this.$_rtl$ = $rtl$$8_sizeDivWrapper$$;
    this.$_automationEnabled$ = $automationEnabled_style$$12$$;
    $selectors$$8_sizeDiv$$ && $selectors$$8_sizeDiv$$.$tiles$ && (this.$_tilesSelector$ = $selectors$$8_sizeDiv$$.$tiles$);
    $styles$$2$$ && ($styles$$2$$.$transitionComponentResizeToStyleClass$ && (this.$_transitionComponentResizeToStyleClass$ = $styles$$2$$.$transitionComponentResizeToStyleClass$), $styles$$2$$.$transitionComponentResizeToFastStyleClass$ && (this.$_transitionComponentResizeToFastStyleClass$ = $styles$$2$$.$transitionComponentResizeToFastStyleClass$), $styles$$2$$.$transitionMoveToStyleClass$ && (this.$_transitionMoveToStyleClass$ = $styles$$2$$.$transitionMoveToStyleClass$), $styles$$2$$.$transitionMoveToFastStyleClass$ && 
    (this.$_transitionMoveToFastStyleClass$ = $styles$$2$$.$transitionMoveToFastStyleClass$), $styles$$2$$.$transitionHideFromStyleClass$ && (this.$_transitionHideFromStyleClass$ = $styles$$2$$.$transitionHideFromStyleClass$), $styles$$2$$.$transitionHideToStyleClass$ && (this.$_transitionHideToStyleClass$ = $styles$$2$$.$transitionHideToStyleClass$), $styles$$2$$.$transitionShowFromStyleClass$ && (this.$_transitionShowFromStyleClass$ = $styles$$2$$.$transitionShowFromStyleClass$), $styles$$2$$.$transitionShowToStyleClass$ && 
    (this.$_transitionShowToStyleClass$ = $styles$$2$$.$transitionShowToStyleClass$), $styles$$2$$.$transitionResizeToStyleClass$ && (this.$_transitionResizeToStyleClass$ = $styles$$2$$.$transitionResizeToStyleClass$));
    $callbackInfo$$ && ($callbackInfo$$.$addStyleClassName$ && (this.$_addStyleClassNameFunc$ = $callbackInfo$$.$addStyleClassName$), $callbackInfo$$.$removeStyleClassName$ && (this.$_removeStyleClassNameFunc$ = $callbackInfo$$.$removeStyleClassName$), $callbackInfo$$.$getSizeStyleClassName$ && (this.$_getSizeStyleClassNameFunc$ = $callbackInfo$$.$getSizeStyleClassName$), $callbackInfo$$.$getTileSpan$ && (this.$_getTileSpanFunc$ = $callbackInfo$$.$getTileSpan$), $callbackInfo$$.$showTileOnEndFunc$ && 
    (this.$_showTileOnEndFunc$ = $callbackInfo$$.$showTileOnEndFunc$), $callbackInfo$$.$hideTileOnEndFunc$ && (this.$_hideTileOnEndFunc$ = $callbackInfo$$.$hideTileOnEndFunc$), $callbackInfo$$.$layoutOnEndFunc$ && (this.$_layoutOnEndFunc$ = $callbackInfo$$.$layoutOnEndFunc$), $callbackInfo$$.$layoutCycleOnStartFunc$ && (this.$_layoutCycleOnStartFunc$ = $callbackInfo$$.$layoutCycleOnStartFunc$), $callbackInfo$$.$layoutCycleOnEndFunc$ && (this.$_layoutCycleOnEndFunc$ = $callbackInfo$$.$layoutCycleOnEndFunc$), 
    $callbackInfo$$.$sortTilesOriginalOrderFunc$ && (this.$_sortTilesOriginalOrderFunc$ = $callbackInfo$$.$sortTilesOriginalOrderFunc$), $callbackInfo$$.$subtreeAttached$ && (this.$_subtreeAttachedFunc$ = $callbackInfo$$.$subtreeAttached$), $callbackInfo$$.$subtreeDetached$ && (this.$_subtreeDetachedFunc$ = $callbackInfo$$.$subtreeDetached$));
    $rtl$$8_sizeDivWrapper$$ = document.createElement("div");
    $automationEnabled_style$$12$$ = $rtl$$8_sizeDivWrapper$$.style;
    $automationEnabled_style$$12$$.display = "inline-block";
    $automationEnabled_style$$12$$.overflow = "hidden";
    $automationEnabled_style$$12$$.visibility = "hidden";
    $selectors$$8_sizeDiv$$ = document.createElement("div");
    $automationEnabled_style$$12$$ = $selectors$$8_sizeDiv$$.style;
    $automationEnabled_style$$12$$.display = "inline-block";
    $rtl$$8_sizeDivWrapper$$.appendChild($selectors$$8_sizeDiv$$);
    $elem$$121$$.insertBefore($rtl$$8_sizeDivWrapper$$, $elem$$121$$.firstChild);
    this.$_sizeDivWrapper$ = $rtl$$8_sizeDivWrapper$$;
    this.$_sizeDiv$ = $selectors$$8_sizeDiv$$;
    var $self$$230$$ = this;
    this.$_handleTransitionEndFunc$ = function $this$$_handleTransitionEndFunc$$($event$$752$$) {
      $self$$230$$.$_handleTransitionEnd$($event$$752$$);
    };
    this.$_hideTilesFunc$ = function $this$$_hideTilesFunc$$() {
      $self$$230$$.$_hideTiles$();
    };
    this.$_handleHideTransitionEndFunc$ = function $this$$_handleHideTransitionEndFunc$$($event$$753$$) {
      $self$$230$$.$_handleHideTransitionEnd$($event$$753$$);
    };
    this.$_handleShowTransitionEndFunc$ = function $this$$_handleShowTransitionEndFunc$$($event$$754$$) {
      $self$$230$$.$_handleShowTransitionEnd$($event$$754$$);
    };
  }
  (function() {
    function $_getNextElement$$($currElem$$1_elem$$153_nextElem$$2$$) {
      for (;$currElem$$1_elem$$153_nextElem$$2$$;) {
        $currElem$$1_elem$$153_nextElem$$2$$ = $currElem$$1_elem$$153_nextElem$$2$$.nextSibling;
        var $bVisible$$ = !0;
        if ($currElem$$1_elem$$153_nextElem$$2$$) {
          var $style$$19$$ = $currElem$$1_elem$$153_nextElem$$2$$.style;
          !$style$$19$$ || $style$$19$$.visibility !== $_HIDDEN$$ && $style$$19$$.display !== $_NONE$$ || ($bVisible$$ = !1);
        }
        if ($currElem$$1_elem$$153_nextElem$$2$$ && 1 === $currElem$$1_elem$$153_nextElem$$2$$.nodeType && $bVisible$$) {
          return $currElem$$1_elem$$153_nextElem$$2$$;
        }
      }
      return null;
    }
    function $_findContainingTile$$($elem$$152$$, $rootElem$$) {
      for (var $currElem$$ = $elem$$152$$;$currElem$$;) {
        var $parentElem$$3_style$$18$$ = $currElem$$.style;
        if ($parentElem$$3_style$$18$$ && ($parentElem$$3_style$$18$$.visibility === $_HIDDEN$$ || $parentElem$$3_style$$18$$.display === $_NONE$$)) {
          break;
        }
        $parentElem$$3_style$$18$$ = $currElem$$.parentNode;
        if ($parentElem$$3_style$$18$$ === $rootElem$$) {
          return $currElem$$;
        }
        $currElem$$ = $parentElem$$3_style$$18$$;
      }
      return null;
    }
    function $_compareTilesOriginalOrder$$($tile1$$, $tile2$$) {
      return $tile2$$.$_jetDataMasonryOriginalOrder$ < $tile1$$.$_jetDataMasonryOriginalOrder$ ? 1 : $tile1$$.$_jetDataMasonryOriginalOrder$ < $tile2$$.$_jetDataMasonryOriginalOrder$ ? -1 : 0;
    }
    function $_sortTilesOriginalOrder$$($arTiles$$4$$) {
      $arTiles$$4$$ && $arTiles$$4$$.sort($_compareTilesOriginalOrder$$);
      return $arTiles$$4$$;
    }
    function $_getTileSpan$$($elem$$151_tile$$12$$) {
      var $span$$2$$ = null;
      $elem$$151_tile$$12$$ = $$$$64$$($elem$$151_tile$$12$$);
      $elem$$151_tile$$12$$.hasClass("oj-masonrylayout-tile-1x1") ? $span$$2$$ = {colSpan:1, rowSpan:1} : $elem$$151_tile$$12$$.hasClass("oj-masonrylayout-tile-2x1") ? $span$$2$$ = {colSpan:2, rowSpan:1} : $elem$$151_tile$$12$$.hasClass("oj-masonrylayout-tile-3x1") ? $span$$2$$ = {colSpan:3, rowSpan:1} : $elem$$151_tile$$12$$.hasClass("oj-masonrylayout-tile-1x2") ? $span$$2$$ = {colSpan:1, rowSpan:2} : $elem$$151_tile$$12$$.hasClass("oj-masonrylayout-tile-1x3") ? $span$$2$$ = {colSpan:1, rowSpan:3} : 
      $elem$$151_tile$$12$$.hasClass("oj-masonrylayout-tile-2x2") ? $span$$2$$ = {colSpan:2, rowSpan:2} : $elem$$151_tile$$12$$.hasClass("oj-masonrylayout-tile-2x3") ? $span$$2$$ = {colSpan:2, rowSpan:3} : $elem$$151_tile$$12$$.hasClass("oj-masonrylayout-tile-3x2") && ($span$$2$$ = {colSpan:3, rowSpan:2});
      return $span$$2$$;
    }
    function $_getSizeStyleClassName$$($elem$$150_tile$$11$$) {
      var $str$$25$$ = null;
      $elem$$150_tile$$11$$ = $$$$64$$($elem$$150_tile$$11$$);
      $elem$$150_tile$$11$$.hasClass("oj-masonrylayout-tile-1x1") ? $str$$25$$ = "oj-masonrylayout-tile-1x1" : $elem$$150_tile$$11$$.hasClass("oj-masonrylayout-tile-2x1") ? $str$$25$$ = "oj-masonrylayout-tile-2x1" : $elem$$150_tile$$11$$.hasClass("oj-masonrylayout-tile-3x1") ? $str$$25$$ = "oj-masonrylayout-tile-3x1" : $elem$$150_tile$$11$$.hasClass("oj-masonrylayout-tile-1x2") ? $str$$25$$ = "oj-masonrylayout-tile-1x2" : $elem$$150_tile$$11$$.hasClass("oj-masonrylayout-tile-1x3") ? $str$$25$$ = 
      "oj-masonrylayout-tile-1x3" : $elem$$150_tile$$11$$.hasClass("oj-masonrylayout-tile-2x2") ? $str$$25$$ = "oj-masonrylayout-tile-2x2" : $elem$$150_tile$$11$$.hasClass("oj-masonrylayout-tile-2x3") ? $str$$25$$ = "oj-masonrylayout-tile-2x3" : $elem$$150_tile$$11$$.hasClass("oj-masonrylayout-tile-3x2") && ($str$$25$$ = "oj-masonrylayout-tile-3x2");
      return $str$$25$$;
    }
    function $_removeStyleClassName$$($elem$$149$$, $styleClass$$12$$) {
      $$$$64$$($elem$$149$$).removeClass($styleClass$$12$$);
    }
    function $_addStyleClassName$$($elem$$148$$, $styleClass$$11$$) {
      $$$$64$$($elem$$148$$).addClass($styleClass$$11$$);
    }
    $oj$$71$$.$__registerWidget$("oj.ojMasonryLayout", $$$$64$$.oj.baseComponent, {defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{reorderHandle:null, beforeInsert:null, insert:null, beforeRemove:null, remove:null, beforeResize:null, resize:null, beforeReorder:null, reorder:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-masonrylayout oj-component");
      this.options.disabled && $oj$$71$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$);
      this.$reorderHandleEventNamespace$ = this.eventNamespace + "ReorderHandle";
      this.$_menu$ = {};
      this.$_menu$.$usermenu$ = !1;
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemCut$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_applyMenu$();
      this.$_setup$(!0);
    }, refresh:function() {
      this._super();
      var $bRecreate$$ = "rtl" === this.$_GetReadingDirection$() !== this.$_bRTL$;
      $bRecreate$$ && this.$_destroyMLCommon$();
      this.$_setup$($bRecreate$$);
    }, $_NotifyShown$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyAttached$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyContextMenuGesture$:function($$menuItems_menu$$21$$, $event$$755$$, $eventType$$52$$) {
      this.$_prepareContextMenuBeforeOpen$($event$$755$$);
      ($$menuItems_menu$$21$$ = this.$_menu$.$$container$.children().not(".oj-helper-hidden")) && 0 < $$menuItems_menu$$21$$.length && this.$_OpenContextMenu$($event$$755$$, $eventType$$52$$, {launcher:$$$$64$$($event$$755$$.target).closest(":tabbable")});
    }, $_setup$:function($isInit$$) {
      if (this.$_canCalculateSizes$()) {
        this.$_needsSetup$ = null;
        this.$_bRTL$ = "rtl" === this.$_GetReadingDirection$();
        this.$_bTouchSupported$ = $oj$$71$$.$DomUtils$.$isTouchSupported$();
        var $elem$$123_oldIsInit$$ = this.element, $children$$15_options$$392$$ = this.options;
        if ($isInit$$) {
          var $self$$231$$ = this;
          this.$_showTileOnEndFunc$ = function $this$$_showTileOnEndFunc$$($elem$$124$$) {
            $self$$231$$.$_showTileOnEnd$($elem$$124$$);
          };
          this.$_hideTileOnEndFunc$ = function $this$$_hideTileOnEndFunc$$($elem$$125$$) {
            $self$$231$$.$_hideTileOnEnd$($elem$$125$$);
          };
          this.$_layoutOnEndFunc$ = function $this$$_layoutOnEndFunc$$() {
            $self$$231$$.$_layoutOnEnd$();
          };
          this.$_layoutCycleOnStartFunc$ = function $this$$_layoutCycleOnStartFunc$$() {
            $self$$231$$.$_layoutCycleOnStart$();
          };
          this.$_layoutCycleOnEndFunc$ = function $this$$_layoutCycleOnEndFunc$$() {
            $self$$231$$.$_layoutCycleOnEnd$();
          };
          if (!this.$_mlCommon$) {
            var $selectors$$9$$ = {};
            $selectors$$9$$.$tiles$ = $_TILE_SELECTOR$$;
            var $styles$$3$$ = {$transitionComponentResizeToStyleClass$:"oj-masonrylayout-transition-resize-to", $transitionComponentResizeToFastStyleClass$:"oj-masonrylayout-transition-resize-to-fast", $transitionMoveToStyleClass$:"oj-masonrylayout-tile-transition-move-to", $transitionMoveToFastStyleClass$:"oj-masonrylayout-tile-transition-move-to-fast", $transitionHideFromStyleClass$:"oj-masonrylayout-tile-transition-hide-from", $transitionHideToStyleClass$:"oj-masonrylayout-tile-transition-hide-to"};
            $styles$$3$$.$transitionShowFromStyleClass$ = $_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$;
            $styles$$3$$.$transitionShowToStyleClass$ = "oj-masonrylayout-tile-transition-show-to";
            $styles$$3$$.$transitionResizeToStyleClass$ = "oj-masonrylayout-tile-transition-resize-to";
            var $callbackInfo$$1$$ = {};
            $callbackInfo$$1$$.$addStyleClassName$ = $_addStyleClassName$$;
            $callbackInfo$$1$$.$removeStyleClassName$ = $_removeStyleClassName$$;
            $callbackInfo$$1$$.$getSizeStyleClassName$ = $_getSizeStyleClassName$$;
            $callbackInfo$$1$$.$getTileSpan$ = $_getTileSpan$$;
            $callbackInfo$$1$$.$showTileOnEndFunc$ = this.$_showTileOnEndFunc$;
            $callbackInfo$$1$$.$hideTileOnEndFunc$ = this.$_hideTileOnEndFunc$;
            $callbackInfo$$1$$.$layoutOnEndFunc$ = this.$_layoutOnEndFunc$;
            $callbackInfo$$1$$.$layoutCycleOnStartFunc$ = this.$_layoutCycleOnStartFunc$;
            $callbackInfo$$1$$.$layoutCycleOnEndFunc$ = this.$_layoutCycleOnEndFunc$;
            $callbackInfo$$1$$.$sortTilesOriginalOrderFunc$ = $_sortTilesOriginalOrder$$;
            $callbackInfo$$1$$.$subtreeAttached$ = $oj$$71$$.Components.$subtreeAttached$;
            $callbackInfo$$1$$.$subtreeDetached$ = $oj$$71$$.Components.$subtreeDetached$;
            this.$_saveTilesOriginalOrder$();
            this.$_mlCommon$ = new $MasonryLayoutCommon$$($elem$$123_oldIsInit$$[0], this.$_bRTL$, "enabled" === $oj$$71$$.$Config$.$getAutomationMode$(), $selectors$$9$$, $styles$$3$$, $callbackInfo$$1$$);
          }
          this.$_handleDragStartFunc$ = function $this$$_handleDragStartFunc$$($event$$756$$) {
            $self$$231$$.$_handleDragStart$($event$$756$$);
          };
          this.$_handleDragEnterFunc$ = function $this$$_handleDragEnterFunc$$($event$$757$$) {
            $self$$231$$.$_handleDragEnter$($event$$757$$);
          };
          this.$_handleDragOverFunc$ = function $this$$_handleDragOverFunc$$($event$$758$$) {
            $self$$231$$.$_handleDragOver$($event$$758$$);
          };
          this.$_handleDragLeaveFunc$ = function $this$$_handleDragLeaveFunc$$($event$$759$$) {
            $self$$231$$.$_handleDragLeave$($event$$759$$);
          };
          this.$_handleDragEndFunc$ = function $this$$_handleDragEndFunc$$($event$$760$$) {
            $self$$231$$.$_handleDragEnd$($event$$760$$);
          };
          this.$_handleDropFunc$ = function $this$$_handleDropFunc$$($event$$761$$) {
            $self$$231$$.$_handleDrop$($event$$761$$);
          };
          $children$$15_options$$392$$.reorderHandle && this.$_setupReorderHandles$();
        } else {
          $children$$15_options$$392$$ = $elem$$123_oldIsInit$$.children(), this.$_tearDownReorderHandlesForElem$($children$$15_options$$392$$), this.$_setupReorderHandlesForElem$($children$$15_options$$392$$), this.$_checkTilesOriginalOrder$();
        }
        this.$_mlCommon$.$setup$($isInit$$);
        $isInit$$ && (this.$_handleResizeFunc$ = function $this$$_handleResizeFunc$$() {
          $self$$231$$.$_handleResize$();
        }, $oj$$71$$.$DomUtils$.$addResizeListener$($elem$$123_oldIsInit$$[0], this.$_handleResizeFunc$));
      } else {
        $elem$$123_oldIsInit$$ = !1, this.$_needsSetup$ && ($elem$$123_oldIsInit$$ = this.$_needsSetup$[0]), this.$_needsSetup$ = [$isInit$$ || $elem$$123_oldIsInit$$];
      }
    }, _destroy:function() {
      this.$_clearMenu$();
      var $elem$$126$$ = this.element;
      $oj$$71$$.$DomUtils$.$removeResizeListener$($elem$$126$$[0], this.$_handleResizeFunc$);
      this.$_handleResizeFunc$ = null;
      this.$_restoreTilesOriginalOrder$();
      for (var $children$$16$$ = this.$_getTileElements$(), $numChildren$$ = $children$$16$$.length, $i$$494$$ = 0;$i$$494$$ < $numChildren$$;$i$$494$$++) {
        delete $children$$16$$[$i$$494$$].$_jetDataMasonryOriginalOrder$;
      }
      this.$_destroyMLCommon$();
      $elem$$126$$.removeClass("oj-masonrylayout oj-component");
      this.options.reorderHandle && this.$_tearDownReorderHandles$();
      this.$_arTilesToInsert$ = this.$_layoutCycleOnEndFunc$ = this.$_layoutCycleOnStartFunc$ = this.$_layoutOnEndFunc$ = this.$_hideTileOnEndFunc$ = this.$_showTileOnEndFunc$ = this.$_handleDropFunc$ = this.$_handleDragEndFunc$ = this.$_handleDragLeaveFunc$ = this.$_handleDragOverFunc$ = this.$_handleDragEnterFunc$ = this.$_handleDragStartFunc$ = null;
      this._super();
    }, _setOption:function($key$$204$$, $value$$325$$, $flags$$54$$) {
      var $bReorderHandle$$ = !1;
      switch($key$$204$$) {
        case "reorderHandle":
          this.$_tearDownReorderHandles$();
          $bReorderHandle$$ = !0;
          break;
        case "disabled":
          $oj$$71$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$);
          break;
        case "contextMenu":
          $oj$$71$$.$DomUtils$.$isTouchSupported$() || (this.$_clearMenu$(), $value$$325$$ && this.$_initMenu$($value$$325$$));
      }
      this._super($key$$204$$, $value$$325$$, $flags$$54$$);
      $bReorderHandle$$ && $value$$325$$ && this.$_setupReorderHandles$();
    }, resizeTile:function($selector$$38$$, $sizeStyleClass$$) {
      var $mlCommon$$1$$ = this.$_mlCommon$;
      $mlCommon$$1$$.$isInLayoutCycle$() && $mlCommon$$1$$.$finishLayoutCycle$();
      var $jqElem$$1$$ = $$$$64$$($selector$$38$$), $elem$$128$$ = $jqElem$$1$$[0], $prevSizeStyleClass$$ = $_getSizeStyleClassName$$($elem$$128$$);
      if ($sizeStyleClass$$ == $prevSizeStyleClass$$) {
        throw Error("JET MasonryLayout: Unable to resize child " + $selector$$38$$ + " to style class " + $sizeStyleClass$$ + " because " + $sizeStyleClass$$ + " is already applied.");
      }
      !1 !== this._trigger("beforeResize", null, {tile:$jqElem$$1$$, previousSizeStyleClass:$prevSizeStyleClass$$, sizeStyleClass:$sizeStyleClass$$}) && (this.$_arResizingTiles$ || (this.$_arResizingTiles$ = []), this.$_arResizingTiles$.push($elem$$128$$, $prevSizeStyleClass$$, $sizeStyleClass$$), $mlCommon$$1$$.resizeTile($selector$$38$$, $sizeStyleClass$$));
    }, insertTile:function($selector$$39$$, $index$$322$$) {
      var $mlCommon$$2$$ = this.$_mlCommon$;
      $mlCommon$$2$$.$isInLayoutCycle$() && $mlCommon$$2$$.$finishLayoutCycle$();
      isNaN($index$$322$$) && ($index$$322$$ = -1);
      var $jqElem$$2_style$$13$$ = $$$$64$$($selector$$39$$), $elem$$129$$ = $jqElem$$2_style$$13$$[0];
      !1 !== this._trigger("beforeInsert", null, {tile:$jqElem$$2_style$$13$$, index:$index$$322$$}) && ($elem$$129$$.$_jetDataTileInsertIndex$ = $index$$322$$, $mlCommon$$2$$.$isAnimationEnabled$() && $jqElem$$2_style$$13$$.addClass($_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$), $jqElem$$2_style$$13$$ = $elem$$129$$.style, $jqElem$$2_style$$13$$.top = "-1px", this.$_bRTL$ ? $jqElem$$2_style$$13$$.right = "-1px" : $jqElem$$2_style$$13$$.left = "-1px", this.$_insertTileOriginalOrder$($elem$$129$$, 
      $index$$322$$), $mlCommon$$2$$.$insertTileDomElem$($elem$$129$$, $index$$322$$), $oj$$71$$.Components.$subtreeAttached$($elem$$129$$), this.$_arTilesToInsert$ || (this.$_arTilesToInsert$ = []), this.$_arTilesToInsert$.push($selector$$39$$));
    }, removeTile:function($selector$$40$$) {
      var $mlCommon$$3$$ = this.$_mlCommon$;
      $mlCommon$$3$$.$isInLayoutCycle$() && $mlCommon$$3$$.$finishLayoutCycle$();
      var $jqInfolet$$ = $$$$64$$($selector$$40$$), $index$$323_infolet$$ = $jqInfolet$$[0];
      if ($oj$$71$$.$FocusUtils$.$containsFocus$($index$$323_infolet$$)) {
        var $children$$17$$ = this.$_getTileElements$(!0), $index$$323_infolet$$ = $children$$17$$.indexOf($index$$323_infolet$$);
        0 < $index$$323_infolet$$ && (this.$_deletingTileWithFocusPrev$ = $children$$17$$[$index$$323_infolet$$ - 1]);
      }
      !1 !== this._trigger("beforeRemove", null, {tile:$jqInfolet$$}) && $mlCommon$$3$$.$hideTile$($selector$$40$$);
    }, $_handleResize$:function() {
      this.$_bDragging$ || this.$_inLayoutCycle$ || this.$_mlCommon$.$resizeNotify$();
    }, $_showTileOnEnd$:function($elem$$130$$) {
      var $jqElem$$3$$ = $$$$64$$($elem$$130$$), $index$$324$$ = $elem$$130$$.$_jetDataTileInsertIndex$;
      delete $elem$$130$$.$_jetDataTileInsertIndex$;
      this.options.reorderHandle && this.$_setupReorderHandlesForElem$($jqElem$$3$$);
      this._trigger("insert", null, {tile:$jqElem$$3$$, index:$index$$324$$});
    }, $_hideTileOnEnd$:function($elem$$131$$) {
      var $jqElem$$4$$ = $$$$64$$($elem$$131$$);
      this.options.reorderHandle && this.$_tearDownReorderHandlesForElem$($jqElem$$4$$);
      $oj$$71$$.Components.$subtreeDetached$($elem$$131$$);
      $elem$$131$$.parentNode.removeChild($elem$$131$$);
      this.$_removeTileOriginalOrder$($elem$$131$$);
      this._trigger("remove", null, {tile:$jqElem$$4$$});
    }, $_layoutOnEnd$:function() {
      if (this.$_arTilesToInsert$) {
        for (var $arResizingTiles$$1_mlCommon$$5$$ = this.$_mlCommon$, $arTilesToInsert$$1_eventData$$27_prevSizeStyleClass$$1$$ = this.$_arTilesToInsert$, $i$$495$$ = 0;$i$$495$$ < $arTilesToInsert$$1_eventData$$27_prevSizeStyleClass$$1$$.length;$i$$495$$++) {
          $arResizingTiles$$1_mlCommon$$5$$.$showTile$($arTilesToInsert$$1_eventData$$27_prevSizeStyleClass$$1$$[$i$$495$$]);
        }
        this.$_arTilesToInsert$ = null;
      }
      if (this.$_arResizingTiles$) {
        $arResizingTiles$$1_mlCommon$$5$$ = this.$_arResizingTiles$;
        for ($i$$495$$ = 0;$i$$495$$ < $arResizingTiles$$1_mlCommon$$5$$.length;$i$$495$$ += 3) {
          var $arTilesToInsert$$1_eventData$$27_prevSizeStyleClass$$1$$ = $arResizingTiles$$1_mlCommon$$5$$[$i$$495$$ + 1], $sizeStyleClass$$1$$ = $arResizingTiles$$1_mlCommon$$5$$[$i$$495$$ + 2], $arTilesToInsert$$1_eventData$$27_prevSizeStyleClass$$1$$ = {tile:$$$$64$$($arResizingTiles$$1_mlCommon$$5$$[$i$$495$$]), previousSizeStyleClass:$arTilesToInsert$$1_eventData$$27_prevSizeStyleClass$$1$$, sizeStyleClass:$sizeStyleClass$$1$$};
          this._trigger("resize", null, $arTilesToInsert$$1_eventData$$27_prevSizeStyleClass$$1$$);
        }
        this.$_arResizingTiles$ = null;
      }
      this.$_bDragging$ && (this.$_bDragMoveTransition$ ? this.$_handleDragMoveTransitionEnd$() : this.$_bDragEndTransition$ && this.$_handleDragEndTransitionEnd$());
    }, $_layoutCycleOnStart$:function() {
      this.$_inLayoutCycle$ = !0;
      this.$_layoutStartActiveDomElem$ = null;
      var $activeDomElem$$ = document.activeElement;
      $activeDomElem$$ && $oj$$71$$.$DomUtils$.$isAncestor$(this.element[0], $activeDomElem$$) && (this.$_layoutStartActiveDomElem$ = $activeDomElem$$);
    }, $_layoutCycleOnEnd$:function() {
      this.$_inLayoutCycle$ = !1;
      var $children$$18_elem$$133$$ = this.element[0];
      if (this.$_layoutStartActiveDomElem$) {
        var $layoutStartActiveDomElem_tile$$ = this.$_layoutStartActiveDomElem$;
        this.$_layoutStartActiveDomElem$ = null;
        if (this.$_deletingTileWithFocusPrev$) {
          if ($layoutStartActiveDomElem_tile$$ = this.$_deletingTileWithFocusPrev$, this.$_deletingTileWithFocusPrev$ = null, $layoutStartActiveDomElem_tile$$ && $oj$$71$$.$DomUtils$.$isAncestor$($children$$18_elem$$133$$, $layoutStartActiveDomElem_tile$$)) {
            var $children$$18_elem$$133$$ = this.$_getTileElements$($children$$18_elem$$133$$, !0), $index$$325$$ = $children$$18_elem$$133$$.indexOf($layoutStartActiveDomElem_tile$$);
            0 <= $index$$325$$ && $index$$325$$ < $children$$18_elem$$133$$.length - 1 ? $oj$$71$$.$FocusUtils$.$focusFirstTabStop$($children$$18_elem$$133$$[$index$$325$$ + 1]) : $oj$$71$$.$FocusUtils$.$focusFirstTabStop$($layoutStartActiveDomElem_tile$$);
          }
        } else {
          $oj$$71$$.$DomUtils$.$isAncestor$($children$$18_elem$$133$$, $layoutStartActiveDomElem_tile$$) ? $oj$$71$$.$FocusUtils$.$focusElement$($layoutStartActiveDomElem_tile$$) : $oj$$71$$.$FocusUtils$.$focusFirstTabStop$($children$$18_elem$$133$$);
        }
      }
    }, $_destroyMLCommon$:function() {
      var $mlCommon$$6$$ = this.$_mlCommon$;
      $mlCommon$$6$$ && $mlCommon$$6$$.destroy();
      this.$_mlCommon$ = null;
    }, $_canCalculateSizes$:function() {
      var $div$$14$$ = document.createElement("div"), $elem$$134_style$$14$$ = $div$$14$$.style;
      $elem$$134_style$$14$$.width = "10px";
      $elem$$134_style$$14$$.height = "10px";
      $elem$$134_style$$14$$ = this.element[0];
      $elem$$134_style$$14$$.appendChild($div$$14$$);
      var $bCanCalcSizes$$ = !1;
      try {
        $bCanCalcSizes$$ = 0 < $div$$14$$.offsetWidth && 0 < $div$$14$$.offsetHeight;
      } catch ($e$$135$$) {
      }
      $elem$$134_style$$14$$.removeChild($div$$14$$);
      return $bCanCalcSizes$$;
    }, $_getTileElements$:function($excludeDropSite$$) {
      for (var $children$$19$$ = this.element.children($_TILE_SELECTOR$$), $numChildren$$1$$ = $children$$19$$.length, $arChildren$$ = [], $i$$496$$ = 0;$i$$496$$ < $numChildren$$1$$;$i$$496$$++) {
        var $child$$17$$ = $children$$19$$[$i$$496$$];
        if (!$excludeDropSite$$ || $excludeDropSite$$ && $child$$17$$ !== this.$_dropSite$) {
          var $style$$15$$ = $child$$17$$.style;
          $style$$15$$.visibility !== $_HIDDEN$$ && $style$$15$$.display !== $_NONE$$ && $arChildren$$.push($child$$17$$);
        }
      }
      return $arChildren$$;
    }, $_saveTilesOriginalOrder$:function() {
      var $arTiles$$ = this.$_getTileElements$();
      if ($arTiles$$) {
        for (var $i$$497$$ = 0;$i$$497$$ < $arTiles$$.length;$i$$497$$++) {
          var $tile$$1$$ = $arTiles$$[$i$$497$$];
          $tile$$1$$.$_jetDataMasonryOriginalOrder$ || ($tile$$1$$.$_jetDataMasonryOriginalOrder$ = $i$$497$$ + 1);
        }
      }
    }, $_checkTilesOriginalOrder$:function() {
      var $arTiles$$1$$ = this.$_getTileElements$();
      if ($arTiles$$1$$) {
        for (var $i$$498$$ = 0;$i$$498$$ < $arTiles$$1$$.length;$i$$498$$++) {
          var $tile$$2$$ = $arTiles$$1$$[$i$$498$$];
          $tile$$2$$.$_jetDataMasonryOriginalOrder$ || this.$_insertTileOriginalOrder$($tile$$2$$, $i$$498$$);
        }
      }
    }, $_restoreTilesOriginalOrder$:function() {
      var $children$$20$$ = this.$_getTileElements$(), $sortedChildren$$ = this.$_getTileElements$();
      $_sortTilesOriginalOrder$$($sortedChildren$$);
      for (var $i$$499$$ = 0;$i$$499$$ < $children$$20$$.length;$i$$499$$++) {
        var $child$$18_sortedChildIndex$$ = $children$$20$$[$i$$499$$], $sortedChild$$ = $sortedChildren$$[$i$$499$$];
        $child$$18_sortedChildIndex$$ != $sortedChild$$ && ($oj$$71$$.Components.$subtreeDetached$($sortedChild$$), $child$$18_sortedChildIndex$$.parentNode.insertBefore($sortedChild$$, $child$$18_sortedChildIndex$$), $oj$$71$$.Components.$subtreeAttached$($sortedChild$$), $child$$18_sortedChildIndex$$ = $children$$20$$.indexOf($sortedChild$$), $child$$18_sortedChildIndex$$ > $i$$499$$ && ($children$$20$$.splice($child$$18_sortedChildIndex$$, 1), $children$$20$$.splice($i$$499$$, 0, $sortedChild$$)));
      }
    }, $_insertTileOriginalOrder$:function($insertedTile$$, $index$$326$$) {
      var $arTiles$$2$$ = this.$_getTileElements$();
      0 > $index$$326$$ && ($index$$326$$ = $arTiles$$2$$.length);
      if ($arTiles$$2$$) {
        for (var $i$$500$$ = 0;$i$$500$$ < $arTiles$$2$$.length;$i$$500$$++) {
          var $tile$$3$$ = $arTiles$$2$$[$i$$500$$];
          $tile$$3$$.$_jetDataMasonryOriginalOrder$ && $tile$$3$$.$_jetDataMasonryOriginalOrder$ >= $index$$326$$ + 1 && $tile$$3$$.$_jetDataMasonryOriginalOrder$++;
        }
      }
      $insertedTile$$.$_jetDataMasonryOriginalOrder$ = $index$$326$$ + 1;
    }, $_removeTileOriginalOrder$:function($removedTile$$) {
      if ($removedTile$$.$_jetDataMasonryOriginalOrder$) {
        var $arTiles$$3$$ = this.$_getTileElements$();
        if ($arTiles$$3$$) {
          for (var $i$$501$$ = 0;$i$$501$$ < $arTiles$$3$$.length;$i$$501$$++) {
            var $tile$$4$$ = $arTiles$$3$$[$i$$501$$];
            $tile$$4$$.$_jetDataMasonryOriginalOrder$ && $tile$$4$$.$_jetDataMasonryOriginalOrder$ > $removedTile$$.$_jetDataMasonryOriginalOrder$ && $tile$$4$$.$_jetDataMasonryOriginalOrder$--;
          }
        }
        delete $removedTile$$.$_jetDataMasonryOriginalOrder$;
      }
    }, $_initMenu$:function($newVal$$8$$) {
      var $$m$$2_menu$$22$$ = null, $dm$$1_t$$18$$ = null;
      $newVal$$8$$ || this.options.contextMenu || ($$m$$2_menu$$22$$ = this.element.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m$$2_menu$$22$$);
      if ($newVal$$8$$ || this.options.contextMenu) {
        $$m$$2_menu$$22$$ = $newVal$$8$$ || this.options.contextMenu;
        $dm$$1_t$$18$$ = $$$$64$$.type($$m$$2_menu$$22$$);
        if ("function" == $dm$$1_t$$18$$) {
          try {
            $$m$$2_menu$$22$$ = $$m$$2_menu$$22$$();
          } catch ($e$$136$$) {
            $$m$$2_menu$$22$$ = null;
          }
          $$$$64$$.type($$m$$2_menu$$22$$);
        }
        if ($$m$$2_menu$$22$$) {
          if ($$m$$2_menu$$22$$ = $$$$64$$($$m$$2_menu$$22$$)) {
            $$m$$2_menu$$22$$.css("display", $_NONE$$);
            $dm$$1_t$$18$$ = this.$_menu$;
            if (!$dm$$1_t$$18$$) {
              return;
            }
            $dm$$1_t$$18$$.$$container$ = $$m$$2_menu$$22$$;
            $dm$$1_t$$18$$.$usermenu$ = !0;
          }
          this.$_menu$.$usermenu$ && $newVal$$8$$ && this.$_applyMenu$();
        }
      }
    }, $_applyMenu$:function() {
      if (this.$_menu$ && this.$_menu$.$usermenu$ && this.options.reorderHandle) {
        var $$menuContainer$$3$$ = this.$_menu$.$$container$, $self$$232$$ = this;
        $$menuContainer$$3$$.on("ojselect", $$$$64$$.proxy(this.$_handleContextMenuSelect$, this));
        var $bChanged$$1$$ = !1;
        $$menuContainer$$3$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$64$$(this).children("a").length) {
            var $command$$19$$ = $$$$64$$(this).attr("data-oj-command").slice(17);
            $$$$64$$(this).replaceWith($self$$232$$.$_buildContextMenuItem$($command$$19$$));
            $$$$64$$(this).addClass("oj-menu-item");
            $bChanged$$1$$ = !0;
          }
        });
        $bChanged$$1$$ && $$menuContainer$$3$$.ojMenu("refresh");
        this.$_menu$.$$elemCut$ = $$menuContainer$$3$$.find("#" + $_OJMASONRYLAYOUTCUT$$);
        this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$3$$.find("#" + $_OJMASONRYLAYOUTPASTEBEFORE$$);
        this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$3$$.find("#" + $_OJMASONRYLAYOUTPASTEAFTER$$);
      }
    }, $_clearMenu$:function() {
      var $menu$$23$$ = this.$_menu$;
      $menu$$23$$ && $menu$$23$$.$usermenu$ && ($menu$$23$$.$usermenu$ = !1, $menu$$23$$.$$container$.off("ojselect"), $menu$$23$$.$$container$ = null);
    }, $_prepareContextMenuBeforeOpen$:function($e$$137_pasteAfterDisabled_reorderAllowed$$) {
      var $elem$$136_tile$$5$$ = this.element, $cutTile_target$$141$$ = $e$$137_pasteAfterDisabled_reorderAllowed$$.originalEvent.target, $bRefreshMenu_closestHandle_reorderHandle$$ = this.options.reorderHandle;
      $e$$137_pasteAfterDisabled_reorderAllowed$$ = !1;
      $bRefreshMenu_closestHandle_reorderHandle$$ && ($bRefreshMenu_closestHandle_reorderHandle$$ = $$$$64$$($cutTile_target$$141$$).closest($bRefreshMenu_closestHandle_reorderHandle$$)) && 0 < $bRefreshMenu_closestHandle_reorderHandle$$.length && ($e$$137_pasteAfterDisabled_reorderAllowed$$ = !0);
      $elem$$136_tile$$5$$ = $_findContainingTile$$($cutTile_target$$141$$, $elem$$136_tile$$5$$[0]);
      this.$_menu$.tile = $elem$$136_tile$$5$$;
      if (this.$_menu$.$usermenu$) {
        var $cutTile_target$$141$$ = this.$_menu$.$cutTile$, $bRefreshMenu_closestHandle_reorderHandle$$ = !1, $elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemCut$;
        if ($elemCut_elemPasteAfter_elemPasteBefore$$) {
          var $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass("oj-helper-hidden");
          $e$$137_pasteAfterDisabled_reorderAllowed$$ || $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ ? $e$$137_pasteAfterDisabled_reorderAllowed$$ && $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ && ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass("oj-helper-hidden"), $bRefreshMenu_closestHandle_reorderHandle$$ = !0) : ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass("oj-helper-hidden"), $bRefreshMenu_closestHandle_reorderHandle$$ = !0);
          var $cutDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ = !1;
          $cutTile_target$$141$$ && $elem$$136_tile$$5$$ === $cutTile_target$$141$$ && ($bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ = !0);
          $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ && !$cutDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu_closestHandle_reorderHandle$$ = !0) : !$bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ && $cutDisabled_pasteBeforeDisabled$$ && ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu_closestHandle_reorderHandle$$ = !0);
        }
        if ($elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemPasteBefore$) {
          $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass("oj-helper-hidden"), $e$$137_pasteAfterDisabled_reorderAllowed$$ || $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ ? $e$$137_pasteAfterDisabled_reorderAllowed$$ && $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ && ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass("oj-helper-hidden"), $bRefreshMenu_closestHandle_reorderHandle$$ = !0) : ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass("oj-helper-hidden"), 
          $bRefreshMenu_closestHandle_reorderHandle$$ = !0), $cutDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ = !1, $cutTile_target$$141$$ && $elem$$136_tile$$5$$ !== $cutTile_target$$141$$ && $elem$$136_tile$$5$$ !== $_getNextElement$$($cutTile_target$$141$$) || ($bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ = !0), $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ && 
          !$cutDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu_closestHandle_reorderHandle$$ = !0) : !$bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ && $cutDisabled_pasteBeforeDisabled$$ && ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu_closestHandle_reorderHandle$$ = !0);
        }
        if ($elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemPasteAfter$) {
          $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass("oj-helper-hidden"), $e$$137_pasteAfterDisabled_reorderAllowed$$ || $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ ? $e$$137_pasteAfterDisabled_reorderAllowed$$ && $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ && ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass("oj-helper-hidden"), $bRefreshMenu_closestHandle_reorderHandle$$ = !0) : ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass("oj-helper-hidden"), 
          $bRefreshMenu_closestHandle_reorderHandle$$ = !0), $e$$137_pasteAfterDisabled_reorderAllowed$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ = !1, $cutTile_target$$141$$ && $cutTile_target$$141$$ !== $elem$$136_tile$$5$$ && $cutTile_target$$141$$ !== $_getNextElement$$($elem$$136_tile$$5$$) || ($bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ = !0), $bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ && 
          !$e$$137_pasteAfterDisabled_reorderAllowed$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu_closestHandle_reorderHandle$$ = !0) : !$bDisable_cutHidden_pasteAfterHidden_pasteBeforeHidden$$ && $e$$137_pasteAfterDisabled_reorderAllowed$$ && ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu_closestHandle_reorderHandle$$ = !0);
        }
        $bRefreshMenu_closestHandle_reorderHandle$$ && this.$_menu$.$$container$.ojMenu("refresh");
      }
    }, $_buildContextMenuItem$:function($cmd$$5_transKey$$) {
      var $id$$74$$ = $_MENU_CMD_MAP$$[$cmd$$5_transKey$$];
      $cmd$$5_transKey$$ = $_MENU_TRANSLATION_MAP$$[$cmd$$5_transKey$$];
      var $label$$20$$ = $$$$64$$('\x3ca href\x3d"#"\x3e\x3c/a\x3e');
      $label$$20$$.text(this.$getTranslatedString$($cmd$$5_transKey$$));
      $label$$20$$.wrap("\x3cli id\x3d" + $id$$74$$ + "\x3e\x3c/li\x3e");
      return $label$$20$$.parent();
    }, $_menuCut$:function($obj$$121$$) {
      $obj$$121$$ && (this.$_menu$.$cutTile$ = $obj$$121$$);
    }, $_menuPaste$:function($obj$$122$$, $pasteBefore$$2$$) {
      if ($obj$$122$$ && this.$_menu$.$cutTile$) {
        var $cutTile$$1$$ = this.$_menu$.$cutTile$;
        this.$_menu$.$cutTile$ = !1;
        this.$_doPaste$($cutTile$$1$$, $obj$$122$$, $pasteBefore$$2$$);
      }
    }, $_doPaste$:function($cutTile$$2$$, $nextElem_pasteTile$$, $pasteBefore$$3$$) {
      var $fromIndex$$3$$ = $cutTile$$2$$.$_jetDataMasonryOriginalOrder$ - 1, $jqCutTile$$ = $$$$64$$($cutTile$$2$$);
      if (!1 !== this._trigger("beforeReorder", null, {tile:$jqCutTile$$, fromIndex:$fromIndex$$3$$})) {
        this.$_removeTileOriginalOrder$($cutTile$$2$$);
        var $toIndex$$ = $nextElem_pasteTile$$.$_jetDataMasonryOriginalOrder$ - 1;
        $pasteBefore$$3$$ || $toIndex$$++;
        var $elem$$137$$ = this.element[0];
        $pasteBefore$$3$$ || ($nextElem_pasteTile$$ = $_getNextElement$$($nextElem_pasteTile$$));
        this.$_insertTileOriginalOrder$($cutTile$$2$$, $toIndex$$);
        $elem$$137$$.insertBefore($cutTile$$2$$, $nextElem_pasteTile$$);
        this.$_mlCommon$.$setup$(!0);
        this._trigger("reorder", null, {tile:$jqCutTile$$, fromIndex:$fromIndex$$3$$, toIndex:$toIndex$$});
      }
    }, $_handleContextMenuSelect$:function($ev$$8$$, $ui$$53$$) {
      var $id$$75$$ = $ui$$53$$ ? $ui$$53$$.item.attr("id") : void 0;
      $id$$75$$ === $_OJMASONRYLAYOUTCUT$$ ? this.$_menuCut$(this.$_menu$.tile) : $id$$75$$ === $_OJMASONRYLAYOUTPASTEBEFORE$$ ? this.$_menuPaste$(this.$_menu$.tile, !0) : $id$$75$$ === $_OJMASONRYLAYOUTPASTEAFTER$$ && this.$_menuPaste$(this.$_menu$.tile, !1);
    }, $_getTileIndex$:function($tile$$6$$) {
      var $children$$21$$ = this.$_getTileElements$(!0);
      $_sortTilesOriginalOrder$$($children$$21$$);
      for (var $numChildren$$2$$ = $children$$21$$.length, $i$$502$$ = 0;$i$$502$$ < $numChildren$$2$$;$i$$502$$++) {
        if ($children$$21$$[$i$$502$$] === $tile$$6$$) {
          return $i$$502$$;
        }
      }
      return-1;
    }, $_setupReorderHandles$:function() {
      var $elem$$138$$ = this.element, $children$$22$$ = $elem$$138$$.children();
      this.$_setupReorderHandlesForElem$($children$$22$$);
      $elem$$138$$.on("dragstart" + this.$reorderHandleEventNamespace$, this.$_handleDragStartFunc$).on("dragenter" + this.$reorderHandleEventNamespace$, this.$_handleDragEnterFunc$).on("dragover" + this.$reorderHandleEventNamespace$, this.$_handleDragOverFunc$).on("dragleave" + this.$reorderHandleEventNamespace$, this.$_handleDragLeaveFunc$).on("dragend" + this.$reorderHandleEventNamespace$, this.$_handleDragEndFunc$).on("drop" + this.$reorderHandleEventNamespace$, this.$_handleDropFunc$);
    }, $_setupReorderHandlesForElem$:function($jqElem$$5$$) {
      var $options$$398$$ = this.options;
      $jqElem$$5$$.filter($options$$398$$.reorderHandle).attr($_DRAGGABLE$$, "true").addClass($_OJ_DRAGGABLE$$);
      $jqElem$$5$$.find($options$$398$$.reorderHandle).attr($_DRAGGABLE$$, "true").addClass($_OJ_DRAGGABLE$$);
    }, $_tearDownReorderHandles$:function() {
      var $elem$$139$$ = this.element, $children$$23$$ = $elem$$139$$.children();
      this.$_tearDownReorderHandlesForElem$($children$$23$$);
      $elem$$139$$.off(this.$reorderHandleEventNamespace$);
    }, $_tearDownReorderHandlesForElem$:function($jqElem$$6$$) {
      var $options$$399$$ = this.options;
      $jqElem$$6$$.filter($options$$399$$.reorderHandle).removeAttr($_DRAGGABLE$$).removeClass($_OJ_DRAGGABLE$$);
      $jqElem$$6$$.find($options$$399$$.reorderHandle).removeAttr($_DRAGGABLE$$).removeClass($_OJ_DRAGGABLE$$);
    }, $_handleDragStart$:function($event$$762_originalEvent$$6$$) {
      var $options$$400_tile$$7$$ = this.options;
      if ($options$$400_tile$$7$$.reorderHandle) {
        var $closestHandle$$1_eventData$$29_index$$327_target$$142$$ = $event$$762_originalEvent$$6$$.originalEvent.target, $closestHandle$$1_eventData$$29_index$$327_target$$142$$ = $$$$64$$($closestHandle$$1_eventData$$29_index$$327_target$$142$$).closest($options$$400_tile$$7$$.reorderHandle);
        if (!$closestHandle$$1_eventData$$29_index$$327_target$$142$$ || 1 > $closestHandle$$1_eventData$$29_index$$327_target$$142$$.length) {
          return;
        }
      }
      $options$$400_tile$$7$$.reorderHandle && !this.$_bDragging$ && ($closestHandle$$1_eventData$$29_index$$327_target$$142$$ = $event$$762_originalEvent$$6$$.target, $options$$400_tile$$7$$ = $_findContainingTile$$($closestHandle$$1_eventData$$29_index$$327_target$$142$$, this.element[0])) && ($closestHandle$$1_eventData$$29_index$$327_target$$142$$ = this.$_getTileIndex$($options$$400_tile$$7$$), $options$$400_tile$$7$$.$_jetDataMasonryDragSourceIndex$ = $closestHandle$$1_eventData$$29_index$$327_target$$142$$, 
      $closestHandle$$1_eventData$$29_index$$327_target$$142$$ = {tile:$$$$64$$($options$$400_tile$$7$$), fromIndex:$closestHandle$$1_eventData$$29_index$$327_target$$142$$}, !1 !== this._trigger("beforeReorder", null, $closestHandle$$1_eventData$$29_index$$327_target$$142$$) && ($event$$762_originalEvent$$6$$ = $event$$762_originalEvent$$6$$.originalEvent, this.$_dragStart$($options$$400_tile$$7$$, $event$$762_originalEvent$$6$$.pageX, $event$$762_originalEvent$$6$$.pageY, $event$$762_originalEvent$$6$$.dataTransfer)));
    }, $_handleDragEnter$:function($event$$763_originalEvent$$7$$) {
      if (this.$_bDragging$) {
        $event$$763_originalEvent$$7$$ = $event$$763_originalEvent$$7$$.originalEvent;
        var $elemUnderPoint_relatedTarget$$1$$ = $event$$763_originalEvent$$7$$.relatedTarget, $elem$$141$$ = this.element[0], $enteringMasonryLayout$$ = !1;
        $elemUnderPoint_relatedTarget$$1$$ ? $enteringMasonryLayout$$ = $elem$$141$$ != $elemUnderPoint_relatedTarget$$1$$ && !$oj$$71$$.$DomUtils$.$isAncestor$($elem$$141$$, $elemUnderPoint_relatedTarget$$1$$) : this.$_dragLeftMasonryLayout$ && ($enteringMasonryLayout$$ = ($elemUnderPoint_relatedTarget$$1$$ = document.elementFromPoint($event$$763_originalEvent$$7$$.clientX, $event$$763_originalEvent$$7$$.clientY)) && ($elemUnderPoint_relatedTarget$$1$$ == $elem$$141$$ || $oj$$71$$.$DomUtils$.$isAncestor$($elem$$141$$, 
        $elemUnderPoint_relatedTarget$$1$$)));
        $enteringMasonryLayout$$ && ((this.$_dragLeftMasonryLayout$ = !1, this.$_draggedTile$) ? this.$_dropSite$ && ($$$$64$$(this.$_dropSite$).css("display", ""), this.$_mlCommon$.$setup$(!1, !0)) : $event$$763_originalEvent$$7$$.dataTransfer.dropEffect = "none");
      }
    }, $_handleDragOver$:function($event$$764$$) {
      if (!this.$_bDragging$) {
        return!1;
      }
      var $originalEvent$$8$$ = $event$$764$$.originalEvent;
      $originalEvent$$8$$.dataTransfer.dropEffect = "move";
      this.$_dragMove$($originalEvent$$8$$.pageX, $originalEvent$$8$$.clientX, $originalEvent$$8$$.clientY);
      $event$$764$$.preventDefault();
      return!1;
    }, $_handleDragLeave$:function($elem$$142_event$$765$$) {
      if (this.$_bDragging$) {
        var $elemUnderPoint$$1_originalEvent$$9$$ = $elem$$142_event$$765$$.originalEvent, $relatedTarget$$2$$ = $elemUnderPoint$$1_originalEvent$$9$$.relatedTarget;
        $elem$$142_event$$765$$ = this.element[0];
        var $leavingMasonryLayout$$ = !1;
        $leavingMasonryLayout$$ = $relatedTarget$$2$$ ? $elem$$142_event$$765$$ != $relatedTarget$$2$$ && !$oj$$71$$.$DomUtils$.$isAncestor$($elem$$142_event$$765$$, $relatedTarget$$2$$) : ($elemUnderPoint$$1_originalEvent$$9$$ = document.elementFromPoint($elemUnderPoint$$1_originalEvent$$9$$.clientX, $elemUnderPoint$$1_originalEvent$$9$$.clientY)) && $elemUnderPoint$$1_originalEvent$$9$$ != $elem$$142_event$$765$$ && !$oj$$71$$.$DomUtils$.$isAncestor$($elem$$142_event$$765$$, $elemUnderPoint$$1_originalEvent$$9$$);
        $leavingMasonryLayout$$ && (this.$_dragLeftMasonryLayout$ = !0, this.$_dropSite$ && ($$$$64$$(this.$_dropSite$).css("display", $_NONE$$), this.$_mlCommon$.$setup$(!1, !0)));
      }
    }, $_clearDragStartHideTileTimeout$:function() {
      if (this.$_dragStartHideTileTimeout$) {
        clearTimeout(this.$_dragStartHideTileTimeout$);
        this.$_dragStartHideTileTimeout$ = null;
        var $draggedTile$$ = this.$_draggedTile$;
        $draggedTile$$ && $$$$64$$($draggedTile$$).removeClass("oj-drag");
      }
    }, $_handleDragEnd$:function() {
      this.$_clearDragStartHideTileTimeout$();
      if (this.$_bDragging$ && !this.$_bDropping$) {
        var $draggedTile$$1$$ = this.$_draggedTile$;
        if ($draggedTile$$1$$ && this.$_dropSite$) {
          var $dropSite$$ = this.$_dropSite$;
          $oj$$71$$.$DomUtils$.$isAncestor$(this.element[0], $draggedTile$$1$$) && ($$$$64$$($dropSite$$).css("display", ""), this.$_removeTileOriginalOrder$($dropSite$$), $dropSite$$.parentNode.removeChild($dropSite$$), $$$$64$$($draggedTile$$1$$).css("display", ""), this.$_insertTileOriginalOrder$($draggedTile$$1$$, $draggedTile$$1$$.$_jetDataMasonryOriginalOrder$ - 1), this.$_mlCommon$.$setup$(!1, !0));
          delete $draggedTile$$1$$.$_jetDataMasonryDragSourceIndex$;
        }
        this.$_dropSite$ = this.$_draggedTile$ = null;
        this.$_bMouseMoved$ = this.$_bDragMoveTransition$ = !1;
        this.$_dragOffset$ = null;
        this.$_bDragging$ = this.$_bDragEndTransition$ = !1;
      }
    }, $_handleDrop$:function($event$$767$$) {
      if (!this.$_bDragging$) {
        return!1;
      }
      var $mlCommon$$11_originalEvent$$10$$ = this.$_mlCommon$;
      $mlCommon$$11_originalEvent$$10$$.$isInLayoutCycle$() && $mlCommon$$11_originalEvent$$10$$.$finishLayoutCycle$();
      this.$_clearDragStartHideTileTimeout$();
      $mlCommon$$11_originalEvent$$10$$ = $event$$767$$.originalEvent;
      this.$_drop$(this.$_draggedTile$, $mlCommon$$11_originalEvent$$10$$.pageX, $mlCommon$$11_originalEvent$$10$$.pageY);
      $event$$767$$.stopPropagation();
      return!1;
    }, $_dragStart$:function($tile$$8$$, $dragOffset_pageX$$1$$, $pageY$$1$$, $dataTransfer$$5$$) {
      this.$_bDragging$ = !0;
      this.$_bDragStartTileHidden$ = this.$_bMouseMoved$ = this.$_bDropping$ = !1;
      this.$_draggedTile$ = $tile$$8$$;
      var $elem$$144$$ = this.element[0], $offset$$29_sizeClass_style$$16$$ = $_getSizeStyleClassName$$($tile$$8$$), $dropSite$$1$$ = this.$_dropSite$ = document.createElement("div");
      $dropSite$$1$$.$_jetDataMasonryOriginalOrder$ = $tile$$8$$.$_jetDataMasonryOriginalOrder$;
      $dropSite$$1$$.className = $offset$$29_sizeClass_style$$16$$ + " oj-drop";
      var $offset$$29_sizeClass_style$$16$$ = $dropSite$$1$$.style, $tileStyle$$ = $tile$$8$$.style;
      $offset$$29_sizeClass_style$$16$$.top = $tileStyle$$.top;
      this.$_bRTL$ ? $offset$$29_sizeClass_style$$16$$.right = $tileStyle$$.right : $offset$$29_sizeClass_style$$16$$.left = $tileStyle$$.left;
      $offset$$29_sizeClass_style$$16$$ = $$$$64$$($tile$$8$$).offset();
      $elem$$144$$.insertBefore($dropSite$$1$$, $tile$$8$$);
      this.$_dragOffset$ = $dragOffset_pageX$$1$$ = {left:$dragOffset_pageX$$1$$ - $offset$$29_sizeClass_style$$16$$.left, top:$pageY$$1$$ - $offset$$29_sizeClass_style$$16$$.top};
      $$$$64$$($tile$$8$$).addClass("oj-drag");
      $dataTransfer$$5$$.effectAllowed = "move";
      $dataTransfer$$5$$.setData("text/html", $tile$$8$$.outerHTML);
      $dataTransfer$$5$$.setDragImage($tile$$8$$, $dragOffset_pageX$$1$$.left, $dragOffset_pageX$$1$$.top);
      var $self$$233$$ = this;
      this.$_dragStartHideTileTimeout$ = setTimeout(function() {
        $self$$233$$.$_bDragStartTileHidden$ = !0;
        $tileStyle$$.display = $_NONE$$;
        $$$$64$$($tile$$8$$).removeClass("oj-drag");
        $self$$233$$.$_dragStartHideTileTimeout$ = null;
        $oj$$71$$.Components.$subtreeHidden$($tile$$8$$);
      }, 0);
    }, $_dragMove$:function($bRightSide_nextElem$$1_pageX$$2$$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $clientY$$2_handleInTile_oldNextSibling_tileHasReorderHandle$$) {
      this.$_bMouseMoved$ = !0;
      if (this.$_bDragStartTileHidden$ && !this.$_bDragMoveTransition$) {
        var $elem$$145$$ = this.element[0];
        $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ = document.elementFromPoint($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $clientY$$2_handleInTile_oldNextSibling_tileHasReorderHandle$$);
        $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ = $_findContainingTile$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $elem$$145$$);
        $clientY$$2_handleInTile_oldNextSibling_tileHasReorderHandle$$ = !1;
        if ($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$) {
          var $$tileUnderPoint_offset$$30$$ = $$$$64$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$), $reorderHandle$$1$$ = this.options.reorderHandle;
          $reorderHandle$$1$$ && ($clientY$$2_handleInTile_oldNextSibling_tileHasReorderHandle$$ = ($clientY$$2_handleInTile_oldNextSibling_tileHasReorderHandle$$ = $$tileUnderPoint_offset$$30$$.find($reorderHandle$$1$$)) && 0 < $clientY$$2_handleInTile_oldNextSibling_tileHasReorderHandle$$.length);
        }
        $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ && $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ !== this.$_dropSite$ && $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ !== this.$_draggedTile$ && $clientY$$2_handleInTile_oldNextSibling_tileHasReorderHandle$$ && ($$tileUnderPoint_offset$$30$$ = $$$$64$$($elem$$145$$).offset(), $clientY$$2_handleInTile_oldNextSibling_tileHasReorderHandle$$ = $_getNextElement$$(this.$_dropSite$), $bRightSide_nextElem$$1_pageX$$2$$ = $bRightSide_nextElem$$1_pageX$$2$$ - 
        $$tileUnderPoint_offset$$30$$.left >= $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.offsetLeft + .5 * $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.offsetWidth, this.$_removeTileOriginalOrder$(this.$_dropSite$), $bRightSide_nextElem$$1_pageX$$2$$ && !this.$_bRTL$ || !$bRightSide_nextElem$$1_pageX$$2$$ && this.$_bRTL$ ? ($bRightSide_nextElem$$1_pageX$$2$$ = $_getNextElement$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$)) ? (this.$_insertTileOriginalOrder$(this.$_dropSite$, $bRightSide_nextElem$$1_pageX$$2$$.$_jetDataMasonryOriginalOrder$ - 
        1), $elem$$145$$.insertBefore(this.$_dropSite$, $bRightSide_nextElem$$1_pageX$$2$$)) : (this.$_insertTileOriginalOrder$(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.$_jetDataMasonryOriginalOrder$), $elem$$145$$.appendChild(this.$_dropSite$)) : (this.$_insertTileOriginalOrder$(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.$_jetDataMasonryOriginalOrder$ - 1), $elem$$145$$.insertBefore(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$)), 
        $clientY$$2_handleInTile_oldNextSibling_tileHasReorderHandle$$ !== $_getNextElement$$(this.$_dropSite$) && (this.$_bDragMoveTransition$ = this.$_mlCommon$.$setup$(!1, !0)));
      }
    }, $_handleDragMoveTransitionEnd$:function() {
      this.$_bDragMoveTransition$ = !1;
    }, $_drop$:function($tile$$9$$, $newLeft$$1_pageX$$3$$, $pageY$$2$$) {
      this.$_bDropping$ = !0;
      var $elem$$146$$ = this.element[0], $dropSite$$2_style$$17$$ = this.$_dropSite$;
      this.$_dropSite$ = null;
      $oj$$71$$.Components.$subtreeDetached$($tile$$9$$);
      $elem$$146$$.replaceChild($tile$$9$$, $dropSite$$2_style$$17$$);
      $oj$$71$$.Components.$subtreeAttached$($tile$$9$$);
      $tile$$9$$.$_jetDataMasonryOriginalOrder$ = $dropSite$$2_style$$17$$.$_jetDataMasonryOriginalOrder$;
      $dropSite$$2_style$$17$$ = $tile$$9$$.style;
      $dropSite$$2_style$$17$$.display = "";
      $oj$$71$$.Components.$subtreeShown$($tile$$9$$);
      var $offset$$31$$ = $$$$64$$($elem$$146$$).offset(), $dragOffset$$1$$ = this.$_dragOffset$;
      $dropSite$$2_style$$17$$.top = $pageY$$2$$ - $dragOffset$$1$$.top - $offset$$31$$.top + $_PX$$;
      $newLeft$$1_pageX$$3$$ = $newLeft$$1_pageX$$3$$ - $dragOffset$$1$$.left - $offset$$31$$.left;
      this.$_bRTL$ ? ($dropSite$$2_style$$17$$.right = $elem$$146$$.offsetWidth - ($newLeft$$1_pageX$$3$$ + $$$$64$$($tile$$9$$).outerWidth(!0)) + $_PX$$, $dropSite$$2_style$$17$$.left = "") : $dropSite$$2_style$$17$$.left = $newLeft$$1_pageX$$3$$ + $_PX$$;
      this.$_dragOffset$ = null;
      this.$_bMouseMoved$ ? this.$_bDragEndTransition$ = this.$_mlCommon$.$setup$(!1, !0) : this.$_handleDragEndTransitionEnd$();
    }, $_handleDragEndTransitionEnd$:function() {
      this.$_bDragStartTileHidden$ = this.$_bMouseMoved$ = this.$_bDropping$ = this.$_bDragging$ = this.$_bDragEndTransition$ = !1;
      var $eventData$$30_tile$$10$$ = this.$_draggedTile$;
      this.$_draggedTile$ = null;
      var $fromIndex$$4$$ = $eventData$$30_tile$$10$$.$_jetDataMasonryDragSourceIndex$;
      delete $eventData$$30_tile$$10$$.$_jetDataMasonryDragSourceIndex$;
      var $toIndex$$1$$ = this.$_getTileIndex$($eventData$$30_tile$$10$$), $eventData$$30_tile$$10$$ = {tile:$$$$64$$($eventData$$30_tile$$10$$), fromIndex:$fromIndex$$4$$, toIndex:$toIndex$$1$$};
      this._trigger("reorder", null, $eventData$$30_tile$$10$$);
    }, getNodeBySubId:function($locator$$63$$) {
      return this._super($locator$$63$$);
    }, getSubIdByNode:function($node$$172$$) {
      return this._super($node$$172$$);
    }});
    var $_PX$$ = "px", $_HIDDEN$$ = "hidden", $_NONE$$ = "none", $_DRAGGABLE$$ = "draggable", $_OJ_DISABLED$$ = "oj-disabled", $_OJ_DRAGGABLE$$ = "oj-draggable", $_TILE_SELECTOR$$ = ".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2", $_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$ = "oj-masonrylayout-tile-transition-show-from", 
    $_WARNING_DISABLED_OPTION$$ = "JET MasonryLayout: 'disabled' option not supported", $_OJMASONRYLAYOUTCUT$$ = "ojmasonrylayoutcut", $_OJMASONRYLAYOUTPASTEBEFORE$$ = "ojmasonrylayoutpastebefore", $_OJMASONRYLAYOUTPASTEAFTER$$ = "ojmasonrylayoutpasteafter", $_MENU_CMD_MAP$$ = {cut:$_OJMASONRYLAYOUTCUT$$, "paste-before":$_OJMASONRYLAYOUTPASTEBEFORE$$, "paste-after":$_OJMASONRYLAYOUTPASTEAFTER$$}, $_MENU_TRANSLATION_MAP$$ = {cut:"labelCut", "paste-before":"labelPasteBefore", "paste-after":"labelPasteAfter"};
  })();
  $MasonryLayoutCommon$$.prototype.$setup$ = function $$MasonryLayoutCommon$$$$$setup$$($init$$, $reorder$$1$$) {
    var $ret$$81$$ = !1;
    $init$$ ? ($ret$$81$$ = this.$_layout$() ? !0 : !1, this.$_reorderTilesForLayout$()) : (this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$(), this.$_transitionStart$($reorder$$1$$), $ret$$81$$ = this.$_transitionLayout$());
    return $ret$$81$$;
  };
  $MasonryLayoutCommon$$.prototype.destroy = function $$MasonryLayoutCommon$$$$destroy$() {
    for (var $elem$$154$$ = this.$_elem$, $children$$24$$ = this.$_getTileChildren$(), $i$$503$$ = 0;$i$$503$$ < $children$$24$$.length;$i$$503$$++) {
      var $style$$20$$ = $children$$24$$[$i$$503$$].style;
      this.$_rtl$ ? $style$$20$$.right = "" : $style$$20$$.left = "";
      $style$$20$$.top = "";
    }
    $elem$$154$$.removeChild(this.$_sizeDivWrapper$);
    this.$_subtreeDetachedFunc$ = this.$_subtreeAttachedFunc$ = this.$_sortTilesOriginalOrderFunc$ = this.$_layoutCycleOnEndFunc$ = this.$_layoutCycleOnStartFunc$ = this.$_layoutOnEndFunc$ = this.$_hideTileOnEndFunc$ = this.$_showTileOnEndFunc$ = this.$_getTileSpanFunc$ = this.$_getSizeStyleClassNameFunc$ = this.$_removeStyleClassNameFunc$ = this.$_addStyleClassNameFunc$ = this.$_elem$ = this.$_arFireHideOnEnd$ = this.$_arInfoletsToHide$ = this.$_arInfoletsToShow$ = this.$_arInfoletsToResize$ = this.$_arMovedInfolets$ = 
    this.$_handleShowTransitionEndFunc$ = this.$_handleHideTransitionEndFunc$ = this.$_hideTilesFunc$ = this.$_handleTransitionEndFunc$ = this.$_sizeDiv$ = this.$_sizeDivWrapper$ = null;
  };
  $MasonryLayoutCommon$$.prototype.resizeTile = function $$MasonryLayoutCommon$$$$resizeTile$($selector$$42$$, $sizeStyleClass$$2$$) {
    var $infolet$$1$$ = this.$_elem$.querySelector($selector$$42$$);
    if ($infolet$$1$$) {
      this.$_arInfoletsToResize$ || (this.$_arInfoletsToResize$ = []);
      var $arInfoletsToResize$$ = this.$_arInfoletsToResize$;
      $arInfoletsToResize$$.push($infolet$$1$$);
      $arInfoletsToResize$$.push($sizeStyleClass$$2$$);
      this.$_resizingInfolet$ = !0;
      this.$_queueRelayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$insertTileDomElem$ = function $$MasonryLayoutCommon$$$$$insertTileDomElem$$($tileDomElem$$, $index$$328$$) {
    var $arChildren$$1$$ = this.$_getTileChildren$();
    this.$_sortTilesOriginalOrderFunc$ && this.$_sortTilesOriginalOrderFunc$($arChildren$$1$$);
    var $currChildAtIndex$$ = null;
    0 <= $index$$328$$ && $index$$328$$ < $arChildren$$1$$.length && ($currChildAtIndex$$ = $arChildren$$1$$[$index$$328$$]);
    this.$_elem$.insertBefore($tileDomElem$$, $currChildAtIndex$$);
    this.$_queueRelayout$();
  };
  $MasonryLayoutCommon$$.prototype.$showTile$ = function $$MasonryLayoutCommon$$$$$showTile$$($infolet$$2_selector$$43$$) {
    if ($infolet$$2_selector$$43$$ = this.$_elem$.querySelector($infolet$$2_selector$$43$$)) {
      this.$_arInfoletsToShow$ || (this.$_arInfoletsToShow$ = []), this.$_arInfoletsToShow$.push($infolet$$2_selector$$43$$), this.$_showingInfolets$ = !0, this.$_layoutPhase$ !== $MasonryLayoutCommon$$.$_PHASE_HIDE$ && this.$_layoutPhase$ !== $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ ? this.$_queueRelayout$() : this.$_showingInfolets$ = !1;
    }
  };
  $MasonryLayoutCommon$$.prototype.$hideTile$ = function $$MasonryLayoutCommon$$$$$hideTile$$($infolet$$3_selector$$44$$) {
    if ($infolet$$3_selector$$44$$ = this.$_elem$.querySelector($infolet$$3_selector$$44$$)) {
      this.$_arInfoletsToHide$ || (this.$_arInfoletsToHide$ = []), this.$_arInfoletsToHide$.push($infolet$$3_selector$$44$$), this.$_hidingInfolets$ = !0, this.$_queueRelayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$resizeNotify$ = function $$MasonryLayoutCommon$$$$$resizeNotify$$() {
    this.$_resizingInfolet$ || this.$_hidingInfolets$ || this.$_showingInfolets$ || (this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$(), this.$_transitionStart$(!1), this.$_transitionLayout$());
  };
  $MasonryLayoutCommon$$.prototype.$isAnimationEnabled$ = function $$MasonryLayoutCommon$$$$$isAnimationEnabled$$() {
    if (this.$_temporarilyDisableAnimation$) {
      return!1;
    }
    this.$_cachedAnimationEnabled$ || (this.$_animationEnabled$ = this.$_automationEnabled$ ? !1 : $MasonryLayoutCommon$$.$_isMinimumAgentMet$($MasonryLayoutCommon$$.$_agentTypeAndVersion$[0], $MasonryLayoutCommon$$.$_agentTypeAndVersion$[1]), this.$_cachedAnimationEnabled$ = !0);
    return this.$_animationEnabled$;
  };
  $MasonryLayoutCommon$$.prototype.$isInLayoutCycle$ = function $$MasonryLayoutCommon$$$$$isInLayoutCycle$$() {
    return null != this.$_layoutPhase$ || null != this.$_arMovedInfolets$ && 0 < this.$_arMovedInfolets$.length;
  };
  $MasonryLayoutCommon$$.prototype.$finishLayoutCycle$ = function $$MasonryLayoutCommon$$$$$finishLayoutCycle$$() {
    this.$_temporarilyDisableAnimation$ = !0;
    this.$_removeStyleClassFromTiles$(this.$_transitionMoveToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionMoveToFastStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionHideFromStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionHideToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionShowFromStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionShowToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionResizeToStyleClass$);
    this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToStyleClass$);
    this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToFastStyleClass$);
    $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$);
    $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$);
    for (var $tileChildren$$ = this.$_getTileChildren$(), $i$$504$$ = 0;$i$$504$$ < $tileChildren$$.length;$i$$504$$++) {
      var $child$$20$$ = $tileChildren$$[$i$$504$$];
      $child$$20$$.$_afrOldSizeStyleClass$ && delete $child$$20$$.$_afrOldSizeStyleClass$;
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$20$$, "transitionend", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$20$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$20$$, "transitionend", this.$_handleShowTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$20$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
    }
    this.$_hideTilesInternalTimeout$ ? (clearTimeout(this.$_hideTilesInternalTimeout$), this.$_hideTilesInternalTimeout$ = null, this.$_handleHideTransitionEnd$(null)) : this.$_showTilesTimeout$ ? (clearTimeout(this.$_showTilesTimeout$), this.$_showTilesTimeout$ = null, this.$_showTiles$()) : this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ || null != this.$_arMovedInfolets$ && 0 < this.$_arMovedInfolets$.length ? this.$_handleTransitionEnd$(null) : this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_SHOW$ && 
    this.$_handleShowTransitionEnd$(null);
    this.$_temporarilyDisableAnimation$ = !1;
  };
  $MasonryLayoutCommon$$.$_getElemSize$ = function $$MasonryLayoutCommon$$$$_getElemSize$$($elem$$159$$) {
    var $computedStyle$$ = $MasonryLayoutCommon$$.$_getComputedStyle$($elem$$159$$);
    return{$w$:$elem$$159$$.offsetWidth + ($MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginLeft) + $MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginRight)), $h$:$elem$$159$$.offsetHeight + ($MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginTop) + $MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginBottom))};
  };
  $MasonryLayoutCommon$$.$_getElemInsets$ = function $$MasonryLayoutCommon$$$$_getElemInsets$$($computedStyle$$1_elem$$160$$) {
    $computedStyle$$1_elem$$160$$ = $MasonryLayoutCommon$$.$_getComputedStyle$($computedStyle$$1_elem$$160$$);
    return{paddingLeft:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$160$$.paddingLeft), paddingRight:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$160$$.paddingRight), paddingTop:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$160$$.paddingTop), paddingBottom:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$160$$.paddingBottom), borderLeftWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$160$$.borderLeftWidth), 
    borderRightWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$160$$.borderRightWidth), borderTopWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$160$$.borderTopWidth), borderBottomWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$160$$.borderBottomWidth)};
  };
  $MasonryLayoutCommon$$.$_getComputedStyle$ = function $$MasonryLayoutCommon$$$$_getComputedStyle$$($elem$$161$$) {
    var $defView$$ = $elem$$161$$.ownerDocument.defaultView, $computedStyle$$2$$ = null;
    return $computedStyle$$2$$ = $defView$$ ? $defView$$.getComputedStyle($elem$$161$$, null) : $elem$$161$$.currentStyle;
  };
  $MasonryLayoutCommon$$.$_getCSSLengthAsInt$ = function $$MasonryLayoutCommon$$$$_getCSSLengthAsInt$$($cssLength$$2_intLength$$1$$) {
    return 0 < $cssLength$$2_intLength$$1$$.length && "auto" != $cssLength$$2_intLength$$1$$ ? ($cssLength$$2_intLength$$1$$ = parseInt($cssLength$$2_intLength$$1$$, 10), isNaN($cssLength$$2_intLength$$1$$) && ($cssLength$$2_intLength$$1$$ = 0), $cssLength$$2_intLength$$1$$) : 0;
  };
  $MasonryLayoutCommon$$.$_addBubbleEventListener$ = function $$MasonryLayoutCommon$$$$_addBubbleEventListener$$($node$$173$$, $type$$113$$, $listener$$44$$) {
    $node$$173$$.addEventListener ? $node$$173$$.addEventListener($type$$113$$, $listener$$44$$, !1) : $node$$173$$.attachEvent && $node$$173$$.attachEvent("on" + $type$$113$$, $listener$$44$$);
  };
  $MasonryLayoutCommon$$.$_removeBubbleEventListener$ = function $$MasonryLayoutCommon$$$$_removeBubbleEventListener$$($node$$174$$, $type$$114$$, $listener$$45$$) {
    $node$$174$$.removeEventListener ? $node$$174$$.removeEventListener($type$$114$$, $listener$$45$$, !1) : $node$$174$$.detachEvent && $node$$174$$.detachEvent("on" + $type$$114$$, $listener$$45$$);
  };
  $MasonryLayoutCommon$$.$_arrayIndexOf$ = function $$MasonryLayoutCommon$$$$_arrayIndexOf$$($array$$17$$, $item$$134$$) {
    if ($array$$17$$) {
      for (var $i$$505$$ = 0;$i$$505$$ < $array$$17$$.length;$i$$505$$++) {
        if ($array$$17$$[$i$$505$$] == $item$$134$$) {
          return $i$$505$$;
        }
      }
    }
    return-1;
  };
  $MasonryLayoutCommon$$.$_isMinimumAgentMet$ = function $$MasonryLayoutCommon$$$$_isMinimumAgentMet$$($actualAgentType$$, $actualAgentVersion$$) {
    var $agentRequirements$$ = ["gecko", 16, "trident", 6, "webkit", 533.1], $argCount$$ = $agentRequirements$$.length;
    if (0 == $argCount$$ % 2) {
      for (var $i$$506$$ = 0;$i$$506$$ <= $argCount$$ - 2;$i$$506$$ += 2) {
        if ($actualAgentType$$ == $agentRequirements$$[$i$$506$$]) {
          if ($actualAgentVersion$$ >= $agentRequirements$$[1 + $i$$506$$]) {
            return!0;
          }
          break;
        }
      }
    }
    return!1;
  };
  $MasonryLayoutCommon$$.$_getAgentTypeAndVersion$ = function $$MasonryLayoutCommon$$$$_getAgentTypeAndVersion$$() {
    var $versionParser$$ = $MasonryLayoutCommon$$.$_parseFloatVersion$, $agentType$$1$$ = null, $agentVersion$$1_possibleVersion$$ = -1, $userAgent$$6$$ = navigator.userAgent.toLowerCase();
    -1 != $userAgent$$6$$.indexOf("msie") || -1 != $userAgent$$6$$.indexOf("trident") ? ($agentType$$1$$ = "trident", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$6$$, /trident\/(\d+[.]\d+)/), -1 == $agentVersion$$1_possibleVersion$$ && ($agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$6$$, /msie (\d+\.\d+);/), -1 == $agentVersion$$1_possibleVersion$$ && ($agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$6$$, /msie (\d+\.\d+)b;/)), $agentVersion$$1_possibleVersion$$ -= 
    4), null != document.documentMode && ($agentVersion$$1_possibleVersion$$ = Math.min($agentVersion$$1_possibleVersion$$, document.documentMode - 4))) : -1 != $userAgent$$6$$.indexOf("applewebkit") ? ($agentType$$1$$ = "webkit", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$6$$, /applewebkit\/(\d+([.]\d+)*)/)) : -1 != $userAgent$$6$$.indexOf("gecko/") && ($agentType$$1$$ = "gecko", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$6$$, /rv:(\d+[.]\d+)/));
    return[$agentType$$1$$, $agentVersion$$1_possibleVersion$$];
  };
  $MasonryLayoutCommon$$.$_parseFloatVersion$ = function $$MasonryLayoutCommon$$$$_parseFloatVersion$$($userAgent$$7$$, $versionNumberPattern$$1$$) {
    var $matches$$5_versionString$$1$$ = $userAgent$$7$$.match($versionNumberPattern$$1$$);
    return $matches$$5_versionString$$1$$ && ($matches$$5_versionString$$1$$ = $matches$$5_versionString$$1$$[1]) ? parseFloat($matches$$5_versionString$$1$$) : -1;
  };
  $MasonryLayoutCommon$$.$_compareTilePositions$ = function $$MasonryLayoutCommon$$$$_compareTilePositions$$($pos1$$1$$, $pos2$$1$$) {
    return $pos1$$1$$.$startRow$ > $pos2$$1$$.$startRow$ ? 1 : $pos1$$1$$.$startRow$ < $pos2$$1$$.$startRow$ ? -1 : $pos1$$1$$.$startCol$ > $pos2$$1$$.$startCol$ ? 1 : $pos1$$1$$.$startCol$ < $pos2$$1$$.$startCol$ ? -1 : 0;
  };
  $MasonryLayoutCommon$$.prototype.$_queueRelayout$ = function $$MasonryLayoutCommon$$$$$_queueRelayout$$() {
    this.$_hideTilesTimeout$ || (this.$_layoutPhase$ ? this.$_queuedRelayout$ || (this.$_queuedRelayout$ = !0) : this.$_hideTilesTimeout$ = setTimeout(this.$_hideTilesFunc$, 0));
  };
  $MasonryLayoutCommon$$.prototype.$_getTileChildren$ = function $$MasonryLayoutCommon$$$$$_getTileChildren$$() {
    for (var $children$$25$$ = this.$_elem$.querySelectorAll(this.$_tilesSelector$), $arChildren$$2$$ = [], $i$$507$$ = 0;$i$$507$$ < $children$$25$$.length;$i$$507$$++) {
      var $child$$21$$ = $children$$25$$[$i$$507$$], $childStyle$$ = $child$$21$$.style;
      0 < $child$$21$$.offsetWidth && 0 < $child$$21$$.offsetHeight && "hidden" != $childStyle$$.visibility && $arChildren$$2$$.push($child$$21$$);
    }
    return $arChildren$$2$$;
  };
  $MasonryLayoutCommon$$.prototype.$_transitionLayout$ = function $$MasonryLayoutCommon$$$$$_transitionLayout$$() {
    var $oldMovedInfolets_ret$$82$$ = this.$_arMovedInfolets$, $newMovedInfolets$$ = this.$_layout$();
    if (this.$_arInfoletsToResize$) {
      var $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = this.$_arInfoletsToResize$;
      $newMovedInfolets$$ || ($newMovedInfolets$$ = []);
      for (var $i$$508$$ = 0;$i$$508$$ < $arInfoletsToResize$$1_calledHandleTransitionEnd$$.length;$i$$508$$ += 2) {
        var $resizedInfolet$$ = $arInfoletsToResize$$1_calledHandleTransitionEnd$$[$i$$508$$];
        0 > $MasonryLayoutCommon$$.$_arrayIndexOf$($newMovedInfolets$$, $resizedInfolet$$) && $newMovedInfolets$$.push($resizedInfolet$$);
      }
    }
    $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = !1;
    if (!$newMovedInfolets$$ || 1 > $newMovedInfolets$$.length) {
      if (!$oldMovedInfolets_ret$$82$$ || 1 > $oldMovedInfolets_ret$$82$$.length) {
        this.$_arMovedInfolets$ = null, this.$_handleTransitionEnd$(null), $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = !0;
      }
    } else {
      this.$_arMovedInfolets$ = $newMovedInfolets$$;
    }
    $oldMovedInfolets_ret$$82$$ = null != $newMovedInfolets$$ && 0 < $newMovedInfolets$$.length;
    this.$isAnimationEnabled$() || $arInfoletsToResize$$1_calledHandleTransitionEnd$$ || this.$_handleTransitionEnd$(null);
    return $oldMovedInfolets_ret$$82$$;
  };
  $MasonryLayoutCommon$$.prototype.$_layout$ = function $$MasonryLayoutCommon$$$$$_layout$$() {
    var $elem$$163_style$$21$$ = this.$_elem$, $children$$26$$ = this.$_getTileChildren$();
    this.$_sortTilesOriginalOrderFunc$ && this.$_sortTilesOriginalOrderFunc$($children$$26$$);
    var $cellSize_oldSizeStyleClass$$ = this.$_cellSize$ = null;
    this.$_cols$ = 0;
    this.$_rows$ = 1;
    this.$_occupancyMap$ = null;
    var $arMovedInfolets$$ = [], $arOldPositions$$ = [], $arCols$$ = [], $rtl$$9$$ = this.$_rtl$, $insets$$ = $MasonryLayoutCommon$$.$_getElemInsets$($elem$$163_style$$21$$), $maxColSpan$$ = 0, $arTilePositions$$ = [];
    this.$_arTilePositions$ = $arTilePositions$$;
    for (var $i$$509$$ = 0;$i$$509$$ < $children$$26$$.length;$i$$509$$++) {
      var $child$$22$$ = $children$$26$$[$i$$509$$], $childSpan$$ = this.$_getTileSpanFunc$($child$$22$$);
      ($cellSize_oldSizeStyleClass$$ = $child$$22$$.$_afrOldSizeStyleClass$) && delete $child$$22$$.$_afrOldSizeStyleClass$;
      if (!this.$_cellSize$) {
        var $r$$6_spanForCellSize_tmpDiv$$ = $childSpan$$;
        $cellSize_oldSizeStyleClass$$ && ($r$$6_spanForCellSize_tmpDiv$$ = document.createElement("div"), $r$$6_spanForCellSize_tmpDiv$$.className = $cellSize_oldSizeStyleClass$$, $r$$6_spanForCellSize_tmpDiv$$ = this.$_getTileSpanFunc$($r$$6_spanForCellSize_tmpDiv$$));
        this.$_cellSize$ = this.$_calcCellSize$($child$$22$$, $r$$6_spanForCellSize_tmpDiv$$);
      }
      $cellSize_oldSizeStyleClass$$ = this.$_cellSize$;
      this.$_occupancyMap$ || (this.$_cols$ = Math.max(Math.floor(($elem$$163_style$$21$$.offsetWidth - $insets$$.paddingLeft - $insets$$.paddingRight - $insets$$.borderLeftWidth - $insets$$.borderRightWidth) / $cellSize_oldSizeStyleClass$$.$w$), 1), this.$_initOccupancyMap$(this.$_cols$, this.$_rows$), $maxColSpan$$ = this.$_cols$);
      $childSpan$$.colSpan > $maxColSpan$$ && ($maxColSpan$$ = $childSpan$$.colSpan);
      $childSpan$$.colSpan > this.$_cols$ && ($childSpan$$.colSpan = this.$_cols$);
      for (var $childStyle$$1_next$$9$$ = !1, $r$$6_spanForCellSize_tmpDiv$$ = 0;$r$$6_spanForCellSize_tmpDiv$$ < this.$_rows$;$r$$6_spanForCellSize_tmpDiv$$++) {
        for (var $c$$58$$ = 0;$c$$58$$ < this.$_cols$;$c$$58$$++) {
          if (this.$_fits$($c$$58$$, $r$$6_spanForCellSize_tmpDiv$$, $childSpan$$)) {
            var $childStyle$$1_next$$9$$ = $child$$22$$.style, $oldPosition$$ = {top:$childStyle$$1_next$$9$$.top};
            $rtl$$9$$ ? $oldPosition$$.right = $childStyle$$1_next$$9$$.right : $oldPosition$$.left = $childStyle$$1_next$$9$$.left;
            $arOldPositions$$.push($oldPosition$$);
            this.$_position$($child$$22$$, $c$$58$$, $r$$6_spanForCellSize_tmpDiv$$, $childSpan$$, $cellSize_oldSizeStyleClass$$, $insets$$);
            $rtl$$9$$ && $arCols$$.push($c$$58$$);
            $childStyle$$1_next$$9$$ = !0;
            $arTilePositions$$.push({$startCol$:$c$$58$$, $startRow$:$r$$6_spanForCellSize_tmpDiv$$, tile:$child$$22$$});
            break;
          }
        }
        if ($childStyle$$1_next$$9$$) {
          break;
        }
        $r$$6_spanForCellSize_tmpDiv$$ === this.$_rows$ - 1 && this.$_addRow$();
      }
    }
    $cellSize_oldSizeStyleClass$$ && ($elem$$163_style$$21$$ = this.$_sizeDiv$.style, $elem$$163_style$$21$$.width = $maxColSpan$$ * $cellSize_oldSizeStyleClass$$.$w$ + "px", $elem$$163_style$$21$$.height = this.$_rows$ * $cellSize_oldSizeStyleClass$$.$h$ + "px");
    for ($i$$509$$ = 0;$i$$509$$ < $children$$26$$.length;$i$$509$$++) {
      $child$$22$$ = $children$$26$$[$i$$509$$], $childStyle$$1_next$$9$$ = $child$$22$$.style, $oldPosition$$ = $arOldPositions$$[$i$$509$$], "" != $oldPosition$$.top && ($rtl$$9$$ && parseInt($childStyle$$1_next$$9$$.right, 10) !== parseInt($oldPosition$$.right, 10) || !$rtl$$9$$ && parseInt($childStyle$$1_next$$9$$.left, 10) !== parseInt($oldPosition$$.left, 10) || parseInt($childStyle$$1_next$$9$$.top, 10) !== parseInt($oldPosition$$.top, 10)) && $arMovedInfolets$$.push($child$$22$$);
    }
    1 > $arMovedInfolets$$.length && ($arMovedInfolets$$ = null);
    return $arMovedInfolets$$;
  };
  $MasonryLayoutCommon$$.prototype.$_reorderTilesForLayout$ = function $$MasonryLayoutCommon$$$$$_reorderTilesForLayout$$() {
    var $arTilePositions$$1$$ = this.$_arTilePositions$;
    this.$_arTilePositions$ = null;
    for (var $arTilePositions$$1$$ = $arTilePositions$$1$$.sort($MasonryLayoutCommon$$.$_compareTilePositions$), $children$$27$$ = this.$_getTileChildren$(), $i$$510$$ = 0;$i$$510$$ < $children$$27$$.length;$i$$510$$++) {
      var $child$$23_posTileIndex$$ = $children$$27$$[$i$$510$$], $posTile$$ = $arTilePositions$$1$$[$i$$510$$].tile;
      $child$$23_posTileIndex$$ != $posTile$$ && (this.$_subtreeDetachedFunc$($posTile$$), $child$$23_posTileIndex$$.parentNode.insertBefore($posTile$$, $child$$23_posTileIndex$$), this.$_subtreeAttachedFunc$($posTile$$), $child$$23_posTileIndex$$ = $MasonryLayoutCommon$$.$_arrayIndexOf$($children$$27$$, $posTile$$), $child$$23_posTileIndex$$ > $i$$510$$ && ($children$$27$$.splice($child$$23_posTileIndex$$, 1), $children$$27$$.splice($i$$510$$, 0, $posTile$$)));
    }
  };
  $MasonryLayoutCommon$$.prototype.$_initOccupancyMap$ = function $$MasonryLayoutCommon$$$$$_initOccupancyMap$$($cols$$1$$, $rows$$17$$) {
    for (var $occupancyMap$$ = this.$_occupancyMap$ = [], $row$$89$$ = 0;$row$$89$$ < $rows$$17$$;$row$$89$$++) {
      var $arCols$$1$$ = [];
      $occupancyMap$$.push($arCols$$1$$);
      for (var $col$$4$$ = 0;$col$$4$$ < $cols$$1$$;$col$$4$$++) {
        $arCols$$1$$[$col$$4$$] = !1;
      }
    }
  };
  $MasonryLayoutCommon$$.prototype.$_addRow$ = function $$MasonryLayoutCommon$$$$$_addRow$$() {
    this.$_rows$++;
    var $arCols$$2$$ = [];
    this.$_occupancyMap$.push($arCols$$2$$);
    for (var $col$$5$$ = 0;$col$$5$$ < this.$_cols$;$col$$5$$++) {
      $arCols$$2$$[$col$$5$$] = !1;
    }
  };
  $MasonryLayoutCommon$$.prototype.$_fits$ = function $$MasonryLayoutCommon$$$$$_fits$$($col$$6$$, $row$$90$$, $childSpan$$1_rowSpan$$) {
    var $colSpan$$2$$ = $childSpan$$1_rowSpan$$.colSpan;
    $childSpan$$1_rowSpan$$ = $childSpan$$1_rowSpan$$.rowSpan;
    for (var $r$$7$$ = $row$$90$$;$r$$7$$ < $row$$90$$ + $childSpan$$1_rowSpan$$;$r$$7$$++) {
      $r$$7$$ >= this.$_rows$ && this.$_addRow$();
      for (var $c$$59$$ = $col$$6$$;$c$$59$$ < $col$$6$$ + $colSpan$$2$$;$c$$59$$++) {
        if ($c$$59$$ >= this.$_cols$ || this.$_occupancyMap$[$r$$7$$][$c$$59$$]) {
          return!1;
        }
      }
    }
    return!0;
  };
  $MasonryLayoutCommon$$.prototype.$_position$ = function $$MasonryLayoutCommon$$$$$_position$$($child$$24_style$$22$$, $col$$7$$, $row$$91$$, $childSpan$$2_rowSpan$$1$$, $cellSize$$1$$, $insets$$1$$) {
    var $colSpan$$3$$ = $childSpan$$2_rowSpan$$1$$.colSpan;
    $childSpan$$2_rowSpan$$1$$ = $childSpan$$2_rowSpan$$1$$.rowSpan;
    for (var $occupancyMap$$2$$ = this.$_occupancyMap$, $r$$8$$ = $row$$91$$;$r$$8$$ < $row$$91$$ + $childSpan$$2_rowSpan$$1$$;$r$$8$$++) {
      for (var $c$$60$$ = $col$$7$$;$c$$60$$ < $col$$7$$ + $colSpan$$3$$;$c$$60$$++) {
        $occupancyMap$$2$$[$r$$8$$][$c$$60$$] = !0;
      }
    }
    $child$$24_style$$22$$ = $child$$24_style$$22$$.style;
    $child$$24_style$$22$$.top = $insets$$1$$.paddingTop + $row$$91$$ * $cellSize$$1$$.$h$ + "px";
    this.$_rtl$ ? $child$$24_style$$22$$.right = $insets$$1$$.paddingRight + $col$$7$$ * $cellSize$$1$$.$w$ + "px" : $child$$24_style$$22$$.left = $insets$$1$$.paddingLeft + $col$$7$$ * $cellSize$$1$$.$w$ + "px";
  };
  $MasonryLayoutCommon$$.prototype.$_addStyleClassToTiles$ = function $$MasonryLayoutCommon$$$$$_addStyleClassToTiles$$($styleClassName$$) {
    for (var $children$$28$$ = this.$_getTileChildren$(), $i$$511$$ = 0;$i$$511$$ < $children$$28$$.length;$i$$511$$++) {
      this.$_addStyleClassNameFunc$($children$$28$$[$i$$511$$], $styleClassName$$);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_removeStyleClassFromTiles$ = function $$MasonryLayoutCommon$$$$$_removeStyleClassFromTiles$$($styleClassName$$1$$) {
    for (var $children$$29$$ = this.$_getTileChildren$(), $i$$512$$ = 0;$i$$512$$ < $children$$29$$.length;$i$$512$$++) {
      this.$_removeStyleClassNameFunc$($children$$29$$[$i$$512$$], $styleClassName$$1$$);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_transitionStart$ = function $$MasonryLayoutCommon$$$$$_transitionStart$$($reorder$$2$$) {
    this.$_layoutTransition$ || (this.$_reorderTransitionStarted$ = $reorder$$2$$, this.$isAnimationEnabled$() && (this.$_addStyleClassToTiles$($reorder$$2$$ ? this.$_transitionMoveToFastStyleClass$ : this.$_transitionMoveToStyleClass$), this.$_addStyleClassNameFunc$(this.$_sizeDiv$, $reorder$$2$$ ? this.$_transitionComponentResizeToFastStyleClass$ : this.$_transitionComponentResizeToStyleClass$), $MasonryLayoutCommon$$.$_addBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$), 
    $MasonryLayoutCommon$$.$_addBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$)), this.$_layoutTransition$ = !0);
  };
  $MasonryLayoutCommon$$.prototype.$_handleTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleTransitionEnd$$($event$$768_i$$513$$) {
    var $arInfoletsToResize$$2_doneTransitioning$$ = !0;
    if (this.$_arMovedInfolets$) {
      var $arMovedInfolets$$1$$ = this.$_arMovedInfolets$;
      if ($event$$768_i$$513$$) {
        var $target$$143$$ = $event$$768_i$$513$$.target;
        for ($event$$768_i$$513$$ = 0;$event$$768_i$$513$$ < $arMovedInfolets$$1$$.length;$event$$768_i$$513$$++) {
          if ($target$$143$$ === $arMovedInfolets$$1$$[$event$$768_i$$513$$]) {
            $arMovedInfolets$$1$$.splice($event$$768_i$$513$$, 1);
            break;
          }
        }
      } else {
        this.$isAnimationEnabled$() || ($arMovedInfolets$$1$$ = this.$_arMovedInfolets$ = []);
      }
      0 < $arMovedInfolets$$1$$.length && ($arInfoletsToResize$$2_doneTransitioning$$ = !1);
    }
    if ($arInfoletsToResize$$2_doneTransitioning$$) {
      if (this.$_arInfoletsToResize$ && ($arInfoletsToResize$$2_doneTransitioning$$ = this.$_arInfoletsToResize$, this.$_arInfoletsToResize$ = null, this.$isAnimationEnabled$())) {
        for ($event$$768_i$$513$$ = 0;$event$$768_i$$513$$ < $arInfoletsToResize$$2_doneTransitioning$$.length;$event$$768_i$$513$$ += 2) {
          this.$_removeStyleClassNameFunc$($arInfoletsToResize$$2_doneTransitioning$$[$event$$768_i$$513$$], this.$_transitionResizeToStyleClass$);
        }
      }
      this.$_reorderTransitionStarted$ ? (this.$isAnimationEnabled$() && (this.$_removeStyleClassFromTiles$(this.$_transitionMoveToFastStyleClass$), this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToFastStyleClass$)), this.$_reorderTransitionStarted$ = !1) : this.$isAnimationEnabled$() && (this.$_removeStyleClassFromTiles$(this.$_transitionMoveToStyleClass$), this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToStyleClass$));
      this.$isAnimationEnabled$() && ($MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$), $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$));
      this.$_showingInfolets$ = this.$_hidingInfolets$ = this.$_resizingInfolet$ = this.$_layoutTransition$ = !1;
      this.$_reorderTilesForLayout$();
      this.$_layoutOnEndFunc$ && this.$_layoutOnEndFunc$();
      if (this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_LAYOUT$) {
        if (this.$isAnimationEnabled$()) {
          var $self$$234$$ = this;
          this.$_showTilesTimeout$ = setTimeout(function() {
            $self$$234$$.$_showTiles$();
          }, 0);
        } else {
          this.$_showTiles$();
        }
      } else {
        this.$_layoutPhase$ || this.$_layoutCycleOnEndFunc$ && this.$_layoutCycleOnEndFunc$();
      }
    }
  };
  $MasonryLayoutCommon$$.prototype.$_calcCellSize$ = function $$MasonryLayoutCommon$$$$$_calcCellSize$$($child$$25$$, $childSpan$$3$$) {
    var $childSize$$ = $MasonryLayoutCommon$$.$_getElemSize$($child$$25$$);
    return{$w$:$childSize$$.$w$ / $childSpan$$3$$.colSpan, $h$:$childSize$$.$h$ / $childSpan$$3$$.rowSpan};
  };
  $MasonryLayoutCommon$$.prototype.$_hideTiles$ = function $$MasonryLayoutCommon$$$$$_hideTiles$$() {
    this.$_hideTilesTimeout$ && (clearTimeout(this.$_hideTilesTimeout$), this.$_hideTilesTimeout$ = null);
    this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$();
    this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_HIDE$;
    if (this.$_arInfoletsToHide$ && this.$isAnimationEnabled$()) {
      for (var $arInfoletsToHide$$1$$ = this.$_arInfoletsToHide$, $i$$514$$ = 0;$i$$514$$ < $arInfoletsToHide$$1$$.length;$i$$514$$++) {
        var $infolet$$5$$ = $arInfoletsToHide$$1$$[$i$$514$$];
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$5$$, "transitionend", this.$_handleHideTransitionEndFunc$);
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$5$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
        this.$_addStyleClassNameFunc$($infolet$$5$$, this.$_transitionHideFromStyleClass$);
      }
      var $self$$235$$ = this;
      this.$_hideTilesInternalTimeout$ = setTimeout(function() {
        for (var $i$$515$$ = 0;$i$$515$$ < $arInfoletsToHide$$1$$.length;$i$$515$$++) {
          var $infolet$$6$$ = $arInfoletsToHide$$1$$[$i$$515$$];
          $self$$235$$.$_removeStyleClassNameFunc$($infolet$$6$$, $self$$235$$.$_transitionHideFromStyleClass$);
          $self$$235$$.$_addStyleClassNameFunc$($infolet$$6$$, $self$$235$$.$_transitionHideToStyleClass$);
        }
      }, 0);
    } else {
      this.$_handleHideTransitionEnd$(null);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_handleHideTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleHideTransitionEnd$$($event$$769_infolet$$7$$) {
    this.$_hideTilesInternalTimeout$ && (clearTimeout(this.$_hideTilesInternalTimeout$), this.$_hideTilesInternalTimeout$ = null);
    if ($event$$769_infolet$$7$$) {
      $event$$769_infolet$$7$$.preventDefault();
      $event$$769_infolet$$7$$.stopPropagation();
      $event$$769_infolet$$7$$ = $event$$769_infolet$$7$$.target;
      this.$_removeStyleClassNameFunc$($event$$769_infolet$$7$$, this.$_transitionHideToStyleClass$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$769_infolet$$7$$, "transitionend", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$769_infolet$$7$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
      var $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$ = this.$_arInfoletsToHide$;
      if ($arInfoletsToHide$$2_newSizeStyleClass_style$$23$$) {
        for (var $i$$516$$ = 0;$i$$516$$ < $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.length;$i$$516$$++) {
          var $oldSizeStyleClass$$1_tmpInfolet$$ = $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$[$i$$516$$];
          if ($oldSizeStyleClass$$1_tmpInfolet$$ === $event$$769_infolet$$7$$) {
            $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.splice($i$$516$$, 1);
            this.$_arFireHideOnEnd$ || (this.$_arFireHideOnEnd$ = []);
            var $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$;
            $arFireHideOnEnd_arInfoletsToResize$$3$$.push($event$$769_infolet$$7$$);
            break;
          }
        }
        1 > $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.length && (this.$_arInfoletsToHide$ = null);
      }
    } else {
      if (!this.$isAnimationEnabled$() && ($arInfoletsToHide$$2_newSizeStyleClass_style$$23$$ = this.$_arInfoletsToHide$)) {
        for ($i$$516$$ = 0;$i$$516$$ < $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.length;$i$$516$$++) {
          $oldSizeStyleClass$$1_tmpInfolet$$ = $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$[$i$$516$$], this.$_arFireHideOnEnd$ || (this.$_arFireHideOnEnd$ = []), $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$, $arFireHideOnEnd_arInfoletsToResize$$3$$.push($oldSizeStyleClass$$1_tmpInfolet$$);
        }
        this.$_arInfoletsToHide$ = null;
      }
    }
    if (!this.$_arInfoletsToHide$) {
      if (this.$_arFireHideOnEnd$) {
        $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$;
        for ($i$$516$$ = 0;$i$$516$$ < $arFireHideOnEnd_arInfoletsToResize$$3$$.length;$i$$516$$++) {
          $event$$769_infolet$$7$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$516$$], this.$isAnimationEnabled$() && this.$_removeStyleClassNameFunc$($event$$769_infolet$$7$$, this.$_transitionHideToStyleClass$), $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$ = $event$$769_infolet$$7$$.style, this.$_rtl$ ? $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.right = "" : $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.left = "", $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$.top = "", 
          this.$_hideTileOnEndFunc$ && this.$_hideTileOnEndFunc$($event$$769_infolet$$7$$);
        }
        this.$_arFireHideOnEnd$ = null;
      }
      this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_LAYOUT$;
      this.$_transitionStart$(!1);
      if (this.$_arInfoletsToResize$) {
        for ($arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arInfoletsToResize$, $i$$516$$ = 0;$i$$516$$ < $arFireHideOnEnd_arInfoletsToResize$$3$$.length;$i$$516$$ += 2) {
          $event$$769_infolet$$7$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$516$$], $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$516$$ + 1], $oldSizeStyleClass$$1_tmpInfolet$$ = this.$_getSizeStyleClassNameFunc$($event$$769_infolet$$7$$), this.$_removeStyleClassNameFunc$($event$$769_infolet$$7$$, $oldSizeStyleClass$$1_tmpInfolet$$), this.$_addStyleClassNameFunc$($event$$769_infolet$$7$$, $arInfoletsToHide$$2_newSizeStyleClass_style$$23$$), 
          this.$isAnimationEnabled$() && (this.$_addStyleClassNameFunc$($event$$769_infolet$$7$$, this.$_transitionResizeToStyleClass$), $event$$769_infolet$$7$$.$_afrOldSizeStyleClass$ = $oldSizeStyleClass$$1_tmpInfolet$$);
        }
      }
      this.$_transitionLayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$_showTiles$ = function $$MasonryLayoutCommon$$$$$_showTiles$$() {
    this.$_showTilesTimeout$ && (clearTimeout(this.$_showTilesTimeout$), this.$_showTilesTimeout$ = null);
    this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_SHOW$;
    if (this.$_arInfoletsToShow$ && this.$isAnimationEnabled$()) {
      for (var $arInfoletsToShow$$1$$ = this.$_arInfoletsToShow$, $i$$517$$ = 0;$i$$517$$ < $arInfoletsToShow$$1$$.length;$i$$517$$++) {
        var $infolet$$8$$ = $arInfoletsToShow$$1$$[$i$$517$$];
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$8$$, "transitionend", this.$_handleShowTransitionEndFunc$);
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$8$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
        this.$_addStyleClassNameFunc$($infolet$$8$$, this.$_transitionShowToStyleClass$);
        this.$_removeStyleClassNameFunc$($infolet$$8$$, this.$_transitionShowFromStyleClass$);
      }
    } else {
      if (this.$_arInfoletsToShow$) {
        for ($arInfoletsToShow$$1$$ = this.$_arInfoletsToShow$, $i$$517$$ = 0;$i$$517$$ < $arInfoletsToShow$$1$$.length;$i$$517$$++) {
          $infolet$$8$$ = $arInfoletsToShow$$1$$[$i$$517$$], this.$_removeStyleClassNameFunc$($infolet$$8$$, this.$_transitionShowFromStyleClass$);
        }
      }
      this.$_handleShowTransitionEnd$(null);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_handleShowTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleShowTransitionEnd$$($event$$770_infolet$$9$$) {
    if ($event$$770_infolet$$9$$) {
      $event$$770_infolet$$9$$.preventDefault();
      $event$$770_infolet$$9$$.stopPropagation();
      $event$$770_infolet$$9$$ = $event$$770_infolet$$9$$.target;
      this.$_removeStyleClassNameFunc$($event$$770_infolet$$9$$, this.$_transitionShowToStyleClass$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$770_infolet$$9$$, "transitionend", this.$_handleShowTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$770_infolet$$9$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
      var $arInfoletsToShow$$2$$ = this.$_arInfoletsToShow$;
      if ($arInfoletsToShow$$2$$) {
        for (var $i$$518$$ = 0;$i$$518$$ < $arInfoletsToShow$$2$$.length;$i$$518$$++) {
          var $tmpInfolet$$1$$ = $arInfoletsToShow$$2$$[$i$$518$$];
          if ($tmpInfolet$$1$$ === $event$$770_infolet$$9$$) {
            $arInfoletsToShow$$2$$.splice($i$$518$$, 1);
            this.$_showTileOnEndFunc$ && this.$_showTileOnEndFunc$($event$$770_infolet$$9$$);
            break;
          }
        }
        1 > $arInfoletsToShow$$2$$.length && (this.$_arInfoletsToShow$ = null);
      }
    } else {
      if (!this.$isAnimationEnabled$() && ($arInfoletsToShow$$2$$ = this.$_arInfoletsToShow$)) {
        for ($i$$518$$ = 0;$i$$518$$ < $arInfoletsToShow$$2$$.length;$i$$518$$++) {
          $tmpInfolet$$1$$ = $arInfoletsToShow$$2$$[$i$$518$$], this.$_showTileOnEndFunc$ && this.$_showTileOnEndFunc$($tmpInfolet$$1$$);
        }
        this.$_arInfoletsToShow$ = null;
      }
    }
    this.$_arInfoletsToShow$ || (this.$_layoutPhase$ = null, this.$_layoutCycleOnEndFunc$ && this.$_layoutCycleOnEndFunc$(), this.$_queuedRelayout$ && (this.$_queuedRelayout$ = !1, this.$_queueRelayout$()));
  };
  $MasonryLayoutCommon$$.$_PHASE_HIDE$ = 1;
  $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ = 2;
  $MasonryLayoutCommon$$.$_PHASE_SHOW$ = 3;
});
