/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$37$$, $$$$34$$, $Hammer$$5$$) {
  $oj$$37$$.$OffcanvasUtils$ = {};
  $goog$exportPath_$$("OffcanvasUtils", $oj$$37$$.$OffcanvasUtils$, $oj$$37$$);
  $oj$$37$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$ = "oj-offcanvasEdge";
  $oj$$37$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$ = "oj-offcanvas";
  $oj$$37$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$ = "oj-mediaQueryListener";
  $oj$$37$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$ = "oj-offcanvasHammer";
  $oj$$37$$.$OffcanvasUtils$.$_DATA_STYLE_KEY$ = "oj-offcanvasStyle";
  $oj$$37$$.$OffcanvasUtils$.$SELECTOR_KEY$ = "selector";
  $oj$$37$$.$OffcanvasUtils$.$CONTENT_KEY$ = "content";
  $oj$$37$$.$OffcanvasUtils$.$EDGE_START$ = "start";
  $oj$$37$$.$OffcanvasUtils$.$EDGE_END$ = "end";
  $oj$$37$$.$OffcanvasUtils$.$EDGE_TOP$ = "top";
  $oj$$37$$.$OffcanvasUtils$.$EDGE_BOTTOM$ = "bottom";
  $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$ = "displayMode";
  $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ = "push";
  $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ = "overlay";
  $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_PIN$ = "pin";
  $oj$$37$$.$OffcanvasUtils$.$MODALITY_KEY$ = "modality";
  $oj$$37$$.$OffcanvasUtils$.$MODALITY_NONE$ = "none";
  $oj$$37$$.$OffcanvasUtils$.$MODALITY_MODAL$ = "modal";
  $oj$$37$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$ = "_dismissHandler";
  $oj$$37$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$ = "_openPromise";
  $oj$$37$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$ = "_closePromise";
  $oj$$37$$.$OffcanvasUtils$.$GLASS_PANE_KEY$ = "_glassPane";
  $oj$$37$$.$OffcanvasUtils$.$SURROGATE_KEY$ = "_surrogate";
  $oj$$37$$.$OffcanvasUtils$.$SURROGATE_ATTR$ = "data-oj-offcanvas-surrogate-id";
  $oj$$37$$.$OffcanvasUtils$.$OUTER_WRAPPER_SELECTOR$ = "oj-offcanvas-outer-wrapper";
  $oj$$37$$.$OffcanvasUtils$.$OPEN_SELECTOR$ = "oj-offcanvas-open";
  $oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$ = "oj-offcanvas-transition";
  $oj$$37$$.$OffcanvasUtils$.$PIN_WRAPPER_SELECTOR$ = "oj-offcanvas-pin";
  $oj$$37$$.$OffcanvasUtils$.$PIN_TRANSITION_SELECTOR$ = "oj-offcanvas-pin-transition";
  $oj$$37$$.$OffcanvasUtils$.$GLASSPANE_SELECTOR$ = "oj-offcanvas-glasspane";
  $oj$$37$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$ = "oj-offcanvas-glasspane-dim";
  $oj$$37$$.$OffcanvasUtils$.$VETO_BEFOREOPEN_MSG$ = "ojbeforeopen veto";
  $oj$$37$$.$OffcanvasUtils$.$VETO_BEFORECLOSE_MSG$ = "ojbeforeclose veto";
  $oj$$37$$.$OffcanvasUtils$.$_shiftSelector$ = {start:"oj-offcanvas-shift-start", end:"oj-offcanvas-shift-end", top:"oj-offcanvas-shift-down", bottom:"oj-offcanvas-shift-up"};
  $oj$$37$$.$OffcanvasUtils$.$_drawerSelector$ = {start:"oj-offcanvas-start", end:"oj-offcanvas-end", top:"oj-offcanvas-top", bottom:"oj-offcanvas-bottom"};
  $oj$$37$$.$OffcanvasUtils$.$_getDisplayMode$ = function $$oj$$37$$$$OffcanvasUtils$$$_getDisplayMode$$($displayMode_offcanvas$$) {
    $displayMode_offcanvas$$ = $displayMode_offcanvas$$[$oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$];
    $displayMode_offcanvas$$ !== $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ && $displayMode_offcanvas$$ !== $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && $displayMode_offcanvas$$ !== $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_PIN$ && ($displayMode_offcanvas$$ = ($oj$$37$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-offcanvas-option-defaults") || {}).displayMode);
    return $displayMode_offcanvas$$;
  };
  $oj$$37$$.$OffcanvasUtils$.$_getDrawer$ = function $$oj$$37$$$$OffcanvasUtils$$$_getDrawer$$($offcanvas$$1$$) {
    return $$$$34$$($offcanvas$$1$$[$oj$$37$$.$OffcanvasUtils$.$SELECTOR_KEY$]);
  };
  $oj$$37$$.$OffcanvasUtils$.$_isModal$ = function $$oj$$37$$$$OffcanvasUtils$$$_isModal$$($offcanvas$$2$$) {
    return $offcanvas$$2$$[$oj$$37$$.$OffcanvasUtils$.$MODALITY_KEY$] === $oj$$37$$.$OffcanvasUtils$.$MODALITY_MODAL$;
  };
  $oj$$37$$.$OffcanvasUtils$.$_isOpen$ = function $$oj$$37$$$$OffcanvasUtils$$$_isOpen$$($drawer$$) {
    return $drawer$$.hasClass($oj$$37$$.$OffcanvasUtils$.$OPEN_SELECTOR$);
  };
  $oj$$37$$.$OffcanvasUtils$.$_getOuterWrapper$ = function $$oj$$37$$$$OffcanvasUtils$$$_getOuterWrapper$$($drawer$$1$$) {
    return $drawer$$1$$.closest("." + $oj$$37$$.$OffcanvasUtils$.$OUTER_WRAPPER_SELECTOR$);
  };
  $oj$$37$$.$OffcanvasUtils$.$_getAnimateWrapper$ = function $$oj$$37$$$$OffcanvasUtils$$$_getAnimateWrapper$$($offcanvas$$3$$) {
    var $drawer$$2$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$3$$);
    return $oj$$37$$.$OffcanvasUtils$.$_noInnerWrapper$($offcanvas$$3$$) || $offcanvas$$3$$[$oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$] === $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ ? $drawer$$2$$ : $drawer$$2$$.parent();
  };
  $oj$$37$$.$OffcanvasUtils$.$_getShiftSelector$ = function $$oj$$37$$$$OffcanvasUtils$$$_getShiftSelector$$($edge$$2$$) {
    var $selector$$30$$ = $oj$$37$$.$OffcanvasUtils$.$_shiftSelector$[$edge$$2$$];
    if (!$selector$$30$$) {
      throw "Invalid edge: " + $edge$$2$$;
    }
    return $selector$$30$$;
  };
  $oj$$37$$.$OffcanvasUtils$.$_isRTL$ = function $$oj$$37$$$$OffcanvasUtils$$$_isRTL$$() {
    return "rtl" === $oj$$37$$.$DomUtils$.$getReadingDirection$();
  };
  $oj$$37$$.$OffcanvasUtils$.$_setTransform$ = function $$oj$$37$$$$OffcanvasUtils$$$_setTransform$$($wrapper$$1$$, $transform$$4$$) {
    $wrapper$$1$$.css({"-webkit-transform":$transform$$4$$, transform:$transform$$4$$});
  };
  $oj$$37$$.$OffcanvasUtils$.$_getTranslationX$ = function $$oj$$37$$$$OffcanvasUtils$$$_getTranslationX$$($edge$$3_minus$$, $width$$46$$, $negate$$) {
    $edge$$3_minus$$ = $edge$$3_minus$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_END$;
    if ($oj$$37$$.$OffcanvasUtils$.$_isRTL$() || $negate$$) {
      $edge$$3_minus$$ = !$edge$$3_minus$$;
    }
    return "translate3d(" + ($edge$$3_minus$$ ? "-" : "") + $width$$46$$ + ", 0, 0)";
  };
  $oj$$37$$.$OffcanvasUtils$.$_setTranslationX$ = function $$oj$$37$$$$OffcanvasUtils$$$_setTranslationX$$($wrapper$$2$$, $edge$$4$$, $width$$47$$) {
    $oj$$37$$.$OffcanvasUtils$.$_setTransform$($wrapper$$2$$, $oj$$37$$.$OffcanvasUtils$.$_getTranslationX$($edge$$4$$, $width$$47$$, !1));
  };
  $oj$$37$$.$OffcanvasUtils$.$_getTranslationY$ = function $$oj$$37$$$$OffcanvasUtils$$$_getTranslationY$$($edge$$5$$, $height$$51$$) {
    return "translate3d(0, " + ($edge$$5$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_BOTTOM$ ? "-" : "") + $height$$51$$ + ", 0)";
  };
  $oj$$37$$.$OffcanvasUtils$.$_setTranslationY$ = function $$oj$$37$$$$OffcanvasUtils$$$_setTranslationY$$($wrapper$$3$$, $edge$$6$$, $height$$52$$) {
    $oj$$37$$.$OffcanvasUtils$.$_setTransform$($wrapper$$3$$, $oj$$37$$.$OffcanvasUtils$.$_getTranslationY$($edge$$6$$, $height$$52$$));
  };
  $oj$$37$$.$OffcanvasUtils$.$_getTranslationY2$ = function $$oj$$37$$$$OffcanvasUtils$$$_getTranslationY2$$($height$$53$$, $negate$$1$$) {
    return "translate3d(0, " + ($negate$$1$$ ? "-" : "") + $height$$53$$ + ", 0)";
  };
  $oj$$37$$.$OffcanvasUtils$.$_setAnimateClass$ = function $$oj$$37$$$$OffcanvasUtils$$$_setAnimateClass$$($drawer$$3$$, $$main$$, $mtranslation$$) {
    $drawer$$3$$.addClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$);
    $oj$$37$$.$OffcanvasUtils$.$_setTransform$($drawer$$3$$, "translate3d(0, 0, 0)");
    $$main$$.addClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$);
    $oj$$37$$.$OffcanvasUtils$.$_setTransform$($$main$$, $mtranslation$$);
  };
  $oj$$37$$.$OffcanvasUtils$.$_saveEdge$ = function $$oj$$37$$$$OffcanvasUtils$$$_saveEdge$$($drawer$$4_offcanvas$$5$$) {
    var $edge$$7$$ = $drawer$$4_offcanvas$$5$$.edge;
    $drawer$$4_offcanvas$$5$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($drawer$$4_offcanvas$$5$$);
    $edge$$7$$ && $edge$$7$$.length || ($edge$$7$$ = $drawer$$4_offcanvas$$5$$.hasClass("oj-offcanvas-start") ? $oj$$37$$.$OffcanvasUtils$.$EDGE_START$ : $drawer$$4_offcanvas$$5$$.hasClass("oj-offcanvas-end") ? $oj$$37$$.$OffcanvasUtils$.$EDGE_END$ : $drawer$$4_offcanvas$$5$$.hasClass("oj-offcanvas-top") ? $oj$$37$$.$OffcanvasUtils$.$EDGE_TOP$ : $drawer$$4_offcanvas$$5$$.hasClass("oj-offcanvas-bottom") ? $oj$$37$$.$OffcanvasUtils$.$EDGE_BOTTOM$ : $oj$$37$$.$OffcanvasUtils$.$EDGE_START$);
    $$$$34$$.data($drawer$$4_offcanvas$$5$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$, $edge$$7$$);
    return $edge$$7$$;
  };
  $oj$$37$$.$OffcanvasUtils$.$_getEdge$ = function $$oj$$37$$$$OffcanvasUtils$$$_getEdge$$($drawer$$5$$) {
    return $$$$34$$.data($drawer$$5$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$);
  };
  $oj$$37$$.$OffcanvasUtils$.$_toggleClass$ = function $$oj$$37$$$$OffcanvasUtils$$$_toggleClass$$($oTabIndex_offcanvas$$6$$, $wrapper$$4$$, $isOpen$$1$$) {
    var $displayMode$$1_wrapperClass$$ = $oTabIndex_offcanvas$$6$$[$oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$], $drawer$$6$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($oTabIndex_offcanvas$$6$$), $drawerClass$$ = $oj$$37$$.$OffcanvasUtils$.$OPEN_SELECTOR$, $displayMode$$1_wrapperClass$$ = $displayMode$$1_wrapperClass$$ === $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ ? $oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$ + " oj-offcanvas-overlay" : $oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$;
    $isOpen$$1$$ ? ($drawer$$6$$.addClass($drawerClass$$), $wrapper$$4$$.addClass($displayMode$$1_wrapperClass$$)) : ($oTabIndex_offcanvas$$6$$ = $oTabIndex_offcanvas$$6$$.tabindex, void 0 === $oTabIndex_offcanvas$$6$$ ? $drawer$$6$$.removeAttr("tabindex") : $drawer$$6$$.attr("tabindex", $oTabIndex_offcanvas$$6$$), $drawer$$6$$.removeClass($drawerClass$$), $wrapper$$4$$.removeClass($displayMode$$1_wrapperClass$$));
  };
  $oj$$37$$.$OffcanvasUtils$.$_setFocus$ = function $$oj$$37$$$$OffcanvasUtils$$$_setFocus$$($focusNode_offcanvas$$7$$) {
    var $drawer$$7$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($focusNode_offcanvas$$7$$), $nodes$$6_oTabIndex$$1$$ = $drawer$$7$$.find(":focusable");
    0 < $nodes$$6_oTabIndex$$1$$.length ? $focusNode_offcanvas$$7$$ = $nodes$$6_oTabIndex$$1$$[0] : ($nodes$$6_oTabIndex$$1$$ = $drawer$$7$$.attr("tabindex"), void 0 !== $nodes$$6_oTabIndex$$1$$ && ($focusNode_offcanvas$$7$$.tabindex = $nodes$$6_oTabIndex$$1$$), $drawer$$7$$.attr("tabindex", "-1"), $focusNode_offcanvas$$7$$ = $drawer$$7$$);
    $oj$$37$$.$FocusUtils$.$focusElement$($focusNode_offcanvas$$7$$);
  };
  $oj$$37$$.$OffcanvasUtils$.$_isAutoDismiss$ = function $$oj$$37$$$$OffcanvasUtils$$$_isAutoDismiss$$($offcanvas$$8$$) {
    return "none" != $offcanvas$$8$$.autoDismiss;
  };
  $oj$$37$$.$OffcanvasUtils$.$_onTransitionEnd$ = function $$oj$$37$$$$OffcanvasUtils$$$_onTransitionEnd$$($target$$129$$, $handler$$53$$) {
    function $listener$$40$$() {
      $handler$$53$$($target$$129$$);
      $target$$129$$.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$40$$);
    }
    $target$$129$$.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$40$$);
  };
  $oj$$37$$.$OffcanvasUtils$.$_closeWithCatch$ = function $$oj$$37$$$$OffcanvasUtils$$$_closeWithCatch$$($offcanvas$$9$$) {
    $oj$$37$$.$OffcanvasUtils$.close($offcanvas$$9$$)["catch"](function($reason$$9$$) {
      $oj$$37$$.$Logger$.warn("Offcancas close failed: " + $reason$$9$$);
    });
  };
  $oj$$37$$.$OffcanvasUtils$.$_registerCloseHandler$ = function $$oj$$37$$$$OffcanvasUtils$$$_registerCloseHandler$$($offcanvas$$10$$) {
    $oj$$37$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$10$$);
    if ($oj$$37$$.$OffcanvasUtils$.$_isAutoDismiss$($offcanvas$$10$$)) {
      var $drawer$$8$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$10$$), $dismisHandler$$ = $offcanvas$$10$$[$oj$$37$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$] = function $$offcanvas$$10$$$$oj$$37$$$$OffcanvasUtils$$$DISMISS_HANDLER_KEY$$($event$$563$$) {
        var $target$$130$$ = $event$$563$$.target;
        $oj$$37$$.$DomUtils$.$isChromeEvent$($event$$563$$) || "focus" === $event$$563$$.type && !$$$$34$$($target$$130$$).is(":focusable") || (null == $$$$34$$.data($drawer$$8$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$) ? $oj$$37$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$10$$) : $oj$$37$$.$DomUtils$.$isLogicalAncestorOrSelf$($drawer$$8$$[0], $target$$130$$) || $oj$$37$$.$OffcanvasUtils$.$_closeWithCatch$($offcanvas$$10$$));
      }, $documentElement$$1$$ = document.documentElement;
      $oj$$37$$.$DomUtils$.$isTouchSupported$() && $documentElement$$1$$.addEventListener("touchstart", $dismisHandler$$, !0);
      $documentElement$$1$$.addEventListener("mousedown", $dismisHandler$$, !0);
      $documentElement$$1$$.addEventListener("focus", $dismisHandler$$, !0);
    }
    $oj$$37$$.$OffcanvasUtils$.$_registerSwipeHandler$($offcanvas$$10$$);
  };
  $oj$$37$$.$OffcanvasUtils$.$_unregisterCloseHandler$ = function $$oj$$37$$$$OffcanvasUtils$$$_unregisterCloseHandler$$($offcanvas$$11$$) {
    var $dismisHandler$$1$$ = $offcanvas$$11$$[$oj$$37$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$];
    if ($dismisHandler$$1$$) {
      var $documentElement$$2$$ = document.documentElement;
      $oj$$37$$.$DomUtils$.$isTouchSupported$() && $documentElement$$2$$.removeEventListener("touchstart", $dismisHandler$$1$$, !0);
      $documentElement$$2$$.removeEventListener("mousedown", $dismisHandler$$1$$, !0);
      $documentElement$$2$$.removeEventListener("focus", $dismisHandler$$1$$, !0);
      delete $offcanvas$$11$$[$oj$$37$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$];
      $offcanvas$$11$$[$oj$$37$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$] = null;
    }
    $oj$$37$$.$OffcanvasUtils$.$_unregisterSwipeHandler$($offcanvas$$11$$);
  };
  $oj$$37$$.$OffcanvasUtils$.$_registerSwipeHandler$ = function $$oj$$37$$$$OffcanvasUtils$$$_registerSwipeHandler$$($offcanvas$$12$$) {
    if ($oj$$37$$.$DomUtils$.$isTouchSupported$()) {
      var $selector$$31$$ = $offcanvas$$12$$[$oj$$37$$.$OffcanvasUtils$.$SELECTOR_KEY$], $drawer$$9_drawerHammer$$ = $$$$34$$($selector$$31$$), $edge$$8$$ = $oj$$37$$.$OffcanvasUtils$.$_getEdge$($drawer$$9_drawerHammer$$), $swipeEvent$$, $options$$341$$;
      $edge$$8$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_START$ && !$oj$$37$$.$OffcanvasUtils$.$_isRTL$() || $edge$$8$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_END$ && $oj$$37$$.$OffcanvasUtils$.$_isRTL$() ? ($options$$341$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_LEFT}]]}, $swipeEvent$$ = "swipeleft") : $edge$$8$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_START$ && $oj$$37$$.$OffcanvasUtils$.$_isRTL$() || $edge$$8$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_END$ && !$oj$$37$$.$OffcanvasUtils$.$_isRTL$() ? 
      ($options$$341$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_RIGHT}]]}, $swipeEvent$$ = "swiperight") : $edge$$8$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_TOP$ ? ($options$$341$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_UP}]]}, $swipeEvent$$ = "swipeup") : $edge$$8$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_BOTTOM$ && ($options$$341$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_DOWN}]]}, $swipeEvent$$ = "swipedown");
      $drawer$$9_drawerHammer$$ = $drawer$$9_drawerHammer$$.$ojHammer$($options$$341$$).on($swipeEvent$$, function($event$$564$$) {
        $event$$564$$.preventDefault();
        $oj$$37$$.$OffcanvasUtils$.$_closeWithCatch$($offcanvas$$12$$);
      });
      $$$$34$$.data($$$$34$$($selector$$31$$)[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$, {event:$swipeEvent$$, hammer:$drawer$$9_drawerHammer$$});
    }
  };
  $oj$$37$$.$OffcanvasUtils$.$_unregisterSwipeHandler$ = function $$oj$$37$$$$OffcanvasUtils$$$_unregisterSwipeHandler$$($dHammer_drawer$$10_offcanvas$$13$$) {
    $dHammer_drawer$$10_offcanvas$$13$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($dHammer_drawer$$10_offcanvas$$13$$);
    0 < $dHammer_drawer$$10_offcanvas$$13$$.length && ($dHammer_drawer$$10_offcanvas$$13$$ = $$$$34$$.data($dHammer_drawer$$10_offcanvas$$13$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$)) && $dHammer_drawer$$10_offcanvas$$13$$.hammer.off($dHammer_drawer$$10_offcanvas$$13$$.event);
  };
  $oj$$37$$.$OffcanvasUtils$.$_isFixed$ = function $$oj$$37$$$$OffcanvasUtils$$$_isFixed$$($drawer$$11$$) {
    return $oj$$37$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$11$$).hasClass("oj-offcanvas-page");
  };
  $oj$$37$$.$OffcanvasUtils$.$_isPin$ = function $$oj$$37$$$$OffcanvasUtils$$$_isPin$$($offcanvas$$14$$) {
    return $offcanvas$$14$$[$oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$] === $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_PIN$;
  };
  $oj$$37$$.$OffcanvasUtils$.$_noInnerWrapper$ = function $$oj$$37$$$$OffcanvasUtils$$$_noInnerWrapper$$($offcanvas$$15$$) {
    return $offcanvas$$15$$[$oj$$37$$.$OffcanvasUtils$.$CONTENT_KEY$] || $oj$$37$$.$OffcanvasUtils$.$_isFixed$($oj$$37$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$15$$)) || $oj$$37$$.$OffcanvasUtils$.$_isPin$($offcanvas$$15$$);
  };
  $oj$$37$$.$OffcanvasUtils$.$_saveStyles$ = function $$oj$$37$$$$OffcanvasUtils$$$_saveStyles$$($drawer$$12$$) {
    var $style$$8$$ = $drawer$$12$$.attr("style");
    void 0 !== $style$$8$$ && $$$$34$$.data($drawer$$12$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_STYLE_KEY$, $style$$8$$);
  };
  $oj$$37$$.$OffcanvasUtils$.$_restoreStyles$ = function $$oj$$37$$$$OffcanvasUtils$$$_restoreStyles$$($drawer$$13$$) {
    var $style$$9$$ = $$$$34$$.data($drawer$$13$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_STYLE_KEY$);
    $style$$9$$ ? $drawer$$13$$.attr("style", $style$$9$$) : $drawer$$13$$.removeAttr("style");
  };
  $oj$$37$$.$OffcanvasUtils$.$_toggleOuterWrapper$ = function $$oj$$37$$$$OffcanvasUtils$$$_toggleOuterWrapper$$($drawer$$14$$, $test$$1$$) {
    var $edge$$9_shiftSelector$$ = $oj$$37$$.$OffcanvasUtils$.$_getEdge$($drawer$$14$$), $edge$$9_shiftSelector$$ = $oj$$37$$.$OffcanvasUtils$.$_getShiftSelector$($edge$$9_shiftSelector$$), $outerWrapper$$ = $oj$$37$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$14$$);
    $oj$$37$$.$Assert$.$assertPrototype$($outerWrapper$$, jQuery);
    var $isOpen$$2$$ = $outerWrapper$$.hasClass($edge$$9_shiftSelector$$);
    $test$$1$$ || $outerWrapper$$.toggleClass($edge$$9_shiftSelector$$, !$isOpen$$2$$);
    return $isOpen$$2$$;
  };
  $oj$$37$$.$OffcanvasUtils$.$_detachDetector$ = function $$oj$$37$$$$OffcanvasUtils$$$_detachDetector$$($target$$131$$, $endHandler$$1$$) {
    function $checkDetachedHandler$$() {
      null == ("fixed" === $$$$34$$($target$$131$$).css("position") ? $target$$131$$.parentNode.offsetParent : $target$$131$$.offsetParent) ? $endHandler$$1$$() : $rafId$$ = window.requestAnimationFrame($checkDetachedHandler$$);
    }
    var $rafId$$ = 0, $rafId$$ = window.requestAnimationFrame($checkDetachedHandler$$);
    return function() {
      0 !== $rafId$$ && window.cancelAnimationFrame($rafId$$);
    };
  };
  $oj$$37$$.$OffcanvasUtils$.$_afterCloseHandler$ = function $$oj$$37$$$$OffcanvasUtils$$$_afterCloseHandler$$($offcanvas$$17$$) {
    var $drawer$$15$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$17$$), $isPin$$ = $oj$$37$$.$OffcanvasUtils$.$_isPin$($offcanvas$$17$$);
    if ($$$$34$$.data($drawer$$15$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$) === $offcanvas$$17$$) {
      $oj$$37$$.$OffcanvasUtils$.$_getEdge$($drawer$$15$$);
      var $wrapper$$5$$ = $oj$$37$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$17$$);
      $isPin$$ ? $drawer$$15$$.removeClass($oj$$37$$.$OffcanvasUtils$.$OPEN_SELECTOR$ + " " + $oj$$37$$.$OffcanvasUtils$.$PIN_TRANSITION_SELECTOR$) : $oj$$37$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$17$$, $wrapper$$5$$, !1);
      $oj$$37$$.$OffcanvasUtils$.$_removeModality$($offcanvas$$17$$);
      $oj$$37$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$17$$);
      $isPin$$ && ($oj$$37$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$15$$).removeClass($oj$$37$$.$OffcanvasUtils$.$PIN_WRAPPER_SELECTOR$), $oj$$37$$.$OffcanvasUtils$.$_restoreStyles$($drawer$$15$$));
      $drawer$$15$$.trigger("ojclose", $offcanvas$$17$$);
      $$$$34$$.removeData($drawer$$15$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    }
  };
  $oj$$37$$.$OffcanvasUtils$.$_setVisible$ = function $$oj$$37$$$$OffcanvasUtils$$$_setVisible$$($selector$$32$$, $visible$$1$$, $edge$$11$$) {
    var $drawer$$16$$ = $$$$34$$($selector$$32$$);
    ($visible$$1$$ = !!$visible$$1$$) && $oj$$37$$.$OffcanvasUtils$.$_isOpen$($drawer$$16$$) && $oj$$37$$.$OffcanvasUtils$.$_close$($selector$$32$$, !1);
    $drawer$$16$$.toggleClass($oj$$37$$.$OffcanvasUtils$.$_drawerSelector$[$edge$$11$$], !$visible$$1$$);
  };
  $oj$$37$$.$OffcanvasUtils$.$setupResponsive$ = function $$oj$$37$$$$OffcanvasUtils$$$setupResponsive$$($mqListener_offcanvas$$18$$) {
    var $mqs_query$$11$$ = $mqListener_offcanvas$$18$$.query;
    if (null !== $mqs_query$$11$$) {
      var $selector$$33$$ = $mqListener_offcanvas$$18$$[$oj$$37$$.$OffcanvasUtils$.$SELECTOR_KEY$], $mqs_query$$11$$ = window.matchMedia($mqs_query$$11$$), $edge$$12$$ = $oj$$37$$.$OffcanvasUtils$.$_saveEdge$($mqListener_offcanvas$$18$$);
      $mqListener_offcanvas$$18$$ = function $$mqListener_offcanvas$$18$$$($event$$565$$) {
        $oj$$37$$.$OffcanvasUtils$.$_setVisible$($selector$$33$$, $event$$565$$.matches, $edge$$12$$);
      };
      $mqs_query$$11$$.addListener($mqListener_offcanvas$$18$$);
      $oj$$37$$.$OffcanvasUtils$.$_setVisible$($selector$$33$$, $mqs_query$$11$$.matches, $edge$$12$$);
      $$$$34$$.data($$$$34$$($selector$$33$$)[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$, {mqList:$mqs_query$$11$$, mqListener:$mqListener_offcanvas$$18$$});
    }
  };
  $goog$exportPath_$$("OffcanvasUtils.setupResponsive", $oj$$37$$.$OffcanvasUtils$.$setupResponsive$, $oj$$37$$);
  $oj$$37$$.$OffcanvasUtils$.$tearDownResponsive$ = function $$oj$$37$$$$OffcanvasUtils$$$tearDownResponsive$$($drawer$$17_offcanvas$$19$$) {
    $drawer$$17_offcanvas$$19$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($drawer$$17_offcanvas$$19$$);
    var $mql$$ = $$$$34$$.data($drawer$$17_offcanvas$$19$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$);
    $mql$$ && ($mql$$.mqList.removeListener($mql$$.mqListener), $$$$34$$.removeData($drawer$$17_offcanvas$$19$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$));
  };
  $goog$exportPath_$$("OffcanvasUtils.tearDownResponsive", $oj$$37$$.$OffcanvasUtils$.$tearDownResponsive$, $oj$$37$$);
  $oj$$37$$.$OffcanvasUtils$.$_openPush$ = function $$oj$$37$$$$OffcanvasUtils$$$_openPush$$($offcanvas$$20$$, $resolve$$47$$, $edge$$13$$) {
    function $endHandler$$2$$($$elem$$3$$) {
      $$elem$$3$$.removeClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$);
      $pending$$ ? $pending$$ = !1 : ($oj$$37$$.$OffcanvasUtils$.$_setFocus$($offcanvas$$20$$), $drawer$$18$$.trigger("ojopen", $offcanvas$$20$$), $oj$$37$$.$OffcanvasUtils$.$_registerCloseHandler$($offcanvas$$20$$), $resolve$$47$$(!0));
    }
    var $drawer$$18$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$20$$), $$main$$1$$ = $$$$34$$($offcanvas$$20$$[$oj$$37$$.$OffcanvasUtils$.$CONTENT_KEY$]);
    $oj$$37$$.$Assert$.$assertPrototype$($$main$$1$$, jQuery);
    var $pending$$ = !0, $size$$26$$ = $offcanvas$$20$$.size, $translation$$;
    $drawer$$18$$.addClass($oj$$37$$.$OffcanvasUtils$.$OPEN_SELECTOR$);
    window.setTimeout(function() {
      $edge$$13$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_START$ || $edge$$13$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_END$ ? (void 0 === $size$$26$$ && ($size$$26$$ = $drawer$$18$$.outerWidth(!0) + "px"), $oj$$37$$.$OffcanvasUtils$.$_setTransform$($drawer$$18$$, $oj$$37$$.$OffcanvasUtils$.$_getTranslationX$($edge$$13$$, $size$$26$$, !0)), $translation$$ = $oj$$37$$.$OffcanvasUtils$.$_getTranslationX$($edge$$13$$, $size$$26$$, !1)) : (void 0 === $size$$26$$ && ($size$$26$$ = $drawer$$18$$.outerHeight(!0) + 
      "px"), $oj$$37$$.$OffcanvasUtils$.$_setTransform$($drawer$$18$$, $oj$$37$$.$OffcanvasUtils$.$_getTranslationY2$($size$$26$$, $edge$$13$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_TOP$)), $translation$$ = $oj$$37$$.$OffcanvasUtils$.$_getTranslationY2$($size$$26$$, $edge$$13$$ !== $oj$$37$$.$OffcanvasUtils$.$EDGE_TOP$));
      window.setTimeout(function() {
        $oj$$37$$.$OffcanvasUtils$.$_setAnimateClass$($drawer$$18$$, $$main$$1$$, $translation$$);
        $oj$$37$$.$OffcanvasUtils$.$_toggleOuterWrapper$($drawer$$18$$, !1);
      }, 0);
    }, 0);
    $oj$$37$$.$OffcanvasUtils$.$_applyModality$($offcanvas$$20$$, $drawer$$18$$);
    $oj$$37$$.$OffcanvasUtils$.$_onTransitionEnd$($$main$$1$$, $endHandler$$2$$);
    $oj$$37$$.$OffcanvasUtils$.$_onTransitionEnd$($drawer$$18$$, $endHandler$$2$$);
  };
  $oj$$37$$.$OffcanvasUtils$.$_openOverlay$ = function $$oj$$37$$$$OffcanvasUtils$$$_openOverlay$$($offcanvas$$21$$, $resolve$$48$$, $edge$$14$$) {
    var $drawer$$19$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$21$$);
    $oj$$37$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$21$$, $drawer$$19$$, !0);
    var $size$$27$$ = $offcanvas$$21$$.size;
    $size$$27$$ && ($edge$$14$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_START$ || $edge$$14$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_END$ ? $oj$$37$$.$OffcanvasUtils$.$_setTransform$($drawer$$19$$, $oj$$37$$.$OffcanvasUtils$.$_getTranslationX$($edge$$14$$, $size$$27$$, !0)) : $oj$$37$$.$OffcanvasUtils$.$_setTransform$($drawer$$19$$, $oj$$37$$.$OffcanvasUtils$.$_getTranslationY$($edge$$14$$, $size$$27$$)));
    window.setTimeout(function() {
      $oj$$37$$.$OffcanvasUtils$.$_toggleOuterWrapper$($drawer$$19$$, !1);
    }, 10);
    $oj$$37$$.$OffcanvasUtils$.$_applyModality$($offcanvas$$21$$, $drawer$$19$$);
    $oj$$37$$.$OffcanvasUtils$.$_onTransitionEnd$($drawer$$19$$, function() {
      $drawer$$19$$.removeClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$);
      $oj$$37$$.$OffcanvasUtils$.$_setFocus$($offcanvas$$21$$);
      $drawer$$19$$.trigger("ojopen", $offcanvas$$21$$);
      $oj$$37$$.$OffcanvasUtils$.$_registerCloseHandler$($offcanvas$$21$$);
      $resolve$$48$$(!0);
    });
  };
  $oj$$37$$.$OffcanvasUtils$.$_openPin$ = function $$oj$$37$$$$OffcanvasUtils$$$_openPin$$($offcanvas$$22$$, $resolve$$49$$) {
    var $drawer$$20$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$22$$), $$main$$2$$ = $$$$34$$($offcanvas$$22$$[$oj$$37$$.$OffcanvasUtils$.$CONTENT_KEY$]);
    $oj$$37$$.$Assert$.$assertPrototype$($$main$$2$$, jQuery);
    var $size$$28$$ = $offcanvas$$22$$.size;
    $drawer$$20$$.addClass($oj$$37$$.$OffcanvasUtils$.$OPEN_SELECTOR$);
    window.setTimeout(function() {
      void 0 === $size$$28$$ && ($size$$28$$ = $drawer$$20$$.outerWidth(!0) + "px");
      $drawer$$20$$.addClass($oj$$37$$.$OffcanvasUtils$.$PIN_TRANSITION_SELECTOR$);
      $oj$$37$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$20$$).addClass($oj$$37$$.$OffcanvasUtils$.$PIN_WRAPPER_SELECTOR$);
      $oj$$37$$.$OffcanvasUtils$.$_saveStyles$($drawer$$20$$);
      $oj$$37$$.$OffcanvasUtils$.$_setTransform$($drawer$$20$$, "none");
      window.setTimeout(function() {
        $drawer$$20$$.css("min-width", $size$$28$$);
        $oj$$37$$.$OffcanvasUtils$.$_toggleOuterWrapper$($drawer$$20$$, !1);
      }, 10);
    }, 0);
    $oj$$37$$.$OffcanvasUtils$.$_applyModality$($offcanvas$$22$$, $drawer$$20$$);
    $oj$$37$$.$OffcanvasUtils$.$_onTransitionEnd$($drawer$$20$$, function() {
      $oj$$37$$.$OffcanvasUtils$.$_setFocus$($offcanvas$$22$$);
      $drawer$$20$$.trigger("ojopen", $offcanvas$$22$$);
      $oj$$37$$.$OffcanvasUtils$.$_registerCloseHandler$($offcanvas$$22$$);
      $resolve$$49$$(!0);
    });
  };
  $oj$$37$$.$OffcanvasUtils$.$_closePush$ = function $$oj$$37$$$$OffcanvasUtils$$$_closePush$$($offcanvas$$23$$, $resolve$$50$$, $drawer$$21$$, $animation$$3$$) {
    function $endHandler$$3$$($$target$$) {
      $pending$$1$$ && $$target$$ ? $pending$$1$$ = !1 : ($$main$$3$$.removeClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $oj$$37$$.$OffcanvasUtils$.$_setTransform$($$main$$3$$, ""), $oj$$37$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$23$$), $cancelDetector$$ && $cancelDetector$$(), $resolve$$50$$(!0));
    }
    var $$main$$3$$ = $$$$34$$($offcanvas$$23$$[$oj$$37$$.$OffcanvasUtils$.$CONTENT_KEY$]), $pending$$1$$ = !0, $cancelDetector$$;
    $animation$$3$$ && ($oj$$37$$.$OffcanvasUtils$.$_onTransitionEnd$($drawer$$21$$, $endHandler$$3$$), $oj$$37$$.$OffcanvasUtils$.$_onTransitionEnd$($$main$$3$$, $endHandler$$3$$), $cancelDetector$$ = $oj$$37$$.$OffcanvasUtils$.$_detachDetector$($drawer$$21$$[0], $endHandler$$3$$));
    $oj$$37$$.$OffcanvasUtils$.$_setTransform$($drawer$$21$$, "");
    $oj$$37$$.$OffcanvasUtils$.$_setTransform$($$main$$3$$, "");
    $oj$$37$$.$OffcanvasUtils$.$_toggleOuterWrapper$($drawer$$21$$, !1);
    $oj$$37$$.$OffcanvasUtils$.$_isModal$($offcanvas$$23$$) && $offcanvas$$23$$[$oj$$37$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].removeClass($oj$$37$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$);
    $animation$$3$$ ? ($$main$$3$$.addClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $drawer$$21$$.addClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$)) : ($oj$$37$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$23$$), $resolve$$50$$(!0));
  };
  $oj$$37$$.$OffcanvasUtils$.$_closeOverlay$ = function $$oj$$37$$$$OffcanvasUtils$$$_closeOverlay$$($offcanvas$$24$$, $resolve$$51$$, $drawer$$22$$, $animation$$4$$) {
    function $endHandler$$4$$() {
      $oj$$37$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$24$$);
      $cancelDetector$$1$$ && $cancelDetector$$1$$();
      $resolve$$51$$(!0);
    }
    var $cancelDetector$$1$$;
    $animation$$4$$ && ($oj$$37$$.$OffcanvasUtils$.$_onTransitionEnd$($drawer$$22$$, $endHandler$$4$$), $cancelDetector$$1$$ = $oj$$37$$.$OffcanvasUtils$.$_detachDetector$($drawer$$22$$[0], $endHandler$$4$$));
    $oj$$37$$.$OffcanvasUtils$.$_toggleOuterWrapper$($drawer$$22$$, !1);
    $oj$$37$$.$OffcanvasUtils$.$_isModal$($offcanvas$$24$$) && $offcanvas$$24$$[$oj$$37$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].removeClass($oj$$37$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$);
    $animation$$4$$ ? $drawer$$22$$.addClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$) : ($oj$$37$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$24$$), $resolve$$51$$(!0));
  };
  $oj$$37$$.$OffcanvasUtils$.$_openOldDrawer$ = function $$oj$$37$$$$OffcanvasUtils$$$_openOldDrawer$$($offcanvas$$25$$, $resolve$$52$$, $edge$$16$$, $displayMode$$2$$) {
    var $drawer$$23$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$25$$), $wrapper$$6$$ = $oj$$37$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$25$$);
    $oj$$37$$.$Assert$.$assertPrototype$($wrapper$$6$$, jQuery);
    $oj$$37$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$25$$, $wrapper$$6$$, !0);
    var $size$$29$$;
    $edge$$16$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_START$ || $edge$$16$$ === $oj$$37$$.$OffcanvasUtils$.$EDGE_END$ ? ($size$$29$$ = void 0 === $size$$29$$ ? $drawer$$23$$.outerWidth(!0) + "px" : $size$$29$$, $displayMode$$2$$ === $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && $oj$$37$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$6$$, $edge$$16$$, $size$$29$$)) : ($size$$29$$ = void 0 === $size$$29$$ ? $drawer$$23$$.outerHeight(!0) + "px" : $size$$29$$, $displayMode$$2$$ === $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && 
    $oj$$37$$.$OffcanvasUtils$.$_setTranslationY$($wrapper$$6$$, $edge$$16$$, $size$$29$$));
    window.setTimeout(function() {
      $oj$$37$$.$OffcanvasUtils$.$_toggleOuterWrapper$($drawer$$23$$, !1);
    }, 10);
    $oj$$37$$.$OffcanvasUtils$.$_applyModality$($offcanvas$$25$$, $drawer$$23$$);
    $oj$$37$$.$OffcanvasUtils$.$_onTransitionEnd$($wrapper$$6$$, function() {
      $wrapper$$6$$.removeClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$);
      $oj$$37$$.$OffcanvasUtils$.$_setFocus$($offcanvas$$25$$);
      $drawer$$23$$.trigger("ojopen", $offcanvas$$25$$);
      $oj$$37$$.$OffcanvasUtils$.$_registerCloseHandler$($offcanvas$$25$$);
      $resolve$$52$$(!0);
    });
  };
  $oj$$37$$.$OffcanvasUtils$.$_closePin$ = function $$oj$$37$$$$OffcanvasUtils$$$_closePin$$($offcanvas$$26$$, $resolve$$53$$, $drawer$$24$$, $animation$$5$$) {
    function $endHandler$$5$$() {
      $oj$$37$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$26$$);
      $cancelDetector$$2$$ && $cancelDetector$$2$$();
      $resolve$$53$$(!0);
    }
    var $cancelDetector$$2$$;
    $animation$$5$$ && ($oj$$37$$.$OffcanvasUtils$.$_onTransitionEnd$($drawer$$24$$, $endHandler$$5$$), $cancelDetector$$2$$ = $oj$$37$$.$OffcanvasUtils$.$_detachDetector$($drawer$$24$$[0], $endHandler$$5$$));
    $oj$$37$$.$OffcanvasUtils$.$_toggleOuterWrapper$($drawer$$24$$, !1);
    $oj$$37$$.$OffcanvasUtils$.$_isModal$($offcanvas$$26$$) && $offcanvas$$26$$[$oj$$37$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].removeClass($oj$$37$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$);
    $animation$$5$$ ? $drawer$$24$$.css("min-width", "0") : ($oj$$37$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$26$$), $resolve$$53$$(!0));
  };
  $oj$$37$$.$OffcanvasUtils$.$_closeOldDrawer$ = function $$oj$$37$$$$OffcanvasUtils$$$_closeOldDrawer$$($offcanvas$$27$$, $resolve$$54$$, $drawer$$25$$, $animation$$6$$) {
    function $endHandler$$6$$() {
      $oj$$37$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$27$$);
      $cancelDetector$$3$$ && $cancelDetector$$3$$();
      $resolve$$54$$(!0);
    }
    var $displayMode$$3$$ = $offcanvas$$27$$[$oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$], $wrapper$$7$$ = $oj$$37$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$27$$), $cancelDetector$$3$$;
    $animation$$6$$ && ($oj$$37$$.$OffcanvasUtils$.$_onTransitionEnd$($wrapper$$7$$, $endHandler$$6$$), $cancelDetector$$3$$ = $oj$$37$$.$OffcanvasUtils$.$_detachDetector$($drawer$$25$$[0], $endHandler$$6$$));
    $displayMode$$3$$ === $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && $oj$$37$$.$OffcanvasUtils$.$_setTransform$($wrapper$$7$$, "");
    $oj$$37$$.$OffcanvasUtils$.$_toggleOuterWrapper$($drawer$$25$$, !1);
    $oj$$37$$.$OffcanvasUtils$.$_isModal$($offcanvas$$27$$) && $offcanvas$$27$$[$oj$$37$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].removeClass($oj$$37$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$);
    $animation$$6$$ ? $wrapper$$7$$.addClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$) : ($oj$$37$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$27$$), $resolve$$54$$(!0));
  };
  $oj$$37$$.$OffcanvasUtils$.open = function $$oj$$37$$$$OffcanvasUtils$$open$($offcanvas$$28$$) {
    var $drawer$$26$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$28$$), $nOffcanvas_oldOffcanvas$$ = $$$$34$$.data($drawer$$26$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    if ($nOffcanvas_oldOffcanvas$$) {
      if ($nOffcanvas_oldOffcanvas$$[$oj$$37$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$]) {
        return $nOffcanvas_oldOffcanvas$$[$oj$$37$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$];
      }
      if ($nOffcanvas_oldOffcanvas$$[$oj$$37$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$]) {
        return $nOffcanvas_oldOffcanvas$$[$oj$$37$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$];
      }
    }
    var $veto$$ = !1, $promise$$12$$ = new Promise(function($resolve$$55$$, $reject$$51$$) {
      $oj$$37$$.$Assert$.$assertPrototype$($drawer$$26$$, jQuery);
      var $edge$$17$$ = $oj$$37$$.$OffcanvasUtils$.$_saveEdge$($offcanvas$$28$$), $displayMode$$4_event$$566$$ = $$$$34$$.Event("ojbeforeopen");
      $drawer$$26$$.trigger($displayMode$$4_event$$566$$, $offcanvas$$28$$);
      if (!1 === $displayMode$$4_event$$566$$.result) {
        return $reject$$51$$($oj$$37$$.$OffcanvasUtils$.$VETO_BEFOREOPEN_MSG$), $veto$$ = !0, $promise$$12$$;
      }
      var $displayMode$$4_event$$566$$ = $oj$$37$$.$OffcanvasUtils$.$_getDisplayMode$($offcanvas$$28$$), $isPin$$1$$ = $oj$$37$$.$OffcanvasUtils$.$_isPin$($offcanvas$$28$$);
      !$isPin$$1$$ || $edge$$17$$ !== $oj$$37$$.$OffcanvasUtils$.$EDGE_TOP$ && $edge$$17$$ !== $oj$$37$$.$OffcanvasUtils$.$EDGE_BOTTOM$ || ($displayMode$$4_event$$566$$ = $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$);
      var $myOffcanvas$$ = $$$$34$$.extend({}, $offcanvas$$28$$);
      $myOffcanvas$$[$oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$] = $displayMode$$4_event$$566$$;
      $$$$34$$.data($drawer$$26$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$, $myOffcanvas$$);
      if ($offcanvas$$28$$[$oj$$37$$.$OffcanvasUtils$.$CONTENT_KEY$]) {
        if (!$oj$$37$$.$OffcanvasUtils$.$_noInnerWrapper$($offcanvas$$28$$)) {
          throw "Error: Both main content selector and the inner wrapper \x3cdiv class\x3d'oj-offcanvas-inner-wrapper'\x3e are provided. Please remove the inner wrapper.";
        }
        $isPin$$1$$ ? $oj$$37$$.$OffcanvasUtils$.$_openPin$($myOffcanvas$$, $resolve$$55$$) : $displayMode$$4_event$$566$$ === $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ ? $oj$$37$$.$OffcanvasUtils$.$_openPush$($myOffcanvas$$, $resolve$$55$$, $edge$$17$$) : $oj$$37$$.$OffcanvasUtils$.$_openOverlay$($myOffcanvas$$, $resolve$$55$$, $edge$$17$$);
      } else {
        $oj$$37$$.$OffcanvasUtils$.$_openOldDrawer$($myOffcanvas$$, $resolve$$55$$, $edge$$17$$, $displayMode$$4_event$$566$$);
      }
    });
    $veto$$ || ($nOffcanvas_oldOffcanvas$$ = $$$$34$$.data($drawer$$26$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$)) && ($nOffcanvas_oldOffcanvas$$[$oj$$37$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$] = $promise$$12$$);
    return $promise$$12$$;
  };
  $goog$exportPath_$$("OffcanvasUtils.open", $oj$$37$$.$OffcanvasUtils$.open, $oj$$37$$);
  $oj$$37$$.$OffcanvasUtils$.close = function $$oj$$37$$$$OffcanvasUtils$$close$($offcanvas$$29$$) {
    return $oj$$37$$.$OffcanvasUtils$.$_close$($offcanvas$$29$$[$oj$$37$$.$OffcanvasUtils$.$SELECTOR_KEY$], !0);
  };
  $goog$exportPath_$$("OffcanvasUtils.close", $oj$$37$$.$OffcanvasUtils$.close, $oj$$37$$);
  $oj$$37$$.$OffcanvasUtils$.$_close$ = function $$oj$$37$$$$OffcanvasUtils$$$_close$$($selector$$34$$, $animation$$7$$) {
    var $drawer$$27$$ = $$$$34$$($selector$$34$$);
    $oj$$37$$.$Assert$.$assertPrototype$($drawer$$27$$, jQuery);
    var $offcanvas$$30$$ = $$$$34$$.data($drawer$$27$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    if ($offcanvas$$30$$ && $offcanvas$$30$$[$oj$$37$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$]) {
      return $offcanvas$$30$$[$oj$$37$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$];
    }
    var $veto$$1$$ = !1, $promise$$13$$ = new Promise(function($resolve$$56$$, $reject$$52$$) {
      if ($oj$$37$$.$OffcanvasUtils$.$_isOpen$($drawer$$27$$)) {
        $selector$$34$$ != $offcanvas$$30$$[$oj$$37$$.$OffcanvasUtils$.$SELECTOR_KEY$] && $resolve$$56$$(!0);
        $oj$$37$$.$OffcanvasUtils$.$_toggleOuterWrapper$($drawer$$27$$, !0) || $resolve$$56$$(!0);
        var $event$$567_isPin$$2$$ = $$$$34$$.Event("ojbeforeclose");
        $drawer$$27$$.trigger($event$$567_isPin$$2$$, $offcanvas$$30$$);
        if (!1 === $event$$567_isPin$$2$$.result) {
          return $reject$$52$$($oj$$37$$.$OffcanvasUtils$.$VETO_BEFORECLOSE_MSG$), $veto$$1$$ = !0, $promise$$13$$;
        }
        var $event$$567_isPin$$2$$ = $oj$$37$$.$OffcanvasUtils$.$_isPin$($offcanvas$$30$$), $displayMode$$5$$ = $offcanvas$$30$$[$oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$];
        $offcanvas$$30$$[$oj$$37$$.$OffcanvasUtils$.$CONTENT_KEY$] ? $displayMode$$5$$ === $oj$$37$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ ? $oj$$37$$.$OffcanvasUtils$.$_closePush$($offcanvas$$30$$, $resolve$$56$$, $drawer$$27$$, $animation$$7$$) : $event$$567_isPin$$2$$ ? $oj$$37$$.$OffcanvasUtils$.$_closePin$($offcanvas$$30$$, $resolve$$56$$, $drawer$$27$$, $animation$$7$$) : $oj$$37$$.$OffcanvasUtils$.$_closeOverlay$($offcanvas$$30$$, $resolve$$56$$, $drawer$$27$$, $animation$$7$$) : $oj$$37$$.$OffcanvasUtils$.$_closeOldDrawer$($offcanvas$$30$$, 
        $resolve$$56$$, $drawer$$27$$, $animation$$7$$);
      } else {
        $resolve$$56$$(!0);
      }
    });
    $veto$$1$$ || ($offcanvas$$30$$ = $$$$34$$.data($drawer$$27$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$)) && ($offcanvas$$30$$[$oj$$37$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$] = $promise$$13$$);
    return $promise$$13$$;
  };
  $oj$$37$$.$OffcanvasUtils$.toggle = function $$oj$$37$$$$OffcanvasUtils$$toggle$($offcanvas$$31$$) {
    var $drawer$$28$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$31$$);
    $oj$$37$$.$Assert$.$assertPrototype$($drawer$$28$$, jQuery);
    return $oj$$37$$.$OffcanvasUtils$.$_isOpen$($drawer$$28$$) ? $oj$$37$$.$OffcanvasUtils$.close($offcanvas$$31$$) : $oj$$37$$.$OffcanvasUtils$.open($offcanvas$$31$$);
  };
  $goog$exportPath_$$("OffcanvasUtils.toggle", $oj$$37$$.$OffcanvasUtils$.toggle, $oj$$37$$);
  $oj$$37$$.$OffcanvasUtils$.$_addGlassPane$ = function $$oj$$37$$$$OffcanvasUtils$$$_addGlassPane$$($drawer$$29$$) {
    var $overlay$$2$$ = $$$$34$$("\x3cdiv\x3e");
    $overlay$$2$$.addClass($oj$$37$$.$OffcanvasUtils$.$GLASSPANE_SELECTOR$);
    $overlay$$2$$.attr("role", "presentation");
    $overlay$$2$$.attr("aria-hidden", "true");
    $overlay$$2$$.appendTo($drawer$$29$$.parent());
    $overlay$$2$$.on("keydown keyup keypress mousedown mouseup mouseover mouseout click focusin focus", function($event$$568$$) {
      $event$$568$$.stopPropagation();
      $event$$568$$.preventDefault();
    });
    return $overlay$$2$$;
  };
  $oj$$37$$.$OffcanvasUtils$.$_createSurrogate$ = function $$oj$$37$$$$OffcanvasUtils$$$_createSurrogate$$($layer$$20$$) {
    var $surrogate$$4$$ = $$$$34$$("\x3cscript\x3e"), $layerId$$2_surrogateId$$3$$ = $layer$$20$$.attr("id");
    $layerId$$2_surrogateId$$3$$ ? ($layerId$$2_surrogateId$$3$$ = [$layerId$$2_surrogateId$$3$$, "surrogate"].join("_"), $surrogate$$4$$.attr("id", $layerId$$2_surrogateId$$3$$)) : $layerId$$2_surrogateId$$3$$ = $surrogate$$4$$.uniqueId();
    $surrogate$$4$$.insertBefore($layer$$20$$);
    $layer$$20$$.attr($oj$$37$$.$OffcanvasUtils$.$SURROGATE_ATTR$, $layerId$$2_surrogateId$$3$$);
    return $surrogate$$4$$;
  };
  $oj$$37$$.$OffcanvasUtils$.$_swapOrder$ = function $$oj$$37$$$$OffcanvasUtils$$$_swapOrder$$($offcanvas$$32$$, $drawer$$30$$) {
    $offcanvas$$32$$[$oj$$37$$.$OffcanvasUtils$.$SURROGATE_KEY$] = $oj$$37$$.$OffcanvasUtils$.$_createSurrogate$($drawer$$30$$);
    $drawer$$30$$.appendTo($drawer$$30$$.parent());
  };
  $oj$$37$$.$OffcanvasUtils$.$_restoreOrder$ = function $$oj$$37$$$$OffcanvasUtils$$$_restoreOrder$$($offcanvas$$33_surrogate$$5$$) {
    var $drawer$$31$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$33_surrogate$$5$$);
    $offcanvas$$33_surrogate$$5$$ = $offcanvas$$33_surrogate$$5$$[$oj$$37$$.$OffcanvasUtils$.$SURROGATE_KEY$];
    $drawer$$31$$ && $offcanvas$$33_surrogate$$5$$ && $drawer$$31$$.attr($oj$$37$$.$OffcanvasUtils$.$SURROGATE_ATTR$) === $offcanvas$$33_surrogate$$5$$.attr("id") && ($drawer$$31$$.insertAfter($offcanvas$$33_surrogate$$5$$), $drawer$$31$$.removeAttr($oj$$37$$.$OffcanvasUtils$.$SURROGATE_ATTR$), $offcanvas$$33_surrogate$$5$$.remove());
  };
  $oj$$37$$.$OffcanvasUtils$.$_applyModality$ = function $$oj$$37$$$$OffcanvasUtils$$$_applyModality$$($offcanvas$$34$$, $drawer$$32$$) {
    $oj$$37$$.$OffcanvasUtils$.$_isModal$($offcanvas$$34$$) && ($offcanvas$$34$$[$oj$$37$$.$OffcanvasUtils$.$GLASS_PANE_KEY$] = $oj$$37$$.$OffcanvasUtils$.$_addGlassPane$($drawer$$32$$), $oj$$37$$.$OffcanvasUtils$.$_swapOrder$($offcanvas$$34$$, $drawer$$32$$), window.setTimeout(function() {
      $offcanvas$$34$$[$oj$$37$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].addClass($oj$$37$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$);
    }, 0));
  };
  $oj$$37$$.$OffcanvasUtils$.$_removeModality$ = function $$oj$$37$$$$OffcanvasUtils$$$_removeModality$$($offcanvas$$35$$) {
    $oj$$37$$.$OffcanvasUtils$.$_isModal$($offcanvas$$35$$) && ($offcanvas$$35$$[$oj$$37$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].remove(), $oj$$37$$.$OffcanvasUtils$.$_restoreOrder$($offcanvas$$35$$));
  };
  $oj$$37$$.$OffcanvasUtils$.$setupPanToReveal$ = function $$oj$$37$$$$OffcanvasUtils$$$setupPanToReveal$$($offcanvas$$36$$) {
    var $drawer$$34$$, $size$$30$$, $outerWrapper$$1$$, $wrapper$$8$$, $mOptions$$, $proceed$$, $direction$$18$$, $ui$$22$$, $evt$$27$$, $delta$$8$$, $edge$$18$$, $listener$$41$$;
    null == $$$$34$$($offcanvas$$36$$).attr("oj-data-pansetup") && ($$$$34$$($offcanvas$$36$$).attr("oj-data-pansetup", "true"), $offcanvas$$36$$.displayMode = "push", $drawer$$34$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$36$$), $size$$30$$ = $offcanvas$$36$$.size, null == $size$$30$$ && ($size$$30$$ = $drawer$$34$$.outerWidth()), $outerWrapper$$1$$ = $oj$$37$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$34$$), $wrapper$$8$$ = $oj$$37$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$36$$), 
    $mOptions$$ = {recognizers:[[$Hammer$$5$$.Pan, {direction:$Hammer$$5$$.DIRECTION_HORIZONTAL}]]}, $proceed$$ = !1, $$$$34$$($outerWrapper$$1$$).$ojHammer$($mOptions$$).on("panstart", function($event$$569$$) {
      $direction$$18$$ = null;
      switch($event$$569$$.gesture.direction) {
        case $Hammer$$5$$.DIRECTION_LEFT:
          Math.abs($event$$569$$.gesture.deltaY) < Math.abs($event$$569$$.gesture.deltaX) && ($direction$$18$$ = $oj$$37$$.$OffcanvasUtils$.$_isRTL$() ? "end" : "start");
          break;
        case $Hammer$$5$$.DIRECTION_RIGHT:
          Math.abs($event$$569$$.gesture.deltaY) < Math.abs($event$$569$$.gesture.deltaX) && ($direction$$18$$ = $oj$$37$$.$OffcanvasUtils$.$_isRTL$() ? "start" : "end");
      }
      null != $direction$$18$$ && ($ui$$22$$ = {direction:$direction$$18$$, distance:Math.abs($event$$569$$.gesture.deltaX)}, $evt$$27$$ = $$$$34$$.Event("ojpanstart"), $drawer$$34$$.trigger($evt$$27$$, $ui$$22$$), $evt$$27$$.isDefaultPrevented() || ($offcanvas$$36$$._closePromise = null, $oj$$37$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$36$$, $wrapper$$8$$, !0), $proceed$$ = !0, $event$$569$$.stopPropagation()));
    }).on("panmove", function($event$$570$$) {
      $proceed$$ && ($delta$$8$$ = Math.abs($event$$570$$.gesture.deltaX), $drawer$$34$$.css("width", $delta$$8$$), $wrapper$$8$$.removeClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $oj$$37$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$8$$, "start", $event$$570$$.gesture.deltaX + "px"), $ui$$22$$ = {direction:$direction$$18$$, distance:$delta$$8$$}, $evt$$27$$ = $$$$34$$.Event("ojpanmove"), $drawer$$34$$.trigger($evt$$27$$, $ui$$22$$), $event$$570$$.stopPropagation());
    }).on("panend", function($event$$571$$) {
      $proceed$$ && ($proceed$$ = !1, $delta$$8$$ = Math.abs($event$$571$$.gesture.deltaX), $ui$$22$$ = {distance:$delta$$8$$}, $evt$$27$$ = $$$$34$$.Event("ojpanend"), $drawer$$34$$.trigger($evt$$27$$, $ui$$22$$), $event$$571$$.stopPropagation(), $evt$$27$$.isDefaultPrevented() ? ($listener$$41$$ = function $$listener$$41$$$() {
        $oj$$37$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$36$$, $wrapper$$8$$, !1);
        $wrapper$$8$$.removeClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$);
        $wrapper$$8$$.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$41$$);
      }, $wrapper$$8$$.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$41$$), $wrapper$$8$$.addClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $oj$$37$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$8$$, "start", "0px")) : ($wrapper$$8$$.addClass($oj$$37$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $drawer$$34$$.css("width", $size$$30$$ + "px"), $edge$$18$$ = $offcanvas$$36$$.edge, null == $edge$$18$$ && ($edge$$18$$ = $drawer$$34$$.hasClass("oj-offcanvas-start") ? 
      "start" : "end"), $oj$$37$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$8$$, $edge$$18$$, $size$$30$$ + "px"), $$$$34$$.data($drawer$$34$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$, $offcanvas$$36$$), $$$$34$$.data($drawer$$34$$[0], $oj$$37$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$, $edge$$18$$), $oj$$37$$.$OffcanvasUtils$.$_registerCloseHandler$($offcanvas$$36$$)));
    }));
  };
  $goog$exportPath_$$("OffcanvasUtils.setupPanToReveal", $oj$$37$$.$OffcanvasUtils$.$setupPanToReveal$, $oj$$37$$);
  $oj$$37$$.$OffcanvasUtils$.$tearDownPanToReveal$ = function $$oj$$37$$$$OffcanvasUtils$$$tearDownPanToReveal$$($drawer$$35_offcanvas$$37$$) {
    $drawer$$35_offcanvas$$37$$ = $oj$$37$$.$OffcanvasUtils$.$_getDrawer$($drawer$$35_offcanvas$$37$$);
    $$$$34$$($oj$$37$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$35_offcanvas$$37$$)).off("panstart panmove panend");
  };
  $goog$exportPath_$$("OffcanvasUtils.tearDownPanToReveal", $oj$$37$$.$OffcanvasUtils$.$tearDownPanToReveal$, $oj$$37$$);
});
