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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojcollapsible"], function($oj$$62$$, $$$$56$$) {
  (function() {
    $oj$$62$$.$__registerWidget$("oj.ojAccordion", $$$$56$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{multiple:!1, expanded:null, beforeExpand:null, expand:null, beforeCollapse:null, collapse:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-accordion oj-component").attr("role", "group");
      this.options.expanded = this.$_expandedIndexToId$(this.options.expanded);
      this.$_refresh$();
    }, $_NotifyContextMenuGesture$:function($menu$$18$$, $event$$684$$, $eventType$$47$$) {
      this.$_OpenContextMenu$($event$$684$$, $eventType$$47$$, {launcher:this.element.find(".oj-collapsible-header-icon").first()});
    }, _destroy:function() {
      this.element.removeClass("oj-accordion oj-component").removeAttr("role");
      this.element.children().removeClass("oj-accordion-collapsible");
      this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy");
    }, _setOption:function($key$$180$$, $value$$310$$, $flags$$52$$) {
      if ("multiple" === $key$$180$$) {
        !1 == $value$$310$$ && !0 == this.options.multiple && this.element.children(".oj-expanded").first().siblings(".oj-collapsible").ojCollapsible("collapse", !1);
      } else {
        if ("expanded" === $key$$180$$) {
          this.$_setExpandedOption$($value$$310$$);
          return;
        }
      }
      this._super($key$$180$$, $value$$310$$, $flags$$52$$);
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, $_refresh$:function() {
      this.$_makeCollapsible$();
      this._setOption("disabled", this.options.disabled);
      this.$_internalSetExpanded$ = !0;
      this._setOption("expanded", this.options.expanded);
      this.$_internalSetExpanded$ = !1;
      this.$_setupEvents$();
    }, $_makeCollapsible$:function() {
      this.element.children(":oj-collapsible").each(function() {
        $$$$56$$(this).ojCollapsible("option", "expandArea", "header");
      });
      this.$collapsibles$ = this.element.children().not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible");
    }, $_setupEvents$:function() {
      var $events$$14$$ = {keydown:this.$_keydown$, ojbeforeexpand:this.$_beforeExpandHandler$, ojexpand:this.$_expandHandler$, ojbeforecollapse:this.$_beforeCollapseHandler$, ojcollapse:this.$_collapseHandler$};
      this._off(this.$collapsibles$);
      this._on(this.$collapsibles$, $events$$14$$);
    }, $_keydown$:function($event$$685$$) {
      if (!$event$$685$$.altKey && !$event$$685$$.ctrlKey && ($$$$56$$($event$$685$$.target).hasClass("oj-collapsible-header") || $$$$56$$($event$$685$$.target).hasClass("oj-collapsible-header-icon"))) {
        var $keyCode$$26$$ = $$$$56$$.ui.keyCode, $enabledCollapsibles$$ = this.$collapsibles$.not(".oj-disabled"), $length$$22$$ = $enabledCollapsibles$$.length, $target$$135$$ = $$$$56$$($event$$685$$.target).closest(".oj-collapsible"), $currentIndex$$4$$ = $enabledCollapsibles$$.index($target$$135$$), $toFocus$$ = !1;
        if (0 <= $currentIndex$$4$$) {
          switch($event$$685$$.keyCode) {
            case $keyCode$$26$$.RIGHT:
            ;
            case $keyCode$$26$$.DOWN:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$4$$ + 1) % $length$$22$$];
              break;
            case $keyCode$$26$$.LEFT:
            ;
            case $keyCode$$26$$.UP:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$4$$ - 1 + $length$$22$$) % $length$$22$$];
              break;
            case $keyCode$$26$$.HOME:
              $toFocus$$ = $enabledCollapsibles$$[0];
              break;
            case $keyCode$$26$$.END:
              $toFocus$$ = $enabledCollapsibles$$[$length$$22$$ - 1];
          }
        }
        $toFocus$$ && ($target$$135$$ && $$$$56$$($target$$135$$).trigger("ojfocusout"), $$$$56$$($toFocus$$).trigger("ojfocus"), $event$$685$$.preventDefault());
      }
    }, $_findTargetSiblings$:function($closestCollapsible_event$$686$$) {
      return!this.options.multiple && ($closestCollapsible_event$$686$$ = $$$$56$$($closestCollapsible_event$$686$$.target).closest(".oj-collapsible"), $closestCollapsible_event$$686$$.parent().is(":oj-ojAccordion")) ? $closestCollapsible_event$$686$$.siblings(".oj-collapsible.oj-expanded").map(function() {
        return $$$$56$$(this).data("oj-ojCollapsible");
      }) : $$$$56$$();
    }, $_beforeExpandHandler$:function($event$$687$$) {
      if (!this.$_isTargetMyCollapsible$($event$$687$$)) {
        return!0;
      }
      var $result$$69$$, $self$$207$$ = this, $newData$$1$$;
      this.$_findTargetSiblings$($event$$687$$).each(function() {
        var $beforeCollapsedData_collapsible$$ = this.element;
        $newData$$1$$ = $self$$207$$.$_initEventData$($beforeCollapsedData_collapsible$$, $$$$56$$($event$$687$$.target));
        $beforeCollapsedData_collapsible$$ = {header:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-header"), content:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-content")};
        return $result$$69$$ = this._trigger("beforeCollapse", $event$$687$$, $beforeCollapsedData_collapsible$$);
      });
      $newData$$1$$ || ($newData$$1$$ = $self$$207$$.$_initEventData$(null, $$$$56$$($event$$687$$.target)));
      this.options.multiple || this._trigger("beforeExpand", $event$$687$$, $newData$$1$$);
      return $result$$69$$;
    }, $_expandHandler$:function($event$$688$$, $eventData$$17$$) {
      if (this.$_isTargetMyCollapsible$($event$$688$$) && !this.$_duringSetExpandedOption$) {
        var $newData$$2$$, $self$$208$$ = this;
        this.$_findTargetSiblings$($event$$688$$).each(function() {
          this.collapse(!1, $event$$688$$, $eventData$$17$$);
          $newData$$2$$ = $self$$208$$.$_initEventData$(this.element, $$$$56$$($event$$688$$.target));
        });
        $newData$$2$$ || ($newData$$2$$ = $self$$208$$.$_initEventData$(null, $$$$56$$($event$$688$$.target)));
        this.options.multiple || this._trigger("expand", $event$$688$$, $newData$$2$$);
        this.$_updateExpanded$();
      }
    }, $_beforeCollapseHandler$:function($event$$689$$, $eventData$$18$$) {
      return this.$_isTargetMyCollapsible$($event$$689$$) && !this.options.multiple ? this._trigger("beforeCollapse", $event$$689$$, this.$_initCollapseEventData$($event$$689$$, $eventData$$18$$)) : !0;
    }, $_collapseHandler$:function($event$$690$$, $eventData$$19$$) {
      if (!this.$_duringSetExpandedOption$ && this.$_isTargetMyCollapsible$($event$$690$$)) {
        var $newData$$3$$ = this.$_initCollapseEventData$($event$$690$$, $eventData$$19$$);
        this.options.multiple || this._trigger("collapse", $event$$690$$, $newData$$3$$);
        this.$_updateExpanded$();
      }
    }, $_initEventData$:function($fromC$$, $toC$$) {
      return{fromCollapsible:$fromC$$, toCollapsible:$toC$$};
    }, $_initCollapseEventData$:function($event$$691$$, $eventData$$21$$) {
      var $newData$$4$$;
      if ($eventData$$21$$.toCollapsible) {
        $newData$$4$$ = $eventData$$21$$;
      } else {
        if ($event$$691$$.originalEvent && $event$$691$$.originalEvent.target) {
          var $collapsible$$1$$ = $$$$56$$($event$$691$$.originalEvent.target);
          $collapsible$$1$$.hasClass("oj-collapsible") && ($newData$$4$$ = this.$_initEventData$($$$$56$$($event$$691$$.target), $collapsible$$1$$));
        }
        $newData$$4$$ || ($newData$$4$$ = this.$_initEventData$($$$$56$$($event$$691$$.target), null));
      }
      return $newData$$4$$;
    }, $_isTargetMyCollapsible$:function($event$$692$$) {
      return $$$$56$$($event$$692$$.target).is(this.$collapsibles$);
    }, $_updateExpanded$:function() {
      var $cid$$8$$, $result$$70$$ = [];
      this.$collapsibles$.each(function($index$$299$$) {
        $$$$56$$(this).ojCollapsible("option", "expanded") && ($cid$$8$$ = $$$$56$$(this).attr("id"), $result$$70$$.push($cid$$8$$ ? $cid$$8$$ : $index$$299$$));
      });
      $oj$$62$$.$Object$.$_compareSet$(this.options.expanded, $result$$70$$) || this.option("expanded", $result$$70$$, {_context:{$internalSet$:!0, $writeback$:!0}});
    }, $_expandedIndexToId$:function($expanded$$11$$) {
      if (Array.isArray($expanded$$11$$)) {
        var $id$$62$$, $newExp$$ = [];
        this.element.children().each(function($index$$300$$) {
          ($id$$62$$ = $$$$56$$(this).attr("id")) ? -1 != $expanded$$11$$.indexOf($id$$62$$) ? $newExp$$.push($id$$62$$) : -1 != $expanded$$11$$.indexOf($index$$300$$) && $newExp$$.push($id$$62$$) : -1 != $expanded$$11$$.indexOf($index$$300$$) && $newExp$$.push($index$$300$$);
        });
        !this.options.multiple && 1 < $newExp$$.length && ($newExp$$ = [$newExp$$[$newExp$$.length - 1]]);
        return $newExp$$;
      }
      return null;
    }, $_setExpandedOption$:function($expanded$$12$$) {
      this.$_internalSetExpanded$ || ($expanded$$12$$ = this.$_expandedIndexToId$($expanded$$12$$));
      if ($expanded$$12$$) {
        var $self$$209$$ = this, $child$$13$$, $childId$$, $parentExp$$, $iexp$$ = 0;
        this.$collapsibles$.each(function($index$$301$$) {
          $child$$13$$ = $$$$56$$(this);
          $childId$$ = $child$$13$$.attr("id");
          $parentExp$$ = !1;
          $childId$$ ? $childId$$ == $expanded$$12$$[$iexp$$] && ($parentExp$$ = !0) : $index$$301$$ == $expanded$$12$$[$iexp$$] && ($parentExp$$ = !0);
          $parentExp$$ && $iexp$$++;
          $child$$13$$.ojCollapsible("option", "expanded") !== $parentExp$$ && ($oj$$62$$.$Logger$.warn("JET Accordion: override collapsible " + $index$$301$$ + " expanded setting"), $self$$209$$.$_duringSetExpandedOption$ = !0, $child$$13$$.ojCollapsible("option", "expanded", $parentExp$$), $self$$209$$.$_duringSetExpandedOption$ = !1);
        });
      }
      this.$_updateExpanded$();
    }, getNodeBySubId:function($collapsible$$2_index$$302_locator$$58$$) {
      if (null == $collapsible$$2_index$$302_locator$$58$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$63$$ = $collapsible$$2_index$$302_locator$$58$$.subId;
      $collapsible$$2_index$$302_locator$$58$$ = $collapsible$$2_index$$302_locator$$58$$.index;
      if ("number" !== typeof $collapsible$$2_index$$302_locator$$58$$ || 0 > $collapsible$$2_index$$302_locator$$58$$ || $collapsible$$2_index$$302_locator$$58$$ >= this.$collapsibles$.length) {
        return null;
      }
      $collapsible$$2_index$$302_locator$$58$$ = this.$collapsibles$[$collapsible$$2_index$$302_locator$$58$$];
      switch($subId$$63$$) {
        case "oj-accordion-content":
          $subId$$63$$ = "oj-collapsible-content";
          break;
        case "oj-accordion-header":
          $subId$$63$$ = "oj-collapsible-header";
          break;
        case "oj-accordion-disclosure":
        ;
        case "oj-accordion-header-icon":
          $subId$$63$$ = "oj-collapsible-disclosure";
          break;
        case "oj-accordion-collapsible":
          return $collapsible$$2_index$$302_locator$$58$$;
        default:
          return null;
      }
      return $$$$56$$($collapsible$$2_index$$302_locator$$58$$).ojCollapsible("getNodeBySubId", {subId:$subId$$63$$});
    }, getSubIdByNode:function($collapsibleSubId_node$$112$$) {
      for (var $collapsibleIndex$$ = -1, $currentNode$$3_subId$$64$$ = $collapsibleSubId_node$$112$$;$currentNode$$3_subId$$64$$;) {
        $collapsibleIndex$$ = Array.prototype.indexOf.call(this.$collapsibles$, $currentNode$$3_subId$$64$$);
        if (-1 != $collapsibleIndex$$) {
          break;
        }
        $currentNode$$3_subId$$64$$ = $currentNode$$3_subId$$64$$.parentElement;
      }
      $currentNode$$3_subId$$64$$ = null;
      if (-1 != $collapsibleIndex$$) {
        switch($collapsibleSubId_node$$112$$ = ($collapsibleSubId_node$$112$$ = $$$$56$$(this.$collapsibles$[$collapsibleIndex$$]).ojCollapsible("getSubIdByNode", $collapsibleSubId_node$$112$$)) ? $collapsibleSubId_node$$112$$ : {}, $collapsibleSubId_node$$112$$.subId) {
          case "oj-collapsible-content":
            $currentNode$$3_subId$$64$$ = "oj-accordion-content";
            break;
          case "oj-collapsible-header":
            $currentNode$$3_subId$$64$$ = "oj-accordion-header";
            break;
          case "oj-collapsible-disclosure":
          ;
          case "oj-collapsible-header-icon":
            $currentNode$$3_subId$$64$$ = "oj-accordion-disclosure";
            break;
          default:
            $currentNode$$3_subId$$64$$ = "oj-accordion-collapsible";
        }
      }
      return $currentNode$$3_subId$$64$$ ? {subId:$currentNode$$3_subId$$64$$, index:$collapsibleIndex$$} : null;
    }});
  })();
});
