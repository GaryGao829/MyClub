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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojbutton"], function($oj$$52$$, $$$$46$$) {
  (function() {
    $oj$$52$$.$__registerWidget$("oj.ojInputNumber", $$$$46$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:$oj$$52$$.$Validation$.$converterFactory$($oj$$52$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER).createConverter(), max:null, min:null, placeholder:void 0, rawValue:void 0, readOnly:!1, step:1, value:null}, getNodeBySubId:function($locator$$49$$) {
      var $node$$105$$ = this._superApply(arguments), $subId$$53$$;
      $node$$105$$ || ($subId$$53$$ = $locator$$49$$.subId, "oj-inputnumber-up" === $subId$$53$$ && ($node$$105$$ = this.widget().find(".oj-inputnumber-up")[0]), "oj-inputnumber-down" === $subId$$53$$ && ($node$$105$$ = this.widget().find(".oj-inputnumber-down")[0]), "oj-inputnumber-input" === $subId$$53$$ && ($node$$105$$ = this.widget().find(".oj-inputnumber-input")[0]));
      return $node$$105$$ || null;
    }, getSubIdByNode:function($node$$106$$) {
      var $subId$$54$$ = null;
      null != $node$$106$$ && ($node$$106$$ === this.widget().find(".oj-inputnumber-up")[0] ? $subId$$54$$ = {subId:"oj-inputnumber-up"} : $node$$106$$ === this.widget().find(".oj-inputnumber-down")[0] ? $subId$$54$$ = {subId:"oj-inputnumber-down"} : $node$$106$$ === this.widget().find(".oj-inputnumber-input")[0] && ($subId$$54$$ = {subId:"oj-inputnumber-input"}));
      return $subId$$54$$ || this._superApply(arguments);
    }, refresh:function() {
      this._super();
      this.$_setup$();
    }, stepDown:function($steps$$1$$) {
      this.$_step$($steps$$1$$, !1);
    }, stepUp:function($steps$$2$$) {
      this.$_step$($steps$$2$$, !0);
    }, widget:function() {
      return this.$uiInputNumber$;
    }, $_InitOptions$:function($originalDefaults$$15$$, $constructorOptions$$17$$) {
      var $opts$$30$$ = this.options, $self$$187$$ = this;
      this._superApply(arguments);
      $oj$$52$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"placeholder"}, {$attribute$:"value"}, {$attribute$:"readonly", option:"readOnly", $validateOption$:!0}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title"}, {$attribute$:"min"}, {$attribute$:"max"}, {$attribute$:"step"}], $constructorOptions$$17$$, this, function($initializedOptions$$2$$) {
        for (var $toParse$$1$$ = ["value", "step", "min", "max"], $i$$424$$ = 0;$i$$424$$ < $toParse$$1$$.length;$i$$424$$++) {
          var $opt$$23$$ = $toParse$$1$$[$i$$424$$], $value$$296$$ = $opt$$23$$ in $initializedOptions$$2$$ ? $initializedOptions$$2$$[$opt$$23$$] : $opts$$30$$[$opt$$23$$];
          null != $value$$296$$ && ($initializedOptions$$2$$[$opt$$23$$] = "step" === $opt$$23$$ ? $self$$187$$.$_parseStep$($value$$296$$) : $self$$187$$.$_parse$($opt$$23$$, $value$$296$$));
        }
      });
      if (void 0 === $opts$$30$$.value) {
        throw Error("ojInputNumber has no value");
      }
      if (null != $opts$$30$$.min && null != $opts$$30$$.max && $opts$$30$$.max < $opts$$30$$.min) {
        throw Error("ojInputNumber's max must not be less than min");
      }
    }, _ComponentCreate:function() {
      this._super();
      this.$_draw$();
      this.$_inputNumberDefaultValidators$ = {};
      this.$_setup$();
      this._on(this.$_events$);
      this._focusable(this.$uiInputNumber$);
      this.$_activeable$(this.$uiInputNumber$);
    }, $_AfterSetOption$:function($option$$36$$, $previous$$5$$, $flags$$41$$) {
      this._superApply(arguments);
      switch($option$$36$$) {
        case "min":
        ;
        case "max":
          this.$_Refresh$($option$$36$$, this.options[$option$$36$$]);
      }
    }, _setOption:function($key$$171$$, $value$$297$$, $flags$$42$$) {
      var $coercedValue$$2$$;
      $coercedValue$$2$$ = "value" === $key$$171$$ || "max" === $key$$171$$ || "min" === $key$$171$$ ? this.$_parse$($key$$171$$, $value$$297$$) : "step" === $key$$171$$ ? this.$_parseStep$($value$$297$$) : $value$$297$$;
      this._super($key$$171$$, $coercedValue$$2$$, $flags$$42$$);
      if ("max" === $key$$171$$ || "min" === $key$$171$$) {
        this.$_createRangeValidator$(), this.$_AfterSetOptionValidators$();
      }
      "disabled" === $key$$171$$ && this.element.prop("disabled", !!$value$$297$$);
      "readOnly" === $key$$171$$ && (this.element.prop("readonly", !!$value$$297$$), this.$_refreshStateTheming$("readOnly", this.options.readOnly), this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly));
    }, _destroy:function() {
      var $ret$$46$$ = this._super();
      this.$buttonSet$.ojButtonset("destroy");
      this.$buttonSet$.remove();
      this.$buttonSet$ = this.$downButton$ = this.$upButton$ = null;
      $oj$$52$$.$DomUtils$.unwrap(this.element, this.$uiInputNumber$);
      clearTimeout(this.$timer$);
      return $ret$$46$$;
    }, $_Refresh$:function($name$$129$$, $value$$298$$, $forceDisplayValueRefresh$$1$$) {
      this._superApply(arguments);
      var $valueMinMax$$ = "value" === $name$$129$$ || "max" === $name$$129$$ || "min" === $name$$129$$, $valueMinMaxDisabled$$ = $valueMinMax$$ || "disabled" === $name$$129$$, $valuenow$$;
      $valueMinMaxDisabled$$ && ($valuenow$$ = this.$_getConvertedDisplayValue$());
      $valueMinMax$$ && this.$_refreshAriaMinMaxValue$($valuenow$$);
      "converter" === $name$$129$$ && this.$_refreshAriaText$($valuenow$$);
      $valueMinMaxDisabled$$ && this.$_updateButtons$($valuenow$$);
    }, $_GetConverter$:function() {
      return this.options.converter ? this._superApply(arguments) : $$$$46$$.oj.ojInputNumber.prototype.options.converter;
    }, $_GetImplicitValidators$:function() {
      var $ret$$47$$ = this._superApply(arguments);
      null == this.options.min && null == this.options.max || this.$_createRangeValidator$();
      return $$$$46$$.extend(this.$_inputNumberDefaultValidators$, $ret$$47$$);
    }, _GetDefaultStyleClass:function() {
      return "oj-inputnumber";
    }, $_events$:{input:function($event$$648$$) {
      this.$_SetRawValue$(this.element.val(), $event$$648$$);
    }, keydown:function($event$$649$$) {
      $event$$649$$.keyCode === $$$$46$$.ui.keyCode.ENTER ? (this.$_blurEnterSetValue$($event$$649$$), $event$$649$$.preventDefault()) : this.$_start$() && this.$_keydown$($event$$649$$) && $event$$649$$.preventDefault();
    }, keyup:function($event$$650$$) {
      this.$_stop$($event$$650$$);
    }, blur:function($event$$651$$) {
      this.$_blurEnterSetValue$($event$$651$$);
    }, "touchstart .oj-inputnumber-button":function($event$$652$$) {
      this.$_start$();
      this.$_repeat$(null, $$$$46$$($event$$652$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$652$$);
    }, "touchend .oj-inputnumber-button":function($event$$653$$) {
      $_ojInputNumberLastTouch$$ = Date.now();
      this.$_stop$($event$$653$$);
    }, "touchcancel .oj-inputnumber-button":function($event$$654$$) {
      $_ojInputNumberLastTouch$$ = Date.now();
      this.$_stop$($event$$654$$);
    }, "mousedown .oj-inputnumber-button":function($event$$655$$) {
      this.$_isRealMouseEvent$($event$$655$$) && (this.$_start$(), this.$_repeat$(null, $$$$46$$($event$$655$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$655$$));
    }, "mouseup .oj-inputnumber-button":function($event$$656$$) {
      this.$_isRealMouseEvent$($event$$656$$) && this.$_stop$($event$$656$$);
    }, "mouseenter .oj-inputnumber-button":function($event$$657$$) {
      $$$$46$$($event$$657$$.currentTarget).hasClass("oj-active") && this.$_isRealMouseEvent$($event$$657$$) && (this.$_start$(), this.$_repeat$(null, $$$$46$$($event$$657$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$657$$));
    }, "mouseleave .oj-inputnumber-button":function($event$$658$$) {
      this.$_isRealMouseEvent$($event$$658$$) && this.$_stop$($event$$658$$);
    }}, $_BUNDLE_KEY$:{$_TOOLTIP_DECREMENT$:"tooltipDecrement", $_TOOLTIP_INCREMENT$:"tooltipIncrement"}, $_OPTION_TO_CSS_MAPPING$:{readOnly:"oj-read-only"}, $_setup$:function() {
      var $incrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_INCREMENT$), $decrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_DECREMENT$), $valuenow$$1$$ = this.$_getConvertedDisplayValue$();
      this.$upButton$.ojButton({label:$incrementString$$});
      this.$downButton$.ojButton({label:$decrementString$$});
      this.$_refreshAriaMinMaxValue$($valuenow$$1$$);
      this.$_updateButtons$($valuenow$$1$$);
      "boolean" === typeof this.options.readOnly && this.element.prop("readonly", this.options.readOnly);
      this.$_refreshStateTheming$("readOnly", this.options.readOnly);
      this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly);
    }, $_createOjButtonset$:function() {
      var $$upButton$$ = this.$uiInputNumber$.find(".oj-inputnumber-up"), $$downButton$$ = this.$uiInputNumber$.find(".oj-inputnumber-down"), $buttonsetDiv$$ = $$upButton$$[0].parentNode;
      this.$upButton$ = $$upButton$$.ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-up-icon"}});
      this.$downButton$ = $$downButton$$.ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-down-icon"}});
      this.$buttonSet$ = $$$$46$$($buttonsetDiv$$).ojButtonset({focusManagement:"none"});
    }, $_draw$:function() {
      var $element$$230$$ = this.element, $uiInputNumber$$ = this.$uiInputNumber$ = $element$$230$$.addClass("oj-inputnumber-input").wrap("\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e").parent().append("\x3cdiv class\x3d'oj-buttonset-width-auto'\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/button\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/button\x3e\x3c/div\x3e").wrap("\x3cdiv class\x3d'oj-inputnumber oj-component'\x3e\x3c/div\x3e").parent();
      this.saveType = $element$$230$$.prop("type");
      $element$$230$$.attr("type", "text");
      $uiInputNumber$$.find(".oj-inputnumber-button").attr("tabIndex", "-1");
      this.$_createOjButtonset$();
    }, $_keydown$:function($event$$659$$) {
      var $keyCode$$25$$ = $$$$46$$.ui.keyCode;
      switch($event$$659$$.keyCode) {
        case $keyCode$$25$$.UP:
          return this.$_repeat$(null, 1, $event$$659$$), !0;
        case $keyCode$$25$$.DOWN:
          return this.$_repeat$(null, -1, $event$$659$$), !0;
      }
      return!1;
    }, $_uiInputNumberHtml$:function() {
      return "\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e";
    }, $_buttonHtml$:function() {
      return "\x3cdiv class\x3d'oj-buttonset-width-auto'\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/button\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/button\x3e\x3c/div\x3e";
    }, $_start$:function() {
      return this.$spinning$ = !0;
    }, $_repeat$:function($i$$425$$, $steps$$3$$, $event$$660$$) {
      $i$$425$$ = $i$$425$$ || 500;
      clearTimeout(this.$timer$);
      this.$timer$ = this._delay(function() {
        this.$_repeat$(40, $steps$$3$$, $event$$660$$);
      }, $i$$425$$);
      this.$_spin$($steps$$3$$ * this.options.step, $event$$660$$);
    }, $_spin$:function($step$$3$$, $event$$661$$) {
      var $value$$299$$ = this.$_getConvertedDisplayValue$(), $options$$352_stepOpt$$ = this.options, $minOpt$$ = $options$$352_stepOpt$$.min, $maxOpt$$ = $options$$352_stepOpt$$.max, $options$$352_stepOpt$$ = $options$$352_stepOpt$$.step, $precision$$2$$ = this.$_precision$($minOpt$$, $options$$352_stepOpt$$), $value$$299$$ = this.$_adjustValue$($value$$299$$, $step$$3$$, $minOpt$$, $maxOpt$$, $options$$352_stepOpt$$, $precision$$2$$);
      this.$_CanSetValue$() && (this.element.val($value$$299$$), this.$_refreshAriaMinMaxValue$($value$$299$$), this.$_updateButtons$($value$$299$$), this.$_SetRawValue$($value$$299$$, $event$$661$$));
      this.$_SetValue$($value$$299$$, $event$$661$$, this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$);
    }, $_precision$:function($minOpt$$1$$, $stepOpt$$1$$) {
      var $precision$$3$$ = this.$_precisionOf$($stepOpt$$1$$);
      null != $minOpt$$1$$ && ($precision$$3$$ = Math.max($precision$$3$$, this.$_precisionOf$($minOpt$$1$$)));
      return $precision$$3$$;
    }, $_precisionOf$:function($num$$11_str$$22$$) {
      $num$$11_str$$22$$ = $num$$11_str$$22$$.toString();
      var $decimal$$ = $num$$11_str$$22$$.indexOf(".");
      return-1 === $decimal$$ ? 0 : $num$$11_str$$22$$.length - $decimal$$ - 1;
    }, $_adjustValue$:function($newValue$$26_value$$300$$, $step$$4$$, $minOpt$$2_validMax$$, $maxOpt$$1$$, $stepOpt$$2$$, $precision$$4$$) {
      var $stepBase$$, $aboveMin$$;
      if (0 < $precision$$4$$) {
        return this.$_adjustValueForFractions$($newValue$$26_value$$300$$, $step$$4$$, $minOpt$$2_validMax$$, $maxOpt$$1$$, $stepOpt$$2$$, $precision$$4$$);
      }
      $stepBase$$ = null != $minOpt$$2_validMax$$ ? $minOpt$$2_validMax$$ : 0;
      try {
        $newValue$$26_value$$300$$ = parseFloat($newValue$$26_value$$300$$.toFixed($precision$$4$$));
      } catch ($e$$100$$) {
        $e$$100$$ instanceof TypeError && ($oj$$52$$.$Logger$.warn("inputNumber's value after conversion is not a number. \n\r\n                      The converter must convert the value to a Number. coercing using +"), $newValue$$26_value$$300$$ = +$newValue$$26_value$$300$$);
      }
      $aboveMin$$ = $newValue$$26_value$$300$$ - $stepBase$$;
      var $rounded$$1$$ = Math.round($aboveMin$$ / $stepOpt$$2$$) * $stepOpt$$2$$, $rounded$$1$$ = parseFloat($rounded$$1$$.toFixed($precision$$4$$));
      $rounded$$1$$ !== $aboveMin$$ ? ($aboveMin$$ = 0 > $step$$4$$ ? Math.ceil($aboveMin$$ / $stepOpt$$2$$) * $stepOpt$$2$$ : Math.floor($aboveMin$$ / $stepOpt$$2$$) * $stepOpt$$2$$, $newValue$$26_value$$300$$ = $stepBase$$ + $aboveMin$$ + $step$$4$$) : $newValue$$26_value$$300$$ += $step$$4$$;
      $newValue$$26_value$$300$$ = parseFloat($newValue$$26_value$$300$$.toFixed($precision$$4$$));
      return null != $minOpt$$2_validMax$$ && $newValue$$26_value$$300$$ < $minOpt$$2_validMax$$ ? $minOpt$$2_validMax$$ : null != $maxOpt$$1$$ && $newValue$$26_value$$300$$ > $maxOpt$$1$$ ? ($minOpt$$2_validMax$$ = Math.floor(($maxOpt$$1$$ - $stepBase$$) / $stepOpt$$2$$) * $stepOpt$$2$$ + $stepBase$$, $minOpt$$2_validMax$$ = parseFloat($minOpt$$2_validMax$$.toFixed($precision$$4$$))) : $newValue$$26_value$$300$$;
    }, $_adjustValueForFractions$:function($value$$301$$, $step$$5$$, $minOpt$$3$$, $maxOpt$$2$$, $stepOpt$$3$$, $power$$1_precision$$5$$) {
      $oj$$52$$.$Assert$.assert(0 < $power$$1_precision$$5$$);
      $power$$1_precision$$5$$ = Math.pow(10, $power$$1_precision$$5$$);
      return this.$_adjustValue$($value$$301$$ * $power$$1_precision$$5$$, $step$$5$$ * $power$$1_precision$$5$$, null != $minOpt$$3$$ ? $minOpt$$3$$ * $power$$1_precision$$5$$ : $minOpt$$3$$, null != $maxOpt$$2$$ ? $maxOpt$$2$$ * $power$$1_precision$$5$$ : $maxOpt$$2$$, null != $stepOpt$$3$$ ? $stepOpt$$3$$ * $power$$1_precision$$5$$ : $stepOpt$$3$$, 0) / $power$$1_precision$$5$$;
    }, $_stop$:function() {
      this.$spinning$ && (clearTimeout(this.$timer$), this.$spinning$ = !1);
    }, $_isRealMouseEvent$:function() {
      return $oj$$52$$.$DomUtils$.$isTouchSupported$() ? 500 < Date.now() - $_ojInputNumberLastTouch$$ : !0;
    }, $_updateButtons$:function($valuenow$$2$$) {
      var $options$$353$$ = this.options, $maxOpt$$3$$ = $options$$353$$.max, $minOpt$$4$$ = $options$$353$$.min, $downButton$$ = this.$downButton$, $upButton$$ = this.$upButton$, $downButtonDisabledAlready$$, $upButtonDisabledAlready$$;
      this.$uiInputNumber$ && ($downButton$$ || $upButton$$) && ($downButtonDisabledAlready$$ = $downButton$$.ojButton("option", "disabled"), $upButtonDisabledAlready$$ = $upButton$$.ojButton("option", "disabled"), $options$$353$$.disabled || void 0 === $valuenow$$2$$ ? ($downButtonDisabledAlready$$ || $downButton$$.ojButton("disable"), $upButtonDisabledAlready$$ || $upButton$$.ojButton("disable")) : null != $maxOpt$$3$$ && $valuenow$$2$$ >= $maxOpt$$3$$ ? ($downButtonDisabledAlready$$ && $downButton$$.ojButton("enable"), 
      $upButtonDisabledAlready$$ || $upButton$$.ojButton("disable")) : (null != $minOpt$$4$$ && $valuenow$$2$$ <= $minOpt$$4$$ ? $downButtonDisabledAlready$$ || $downButton$$.ojButton("disable") : $downButtonDisabledAlready$$ && $downButton$$.ojButton("enable"), $upButtonDisabledAlready$$ && $upButton$$.ojButton("enable")));
    }, $_getConvertedDisplayValue$:function() {
      var $value$$302$$, $displayValue$$12$$;
      try {
        $displayValue$$12$$ = this.$_GetDisplayValue$() || 0, $value$$302$$ = this.$_parseValue$($displayValue$$12$$);
      } catch ($e$$101$$) {
        $value$$302$$ = void 0;
      }
      return $value$$302$$;
    }, $_blurEnterSetValue$:function($event$$664$$) {
      var $val$$72$$ = this.element.val(), $valuenow$$3$$;
      this.$_stop$();
      $valuenow$$3$$ = this.$_getConvertedDisplayValue$();
      this.$_refreshAriaMinMaxValue$($valuenow$$3$$);
      this.$_updateButtons$($valuenow$$3$$);
      this.$_SetValue$($val$$72$$, $event$$664$$);
    }, $_createRangeValidator$:function() {
      var $hint$$8_options$$354_translations$$17$$ = this.options, $minOpt$$5_numberRangeOptions$$ = $hint$$8_options$$354_translations$$17$$.min, $maxOpt$$4$$ = $hint$$8_options$$354_translations$$17$$.max, $messageSummary$$1_reqTrans$$1$$ = ($hint$$8_options$$354_translations$$17$$ = $hint$$8_options$$354_translations$$17$$.translations) ? $hint$$8_options$$354_translations$$17$$.numberRange || {} : {}, $hintMin$$, $hintMax$$, $hintInRange$$3$$, $messageDetailRangeOverflow$$2$$, $messageDetailRangeUnderflow$$2$$, 
      $messageSummaryRangeOverflow$$2$$, $messageSummaryRangeUnderflow$$2$$, $hint$$8_options$$354_translations$$17$$ = $messageSummary$$1_reqTrans$$1$$.hint || {}, $messageDetail$$1$$ = $messageSummary$$1_reqTrans$$1$$.messageDetail || {}, $messageSummary$$1_reqTrans$$1$$ = $messageSummary$$1_reqTrans$$1$$.messageSummary || {};
      null !== $hint$$8_options$$354_translations$$17$$ && ($hintMin$$ = $hint$$8_options$$354_translations$$17$$.min || null, $hintMax$$ = $hint$$8_options$$354_translations$$17$$.max || null, $hintInRange$$3$$ = $hint$$8_options$$354_translations$$17$$.inRange || null);
      null !== $messageDetail$$1$$ && ($messageDetailRangeOverflow$$2$$ = $messageDetail$$1$$.rangeOverflow || null, $messageDetailRangeUnderflow$$2$$ = $messageDetail$$1$$.rangeUnderflow || null);
      null !== $messageSummary$$1_reqTrans$$1$$ && ($messageSummaryRangeOverflow$$2$$ = $messageSummary$$1_reqTrans$$1$$.rangeOverflow || null, $messageSummaryRangeUnderflow$$2$$ = $messageSummary$$1_reqTrans$$1$$.rangeUnderflow || null);
      $minOpt$$5_numberRangeOptions$$ = {min:null != $minOpt$$5_numberRangeOptions$$ ? $minOpt$$5_numberRangeOptions$$ : void 0, max:null != $maxOpt$$4$$ ? $maxOpt$$4$$ : void 0, hint:{min:$hintMin$$ || null, max:$hintMax$$ || null, inRange:$hintInRange$$3$$ || null}, messageDetail:{rangeOverflow:$messageDetailRangeOverflow$$2$$ || null, rangeUnderflow:$messageDetailRangeUnderflow$$2$$ || null}, messageSummary:{rangeOverflow:$messageSummaryRangeOverflow$$2$$ || null, rangeUnderflow:$messageSummaryRangeUnderflow$$2$$ || 
      null}, converter:this.$_GetConverter$()};
      this.$_inputNumberDefaultValidators$[$oj$$52$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE] = $oj$$52$$.$Validation$.$validatorFactory$($oj$$52$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE).createValidator($minOpt$$5_numberRangeOptions$$);
    }, $_parse$:function($option$$37$$, $val$$73$$) {
      var $returnValue$$8$$;
      $returnValue$$8$$ = null !== $val$$73$$ ? +$val$$73$$ : $val$$73$$;
      if (isNaN($returnValue$$8$$)) {
        throw Error("ojInputNumber's " + $option$$37$$ + " option is not a number");
      }
      return $returnValue$$8$$;
    }, $_parseStep$:function($parsedStep$$1_val$$74$$) {
      if (null === $parsedStep$$1_val$$74$$) {
        return 1;
      }
      $parsedStep$$1_val$$74$$ = this.$_parse$("step", $parsedStep$$1_val$$74$$);
      if (0 >= $parsedStep$$1_val$$74$$) {
        throw Error("Invalid step for ojInputNumber; step must be \x3e 0");
      }
      if (null === $parsedStep$$1_val$$74$$ || 0 >= $parsedStep$$1_val$$74$$) {
        $parsedStep$$1_val$$74$$ = 1;
      }
      return $parsedStep$$1_val$$74$$;
    }, $_refreshStateTheming$:function($option$$38$$, $value$$303$$) {
      -1 != Object.keys(this.$_OPTION_TO_CSS_MAPPING$).indexOf($option$$38$$) && this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$38$$], !!$value$$303$$);
    }, $_refreshRoleSpinbutton$:function($option$$39$$, $readOnly$$3$$) {
      $readOnly$$3$$ ? this.element.removeAttr("role") : this.element.attr("role", "spinbutton");
    }, $_refreshAriaMinMaxValue$:function($valuenow$$4$$) {
      this.element.attr({"aria-valuemin":this.options.min, "aria-valuemax":this.options.max, "aria-valuenow":$valuenow$$4$$});
      this.$_refreshAriaText$($valuenow$$4$$);
    }, $_refreshAriaText$:function($valuenow$$5$$) {
      var $element$$232$$ = this.element, $valuetext$$ = $element$$232$$.val();
      this.$_CompareOptionValues$("value", "" + $valuenow$$5$$, $valuetext$$) || $element$$232$$.attr({"aria-valuetext":$valuetext$$});
    }, $_step$:function($steps$$4$$, $up$$) {
      this.$_start$();
      $up$$ ? this.$_spin$(($steps$$4$$ || 1) * this.options.step) : this.$_spin$(($steps$$4$$ || 1) * -this.options.step);
      this.$_stop$();
    }});
    var $_ojInputNumberLastTouch$$;
  })();
});
