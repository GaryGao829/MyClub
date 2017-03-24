/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "promise"], function($oj$$28$$, $$$$25$$) {
  $oj$$28$$.$AnimationUtils$ = {};
  $goog$exportPath_$$("AnimationUtils", $oj$$28$$.$AnimationUtils$, $oj$$28$$);
  $oj$$28$$.$AnimationUtils$.$_animate$ = function $$oj$$28$$$$AnimationUtils$$$_animate$$($element$$190$$, $fromState$$, $toState$$, $options$$305$$) {
    var $jelem$$10$$ = $$$$25$$($element$$190$$);
    return(new Promise(function($resolve$$43$$) {
      function $endListener$$() {
        $promiseResolved$$ || ($jelem$$10$$.off("transitionend webkitTransitionEnd", $endListener$$), $resolve$$43$$(!0), $promiseResolved$$ = !0);
      }
      var $promiseResolved$$ = !1;
      $oj$$28$$.$AnimationUtils$.$_applyState$($jelem$$10$$, $fromState$$);
      $jelem$$10$$.on("transitionend webkitTransitionEnd", $endListener$$);
      window.setTimeout(function() {
        null == $toState$$.css && ($toState$$.css = {});
        $oj$$28$$.$AnimationUtils$.$_setTiming$($options$$305$$, $toState$$.css);
        $oj$$28$$.$AnimationUtils$.$_applyState$($jelem$$10$$, $toState$$);
        setTimeout($endListener$$, $oj$$28$$.$AnimationUtils$.$_calcEffectTime$($jelem$$10$$) + 100);
      }, 20);
    })).then(function() {
      $fromState$$ && $fromState$$.addClass && $jelem$$10$$.removeClass($fromState$$.addClass);
      $toState$$ && $toState$$.addClass && $jelem$$10$$.removeClass($toState$$.addClass);
      $oj$$28$$.$AnimationUtils$.$_restoreStyle$($jelem$$10$$, $fromState$$, $toState$$, $options$$305$$);
    });
  };
  $oj$$28$$.$AnimationUtils$.$_restoreStyle$ = function $$oj$$28$$$$AnimationUtils$$$_restoreStyle$$($jelem$$11$$, $fromState$$1_fromStateCss$$, $toState$$1_toStateCss$$, $options$$306_persist$$) {
    $options$$306_persist$$ = $options$$306_persist$$ && "all" === $options$$306_persist$$.persist;
    var $changedCss$$ = {};
    $fromState$$1_fromStateCss$$ = $fromState$$1_fromStateCss$$ && $fromState$$1_fromStateCss$$.css ? $fromState$$1_fromStateCss$$.css : {};
    $toState$$1_toStateCss$$ = $toState$$1_toStateCss$$ && $toState$$1_toStateCss$$.css ? $toState$$1_toStateCss$$.css : {};
    for (var $prop$$75$$ in $fromState$$1_fromStateCss$$) {
      $options$$306_persist$$ && void 0 !== $toState$$1_toStateCss$$[$prop$$75$$] || ($changedCss$$[$prop$$75$$] = "");
    }
    for ($prop$$75$$ in $toState$$1_toStateCss$$) {
      $options$$306_persist$$ && void 0 !== $fromState$$1_fromStateCss$$[$prop$$75$$] || ($changedCss$$[$prop$$75$$] = "");
    }
    $jelem$$11$$.css($changedCss$$);
  };
  $oj$$28$$.$AnimationUtils$.$_applyState$ = function $$oj$$28$$$$AnimationUtils$$$_applyState$$($jelem$$12$$, $state$$12$$) {
    $state$$12$$ && ($state$$12$$.css && $jelem$$12$$.css($state$$12$$.css), $state$$12$$.addClass && $jelem$$12$$.addClass($state$$12$$.addClass), $state$$12$$.removeClass && $jelem$$12$$.removeClass($state$$12$$.removeClass));
  };
  $oj$$28$$.$AnimationUtils$.$_setTimingProp$ = function $$oj$$28$$$$AnimationUtils$$$_setTimingProp$$($name$$124$$, $value$$278$$, $newTimingStyle$$) {
    $value$$278$$ && ($newTimingStyle$$[$name$$124$$] = $value$$278$$);
  };
  $oj$$28$$.$AnimationUtils$.$_setTiming$ = function $$oj$$28$$$$AnimationUtils$$$_setTiming$$($options$$307$$, $newTimingStyle$$1$$) {
    $options$$307$$ && ($oj$$28$$.$AnimationUtils$.$_setTimingProp$("transitionDelay", $options$$307$$.delay, $newTimingStyle$$1$$), $oj$$28$$.$AnimationUtils$.$_setTimingProp$("transitionDuration", $options$$307$$.duration, $newTimingStyle$$1$$), $oj$$28$$.$AnimationUtils$.$_setTimingProp$("transitionTimingFunction", $options$$307$$.timingFunction, $newTimingStyle$$1$$));
  };
  $oj$$28$$.$AnimationUtils$.$_calcCssTime$ = function $$oj$$28$$$$AnimationUtils$$$_calcCssTime$$($delayArray_jelem$$14$$, $cssProp_propertyLen_propertyStr$$, $durationArray_durationStr_prefix$$18$$) {
    $cssProp_propertyLen_propertyStr$$ = $delayArray_jelem$$14$$.css($cssProp_propertyLen_propertyStr$$);
    var $delayLen_delayStr$$ = $delayArray_jelem$$14$$.css($durationArray_durationStr_prefix$$18$$ + "-delay");
    $durationArray_durationStr_prefix$$18$$ = $delayArray_jelem$$14$$.css($durationArray_durationStr_prefix$$18$$ + "-duration");
    $delayArray_jelem$$14$$ = $delayLen_delayStr$$.split(",");
    $durationArray_durationStr_prefix$$18$$ = $durationArray_durationStr_prefix$$18$$.split(",");
    $cssProp_propertyLen_propertyStr$$ = $cssProp_propertyLen_propertyStr$$.split(",").length;
    for (var $delayLen_delayStr$$ = $delayArray_jelem$$14$$.length, $durationLen$$ = $durationArray_durationStr_prefix$$18$$.length, $maxTime$$ = 0, $i$$384$$ = 0;$i$$384$$ < $cssProp_propertyLen_propertyStr$$;$i$$384$$++) {
      var $duration$$20_durationMs$$ = $durationArray_durationStr_prefix$$18$$[$i$$384$$ % $durationLen$$], $duration$$20_durationMs$$ = -1 < $duration$$20_durationMs$$.indexOf("ms") ? parseFloat($duration$$20_durationMs$$) : 1E3 * parseFloat($duration$$20_durationMs$$);
      if (0 < $duration$$20_durationMs$$) {
        var $delay$$5_delayMs$$ = $delayArray_jelem$$14$$[$i$$384$$ % $delayLen_delayStr$$], $delay$$5_delayMs$$ = -1 < $delay$$5_delayMs$$.indexOf("ms") ? parseFloat($delay$$5_delayMs$$) : 1E3 * parseFloat($delay$$5_delayMs$$), $maxTime$$ = Math.max($maxTime$$, $delay$$5_delayMs$$ + $duration$$20_durationMs$$)
      }
    }
    return $maxTime$$;
  };
  $oj$$28$$.$AnimationUtils$.$_calcEffectTime$ = function $$oj$$28$$$$AnimationUtils$$$_calcEffectTime$$($jelem$$15_transitionTime$$) {
    var $animationTime$$ = $oj$$28$$.$AnimationUtils$.$_calcCssTime$($jelem$$15_transitionTime$$, "animation-name", "animation");
    $jelem$$15_transitionTime$$ = $oj$$28$$.$AnimationUtils$.$_calcCssTime$($jelem$$15_transitionTime$$, "transition-property", "transition");
    return Math.max($animationTime$$, $jelem$$15_transitionTime$$);
  };
  $oj$$28$$.$AnimationUtils$.$startAnimation$ = function $$oj$$28$$$$AnimationUtils$$$startAnimation$$($element$$191$$, $action$$9$$, $animationEffect$$) {
    return new Promise(function($resolve$$44$$) {
      function $markerCallback$$() {
        $markerProcessed$$ = !0;
        $resolvePromise$$();
      }
      function $eventCallback$$() {
        $eventProcessed$$ = !0;
        $resolvePromise$$();
      }
      function $resolvePromise$$() {
        $eventProcessed$$ && $markerProcessed$$ && ($jelem$$16$$.removeClass($fromMarker$$), $jelem$$16$$.removeClass($toMarker$$), $resolve$$44$$(!0), $jelem$$16$$.trigger("ojanimateend", {action:$action$$9$$}));
      }
      var $jelem$$16$$ = $$$$25$$($element$$191$$), $fromMarker$$ = "oj-animate-" + $action$$9$$, $toMarker$$ = $fromMarker$$ + "-active", $eventProcessed$$ = !1, $markerProcessed$$ = !1, $event$$518$$ = $$$$25$$.Event("ojanimatestart");
      $jelem$$16$$.trigger($event$$518$$, {action:$action$$9$$, endCallback:$eventCallback$$});
      if (!$event$$518$$.isDefaultPrevented()) {
        var $effectName$$, $effectOptions$$;
        null != $animationEffect$$ && "none" != $animationEffect$$ && ("string" == typeof $animationEffect$$ ? $effectName$$ = $animationEffect$$ : "object" == typeof $animationEffect$$ && ($effectName$$ = $animationEffect$$.effect, $effectOptions$$ = $animationEffect$$));
        $effectName$$ && $oj$$28$$.$AnimationUtils$[$effectName$$] ? $oj$$28$$.$AnimationUtils$[$effectName$$]($element$$191$$, $effectOptions$$).then($eventCallback$$) : $eventCallback$$();
      }
      $jelem$$16$$.addClass($fromMarker$$);
      window.setTimeout(function() {
        $jelem$$16$$.addClass($toMarker$$);
        setTimeout($markerCallback$$, $oj$$28$$.$AnimationUtils$.$_calcEffectTime$($jelem$$16$$) + 100);
      }, 20);
    });
  };
  $goog$exportPath_$$("AnimationUtils.startAnimation", $oj$$28$$.$AnimationUtils$.$startAnimation$, $oj$$28$$);
  $oj$$28$$.$AnimationUtils$.$_fade$ = function $$oj$$28$$$$AnimationUtils$$$_fade$$($element$$192$$, $options$$308$$, $effectClass_fromState$$2$$, $startOpacity$$, $endOpacity_toState$$2$$) {
    $effectClass_fromState$$2$$ = {addClass:$effectClass_fromState$$2$$ + " oj-animating", css:{opacity:$startOpacity$$}};
    $endOpacity_toState$$2$$ = {addClass:"oj-animating-active", css:{opacity:$endOpacity_toState$$2$$}};
    $options$$308$$ && ($options$$308$$.startOpacity && ($effectClass_fromState$$2$$.css.opacity = $options$$308$$.startOpacity), $options$$308$$.endOpacity && ($endOpacity_toState$$2$$.css.opacity = $options$$308$$.endOpacity));
    return $oj$$28$$.$AnimationUtils$.$_animate$($element$$192$$, $effectClass_fromState$$2$$, $endOpacity_toState$$2$$, $options$$308$$);
  };
  $oj$$28$$.$AnimationUtils$.fadeIn = function $$oj$$28$$$$AnimationUtils$$fadeIn$($element$$193$$, $options$$309$$) {
    return $oj$$28$$.$AnimationUtils$.$_fade$($element$$193$$, $options$$309$$, "oj-animation-effect-fadein", 0, 1);
  };
  $goog$exportPath_$$("AnimationUtils.fadeIn", $oj$$28$$.$AnimationUtils$.fadeIn, $oj$$28$$);
  $oj$$28$$.$AnimationUtils$.fadeOut = function $$oj$$28$$$$AnimationUtils$$fadeOut$($element$$194$$, $options$$310$$) {
    return $oj$$28$$.$AnimationUtils$.$_fade$($element$$194$$, $options$$310$$, "oj-animation-effect-fadeout", 1, 0);
  };
  $goog$exportPath_$$("AnimationUtils.fadeOut", $oj$$28$$.$AnimationUtils$.fadeOut, $oj$$28$$);
  $oj$$28$$.$AnimationUtils$.expand = function $$oj$$28$$$$AnimationUtils$$expand$($element$$195$$, $options$$311$$) {
    return $oj$$28$$.$AnimationUtils$.$_expandCollapse$($element$$195$$, $options$$311$$, !0);
  };
  $goog$exportPath_$$("AnimationUtils.expand", $oj$$28$$.$AnimationUtils$.expand, $oj$$28$$);
  $oj$$28$$.$AnimationUtils$.collapse = function $$oj$$28$$$$AnimationUtils$$collapse$($element$$196$$, $options$$312$$) {
    return $oj$$28$$.$AnimationUtils$.$_expandCollapse$($element$$196$$, $options$$312$$, !1);
  };
  $goog$exportPath_$$("AnimationUtils.collapse", $oj$$28$$.$AnimationUtils$.collapse, $oj$$28$$);
  $oj$$28$$.$AnimationUtils$.$_expandCollapse$ = function $$oj$$28$$$$AnimationUtils$$$_expandCollapse$$($ele$$3_element$$197$$, $options$$313$$, $isExpand$$) {
    $options$$313$$ = $options$$313$$ || {};
    var $fromState$$3$$ = {addClass:"oj-animation-effect-" + ($isExpand$$ ? "expand" : "collapse") + " oj-animating"}, $toState$$3$$ = {addClass:"oj-animating-active"}, $direction$$16$$ = $options$$313$$.direction || "height";
    $ele$$3_element$$197$$ = $$$$25$$($ele$$3_element$$197$$);
    var $width$$43$$ = $ele$$3_element$$197$$.width(), $height$$45$$ = $ele$$3_element$$197$$.height(), $maxWidth$$2$$ = $ele$$3_element$$197$$.css("max-width"), $maxHeight$$1$$ = $ele$$3_element$$197$$.css("max-height"), $fromCSS$$ = $fromState$$3$$.css = {}, $toStateCSS$$ = $toState$$3$$.css = {};
    "none" !== $maxWidth$$2$$ && ($width$$43$$ = $maxWidth$$2$$);
    "none" !== $maxHeight$$1$$ && ($height$$45$$ = $maxHeight$$1$$);
    if ("both" === $direction$$16$$ || "height" === $direction$$16$$) {
      $fromCSS$$["max-height"] = $isExpand$$ ? 0 : $height$$45$$, $toStateCSS$$["max-height"] = $isExpand$$ ? $height$$45$$ : 0;
    }
    if ("both" === $direction$$16$$ || "width" === $direction$$16$$) {
      $fromCSS$$["max-width"] = $isExpand$$ ? 0 : $width$$43$$, $toStateCSS$$["max-width"] = $isExpand$$ ? $width$$43$$ : 0;
    }
    $oj$$28$$.$AnimationUtils$.$_handleFade$($options$$313$$, $isExpand$$, $fromState$$3$$, $toState$$3$$);
    return $oj$$28$$.$AnimationUtils$.$_animate$($ele$$3_element$$197$$[0], $fromState$$3$$, $toState$$3$$, $options$$313$$);
  };
  $oj$$28$$.$AnimationUtils$.$_handleFade$ = function $$oj$$28$$$$AnimationUtils$$$_handleFade$$($options$$314$$, $isIn$$, $fromState$$4$$, $toState$$4$$) {
    $options$$314$$.fade && !0 === $options$$314$$.fade && ($fromState$$4$$.css.opacity = $isIn$$ ? 0 : 1, $toState$$4$$.css.opacity = $isIn$$ ? 1 : 0);
  };
  $oj$$28$$.$AnimationUtils$.$zoomIn$ = function $$oj$$28$$$$AnimationUtils$$$zoomIn$$($element$$198$$, $options$$315$$) {
    return $oj$$28$$.$AnimationUtils$.$_zoom$($element$$198$$, $options$$315$$, !0);
  };
  $goog$exportPath_$$("AnimationUtils.zoomIn", $oj$$28$$.$AnimationUtils$.$zoomIn$, $oj$$28$$);
  $oj$$28$$.$AnimationUtils$.$zoomOut$ = function $$oj$$28$$$$AnimationUtils$$$zoomOut$$($element$$199$$, $options$$316$$) {
    return $oj$$28$$.$AnimationUtils$.$_zoom$($element$$199$$, $options$$316$$, !1);
  };
  $goog$exportPath_$$("AnimationUtils.zoomOut", $oj$$28$$.$AnimationUtils$.$zoomOut$, $oj$$28$$);
  $oj$$28$$.$AnimationUtils$.$_zoom$ = function $$oj$$28$$$$AnimationUtils$$$_zoom$$($ele$$4_element$$200$$, $options$$317$$, $isIn$$1$$) {
    $options$$317$$ = $options$$317$$ || {};
    var $fromState$$5$$ = {addClass:"oj-animation-effect-" + ($isIn$$1$$ ? "zoomin" : "zoomout") + " oj-animating"}, $toState$$5$$ = {addClass:"oj-animating-active"}, $axis$$68_scale$$5$$ = $options$$317$$.axis || "both";
    $ele$$4_element$$200$$ = $$$$25$$($ele$$4_element$$200$$);
    var $axis$$68_scale$$5$$ = "both" === $axis$$68_scale$$5$$ ? "scale" : "x" === $axis$$68_scale$$5$$ ? "scaleX" : "scaleY", $fromCSS$$1$$ = $fromState$$5$$.css = {}, $toStateCSS$$1$$ = $toState$$5$$.css = {};
    $fromCSS$$1$$.transform = $axis$$68_scale$$5$$ + "(" + ($isIn$$1$$ ? 0 : 1) + ") translateZ(0)";
    $toStateCSS$$1$$.transform = $axis$$68_scale$$5$$ + "(" + ($isIn$$1$$ ? 1 : 0) + ") translateZ(0)";
    $fromCSS$$1$$["transform-origin"] = $options$$317$$.transformOrigin || "center";
    $oj$$28$$.$AnimationUtils$.$_handleFade$($options$$317$$, $isIn$$1$$, $fromState$$5$$, $toState$$5$$);
    return $oj$$28$$.$AnimationUtils$.$_animate$($ele$$4_element$$200$$[0], $fromState$$5$$, $toState$$5$$, $options$$317$$);
  };
  $oj$$28$$.$AnimationUtils$.$slideIn$ = function $$oj$$28$$$$AnimationUtils$$$slideIn$$($element$$201$$, $options$$318$$) {
    return $oj$$28$$.$AnimationUtils$.$_slide$($element$$201$$, $options$$318$$, !0);
  };
  $goog$exportPath_$$("AnimationUtils.slideIn", $oj$$28$$.$AnimationUtils$.$slideIn$, $oj$$28$$);
  $oj$$28$$.$AnimationUtils$.$slideOut$ = function $$oj$$28$$$$AnimationUtils$$$slideOut$$($element$$202$$, $options$$319$$) {
    return $oj$$28$$.$AnimationUtils$.$_slide$($element$$202$$, $options$$319$$, !1);
  };
  $goog$exportPath_$$("AnimationUtils.slideOut", $oj$$28$$.$AnimationUtils$.$slideOut$, $oj$$28$$);
  $oj$$28$$.$AnimationUtils$.$_slide$ = function $$oj$$28$$$$AnimationUtils$$$_slide$$($ele$$5_element$$203$$, $options$$320$$, $isIn$$2$$) {
    $options$$320$$ = $options$$320$$ || {};
    var $fromState$$6$$ = {addClass:"oj-animation-effect-" + ($isIn$$2$$ ? "slidein" : "slideout") + " oj-animating"}, $toState$$6$$ = {addClass:"oj-animating-active"}, $direction$$17$$ = $options$$320$$.direction || "start";
    $ele$$5_element$$203$$ = $$$$25$$($ele$$5_element$$203$$);
    var $offsetX$$1$$ = $options$$320$$.offsetX || $ele$$5_element$$203$$.width() + "px", $offsetY$$1$$ = $options$$320$$.offsetY || $ele$$5_element$$203$$.height() + "px", $fromCSS$$2$$ = $fromState$$6$$.css = {}, $toStateCSS$$2$$ = $toState$$6$$.css = {};
    $direction$$17$$ in {left:1, right:1, start:1, end:1} ? ($oj$$28$$.$DomUtils$.$getReadingDirection$(), $fromCSS$$2$$.transform = "translateX(" + ($isIn$$2$$ ? $offsetX$$1$$ : "0") + ") translateZ(0)", $toStateCSS$$2$$.transform = "translateX(" + ($isIn$$2$$ ? "0" : $offsetX$$1$$) + ") translateZ(0)") : ($fromCSS$$2$$.transform = "translateY(" + ($isIn$$2$$ ? $offsetY$$1$$ : "0") + ") translateZ(0)", $toStateCSS$$2$$.transform = "translateY(" + ($isIn$$2$$ ? "0" : $offsetY$$1$$) + ") translateZ(0)");
    $oj$$28$$.$AnimationUtils$.$_handleFade$($options$$320$$, $isIn$$2$$, $fromState$$6$$, $toState$$6$$);
    return $oj$$28$$.$AnimationUtils$.$_animate$($ele$$5_element$$203$$[0], $fromState$$6$$, $toState$$6$$, $options$$320$$);
  };
  $oj$$28$$.$AnimationUtils$.$ripple$ = function $$oj$$28$$$$AnimationUtils$$$ripple$$($element$$204$$, $options$$321$$) {
    $options$$321$$ = $options$$321$$ || {};
    var $fromState$$7$$ = {addClass:"oj-animating"}, $toState$$7$$ = {addClass:"oj-animating-active"}, $ele$$6_fromCSS$$3$$ = $$$$25$$($element$$204$$), $toStateCSS$$3_width$$44$$ = $ele$$6_fromCSS$$3$$.outerWidth(), $height$$46$$ = $ele$$6_fromCSS$$3$$.outerHeight(), $container$$28$$ = $$$$25$$("\x3cdiv style\x3d'position:absolute; overflow:hidden'\x3e"), $rippler$$ = $$$$25$$("\x3cdiv class\x3d'oj-animation-effect-ripple oj-animation-rippler'\x3e"), $position$$16$$ = "static" == $ele$$6_fromCSS$$3$$.css("position") ? 
    $ele$$6_fromCSS$$3$$.position() : {left:0, top:0};
    $ele$$6_fromCSS$$3$$.prepend($container$$28$$);
    $container$$28$$.css({left:$position$$16$$.left + "px", top:$position$$16$$.top + "px", width:$toStateCSS$$3_width$$44$$ + "px", height:$height$$46$$ + "px"});
    $container$$28$$.prepend($rippler$$);
    $ele$$6_fromCSS$$3$$ = $fromState$$7$$.css = {};
    $toStateCSS$$3_width$$44$$ = $toState$$7$$.css = {};
    $oj$$28$$.$AnimationUtils$.$_setRippleOptions$($ele$$6_fromCSS$$3$$, $rippler$$, $container$$28$$, $options$$321$$);
    $ele$$6_fromCSS$$3$$.transform = "scale(0) translateZ(0)";
    $ele$$6_fromCSS$$3$$.opacity = $options$$321$$.startOpacity || $rippler$$.css("opacity");
    $toStateCSS$$3_width$$44$$.transform = "scale(1) translateZ(0)";
    $toStateCSS$$3_width$$44$$.opacity = $options$$321$$.endOpacity || 0;
    return $oj$$28$$.$AnimationUtils$.$_animate$($rippler$$[0], $fromState$$7$$, $toState$$7$$, $options$$321$$).then(function() {
      $container$$28$$.remove();
    });
  };
  $goog$exportPath_$$("AnimationUtils.ripple", $oj$$28$$.$AnimationUtils$.$ripple$, $oj$$28$$);
  $oj$$28$$.$AnimationUtils$.$_setRippleOptions$ = function $$oj$$28$$$$AnimationUtils$$$_setRippleOptions$$($css$$, $diameter_rippler$$1$$, $parent$$34_position$$17$$, $options$$322$$) {
    $diameter_rippler$$1$$ = $diameter_rippler$$1$$.width();
    var $offset$$24_parentWidth$$ = $parent$$34_position$$17$$.width(), $parentHeight$$ = $parent$$34_position$$17$$.height();
    if ($options$$322$$.diameter) {
      var $diameterStr$$ = $options$$322$$.diameter, $value$$279$$ = parseInt($diameterStr$$, 10);
      isNaN($value$$279$$) || ($diameter_rippler$$1$$ = "%" == $diameterStr$$.charAt($diameterStr$$.length - 1) ? Math.floor(Math.min($offset$$24_parentWidth$$, $parentHeight$$) * ($value$$279$$ / 100)) : $value$$279$$, $css$$.width = $diameter_rippler$$1$$ + "px", $css$$.height = $diameter_rippler$$1$$ + "px");
    }
    $parent$$34_position$$17$$ = "static" == $parent$$34_position$$17$$.css("position") ? $parent$$34_position$$17$$.position() : {left:0, top:0};
    $offset$$24_parentWidth$$ = $oj$$28$$.$AnimationUtils$.$_calcRippleOffset$($options$$322$$.offsetX, $diameter_rippler$$1$$, $offset$$24_parentWidth$$, $parent$$34_position$$17$$.left);
    null != $offset$$24_parentWidth$$ && ($css$$.left = $offset$$24_parentWidth$$ + "px");
    $offset$$24_parentWidth$$ = $oj$$28$$.$AnimationUtils$.$_calcRippleOffset$($options$$322$$.offsetY, $diameter_rippler$$1$$, $parentHeight$$, $parent$$34_position$$17$$.top);
    null != $offset$$24_parentWidth$$ && ($css$$.top = $offset$$24_parentWidth$$ + "px");
    $options$$322$$.color && ($css$$.backgroundColor = $options$$322$$.color);
  };
  $oj$$28$$.$AnimationUtils$.$_calcRippleOffset$ = function $$oj$$28$$$$AnimationUtils$$$_calcRippleOffset$$($offsetOption$$, $diameter$$1$$, $parentSize$$, $parentOffset$$) {
    var $offset$$25$$;
    $offsetOption$$ = $offsetOption$$ || "50%";
    var $offsetInt$$ = parseInt($offsetOption$$, 10);
    isNaN($offsetInt$$) || ($offset$$25$$ = "%" == $offsetOption$$.charAt($offsetOption$$.length - 1) ? $offsetInt$$ / 100 * $parentSize$$ - $diameter$$1$$ / 2 : $offsetInt$$ - $diameter$$1$$ / 2, $offset$$25$$ = Math.floor($offset$$25$$ + $parentOffset$$));
    return $offset$$25$$;
  };
  $oj$$28$$.$AnimationUtils$.$_removeRipple$ = function $$oj$$28$$$$AnimationUtils$$$_removeRipple$$($element$$205$$, $options$$323$$) {
    $options$$323$$ = $options$$323$$ || {};
    var $possibleEffects$$ = {fadeOut:1, collapse:1, zoomOut:1, slideOut:1}, $removeEffect$$ = $options$$323$$.removeEffect || "fadeOut", $rippler$$2$$ = $$$$25$$(".oj-animation-rippler", $element$$205$$);
    if (0 === $rippler$$2$$.length) {
      console.warn("No rippler so returning");
    } else {
      return $removeEffect$$ in $possibleEffects$$ ? $oj$$28$$.$AnimationUtils$[$removeEffect$$]($rippler$$2$$, $options$$323$$).then(function() {
        $rippler$$2$$.remove();
      }) : $rippler$$2$$.remove();
    }
  };
  $oj$$28$$.$AnimationUtils$.$_flip$ = function $$oj$$28$$$$AnimationUtils$$$_flip$$($element$$206$$, $options$$324$$, $effectClass$$1_fromState$$8$$, $startAngle$$1$$, $endAngle$$1$$) {
    var $fromCss$$ = {}, $toCss$$ = {};
    $effectClass$$1_fromState$$8$$ = {addClass:$effectClass$$1_fromState$$8$$ + " oj-animating", css:$fromCss$$};
    var $toState$$8$$ = {addClass:"oj-animating-active", css:$toCss$$}, $rotateFunc_transform$$3$$ = "rotateY(", $perspective$$ = "2000px", $backfaceVisibility$$ = "hidden", $transformOrigin$$ = "center";
    $options$$324$$ && ("x" === $options$$324$$.axis && ($rotateFunc_transform$$3$$ = "rotateX("), $options$$324$$.startAngle && ($startAngle$$1$$ = $options$$324$$.startAngle), $options$$324$$.endAngle && ($endAngle$$1$$ = $options$$324$$.endAngle), $options$$324$$.perspective && ($perspective$$ = $options$$324$$.perspective), $options$$324$$.backfaceVisibility && ($backfaceVisibility$$ = $options$$324$$.backfaceVisibility), $options$$324$$.transformOrigin && ($transformOrigin$$ = $options$$324$$.transformOrigin));
    $rotateFunc_transform$$3$$ = "perspective(" + $perspective$$ + ") " + $rotateFunc_transform$$3$$;
    $fromCss$$.transform = $rotateFunc_transform$$3$$ + $startAngle$$1$$ + ")";
    $fromCss$$.backfaceVisibility = $backfaceVisibility$$;
    $fromCss$$.transformOrigin = $transformOrigin$$;
    $toCss$$.transform = $rotateFunc_transform$$3$$ + $endAngle$$1$$ + ")";
    $toCss$$.backfaceVisibility = $backfaceVisibility$$;
    $toCss$$.transformOrigin = $transformOrigin$$;
    return $oj$$28$$.$AnimationUtils$.$_animate$($element$$206$$, $effectClass$$1_fromState$$8$$, $toState$$8$$, $options$$324$$);
  };
  $oj$$28$$.$AnimationUtils$.$flipIn$ = function $$oj$$28$$$$AnimationUtils$$$flipIn$$($element$$207$$, $options$$325$$) {
    return $oj$$28$$.$AnimationUtils$.$_flip$($element$$207$$, $options$$325$$, "oj-animation-effect-flipin", "-180deg", "0deg");
  };
  $goog$exportPath_$$("AnimationUtils.flipIn", $oj$$28$$.$AnimationUtils$.$flipIn$, $oj$$28$$);
  $oj$$28$$.$AnimationUtils$.$flipOut$ = function $$oj$$28$$$$AnimationUtils$$$flipOut$$($element$$208$$, $options$$326$$) {
    return $oj$$28$$.$AnimationUtils$.$_flip$($element$$208$$, $options$$326$$, "oj-animation-effect-flipout", "0deg", "180deg");
  };
  $goog$exportPath_$$("AnimationUtils.flipOut", $oj$$28$$.$AnimationUtils$.$flipOut$, $oj$$28$$);
});
