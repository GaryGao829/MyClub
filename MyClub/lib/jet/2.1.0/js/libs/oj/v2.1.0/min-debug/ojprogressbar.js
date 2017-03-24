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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$59$$, $$$$53$$) {
  (function() {
    $oj$$59$$.$__registerWidget$("oj.ojProgressbar", $$$$53$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{max:100, value:0, disabled:!1}, min:0, $_indeterminate$:!1, _ComponentCreate:function() {
      this._super();
      this.oldValue = this.options.value = this.$_constrainedValue$();
      this.element.addClass("oj-progressbar").attr({role:"progressbar", "aria-valuemin":this.min});
      this.$valueDiv$ = $$$$53$$("\x3cdiv class\x3d'oj-progressbar-value'\x3e\x3c/div\x3e").appendTo(this.element);
      this.$_refreshValue$();
    }, $_InitOptions$:function($originalDefaults$$18$$, $constructorOptions$$20$$) {
      var $dom_element$$235$$ = this.element;
      this._super($originalDefaults$$18$$, $constructorOptions$$20$$);
      void 0 === $constructorOptions$$20$$.max && ($dom_element$$235$$ = $dom_element$$235$$.attr("max") || void 0, null != $dom_element$$235$$ && (this.options.max = $dom_element$$235$$));
    }, $_constrainedValue$:function($newValue$$27$$) {
      void 0 === $newValue$$27$$ && ($newValue$$27$$ = this.options.value);
      this.$_indeterminate$ = -1 == $newValue$$27$$;
      "number" !== typeof $newValue$$27$$ && ($newValue$$27$$ = isNaN($newValue$$27$$) ? 0 : Number($newValue$$27$$));
      return this.$_indeterminate$ ? -1 : Math.min(this.options.max, Math.max(this.min, $newValue$$27$$));
    }, _setOptions:function($options$$360$$, $flags$$50$$) {
      var $value$$307$$ = $options$$360$$.value;
      delete $options$$360$$.value;
      this._super($options$$360$$, $flags$$50$$);
      this.options.disabled || (this.options.value = this.$_constrainedValue$($value$$307$$), this.$_refreshValue$());
    }, _setOption:function($key$$175$$, $value$$308$$, $flags$$51$$) {
      "max" === $key$$175$$ && ($value$$308$$ = Math.max(this.min, $value$$308$$));
      this._super($key$$175$$, $value$$308$$, $flags$$51$$);
    }, $_percentage$:function() {
      return this.$_indeterminate$ ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, $_refreshValue$:function() {
      var $value$$309$$ = this.options.value, $percentage$$ = this.$_percentage$();
      this.$valueDiv$.toggle(this.$_indeterminate$ || $value$$309$$ > this.min).width($percentage$$.toFixed(0) + "%");
      this.element.toggleClass("oj-progressbar-indeterminate", this.$_indeterminate$);
      this.$_indeterminate$ ? (this.element.attr({"aria-valuetext":"In Progress"}), this.element.removeAttr("aria-valuenow"), this.element.removeAttr("aria-valuemin"), this.element.removeAttr("aria-valuemax"), this.$overlayDiv$ || (this.$overlayDiv$ = $$$$53$$("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.$valueDiv$), this.$overlayDiv$.addClass("oj-indeterminate"))) : (this.element.attr({"aria-valuemax":this.options.max, "aria-valuenow":$value$$309$$}), this.$overlayDiv$ && 
      (this.$overlayDiv$.remove(), this.$overlayDiv$ = null));
    }, _destroy:function() {
      this.element.removeClass("oj-progressbar").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.$valueDiv$.remove();
      this._super();
    }});
  })();
});
