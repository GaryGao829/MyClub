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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$50$$) {
  (function() {
    $oj$$50$$.$__registerWidget$("oj.ojSwitch", $.oj.editableValue, {version:"1.1.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:!1, readOnly:!1, required:!1, title:"", value:!1}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$_element2$;
    }, getNodeBySubId:function($locator$$48_subId$$52$$) {
      var $node$$103$$, $rootElement$$ = this.widget();
      $node$$103$$ = null == $locator$$48_subId$$52$$ || null == $locator$$48_subId$$52$$.subId ? $rootElement$$ : null;
      return $node$$103$$ || ($locator$$48_subId$$52$$ = $locator$$48_subId$$52$$.subId, "oj-switch-thumb" !== $locator$$48_subId$$52$$ && "oj-switch-track" !== $locator$$48_subId$$52$$) ? $node$$103$$ || null : $rootElement$$.find("." + $locator$$48_subId$$52$$)[0];
    }, getSubIdByNode:function($node$$104$$) {
      var $originalId$$ = $(this.element).attr("id"), $nodeId$$1$$, $result$$68$$ = null;
      null != $node$$104$$ && ($($node$$104$$).hasClass("oj-switch-track") || $($node$$104$$).hasClass("oj-switch-thumb")) && ($nodeId$$1$$ = $($node$$104$$).parents("div.oj-switch").find("input.oj-component-initnode").attr("id"), $originalId$$ === $nodeId$$1$$ && $($node$$104$$).hasClass("oj-switch-track") ? $result$$68$$ = {subId:"oj-switch-track"} : $originalId$$ === $nodeId$$1$$ && $($node$$104$$).hasClass("oj-switch-thumb") && ($result$$68$$ = {subId:"oj-switch-thumb"}));
      return $result$$68$$;
    }, $_BUNDLE_KEY$:{$_SWITCH_OFF$:"SwitchOFF", $_SWITCH_ON$:"SwitchON"}, $_InitOptions$:function($originalDefaults$$14$$, $constructorOptions$$16$$) {
      var $val$$71$$;
      this._super($originalDefaults$$14$$, $constructorOptions$$16$$);
      $oj$$50$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"readonly", option:"readOnly", $validateOption$:!0}, {$attribute$:"required", $validateOption$:!1, $coerceDomValue$:function() {
        return!1;
      }}, {$attribute$:"checked", option:"value", $validateOption$:!1, $coerceDomValue$:function($domValue$$2$$) {
        return $domValue$$2$$ ? !0 : !1;
      }}, {$attribute$:"title"}], $constructorOptions$$16$$, this);
      $val$$71$$ = this.option("value");
      this.option({required:!1, value:!!$val$$71$$}, {_context:{$writeback$:!0, $internalSet$:!0}});
    }, _ComponentCreate:function() {
      this._super();
      if (!this.element.is("input")) {
        throw Error("ojSwitch can be bound to INPUT only.");
      }
      this.$_inputElementOriginalDisplay$ = this.element.css("display");
      this.element.css("display", "none").attr("type", "checkbox").attr("checked", this.option("value")).attr("tabindex", "-1").attr("disabled", this.option("disabled")).attr("readonly", this.option("readOnly"));
      this.$_element2$ = this.element.wrap("\x3cdiv\x3e\x3c/div\x3e").parent().addClass("oj-switch oj-component oj-form-control");
      this.$_element2$.append("\x3cdiv class\x3d'oj-switch-container'\x3e\x3cdiv class\x3d'oj-switch-track'\x3e\x3cdiv class\x3d'oj-switch-thumb' tabIndex\x3d'0'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
      this.$switchThumb$ = this.$_element2$.find(".oj-switch-thumb");
      this.$switchThumb$.attr("role", "switch checkbox");
      this.$_setAriaLabel$(this.element, this.$switchThumb$);
      this.$_setup$();
    }, $_setAriaLabel$:function($elem$$112$$, $target$$134$$) {
      var $id$$54_switchLabel$$ = $elem$$112$$.prop("id"), $ariaLabelledBy$$ = $elem$$112$$.attr("aria-labelledby"), $ariaLabel$$ = $elem$$112$$.attr("aria-label");
      $ariaLabel$$ ? $target$$134$$.attr("aria-label", $ariaLabel$$) : $ariaLabelledBy$$ ? $target$$134$$.attr("aria-labelledby", $ariaLabelledBy$$) : $id$$54_switchLabel$$ && ($id$$54_switchLabel$$ = $("label[for\x3d'" + $id$$54_switchLabel$$ + "']")) && ($id$$54_switchLabel$$.attr("id") ? $target$$134$$.attr("aria-labelledby", $id$$54_switchLabel$$.attr("id")) : $target$$134$$.attr("aria-label", $($id$$54_switchLabel$$).text()));
    }, $_setup$:function() {
      var $rootElement$$1$$ = $(this.widget()), $thumbTitle$$ = this.option("title");
      this.$_setupEvents$();
      if (void 0 !== $rootElement$$1$$) {
        this.element.attr("checked", this.option("value"));
        $rootElement$$1$$.removeClass("oj-disabled oj-read-only oj-selected oj-hover oj-active");
        $(this.$switchThumb$).attr("tabindex", "0");
        $(this.$switchThumb$).html("");
        if (this.option("disabled") || this.option("readOnly")) {
          this.option("disabled") ? $rootElement$$1$$.addClass("oj-disabled") : ($rootElement$$1$$.addClass("oj-read-only"), $(this.$switchThumb$).html(this.$_setReadOnlyValue$())), $(this.$switchThumb$).removeAttr("tabindex");
        }
        this.option("value") && $rootElement$$1$$.addClass("oj-selected");
        void 0 !== $thumbTitle$$ && $(this.$switchThumb$).attr("title", $thumbTitle$$);
        $(this.$switchThumb$).attr("aria-checked", this.option("value"));
        $(this.$switchThumb$).removeAttr("aria-disabled");
        $rootElement$$1$$.removeAttr("aria-disabled");
        this.$_CanSetValue$() || $(this.$switchThumb$).attr("aria-disabled", "true");
      }
    }, $_setReadOnlyValue$:function() {
      var $strReturn$$ = this.$_BUNDLE_KEY$.$_SWITCH_OFF$;
      this.option("value") && ($strReturn$$ = this.$_BUNDLE_KEY$.$_SWITCH_ON$);
      return this.$getTranslatedString$($strReturn$$);
    }, $_setupEvents$:function() {
      this._off(this.$_element2$, "keydown keyup mousedown mouseup mouseleave mouseenter touchstart");
      this.$_CanSetValue$() && (this._on(this.$_element2$, this.$_switchEvents$), this._hoverable(this.$_element2$));
      this._focusable({element:this.$switchThumb$, applyHighlight:!0});
    }, $_switchEvents$:{keydown:function($event$$641$$) {
      if ($event$$641$$.which === $.ui.keyCode.ENTER || $event$$641$$.which === $.ui.keyCode.SPACE) {
        $($event$$641$$.currentTarget).addClass("oj-active"), $event$$641$$.preventDefault();
      }
    }, keyup:function($event$$642$$) {
      $event$$642$$.which !== $.ui.keyCode.ENTER && $event$$642$$.which !== $.ui.keyCode.SPACE || this.$_SetValue$(!this.option("value"), $event$$642$$);
    }, mousedown:function($event$$643$$) {
      1 === $event$$643$$.which && $($event$$643$$.currentTarget).addClass("oj-active");
    }, mouseup:function($event$$644$$) {
      1 === $event$$644$$.which && this.$_SetValue$(!this.option("value"), $event$$644$$);
    }, mouseleave:function($event$$645$$) {
      1 === $event$$645$$.which && $($event$$645$$.currentTarget).removeClass("oj-active");
    }, mouseenter:function($event$$646$$) {
      1 === $event$$646$$.which && $($event$$646$$.currentTarget).addClass("oj-active");
    }, $touchstart$:function($event$$647$$) {
      this.$_SetValue$(!this.option("value"), $event$$647$$);
      $event$$647$$.preventDefault();
    }}, _GetDefaultStyleClass:function() {
      return "oj-switch";
    }, $_setSwitchRole$:function() {
      return "switch checkbox";
    }, _destroy:function() {
      this.$_element2$.find(".oj-switch-track").remove();
      $oj$$50$$.$DomUtils$.unwrap(this.element);
      this.$_RestoreAttributes$(this.element);
      return this._super();
    }, _GetMessagingLauncherElement:function() {
      return this.$_element2$;
    }, $_GetContentElement$:function() {
      return this.$switchThumb$;
    }, _setOption:function($key$$170$$, $coercedValue$$1_value$$295$$, $flags$$40$$) {
      switch($key$$170$$) {
        case "disabled":
        ;
        case "readOnly":
        ;
        case "value":
          $coercedValue$$1_value$$295$$ = !!$coercedValue$$1_value$$295$$;
          break;
        case "required":
          $coercedValue$$1_value$$295$$ = !1;
          break;
      }
      this._super($key$$170$$, $coercedValue$$1_value$$295$$, $flags$$40$$);
      this.$_setup$();
    }});
  })();
});
