/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtGauge"], function($oj$$16$$, $$$$16$$, $comp$$6$$, $base$$4$$, $dvt$$2$$) {
  $oj$$16$$.$__registerWidget$("oj.dvtBaseGauge", $$$$16$$.oj.dvtBaseComponent, {$_ProcessStyles$:function() {
    this._super();
    this.options._thresholdColors = [this.options._threshold1, this.options._threshold2, this.options._threshold3];
    this.options._threshold1 = null;
    this.options._threshold2 = null;
    this.options._threshold3 = null;
  }, $_AfterCreate$:function() {
    this._super();
    this.option("rawValue", this.options.value, {_context:{$writeback$:!0, $internalSet$:!0}});
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$2$$ = this._super();
    $styleClasses$$2$$["oj-gauge-metric-label"] = {path:"metricLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$2$$["oj-gauge-tick-label"] = {path:"tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$2$$["oj-gauge-threshold1"] = {path:"_threshold1", property:"color"};
    $styleClasses$$2$$["oj-gauge-threshold2"] = {path:"_threshold2", property:"color"};
    $styleClasses$$2$$["oj-gauge-threshold3"] = {path:"_threshold3", property:"color"};
    return $styleClasses$$2$$;
  }, $_GetEventTypes$:function() {
    return["input", "optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$11$$ = this.options.translations, $ret$$33$$ = this._super();
    $ret$$33$$["DvtGaugeBundle.EMPTY_TEXT"] = $translations$$11$$.labelNoData;
    $ret$$33$$["DvtUtilBundle.GAUGE"] = $translations$$11$$.componentName;
    return $ret$$33$$;
  }, $_HandleEvent$:function($event$$376$$) {
    if ("valueChange" === $event$$376$$.type) {
      var $newValue$$12$$ = $event$$376$$.newValue;
      $event$$376$$.complete ? this.$_UserOptionChange$("value", $newValue$$12$$) : (this._trigger("input", null, {value:$newValue$$12$$}), this.$_UserOptionChange$("rawValue", $newValue$$12$$));
    } else {
      this._super($event$$376$$);
    }
  }, _setOption:function($key$$95$$, $value$$244$$, $flags$$25$$) {
    "rawValue" === $key$$95$$ ? $oj$$16$$.$Logger$.error("'rawValue' is a read-only option and cannot be set") : ("value" === $key$$95$$ && this.option("rawValue", $value$$244$$, {_context:{$writeback$:!0, $internalSet$:!0}}), this._super($key$$95$$, $value$$244$$, $flags$$25$$));
  }, $_ConvertLocatorToSubId$:function($locator$$21$$) {
    var $subId$$27$$ = $locator$$21$$.subId;
    if ("oj-dialgauge-tooltip" == $subId$$27$$ || "oj-ledgauge-tooltip" == $subId$$27$$ || "oj-ratinggauge-tooltip" == $subId$$27$$ || "oj-statusmetergauge-tooltip" == $subId$$27$$) {
      $subId$$27$$ = "tooltip";
    }
    "oj-ratinggauge-item" == $subId$$27$$ && null != $locator$$21$$.index && ($subId$$27$$ = "item[" + $locator$$21$$.index + "]");
    return $subId$$27$$;
  }}, !0);
  $oj$$16$$.$__registerWidget$("oj.ojLedGauge", $$$$16$$.oj.dvtBaseGauge, {widgetEventPrefix:"oj", options:{}, $_CreateDvtComponent$:function($context$$84$$, $callback$$105$$, $callbackObj$$1$$) {
    this._focusable({element:this.element, applyHighlight:!0});
    return $dvt$$2$$.LedGauge.newInstance($context$$84$$, $callback$$105$$, $callbackObj$$1$$);
  }, $_ConvertSubIdToLocator$:function($subId$$28$$) {
    var $locator$$22$$ = {};
    "tooltip" == $subId$$28$$ && ($locator$$22$$.subId = "oj-ledgauge-tooltip");
    return $locator$$22$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$3$$ = this._super();
    $styleClasses$$3$$.push("oj-ledgauge");
    return $styleClasses$$3$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
  $oj$$16$$.$__registerWidget$("oj.ojRatingGauge", $$$$16$$.oj.dvtBaseGauge, {widgetEventPrefix:"oj", options:{input:null, optionChange:null, rawValue:void 0}, $_CreateDvtComponent$:function($context$$85$$, $callback$$106$$, $callbackObj$$2$$) {
    this._focusable({element:this.element, applyHighlight:!0});
    return $dvt$$2$$.RatingGauge.newInstance($context$$85$$, $callback$$106$$, $callbackObj$$2$$);
  }, $_ConvertSubIdToLocator$:function($subId$$29$$) {
    var $locator$$23$$ = {};
    "tooltip" == $subId$$29$$ ? $locator$$23$$.subId = "oj-ratinggauge-tooltip" : 0 == $subId$$29$$.indexOf("item") && ($locator$$23$$.subId = "oj-ratinggauge-item", $locator$$23$$.index = this.$_GetFirstIndex$($subId$$29$$));
    return $locator$$23$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$4$$ = this._super();
    $styleClasses$$4$$.push("oj-ratinggauge");
    return $styleClasses$$4$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, $_UserOptionChange$:function($key$$96$$, $value$$245$$) {
    this._superApply(arguments);
    "value" == $key$$96$$ && this.$_UserOptionChange$("changed", !0);
  }});
  $oj$$16$$.$__registerWidget$("oj.ojDialGauge", $$$$16$$.oj.dvtBaseGauge, {widgetEventPrefix:"oj", options:{input:null, optionChange:null, rawValue:void 0}, $_CreateDvtComponent$:function($context$$86$$, $callback$$107$$, $callbackObj$$3$$) {
    this._focusable({element:this.element, applyHighlight:!0});
    return $dvt$$2$$.DialGauge.newInstance($context$$86$$, $callback$$107$$, $callbackObj$$3$$);
  }, $_ConvertSubIdToLocator$:function($subId$$30$$) {
    var $locator$$24$$ = {};
    "tooltip" == $subId$$30$$ && ($locator$$24$$.subId = "oj-dialgauge-tooltip");
    return $locator$$24$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$5$$ = this._super();
    $styleClasses$$5$$.push("oj-dialgauge");
    return $styleClasses$$5$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this.$_setImages$();
    this._super();
  }, $_setImages$:function() {
    var $backgroundImages_indicatorInfo$$ = this.options.background;
    null == $backgroundImages_indicatorInfo$$ && ($backgroundImages_indicatorInfo$$ = "circleAlta", this.options.background = "circleAlta");
    var $indicatorImages$$ = this.options.indicator;
    null == $indicatorImages$$ && ($indicatorImages$$ = "needleAlta", this.options.indicator = "needleAlta");
    if ("string" === typeof $backgroundImages_indicatorInfo$$) {
      var $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"), width:200, height:200}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"), width:400, height:400}];
      "rectangleAlta" === $backgroundImages_indicatorInfo$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"), width:200, height:154}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"), width:400, height:309}] : "domeAlta" === $backgroundImages_indicatorInfo$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"), 
      width:200, height:154}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"), width:400, height:309}] : "circleAntique" === $backgroundImages_indicatorInfo$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"), width:200, height:200}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"), width:400, height:400}] : "rectangleAntique" === 
      $backgroundImages_indicatorInfo$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"), width:200, height:168}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"), width:400, height:335}] : "domeAntique" === $backgroundImages_indicatorInfo$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"), 
      width:200, height:176}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"), width:400, height:352}] : "circleLight" === $backgroundImages_indicatorInfo$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-circle-200x200.png"), width:200, height:200}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-circle-400x400.png"), width:400, height:400}] : "rectangleLight" === 
      $backgroundImages_indicatorInfo$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"), width:200, height:154}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-rectangle-400x400.png"), width:400, height:307}] : "domeLight" === $backgroundImages_indicatorInfo$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-dome-200x200.png"), 
      width:200, height:138}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-dome-400x400.png"), width:400, height:276}] : "circleDark" === $backgroundImages_indicatorInfo$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"), width:200, height:200}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"), width:400, height:400}] : "rectangleDark" === 
      $backgroundImages_indicatorInfo$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"), width:200, height:154}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-rectangle-400x400.png"), width:400, height:307}] : "domeDark" === $backgroundImages_indicatorInfo$$ && ($backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"), width:200, 
      height:138}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"), width:400, height:276}]);
      this.options._backgroundImages = $backgroundInfo$$;
    }
    "string" === typeof $indicatorImages$$ && ($backgroundImages_indicatorInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"), width:374, height:575}], "needleAntique" === $indicatorImages$$ ? $backgroundImages_indicatorInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"), width:81, height:734}] : "needleDark" === $indicatorImages$$ ? $backgroundImages_indicatorInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"), 
    width:454, height:652}] : "needleLight" === $indicatorImages$$ && ($backgroundImages_indicatorInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"), width:454, height:652}]), this.options._indicatorImages = $backgroundImages_indicatorInfo$$);
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
  $oj$$16$$.$__registerWidget$("oj.ojStatusMeterGauge", $$$$16$$.oj.dvtBaseGauge, {widgetEventPrefix:"oj", options:{input:null, optionChange:null, rawValue:void 0}, $_CreateDvtComponent$:function($context$$87$$, $callback$$108$$, $callbackObj$$4$$) {
    this._focusable({element:this.element, applyHighlight:!0});
    return $dvt$$2$$.StatusMeterGauge.newInstance($context$$87$$, $callback$$108$$, $callbackObj$$4$$);
  }, $_ConvertSubIdToLocator$:function($subId$$31$$) {
    var $locator$$25$$ = {};
    "tooltip" == $subId$$31$$ && ($locator$$25$$.subId = "oj-statusmetergauge-tooltip");
    return $locator$$25$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$6$$ = this._super();
    $styleClasses$$6$$.push("oj-statusmetergauge");
    return $styleClasses$$6$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
});
