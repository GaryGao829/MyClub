/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtTimeAxis', './DvtOverview', './DvtTimeComponent'], function(dvt) {
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

dvt.$TimelineOverview$ = function $dvt$$TimelineOverview$$($context$$436$$, $callback$$176$$, $callbackObj$$97$$) {
  this.Init($context$$436$$, $callback$$176$$, $callbackObj$$97$$);
};
$goog$exportPath_$$("dvt.TimelineOverview", dvt.$TimelineOverview$);
dvt.$Obj$.$createSubclass$(dvt.$TimelineOverview$, dvt.$Overview$);
dvt.$TimelineOverview$.$ENABLED_STATE$ = "_";
dvt.$TimelineOverview$.$HOVER_STATE$ = "_h";
dvt.$TimelineOverview$.$SELECTED_STATE$ = "_s";
dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$ = "_as";
dvt.$TimelineOverview$.$BORDER_STYLE$ = "bs";
dvt.$TimelineOverview$.$BORDER_COLOR$ = "bc";
dvt.$TimelineOverview$.$BORDER_WIDTH$ = "bw";
dvt.$TimelineOverview$.$DURATION_BORDER_STYLE$ = "dbs";
dvt.$TimelineOverview$.$DURATION_BORDER_COLOR$ = "dbc";
dvt.$TimelineOverview$.$DURATION_BORDER_WIDTH$ = "dbw";
dvt.$TimelineOverview$.$BORDER_OFFSET$ = "bof";
dvt.$TimelineOverview$.$BORDER_OPACITY$ = "bo";
dvt.$TimelineOverview$.$GLOW_COLOR$ = "gc";
dvt.$TimelineOverview$.$GLOW_OPACITY$ = "go";
dvt.$TimelineOverview$.$FILL_COLOR$ = "fc";
dvt.$TimelineOverview$.newInstance = function $dvt$$TimelineOverview$$newInstance$($context$$437$$, $callback$$177$$, $callbackObj$$98$$) {
  return new dvt.$TimelineOverview$($context$$437$$, $callback$$177$$, $callbackObj$$98$$);
};
dvt.$TimelineOverview$.newInstance = dvt.$TimelineOverview$.newInstance;
$JSCompiler_prototypeAlias$$ = dvt.$TimelineOverview$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($colors$$5_context$$438$$, $callback$$178$$, $callbackObj$$99$$) {
  dvt.$TimelineOverview$.$superclass$.Init.call(this, $colors$$5_context$$438$$, $callback$$178$$, $callbackObj$$99$$);
  $colors$$5_context$$438$$ = [dvt.$ColorUtils$.$getPound$(dvt.$ColorUtils$.$getPastel$("#aadd77", .35)), "#aadd77", dvt.$ColorUtils$.$getPound$(dvt.$ColorUtils$.$getDarker$("#aadd77", .5))];
  dvt.$OverviewUtils$.$supportsTouch$() && ($colors$$5_context$$438$$ = ["#aadd77"]);
  this.$_defColors$ = $colors$$5_context$$438$$;
  this.$_markerBorderFill$ = dvt.$SolidFill$.$invisibleFill$();
  this.$_markerSize$ = 12;
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$335$$, $width$$149$$, $height$$122$$) {
  "string" === typeof $options$$335$$ ? dvt.$TimelineOverview$.$superclass$.$render$.call(this, $JSCompiler_StaticMethods__getConvertedOptions$$(this, $options$$335$$), $width$$149$$, $height$$122$$) : dvt.$TimelineOverview$.$superclass$.$render$.call(this, $options$$335$$, $width$$149$$, $height$$122$$);
};
function $JSCompiler_StaticMethods__getConvertedOptions$$($JSCompiler_StaticMethods__getConvertedOptions$self$$, $xmlOptions$$) {
  for (var $options$$336$$ = {}, $j$$106_rootNode$$5$$ = (new dvt.$XmlParser$($JSCompiler_StaticMethods__getConvertedOptions$self$$.$getCtx$())).parse($xmlOptions$$), $attributes$$4$$ = $j$$106_rootNode$$5$$.getAttributes(), $i$$693$$ = 0;$i$$693$$ < $attributes$$4$$.length;$i$$693$$++) {
    var $attr$$23$$ = $attributes$$4$$[$i$$693$$];
    $options$$336$$[$attr$$23$$.name] = $attr$$23$$.value;
  }
  for (var $childNodes$$24_formattedTimeRangeNodes$$ = $j$$106_rootNode$$5$$.$getChildNodes$(), $formattedTimeRanges_markers$$15_ticks$$ = [], $markerNodes_tickNodes_timeRange$$ = $childNodes$$24_formattedTimeRangeNodes$$[0].$getChildNodes$(), $i$$693$$ = 0;$i$$693$$ < $markerNodes_tickNodes_timeRange$$.length;$i$$693$$++) {
    for (var $marker$$19_tick$$1$$ = {}, $attributes$$4$$ = $markerNodes_tickNodes_timeRange$$[$i$$693$$].getAttributes(), $j$$106_rootNode$$5$$ = 0;$j$$106_rootNode$$5$$ < $attributes$$4$$.length;$j$$106_rootNode$$5$$++) {
      $attr$$23$$ = $attributes$$4$$[$j$$106_rootNode$$5$$], $marker$$19_tick$$1$$[$attr$$23$$.name] = $attr$$23$$.value;
    }
    $formattedTimeRanges_markers$$15_ticks$$.push($marker$$19_tick$$1$$);
  }
  $options$$336$$.axisTicks = $formattedTimeRanges_markers$$15_ticks$$;
  $formattedTimeRanges_markers$$15_ticks$$ = [];
  $markerNodes_tickNodes_timeRange$$ = $childNodes$$24_formattedTimeRangeNodes$$[1].$getChildNodes$();
  for ($i$$693$$ = 0;$i$$693$$ < $markerNodes_tickNodes_timeRange$$.length;$i$$693$$++) {
    $marker$$19_tick$$1$$ = {};
    $attributes$$4$$ = $markerNodes_tickNodes_timeRange$$[$i$$693$$].getAttributes();
    for ($j$$106_rootNode$$5$$ = 0;$j$$106_rootNode$$5$$ < $attributes$$4$$.length;$j$$106_rootNode$$5$$++) {
      $attr$$23$$ = $attributes$$4$$[$j$$106_rootNode$$5$$], $marker$$19_tick$$1$$[$attr$$23$$.name] = $attr$$23$$.value;
    }
    $formattedTimeRanges_markers$$15_ticks$$.push($marker$$19_tick$$1$$);
  }
  $options$$336$$.markers = $formattedTimeRanges_markers$$15_ticks$$;
  if (2 < $childNodes$$24_formattedTimeRangeNodes$$.length) {
    $formattedTimeRanges_markers$$15_ticks$$ = [];
    $childNodes$$24_formattedTimeRangeNodes$$ = $childNodes$$24_formattedTimeRangeNodes$$[2].$getChildNodes$();
    for ($i$$693$$ = 0;$i$$693$$ < $childNodes$$24_formattedTimeRangeNodes$$.length;$i$$693$$++) {
      $markerNodes_tickNodes_timeRange$$ = {};
      $attributes$$4$$ = $childNodes$$24_formattedTimeRangeNodes$$[$i$$693$$].getAttributes();
      for ($j$$106_rootNode$$5$$ = 0;$j$$106_rootNode$$5$$ < $attributes$$4$$.length;$j$$106_rootNode$$5$$++) {
        $attr$$23$$ = $attributes$$4$$[$j$$106_rootNode$$5$$], $markerNodes_tickNodes_timeRange$$[$attr$$23$$.name] = $attr$$23$$.value;
      }
      $formattedTimeRanges_markers$$15_ticks$$.push($markerNodes_tickNodes_timeRange$$);
    }
    $options$$336$$.formattedTimeRanges = $formattedTimeRanges_markers$$15_ticks$$;
  }
  return $options$$336$$;
}
$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new $DvtTimelineOverviewParser$$(this);
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($_eOffset_borderOpacity_props$$15$$) {
  dvt.$TimelineOverview$.$superclass$.$_applyParsedProperties$.call(this, $_eOffset_borderOpacity_props$$15$$);
  this.$_selectionMode$ = $_eOffset_borderOpacity_props$$15$$.$selectionMode$;
  this.$_markers$ = $_eOffset_borderOpacity_props$$15$$.$markers$;
  this.$_seriesIds$ = $_eOffset_borderOpacity_props$$15$$.$seriesIds$;
  this.$_defaultMarkerStyles$ = $_eOffset_borderOpacity_props$$15$$.$defaultMarkerStyles$;
  this.$_durationColors$ = "#267DB3 #68C182 #FAD55C #ED6647 #8561C8 #6DDBDB #FFB54D #E371B2 #47BDEF #A2BF39 #A75DBA #F7F37B".split(" ");
  $_eOffset_borderOpacity_props$$15$$.$labelStyle$ && (this.$_labelStyle$ = new dvt.$CSSStyle$($_eOffset_borderOpacity_props$$15$$.$labelStyle$));
  $_eOffset_borderOpacity_props$$15$$ = "solid" == this.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1;
  var $_asOffset$$ = "solid" == this.$getStyle$(dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$(dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1, $_sOffset$$ = "solid" == this.$getStyle$(dvt.$TimelineOverview$.$SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$(dvt.$TimelineOverview$.$SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1;
  this.$_markerSpacingOffset$ = "none" != this.$_selectionMode$ ? Math.max($_asOffset$$, $_sOffset$$, $_eOffset_borderOpacity_props$$15$$, 1) / 2 + 1 : 1;
  this.$_defOpacity$ = this.$isVertical$() ? 0 : .75;
  this.$_defAlphas$ = [this.$_defOpacity$, this.$_defOpacity$, this.$_defOpacity$];
  this.$_radialFill$ = new dvt.$LinearGradientFill$(250, this.$_defColors$, this.$_defAlphas$);
  this.$_linearFill$ = new dvt.$LinearGradientFill$(180, this.$_defColors$, this.$_defAlphas$);
  $_eOffset_borderOpacity_props$$15$$ = this.$isVertical$() ? 0 : 1;
  this.$_border$ = new dvt.$SolidStroke$("#aadd77", $_eOffset_borderOpacity_props$$15$$);
};
function $JSCompiler_StaticMethods_getSeriesIds$$($JSCompiler_StaticMethods_getSeriesIds$self$$) {
  return null == $JSCompiler_StaticMethods_getSeriesIds$self$$.$_seriesIds$ ? null : $JSCompiler_StaticMethods_getSeriesIds$self$$.$_seriesIds$.split(" ");
}
$JSCompiler_prototypeAlias$$.$addLabel$ = function $$JSCompiler_prototypeAlias$$$$addLabel$$($pos$$78$$, $text$$81$$, $width$$150$$, $height$$123$$, $maxWidth$$24$$, $id$$220$$) {
  dvt.$TimelineOverview$.$superclass$.$addLabel$.call(this, $pos$$78$$, $text$$81$$, $width$$150$$, $height$$123$$, $maxWidth$$24$$, $id$$220$$, this.$_labelStyle$);
};
function $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_getDrawableById$self$$, $id$$221$$) {
  for (var $drawableId$$1$$ = "_mrk_" + $id$$221$$, $durationId$$1$$ = "_drn_" + $id$$221$$, $numChildren$$15$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getNumChildren$(), $childIndex$$9$$ = 0;$childIndex$$9$$ < $numChildren$$15$$;$childIndex$$9$$++) {
    var $drawable$$7$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getChildAt$($childIndex$$9$$);
    if (null != $drawable$$7$$ && ($drawableId$$1$$ == $drawable$$7$$.getId() || $durationId$$1$$ == $drawable$$7$$.getId())) {
      return $drawable$$7$$;
    }
  }
  return null;
}
$JSCompiler_prototypeAlias$$.$getItemId$ = function $$JSCompiler_prototypeAlias$$$$getItemId$$($drawable$$8$$) {
  return $drawable$$8$$.getId().substr(5);
};
$JSCompiler_prototypeAlias$$.$getStyle$ = function $$JSCompiler_prototypeAlias$$$$getStyle$$($state$$98$$, $style$$116$$) {
  return this.$_borderStyles$[$state$$98$$ + $style$$116$$];
};
$JSCompiler_prototypeAlias$$.$getX$ = function $$JSCompiler_prototypeAlias$$$$getX$$($drawable$$9$$) {
  return null != $drawable$$9$$.$_node$ ? $drawable$$9$$.$_node$.$getX$() : $drawable$$9$$.$getMatrix$().$_tx$;
};
$JSCompiler_prototypeAlias$$.$getY$ = function $$JSCompiler_prototypeAlias$$$$getY$$($drawable$$10$$) {
  return null != $drawable$$10$$.$_node$ ? $drawable$$10$$.$_node$.$getY$() : $drawable$$10$$.$getMatrix$().$_ty$;
};
$JSCompiler_prototypeAlias$$.$getScaleX$ = function $$JSCompiler_prototypeAlias$$$$getScaleX$$($node$$305_scaleX$$4$$) {
  $node$$305_scaleX$$4$$ = $node$$305_scaleX$$4$$.$getScaleX$();
  null == $node$$305_scaleX$$4$$ && ($node$$305_scaleX$$4$$ = this.$isVertical$() ? (this.$Width$ - this.$getTimeAxisWidth$() - 4) / 2 : 1);
  return $node$$305_scaleX$$4$$;
};
$JSCompiler_prototypeAlias$$.$getScaleY$ = function $$JSCompiler_prototypeAlias$$$$getScaleY$$($node$$306_scaleY$$4$$) {
  $node$$306_scaleY$$4$$ = $node$$306_scaleY$$4$$.$getScaleY$();
  null == $node$$306_scaleY$$4$$ && ($node$$306_scaleY$$4$$ = 1);
  return $node$$306_scaleY$$4$$;
};
$JSCompiler_prototypeAlias$$.$parseDataXML$ = function $$JSCompiler_prototypeAlias$$$$parseDataXML$$($width$$151$$, $height$$124$$) {
  dvt.$TimelineOverview$.$superclass$.$parseDataXML$.call(this, $width$$151$$, $height$$124$$);
  if (null != this.$_markers$) {
    for (var $opt$$ = $JSCompiler_StaticMethods_calculateOptimalSize$$(this, this.$_start$, this.$_end$, $width$$151$$, $height$$124$$, this.$_markerSize$), $durationMarkers$$ = [], $context$$inline_4109_j$$107$$ = 0;$context$$inline_4109_j$$107$$ < this.$_markers$.length;$context$$inline_4109_j$$107$$++) {
      var $i$$inline_4110_marker$$20_node$$inline_4084$$ = this.$_markers$[$context$$inline_4109_j$$107$$];
      if (null == $i$$inline_4110_marker$$20_node$$inline_4084$$.$_endTime$) {
        var $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$ = $opt$$, $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$ = "_mrk_" + $i$$inline_4110_marker$$20_node$$inline_4084$$.getId(), $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$ = $i$$inline_4110_marker$$20_node$$inline_4084$$.$getColor$(), $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$ = $i$$inline_4110_marker$$20_node$$inline_4084$$.$_gradient$, 
        $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$ = $i$$inline_4110_marker$$20_node$$inline_4084$$.$getOpacity$();
        null == $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$ && ($durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$ = this.$_defOpacity$, 0 == $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$ && null != $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$ && ($durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$ = 1));
        var $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ = this.$getScaleX$($i$$inline_4110_marker$$20_node$$inline_4084$$), $cx$$inline_4095_scaleY$$inline_4091$$ = this.$getScaleY$($i$$inline_4110_marker$$20_node$$inline_4084$$), $j$$inline_4111_marker$$inline_4092$$ = $i$$inline_4110_marker$$20_node$$inline_4084$$.$getShape$();
        if (this.$isVertical$()) {
          var $j$$inline_4111_marker$$inline_4092$$ = dvt.$SimpleMarker$.$RECTANGLE$, $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ = 2 * $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$, $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$ = 2 * $cx$$inline_4095_scaleY$$inline_4091$$, $cx$$inline_4095_scaleY$$inline_4091$$ = $i$$inline_4110_marker$$20_node$$inline_4084$$.$getY$() + 
          $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ / 2, $cy$$inline_4096$$ = $i$$inline_4110_marker$$20_node$$inline_4084$$.$getX$() + $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$ / 2
        } else {
          $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ *= $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$, $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$ *= $cx$$inline_4095_scaleY$$inline_4091$$, $cx$$inline_4095_scaleY$$inline_4091$$ = $i$$inline_4110_marker$$20_node$$inline_4084$$.$getX$() + $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ / 
          2, $cy$$inline_4096$$ = $i$$inline_4110_marker$$20_node$$inline_4084$$.$getY$() + $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$ / 2;
        }
        $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$ = new dvt.$SimpleMarker$(this.$getCtx$(), $j$$inline_4111_marker$$inline_4092$$, null, $cx$$inline_4095_scaleY$$inline_4091$$, $cy$$inline_4096$$, $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$, $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$, null, null, null, $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$);
        $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$.$_node$ = $i$$inline_4110_marker$$20_node$$inline_4084$$;
        null == $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$ && $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$ == this.$_defOpacity$ && null == $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$ ? ($duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$ = $j$$inline_4111_marker$$inline_4092$$ == dvt.$SimpleMarker$.$CIRCLE$ ? this.$_radialFill$ : this.$_linearFill$, $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$ = 
        this.$_border$) : ($colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ = this.$_defColors$, null != $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$ && (dvt.$OverviewUtils$.$supportsTouch$() ? $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ = [$color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$] : ($colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ = 
        dvt.$ColorUtils$.$getPastel$($color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$, .5), $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$ = dvt.$ColorUtils$.$getDarker$($color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$, .5), $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ = [$colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$, 
        $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$, $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$])), $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$ = [$durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$, $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$, $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$], $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$ = 
        null == $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$ ? $j$$inline_4111_marker$$inline_4092$$ == dvt.$SimpleMarker$.$CIRCLE$ ? new dvt.$LinearGradientFill$(250, $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$, $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$) : new dvt.$LinearGradientFill$(180, $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$, 
        $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$) : new dvt.$SolidFill$($color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$, $alphas$$inline_4101_darker$$inline_4100_height$$inline_4094_sz$$inline_4085$$[0]), $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$ = new dvt.$SolidStroke$($color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$, $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$));
        $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$.$setFill$($duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$);
        $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$.$setStroke$($color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$);
        "none" != this.$_selectionMode$ && $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$.$setSelectable$(!0);
        $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$ = this.$getNumChildren$();
        $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$ = this.$getChildAt$($color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$ - 1);
        $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$ > this.$_lastChildIndex$ && ("tb" == $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$.getId() || "arr" == $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$.getId()) ? this.$addChildAt$($displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$, $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$ - this.$_lastChildIndex$) : 
        this.$addChild$($displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$);
        $i$$inline_4110_marker$$20_node$$inline_4084$$.$setDisplayable$($displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$);
        this.$applyState$($displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$, dvt.$TimelineOverview$.$ENABLED_STATE$);
        !this.$isVertical$() && $j$$inline_4111_marker$$inline_4092$$ != dvt.$SimpleMarker$.$RECTANGLE$ && $j$$inline_4111_marker$$inline_4092$$ != dvt.$SimpleMarker$.$DIAMOND$ && $j$$inline_4111_marker$$inline_4092$$ != dvt.$SimpleMarker$.$TRIANGLE_UP$ && $j$$inline_4111_marker$$inline_4092$$ != dvt.$SimpleMarker$.$TRIANGLE_DOWN$ && $j$$inline_4111_marker$$inline_4092$$ != dvt.$SimpleMarker$.$PLUS$ || "false" == this.$_defaultMarkerStyles$.$pixelHinting$ || $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$.$setPixelHinting$();
      } else {
        $durationMarkers$$[$durationMarkers$$.length] = $i$$inline_4110_marker$$20_node$$inline_4084$$;
      }
    }
    this.$prepareDurations$($durationMarkers$$);
    $context$$inline_4109_j$$107$$ = this.$getCtx$();
    for ($i$$inline_4110_marker$$20_node$$inline_4084$$ = this.$_maxDurationY$;0 < $i$$inline_4110_marker$$20_node$$inline_4084$$;$i$$inline_4110_marker$$20_node$$inline_4084$$--) {
      for ($j$$inline_4111_marker$$inline_4092$$ = 0;$j$$inline_4111_marker$$inline_4092$$ < $durationMarkers$$.length;$j$$inline_4111_marker$$inline_4092$$++) {
        $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$ = $durationMarkers$$[$j$$inline_4111_marker$$inline_4092$$], $i$$inline_4110_marker$$20_node$$inline_4084$$ == $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$.$_durationLevel$ && ($duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$ = dvt.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$.getTime(), 
        this.$isVertical$() ? this.$Height$ : this.$Width$), $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$ = "_drn_" + $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$.getId(), $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$ = 9 + 5 * $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$.$_durationLevel$, $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ = 
        dvt.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$.$_endTime$, this.$isVertical$() ? this.$Height$ : this.$Width$), $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$ = this.$isVertical$() ? this.$isRTL$() ? new dvt.Rect($context$$inline_4109_j$$107$$, 0, $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$, $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$, 
        $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ - $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$, $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$) : new dvt.Rect($context$$inline_4109_j$$107$$, this.$Width$ - $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$, $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$, 
        $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$, $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ - $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$, $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$) : this.$isRTL$() ? new dvt.Rect($context$$inline_4109_j$$107$$, this.$Width$ - $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$, 
        this.$Height$ - $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$ - 20, $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ - $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$, $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$, $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$) : new dvt.Rect($context$$inline_4109_j$$107$$, 
        $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$, this.$Height$ - $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$ - 20, $colors$$inline_4098_lighter$$inline_4099_scaleX$$inline_4090_width$$inline_4093_x2$$inline_4116$$ - $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$, $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$, $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$), 
        $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$.$setFill$(new dvt.$SolidFill$($color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$.$_durationFillColor$)), $displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$ = new dvt.$SolidStroke$(this.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$DURATION_BORDER_COLOR$), 1, 1), $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$.$setStroke$($displayable$$inline_4097_durationId$$inline_4114_feelerStroke$$inline_4118_itemId$$inline_4086$$), 
        $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$.$setPixelHinting$(), $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$.$_node$ = $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$, this.$addChild$($duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$), $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$.$_durationBar$ = $duration$$inline_4117_fill$$inline_4102_isGradient$$inline_4088_x$$inline_4113$$, 
        $color$$inline_4087_count$$inline_4104_node$$inline_4112_stroke$$inline_4103$$.$_durationY$ = $durationY$$inline_4115_lastChild$$inline_4105_opacity$$inline_4089$$ - 2);
      }
    }
    this.removeChild(this.$_timeAxisTopBar$);
    this.$addChild$(this.$_timeAxisTopBar$);
    this.$_markerSize$ = $opt$$;
  }
};
$JSCompiler_prototypeAlias$$.$prepareDurations$ = function $$JSCompiler_prototypeAlias$$$$prepareDurations$$($durationMarkers$$1$$) {
  this.$_maxDurationY$ = 0;
  var $markerSeries$$ = null;
  null == this.$_durationColorMap$ && (this.$_durationColorMap$ = {});
  for (var $i$$694$$ = 0;$i$$694$$ < $durationMarkers$$1$$.length;$i$$694$$++) {
    var $marker$$21$$ = $durationMarkers$$1$$[$i$$694$$], $id$$222$$ = $marker$$21$$.getId(), $sId$$2$$ = $id$$222$$.substring($id$$222$$.indexOf(":") + 1, $id$$222$$.length), $sId$$2$$ = $sId$$2$$.substring(0, $sId$$2$$.indexOf(":"));
    $sId$$2$$ != $markerSeries$$ && (this.$_colorCount$ = 0, $markerSeries$$ = $sId$$2$$);
    $marker$$21$$.$_durationLevel$ = $JSCompiler_StaticMethods_calculateDurationY$$(this, $marker$$21$$, $durationMarkers$$1$$);
    null == $marker$$21$$.$_durationFillColor$ && (null == this.$_durationColorMap$[$id$$222$$] ? (this.$_durationColorMap$[$id$$222$$] = this.$_colorCount$, $marker$$21$$.$_durationFillColor$ = this.$_durationColors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_durationColors$.length && (this.$_colorCount$ = 0)) : $marker$$21$$.$_durationFillColor$ = this.$_durationColors$[this.$_durationColorMap$[$id$$222$$]]);
  }
};
$JSCompiler_prototypeAlias$$.$getDurationColorMap$ = function $$JSCompiler_prototypeAlias$$$$getDurationColorMap$$() {
  return this.$_durationColorMap$ ? this.$_durationColorMap$ : null;
};
dvt.$TimelineOverview$.prototype.getDurationColorMap = dvt.$TimelineOverview$.prototype.$getDurationColorMap$;
function $JSCompiler_StaticMethods_calculateOptimalSize$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$52$$, $end$$34$$, $width$$152$$, $height$$125$$, $size$$40$$) {
  for (var $JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$, $JSCompiler_object_inline_maxy_5033_overlappingMarkers$$inline_4989_prevX$$inline_4141$$, $result$$2$$ = {max:1, $arr$:[]}, $canvasSize$$1$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isVertical$() ? $height$$125$$ : $width$$152$$, $i$$695$$ = 0;$i$$695$$ < $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$.length;$i$$695$$++) {
    var $marker$$22_node$$inline_4125$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$[$i$$695$$];
    if (null != $marker$$22_node$$inline_4125$$.$_endTime$) {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$ = dvt.$OverviewUtils$.$getDatePosition$($start$$52$$, $end$$34$$, $marker$$22_node$$inline_4125$$.getTime(), $canvasSize$$1$$);
      $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isHorizontalRTL$() && ($JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$ = $canvasSize$$1$$ - $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$);
      $marker$$22_node$$inline_4125$$.$setX$($JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$);
    } else {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$, $cx$$inline_4134_start$$inline_4126$$ = $start$$52$$, $end$$inline_4127_overlappingMarkers$$inline_4138$$ = $end$$34$$, $cy$$inline_4136_size$$inline_4128$$ = $canvasSize$$1$$, $borderOffset$$inline_4135_hsz$$inline_4129$$ = $size$$40$$ / 2, $result$$inline_4130$$ = $result$$2$$, $maxHeight$$inline_4131$$ = $height$$125$$, $hszx$$inline_4132$$ = $borderOffset$$inline_4135_hsz$$inline_4129$$ * 
      $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$getScaleX$($marker$$22_node$$inline_4125$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$_markerSpacingOffset$, $hszy$$inline_4133$$ = $borderOffset$$inline_4135_hsz$$inline_4129$$ * $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$getScaleY$($marker$$22_node$$inline_4125$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$_markerSpacingOffset$, $cx$$inline_4134_start$$inline_4126$$ = 
      dvt.$OverviewUtils$.$getDatePosition$($cx$$inline_4134_start$$inline_4126$$, $end$$inline_4127_overlappingMarkers$$inline_4138$$, $marker$$22_node$$inline_4125$$.getTime(), $cy$$inline_4136_size$$inline_4128$$);
      $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$isHorizontalRTL$() && ($cx$$inline_4134_start$$inline_4126$$ = $cy$$inline_4136_size$$inline_4128$$ - $cx$$inline_4134_start$$inline_4126$$ - 2 * $hszx$$inline_4132$$);
      if ($JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$isVertical$()) {
        $borderOffset$$inline_4135_hsz$$inline_4129$$ = 0, "solid" == $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) && ($borderOffset$$inline_4135_hsz$$inline_4129$$ = parseInt($JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_WIDTH$), 10)), $cy$$inline_4136_size$$inline_4128$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$isRTL$() ? 
        $borderOffset$$inline_4135_hsz$$inline_4129$$ + 4 : $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$Width$ - 2 * $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$getScaleX$($marker$$22_node$$inline_4125$$) - $borderOffset$$inline_4135_hsz$$inline_4129$$ - 4;
      } else {
        $cy$$inline_4136_size$$inline_4128$$ = 3;
        $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$isOverviewAbove$() && ($cy$$inline_4136_size$$inline_4128$$ += $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$getTimeAxisHeight$());
        for (var $maxy$$inline_4137_maxy$$inline_4995$$ = 0, $end$$inline_4127_overlappingMarkers$$inline_4138$$ = [], $i$$inline_4139$$ = 0;$i$$inline_4139$$ < $result$$inline_4130$$.$arr$.length;$i$$inline_4139$$++) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$ = $result$$inline_4130$$.$arr$[$i$$inline_4139$$];
          $JSCompiler_object_inline_maxy_5033_overlappingMarkers$$inline_4989_prevX$$inline_4141$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$.$getX$();
          var $prevScaleX$$inline_4142_shape$$inline_4990$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$getScaleX$($JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$);
          Math.abs($cx$$inline_4134_start$$inline_4126$$ - $JSCompiler_object_inline_maxy_5033_overlappingMarkers$$inline_4989_prevX$$inline_4141$$) < $borderOffset$$inline_4135_hsz$$inline_4129$$ * $prevScaleX$$inline_4142_shape$$inline_4990$$ + $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$.$_markerSpacingOffset$ + $hszx$$inline_4132$$ && $end$$inline_4127_overlappingMarkers$$inline_4138$$.push($JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$);
        }
        for ($i$$inline_4139$$ = 0;$i$$inline_4139$$ < $end$$inline_4127_overlappingMarkers$$inline_4138$$.length;$i$$inline_4139$$++) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_4124_x$$218$$;
          $JSCompiler_object_inline_maxy_5033_overlappingMarkers$$inline_4989_prevX$$inline_4141$$ = $end$$inline_4127_overlappingMarkers$$inline_4138$$;
          for (var $prevScaleX$$inline_4142_shape$$inline_4990$$ = $marker$$22_node$$inline_4125$$.$getShape$(), $cx$$inline_4991$$ = $cx$$inline_4134_start$$inline_4126$$, $cy$$inline_4992$$ = $cy$$inline_4136_size$$inline_4128$$, $hszx$$inline_4993$$ = $hszx$$inline_4132$$, $hszy$$inline_4994$$ = $hszy$$inline_4133$$, $hsz$$inline_4996$$ = $borderOffset$$inline_4135_hsz$$inline_4129$$, $maxHeight$$inline_4997$$ = $maxHeight$$inline_4131$$, $i$$inline_4998$$ = 0;$i$$inline_4998$$ < $JSCompiler_object_inline_maxy_5033_overlappingMarkers$$inline_4989_prevX$$inline_4141$$.length;$i$$inline_4998$$++) {
            var $prevMarker$$inline_4999_prevScaleY$$inline_5004$$ = $JSCompiler_object_inline_maxy_5033_overlappingMarkers$$inline_4989_prevX$$inline_4141$$[$i$$inline_4998$$], $prevX$$inline_5000_xDist$$inline_5005$$ = $prevMarker$$inline_4999_prevScaleY$$inline_5004$$.$getX$(), $prevY$$inline_5001$$ = $prevMarker$$inline_4999_prevScaleY$$inline_5004$$.$getY$(), $prevShape$$inline_5002$$ = $prevMarker$$inline_4999_prevScaleY$$inline_5004$$.$getShape$(), $height$$inline_5007_minDist$$inline_5006_prevScaleX$$inline_5003$$ = 
            $JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$.$getScaleX$($prevMarker$$inline_4999_prevScaleY$$inline_5004$$), $prevMarker$$inline_4999_prevScaleY$$inline_5004$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$.$getScaleY$($prevMarker$$inline_4999_prevScaleY$$inline_5004$$);
            $prevScaleX$$inline_4142_shape$$inline_4990$$ == dvt.$SimpleMarker$.$CIRCLE$ && $prevShape$$inline_5002$$ == dvt.$SimpleMarker$.$CIRCLE$ && $hszx$$inline_4993$$ == $hszy$$inline_4994$$ && $height$$inline_5007_minDist$$inline_5006_prevScaleX$$inline_5003$$ == $prevMarker$$inline_4999_prevScaleY$$inline_5004$$ ? ($prevX$$inline_5000_xDist$$inline_5005$$ = Math.abs($cx$$inline_4991$$ - $prevX$$inline_5000_xDist$$inline_5005$$), $height$$inline_5007_minDist$$inline_5006_prevScaleX$$inline_5003$$ = 
            $hsz$$inline_4996$$ * $height$$inline_5007_minDist$$inline_5006_prevScaleX$$inline_5003$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$.$_markerSpacingOffset$ + $hszx$$inline_4993$$, $height$$inline_5007_minDist$$inline_5006_prevScaleX$$inline_5003$$ = Math.sqrt($height$$inline_5007_minDist$$inline_5006_prevScaleX$$inline_5003$$ * $height$$inline_5007_minDist$$inline_5006_prevScaleX$$inline_5003$$ - $prevX$$inline_5000_xDist$$inline_5005$$ * 
            $prevX$$inline_5000_xDist$$inline_5005$$)) : $height$$inline_5007_minDist$$inline_5006_prevScaleX$$inline_5003$$ = $hsz$$inline_4996$$ * $prevMarker$$inline_4999_prevScaleY$$inline_5004$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$.$_markerSpacingOffset$ + $hszy$$inline_4994$$;
            if ($height$$inline_5007_minDist$$inline_5006_prevScaleX$$inline_5003$$ > Math.abs($cy$$inline_4992$$ - $prevY$$inline_5001$$) && ($cy$$inline_4992$$ = $prevY$$inline_5001$$ + $height$$inline_5007_minDist$$inline_5006_prevScaleX$$inline_5003$$, $maxy$$inline_4137_maxy$$inline_4995$$ = Math.max($maxy$$inline_4137_maxy$$inline_4995$$, $cy$$inline_4992$$ + $height$$inline_5007_minDist$$inline_5006_prevScaleX$$inline_5003$$), 1 <= $hsz$$inline_4996$$ && void 0 != $maxHeight$$inline_4997$$ && 
            $maxy$$inline_4137_maxy$$inline_4995$$ > $maxHeight$$inline_4997$$)) {
              break;
            }
          }
          $JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$ = $cy$$inline_4992$$;
          $maxy$$inline_4137_maxy$$inline_4995$$ = $JSCompiler_object_inline_maxy_5033_overlappingMarkers$$inline_4989_prevX$$inline_4141$$ = $maxy$$inline_4137_maxy$$inline_4995$$;
          if ($JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$ == $cy$$inline_4136_size$$inline_4128$$) {
            $cy$$inline_4136_size$$inline_4128$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$;
            break;
          } else {
            $cy$$inline_4136_size$$inline_4128$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_4988_JSCompiler_object_inline_cy_5032_prevMarker$$inline_4140$$;
          }
        }
      }
      $marker$$22_node$$inline_4125$$.$setX$($cx$$inline_4134_start$$inline_4126$$);
      $marker$$22_node$$inline_4125$$.$setY$($cy$$inline_4136_size$$inline_4128$$);
      $result$$inline_4130$$.$arr$.push($marker$$22_node$$inline_4125$$);
      $maxy$$inline_4137_maxy$$inline_4995$$ > $result$$inline_4130$$.max && ($result$$inline_4130$$.max = $maxy$$inline_4137_maxy$$inline_4995$$);
      if ($result$$2$$.max > $height$$125$$) {
        break;
      }
    }
  }
  return $result$$2$$.max > $height$$125$$ && 1 < $size$$40$$ ? $JSCompiler_StaticMethods_calculateOptimalSize$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$52$$, $end$$34$$, $width$$152$$, $height$$125$$, $size$$40$$ - 1) : $size$$40$$;
}
function $JSCompiler_StaticMethods_calculateDurationY$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$92$$, $durationMarkers$$3$$) {
  var $index$$208$$ = $durationMarkers$$3$$.length, $startTime$$29$$ = $item$$92$$.getTime(), $y$$192$$ = $item$$92$$.$_durationLevel$;
  null == $y$$192$$ && ($y$$192$$ = 1);
  for (var $i$$699$$ = 0;$i$$699$$ < $index$$208$$;$i$$699$$++) {
    var $currItem$$2_curry$$ = $durationMarkers$$3$$[$i$$699$$];
    if ($currItem$$2_curry$$ != $item$$92$$) {
      var $currEndTime$$1$$ = $currItem$$2_curry$$.$_endTime$;
      if (null != $currEndTime$$1$$) {
        var $currStartTime$$1$$ = $currItem$$2_curry$$.getTime(), $currItem$$2_curry$$ = $currItem$$2_curry$$.$_durationLevel$;
        null == $currItem$$2_curry$$ && ($currItem$$2_curry$$ = 1);
        $startTime$$29$$ >= $currStartTime$$1$$ && $startTime$$29$$ <= $currEndTime$$1$$ && $y$$192$$ == $currItem$$2_curry$$ && ($y$$192$$ = $currItem$$2_curry$$ + 1, $item$$92$$.$_durationLevel$ = $y$$192$$, $y$$192$$ = $JSCompiler_StaticMethods_calculateDurationY$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$92$$, $durationMarkers$$3$$));
      }
    }
  }
  $y$$192$$ > $JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ && ($JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ = $y$$192$$);
  return $y$$192$$;
}
$JSCompiler_prototypeAlias$$ = dvt.$TimelineOverview$.prototype;
$JSCompiler_prototypeAlias$$.$HandleShapeMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOver$$($event$$558_isSelected$$3_itemId$$5$$) {
  var $drawable$$11$$ = dvt.$TimelineOverview$.$superclass$.$HandleShapeMouseOver$.call(this, $event$$558_isSelected$$3_itemId$$5$$);
  if (null != $drawable$$11$$) {
    if (null != $drawable$$11$$.$_node$) {
      var $evt$$60_i$$700_tooltip$$29$$ = $drawable$$11$$.$_node$.$_desc$;
      null != $evt$$60_i$$700_tooltip$$29$$ && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$558_isSelected$$3_itemId$$5$$.pageX, $event$$558_isSelected$$3_itemId$$5$$.pageY, $evt$$60_i$$700_tooltip$$29$$, "#000000");
      this.$isFlashEnvironment$() && this.setCursor("pointer");
    }
    if ("none" != this.$_selectionMode$) {
      $event$$558_isSelected$$3_itemId$$5$$ = !1;
      if (null != this.$_selectedMarkers$) {
        for ($evt$$60_i$$700_tooltip$$29$$ = 0;$evt$$60_i$$700_tooltip$$29$$ < this.$_selectedMarkers$.length;$evt$$60_i$$700_tooltip$$29$$++) {
          if ($drawable$$11$$ == this.$_selectedMarkers$[$evt$$60_i$$700_tooltip$$29$$]) {
            $event$$558_isSelected$$3_itemId$$5$$ = !0;
            break;
          }
        }
      }
      $event$$558_isSelected$$3_itemId$$5$$ || ($event$$558_isSelected$$3_itemId$$5$$ = this.$getItemId$($drawable$$11$$), $evt$$60_i$$700_tooltip$$29$$ = new $DvtTimelineOverviewEvent$$("highlight"), $evt$$60_i$$700_tooltip$$29$$.$addParam$("itemId", $event$$558_isSelected$$3_itemId$$5$$), this.dispatchEvent($evt$$60_i$$700_tooltip$$29$$), $JSCompiler_StaticMethods_highlightMarker$$(this, $drawable$$11$$));
    }
  }
};
$JSCompiler_prototypeAlias$$.$HandleShapeMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOut$$($drawable$$12_event$$559$$) {
  $drawable$$12_event$$559$$ = dvt.$TimelineOverview$.$superclass$.$HandleShapeMouseOut$.call(this, $drawable$$12_event$$559$$);
  if (null != $drawable$$12_event$$559$$ && !this.$isMovable$($drawable$$12_event$$559$$)) {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    var $isSelected$$4_itemId$$6$$ = !1;
    if (null != this.$_selectedMarkers$) {
      for (var $evt$$61_i$$701$$ = 0;$evt$$61_i$$701$$ < this.$_selectedMarkers$.length;$evt$$61_i$$701$$++) {
        if ($drawable$$12_event$$559$$ == this.$_selectedMarkers$[$evt$$61_i$$701$$]) {
          $isSelected$$4_itemId$$6$$ = !0;
          break;
        }
      }
    }
    $isSelected$$4_itemId$$6$$ || ($isSelected$$4_itemId$$6$$ = this.$getItemId$($drawable$$12_event$$559$$), $evt$$61_i$$701$$ = new $DvtTimelineOverviewEvent$$("unhighlight"), $evt$$61_i$$701$$.$addParam$("itemId", $isSelected$$4_itemId$$6$$), this.dispatchEvent($evt$$61_i$$701$$), $JSCompiler_StaticMethods_unhighlightMarker$$(this, $drawable$$12_event$$559$$));
  }
};
$JSCompiler_prototypeAlias$$.$HandleShapeClick$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeClick$$($event$$560$$, $drawable$$13_pageX$$9$$, $pageY$$9$$) {
  $drawable$$13_pageX$$9$$ = dvt.$TimelineOverview$.$superclass$.$HandleShapeClick$.call(this, $event$$560$$, $drawable$$13_pageX$$9$$, $pageY$$9$$);
  null != $drawable$$13_pageX$$9$$ && $JSCompiler_StaticMethods_HandleMarkerClick$$(this, $drawable$$13_pageX$$9$$, $event$$560$$.ctrlKey || $event$$560$$.shiftKey || dvt.$Agent$.$isTouchDevice$());
};
function $JSCompiler_StaticMethods_HandleMarkerClick$$($JSCompiler_StaticMethods_HandleMarkerClick$self$$, $drawable$$14_newPos$$1$$, $isMultiSelect$$2_slidingWindow$$21_time$$22$$) {
  if ("none" != $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$_selectionMode$) {
    var $evt$$62_itemId$$inline_4148$$ = $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$getItemId$($drawable$$14_newPos$$1$$), $evt$$inline_4149$$ = new $DvtTimelineOverviewEvent$$("selection");
    $evt$$inline_4149$$.$addParam$("itemId", $evt$$62_itemId$$inline_4148$$);
    $evt$$inline_4149$$.$addParam$("multiSelect", $isMultiSelect$$2_slidingWindow$$21_time$$22$$);
    $JSCompiler_StaticMethods_HandleMarkerClick$self$$.dispatchEvent($evt$$inline_4149$$);
    $isMultiSelect$$2_slidingWindow$$21_time$$22$$ = $drawable$$14_newPos$$1$$.$_node$.getTime();
    null != $isMultiSelect$$2_slidingWindow$$21_time$$22$$ && ($evt$$62_itemId$$inline_4148$$ = new $DvtTimelineOverviewEvent$$($DvtTimelineOverviewEvent$SUBTYPE_SCROLL_TIME$$), $evt$$62_itemId$$inline_4148$$.setTime($isMultiSelect$$2_slidingWindow$$21_time$$22$$), $JSCompiler_StaticMethods_HandleMarkerClick$self$$.dispatchEvent($evt$$62_itemId$$inline_4148$$), $isMultiSelect$$2_slidingWindow$$21_time$$22$$ = $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$getSlidingWindow$(), $drawable$$14_newPos$$1$$ = 
    $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$isVertical$() ? $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$getX$($drawable$$14_newPos$$1$$) - $isMultiSelect$$2_slidingWindow$$21_time$$22$$.getHeight() / 2 : $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$getX$($drawable$$14_newPos$$1$$) - $isMultiSelect$$2_slidingWindow$$21_time$$22$$.getWidth() / 2, $JSCompiler_StaticMethods_HandleMarkerClick$self$$.$animateSlidingWindow$($drawable$$14_newPos$$1$$));
  }
}
function $JSCompiler_StaticMethods_highlightMarker$$($JSCompiler_StaticMethods_highlightMarker$self$$, $drawable$$17$$) {
  if (null != $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$) {
    for (var $i$$702$$ = 0;$i$$702$$ < $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$.length;$i$$702$$++) {
      if ($drawable$$17$$ == $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$[$i$$702$$]) {
        return;
      }
    }
  }
  $JSCompiler_StaticMethods_highlightMarker$self$$.$applyState$($drawable$$17$$, dvt.$TimelineOverview$.$HOVER_STATE$);
}
function $JSCompiler_StaticMethods_unhighlightMarker$$($JSCompiler_StaticMethods_unhighlightMarker$self$$, $drawable$$18$$) {
  if (null != $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$) {
    for (var $i$$703$$ = 0;$i$$703$$ < $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$.length;$i$$703$$++) {
      if ($drawable$$18$$ == $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$[$i$$703$$]) {
        return;
      }
    }
  }
  $JSCompiler_StaticMethods_unhighlightMarker$self$$.$applyState$($drawable$$18$$, dvt.$TimelineOverview$.$ENABLED_STATE$);
}
function $JSCompiler_StaticMethods_addSelectedMarker$$($JSCompiler_StaticMethods_addSelectedMarker$self$$, $drawable$$22$$) {
  null == $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$ && ($JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$ = []);
  var $lastSelectedMarker$$ = null;
  0 < $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.length && ($lastSelectedMarker$$ = $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$[$JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.length - 1]);
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.push($drawable$$22$$);
  null != $lastSelectedMarker$$ && $JSCompiler_StaticMethods_addSelectedMarker$self$$.$applyState$($lastSelectedMarker$$, dvt.$TimelineOverview$.$SELECTED_STATE$);
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$applyState$($drawable$$22$$, dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$);
}
$JSCompiler_prototypeAlias$$.$applyState$ = function $$JSCompiler_prototypeAlias$$$$applyState$$($drawable$$25$$, $state$$99$$) {
  if ($drawable$$25$$ instanceof dvt.$SimpleMarker$) {
    var $borderWidth$$19_requiresBorderMarker$$ = !1, $requiresGlowMarker$$ = !1;
    if ("solid" == this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_STYLE$)) {
      var $borderWidth$$19_requiresBorderMarker$$ = !0, $borderColor$$48_stroke$$103$$ = this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_COLOR$);
      null == $borderColor$$48_stroke$$103$$ && ($borderColor$$48_stroke$$103$$ = "#000000");
      var $glowColor_glowStroke_width$$inline_4155$$ = this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$GLOW_COLOR$);
      null != $glowColor_glowStroke_width$$inline_4155$$ && "none" != $glowColor_glowStroke_width$$inline_4155$$ && ($requiresGlowMarker$$ = !0);
    }
    var $borderMarker$$ = $drawable$$25$$.$_borderMarker$, $glowMarker_glowOffset$$ = $drawable$$25$$.$_glowMarker$;
    $borderWidth$$19_requiresBorderMarker$$ || null == $borderMarker$$ ? $requiresGlowMarker$$ || null == $glowMarker_glowOffset$$ || (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = null) : (this.removeChild($borderMarker$$), $drawable$$25$$.$_borderMarker$ = null, null != $glowMarker_glowOffset$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = null));
    var $borderColor$$inline_4154_id$$223_markerType$$1$$ = $drawable$$25$$.$getType$();
    if ($borderWidth$$19_requiresBorderMarker$$) {
      var $borderWidth$$19_requiresBorderMarker$$ = parseInt(this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_WIDTH$), 10), $borderOffset$$1$$ = parseInt(this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10);
      if (null == $borderMarker$$) {
        if ($borderColor$$inline_4154_id$$223_markerType$$1$$ == dvt.$SimpleMarker$.$CIRCLE$) {
          this.$isFlashEnvironment$() && ($borderOffset$$1$$ = 0);
          var $width$$155$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$128$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$37$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$155$$ / 2, $cy$$38$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$128$$ / 2;
        } else {
          this.$isVertical$() ? ($width$$155$$ = ($drawable$$25$$.$getDimensions$().$w$ + ($borderWidth$$19_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleX$(), $height$$128$$ = ($drawable$$25$$.$getDimensions$().$h$ + ($borderWidth$$19_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleY$(), $cx$$37$$ = this.$getY$($drawable$$25$$) - ($borderWidth$$19_requiresBorderMarker$$ + 1) / 2 + $width$$155$$ / 2, $cy$$38$$ = this.$getX$($drawable$$25$$) - ($borderWidth$$19_requiresBorderMarker$$ + 
          1) / 2 + $height$$128$$ / 2) : ($width$$155$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$128$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$37$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$155$$ / 2, $cy$$38$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$128$$ / 2);
        }
        $borderMarker$$ = new dvt.$SimpleMarker$(this.$getCtx$(), $borderColor$$inline_4154_id$$223_markerType$$1$$, null, $cx$$37$$, $cy$$38$$, $width$$155$$, $height$$128$$, null, null, null, $drawable$$25$$.getId() + "_border");
        this.$addChildAt$($borderMarker$$, this.$getChildIndex$($drawable$$25$$));
        $drawable$$25$$.$_borderMarker$ = $borderMarker$$;
        $borderMarker$$.$setFill$(this.$_markerBorderFill$);
      }
      $borderColor$$48_stroke$$103$$ = new dvt.$SolidStroke$($borderColor$$48_stroke$$103$$, this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_OPACITY$), $borderWidth$$19_requiresBorderMarker$$);
      $borderMarker$$.$setStroke$($borderColor$$48_stroke$$103$$);
      !this.$isVertical$() && $borderColor$$inline_4154_id$$223_markerType$$1$$ != dvt.$SimpleMarker$.$RECTANGLE$ && $borderColor$$inline_4154_id$$223_markerType$$1$$ != dvt.$SimpleMarker$.$DIAMOND$ && $borderColor$$inline_4154_id$$223_markerType$$1$$ != dvt.$SimpleMarker$.$TRIANGLE_UP$ && $borderColor$$inline_4154_id$$223_markerType$$1$$ != dvt.$SimpleMarker$.$TRIANGLE_DOWN$ && $borderColor$$inline_4154_id$$223_markerType$$1$$ != dvt.$SimpleMarker$.$PLUS$ || "false" == this.$_defaultMarkerStyles$.$pixelHinting$ || 
      $borderMarker$$.$setPixelHinting$();
      $requiresGlowMarker$$ && (null == $glowMarker_glowOffset$$ && ($glowMarker_glowOffset$$ = $borderOffset$$1$$ - $borderWidth$$19_requiresBorderMarker$$, $borderColor$$inline_4154_id$$223_markerType$$1$$ == dvt.$SimpleMarker$.$CIRCLE$ ? (this.$isFlashEnvironment$() && ($glowMarker_glowOffset$$ = 0), $width$$155$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$128$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * 
      $drawable$$25$$.$getScaleY$(), $cx$$37$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$155$$ / 2, $cy$$38$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$128$$ / 2) : this.$isVertical$() ? ($width$$155$$ = ($drawable$$25$$.$getDimensions$().$w$ + 3) * $drawable$$25$$.$getScaleX$(), $height$$128$$ = ($drawable$$25$$.$getDimensions$().$h$ + 3) * $drawable$$25$$.$getScaleY$(), $cx$$37$$ = this.$getY$($drawable$$25$$) + $width$$155$$ / 2, $cy$$38$$ = 
      this.$getX$($drawable$$25$$) - 1 + $height$$128$$ / 2) : ($width$$155$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$128$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleY$(), $cx$$37$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$155$$ / 2, $cy$$38$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$128$$ / 2), $glowMarker_glowOffset$$ = 
      new dvt.$SimpleMarker$(this.$getCtx$(), $borderColor$$inline_4154_id$$223_markerType$$1$$, null, $cx$$37$$, $cy$$38$$, $width$$155$$, $height$$128$$, null, null, null, $drawable$$25$$.getId() + "_glow"), this.$addChildAt$($glowMarker_glowOffset$$, this.$getChildIndex$($borderMarker$$)), $drawable$$25$$.$_glowMarker$ = $glowMarker_glowOffset$$, $glowMarker_glowOffset$$.$setFill$(this.$_markerBorderFill$)), $glowColor_glowStroke_width$$inline_4155$$ = new dvt.$SolidStroke$($glowColor_glowStroke_width$$inline_4155$$, 
      this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$GLOW_OPACITY$), 4), $glowMarker_glowOffset$$.$setStroke$($glowColor_glowStroke_width$$inline_4155$$), !this.$isVertical$() && $borderColor$$inline_4154_id$$223_markerType$$1$$ != dvt.$SimpleMarker$.$RECTANGLE$ && $borderColor$$inline_4154_id$$223_markerType$$1$$ != dvt.$SimpleMarker$.$DIAMOND$ && $borderColor$$inline_4154_id$$223_markerType$$1$$ != dvt.$SimpleMarker$.$TRIANGLE_UP$ && $borderColor$$inline_4154_id$$223_markerType$$1$$ != dvt.$SimpleMarker$.$TRIANGLE_DOWN$ && 
      $borderColor$$inline_4154_id$$223_markerType$$1$$ != dvt.$SimpleMarker$.$PLUS$ || "false" == this.$_defaultMarkerStyles$.$pixelHinting$ || $glowMarker_glowOffset$$.$setPixelHinting$());
    }
  } else {
    ($borderColor$$inline_4154_id$$223_markerType$$1$$ = $drawable$$25$$.getId()) && "_drn_" == $borderColor$$inline_4154_id$$223_markerType$$1$$.substring(0, 5) && ($borderColor$$inline_4154_id$$223_markerType$$1$$ = this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$DURATION_BORDER_COLOR$), null == $borderColor$$inline_4154_id$$223_markerType$$1$$ && ($borderColor$$inline_4154_id$$223_markerType$$1$$ = "#000000"), $glowColor_glowStroke_width$$inline_4155$$ = parseInt(this.$getStyle$($state$$99$$, 
    dvt.$TimelineOverview$.$DURATION_BORDER_WIDTH$), 10), $drawable$$25$$.$setStroke$(new dvt.$SolidStroke$($borderColor$$inline_4154_id$$223_markerType$$1$$, 1, $glowColor_glowStroke_width$$inline_4155$$)));
  }
};
$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  this.$_Automation$ || (this.$_Automation$ = new $DvtTimelineOverviewAutomation$$(this));
  return this.$_Automation$;
};
dvt.$TimelineOverview$.prototype.getAutomation = dvt.$TimelineOverview$.prototype.$getAutomation$;
function $DvtTimelineOverviewParser$$($timelineOverview$$) {
  this.Init($timelineOverview$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewParser$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtTimelineOverviewParser$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$3$$) {
  this.$_view$ = $overview$$3$$;
  this.$_parser$ = new dvt.$XmlParser$($overview$$3$$.$getCtx$());
};
$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($options$$337$$) {
  var $ret$$69$$ = this.$ParseRootAttributes$($options$$337$$), $JSCompiler_inline_result$$262_options$$inline_4161$$;
  if ($JSCompiler_inline_result$$262_options$$inline_4161$$ = $options$$337$$.axisTicks) {
    var $ret$$inline_4162$$ = {width:null, height:null};
    $ret$$inline_4162$$.$ticks$ = $JSCompiler_inline_result$$262_options$$inline_4161$$;
    $JSCompiler_inline_result$$262_options$$inline_4161$$ = $ret$$inline_4162$$;
  } else {
    $JSCompiler_inline_result$$262_options$$inline_4161$$ = null;
  }
  $ret$$69$$.$timeAxisInfo$ = $JSCompiler_inline_result$$262_options$$inline_4161$$;
  $ret$$69$$.$markers$ = this.$_parseDataNode$($options$$337$$.markers, $ret$$69$$.$defaultMarkerStyles$);
  $ret$$69$$.$formattedTimeRanges$ = $options$$337$$.formattedTimeRanges;
  return $ret$$69$$;
};
$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($options$$338$$) {
  var $ret$$70$$ = {};
  $ret$$70$$.start = parseInt($options$$338$$.start);
  $ret$$70$$.end = parseInt($options$$338$$.end);
  $ret$$70$$.width = parseInt($options$$338$$.width);
  $ret$$70$$.$renderStart$ = parseInt($options$$338$$.renstart);
  $ret$$70$$.currentTime = parseInt($options$$338$$.ocd);
  $ret$$70$$.orientation = $options$$338$$.orn;
  $ret$$70$$.$overviewPosition$ = $options$$338$$.ovp;
  $ret$$70$$.$selectionMode$ = $options$$338$$.selmode;
  $ret$$70$$.$isRtl$ = $options$$338$$.rtl;
  $ret$$70$$.borderTopStyle = $options$$338$$._bts;
  $ret$$70$$.borderTopColor = $options$$338$$._btc;
  $ret$$70$$.$seriesIds$ = $options$$338$$.sid;
  $ret$$70$$.$animationOnClick$ = $options$$338$$._aoc;
  var $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$.shape = $options$$338$$._ds;
  $borderStyles_defaultMarkerStyles$$.$scaleX$ = $options$$338$$._dsx;
  $borderStyles_defaultMarkerStyles$$.$scaleY$ = $options$$338$$._dsy;
  $borderStyles_defaultMarkerStyles$$.opacity = $options$$338$$._do;
  $borderStyles_defaultMarkerStyles$$.color = $options$$338$$._fc;
  $borderStyles_defaultMarkerStyles$$.$pixelHinting$ = $options$$338$$._ph;
  $ret$$70$$.$defaultMarkerStyles$ = $borderStyles_defaultMarkerStyles$$;
  $ret$$70$$.$handleFillColor$ = $options$$338$$._hfc;
  $ret$$70$$.$handleTextureColor$ = $options$$338$$._htc;
  $ret$$70$$.$handleBackgroundImage$ = $options$$338$$._hbi;
  $ret$$70$$.$handleWidth$ = $options$$338$$._hw;
  $ret$$70$$.$handleHeight$ = $options$$338$$._hh;
  $ret$$70$$.$windowBackgroundColor$ = $options$$338$$._wbc;
  $ret$$70$$.$windowBorderTopStyle$ = $options$$338$$._wbts;
  $ret$$70$$.$windowBorderRightStyle$ = $options$$338$$._wbrs;
  $ret$$70$$.$windowBorderBottomStyle$ = $options$$338$$._wbbs;
  $ret$$70$$.$windowBorderLeftStyle$ = $options$$338$$._wbls;
  $ret$$70$$.$windowBorderTopColor$ = $options$$338$$._wbtc;
  $ret$$70$$.$windowBorderRightColor$ = $options$$338$$._wbrc;
  $ret$$70$$.$windowBorderBottomColor$ = $options$$338$$._wbbc;
  $ret$$70$$.$windowBorderLeftColor$ = $options$$338$$._wblc;
  $ret$$70$$.$overviewBackgroundColor$ = $options$$338$$._obc;
  $ret$$70$$.$currentTimeIndicatorColor$ = $options$$338$$._ctic;
  $ret$$70$$.$timeIndicatorColor$ = $options$$338$$._tic;
  $ret$$70$$.$timeAxisBarColor$ = $options$$338$$._tabc;
  $ret$$70$$.$timeAxisBarOpacity$ = $options$$338$$._tabo;
  $ret$$70$$.$labelStyle$ = $options$$338$$._ls;
  $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$._bs = $options$$338$$._bs;
  $borderStyles_defaultMarkerStyles$$._bc = $options$$338$$._bc;
  $borderStyles_defaultMarkerStyles$$._bw = $options$$338$$._bw;
  $borderStyles_defaultMarkerStyles$$._bof = $options$$338$$._bof;
  $borderStyles_defaultMarkerStyles$$._bo = $options$$338$$._bo;
  $borderStyles_defaultMarkerStyles$$._gc = $options$$338$$._gc;
  $borderStyles_defaultMarkerStyles$$._go = $options$$338$$._go;
  $borderStyles_defaultMarkerStyles$$._dbs = $options$$338$$._dbs;
  $borderStyles_defaultMarkerStyles$$._dbc = $options$$338$$._dbc;
  $borderStyles_defaultMarkerStyles$$._dbw = $options$$338$$._dbw;
  $borderStyles_defaultMarkerStyles$$._hbs = $options$$338$$._hbs;
  $borderStyles_defaultMarkerStyles$$._hbc = $options$$338$$._hbc;
  $borderStyles_defaultMarkerStyles$$._hbw = $options$$338$$._hbw;
  $borderStyles_defaultMarkerStyles$$._hbof = $options$$338$$._hbof;
  $borderStyles_defaultMarkerStyles$$._hbo = $options$$338$$._hbo;
  $borderStyles_defaultMarkerStyles$$._hgc = $options$$338$$._hgc;
  $borderStyles_defaultMarkerStyles$$._hgo = $options$$338$$._hgo;
  $borderStyles_defaultMarkerStyles$$._hdbs = $options$$338$$._hdbs;
  $borderStyles_defaultMarkerStyles$$._hdbc = $options$$338$$._hdbc;
  $borderStyles_defaultMarkerStyles$$._hdbw = $options$$338$$._hdbw;
  $borderStyles_defaultMarkerStyles$$._sbs = $options$$338$$._sbs;
  $borderStyles_defaultMarkerStyles$$._sbc = $options$$338$$._sbc;
  $borderStyles_defaultMarkerStyles$$._sbw = $options$$338$$._sbw;
  $borderStyles_defaultMarkerStyles$$._sbof = $options$$338$$._sbof;
  $borderStyles_defaultMarkerStyles$$._sbo = $options$$338$$._sbo;
  $borderStyles_defaultMarkerStyles$$._sgc = $options$$338$$._sgc;
  $borderStyles_defaultMarkerStyles$$._sgo = $options$$338$$._sgo;
  $borderStyles_defaultMarkerStyles$$._sdbs = $options$$338$$._sdbs;
  $borderStyles_defaultMarkerStyles$$._sdbc = $options$$338$$._sdbc;
  $borderStyles_defaultMarkerStyles$$._sdbw = $options$$338$$._sdbw;
  $borderStyles_defaultMarkerStyles$$._asbs = $options$$338$$._asbs;
  $borderStyles_defaultMarkerStyles$$._asbc = $options$$338$$._asbc;
  $borderStyles_defaultMarkerStyles$$._asbw = $options$$338$$._asbw;
  $borderStyles_defaultMarkerStyles$$._asbof = $options$$338$$._asbof;
  $borderStyles_defaultMarkerStyles$$._asbo = $options$$338$$._asbo;
  $borderStyles_defaultMarkerStyles$$._asgc = $options$$338$$._asgc;
  $borderStyles_defaultMarkerStyles$$._asgo = $options$$338$$._asgo;
  $borderStyles_defaultMarkerStyles$$._asdbs = $options$$338$$._asdbs;
  $borderStyles_defaultMarkerStyles$$._asdbc = $options$$338$$._asdbc;
  $borderStyles_defaultMarkerStyles$$._asdbw = $options$$338$$._asdbw;
  $ret$$70$$.$borderStyles$ = $borderStyles_defaultMarkerStyles$$;
  return $ret$$70$$;
};
$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($markers$$16$$, $defaultMarkerStyles$$1$$) {
  if ($markers$$16$$) {
    for (var $treeNodes$$1$$ = [], $i$$710$$ = 0;$i$$710$$ < $markers$$16$$.length;$i$$710$$++) {
      var $props$$17_treeNode$$1$$ = this.$ParseNodeAttributes$($markers$$16$$[$i$$710$$], $defaultMarkerStyles$$1$$), $props$$17_treeNode$$1$$ = new $DvtTimelineOverviewNode$$(this.$_view$, $props$$17_treeNode$$1$$);
      $treeNodes$$1$$.push($props$$17_treeNode$$1$$);
    }
    return $treeNodes$$1$$;
  }
  return null;
};
$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($options$$339$$, $defaultMarkerStyles$$2$$) {
  var $ret$$71$$ = {}, $useSkinningDefaults$$ = "true" == $options$$339$$._sd;
  $ret$$71$$.id = $options$$339$$.tid;
  $ret$$71$$.$rowKey$ = $options$$339$$.rk;
  $ret$$71$$.time = $options$$339$$.t;
  $ret$$71$$.endTime = $options$$339$$.et;
  $ret$$71$$.shape = $options$$339$$.s;
  $useSkinningDefaults$$ && null == $ret$$71$$.shape && ($ret$$71$$.shape = $defaultMarkerStyles$$2$$.shape);
  $ret$$71$$.$desc$ = $options$$339$$.d;
  $ret$$71$$.color = $options$$339$$.c;
  $ret$$71$$.$durationFillColor$ = $options$$339$$.dfc;
  $useSkinningDefaults$$ && null == $ret$$71$$.color && ($ret$$71$$.color = $defaultMarkerStyles$$2$$.color);
  $ret$$71$$.$scaleX$ = $options$$339$$.sx;
  $useSkinningDefaults$$ && null == $ret$$71$$.$scaleX$ && ($ret$$71$$.$scaleX$ = $defaultMarkerStyles$$2$$.$scaleX$);
  $ret$$71$$.$scaleY$ = $options$$339$$.sy;
  $useSkinningDefaults$$ && null == $ret$$71$$.$scaleY$ && ($ret$$71$$.$scaleY$ = $defaultMarkerStyles$$2$$.$scaleY$);
  $ret$$71$$.$gradient$ = $options$$339$$.g;
  $ret$$71$$.opacity = $options$$339$$.o;
  $useSkinningDefaults$$ && null == $ret$$71$$.opacity && ($ret$$71$$.opacity = $defaultMarkerStyles$$2$$.opacity);
  return $ret$$71$$;
};
function $DvtTimelineOverviewNode$$($overview$$4$$, $props$$18$$) {
  this.Init($overview$$4$$, $props$$18$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewNode$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtTimelineOverviewNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$5$$, $props$$19$$) {
  this.$_view$ = $overview$$5$$;
  this.$_id$ = $props$$19$$.id;
  this.$_time$ = parseInt($props$$19$$.time);
  this.$_endTime$ = null == $props$$19$$.endTime ? null : parseInt($props$$19$$.endTime);
  this.$_shape$ = dvt.$SimpleMarker$.$CIRCLE$;
  "square" == $props$$19$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$RECTANGLE$ : "plus" == $props$$19$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$PLUS$ : "diamond" == $props$$19$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$DIAMOND$ : "triangleUp" == $props$$19$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$TRIANGLE_UP$ : "triangleDown" == $props$$19$$.shape && (this.$_shape$ = dvt.$SimpleMarker$.$TRIANGLE_DOWN$);
  this.$_desc$ = $props$$19$$.$desc$;
  this.$_color$ = $props$$19$$.color;
  this.$_gradient$ = $props$$19$$.$gradient$;
  null != $props$$19$$.opacity && (this.$_opacity$ = parseFloat($props$$19$$.opacity));
  null != $props$$19$$.$scaleX$ && (this.$_scaleX$ = parseFloat($props$$19$$.$scaleX$));
  null != $props$$19$$.$scaleY$ && (this.$_scaleY$ = parseFloat($props$$19$$.$scaleY$));
  null != $props$$19$$.$durationFillColor$ && (this.$_durationFillColor$ = $props$$19$$.$durationFillColor$);
};
$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_id$;
};
$JSCompiler_prototypeAlias$$.getTime = function $$JSCompiler_prototypeAlias$$$getTime$() {
  return this.$_time$;
};
$JSCompiler_prototypeAlias$$.$getScaleX$ = function $$JSCompiler_prototypeAlias$$$$getScaleX$$() {
  return this.$_scaleX$;
};
$JSCompiler_prototypeAlias$$.$getScaleY$ = function $$JSCompiler_prototypeAlias$$$$getScaleY$$() {
  return this.$_scaleY$;
};
$JSCompiler_prototypeAlias$$.$getColor$ = function $$JSCompiler_prototypeAlias$$$$getColor$$() {
  return this.$_color$;
};
$JSCompiler_prototypeAlias$$.$getShape$ = function $$JSCompiler_prototypeAlias$$$$getShape$$() {
  return this.$_shape$;
};
$JSCompiler_prototypeAlias$$.$getOpacity$ = function $$JSCompiler_prototypeAlias$$$$getOpacity$$() {
  return this.$_opacity$;
};
$JSCompiler_prototypeAlias$$.$getDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getDisplayable$$() {
  return this.$_displayable$;
};
$JSCompiler_prototypeAlias$$.$setDisplayable$ = function $$JSCompiler_prototypeAlias$$$$setDisplayable$$($displayable$$90$$) {
  this.$_displayable$ = $displayable$$90$$;
};
$JSCompiler_prototypeAlias$$.$getX$ = function $$JSCompiler_prototypeAlias$$$$getX$$() {
  return this.$_x$;
};
$JSCompiler_prototypeAlias$$.$setX$ = function $$JSCompiler_prototypeAlias$$$$setX$$($x$$220$$) {
  this.$_x$ = $x$$220$$;
};
$JSCompiler_prototypeAlias$$.$getY$ = function $$JSCompiler_prototypeAlias$$$$getY$$() {
  return this.$_y$;
};
$JSCompiler_prototypeAlias$$.$setY$ = function $$JSCompiler_prototypeAlias$$$$setY$$($y$$193$$) {
  this.$_y$ = $y$$193$$;
};
function $DvtTimelineOverviewEvent$$($type$$196$$) {
  this.Init("timeline");
  this.$_subtype$ = $type$$196$$;
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewEvent$$, dvt.$OverviewEvent$);
var $DvtTimelineOverviewEvent$SUBTYPE_SCROLL_TIME$$ = dvt.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$;
$DvtTimelineOverviewEvent$$.prototype.$getItemId$ = function $$DvtTimelineOverviewEvent$$$$$getItemId$$() {
  return this.$getParamValue$("itemId");
};
function $DvtTimelineOverviewAutomation$$($overview$$6$$) {
  this.$_Init$($overview$$6$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewAutomation$$, dvt.$Automation$);
$DvtTimelineOverviewAutomation$$.prototype.$_Init$ = function $$DvtTimelineOverviewAutomation$$$$$_Init$$($overview$$7$$) {
  this.$_overview$ = $overview$$7$$;
};
$DvtTimelineOverviewAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineOverviewAutomation$$$$$GetSubIdForDomElement$$($arr$$13_displayable$$91_prev$$1$$) {
  var $id$$224_seriesIds$$1_seriesIndex$$149$$ = $arr$$13_displayable$$91_prev$$1$$.getId();
  if ($arr$$13_displayable$$91_prev$$1$$ instanceof dvt.$SimpleMarker$) {
    $arr$$13_displayable$$91_prev$$1$$ = $id$$224_seriesIds$$1_seriesIndex$$149$$.split(":");
    if (4 != $arr$$13_displayable$$91_prev$$1$$.length) {
      return null;
    }
    $id$$224_seriesIds$$1_seriesIndex$$149$$ = $JSCompiler_StaticMethods_getSeriesIds$$(this.$_overview$);
    if (null != $id$$224_seriesIds$$1_seriesIndex$$149$$ && ($id$$224_seriesIds$$1_seriesIndex$$149$$ = dvt.$ArrayUtils$.$getIndex$($id$$224_seriesIds$$1_seriesIndex$$149$$, $arr$$13_displayable$$91_prev$$1$$[1]), -1 < $id$$224_seriesIds$$1_seriesIndex$$149$$)) {
      return "marker[" + $id$$224_seriesIds$$1_seriesIndex$$149$$ + "][" + $arr$$13_displayable$$91_prev$$1$$[2] + "]";
    }
  } else {
    if ("window" == $id$$224_seriesIds$$1_seriesIndex$$149$$) {
      return "range_window";
    }
    if ("lh" == $id$$224_seriesIds$$1_seriesIndex$$149$$ || "lhb" == $id$$224_seriesIds$$1_seriesIndex$$149$$ || "lbgrh" == $id$$224_seriesIds$$1_seriesIndex$$149$$) {
      return "range_start_handle";
    }
    if ("rh" == $id$$224_seriesIds$$1_seriesIndex$$149$$ || "rhb" == $id$$224_seriesIds$$1_seriesIndex$$149$$ || "rbgrh" == $id$$224_seriesIds$$1_seriesIndex$$149$$) {
      return "range_end_handle";
    }
    if ("grpy" == $id$$224_seriesIds$$1_seriesIndex$$149$$) {
      return $arr$$13_displayable$$91_prev$$1$$ = $arr$$13_displayable$$91_prev$$1$$.getParent().$getChildBefore$($arr$$13_displayable$$91_prev$$1$$), this.$GetSubIdForDomElement$($arr$$13_displayable$$91_prev$$1$$);
    }
  }
  return null;
};
$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineOverviewAutomation$$$$$getDomElementForSubId$$($seriesIds$$2_subId$$31$$) {
  var $marker$$34_subIdArray$$ = $DvtTimelineOverviewAutomation$_convertSubIdToArray$$($seriesIds$$2_subId$$31$$);
  if ($marker$$34_subIdArray$$ && 3 == $marker$$34_subIdArray$$.length && "marker" == $marker$$34_subIdArray$$[0]) {
    if ($seriesIds$$2_subId$$31$$ = $JSCompiler_StaticMethods_getSeriesIds$$(this.$_overview$), null != $seriesIds$$2_subId$$31$$) {
      var $index$$210$$ = parseInt($marker$$34_subIdArray$$[1], 10);
      if (-1 < $index$$210$$ && $index$$210$$ < $seriesIds$$2_subId$$31$$.length) {
        return ($marker$$34_subIdArray$$ = $DvtTimelineOverviewAutomation$_findMarker$$(this.$_overview$.$_markers$, $seriesIds$$2_subId$$31$$[$index$$210$$], $marker$$34_subIdArray$$[2])) ? $marker$$34_subIdArray$$.$getDisplayable$().$getElem$() : null;
      }
    }
  } else {
    if ("range_window" == $seriesIds$$2_subId$$31$$) {
      return this.$_overview$.$getSlidingWindow$().$getElem$();
    }
    if ("range_start_handle" == $seriesIds$$2_subId$$31$$) {
      return this.$_overview$.$getLeftHandle$().$getElem$();
    }
    if ("range_end_handle" == $seriesIds$$2_subId$$31$$) {
      return this.$_overview$.$getRightHandle$().$getElem$();
    }
  }
  return null;
};
$DvtTimelineOverviewAutomation$$.prototype.getDomElementForSubId = $DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$;
$DvtTimelineOverviewAutomation$$.prototype.click = function $$DvtTimelineOverviewAutomation$$$$click$($foundMarker$$inline_4172_subId$$32_subIdArray$$inline_4171$$) {
  var $event$$inline_4170$$ = 0;
  void 0 === $event$$inline_4170$$ && ($event$$inline_4170$$ = -1);
  null != $foundMarker$$inline_4172_subId$$32_subIdArray$$inline_4171$$ && -1 != $event$$inline_4170$$ && 0 == $event$$inline_4170$$ && ($foundMarker$$inline_4172_subId$$32_subIdArray$$inline_4171$$ = $DvtTimelineOverviewAutomation$_convertSubIdToArray$$($foundMarker$$inline_4172_subId$$32_subIdArray$$inline_4171$$)) && 3 == $foundMarker$$inline_4172_subId$$32_subIdArray$$inline_4171$$.length && "marker" == $foundMarker$$inline_4172_subId$$32_subIdArray$$inline_4171$$[0] && ($foundMarker$$inline_4172_subId$$32_subIdArray$$inline_4171$$ = 
  $DvtTimelineOverviewAutomation$_findMarker$$(this.$_overview$.$_markers$, $foundMarker$$inline_4172_subId$$32_subIdArray$$inline_4171$$[1], $foundMarker$$inline_4172_subId$$32_subIdArray$$inline_4171$$[2])) && $JSCompiler_StaticMethods_HandleMarkerClick$$(this.$_overview$, $foundMarker$$inline_4172_subId$$32_subIdArray$$inline_4171$$.$getDisplayable$(), !1);
};
function $DvtTimelineOverviewAutomation$_convertSubIdToArray$$($array$$18_subId$$34$$) {
  $array$$18_subId$$34$$ = $array$$18_subId$$34$$.split("[");
  for (var $len$$20$$ = $array$$18_subId$$34$$.length, $i$$711$$ = 1;$i$$711$$ < $len$$20$$;$i$$711$$++) {
    var $elem$$9_tempId$$ = $array$$18_subId$$34$$[$i$$711$$], $elem$$9_tempId$$ = $elem$$9_tempId$$.substr(0, $elem$$9_tempId$$.length - 1), $tempIdAsNumber$$ = parseFloat($elem$$9_tempId$$), $elem$$9_tempId$$ = isNaN($tempIdAsNumber$$) ? $elem$$9_tempId$$ : $tempIdAsNumber$$;
    $array$$18_subId$$34$$[$i$$711$$] = $elem$$9_tempId$$;
  }
  return $array$$18_subId$$34$$;
}
function $DvtTimelineOverviewAutomation$_findMarker$$($markers$$17$$, $markerId$$3_seriesId$$1$$, $i$$712_index$$211$$) {
  $markerId$$3_seriesId$$1$$ = "tl1:" + $markerId$$3_seriesId$$1$$ + ":" + $i$$712_index$$211$$ + ":";
  for ($i$$712_index$$211$$ = 0;$i$$712_index$$211$$ < $markers$$17$$.length;$i$$712_index$$211$$++) {
    var $marker$$35$$ = $markers$$17$$[$i$$712_index$$211$$], $id$$225$$ = $marker$$35$$.getId();
    if (null != $id$$225$$ && 0 == $id$$225$$.indexOf($markerId$$3_seriesId$$1$$)) {
      return $marker$$35$$;
    }
  }
  return null;
}
;
var $DvtTimeUtils$$ = {$supportsTouch$:function() {
  return dvt.$Agent$.$isTouchDevice$();
}};
dvt.$Obj$.$createSubclass$($DvtTimeUtils$$, dvt.$Obj$);
$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$3_startTime$$17$$, $endTime$$14$$, $number$$5_time$$19$$, $width$$132$$) {
  $number$$5_time$$19$$ = ($number$$5_time$$19$$ - $denominator$$3_startTime$$17$$) * $width$$132$$;
  $denominator$$3_startTime$$17$$ = $endTime$$14$$ - $denominator$$3_startTime$$17$$;
  return 0 == $number$$5_time$$19$$ || 0 == $denominator$$3_startTime$$17$$ ? 0 : $number$$5_time$$19$$ / $denominator$$3_startTime$$17$$;
};
$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$18$$, $endTime$$15_number$$6$$, $pos$$70$$, $width$$133$$) {
  $endTime$$15_number$$6$$ = $pos$$70$$ * ($endTime$$15_number$$6$$ - $startTime$$18$$);
  return 0 == $endTime$$15_number$$6$$ || 0 == $width$$133$$ ? $startTime$$18$$ : $endTime$$15_number$$6$$ / $width$$133$$ + $startTime$$18$$;
};
function $DvtTimelineKeyboardHandler$$($manager$$28$$) {
  this.Init($manager$$28$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineKeyboardHandler$$, dvt.$KeyboardHandler$);
$DvtTimelineKeyboardHandler$$.prototype.Init = function $$DvtTimelineKeyboardHandler$$$$Init$($manager$$29$$) {
  $DvtTimelineKeyboardHandler$$.$superclass$.Init.call(this, $manager$$29$$);
};
$DvtTimelineKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isSelectionEvent$$($event$$523$$) {
  return this.$isNavigationEvent$($event$$523$$) && !$event$$523$$.ctrlKey;
};
$DvtTimelineKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isMultiSelectEvent$$($event$$524$$) {
  return $event$$524$$.keyCode == dvt.KeyboardEvent.$SPACE$ && $event$$524$$.ctrlKey;
};
$DvtTimelineKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtTimelineKeyboardHandler$$$$$processKeyDown$$($event$$525$$) {
  var $keyCode$$33$$ = $event$$525$$.keyCode;
  dvt.KeyboardEvent.$isEquals$($event$$525$$) || dvt.KeyboardEvent.$isPlus$($event$$525$$) ? this.$_eventManager$.$zoomBy$(1 / dvt.$Timeline$.$ZOOM_BY_VALUE$) : dvt.KeyboardEvent.$isMinus$($event$$525$$) || dvt.KeyboardEvent.$isUnderscore$($event$$525$$) ? this.$_eventManager$.$zoomBy$(dvt.$Timeline$.$ZOOM_BY_VALUE$) : $keyCode$$33$$ == dvt.KeyboardEvent.$PAGE_UP$ ? ($event$$525$$.shiftKey ? this.$_eventManager$.$panBy$(-.25, 0) : this.$_eventManager$.$panBy$(0, -.25), dvt.$EventManager$.$consumeEvent$($event$$525$$)) : 
  $keyCode$$33$$ == dvt.KeyboardEvent.$PAGE_DOWN$ && ($event$$525$$.shiftKey ? this.$_eventManager$.$panBy$(.25, 0) : this.$_eventManager$.$panBy$(0, .25), dvt.$EventManager$.$consumeEvent$($event$$525$$));
  return $DvtTimelineKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$525$$);
};
function $DvtTimelineKeyboardHandler$getNextNavigable$$($currentNavigable$$13$$, $event$$526$$, $navigableItems$$4$$) {
  var $isVertical$$3_series$$12$$ = $currentNavigable$$13$$.$getSeries$(), $seriesIndex$$145$$ = $currentNavigable$$13$$.$getSeriesIndex$(), $isRTL$$43$$ = dvt.$Agent$.$isRightToLeft$($isVertical$$3_series$$12$$.$getCtx$()), $isVertical$$3_series$$12$$ = $isVertical$$3_series$$12$$.$isVertical$(), $isDualSeries$$ = 1 < $navigableItems$$4$$.length;
  if (!$isRTL$$43$$ && dvt.KeyboardEvent.$RIGHT_ARROW$ == $event$$526$$.keyCode || $isRTL$$43$$ && dvt.KeyboardEvent.$LEFT_ARROW$ == $event$$526$$.keyCode) {
    if (!$isVertical$$3_series$$12$$) {
      return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$145$$], !0);
    }
    if ($isDualSeries$$ && 1 != $seriesIndex$$145$$) {
      return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[1]);
    }
  } else {
    if (!$isRTL$$43$$ && dvt.KeyboardEvent.$LEFT_ARROW$ == $event$$526$$.keyCode || $isRTL$$43$$ && dvt.KeyboardEvent.$RIGHT_ARROW$ == $event$$526$$.keyCode) {
      if (!$isVertical$$3_series$$12$$) {
        return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$145$$], !1);
      }
      if ($isDualSeries$$ && 0 != $seriesIndex$$145$$) {
        return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[0]);
      }
    } else {
      if (dvt.KeyboardEvent.$DOWN_ARROW$ == $event$$526$$.keyCode) {
        if ($isVertical$$3_series$$12$$) {
          return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$145$$], !0);
        }
        if ($isDualSeries$$ && 1 != $seriesIndex$$145$$) {
          return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[1]);
        }
      } else {
        if (dvt.KeyboardEvent.$UP_ARROW$ == $event$$526$$.keyCode) {
          if ($isVertical$$3_series$$12$$) {
            return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$145$$], !1);
          }
          if ($isDualSeries$$ && 0 != $seriesIndex$$145$$) {
            return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[0]);
          }
        }
      }
    }
  }
  return null;
}
function $DvtTimelineKeyboardHandler$getNextItem$$($item$$51_nextIndex$$5$$, $navigableItems$$5$$, $isNext$$) {
  $item$$51_nextIndex$$5$$ = dvt.$ArrayUtils$.$getIndex$($navigableItems$$5$$, $item$$51_nextIndex$$5$$) + ($isNext$$ ? 1 : -1);
  return 0 <= $item$$51_nextIndex$$5$$ && $item$$51_nextIndex$$5$$ < $navigableItems$$5$$.length ? $navigableItems$$5$$[$item$$51_nextIndex$$5$$] : null;
}
function $DvtTimelineKeyboardHandler$getClosestItem$$($item$$52$$, $navigableItems$$6$$) {
  if (0 < $navigableItems$$6$$.length) {
    for (var $closest$$ = $navigableItems$$6$$[0], $itemLoc$$ = $item$$52$$.$_loc$, $dist$$2$$ = Math.abs($itemLoc$$ - $closest$$.$_loc$), $i$$655$$ = 1;$i$$655$$ < $navigableItems$$6$$.length;$i$$655$$++) {
      var $testDist$$ = Math.abs($itemLoc$$ - $navigableItems$$6$$[$i$$655$$].$_loc$);
      $testDist$$ < $dist$$2$$ && ($dist$$2$$ = $testDist$$, $closest$$ = $navigableItems$$6$$[$i$$655$$]);
    }
    return $closest$$;
  }
  return null;
}
function $DvtTimelineEventManager$$($timeline$$) {
  this.Init($timeline$$.$getCtx$(), $timeline$$.$processEvent$, $timeline$$);
  this.$_timeline$ = $timeline$$;
  this.$_isPinchZoom$ = this.$_isDragPanning$ = !1;
}
dvt.$Obj$.$createSubclass$($DvtTimelineEventManager$$, dvt.$EventManager$);
$JSCompiler_prototypeAlias$$ = $DvtTimelineEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$85_stage$$11$$) {
  $DvtTimelineEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$85_stage$$11$$);
  dvt.$SvgDocumentUtils$.$addDragListeners$(this.$_timeline$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  dvt.$Agent$.$isTouchDevice$() || (dvt.$Agent$.$isPlatformGecko$() ? $displayable$$85_stage$$11$$.$addEvtListener$("wheel", this.$OnMouseWheel$, !1, this) : $displayable$$85_stage$$11$$.$addEvtListener$(dvt.MouseEvent.$MOUSEWHEEL$, this.$OnMouseWheel$, !1, this), dvt.$Agent$.$isPlatformIE$() && ($displayable$$85_stage$$11$$ = this.$getCtx$().$_stage$, $displayable$$85_stage$$11$$.$addEvtListener$("mouseenter", this.$OnMouseEnter$, !1, this), $displayable$$85_stage$$11$$.$addEvtListener$("mouseleave", 
  this.$OnMouseLeave$, !1, this)));
};
$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$86_stage$$12$$) {
  $DvtTimelineEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$86_stage$$12$$);
  dvt.$Agent$.$isTouchDevice$() || (dvt.$Agent$.$isPlatformGecko$() ? $displayable$$86_stage$$12$$.$removeEvtListener$("wheel", this.$OnMouseWheel$, !1, this) : $displayable$$86_stage$$12$$.$removeEvtListener$(dvt.MouseEvent.$MOUSEWHEEL$, this.$OnMouseWheel$, !1, this), dvt.$Agent$.$isPlatformIE$() && ($displayable$$86_stage$$12$$ = this.$getCtx$().$_stage$, $displayable$$86_stage$$12$$.$removeEvtListener$("mouseenter", this.$OnMouseEnter$, !1, this), $displayable$$86_stage$$12$$.$removeEvtListener$("mouseleave", 
  this.$OnMouseLeave$, !1, this)));
};
$JSCompiler_prototypeAlias$$.$OnKeyDown$ = function $$JSCompiler_prototypeAlias$$$$OnKeyDown$$($event$$527$$) {
  $DvtTimelineEventManager$$.$superclass$.$OnKeyDown$.call(this, $event$$527$$);
  this.$_timeline$.$HandleKeyDown$($event$$527$$);
};
$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$528$$) {
  this.$_isDragPanning$ || ($DvtTimelineEventManager$$.$superclass$.$OnClick$.call(this, $event$$528$$), $JSCompiler_StaticMethods_handleShapeClick$$(this.$_timeline$, $event$$528$$));
};
$JSCompiler_prototypeAlias$$.$PreOnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOver$$($event$$529$$) {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  $DvtTimelineEventManager$$.$superclass$.$PreOnMouseOver$.call(this, $event$$529$$);
  dvt.$Agent$.$isPlatformIE$() || this.$isMouseOver$ || (this.$isMouseOver$ = !0, $JSCompiler_StaticMethods_isAnimating$$(this.$_timeline$) || $JSCompiler_StaticMethods_showThenHideHotspots$$(this.$_timeline$));
};
$JSCompiler_prototypeAlias$$.$OnMouseEnter$ = function $$JSCompiler_prototypeAlias$$$$OnMouseEnter$$() {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  this.$isMouseOver$ || (this.$isMouseOver$ = !0, $JSCompiler_StaticMethods_isAnimating$$(this.$_timeline$) || $JSCompiler_StaticMethods_showThenHideHotspots$$(this.$_timeline$));
};
$JSCompiler_prototypeAlias$$.$OnMouseLeave$ = function $$JSCompiler_prototypeAlias$$$$OnMouseLeave$$() {
  this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new dvt.$Timer$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1));
  this.$_mouseOutTimer$.reset();
  this.$_mouseOutTimer$.start();
};
$JSCompiler_prototypeAlias$$.$PreOnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOut$$($event$$532$$) {
  $DvtTimelineEventManager$$.$superclass$.$PreOnMouseOut$.call(this, $event$$532$$);
  dvt.$Agent$.$isPlatformIE$() || (this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new dvt.$Timer$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1)), this.$_mouseOutTimer$.reset(), this.$_mouseOutTimer$.start());
};
$JSCompiler_prototypeAlias$$.$_onMouseOutTimerEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseOutTimerEnd$$() {
  this.$isMouseOver$ = !1;
};
$JSCompiler_prototypeAlias$$.$PreOnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseDown$$($event$$533$$) {
  this.$_isDragPanning$ = !1;
  $DvtTimelineEventManager$$.$superclass$.$PreOnMouseDown$.call(this, $event$$533$$);
  this.$_timeline$.$HandleMouseDown$($event$$533$$);
};
$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$534$$) {
  this.$_timeline$.$HandleMouseWheel$($event$$534$$);
};
$JSCompiler_prototypeAlias$$.$OnTouchStartBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchStartBubble$$($event$$535$$) {
  $DvtTimelineEventManager$$.$superclass$.$OnTouchStartBubble$.call(this, $event$$535$$);
  this.$_timeline$.$HandleTouchStart$($event$$535$$);
  this.$_timeline$.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus();
};
$JSCompiler_prototypeAlias$$.$OnTouchEndBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchEndBubble$$($event$$536$$) {
  $DvtTimelineEventManager$$.$superclass$.$OnTouchEndBubble$.call(this, $event$$536$$);
  this.$_timeline$.$HandleTouchEnd$($event$$536$$);
};
$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$537$$) {
  if (this.$_timeline$.$hasValidOptions$()) {
    return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($event$$537$$) : this.$_onMouseDragStart$($event$$537$$);
  }
};
$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$538$$) {
  return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($event$$538$$) : this.$_onMouseDragMove$($event$$538$$);
};
$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$539$$) {
  return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($event$$539$$) : this.$_onMouseDragEnd$($event$$539$$);
};
$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$8$$, $pageY$$8$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
  return new dvt.$Point$($pageX$$8$$ - this.$_stageAbsolutePosition$.x, $pageY$$8$$ - this.$_stageAbsolutePosition$.y);
};
$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$540_relPos$$51$$) {
  return $event$$540_relPos$$51$$.button != dvt.MouseEvent.$RIGHT_CLICK_BUTTON$ ? ($event$$540_relPos$$51$$ = this.$_getRelativePosition$($event$$540_relPos$$51$$.pageX, $event$$540_relPos$$51$$.pageY), this.$_timeline$.$beginDragPan$($event$$540_relPos$$51$$.x, $event$$540_relPos$$51$$.y), !0) : !1;
};
$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$541_relPos$$52$$) {
  $event$$541_relPos$$52$$ = this.$_getRelativePosition$($event$$541_relPos$$52$$.pageX, $event$$541_relPos$$52$$.pageY);
  this.$_timeline$.$contDragPan$($event$$541_relPos$$52$$.x, $event$$541_relPos$$52$$.y) && (this.$_isDragPanning$ = !0);
};
$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$() {
  this.$_timeline$.$endDragPan$();
  this.$_stageAbsolutePosition$ = null;
};
$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$543_relPos$$53$$) {
  var $relPos2$$2_touches$$9$$ = $event$$543_relPos$$53$$.touches;
  if (1 == $relPos2$$2_touches$$9$$.length) {
    return $event$$543_relPos$$53$$ = this.$_getRelativePosition$($relPos2$$2_touches$$9$$[0].pageX, $relPos2$$2_touches$$9$$[0].pageY), this.$_timeline$.$beginDragPan$($event$$543_relPos$$53$$.x, $event$$543_relPos$$53$$.y), !0;
  }
  if (2 == $relPos2$$2_touches$$9$$.length) {
    this.$_timeline$.$endDragPan$();
    this.$_isPinchZoom$ = !0;
    var $relPos1$$2$$ = this.$_getRelativePosition$($relPos2$$2_touches$$9$$[0].pageX, $relPos2$$2_touches$$9$$[0].pageY), $relPos2$$2_touches$$9$$ = this.$_getRelativePosition$($relPos2$$2_touches$$9$$[1].pageX, $relPos2$$2_touches$$9$$[1].pageY);
    this.$_timeline$.$beginPinchZoom$($relPos1$$2$$.x, $relPos1$$2$$.y, $relPos2$$2_touches$$9$$.x, $relPos2$$2_touches$$9$$.y);
    dvt.$EventManager$.$consumeEvent$($event$$543_relPos$$53$$);
    return !0;
  }
  return !1;
};
$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$544$$) {
  var $relPos2$$3_touches$$10$$ = $event$$544$$.touches;
  if (1 == $relPos2$$3_touches$$10$$.length) {
    var $relPos$$54_relPos1$$3$$ = this.$_getRelativePosition$($relPos2$$3_touches$$10$$[0].pageX, $relPos2$$3_touches$$10$$[0].pageY);
    this.$_timeline$.$contDragPan$($relPos$$54_relPos1$$3$$.x, $relPos$$54_relPos1$$3$$.y);
    $event$$544$$.preventDefault();
  } else {
    2 == $relPos2$$3_touches$$10$$.length && ($relPos$$54_relPos1$$3$$ = this.$_getRelativePosition$($relPos2$$3_touches$$10$$[0].pageX, $relPos2$$3_touches$$10$$[0].pageY), $relPos2$$3_touches$$10$$ = this.$_getRelativePosition$($relPos2$$3_touches$$10$$[1].pageX, $relPos2$$3_touches$$10$$[1].pageY), this.$_timeline$.$contPinchZoom$($relPos$$54_relPos1$$3$$.x, $relPos$$54_relPos1$$3$$.y, $relPos2$$3_touches$$10$$.x, $relPos2$$3_touches$$10$$.y), $event$$544$$.preventDefault());
  }
};
$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$545$$) {
  this.$_isPinchZoom$ ? (this.$_isPinchZoom$ = !1, this.$_timeline$.$endPinchZoom$()) : this.$_timeline$.$endDragPan$();
  $event$$545$$.preventDefault();
  this.$_stageAbsolutePosition$ = null;
};
$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$12$$) {
  this.$_timeline$.$zoomBy$($dz$$12$$);
};
$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$22$$, $dy$$24$$) {
  var $deltaX$$16$$ = $dx$$22$$ * this.$_timeline$.$_canvasLength$ * (dvt.$Agent$.$isRightToLeft$(this.$_context$) ? -1 : 1), $deltaY$$16$$ = $dy$$24$$ * this.$_timeline$.$_seriesSize$;
  0 != $deltaX$$16$$ && (this.$_timeline$.$_triggerViewportChange$ = !0);
  var $focusObj$$4$$ = this.$getFocus$();
  $focusObj$$4$$ && (this.$_timeline$.$_dragPanSeries$ = $focusObj$$4$$.$_series$);
  this.$_timeline$.$panBy$($deltaX$$16$$, $deltaY$$16$$);
  $JSCompiler_StaticMethods_endPan$$(this.$_timeline$);
};
$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  this.$_timeline$.$handleZoom$(!0);
};
$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  this.$_timeline$.$handleZoom$(!1);
};
$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  return dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$;
};
dvt.$Timeline$ = function $dvt$$Timeline$$($context$$407$$, $callback$$171$$, $callbackObj$$92$$) {
  this.Init($context$$407$$, $callback$$171$$, $callbackObj$$92$$);
};
dvt.$Obj$.$createSubclass$(dvt.$Timeline$, dvt.$TimeComponent$);
dvt.$Timeline$.$ZOOM_BY_VALUE$ = 1.5;
dvt.$Timeline$.$ORIENTATION_VERTICAL$ = "vertical";
dvt.$Timeline$.newInstance = function $dvt$$Timeline$$newInstance$($context$$408$$, $callback$$172$$, $callbackObj$$93$$) {
  return new dvt.$Timeline$($context$$408$$, $callback$$172$$, $callbackObj$$93$$);
};
$goog$exportPath_$$("dvt.Timeline.newInstance", dvt.$Timeline$.newInstance);
$JSCompiler_prototypeAlias$$ = dvt.$Timeline$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$409$$, $callback$$173$$, $callbackObj$$94$$) {
  dvt.$Timeline$.$superclass$.Init.call(this, $context$$409$$, $callback$$173$$, $callbackObj$$94$$);
  this.$Defaults$ = new $DvtTimelineDefaults$$;
  this.$EventManager$ = new $DvtTimelineEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  dvt.$Agent$.$isTouchDevice$() ? this.$_keyboardHandler$ = null : (this.$_keyboardHandler$ = new $DvtTimelineKeyboardHandler$$(this.$EventManager$), this.$EventManager$.$setKeyboardHandler$(this.$_keyboardHandler$));
};
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$291$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$291$$);
  dvt.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none");
};
$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($options$$292$$) {
  this.$_parser$ = new $DvtTimelineParser$$;
  return this.$_parser$.parse($options$$292$$);
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$7$$) {
  var $orientation$$4$$ = this.$Options$.orientation;
  this.$_isVertical$ = $orientation$$4$$ && $orientation$$4$$ == dvt.$Timeline$.$ORIENTATION_VERTICAL$ ? !0 : !1;
  this.$_hasOverview$ = $props$$7$$.$hasOverview$;
  this.$_viewStartTime$ = $props$$7$$.$viewStart$;
  this.$_viewEndTime$ = $props$$7$$.$viewEnd$;
  this.$_selectionMode$ = $props$$7$$.$selectionMode$;
  this.$SelectionHandler$ = "single" == this.$_selectionMode$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == this.$_selectionMode$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_MULTIPLE$) : null;
  this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
  this.$_shortDesc$ = $props$$7$$.$shortDesc$;
  this.$_referenceObjects$ = $props$$7$$.$referenceObjects$;
  this.$_seriesScale$ = $props$$7$$.$seriesScale$;
  this.$_timeZoneOffsets$ = $props$$7$$.$timeZoneOffsets$;
  this.$_seriesScale$ ? (this.$_seriesConverter$ = $props$$7$$.$seriesConverter$, this.$_seriesTimeAxis$ = new dvt.$TimeAxis$(this.$getCtx$(), null, null), this.$_seriesTimeAxis$.$setIsVertical$(this.$_isVertical$), this.$_seriesTimeAxis$.$setScale$(this.$_seriesScale$), this.$_seriesTimeAxis$.$setConverter$(this.$_seriesConverter$), this.$_seriesCustomFormatScales$ = $props$$7$$.$seriesCustomFormatScales$, this.$_dateFormatStrings$ = this.$_seriesTimeAxis$.$_dateFormatStrings$, this.$_isVertical$ ? 
  (this.$_seriesTimeAxis$.$setType$("short", this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$setDefaultConverter$(this.$_resources$.converterVert)) : (this.$_seriesTimeAxis$.$setType$("long", this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$setDefaultConverter$(this.$_resources$.converter)), this.$_timeZoneOffsets$ && this.$_seriesTimeAxis$.$setTimeZoneOffsets$(this.$_timeZoneOffsets$)) : this.$_seriesTimeAxis$ = null;
  this.$_defaultInversions$ = [!1, !0];
  this.$_itemPosition$ = $props$$7$$.$itemPosition$;
  this.$_customTimeScales$ = $props$$7$$.$customTimeScales$;
  this.$_customFormatScales$ = $props$$7$$.$customFormatScales$;
  this.$_scale$ = $props$$7$$.scale;
  dvt.$Timeline$.$superclass$.$_applyParsedProperties$.call(this, $props$$7$$);
};
function $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$, $seriesCount$$26$$) {
  return $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_hasOverview$ || 1 != $seriesCount$$26$$ ? $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$() : $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$() - $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getBorderWidth$();
}
$JSCompiler_prototypeAlias$$.select = function $$JSCompiler_prototypeAlias$$$select$($selection$$27$$) {
  this.$Options$.selection = dvt.$JsonUtils$.clone($selection$$27$$);
  this.$SelectionHandler$ && $JSCompiler_StaticMethods_applyInitialSelections$$(this);
};
dvt.$Timeline$.prototype.select = dvt.$Timeline$.prototype.select;
dvt.$Timeline$.prototype.$render$ = function $dvt$$Timeline$$$$render$$($i$$inline_3911_options$$294_props$$8$$, $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$, $height$$113_minorAxisStyleDefaults$$inline_3905_seriesCount$$inline_3910$$) {
  if ($i$$inline_3911_options$$294_props$$8$$) {
    this.$SetOptions$($i$$inline_3911_options$$294_props$$8$$);
    this.$Options$ && (this.$_resources$ = this.$Options$._resources, null == this.$_resources$ && (this.$_resources$ = []));
    this.$Width$ = $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$;
    this.$Height$ = $height$$113_minorAxisStyleDefaults$$inline_3905_seriesCount$$inline_3910$$;
    $i$$inline_3911_options$$294_props$$8$$ = this.$Parse$(this.$Options$);
    this.$_applyParsedProperties$($i$$inline_3911_options$$294_props$$8$$);
    this.$_fetchStartPos$ = 0;
    this.$_fetchEndPos$ = this.$_isVertical$ ? $height$$113_minorAxisStyleDefaults$$inline_3905_seriesCount$$inline_3910$$ : $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$;
    this.$Options$.styleDefaults && (this.$_majorAxisStyleDefaults$ = this.$Options$.styleDefaults.majorAxis, this.$_seriesStyleDefaults$ = this.$Options$.styleDefaults.series);
    this.$_scale$ && ($minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$ = this.$Options$, this.$_timeAxisOptions$ = {start:$minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.start, end:$minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.end, _resources:$minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$._resources, 
    shortDesc:$minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.shortDesc, _tzo:$minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$._tzo, _ip:$minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$._ip, _cts:this.$_customTimeScales$, _cfs:this.$_customFormatScales$, orientation:$minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.orientation}, 
    $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.styleDefaults && $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.styleDefaults.minorAxis && ($height$$113_minorAxisStyleDefaults$$inline_3905_seriesCount$$inline_3910$$ = $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.styleDefaults.minorAxis, this.$_timeAxisOptions$.backgroundColor = $height$$113_minorAxisStyleDefaults$$inline_3905_seriesCount$$inline_3910$$.backgroundColor, 
    this.$_timeAxisOptions$.borderColor = $height$$113_minorAxisStyleDefaults$$inline_3905_seriesCount$$inline_3910$$.borderColor, this.$_timeAxisOptions$.separatorColor = $height$$113_minorAxisStyleDefaults$$inline_3905_seriesCount$$inline_3910$$.separatorColor, this.$_timeAxisOptions$.labelStyle = $height$$113_minorAxisStyleDefaults$$inline_3905_seriesCount$$inline_3910$$.labelStyle), $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.minorAxis && 
    ($minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$ = $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.minorAxis, this.$_timeAxisOptions$.scale = $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.scale, this.$_timeAxisOptions$.converter = $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.converter, 
    this.$_timeAxisOptions$.zoomOrder = $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.zoomOrder, this.$_timeAxisOptions$.style = $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.style), $JSCompiler_StaticMethods_applyAxisStyleValues$$(this), this.$_timeAxis$ || (this.$_timeAxis$ = new dvt.$TimeAxis$(this.$getCtx$(), null, null), this.$_timeAxis$.$setBorderVisibility$(!0, !0, !0, !0)), this.$_timeAxis$.$setCanvasSize$(), 
    $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$ = this.$_timeAxis$.$getPreferredLength$(this.$_timeAxisOptions$, this.$_canvasLength$), this.$setContentLength$($minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$), $JSCompiler_StaticMethods_prepareViewportLength$$(this));
    if ($minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$ = this.$Options$.series) {
      $height$$113_minorAxisStyleDefaults$$inline_3905_seriesCount$$inline_3910$$ = Math.min($minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$.length, 2);
      this.$_seriesOptions$ = [];
      if (this.$_series$) {
        if ($height$$113_minorAxisStyleDefaults$$inline_3905_seriesCount$$inline_3910$$ != this.$_series$.length) {
          for ($i$$inline_3911_options$$294_props$$8$$ = 0;$i$$inline_3911_options$$294_props$$8$$ < this.$_series$.length;$i$$inline_3911_options$$294_props$$8$$++) {
            this.$_timeZoomCanvas$.removeChild(this.$_series$[$i$$inline_3911_options$$294_props$$8$$]);
          }
          this.$_series$ = [];
        }
      } else {
        this.$_series$ = [];
      }
      for ($i$$inline_3911_options$$294_props$$8$$ = 0;$i$$inline_3911_options$$294_props$$8$$ < $height$$113_minorAxisStyleDefaults$$inline_3905_seriesCount$$inline_3910$$;$i$$inline_3911_options$$294_props$$8$$++) {
        var $s$$inline_3913_seriesOptions$$inline_3912$$ = $minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$[$i$$inline_3911_options$$294_props$$8$$];
        $s$$inline_3913_seriesOptions$$inline_3912$$.start = this.$_start$;
        $s$$inline_3913_seriesOptions$$inline_3912$$.end = this.$_end$;
        $s$$inline_3913_seriesOptions$$inline_3912$$.inverted = this.$_defaultInversions$[$i$$inline_3911_options$$294_props$$8$$];
        $s$$inline_3913_seriesOptions$$inline_3912$$.orientation = this.$Options$.orientation;
        $s$$inline_3913_seriesOptions$$inline_3912$$.referenceObjects = this.$_referenceObjects$;
        $s$$inline_3913_seriesOptions$$inline_3912$$.timeline = this;
        $s$$inline_3913_seriesOptions$$inline_3912$$.index = $i$$inline_3911_options$$294_props$$8$$;
        $s$$inline_3913_seriesOptions$$inline_3912$$.animationOnDisplay = this.$Options$.animationOnDisplay;
        $s$$inline_3913_seriesOptions$$inline_3912$$.animationOnDataChange = this.$Options$.animationOnDataChange;
        this.$Options$.majorAxis && ($s$$inline_3913_seriesOptions$$inline_3912$$.scale = this.$Options$.majorAxis.scale, $s$$inline_3913_seriesOptions$$inline_3912$$.timeAxis = this.$_seriesTimeAxis$, $s$$inline_3913_seriesOptions$$inline_3912$$._cfs = this.$_seriesCustomFormatScales$);
        if ($s$$inline_3913_seriesOptions$$inline_3912$$.styleDefaults = this.$Options$.styleDefaults) {
          $s$$inline_3913_seriesOptions$$inline_3912$$.seriesStyleDefaults = this.$_seriesStyleDefaults$, $s$$inline_3913_seriesOptions$$inline_3912$$.axisStyleDefaults = this.$_majorAxisStyleDefaults$;
        }
        $s$$inline_3913_seriesOptions$$inline_3912$$._isRandomItemLayout = "random" == this.$_itemPosition$;
        $s$$inline_3913_seriesOptions$$inline_3912$$._cts = this.$Options$._cts;
        this.$_seriesOptions$.push($s$$inline_3913_seriesOptions$$inline_3912$$);
        null == this.$_series$[$i$$inline_3911_options$$294_props$$8$$] && ($s$$inline_3913_seriesOptions$$inline_3912$$ = new $DvtTimelineSeries$$(this.$getCtx$(), this.$HandleEvent$, this), this.$_series$.push($s$$inline_3913_seriesOptions$$inline_3912$$));
      }
    } else {
      this.$_series$ = [];
    }
    $DvtTimelineRenderer$$.$renderTimeline$(this);
    this.$UpdateAriaAttributes$();
    this.$getCtx$().$setKeyboardFocusArray$([this]);
  } else {
    this.$_handleResize$($minorAxisOptions$$inline_3906_options$$inline_3904_preferredLength_series$$inline_3909_width$$134$$, $height$$113_minorAxisStyleDefaults$$inline_3905_seriesCount$$inline_3910$$);
  }
};
dvt.$Timeline$.prototype.render = dvt.$Timeline$.prototype.$render$;
$JSCompiler_prototypeAlias$$ = dvt.$Timeline$.prototype;
$JSCompiler_prototypeAlias$$.$hasValidOptions$ = function $$JSCompiler_prototypeAlias$$$$hasValidOptions$$() {
  var $hasValidScale$$1$$ = this.$_scale$ && -1 != dvt.$ArrayUtils$.$getIndex$(dvt.$TimeAxis$.$_VALID_SCALES$, this.$_scale$), $hasValidCustomScale$$1$$ = this.$_scale$ && this.$_customTimeScales$ && this.$_customTimeScales$[this.$_scale$], $hasValidStartAndEnd$$1$$ = this.$_start$ && this.$_end$ && this.$_end$ > this.$_start$, $hasValidSeries$$ = this.$_series$ && 0 < this.$_series$.length, $JSCompiler_temp$$252_hasValidSeriesItems_i$$inline_3920$$;
  if ($hasValidSeries$$) {
    a: {
      for ($JSCompiler_temp$$252_hasValidSeriesItems_i$$inline_3920$$ = 0;$JSCompiler_temp$$252_hasValidSeriesItems_i$$inline_3920$$ < this.$_seriesOptions$.length;$JSCompiler_temp$$252_hasValidSeriesItems_i$$inline_3920$$++) {
        var $hasValidSeriesScale_seriesOptions$$inline_3921$$ = this.$_seriesOptions$[$JSCompiler_temp$$252_hasValidSeriesItems_i$$inline_3920$$];
        if ($hasValidSeriesScale_seriesOptions$$inline_3921$$.items) {
          for (var $hasValidCustomSeriesScale_j$$inline_3922$$ = 0;$hasValidCustomSeriesScale_j$$inline_3922$$ < $hasValidSeriesScale_seriesOptions$$inline_3921$$.items.length;$hasValidCustomSeriesScale_j$$inline_3922$$++) {
            var $end$$inline_3925_hasValidViewStart_item$$inline_3923$$ = $hasValidSeriesScale_seriesOptions$$inline_3921$$.items[$hasValidCustomSeriesScale_j$$inline_3922$$], $hasValidViewport_start$$inline_3924$$ = (new Date($end$$inline_3925_hasValidViewStart_item$$inline_3923$$.start)).getTime();
            if (!$hasValidViewport_start$$inline_3924$$) {
              $JSCompiler_temp$$252_hasValidSeriesItems_i$$inline_3920$$ = !1;
              break a;
            }
            if ($end$$inline_3925_hasValidViewStart_item$$inline_3923$$.hasOwnProperty("end") && ($end$$inline_3925_hasValidViewStart_item$$inline_3923$$ = (new Date($end$$inline_3925_hasValidViewStart_item$$inline_3923$$.end)).getTime(), !($end$$inline_3925_hasValidViewStart_item$$inline_3923$$ && $end$$inline_3925_hasValidViewStart_item$$inline_3923$$ >= $hasValidViewport_start$$inline_3924$$))) {
              $JSCompiler_temp$$252_hasValidSeriesItems_i$$inline_3920$$ = !1;
              break a;
            }
          }
        }
      }
      $JSCompiler_temp$$252_hasValidSeriesItems_i$$inline_3920$$ = !0;
    }
  } else {
    $JSCompiler_temp$$252_hasValidSeriesItems_i$$inline_3920$$ = !1;
  }
  var $hasValidSeriesScale_seriesOptions$$inline_3921$$ = this.$_seriesScale$ ? -1 != dvt.$ArrayUtils$.$getIndex$(dvt.$TimeAxis$.$_VALID_SCALES$, this.$_seriesScale$) : !0, $hasValidCustomSeriesScale_j$$inline_3922$$ = this.$_seriesScale$ ? this.$_customTimeScales$ && this.$_customTimeScales$[this.$_seriesScale$] : !0, $hasValidViewport_start$$inline_3924$$ = this.$_viewStartTime$ && this.$_viewEndTime$ ? this.$_viewEndTime$ > this.$_viewStartTime$ : !0, $end$$inline_3925_hasValidViewStart_item$$inline_3923$$ = 
  this.$_viewStartTime$ ? this.$_viewStartTime$ >= this.$_start$ && this.$_viewStartTime$ < this.$_end$ : !0, $hasValidViewEnd$$ = this.$_viewEndTime$ ? this.$_viewEndTime$ > this.$_start$ && this.$_viewEndTime$ <= this.$_end$ : !0;
  return ($hasValidScale$$1$$ || $hasValidCustomScale$$1$$) && ($hasValidSeriesScale_seriesOptions$$inline_3921$$ || $hasValidCustomSeriesScale_j$$inline_3922$$) && $hasValidStartAndEnd$$1$$ && $hasValidSeries$$ && $JSCompiler_temp$$252_hasValidSeriesItems_i$$inline_3920$$ && $hasValidViewport_start$$inline_3924$$ && $end$$inline_3925_hasValidViewStart_item$$inline_3923$$ && $hasValidViewEnd$$;
};
$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return this.$_shortDesc$ ? this.$_shortDesc$ : dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "TIMELINE");
};
function $JSCompiler_StaticMethods_isAnimating$$($JSCompiler_StaticMethods_isAnimating$self$$) {
  for (var $i$$657$$ = 0;$i$$657$$ < $JSCompiler_StaticMethods_isAnimating$self$$.$_series$.length;$i$$657$$++) {
    if ($JSCompiler_StaticMethods_isAnimating$self$$.$_series$[$i$$657$$].$_isAnimating$) {
      return !0;
    }
  }
  return !1;
}
function $JSCompiler_StaticMethods_showThenHideHotspots$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$, $series$$13$$) {
  if ($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$hasValidOptions$()) {
    for (var $animator$$136$$ = new dvt.$Animator$($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$getCtx$(), $DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$(), 0, dvt.$Easing$.$linear$), $i$$658$$ = 0;$i$$658$$ < $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$.length;$i$$658$$++) {
      var $hotspot$$ = $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$[$i$$658$$], $id$$211$$ = $hotspot$$.getId(), $show$$2$$ = !0;
      $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_contentLength$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_canvasLength$ && ("lhs" == $id$$211$$ || "rhs" == $id$$211$$) && ($show$$2$$ = !1);
      var $pId$$1_parentSeries$$ = $hotspot$$.getParent().getId();
      $pId$$1_parentSeries$$ && ($pId$$1_parentSeries$$ = $pId$$1_parentSeries$$.substring($pId$$1_parentSeries$$.length - 1), null != $series$$13$$ && $series$$13$$ != $pId$$1_parentSeries$$ && ($show$$2$$ = !1), $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_series$[$pId$$1_parentSeries$$].$_maxOverflowValue$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_seriesSize$ && ("ths" == $id$$211$$ || "bhs" == $id$$211$$) && ($show$$2$$ = !1));
      $show$$2$$ && $animator$$136$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $hotspot$$, $hotspot$$.$getAlpha$, $hotspot$$.$setAlpha$, $DvtTimelineStyleUtils$$.$getHotspotOpacity$());
    }
    dvt.$Playable$.$appendOnEnd$($animator$$136$$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$hideHotspots$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$);
    $animator$$136$$.play();
  }
}
$JSCompiler_prototypeAlias$$.$hideHotspots$ = function $$JSCompiler_prototypeAlias$$$$hideHotspots$$() {
  var $hotSpotsLength$$ = this.$_scrollHotspots$.length;
  if (0 != $hotSpotsLength$$) {
    for (var $animator$$137$$ = new dvt.$Animator$(this.$getCtx$(), $DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$(), 0, dvt.$Easing$.$linear$), $i$$659$$ = 0;$i$$659$$ < $hotSpotsLength$$;$i$$659$$++) {
      var $hotspot$$1$$ = this.$_scrollHotspots$[$i$$659$$];
      $animator$$137$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $hotspot$$1$$, $hotspot$$1$$.$getAlpha$, $hotspot$$1$$.$setAlpha$, 0);
    }
    $animator$$137$$.play();
  }
};
$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getTimelineStyle$());
  if (this.$Options$.styleDefaults) {
    var $borderWidth$$17_overviewStyle$$6_splits_style$$109$$ = this.$Options$.styleDefaults.borderColor;
    $borderWidth$$17_overviewStyle$$6_splits_style$$109$$ && this.$_style$.$parseInlineStyle$("border-color:" + $borderWidth$$17_overviewStyle$$6_splits_style$$109$$ + ";");
  }
  if (this.$_hasOverview$ && (this.$_overviewSize$ = this.$_isVertical$ ? $DvtTimelineStyleUtils$$.$getOverviewWidth$() : $DvtTimelineStyleUtils$$.$getOverviewHeight$(), $borderWidth$$17_overviewStyle$$6_splits_style$$109$$ = this.$Options$.overview.style)) {
    for (var $borderWidth$$17_overviewStyle$$6_splits_style$$109$$ = $borderWidth$$17_overviewStyle$$6_splits_style$$109$$.split(";"), $doubleBorderWidth_i$$660$$ = 0;$doubleBorderWidth_i$$660$$ < $borderWidth$$17_overviewStyle$$6_splits_style$$109$$.length;$doubleBorderWidth_i$$660$$++) {
      var $s$$134$$ = $borderWidth$$17_overviewStyle$$6_splits_style$$109$$[$doubleBorderWidth_i$$660$$];
      if ($s$$134$$ && 0 < $s$$134$$.length) {
        var $colonIndex$$2$$ = $s$$134$$.indexOf(":");
        if (-1 < $colonIndex$$2$$) {
          var $attrName$$1$$ = dvt.$StringUtils$.trim($s$$134$$.substring(0, $colonIndex$$2$$));
          if (this.$_isVertical$ && "width" == $attrName$$1$$ || !this.$_isVertical$ && "height" == $attrName$$1$$) {
            this.$_overviewSize$ = parseInt(dvt.$StringUtils$.trim($s$$134$$.substring($colonIndex$$2$$ + 1)), 10);
            break;
          }
        }
      }
    }
  }
  dvt.$Timeline$.$superclass$.$applyStyleValues$.call(this);
  $borderWidth$$17_overviewStyle$$6_splits_style$$109$$ = this.$_style$.$getBorderWidth$();
  $doubleBorderWidth_i$$660$$ = 2 * $borderWidth$$17_overviewStyle$$6_splits_style$$109$$;
  this.$_style$.$parseInlineStyle$("border:" + $doubleBorderWidth_i$$660$$ + "px;");
  this.$setStartXOffset$($borderWidth$$17_overviewStyle$$6_splits_style$$109$$);
  this.$setStartYOffset$($borderWidth$$17_overviewStyle$$6_splits_style$$109$$);
  this.$_backgroundWidth$ = this.$Width$;
  this.$_backgroundHeight$ = this.$Height$;
  this.$_isVertical$ ? (this.$_canvasLength$ = this.$_backgroundHeight$ - $doubleBorderWidth_i$$660$$, this.$_hasOverview$ ? (this.$_canvasSize$ = this.$_backgroundWidth$ - this.$_overviewSize$ - $doubleBorderWidth_i$$660$$, this.$isRTL$() && this.$setStartXOffset$($borderWidth$$17_overviewStyle$$6_splits_style$$109$$ + this.$_overviewSize$)) : this.$_canvasSize$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$660$$) : (this.$_canvasLength$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$660$$, 
  this.$_canvasSize$ = this.$_hasOverview$ ? this.$Height$ - this.$_overviewSize$ - $doubleBorderWidth_i$$660$$ : this.$Height$ - $doubleBorderWidth_i$$660$$);
};
function $JSCompiler_StaticMethods_applyAxisStyleValues$$($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$) {
  $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_seriesStyleDefaults$ && $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_seriesStyleDefaults$.backgroundColor && ($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$.$_seriesStyleDefaults$.backgroundColor, dvt.$ColorUtils$.$getRed$($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$), dvt.$ColorUtils$.$getGreen$($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$), 
  dvt.$ColorUtils$.$getBlue$($JSCompiler_StaticMethods_applyAxisStyleValues$self_bgColor$$15$$));
}
function $JSCompiler_StaticMethods_prepareViewportLength$$($JSCompiler_StaticMethods_prepareViewportLength$self$$) {
  $JSCompiler_StaticMethods_prepareViewportLength$self$$.$setRelativeStartPos$(0);
  if ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$ && $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$) {
    var $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$;
    0 < $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ && ($viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_canvasLength$ / $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$, $JSCompiler_StaticMethods_prepareViewportLength$self$$.$setContentLength$($viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_end$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$)), $JSCompiler_StaticMethods_prepareViewportLength$self$$.$setRelativeStartPos$($viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ * 
    ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$)));
  } else {
    var $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_timeAxis$.$_zoomLevelLengths$[$JSCompiler_StaticMethods_prepareViewportLength$self$$.$_timeAxis$.$_zoomLevelOrder$], $startTime$$19$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$, $endTime$$16$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_end$;
    null == $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$ ? null != $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ ? ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_canvasLength$ / $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ * ($endTime$$16$$ - $startTime$$19$$), $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$ < 
    $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$ && ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$), $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$, $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_canvasLength$ / 
    $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$, $JSCompiler_StaticMethods_prepareViewportLength$self$$.$setContentLength$($viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_end$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$)), $JSCompiler_StaticMethods_prepareViewportLength$self$$.$setRelativeStartPos$($viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$ - 
    $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$))) : ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$, $JSCompiler_StaticMethods_prepareViewportLength$self$$.$setRelativeStartPos$(0), $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_canvasLength$ / $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ * ($endTime$$16$$ - 
    $startTime$$19$$) + $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ > $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_end$ && ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_end$)) : ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_canvasLength$ / 
    $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ * ($endTime$$16$$ - $startTime$$19$$) + $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ > $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_end$ && ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_end$), $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ - 
    $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$, $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_canvasLength$ / $viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$, $JSCompiler_StaticMethods_prepareViewportLength$self$$.$setContentLength$($viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_end$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$)), 
    $JSCompiler_StaticMethods_prepareViewportLength$self$$.$setRelativeStartPos$($viewTime$$2_widthFactor$$5_zoomLevelLength$$1$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$)));
  }
}
$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$548$$) {
  if (1 == $event$$548$$.touches.length) {
    if (this.$_dragPanSeries$ = $JSCompiler_StaticMethods__findSeries$$(this, $event$$548$$.target)) {
      var $series$$15$$ = this.$_series$[0] == this.$_dragPanSeries$ ? 0 : 1
    }
    $JSCompiler_StaticMethods_showThenHideHotspots$$(this, $series$$15$$);
  }
};
$JSCompiler_prototypeAlias$$.$handleZoomWheel$ = function $$JSCompiler_prototypeAlias$$$$handleZoomWheel$$($newLength$$2$$, $time$$20$$, $compLoc$$3$$, $triggerViewportChangeEvent$$1$$) {
  dvt.$Timeline$.$superclass$.$handleZoomWheel$.call(this, $newLength$$2$$, $time$$20$$, $compLoc$$3$$, $triggerViewportChangeEvent$$1$$);
  this.$_hasOverview$ && this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_isVertical$ ? this.$_overview$.$Height$ : this.$_overview$.$Width$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$$(this);
  $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_timeZoomCanvas$);
  $JSCompiler_StaticMethods_updateSeries$$(this);
  $triggerViewportChangeEvent$$1$$ && this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_timeAxis$.$_scale$));
};
function $JSCompiler_StaticMethods_updateSeries$$($JSCompiler_StaticMethods_updateSeries$self$$) {
  if ($JSCompiler_StaticMethods_updateSeries$self$$.$_series$) {
    var $seriesCount$$29$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length, $axisSize$$3$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($JSCompiler_StaticMethods_updateSeries$self$$, $seriesCount$$29$$);
    $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ = ($JSCompiler_StaticMethods_updateSeries$self$$.$_canvasSize$ - $axisSize$$3$$) / $seriesCount$$29$$;
    for (var $i$$664$$ = 0;$i$$664$$ < $seriesCount$$29$$;$i$$664$$++) {
      var $series$$16$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$[$i$$664$$];
      $series$$16$$.$setClipPath$(null);
      var $cp$$9$$ = new dvt.$ClipPath$;
      if ($JSCompiler_StaticMethods_updateSeries$self$$.$_isVertical$) {
        var $key$$74_posMatrix$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() ? Math.abs($i$$664$$ - 1) : $i$$664$$;
        $JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() && 1 == $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length ? ($cp$$9$$.$addRect$($axisSize$$3$$, 0, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$), $key$$74_posMatrix$$ = new dvt.$Matrix$(1, 0, 0, 1, $axisSize$$3$$, 0)) : ($cp$$9$$.$addRect$($key$$74_posMatrix$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$3$$), 0, 
        $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$), $key$$74_posMatrix$$ = new dvt.$Matrix$(1, 0, 0, 1, $key$$74_posMatrix$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$3$$), 0));
        var $width$$135$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $height$$114$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$;
      } else {
        $cp$$9$$.$addRect$(0, $i$$664$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$3$$), $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$), $key$$74_posMatrix$$ = new dvt.$Matrix$(1, 0, 0, 1, 0, $i$$664$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$3$$)), $width$$135$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $height$$114$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$
        ;
      }
      $series$$16$$.$setClipPath$($cp$$9$$);
      $series$$16$$.$setMatrix$($key$$74_posMatrix$$);
      $series$$16$$.$render$(null, $width$$135$$, $height$$114$$);
    }
  }
}
$JSCompiler_prototypeAlias$$.$_handleResize$ = function $$JSCompiler_prototypeAlias$$$$_handleResize$$($width$$136$$, $height$$115$$) {
  this.$Width$ = $width$$136$$;
  this.$Height$ = $height$$115$$;
  this.$applyStyleValues$();
  this.$_fetchStartPos$ = 0;
  this.$_fetchEndPos$ = this.$_isVertical$ ? $height$$115$$ : $width$$136$$;
  $JSCompiler_StaticMethods_prepareViewportLength$$(this);
  $DvtTimelineRenderer$$.$_renderBackground$(this);
  if (this.$hasValidOptions$()) {
    if (this.$renderTimeZoomCanvas$(this.$_canvas$), $JSCompiler_StaticMethods_applyAxisStyleValues$$(this), $JSCompiler_StaticMethods_updateSeries$$(this), $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_timeZoomCanvas$), $DvtTimelineRenderer$$.$_renderSeriesLabels$(this), $DvtTimelineRenderer$$.$_renderScrollHotspots$(this), $DvtTimelineRenderer$$.$_renderZoomControls$(this), this.$_hasOverview$ && ($DvtTimelineRenderer$$.$_renderOverview$(this), this.$SelectionHandler$)) {
      var $selection$$28$$ = this.$SelectionHandler$.$getSelectedIds$();
      if ($selection$$28$$ && 0 != $selection$$28$$.length) {
        for (var $i$$665$$ = 0;$i$$665$$ < $selection$$28$$.length;$i$$665$$++) {
          var $JSCompiler_StaticMethods_selSelectItem$self$$inline_3927$$ = this.$_overview$, $drawable$$inline_3929$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_3927$$, $selection$$28$$[$i$$665$$]);
          null != $drawable$$inline_3929$$ && $JSCompiler_StaticMethods_addSelectedMarker$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_3927$$, $drawable$$inline_3929$$);
        }
      }
    }
  } else {
    $DvtTimelineRenderer$$.$_renderEmptyText$(this);
  }
};
$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$549$$) {
  dvt.KeyboardEvent.$RIGHT_ARROW$ != $event$$549$$.keyCode && dvt.KeyboardEvent.$LEFT_ARROW$ != $event$$549$$.keyCode && dvt.KeyboardEvent.$DOWN_ARROW$ != $event$$549$$.keyCode && dvt.KeyboardEvent.$UP_ARROW$ != $event$$549$$.keyCode || $JSCompiler_StaticMethods_updateScrollForItemNavigation$$(this, this.$EventManager$.$getFocus$());
};
$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$550$$) {
  this.$_dragPanSeries$ = $JSCompiler_StaticMethods__findSeries$$(this, $event$$550$$.target);
};
$JSCompiler_prototypeAlias$$.$beginDragPan$ = function $$JSCompiler_prototypeAlias$$$$beginDragPan$$($compX$$2$$, $compY$$2$$) {
  this.$_currentX$ = $compX$$2$$;
  this.$_currentY$ = $compY$$2$$;
};
$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$551$$) {
  "none" != this.$_selectionMode$ && $JSCompiler_StaticMethods_handleShapeClick$$(this, $event$$551$$);
};
$JSCompiler_prototypeAlias$$.$endDragPan$ = function $$JSCompiler_prototypeAlias$$$$endDragPan$$() {
  this.$_dragPanSeries$ = null;
  $JSCompiler_StaticMethods_endPan$$(this);
};
function $JSCompiler_StaticMethods_endPan$$($JSCompiler_StaticMethods_endPan$self$$) {
  $JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ = !1, $JSCompiler_StaticMethods_endPan$self$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_endPan$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPan$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPan$self$$.$_timeAxis$.$_scale$)));
}
$JSCompiler_prototypeAlias$$.$contDragPan$ = function $$JSCompiler_prototypeAlias$$$$contDragPan$$($compX$$3$$, $compY$$3$$) {
  if (this.$_currentX$ && this.$_currentY$) {
    var $deltaX$$17$$ = this.$_currentX$ - $compX$$3$$, $deltaY$$17$$ = this.$_currentY$ - $compY$$3$$;
    if (0 == $deltaX$$17$$ && 0 == $deltaY$$17$$) {
      return !1;
    }
    this.$_triggerViewportChange$ = !0;
    this.$_currentX$ = $compX$$3$$;
    this.$_currentY$ = $compY$$3$$;
    this.$panBy$($deltaX$$17$$, $deltaY$$17$$);
    return !0;
  }
  return !1;
};
$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($deltaX$$18$$, $deltaY$$18$$) {
  var $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$(this, this.$_series$.length);
  if (this.$_isVertical$) {
    if (this.$_dragPanSeries$) {
      var $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = this.$_dragPanSeries$.$getTranslateX$() - $deltaX$$18$$;
      if (1 < this.$_series$.length && (!this.$isRTL$() && this.$_dragPanSeries$.$_isInverted$ || this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$)) {
        var $minTranslateX$$1_minTranslateY$$1$$ = $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$ + 2 * this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$, $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$ = this.$_dragPanSeries$.$Width$ + $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$
      } else {
        this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$ ? $minTranslateX$$1_minTranslateY$$1$$ = this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$ + $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$ : ($minTranslateX$$1_minTranslateY$$1$$ = 0, $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Width$);
      }
      $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ < $minTranslateX$$1_minTranslateY$$1$$ ? $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = $minTranslateX$$1_minTranslateY$$1$$ : $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ > $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$ && ($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$);
      this.$_dragPanSeries$.$setTranslateX$($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$);
    }
    this.$panZoomCanvasBy$($deltaY$$18$$);
    this.$_hasOverview$ && ($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = this.$_overview$.$Height$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$));
  } else {
    this.$panZoomCanvasBy$($deltaX$$18$$), this.$_hasOverview$ && ($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = this.$_overview$.$Width$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$)), this.$_dragPanSeries$ && ($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = this.$_dragPanSeries$.$getTranslateY$() - $deltaY$$18$$, this.$_dragPanSeries$.$_isInverted$ ? ($minTranslateX$$1_minTranslateY$$1$$ = 
    $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$ + 2 * this.$_dragPanSeries$.$Height$ - this.$_dragPanSeries$.$_maxOverflowValue$, $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$ = this.$_dragPanSeries$.$Height$ + $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$) : ($minTranslateX$$1_minTranslateY$$1$$ = 0, $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Height$), $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ < $minTranslateX$$1_minTranslateY$$1$$ ? 
    $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = $minTranslateX$$1_minTranslateY$$1$$ : $newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ > $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$ && ($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$ = $axisSize$$4_maxTranslateX$$1_maxTranslateY$$1$$), this.$_dragPanSeries$.$setTranslateY$($newTranslateX$$1_newTranslateY$$1_overviewLength$$2$$));
  }
};
$JSCompiler_prototypeAlias$$.$HandleEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleEvent$$($event$$553_i$$666_isMultiSelect$$inline_3932$$) {
  var $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$ = $event$$553_i$$666_isMultiSelect$$inline_3932$$.type;
  if ("selection" == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$ || "action" == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$) {
    dvt.$EventDispatcher$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$553_i$$666_isMultiSelect$$inline_3932$$);
  } else {
    if ("overview" == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$) {
      $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$ = $event$$553_i$$666_isMultiSelect$$inline_3932$$.$getSubType$();
      if ("rangeChanging" == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$ || "rangeChange" == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$) {
        var $isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        this.$_viewStartTime$ = $event$$553_i$$666_isMultiSelect$$inline_3932$$.$getNewStartTime$();
        this.$_viewEndTime$ = $event$$553_i$$666_isMultiSelect$$inline_3932$$.$getNewEndTime$();
        var $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        if (0 < $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$) {
          var $item$$55_widthFactor$$6_zoomLevelLengths$$1$$ = this.$_canvasLength$ / $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$;
          this.$setContentLength$($item$$55_widthFactor$$6_zoomLevelLengths$$1$$ * (this.$_end$ - this.$_start$));
          this.$setRelativeStartPos$($item$$55_widthFactor$$6_zoomLevelLengths$$1$$ * (this.$_start$ - this.$_viewStartTime$));
          $item$$55_widthFactor$$6_zoomLevelLengths$$1$$ = this.$_timeAxis$.$_zoomLevelLengths$;
          if ($isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$ > $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$) {
            $isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$ = $item$$55_widthFactor$$6_zoomLevelLengths$$1$$.length;
            for ($minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ = $item$$55_widthFactor$$6_zoomLevelLengths$$1$$[$isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$ - 1];this.$_contentLength$ >= $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ && 0 < $isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$;) {
              $isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$--, $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ = $item$$55_widthFactor$$6_zoomLevelLengths$$1$$[$isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$ - 1];
            }
            $isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$ == $item$$55_widthFactor$$6_zoomLevelLengths$$1$$.length && $isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$--;
          } else {
            for ($isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$ = 0, $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ = $item$$55_widthFactor$$6_zoomLevelLengths$$1$$[$isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$];this.$_contentLength$ < $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ && $isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$ < $item$$55_widthFactor$$6_zoomLevelLengths$$1$$.length - 1;) {
              $isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$++, $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ = $item$$55_widthFactor$$6_zoomLevelLengths$$1$$[$isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$];
            }
          }
          this.$_timeAxis$.$setZoomLevelOrder$($isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$);
          this.$_timeAxis$.$setScale$(this.$_timeAxis$.$_zoomOrder$[$isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$]);
          $JSCompiler_StaticMethods_applyAxisStyleValues$$(this);
          $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_timeZoomCanvas$);
          $JSCompiler_StaticMethods_updateSeries$$(this);
          this.$applyTimeZoomCanvasPosition$();
        }
        "rangeChange" == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$ && this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_timeAxis$.$_scale$));
      }
      if ("scrollPos" == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$ || "scrollTime" == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$) {
        this.$_viewStartTime$ = $event$$553_i$$666_isMultiSelect$$inline_3932$$.$getNewStartTime$(), this.$_viewEndTime$ = $event$$553_i$$666_isMultiSelect$$inline_3932$$.$getNewEndTime$(), $item$$55_widthFactor$$6_zoomLevelLengths$$1$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), this.$setRelativeStartPos$($item$$55_widthFactor$$6_zoomLevelLengths$$1$$ * (this.$_start$ - this.$_viewStartTime$)), this.$applyTimeZoomCanvasPosition$(), this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, 
        this.$_viewEndTime$, this.$_timeAxis$.$_scale$));
      }
    } else {
      if ($itemId$$2_selectedItemId$$1_subType$$8_type$$195$$ = $event$$553_i$$666_isMultiSelect$$inline_3932$$.$getSubType$(), "selection" == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$) {
        for ($itemId$$2_selectedItemId$$1_subType$$8_type$$195$$ = $event$$553_i$$666_isMultiSelect$$inline_3932$$.$getItemId$(), $event$$553_i$$666_isMultiSelect$$inline_3932$$ = $event$$553_i$$666_isMultiSelect$$inline_3932$$.$getParamValue$("multiSelect"), $isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$ = (null != $event$$553_i$$666_isMultiSelect$$inline_3932$$ ? $event$$553_i$$666_isMultiSelect$$inline_3932$$ : !1) && "multiple" == this.$_selectionMode$, $event$$553_i$$666_isMultiSelect$$inline_3932$$ = 
        0;$event$$553_i$$666_isMultiSelect$$inline_3932$$ < this.$_series$.length;$event$$553_i$$666_isMultiSelect$$inline_3932$$++) {
          for (var $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ = this.$_series$[$event$$553_i$$666_isMultiSelect$$inline_3932$$], $j$$99$$ = 0;$j$$99$$ < $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$.$_items$.length;$j$$99$$++) {
            if ($item$$55_widthFactor$$6_zoomLevelLengths$$1$$ = $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$.$_items$[$j$$99$$], $item$$55_widthFactor$$6_zoomLevelLengths$$1$$.getId() == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$) {
              this.$SelectionHandler$.$_addToSelection$($item$$55_widthFactor$$6_zoomLevelLengths$$1$$, $isMultiSelect$$1_oldViewTime$$1_zoomLevelOrder$$1$$);
              this.$EventManager$.$setFocusObj$($item$$55_widthFactor$$6_zoomLevelLengths$$1$$);
              $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
              this.$_viewStartTime$ = $item$$55_widthFactor$$6_zoomLevelLengths$$1$$.$_startTime$ - $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ / 2;
              this.$_viewStartTime$ < this.$_start$ ? this.$_viewStartTime$ = this.$_start$ : this.$_viewStartTime$ + $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ > this.$_end$ && (this.$_viewStartTime$ = this.$_end$ - $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$);
              this.$_viewEndTime$ = this.$_viewStartTime$ + $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$;
              this.$setRelativeStartPos$(this.$_contentLength$ / (this.$_end$ - this.$_start$) * (this.$_start$ - this.$_viewStartTime$));
              this.$applyTimeZoomCanvasPosition$();
              this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_timeAxis$.$_scale$));
              break;
            }
          }
        }
      } else {
        if ("highlight" == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$) {
          for ($itemId$$2_selectedItemId$$1_subType$$8_type$$195$$ = $event$$553_i$$666_isMultiSelect$$inline_3932$$.$getItemId$(), $event$$553_i$$666_isMultiSelect$$inline_3932$$ = 0;$event$$553_i$$666_isMultiSelect$$inline_3932$$ < this.$_series$.length;$event$$553_i$$666_isMultiSelect$$inline_3932$$++) {
            for ($minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ = this.$_series$[$event$$553_i$$666_isMultiSelect$$inline_3932$$], $j$$99$$ = 0;$j$$99$$ < $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$.$_items$.length;$j$$99$$++) {
              if ($item$$55_widthFactor$$6_zoomLevelLengths$$1$$ = $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$.$_items$[$j$$99$$], $item$$55_widthFactor$$6_zoomLevelLengths$$1$$.getId() == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$) {
                $item$$55_widthFactor$$6_zoomLevelLengths$$1$$.$showHoverEffect$(!0);
                break;
              }
            }
          }
        } else {
          if ("unhighlight" == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$) {
            for ($itemId$$2_selectedItemId$$1_subType$$8_type$$195$$ = $event$$553_i$$666_isMultiSelect$$inline_3932$$.$getItemId$(), $event$$553_i$$666_isMultiSelect$$inline_3932$$ = 0;$event$$553_i$$666_isMultiSelect$$inline_3932$$ < this.$_series$.length;$event$$553_i$$666_isMultiSelect$$inline_3932$$++) {
              for ($minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$ = this.$_series$[$event$$553_i$$666_isMultiSelect$$inline_3932$$], $j$$99$$ = 0;$j$$99$$ < $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$.$_items$.length;$j$$99$$++) {
                if ($item$$55_widthFactor$$6_zoomLevelLengths$$1$$ = $minLength$$5_s$$136_viewSize$$inline_3936_viewTime$$3$$.$_items$[$j$$99$$], $item$$55_widthFactor$$6_zoomLevelLengths$$1$$.getId() == $itemId$$2_selectedItemId$$1_subType$$8_type$$195$$) {
                  $item$$55_widthFactor$$6_zoomLevelLengths$$1$$.$hideHoverEffect$(!0);
                  break;
                }
              }
            }
          }
        }
      }
    }
  }
};
function $JSCompiler_StaticMethods_updateScrollForItemNavigation$$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$, $item$$57$$) {
  var $itemEnd_itemSize_viewTime$$4$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $item$$57$$.getHeight() : $item$$57$$.getWidth(), $endPos$$5_itemHoverStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$(), $itemStart_widthFactor$$8$$ = $item$$57$$.$_loc$ - ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $itemEnd_itemSize_viewTime$$4$$ / 2 + $endPos$$5_itemHoverStrokeWidth$$ : $DvtTimelineStyleUtils$$.$getBubbleOffset$() + 
  $endPos$$5_itemHoverStrokeWidth$$), $startPos$$6$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$getRelativeStartPos$();
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$isRTL$() && !$JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ && ($itemStart_widthFactor$$8$$ -= $endPos$$5_itemHoverStrokeWidth$$);
  $itemEnd_itemSize_viewTime$$4$$ = $itemStart_widthFactor$$8$$ + $itemEnd_itemSize_viewTime$$4$$ + 2 * $endPos$$5_itemHoverStrokeWidth$$;
  $endPos$$5_itemHoverStrokeWidth$$ = $startPos$$6$$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$;
  -$itemStart_widthFactor$$8$$ > $startPos$$6$$ ? $startPos$$6$$ = -$itemStart_widthFactor$$8$$ : -$itemEnd_itemSize_viewTime$$4$$ < $endPos$$5_itemHoverStrokeWidth$$ && ($startPos$$6$$ = -$itemEnd_itemSize_viewTime$$4$$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$);
  $itemStart_widthFactor$$8$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ / ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$);
  $itemEnd_itemSize_viewTime$$4$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $startPos$$6$$ / $itemStart_widthFactor$$8$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$, $startPos$$6$$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * $itemStart_widthFactor$$8$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ + $itemEnd_itemSize_viewTime$$4$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ > $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $itemEnd_itemSize_viewTime$$4$$, 
  $startPos$$6$$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * $itemStart_widthFactor$$8$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$setRelativeStartPos$($startPos$$6$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$applyTimeZoomCanvasPosition$();
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_hasOverview$ && $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$setViewportRange$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Height$ : 
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Width$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_timeAxis$.$_scale$));
}
function $JSCompiler_StaticMethods_handleShapeClick$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $event$$554$$) {
  if ($event$$554$$) {
    var $drawable$$6_event$$inline_3941_item$$inline_3939$$ = $JSCompiler_StaticMethods_handleShapeClick$self$$.$_findDrawable$($event$$554$$.target);
    if ($drawable$$6_event$$inline_3941_item$$inline_3939$$) {
      var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_3938_series$$17$$ = $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_3941_item$$inline_3939$$);
      if ($drawable$$6_event$$inline_3941_item$$inline_3939$$.$_node$) {
        var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_3938_series$$17$$ = $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_3941_item$$inline_3939$$), $drawable$$6_event$$inline_3941_item$$inline_3939$$ = $drawable$$6_event$$inline_3941_item$$inline_3939$$.$_node$, $action$$inline_3940$$ = $drawable$$6_event$$inline_3941_item$$inline_3939$$.$getAction$();
        $action$$inline_3940$$ && ($drawable$$6_event$$inline_3941_item$$inline_3939$$ = dvt.$EventFactory$.$newActionEvent$("action", $action$$inline_3940$$, $drawable$$6_event$$inline_3941_item$$inline_3939$$.getId()), dvt.$EventDispatcher$.dispatchEvent($JSCompiler_StaticMethods_HandleItemAction$self$$inline_3938_series$$17$$.$_callback$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_3938_series$$17$$.$_callbackObj$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_3938_series$$17$$, 
        $drawable$$6_event$$inline_3941_item$$inline_3939$$));
      }
    }
  }
}
function $JSCompiler_StaticMethods_applyInitialSelections$$($JSCompiler_StaticMethods_applyInitialSelections$self$$) {
  if ($JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection) {
    for (var $items$$37$$ = [], $i$$667$$ = 0;$i$$667$$ < $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$.length;$i$$667$$++) {
      for (var $s$$137$$ = $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$[$i$$667$$], $j$$100$$ = 0;$j$$100$$ < $s$$137$$.$_items$.length;$j$$100$$++) {
        $items$$37$$.push($s$$137$$.$_items$[$j$$100$$]);
      }
    }
  }
  $JSCompiler_StaticMethods_applyInitialSelections$self$$.$SelectionHandler$.$processInitialSelections$($JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection, $items$$37$$);
}
$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$555$$) {
  $event$$555$$ && this.dispatchEvent($event$$555$$);
};
function $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods__findSeries$self$$, $target$$83$$) {
  if ($JSCompiler_StaticMethods__findSeries$self$$.$hasValidOptions$() && $target$$83$$ && $target$$83$$ != $JSCompiler_StaticMethods__findSeries$self$$) {
    var $id$$212$$ = $target$$83$$.getId();
    return $target$$83$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] || 1 < $JSCompiler_StaticMethods__findSeries$self$$.$_series$.length && $target$$83$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] ? $target$$83$$ : $id$$212$$ && "_s0" == $id$$212$$.substring($id$$212$$.length - 3, $id$$212$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] : $id$$212$$ && "_s1" == $id$$212$$.substring($id$$212$$.length - 3, $id$$212$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] : 
    $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods__findSeries$self$$, $target$$83$$.getParent());
  }
  return null;
}
$JSCompiler_prototypeAlias$$.$_findDrawable$ = function $$JSCompiler_prototypeAlias$$$$_findDrawable$$($grandParent_target$$84$$) {
  if ($grandParent_target$$84$$) {
    var $id$$213$$ = $grandParent_target$$84$$.getId();
    if ($id$$213$$ && "_duration_" == $id$$213$$.substring(0, 10) && $grandParent_target$$84$$.$_node$) {
      return $grandParent_target$$84$$;
    }
    var $parent$$78$$ = $grandParent_target$$84$$.getParent();
    if ($parent$$78$$) {
      if ($id$$213$$ && "zoom" == $id$$213$$.substring(0, 4)) {
        return $grandParent_target$$84$$;
      }
      if ($id$$213$$ && "_bubble_" == $id$$213$$.substring(0, 8) && $parent$$78$$.$_node$) {
        return $parent$$78$$;
      }
      if ($grandParent_target$$84$$ = $parent$$78$$.getParent()) {
        if ($id$$213$$ && "_bubble_" == $id$$213$$.substring(0, 8) && $grandParent_target$$84$$.$_node$) {
          return $grandParent_target$$84$$;
        }
        if (($id$$213$$ = $grandParent_target$$84$$.getId()) && "_bubble_" == $id$$213$$.substring(0, 8) && $grandParent_target$$84$$.getParent()) {
          return $grandParent_target$$84$$.getParent();
        }
      }
    }
  }
  return null;
};
$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new $DvtTimelineAutomation$$(this));
  return this.$Automation$;
};
dvt.$Timeline$.prototype.getAutomation = dvt.$Timeline$.prototype.$getAutomation$;
function $JSCompiler_StaticMethods_clearOverview$$($JSCompiler_StaticMethods_clearOverview$self$$) {
  $JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$ && ($JSCompiler_StaticMethods_clearOverview$self$$.removeChild($JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$), $JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$ = null);
}
function $DvtTimelineAutomation$$($timeline$$1$$) {
  this.$_timeline$ = $timeline$$1$$;
}
$goog$exportPath_$$("DvtTimelineAutomation", $DvtTimelineAutomation$$);
dvt.$Obj$.$createSubclass$($DvtTimelineAutomation$$, dvt.$Automation$);
$DvtTimelineAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineAutomation$$$$$GetSubIdForDomElement$$($displayable$$87_logicalObj$$12$$) {
  if (($displayable$$87_logicalObj$$12$$ = this.$_timeline$.$EventManager$.$GetLogicalObject$($displayable$$87_logicalObj$$12$$)) && $displayable$$87_logicalObj$$12$$ instanceof $DvtTimelineSeriesNode$$) {
    for (var $i$$668$$ = 0;$i$$668$$ < this.$_timeline$.$_series$.length;$i$$668$$++) {
      var $itemIndex$$49$$ = dvt.$ArrayUtils$.$getIndex$(this.$_timeline$.$_series$[$i$$668$$].$_items$, $displayable$$87_logicalObj$$12$$);
      if (-1 != $itemIndex$$49$$) {
        return "timelineItem[" + $i$$668$$ + "][" + $itemIndex$$49$$ + "]";
      }
    }
  }
  return null;
};
$DvtTimelineAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineAutomation$$$$$getDomElementForSubId$$($series$$19_subId$$30$$) {
  if ($series$$19_subId$$30$$) {
    var $parenIndex$$ = $series$$19_subId$$30$$.indexOf("[");
    if (0 < $parenIndex$$ && "timelineItem" === $series$$19_subId$$30$$.substring(0, $parenIndex$$)) {
      var $endParenIndex$$ = $series$$19_subId$$30$$.indexOf("]");
      if (0 < $endParenIndex$$) {
        var $itemIndex$$50_node$$303$$ = parseInt($series$$19_subId$$30$$.substring($endParenIndex$$ + 2, $series$$19_subId$$30$$.length - 1));
        if ($series$$19_subId$$30$$ = this.$_timeline$.$_series$[parseInt($series$$19_subId$$30$$.substring($parenIndex$$ + 1, $endParenIndex$$))]) {
          if ($itemIndex$$50_node$$303$$ = $series$$19_subId$$30$$.$_items$[$itemIndex$$50_node$$303$$]) {
            return $itemIndex$$50_node$$303$$.$getDisplayables$()[0].$getElem$();
          }
        }
      }
    }
  }
  return null;
};
$DvtTimelineAutomation$$.prototype.getDomElementForSubId = $DvtTimelineAutomation$$.prototype.$getDomElementForSubId$;
function $DvtTimelineDefaults$$() {
  this.Init({alta:$DvtTimelineDefaults$VERSION_1$$});
}
dvt.$Obj$.$createSubclass$($DvtTimelineDefaults$$, dvt.$BaseComponentDefaults$);
var $DvtTimelineDefaults$VERSION_1$$ = {animationOnDataChange:"none", animationOnDisplay:"none", orientation:"horizontal", overview:{rendered:"off"}, selectionMode:"none", styleDefaults:{animationDuration:500, borderColor:"#d9dfe3", item:{backgroundColor:"#ffffff", borderColor:"#648baf", descriptionStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #084B8A; white-space: nowrap;"), hoverBorderColor:"#85bbe7", selectedBorderColor:"#000000", 
titleStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: bold; color: #000000; white-space: nowrap;")}, majorAxis:{labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; color: #4f4f4f; background-color: rgba(249,249,249,0.8); white-space: nowrap;"), separatorColor:"#bcc7d2"}, minorAxis:{backgroundColor:"#f9f9f9", borderColor:"#d9dfe3", labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #333333;"), 
separatorColor:"#bcc7d2"}, overview:{backgroundColor:"#e6ecf3", labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: bold; color: #4f4f4f;"), window:{backgroundColor:"#ffffff", borderColor:"#4f4f4f"}}, referenceObject:{color:"#ff591f"}, series:{backgroundColor:"#f9f9f9", colors:dvt.$CSSStyle$.$COLORS_ALTA$, emptyTextStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #333333; white-space: nowrap;"), 
labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: bold; color: #252525; background-color: rgba(249,249,249,0.8); white-space: nowrap;")}}};
function $DvtTimelineParser$$() {
}
dvt.$Obj$.$createSubclass$($DvtTimelineParser$$, dvt.$Obj$);
$DvtTimelineParser$$.prototype.parse = function $$DvtTimelineParser$$$$parse$($options$$295$$) {
  var $ret$$66$$ = {};
  $ret$$66$$.start = (new Date($options$$295$$.start)).getTime();
  $ret$$66$$.end = (new Date($options$$295$$.end)).getTime();
  $options$$295$$.viewportStart && ($ret$$66$$.$viewStart$ = (new Date($options$$295$$.viewportStart)).getTime());
  $options$$295$$.viewportEnd && ($ret$$66$$.$viewEnd$ = (new Date($options$$295$$.viewportEnd)).getTime());
  $ret$$66$$.$selectionMode$ = $options$$295$$.selectionMode ? $options$$295$$.selectionMode : "none";
  $ret$$66$$.$inlineStyle$ = $options$$295$$.style;
  var $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$295$$.minorAxis;
  $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ && ($ret$$66$$.scale = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.scale, $ret$$66$$.$customFormatScales$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$._cfs);
  if ($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$295$$.majorAxis) {
    $ret$$66$$.$seriesScale$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.scale, $ret$$66$$.$seriesConverter$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.converter, $ret$$66$$.$seriesCustomFormatScales$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$._cfs;
  }
  $ret$$66$$.$shortDesc$ = $options$$295$$.shortDesc;
  $ret$$66$$.orientation = $options$$295$$.orientation;
  if (($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$295$$.referenceObjects) && 0 < $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.length) {
    for (var $referenceObjectsValueArray$$ = [], $i$$669$$ = 0;$i$$669$$ < $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.length;$i$$669$$++) {
      $referenceObjectsValueArray$$.push(new Date($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$[$i$$669$$].value));
    }
    $ret$$66$$.$referenceObjects$ = $referenceObjectsValueArray$$;
  }
  $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$295$$.overview;
  $ret$$66$$.$hasOverview$ = null != $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ && "on" == $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.rendered ? !0 : !1;
  $ret$$66$$.$timeZoneOffsets$ = $options$$295$$._tzo;
  $ret$$66$$.$itemPosition$ = $options$$295$$._ip;
  $ret$$66$$.$customTimeScales$ = $options$$295$$._cts;
  return $ret$$66$$;
};
var $DvtTimelineRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineRenderer$$, dvt.$Obj$);
$DvtTimelineRenderer$$.$renderTimeline$ = function $$DvtTimelineRenderer$$$$renderTimeline$$($timeline$$2$$) {
  $DvtTimelineRenderer$$.$_renderBackground$($timeline$$2$$);
  $DvtTimelineRenderer$$.$_renderScrollableCanvas$($timeline$$2$$);
  if ($timeline$$2$$.$hasValidOptions$()) {
    $timeline$$2$$.$renderTimeZoomCanvas$($timeline$$2$$.$_canvas$);
    var $i$$670_timeZoomCanvas$$ = $timeline$$2$$.$_timeZoomCanvas$;
    $DvtTimelineRenderer$$.$_renderSeries$($timeline$$2$$, $i$$670_timeZoomCanvas$$);
    $DvtTimelineRenderer$$.$_renderSeriesLabels$($timeline$$2$$);
    $DvtTimelineRenderer$$.$_renderAxis$($timeline$$2$$, $i$$670_timeZoomCanvas$$);
    $timeline$$2$$.$_hasOverview$ ? $DvtTimelineRenderer$$.$_renderOverview$($timeline$$2$$) : $JSCompiler_StaticMethods_clearOverview$$($timeline$$2$$);
    if ($timeline$$2$$.$_keyboardHandler$) {
      for ($i$$670_timeZoomCanvas$$ = 0;$i$$670_timeZoomCanvas$$ < $timeline$$2$$.$_series$.length;$i$$670_timeZoomCanvas$$++) {
        var $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$ = $timeline$$2$$.$_series$[$i$$670_timeZoomCanvas$$];
        if ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_items$ && 0 < $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_items$.length) {
          $timeline$$2$$.$EventManager$.$setFocusObj$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_items$[0]);
          break;
        }
      }
    }
    $DvtTimelineRenderer$$.$_renderScrollHotspots$($timeline$$2$$);
    $DvtTimelineRenderer$$.$_renderZoomControls$($timeline$$2$$);
    $timeline$$2$$.$SelectionHandler$ && $JSCompiler_StaticMethods_applyInitialSelections$$($timeline$$2$$);
    dvt.$TimeAxis$.$supportsTouch$() && $timeline$$2$$.$_setAriaProperty$("flowto", $timeline$$2$$.$_series$[0].getId());
    for ($i$$670_timeZoomCanvas$$ = 0;$i$$670_timeZoomCanvas$$ < $timeline$$2$$.$_series$.length;$i$$670_timeZoomCanvas$$++) {
      var $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$ = $timeline$$2$$.$_series$[$i$$670_timeZoomCanvas$$], $context$$inline_3952_fadeInAnimator$$inline_3954_fadeOutAnimator$$inline_3953$$ = $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$getCtx$();
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_rmAnimationElems$ && 0 != $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_rmAnimationElems$.length ? ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_isAnimating$ = !0, $context$$inline_3952_fadeInAnimator$$inline_3954_fadeOutAnimator$$inline_3953$$ = new dvt.$ParallelPlayable$($context$$inline_3952_fadeInAnimator$$inline_3954_fadeOutAnimator$$inline_3953$$, 
      new dvt.$AnimFadeOut$($context$$inline_3952_fadeInAnimator$$inline_3954_fadeOutAnimator$$inline_3953$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_rmAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$Options$))), $context$$inline_3952_fadeInAnimator$$inline_3954_fadeOutAnimator$$inline_3953$$.play(), dvt.$Playable$.$appendOnEnd$($context$$inline_3952_fadeInAnimator$$inline_3954_fadeOutAnimator$$inline_3953$$, 
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_onRmAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$)) : $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_mvAnimator$ ? ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_isAnimating$ = !0, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_mvAnimator$.play(), dvt.$Playable$.$appendOnEnd$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_mvAnimator$, 
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_onMvAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$)) : $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_frAnimationElems$ && 0 != $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_frAnimationElems$.length && ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_isAnimating$ = !0, $context$$inline_3952_fadeInAnimator$$inline_3954_fadeOutAnimator$$inline_3953$$ = 
      new dvt.$ParallelPlayable$($context$$inline_3952_fadeInAnimator$$inline_3954_fadeOutAnimator$$inline_3953$$, new dvt.$AnimFadeIn$($context$$inline_3952_fadeInAnimator$$inline_3954_fadeOutAnimator$$inline_3953$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_frAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$Options$), 0)), $context$$inline_3952_fadeInAnimator$$inline_3954_fadeOutAnimator$$inline_3953$$.play(), 
      dvt.$Playable$.$appendOnEnd$($context$$inline_3952_fadeInAnimator$$inline_3954_fadeOutAnimator$$inline_3953$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$.$_onAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_3951_series$$20$$));
    }
    dvt.$Agent$.$isEnvironmentBrowser$() && !$JSCompiler_StaticMethods_isAnimating$$($timeline$$2$$) && $JSCompiler_StaticMethods_showThenHideHotspots$$($timeline$$2$$);
  } else {
    $DvtTimelineRenderer$$.$_renderEmptyText$($timeline$$2$$);
  }
};
$DvtTimelineRenderer$$.$_renderBackground$ = function $$DvtTimelineRenderer$$$$_renderBackground$$($timeline$$3$$) {
  $timeline$$3$$.$_background$ ? ($timeline$$3$$.$_background$.$setClipPath$(null), $timeline$$3$$.$_background$.$setWidth$($timeline$$3$$.$_backgroundWidth$), $timeline$$3$$.$_background$.$setHeight$($timeline$$3$$.$_backgroundHeight$)) : $timeline$$3$$.$_background$ = new dvt.Rect($timeline$$3$$.$getCtx$(), 0, 0, $timeline$$3$$.$_backgroundWidth$, $timeline$$3$$.$_backgroundHeight$, "bg");
  $timeline$$3$$.$_background$.$setCSSStyle$($timeline$$3$$.$_style$);
  $timeline$$3$$.$_background$.$setPixelHinting$();
  var $cp$$10$$ = new dvt.$ClipPath$;
  $cp$$10$$.$addRect$(0, 0, $timeline$$3$$.$_backgroundWidth$, $timeline$$3$$.$_backgroundHeight$);
  $timeline$$3$$.$_background$.$setClipPath$($cp$$10$$);
  $timeline$$3$$.$_background$.getParent() != $timeline$$3$$ && $timeline$$3$$.$addChild$($timeline$$3$$.$_background$);
};
$DvtTimelineRenderer$$.$_renderScrollableCanvas$ = function $$DvtTimelineRenderer$$$$_renderScrollableCanvas$$($timeline$$4$$) {
  $timeline$$4$$.$_canvas$ || ($timeline$$4$$.$_canvas$ = new dvt.$Container$($timeline$$4$$.$getCtx$(), "canvas"), $timeline$$4$$.$addChild$($timeline$$4$$.$_canvas$));
};
$DvtTimelineRenderer$$.$_renderSeries$ = function $$DvtTimelineRenderer$$$$_renderSeries$$($timeline$$5$$, $container$$183$$) {
  var $i$$671_timeAxis$$3$$ = $timeline$$5$$.$_timeAxis$;
  if ($timeline$$5$$.$_series$) {
    var $isRTL$$44$$ = dvt.$Agent$.$isRightToLeft$($timeline$$5$$.$getCtx$()), $seriesCount$$31$$ = $timeline$$5$$.$_series$.length, $axisSize$$5$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$5$$, $seriesCount$$31$$);
    !$timeline$$5$$.$isVertical$() && 1 < $seriesCount$$31$$ && $timeline$$5$$.$_canvasSize$ % 2 != $axisSize$$5$$ % 2 && ($i$$671_timeAxis$$3$$.$setContentSize$($i$$671_timeAxis$$3$$.$_contentSize$ + 1), $axisSize$$5$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$5$$, $seriesCount$$31$$));
    $timeline$$5$$.$_seriesSize$ = ($timeline$$5$$.$_canvasSize$ - $axisSize$$5$$) / $seriesCount$$31$$;
    for ($i$$671_timeAxis$$3$$ = 0;$i$$671_timeAxis$$3$$ < $seriesCount$$31$$;$i$$671_timeAxis$$3$$++) {
      var $series$$21$$ = $timeline$$5$$.$_series$[$i$$671_timeAxis$$3$$];
      $series$$21$$.$setClipPath$(null);
      var $cp$$11$$ = new dvt.$ClipPath$;
      if ($timeline$$5$$.$isVertical$()) {
        var $key$$75_posMatrix$$1$$ = $isRTL$$44$$ ? Math.abs($i$$671_timeAxis$$3$$ - 1) : $i$$671_timeAxis$$3$$;
        $isRTL$$44$$ && 1 == $timeline$$5$$.$_series$.length ? ($cp$$11$$.$addRect$($axisSize$$5$$, 0, $timeline$$5$$.$_seriesSize$, $timeline$$5$$.$_contentLength$), $key$$75_posMatrix$$1$$ = new dvt.$Matrix$(1, 0, 0, 1, $axisSize$$5$$, 0)) : ($cp$$11$$.$addRect$($key$$75_posMatrix$$1$$ * ($timeline$$5$$.$_seriesSize$ + $axisSize$$5$$), 0, $timeline$$5$$.$_seriesSize$, $timeline$$5$$.$_contentLength$), $key$$75_posMatrix$$1$$ = new dvt.$Matrix$(1, 0, 0, 1, $key$$75_posMatrix$$1$$ * ($timeline$$5$$.$_seriesSize$ + 
        $axisSize$$5$$), 0));
        var $width$$137$$ = $timeline$$5$$.$_seriesSize$, $height$$116$$ = $timeline$$5$$.$_contentLength$;
      } else {
        $cp$$11$$.$addRect$(0, $i$$671_timeAxis$$3$$ * ($timeline$$5$$.$_seriesSize$ + $axisSize$$5$$), $timeline$$5$$.$_contentLength$, $timeline$$5$$.$_seriesSize$), $key$$75_posMatrix$$1$$ = new dvt.$Matrix$(1, 0, 0, 1, 0, $i$$671_timeAxis$$3$$ * ($timeline$$5$$.$_seriesSize$ + $axisSize$$5$$)), $width$$137$$ = $timeline$$5$$.$_contentLength$, $height$$116$$ = $timeline$$5$$.$_seriesSize$;
      }
      $series$$21$$.$setClipPath$($cp$$11$$);
      $series$$21$$.$setMatrix$($key$$75_posMatrix$$1$$);
      $series$$21$$.getParent() != $container$$183$$ && $container$$183$$.$addChild$($series$$21$$);
      $series$$21$$.$render$($timeline$$5$$.$_seriesOptions$[$i$$671_timeAxis$$3$$], $width$$137$$, $height$$116$$);
    }
  }
};
$DvtTimelineRenderer$$.$_renderSeriesLabels$ = function $$DvtTimelineRenderer$$$$_renderSeriesLabels$$($timeline$$6$$) {
  if ($timeline$$6$$.$_series$) {
    var $context$$411$$ = $timeline$$6$$.$getCtx$(), $isRTL$$45$$ = dvt.$Agent$.$isRightToLeft$($context$$411$$);
    if ($timeline$$6$$.$_seriesLabels$) {
      for (var $i$$672$$ = 0;$i$$672$$ < $timeline$$6$$.$_seriesLabels$.length;$i$$672$$++) {
        $timeline$$6$$.removeChild($timeline$$6$$.$_seriesLabels$[$i$$672$$]);
      }
    }
    $timeline$$6$$.$_seriesLabels$ = [];
    for (var $seriesCount$$32$$ = $timeline$$6$$.$_series$.length, $labelSpacing$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelSpacing$(), $zoomControlSpacing$$ = 2 * dvt.$TransientButton$.$_DEFAULT_RADIUS$ + 6, $doubleLabelSpacing$$ = 2 * $labelSpacing$$, $i$$672$$ = 0;$i$$672$$ < $seriesCount$$32$$;$i$$672$$++) {
      var $series$$22_seriesEmptyText_seriesEmptyTextElem$$ = $timeline$$6$$.$_series$[$i$$672$$], $seriesLabel$$2_seriesLabelElem$$ = $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$getLabel$();
      if (null != $seriesLabel$$2_seriesLabelElem$$) {
        var $posX$$4_seriesLabelStyle$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelStyle$($timeline$$6$$.$Options$), $seriesLabel$$2_seriesLabelElem$$ = new dvt.$OutputText$($context$$411$$, $seriesLabel$$2_seriesLabelElem$$, 0, 0, "sl_s" + $i$$672$$);
        $seriesLabel$$2_seriesLabelElem$$.$setCSSStyle$($posX$$4_seriesLabelStyle$$);
        $timeline$$6$$.$addChild$($seriesLabel$$2_seriesLabelElem$$);
        var $dim$$76_posMatrix$$2$$ = $seriesLabel$$2_seriesLabelElem$$.$getDimensions$();
        $timeline$$6$$.removeChild($seriesLabel$$2_seriesLabelElem$$);
        var $totalSpace$$2_width$$138$$ = $timeline$$6$$.$isVertical$() ? $timeline$$6$$.$_seriesSize$ : $timeline$$6$$.$_canvasLength$, $totalSpace$$2_width$$138$$ = Math.min($dim$$76_posMatrix$$2$$.$w$, $totalSpace$$2_width$$138$$ - ($i$$672$$ - 1) * -$zoomControlSpacing$$ - $doubleLabelSpacing$$), $seriesLabelPadding$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelPadding$(), $backgroundRect$$1$$ = new dvt.Rect($context$$411$$, 0, 0, $totalSpace$$2_width$$138$$ + 2 * $seriesLabelPadding$$, $dim$$76_posMatrix$$2$$.$h$ + 
        2 * $seriesLabelPadding$$, "slb_s" + $i$$672$$);
        $backgroundRect$$1$$.$setCSSStyle$($posX$$4_seriesLabelStyle$$);
        $backgroundRect$$1$$.$setCornerRadius$(3);
        if ($timeline$$6$$.$isVertical$()) {
          $posX$$4_seriesLabelStyle$$ = $isRTL$$45$$ ? Math.abs($i$$672$$ - 1) * ($timeline$$6$$.$_canvasSize$ - $totalSpace$$2_width$$138$$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$6$$.$_startX$ + ($i$$672$$ - 1) * $zoomControlSpacing$$ : $i$$672$$ * ($timeline$$6$$.$_canvasSize$ - $totalSpace$$2_width$$138$$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$6$$.$_startX$ + ($i$$672$$ - 1) * -$zoomControlSpacing$$, $posY$$3$$ = $timeline$$6$$.$_startY$ + $labelSpacing$$;
        } else {
          var $posX$$4_seriesLabelStyle$$ = $isRTL$$45$$ ? $timeline$$6$$.$_canvasLength$ - $totalSpace$$2_width$$138$$ - $labelSpacing$$ - ($i$$672$$ - 1) * -$zoomControlSpacing$$ : $timeline$$6$$.$_startX$ + $labelSpacing$$ + ($i$$672$$ - 1) * -$zoomControlSpacing$$, $posY$$3$$ = $i$$672$$ * ($timeline$$6$$.$_canvasSize$ - $dim$$76_posMatrix$$2$$.$h$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$6$$.$_startY$
        }
        $dim$$76_posMatrix$$2$$ = new dvt.$Matrix$(1, 0, 0, 1, $posX$$4_seriesLabelStyle$$, $posY$$3$$);
        $seriesLabel$$2_seriesLabelElem$$.$setMatrix$($dim$$76_posMatrix$$2$$);
        $dim$$76_posMatrix$$2$$ = new dvt.$Matrix$(1, 0, 0, 1, $posX$$4_seriesLabelStyle$$ - $seriesLabelPadding$$, $posY$$3$$ - $seriesLabelPadding$$);
        $backgroundRect$$1$$.$setMatrix$($dim$$76_posMatrix$$2$$);
        $timeline$$6$$.$addChild$($backgroundRect$$1$$);
        dvt.$TextUtils$.$fitText$($seriesLabel$$2_seriesLabelElem$$, $totalSpace$$2_width$$138$$, Infinity, $timeline$$6$$);
        $timeline$$6$$.$_seriesLabels$.push($backgroundRect$$1$$);
        $timeline$$6$$.$_seriesLabels$.push($seriesLabel$$2_seriesLabelElem$$);
      }
      $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$_isEmpty$ && ($series$$22_seriesEmptyText_seriesEmptyTextElem$$ = $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$_emptyText$, null != $series$$22_seriesEmptyText_seriesEmptyTextElem$$ && ($series$$22_seriesEmptyText_seriesEmptyTextElem$$ = new dvt.$OutputText$($context$$411$$, $series$$22_seriesEmptyText_seriesEmptyTextElem$$, 0, 0, "et_s" + $i$$672$$), $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getEmptyTextStyle$($timeline$$6$$.$Options$)), 
      $timeline$$6$$.$addChild$($series$$22_seriesEmptyText_seriesEmptyTextElem$$), $dim$$76_posMatrix$$2$$ = $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$getDimensions$(), $timeline$$6$$.removeChild($series$$22_seriesEmptyText_seriesEmptyTextElem$$), $dim$$76_posMatrix$$2$$ = new dvt.$Matrix$(1, 0, 0, 1, ($timeline$$6$$.$_canvasLength$ - $dim$$76_posMatrix$$2$$.$w$) / 2 + $timeline$$6$$.$_startX$, $i$$672$$ * ($timeline$$6$$.$_seriesSize$ + $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$6$$, 
      $seriesCount$$32$$)) + ($timeline$$6$$.$_seriesSize$ - $dim$$76_posMatrix$$2$$.$h$) / 2 + $timeline$$6$$.$_startY$), $series$$22_seriesEmptyText_seriesEmptyTextElem$$.$setMatrix$($dim$$76_posMatrix$$2$$), $timeline$$6$$.$addChild$($series$$22_seriesEmptyText_seriesEmptyTextElem$$), $timeline$$6$$.$_seriesLabels$.push($series$$22_seriesEmptyText_seriesEmptyTextElem$$)));
    }
  }
};
$DvtTimelineRenderer$$.$_renderAxis$ = function $$DvtTimelineRenderer$$$$_renderAxis$$($timeline$$7$$, $container$$184$$) {
  var $isRTL$$46_posMatrix$$3$$ = dvt.$Agent$.$isRightToLeft$($timeline$$7$$.$getCtx$()), $timeAxis$$4$$ = $timeline$$7$$.$_timeAxis$, $axisStart$$2_seriesCount$$33$$ = $timeline$$7$$.$_series$.length, $axisSize$$6$$ = $timeline$$7$$.$_timeAxis$.$getSize$(), $axisVisibleSize$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$7$$, $axisStart$$2_seriesCount$$33$$), $axisStart$$2_seriesCount$$33$$ = 1 == $axisStart$$2_seriesCount$$33$$ ? $timeline$$7$$.$_canvasSize$ - $axisVisibleSize$$ : 
  $timeline$$7$$.$_canvasSize$ / $axisStart$$2_seriesCount$$33$$ - $axisVisibleSize$$ / 2;
  $isRTL$$46_posMatrix$$3$$ && $timeline$$7$$.$isVertical$() && 1 == $timeline$$7$$.$_series$.length && ($axisStart$$2_seriesCount$$33$$ = 0);
  $timeAxis$$4$$.getParent() !== $container$$184$$ && $container$$184$$.$addChild$($timeAxis$$4$$);
  $timeline$$7$$.$isVertical$() ? ($isRTL$$46_posMatrix$$3$$ = new dvt.$Matrix$(1, 0, 0, 1, $axisStart$$2_seriesCount$$33$$, 0), $timeAxis$$4$$.$render$(null, $axisSize$$6$$, $timeline$$7$$.$_contentLength$)) : ($isRTL$$46_posMatrix$$3$$ = new dvt.$Matrix$(1, 0, 0, 1, 0, $axisStart$$2_seriesCount$$33$$), $timeAxis$$4$$.$render$(null, $timeline$$7$$.$_contentLength$, $axisSize$$6$$));
  $timeAxis$$4$$.$setMatrix$($isRTL$$46_posMatrix$$3$$);
  $DvtTimelineRenderer$$.$_renderSeriesTimeAxis$($timeline$$7$$, $timeline$$7$$.$_fetchStartPos$, $timeline$$7$$.$_fetchEndPos$, $timeline$$7$$.$_timeZoomCanvas$, $timeline$$7$$.$_contentLength$);
};
$DvtTimelineRenderer$$.$_renderSeriesTimeAxis$ = function $$DvtTimelineRenderer$$$$_renderSeriesTimeAxis$$($timeline$$8$$, $currentPos$$2_startPos$$7$$, $endPos$$6_label$$106$$, $container$$185$$, $length$$27$$) {
  var $context$$413$$ = $timeline$$8$$.$getCtx$(), $isRTL$$47$$ = dvt.$Agent$.$isRightToLeft$($context$$413$$);
  if ($timeline$$8$$.$_majorAxisLabels$) {
    for (var $currentDate$$1_i$$673_startDate$$1$$ = 0;$currentDate$$1_i$$673_startDate$$1$$ < $timeline$$8$$.$_majorAxisLabels$.length;$currentDate$$1_i$$673_startDate$$1$$++) {
      $container$$185$$.removeChild($timeline$$8$$.$_majorAxisLabels$[$currentDate$$1_i$$673_startDate$$1$$]);
    }
  }
  $timeline$$8$$.$_majorAxisLabels$ = [];
  if ($timeline$$8$$.$_seriesScale$) {
    var $dates$$4$$, $customFormatScale$$2_customScale$$2_labels$$34$$, $start$$49$$ = $timeline$$8$$.$_start$, $end$$31$$ = $timeline$$8$$.$_end$;
    if ($timeline$$8$$.$_customTimeScales$ && $timeline$$8$$.$_customTimeScales$[$timeline$$8$$.$_seriesScale$]) {
      $customFormatScale$$2_customScale$$2_labels$$34$$ = $timeline$$8$$.$_customTimeScales$[$timeline$$8$$.$_seriesScale$], $dates$$4$$ = $customFormatScale$$2_customScale$$2_labels$$34$$.times, $customFormatScale$$2_customScale$$2_labels$$34$$ = $customFormatScale$$2_customScale$$2_labels$$34$$.labels;
    } else {
      if ($timeline$$8$$.$_seriesCustomFormatScales$ && $timeline$$8$$.$_seriesCustomFormatScales$[$timeline$$8$$.$_seriesScale$]) {
        $customFormatScale$$2_customScale$$2_labels$$34$$ = $timeline$$8$$.$_seriesCustomFormatScales$[$timeline$$8$$.$_seriesScale$], $dates$$4$$ = $customFormatScale$$2_customScale$$2_labels$$34$$.times, $customFormatScale$$2_customScale$$2_labels$$34$$ = $customFormatScale$$2_customScale$$2_labels$$34$$.labels;
      } else {
        for ($dates$$4$$ = [], $customFormatScale$$2_customScale$$2_labels$$34$$ = [], $currentDate$$1_i$$673_startDate$$1$$ = dvt.$TimeAxis$.$getPositionDate$($start$$49$$, $end$$31$$, $currentPos$$2_startPos$$7$$, $length$$27$$), $currentDate$$1_i$$673_startDate$$1$$ = $timeline$$8$$.$_seriesTimeAxis$.$adjustDate$($currentDate$$1_i$$673_startDate$$1$$), $currentPos$$2_startPos$$7$$ = dvt.$TimeAxis$.$getDatePosition$($start$$49$$, $end$$31$$, $currentDate$$1_i$$673_startDate$$1$$, $length$$27$$), 
        $dates$$4$$.push($currentDate$$1_i$$673_startDate$$1$$.getTime());$currentPos$$2_startPos$$7$$ < $endPos$$6_label$$106$$;) {
          $customFormatScale$$2_customScale$$2_labels$$34$$.push($timeline$$8$$.$_seriesTimeAxis$.$formatDate$($currentDate$$1_i$$673_startDate$$1$$)), $currentDate$$1_i$$673_startDate$$1$$ = $timeline$$8$$.$_seriesTimeAxis$.$getNextDate$($currentDate$$1_i$$673_startDate$$1$$.getTime()), $currentPos$$2_startPos$$7$$ = dvt.$TimeAxis$.$getDatePosition$($start$$49$$, $end$$31$$, $currentDate$$1_i$$673_startDate$$1$$, $length$$27$$), $dates$$4$$.push($currentDate$$1_i$$673_startDate$$1$$.getTime());
        }
      }
    }
    for ($currentDate$$1_i$$673_startDate$$1$$ = 0;$currentDate$$1_i$$673_startDate$$1$$ < $customFormatScale$$2_customScale$$2_labels$$34$$.length;$currentDate$$1_i$$673_startDate$$1$$++) {
      $endPos$$6_label$$106$$ = $customFormatScale$$2_customScale$$2_labels$$34$$[$currentDate$$1_i$$673_startDate$$1$$];
      $currentPos$$2_startPos$$7$$ = dvt.$TimeAxis$.$getDatePosition$($start$$49$$, $end$$31$$, $dates$$4$$[$currentDate$$1_i$$673_startDate$$1$$], $length$$27$$);
      var $maxLength$$2$$ = dvt.$TimeAxis$.$getDatePosition$($start$$49$$, $end$$31$$, $dates$$4$$[$currentDate$$1_i$$673_startDate$$1$$ + 1], $length$$27$$) - $currentPos$$2_startPos$$7$$;
      ($isRTL$$47$$ ? $timeline$$8$$.$isVertical$() ? $DvtTimelineRenderer$$.$_addLabel$($context$$413$$, $container$$185$$, $timeline$$8$$.$_canvasSize$ - 5, $endPos$$6_label$$106$$, $maxLength$$2$$, $currentPos$$2_startPos$$7$$ + 18, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$8$$.$Options$), "o_label" + $currentPos$$2_startPos$$7$$ + "_s0", $timeline$$8$$.$_majorAxisLabels$, $isRTL$$47$$) : $DvtTimelineRenderer$$.$_addLabel$($context$$413$$, $container$$185$$, $length$$27$$ - 
      ($currentPos$$2_startPos$$7$$ + 5), $endPos$$6_label$$106$$, $maxLength$$2$$, $timeline$$8$$.$_seriesSize$ - 2, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$8$$.$Options$), "o_label" + $currentPos$$2_startPos$$7$$ + "_s0", $timeline$$8$$.$_majorAxisLabels$, $isRTL$$47$$) : $timeline$$8$$.$isVertical$() ? $DvtTimelineRenderer$$.$_addLabel$($context$$413$$, $container$$185$$, 5, $endPos$$6_label$$106$$, $maxLength$$2$$, $currentPos$$2_startPos$$7$$ + 18, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$8$$.$Options$), 
      "o_label" + $currentPos$$2_startPos$$7$$ + "_s0", $timeline$$8$$.$_majorAxisLabels$, $isRTL$$47$$) : $DvtTimelineRenderer$$.$_addLabel$($context$$413$$, $container$$185$$, $currentPos$$2_startPos$$7$$ + 5, $endPos$$6_label$$106$$, $maxLength$$2$$, $timeline$$8$$.$_seriesSize$ - 2, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$8$$.$Options$), "o_label" + $currentPos$$2_startPos$$7$$ + "_s0", $timeline$$8$$.$_majorAxisLabels$, $isRTL$$47$$)).time = $dates$$4$$[$currentDate$$1_i$$673_startDate$$1$$];
    }
  }
};
$DvtTimelineRenderer$$.$_renderOverview$ = function $$DvtTimelineRenderer$$$$_renderOverview$$($timeline$$9$$) {
  var $context$$414_overviewOptions$$inline_3957$$ = $timeline$$9$$.$getCtx$(), $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$ = dvt.$Agent$.$isRightToLeft$($context$$414_overviewOptions$$inline_3957$$);
  if (null == $timeline$$9$$.$_overviewCanvas$) {
    var $addOverviewCanvas_dates$$inline_4950_seriesCount$$inline_4965$$ = !0;
    $timeline$$9$$.$_overviewCanvas$ = new dvt.$Container$($context$$414_overviewOptions$$inline_3957$$, "oCanvas");
  } else {
    $timeline$$9$$.$_overviewCanvas$.$removeChildren$();
  }
  var $borderWidth$$18_height$$117$$ = $timeline$$9$$.$_style$.$getBorderWidth$(), $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$ = $borderWidth$$18_height$$117$$ / 2;
  if ($timeline$$9$$.$isVertical$()) {
    var $width$$139$$ = $timeline$$9$$.$_overviewSize$, $borderWidth$$18_height$$117$$ = $timeline$$9$$.$Height$ - $borderWidth$$18_height$$117$$;
    $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$ ? $timeline$$9$$.$_overviewCanvas$.$setTranslateX$($customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$) : $timeline$$9$$.$_overviewCanvas$.$setTranslateX$($timeline$$9$$.$Width$ - $timeline$$9$$.$_overviewSize$ - $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$);
    $timeline$$9$$.$_overviewCanvas$.$setTranslateY$($customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$);
  } else {
    $width$$139$$ = $timeline$$9$$.$Width$ - $borderWidth$$18_height$$117$$, $borderWidth$$18_height$$117$$ = $timeline$$9$$.$_overviewSize$, $timeline$$9$$.$_overviewCanvas$.$setTranslateY$($timeline$$9$$.$Height$ - $timeline$$9$$.$_overviewSize$ - $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$), $timeline$$9$$.$_overviewCanvas$.$setTranslateX$($customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$)
    ;
  }
  $addOverviewCanvas_dates$$inline_4950_seriesCount$$inline_4965$$ && $timeline$$9$$.$addChild$($timeline$$9$$.$_overviewCanvas$);
  $timeline$$9$$.$_overview$ = new dvt.$TimelineOverview$($context$$414_overviewOptions$$inline_3957$$, $timeline$$9$$.$HandleEvent$, $timeline$$9$$);
  $timeline$$9$$.$_overviewCanvas$.$addChild$($timeline$$9$$.$_overview$);
  $context$$414_overviewOptions$$inline_3957$$ = {};
  $context$$414_overviewOptions$$inline_3957$$.start = $timeline$$9$$.$_start$;
  $context$$414_overviewOptions$$inline_3957$$.end = $timeline$$9$$.$_end$;
  $context$$414_overviewOptions$$inline_3957$$.renstart = $timeline$$9$$.$_viewStartTime$;
  $context$$414_overviewOptions$$inline_3957$$.width = $timeline$$9$$.$_contentLength$;
  $context$$414_overviewOptions$$inline_3957$$.ovp = "below";
  $context$$414_overviewOptions$$inline_3957$$.selmode = $timeline$$9$$.$_selectionMode$;
  $context$$414_overviewOptions$$inline_3957$$.rtl = $timeline$$9$$.$isRTL$();
  $context$$414_overviewOptions$$inline_3957$$.sid = "ts1";
  $context$$414_overviewOptions$$inline_3957$$._bts = "none";
  $context$$414_overviewOptions$$inline_3957$$._btc = "#4f4f4f";
  $context$$414_overviewOptions$$inline_3957$$._fc = "#aadd77";
  $context$$414_overviewOptions$$inline_3957$$._do = "0";
  $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$ = $DvtTimelineStyleUtils$$.$getOverviewWindowBackgroundColor$($timeline$$9$$.$Options$);
  $context$$414_overviewOptions$$inline_3957$$._wbc = $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$;
  $context$$414_overviewOptions$$inline_3957$$._hfc = $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$;
  $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$ = $DvtTimelineStyleUtils$$.$getOverviewWindowBorderColor$($timeline$$9$$.$Options$);
  $context$$414_overviewOptions$$inline_3957$$._wbtc = $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$;
  $context$$414_overviewOptions$$inline_3957$$._wbrc = $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$;
  $context$$414_overviewOptions$$inline_3957$$._wbbc = $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$;
  $context$$414_overviewOptions$$inline_3957$$._wblc = $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$;
  $context$$414_overviewOptions$$inline_3957$$._wbts = "solid";
  $context$$414_overviewOptions$$inline_3957$$._wbrs = "solid";
  $context$$414_overviewOptions$$inline_3957$$._wbbs = "solid";
  $context$$414_overviewOptions$$inline_3957$$._wbls = "solid";
  $context$$414_overviewOptions$$inline_3957$$._ls = $DvtTimelineStyleUtils$$.$getOverviewLabelStyle$($timeline$$9$$.$Options$).toString();
  $context$$414_overviewOptions$$inline_3957$$._obc = $DvtTimelineStyleUtils$$.$getOverviewBackgroundColor$($timeline$$9$$.$Options$);
  $context$$414_overviewOptions$$inline_3957$$._ctic = $DvtTimelineStyleUtils$$.$getReferenceObjectColor$($timeline$$9$$.$Options$);
  $context$$414_overviewOptions$$inline_3957$$._tic = "#BCC7D2";
  $context$$414_overviewOptions$$inline_3957$$._tabc = "#D9DFE3";
  $context$$414_overviewOptions$$inline_3957$$._tabo = "0";
  $context$$414_overviewOptions$$inline_3957$$._bs = "solid";
  $context$$414_overviewOptions$$inline_3957$$._bc = "#648BAF";
  $context$$414_overviewOptions$$inline_3957$$._bw = "1px";
  $context$$414_overviewOptions$$inline_3957$$._bof = "0px";
  $context$$414_overviewOptions$$inline_3957$$._dbs = "solid";
  $context$$414_overviewOptions$$inline_3957$$._dbc = "#648BAF";
  $context$$414_overviewOptions$$inline_3957$$._dbw = "1px";
  $context$$414_overviewOptions$$inline_3957$$._hbs = "solid";
  $context$$414_overviewOptions$$inline_3957$$._hbc = "#85bbe7";
  $context$$414_overviewOptions$$inline_3957$$._hbw = "2px";
  $context$$414_overviewOptions$$inline_3957$$._hbof = "0px";
  $context$$414_overviewOptions$$inline_3957$$._hgc = "#ebeced";
  $context$$414_overviewOptions$$inline_3957$$._hgo = "1";
  $context$$414_overviewOptions$$inline_3957$$._hdbs = "solid";
  $context$$414_overviewOptions$$inline_3957$$._hdbc = "#85bbe7";
  $context$$414_overviewOptions$$inline_3957$$._hdbw = "2px";
  $context$$414_overviewOptions$$inline_3957$$._sbs = "solid";
  $context$$414_overviewOptions$$inline_3957$$._sbc = "#000000";
  $context$$414_overviewOptions$$inline_3957$$._sbw = "2px";
  $context$$414_overviewOptions$$inline_3957$$._sbof = "0px";
  $context$$414_overviewOptions$$inline_3957$$._sbo = "1";
  $context$$414_overviewOptions$$inline_3957$$._sdbs = "solid";
  $context$$414_overviewOptions$$inline_3957$$._sdbc = "#000000";
  $context$$414_overviewOptions$$inline_3957$$._sdbw = "2px";
  $context$$414_overviewOptions$$inline_3957$$._asbs = "solid";
  $context$$414_overviewOptions$$inline_3957$$._asbc = "#000000";
  $context$$414_overviewOptions$$inline_3957$$._asbw = "2px";
  $context$$414_overviewOptions$$inline_3957$$._asbof = "0px";
  $context$$414_overviewOptions$$inline_3957$$._asbo = "1";
  $context$$414_overviewOptions$$inline_3957$$._asgc = "#e4f0fa";
  $context$$414_overviewOptions$$inline_3957$$._asgo = "1";
  $context$$414_overviewOptions$$inline_3957$$._asdbs = "solid";
  $context$$414_overviewOptions$$inline_3957$$._asdbc = "#000000";
  $context$$414_overviewOptions$$inline_3957$$._asdbw = "2px";
  $context$$414_overviewOptions$$inline_3957$$._aoc = "off";
  $timeline$$9$$.$_referenceObjects$ && 0 < $timeline$$9$$.$_referenceObjects$.length && $timeline$$9$$.$_referenceObjects$[0] && ($context$$414_overviewOptions$$inline_3957$$.ocd = $timeline$$9$$.$_referenceObjects$[0].getTime());
  $timeline$$9$$.$_isVertical$ ? ($context$$414_overviewOptions$$inline_3957$$.orn = "vertical", ($JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$ = $timeline$$9$$.$_resources$.overviewHandleVert) ? ($context$$414_overviewOptions$$inline_3957$$._hbi = $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$, 
  $context$$414_overviewOptions$$inline_3957$$._hw = "15", $context$$414_overviewOptions$$inline_3957$$._hh = "3") : $context$$414_overviewOptions$$inline_3957$$._htc = $DvtTimelineStyleUtils$$.$getOverviewHandleTextureColor$()) : ($context$$414_overviewOptions$$inline_3957$$.orn = "horizontal", ($JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$ = $timeline$$9$$.$_resources$.overviewHandleHor) ? 
  ($context$$414_overviewOptions$$inline_3957$$._hbi = $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$, $context$$414_overviewOptions$$inline_3957$$._hw = "3", $context$$414_overviewOptions$$inline_3957$$._hh = "15") : $context$$414_overviewOptions$$inline_3957$$._htc = $DvtTimelineStyleUtils$$.$getOverviewHandleTextureColor$(), $context$$414_overviewOptions$$inline_3957$$._ds = 
  "square", $context$$414_overviewOptions$$inline_3957$$._dsx = "1.3d", $context$$414_overviewOptions$$inline_3957$$._dsy = "0.9d");
  $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$ = [];
  if ($timeline$$9$$.$_seriesTimeAxis$) {
    if ($timeline$$9$$.$_customTimeScales$ && $timeline$$9$$.$_customTimeScales$[$timeline$$9$$.$_seriesScale$]) {
      $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$ = $timeline$$9$$.$_customTimeScales$[$timeline$$9$$.$_seriesScale$], $addOverviewCanvas_dates$$inline_4950_seriesCount$$inline_4965$$ = $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$.times, $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$ = $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$.labels
      ;
    } else {
      if ($timeline$$9$$.$_seriesCustomFormatScales$ && $timeline$$9$$.$_seriesCustomFormatScales$[$timeline$$9$$.$_seriesScale$]) {
        $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$ = $timeline$$9$$.$_seriesCustomFormatScales$[$timeline$$9$$.$_seriesScale$], $addOverviewCanvas_dates$$inline_4950_seriesCount$$inline_4965$$ = $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$.times, $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$ = $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$.labels
        ;
      } else {
        for (var $addOverviewCanvas_dates$$inline_4950_seriesCount$$inline_4965$$ = [], $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$ = [], $i$$inline_4960_items$$inline_4967_start$$inline_4954$$ = $timeline$$9$$.$_start$, $end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$ = $timeline$$9$$.$_end$, $itemOption$$inline_4970_length$$inline_4956$$ = $timeline$$9$$.$_isVertical$ ? $timeline$$9$$.$Height$ : $timeline$$9$$.$Width$, 
        $currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$ = dvt.$TimeAxis$.$getPositionDate$($i$$inline_4960_items$$inline_4967_start$$inline_4954$$, $end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$, $timeline$$9$$.$_fetchStartPos$, $itemOption$$inline_4970_length$$inline_4956$$), $currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$ = $timeline$$9$$.$_seriesTimeAxis$.$adjustDate$($currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$), 
        $currentPos$$inline_4959_endTime$$inline_4971$$ = dvt.$TimeAxis$.$getDatePosition$($i$$inline_4960_items$$inline_4967_start$$inline_4954$$, $end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$, $currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$, $itemOption$$inline_4970_length$$inline_4956$$);$currentPos$$inline_4959_endTime$$inline_4971$$ < $timeline$$9$$.$_fetchEndPos$;) {
          $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$.push($timeline$$9$$.$_seriesTimeAxis$.$formatDate$($currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$)), $addOverviewCanvas_dates$$inline_4950_seriesCount$$inline_4965$$.push($currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$.getTime()), $currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$ = 
          $timeline$$9$$.$_seriesTimeAxis$.$getNextDate$($currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$.getTime()), $currentPos$$inline_4959_endTime$$inline_4971$$ = dvt.$TimeAxis$.$getDatePosition$($i$$inline_4960_items$$inline_4967_start$$inline_4954$$, $end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$, $currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$, $itemOption$$inline_4970_length$$inline_4956$$)
          ;
        }
      }
    }
    for ($i$$inline_4960_items$$inline_4967_start$$inline_4954$$ = 0;$i$$inline_4960_items$$inline_4967_start$$inline_4954$$ < $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$.length;$i$$inline_4960_items$$inline_4967_start$$inline_4954$$++) {
      $end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$ = {}, $end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$.time = $addOverviewCanvas_dates$$inline_4950_seriesCount$$inline_4965$$[$i$$inline_4960_items$$inline_4967_start$$inline_4954$$], $end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$.label = $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$[$i$$inline_4960_items$$inline_4967_start$$inline_4954$$], $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$.push($end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$)
      ;
    }
  }
  $context$$414_overviewOptions$$inline_3957$$.axisTicks = $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$;
  if ($timeline$$9$$.$_series$) {
    for ($JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$ = [], $addOverviewCanvas_dates$$inline_4950_seriesCount$$inline_4965$$ = $timeline$$9$$.$_series$.length, $customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$ = 0;$customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$ < 
    $addOverviewCanvas_dates$$inline_4950_seriesCount$$inline_4965$$;$customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$++) {
      for ($i$$inline_4960_items$$inline_4967_start$$inline_4954$$ = $timeline$$9$$.$_series$[$customFormatScale$$inline_4953_customScale$$inline_4952_halfBorderWidth$$2_i$$inline_4966_labels$$inline_4951$$].$_items$, $end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$ = 0;$end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$ < $i$$inline_4960_items$$inline_4967_start$$inline_4954$$.length;$end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$++) {
        $currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$ = $i$$inline_4960_items$$inline_4967_start$$inline_4954$$[$end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$];
        $itemOption$$inline_4970_length$$inline_4956$$ = {};
        $itemOption$$inline_4970_length$$inline_4956$$.rk = $end$$inline_4955_j$$inline_4968_tickOption$$inline_4961$$;
        $itemOption$$inline_4970_length$$inline_4956$$.tid = $currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$.getId();
        $itemOption$$inline_4970_length$$inline_4956$$.t = $currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$.$_startTime$;
        $itemOption$$inline_4970_length$$inline_4956$$._sd = "true";
        if ($currentPos$$inline_4959_endTime$$inline_4971$$ = $currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$.$_endTime$) {
          $itemOption$$inline_4970_length$$inline_4956$$.et = $currentPos$$inline_4959_endTime$$inline_4971$$, ($currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$ = $currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$.$_durationFillColor$) && ($itemOption$$inline_4970_length$$inline_4956$$.dfc = $currentDate$$inline_4958_durationFillColor$$inline_4972_item$$inline_4969_startDate$$inline_4957$$);
        }
        $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$.push($itemOption$$inline_4970_length$$inline_4956$$);
      }
    }
  } else {
    $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$ = void 0;
  }
  $context$$414_overviewOptions$$inline_3957$$.markers = $JSCompiler_inline_result$$4237_axisTicks$$inline_4949_handle$$inline_3960_isRTL$$48_overviewMarkers$$inline_4964_windowBackgroundColor$$inline_3958_windowBorderColor$$inline_3959$$;
  $timeline$$9$$.$_overview$.$render$($context$$414_overviewOptions$$inline_3957$$, $width$$139$$, $borderWidth$$18_height$$117$$);
};
$DvtTimelineRenderer$$.$_renderScrollHotspots$ = function $$DvtTimelineRenderer$$$$_renderScrollHotspots$$($timeline$$10$$) {
  if ($timeline$$10$$.$_series$) {
    var $context$$415$$ = $timeline$$10$$.$getCtx$(), $isRTL$$49$$ = dvt.$Agent$.$isRightToLeft$($context$$415$$), $seriesCount$$34$$ = $timeline$$10$$.$_series$.length, $axisSize$$7$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$10$$, $seriesCount$$34$$);
    if ($timeline$$10$$.$_scrollHotspotsContainers$) {
      for (var $i$$674$$ = 0;$i$$674$$ < $timeline$$10$$.$_scrollHotspotsContainers$.length;$i$$674$$++) {
        $timeline$$10$$.$_scrollHotspotsContainers$[$i$$674$$].$removeChildren$();
      }
    } else {
      var $addHotspotsContainers$$ = !0;
      $timeline$$10$$.$_scrollHotspotsContainers$ = [];
    }
    $timeline$$10$$.$_scrollHotspots$ = [];
    for (var $hotspotPadding$$ = $DvtTimelineStyleUtils$$.$getHotspotPadding$(), $hotspotWidth$$ = $DvtTimelineStyleUtils$$.$getHotspotWidth$(), $hotspotHeight$$ = $DvtTimelineStyleUtils$$.$getHotspotHeight$(), $hotspotArrowWidth$$ = $DvtTimelineStyleUtils$$.$getHotspotArrowWidth$(), $hotspotArrowHeight$$ = $DvtTimelineStyleUtils$$.$getHotspotArrowHeight$(), $hotspotBackgroundColor$$ = $DvtTimelineStyleUtils$$.$getHotspotBackgroundColor$(), $hotspotBorderRadius$$ = $DvtTimelineStyleUtils$$.$getHotspotBorderRadius$(), 
    $i$$674$$ = 0;$i$$674$$ < $seriesCount$$34$$;$i$$674$$++) {
      if ($addHotspotsContainers$$) {
        var $scrollHotspots$$ = new dvt.$Container$($context$$415$$, "hotspots_s" + $i$$674$$);
        $timeline$$10$$.$addChild$($scrollHotspots$$);
        $timeline$$10$$.$_scrollHotspotsContainers$.push($scrollHotspots$$);
      } else {
        $scrollHotspots$$ = $timeline$$10$$.$_scrollHotspotsContainers$[$i$$674$$];
      }
      if ($timeline$$10$$.$isVertical$()) {
        var $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$ = $isRTL$$49$$ ? Math.abs($i$$674$$ - 1) : $i$$674$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $backX_leftHotspot_topHotspot_topX$$ = $timeline$$10$$.$_startX$ + $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$ * ($timeline$$10$$.$_seriesSize$ + $axisSize$$7$$) + ($timeline$$10$$.$_seriesSize$ - $hotspotWidth$$) / 2, $backY_topY$$1$$ = $timeline$$10$$.$_startY$ + $hotspotPadding$$, $bottomY$$2_forwardY$$ = $timeline$$10$$.$_startY$ + 
        $timeline$$10$$.$_canvasLength$ - $hotspotHeight$$ - $hotspotPadding$$, $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$ = $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $bottomY$$2_forwardY$$ + $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$10$$.$_resources$.scrollUp, $arrowBottomResource_arrowForwardResource$$ = 
        $timeline$$10$$.$_resources$.scrollDown
      } else {
        var $backX_leftHotspot_topHotspot_topX$$ = $timeline$$10$$.$_startX$ + $hotspotPadding$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $timeline$$10$$.$_startX$ + $timeline$$10$$.$_canvasLength$ - $hotspotWidth$$ - $hotspotPadding$$, $backY_topY$$1$$ = $timeline$$10$$.$_startY$ + $i$$674$$ * ($timeline$$10$$.$_seriesSize$ + $axisSize$$7$$) + ($timeline$$10$$.$_seriesSize$ - $hotspotHeight$$) / 2, $bottomY$$2_forwardY$$ = $backY_topY$$1$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + 
        $hotspotArrowWidth$$ / 2, $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$ = $bottomHotspot_bottomX_forwardX_rightHotspot$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $arrowBackY_arrowTopY$$, $arrowBackResource_arrowTopResource$$ = $timeline$$10$$.$_resources$.scrollLeft, $arrowBottomResource_arrowForwardResource$$ = $timeline$$10$$.$_resources$.scrollRight
      }
      $backX_leftHotspot_topHotspot_topX$$ = new dvt.Rect($context$$415$$, $backX_leftHotspot_topHotspot_topX$$, $backY_topY$$1$$, $hotspotWidth$$, $hotspotHeight$$, "lhs");
      $backX_leftHotspot_topHotspot_topX$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $backX_leftHotspot_topHotspot_topX$$.$setCornerRadius$($hotspotBorderRadius$$);
      $backX_leftHotspot_topHotspot_topX$$.$hotspot$ = "left";
      $backX_leftHotspot_topHotspot_topX$$.$setAlpha$(0);
      $backX_leftHotspot_topHotspot_topX$$.$setMouseEnabled$(!1);
      $arrowBackX_arrowTopX_leftArrow_upArrow$$ = new dvt.Image($context$$415$$, $arrowBackResource_arrowTopResource$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$, $arrowBackY_arrowTopY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "lhs_arr");
      $arrowBackX_arrowTopX_leftArrow_upArrow$$.$hotspot$ = "left";
      $backX_leftHotspot_topHotspot_topX$$.$addChild$($arrowBackX_arrowTopX_leftArrow_upArrow$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$ = new dvt.Rect($context$$415$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$, $bottomY$$2_forwardY$$, $hotspotWidth$$, $hotspotHeight$$, "rhs");
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setCornerRadius$($hotspotBorderRadius$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$hotspot$ = "right";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setAlpha$(0);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setMouseEnabled$(!1);
      $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$ = new dvt.Image($context$$415$$, $arrowBottomResource_arrowForwardResource$$, $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$, $arrowBottomY_arrowForwardY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "rhs_arr");
      $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$.$hotspot$ = "right";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$addChild$($arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$);
      $scrollHotspots$$.$addChild$($backX_leftHotspot_topHotspot_topX$$);
      $timeline$$10$$.$_scrollHotspots$.push($backX_leftHotspot_topHotspot_topX$$);
      $scrollHotspots$$.$addChild$($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$10$$.$_scrollHotspots$.push($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$10$$.$isVertical$() ? ($arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$ = $isRTL$$49$$ ? Math.abs($i$$674$$ - 1) : $i$$674$$, $backX_leftHotspot_topHotspot_topX$$ = $timeline$$10$$.$_startX$ + $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$ * ($timeline$$10$$.$_seriesSize$ + $axisSize$$7$$) + $hotspotPadding$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $timeline$$10$$.$_startX$ + ($arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$ + 1) * $timeline$$10$$.$_seriesSize$ + 
      $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$ * $axisSize$$7$$ - $hotspotWidth$$ - $hotspotPadding$$, $bottomY$$2_forwardY$$ = $backY_topY$$1$$ = $timeline$$10$$.$_startY$ + ($timeline$$10$$.$_canvasLength$ - $hotspotHeight$$) / 2, $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$ = $bottomHotspot_bottomX_forwardX_rightHotspot$$ + $hotspotArrowWidth$$ / 2, $arrowBottomY_arrowForwardY$$ = 
      $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$10$$.$_resources$.scrollLeft, $arrowBottomResource_arrowForwardResource$$ = $timeline$$10$$.$_resources$.scrollRight) : ($bottomHotspot_bottomX_forwardX_rightHotspot$$ = $backX_leftHotspot_topHotspot_topX$$ = $timeline$$10$$.$_startX$ + ($timeline$$10$$.$_canvasLength$ - $hotspotWidth$$) / 2, $backY_topY$$1$$ = $timeline$$10$$.$_startY$ + $i$$674$$ * ($timeline$$10$$.$_seriesSize$ + 
      $axisSize$$7$$) + $hotspotPadding$$, $bottomY$$2_forwardY$$ = $timeline$$10$$.$_startY$ + ($i$$674$$ + 1) * $timeline$$10$$.$_seriesSize$ + $i$$674$$ * $axisSize$$7$$ - $hotspotHeight$$ - $hotspotPadding$$, $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$ = $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $bottomY$$2_forwardY$$ + 
      $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$10$$.$_resources$.scrollUp, $arrowBottomResource_arrowForwardResource$$ = $timeline$$10$$.$_resources$.scrollDown);
      $backX_leftHotspot_topHotspot_topX$$ = new dvt.Rect($context$$415$$, $backX_leftHotspot_topHotspot_topX$$, $backY_topY$$1$$, $hotspotWidth$$, $hotspotHeight$$, "ths");
      $backX_leftHotspot_topHotspot_topX$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $backX_leftHotspot_topHotspot_topX$$.$setCornerRadius$($hotspotBorderRadius$$);
      $backX_leftHotspot_topHotspot_topX$$.$hotspot$ = "top";
      $backX_leftHotspot_topHotspot_topX$$.$setAlpha$(0);
      $backX_leftHotspot_topHotspot_topX$$.$setMouseEnabled$(!1);
      $arrowBackX_arrowTopX_leftArrow_upArrow$$ = new dvt.Image($context$$415$$, $arrowBackResource_arrowTopResource$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$, $arrowBackY_arrowTopY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "ths_arr");
      $arrowBackX_arrowTopX_leftArrow_upArrow$$.$hotspot$ = "top";
      $backX_leftHotspot_topHotspot_topX$$.$addChild$($arrowBackX_arrowTopX_leftArrow_upArrow$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$ = new dvt.Rect($context$$415$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$, $bottomY$$2_forwardY$$, $hotspotWidth$$, $hotspotHeight$$, "bhs");
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setCornerRadius$($hotspotBorderRadius$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$hotspot$ = "bottom";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setAlpha$(0);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setMouseEnabled$(!1);
      $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$ = new dvt.Image($context$$415$$, $arrowBottomResource_arrowForwardResource$$, $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$, $arrowBottomY_arrowForwardY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "bhs_arr");
      $arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$.$hotspot$ = "bottom";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$addChild$($arrowBottomX_arrowForwardX_downArrow_key$$77_rightArrow$$);
      $scrollHotspots$$.$addChild$($backX_leftHotspot_topHotspot_topX$$);
      $timeline$$10$$.$_scrollHotspots$.push($backX_leftHotspot_topHotspot_topX$$);
      $scrollHotspots$$.$addChild$($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$10$$.$_scrollHotspots$.push($bottomHotspot_bottomX_forwardX_rightHotspot$$);
    }
  }
};
$DvtTimelineRenderer$$.$_renderZoomControls$ = function $$DvtTimelineRenderer$$$$_renderZoomControls$$($timeline$$11$$) {
  var $context$$416_xOffset$$7$$ = $timeline$$11$$.$getCtx$(), $contentLength_isRTL$$50_transX$$6_yOffset$$9$$ = dvt.$Agent$.$isRightToLeft$($context$$416_xOffset$$7$$), $timeAxis$$5$$ = $timeline$$11$$.$_timeAxis$, $resources$$4$$ = $timeline$$11$$.$_resources$, $enabledBackgroundColor_upState$$17$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonBackgroundColor$($resources$$4$$), $enabledBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonBorderColor$($resources$$4$$), $hoverBackgroundColor_overState$$14$$ = 
  $DvtTimelineStyleUtils$$.$getZoomInButtonHoverBackgroundColor$($resources$$4$$), $hoverBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonHoverBorderColor$($resources$$4$$), $activeBackgroundColor_downState$$14$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonActiveBackgroundColor$($resources$$4$$), $activeBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonActiveBorderColor$($resources$$4$$), $disabledBackgroundColor_disabledState$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonDisabledBackgroundColor$($resources$$4$$), 
  $disabledBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomInButtonDisabledBorderColor$($resources$$4$$), $enabledBackgroundColor_upState$$17$$ = dvt.$TransientButton$.$getStateFromURL$($context$$416_xOffset$$7$$, $resources$$4$$.zoomIn, $enabledBackgroundColor_upState$$17$$, $enabledBorderColor$$), $hoverBackgroundColor_overState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($context$$416_xOffset$$7$$, $resources$$4$$.zoomIn_h, $hoverBackgroundColor_overState$$14$$, $hoverBorderColor$$), $activeBackgroundColor_downState$$14$$ = 
  dvt.$TransientButton$.$getStateFromURL$($context$$416_xOffset$$7$$, $resources$$4$$.zoomIn_a, $activeBackgroundColor_downState$$14$$, $activeBorderColor$$), $disabledBackgroundColor_disabledState$$ = dvt.$TransientButton$.$getStateFromURL$($context$$416_xOffset$$7$$, $resources$$4$$.zoomIn_d, $disabledBackgroundColor_disabledState$$, $disabledBorderColor$$);
  null == $timeline$$11$$.$zoomin$ ? ($timeline$$11$$.$zoomin$ = new dvt.$TransientButton$($context$$416_xOffset$$7$$, $enabledBackgroundColor_upState$$17$$, $hoverBackgroundColor_overState$$14$$, $activeBackgroundColor_downState$$14$$, $disabledBackgroundColor_disabledState$$, $timeline$$11$$.$EventManager$, $timeline$$11$$.$EventManager$.$HandleZoomInClick$), $timeline$$11$$.$EventManager$.$associate$($timeline$$11$$.$zoomin$, $timeline$$11$$.$zoomin$)) : ($timeline$$11$$.$zoomin$.$setUpState$($enabledBackgroundColor_upState$$17$$), 
  $timeline$$11$$.$zoomin$.$setOverState$($hoverBackgroundColor_overState$$14$$), $timeline$$11$$.$zoomin$.$setDownState$($activeBackgroundColor_downState$$14$$), $timeline$$11$$.$zoomin$.$setDisabledState$($disabledBackgroundColor_disabledState$$));
  $enabledBackgroundColor_upState$$17$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonBackgroundColor$($resources$$4$$);
  $enabledBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonBorderColor$($resources$$4$$);
  $hoverBackgroundColor_overState$$14$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonHoverBackgroundColor$($resources$$4$$);
  $hoverBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonHoverBorderColor$($resources$$4$$);
  $activeBackgroundColor_downState$$14$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonActiveBackgroundColor$($resources$$4$$);
  $activeBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonActiveBorderColor$($resources$$4$$);
  $disabledBackgroundColor_disabledState$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonDisabledBackgroundColor$($resources$$4$$);
  $disabledBorderColor$$ = $DvtTimelineStyleUtils$$.$getZoomOutButtonDisabledBorderColor$($resources$$4$$);
  $enabledBackgroundColor_upState$$17$$ = dvt.$TransientButton$.$getStateFromURL$($context$$416_xOffset$$7$$, $resources$$4$$.zoomOut, $enabledBackgroundColor_upState$$17$$, $enabledBorderColor$$);
  $hoverBackgroundColor_overState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($context$$416_xOffset$$7$$, $resources$$4$$.zoomOut_h, $hoverBackgroundColor_overState$$14$$, $hoverBorderColor$$);
  $activeBackgroundColor_downState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($context$$416_xOffset$$7$$, $resources$$4$$.zoomOut_a, $activeBackgroundColor_downState$$14$$, $activeBorderColor$$);
  $disabledBackgroundColor_disabledState$$ = dvt.$TransientButton$.$getStateFromURL$($context$$416_xOffset$$7$$, $resources$$4$$.zoomOut_d, $disabledBackgroundColor_disabledState$$, $disabledBorderColor$$);
  null == $timeline$$11$$.$zoomout$ ? ($timeline$$11$$.$zoomout$ = new dvt.$TransientButton$($context$$416_xOffset$$7$$, $enabledBackgroundColor_upState$$17$$, $hoverBackgroundColor_overState$$14$$, $activeBackgroundColor_downState$$14$$, $disabledBackgroundColor_disabledState$$, $timeline$$11$$.$EventManager$, $timeline$$11$$.$EventManager$.$HandleZoomOutClick$), $timeline$$11$$.$EventManager$.$associate$($timeline$$11$$.$zoomout$, $timeline$$11$$.$zoomout$)) : ($timeline$$11$$.$zoomout$.$setUpState$($enabledBackgroundColor_upState$$17$$), 
  $timeline$$11$$.$zoomout$.$setOverState$($hoverBackgroundColor_overState$$14$$), $timeline$$11$$.$zoomout$.$setDownState$($activeBackgroundColor_downState$$14$$), $timeline$$11$$.$zoomout$.$setDisabledState$($disabledBackgroundColor_disabledState$$));
  $timeline$$11$$.$zoomin$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_IN", null));
  $timeline$$11$$.$zoomout$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_OUT", null));
  $timeline$$11$$.$zoomin$.$hide$();
  $timeline$$11$$.$zoomout$.$hide$();
  dvt.$TimeAxis$.$supportsTouch$() && (dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$11$$.$zoomin$.$getElem$(), "role", "button"), dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$11$$.$zoomin$.$getElem$(), "aria-label", dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_IN", null)), dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$11$$.$zoomout$.$getElem$(), "role", "button"), dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$11$$.$zoomout$.$getElem$(), "aria-label", dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "ZOOM_OUT", null)));
  $context$$416_xOffset$$7$$ = $timeline$$11$$.$_startX$ + $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_PADDING$;
  $contentLength_isRTL$$50_transX$$6_yOffset$$9$$ = $contentLength_isRTL$$50_transX$$6_yOffset$$9$$ ? $timeline$$11$$.$_backgroundWidth$ - $context$$416_xOffset$$7$$ - $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_DIAMETER$ : $context$$416_xOffset$$7$$;
  $timeline$$11$$.$zoomin$.$setTranslateX$($contentLength_isRTL$$50_transX$$6_yOffset$$9$$);
  $timeline$$11$$.$zoomout$.$setTranslateX$($contentLength_isRTL$$50_transX$$6_yOffset$$9$$);
  $contentLength_isRTL$$50_transX$$6_yOffset$$9$$ = $timeline$$11$$.$_startY$ + $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_PADDING$;
  $timeline$$11$$.$zoomin$.$setTranslateY$($contentLength_isRTL$$50_transX$$6_yOffset$$9$$);
  $timeline$$11$$.$zoomout$.$setTranslateY$($contentLength_isRTL$$50_transX$$6_yOffset$$9$$ + $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_DIAMETER$ + $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_SPACING$);
  $timeline$$11$$.$zoomin$.getParent() != $timeline$$11$$.$_canvas$ && $timeline$$11$$.$_canvas$.$addChild$($timeline$$11$$.$zoomin$);
  $timeline$$11$$.$zoomout$.getParent() != $timeline$$11$$.$_canvas$ && $timeline$$11$$.$_canvas$.$addChild$($timeline$$11$$.$zoomout$);
  $contentLength_isRTL$$50_transX$$6_yOffset$$9$$ = $timeline$$11$$.$_contentLength$;
  $contentLength_isRTL$$50_transX$$6_yOffset$$9$$ >= $timeAxis$$5$$.$_maxContentLength$ && $timeline$$11$$.$disableZoomButton$(!0);
  $timeline$$11$$.$_canvasLength$ >= $contentLength_isRTL$$50_transX$$6_yOffset$$9$$ && $timeline$$11$$.$disableZoomButton$(!1);
};
$DvtTimelineRenderer$$.$_renderEmptyText$ = function $$DvtTimelineRenderer$$$$_renderEmptyText$$($timeline$$12$$) {
  var $emptyTextStr$$4$$ = $timeline$$12$$.$Options$.series ? dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "INVALID_DATA", null) : dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA", null);
  $timeline$$12$$.$_canvas$ && $timeline$$12$$.$_canvas$.$removeChildren$();
  $JSCompiler_StaticMethods_clearOverview$$($timeline$$12$$);
  dvt.$TextUtils$.$renderEmptyText$($timeline$$12$$.$_canvas$, $emptyTextStr$$4$$, new dvt.$Rectangle$(0, 0, $timeline$$12$$.$_backgroundWidth$, $timeline$$12$$.$_backgroundHeight$), $timeline$$12$$.$EventManager$, $DvtTimelineStyleUtils$$.$getEmptyTextStyle$($timeline$$12$$.$Options$));
};
$DvtTimelineRenderer$$.$_addLabel$ = function $$DvtTimelineRenderer$$$$_addLabel$$($backgroundRect$$2_context$$417$$, $container$$186$$, $pos$$71$$, $label$$107_text$$80$$, $maxLength$$3$$, $y$$189$$, $labelStyle$$22$$, $id$$214$$, $labelList$$, $isRTL$$51$$) {
  var $labelPadding$$ = $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$();
  $label$$107_text$$80$$ = new dvt.$OutputText$($backgroundRect$$2_context$$417$$, $label$$107_text$$80$$, $pos$$71$$, 0, $id$$214$$);
  null != $labelStyle$$22$$ && $label$$107_text$$80$$.$setCSSStyle$($labelStyle$$22$$);
  $container$$186$$.$addChild$($label$$107_text$$80$$);
  var $dim$$77$$ = $label$$107_text$$80$$.$getDimensions$();
  $container$$186$$.removeChild($label$$107_text$$80$$);
  $y$$189$$ -= $dim$$77$$.$h$;
  $label$$107_text$$80$$.$setY$($y$$189$$);
  $isRTL$$51$$ && $label$$107_text$$80$$.$setX$($pos$$71$$ - $dim$$77$$.$w$);
  var $width$$140$$ = Math.min($dim$$77$$.$w$ + 2 * $labelPadding$$, $maxLength$$3$$);
  $backgroundRect$$2_context$$417$$ = new dvt.Rect($backgroundRect$$2_context$$417$$, ($isRTL$$51$$ ? $pos$$71$$ - $width$$140$$ + 2 * $labelPadding$$ : $pos$$71$$) - $labelPadding$$, $y$$189$$ - $labelPadding$$, $width$$140$$, $dim$$77$$.$h$ + 2 * $labelPadding$$, "ob_" + $id$$214$$);
  $backgroundRect$$2_context$$417$$.$setCSSStyle$($labelStyle$$22$$);
  $backgroundRect$$2_context$$417$$.$setCornerRadius$(3);
  $container$$186$$.$addChild$($backgroundRect$$2_context$$417$$);
  $labelList$$ && $labelList$$.push($backgroundRect$$2_context$$417$$);
  dvt.$TextUtils$.$fitText$($label$$107_text$$80$$, $maxLength$$3$$, Infinity, $container$$186$$);
  $labelList$$ && $labelList$$.push($label$$107_text$$80$$);
  return $label$$107_text$$80$$;
};
var $DvtTimelineStyleUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineStyleUtils$$, dvt.$Obj$);
$DvtTimelineStyleUtils$$.$_DEFAULT_TIMELINE_STYLE$ = "border:1px #d9dfe3;background-color:#f9f9f9;";
$DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_STYLE$ = "background-color:#f9f9f9;border:1px #d9dfe3;";
$DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_SEPARATOR_STYLE$ = "color:#bcc7d2;";
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_STYLE$ = "background-color:#f9f9f9;";
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_SPACING$ = 20;
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_PADDING$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_SEPARATOR_STYLE$ = "color:#bcc7d2";
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_LABEL_PADDING$ = 1;
$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_WIDTH$ = 60;
$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HEIGHT$ = 100;
$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HANDLE_TEXTURE_COLOR$ = "#B3C6DB";
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BACKGROUND_COLOR$ = "#000000";
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BORDER_RADIUS$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_OPACITY$ = .6;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_WIDTH$ = 28;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_HEIGHT$ = 28;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_PADDING$ = 3;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_WIDTH$ = 14;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_HEIGHT$ = 14;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ANIMATION_DURATION$ = .3;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_STROKE_WIDTH$ = 1;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_HOVER_STROKE_WIDTH$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_SELECTED_STROKE_WIDTH$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_FILL_COLOR$ = "rgba(249,249,249,0)";
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ACTIVE_INNER_STROKE_COLOR$ = "#e4f0fa";
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_INNER_STROKE_COLOR$ = "rgba(249,249,249,0)";
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_STROKE_WIDTH$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_OFFSET$ = 20;
$DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_SPACING$ = 15;
$DvtTimelineStyleUtils$$.$_DEFAULT_DURATION_FEELER_OFFSET$ = 10;
$DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_WIDTH$ = 32;
$DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_HEIGHT$ = 32;
$DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$ = "#ffffff";
$DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$ = "#d6d7d8";
$DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_DIAMETER$ = 31;
$DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_PADDING$ = 10.5;
$DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_SPACING$ = 9;
$DvtTimelineStyleUtils$$.$getItemDescriptionStyle$ = function $$DvtTimelineStyleUtils$$$$getItemDescriptionStyle$$($cssStyle$$34_item$$58_style$$110$$) {
  var $descriptionStyle$$ = $cssStyle$$34_item$$58_style$$110$$.$_series$.$getOptions$().styleDefaults.item.descriptionStyle;
  if ($cssStyle$$34_item$$58_style$$110$$ = $cssStyle$$34_item$$58_style$$110$$.$getStyle$()) {
    $cssStyle$$34_item$$58_style$$110$$ = new dvt.$CSSStyle$($cssStyle$$34_item$$58_style$$110$$), $descriptionStyle$$.$parseInlineStyle$($cssStyle$$34_item$$58_style$$110$$);
  }
  return $descriptionStyle$$;
};
$DvtTimelineStyleUtils$$.$getItemTitleStyle$ = function $$DvtTimelineStyleUtils$$$$getItemTitleStyle$$($cssStyle$$35_item$$59_style$$111$$) {
  var $titleStyle$$4$$ = $cssStyle$$35_item$$59_style$$111$$.$_series$.$getOptions$().styleDefaults.item.titleStyle;
  if ($cssStyle$$35_item$$59_style$$111$$ = $cssStyle$$35_item$$59_style$$111$$.$getStyle$()) {
    $cssStyle$$35_item$$59_style$$111$$ = new dvt.$CSSStyle$($cssStyle$$35_item$$59_style$$111$$), $titleStyle$$4$$.$parseInlineStyle$($cssStyle$$35_item$$59_style$$111$$);
  }
  return $titleStyle$$4$$;
};
$DvtTimelineStyleUtils$$.$getReferenceObjectColor$ = function $$DvtTimelineStyleUtils$$$$getReferenceObjectColor$$($options$$298$$) {
  return $options$$298$$.styleDefaults.referenceObject.color;
};
$DvtTimelineStyleUtils$$.$getSeriesLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelStyle$$($options$$299$$) {
  return $options$$299$$.styleDefaults.series.labelStyle;
};
$DvtTimelineStyleUtils$$.$getSeriesLabelPadding$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelPadding$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_PADDING$;
};
$DvtTimelineStyleUtils$$.$getSeriesLabelSpacing$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelSpacing$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_SPACING$;
};
$DvtTimelineStyleUtils$$.$getEmptyTextStyle$ = function $$DvtTimelineStyleUtils$$$$getEmptyTextStyle$$($options$$300$$) {
  return $options$$300$$.styleDefaults.series.emptyTextStyle;
};
$DvtTimelineStyleUtils$$.$getBubbleOffset$ = function $$DvtTimelineStyleUtils$$$$getBubbleOffset$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_OFFSET$;
};
$DvtTimelineStyleUtils$$.$getBubbleSpacing$ = function $$DvtTimelineStyleUtils$$$$getBubbleSpacing$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_SPACING$;
};
$DvtTimelineStyleUtils$$.$getItemFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemFillColor$$($item$$60$$) {
  var $fillColor$$8_style$$112$$ = $item$$60$$.$getStyle$();
  return $fillColor$$8_style$$112$$ && ($fillColor$$8_style$$112$$ = (new dvt.$CSSStyle$($fillColor$$8_style$$112$$)).$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$)) ? $fillColor$$8_style$$112$$ : $item$$60$$.$_series$.$getOptions$().styleDefaults.item.backgroundColor;
};
$DvtTimelineStyleUtils$$.$getItemStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemStrokeColor$$($item$$61$$) {
  var $strokeColor$$7_style$$113$$ = $item$$61$$.$getStyle$();
  return $strokeColor$$7_style$$113$$ && ($strokeColor$$7_style$$113$$ = (new dvt.$CSSStyle$($strokeColor$$7_style$$113$$)).$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$)) ? $strokeColor$$7_style$$113$$ : $item$$61$$.$_series$.$getOptions$().styleDefaults.item.borderColor;
};
$DvtTimelineStyleUtils$$.$getItemStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_STROKE_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getItemHoverFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemHoverFillColor$$($item$$62$$) {
  var $hoverDefault$$ = $item$$62$$.$_series$.$getOptions$().styleDefaults.item.hoverBackgroundColor;
  return $hoverDefault$$ ? $hoverDefault$$ : $DvtTimelineStyleUtils$$.$getItemFillColor$($item$$62$$);
};
$DvtTimelineStyleUtils$$.$getItemHoverStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemHoverStrokeColor$$($item$$63$$) {
  var $hoverDefault$$1$$ = $item$$63$$.$_series$.$getOptions$().styleDefaults.item.hoverBorderColor;
  return $hoverDefault$$1$$ ? $hoverDefault$$1$$ : $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$63$$);
};
$DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemHoverStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_HOVER_STROKE_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getItemSelectedFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedFillColor$$($item$$64$$) {
  var $selectedDefault$$ = $item$$64$$.$_series$.$getOptions$().styleDefaults.item.selectedBackgroundColor;
  return $selectedDefault$$ ? $selectedDefault$$ : $DvtTimelineStyleUtils$$.$getItemFillColor$($item$$64$$);
};
$DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedStrokeColor$$($item$$65$$) {
  var $selectedDefault$$1$$ = $item$$65$$.$_series$.$getOptions$().styleDefaults.item.selectedBorderColor;
  return $selectedDefault$$1$$ ? $selectedDefault$$1$$ : $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$65$$);
};
$DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_SELECTED_STROKE_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getSeriesStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_STYLE$;
};
$DvtTimelineStyleUtils$$.$getColorsArray$ = function $$DvtTimelineStyleUtils$$$$getColorsArray$$($options$$307$$) {
  return $options$$307$$.styleDefaults.series.colors;
};
$DvtTimelineStyleUtils$$.$getDurationFeelerOffset$ = function $$DvtTimelineStyleUtils$$$$getDurationFeelerOffset$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_DURATION_FEELER_OFFSET$;
};
$DvtTimelineStyleUtils$$.$getThumbnailWidth$ = function $$DvtTimelineStyleUtils$$$$getThumbnailWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getThumbnailHeight$ = function $$DvtTimelineStyleUtils$$$$getThumbnailHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_HEIGHT$;
};
$DvtTimelineStyleUtils$$.$getSeriesAxisSeparatorStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisSeparatorStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_SEPARATOR_STYLE$;
};
$DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerActiveStrokeColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ACTIVE_INNER_STROKE_COLOR$;
};
$DvtTimelineStyleUtils$$.$getItemInnerFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerFillColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_FILL_COLOR$;
};
$DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerStrokeColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_INNER_STROKE_COLOR$;
};
$DvtTimelineStyleUtils$$.$getItemInnerStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemInnerStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_STROKE_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$ = function $$DvtTimelineStyleUtils$$$$getHotspotAnimationDuration$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ANIMATION_DURATION$;
};
$DvtTimelineStyleUtils$$.$getHotspotOpacity$ = function $$DvtTimelineStyleUtils$$$$getHotspotOpacity$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_OPACITY$;
};
$DvtTimelineStyleUtils$$.$getTimelineStyle$ = function $$DvtTimelineStyleUtils$$$$getTimelineStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_TIMELINE_STYLE$;
};
$DvtTimelineStyleUtils$$.$getOverviewWidth$ = function $$DvtTimelineStyleUtils$$$$getOverviewWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getOverviewHeight$ = function $$DvtTimelineStyleUtils$$$$getOverviewHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HEIGHT$;
};
$DvtTimelineStyleUtils$$.$getOverviewWindowBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewWindowBackgroundColor$$($options$$308$$) {
  return $options$$308$$.styleDefaults.overview.window.backgroundColor;
};
$DvtTimelineStyleUtils$$.$getOverviewWindowBorderColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewWindowBorderColor$$($options$$309$$) {
  return $options$$309$$.styleDefaults.overview.window.borderColor;
};
$DvtTimelineStyleUtils$$.$getOverviewBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewBackgroundColor$$($options$$310$$) {
  return $options$$310$$.styleDefaults.overview.backgroundColor;
};
$DvtTimelineStyleUtils$$.$getOverviewLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getOverviewLabelStyle$$($options$$311$$) {
  return $options$$311$$.styleDefaults.overview.labelStyle;
};
$DvtTimelineStyleUtils$$.$getOverviewHandleTextureColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewHandleTextureColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HANDLE_TEXTURE_COLOR$;
};
$DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisLabelStyle$$($options$$312$$) {
  return $options$$312$$.styleDefaults.majorAxis.labelStyle;
};
$DvtTimelineStyleUtils$$.$getAxisSeparatorStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisSeparatorStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_SEPARATOR_STYLE$;
};
$DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisLabelPadding$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_LABEL_PADDING$;
};
$DvtTimelineStyleUtils$$.$getHotspotPadding$ = function $$DvtTimelineStyleUtils$$$$getHotspotPadding$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_PADDING$;
};
$DvtTimelineStyleUtils$$.$getHotspotWidth$ = function $$DvtTimelineStyleUtils$$$$getHotspotWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getHotspotHeight$ = function $$DvtTimelineStyleUtils$$$$getHotspotHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_HEIGHT$;
};
$DvtTimelineStyleUtils$$.$getHotspotArrowWidth$ = function $$DvtTimelineStyleUtils$$$$getHotspotArrowWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_WIDTH$;
};
$DvtTimelineStyleUtils$$.$getHotspotArrowHeight$ = function $$DvtTimelineStyleUtils$$$$getHotspotArrowHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_HEIGHT$;
};
$DvtTimelineStyleUtils$$.$getHotspotBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getHotspotBackgroundColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getHotspotBorderRadius$ = function $$DvtTimelineStyleUtils$$$$getHotspotBorderRadius$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BORDER_RADIUS$;
};
$DvtTimelineStyleUtils$$.$getAnimationDuration$ = function $$DvtTimelineStyleUtils$$$$getAnimationDuration$$($options$$313$$) {
  return dvt.$StyleUtils$.$getTimeMilliseconds$($options$$313$$.styleDefaults.animationDuration) / 1E3;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonBackgroundColor$$($options$$314$$) {
  return $options$$314$$.zoomIn_bgc ? $options$$314$$.zoomIn_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonActiveBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonActiveBackgroundColor$$($options$$315$$) {
  return $options$$315$$.zoomIn_a_bgc ? $options$$315$$.zoomIn_a_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonHoverBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonHoverBackgroundColor$$($options$$316$$) {
  return $options$$316$$.zoomIn_h_bgc ? $options$$316$$.zoomIn_h_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonDisabledBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonDisabledBackgroundColor$$($options$$317$$) {
  return $options$$317$$.zoomIn_d_bgc ? $options$$317$$.zoomIn_d_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonBorderColor$$($options$$318$$) {
  return $options$$318$$.zoomIn_bc ? $options$$318$$.zoomIn_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonActiveBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonActiveBorderColor$$($options$$319$$) {
  return $options$$319$$.zoomIn_a_bc ? $options$$319$$.zoomIn_a_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonHoverBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonHoverBorderColor$$($options$$320$$) {
  return $options$$320$$.zoomIn_h_bc ? $options$$320$$.zoomIn_h_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomInButtonDisabledBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomInButtonDisabledBorderColor$$($options$$321$$) {
  return $options$$321$$.zoomIn_d_bc ? $options$$321$$.zoomIn_d_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonBackgroundColor$$($options$$322$$) {
  return $options$$322$$.zoomOut_bgc ? $options$$322$$.zoomOut_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonActiveBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonActiveBackgroundColor$$($options$$323$$) {
  return $options$$323$$.zoomOut_a_bgc ? $options$$323$$.zoomOut_a_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonHoverBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonHoverBackgroundColor$$($options$$324$$) {
  return $options$$324$$.zoomOut_h_bgc ? $options$$324$$.zoomOut_h_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonDisabledBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonDisabledBackgroundColor$$($options$$325$$) {
  return $options$$325$$.zoomOut_d_bgc ? $options$$325$$.zoomOut_d_bgc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BACKGROUND_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonBorderColor$$($options$$326$$) {
  return $options$$326$$.zoomOut_bc ? $options$$326$$.zoomOut_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonActiveBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonActiveBorderColor$$($options$$327$$) {
  return $options$$327$$.zoomOut_a_bc ? $options$$327$$.zoomOut_a_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonHoverBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonHoverBorderColor$$($options$$328$$) {
  return $options$$328$$.zoomOut_h_bc ? $options$$328$$.zoomOut_h_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
$DvtTimelineStyleUtils$$.$getZoomOutButtonDisabledBorderColor$ = function $$DvtTimelineStyleUtils$$$$getZoomOutButtonDisabledBorderColor$$($options$$329$$) {
  return $options$$329$$.zoomOut_d_bc ? $options$$329$$.zoomOut_d_bc : $DvtTimelineStyleUtils$$.$_DEFAULT_ZOOM_CONTROL_BORDER_COLOR$;
};
function $DvtTimelineSeries$$($context$$418$$, $callback$$174$$, $callbackObj$$95$$) {
  this.Init($context$$418$$, $callback$$174$$, $callbackObj$$95$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeries$$, dvt.$BaseComponent$);
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeries$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$419$$, $callback$$175$$, $callbackObj$$96$$) {
  $DvtTimelineSeries$$.$superclass$.Init.call(this, $context$$419$$);
  this.$_callback$ = $callback$$175$$;
  this.$_callbackObj$ = $callbackObj$$96$$;
  this.$_blocks$ = [];
  this.$_renderedReferenceObjects$ = [];
  this.$_seriesTicksArray$ = [];
};
$JSCompiler_prototypeAlias$$.$_onRmAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onRmAnimationEnd$$() {
  for (var $i$$675$$ = 0;$i$$675$$ < this.$_rmAnimationElems$.length;$i$$675$$++) {
    var $elem$$8$$ = this.$_rmAnimationElems$[$i$$675$$], $parent$$79$$ = $elem$$8$$.getParent();
    $parent$$79$$ && $parent$$79$$.removeChild($elem$$8$$);
  }
  this.$_mvAnimator$ && this.$_hasMvAnimations$ ? (this.$_mvAnimator$.play(), dvt.$Playable$.$appendOnEnd$(this.$_mvAnimator$, this.$_onMvAnimationEnd$, this)) : this.$_onMvAnimationEnd$();
};
$JSCompiler_prototypeAlias$$.$_onMvAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMvAnimationEnd$$() {
  if (this.$_frAnimationElems$ && 0 != this.$_frAnimationElems$.length) {
    var $fadeInAnimator$$1$$ = new dvt.$ParallelPlayable$(this.$getCtx$(), new dvt.$AnimFadeIn$(this.$getCtx$(), this.$_frAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$(this.$Options$), 0));
    $fadeInAnimator$$1$$.play();
    dvt.$Playable$.$appendOnEnd$($fadeInAnimator$$1$$, this.$_onAnimationEnd$, this);
  } else {
    this.$_onAnimationEnd$();
  }
};
$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_isAnimating$ = !1;
  dvt.$Agent$.$isEnvironmentBrowser$() && $JSCompiler_StaticMethods_showThenHideHotspots$$(this.$_callbackObj$);
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$330_orientation$$5_props$$9$$, $desc$$28_width$$141$$, $height$$118$$) {
  if ($options$$330_orientation$$5_props$$9$$) {
    if (this.$SetOptions$($options$$330_orientation$$5_props$$9$$), this.$_isInitialRender$ = this.$Width$ ? !1 : !0, this.$Width$ = $desc$$28_width$$141$$, this.$Height$ = $height$$118$$, ($options$$330_orientation$$5_props$$9$$ = this.$Options$.orientation) && $options$$330_orientation$$5_props$$9$$ == dvt.$Timeline$.$ORIENTATION_VERTICAL$ ? (this.$_allowUpdates$ = 0 == this.$_isVertical$ ? !1 : !0, this.$_isVertical$ = !0) : (this.$_allowUpdates$ = this.$_isVertical$ ? !1 : !0, this.$_isVertical$ = 
    !1), this.$Options$ && ($options$$330_orientation$$5_props$$9$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($options$$330_orientation$$5_props$$9$$)), this.$_fetchStartPos$ = 0, this.$_isVertical$ ? (this.$_fetchEndPos$ = $height$$118$$, this.$_maxOverflowValue$ = $desc$$28_width$$141$$, this.$_length$ = $height$$118$$, this.$_size$ = $desc$$28_width$$141$$) : (this.$_fetchEndPos$ = $desc$$28_width$$141$$, this.$_maxOverflowValue$ = $height$$118$$, this.$_length$ = $desc$$28_width$$141$$, 
    this.$_size$ = $height$$118$$), this.$_isInverted$ = this.$Options$.inverted, this.$_maxDurationSize$ = this.$_colorCount$ = 0, $DvtTimelineSeriesRenderer$$.$renderSeries$(this, $desc$$28_width$$141$$, $height$$118$$), dvt.$TimeAxis$.$supportsTouch$() && 0 < this.$_items$.length && this.$_setAriaProperty$("flowto", "_bt_" + this.$_items$[0].getId()), $desc$$28_width$$141$$ = this.$GetComponentDescription$()) {
      dvt.$ToolkitUtils$.$setAttrNullNS$(this.$getElem$(), "role", "group"), dvt.$ToolkitUtils$.$setAttrNullNS$(this.$getElem$(), "aria-label", dvt.$StringUtils$.$processAriaLabel$($desc$$28_width$$141$$));
    }
  } else {
    this.$_handleResize$($desc$$28_width$$141$$, $height$$118$$);
  }
};
$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  var $seriesDescArray$$ = [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "TIMELINE_SERIES")];
  this.$_label$ ? $seriesDescArray$$.push(this.$_label$) : $seriesDescArray$$.push(this.$Options$.index + 1);
  return dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", $seriesDescArray$$);
};
$JSCompiler_prototypeAlias$$.$_handleResize$ = function $$JSCompiler_prototypeAlias$$$$_handleResize$$($width$$142$$, $height$$119$$) {
  this.$_canvas$.$setTranslateY$(0);
  this.$_canvas$.$setTranslateX$(0);
  this.$Width$ = $width$$142$$;
  this.$Height$ = $height$$119$$;
  this.$_fetchStartPos$ = 0;
  this.$_isVertical$ ? (this.$_fetchEndPos$ = $height$$119$$, this.$_maxOverflowValue$ = $width$$142$$, this.$_length$ = $height$$119$$, this.$_size$ = $width$$142$$) : (this.$_fetchEndPos$ = $width$$142$$, this.$_maxOverflowValue$ = $height$$119$$, this.$_length$ = $width$$142$$, this.$_size$ = $height$$119$$);
  this.$_background$.$setWidth$($width$$142$$);
  this.$_background$.$setHeight$($height$$119$$);
  $DvtTimelineSeriesRenderer$$.$updateSeriesForZoom$(this);
};
$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getSeriesStyle$());
  this.$_seriesStyleDefaults$ = this.$Options$.seriesStyleDefaults;
  this.$_axisStyleDefaults$ = this.$Options$.axisStyleDefaults;
  this.$_colors$ = $DvtTimelineStyleUtils$$.$getColorsArray$(this.$Options$);
  this.$_referenceObjects$ = this.$Options$.referenceObjects;
  if (this.$_seriesStyleDefaults$) {
    var $style$$114$$ = this.$_seriesStyleDefaults$.backgroundColor;
    $style$$114$$ && this.$_style$.$parseInlineStyle$("background-color:" + $style$$114$$ + ";");
  }
  this.$_style$.$parseInlineStyle$(this.$_inlineStyle$);
};
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$331$$) {
  this.$Options$ = $options$$331$$;
};
$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($options$$332$$) {
  this.$_parser$ = new $DvtTimelineSeriesParser$$;
  return this.$_parser$.parse($options$$332$$, this.$_items$);
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$10$$) {
  this.$_items$ && (this.$_oldItems$ = this.$_items$);
  this.$_isEmpty$ = (this.$_items$ = $props$$10$$.items) && 0 < this.$_items$.length ? !1 : !0;
  this.$_isIRAnimationEnabled$ = $props$$10$$.$isIRAnimationEnabled$;
  this.$_isDCAnimationEnabled$ = $props$$10$$.$isDCAnimationEnabled$;
  this.$_label$ = $props$$10$$.label;
  this.$_timeAxis$ = $props$$10$$.$timeAxis$;
  this.$_emptyText$ = $props$$10$$.$emptyText$;
  null == this.$_emptyText$ && (this.$_emptyText$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA", null));
  this.$_isTopToBottom$ = $props$$10$$.$isTopToBottom$;
  this.$_isRandomItemLayout$ = $props$$10$$.$isRandomItemLayout$;
  this.$_customTimeScales$ = $props$$10$$.$customTimeScales$;
  this.$_customFormatScales$ = $props$$10$$.$customFormatScales$;
  this.$_start$ = $props$$10$$.start;
  this.$_end$ = $props$$10$$.end;
  this.$_inlineStyle$ = $props$$10$$.$inlineStyle$;
  this.$_scale$ = $props$$10$$.scale;
  this.$_converter$ = $props$$10$$.$converter$;
  this.$applyStyleValues$();
};
function $JSCompiler_StaticMethods_calculateSpacing$$($JSCompiler_StaticMethods_calculateSpacing$self$$, $item$$66_itemHeight$$3$$, $index$$202_yChanged$$) {
  if (null != $JSCompiler_StaticMethods_calculateSpacing$self$$.$_items$ && 0 != $JSCompiler_StaticMethods_calculateSpacing$self$$.$_items$.length) {
    var $maxOverflowValue_top$$11$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$, $bottom$$11_y$$190$$ = $item$$66_itemHeight$$3$$.$_spacing$;
    if ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_isRandomItemLayout$) {
      return null == $bottom$$11_y$$190$$ && ($item$$66_itemHeight$$3$$ = $item$$66_itemHeight$$3$$.getHeight(), $bottom$$11_y$$190$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$, $maxOverflowValue_top$$11$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ - $item$$66_itemHeight$$3$$ - $bottom$$11_y$$190$$, 0 > $maxOverflowValue_top$$11$$ && ($maxOverflowValue_top$$11$$ = 0), $bottom$$11_y$$190$$ = Math.round(Math.random() * $maxOverflowValue_top$$11$$) + 
      $bottom$$11_y$$190$$, $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ < $bottom$$11_y$$190$$ + $item$$66_itemHeight$$3$$ && ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ = $bottom$$11_y$$190$$ + $item$$66_itemHeight$$3$$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$())), $bottom$$11_y$$190$$;
    }
    null == $bottom$$11_y$$190$$ && ($bottom$$11_y$$190$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$);
    if ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_isVertical$) {
      for ($i$$676$$ = 0;$i$$676$$ < $index$$202_yChanged$$;$i$$676$$++) {
        $currItem_currY$$21$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_items$[$i$$676$$], $currWidth$$ = $currItem_currY$$21$$.getWidth() + 10, $maxOverflowValue_top$$11$$ < $bottom$$11_y$$190$$ + $currWidth$$ && ($maxOverflowValue_top$$11$$ = $bottom$$11_y$$190$$ + $currWidth$$);
      }
    } else {
      for (var $j$$101_x$$217$$ = $item$$66_itemHeight$$3$$.$_loc$, $width$$143$$ = $item$$66_itemHeight$$3$$.getWidth() + 10, $hOffset$$2$$ = $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $overlappingItems$$ = [], $i$$676$$ = 0;$i$$676$$ < $index$$202_yChanged$$;$i$$676$$++) {
        var $currItem_currY$$21$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_items$[$i$$676$$], $currWidth$$ = $currItem_currY$$21$$.getWidth() + 10, $currX$$17$$ = $currItem_currY$$21$$.$_loc$;
        ($j$$101_x$$217$$ >= $currX$$17$$ && $j$$101_x$$217$$ <= $currX$$17$$ + $currWidth$$ || $currX$$17$$ >= $j$$101_x$$217$$ && $currX$$17$$ <= $j$$101_x$$217$$ + $width$$143$$) && $overlappingItems$$.push($currItem_currY$$21$$);
      }
      for ($i$$676$$ = 0;$i$$676$$ < $overlappingItems$$.length;$i$$676$$++) {
        $index$$202_yChanged$$ = !1;
        for ($j$$101_x$$217$$ = 0;$j$$101_x$$217$$ < $overlappingItems$$.length;$j$$101_x$$217$$++) {
          var $currItem_currY$$21$$ = $overlappingItems$$[$j$$101_x$$217$$], $currHeight$$ = $currItem_currY$$21$$.getHeight(), $currItem_currY$$21$$ = $currItem_currY$$21$$.$_spacing$;
          if ($bottom$$11_y$$190$$ >= $currItem_currY$$21$$ && $bottom$$11_y$$190$$ <= $currItem_currY$$21$$ + $currHeight$$) {
            $bottom$$11_y$$190$$ = $currItem_currY$$21$$ + $currHeight$$ + $hOffset$$2$$;
            $item$$66_itemHeight$$3$$.$_spacing$ = $bottom$$11_y$$190$$;
            $index$$202_yChanged$$ = !0;
            break;
          }
        }
        if (!$index$$202_yChanged$$) {
          break;
        }
      }
      $maxOverflowValue_top$$11$$ < $bottom$$11_y$$190$$ + $currHeight$$ && ($maxOverflowValue_top$$11$$ = $bottom$$11_y$$190$$ + $currHeight$$);
    }
    $maxOverflowValue_top$$11$$ > $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ && ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ = $maxOverflowValue_top$$11$$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$());
    return $bottom$$11_y$$190$$;
  }
}
$JSCompiler_prototypeAlias$$.$prepareDurations$ = function $$JSCompiler_prototypeAlias$$$$prepareDurations$$() {
  for (var $i$$678$$ = 0;$i$$678$$ < this.$_items$.length;$i$$678$$++) {
    var $node$$304$$ = this.$_items$[$i$$678$$], $JSCompiler_temp_const$$253_startTime$$21$$ = $node$$304$$.$_startTime$, $JSCompiler_inline_result$$254_endTime$$19_item$$inline_3973$$ = $node$$304$$.$_endTime$;
    if ($JSCompiler_inline_result$$254_endTime$$19_item$$inline_3973$$ && $JSCompiler_inline_result$$254_endTime$$19_item$$inline_3973$$ != $JSCompiler_temp_const$$253_startTime$$21$$) {
      $JSCompiler_temp_const$$253_startTime$$21$$ = $node$$304$$;
      a: {
        var $JSCompiler_inline_result$$254_endTime$$19_item$$inline_3973$$ = $node$$304$$, $index$$inline_3974_yChanged$$inline_3983$$ = $i$$678$$;
        if (null != this.$_items$ && 0 != this.$_items$.length) {
          var $j$$inline_3984_startTime$$inline_3975$$ = $JSCompiler_inline_result$$254_endTime$$19_item$$inline_3973$$.$_startTime$, $endTime$$inline_3976_y$$inline_3977$$ = $JSCompiler_inline_result$$254_endTime$$19_item$$inline_3973$$.$_endTime$;
          if ($endTime$$inline_3976_y$$inline_3977$$ && $endTime$$inline_3976_y$$inline_3977$$ != $j$$inline_3984_startTime$$inline_3975$$) {
            $endTime$$inline_3976_y$$inline_3977$$ = $JSCompiler_inline_result$$254_endTime$$19_item$$inline_3973$$.$_durationLevel$;
            null == $endTime$$inline_3976_y$$inline_3977$$ && ($endTime$$inline_3976_y$$inline_3977$$ = 1);
            for (var $overlappingItems$$inline_3978$$ = [], $i$$inline_3979$$ = 0;$i$$inline_3979$$ < $index$$inline_3974_yChanged$$inline_3983$$;$i$$inline_3979$$++) {
              var $currItem$$inline_3980_currY$$inline_3985$$ = this.$_items$[$i$$inline_3979$$], $currStartTime$$inline_3981$$ = $currItem$$inline_3980_currY$$inline_3985$$.$_startTime$, $currEndTime$$inline_3982$$ = $currItem$$inline_3980_currY$$inline_3985$$.$_endTime$;
              $currEndTime$$inline_3982$$ && $currEndTime$$inline_3982$$ != $currStartTime$$inline_3981$$ && $j$$inline_3984_startTime$$inline_3975$$ >= $currStartTime$$inline_3981$$ && $j$$inline_3984_startTime$$inline_3975$$ <= $currEndTime$$inline_3982$$ && $overlappingItems$$inline_3978$$.push($currItem$$inline_3980_currY$$inline_3985$$);
            }
            for ($i$$inline_3979$$ = 0;$i$$inline_3979$$ < $overlappingItems$$inline_3978$$.length;$i$$inline_3979$$++) {
              $index$$inline_3974_yChanged$$inline_3983$$ = !1;
              for ($j$$inline_3984_startTime$$inline_3975$$ = 0;$j$$inline_3984_startTime$$inline_3975$$ < $overlappingItems$$inline_3978$$.length;$j$$inline_3984_startTime$$inline_3975$$++) {
                if ($currItem$$inline_3980_currY$$inline_3985$$ = $overlappingItems$$inline_3978$$[$j$$inline_3984_startTime$$inline_3975$$], $currItem$$inline_3980_currY$$inline_3985$$ = $currItem$$inline_3980_currY$$inline_3985$$.$_durationLevel$, $endTime$$inline_3976_y$$inline_3977$$ == $currItem$$inline_3980_currY$$inline_3985$$) {
                  $endTime$$inline_3976_y$$inline_3977$$ = $currItem$$inline_3980_currY$$inline_3985$$ + 1;
                  $JSCompiler_inline_result$$254_endTime$$19_item$$inline_3973$$.$_durationLevel$ = $endTime$$inline_3976_y$$inline_3977$$;
                  $index$$inline_3974_yChanged$$inline_3983$$ = !0;
                  break;
                }
              }
              if (!$index$$inline_3974_yChanged$$inline_3983$$) {
                break;
              }
            }
            $endTime$$inline_3976_y$$inline_3977$$ > this.$_maxDurationSize$ && (this.$_maxDurationSize$ = $endTime$$inline_3976_y$$inline_3977$$);
            $JSCompiler_inline_result$$254_endTime$$19_item$$inline_3973$$ = $endTime$$inline_3976_y$$inline_3977$$;
            break a;
          }
        }
        $JSCompiler_inline_result$$254_endTime$$19_item$$inline_3973$$ = void 0;
      }
      $JSCompiler_temp_const$$253_startTime$$21$$.$_durationLevel$ = $JSCompiler_inline_result$$254_endTime$$19_item$$inline_3973$$;
      $node$$304$$.$_durationSize$ = 22 + 10 * $node$$304$$.$_durationLevel$ - 5;
      null == $node$$304$$.$_durationFillColor$ && ($node$$304$$.$_durationFillColor$ = this.$_colors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_colors$.length && (this.$_colorCount$ = 0));
    }
  }
};
$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return this.$_label$;
};
$JSCompiler_prototypeAlias$$.$isTopToBottom$ = function $$JSCompiler_prototypeAlias$$$$isTopToBottom$$() {
  return this.$_isTopToBottom$;
};
$JSCompiler_prototypeAlias$$.$isVertical$ = function $$JSCompiler_prototypeAlias$$$$isVertical$$() {
  return this.$_isVertical$;
};
$JSCompiler_prototypeAlias$$.$addTick$ = function $$JSCompiler_prototypeAlias$$$$addTick$$($container$$187$$, $line$$20_x1$$46$$, $x2$$44$$, $y1$$33$$, $y2$$32$$, $stroke$$100$$, $id$$215$$) {
  $line$$20_x1$$46$$ = new dvt.$Line$(this.$getCtx$(), $line$$20_x1$$46$$, $y1$$33$$, $x2$$44$$, $y2$$32$$, $id$$215$$);
  $line$$20_x1$$46$$.$setStroke$($stroke$$100$$);
  $line$$20_x1$$46$$.$setPixelHinting$();
  $container$$187$$.$addChild$($line$$20_x1$$46$$);
  return $line$$20_x1$$46$$;
};
function $DvtTimelineSeriesItem$$($context$$421$$, $id$$216$$) {
  this.Init($context$$421$$, $id$$216$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesItem$$, dvt.$Container$);
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeriesItem$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$422$$, $id$$217$$) {
  $DvtTimelineSeriesItem$$.$superclass$.Init.call(this, $context$$422$$, "g", $id$$217$$);
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($isSelected$$1$$) {
  this.$_isSelected$ != $isSelected$$1$$ && ((this.$_isSelected$ = $isSelected$$1$$) ? this.$_isShowingHoverEffect$ ? this.$applyState$("asel") : this.$applyState$("sel") : this.$applyState$("en"));
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($isFocused$$1$$) {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = !0, this.$_isSelected$ && $isFocused$$1$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("hl"));
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($isFocused$$2$$) {
  this.$_isSelected$ && $isFocused$$2$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("en");
  this.$_isShowingHoverEffect$ = !1;
};
$JSCompiler_prototypeAlias$$.$applyState$ = function $$JSCompiler_prototypeAlias$$$$applyState$$($bubbleFillColor_state$$97$$) {
  var $feeler$$1_item$$71$$ = this.$_node$, $duration$$44_itemElem$$ = $feeler$$1_item$$71$$.$_displayable$;
  if (null != $duration$$44_itemElem$$) {
    var $bubble$$ = $duration$$44_itemElem$$.$getChildAt$(0), $bubbleInner$$ = $bubble$$.$getChildAt$(0), $duration$$44_itemElem$$ = $feeler$$1_item$$71$$.$_durationBar$;
    if ("asel" == $bubbleFillColor_state$$97$$) {
      $bubbleFillColor_state$$97$$ = $DvtTimelineStyleUtils$$.$getItemSelectedFillColor$($feeler$$1_item$$71$$);
      var $bubbleStroke_bubbleStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$($feeler$$1_item$$71$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$();
    } else {
      "sel" == $bubbleFillColor_state$$97$$ ? ($bubbleFillColor_state$$97$$ = $DvtTimelineStyleUtils$$.$getItemSelectedFillColor$($feeler$$1_item$$71$$), $bubbleStroke_bubbleStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$($feeler$$1_item$$71$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$()) : "hl" == $bubbleFillColor_state$$97$$ ? ($bubbleFillColor_state$$97$$ = 
      $DvtTimelineStyleUtils$$.$getItemHoverFillColor$($feeler$$1_item$$71$$), $bubbleStroke_bubbleStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeColor$($feeler$$1_item$$71$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$()) : ($bubbleFillColor_state$$97$$ = $DvtTimelineStyleUtils$$.$getItemFillColor$($feeler$$1_item$$71$$), $bubbleStroke_bubbleStrokeColor$$ = 
      $DvtTimelineStyleUtils$$.$getItemStrokeColor$($feeler$$1_item$$71$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$());
    }
    var $bubbleInnerStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeWidth$(), $bubbleStroke_bubbleStrokeColor$$ = new dvt.$SolidStroke$($bubbleStroke_bubbleStrokeColor$$, 1, $bubbleStrokeWidth$$), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = new dvt.$SolidStroke$($bubbleInnerStroke_bubbleInnerStrokeColor$$, 1, $bubbleInnerStrokeWidth$$);
    $bubble$$.$setSolidFill$($bubbleFillColor_state$$97$$);
    $bubble$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$);
    $bubbleInner$$.$setStroke$($bubbleInnerStroke_bubbleInnerStrokeColor$$);
    ($feeler$$1_item$$71$$ = $feeler$$1_item$$71$$.$_feeler$) && $feeler$$1_item$$71$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$);
    $duration$$44_itemElem$$ && $duration$$44_itemElem$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$);
  }
};
var $DvtTimelineSeriesItemRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesItemRenderer$$, dvt.$Obj$);
$DvtTimelineSeriesItemRenderer$$.$renderItem$ = function $$DvtTimelineSeriesItemRenderer$$$$renderItem$$($item$$72$$, $series$$23$$, $container$$188$$, $overflowOffset$$, $frAnimationElems$$, $mvAnimator$$) {
  $item$$72$$.$_content$ ? ($DvtTimelineSeriesItemRenderer$$.$_renderBubble$($item$$72$$, $series$$23$$, $container$$188$$, $frAnimationElems$$), $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($item$$72$$, $series$$23$$, $overflowOffset$$, null, !1)) : ($series$$23$$.$_hasMvAnimations$ = !0, $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($item$$72$$, $series$$23$$, $overflowOffset$$, $mvAnimator$$, !0));
  $series$$23$$.$isVertical$() || ($item$$72$$.$_feeler$ && $series$$23$$.$_allowUpdates$ ? $DvtTimelineSeriesItemRenderer$$.$_updateFeeler$($item$$72$$, $series$$23$$, $overflowOffset$$, $mvAnimator$$) : $DvtTimelineSeriesItemRenderer$$.$_renderFeeler$($item$$72$$, $series$$23$$, $container$$188$$.$feelers$, $overflowOffset$$, $frAnimationElems$$));
};
$DvtTimelineSeriesItemRenderer$$.$initializeItem$ = function $$DvtTimelineSeriesItemRenderer$$$$initializeItem$$($item$$73$$, $series$$24$$, $index$$204$$) {
  $item$$73$$.$_displayable$ && $series$$24$$.$_allowUpdates$ ? $DvtTimelineSeriesItemRenderer$$.$_updateBubble$($item$$73$$, $series$$24$$, $index$$204$$) : $DvtTimelineSeriesItemRenderer$$.$_createBubble$($item$$73$$, $series$$24$$, $index$$204$$);
};
$DvtTimelineSeriesItemRenderer$$.$_createBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_createBubble$$($item$$74$$, $series$$25_spacing$$2$$, $index$$205$$) {
  var $content$$8$$ = $DvtTimelineSeriesItemRenderer$$.$_getBubbleContent$($item$$74$$, $series$$25_spacing$$2$$);
  $series$$25_spacing$$2$$.$addChild$($content$$8$$);
  var $dim$$78$$ = $content$$8$$.$getDimensions$();
  $series$$25_spacing$$2$$.removeChild($content$$8$$);
  $item$$74$$.$setWidth$($dim$$78$$.$w$ + 10);
  $item$$74$$.$setHeight$($dim$$78$$.$h$ + 10);
  $item$$74$$.$_content$ = $content$$8$$;
  $series$$25_spacing$$2$$ = $JSCompiler_StaticMethods_calculateSpacing$$($series$$25_spacing$$2$$, $item$$74$$, $index$$205$$);
  $item$$74$$.$_spacing$ = $series$$25_spacing$$2$$;
};
$DvtTimelineSeriesItemRenderer$$.$_renderBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderBubble$$($item$$75$$, $series$$26$$, $container$$189$$, $animationElems$$) {
  var $bubbleContainer_context$$423$$ = $series$$26$$.$getCtx$(), $bubbleArray_isRTL$$52$$ = dvt.$Agent$.$isRightToLeft$($bubbleContainer_context$$423$$), $id$$218$$ = $item$$75$$.getId(), $content$$9$$ = $item$$75$$.$_content$;
  $item$$75$$.$_content$ = null;
  var $bubble$$1_nodeWidth$$4$$ = $item$$75$$.getWidth(), $innerBubbleArray_nodeHeight$$7$$ = $item$$75$$.getHeight(), $bubbleId_innerBubble$$ = "_bubble_" + $id$$218$$;
  if ($series$$26$$.$isVertical$()) {
    var $offset$$38$$ = $innerBubbleArray_nodeHeight$$7$$ / 2, $startOffset$$3$$ = $offset$$38$$ - 6, $endOffset$$3$$ = $offset$$38$$ + 6;
    !$bubbleArray_isRTL$$52$$ && $series$$26$$.$_isInverted$ || $bubbleArray_isRTL$$52$$ && !$series$$26$$.$_isInverted$ ? ($bubbleArray_isRTL$$52$$ = [0, 0, 0, $startOffset$$3$$, -6, $offset$$38$$, 0, $endOffset$$3$$, 0, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $startOffset$$3$$, -4, $offset$$38$$, 2, $endOffset$$3$$, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 
    $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2]) : ($bubbleArray_isRTL$$52$$ = [0, 0, 0, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $endOffset$$3$$, $bubble$$1_nodeWidth$$4$$ + 6, $offset$$38$$, $bubble$$1_nodeWidth$$4$$, $startOffset$$3$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 
    2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, $endOffset$$3$$, $bubble$$1_nodeWidth$$4$$ + 4, $offset$$38$$, $bubble$$1_nodeWidth$$4$$ - 2, $startOffset$$3$$, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2]);
  } else {
    $offset$$38$$ = $bubbleArray_isRTL$$52$$ ? $bubble$$1_nodeWidth$$4$$ - $DvtTimelineStyleUtils$$.$getBubbleOffset$() : $DvtTimelineStyleUtils$$.$getBubbleOffset$(), $startOffset$$3$$ = $offset$$38$$ - 6, $endOffset$$3$$ = $offset$$38$$ + 6, $series$$26$$.$_isInverted$ ? ($bubbleArray_isRTL$$52$$ = [0, 0, $startOffset$$3$$, 0, $offset$$38$$, -6, $endOffset$$3$$, 0, $bubble$$1_nodeWidth$$4$$, 0, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, 0, $innerBubbleArray_nodeHeight$$7$$, 0, 
    0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, $startOffset$$3$$, 2, $offset$$38$$, -4, $endOffset$$3$$, 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 2, 2]) : ($bubbleArray_isRTL$$52$$ = [0, 0, 0, $innerBubbleArray_nodeHeight$$7$$, $startOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$, $offset$$38$$, $innerBubbleArray_nodeHeight$$7$$ + 6, $endOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 
    $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $startOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$ - 2, $offset$$38$$, $innerBubbleArray_nodeHeight$$7$$ + 4, $endOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2]);
  }
  $bubble$$1_nodeWidth$$4$$ = new dvt.$Polygon$($bubbleContainer_context$$423$$, $bubbleArray_isRTL$$52$$, $bubbleId_innerBubble$$);
  $bubbleId_innerBubble$$ = new dvt.$Polygon$($bubbleContainer_context$$423$$, $innerBubbleArray_nodeHeight$$7$$, $bubbleId_innerBubble$$ + "_i");
  $bubbleId_innerBubble$$.$setSolidFill$($DvtTimelineStyleUtils$$.$getItemInnerFillColor$());
  $content$$9$$.$setTranslate$(5, 5);
  $bubble$$1_nodeWidth$$4$$.$addChild$($bubbleId_innerBubble$$);
  $bubble$$1_nodeWidth$$4$$.$addChild$($content$$9$$);
  $bubbleContainer_context$$423$$ = new $DvtTimelineSeriesItem$$($bubbleContainer_context$$423$$, "_bt_" + $id$$218$$);
  $animationElems$$ && ($bubbleContainer_context$$423$$.$setAlpha$(0), $animationElems$$.push($bubbleContainer_context$$423$$));
  $bubbleContainer_context$$423$$.$addChild$($bubble$$1_nodeWidth$$4$$);
  dvt.$TimeAxis$.$supportsTouch$() && dvt.$ToolkitUtils$.$setAttrNullNS$($bubbleContainer_context$$423$$.$_elem$, "id", $bubbleContainer_context$$423$$.$_id$);
  $bubbleContainer_context$$423$$.$_node$ = $item$$75$$;
  $item$$75$$.$_displayable$ = $bubbleContainer_context$$423$$;
  $bubbleContainer_context$$423$$.$applyState$("en");
  0 <= $item$$75$$.$_loc$ && $container$$189$$.$addChild$($bubbleContainer_context$$423$$);
  $bubbleContainer_context$$423$$.$setAriaRole$("group");
  $item$$75$$.$_updateAriaLabel$();
  $series$$26$$.$_callbackObj$.$EventManager$.$associate$($bubbleContainer_context$$423$$, $item$$75$$);
};
$DvtTimelineSeriesItemRenderer$$.$_displayBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_displayBubble$$($bubbleContainer$$1_item$$76$$, $series$$27$$, $overflowOffset$$1$$, $animator$$138$$, $resetState$$) {
  var $isRTL$$53_transX$$7$$ = dvt.$Agent$.$isRightToLeft$($series$$27$$.$getCtx$()), $loc$$2$$ = $bubbleContainer$$1_item$$76$$.$_loc$, $nodeWidth$$5$$ = $bubbleContainer$$1_item$$76$$.getWidth(), $nodeHeight$$8_transY$$ = $bubbleContainer$$1_item$$76$$.getHeight(), $spacing$$3$$ = $bubbleContainer$$1_item$$76$$.$_spacing$;
  $bubbleContainer$$1_item$$76$$ = $bubbleContainer$$1_item$$76$$.$_displayable$;
  $resetState$$ && $bubbleContainer$$1_item$$76$$.$applyState$("en");
  $series$$27$$.$isVertical$() ? ($nodeHeight$$8_transY$$ = $loc$$2$$ - $nodeHeight$$8_transY$$ / 2, $isRTL$$53_transX$$7$$ && $series$$27$$.$_isInverted$ || !$isRTL$$53_transX$$7$$ && !$series$$27$$.$_isInverted$ ? $isRTL$$53_transX$$7$$ = $series$$27$$.$_size$ - ($nodeWidth$$5$$ + $series$$27$$.$_initialSpacing$) + $overflowOffset$$1$$ : ($isRTL$$53_transX$$7$$ = $series$$27$$.$_initialSpacing$, $overflowOffset$$1$$ = 0)) : ($isRTL$$53_transX$$7$$ = $isRTL$$53_transX$$7$$ ? $series$$27$$.$_length$ - 
  $loc$$2$$ - $nodeWidth$$5$$ + $DvtTimelineStyleUtils$$.$getBubbleOffset$() : $loc$$2$$ - $DvtTimelineStyleUtils$$.$getBubbleOffset$(), $series$$27$$.$_isInverted$ ? ($nodeHeight$$8_transY$$ = $series$$27$$.$isTopToBottom$() ? $spacing$$3$$ : $series$$27$$.$Height$ - $spacing$$3$$ - $nodeHeight$$8_transY$$ + $overflowOffset$$1$$ + $series$$27$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $overflowOffset$$1$$ = 0) : $nodeHeight$$8_transY$$ = $series$$27$$.$isTopToBottom$() ? 
  $spacing$$3$$ - $series$$27$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() : $series$$27$$.$Height$ - $spacing$$3$$ - $nodeHeight$$8_transY$$ + $overflowOffset$$1$$);
  $animator$$138$$ ? ($series$$27$$.$isVertical$() ? $bubbleContainer$$1_item$$76$$.$setTranslateX$($bubbleContainer$$1_item$$76$$.$getTranslateX$() + $series$$27$$.$_canvasOffsetX$ + $overflowOffset$$1$$) : $bubbleContainer$$1_item$$76$$.$setTranslateY$($bubbleContainer$$1_item$$76$$.$getTranslateY$() + $series$$27$$.$_canvasOffsetY$ + $overflowOffset$$1$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $bubbleContainer$$1_item$$76$$, $bubbleContainer$$1_item$$76$$.$getTranslateX$, $bubbleContainer$$1_item$$76$$.$setTranslateX$, 
  $isRTL$$53_transX$$7$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $bubbleContainer$$1_item$$76$$, $bubbleContainer$$1_item$$76$$.$getTranslateY$, $bubbleContainer$$1_item$$76$$.$setTranslateY$, $nodeHeight$$8_transY$$)) : $bubbleContainer$$1_item$$76$$.$setTranslate$($isRTL$$53_transX$$7$$, $nodeHeight$$8_transY$$);
};
$DvtTimelineSeriesItemRenderer$$.$_getBubbleContent$ = function $$DvtTimelineSeriesItemRenderer$$$$_getBubbleContent$$($item$$77$$, $series$$28$$) {
  var $context$$425$$ = $series$$28$$.$getCtx$(), $isRTL$$54$$ = dvt.$Agent$.$isRightToLeft$($context$$425$$), $title$$22_width$$144$$ = $item$$77$$.$getTitle$(), $desc$$29_descText$$ = $item$$77$$.$_desc$, $thumbImage_thumbnail$$ = $item$$77$$.$_thumbnail$, $container$$190$$ = new dvt.$Container$($context$$425$$), $offsetX$$10$$ = 0, $offsetY$$7$$ = 0;
  if ($isRTL$$54$$) {
    $title$$22_width$$144$$ && ($titleText$$ = new dvt.$OutputText$($context$$425$$, $title$$22_width$$144$$, 0, $offsetY$$7$$), $titleText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemTitleStyle$($item$$77$$)), $offsetX$$10$$ = $titleText$$.$measureDimensions$().$w$ + 2, $offsetY$$7$$ = 15, $container$$190$$.$addChild$($titleText$$)), $desc$$29_descText$$ && ($desc$$29_descText$$ = new dvt.$OutputText$($context$$425$$, $desc$$29_descText$$, 0, $offsetY$$7$$), $desc$$29_descText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemDescriptionStyle$($item$$77$$)), 
    $title$$22_width$$144$$ = $desc$$29_descText$$.$measureDimensions$().$w$ + 2, 0 != $offsetX$$10$$ && $title$$22_width$$144$$ != $offsetX$$10$$ ? $title$$22_width$$144$$ > $offsetX$$10$$ ? ($titleText$$.$setX$($title$$22_width$$144$$ - $offsetX$$10$$), $offsetX$$10$$ = $title$$22_width$$144$$) : $desc$$29_descText$$.$setX$($offsetX$$10$$ - $title$$22_width$$144$$) : $offsetX$$10$$ = $title$$22_width$$144$$, $container$$190$$.$addChild$($desc$$29_descText$$)), $thumbImage_thumbnail$$ && ($thumbImage_thumbnail$$ = 
    new dvt.Image($context$$425$$, $thumbImage_thumbnail$$, $offsetX$$10$$, 0, $DvtTimelineStyleUtils$$.$getThumbnailWidth$(), $DvtTimelineStyleUtils$$.$getThumbnailHeight$(), "_tn"), $thumbImage_thumbnail$$.$setMouseEnabled$(!1), $container$$190$$.$addChild$($thumbImage_thumbnail$$));
  } else {
    $thumbImage_thumbnail$$ && ($thumbImage_thumbnail$$ = new dvt.Image($context$$425$$, $thumbImage_thumbnail$$, 0, 0, $DvtTimelineStyleUtils$$.$getThumbnailWidth$(), $DvtTimelineStyleUtils$$.$getThumbnailHeight$(), "_tn"), $thumbImage_thumbnail$$.$setMouseEnabled$(!1), $container$$190$$.$addChild$($thumbImage_thumbnail$$), $offsetX$$10$$ = $DvtTimelineStyleUtils$$.$getThumbnailWidth$() + 2);
    if ($title$$22_width$$144$$) {
      var $titleText$$ = new dvt.$OutputText$($context$$425$$, $title$$22_width$$144$$, $offsetX$$10$$, $offsetY$$7$$);
      $titleText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemTitleStyle$($item$$77$$));
      $offsetY$$7$$ = 15;
      $container$$190$$.$addChild$($titleText$$);
    }
    $desc$$29_descText$$ && ($desc$$29_descText$$ = new dvt.$OutputText$($context$$425$$, $desc$$29_descText$$, $offsetX$$10$$, $offsetY$$7$$), $desc$$29_descText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemDescriptionStyle$($item$$77$$)), $container$$190$$.$addChild$($desc$$29_descText$$));
  }
  return $container$$190$$;
};
$DvtTimelineSeriesItemRenderer$$.$_updateBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateBubble$$($item$$78$$, $series$$29_spacing$$4$$, $index$$206$$) {
  $series$$29_spacing$$4$$ = $JSCompiler_StaticMethods_calculateSpacing$$($series$$29_spacing$$4$$, $item$$78$$, $index$$206$$);
  $item$$78$$.$_spacing$ = $series$$29_spacing$$4$$;
};
$DvtTimelineSeriesItemRenderer$$.$_renderFeeler$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderFeeler$$($item$$79$$, $feelerX$$1_series$$30$$, $container$$191_feelerWidth_stroke$$101$$, $feelerHeight_overflowOffset$$2$$, $animationElems$$1_feelerColor$$) {
  var $context$$426_feeler$$2$$ = $feelerX$$1_series$$30$$.$getCtx$(), $isRTL$$55$$ = dvt.$Agent$.$isRightToLeft$($context$$426_feeler$$2$$), $feelerId_id$$219$$ = $item$$79$$.getId(), $loc$$3$$ = $item$$79$$.$_loc$, $spacing$$5$$ = $item$$79$$.$_spacing$, $feelerId_id$$219$$ = "_feeler_" + $feelerId_id$$219$$;
  if ($feelerX$$1_series$$30$$.$_isInverted$) {
    $feelerY$$ = $item$$79$$.$_durationSize$, $feelerHeight_overflowOffset$$2$$ = $feelerX$$1_series$$30$$.$isTopToBottom$() ? $spacing$$5$$ : $feelerX$$1_series$$30$$.$Height$ - $spacing$$5$$ - $item$$79$$.getHeight() + $feelerHeight_overflowOffset$$2$$ + $feelerX$$1_series$$30$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$();
  } else {
    var $feelerY$$ = $feelerX$$1_series$$30$$.$Height$ + $feelerHeight_overflowOffset$$2$$ - $item$$79$$.$_durationSize$;
    $feelerHeight_overflowOffset$$2$$ = $feelerX$$1_series$$30$$.$isTopToBottom$() ? $spacing$$5$$ - $feelerX$$1_series$$30$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + $item$$79$$.getHeight() : $feelerX$$1_series$$30$$.$Height$ - $spacing$$5$$ + $feelerHeight_overflowOffset$$2$$;
  }
  $feelerX$$1_series$$30$$ = $isRTL$$55$$ ? $feelerX$$1_series$$30$$.$_length$ - $loc$$3$$ : $loc$$3$$;
  $context$$426_feeler$$2$$ = new dvt.$Line$($context$$426_feeler$$2$$, $feelerX$$1_series$$30$$, $feelerY$$, $feelerX$$1_series$$30$$, $feelerHeight_overflowOffset$$2$$, $feelerId_id$$219$$);
  $animationElems$$1_feelerColor$$ && ($context$$426_feeler$$2$$.$setAlpha$(0), $animationElems$$1_feelerColor$$.push($context$$426_feeler$$2$$));
  $container$$191_feelerWidth_stroke$$101$$.$addChild$($context$$426_feeler$$2$$);
  $container$$191_feelerWidth_stroke$$101$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$();
  $animationElems$$1_feelerColor$$ = $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$79$$);
  $container$$191_feelerWidth_stroke$$101$$ = new dvt.$SolidStroke$($animationElems$$1_feelerColor$$, 1, $container$$191_feelerWidth_stroke$$101$$);
  $context$$426_feeler$$2$$.$setStroke$($container$$191_feelerWidth_stroke$$101$$);
  $context$$426_feeler$$2$$.$_node$ = $item$$79$$;
  $item$$79$$.$_feeler$ = $context$$426_feeler$$2$$;
};
$DvtTimelineSeriesItemRenderer$$.$_updateFeeler$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateFeeler$$($feelerX$$2_item$$80$$, $series$$31$$, $overflowOffset$$3$$, $animator$$139$$) {
  if ($series$$31$$.$isVertical$()) {
    $feelerX$$2_item$$80$$.$_feeler$ = null;
  } else {
    var $isRTL$$56$$ = dvt.$Agent$.$isRightToLeft$($series$$31$$.$getCtx$()), $feeler$$3$$ = $feelerX$$2_item$$80$$.$_feeler$;
    if ($series$$31$$.$_isInverted$) {
      $feelerY$$1$$ = $feelerX$$2_item$$80$$.$_durationSize$, $feelerHeight$$1$$ = $series$$31$$.$isTopToBottom$() ? $feelerX$$2_item$$80$$.$_spacing$ : $series$$31$$.$Height$ - $feelerX$$2_item$$80$$.$_spacing$ - $feelerX$$2_item$$80$$.getHeight() + $overflowOffset$$3$$ + $series$$31$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $overflowOffset$$3$$ = 0;
    } else {
      var $feelerY$$1$$ = $series$$31$$.$Height$ + $overflowOffset$$3$$ - $feelerX$$2_item$$80$$.$_durationSize$, $feelerHeight$$1$$ = $series$$31$$.$isTopToBottom$() ? $feelerX$$2_item$$80$$.$_spacing$ - $series$$31$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + $feelerX$$2_item$$80$$.getHeight() : $series$$31$$.$Height$ - $feelerX$$2_item$$80$$.$_spacing$ + $overflowOffset$$3$$
    }
    $feelerX$$2_item$$80$$ = $isRTL$$56$$ ? $series$$31$$.$_length$ - $feelerX$$2_item$$80$$.$_loc$ : $feelerX$$2_item$$80$$.$_loc$;
    $animator$$139$$ ? ($feeler$$3$$.$setY1$($feeler$$3$$.$getY1$() + $series$$31$$.$_canvasOffsetY$ + $overflowOffset$$3$$), $feeler$$3$$.$setY2$($feeler$$3$$.$getY2$() + $series$$31$$.$_canvasOffsetY$ + $overflowOffset$$3$$), $animator$$139$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $feeler$$3$$, $feeler$$3$$.$getX1$, $feeler$$3$$.$setX1$, $feelerX$$2_item$$80$$), $animator$$139$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $feeler$$3$$, $feeler$$3$$.$getY1$, $feeler$$3$$.$setY1$, $feelerY$$1$$), $animator$$139$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, 
    $feeler$$3$$, $feeler$$3$$.$getX2$, $feeler$$3$$.$setX2$, $feelerX$$2_item$$80$$), $animator$$139$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $feeler$$3$$, $feeler$$3$$.$getY2$, $feeler$$3$$.$setY2$, $feelerHeight$$1$$)) : ($feeler$$3$$.$setX1$($feelerX$$2_item$$80$$), $feeler$$3$$.$setY1$($feelerY$$1$$), $feeler$$3$$.$setX2$($feelerX$$2_item$$80$$), $feeler$$3$$.$setY2$($feelerHeight$$1$$));
  }
};
$DvtTimelineSeriesItemRenderer$$.$renderDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$renderDuration$$($item$$81$$, $series$$32$$, $container$$192$$, $overflowOffset$$4$$, $frAnimationElems$$1$$, $mvAnimator$$1$$) {
  $item$$81$$.$_durationBar$ ? $DvtTimelineSeriesItemRenderer$$.$_updateDuration$($item$$81$$, $series$$32$$, $overflowOffset$$4$$, $mvAnimator$$1$$) : $DvtTimelineSeriesItemRenderer$$.$_renderDuration$($item$$81$$, $series$$32$$, $container$$192$$, $overflowOffset$$4$$, $frAnimationElems$$1$$);
};
$DvtTimelineSeriesItemRenderer$$.$_renderDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderDuration$$($item$$82$$, $series$$33$$, $container$$193$$, $feelerStroke_feelerWidth$$1_overflowOffset$$5$$, $animationElems$$2_feelerColor$$1$$) {
  var $context$$428_duration$$45$$ = $series$$33$$.$getCtx$(), $isRTL$$57$$ = dvt.$Agent$.$isRightToLeft$($context$$428_duration$$45$$), $endLoc$$1_endTime$$21_width$$145$$ = $item$$82$$.$_endTime$, $loc$$4_transX$$8$$ = dvt.$TimeAxis$.$getDatePosition$($series$$33$$.$_start$, $series$$33$$.$_end$, $item$$82$$.$_startTime$, $series$$33$$.$_length$), $durationId$$ = "_duration_" + $item$$82$$.getId(), $durationSize$$ = 22 + 10 * $item$$82$$.$_durationLevel$, $endLoc$$1_endTime$$21_width$$145$$ = dvt.$TimeAxis$.$getDatePosition$($series$$33$$.$_start$, 
  $series$$33$$.$_end$, $endLoc$$1_endTime$$21_width$$145$$, $series$$33$$.$_length$);
  $series$$33$$.$isVertical$() ? (!$isRTL$$57$$ && !$series$$33$$.$_isInverted$ || $isRTL$$57$$ && $series$$33$$.$_isInverted$ ? $context$$428_duration$$45$$ = new dvt.Rect($context$$428_duration$$45$$, $series$$33$$.$_size$ - $durationSize$$ + 5, $loc$$4_transX$$8$$, $durationSize$$, $endLoc$$1_endTime$$21_width$$145$$ - $loc$$4_transX$$8$$, $durationId$$) : ($context$$428_duration$$45$$ = new dvt.Rect($context$$428_duration$$45$$, -5, $loc$$4_transX$$8$$, $durationSize$$, $endLoc$$1_endTime$$21_width$$145$$ - 
  $loc$$4_transX$$8$$, $durationId$$), $feelerStroke_feelerWidth$$1_overflowOffset$$5$$ = 0), $context$$428_duration$$45$$.$setTranslateX$($feelerStroke_feelerWidth$$1_overflowOffset$$5$$), $context$$428_duration$$45$$.$setY$($loc$$4_transX$$8$$), $context$$428_duration$$45$$.$setWidth$($durationSize$$), $context$$428_duration$$45$$.$setHeight$($endLoc$$1_endTime$$21_width$$145$$ - $loc$$4_transX$$8$$)) : ($endLoc$$1_endTime$$21_width$$145$$ -= $loc$$4_transX$$8$$, $loc$$4_transX$$8$$ = $isRTL$$57$$ ? 
  $series$$33$$.$_length$ - $loc$$4_transX$$8$$ - $endLoc$$1_endTime$$21_width$$145$$ : $loc$$4_transX$$8$$, $series$$33$$.$_isInverted$ ? ($context$$428_duration$$45$$ = new dvt.Rect($context$$428_duration$$45$$, $loc$$4_transX$$8$$, -5, $endLoc$$1_endTime$$21_width$$145$$, $durationSize$$, $durationId$$), $context$$428_duration$$45$$.$setTranslateY$(0)) : ($context$$428_duration$$45$$ = new dvt.Rect($context$$428_duration$$45$$, $loc$$4_transX$$8$$, $series$$33$$.$_size$ - $durationSize$$ + 5, 
  $endLoc$$1_endTime$$21_width$$145$$, $durationSize$$, $durationId$$), $context$$428_duration$$45$$.$setTranslateY$($feelerStroke_feelerWidth$$1_overflowOffset$$5$$)));
  $animationElems$$2_feelerColor$$1$$ && ($context$$428_duration$$45$$.$setAlpha$(0), $animationElems$$2_feelerColor$$1$$.push($context$$428_duration$$45$$));
  $context$$428_duration$$45$$.$setCornerRadius$(5);
  $context$$428_duration$$45$$.$setSolidFill$($item$$82$$.$_durationFillColor$);
  $feelerStroke_feelerWidth$$1_overflowOffset$$5$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$();
  $animationElems$$2_feelerColor$$1$$ = $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$82$$);
  $feelerStroke_feelerWidth$$1_overflowOffset$$5$$ = new dvt.$SolidStroke$($animationElems$$2_feelerColor$$1$$, 1, $feelerStroke_feelerWidth$$1_overflowOffset$$5$$);
  $context$$428_duration$$45$$.$setStroke$($feelerStroke_feelerWidth$$1_overflowOffset$$5$$);
  $context$$428_duration$$45$$.$_node$ = $item$$82$$;
  $series$$33$$.$_callbackObj$.$EventManager$.$associate$($context$$428_duration$$45$$, $item$$82$$);
  $container$$193$$.$addChild$($context$$428_duration$$45$$);
  $item$$82$$.$_durationBar$ = $context$$428_duration$$45$$;
};
$DvtTimelineSeriesItemRenderer$$.$_updateDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateDuration$$($durationTransY_item$$83$$, $series$$34$$, $overflowOffset$$6$$, $animator$$140$$) {
  var $durationX_isRTL$$58$$ = dvt.$Agent$.$isRightToLeft$($series$$34$$.$getCtx$()), $duration$$46$$ = $durationTransY_item$$83$$.$_durationBar$;
  if (null != $duration$$46$$) {
    var $durationHeight_loc$$5$$ = dvt.$TimeAxis$.$getDatePosition$($series$$34$$.$_start$, $series$$34$$.$_end$, $durationTransY_item$$83$$.$_startTime$, $series$$34$$.$_length$), $durationSize$$1$$ = 22 + 10 * $durationTransY_item$$83$$.$_durationLevel$, $endLoc$$2_width$$146$$ = dvt.$TimeAxis$.$getDatePosition$($series$$34$$.$_start$, $series$$34$$.$_end$, $durationTransY_item$$83$$.$_endTime$, $series$$34$$.$_length$);
    if ($series$$34$$.$isVertical$()) {
      $durationTransY_item$$83$$ = 0;
      !$durationX_isRTL$$58$$ && !$series$$34$$.$_isInverted$ || $durationX_isRTL$$58$$ && $series$$34$$.$_isInverted$ ? $durationX_isRTL$$58$$ = $series$$34$$.$_size$ - $durationSize$$1$$ + 5 : ($durationX_isRTL$$58$$ = -5, $overflowOffset$$6$$ = 0);
      var $durationTransX$$ = $overflowOffset$$6$$, $durationY$$ = $durationHeight_loc$$5$$, $durationWidth$$ = $durationSize$$1$$, $durationHeight_loc$$5$$ = $endLoc$$2_width$$146$$ - $durationHeight_loc$$5$$;
    } else {
      $durationTransX$$ = 0, $endLoc$$2_width$$146$$ -= $durationHeight_loc$$5$$, $durationX_isRTL$$58$$ = $durationX_isRTL$$58$$ ? $series$$34$$.$_length$ - $durationHeight_loc$$5$$ - $endLoc$$2_width$$146$$ : $durationHeight_loc$$5$$, $series$$34$$.$_isInverted$ ? ($durationTransY_item$$83$$ = $overflowOffset$$6$$ = 0, $durationY$$ = -5) : ($durationTransY_item$$83$$ = $overflowOffset$$6$$, $durationY$$ = $series$$34$$.$_size$ - $durationSize$$1$$ + 5), $durationWidth$$ = $endLoc$$2_width$$146$$, 
      $durationHeight_loc$$5$$ = $durationSize$$1$$;
    }
    $animator$$140$$ ? ($series$$34$$.$isVertical$() ? $duration$$46$$.$setTranslateX$($duration$$46$$.$getTranslateX$() + $series$$34$$.$_canvasOffsetX$ + $overflowOffset$$6$$) : $duration$$46$$.$setTranslateY$($duration$$46$$.$getTranslateY$() + $series$$34$$.$_canvasOffsetY$ + $overflowOffset$$6$$), $animator$$140$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$46$$, $duration$$46$$.$getTranslateX$, $duration$$46$$.$setTranslateX$, $durationTransX$$), $animator$$140$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, 
    $duration$$46$$, $duration$$46$$.$getTranslateY$, $duration$$46$$.$setTranslateY$, $durationTransY_item$$83$$), $animator$$140$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$46$$, $duration$$46$$.$getX$, $duration$$46$$.$setX$, $durationX_isRTL$$58$$), $animator$$140$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$46$$, $duration$$46$$.$getY$, $duration$$46$$.$setY$, $durationY$$), $animator$$140$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$46$$, $duration$$46$$.getWidth, $duration$$46$$.$setWidth$, 
    $durationWidth$$), $animator$$140$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$46$$, $duration$$46$$.getHeight, $duration$$46$$.$setHeight$, $durationHeight_loc$$5$$)) : ($duration$$46$$.$setTranslateX$($durationTransX$$), $duration$$46$$.$setTranslateY$($durationTransY_item$$83$$), $duration$$46$$.$setX$($durationX_isRTL$$58$$), $duration$$46$$.$setY$($durationY$$), $duration$$46$$.$setWidth$($durationWidth$$), $duration$$46$$.$setHeight$($durationHeight_loc$$5$$));
  }
};
function $DvtTimelineSeriesNode$$($timeline$$13$$, $series$$35$$, $props$$11$$) {
  this.Init($timeline$$13$$, $series$$35$$, $props$$11$$);
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesNode$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeriesNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($timeline$$14$$, $seriesIndex$$147$$, $props$$12$$) {
  this.$_timeline$ = $timeline$$14$$;
  this.$_seriesIndex$ = $seriesIndex$$147$$;
  this.$_series$ = $timeline$$14$$.$_series$[$seriesIndex$$147$$];
  this.$_id$ = $props$$12$$.id;
  this.$_startTime$ = parseInt($props$$12$$.startTime);
  $props$$12$$.endTime && (this.$_endTime$ = parseInt($props$$12$$.endTime));
  this.$_title$ = $props$$12$$.title;
  this.$_desc$ = $props$$12$$.$desc$;
  this.$_thumbnail$ = $props$$12$$.$thumbnail$;
  this.$_style$ = $props$$12$$.style;
  this.$_data$ = $props$$12$$.data;
  this.$_action$ = $props$$12$$.action;
  this.$_durationFillColor$ = $props$$12$$.$durationFillColor$;
  this.$_durationSize$ = 0;
  this.$_spbs$ = $props$$12$$.$spbs$;
};
$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_id$;
};
$JSCompiler_prototypeAlias$$.$getSeries$ = function $$JSCompiler_prototypeAlias$$$$getSeries$$() {
  return this.$_series$;
};
$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = function $$JSCompiler_prototypeAlias$$$$getSeriesIndex$$() {
  return this.$_seriesIndex$;
};
$JSCompiler_prototypeAlias$$.$getTitle$ = function $$JSCompiler_prototypeAlias$$$$getTitle$$() {
  return this.$_title$;
};
$JSCompiler_prototypeAlias$$.$getStyle$ = function $$JSCompiler_prototypeAlias$$$$getStyle$$() {
  return this.$_style$;
};
$JSCompiler_prototypeAlias$$.$setStyle$ = function $$JSCompiler_prototypeAlias$$$$setStyle$$($style$$115$$) {
  this.$_style$ = $style$$115$$;
};
$JSCompiler_prototypeAlias$$.getData = function $$JSCompiler_prototypeAlias$$$getData$() {
  return this.$_data$;
};
$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return null != this.$_endTime$ ? "Start Time: " + (new Date(this.$_startTime$)).toLocaleString() + "; End Time: " + (new Date(this.$_endTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$ : "Time: " + (new Date(this.$_startTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$;
};
$JSCompiler_prototypeAlias$$.getWidth = function $$JSCompiler_prototypeAlias$$$getWidth$() {
  return this.$_w$;
};
$JSCompiler_prototypeAlias$$.$setWidth$ = function $$JSCompiler_prototypeAlias$$$$setWidth$$($w$$42$$) {
  this.$_w$ = $w$$42$$;
};
$JSCompiler_prototypeAlias$$.getHeight = function $$JSCompiler_prototypeAlias$$$getHeight$() {
  return this.$_h$;
};
$JSCompiler_prototypeAlias$$.$setHeight$ = function $$JSCompiler_prototypeAlias$$$$setHeight$$($h$$37$$) {
  this.$_h$ = $h$$37$$;
};
$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_action$;
};
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$557$$) {
  var $keyboardHandler$$10_navigableItems$$7$$ = this.$_timeline$.$EventManager$.$KeyboardHandler$;
  if ($event$$557$$.type == dvt.MouseEvent.$CLICK$ || $keyboardHandler$$10_navigableItems$$7$$.$isMultiSelectEvent$($event$$557$$)) {
    return this;
  }
  if ($keyboardHandler$$10_navigableItems$$7$$.$isNavigationEvent$($event$$557$$)) {
    for (var $keyboardHandler$$10_navigableItems$$7$$ = [], $i$$681$$ = 0;$i$$681$$ < this.$_timeline$.$_series$.length;$i$$681$$++) {
      $keyboardHandler$$10_navigableItems$$7$$.push(this.$_timeline$.$_series$[$i$$681$$].$_items$);
    }
    return $DvtTimelineKeyboardHandler$getNextNavigable$$(this, $event$$557$$, $keyboardHandler$$10_navigableItems$$7$$);
  }
  return null;
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayable$.$getElem$();
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$35$$) {
  return this.$_displayable$.$getDimensions$($targetCoordinateSpace$$35$$);
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  this.$showHoverEffect$();
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$$(this.$_timeline$, this);
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !1;
  this.$hideHoverEffect$();
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$isShowingKeyboardFocusEffect$$() {
  return this.$_isShowingKeyboardFocusEffect$;
};
$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return [this.$_displayable$];
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$17$$ = [];
  this.$isSelectable$() && $states$$17$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return dvt.$Displayable$.$generateAriaLabel$(this.$getLabel$(), $states$$17$$);
};
$JSCompiler_prototypeAlias$$.$setSelectable$ = function $$JSCompiler_prototypeAlias$$$$setSelectable$$($isSelectable$$) {
  this.$_isSelectable$ = $isSelectable$$;
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_isSelectable$;
};
$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$_isSelected$;
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$) {
  this.$_isSelected$ = $JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$;
  this.$_displayable$.$setSelected$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$);
  this.$_updateAriaLabel$();
  if (this.$_timeline$.$_hasOverview$ && this.$_timeline$.$_overview$) {
    if ($JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$) {
      $JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$ = this.$_timeline$.$_overview$;
      var $drawable$$inline_4019_drawable$$inline_4023_itemId$$inline_4018_itemId$$inline_4022$$ = this.getId(), $drawable$$inline_4019_drawable$$inline_4023_itemId$$inline_4018_itemId$$inline_4022$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$, $drawable$$inline_4019_drawable$$inline_4023_itemId$$inline_4018_itemId$$inline_4022$$);
      null != $drawable$$inline_4019_drawable$$inline_4023_itemId$$inline_4018_itemId$$inline_4022$$ && $JSCompiler_StaticMethods_addSelectedMarker$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$, $drawable$$inline_4019_drawable$$inline_4023_itemId$$inline_4018_itemId$$inline_4022$$);
    } else {
      if ($JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$ = this.$_timeline$.$_overview$, $drawable$$inline_4019_drawable$$inline_4023_itemId$$inline_4018_itemId$$inline_4022$$ = this.getId(), $drawable$$inline_4019_drawable$$inline_4023_itemId$$inline_4018_itemId$$inline_4022$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$, 
      $drawable$$inline_4019_drawable$$inline_4023_itemId$$inline_4018_itemId$$inline_4022$$), null != $drawable$$inline_4019_drawable$$inline_4023_itemId$$inline_4018_itemId$$inline_4022$$ && null != $JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$.$_selectedMarkers$) {
        for (var $index$$inline_4979$$ = -1, $i$$inline_4980$$ = 0;$i$$inline_4980$$ < $JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$.$_selectedMarkers$.length;$i$$inline_4980$$++) {
          if ($drawable$$inline_4019_drawable$$inline_4023_itemId$$inline_4018_itemId$$inline_4022$$ == $JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$.$_selectedMarkers$[$i$$inline_4980$$]) {
            $index$$inline_4979$$ = $i$$inline_4980$$;
            break;
          }
        }
        -1 != $index$$inline_4979$$ && ($JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$.$applyState$($drawable$$inline_4019_drawable$$inline_4023_itemId$$inline_4018_itemId$$inline_4022$$, dvt.$TimelineOverview$.$ENABLED_STATE$), $JSCompiler_StaticMethods_selSelectItem$self$$inline_4017_JSCompiler_StaticMethods_selUnselectItem$self$$inline_4021_isSelected$$2$$.$_selectedMarkers$.splice($index$$inline_4979$$, 1));
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($JSCompiler_StaticMethods_highlightItem$self$$inline_4025_ignoreOverview$$) {
  this.$_displayable$.$showHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if (!$JSCompiler_StaticMethods_highlightItem$self$$inline_4025_ignoreOverview$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_highlightItem$self$$inline_4025_ignoreOverview$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_4027_itemId$$inline_4026$$ = this.getId(), $drawable$$inline_4027_itemId$$inline_4026$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_highlightItem$self$$inline_4025_ignoreOverview$$, $drawable$$inline_4027_itemId$$inline_4026$$);
    null != $drawable$$inline_4027_itemId$$inline_4026$$ && $JSCompiler_StaticMethods_highlightMarker$$($JSCompiler_StaticMethods_highlightItem$self$$inline_4025_ignoreOverview$$, $drawable$$inline_4027_itemId$$inline_4026$$);
  }
  if (this.$_timeline$.$_isVertical$ || this.$_series$.$_isRandomItemLayout$) {
    this.$_index$ || (this.$_index$ = this.$_series$.$_blocks$[0].$getChildIndex$(this.$_displayable$)), this.$_series$.$_blocks$[0].$addChild$(this.$_displayable$);
  }
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_4029_ignoreOverview$$1$$) {
  this.$_displayable$.$hideHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if (!$JSCompiler_StaticMethods_unhighlightItem$self$$inline_4029_ignoreOverview$$1$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_unhighlightItem$self$$inline_4029_ignoreOverview$$1$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_4031_itemId$$inline_4030$$ = this.getId(), $drawable$$inline_4031_itemId$$inline_4030$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_4029_ignoreOverview$$1$$, $drawable$$inline_4031_itemId$$inline_4030$$);
    null != $drawable$$inline_4031_itemId$$inline_4030$$ && $JSCompiler_StaticMethods_unhighlightMarker$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_4029_ignoreOverview$$1$$, $drawable$$inline_4031_itemId$$inline_4030$$);
  }
  (this.$_timeline$.$_isVertical$ || this.$_series$.$_isRandomItemLayout$) && this.$_index$ && !this.$_isSelected$ && this.$_series$.$_blocks$[0].$addChildAt$(this.$_displayable$, this.$_index$);
};
$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  if (!this.$_showPopupBehaviors$ && (this.$_showPopupBehaviors$ = [], this.$_spbs$)) {
    for (var $spbs$$7$$ = this.$_spbs$, $si$$1$$ = 0;$si$$1$$ < $spbs$$7$$.length;$si$$1$$++) {
      this.$_showPopupBehaviors$.push(new dvt.$ShowPopupBehavior$($spbs$$7$$[$si$$1$$].popupId, $spbs$$7$$[$si$$1$$].triggerType, $spbs$$7$$[$si$$1$$].alignId, $spbs$$7$$[$si$$1$$].align));
    }
  }
  return this.$_showPopupBehaviors$;
};
$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  dvt.$Agent$.$deferAriaCreation$() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$());
};
function $DvtTimelineSeriesParser$$() {
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesParser$$, dvt.$Obj$);
$DvtTimelineSeriesParser$$.prototype.parse = function $$DvtTimelineSeriesParser$$$$parse$($options$$333$$, $oldItems$$1$$) {
  var $itemArray$$inline_4035$$ = [], $ret$$67_seriesItems$$inline_4036$$ = $options$$333$$.items;
  if ($ret$$67_seriesItems$$inline_4036$$) {
    for (var $j$$inline_4037$$ = 0;$j$$inline_4037$$ < $ret$$67_seriesItems$$inline_4036$$.length;$j$$inline_4037$$++) {
      $itemArray$$inline_4035$$.push($ret$$67_seriesItems$$inline_4036$$[$j$$inline_4037$$]);
    }
  }
  $ret$$67_seriesItems$$inline_4036$$ = {};
  $ret$$67_seriesItems$$inline_4036$$.start = (new Date($options$$333$$.start)).getTime();
  $ret$$67_seriesItems$$inline_4036$$.end = (new Date($options$$333$$.end)).getTime();
  $ret$$67_seriesItems$$inline_4036$$.$inlineStyle$ = $options$$333$$.style;
  $ret$$67_seriesItems$$inline_4036$$.scale = $options$$333$$.scale;
  $ret$$67_seriesItems$$inline_4036$$.$timeAxis$ = $options$$333$$.timeAxis;
  $ret$$67_seriesItems$$inline_4036$$.label = $options$$333$$.label;
  $ret$$67_seriesItems$$inline_4036$$.$emptyText$ = $options$$333$$.emptyText;
  $ret$$67_seriesItems$$inline_4036$$.$isIRAnimationEnabled$ = "auto" == $options$$333$$.animationOnDisplay;
  $ret$$67_seriesItems$$inline_4036$$.$isDCAnimationEnabled$ = "auto" == $options$$333$$.animationOnDataChange;
  $ret$$67_seriesItems$$inline_4036$$.items = this.$_parseDataNode$($options$$333$$.timeline, $options$$333$$.index, $itemArray$$inline_4035$$, $oldItems$$1$$, $ret$$67_seriesItems$$inline_4036$$.start, $ret$$67_seriesItems$$inline_4036$$.end);
  $ret$$67_seriesItems$$inline_4036$$.$rtl$ = "false";
  $ret$$67_seriesItems$$inline_4036$$.$isRandomItemLayout$ = $options$$333$$._isRandomItemLayout;
  $ret$$67_seriesItems$$inline_4036$$.$customTimeScales$ = $options$$333$$._cts;
  $ret$$67_seriesItems$$inline_4036$$.$customFormatScales$ = $options$$333$$._cfs;
  $ret$$67_seriesItems$$inline_4036$$.$isTopToBottom$ = null == $options$$333$$.itemLayout || "auto" == $options$$333$$.itemLayout ? $options$$333$$.inverted : "topToBottom" == $options$$333$$.itemLayout;
  return $ret$$67_seriesItems$$inline_4036$$;
};
$DvtTimelineSeriesParser$$.prototype.$_parseDataNode$ = function $$DvtTimelineSeriesParser$$$$$_parseDataNode$$($timeline$$15$$, $seriesIndex$$148$$, $data$$126$$, $oldItems$$2$$, $compStartTime$$, $compEndTime$$) {
  var $treeNodes$$ = [], $series$$36$$ = $timeline$$15$$.$_series$[$seriesIndex$$148$$];
  if ($data$$126$$) {
    for (var $i$$682$$ = 0;$i$$682$$ < $data$$126$$.length;$i$$682$$++) {
      var $props$$13_startTime$$24$$ = this.$ParseNodeAttributes$($data$$126$$[$i$$682$$], $compStartTime$$, $compEndTime$$);
      if ($props$$13_startTime$$24$$) {
        if ($series$$36$$.$_allowUpdates$) {
          var $item$$85_props$$inline_4039$$;
          a: {
            $item$$85_props$$inline_4039$$ = $props$$13_startTime$$24$$;
            var $add_index$$207_items$$inline_4040$$ = $oldItems$$2$$;
            if ($add_index$$207_items$$inline_4040$$) {
              for (var $i$$inline_4041_j$$104$$ = 0;$i$$inline_4041_j$$104$$ < $add_index$$207_items$$inline_4040$$.length;$i$$inline_4041_j$$104$$++) {
                var $item$$inline_4042$$ = $add_index$$207_items$$inline_4040$$[$i$$inline_4041_j$$104$$];
                if ($item$$85_props$$inline_4039$$.id == $item$$inline_4042$$.getId() && $item$$85_props$$inline_4039$$.title == $item$$inline_4042$$.$getTitle$() && $item$$85_props$$inline_4039$$.$desc$ == $item$$inline_4042$$.$_desc$ && $item$$85_props$$inline_4039$$.$thumbnail$ == $item$$inline_4042$$.$_thumbnail$) {
                  $item$$85_props$$inline_4039$$ = $item$$inline_4042$$;
                  break a;
                }
              }
            }
            $item$$85_props$$inline_4039$$ = void 0;
          }
          $item$$85_props$$inline_4039$$ ? ($add_index$$207_items$$inline_4040$$ = dvt.$ArrayUtils$.$getIndex$($oldItems$$2$$, $item$$85_props$$inline_4039$$), $oldItems$$2$$.splice($add_index$$207_items$$inline_4040$$, 1), $item$$85_props$$inline_4039$$.$_spacing$ = null, $item$$85_props$$inline_4039$$.$_durationLevel$ = null, $item$$85_props$$inline_4039$$.$_loc$ = null, $item$$85_props$$inline_4039$$.$setSelected$(!1), $item$$85_props$$inline_4039$$.$_startTime$ = $props$$13_startTime$$24$$.startTime, 
          $item$$85_props$$inline_4039$$.$_endTime$ = $props$$13_startTime$$24$$.endTime, $item$$85_props$$inline_4039$$.$setStyle$($props$$13_startTime$$24$$.style)) : ($item$$85_props$$inline_4039$$ = new $DvtTimelineSeriesNode$$($timeline$$15$$, $seriesIndex$$148$$, $props$$13_startTime$$24$$), $item$$85_props$$inline_4039$$.$setSelectable$(!0));
        } else {
          $item$$85_props$$inline_4039$$ = new $DvtTimelineSeriesNode$$($timeline$$15$$, $seriesIndex$$148$$, $props$$13_startTime$$24$$), $item$$85_props$$inline_4039$$.$setSelectable$(!0);
        }
        $props$$13_startTime$$24$$ = $item$$85_props$$inline_4039$$.$_startTime$;
        $add_index$$207_items$$inline_4040$$ = !0;
        for ($i$$inline_4041_j$$104$$ = 0;$i$$inline_4041_j$$104$$ < $treeNodes$$.length;$i$$inline_4041_j$$104$$++) {
          if ($props$$13_startTime$$24$$ < $treeNodes$$[$i$$inline_4041_j$$104$$].$_startTime$) {
            $treeNodes$$.splice($i$$inline_4041_j$$104$$, 0, $item$$85_props$$inline_4039$$);
            $add_index$$207_items$$inline_4040$$ = !1;
            break;
          }
        }
        $add_index$$207_items$$inline_4040$$ && $treeNodes$$.push($item$$85_props$$inline_4039$$);
      }
    }
  }
  return $treeNodes$$;
};
$DvtTimelineSeriesParser$$.prototype.getDate = function $$DvtTimelineSeriesParser$$$$getDate$($date$$18$$) {
  return null == $date$$18$$ ? null : $date$$18$$.getTime ? $date$$18$$.getTime() : isNaN($date$$18$$) ? (new Date($date$$18$$)).getTime() + 0 : $date$$18$$;
};
$DvtTimelineSeriesParser$$.prototype.$ParseNodeAttributes$ = function $$DvtTimelineSeriesParser$$$$$ParseNodeAttributes$$($data$$127$$, $compStartTime$$1$$, $compEndTime$$1$$) {
  var $ret$$68$$ = {};
  $ret$$68$$.id = $data$$127$$.id;
  $ret$$68$$.$rowKey$ = $ret$$68$$.id;
  $ret$$68$$.startTime = this.getDate($data$$127$$.start);
  $ret$$68$$.endTime = this.getDate($data$$127$$.end);
  if (($ret$$68$$.endTime ? $ret$$68$$.endTime : $ret$$68$$.startTime) < $compStartTime$$1$$ || $ret$$68$$.startTime > $compEndTime$$1$$) {
    return null;
  }
  $ret$$68$$.title = $data$$127$$.title;
  $ret$$68$$.$desc$ = $data$$127$$.description;
  $ret$$68$$.$thumbnail$ = $data$$127$$.thumbnail;
  $ret$$68$$.data = $data$$127$$;
  $ret$$68$$.style = $data$$127$$.style;
  $ret$$68$$.action = $data$$127$$.action;
  $ret$$68$$.$durationFillColor$ = $data$$127$$.durationFillColor;
  $ret$$68$$.$spbs$ = $data$$127$$.showPopupBehaviors;
  return $ret$$68$$;
};
var $DvtTimelineSeriesRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesRenderer$$, dvt.$Obj$);
$DvtTimelineSeriesRenderer$$.$renderSeries$ = function $$DvtTimelineSeriesRenderer$$$$renderSeries$$($series$$37$$, $block$$1_width$$147$$, $context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$) {
  $DvtTimelineSeriesRenderer$$.$_renderBackground$($series$$37$$, $block$$1_width$$147$$, $context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$);
  $DvtTimelineSeriesRenderer$$.$_renderScrollableCanvas$($series$$37$$);
  $DvtTimelineSeriesRenderer$$.$_renderReferenceObjects$($series$$37$$, $series$$37$$.$_canvas$);
  $DvtTimelineSeriesRenderer$$.$_renderSeriesTicks$($series$$37$$);
  if (null != $series$$37$$.$_items$) {
    if (0 == $series$$37$$.$_blocks$.length) {
      $context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$ = $series$$37$$.$getCtx$();
      $block$$1_width$$147$$ = new dvt.$Container$($context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$, "itemBlock_" + $series$$37$$.$_fetchStartPos$ + "_" + $series$$37$$.$_fetchEndPos$);
      $block$$1_width$$147$$.$startPos$ = $series$$37$$.$_fetchStartPos$;
      $block$$1_width$$147$$.$endPos$ = $series$$37$$.$_fetchEndPos$;
      var $feelerBlock_i$$inline_4061$$ = new dvt.$Container$($context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$, "feelers");
      $block$$1_width$$147$$.$addChild$($feelerBlock_i$$inline_4061$$);
      $block$$1_width$$147$$.$feelers$ = $feelerBlock_i$$inline_4061$$;
      $context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$ = new dvt.$Container$($context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$, "durations");
      $block$$1_width$$147$$.$addChild$($context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$);
      $block$$1_width$$147$$.$durations$ = $context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$;
      $series$$37$$.$_canvas$.$addChild$($block$$1_width$$147$$);
      $series$$37$$.$_blocks$.push($block$$1_width$$147$$);
    } else {
      $block$$1_width$$147$$ = $series$$37$$.$_blocks$[0];
    }
    $series$$37$$.$prepareDurations$($series$$37$$.$_items$);
    $context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$ = $series$$37$$.$_items$;
    $series$$37$$.$isVertical$() ? $series$$37$$.$_initialSpacing$ = 20 * (0 < $series$$37$$.$_maxDurationSize$ ? 1 : 0) + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$37$$.$_maxDurationSize$ : $series$$37$$.$_initialSpacing$ = 20 + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$37$$.$_maxDurationSize$;
    for ($feelerBlock_i$$inline_4061$$ = 0;$feelerBlock_i$$inline_4061$$ < $context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$.length;$feelerBlock_i$$inline_4061$$++) {
      var $item$$inline_4062$$ = $context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$[$feelerBlock_i$$inline_4061$$], $loc$$inline_4063$$ = dvt.$TimeAxis$.$getDatePosition$($series$$37$$.$_start$, $series$$37$$.$_end$, $item$$inline_4062$$.$_startTime$, $series$$37$$.$_length$), $endTime$$inline_4064_span$$inline_4065$$ = $item$$inline_4062$$.$_endTime$;
      $endTime$$inline_4064_span$$inline_4065$$ && $endTime$$inline_4064_span$$inline_4065$$ != $item$$inline_4062$$.$_startTime$ && ($endTime$$inline_4064_span$$inline_4065$$ = dvt.$TimeAxis$.$getDatePosition$($series$$37$$.$_start$, $series$$37$$.$_end$, $endTime$$inline_4064_span$$inline_4065$$, $series$$37$$.$_length$) - $loc$$inline_4063$$, $loc$$inline_4063$$ += Math.min($DvtTimelineStyleUtils$$.$getDurationFeelerOffset$(), $endTime$$inline_4064_span$$inline_4065$$ / 2));
      $item$$inline_4062$$.$_loc$ = $loc$$inline_4063$$;
    }
    for ($feelerBlock_i$$inline_4061$$ = 0;$feelerBlock_i$$inline_4061$$ < $series$$37$$.$_items$.length;$feelerBlock_i$$inline_4061$$++) {
      $item$$inline_4062$$ = $series$$37$$.$_items$[$feelerBlock_i$$inline_4061$$], $loc$$inline_4063$$ = dvt.$TimeAxis$.$getDatePosition$($series$$37$$.$_start$, $series$$37$$.$_end$, $item$$inline_4062$$.$_startTime$, $series$$37$$.$_length$), $loc$$inline_4063$$ < $series$$37$$.$_fetchStartPos$ || $loc$$inline_4063$$ > $series$$37$$.$_fetchEndPos$ || $DvtTimelineSeriesItemRenderer$$.$initializeItem$($item$$inline_4062$$, $series$$37$$, $feelerBlock_i$$inline_4061$$);
    }
    $series$$37$$.$_isInitialRender$ ? ($series$$37$$.$_frAnimationElems$ = $series$$37$$.$_isIRAnimationEnabled$ ? [] : null, $series$$37$$.$_mvAnimator$ = null, $series$$37$$.$_rmAnimationElems$ = null) : $series$$37$$.$_allowUpdates$ && $series$$37$$.$_isDCAnimationEnabled$ ? ($series$$37$$.$_frAnimationElems$ = [], $series$$37$$.$_mvAnimator$ = new dvt.$Animator$($series$$37$$.$getCtx$(), $DvtTimelineStyleUtils$$.$getAnimationDuration$($series$$37$$.$Options$), 0, dvt.$Easing$.$cubicInOut$), 
    $series$$37$$.$_rmAnimationElems$ = []) : ($series$$37$$.$_frAnimationElems$ = null, $series$$37$$.$_mvAnimator$ = null, $series$$37$$.$_rmAnimationElems$ = null);
    $series$$37$$.$_hasMvAnimations$ = !1;
    $context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$ = Math.max(0, $series$$37$$.$_maxOverflowValue$ - $series$$37$$.$_size$);
    $series$$37$$.$_overflowOffset$ = $context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$;
    $DvtTimelineSeriesRenderer$$.$_adjustBackground$($series$$37$$, $context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$);
    $series$$37$$.$_oldItems$ && $DvtTimelineSeriesRenderer$$.$_removeItems$($series$$37$$.$_oldItems$, $series$$37$$, $block$$1_width$$147$$, $series$$37$$.$_rmAnimationElems$);
    $series$$37$$.$_oldItems$ = null;
    $series$$37$$.$isVertical$() && $block$$1_width$$147$$.$feelers$.$removeChildren$();
    $DvtTimelineSeriesRenderer$$.$_renderItems$($series$$37$$.$_items$, $series$$37$$, $block$$1_width$$147$$, $series$$37$$.$_fetchStartPos$, $series$$37$$.$_fetchEndPos$, $context$$430_durationBlock_height$$120_items$$inline_4060_overflowOffset$$7$$, $series$$37$$.$_frAnimationElems$, $series$$37$$.$_mvAnimator$);
    $DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$($series$$37$$);
    $DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$($series$$37$$);
  }
};
$DvtTimelineSeriesRenderer$$.$updateSeriesForZoom$ = function $$DvtTimelineSeriesRenderer$$$$updateSeriesForZoom$$($series$$38$$) {
  $DvtTimelineSeriesRenderer$$.$_updateItemsForZoom$($series$$38$$.$_items$, $series$$38$$);
  $DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$($series$$38$$);
  $DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$($series$$38$$);
};
$DvtTimelineSeriesRenderer$$.$_renderBackground$ = function $$DvtTimelineSeriesRenderer$$$$_renderBackground$$($series$$39$$, $width$$148$$, $height$$121$$) {
  if ($series$$39$$.$_background$) {
    var $addBackground$$ = !1;
    $series$$39$$.$_background$.$setWidth$($width$$148$$);
    $series$$39$$.$_background$.$setHeight$($height$$121$$);
  } else {
    $addBackground$$ = !0, $series$$39$$.$_background$ = new dvt.Rect($series$$39$$.$getCtx$(), 0, 0, $width$$148$$, $height$$121$$, "bg");
  }
  $series$$39$$.$_background$.$setCSSStyle$($series$$39$$.$_style$);
  $series$$39$$.$_background$.$setPixelHinting$();
  $series$$39$$.$_background$.setCursor("move");
  $addBackground$$ && $series$$39$$.$addChild$($series$$39$$.$_background$);
};
$DvtTimelineSeriesRenderer$$.$_adjustBackground$ = function $$DvtTimelineSeriesRenderer$$$$_adjustBackground$$($series$$40$$, $overflowOffset$$8$$) {
  var $isRTL$$59$$ = dvt.$Agent$.$isRightToLeft$($series$$40$$.$getCtx$());
  0 < $overflowOffset$$8$$ && ($series$$40$$.$isVertical$() ? $series$$40$$.$_background$.$setWidth$($series$$40$$.$_maxOverflowValue$) : $series$$40$$.$_background$.$setHeight$($series$$40$$.$_maxOverflowValue$));
  if ($series$$40$$.$isVertical$()) {
    if (!$series$$40$$.$_isInverted$ && !$isRTL$$59$$ || $series$$40$$.$_isInverted$ && $isRTL$$59$$) {
      $series$$40$$.$_background$.$setTranslateX$(-$overflowOffset$$8$$), null != $series$$40$$.$_canvas$ && $series$$40$$.$_canvas$.$setTranslateX$(0 - $overflowOffset$$8$$);
    }
  } else {
    $series$$40$$.$_isInverted$ || ($series$$40$$.$_background$.$setTranslateY$(-$overflowOffset$$8$$), null != $series$$40$$.$_canvas$ && $series$$40$$.$_canvas$.$setTranslateY$(0 - $overflowOffset$$8$$));
  }
};
$DvtTimelineSeriesRenderer$$.$_renderScrollableCanvas$ = function $$DvtTimelineSeriesRenderer$$$$_renderScrollableCanvas$$($series$$41$$) {
  $series$$41$$.$_canvas$ ? ($series$$41$$.$_canvasOffsetX$ = $series$$41$$.$_canvas$.$getTranslateX$(), $series$$41$$.$_canvasOffsetY$ = $series$$41$$.$_canvas$.$getTranslateY$(), $series$$41$$.$_canvas$.$setTranslateX$(0), $series$$41$$.$_canvas$.$setTranslateY$(0)) : ($series$$41$$.$_canvas$ = new dvt.$Container$($series$$41$$.$getCtx$(), "canvas"), $series$$41$$.$addChild$($series$$41$$.$_canvas$));
};
$DvtTimelineSeriesRenderer$$.$_renderItems$ = function $$DvtTimelineSeriesRenderer$$$$_renderItems$$($items$$40$$, $series$$42$$, $container$$194$$, $startPos$$8$$, $endPos$$7$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$) {
  for (var $i$$684$$ = 0;$i$$684$$ < $items$$40$$.length;$i$$684$$++) {
    var $item$$87$$ = $items$$40$$[$i$$684$$], $loc$$7$$ = dvt.$TimeAxis$.$getDatePosition$($series$$42$$.$_start$, $series$$42$$.$_end$, $item$$87$$.$_startTime$, $series$$42$$.$_length$);
    $loc$$7$$ < $startPos$$8$$ || $loc$$7$$ > $endPos$$7$$ || $DvtTimelineSeriesItemRenderer$$.$renderItem$($item$$87$$, $series$$42$$, $container$$194$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$);
  }
  if (dvt.$TimeAxis$.$supportsTouch$()) {
    for ($i$$684$$ = 0;$i$$684$$ < $items$$40$$.length - 1;$i$$684$$++) {
      $item$$87$$ = $items$$40$$[$i$$684$$], $item$$87$$.$_displayable$.$_setAriaProperty$("flowto", "_bt_" + $items$$40$$[$i$$684$$ + 1].getId());
    }
  }
  $DvtTimelineSeriesRenderer$$.$_renderDurations$($items$$40$$, $series$$42$$, $container$$194$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$);
};
$DvtTimelineSeriesRenderer$$.$_updateItemsForZoom$ = function $$DvtTimelineSeriesRenderer$$$$_updateItemsForZoom$$($items$$41$$, $series$$43$$) {
  if (null != $items$$41$$ && 0 != $items$$41$$.length) {
    var $endPos$$8_i$$685$$ = $series$$43$$.$_fetchEndPos$, $block$$2_item$$88$$ = $series$$43$$.$_blocks$[0];
    $block$$2_item$$88$$.$startPos$ = $series$$43$$.$_fetchStartPos$;
    $block$$2_item$$88$$.$endPos$ = $endPos$$8_i$$685$$;
    $series$$43$$.$isVertical$() ? $series$$43$$.$_initialSpacing$ = 20 * (0 < $series$$43$$.$_maxDurationSize$ ? 1 : 0) + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$43$$.$_maxDurationSize$ : $series$$43$$.$_initialSpacing$ = 20 + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$43$$.$_maxDurationSize$;
    for ($endPos$$8_i$$685$$ = 0;$endPos$$8_i$$685$$ < $items$$41$$.length;$endPos$$8_i$$685$$++) {
      var $block$$2_item$$88$$ = $items$$41$$[$endPos$$8_i$$685$$], $span$$1_startTime$$25$$ = $block$$2_item$$88$$.$_startTime$, $itemTime_loc$$8_overflowOffset$$10$$ = dvt.$TimeAxis$.$getDatePosition$($series$$43$$.$_start$, $series$$43$$.$_end$, $span$$1_startTime$$25$$, $series$$43$$.$_length$), $endTime$$23$$ = $block$$2_item$$88$$.$_endTime$;
      $endTime$$23$$ && $endTime$$23$$ != $span$$1_startTime$$25$$ && ($span$$1_startTime$$25$$ = dvt.$TimeAxis$.$getDatePosition$($series$$43$$.$_start$, $series$$43$$.$_end$, $endTime$$23$$, $series$$43$$.$_length$) - $itemTime_loc$$8_overflowOffset$$10$$, $itemTime_loc$$8_overflowOffset$$10$$ += Math.min($DvtTimelineStyleUtils$$.$getDurationFeelerOffset$(), $span$$1_startTime$$25$$ / 2));
      $block$$2_item$$88$$.$_loc$ = $itemTime_loc$$8_overflowOffset$$10$$;
      $series$$43$$.$_isRandomItemLayout$ || ($block$$2_item$$88$$.$_spacing$ = null);
    }
    for ($endPos$$8_i$$685$$ = 0;$endPos$$8_i$$685$$ < $items$$41$$.length;$endPos$$8_i$$685$$++) {
      $block$$2_item$$88$$ = $items$$41$$[$endPos$$8_i$$685$$], $itemTime_loc$$8_overflowOffset$$10$$ = $block$$2_item$$88$$.$_startTime$, $itemTime_loc$$8_overflowOffset$$10$$ < $series$$43$$.$_start$ || $itemTime_loc$$8_overflowOffset$$10$$ > $series$$43$$.$_end$ || $DvtTimelineSeriesItemRenderer$$.$_updateBubble$($block$$2_item$$88$$, $series$$43$$, $endPos$$8_i$$685$$);
    }
    $itemTime_loc$$8_overflowOffset$$10$$ = Math.max(0, $series$$43$$.$_maxOverflowValue$ - $series$$43$$.$_size$);
    $DvtTimelineSeriesRenderer$$.$_adjustBackground$($series$$43$$, $itemTime_loc$$8_overflowOffset$$10$$);
    for ($endPos$$8_i$$685$$ = 0;$endPos$$8_i$$685$$ < $items$$41$$.length;$endPos$$8_i$$685$$++) {
      $block$$2_item$$88$$ = $items$$41$$[$endPos$$8_i$$685$$], $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($block$$2_item$$88$$, $series$$43$$, $itemTime_loc$$8_overflowOffset$$10$$, null, !1), $DvtTimelineSeriesItemRenderer$$.$_updateFeeler$($block$$2_item$$88$$, $series$$43$$, $itemTime_loc$$8_overflowOffset$$10$$, null), $DvtTimelineSeriesItemRenderer$$.$_updateDuration$($block$$2_item$$88$$, $series$$43$$, $itemTime_loc$$8_overflowOffset$$10$$, null);
    }
  }
};
$DvtTimelineSeriesRenderer$$.$_renderDurations$ = function $$DvtTimelineSeriesRenderer$$$$_renderDurations$$($items$$42$$, $series$$44$$, $container$$195_durationBlock$$1$$, $overflowOffset$$11$$, $frAnimationElems$$3$$, $mvAnimator$$3$$) {
  $container$$195_durationBlock$$1$$ = $container$$195_durationBlock$$1$$.$durations$;
  for (var $i$$686$$ = $series$$44$$.$_maxDurationSize$;0 < $i$$686$$;$i$$686$$--) {
    for (var $j$$105$$ = 0;$j$$105$$ < $items$$42$$.length;$j$$105$$++) {
      var $item$$89$$ = $items$$42$$[$j$$105$$], $startTime$$26$$ = $item$$89$$.$_startTime$, $endTime$$24$$ = $item$$89$$.$_endTime$;
      $endTime$$24$$ && $endTime$$24$$ != $startTime$$26$$ && $i$$686$$ == $item$$89$$.$_durationLevel$ && $DvtTimelineSeriesItemRenderer$$.$renderDuration$($item$$89$$, $series$$44$$, $container$$195_durationBlock$$1$$, $overflowOffset$$11$$, $frAnimationElems$$3$$, $mvAnimator$$3$$);
    }
  }
};
$DvtTimelineSeriesRenderer$$.$_renderSeriesTicks$ = function $$DvtTimelineSeriesRenderer$$$$_renderSeriesTicks$$($series$$45$$) {
  null == $series$$45$$.$_seriesTicks$ ? ($series$$45$$.$_seriesTicks$ = new dvt.$Container$($series$$45$$.$getCtx$()), $series$$45$$.$_canvas$.$addChild$($series$$45$$.$_seriesTicks$)) : ($series$$45$$.$_seriesTicks$.$removeChildren$(), $series$$45$$.$_seriesTicksArray$ = []);
  if ($series$$45$$.$_scale$ && $series$$45$$.$_timeAxis$) {
    var $separatorStyle$$1$$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getSeriesAxisSeparatorStyle$());
    if ($series$$45$$.$_axisStyleDefaults$) {
      var $separatorColor$$ = $series$$45$$.$_axisStyleDefaults$.separatorColor;
      $separatorColor$$ && $separatorStyle$$1$$.$parseInlineStyle$("color:" + $separatorColor$$ + ";");
    }
    $series$$45$$.$_separatorStroke$ = new dvt.$SolidStroke$($separatorStyle$$1$$.$getStyle$(dvt.$CSSStyle$.$COLOR$));
    $series$$45$$.$_separatorStroke$.$setStyle$(dvt.$Stroke$.$DASHED$, 3);
    $DvtTimelineSeriesRenderer$$.$_renderSeriesTimeAxis$($series$$45$$, $series$$45$$.$_fetchStartPos$, $series$$45$$.$_fetchEndPos$, $series$$45$$.$_seriesTicks$);
  }
};
$DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$ = function $$DvtTimelineSeriesRenderer$$$$_updateSeriesTicks$$($series$$46$$) {
  for (var $isRTL$$60$$ = dvt.$Agent$.$isRightToLeft$($series$$46$$.$getCtx$()), $i$$687$$ = 0;$i$$687$$ < $series$$46$$.$_seriesTicksArray$.length;$i$$687$$++) {
    var $tick$$ = $series$$46$$.$_seriesTicksArray$[$i$$687$$], $pos$$74$$ = !$series$$46$$.$isVertical$() && $isRTL$$60$$ ? $series$$46$$.$_length$ - dvt.$TimeAxis$.$getDatePosition$($series$$46$$.$_start$, $series$$46$$.$_end$, $tick$$.time, $series$$46$$.$_length$) : dvt.$TimeAxis$.$getDatePosition$($series$$46$$.$_start$, $series$$46$$.$_end$, $tick$$.time, $series$$46$$.$_length$);
    $series$$46$$.$isVertical$() ? ($tick$$.$setX1$(0), $tick$$.$setY1$($pos$$74$$), $tick$$.$setX2$($series$$46$$.$_maxOverflowValue$), $tick$$.$setY2$($pos$$74$$)) : ($tick$$.$setX1$($pos$$74$$), $tick$$.$setY1$(0), $tick$$.$setX2$($pos$$74$$), $tick$$.$setY2$($series$$46$$.$_maxOverflowValue$));
  }
};
$DvtTimelineSeriesRenderer$$.$_renderSeriesTimeAxis$ = function $$DvtTimelineSeriesRenderer$$$$_renderSeriesTimeAxis$$($series$$47$$, $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$, $endPos$$9_i$$688$$, $container$$196$$) {
  var $isRTL$$61$$ = dvt.$Agent$.$isRightToLeft$($series$$47$$.$getCtx$()), $dates$$5$$, $start$$50$$ = $series$$47$$.$_start$, $end$$32$$ = $series$$47$$.$_end$;
  if ($series$$47$$.$_customTimeScales$ && $series$$47$$.$_customTimeScales$[$series$$47$$.$_scale$]) {
    $dates$$5$$ = $series$$47$$.$_customTimeScales$[$series$$47$$.$_scale$].times;
  } else {
    if ($series$$47$$.$_customFormatScales$ && $series$$47$$.$_customFormatScales$[$series$$47$$.$_scale$]) {
      $dates$$5$$ = $series$$47$$.$_customFormatScales$[$series$$47$$.$_scale$].times;
    } else {
      $dates$$5$$ = [];
      $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ = dvt.$TimeAxis$.$getPositionDate$($start$$50$$, $end$$32$$, $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$, $series$$47$$.$_length$);
      var $currentDate$$2_currentTime$$2$$ = $series$$47$$.$_timeAxis$.$adjustDate$($currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$);
      $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ = dvt.$TimeAxis$.$getDatePosition$($start$$50$$, $end$$32$$, $currentDate$$2_currentTime$$2$$, $series$$47$$.$_length$);
      for ($dates$$5$$.push($currentDate$$2_currentTime$$2$$.getTime());$currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ < $endPos$$9_i$$688$$;) {
        $currentDate$$2_currentTime$$2$$ = $series$$47$$.$_timeAxis$.$getNextDate$($currentDate$$2_currentTime$$2$$.getTime()), $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ = dvt.$TimeAxis$.$getDatePosition$($start$$50$$, $end$$32$$, $currentDate$$2_currentTime$$2$$, $series$$47$$.$_length$), $dates$$5$$.push($currentDate$$2_currentTime$$2$$.getTime());
      }
    }
  }
  for ($endPos$$9_i$$688$$ = 0;$endPos$$9_i$$688$$ < $dates$$5$$.length - 1;$endPos$$9_i$$688$$++) {
    $currentDate$$2_currentTime$$2$$ = $dates$$5$$[$endPos$$9_i$$688$$];
    $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ = dvt.$TimeAxis$.$getDatePosition$($start$$50$$, $end$$32$$, $currentDate$$2_currentTime$$2$$, $series$$47$$.$_length$);
    var $pos$$75_y2$$33$$ = !$series$$47$$.$isVertical$() && $isRTL$$61$$ ? $series$$47$$.$_length$ - $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ : $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$;
    if ($series$$47$$.$isVertical$()) {
      var $x1$$47$$ = 0, $y1$$34$$ = $pos$$75_y2$$33$$, $x2$$45$$ = $series$$47$$.$_maxOverflowValue$
    } else {
      $x1$$47$$ = $pos$$75_y2$$33$$, $y1$$34$$ = 0, $x2$$45$$ = $pos$$75_y2$$33$$, $pos$$75_y2$$33$$ = $series$$47$$.$_maxOverflowValue$;
    }
    $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$ = $series$$47$$.$addTick$($container$$196$$, $x1$$47$$, $x2$$45$$, $y1$$34$$, $pos$$75_y2$$33$$, $series$$47$$.$_separatorStroke$, "o_tick" + $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$);
    $currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$.time = $currentDate$$2_currentTime$$2$$;
    $series$$47$$.$_seriesTicksArray$.push($currentPos$$3_startDate$$2_startPos$$10_tickElem$$1$$);
  }
};
$DvtTimelineSeriesRenderer$$.$_renderReferenceObjects$ = function $$DvtTimelineSeriesRenderer$$$$_renderReferenceObjects$$($series$$48$$, $container$$197$$) {
  var $context$$434$$ = $series$$48$$.$getCtx$(), $isRTL$$62$$ = dvt.$Agent$.$isRightToLeft$($context$$434$$);
  null == $series$$48$$.$_refObjectsContainer$ && ($series$$48$$.$_refObjectsContainer$ = new dvt.$Container$($context$$434$$), $container$$197$$.$addChild$($series$$48$$.$_refObjectsContainer$));
  var $referenceObjects$$4$$ = $series$$48$$.$_referenceObjects$;
  if ($referenceObjects$$4$$) {
    for (var $maxRefObjects$$ = Math.min(1, $referenceObjects$$4$$.length), $i$$689$$ = 0;$i$$689$$ < $maxRefObjects$$;$i$$689$$++) {
      var $refObject$$ = $referenceObjects$$4$$[$i$$689$$];
      if ($refObject$$) {
        var $pos$$76_ref$$2$$ = dvt.$TimeAxis$.$getDatePosition$($series$$48$$.$_start$, $series$$48$$.$_end$, $refObject$$, $series$$48$$.$_length$);
        if (0 == $series$$48$$.$_renderedReferenceObjects$.length) {
          $series$$48$$.$isVertical$() ? $pos$$76_ref$$2$$ = new dvt.$Line$($context$$434$$, 0, $pos$$76_ref$$2$$, $series$$48$$.$_maxOverflowValue$, $pos$$76_ref$$2$$, "zoomOrder[i]") : ($isRTL$$62$$ && ($pos$$76_ref$$2$$ = $series$$48$$.$_length$ - $pos$$76_ref$$2$$), $pos$$76_ref$$2$$ = new dvt.$Line$($context$$434$$, $pos$$76_ref$$2$$, 0, $pos$$76_ref$$2$$, $series$$48$$.$_maxOverflowValue$, "zoomOrder[i]"));
          var $referenceObjectStroke$$ = new dvt.$SolidStroke$($DvtTimelineStyleUtils$$.$getReferenceObjectColor$($series$$48$$.$Options$));
          $pos$$76_ref$$2$$.$setStroke$($referenceObjectStroke$$);
          $pos$$76_ref$$2$$.$setPixelHinting$();
          $pos$$76_ref$$2$$.$date$ = $refObject$$;
          $series$$48$$.$_refObjectsContainer$.$addChild$($pos$$76_ref$$2$$);
          $series$$48$$.$_renderedReferenceObjects$[$i$$689$$] = $pos$$76_ref$$2$$;
        }
      }
    }
  } else {
    $series$$48$$.$_refObjectsContainer$.$removeChildren$(), $series$$48$$.$_renderedReferenceObjects$ = [];
  }
};
$DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$ = function $$DvtTimelineSeriesRenderer$$$$_updateReferenceObjects$$($series$$49$$) {
  for (var $isRTL$$63$$ = dvt.$Agent$.$isRightToLeft$($series$$49$$.$getCtx$()), $i$$690$$ = 0;$i$$690$$ < $series$$49$$.$_renderedReferenceObjects$.length;$i$$690$$++) {
    var $ref$$3$$ = $series$$49$$.$_renderedReferenceObjects$[$i$$690$$], $pos$$77$$ = dvt.$TimeAxis$.$getDatePosition$($series$$49$$.$_start$, $series$$49$$.$_end$, $ref$$3$$.$date$, $series$$49$$.$_length$);
    $series$$49$$.$isVertical$() ? ($ref$$3$$.$setX1$(0), $ref$$3$$.$setY1$($pos$$77$$), $ref$$3$$.$setX2$($series$$49$$.$_maxOverflowValue$), $ref$$3$$.$setY2$($pos$$77$$)) : ($isRTL$$63$$ && ($pos$$77$$ = $series$$49$$.$_length$ - $pos$$77$$), $ref$$3$$.$setX1$($pos$$77$$), $ref$$3$$.$setY1$(0), $ref$$3$$.$setX2$($pos$$77$$), $ref$$3$$.$setY2$($series$$49$$.$_maxOverflowValue$));
  }
};
$DvtTimelineSeriesRenderer$$.$_removeItems$ = function $$DvtTimelineSeriesRenderer$$$$_removeItems$$($items$$43$$, $series$$50$$, $container$$198$$, $animationElems$$3_i$$691$$) {
  if ($animationElems$$3_i$$691$$) {
    $DvtTimelineSeriesRenderer$$.$_animateItemRemoval$($items$$43$$, $series$$50$$, $animationElems$$3_i$$691$$);
  } else {
    for ($animationElems$$3_i$$691$$ = 0;$animationElems$$3_i$$691$$ < $items$$43$$.length;$animationElems$$3_i$$691$$++) {
      var $item$$90$$ = $items$$43$$[$animationElems$$3_i$$691$$];
      $container$$198$$.removeChild($item$$90$$.$_displayable$);
      $series$$50$$.$isVertical$() || $container$$198$$.$feelers$.removeChild($item$$90$$.$_feeler$);
      var $startTime$$27$$ = $item$$90$$.$_startTime$, $endTime$$25$$ = $item$$90$$.$_endTime$;
      $endTime$$25$$ && $endTime$$25$$ != $startTime$$27$$ && $container$$198$$.$durations$.removeChild($item$$90$$.$_durationBar$);
    }
  }
};
$DvtTimelineSeriesRenderer$$.$_animateItemRemoval$ = function $$DvtTimelineSeriesRenderer$$$$_animateItemRemoval$$($items$$44$$, $series$$51$$, $animationElems$$4$$) {
  for (var $i$$692$$ = 0;$i$$692$$ < $items$$44$$.length;$i$$692$$++) {
    var $durationBar$$2_item$$91$$ = $items$$44$$[$i$$692$$], $bubble$$3_feeler$$6_startTime$$28$$ = $durationBar$$2_item$$91$$.$_displayable$;
    $series$$51$$.$isVertical$() ? $bubble$$3_feeler$$6_startTime$$28$$.$setTranslateX$($bubble$$3_feeler$$6_startTime$$28$$.$getTranslateX$() + $series$$51$$.$_canvasOffsetX$ + $series$$51$$.$_overflowOffset$) : $bubble$$3_feeler$$6_startTime$$28$$.$setTranslateY$($bubble$$3_feeler$$6_startTime$$28$$.$getTranslateY$() + $series$$51$$.$_canvasOffsetY$ + $series$$51$$.$_overflowOffset$);
    $animationElems$$4$$.push($bubble$$3_feeler$$6_startTime$$28$$);
    $series$$51$$.$isVertical$() || ($bubble$$3_feeler$$6_startTime$$28$$ = $durationBar$$2_item$$91$$.$_feeler$, $bubble$$3_feeler$$6_startTime$$28$$.$setTranslateY$($bubble$$3_feeler$$6_startTime$$28$$.$getTranslateY$() + $series$$51$$.$_canvasOffsetY$ + $series$$51$$.$_overflowOffset$), $animationElems$$4$$.push($bubble$$3_feeler$$6_startTime$$28$$));
    var $bubble$$3_feeler$$6_startTime$$28$$ = $durationBar$$2_item$$91$$.$_startTime$, $endTime$$26$$ = $durationBar$$2_item$$91$$.$_endTime$;
    $endTime$$26$$ && $endTime$$26$$ != $bubble$$3_feeler$$6_startTime$$28$$ && ($durationBar$$2_item$$91$$ = $durationBar$$2_item$$91$$.$_durationBar$, $series$$51$$.$isVertical$() ? $durationBar$$2_item$$91$$.$setTranslateX$($durationBar$$2_item$$91$$.$getTranslateX$() + $series$$51$$.$_canvasOffsetX$ + $series$$51$$.$_overflowOffset$) : $durationBar$$2_item$$91$$.$setTranslateY$($durationBar$$2_item$$91$$.$getTranslateY$() + $series$$51$$.$_canvasOffsetY$ + $series$$51$$.$_overflowOffset$), $animationElems$$4$$.push($durationBar$$2_item$$91$$));
  }
};

  return dvt;
});
