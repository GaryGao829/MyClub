/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var $JSCompiler_prototypeAlias$$;
function $goog$exportPath_$$($name$$71$$, $opt_object$$) {
  0 == $name$$71$$.indexOf("dvt.") && ($name$$71$$ = $name$$71$$.substring(4));
  var $parts$$ = $name$$71$$.split("."), $cur$$ = eval("dvt");
  $parts$$[0] in $cur$$ || !$cur$$.execScript || $cur$$.execScript("var " + $parts$$[0]);
  for (var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    $parts$$.length || void 0 === $opt_object$$ ? $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {} : $cur$$[$part$$] = $opt_object$$;
  }
}
Math.floor(2147483648 * Math.random()).toString(36);

(function($dvt$$13$$) {
  $dvt$$13$$.$TimeComponent$ = function $$dvt$$13$$$$TimeComponent$$($dvt$$13$$, $callback$$169$$, $callbackObj$$90$$) {
    this.Init($dvt$$13$$, $callback$$169$$, $callbackObj$$90$$);
  };
  $dvt$$13$$.$Obj$.$createSubclass$($dvt$$13$$.$TimeComponent$, $dvt$$13$$.$BaseComponent$);
  $dvt$$13$$.$TimeComponent$.prototype.Init = function $$dvt$$13$$$$TimeComponent$$$Init$($context$$406$$, $callback$$170$$, $callbackObj$$91$$) {
    $dvt$$13$$.$TimeComponent$.$superclass$.Init.call(this, $context$$406$$, $callback$$170$$, $callbackObj$$91$$);
    this.$_virtualize$ = !1;
  };
  $dvt$$13$$.$TimeComponent$.prototype.$render$ = function $$dvt$$13$$$$TimeComponent$$$$render$$($dvt$$13$$, $height$$112$$, $options$$289$$) {
    $options$$289$$ && this.$SetOptions$($options$$289$$);
    this.$Width$ = $dvt$$13$$;
    this.$Height$ = $height$$112$$;
    this.$Options$ && ($dvt$$13$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($dvt$$13$$));
  };
  $dvt$$13$$.$TimeComponent$.prototype.$SetOptions$ = function $$dvt$$13$$$$TimeComponent$$$$SetOptions$$($options$$290$$) {
    this.$Options$ = $dvt$$13$$.$JsonUtils$.clone($options$$290$$);
  };
  $dvt$$13$$.$TimeComponent$.prototype.$_applyParsedProperties$ = function $$dvt$$13$$$$TimeComponent$$$$_applyParsedProperties$$($dvt$$13$$) {
    this.$_start$ = $dvt$$13$$.start;
    this.$_end$ = $dvt$$13$$.end;
    this.$_inlineStyle$ = $dvt$$13$$.$inlineStyle$;
    this.$applyStyleValues$();
  };
  $dvt$$13$$.$TimeComponent$.prototype.$applyStyleValues$ = function $$dvt$$13$$$$TimeComponent$$$$applyStyleValues$$() {
    this.$_style$.$parseInlineStyle$(this.$_inlineStyle$);
  };
  $dvt$$13$$.$TimeComponent$.prototype.$setContentLength$ = function $$dvt$$13$$$$TimeComponent$$$$setContentLength$$($dvt$$13$$) {
    this.$_contentLength$ = this.$_canvasLength$ < $dvt$$13$$ ? $dvt$$13$$ : this.$_canvasLength$;
    this.$_virtualize$ || (this.$_fetchStartPos$ = 0, this.$_fetchEndPos$ = this.$_contentLength$);
  };
  $dvt$$13$$.$TimeComponent$.prototype.$isRTL$ = function $$dvt$$13$$$$TimeComponent$$$$isRTL$$() {
    return $dvt$$13$$.$Agent$.$isRightToLeft$(this.$getCtx$());
  };
  $dvt$$13$$.$TimeComponent$.prototype.$isVertical$ = function $$dvt$$13$$$$TimeComponent$$$$isVertical$$() {
    return this.$_isVertical$;
  };
  $dvt$$13$$.$TimeComponent$.prototype.$renderTimeZoomCanvas$ = function $$dvt$$13$$$$TimeComponent$$$$renderTimeZoomCanvas$$($container$$182$$) {
    this.$_timeZoomCanvas$ ? this.$_timeZoomCanvas$.$setClipPath$(null) : this.$_timeZoomCanvas$ = new $dvt$$13$$.$Container$(this.$getCtx$(), "iCanvas");
    var $cp$$8$$ = new $dvt$$13$$.$ClipPath$;
    this.$isVertical$() ? ($cp$$8$$.$addRect$(this.$_startX$, this.$_startY$, this.$_canvasSize$, this.$_canvasLength$), this.$_timeZoomCanvas$.$setTranslateX$(this.$_startX$), this.$_timeZoomCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$)) : ($cp$$8$$.$addRect$(this.$_startX$, this.$_startY$, this.$_canvasLength$, this.$_canvasSize$), this.$_timeZoomCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$), this.$_timeZoomCanvas$.$setTranslateY$(this.$_startY$));
    $container$$182$$.$setClipPath$($cp$$8$$);
    this.$_timeZoomCanvas$.getParent() != $container$$182$$ && $container$$182$$.$addChild$(this.$_timeZoomCanvas$);
  };
  $dvt$$13$$.$TimeComponent$.prototype.$HandleMouseWheel$ = function $$dvt$$13$$$$TimeComponent$$$$HandleMouseWheel$$($compLoc_event$$522$$) {
    $dvt$$13$$.$EventManager$.$consumeEvent$($compLoc_event$$522$$);
    var $wheelDelta$$ = $compLoc_event$$522$$.wheelDelta;
    if (this.$hasValidOptions$() && $wheelDelta$$) {
      var $compPagePos$$ = this.$getCtx$().$getStageAbsolutePosition$();
      $compLoc_event$$522$$ = this.$_isVertical$ ? $compLoc_event$$522$$.pageY - $compPagePos$$.y : $compLoc_event$$522$$.pageX - $compPagePos$$.x;
      this.$handleZoomWheel$(this.$_contentLength$ * (.02 * $wheelDelta$$ + 1), (this.$_end$ - this.$_start$) / this.$_contentLength$ * $compLoc_event$$522$$ + this.$_viewStartTime$, $compLoc_event$$522$$, !0);
    }
  };
  $dvt$$13$$.$TimeComponent$.prototype.$handleZoomWheel$ = function $$dvt$$13$$$$TimeComponent$$$$handleZoomWheel$$($dvt$$13$$, $minLength$$4_time$$17$$, $compLoc$$1$$) {
    $dvt$$13$$ > this.$_timeAxis$.$_maxContentLength$ ? ($dvt$$13$$ = this.$_timeAxis$.$_maxContentLength$, this.$disableZoomButton$(!0)) : this.$enableZoomButton$(!0);
    this.$_canvasLength$ > $dvt$$13$$ ? ($dvt$$13$$ = this.$_canvasLength$, this.$disableZoomButton$(!1)) : this.$enableZoomButton$(!1);
    var $zoomIn$$ = this.$_contentLength$ <= $dvt$$13$$, $viewLength_viewTime$$ = (this.$_viewEndTime$ - this.$_viewStartTime$) / (this.$_end$ - this.$_start$) * this.$_contentLength$;
    this.$setContentLength$($dvt$$13$$);
    $viewLength_viewTime$$ = $viewLength_viewTime$$ / this.$_contentLength$ * (this.$_end$ - this.$_start$);
    $dvt$$13$$ = this.$_timeAxis$.$_zoomLevelLengths$;
    if ($minLength$$4_time$$17$$) {
      var $widthFactor$$1$$ = (this.$_end$ - this.$_start$) / this.$_contentLength$;
      this.$_viewStartTime$ = $minLength$$4_time$$17$$ - $compLoc$$1$$ * $widthFactor$$1$$;
      this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$);
      this.$_viewEndTime$ = this.$_viewStartTime$ + $viewLength_viewTime$$;
      this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$, this.$_viewStartTime$ = this.$_viewEndTime$ - $viewLength_viewTime$$, this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$));
      this.$setRelativeStartPos$(1 / $widthFactor$$1$$ * (this.$_start$ - this.$_viewStartTime$));
    } else {
      this.$_viewStartTime$ = this.$_start$, this.$_viewEndTime$ = this.$_viewStartTime$ + $viewLength_viewTime$$, this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$), this.$setRelativeStartPos$(0);
    }
    if ($zoomIn$$) {
      for (;0 < this.$_timeAxis$.$_zoomLevelOrder$;) {
        if ($minLength$$4_time$$17$$ = $dvt$$13$$[this.$_timeAxis$.$_zoomLevelOrder$ - 1], this.$_contentLength$ >= $minLength$$4_time$$17$$) {
          this.$_timeAxis$.$setZoomLevelOrder$(this.$_timeAxis$.$_zoomLevelOrder$ - 1), this.$_timeAxis$.$decreaseScale$();
        } else {
          break;
        }
      }
    } else {
      for (;this.$_timeAxis$.$_zoomLevelOrder$ < $dvt$$13$$.length - 1;) {
        if ($minLength$$4_time$$17$$ = $dvt$$13$$[this.$_timeAxis$.$_zoomLevelOrder$], this.$_contentLength$ < $minLength$$4_time$$17$$) {
          this.$_timeAxis$.$setZoomLevelOrder$(this.$_timeAxis$.$_zoomLevelOrder$ + 1), this.$_timeAxis$.$increaseScale$();
        } else {
          break;
        }
      }
    }
    this.$applyTimeZoomCanvasPosition$();
  };
  $dvt$$13$$.$TimeComponent$.prototype.$zoomBy$ = function $$dvt$$13$$$$TimeComponent$$$$zoomBy$$($dvt$$13$$) {
    var $compLoc$$2$$ = this.$_isVertical$ ? this.$Height$ / 2 : this.$Width$ / 2;
    this.$handleZoomWheel$(this.$_contentLength$ * ((1 / $dvt$$13$$ - 1) / 2 + 1), (this.$_end$ - this.$_start$) / this.$_contentLength$ * $compLoc$$2$$ + this.$_viewStartTime$, $compLoc$$2$$, !0);
  };
  $dvt$$13$$.$TimeComponent$.prototype.$beginPinchZoom$ = function $$dvt$$13$$$$TimeComponent$$$$beginPinchZoom$$($dvt$$13$$, $y1$$31$$, $x2$$42$$, $y2$$30$$) {
    this.$_initialPinchZoomLoc$ = this.$_isVertical$ ? Math.sqrt(($y1$$31$$ - $y2$$30$$) * ($y1$$31$$ - $y2$$30$$)) + ($y1$$31$$ < $y2$$30$$ ? $y1$$31$$ : $y2$$30$$) : Math.sqrt(($dvt$$13$$ - $x2$$42$$) * ($dvt$$13$$ - $x2$$42$$)) + ($dvt$$13$$ < $x2$$42$$ ? $dvt$$13$$ : $x2$$42$$);
    this.$_initialPinchZoomTime$ = (this.$_end$ - this.$_start$) / this.$_contentLength$ * this.$_initialPinchZoomLoc$ + this.$_viewStartTime$;
    this.$_initialPinchZoomDist$ = Math.sqrt(($dvt$$13$$ - $x2$$42$$) * ($dvt$$13$$ - $x2$$42$$) + ($y1$$31$$ - $y2$$30$$) * ($y1$$31$$ - $y2$$30$$));
    this.$_initialPinchZoomLength$ = this.$_contentLength$;
  };
  $dvt$$13$$.$TimeComponent$.prototype.$contPinchZoom$ = function $$dvt$$13$$$$TimeComponent$$$$contPinchZoom$$($dvt$$13$$, $y1$$32$$, $x2$$43$$, $y2$$31$$) {
    $dvt$$13$$ = Math.sqrt(($dvt$$13$$ - $x2$$43$$) * ($dvt$$13$$ - $x2$$43$$) + ($y1$$32$$ - $y2$$31$$) * ($y1$$32$$ - $y2$$31$$));
    $dvt$$13$$ != this.$_initialPinchZoomDist$ && (this.$_triggerViewportChange$ = !0);
    this.$handleZoomWheel$($dvt$$13$$ / this.$_initialPinchZoomDist$ * this.$_initialPinchZoomLength$, this.$_initialPinchZoomTime$, this.$_initialPinchZoomLoc$, !1);
  };
  $dvt$$13$$.$TimeComponent$.prototype.$endPinchZoom$ = function $$dvt$$13$$$$TimeComponent$$$$endPinchZoom$$() {
    this.$_initialPinchZoomTime$ = this.$_initialPinchZoomLength$ = this.$_initialPinchZoomLoc$ = this.$_initialPinchZoomDist$ = null;
    this.$_triggerViewportChange$ && (this.$_triggerViewportChange$ = !1, this.dispatchEvent($dvt$$13$$.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_timeAxis$.$_scale$)));
  };
  $dvt$$13$$.$TimeComponent$.prototype.$panZoomCanvasBy$ = function $$dvt$$13$$$$TimeComponent$$$$panZoomCanvasBy$$($dvt$$13$$) {
    if (this.$_isVertical$) {
      $dvt$$13$$ = this.$_timeZoomCanvas$.$getTranslateY$() - $dvt$$13$$;
      var $minTranslateX_minTranslateY_widthFactor$$4$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startY$), $maxTranslateX_maxTranslateY_viewTime$$1$$ = this.$_startY$;
      $dvt$$13$$ < $minTranslateX_minTranslateY_widthFactor$$4$$ ? $dvt$$13$$ = $minTranslateX_minTranslateY_widthFactor$$4$$ : $dvt$$13$$ > $maxTranslateX_maxTranslateY_viewTime$$1$$ && ($dvt$$13$$ = $maxTranslateX_maxTranslateY_viewTime$$1$$);
      this.$_timeZoomCanvas$.$setTranslateY$($dvt$$13$$);
      $dvt$$13$$ -= this.$_startY$;
      this.$setAbsoluteStartPos$($dvt$$13$$);
    } else {
      $dvt$$13$$ = this.$_timeZoomCanvas$.$getTranslateX$() - $dvt$$13$$, $minTranslateX_minTranslateY_widthFactor$$4$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startX$), $maxTranslateX_maxTranslateY_viewTime$$1$$ = this.$_startX$, $dvt$$13$$ < $minTranslateX_minTranslateY_widthFactor$$4$$ ? $dvt$$13$$ = $minTranslateX_minTranslateY_widthFactor$$4$$ : $dvt$$13$$ > $maxTranslateX_maxTranslateY_viewTime$$1$$ && ($dvt$$13$$ = $maxTranslateX_maxTranslateY_viewTime$$1$$), this.$_timeZoomCanvas$.$setTranslateX$($dvt$$13$$), 
      this.$setAbsoluteStartPos$($dvt$$13$$ - this.$_startX$), $dvt$$13$$ = this.$getRelativeStartPos$();
    }
    $minTranslateX_minTranslateY_widthFactor$$4$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$);
    $maxTranslateX_maxTranslateY_viewTime$$1$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
    this.$_viewStartTime$ = this.$_start$ - $dvt$$13$$ / $minTranslateX_minTranslateY_widthFactor$$4$$;
    this.$_viewEndTime$ = this.$_viewStartTime$ + $maxTranslateX_maxTranslateY_viewTime$$1$$;
  };
  $dvt$$13$$.$TimeComponent$.prototype.$handleZoom$ = function $$dvt$$13$$$$TimeComponent$$$$handleZoom$$($zoomIn$$1$$) {
    $zoomIn$$1$$ ? this.$zoomBy$(1 / $dvt$$13$$.$Timeline$.$ZOOM_BY_VALUE$) : this.$zoomBy$($dvt$$13$$.$Timeline$.$ZOOM_BY_VALUE$);
  };
  $dvt$$13$$.$TimeComponent$.prototype.$enableZoomButton$ = function $$dvt$$13$$$$TimeComponent$$$$enableZoomButton$$($dvt$$13$$) {
    $dvt$$13$$ ? (this.$zoomin$.$setEnabled$(!0), this.$zoomin$.$drawUpState$()) : (this.$zoomout$.$setEnabled$(!0), this.$zoomout$.$drawUpState$());
  };
  $dvt$$13$$.$TimeComponent$.prototype.$disableZoomButton$ = function $$dvt$$13$$$$TimeComponent$$$$disableZoomButton$$($dvt$$13$$) {
    $dvt$$13$$ ? (this.$zoomin$.$setEnabled$(!1), this.$zoomin$.$drawDisabledState$(), this.$zoomin$.setCursor(null)) : (this.$zoomout$.$setEnabled$(!1), this.$zoomout$.$drawDisabledState$(), this.$zoomout$.setCursor(null));
  };
  $dvt$$13$$.$TimeComponent$.prototype.$applyTimeZoomCanvasPosition$ = function $$dvt$$13$$$$TimeComponent$$$$applyTimeZoomCanvasPosition$$() {
    this.$_isVertical$ ? this.$_timeZoomCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_timeZoomCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$);
  };
  $dvt$$13$$.$TimeComponent$.prototype.$setAbsoluteStartPos$ = function $$dvt$$13$$$$TimeComponent$$$$setAbsoluteStartPos$$($dvt$$13$$) {
    this.$_startPos$ = $dvt$$13$$;
  };
  $dvt$$13$$.$TimeComponent$.prototype.$getRelativeStartPos$ = function $$dvt$$13$$$$TimeComponent$$$$getRelativeStartPos$$() {
    return this.$isRTL$() && !this.$_isVertical$ ? this.$_canvasLength$ - this.$_contentLength$ - this.$_startPos$ : this.$_startPos$;
  };
  $dvt$$13$$.$TimeComponent$.prototype.$setRelativeStartPos$ = function $$dvt$$13$$$$TimeComponent$$$$setRelativeStartPos$$($dvt$$13$$) {
    this.$isRTL$() && !this.$_isVertical$ ? this.$_startPos$ = this.$_canvasLength$ - this.$_contentLength$ - $dvt$$13$$ : this.$_startPos$ = $dvt$$13$$;
  };
  $dvt$$13$$.$TimeComponent$.prototype.$setStartXOffset$ = function $$dvt$$13$$$$TimeComponent$$$$setStartXOffset$$($dvt$$13$$) {
    this.$_startX$ = $dvt$$13$$;
  };
  $dvt$$13$$.$TimeComponent$.prototype.$setStartYOffset$ = function $$dvt$$13$$$$TimeComponent$$$$setStartYOffset$$($dvt$$13$$) {
    this.$_startY$ = $dvt$$13$$;
  };
})(dvt);

  return dvt;
});
