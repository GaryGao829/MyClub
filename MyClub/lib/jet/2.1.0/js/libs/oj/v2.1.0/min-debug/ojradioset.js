/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$74$$, $$$$67$$) {
  (function() {
    $oj$$74$$.$__registerWidget$("oj.ojRadioset", $$$$67$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:!1, value:void 0}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$uiRadioset$;
    }, $_InitOptions$:function($originalDefaults$$20$$, $constructorOptions$$22$$) {
      var $checkedRadio_domValue$$3$$;
      this._super($originalDefaults$$20$$, $constructorOptions$$22$$);
      $oj$$74$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"placeholder"}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title"}], $constructorOptions$$22$$, this);
      this.$$radios$ = this.$_findRadiosWithMatchingName$();
      void 0 === $constructorOptions$$22$$.value && ($checkedRadio_domValue$$3$$ = this.$$radios$.filter(":checked"), $checkedRadio_domValue$$3$$ = 0 === $checkedRadio_domValue$$3$$.length ? void 0 : $checkedRadio_domValue$$3$$.val(), void 0 !== $checkedRadio_domValue$$3$$ && this.option("value", $checkedRadio_domValue$$3$$, {_context:{$writeback$:!0, $internalSet$:!0}}), void 0 === this.options.value && (this.options.value = null));
    }, _ComponentCreate:function() {
      var $element$$250$$ = this.element;
      this._super();
      if ($element$$250$$.is("fieldset")) {
        throw Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");
      }
      this.$$radios$._ojRadioCheckbox();
      this.$uiRadioset$ = $element$$250$$.addClass("oj-radioset oj-component").attr("role", "radiogroup").wrapInner("\x3cdiv class\x3d'oj-radioset-wrapper'\x3e\x3c/div\x3e");
      this._on(this.$_events$);
    }, $_AfterCreate$:function() {
      this._super();
      this.$_setup$();
    }, $_ResetComponentState$:function() {
      this.$$radios$ = this.$_findRadiosWithMatchingName$();
      this.$$radios$.filter(".oj-radio").each(function() {
        var $disabledValue$$1$$ = void 0 !== $$$$67$$(this).attr("disabled") ? !!$$$$67$$(this).prop("disabled") : !1;
        $$$$67$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$1$$);
      });
      this.$$radios$.not(".oj-radio")._ojRadioCheckbox();
    }, Focus:function() {
      this.$_GetContentElement$().first().focus();
      return!0;
    }, $_SetDisabledDom$:function() {
    }, $_findRadiosWithMatchingName$:function() {
      var $allradios_element$$251$$ = this.element, $first$$11_name$$149$$ = $allradios_element$$251$$.find("input[type\x3dradio]:first");
      0 === $first$$11_name$$149$$.length && $oj$$74$$.$Logger$.warn("Could not find any input type\x3dradio within this element");
      $first$$11_name$$149$$ = $first$$11_name$$149$$.attr("name");
      return void 0 === $first$$11_name$$149$$ ? ($allradios_element$$251$$ = $allradios_element$$251$$.find("input[type\x3dradio]"), $allradios_element$$251$$.not("[name]")) : $allradios_element$$251$$.find("input[type\x3dradio][name\x3d" + $first$$11_name$$149$$ + "]");
    }, $_NotifyContextMenuGesture$:function($launcher$$14_menu$$25_radios$$, $event$$778$$, $eventType$$54$$) {
      $launcher$$14_menu$$25_radios$$ = this.element.find("input[type\x3dradio]");
      var $checked$$7$$ = $launcher$$14_menu$$25_radios$$.filter(":checked");
      $launcher$$14_menu$$25_radios$$ = $checked$$7$$.length ? $checked$$7$$ : $launcher$$14_menu$$25_radios$$.filter(":enabled").first();
      this.$_OpenContextMenu$($event$$778$$, $eventType$$54$$, {launcher:$launcher$$14_menu$$25_radios$$});
    }, _GetMessagingLauncherElement:function() {
      return this.widget();
    }, $_setup$:function() {
      this.$_propagateDisabled$(this.options.disabled);
    }, $_events$:{change:function($event$$779$$) {
      this.$_HandleChangeEvent$($event$$779$$);
    }}, $_HandleChangeEvent$:function($event$$780$$) {
      var $submittedValue$$5$$ = this.$_GetDisplayValue$();
      this.$_SetValue$($submittedValue$$5$$, $event$$780$$, $_sValueChangeCheckFalse$$1$$);
    }, $_GetDisplayValue$:function() {
      return this.$_GetElementValue$();
    }, $_SetDisplayValue$:function($displayValue$$13$$) {
      var $length$$24$$ = this.$$radios$.length, $radioInputValue$$, $i$$524$$, $$radio$$;
      for ($i$$524$$ = 0;$i$$524$$ < $length$$24$$;$i$$524$$++) {
        $$radio$$ = $$$$67$$(this.$$radios$[$i$$524$$]);
        $radioInputValue$$ = $$radio$$[0].value;
        var $checked$$8$$ = $$radio$$._ojRadioCheckbox("option", "checked");
        $displayValue$$13$$ === $radioInputValue$$ ? $checked$$8$$ || $$radio$$._ojRadioCheckbox("option", "checked", !0) : $checked$$8$$ && $$radio$$._ojRadioCheckbox("option", "checked", !1);
      }
    }, $_GetElementValue$:function() {
      var $checkedRadio$$1$$ = this.$$radios$.filter(":checked");
      return 0 === $checkedRadio$$1$$.length ? null : $checkedRadio$$1$$.val();
    }, _GetDefaultStyleClass:function() {
      return "oj-radioset";
    }, $_GetContentElement$:function() {
      if (null != this.$$radios$) {
        return this.$$radios$;
      }
      this.$_findRadiosWithMatchingName$();
    }, $_RefreshAriaRequired$:function() {
    }, $_AriaRequiredUnsupported$:function() {
      return!0;
    }, $_propagateDisabled$:function($disabled$$11$$) {
      $disabled$$11$$ = !!$disabled$$11$$;
      this.$$radios$.each(function() {
        $$$$67$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($disabled$$11$$);
      });
      this.$$radios$._ojRadioCheckbox("refreshDisabled");
    }, _setOption:function($key$$207$$, $value$$329$$) {
      this._superApply(arguments);
      "disabled" === $key$$207$$ && this.$_propagateDisabled$($value$$329$$);
    }, getNodeBySubId:function($locator$$64_subId$$68$$) {
      var $node$$176$$ = this._super($locator$$64_subId$$68$$);
      $node$$176$$ || ($locator$$64_subId$$68$$ = $locator$$64_subId$$68$$.subId, "oj-radioset-inputs" === $locator$$64_subId$$68$$ && ($node$$176$$ = this.$$radios$.get()));
      return $node$$176$$ || null;
    }, _destroy:function() {
      var $ret$$83$$ = this._super(), $wrapperDom$$1$$ = this.element[0].firstChild;
      this.$$radios$ && this.$$radios$._ojRadioCheckbox("destroy");
      $$$$67$$($wrapperDom$$1$$).contents().unwrap();
      return $ret$$83$$;
    }});
    var $_sValueChangeCheckFalse$$1$$ = {$doValueChangeCheck$:!1};
  })();
});
