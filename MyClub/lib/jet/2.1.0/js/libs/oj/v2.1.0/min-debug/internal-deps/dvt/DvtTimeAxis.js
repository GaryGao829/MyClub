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

(function($dvt$$12$$) {
  function $DvtTimeAxisParser$$() {
  }
  function $DvtTimeAxisFormatter$$($dvt$$12$$, $DvtTimeAxisParser$$) {
    this.Init($dvt$$12$$, $DvtTimeAxisParser$$);
  }
  function $DvtTimeAxisDefaults$$() {
    this.Init({alta:$DvtTimeAxisDefaults$$.$VERSION_1$});
  }
  function $DvtTimeAxisCalendar$$($dvt$$12$$) {
    this.Init($dvt$$12$$);
  }
  $dvt$$12$$.$TimeAxis$ = function $$dvt$$12$$$$TimeAxis$$($dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$) {
    this.Init($dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$);
  };
  $dvt$$12$$.$Obj$.$createSubclass$($dvt$$12$$.$TimeAxis$, $dvt$$12$$.$BaseComponent$);
  $dvt$$12$$.$TimeAxis$.$ORIENTATION_VERTICAL$ = "vertical";
  $dvt$$12$$.$TimeAxis$.$supportsTouch$ = function $$dvt$$12$$$$TimeAxis$$$supportsTouch$$() {
    return $dvt$$12$$.$Agent$.$isTouchDevice$();
  };
  $dvt$$12$$.$TimeAxis$.$getDatePosition$ = function $$dvt$$12$$$$TimeAxis$$$getDatePosition$$($dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$) {
    $DvtTimeAxisFormatter$$ = ($DvtTimeAxisFormatter$$ - $dvt$$12$$) * $DvtTimeAxisDefaults$$;
    $dvt$$12$$ = $DvtTimeAxisParser$$ - $dvt$$12$$;
    return 0 == $DvtTimeAxisFormatter$$ || 0 == $dvt$$12$$ ? 0 : $DvtTimeAxisFormatter$$ / $dvt$$12$$;
  };
  $dvt$$12$$.$TimeAxis$.$getPositionDate$ = function $$dvt$$12$$$$TimeAxis$$$getPositionDate$$($dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$) {
    $DvtTimeAxisParser$$ = $DvtTimeAxisFormatter$$ * ($DvtTimeAxisParser$$ - $dvt$$12$$);
    return 0 == $DvtTimeAxisParser$$ || 0 == $DvtTimeAxisDefaults$$ ? $dvt$$12$$ : $DvtTimeAxisParser$$ / $DvtTimeAxisDefaults$$ + $dvt$$12$$;
  };
  $dvt$$12$$.$TimeAxis$.newInstance = function $$dvt$$12$$$$TimeAxis$$newInstance$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$) {
    return new $dvt$$12$$.$TimeAxis$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$);
  };
  $dvt$$12$$.$TimeAxis$.$_VALID_SCALES$ = "seconds minutes hours days weeks months quarters years".split(" ");
  $dvt$$12$$.$TimeAxis$.prototype.Init = function $$dvt$$12$$$$TimeAxis$$$Init$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisRenderer$$) {
    $dvt$$12$$.$TimeAxis$.$superclass$.Init.call(this, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisRenderer$$);
    this.$_calendar$ = new $DvtTimeAxisCalendar$$;
    this.$_borderWidth$ = $DvtTimeAxisStyleUtils$$.$DEFAULT_BORDER_WIDTH$;
    this.$setBorderVisibility$(!1, !1, !1, !1);
    this.$_dateToIsoConverter$ = $DvtTimeAxisParser$$.$getLocaleHelpers$().dateToIsoConverter;
    this.$_dateFormatStrings$ = {$dayNames$:[$dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_SUNDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_MONDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_TUESDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_WEDNESDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, 
    "DAY_SHORT_THURSDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_FRIDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_SATURDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "DAY_SUNDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "DAY_MONDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, 
    "DAY_TUESDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "DAY_WEDNESDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "DAY_THURSDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "DAY_FRIDAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "DAY_SATURDAY", null)], $monthNames$:[$dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, 
    "MONTH_SHORT_JANUARY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_FEBRUARY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MARCH", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_APRIL", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, 
    "MONTH_SHORT_JUNE", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_JULY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_AUGUST", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_SEPTEMBER", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_OCTOBER", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, 
    "MONTH_SHORT_NOVEMBER", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_DECEMBER", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_JANUARY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_FEBRUARY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_MARCH", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, 
    "MONTH_APRIL", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_MAY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_JUNE", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_JULY", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_AUGUST", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_SEPTEMBER", 
    null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_OCTOBER", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_NOVEMBER", null), $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "MONTH_DECEMBER", null)]};
    this.$Defaults$ = new $DvtTimeAxisDefaults$$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$SetOptions$ = function $$dvt$$12$$$$TimeAxis$$$$SetOptions$$($dvt$$12$$) {
    this.$Options$ = this.$Defaults$.$calcOptions$($dvt$$12$$);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$Parse$ = function $$dvt$$12$$$$TimeAxis$$$$Parse$$($dvt$$12$$) {
    this.$_parser$ = new $DvtTimeAxisParser$$;
    return this.$_parser$.parse($dvt$$12$$);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$_applyParsedProperties$ = function $$dvt$$12$$$$TimeAxis$$$$_applyParsedProperties$$($DvtTimeAxisParser$$) {
    var $DvtTimeAxisFormatter$$ = $DvtTimeAxisParser$$.orientation;
    this.$_isVertical$ = $DvtTimeAxisFormatter$$ && $DvtTimeAxisFormatter$$ == $dvt$$12$$.$TimeAxis$.$ORIENTATION_VERTICAL$ ? !0 : !1;
    this.$setIsVertical$(this.$_isVertical$);
    this.$_shortDesc$ = $DvtTimeAxisParser$$.$shortDesc$;
    this.$_zoomOrder$ = $DvtTimeAxisParser$$.$zoomOrder$ ? $DvtTimeAxisParser$$.$zoomOrder$.reverse() : [$DvtTimeAxisParser$$.scale];
    this.$_timeZoneOffsets$ = $DvtTimeAxisParser$$.$timeZoneOffsets$;
    this.$_customTimeScales$ = $DvtTimeAxisParser$$.$customTimeScales$;
    this.$_customFormatScales$ = $DvtTimeAxisParser$$.$customFormatScales$;
    this.$_start$ = $DvtTimeAxisParser$$.start;
    this.$_end$ = $DvtTimeAxisParser$$.end;
    this.$_inlineStyle$ = $DvtTimeAxisParser$$.$inlineStyle$;
    this.$_scale$ = $DvtTimeAxisParser$$.scale;
    this.$_converter$ = $DvtTimeAxisParser$$.$converter$;
    this.$applyStyleValues$();
  };
  $dvt$$12$$.$TimeAxis$.prototype.$setContentLength$ = function $$dvt$$12$$$$TimeAxis$$$$setContentLength$$($dvt$$12$$, $DvtTimeAxisParser$$) {
    if ("undefined" === typeof $DvtTimeAxisParser$$ || null === $DvtTimeAxisParser$$) {
      $DvtTimeAxisParser$$ = this.$_canvasLength$;
    }
    this.$_contentLength$ = $DvtTimeAxisParser$$ < $dvt$$12$$ ? $dvt$$12$$ : $DvtTimeAxisParser$$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$isRTL$ = function $$dvt$$12$$$$TimeAxis$$$$isRTL$$() {
    return $dvt$$12$$.$Agent$.$isRightToLeft$(this.$getCtx$());
  };
  $dvt$$12$$.$TimeAxis$.prototype.$isVertical$ = function $$dvt$$12$$$$TimeAxis$$$$isVertical$$() {
    return this.$_isVertical$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$render$ = function $$dvt$$12$$$$TimeAxis$$$$render$$($dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$) {
    $dvt$$12$$ && !this.$Options$ && (this.$Width$ = $DvtTimeAxisParser$$, this.$Height$ = $DvtTimeAxisFormatter$$, this.$_prepareCanvasViewport$(), this.$getPreferredLength$($dvt$$12$$, this.$_canvasLength$));
    this.$_handleResize$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$getPreferredLength$ = function $$dvt$$12$$$$TimeAxis$$$$getPreferredLength$$($dvt$$12$$, $DvtTimeAxisParser$$) {
    this.$SetOptions$($dvt$$12$$);
    this.$_resources$ = this.$Options$._resources;
    null == this.$_resources$ && (this.$_resources$ = []);
    this.$_dateToIsoConverter$ || (this.$_dateToIsoConverter$ = this.$getCtx$().$getLocaleHelpers$().dateToIsoConverter);
    var $DvtTimeAxisFormatter$$ = this.$Parse$(this.$Options$);
    this.$_applyParsedProperties$($DvtTimeAxisFormatter$$);
    this.$_scale$ && this.$prepareTimeAxisZoomLevelIntervals$(this.$_start$, this.$_end$, $DvtTimeAxisParser$$);
    return this.$_contentLength$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$hasValidOptions$ = function $$dvt$$12$$$$TimeAxis$$$$hasValidOptions$$() {
    var $DvtTimeAxisParser$$ = this.$_scale$ && -1 != $dvt$$12$$.$ArrayUtils$.$getIndex$($dvt$$12$$.$TimeAxis$.$_VALID_SCALES$, this.$_scale$), $DvtTimeAxisFormatter$$ = this.$_scale$ && this.$_customTimeScales$ && this.$_customTimeScales$[this.$_scale$], $DvtTimeAxisDefaults$$ = this.$_start$ && this.$_end$ && this.$_end$ > this.$_start$;
    return ($DvtTimeAxisParser$$ || $DvtTimeAxisFormatter$$) && $DvtTimeAxisDefaults$$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$GetComponentDescription$ = function $$dvt$$12$$$$TimeAxis$$$$GetComponentDescription$$() {
    return this.$_shortDesc$ ? this.$_shortDesc$ : $dvt$$12$$.$Bundle$.$getTranslatedString$($dvt$$12$$.$Bundle$.$UTIL_PREFIX$, "TIMEAXIS");
  };
  $dvt$$12$$.$TimeAxis$.prototype.$applyStyleValues$ = function $$dvt$$12$$$$TimeAxis$$$$applyStyleValues$$() {
    this.$_axisStyle$ = new $dvt$$12$$.$CSSStyle$($DvtTimeAxisStyleUtils$$.$getAxisStyle$(this.$Options$));
    this.$_axisStyle$.$parseInlineStyle$(this.$_inlineStyle$);
    var $DvtTimeAxisParser$$ = this.$_axisStyle$.$getBorderWidth$();
    this.$_axisStyle$.$parseInlineStyle$("border:" + 2 * $DvtTimeAxisParser$$ + "px;");
    this.$setBorderWidth$($DvtTimeAxisParser$$);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$_prepareCanvasViewport$ = function $$dvt$$12$$$$TimeAxis$$$$_prepareCanvasViewport$$() {
    this.$_isVertical$ ? (this.$_canvasLength$ = this.$Height$, this.$_canvasSize$ = this.$Width$) : (this.$_canvasLength$ = this.$Width$, this.$_canvasSize$ = this.$Height$);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$_setAxisDimensions$ = function $$dvt$$12$$$$TimeAxis$$$$_setAxisDimensions$$() {
    null !== this.$_canvasSize$ && this.$setContentSize$(this.$_canvasSize$ - this.$getSizeBorderWidth$());
    this.$_axisLength$ = this.$_contentLength$ + this.$getSizeBorderWidth$() - $DvtTimeAxisStyleUtils$$.$DEFAULT_SEPARATOR_WIDTH$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$_updateDimensions$ = function $$dvt$$12$$$$TimeAxis$$$$_updateDimensions$$($dvt$$12$$, $DvtTimeAxisParser$$) {
    this.$Width$ = $dvt$$12$$;
    this.$Height$ = $DvtTimeAxisParser$$;
    this.$_prepareCanvasViewport$();
    this.$setContentLength$(this.$_canvasLength$);
    this.$_setAxisDimensions$();
  };
  $dvt$$12$$.$TimeAxis$.prototype.$_handleResize$ = function $$dvt$$12$$$$TimeAxis$$$$_handleResize$$($dvt$$12$$, $DvtTimeAxisParser$$) {
    this.$_updateDimensions$($dvt$$12$$, $DvtTimeAxisParser$$);
    $DvtTimeAxisRenderer$$.$renderTimeAxis$(this);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$prepareTimeAxisZoomLevelIntervals$ = function $$dvt$$12$$$$TimeAxis$$$$prepareTimeAxisZoomLevelIntervals$$($dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$) {
    this.$setConverter$(this.$_converter$);
    this.$setType$("short", this.$_dateFormatStrings$);
    this.$_dates$ = [];
    this.$_labels$ = [];
    this.$_zoomLevelLengths$ = [];
    this.$_isVertical$ ? this.$setDefaultConverter$(this.$_resources$.converterVert) : this.$setDefaultConverter$(this.$_resources$.converter);
    this.$_timeZoneOffsets$ && this.$setTimeZoneOffsets$(this.$_timeZoneOffsets$);
    for (var $DvtTimeAxisDefaults$$ = this.$_scale$, $DvtTimeAxisCalendar$$ = 0;$DvtTimeAxisCalendar$$ < this.$_zoomOrder$.length;$DvtTimeAxisCalendar$$++) {
      var $DvtTimeAxisRenderer$$ = this.$_zoomOrder$[$DvtTimeAxisCalendar$$], $DvtTimeAxisStyleUtils$$ = this.$_prepareScaleDatesLabels$($DvtTimeAxisRenderer$$, $DvtTimeAxisDefaults$$, $dvt$$12$$, $DvtTimeAxisParser$$);
      this.$_prepareZoomLevelLengths$($DvtTimeAxisCalendar$$, $DvtTimeAxisRenderer$$, $dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisStyleUtils$$, $DvtTimeAxisFormatter$$);
    }
    this.$setScale$($DvtTimeAxisDefaults$$);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$_prepareScaleDatesLabels$ = function $$dvt$$12$$$$TimeAxis$$$$_prepareScaleDatesLabels$$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$, $DvtTimeAxisCalendar$$) {
    this.$setScale$($DvtTimeAxisParser$$);
    var $DvtTimeAxisRenderer$$ = Infinity, $maxSize$$5$$ = 0, $customFormatScale_customScale_labelTexts$$;
    if (this.$_customTimeScales$ && this.$_customTimeScales$[$DvtTimeAxisParser$$]) {
      $customFormatScale_customScale_labelTexts$$ = this.$_customTimeScales$[$DvtTimeAxisParser$$], $DvtTimeAxisParser$$ = $customFormatScale_customScale_labelTexts$$.times, $customFormatScale_customScale_labelTexts$$ = $customFormatScale_customScale_labelTexts$$.labels;
    } else {
      if (this.$_customFormatScales$ && this.$_customFormatScales$[$DvtTimeAxisParser$$]) {
        $customFormatScale_customScale_labelTexts$$ = this.$_customFormatScales$[$DvtTimeAxisParser$$], $DvtTimeAxisParser$$ = $customFormatScale_customScale_labelTexts$$.times, $customFormatScale_customScale_labelTexts$$ = $customFormatScale_customScale_labelTexts$$.labels;
      } else {
        for ($DvtTimeAxisParser$$ = [], $customFormatScale_customScale_labelTexts$$ = [], $DvtTimeAxisDefaults$$ = this.$adjustDate$($DvtTimeAxisDefaults$$).getTime(), $DvtTimeAxisParser$$.push($DvtTimeAxisDefaults$$);$DvtTimeAxisDefaults$$ < $DvtTimeAxisCalendar$$;) {
          $customFormatScale_customScale_labelTexts$$.push(this.$formatDate$(new Date($DvtTimeAxisDefaults$$))), $DvtTimeAxisDefaults$$ = this.$getNextDate$($DvtTimeAxisDefaults$$).getTime(), $DvtTimeAxisParser$$.push($DvtTimeAxisDefaults$$);
        }
      }
    }
    $DvtTimeAxisCalendar$$ = [];
    for (var $j$$96$$ = 0;$j$$96$$ < $customFormatScale_customScale_labelTexts$$.length;$j$$96$$++) {
      $DvtTimeAxisDefaults$$ = $DvtTimeAxisParser$$[$j$$96$$];
      var $label$$104$$ = new $dvt$$12$$.$OutputText$(this.$getCtx$(), $customFormatScale_customScale_labelTexts$$[$j$$96$$], 0, 0, "s_label" + $DvtTimeAxisDefaults$$);
      $label$$104$$.$setCSSStyle$($DvtTimeAxisStyleUtils$$.$getAxisLabelStyle$(this.$Options$));
      $label$$104$$.time = $DvtTimeAxisDefaults$$;
      var $nextTime$$ = $DvtTimeAxisParser$$[$j$$96$$ + 1];
      this.$addChild$($label$$104$$);
      var $dim$$75_sizeDim$$ = $label$$104$$.$getDimensions$();
      this.removeChild($label$$104$$);
      if (this.$_isVertical$) {
        var $lengthDim$$ = $dim$$75_sizeDim$$.$h$, $dim$$75_sizeDim$$ = $dim$$75_sizeDim$$.$w$, $defaultLength$$ = $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_HEIGHT$
      } else {
        $lengthDim$$ = $dim$$75_sizeDim$$.$w$, $dim$$75_sizeDim$$ = $dim$$75_sizeDim$$.$h$, $defaultLength$$ = $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_WIDTH$;
      }
      $DvtTimeAxisDefaults$$ = ($nextTime$$ - $DvtTimeAxisDefaults$$) / Math.max($defaultLength$$, $lengthDim$$ + 2 * $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_PADDING$);
      $DvtTimeAxisDefaults$$ < $DvtTimeAxisRenderer$$ && ($DvtTimeAxisRenderer$$ = $DvtTimeAxisDefaults$$);
      $dim$$75_sizeDim$$ > $maxSize$$5$$ && ($maxSize$$5$$ = $dim$$75_sizeDim$$);
      $DvtTimeAxisCalendar$$.push($label$$104$$);
    }
    this.$setContentSize$($maxSize$$5$$ + 2 * $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_PADDING$);
    this.$_dates$.push($DvtTimeAxisParser$$);
    this.$_labels$.push($DvtTimeAxisCalendar$$);
    this.$setScale$($DvtTimeAxisFormatter$$);
    return $DvtTimeAxisRenderer$$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$_prepareZoomLevelLengths$ = function $$dvt$$12$$$$TimeAxis$$$$_prepareZoomLevelLengths$$($dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$, $DvtTimeAxisCalendar$$, $DvtTimeAxisRenderer$$) {
    $DvtTimeAxisFormatter$$ = null !== this.$_canvasSize$ ? $DvtTimeAxisRenderer$$ : ($DvtTimeAxisDefaults$$ - $DvtTimeAxisFormatter$$) / $DvtTimeAxisCalendar$$;
    this.$_zoomLevelLengths$.push($DvtTimeAxisFormatter$$);
    $DvtTimeAxisParser$$ == this.$_scale$ && (this.$_zoomLevelOrder$ = $dvt$$12$$, this.$setContentLength$($DvtTimeAxisFormatter$$, $DvtTimeAxisRenderer$$));
    0 == $dvt$$12$$ && (this.$_maxContentLength$ = this.$_labels$[this.$_labels$.length - 1].length * $DvtTimeAxisRenderer$$);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$setScale$ = function $$dvt$$12$$$$TimeAxis$$$$setScale$$($dvt$$12$$) {
    this.$_scale$ = $dvt$$12$$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$setTimeZoneOffsets$ = function $$dvt$$12$$$$TimeAxis$$$$setTimeZoneOffsets$$($dvt$$12$$) {
    this.$_timeZoneOffsets$ = $dvt$$12$$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$increaseScale$ = function $$dvt$$12$$$$TimeAxis$$$$increaseScale$$() {
    for (var $dvt$$12$$ = 0;$dvt$$12$$ < this.$_zoomOrder$.length - 1;$dvt$$12$$++) {
      if (this.$_zoomOrder$[$dvt$$12$$] == this.$_scale$) {
        this.$_scale$ = this.$_zoomOrder$[$dvt$$12$$ + 1];
        break;
      }
    }
  };
  $dvt$$12$$.$TimeAxis$.prototype.$decreaseScale$ = function $$dvt$$12$$$$TimeAxis$$$$decreaseScale$$() {
    for (var $dvt$$12$$ = 1;$dvt$$12$$ < this.$_zoomOrder$.length;$dvt$$12$$++) {
      if (this.$_zoomOrder$[$dvt$$12$$] == this.$_scale$) {
        this.$_scale$ = this.$_zoomOrder$[$dvt$$12$$ - 1];
        break;
      }
    }
  };
  $dvt$$12$$.$TimeAxis$.prototype.$setConverter$ = function $$dvt$$12$$$$TimeAxis$$$$setConverter$$($dvt$$12$$) {
    this.$_converter$ = $dvt$$12$$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$setDefaultConverter$ = function $$dvt$$12$$$$TimeAxis$$$$setDefaultConverter$$($dvt$$12$$) {
    this.$_defaultConverter$ = $dvt$$12$$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$setContentSize$ = function $$dvt$$12$$$$TimeAxis$$$$setContentSize$$($dvt$$12$$) {
    $dvt$$12$$ > this.$_contentSize$ && (this.$_contentSize$ = $dvt$$12$$);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$getTimeAxisWidth$ = function $$dvt$$12$$$$TimeAxis$$$$getTimeAxisWidth$$() {
    null == this.$_timeAxisWidth$ && (this.$_timeAxisWidth$ = 30);
    return this.$_timeAxisWidth$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$setBorderWidth$ = function $$dvt$$12$$$$TimeAxis$$$$setBorderWidth$$($dvt$$12$$) {
    this.$_borderWidth$ = $dvt$$12$$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$setBorderVisibility$ = function $$dvt$$12$$$$TimeAxis$$$$setBorderVisibility$$($dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$) {
    this.$_borderTopWidth$ = ($dvt$$12$$ | 0) * this.$_borderWidth$;
    this.$_borderRightWidth$ = ($DvtTimeAxisParser$$ | 0) * this.$_borderWidth$;
    this.$_borderBottomWidth$ = ($DvtTimeAxisFormatter$$ | 0) * this.$_borderWidth$;
    this.$_borderLeftWidth$ = ($DvtTimeAxisDefaults$$ | 0) * this.$_borderWidth$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$calcStrokeDashArray$ = function $$dvt$$12$$$$TimeAxis$$$$calcStrokeDashArray$$() {
    for (var $dvt$$12$$ = this.$_isVertical$ ? {top:this.$getSize$(), right:this.$_axisLength$, bottom:this.$getSize$(), left:this.$_axisLength$} : {top:this.$_axisLength$, right:this.$getSize$(), bottom:this.$_axisLength$, left:this.$getSize$()}, $DvtTimeAxisParser$$ = [], $DvtTimeAxisFormatter$$ = 0, $DvtTimeAxisDefaults$$ = 1, $DvtTimeAxisCalendar$$ = ["top", "right", "bottom", "left"], $DvtTimeAxisRenderer$$ = 0;$DvtTimeAxisRenderer$$ < $DvtTimeAxisCalendar$$.length;$DvtTimeAxisRenderer$$++) {
      0 < this.$getBorderWidth$($DvtTimeAxisCalendar$$[$DvtTimeAxisRenderer$$]) == $DvtTimeAxisDefaults$$ ? $DvtTimeAxisFormatter$$ += $dvt$$12$$[$DvtTimeAxisCalendar$$[$DvtTimeAxisRenderer$$]] : ($DvtTimeAxisParser$$.push($DvtTimeAxisFormatter$$), $DvtTimeAxisFormatter$$ = $dvt$$12$$[$DvtTimeAxisCalendar$$[$DvtTimeAxisRenderer$$]], $DvtTimeAxisDefaults$$ = Math.abs($DvtTimeAxisDefaults$$ - 1));
    }
    $DvtTimeAxisParser$$.push($DvtTimeAxisFormatter$$);
    return $DvtTimeAxisParser$$.toString();
  };
  $dvt$$12$$.$TimeAxis$.prototype.$getSizeBorderWidth$ = function $$dvt$$12$$$$TimeAxis$$$$getSizeBorderWidth$$() {
    return this.$_borderTopWidth$ + this.$_borderBottomWidth$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$getBorderWidth$ = function $$dvt$$12$$$$TimeAxis$$$$getBorderWidth$$($dvt$$12$$) {
    switch($dvt$$12$$) {
      case "top":
        return this.$_borderTopWidth$;
      case "right":
        return this.$_borderRightWidth$;
      case "bottom":
        return this.$_borderBottomWidth$;
      case "left":
        return this.$_borderLeftWidth$;
      default:
        return this.$_borderWidth$;
    }
  };
  $dvt$$12$$.$TimeAxis$.prototype.$getSize$ = function $$dvt$$12$$$$TimeAxis$$$$getSize$$() {
    return this.$_contentSize$ + this.$getSizeBorderWidth$();
  };
  $dvt$$12$$.$TimeAxis$.prototype.$setType$ = function $$dvt$$12$$$$TimeAxis$$$$setType$$($dvt$$12$$, $DvtTimeAxisParser$$) {
    this.$_formatter$ = new $DvtTimeAxisFormatter$$("short" == $dvt$$12$$ ? $DvtTimeAxisFormatter$$.SHORT : $DvtTimeAxisFormatter$$.$LONG$, $DvtTimeAxisParser$$);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$adjustDate$ = function $$dvt$$12$$$$TimeAxis$$$$adjustDate$$($dvt$$12$$) {
    return this.$_calendar$.$adjustDate$(new Date($dvt$$12$$), this.$_scale$);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$getNextDate$ = function $$dvt$$12$$$$TimeAxis$$$$getNextDate$$($dvt$$12$$) {
    return this.$_calendar$.$getNextDate$($dvt$$12$$, this.$_scale$);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$formatDate$ = function $$dvt$$12$$$$TimeAxis$$$$formatDate$$($dvt$$12$$) {
    if (this.$_converter$) {
      var $DvtTimeAxisParser$$;
      $DvtTimeAxisParser$$ = this.$_converter$[this.$_scale$] ? this.$_converter$[this.$_scale$] : this.$_converter$["default"] ? this.$_converter$["default"] : this.$_converter$;
      if ($DvtTimeAxisParser$$.format) {
        return $DvtTimeAxisParser$$.format(this.$_dateToIsoConverter$ ? this.$_dateToIsoConverter$($dvt$$12$$) : $dvt$$12$$);
      }
      if ($DvtTimeAxisParser$$.getAsString) {
        return $DvtTimeAxisParser$$.getAsString($dvt$$12$$);
      }
    }
    if (this.$_defaultConverter$ && this.$_defaultConverter$[this.$_scale$]) {
      $DvtTimeAxisParser$$ = this.$_defaultConverter$[this.$_scale$];
      if ($DvtTimeAxisParser$$.format) {
        return $DvtTimeAxisParser$$.format(this.$_dateToIsoConverter$ ? this.$_dateToIsoConverter$($dvt$$12$$) : $dvt$$12$$);
      }
      if ($DvtTimeAxisParser$$.getAsString) {
        return $DvtTimeAxisParser$$.getAsString($dvt$$12$$);
      }
    }
    return this.$_formatter$.format($dvt$$12$$, this.$_scale$, this.$_timeZoneOffsets$);
  };
  $dvt$$12$$.$TimeAxis$.prototype.$setIsVertical$ = function $$dvt$$12$$$$TimeAxis$$$$setIsVertical$$($dvt$$12$$) {
    this.$_contentSize$ = $dvt$$12$$ ? $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_WIDTH$ : $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_HEIGHT$;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$setCanvasSize$ = function $$dvt$$12$$$$TimeAxis$$$$setCanvasSize$$() {
    this.$_canvasSize$ = null;
  };
  $dvt$$12$$.$TimeAxis$.prototype.$setZoomLevelOrder$ = function $$dvt$$12$$$$TimeAxis$$$$setZoomLevelOrder$$($dvt$$12$$) {
    this.$_zoomLevelOrder$ = $dvt$$12$$;
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtTimeAxisCalendar$$, $dvt$$12$$.$Obj$);
  $DvtTimeAxisCalendar$$.prototype.Init = function $$DvtTimeAxisCalendar$$$$Init$() {
    this.$_dayInMillis$ = 864E5;
  };
  $DvtTimeAxisCalendar$$.prototype.$adjustDate$ = function $$DvtTimeAxisCalendar$$$$$adjustDate$$($dvt$$12$$, $DvtTimeAxisParser$$) {
    var $DvtTimeAxisFormatter$$ = new Date($dvt$$12$$.getTime());
    if ("weeks" == $DvtTimeAxisParser$$) {
      $DvtTimeAxisFormatter$$.setHours(0, 0, 0);
      var $DvtTimeAxisDefaults$$ = ($dvt$$12$$.getDay() - 0 + 7) % 7;
      0 < $DvtTimeAxisDefaults$$ && $DvtTimeAxisFormatter$$.setTime($DvtTimeAxisFormatter$$.getTime() - $DvtTimeAxisDefaults$$ * this.$_dayInMillis$);
    } else {
      "months" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setDate(1) : "days" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setHours(0, 0, 0) : "hours" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setMinutes(0, 0, 0) : "minutes" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setSeconds(0, 0) : "seconds" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setMilliseconds(0) : "quarters" == $DvtTimeAxisParser$$ ? ($DvtTimeAxisFormatter$$.setDate(1), $DvtTimeAxisDefaults$$ = 2 - ($dvt$$12$$.getMonth() + 
      11) % 3, 0 < $DvtTimeAxisDefaults$$ && $DvtTimeAxisFormatter$$.setMonth($DvtTimeAxisFormatter$$.getMonth() + $DvtTimeAxisDefaults$$)) : "halfyears" == $DvtTimeAxisParser$$ ? ($DvtTimeAxisFormatter$$.setDate(1), $DvtTimeAxisDefaults$$ = 5 - ($dvt$$12$$.getMonth() + 11) % 6, 0 < $DvtTimeAxisDefaults$$ && $DvtTimeAxisFormatter$$.setMonth($DvtTimeAxisFormatter$$.getMonth() + $DvtTimeAxisDefaults$$)) : "years" == $DvtTimeAxisParser$$ ? ($DvtTimeAxisFormatter$$.setMonth(0), $DvtTimeAxisFormatter$$.setDate(1)) : 
      "twoyears" == $DvtTimeAxisParser$$ && ($DvtTimeAxisFormatter$$.setMonth(0), $DvtTimeAxisFormatter$$.setDate(1));
    }
    return $DvtTimeAxisFormatter$$;
  };
  $DvtTimeAxisCalendar$$.prototype.$getNextDate$ = function $$DvtTimeAxisCalendar$$$$$getNextDate$$($dvt$$12$$, $DvtTimeAxisParser$$) {
    if ("seconds" == $DvtTimeAxisParser$$) {
      return new Date($dvt$$12$$ + 1E3);
    }
    if ("minutes" == $DvtTimeAxisParser$$) {
      return new Date($dvt$$12$$ + 6E4);
    }
    if ("hours" == $DvtTimeAxisParser$$) {
      return new Date($dvt$$12$$ + 36E5);
    }
    var $DvtTimeAxisFormatter$$ = new Date($dvt$$12$$);
    "days" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setDate($DvtTimeAxisFormatter$$.getDate() + 1) : "weeks" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setDate($DvtTimeAxisFormatter$$.getDate() + 7) : "months" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setMonth($DvtTimeAxisFormatter$$.getMonth() + 1) : "quarters" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setMonth($DvtTimeAxisFormatter$$.getMonth() + 3) : "halfyears" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setMonth($DvtTimeAxisFormatter$$.getMonth() + 
    6) : "years" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setFullYear($DvtTimeAxisFormatter$$.getFullYear() + 1) : "twoyears" == $DvtTimeAxisParser$$ ? $DvtTimeAxisFormatter$$.setFullYear($DvtTimeAxisFormatter$$.getFullYear() + 2) : $DvtTimeAxisFormatter$$.setYear($DvtTimeAxisFormatter$$.getYear() + 1);
    return $DvtTimeAxisFormatter$$;
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtTimeAxisDefaults$$, $dvt$$12$$.$BaseComponentDefaults$, "DvtTimeAxisDefaults");
  $DvtTimeAxisDefaults$$.$VERSION_1$ = {backgroundColor:"rgba(255,255,255,0)", borderColor:"#d9dfe3", separatorColor:"#bcc7d2", labelStyle:new $dvt$$12$$.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #333333;")};
  $dvt$$12$$.$Obj$.$createSubclass$($DvtTimeAxisFormatter$$, $dvt$$12$$.$Obj$);
  $DvtTimeAxisFormatter$$.$LONG$ = 0;
  $DvtTimeAxisFormatter$$.SHORT = 1;
  $DvtTimeAxisFormatter$$.prototype.Init = function $$DvtTimeAxisFormatter$$$$Init$($dvt$$12$$, $DvtTimeAxisParser$$) {
    this.$_type$ = $dvt$$12$$;
    this.$_dateFormatStrings$ = $DvtTimeAxisParser$$;
    this.$_formats$ = [];
    this.$_formats$[0] = {};
    this.$_formats$[0].seconds = "HH:MM:ss";
    this.$_formats$[0].minutes = "HH:MM";
    this.$_formats$[0].hours = "HH:MM";
    this.$_formats$[0].days = "dddd";
    this.$_formats$[0].weeks = "m/dd";
    this.$_formats$[0].months = "mmmm";
    this.$_formats$[0].quarters = "mmmm";
    this.$_formats$[0].halfyears = "yyyy";
    this.$_formats$[0].years = "yyyy";
    this.$_formats$[0].twoyears = "yyyy";
    this.$_formats$[1] = {};
    this.$_formats$[1].seconds = "HH:MM:ss";
    this.$_formats$[1].minutes = "HH:MM";
    this.$_formats$[1].hours = "HH:MM";
    this.$_formats$[1].days = "m/dd";
    this.$_formats$[1].weeks = "m/dd";
    this.$_formats$[1].months = "mmm";
    this.$_formats$[1].quarters = "mmm";
    this.$_formats$[1].halfyears = "yy";
    this.$_formats$[1].years = "yy";
    this.$_formats$[1].twoyears = "yy";
  };
  $DvtTimeAxisFormatter$$.prototype.format = function $$DvtTimeAxisFormatter$$$$format$($dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$) {
    $DvtTimeAxisParser$$ = this.$_formats$[this.$_type$][$DvtTimeAxisParser$$];
    if (null != $DvtTimeAxisParser$$) {
      var $DvtTimeAxisDefaults$$ = !1;
      if ($DvtTimeAxisFormatter$$) {
        $dvt$$12$$ = $dvt$$12$$.getTime();
        for (var $DvtTimeAxisDefaults$$ = Object.keys($DvtTimeAxisFormatter$$), $DvtTimeAxisCalendar$$ = 0, $DvtTimeAxisRenderer$$ = 0;$DvtTimeAxisRenderer$$ < $DvtTimeAxisDefaults$$.length;$DvtTimeAxisRenderer$$++) {
          $dvt$$12$$ >= parseInt($DvtTimeAxisDefaults$$[$DvtTimeAxisRenderer$$], 10) && ($DvtTimeAxisCalendar$$ = $DvtTimeAxisFormatter$$[$DvtTimeAxisDefaults$$[$DvtTimeAxisRenderer$$]]);
        }
        $dvt$$12$$ = new Date($dvt$$12$$ + $DvtTimeAxisCalendar$$);
        $DvtTimeAxisDefaults$$ = !0;
      }
      if (-1 != $DvtTimeAxisParser$$.indexOf(":")) {
        var $DvtTimeAxisStyleUtils$$ = ":"
      } else {
        -1 != $DvtTimeAxisParser$$.indexOf("/") && ($DvtTimeAxisStyleUtils$$ = "/");
      }
      if ($DvtTimeAxisStyleUtils$$) {
        $DvtTimeAxisParser$$ = $DvtTimeAxisParser$$.split($DvtTimeAxisStyleUtils$$);
        $DvtTimeAxisFormatter$$ = this.$getDateFormatValue$($dvt$$12$$, $DvtTimeAxisParser$$[0], $DvtTimeAxisDefaults$$);
        for ($DvtTimeAxisRenderer$$ = 1;$DvtTimeAxisRenderer$$ < $DvtTimeAxisParser$$.length;$DvtTimeAxisRenderer$$++) {
          $DvtTimeAxisFormatter$$ += $DvtTimeAxisStyleUtils$$ + this.$getDateFormatValue$($dvt$$12$$, $DvtTimeAxisParser$$[$DvtTimeAxisRenderer$$], $DvtTimeAxisDefaults$$);
        }
        return $DvtTimeAxisFormatter$$;
      }
      return this.$getDateFormatValue$($dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisDefaults$$);
    }
    return $dvt$$12$$.toLocaleString();
  };
  $DvtTimeAxisFormatter$$.prototype.$getDateFormatValue$ = function $$DvtTimeAxisFormatter$$$$$getDateFormatValue$$($dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$) {
    if ($DvtTimeAxisFormatter$$) {
      switch($DvtTimeAxisParser$$) {
        case "ss":
          return $dvt$$12$$ = $dvt$$12$$.getUTCSeconds(), 10 > $dvt$$12$$ ? "0" + $dvt$$12$$ : $dvt$$12$$;
        case "HH":
          return $dvt$$12$$ = $dvt$$12$$.getUTCHours(), 10 > $dvt$$12$$ ? "0" + $dvt$$12$$ : $dvt$$12$$;
        case "MM":
          return $dvt$$12$$ = $dvt$$12$$.getUTCMinutes(), 10 > $dvt$$12$$ ? "0" + $dvt$$12$$ : $dvt$$12$$;
        case "dd":
          return $dvt$$12$$ = $dvt$$12$$.getUTCDate(), 10 > $dvt$$12$$ ? "0" + $dvt$$12$$ : $dvt$$12$$;
        case "dddd":
          return this.$_dateFormatStrings$.$dayNames$[$dvt$$12$$.getUTCDay() + 7];
        case "m":
          return $dvt$$12$$.getUTCMonth() + 1;
        case "mmm":
          return this.$_dateFormatStrings$.$monthNames$[$dvt$$12$$.getUTCMonth()];
        case "mmmm":
          return this.$_dateFormatStrings$.$monthNames$[$dvt$$12$$.getUTCMonth() + 12];
        case "yy":
          return $dvt$$12$$.getUTCFullYear().toString().substring(2, 4);
        default:
          return $dvt$$12$$.getUTCFullYear();
      }
    } else {
      switch($DvtTimeAxisParser$$) {
        case "ss":
          return $dvt$$12$$ = $dvt$$12$$.getSeconds(), 10 > $dvt$$12$$ ? "0" + $dvt$$12$$ : $dvt$$12$$;
        case "HH":
          return $dvt$$12$$ = $dvt$$12$$.getHours(), 10 > $dvt$$12$$ ? "0" + $dvt$$12$$ : $dvt$$12$$;
        case "MM":
          return $dvt$$12$$ = $dvt$$12$$.getMinutes(), 10 > $dvt$$12$$ ? "0" + $dvt$$12$$ : $dvt$$12$$;
        case "dd":
          return $dvt$$12$$ = $dvt$$12$$.getDate(), 10 > $dvt$$12$$ ? "0" + $dvt$$12$$ : $dvt$$12$$;
        case "dddd":
          return this.$_dateFormatStrings$.$dayNames$[$dvt$$12$$.getDay() + 7];
        case "m":
          return $dvt$$12$$.getMonth() + 1;
        case "mmm":
          return this.$_dateFormatStrings$.$monthNames$[$dvt$$12$$.getMonth()];
        case "mmmm":
          return this.$_dateFormatStrings$.$monthNames$[$dvt$$12$$.getMonth() + 12];
        case "yy":
          return $dvt$$12$$.getFullYear().toString().substring(2, 4);
        default:
          return $dvt$$12$$.getFullYear();
      }
    }
  };
  $dvt$$12$$.$Obj$.$createSubclass$($DvtTimeAxisParser$$, $dvt$$12$$.$Obj$, "DvtTimeAxisParser");
  $DvtTimeAxisParser$$.prototype.parse = function $$DvtTimeAxisParser$$$$parse$($dvt$$12$$) {
    this.$_startTime$ = new Date($dvt$$12$$.start);
    this.$_endTime$ = new Date($dvt$$12$$.end);
    var $DvtTimeAxisParser$$ = this.$ParseRootAttributes$();
    $DvtTimeAxisParser$$.$inlineStyle$ = $dvt$$12$$.style;
    $DvtTimeAxisParser$$.id = $dvt$$12$$.id;
    $DvtTimeAxisParser$$.$shortDesc$ = $dvt$$12$$.shortDesc;
    $DvtTimeAxisParser$$.$timeZoneOffsets$ = $dvt$$12$$._tzo;
    $DvtTimeAxisParser$$.$itemPosition$ = $dvt$$12$$._ip;
    $DvtTimeAxisParser$$.$customTimeScales$ = $dvt$$12$$._cts;
    $DvtTimeAxisParser$$.$customFormatScales$ = $dvt$$12$$._cfs;
    $DvtTimeAxisParser$$.scale = $dvt$$12$$.scale;
    $DvtTimeAxisParser$$.$converter$ = $dvt$$12$$.converter;
    $DvtTimeAxisParser$$.$zoomOrder$ = $dvt$$12$$.zoomOrder ? $dvt$$12$$.zoomOrder : null;
    $DvtTimeAxisParser$$.orientation = $dvt$$12$$.orientation ? $dvt$$12$$.orientation : "horizontal";
    return $DvtTimeAxisParser$$;
  };
  $DvtTimeAxisParser$$.prototype.$ParseRootAttributes$ = function $$DvtTimeAxisParser$$$$$ParseRootAttributes$$() {
    var $dvt$$12$$ = {};
    $dvt$$12$$.start = this.$_startTime$.getTime();
    $dvt$$12$$.end = this.$_endTime$.getTime();
    return $dvt$$12$$;
  };
  var $DvtTimeAxisRenderer$$ = {};
  $dvt$$12$$.$Obj$.$createSubclass$($DvtTimeAxisRenderer$$, $dvt$$12$$.$Obj$, "DvtTimeAxisRenderer");
  $DvtTimeAxisRenderer$$.$renderTimeAxis$ = function $$DvtTimeAxisRenderer$$$$renderTimeAxis$$($dvt$$12$$) {
    if ($dvt$$12$$.$hasValidOptions$()) {
      var $DvtTimeAxisParser$$ = $dvt$$12$$.$getSize$();
      $DvtTimeAxisRenderer$$.$_renderAxisBlock$($dvt$$12$$, $DvtTimeAxisParser$$, $DvtTimeAxisStyleUtils$$.$getAxisSeparatorStyle$($dvt$$12$$.$Options$));
    }
  };
  $DvtTimeAxisRenderer$$.$_renderAxisBlock$ = function $$DvtTimeAxisRenderer$$$$_renderAxisBlock$$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$) {
    var $DvtTimeAxisCalendar$$ = 0, $context$$402$$ = $DvtTimeAxisParser$$.$getCtx$();
    if (null == $DvtTimeAxisParser$$.$_axis$) {
      var $cp$$7$$ = new $dvt$$12$$.$ClipPath$;
      $DvtTimeAxisParser$$.$isVertical$() ? ($DvtTimeAxisParser$$.$_axis$ = new $dvt$$12$$.Rect($context$$402$$, $DvtTimeAxisCalendar$$, -$DvtTimeAxisParser$$.$getBorderWidth$("top"), $DvtTimeAxisFormatter$$, $DvtTimeAxisParser$$.$_axisLength$, "axis"), $cp$$7$$.$addRect$($DvtTimeAxisCalendar$$, 0, $DvtTimeAxisFormatter$$, $DvtTimeAxisParser$$.$_contentLength$)) : ($DvtTimeAxisParser$$.$_axis$ = new $dvt$$12$$.Rect($context$$402$$, -$DvtTimeAxisParser$$.$getBorderWidth$("left"), $DvtTimeAxisCalendar$$, 
      $DvtTimeAxisParser$$.$_axisLength$, $DvtTimeAxisFormatter$$, "axis"), $cp$$7$$.$addRect$(0, $DvtTimeAxisCalendar$$, $DvtTimeAxisParser$$.$_contentLength$, $DvtTimeAxisFormatter$$));
      $DvtTimeAxisParser$$.$_axis$.$setCSSStyle$($DvtTimeAxisParser$$.$_axisStyle$);
      $DvtTimeAxisParser$$.$_axis$.$setPixelHinting$();
      $DvtTimeAxisParser$$.$_axis$.$setClipPath$($cp$$7$$);
      $DvtTimeAxisParser$$.$addChild$($DvtTimeAxisParser$$.$_axis$);
      ($DvtTimeAxisFormatter$$ = $DvtTimeAxisStyleUtils$$.$getAxisClass$($DvtTimeAxisParser$$.$Options$)) && $DvtTimeAxisParser$$.$_axis$.$getImpl$().$getElem$().setAttribute("class", $DvtTimeAxisFormatter$$);
    } else {
      $DvtTimeAxisParser$$.$_axis$.$setClipPath$(null), $cp$$7$$ = new $dvt$$12$$.$ClipPath$, $DvtTimeAxisParser$$.$isVertical$() ? ($DvtTimeAxisParser$$.$_axis$.$setX$($DvtTimeAxisCalendar$$), $DvtTimeAxisParser$$.$_axis$.$setY$(-$DvtTimeAxisParser$$.$getBorderWidth$("top")), $DvtTimeAxisParser$$.$_axis$.$setWidth$($DvtTimeAxisFormatter$$), $DvtTimeAxisParser$$.$_axis$.$setHeight$($DvtTimeAxisParser$$.$_axisLength$), $cp$$7$$.$addRect$($DvtTimeAxisCalendar$$, 0, $DvtTimeAxisFormatter$$, $DvtTimeAxisParser$$.$_contentLength$)) : 
      ($DvtTimeAxisParser$$.$_axis$.$setX$(-$DvtTimeAxisParser$$.$getBorderWidth$("left")), $DvtTimeAxisParser$$.$_axis$.$setY$($DvtTimeAxisCalendar$$), $DvtTimeAxisParser$$.$_axis$.$setWidth$($DvtTimeAxisParser$$.$_axisLength$), $DvtTimeAxisParser$$.$_axis$.$setHeight$($DvtTimeAxisFormatter$$), $cp$$7$$.$addRect$(0, $DvtTimeAxisCalendar$$, $DvtTimeAxisParser$$.$_contentLength$, $DvtTimeAxisFormatter$$)), $DvtTimeAxisParser$$.$_axis$.$setClipPath$($cp$$7$$);
    }
    $DvtTimeAxisParser$$.$_axis$.$removeChildren$();
    $DvtTimeAxisParser$$.$_axis$.$getImpl$().$getElem$().setAttribute("stroke-dasharray", $DvtTimeAxisParser$$.$calcStrokeDashArray$());
    $DvtTimeAxisDefaults$$ = new $dvt$$12$$.$CSSStyle$($DvtTimeAxisDefaults$$);
    $DvtTimeAxisParser$$.$_separatorStroke$ = new $dvt$$12$$.$SolidStroke$($DvtTimeAxisDefaults$$.$getStyle$($dvt$$12$$.$CSSStyle$.$COLOR$));
    $DvtTimeAxisFormatter$$ = $DvtTimeAxisParser$$.$_contentSize$;
    $DvtTimeAxisCalendar$$ = $DvtTimeAxisCalendar$$ + $DvtTimeAxisParser$$.$isVertical$() ? $DvtTimeAxisParser$$.$getBorderWidth$("left") : $DvtTimeAxisParser$$.$getBorderWidth$("top");
    $DvtTimeAxisRenderer$$.$_renderAxisTicksLabels$($DvtTimeAxisParser$$, $DvtTimeAxisParser$$.$_canvasSize$, $DvtTimeAxisParser$$.$_axis$, $DvtTimeAxisParser$$.$_contentLength$, $DvtTimeAxisCalendar$$ + $DvtTimeAxisFormatter$$, $DvtTimeAxisCalendar$$, $DvtTimeAxisCalendar$$);
  };
  $DvtTimeAxisRenderer$$.$_renderAxisTicksLabels$ = function $$DvtTimeAxisRenderer$$$$_renderAxisTicksLabels$$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$, $DvtTimeAxisCalendar$$, $axisEnd$$1$$, $tickStart$$, $labelStart$$) {
    var $context$$403$$ = $DvtTimeAxisParser$$.$getCtx$(), $isRTL$$42$$ = $dvt$$12$$.$Agent$.$isRightToLeft$($context$$403$$), $block$$ = new $dvt$$12$$.$Container$($context$$403$$, "block_0_" + $DvtTimeAxisFormatter$$);
    $block$$.$startPos$ = 0;
    $block$$.$endPos$ = $DvtTimeAxisFormatter$$;
    $DvtTimeAxisDefaults$$.$addChild$($block$$);
    $DvtTimeAxisFormatter$$ = $DvtTimeAxisStyleUtils$$.$getAxisLabelClass$($DvtTimeAxisParser$$.$Options$);
    $DvtTimeAxisDefaults$$ = $DvtTimeAxisStyleUtils$$.$getAxisSeparatorClass$($DvtTimeAxisParser$$.$Options$);
    for (var $dates$$2$$ = $DvtTimeAxisParser$$.$_dates$[$DvtTimeAxisParser$$.$_zoomLevelOrder$], $labels$$32$$ = $DvtTimeAxisParser$$.$_labels$[$DvtTimeAxisParser$$.$_zoomLevelOrder$], $i$$654$$ = 0;$i$$654$$ < $dates$$2$$.length - 1;$i$$654$$++) {
      var $date$$17$$ = $dates$$2$$[$i$$654$$], $next$$16_nextPos$$ = $dates$$2$$[$i$$654$$ + 1], $currentPos$$ = $dvt$$12$$.$TimeAxis$.$getDatePosition$($DvtTimeAxisParser$$.$_start$, $DvtTimeAxisParser$$.$_end$, $date$$17$$, $DvtTimeAxisCalendar$$), $next$$16_nextPos$$ = $dvt$$12$$.$TimeAxis$.$getDatePosition$($DvtTimeAxisParser$$.$_start$, $DvtTimeAxisParser$$.$_end$, $next$$16_nextPos$$, $DvtTimeAxisCalendar$$), $maxLength$$ = $next$$16_nextPos$$ - $currentPos$$;
      0 != $currentPos$$ && (($DvtTimeAxisParser$$.$isVertical$() ? $DvtTimeAxisRenderer$$.$_addTick$($context$$403$$, $block$$, $axisEnd$$1$$, $tickStart$$, $currentPos$$, $currentPos$$, $DvtTimeAxisParser$$.$_separatorStroke$, "s_tick" + $date$$17$$, $DvtTimeAxisDefaults$$) : $isRTL$$42$$ ? $DvtTimeAxisRenderer$$.$_addTick$($context$$403$$, $block$$, $DvtTimeAxisCalendar$$ - $currentPos$$, $DvtTimeAxisCalendar$$ - $currentPos$$, $axisEnd$$1$$, $tickStart$$, $DvtTimeAxisParser$$.$_separatorStroke$, 
      "s_tick" + $date$$17$$, $DvtTimeAxisDefaults$$) : $DvtTimeAxisRenderer$$.$_addTick$($context$$403$$, $block$$, $currentPos$$, $currentPos$$, $axisEnd$$1$$, $tickStart$$, $DvtTimeAxisParser$$.$_separatorStroke$, "s_tick" + $date$$17$$, $DvtTimeAxisDefaults$$)).time = $date$$17$$);
      $DvtTimeAxisParser$$.$isVertical$() ? $DvtTimeAxisRenderer$$.$_addAxisLabel$($block$$, $labels$$32$$[$i$$654$$], $labelStart$$ + ($axisEnd$$1$$ - $labelStart$$) / 2, $currentPos$$ + ($next$$16_nextPos$$ - $currentPos$$) / 2, $axisEnd$$1$$ - $labelStart$$, $DvtTimeAxisFormatter$$) : $isRTL$$42$$ ? $DvtTimeAxisRenderer$$.$_addAxisLabel$($block$$, $labels$$32$$[$i$$654$$], $DvtTimeAxisCalendar$$ - ($currentPos$$ + ($next$$16_nextPos$$ - $currentPos$$) / 2), $labelStart$$ + ($axisEnd$$1$$ - $labelStart$$) / 
      2, $maxLength$$, $DvtTimeAxisFormatter$$) : $DvtTimeAxisRenderer$$.$_addAxisLabel$($block$$, $labels$$32$$[$i$$654$$], $currentPos$$ + ($next$$16_nextPos$$ - $currentPos$$) / 2, $labelStart$$ + ($axisEnd$$1$$ - $labelStart$$) / 2, $maxLength$$, $DvtTimeAxisFormatter$$);
    }
  };
  $DvtTimeAxisRenderer$$.$_addAxisLabel$ = function $$DvtTimeAxisRenderer$$$$_addAxisLabel$$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$, $DvtTimeAxisCalendar$$, $DvtTimeAxisRenderer$$, $DvtTimeAxisStyleUtils$$) {
    $DvtTimeAxisFormatter$$.$setX$($DvtTimeAxisDefaults$$);
    $DvtTimeAxisFormatter$$.$setY$($DvtTimeAxisCalendar$$);
    $DvtTimeAxisFormatter$$.$isTruncated$() && $DvtTimeAxisFormatter$$.$setTextString$($DvtTimeAxisFormatter$$.$getUntruncatedTextString$());
    $dvt$$12$$.$TextUtils$.$fitText$($DvtTimeAxisFormatter$$, $DvtTimeAxisRenderer$$, Infinity, $DvtTimeAxisParser$$);
    $DvtTimeAxisFormatter$$.$alignCenter$();
    $dvt$$12$$.$TextUtils$.$centerTextVertically$($DvtTimeAxisFormatter$$, $DvtTimeAxisCalendar$$);
    $DvtTimeAxisStyleUtils$$ && $DvtTimeAxisFormatter$$.$getImpl$().$getElem$().setAttribute("class", $DvtTimeAxisStyleUtils$$);
  };
  $DvtTimeAxisRenderer$$.$_addTick$ = function $$DvtTimeAxisRenderer$$$$_addTick$$($DvtTimeAxisParser$$, $DvtTimeAxisFormatter$$, $DvtTimeAxisDefaults$$, $DvtTimeAxisCalendar$$, $DvtTimeAxisRenderer$$, $DvtTimeAxisStyleUtils$$, $stroke$$99$$, $id$$210$$, $tickClass$$) {
    $DvtTimeAxisParser$$ = new $dvt$$12$$.$Line$($DvtTimeAxisParser$$, $DvtTimeAxisDefaults$$, $DvtTimeAxisRenderer$$, $DvtTimeAxisCalendar$$, $DvtTimeAxisStyleUtils$$, $id$$210$$);
    $DvtTimeAxisParser$$.$setStroke$($stroke$$99$$);
    $DvtTimeAxisParser$$.$setPixelHinting$();
    $DvtTimeAxisFormatter$$.$addChild$($DvtTimeAxisParser$$);
    $tickClass$$ && $DvtTimeAxisParser$$.$getImpl$().$getElem$().setAttribute("class", $tickClass$$);
    return $DvtTimeAxisParser$$;
  };
  var $DvtTimeAxisStyleUtils$$ = {};
  $dvt$$12$$.$Obj$.$createSubclass$($DvtTimeAxisStyleUtils$$, $dvt$$12$$.$Obj$, "DvtTimeAxisStyleUtils");
  $DvtTimeAxisStyleUtils$$.$DEFAULT_BORDER_WIDTH$ = 1;
  $DvtTimeAxisStyleUtils$$.$DEFAULT_SEPARATOR_WIDTH$ = 1;
  $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_WIDTH$ = 50;
  $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_HEIGHT$ = 21;
  $DvtTimeAxisStyleUtils$$.$DEFAULT_INTERVAL_PADDING$ = 2;
  $DvtTimeAxisStyleUtils$$.$getAxisStyle$ = function $$DvtTimeAxisStyleUtils$$$$getAxisStyle$$($dvt$$12$$) {
    var $DvtTimeAxisParser$$ = "", $DvtTimeAxisFormatter$$ = $DvtTimeAxisStyleUtils$$.$getBackgroudColor$($dvt$$12$$);
    $DvtTimeAxisFormatter$$ && ($DvtTimeAxisParser$$ = $DvtTimeAxisParser$$ + "background-color:" + $DvtTimeAxisFormatter$$ + ";");
    ($DvtTimeAxisFormatter$$ = $DvtTimeAxisStyleUtils$$.$getBorderColor$($dvt$$12$$)) && ($DvtTimeAxisParser$$ = $DvtTimeAxisParser$$ + "border-color:" + $DvtTimeAxisFormatter$$ + ";");
    ($DvtTimeAxisFormatter$$ = $DvtTimeAxisStyleUtils$$.$getBorderWidth$()) && ($DvtTimeAxisParser$$ = $DvtTimeAxisParser$$ + "border-width:" + $DvtTimeAxisFormatter$$ + ";");
    return $DvtTimeAxisParser$$;
  };
  $DvtTimeAxisStyleUtils$$.$getBackgroudColor$ = function $$DvtTimeAxisStyleUtils$$$$getBackgroudColor$$($dvt$$12$$) {
    return $dvt$$12$$.backgroundColor;
  };
  $DvtTimeAxisStyleUtils$$.$getBorderColor$ = function $$DvtTimeAxisStyleUtils$$$$getBorderColor$$($dvt$$12$$) {
    return $dvt$$12$$.borderColor;
  };
  $DvtTimeAxisStyleUtils$$.$getBorderWidth$ = function $$DvtTimeAxisStyleUtils$$$$getBorderWidth$$() {
    return $DvtTimeAxisStyleUtils$$.$DEFAULT_BORDER_WIDTH$;
  };
  $DvtTimeAxisStyleUtils$$.$getAxisLabelStyle$ = function $$DvtTimeAxisStyleUtils$$$$getAxisLabelStyle$$($dvt$$12$$) {
    return $dvt$$12$$.labelStyle;
  };
  $DvtTimeAxisStyleUtils$$.$getSeparatorColor$ = function $$DvtTimeAxisStyleUtils$$$$getSeparatorColor$$($dvt$$12$$) {
    return $dvt$$12$$.separatorColor;
  };
  $DvtTimeAxisStyleUtils$$.$getAxisSeparatorStyle$ = function $$DvtTimeAxisStyleUtils$$$$getAxisSeparatorStyle$$($dvt$$12$$) {
    var $DvtTimeAxisParser$$ = "";
    ($dvt$$12$$ = $DvtTimeAxisStyleUtils$$.$getSeparatorColor$($dvt$$12$$)) && ($DvtTimeAxisParser$$ = $DvtTimeAxisParser$$ + "color:" + $dvt$$12$$ + ";");
    return $DvtTimeAxisParser$$;
  };
  $DvtTimeAxisStyleUtils$$.$getAxisClass$ = function $$DvtTimeAxisStyleUtils$$$$getAxisClass$$($dvt$$12$$) {
    return $dvt$$12$$._resources ? $dvt$$12$$._resources.axisClass : void 0;
  };
  $DvtTimeAxisStyleUtils$$.$getAxisBorderClass$ = function $$DvtTimeAxisStyleUtils$$$$getAxisBorderClass$$($dvt$$12$$) {
    return $dvt$$12$$._resources ? $dvt$$12$$._resources.axisBorderClass : void 0;
  };
  $DvtTimeAxisStyleUtils$$.$getAxisLabelClass$ = function $$DvtTimeAxisStyleUtils$$$$getAxisLabelClass$$($dvt$$12$$) {
    return $dvt$$12$$._resources ? $dvt$$12$$._resources.axisLabelClass : void 0;
  };
  $DvtTimeAxisStyleUtils$$.$getAxisSeparatorClass$ = function $$DvtTimeAxisStyleUtils$$$$getAxisSeparatorClass$$($dvt$$12$$) {
    return $dvt$$12$$._resources ? $dvt$$12$$._resources.axisSeparatorClass : void 0;
  };
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$TimeAxis$, "newInstance", $dvt$$12$$.$TimeAxis$.newInstance);
  $dvt$$12$$.$exportProperty$($dvt$$12$$.$TimeAxis$.prototype, "render", $dvt$$12$$.$TimeAxis$.prototype.$render$);
})(dvt);

  return dvt;
});
