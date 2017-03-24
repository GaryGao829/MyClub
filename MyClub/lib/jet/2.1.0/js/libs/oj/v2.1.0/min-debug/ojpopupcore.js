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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "jqueryui-amd/position"], function($oj$$29$$, $$$$26$$) {
  $oj$$29$$.$PositionUtils$ = {};
  $oj$$29$$.$PositionUtils$.$normalizeHorizontalAlignment$ = function $$oj$$29$$$$PositionUtils$$$normalizeHorizontalAlignment$$($position$$18$$, $isRtl$$2$$) {
    for (var $target$$125$$ = $$$$26$$.extend({}, $position$$18$$), $i$$385$$ = 0;$i$$385$$ < $oj$$29$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$.length;$i$$385$$++) {
      var $propName$$4$$ = $oj$$29$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$[$i$$385$$], $align$$ = $target$$125$$[$propName$$4$$];
      $align$$ && ($target$$125$$[$propName$$4$$] = $align$$.replace("start", $isRtl$$2$$ ? "right" : "left").replace("end", $isRtl$$2$$ ? "left" : "right").replace("\x3c", $isRtl$$2$$ ? "+" : "-").replace("\x3e", $isRtl$$2$$ ? "-" : "+"));
    }
    return $target$$125$$;
  };
  $oj$$29$$.$PositionUtils$.$normalizePositionOf$ = function $$oj$$29$$$$PositionUtils$$$normalizePositionOf$$($of$$, $launcher$$9$$, $event$$519$$) {
    return "event" === $of$$ ? $event$$519$$ : null == $of$$ || "launcher" === $of$$ ? $launcher$$9$$ : $of$$;
  };
  $oj$$29$$.$PositionUtils$.$_normalizeEventForPosition$ = function $$oj$$29$$$$PositionUtils$$$_normalizeEventForPosition$$($event$$520$$) {
    $$$$26$$.each(["pageX", "pageY"], function($index$$237$$, $pagePos$$) {
      if ($event$$520$$ && void 0 === $event$$520$$[$pagePos$$] && $event$$520$$.originalEvent) {
        var $firstTouch$$2_originalEvent$$2$$ = $event$$520$$.originalEvent, $touchList_type$$90$$ = $firstTouch$$2_originalEvent$$2$$.type;
        ($touchList_type$$90$$ = "touchstart" === $touchList_type$$90$$ || "touchmove" === $touchList_type$$90$$ ? "touches" : "touchend" === $touchList_type$$90$$ ? "changedTouches" : null) && ($firstTouch$$2_originalEvent$$2$$ = $firstTouch$$2_originalEvent$$2$$[$touchList_type$$90$$][0]) && ($event$$520$$[$pagePos$$] = $firstTouch$$2_originalEvent$$2$$[$pagePos$$]);
      }
    });
  };
  $oj$$29$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$ = ["my", "at"];
  $oj$$29$$.$PositionUtils$.$isAligningPositionClipped$ = function $$oj$$29$$$$PositionUtils$$$isAligningPositionClipped$$($props$$16$$) {
    return $props$$16$$.target && 0 < $props$$16$$.target.height && 0 < $props$$16$$.target.width ? !$oj$$29$$.$PositionUtils$.$isWithinViewport$($props$$16$$.target.element) : !1;
  };
  $oj$$29$$.$PositionUtils$.$isWithinViewport$ = function $$oj$$29$$$$PositionUtils$$$isWithinViewport$$($element$$209_parent$$35$$) {
    function $isVisible$$($alignBox$$1$$, $containerBox$$) {
      if (-1 < ["hidden", "scroll", "auto"].indexOf($containerBox$$.overflowY)) {
        if (-1 > $alignBox$$1$$.bottom - $containerBox$$.top) {
          return!1;
        }
        var $scrollBarWidth$$1$$ = "auto" === $containerBox$$.overflowX || "scroll" === $containerBox$$.overflowX ? $oj$$29$$.$DomUtils$.$getScrollBarWidth$() : 0;
        if (1 > $containerBox$$.bottom - $scrollBarWidth$$1$$ - $alignBox$$1$$.top) {
          return!1;
        }
      }
      if (-1 < ["hidden", "scroll", "auto"].indexOf($containerBox$$.overflowX)) {
        $scrollBarWidth$$1$$ = "auto" !== $containerBox$$.overflowY && "scroll" !== $containerBox$$.overflowY || "rtl" !== $oj$$29$$.$DomUtils$.$getReadingDirection$() ? 0 : $oj$$29$$.$DomUtils$.$getScrollBarWidth$();
        if (-1 > $alignBox$$1$$.right - ($containerBox$$.left + $scrollBarWidth$$1$$)) {
          return!1;
        }
        $scrollBarWidth$$1$$ = "auto" !== $containerBox$$.overflowX && "scroll" !== $containerBox$$.overflowX || "ltr" !== $oj$$29$$.$DomUtils$.$getReadingDirection$() ? 0 : $oj$$29$$.$DomUtils$.$getScrollBarWidth$();
        if (-1 < $alignBox$$1$$.left - ($containerBox$$.right - $scrollBarWidth$$1$$)) {
          return!1;
        }
      }
      return!0;
    }
    function $hasOverflow$$($element$$210$$) {
      return "visible" !== $element$$210$$.css("overflow-x") || "visible" !== $element$$210$$.css("overflow-y");
    }
    function $getRect$$($element$$211$$) {
      var $domElement$$3_rec$$ = $element$$211$$[0];
      return 1 === $domElement$$3_rec$$.nodeType ? ($domElement$$3_rec$$ = $$$$26$$.extend({}, $domElement$$3_rec$$.getBoundingClientRect()), $domElement$$3_rec$$.overflowX = $element$$211$$.css("overflow-x"), $domElement$$3_rec$$.overflowY = $element$$211$$.css("overflow-y"), $domElement$$3_rec$$) : {height:0, width:0};
    }
    function $isPositioned$$($element$$212$$) {
      return-1 < ["fixed", "absolute", "relative"].indexOf($element$$212$$.css("position")) && (0 < Math.abs($oj$$29$$.$DomUtils$.$getCSSLengthAsInt$($element$$212$$.css("top"))) || 0 < Math.abs($oj$$29$$.$DomUtils$.$getCSSLengthAsInt$($element$$212$$.css("bottom"))) || 0 < Math.abs($oj$$29$$.$DomUtils$.$getCSSLengthAsInt$($element$$212$$.css("left"))) || 0 < Math.abs($oj$$29$$.$DomUtils$.$getCSSLengthAsInt$($element$$212$$.css("right"))));
    }
    if (!$element$$209_parent$$35$$) {
      return!1;
    }
    if ($$$$26$$.isWindow($element$$209_parent$$35$$[0]) || $isPositioned$$($element$$209_parent$$35$$)) {
      return!0;
    }
    var $alignBox$$ = $getRect$$($element$$209_parent$$35$$), $isWithinViewPort$$ = !0;
    for ($element$$209_parent$$35$$ = $element$$209_parent$$35$$.parent();$isWithinViewPort$$ && $element$$209_parent$$35$$ && 0 < $element$$209_parent$$35$$.length && "BODY" !== $element$$209_parent$$35$$[0].nodeName && 1 === $element$$209_parent$$35$$[0].nodeType && !$isPositioned$$($element$$209_parent$$35$$);) {
      if ($hasOverflow$$($element$$209_parent$$35$$)) {
        var $parentBox$$ = $getRect$$($element$$209_parent$$35$$);
        0 < $parentBox$$.height && 0 < $parentBox$$.width && ($isWithinViewPort$$ = $isVisible$$($alignBox$$, $parentBox$$));
      }
      $element$$209_parent$$35$$ = $element$$209_parent$$35$$.parent();
    }
    return $isWithinViewPort$$;
  };
  $$$$26$$.ui.position.flipcenter = {left:function $$$$$26$$$ui$position$flipcenter$left$($position$$19$$, $data$$144$$) {
    var $posLeft$$ = $position$$19$$.left;
    $$$$26$$.ui.position.flip.left.call(this, $position$$19$$, $data$$144$$);
    var $overRight_within$$ = $data$$144$$.within, $dirFactor_withinOffset$$ = $overRight_within$$.isWindow ? $overRight_within$$.scrollLeft : $overRight_within$$.offset.left, $collisionPosLeft$$ = $position$$19$$.left - $data$$144$$.collisionPosition.marginLeft, $overRight_within$$ = $collisionPosLeft$$ + $data$$144$$.collisionWidth - $overRight_within$$.width - $dirFactor_withinOffset$$;
    if (0 < $dirFactor_withinOffset$$ - $collisionPosLeft$$ || 0 < $overRight_within$$) {
      "right" === $data$$144$$.at[0] ? $posLeft$$ -= $data$$144$$.targetWidth / 2 : "left" === $data$$144$$.at[0] && ($posLeft$$ += $data$$144$$.targetWidth / 2), $dirFactor_withinOffset$$ = "rtl" === $oj$$29$$.$DomUtils$.$getReadingDirection$() ? -1 : 1, $posLeft$$ -= $data$$144$$.elemWidth / 2 * $dirFactor_withinOffset$$, $position$$19$$.left = $posLeft$$;
    }
  }, top:function $$$$$26$$$ui$position$flipcenter$top$($position$$20$$, $data$$145$$) {
    var $posTop$$ = $position$$20$$.top;
    $$$$26$$.ui.position.flip.top.call(this, $position$$20$$, $data$$145$$);
    var $within$$1_withinOffset$$1$$ = $data$$145$$.within, $within$$1_withinOffset$$1$$ = $within$$1_withinOffset$$1$$.isWindow ? $within$$1_withinOffset$$1$$.scrollTop : $within$$1_withinOffset$$1$$.offset.top, $collisionPosTop$$ = $position$$20$$.top - $data$$145$$.collisionPosition.marginTop, $overBottom$$ = $collisionPosTop$$ + $data$$145$$.collisionHeight - $data$$145$$.within.height - $within$$1_withinOffset$$1$$;
    if (0 < $within$$1_withinOffset$$1$$ - $collisionPosTop$$ || 0 < $overBottom$$) {
      "top" === $data$$145$$.at[1] ? $posTop$$ += $data$$145$$.targetHeight / 2 : "bottom" === $data$$145$$.at[1] && ($posTop$$ -= $data$$145$$.targetHeight / 2), $posTop$$ += $data$$145$$.elemHeight / 2, $position$$20$$.top = $posTop$$;
    }
  }};
  $$$$26$$.ui.position.flip = {left:function $$$$$26$$$ui$position$flip$left$($position$$21$$, $data$$146$$) {
    var $offsetLeft_within$$2$$ = $data$$146$$.within, $withinOffset$$2$$ = $offsetLeft_within$$2$$.offset.left + $offsetLeft_within$$2$$.scrollLeft, $outerWidth$$1$$ = $offsetLeft_within$$2$$.width, $offsetLeft_within$$2$$ = $offsetLeft_within$$2$$.isWindow ? $offsetLeft_within$$2$$.scrollLeft : $offsetLeft_within$$2$$.offset.left, $collisionPosLeft$$1_overRight$$1$$ = $position$$21$$.left - $data$$146$$.collisionPosition.marginLeft, $overLeft$$1$$ = $collisionPosLeft$$1_overRight$$1$$ - $offsetLeft_within$$2$$, 
    $collisionPosLeft$$1_overRight$$1$$ = $collisionPosLeft$$1_overRight$$1$$ + $data$$146$$.collisionWidth - $outerWidth$$1$$ - $offsetLeft_within$$2$$, $myOffset$$ = "left" === $data$$146$$.my[0] ? -$data$$146$$.elemWidth : "right" === $data$$146$$.my[0] ? $data$$146$$.elemWidth : 0, $atOffset$$ = "left" === $data$$146$$.at[0] ? $data$$146$$.targetWidth : "right" === $data$$146$$.at[0] ? -$data$$146$$.targetWidth : 0, $offset$$26$$ = -2 * $data$$146$$.offset[0], $newOverRight$$, $newOverLeft$$;
    if (0 > $overLeft$$1$$ && Math.abs($newOverRight$$) < Math.abs($newOverLeft$$)) {
      if ($newOverRight$$ = $position$$21$$.left + $myOffset$$ + $atOffset$$ + $offset$$26$$ + $data$$146$$.collisionWidth - $outerWidth$$1$$ - $withinOffset$$2$$, 0 > $newOverRight$$ || $newOverRight$$ < Math.abs($overLeft$$1$$)) {
        $position$$21$$.left += $myOffset$$ + $atOffset$$ + $offset$$26$$;
      }
    } else {
      0 < $collisionPosLeft$$1_overRight$$1$$ && ($newOverLeft$$ = $position$$21$$.left - $data$$146$$.collisionPosition.marginLeft + $myOffset$$ + $atOffset$$ + $offset$$26$$ - $offsetLeft_within$$2$$, 0 < $newOverLeft$$ || Math.abs($newOverLeft$$) < $collisionPosLeft$$1_overRight$$1$$) && ($position$$21$$.left += $myOffset$$ + $atOffset$$ + $offset$$26$$);
    }
  }, top:function $$$$$26$$$ui$position$flip$top$($position$$22$$, $data$$147$$) {
    var $overTop$$1_within$$3$$ = $data$$147$$.within, $newOverBottom_newOverTop_withinOffset$$3$$ = $overTop$$1_within$$3$$.offset.top + $overTop$$1_within$$3$$.scrollTop, $outerHeight$$1$$ = $overTop$$1_within$$3$$.height, $offsetTop$$ = $overTop$$1_within$$3$$.isWindow ? $overTop$$1_within$$3$$.scrollTop : $overTop$$1_within$$3$$.offset.top, $collisionPosTop$$1_overBottom$$1$$ = $position$$22$$.top - $data$$147$$.collisionPosition.marginTop, $overTop$$1_within$$3$$ = $collisionPosTop$$1_overBottom$$1$$ - 
    $offsetTop$$, $collisionPosTop$$1_overBottom$$1$$ = $collisionPosTop$$1_overBottom$$1$$ + $data$$147$$.collisionHeight - $outerHeight$$1$$ - $offsetTop$$, $myOffset$$1$$ = "top" === $data$$147$$.my[1] ? -$data$$147$$.elemHeight : "bottom" === $data$$147$$.my[1] ? $data$$147$$.elemHeight : 0, $atOffset$$1$$ = "top" === $data$$147$$.at[1] ? $data$$147$$.targetHeight : "bottom" === $data$$147$$.at[1] ? -$data$$147$$.targetHeight : 0, $offset$$27$$ = -2 * $data$$147$$.offset[1];
    0 > $overTop$$1_within$$3$$ ? ($newOverBottom_newOverTop_withinOffset$$3$$ = $position$$22$$.top + $myOffset$$1$$ + $atOffset$$1$$ + $offset$$27$$ + $data$$147$$.collisionHeight - $outerHeight$$1$$ - $newOverBottom_newOverTop_withinOffset$$3$$, (0 > $newOverBottom_newOverTop_withinOffset$$3$$ || $newOverBottom_newOverTop_withinOffset$$3$$ < Math.abs($overTop$$1_within$$3$$)) && 0 > $collisionPosTop$$1_overBottom$$1$$ && $overTop$$1_within$$3$$ > $collisionPosTop$$1_overBottom$$1$$ && ($position$$22$$.top += 
    $myOffset$$1$$ + $atOffset$$1$$ + $offset$$27$$)) : 0 < $collisionPosTop$$1_overBottom$$1$$ && ($newOverBottom_newOverTop_withinOffset$$3$$ = $position$$22$$.top - $data$$147$$.collisionPosition.marginTop + $myOffset$$1$$ + $atOffset$$1$$ + $offset$$27$$ - $offsetTop$$, 0 < $newOverBottom_newOverTop_withinOffset$$3$$ || Math.abs($newOverBottom_newOverTop_withinOffset$$3$$) < $collisionPosTop$$1_overBottom$$1$$) && ($position$$22$$.top += $myOffset$$1$$ + $atOffset$$1$$ + $offset$$27$$);
  }};
  $oj$$29$$.$PopupService$ = function $$oj$$29$$$$PopupService$$() {
    this.Init();
  };
  $oj$$29$$.$Object$.$createSubclass$($oj$$29$$.$PopupService$, $oj$$29$$.$Object$, "oj.PopupService");
  $oj$$29$$.$PopupService$.prototype.Init = function $$oj$$29$$$$PopupService$$$Init$() {
    $oj$$29$$.$PopupService$.$superclass$.Init.call(this);
  };
  $oj$$29$$.$PopupService$.$getInstance$ = function $$oj$$29$$$$PopupService$$$getInstance$$() {
    $oj$$29$$.$PopupService$.$_popupService$ || ($oj$$29$$.$PopupService$.$_popupService$ = new $oj$$29$$.$PopupServiceImpl$);
    return $oj$$29$$.$PopupService$.$_popupService$;
  };
  $oj$$29$$.$PopupService$.prototype.open = function $$oj$$29$$$$PopupService$$$open$() {
    $oj$$29$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$29$$.$PopupService$.prototype.close = function $$oj$$29$$$$PopupService$$$close$() {
    $oj$$29$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$29$$.$PopupService$.prototype.$changeOptions$ = function $$oj$$29$$$$PopupService$$$$changeOptions$$() {
    $oj$$29$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$29$$.$PopupService$.prototype.$triggerOnDescendents$ = function $$oj$$29$$$$PopupService$$$$triggerOnDescendents$$() {
    $oj$$29$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$29$$.$PopupService$.prototype.destroy = function $$oj$$29$$$$PopupService$$$destroy$() {
    delete $oj$$29$$.$PopupService$.$_popupService$;
  };
  $oj$$29$$.$PopupService$.$MODALITY$ = {NONE:"none", $MODAL$:"modal", $MODELESS$:"modeless"};
  $oj$$29$$.$PopupService$.$EVENT$ = {$POPUP_REMOVE$:"ojPopupRemove", $POPUP_CLOSE$:"ojPopupClose", $POPUP_REFRESH$:"ojPopupRefresh", $POPUP_AUTODISMISS$:"ojPopupAutoDismiss"};
  $oj$$29$$.$PopupService$.$LAYER_LEVEL$ = {$TOP_LEVEL$:"topLevel", $NEAREST_ANCESTOR$:"nearestAncestor"};
  $oj$$29$$.$PopupService$.$OPTION$ = {$POPUP$:"popup", $EVENTS$:"events", $MODALITY$:"modality", $LAUNCHER$:"launcher", $POSITION$:"position", $LAYER_SELECTORS$:"layerSelectors", $LAYER_LEVEL$:"layerLevel"};
  $oj$$29$$.$PopupServiceImpl$ = function $$oj$$29$$$$PopupServiceImpl$$() {
    this.Init();
  };
  $oj$$29$$.$Object$.$createSubclass$($oj$$29$$.$PopupServiceImpl$, $oj$$29$$.$PopupService$, "oj.PopupServiceImpl");
  $oj$$29$$.$PopupServiceImpl$.prototype.open = function $$oj$$29$$$$PopupServiceImpl$$$open$($layerLevel_options$$331$$) {
    $oj$$29$$.$Assert$.$assertObject$($layerLevel_options$$331$$);
    var $popup$$4$$ = $layerLevel_options$$331$$[$oj$$29$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$29$$.$Assert$.$assertPrototype$($popup$$4$$, jQuery);
    var $launcher$$10$$ = $layerLevel_options$$331$$[$oj$$29$$.$PopupService$.$OPTION$.$LAUNCHER$];
    $oj$$29$$.$Assert$.$assertPrototype$($launcher$$10$$, jQuery);
    var $position$$23$$ = $layerLevel_options$$331$$[$oj$$29$$.$PopupService$.$OPTION$.$POSITION$];
    $oj$$29$$.$Assert$.$assertObjectOrNull$($position$$23$$);
    var $events$$2$$ = $layerLevel_options$$331$$[$oj$$29$$.$PopupService$.$OPTION$.$EVENTS$];
    $oj$$29$$.$Assert$.$assertObject$($events$$2$$);
    var $modality$$ = $layerLevel_options$$331$$[$oj$$29$$.$PopupService$.$OPTION$.$MODALITY$];
    if (!$modality$$ || $oj$$29$$.$PopupService$.$MODALITY$.$MODELESS$ !== $modality$$ && $oj$$29$$.$PopupService$.$MODALITY$.$MODAL$ !== $modality$$) {
      $modality$$ = $oj$$29$$.$PopupService$.$MODALITY$.NONE;
    }
    var $layerClass$$ = $layerLevel_options$$331$$[$oj$$29$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$];
    $oj$$29$$.$Assert$.$assertString$($layerClass$$);
    $layerLevel_options$$331$$ = $layerLevel_options$$331$$[$oj$$29$$.$PopupService$.$OPTION$.$LAYER_LEVEL$];
    if (!$layerLevel_options$$331$$ || $oj$$29$$.$PopupService$.$LAYER_LEVEL$.$TOP_LEVEL$ !== $layerLevel_options$$331$$ && $oj$$29$$.$PopupService$.$LAYER_LEVEL$.$NEAREST_ANCESTOR$ !== $layerLevel_options$$331$$) {
      $layerLevel_options$$331$$ = $oj$$29$$.$PopupService$.$LAYER_LEVEL$.$NEAREST_ANCESTOR$;
    }
    $oj$$29$$.$DomUtils$.$setLogicalParent$($popup$$4$$, $launcher$$10$$);
    $oj$$29$$.$ZOrderUtils$.$addToAncestorLayer$($popup$$4$$, $launcher$$10$$, $events$$2$$, $modality$$, $layerClass$$, $layerLevel_options$$331$$);
    $popup$$4$$.show();
    $popup$$4$$.removeAttr("aria-hidden");
    $position$$23$$ && $popup$$4$$.position($position$$23$$);
    this.$_assertEventSink$();
    $oj$$29$$.Components.$subtreeShown$($popup$$4$$[0]);
  };
  $oj$$29$$.$PopupServiceImpl$.prototype.close = function $$oj$$29$$$$PopupServiceImpl$$$close$($options$$332_popup$$5$$) {
    $oj$$29$$.$Assert$.$assertObject$($options$$332_popup$$5$$);
    $options$$332_popup$$5$$ = $options$$332_popup$$5$$[$oj$$29$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$29$$.$Assert$.$assertPrototype$($options$$332_popup$$5$$, jQuery);
    $oj$$29$$.$ZOrderUtils$.$removeFromAncestorLayer$($options$$332_popup$$5$$);
    $options$$332_popup$$5$$.hide();
    $options$$332_popup$$5$$.attr("aria-hidden", "true");
    $options$$332_popup$$5$$.css({top:"auto", bottom:"auto", left:"auto", right:"auto"});
    $oj$$29$$.$DomUtils$.$setLogicalParent$($options$$332_popup$$5$$, null);
    this.$_assertEventSink$();
    $oj$$29$$.Components.$subtreeHidden$($options$$332_popup$$5$$[0]);
  };
  $oj$$29$$.$PopupServiceImpl$.prototype.$changeOptions$ = function $$oj$$29$$$$PopupServiceImpl$$$$changeOptions$$($layerClass$$1_options$$333$$) {
    $oj$$29$$.$Assert$.$assertObject$($layerClass$$1_options$$333$$);
    var $layer_popup$$6$$ = $layerClass$$1_options$$333$$[$oj$$29$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$29$$.$Assert$.$assertPrototype$($layer_popup$$6$$, jQuery);
    $layer_popup$$6$$ = $oj$$29$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer_popup$$6$$);
    $oj$$29$$.$Assert$.$assertPrototype$($layer_popup$$6$$, jQuery);
    var $events$$3_modality$$1$$ = $layerClass$$1_options$$333$$[$oj$$29$$.$PopupService$.$OPTION$.$EVENTS$];
    $events$$3_modality$$1$$ && $oj$$29$$.$ZOrderUtils$.$applyEvents$($layer_popup$$6$$, $events$$3_modality$$1$$);
    ($events$$3_modality$$1$$ = $layerClass$$1_options$$333$$[$oj$$29$$.$PopupService$.$OPTION$.$MODALITY$]) && $oj$$29$$.$ZOrderUtils$.$applyModality$($layer_popup$$6$$, $events$$3_modality$$1$$);
    $layerClass$$1_options$$333$$ = $layerClass$$1_options$$333$$[$oj$$29$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$];
    $oj$$29$$.$StringUtils$.$isEmptyOrUndefined$($layerClass$$1_options$$333$$) || $layer_popup$$6$$.attr("class", $layerClass$$1_options$$333$$);
  };
  $oj$$29$$.$PopupServiceImpl$.prototype.$triggerOnDescendents$ = function $$oj$$29$$$$PopupServiceImpl$$$$triggerOnDescendents$$($layer$$1_popup$$7$$, $event$$522$$, $argsArray$$1$$) {
    var $context$$122$$ = {};
    $context$$122$$.event = $event$$522$$;
    $context$$122$$.argsArray = $argsArray$$1$$;
    $layer$$1_popup$$7$$ = $oj$$29$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$1_popup$$7$$);
    $oj$$29$$.$ZOrderUtils$.$postOrderVisit$($layer$$1_popup$$7$$, this.$_triggerOnDescendentsVisitCallback$, $context$$122$$);
  };
  $oj$$29$$.$PopupServiceImpl$.prototype.$_triggerOnDescendentsVisitCallback$ = function $$oj$$29$$$$PopupServiceImpl$$$$_triggerOnDescendentsVisitCallback$$($layer$$2$$, $context$$123$$) {
    var $event$$523$$ = $context$$123$$.event, $argsArray$$2$$ = $context$$123$$.argsArray, $events$$4$$ = $oj$$29$$.$ZOrderUtils$.$getEvents$($layer$$2$$);
    $events$$4$$ && $$$$26$$.isFunction($events$$4$$[$event$$523$$]) && $events$$4$$[$event$$523$$].apply(this, $argsArray$$2$$);
    return $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$29$$.$PopupServiceImpl$.prototype.$_assertEventSink$ = function $$oj$$29$$$$PopupServiceImpl$$$$_assertEventSink$$() {
    var $docElement_hasPopupsOpen$$ = $oj$$29$$.$ZOrderUtils$.$hasPopupsOpen$(), $callbackEventFilter_simpleTapRecognizer$$ = this.$_callbackEventFilter$;
    if (!$docElement_hasPopupsOpen$$ && $callbackEventFilter_simpleTapRecognizer$$) {
      window.removeEventListener("resize", $oj$$29$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      window.removeEventListener("scroll", $oj$$29$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      $docElement_hasPopupsOpen$$ = document.documentElement;
      $docElement_hasPopupsOpen$$.removeEventListener("mousewheel", $oj$$29$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      $docElement_hasPopupsOpen$$.removeEventListener("DOMMouseScroll", $oj$$29$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      delete this.$_callbackEventFilter$;
      for (var $i$$386$$ = 0;$i$$386$$ < $oj$$29$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$.length;$i$$386$$++) {
        var $event$$524$$ = $oj$$29$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$[$i$$386$$];
        $docElement_hasPopupsOpen$$.removeEventListener($event$$524$$, $callbackEventFilter_simpleTapRecognizer$$, !0);
      }
      if ($callbackEventFilter_simpleTapRecognizer$$ = this.$_simpleTapRecognizer$) {
        $callbackEventFilter_simpleTapRecognizer$$.destroy(), delete this.$_simpleTapRecognizer$;
      }
    } else {
      if ($docElement_hasPopupsOpen$$ && !$callbackEventFilter_simpleTapRecognizer$$) {
        window.addEventListener("resize", $oj$$29$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        window.addEventListener("scroll", $oj$$29$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $docElement_hasPopupsOpen$$ = document.documentElement;
        $docElement_hasPopupsOpen$$.addEventListener("mousewheel", $oj$$29$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $docElement_hasPopupsOpen$$.addEventListener("DOMMouseScroll", $oj$$29$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $callbackEventFilter_simpleTapRecognizer$$ = this.$_callbackEventFilter$ = $$$$26$$.proxy(this.$_eventFilterCallback$, this);
        for ($i$$386$$ = 0;$i$$386$$ < $oj$$29$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$.length;$i$$386$$++) {
          $event$$524$$ = $oj$$29$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$[$i$$386$$], $docElement_hasPopupsOpen$$.addEventListener($event$$524$$, $callbackEventFilter_simpleTapRecognizer$$, !0);
        }
        $oj$$29$$.$DomUtils$.$isTouchSupported$() && (this.$_simpleTapRecognizer$ = new $oj$$29$$.$SimpleTapRecognizer$($callbackEventFilter_simpleTapRecognizer$$));
      }
    }
  };
  $oj$$29$$.$PopupServiceImpl$.prototype.$_eventFilterCallback$ = function $$oj$$29$$$$PopupServiceImpl$$$$_eventFilterCallback$$($event$$525$$) {
    var $context$$124_target$$126$$ = $$$$26$$($event$$525$$.target);
    if (!$oj$$29$$.$ZOrderUtils$.$hasPopupsOpen$()) {
      this.$_assertEventSink$();
    } else {
      if (!$oj$$29$$.$DomUtils$.$isChromeEvent$($event$$525$$) && ("focus" !== $event$$525$$.type || $context$$124_target$$126$$.is(":focusable"))) {
        var $defaultLayer$$ = $oj$$29$$.$ZOrderUtils$.$getDefaultLayer$();
        if ("keydown" === $event$$525$$.type && $oj$$29$$.$ZOrderUtils$.$hasModalDialogOpen$() && !$oj$$29$$.$DomUtils$.$isAncestor$($defaultLayer$$[0], $context$$124_target$$126$$[0])) {
          $oj$$29$$.$ZOrderUtils$.$eatEvent$($$$$26$$.Event($event$$525$$));
        } else {
          var $props$$17_targetWitinLayer$$ = $oj$$29$$.$ZOrderUtils$.$getFirstAncestorLayer$($context$$124_target$$126$$);
          if ($defaultLayer$$[0] !== $props$$17_targetWitinLayer$$[0]) {
            if (!$props$$17_targetWitinLayer$$.hasClass($oj$$29$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$)) {
              var $lastFocusLayer$$ = this.$_lastFocusLayer$;
              $lastFocusLayer$$ && $lastFocusLayer$$.removeClass($oj$$29$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$);
              $props$$17_targetWitinLayer$$.addClass($oj$$29$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$);
              this.$_lastFocusLayer$ = $props$$17_targetWitinLayer$$;
            }
          } else {
            if ($lastFocusLayer$$ = this.$_lastFocusLayer$) {
              $lastFocusLayer$$.removeClass($oj$$29$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$), delete this.$_lastFocusLayer$;
            }
          }
          if ("focus" !== $event$$525$$.type || "-1" !== $context$$124_target$$126$$.attr("tabindex")) {
            var $context$$124_target$$126$$ = {}, $props$$17_targetWitinLayer$$ = {}, $key$$157$$;
            for ($key$$157$$ in $event$$525$$) {
              $oj$$29$$.$PopupServiceImpl$.$_COPY_SAFE_EVENT_PROPERTIES$[$key$$157$$] && !$$$$26$$.isFunction($event$$525$$[$key$$157$$]) && ($props$$17_targetWitinLayer$$[$key$$157$$] = $event$$525$$[$key$$157$$]);
            }
            $context$$124_target$$126$$.event = $$$$26$$.Event($event$$525$$, $props$$17_targetWitinLayer$$);
            $oj$$29$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$, $oj$$29$$.$PopupServiceImpl$.$_redistributeVisitCallback$, $context$$124_target$$126$$);
          }
        }
      }
    }
  };
  $oj$$29$$.$PopupServiceImpl$.$_redistributeVisitCallback$ = function $$oj$$29$$$$PopupServiceImpl$$$_redistributeVisitCallback$$($layer$$3$$, $context$$125$$) {
    var $events$$5$$ = $oj$$29$$.$ZOrderUtils$.$getEvents$($layer$$3$$), $event$$526$$ = $context$$125$$.event;
    if ($events$$5$$ && $$$$26$$.isFunction($events$$5$$[$oj$$29$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$])) {
      $events$$5$$[$oj$$29$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$]($event$$526$$);
    }
    return $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$29$$.$PopupServiceImpl$.$_refreshCallback$ = function $$oj$$29$$$$PopupServiceImpl$$$_refreshCallback$$() {
    isNaN($oj$$29$$.$PopupServiceImpl$.$_refreshTimerId$) && ($oj$$29$$.$PopupServiceImpl$.$_refreshTimerId$ = window.setTimeout(function() {
      delete $oj$$29$$.$PopupServiceImpl$.$_refreshTimerId$;
      var $defaultLayer$$1$$ = $oj$$29$$.$ZOrderUtils$.$getDefaultLayer$();
      $$$$26$$.isFunction(window.requestAnimationFrame) ? $oj$$29$$.$PopupServiceImpl$.$_afRequestId$ = window.requestAnimationFrame(function() {
        delete $oj$$29$$.$PopupServiceImpl$.$_afRequestId$;
        $oj$$29$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$1$$, $oj$$29$$.$PopupServiceImpl$.$_refreshVisitCallback$);
      }) : $oj$$29$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$1$$, $oj$$29$$.$PopupServiceImpl$.$_refreshVisitCallback$);
    }, $oj$$29$$.$PopupServiceImpl$.$_REFRESH_DELAY$));
  };
  $oj$$29$$.$PopupServiceImpl$.$_refreshVisitCallback$ = function $$oj$$29$$$$PopupServiceImpl$$$_refreshVisitCallback$$($layer$$4$$, $context$$126$$) {
    if (0 < $context$$126$$.level) {
      return $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$;
    }
    var $events$$6$$ = $oj$$29$$.$ZOrderUtils$.$getEvents$($layer$$4$$);
    if ($events$$6$$ && $$$$26$$.isFunction($events$$6$$[$oj$$29$$.$PopupService$.$EVENT$.$POPUP_REFRESH$])) {
      $events$$6$$[$oj$$29$$.$PopupService$.$EVENT$.$POPUP_REFRESH$]();
    }
    return $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$29$$.$PopupServiceImpl$.prototype.destroy = function $$oj$$29$$$$PopupServiceImpl$$$destroy$() {
    $oj$$29$$.$PopupServiceImpl$.$superclass$.destroy.call(this);
  };
  $oj$$29$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$ = "oj-focus-within";
  $oj$$29$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$ = ["focus", "mousedown", "keydown"];
  $oj$$29$$.$PopupServiceImpl$.$_COPY_SAFE_EVENT_PROPERTIES$ = {altKey:!0, bubbles:!0, cancelable:!0, ctrlKey:!0, currentTarget:!0, eventPhase:!0, metaKey:!0, relatedTarget:!0, shiftKey:!0, target:!0, timeStamp:!0, view:!0, which:!0, button:!0, buttons:!0, clientX:!0, clientY:!0, offsetX:!0, offsetY:!0, pageX:!0, pageY:!0, screenX:!0, screenY:!0, toElement:!0, "char":!0, charCode:!0, key:!0, keyCode:!0};
  $oj$$29$$.$PopupServiceImpl$.$_REFRESH_DELAY$ = 10;
  $oj$$29$$.$ZOrderUtils$ = {};
  $oj$$29$$.$ZOrderUtils$.$getFirstAncestorLayer$ = function $$oj$$29$$$$ZOrderUtils$$$getFirstAncestorLayer$$($launcher$$11_parent$$36$$) {
    if (!$launcher$$11_parent$$36$$) {
      return $oj$$29$$.$ZOrderUtils$.$getDefaultLayer$();
    }
    for (;$launcher$$11_parent$$36$$ && 0 < $launcher$$11_parent$$36$$.length && $launcher$$11_parent$$36$$.attr("oj.ZOrderUtils._SURROGATE_ATTR") !== $oj$$29$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$;) {
      if ($oj$$29$$.$ZOrderUtils$.$_hasSurrogate$($launcher$$11_parent$$36$$[0])) {
        return $launcher$$11_parent$$36$$;
      }
      $launcher$$11_parent$$36$$ = $launcher$$11_parent$$36$$.parent();
    }
    return $oj$$29$$.$ZOrderUtils$.$getDefaultLayer$();
  };
  $oj$$29$$.$ZOrderUtils$.$getDefaultLayer$ = function $$oj$$29$$$$ZOrderUtils$$$getDefaultLayer$$() {
    var $defaultLayer$$2$$ = $$$$26$$(document.getElementById($oj$$29$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$));
    if (0 < $defaultLayer$$2$$.length) {
      return $defaultLayer$$2$$;
    }
    $defaultLayer$$2$$ = $$$$26$$("\x3cdiv\x3e");
    $defaultLayer$$2$$.attr("role", "presentation");
    $defaultLayer$$2$$.attr("id", $oj$$29$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$);
    $defaultLayer$$2$$.prependTo($$$$26$$(document.body));
    return $defaultLayer$$2$$;
  };
  $oj$$29$$.$ZOrderUtils$.$addToAncestorLayer$ = function $$oj$$29$$$$ZOrderUtils$$$addToAncestorLayer$$($popup$$8$$, $ancestorLayer_launcher$$12$$, $events$$7$$, $modality$$2$$, $layerClass$$2_surrogate$$, $layer$$5_layerLevel$$1$$) {
    var $popupDom$$ = $popup$$8$$[0];
    if ($oj$$29$$.$ZOrderUtils$.$_hasSurrogate$($popupDom$$.parentNode)) {
      throw Error("JET Popup is already open - id: " + $popupDom$$.getAttribute("id"));
    }
    $ancestorLayer_launcher$$12$$ = $oj$$29$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$5_layerLevel$$1$$ === $oj$$29$$.$PopupService$.$LAYER_LEVEL$.$TOP_LEVEL$ ? null : $ancestorLayer_launcher$$12$$);
    $layer$$5_layerLevel$$1$$ = $$$$26$$("\x3cdiv\x3e");
    var $popupId$$ = $popup$$8$$.attr("id");
    $oj$$29$$.$StringUtils$.$isEmptyOrUndefined$($popupId$$) ? $layer$$5_layerLevel$$1$$.uniqueId() : $layer$$5_layerLevel$$1$$.attr("id", [$popupId$$, "layer"].join("_"));
    $layer$$5_layerLevel$$1$$.attr("role", "presentation");
    $layer$$5_layerLevel$$1$$.addClass($layerClass$$2_surrogate$$);
    $popup$$8$$.after($layer$$5_layerLevel$$1$$);
    $layerClass$$2_surrogate$$ = $oj$$29$$.$ZOrderUtils$.$_createSurrogate$($layer$$5_layerLevel$$1$$);
    $oj$$29$$.Components.$subtreeDetached$($popupDom$$);
    $popup$$8$$.appendTo($layer$$5_layerLevel$$1$$);
    $layer$$5_layerLevel$$1$$.appendTo($ancestorLayer_launcher$$12$$);
    $oj$$29$$.Components.$subtreeAttached$($popupDom$$);
    $oj$$29$$.$ZOrderUtils$.$applyModality$($layer$$5_layerLevel$$1$$, $modality$$2$$);
    $oj$$29$$.$ZOrderUtils$.$applyEvents$($layer$$5_layerLevel$$1$$, $events$$7$$, $layerClass$$2_surrogate$$);
  };
  $oj$$29$$.$ZOrderUtils$.$applyEvents$ = function $$oj$$29$$$$ZOrderUtils$$$applyEvents$$($layer$$6$$, $events$$8$$, $surrogate$$1$$) {
    if (!$surrogate$$1$$) {
      var $surrogateId$$ = $layer$$6$$.attr($oj$$29$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
      $surrogateId$$ && ($surrogate$$1$$ = $$$$26$$(document.getElementById($surrogateId$$)));
    }
    $layer$$6$$.data($oj$$29$$.$ZOrderUtils$.$_EVENTS_DATA$, $events$$8$$);
    $surrogate$$1$$ && $events$$8$$ && $$$$26$$.isFunction($events$$8$$[$oj$$29$$.$PopupService$.$EVENT$.$POPUP_REMOVE$]) && ($surrogate$$1$$.surrogate(), $surrogate$$1$$.surrogate("option", "beforeDestroy", $events$$8$$[$oj$$29$$.$PopupService$.$EVENT$.$POPUP_REMOVE$]));
  };
  $oj$$29$$.$ZOrderUtils$.$getEvents$ = function $$oj$$29$$$$ZOrderUtils$$$getEvents$$($layer$$7$$) {
    return $layer$$7$$.data($oj$$29$$.$ZOrderUtils$.$_EVENTS_DATA$);
  };
  $oj$$29$$.$ZOrderUtils$.$_createSurrogate$ = function $$oj$$29$$$$ZOrderUtils$$$_createSurrogate$$($layer$$8$$) {
    var $surrogate$$2$$ = $$$$26$$("\x3cscript\x3e"), $layerId_surrogateId$$1$$ = $layer$$8$$.attr("id");
    $oj$$29$$.$StringUtils$.$isEmptyOrUndefined$($layerId_surrogateId$$1$$) ? $surrogate$$2$$.uniqueId() : $surrogate$$2$$.attr("id", [$layerId_surrogateId$$1$$, "surrogate"].join("_"));
    $surrogate$$2$$.insertBefore($layer$$8$$);
    $layerId_surrogateId$$1$$ = $surrogate$$2$$.attr("id");
    $layer$$8$$.attr($oj$$29$$.$ZOrderUtils$.$_SURROGATE_ATTR$, $layerId_surrogateId$$1$$);
    return $surrogate$$2$$;
  };
  $oj$$29$$.$ZOrderUtils$.$_removeSurrogate$ = function $$oj$$29$$$$ZOrderUtils$$$_removeSurrogate$$($layer$$9$$) {
    var $surrogate$$3_surrogateId$$2$$ = $layer$$9$$.attr($oj$$29$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
    $layer$$9$$.removeAttr($oj$$29$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
    $surrogate$$3_surrogateId$$2$$ = $$$$26$$(document.getElementById($surrogate$$3_surrogateId$$2$$));
    $layer$$9$$.insertAfter($surrogate$$3_surrogateId$$2$$);
    $surrogate$$3_surrogateId$$2$$.surrogate("option", "beforeDestroy", null);
    $surrogate$$3_surrogateId$$2$$.remove();
  };
  $oj$$29$$.$ZOrderUtils$.$removeFromAncestorLayer$ = function $$oj$$29$$$$ZOrderUtils$$$removeFromAncestorLayer$$($popup$$9$$) {
    var $layer$$10$$ = $oj$$29$$.$ZOrderUtils$.$getFirstAncestorLayer$($popup$$9$$);
    $oj$$29$$.$ZOrderUtils$.$preOrderVisit$($layer$$10$$, $oj$$29$$.$ZOrderUtils$.$_closeDescendantPopupsCallback$);
    $oj$$29$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$10$$);
    $layer$$10$$.removeData($oj$$29$$.$ZOrderUtils$.$_EVENTS_DATA$);
    $layer$$10$$.removeData($oj$$29$$.$ZOrderUtils$.$_MODALITY_DATA$);
    var $popupDom$$1$$ = $popup$$9$$[0];
    $oj$$29$$.Components.$subtreeDetached$($popupDom$$1$$);
    $oj$$29$$.$ZOrderUtils$.$_removeSurrogate$($layer$$10$$);
    $oj$$29$$.$DomUtils$.unwrap($popup$$9$$, $layer$$10$$);
    $oj$$29$$.Components.$subtreeAttached$($popupDom$$1$$);
  };
  $oj$$29$$.$ZOrderUtils$.$_closeDescendantPopupsCallback$ = function $$oj$$29$$$$ZOrderUtils$$$_closeDescendantPopupsCallback$$($layer$$11$$, $context$$127$$) {
    if (0 < $context$$127$$.level) {
      return $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$;
    }
    var $events$$10$$ = $layer$$11$$.data($oj$$29$$.$ZOrderUtils$.$_EVENTS_DATA$);
    if ($events$$10$$ && $$$$26$$.isFunction($events$$10$$[$oj$$29$$.$PopupService$.$EVENT$.$POPUP_CLOSE$])) {
      $events$$10$$[$oj$$29$$.$PopupService$.$EVENT$.$POPUP_CLOSE$]();
    }
    return $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$29$$.$ZOrderUtils$.$applyModality$ = function $$oj$$29$$$$ZOrderUtils$$$applyModality$$($layer$$12$$, $modality$$3$$) {
    var $currModality$$ = $layer$$12$$.data($oj$$29$$.$ZOrderUtils$.$_MODALITY_DATA$);
    $layer$$12$$.data($oj$$29$$.$ZOrderUtils$.$_MODALITY_DATA$, $modality$$3$$);
    $oj$$29$$.$StringUtils$.$isEmptyOrUndefined$($currModality$$) ? $oj$$29$$.$PopupService$.$MODALITY$.$MODAL$ === $modality$$3$$ ? $oj$$29$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$($layer$$12$$) : $oj$$29$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$12$$) : $currModality$$ !== $modality$$3$$ && ($modality$$3$$ !== $currModality$$ && $modality$$3$$ === $oj$$29$$.$PopupService$.$MODALITY$.$MODAL$ ? $oj$$29$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$($layer$$12$$) : $oj$$29$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$12$$));
  };
  $oj$$29$$.$ZOrderUtils$.$hasModalDialogOpen$ = function $$oj$$29$$$$ZOrderUtils$$$hasModalDialogOpen$$() {
    for (var $children$$9$$ = $oj$$29$$.$ZOrderUtils$.$getDefaultLayer$().children(), $i$$387$$ = $children$$9$$.length - 1;-1 < $i$$387$$;$i$$387$$--) {
      if ($$$$26$$($children$$9$$[$i$$387$$]).hasClass($oj$$29$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$)) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$29$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$ = function $$oj$$29$$$$ZOrderUtils$$$_addOverlayToAncestorLayer$$($layer$$13$$) {
    var $overlay_overlayId$$ = $$$$26$$("\x3cdiv\x3e");
    $overlay_overlayId$$.addClass($oj$$29$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$);
    $overlay_overlayId$$.addClass($layer$$13$$[0].className);
    $overlay_overlayId$$.attr("role", "presentation");
    var $layerId$$1$$ = $layer$$13$$.attr("id");
    $oj$$29$$.$StringUtils$.$isEmptyOrUndefined$($layerId$$1$$) ? $overlay_overlayId$$.uniqueId() : $overlay_overlayId$$.attr("id", [$layerId$$1$$, "overlay"].join("_"));
    $layer$$13$$.before($overlay_overlayId$$);
    $overlay_overlayId$$ = $overlay_overlayId$$.attr("id");
    $layer$$13$$.attr($oj$$29$$.$ZOrderUtils$.$_OVERLAY_ATTR$, $overlay_overlayId$$);
  };
  $oj$$29$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$ = function $$oj$$29$$$$ZOrderUtils$$$_removeOverlayFromAncestorLayer$$($layer$$14$$) {
    var $overlayId$$1$$ = $layer$$14$$.attr($oj$$29$$.$ZOrderUtils$.$_OVERLAY_ATTR$);
    $oj$$29$$.$StringUtils$.$isEmptyOrUndefined$($overlayId$$1$$) || ($layer$$14$$.removeAttr($oj$$29$$.$ZOrderUtils$.$_OVERLAY_ATTR$), $$$$26$$(document.getElementById($overlayId$$1$$)).remove());
  };
  $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$ = {$ACCEPT$:0, $REJECT$:1, $COMPLETE$:2};
  $oj$$29$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$ = {$PRE_ORDER$:0, $POST_ORDER$:1};
  $oj$$29$$.$ZOrderUtils$.$postOrderVisit$ = function $$oj$$29$$$$ZOrderUtils$$$postOrderVisit$$($layer$$15$$, $callback$$116$$, $context$$128$$) {
    $context$$128$$ || ($context$$128$$ = {});
    $context$$128$$.level = 0;
    $context$$128$$.type = $oj$$29$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$POST_ORDER$;
    $oj$$29$$.$ZOrderUtils$.$_visitTree$($layer$$15$$, $callback$$116$$, $context$$128$$);
  };
  $oj$$29$$.$ZOrderUtils$.$preOrderVisit$ = function $$oj$$29$$$$ZOrderUtils$$$preOrderVisit$$($layer$$16$$, $callback$$117$$, $context$$129$$) {
    $context$$129$$ || ($context$$129$$ = {});
    $context$$129$$.level = 0;
    $context$$129$$.type = $oj$$29$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$PRE_ORDER$;
    $oj$$29$$.$ZOrderUtils$.$_visitTree$($layer$$16$$, $callback$$117$$, $context$$129$$);
  };
  $oj$$29$$.$ZOrderUtils$.$_visitTree$ = function $$oj$$29$$$$ZOrderUtils$$$_visitTree$$($children$$10_layer$$17$$, $callback$$118$$, $context$$130$$) {
    var $level$$52$$ = $context$$130$$.level;
    $children$$10_layer$$17$$ = $children$$10_layer$$17$$.children();
    for (var $i$$388$$ = $children$$10_layer$$17$$.length - 1;-1 < $i$$388$$;$i$$388$$--) {
      var $child$$10$$ = $$$$26$$($children$$10_layer$$17$$[$i$$388$$]);
      if ($oj$$29$$.$ZOrderUtils$.$_hasSurrogate$($child$$10$$[0])) {
        var $vrtn$$;
        if ($context$$130$$.type === $oj$$29$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$PRE_ORDER$) {
          $vrtn$$ = $callback$$118$$($child$$10$$, $context$$130$$);
          if ($vrtn$$ === $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
            return $vrtn$$;
          }
          if ($vrtn$$ === $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$) {
            break;
          }
        }
        $context$$130$$.level = $level$$52$$ + 1;
        $vrtn$$ = $oj$$29$$.$ZOrderUtils$.$_visitTree$($child$$10$$, $callback$$118$$, $context$$130$$);
        $context$$130$$.level = $level$$52$$;
        if ($vrtn$$ === $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
          return $vrtn$$;
        }
        if ($context$$130$$.type === $oj$$29$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$POST_ORDER$) {
          $vrtn$$ = $callback$$118$$($child$$10$$, $context$$130$$);
          if ($vrtn$$ === $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
            return $vrtn$$;
          }
          if ($vrtn$$ === $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$) {
            break;
          }
        }
      }
    }
    return $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$29$$.$ZOrderUtils$.$_hasSurrogate$ = function $$oj$$29$$$$ZOrderUtils$$$_hasSurrogate$$($element$$213$$) {
    return 1 === $element$$213$$.nodeType && $element$$213$$.hasAttribute($oj$$29$$.$ZOrderUtils$.$_SURROGATE_ATTR$) ? !0 : !1;
  };
  $oj$$29$$.$ZOrderUtils$.$hasPopupsOpen$ = function $$oj$$29$$$$ZOrderUtils$$$hasPopupsOpen$$() {
    return 0 < $oj$$29$$.$ZOrderUtils$.$getDefaultLayer$().children().length;
  };
  $oj$$29$$.$ZOrderUtils$.$getOpenPopupCount$ = function $$oj$$29$$$$ZOrderUtils$$$getOpenPopupCount$$() {
    var $context$$131$$ = {popupCount:0}, $defaultLayer$$5$$ = $oj$$29$$.$ZOrderUtils$.$getDefaultLayer$();
    $oj$$29$$.$ZOrderUtils$.$preOrderVisit$($defaultLayer$$5$$, $oj$$29$$.$ZOrderUtils$.$_openPopupCountCallback$, $context$$131$$);
    return $context$$131$$.popupCount;
  };
  $oj$$29$$.$ZOrderUtils$.$_openPopupCountCallback$ = function $$oj$$29$$$$ZOrderUtils$$$_openPopupCountCallback$$($layer$$18$$, $context$$132$$) {
    $context$$132$$.popupCount += 1;
    return $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$29$$.$ZOrderUtils$.$findOpenPopups$ = function $$oj$$29$$$$ZOrderUtils$$$findOpenPopups$$() {
    var $context$$133$$ = {}, $defaultLayer$$6_popups$$2$$ = [];
    $context$$133$$.popups = $defaultLayer$$6_popups$$2$$;
    $defaultLayer$$6_popups$$2$$ = $oj$$29$$.$ZOrderUtils$.$getDefaultLayer$();
    $oj$$29$$.$ZOrderUtils$.$preOrderVisit$($defaultLayer$$6_popups$$2$$, $oj$$29$$.$ZOrderUtils$.$_openPopupsCallback$, $context$$133$$);
    $defaultLayer$$6_popups$$2$$ = $context$$133$$.popups;
    return $$$$26$$($defaultLayer$$6_popups$$2$$);
  };
  $oj$$29$$.$ZOrderUtils$.$_openPopupsCallback$ = function $$oj$$29$$$$ZOrderUtils$$$_openPopupsCallback$$($layer$$19$$, $context$$134$$) {
    $context$$134$$.popups.push($layer$$19$$[0]);
    return $oj$$29$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$29$$.$ZOrderUtils$.$compareStackingContexts$ = function $$oj$$29$$$$ZOrderUtils$$$compareStackingContexts$$($el1$$1$$, $el2$$1$$) {
    function $describeStackingContext$$($element$$214$$, $allLevels$$) {
      for (var $positions$$ = ["absolute", "relative", "fixed"], $parents$$5$$ = $element$$214$$.parents(), $stack_tmp$$2$$ = [], $i$$390$$ = $parents$$5$$.length - 1;-1 < $i$$390$$;$i$$390$$--) {
        $stack_tmp$$2$$.push($$$$26$$($parents$$5$$[$i$$390$$]));
      }
      $parents$$5$$ = $stack_tmp$$2$$;
      $parents$$5$$.push($element$$214$$);
      for (var $stack_tmp$$2$$ = [], $level$$53$$ = 0, $i$$390$$ = 0;$i$$390$$ < $parents$$5$$.length;$i$$390$$++) {
        var $order_parent$$37$$ = $parents$$5$$[$i$$390$$], $position$$24$$ = $order_parent$$37$$.css("position"), $opacity$$2$$ = $oj$$29$$.$DomUtils$.$getCSSLengthAsFloat$($order_parent$$37$$.css("opacity")), $zindex$$ = $oj$$29$$.$DomUtils$.$getCSSLengthAsInt$($order_parent$$37$$.css("z-index")), $order_parent$$37$$ = $$$$26$$.inArray($order_parent$$37$$[0], $order_parent$$37$$.parent().children());
        -1 < $$$$26$$.inArray($position$$24$$, $positions$$) ? $stack_tmp$$2$$.push({weight:[$level$$53$$++, $zindex$$, $order_parent$$37$$], order:[$order_parent$$37$$]}) : 1 > $opacity$$2$$ ? $stack_tmp$$2$$.push({weight:[$level$$53$$++, 1, $order_parent$$37$$], order:[$order_parent$$37$$]}) : $allLevels$$ && $stack_tmp$$2$$.push({weight:[0, 0, $order_parent$$37$$], order:[$order_parent$$37$$]});
      }
      return $stack_tmp$$2$$;
    }
    function $compareSets$$($n1$$3$$, $n2$$3$$) {
      for (var $maxLen$$1$$ = Math.max($n1$$3$$.length, $n2$$3$$.length), $i$$391$$ = 0;$i$$391$$ < $maxLen$$1$$;$i$$391$$++) {
        var $e1$$1$$ = $i$$391$$ < $n1$$3$$.length ? $n1$$3$$[$i$$391$$] : -1, $e2$$1$$ = $i$$391$$ < $n2$$3$$.length ? $n2$$3$$[$i$$391$$] : -1;
        if ($e1$$1$$ !== $e2$$1$$) {
          return $e1$$1$$ < $e2$$1$$ ? -1 : 1;
        }
      }
      return 0;
    }
    $oj$$29$$.$Assert$.$assertPrototype$($el1$$1$$, jQuery);
    $oj$$29$$.$Assert$.$assertPrototype$($el2$$1$$, jQuery);
    for (var $n1$$2$$ = $describeStackingContext$$($el1$$1$$, !1), $n2$$2$$ = $describeStackingContext$$($el2$$1$$, !1), $maxLen$$ = Math.max($n1$$2$$.length, $n2$$2$$.length), $i$$389$$ = 0;$i$$389$$ < $maxLen$$;$i$$389$$++) {
      var $c$$50_e1$$ = $i$$389$$ < $n1$$2$$.length ? $n1$$2$$[$i$$389$$].weight : [-1], $e2$$ = $i$$389$$ < $n2$$2$$.length ? $n2$$2$$[$i$$389$$].weight : [-1], $c$$50_e1$$ = $compareSets$$($c$$50_e1$$, $e2$$);
      if (0 !== $c$$50_e1$$) {
        return $c$$50_e1$$;
      }
    }
    $n1$$2$$ = $describeStackingContext$$($el1$$1$$, !0);
    $n2$$2$$ = $describeStackingContext$$($el2$$1$$, !0);
    $maxLen$$ = Math.max($n1$$2$$.length, $n2$$2$$.length);
    for ($i$$389$$ = 0;$i$$389$$ < $maxLen$$;$i$$389$$++) {
      if ($c$$50_e1$$ = $i$$389$$ < $n1$$2$$.length ? $n1$$2$$[$i$$389$$].order : [-1], $e2$$ = $i$$389$$ < $n2$$2$$.length ? $n2$$2$$[$i$$389$$].order : [-1], $c$$50_e1$$ = $compareSets$$($c$$50_e1$$, $e2$$), 0 !== $c$$50_e1$$) {
        return $c$$50_e1$$;
      }
    }
    return 0;
  };
  $oj$$29$$.$ZOrderUtils$.$eatEvent$ = function $$oj$$29$$$$ZOrderUtils$$$eatEvent$$($event$$528$$) {
    $event$$528$$.stopPropagation();
    $event$$528$$.preventDefault();
  };
  $oj$$29$$.$ZOrderUtils$.$_EVENTS_DATA$ = "oj-popup-events";
  $oj$$29$$.$ZOrderUtils$.$_MODALITY_DATA$ = "oj-popup-modality";
  $oj$$29$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$ = "__oj_zorder_container";
  $oj$$29$$.$ZOrderUtils$.$_SURROGATE_ATTR$ = "data-oj-surrogate-id";
  $oj$$29$$.$ZOrderUtils$.$_OVERLAY_ATTR$ = "data-oj-overlayid";
  $oj$$29$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$ = "oj-component-overlay";
  $$$$26$$.widget("oj.surrogate", {options:{create:null, beforeDestroy:null}, _create:function() {
    this._super();
    this.element.uniqueId();
  }, _destroy:function() {
    this._trigger("beforeDestroy");
    this.element.removeUniqueId();
    this._super();
  }});
  $oj$$29$$.$SimpleTapRecognizer$ = function $$oj$$29$$$$SimpleTapRecognizer$$($tapCallback$$) {
    this.$_tapCallback$ = $tapCallback$$;
    this.Init();
  };
  $oj$$29$$.$Object$.$createSubclass$($oj$$29$$.$SimpleTapRecognizer$, $oj$$29$$.$Object$, "oj.SimpleTapRecognizer");
  $oj$$29$$.$SimpleTapRecognizer$.prototype.Init = function $$oj$$29$$$$SimpleTapRecognizer$$$Init$() {
    $oj$$29$$.$SimpleTapRecognizer$.$superclass$.Init.call(this);
    for (var $eventHandlerCallback$$ = this.$_eventHandlerCallback$ = $$$$26$$.proxy(this.$_eventHandler$, this), $docElement$$1$$ = document.documentElement, $i$$392$$ = 0;$i$$392$$ < $oj$$29$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$.length;$i$$392$$++) {
      $docElement$$1$$.addEventListener($oj$$29$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$[$i$$392$$], $eventHandlerCallback$$, !0);
    }
  };
  $oj$$29$$.$SimpleTapRecognizer$.prototype.$_eventHandler$ = function $$oj$$29$$$$SimpleTapRecognizer$$$$_eventHandler$$($event$$529_tapStart$$) {
    var $tapCallback$$1$$ = this.$_tapCallback$, $eventType$$43$$ = $event$$529_tapStart$$.type;
    "touchstart" === $eventType$$43$$ ? (this.$_touchStartEvent$ = $event$$529_tapStart$$, this.$_touchStartEvent$.$_tapStart$ = (new Date).getTime()) : "touchmove" === $eventType$$43$$ || "touchcancel" === $eventType$$43$$ ? delete this.$_touchStartEvent$ : "touchend" === $eventType$$43$$ && (this.$_touchStartEvent$ && ($event$$529_tapStart$$ = this.$_touchStartEvent$.$_tapStart$, isNaN($event$$529_tapStart$$) ? $tapCallback$$1$$(this.$_touchStartEvent$) : (new Date).getTime() - $event$$529_tapStart$$ < 
    $oj$$29$$.$SimpleTapRecognizer$.$_PRESSHOLDTHRESSHOLD$ && $tapCallback$$1$$(this.$_touchStartEvent$)), delete this.$_touchStartEvent$);
  };
  $oj$$29$$.$SimpleTapRecognizer$.prototype.destroy = function $$oj$$29$$$$SimpleTapRecognizer$$$destroy$() {
    delete this.$_tapCallback$;
    var $eventHandlerCallback$$1$$ = this.$_eventHandlerCallback$;
    delete this.$_eventHandlerCallback$;
    for (var $docElement$$2$$ = document.documentElement, $i$$393$$ = 0;$i$$393$$ < $oj$$29$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$.length;$i$$393$$++) {
      $docElement$$2$$.removeEventListener($oj$$29$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$[$i$$393$$], $eventHandlerCallback$$1$$, !0);
    }
  };
  $oj$$29$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$ = ["touchstart", "touchmove", "touchcancel", "touchend"];
  $oj$$29$$.$SimpleTapRecognizer$.$_PRESSHOLDTHRESSHOLD$ = 700;
  $oj$$29$$.$PopupLiveRegion$ = function $$oj$$29$$$$PopupLiveRegion$$() {
    this.Init();
  };
  $oj$$29$$.$Object$.$createSubclass$($oj$$29$$.$PopupLiveRegion$, $oj$$29$$.$Object$, "oj.PopupLiveRegion");
  $oj$$29$$.$PopupLiveRegion$.prototype.Init = function $$oj$$29$$$$PopupLiveRegion$$$Init$() {
    $oj$$29$$.$PopupLiveRegion$.$superclass$.Init.call(this);
    isNaN($oj$$29$$.$PopupLiveRegion$.$_refCounter$) ? $oj$$29$$.$PopupLiveRegion$.$_refCounter$ = 1 : ++$oj$$29$$.$PopupLiveRegion$.$_refCounter$;
  };
  $oj$$29$$.$PopupLiveRegion$.prototype.destroy = function $$oj$$29$$$$PopupLiveRegion$$$destroy$() {
    if (!isNaN($oj$$29$$.$PopupLiveRegion$.$_refCounter$) && (--$oj$$29$$.$PopupLiveRegion$.$_refCounter$, 1 > $oj$$29$$.$PopupLiveRegion$.$_refCounter$)) {
      var $liveRegion$$ = $$$$26$$(document.getElementById($oj$$29$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$));
      0 < $liveRegion$$.length && $liveRegion$$.remove();
    }
  };
  $oj$$29$$.$PopupLiveRegion$.prototype.$announce$ = function $$oj$$29$$$$PopupLiveRegion$$$$announce$$($message$$34$$) {
    if (!$oj$$29$$.$StringUtils$.$isEmpty$($message$$34$$)) {
      var $liveRegion$$1$$ = $oj$$29$$.$PopupLiveRegion$.$_getLiveRegion$();
      $liveRegion$$1$$.children().remove();
      $$$$26$$("\x3cdiv\x3e").text($message$$34$$).appendTo($liveRegion$$1$$);
    }
  };
  $oj$$29$$.$PopupLiveRegion$.$_getLiveRegion$ = function $$oj$$29$$$$PopupLiveRegion$$$_getLiveRegion$$() {
    var $liveRegion$$2$$ = $$$$26$$(document.getElementById($oj$$29$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$));
    0 === $liveRegion$$2$$.length && ($liveRegion$$2$$ = $$$$26$$("\x3cdiv\x3e"), $liveRegion$$2$$.attr({id:$oj$$29$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$, role:"log", "aria-live":"polite", "aria-relevant":"additions"}), $liveRegion$$2$$.addClass("oj-helper-hidden-accessible"), $liveRegion$$2$$.appendTo(document.body));
    return $liveRegion$$2$$;
  };
  $oj$$29$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$ = "__oj_popup_arialiveregion";
  $oj$$29$$.$PopupSkipLink$ = function $$oj$$29$$$$PopupSkipLink$$($sibling$$2$$, $message$$35$$, $callback$$119$$, $id$$49$$) {
    $oj$$29$$.$Assert$.$assertPrototype$($sibling$$2$$, jQuery);
    $oj$$29$$.$Assert$.$assertString$($message$$35$$);
    $oj$$29$$.$Assert$.$assertFunction$($callback$$119$$);
    $oj$$29$$.$Assert$.$assertStringOrNull$($id$$49$$);
    this.$_sibling$ = $sibling$$2$$;
    this.$_message$ = $message$$35$$;
    this.$_callback$ = $callback$$119$$;
    this.$_id$ = $id$$49$$ ? $id$$49$$ : "";
    this.Init();
  };
  $oj$$29$$.$Object$.$createSubclass$($oj$$29$$.$PopupSkipLink$, $oj$$29$$.$Object$, "oj.PopupSkipLink");
  $oj$$29$$.$PopupSkipLink$.prototype.Init = function $$oj$$29$$$$PopupSkipLink$$$Init$() {
    $oj$$29$$.$PopupSkipLink$.$superclass$.Init.call(this);
    var $sibling$$3$$ = this.$_sibling$, $callback$$120$$ = this.$_callback$, $message$$36$$ = this.$_message$;
    delete this.$_message$;
    var $id$$50$$ = this.$_id$;
    delete this.$_id$;
    var $link$$1$$ = $$$$26$$("\x3ca\x3e").attr({tabindex:"-1", href:"#"});
    $oj$$29$$.$StringUtils$.$isEmpty$($id$$50$$) || $link$$1$$.attr("id", $id$$50$$);
    $link$$1$$.addClass("oj-helper-hidden-accessible");
    $link$$1$$.text($message$$36$$);
    $link$$1$$.insertAfter($sibling$$3$$);
    $link$$1$$.on("click", $callback$$120$$);
    $sibling$$3$$.data($oj$$29$$.$PopupSkipLink$.$_SKIPLINK_ATTR$, $link$$1$$);
  };
  $oj$$29$$.$PopupSkipLink$.prototype.destroy = function $$oj$$29$$$$PopupSkipLink$$$destroy$() {
    var $sibling$$4$$ = this.$_sibling$;
    delete this.$_sibling$;
    var $callback$$121$$ = this.$_callback$;
    delete this.$_callback$;
    if ($sibling$$4$$) {
      var $link$$2$$ = $sibling$$4$$.data($oj$$29$$.$PopupSkipLink$.$_SKIPLINK_ATTR$);
      $sibling$$4$$.removeData($oj$$29$$.$PopupSkipLink$.$_SKIPLINK_ATTR$);
      $link$$2$$ && ($link$$2$$.off("click", $callback$$121$$), $link$$2$$.remove());
    }
  };
  $oj$$29$$.$PopupSkipLink$.prototype.getLink = function $$oj$$29$$$$PopupSkipLink$$$getLink$() {
    var $sibling$$5$$ = this.$_sibling$, $link$$3$$;
    $sibling$$5$$ && ($link$$3$$ = $sibling$$5$$.data($oj$$29$$.$PopupSkipLink$.$_SKIPLINK_ATTR$));
    return $link$$3$$;
  };
  $oj$$29$$.$PopupSkipLink$.$_SKIPLINK_ATTR$ = "oj-skiplink";
});
