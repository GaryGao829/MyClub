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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$34$$, $$$$31$$) {
  (function() {
    var $uid$$1$$ = 0;
    $oj$$34$$.$__registerWidget$("oj.ojCollapsible", $$$$31$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{expanded:!1, disabled:null, expandOn:"click", expandArea:"header", beforeExpand:null, expand:null, beforeCollapse:null, collapse:null, optionChange:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-collapsible oj-component");
      this.$_processPanels$();
      this.$_refresh$();
      this.$_initialRender$ = !0;
      var $elem$$109$$ = this.element[0];
      this.$_expandCollapseHandler$({type:this.options.expanded ? "ojexpand" : "ojcollapse", target:$elem$$109$$, currentTarget:$elem$$109$$, preventDefault:$$$$31$$.noop});
      this.$_initialRender$ = void 0;
    }, $_NotifyContextMenuGesture$:function($menu$$13$$, $event$$542$$, $eventType$$44$$) {
      this.$_OpenContextMenu$($event$$542$$, $eventType$$44$$, {launcher:this.$_getCollapsibleIcon$().first()});
    }, $_createIcons$:function() {
      var $icon$$15$$ = this.options.expanded ? "oj-collapsible-open-icon" : "oj-collapsible-close-icon";
      (this.$_isDisabled$() ? $$$$31$$("\x3cspan\x3e") : $$$$31$$("\x3ca href\x3d'#'\x3e")).addClass("oj-component-icon oj-clickable-icon-nocontext oj-collapsible-header-icon " + $icon$$15$$).attr("aria-labelledby", this.header.attr("id")).prependTo(this.header);
    }, $_destroyIcons$:function() {
      this.header.children(".oj-collapsible-header-icon").remove();
    }, _destroy:function() {
      this.$_cleanup$();
      this.element.removeClass("oj-collapsible oj-component oj-expanded oj-collapsed oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).removeAttr("tabIndex");
      this.header.removeClass("oj-collapsible-header").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
      this.$_findFirstFocusableInHeader$().removeAttr("role").removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("aria-disabled");
      this.$_destroyIcons$();
      this.content.css("display", "").removeAttr("aria-hidden").removeAttr("tabIndex").removeClass("oj-component-content oj-collapsible-content").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
    }, $_cleanup$:function() {
      this.$_tearDownEvents$();
      this.content && ($oj$$34$$.$DomUtils$.unwrap(this.content), this.$wrapper$ = null);
    }, $_isDisabled$:function() {
      return this.element.hasClass("oj-disabled");
    }, $_getExpandAreaSelector$:function() {
      return "header" == this.options.expandArea ? "\x3e .oj-collapsible-header" : "\x3e .oj-collapsible-header \x3e .oj-collapsible-header-icon";
    }, $_getCollapsibleIcon$:function() {
      return this.header.find(".oj-collapsible-header-icon");
    }, _setOption:function($key$$159$$, $value$$280$$, $flags$$36$$) {
      "expanded" === $key$$159$$ ? $value$$280$$ !== this.options.expanded && this.$_setExpanded$($value$$280$$) : "disabled" === $key$$159$$ ? (this.header.add(this.header.next()), this.element.toggleClass("oj-disabled", !!$value$$280$$)) : "expandOn" === $key$$159$$ || "expandArea" === $key$$159$$ ? (this.$_tearDownEvents$(), this._super($key$$159$$, $value$$280$$, $flags$$36$$), this.$_setupEvents$()) : this._super($key$$159$$, $value$$280$$, $flags$$36$$);
    }, $_keydown$:function($event$$543$$) {
      if (!$event$$543$$.altKey && !$event$$543$$.ctrlKey) {
        var $keyCode$$23$$ = $$$$31$$.ui.keyCode;
        switch($event$$543$$.keyCode) {
          case $keyCode$$23$$.SPACE:
          ;
          case $keyCode$$23$$.ENTER:
            this.$_toggleHandler$($event$$543$$);
        }
      }
    }, refresh:function() {
      this._super();
      this.$_cleanup$();
      this.$_processPanels$();
      this.$_destroyIcons$();
      this.$_refresh$();
    }, $_processPanels$:function() {
      this.header = this.element.children(":first-child").addClass("oj-collapsible-header");
      this.content = this.header.next().addClass("oj-collapsible-content oj-component-content");
      this.content.wrap("\x3cdiv\x3e\x3c/div\x3e");
      this.$wrapper$ = this.content.parent().addClass("oj-collapsible-wrapper");
      this.options.disabled && this.element.addClass("oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).attr("tabIndex", -1);
    }, $_refresh$:function() {
      var $focusable$$3_header$$39$$ = this.header, $content$$34$$ = this.content, $options$$338$$ = this.options, $collapsibleId$$ = "oj-collapsible-" + (this.element.attr("id") || ++$uid$$1$$), $headerId$$ = $focusable$$3_header$$39$$.attr("id"), $contentId$$ = $content$$34$$.attr("id");
      $headerId$$ || $focusable$$3_header$$39$$.attr("id", $collapsibleId$$ + "-header");
      $contentId$$ || ($contentId$$ = $collapsibleId$$ + "-content", $content$$34$$.attr("id", $contentId$$));
      this.$_createIcons$();
      $focusable$$3_header$$39$$ = this.$_findFirstFocusableInHeader$();
      $focusable$$3_header$$39$$.attr("role", "button").attr("aria-controls", $contentId$$).attr("aria-expanded", $options$$338$$.expanded);
      this.$_isDisabled$() && $focusable$$3_header$$39$$.attr("aria-disabled", "true");
      $options$$338$$.expanded ? $content$$34$$.removeAttr("aria-hidden") : (this.$wrapper$.css({"max-height":0, "overflow-y":"hidden", display:"none"}), this.$wrapper$.css("max-height", 0), $content$$34$$.attr("aria-hidden", "true"));
      this.$_setupEvents$();
    }, $_setExpanded$:function($expanded$$10$$) {
      $expanded$$10$$ ? this.expand(!0) : this.collapse(!0);
    }, $_setupEvents$:function() {
      var $events$$11$$ = {keydown:this.$_keydown$}, $event$$544_expandArea$$ = this.options.expandOn;
      if ($event$$544_expandArea$$) {
        var $self$$174$$ = this;
        $$$$31$$.each($event$$544_expandArea$$.split(" "), function($index$$238$$, $eventName$$1$$) {
          $oj$$34$$.$DomUtils$.$isValidIdentifier$($eventName$$1$$) && ($events$$11$$[$eventName$$1$$] = $self$$174$$.$_toggleHandler$);
        });
      }
      $event$$544_expandArea$$ = this.element.find(this.$_getExpandAreaSelector$());
      this._on($event$$544_expandArea$$, $events$$11$$);
      this._on(this.$wrapper$, {transitionend:this.$_transitionEndHandler$, webkitTransitionEnd:this.$_transitionEndHandler$, otransitionend:this.$_transitionEndHandler$, oTransitionEnd:this.$_transitionEndHandler$});
      this.$_isDisabled$() || (this._on(this.element, {ojexpand:this.$_expandCollapseHandler$, ojcollapse:this.$_expandCollapseHandler$, ojfocus:this.$_focusHandler$, ojfocusout:this.$_focusHandler$}), this._focusable({element:this.$_getCollapsibleIcon$(), applyHighlight:!0}), this.$_AddHoverAndActiveListeners$($event$$544_expandArea$$));
    }, $_tearDownEvents$:function() {
      this.$_RemoveHoverAndActiveListeners$(this.element.find(this.$_getExpandAreaSelector$()));
      this.$wrapper$ && this._off(this.$wrapper$);
      this._off(this.element.add(this.content));
    }, $_toggleHandler$:function($event$$545$$) {
      this.$_isDisabled$() || $event$$545$$.isDefaultPrevented() || (this.options.expanded ? this.collapse(!0, $event$$545$$) : this.expand(!0, $event$$545$$), $event$$545$$.preventDefault(), $event$$545$$.stopPropagation(), this.$_getCollapsibleIcon$().focus());
    }, $_expandCollapseHandler$:function($event$$546$$) {
      if (!this.$_isDisabled$() && $event$$546$$.target === this.element[0] && (this.$_initialRender$ || !$event$$546$$.isDefaultPrevented())) {
        var $element$$217$$ = this.element, $options$$339$$ = this.options, $content$$35$$ = this.content, $wrapper$$ = this.$wrapper$, $isExpanded$$ = "ojexpand" === $event$$546$$.type;
        $event$$546$$.preventDefault();
        this.$_initialRender$ ? ($options$$339$$.expanded = $isExpanded$$) ? ($element$$217$$.removeClass("oj-collapsed"), $element$$217$$.addClass("oj-expanded"), $oj$$34$$.Components.$subtreeShown$($wrapper$$[0])) : ($element$$217$$.removeClass("oj-expanded"), $element$$217$$.addClass("oj-collapsed"), $wrapper$$.css("max-height", 0), $wrapper$$.hide(), $oj$$34$$.Components.$subtreeHidden$($wrapper$$[0])) : (this.$_changeExpandedOption$($isExpanded$$, $event$$546$$), $wrapper$$.$contentHeight$ = 
        $wrapper$$.outerHeight(), $isExpanded$$ ? ($wrapper$$.show(), setTimeout(function() {
          $wrapper$$.$contentHeight$ += $content$$35$$.outerHeight();
          $wrapper$$.addClass("oj-collapsible-transition").css({"max-height":$wrapper$$.$contentHeight$});
          $element$$217$$.removeClass("oj-collapsed");
          $element$$217$$.addClass("oj-expanded");
          $oj$$34$$.Components.$subtreeShown$($wrapper$$[0]);
        }, 1)) : ($wrapper$$.removeClass("oj-collapsible-transition"), $wrapper$$.css({"max-height":$wrapper$$.$contentHeight$, "overflow-y":"hidden"}), setTimeout(function() {
          $wrapper$$.addClass("oj-collapsible-transition").css({"max-height":0});
          $element$$217$$.removeClass("oj-expanded");
          $element$$217$$.addClass("oj-collapsed");
          $oj$$34$$.Components.$subtreeHidden$($wrapper$$[0]);
        }, 10)));
        this.$_getCollapsibleIcon$().toggleClass("oj-collapsible-open-icon", $isExpanded$$).toggleClass("oj-collapsible-close-icon", !$isExpanded$$ || !1).end();
        $isExpanded$$ ? this.content.removeAttr("aria-hidden") : this.content.attr("aria-hidden", "true");
        this.$_findFirstFocusableInHeader$().attr("aria-expanded", $isExpanded$$);
      }
    }, $_focusHandler$:function($event$$547$$) {
      if (this.$_isDisabled$()) {
        return null;
      }
      "ojfocusout" == $event$$547$$.type ? (this.$_findFirstFocusableInHeader$().attr("tabIndex", -1), $event$$547$$.preventDefault(), $event$$547$$.stopPropagation()) : "ojfocus" == $event$$547$$.type && (this.$_findFirstFocusableInHeader$().attr("tabIndex", 0).focus(), $event$$547$$.preventDefault(), $event$$547$$.stopPropagation());
    }, $_findFirstFocusableInHeader$:function() {
      return this.$_findFocusables$(this.header).first();
    }, $_findFocusables$:function($start$$58$$) {
      return this.$_isDisabled$() ? $start$$58$$.find("span") : $start$$58$$.find("a,:input");
    }, expand:function($vetoable$$4$$, $event$$548$$) {
      if (!this.$_isDisabled$()) {
        var $eventData$$10$$ = {header:this.header, content:this.content};
        $vetoable$$4$$ && !1 === this._trigger("beforeExpand", $event$$548$$, $eventData$$10$$) || this._trigger("expand", $event$$548$$, $eventData$$10$$);
      }
    }, collapse:function($vetoable$$5$$, $event$$549$$) {
      if (!this.$_isDisabled$()) {
        var $eventData$$11$$ = {header:this.header, content:this.content};
        $vetoable$$5$$ && !1 === this._trigger("beforeCollapse", $event$$549$$, $eventData$$11$$) || this._trigger("collapse", $event$$549$$, $eventData$$11$$);
      }
    }, $_transitionEndHandler$:function($event$$550$$) {
      this.$_isDisabled$() || ("max-height" == ($event$$550$$.originalEvent ? $event$$550$$.originalEvent.propertyName : null) && ($event$$550$$.preventDefault(), $event$$550$$.stopPropagation()), this.options.expanded ? this.$wrapper$.css({"max-height":9999, "overflow-y":""}) : this.$wrapper$.hide(), this.$wrapper$.removeClass("oj-collapsible-transition"));
    }, $_changeExpandedOption$:function($value$$281$$, $originalEvent$$4$$) {
      this.option("expanded", $value$$281$$, {_context:{originalEvent:$originalEvent$$4$$, $writeback$:!0, $internalSet$:!0}});
    }, getNodeBySubId:function($locator$$34$$) {
      if (null == $locator$$34$$) {
        return this.element ? this.element[0] : null;
      }
      switch($locator$$34$$.subId) {
        case "oj-collapsible-content":
          return this.content[0];
        case "oj-collapsible-header":
          return this.header[0];
        case "oj-collapsible-disclosure":
        ;
        case "oj-collapsible-header-icon":
          return this.$_getCollapsibleIcon$()[0];
      }
      return null;
    }, getSubIdByNode:function($currentNode$$1_node$$90$$) {
      for (var $headerIcon$$ = this.getNodeBySubId({subId:"oj-collapsible-disclosure"});$currentNode$$1_node$$90$$;) {
        if ($currentNode$$1_node$$90$$ === this.content[0]) {
          return{subId:"oj-collapsible-content"};
        }
        if ($currentNode$$1_node$$90$$ === this.header[0]) {
          return{subId:"oj-collapsible-header"};
        }
        if ($currentNode$$1_node$$90$$ === $headerIcon$$) {
          return{subId:"oj-collapsible-disclosure"};
        }
        $currentNode$$1_node$$90$$ = $currentNode$$1_node$$90$$.parentElement;
      }
      return null;
    }});
  })();
});
