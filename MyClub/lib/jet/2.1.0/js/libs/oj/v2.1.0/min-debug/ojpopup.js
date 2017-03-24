/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$81$$, $$$$73$$) {
  (function() {
    var $_TAIL_STYLES$$ = "oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "), $_TAIL_ALIGN_RULES$$ = {"right-top":"oj-right oj-top", "right-middle":"oj-right oj-middle", "right-bottom":"oj-right oj-bottom", "left-top":"oj-left oj-top", "left-middle":"oj-left oj-middle", "left-bottom":"oj-left oj-bottom", "center-top":"oj-center oj-top", "center-middle":"oj-left oj-middle", "center-bottom":"oj-center oj-bottom"};
    $oj$$81$$.$__registerWidget$("oj.ojPopup", $$$$73$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{autoDismiss:"focusLoss", chrome:"default", initialFocus:"auto", position:{my:"start top", at:"start bottom", of:"", collision:"flip"}, tail:"none", modality:"modeless", role:"tooltip", beforeOpen:null, open:null, beforeClose:null, close:null, focus:null}, _ComponentCreate:function() {
      this._super();
      var $rootElement$$3$$ = $$$$73$$("\x3cdiv\x3e");
      this.$_rootElement$ = $rootElement$$3$$.hide().addClass("oj-popup").attr("aria-hidden", "true");
      $rootElement$$3$$.addClass("oj-component");
      var $content$$42$$ = $$$$73$$("\x3cdiv\x3e").addClass("oj-popup-content");
      $content$$42$$.attr("role", "presentation");
      $content$$42$$.appendTo($rootElement$$3$$);
      this.element.after($rootElement$$3$$);
      this.element.appendTo($content$$42$$);
      this.element.show();
      this.$_createTail$();
      this.$_setChrome$();
      this.$_usingCallback$ = $$$$73$$.proxy(this.$_usingHandler$, this);
    }, _destroy:function() {
      this.isOpen() && this.$_closeImplicitly$();
      this.$_destroyTail$();
      delete this.$_usingCallback$;
      delete this.$_popupServiceEvents$;
      $oj$$81$$.$DomUtils$.unwrap(this.element, this.$_rootElement$);
      this.element.hide();
      var $closeDelayTimer$$1$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$1$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$1$$));
      this.$_destroyVoiceOverAssist$();
      this._super();
    }, widget:function() {
      return this.$_rootElement$;
    }, open:function($launcher$$15$$, $position$$52$$) {
      if (this.isOpen() && (this.close(), this.isOpen())) {
        return;
      }
      this.$_setLauncher$($launcher$$15$$);
      var $rootElement$$4$$ = this.$_rootElement$;
      $launcher$$15$$ = this.$_launcher$;
      $oj$$81$$.$StringUtils$.$isEmptyOrUndefined$($rootElement$$4$$.attr("id")) && $rootElement$$4$$.attr("id", this.$_getSubId$("wrapper"));
      if (!1 !== this._trigger("beforeOpen")) {
        this.$_setPosition$($position$$52$$);
        var $options$$432$$ = this.options;
        this.$_setAutoDismiss$($options$$432$$.autoDismiss);
        this.$_addDescribedBy$();
        $rootElement$$4$$.attr("role", $options$$432$$.role);
        $position$$52$$ = $options$$432$$.position;
        var $isRtl$$5_layerClass$$3$$ = "rtl" === this.$_GetReadingDirection$();
        $position$$52$$ = $oj$$81$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$52$$, $isRtl$$5_layerClass$$3$$);
        var $isRtl$$5_layerClass$$3$$ = "oj-popup-layer", $psOptions$$5_tailDecoration$$ = $options$$432$$.tail;
        "none" !== $psOptions$$5_tailDecoration$$ && ($isRtl$$5_layerClass$$3$$ += " " + ["oj-popup-tail", $psOptions$$5_tailDecoration$$].join("-"));
        $psOptions$$5_tailDecoration$$ = {};
        $psOptions$$5_tailDecoration$$[$oj$$81$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$4$$;
        $psOptions$$5_tailDecoration$$[$oj$$81$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$15$$;
        $psOptions$$5_tailDecoration$$[$oj$$81$$.$PopupService$.$OPTION$.$POSITION$] = $position$$52$$;
        $psOptions$$5_tailDecoration$$[$oj$$81$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
        $psOptions$$5_tailDecoration$$[$oj$$81$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = $isRtl$$5_layerClass$$3$$;
        $psOptions$$5_tailDecoration$$[$oj$$81$$.$PopupService$.$OPTION$.$MODALITY$] = $options$$432$$.modality;
        $oj$$81$$.$PopupService$.$getInstance$().open($psOptions$$5_tailDecoration$$);
        this._trigger("open");
        this.$_intialFocus$();
        this.$_initVoiceOverAssist$();
        this._on($rootElement$$4$$, {keydown:this.$_keyHandler$, keyup:this.$_keyHandler$});
        $launcher$$15$$ && 0 < $launcher$$15$$.length && this._on($launcher$$15$$, {keydown:this.$_keyHandler$, keyup:this.$_keyHandler$});
      }
    }, close:function() {
      if (this.isOpen() && (!1 !== this._trigger("beforeClose") || this.$_ignoreBeforeCloseResultant$)) {
        this.$_restoreFocus$();
        var $launcher$$16_psOptions$$6$$ = this.$_launcher$, $position$$53_rootElement$$5$$ = this.$_rootElement$;
        this._off($position$$53_rootElement$$5$$, "keydown keyup");
        $launcher$$16_psOptions$$6$$ && 0 < $launcher$$16_psOptions$$6$$.length && this._off($launcher$$16_psOptions$$6$$, "keydown keyup");
        this.$_destroyVoiceOverAssist$();
        $launcher$$16_psOptions$$6$$ = {};
        $launcher$$16_psOptions$$6$$[$oj$$81$$.$PopupService$.$OPTION$.$POPUP$] = $position$$53_rootElement$$5$$;
        $oj$$81$$.$PopupService$.$getInstance$().close($launcher$$16_psOptions$$6$$);
        this.$_removeDescribedBy$();
        this.$_setAutoDismiss$();
        delete this.$_launcher$;
        $position$$53_rootElement$$5$$ = this.options.position;
        $position$$53_rootElement$$5$$._ofo && (delete $position$$53_rootElement$$5$$._ofo, delete $position$$53_rootElement$$5$$.of);
        this._trigger("close");
      }
    }, isOpen:function() {
      return this.$_rootElement$.is(":visible");
    }, refresh:function() {
      this._super();
      this.isOpen() && this.$_reposition$();
      var $rootElement$$6$$ = this.$_rootElement$;
      $oj$$81$$.$PopupService$.$getInstance$().$triggerOnDescendents$($rootElement$$6$$, $oj$$81$$.$PopupService$.$EVENT$.$POPUP_REFRESH$);
    }, _setOption:function($key$$214$$, $value$$335$$) {
      var $options$$433_psOptions$$7$$ = this.options;
      switch($key$$214$$) {
        case "tail":
          $value$$335$$ !== $options$$433_psOptions$$7$$.tail && this.$_setTail$($value$$335$$);
          break;
        case "chrome":
          $value$$335$$ !== $options$$433_psOptions$$7$$.chrome && this.$_setChrome$($value$$335$$);
          break;
        case "position":
          this.$_setPosition$($value$$335$$);
          this.refresh();
          return;
        case "autoDismiss":
          this.isOpen() && $value$$335$$ !== $options$$433_psOptions$$7$$.autoDismiss && this.$_setAutoDismiss$($value$$335$$);
          break;
        case "modality":
          this.isOpen() && ($options$$433_psOptions$$7$$ = {}, $options$$433_psOptions$$7$$[$oj$$81$$.$PopupService$.$OPTION$.$POPUP$] = this.$_rootElement$, $options$$433_psOptions$$7$$[$oj$$81$$.$PopupService$.$OPTION$.$MODALITY$] = $value$$335$$, $oj$$81$$.$PopupService$.$getInstance$().$changeOptions$($options$$433_psOptions$$7$$));
      }
      this._superApply(arguments);
    }, $_getRootStyle$:function() {
      return "oj-popup";
    }, $_setTail$:function($tail$$) {
      this.$_destroyTail$();
      this.$_createTail$($tail$$);
      this.$_reposition$();
    }, $_createTail$:function($tail$$1_tailDecoration$$1_tailStyle$$) {
      $tail$$1_tailDecoration$$1_tailStyle$$ = $tail$$1_tailDecoration$$1_tailStyle$$ ? $tail$$1_tailDecoration$$1_tailStyle$$ : this.options.tail;
      if ("none" !== $tail$$1_tailDecoration$$1_tailStyle$$) {
        $tail$$1_tailDecoration$$1_tailStyle$$ = ["oj-popup-tail", $tail$$1_tailDecoration$$1_tailStyle$$].join("-");
        var $options$$434_tailDom$$ = $$$$73$$("\x3cdiv\x3e").hide();
        $options$$434_tailDom$$.addClass("oj-popup-tail").addClass($tail$$1_tailDecoration$$1_tailStyle$$);
        $options$$434_tailDom$$.attr("role", "presentation");
        this.$_tailId$ = $options$$434_tailDom$$.attr("id", this.$_getSubId$("tail")).attr("id");
        var $rootElement$$8$$ = this.$_rootElement$;
        $options$$434_tailDom$$.appendTo($rootElement$$8$$);
        $rootElement$$8$$.addClass($tail$$1_tailDecoration$$1_tailStyle$$);
        this.isOpen() && ($options$$434_tailDom$$ = {}, $options$$434_tailDom$$[$oj$$81$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$8$$, $options$$434_tailDom$$[$oj$$81$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-popup-layer " + $tail$$1_tailDecoration$$1_tailStyle$$, $oj$$81$$.$PopupService$.$getInstance$().$changeOptions$($options$$434_tailDom$$));
      }
    }, $_getTail$:function() {
      var $tailId$$ = this.$_tailId$;
      return $tailId$$ ? $$$$73$$(document.getElementById($tailId$$)) : null;
    }, $_destroyTail$:function() {
      var $rootElement$$9_tail$$2$$ = this.$_getTail$();
      $rootElement$$9_tail$$2$$ && $rootElement$$9_tail$$2$$.remove();
      delete this.$_tailId$;
      $rootElement$$9_tail$$2$$ = this.$_rootElement$;
      $rootElement$$9_tail$$2$$.removeClass(["oj-popup-tail", this.options.tail].join("-"));
      if (this.isOpen()) {
        var $options$$435$$ = {};
        $options$$435$$[$oj$$81$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$9_tail$$2$$;
        $options$$435$$[$oj$$81$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-popup-layer";
        $oj$$81$$.$PopupService$.$getInstance$().$changeOptions$($options$$435$$);
      }
    }, $_setChrome$:function($chrome$$1_chromeDecoration$$) {
      $chrome$$1_chromeDecoration$$ = $chrome$$1_chromeDecoration$$ ? $chrome$$1_chromeDecoration$$ : this.options.chrome;
      var $rootElement$$10$$ = this.$_rootElement$;
      "default" === $chrome$$1_chromeDecoration$$ && $rootElement$$10$$.hasClass("oj-popup-no-chrome") ? $rootElement$$10$$.removeClass("oj-popup-no-chrome") : "none" !== $chrome$$1_chromeDecoration$$ || $rootElement$$10$$.hasClass("oj-popup-no-chrome") || $rootElement$$10$$.addClass("oj-popup-no-chrome");
    }, $_setLauncher$:function($launcher$$17$$) {
      $launcher$$17$$ ? "string" === $$$$73$$.type($launcher$$17$$) ? $launcher$$17$$ = $$$$73$$($launcher$$17$$) : 1 === $launcher$$17$$.nodeType && ($launcher$$17$$ = $$$$73$$($launcher$$17$$)) : $launcher$$17$$ = $$$$73$$(document.activeElement);
      if ($launcher$$17$$ instanceof jQuery && 1 < $launcher$$17$$.length) {
        for (var $rootElement$$11$$ = this.$_rootElement$, $i$$545$$ = 0;$i$$545$$ < $launcher$$17$$.length;$i$$545$$++) {
          var $target$$145$$ = $launcher$$17$$[0];
          if (!$oj$$81$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$11$$[0], $target$$145$$)) {
            $launcher$$17$$ = $$$$73$$($target$$145$$);
            break;
          }
        }
      } else {
        if (!($launcher$$17$$ instanceof jQuery) || $launcher$$17$$ instanceof jQuery && 0 === $launcher$$17$$.length) {
          $launcher$$17$$ = $$$$73$$(document.activeElement);
        }
      }
      this.$_launcher$ = $launcher$$17$$;
    }, $_setPosition$:function($position$$54$$) {
      var $launcher$$18_options$$436_usingCallback$$ = this.options;
      $position$$54$$ && ($launcher$$18_options$$436_usingCallback$$.position = $$$$73$$.extend($launcher$$18_options$$436_usingCallback$$[$position$$54$$], $position$$54$$));
      $position$$54$$ = $launcher$$18_options$$436_usingCallback$$.position;
      $launcher$$18_options$$436_usingCallback$$ = this.$_usingCallback$;
      $$$$73$$.isFunction($position$$54$$.using) && $position$$54$$.using !== $launcher$$18_options$$436_usingCallback$$ && ($position$$54$$.origUsing = $position$$54$$.using);
      $position$$54$$.using = $launcher$$18_options$$436_usingCallback$$;
      $launcher$$18_options$$436_usingCallback$$ = this.$_launcher$;
      $position$$54$$.of || ($position$$54$$.of = $launcher$$18_options$$436_usingCallback$$, $position$$54$$._ofo = !0);
    }, $_usingHandler$:function($pos$$19$$, $props$$31$$) {
      var $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $props$$31$$.element.element;
      if ($pos$$19$$.top !== $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.css("top") || $pos$$19$$.left !== $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.css("left")) {
        var $options$$437_tail$$3$$ = this.$_getTail$();
        if ($options$$437_tail$$3$$) {
          $options$$437_tail$$3$$.hide();
          for (var $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = 0;$i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ < $_TAIL_STYLES$$.length;$i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$++) {
            $options$$437_tail$$3$$.removeClass($_TAIL_STYLES$$[$i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$]), $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.removeClass($_TAIL_STYLES$$[$i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$]);
          }
          $options$$437_tail$$3$$.removeAttr("style");
          if ($props$$31$$.target && 0 === $props$$31$$.target.height && 0 === $props$$31$$.target.width && ($i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = "rtl" === this.$_GetReadingDirection$(), $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $oj$$81$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$).my, !$oj$$81$$.$StringUtils$.$isEmptyOrUndefined$($i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$))) {
            var $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$.split(" "), $suggestedHrule$$ = $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[0], $suggestedVrule$$ = "middle";
            1 < $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$.length && ($suggestedVrule$$ = "center" === $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[1] ? "middle" : $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[1]);
            $props$$31$$.horizontal = $suggestedHrule$$;
            $props$$31$$.vertical = $suggestedVrule$$;
          }
          $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $_TAIL_ALIGN_RULES$$[[$props$$31$$.horizontal, $props$$31$$.vertical].join("-")];
          $options$$437_tail$$3$$.addClass($i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
          $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.addClass($i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
          $options$$437_tail$$3$$.show();
          "left" === $props$$31$$.horizontal ? ($i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$437_tail$$3$$.outerWidth(), $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$81$$.$DomUtils$.$getCSSLengthAsInt$($options$$437_tail$$3$$.css("left")), $pos$$19$$.left += $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2) : "right" === $props$$31$$.horizontal && 
          ($i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$437_tail$$3$$.outerWidth(), $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$81$$.$DomUtils$.$getCSSLengthAsInt$($options$$437_tail$$3$$.css("right")), $pos$$19$$.left -= $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2);
          "top" === $props$$31$$.vertical ? ($i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$437_tail$$3$$.outerHeight(), $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$81$$.$DomUtils$.$getCSSLengthAsInt$($options$$437_tail$$3$$.css($props$$31$$.vertical)), $pos$$19$$.top += $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2) : "bottom" === 
          $props$$31$$.vertical && ($i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$437_tail$$3$$.outerHeight(), $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$81$$.$DomUtils$.$getCSSLengthAsInt$($options$$437_tail$$3$$.css($props$$31$$.vertical)), $pos$$19$$.top -= $i$$546_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2);
          $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.css($pos$$19$$);
          "center" === $props$$31$$.horizontal && "middle" !== $props$$31$$.vertical ? ($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.width(), $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ / 2 - $options$$437_tail$$3$$.outerWidth() / 2) / $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ * 
          100), $options$$437_tail$$3$$.css({left:$leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ + "%"})) : "middle" === $props$$31$$.vertical && ($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.height(), $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ / 2 - $options$$437_tail$$3$$.outerHeight() / 
          2) / $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ * 100), $options$$437_tail$$3$$.css({top:$leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ + "%"}));
        } else {
          $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.css($pos$$19$$);
        }
        $options$$437_tail$$3$$ = this.options;
        ($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $options$$437_tail$$3$$.position.origUsing) && $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$($pos$$19$$, $props$$31$$);
        "focusLoss" === $options$$437_tail$$3$$.autoDismiss && $oj$$81$$.$PositionUtils$.$isAligningPositionClipped$($props$$31$$) && (this.$_ignoreRestoreFocus$ = !0, this.$_closeDelayTimer$ = this._delay($$$$73$$.proxy(this.$_closeImplicitly$, this), 1));
      }
    }, $_reposition$:function() {
      var $rootElement$$13$$ = this.$_rootElement$, $position$$56$$ = this.options.position, $isRtl$$7$$ = "rtl" === this.$_GetReadingDirection$();
      $rootElement$$13$$.position($oj$$81$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$56$$, $isRtl$$7$$));
    }, $_intialFocus$:function($nodes$$14_waiAriaAssisted$$) {
      var $initialFocus_rootElement$$14$$ = this.$_deriveInitialFocus$();
      $nodes$$14_waiAriaAssisted$$ && "none" === $initialFocus_rootElement$$14$$ && ($initialFocus_rootElement$$14$$ = "popup");
      if ("firstFocusable" === $initialFocus_rootElement$$14$$) {
        $nodes$$14_waiAriaAssisted$$ = this.element.find(":focusable");
        for (var $first$$12$$, $i$$547$$ = 0;$i$$547$$ < $nodes$$14_waiAriaAssisted$$.length;$i$$547$$++) {
          if ($oj$$81$$.$FocusUtils$.$isFocusable$($nodes$$14_waiAriaAssisted$$[$i$$547$$])) {
            $first$$12$$ = $nodes$$14_waiAriaAssisted$$[$i$$547$$];
            break;
          }
        }
        $first$$12$$ ? ($first$$12$$.focus(), this._trigger("focus")) : $initialFocus_rootElement$$14$$ = "popup";
      }
      "popup" === $initialFocus_rootElement$$14$$ && ($initialFocus_rootElement$$14$$ = this.$_rootElement$, $initialFocus_rootElement$$14$$.attr("tabindex", "-1"), $initialFocus_rootElement$$14$$.focus(), this._trigger("focus"));
    }, $_deriveInitialFocus$:function() {
      var $options$$438$$ = this.options, $initialFocus$$1$$ = $options$$438$$.initialFocus;
      "auto" === $initialFocus$$1$$ && ($initialFocus$$1$$ = "modal" === $options$$438$$.modality ? $oj$$81$$.$DomUtils$.$isTouchSupported$() ? "popup" : "firstFocusable" : "none");
      return $initialFocus$$1$$;
    }, $_isFocusInPopup$:function($activeElement$$2$$, $includeChildren$$) {
      $activeElement$$2$$ || ($activeElement$$2$$ = document.activeElement);
      if (!$activeElement$$2$$) {
        return!1;
      }
      var $rootElement$$15$$ = this.$_rootElement$;
      $includeChildren$$ && ($rootElement$$15$$ = $rootElement$$15$$.parent());
      return $oj$$81$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$15$$[0], $activeElement$$2$$);
    }, $_isFocusInLauncher$:function($activeElement$$3$$) {
      $activeElement$$3$$ || ($activeElement$$3$$ = document.activeElement);
      return $oj$$81$$.$DomUtils$.$isAncestorOrSelf$(this.$_launcher$[0], $activeElement$$3$$);
    }, $_restoreFocus$:function() {
      this.$_ignoreRestoreFocus$ ? delete this.$_ignoreRestoreFocus$ : this.$_isFocusInPopup$(null, !0) && this.$_launcher$.focus();
    }, $_keyHandler$:function($event$$802_launcher$$21$$) {
      if (!$event$$802_launcher$$21$$.isDefaultPrevented()) {
        var $eventType$$56_firstNode$$ = $event$$802_launcher$$21$$.type, $options$$439_target$$146$$ = $event$$802_launcher$$21$$.target;
        if ("keyup" === $eventType$$56_firstNode$$ && $event$$802_launcher$$21$$.keyCode === $$$$73$$.ui.keyCode.ESCAPE && (this.$_isFocusInPopup$($options$$439_target$$146$$) || this.$_isFocusInLauncher$($options$$439_target$$146$$))) {
          $event$$802_launcher$$21$$.preventDefault(), this.close();
        } else {
          if ("keydown" === $eventType$$56_firstNode$$ && 117 === $event$$802_launcher$$21$$.keyCode) {
            this.$_isFocusInPopup$($options$$439_target$$146$$) ? ($options$$439_target$$146$$ = this.options, "modeless" === $options$$439_target$$146$$.modality ? ($event$$802_launcher$$21$$.preventDefault(), $event$$802_launcher$$21$$ = this.$_launcher$, $event$$802_launcher$$21$$.focus()) : this.close()) : this.$_isFocusInLauncher$($options$$439_target$$146$$) && ($event$$802_launcher$$21$$.preventDefault(), this.$_intialFocus$(!0));
          } else {
            if ("keydown" === $eventType$$56_firstNode$$ && $event$$802_launcher$$21$$.keyCode === $$$$73$$.ui.keyCode.TAB && this.$_isFocusInPopup$($options$$439_target$$146$$)) {
              var $lastNode$$1_nodes$$15$$ = this.element.find(":tabbable");
              if (0 < $lastNode$$1_nodes$$15$$.length) {
                var $eventType$$56_firstNode$$ = $lastNode$$1_nodes$$15$$[0], $lastNode$$1_nodes$$15$$ = $lastNode$$1_nodes$$15$$[$lastNode$$1_nodes$$15$$.length - 1], $rootElement$$16$$ = this.$_rootElement$;
                $eventType$$56_firstNode$$ !== $options$$439_target$$146$$ && $rootElement$$16$$[0] !== $options$$439_target$$146$$ || !$event$$802_launcher$$21$$.shiftKey ? $lastNode$$1_nodes$$15$$ !== $options$$439_target$$146$$ || $event$$802_launcher$$21$$.shiftKey || ($event$$802_launcher$$21$$.preventDefault(), $lastNode$$1_nodes$$15$$ === $eventType$$56_firstNode$$ ? ($rootElement$$16$$.attr("tabindex", "-1"), $rootElement$$16$$.focus()) : $$$$73$$($eventType$$56_firstNode$$).focus()) : ($event$$802_launcher$$21$$.preventDefault(), 
                $eventType$$56_firstNode$$ === $lastNode$$1_nodes$$15$$ && $eventType$$56_firstNode$$ === $options$$439_target$$146$$ ? ($rootElement$$16$$.attr("tabindex", "-1"), $rootElement$$16$$.focus()) : $$$$73$$($lastNode$$1_nodes$$15$$).focus());
              } else {
                $event$$802_launcher$$21$$.preventDefault(), $options$$439_target$$146$$ = this.options, "modeless" === $options$$439_target$$146$$.modality ? ($event$$802_launcher$$21$$ = this.$_launcher$, $event$$802_launcher$$21$$.focus()) : this.close();
              }
            }
          }
        }
      }
    }, $_setAutoDismiss$:function($autoDismiss_options$$440$$) {
      var $focusLossCallback$$ = this.$_focusLossCallback$, $events$$15$$ = this.$_getPopupServiceEvents$();
      $focusLossCallback$$ && (delete $events$$15$$[$oj$$81$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$], delete this.$_focusLossCallback$);
      "focusLoss" === $autoDismiss_options$$440$$ && ($focusLossCallback$$ = this.$_focusLossCallback$ = $$$$73$$.proxy(this.$_dismissalHandler$, this), $events$$15$$[$oj$$81$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $focusLossCallback$$);
      this.isOpen() && ($autoDismiss_options$$440$$ = {}, $autoDismiss_options$$440$$[$oj$$81$$.$PopupService$.$OPTION$.$POPUP$] = this.$_rootElement$, $autoDismiss_options$$440$$[$oj$$81$$.$PopupService$.$OPTION$.$EVENTS$] = $events$$15$$, $oj$$81$$.$PopupService$.$getInstance$().$changeOptions$($autoDismiss_options$$440$$));
    }, $_dismissalHandler$:function($event$$803$$) {
      var $launcher$$22$$ = this.$_launcher$, $layer$$25$$ = this.$_rootElement$.parent(), $target$$147$$ = $event$$803$$.target, $focusSkipLink_link$$5$$ = this.$_focusSkipLink$;
      if ($focusSkipLink_link$$5$$ && ($focusSkipLink_link$$5$$ = $focusSkipLink_link$$5$$.getLink()) && $oj$$81$$.$DomUtils$.$isAncestorOrSelf$($focusSkipLink_link$$5$$[0], $target$$147$$)) {
        return;
      }
      if (!$oj$$81$$.$DomUtils$.$isAncestorOrSelf$($launcher$$22$$[0], $target$$147$$) && !$oj$$81$$.$DomUtils$.$isAncestorOrSelf$($layer$$25$$[0], $target$$147$$)) {
        if ($oj$$81$$.$FocusUtils$.$isFocusable$($target$$147$$)) {
          if ("mousedown" === $event$$803$$.type || "touchstart" === $event$$803$$.type) {
            return;
          }
          this.$_ignoreRestoreFocus$ = !0;
        }
        this.close();
      }
    }, $_addDescribedBy$:function() {
      var $launcher$$23$$ = this.$_launcher$, $popupId$$1$$ = this.$_rootElement$.attr("id"), $describedby$$4_tokens$$7$$ = $launcher$$23$$.attr("aria-describedby"), $describedby$$4_tokens$$7$$ = $describedby$$4_tokens$$7$$ ? $describedby$$4_tokens$$7$$.split(/\s+/) : [];
      $describedby$$4_tokens$$7$$.push($popupId$$1$$);
      $describedby$$4_tokens$$7$$ = $$$$73$$.trim($describedby$$4_tokens$$7$$.join(" "));
      $launcher$$23$$.attr("aria-describedby", $describedby$$4_tokens$$7$$);
    }, $_removeDescribedBy$:function() {
      var $launcher$$24$$ = this.$_launcher$, $index$$348_popupId$$2$$ = this.$_rootElement$.attr("id"), $describedby$$5_tokens$$8$$ = $launcher$$24$$.attr("aria-describedby"), $describedby$$5_tokens$$8$$ = $describedby$$5_tokens$$8$$ ? $describedby$$5_tokens$$8$$.split(/\s+/) : [], $index$$348_popupId$$2$$ = $$$$73$$.inArray($index$$348_popupId$$2$$, $describedby$$5_tokens$$8$$);
      -1 !== $index$$348_popupId$$2$$ && $describedby$$5_tokens$$8$$.splice($index$$348_popupId$$2$$, 1);
      ($describedby$$5_tokens$$8$$ = $$$$73$$.trim($describedby$$5_tokens$$8$$.join(" "))) ? $launcher$$24$$.attr("aria-describedby", $describedby$$5_tokens$$8$$) : $launcher$$24$$.removeAttr("aria-describedby");
    }, $_initVoiceOverAssist$:function() {
      var $callback$$148_isIOSVOSupported$$ = $oj$$81$$.$AgentUtils$.$getAgentInfo$().os === $oj$$81$$.$AgentUtils$.$OS$.$IOS$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_liveRegion$;
      $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ || ($closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_liveRegion$ = new $oj$$81$$.$PopupLiveRegion$);
      var $message$$37$$;
      $message$$37$$ = $callback$$148_isIOSVOSupported$$ ? this.$getTranslatedString$("none" === this.options.initialFocus ? "ariaLiveRegionInitialFocusNoneTouch" : "ariaLiveRegionInitialFocusFirstFocusableTouch") : this.$getTranslatedString$("none" === this.options.initialFocus ? "ariaLiveRegionInitialFocusNone" : "ariaLiveRegionInitialFocusFirstFocusable");
      $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$.$announce$($message$$37$$);
      if ($callback$$148_isIOSVOSupported$$) {
        if (!this.$_focusSkipLink$) {
          var $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_getSubId$("focusSkipLink"), $element$$252_launcher$$25$$ = this.$_launcher$, $callback$$148_isIOSVOSupported$$ = $$$$73$$.proxy(this.$_intialFocus$, this, !0);
          $message$$37$$ = this.$getTranslatedString$("ariaFocusSkipLink");
          this.$_focusSkipLink$ = new $oj$$81$$.$PopupSkipLink$($element$$252_launcher$$25$$, $message$$37$$, $callback$$148_isIOSVOSupported$$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$);
        }
        this.$_closeSkipLink$ || ($closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_getSubId$("closeSkipLink"), $element$$252_launcher$$25$$ = this.element, $callback$$148_isIOSVOSupported$$ = $$$$73$$.proxy(this.$_closeImplicitly$, this), $message$$37$$ = this.$getTranslatedString$("ariaCloseSkipLink"), this.$_closeSkipLink$ = new $oj$$81$$.$PopupSkipLink$($element$$252_launcher$$25$$, $message$$37$$, $callback$$148_isIOSVOSupported$$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$));
      }
    }, $_destroyVoiceOverAssist$:function() {
      var $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ = this.$_liveRegion$;
      $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ && ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$.destroy(), delete this.$_liveRegion$);
      if ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ = this.$_focusSkipLink$) {
        $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$.destroy(), delete this.$_focusSkipLink$;
      }
      if ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ = this.$_closeSkipLink$) {
        $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$.destroy(), delete this.$_closeSkipLink$;
      }
    }, $_getSubId$:function($sub$$1$$) {
      var $id$$76$$ = this.element.attr("id");
      $oj$$81$$.$StringUtils$.$isEmptyOrUndefined$($id$$76$$) && ($id$$76$$ = this.uuid);
      return[$id$$76$$, $sub$$1$$].join("_");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$16$$ = this.$_popupServiceEvents$ = {};
        $events$$16$$[$oj$$81$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$73$$.proxy(this.$_closeImplicitly$, this);
        $events$$16$$[$oj$$81$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$73$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$16$$[$oj$$81$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$73$$.proxy(this.refresh, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeImplicitly$:function() {
      this.$_ignoreBeforeCloseResultant$ = !0;
      this.close();
      delete this.$_ignoreBeforeCloseResultant$;
    }});
    $oj$$81$$.Components.$setDefaultOptions$({ojPopup:{modality:$oj$$81$$.Components.$createDynamicPropertyGetter$(function() {
      return($oj$$81$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-popup-option-defaults") || {}).modality;
    })}});
  })();
});
