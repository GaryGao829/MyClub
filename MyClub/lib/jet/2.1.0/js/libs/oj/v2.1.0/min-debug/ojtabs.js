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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojconveyorbelt", "ojs/ojmenu", "jqueryui-amd/sortable", "ojs/ojtouchproxy"], function($oj$$56$$, $$$$50$$) {
  (function() {
    var $_arMenuCmdMap$$ = {cut:"ojtabscut", "paste-before":"ojtabspastebefore", "paste-after":"ojtabspasteafter", remove:"ojtabsremove"}, $_arMenuKeyMap$$ = {cut:"labelCut", "paste-before":"labelPasteBefore", "paste-after":"labelPasteAfter", remove:"labelRemove"};
    $oj$$56$$.$__registerWidget$("oj.ojTabs", $$$$50$$.oj.baseComponent, {widgetEventPrefix:"oj", delay:300, options:{selected:0, disabledTabs:null, truncation:"auto", selectOn:"click", orientation:"horizontal", edge:"top", removable:!1, reorderable:!1, beforeSelect:null, select:null, beforeDeselect:null, deselect:null, beforeRemove:null, remove:null, beforeReorder:null, reorder:null, optionChange:null}, _ComponentCreate:function() {
      var $options$$355_selectedIndex$$2$$ = this.options;
      this._super();
      this.$running$ = !1;
      this.$_initialRender$ = !0;
      this.$_setupEdge$($options$$355_selectedIndex$$2$$.edge);
      this.$_isOldMarkup$ = 0 == this.element.children("ul").length;
      this.$_createTabbarFromOldMarkup$();
      this.$_processTabs$();
      this.$_menu$ = {};
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_refresh$();
      $options$$355_selectedIndex$$2$$ = this.$_getIndexByTabOrContentId$($options$$355_selectedIndex$$2$$.selected);
      void 0 === $options$$355_selectedIndex$$2$$ && ($options$$355_selectedIndex$$2$$ = 0);
      this.$_fireSelectEvents$($options$$355_selectedIndex$$2$$);
      this.$_initialRender$ = void 0;
    }, $_fireSelectEvents$:function($selectedIndex$$3$$, $flags$$43$$) {
      this.$_isTabDisabled$($selectedIndex$$3$$) && ($selectedIndex$$3$$ = this.$_getNextEnabledTab$($selectedIndex$$3$$));
      this.$_activate$(void 0 === $selectedIndex$$3$$ ? void 0 : $$$$50$$(this.$tabs$[$selectedIndex$$3$$]), $flags$$43$$);
    }, $_NotifyContextMenuGesture$:function($menu$$15_openOptions$$5$$, $event$$667$$, $eventType$$46$$) {
      if (this.$_isInATab$($event$$667$$.target) && (!this.$_touchProxy$ || !this.$_touchProxy$.$_touchMoved$)) {
        var $isDisabled$$2_keyboard$$ = "keyboard" === $eventType$$46$$;
        if ("contextmenu" == $event$$667$$.type || $isDisabled$$2_keyboard$$ || "touch" == $eventType$$46$$) {
          var $disabledState_tab$$ = $$$$50$$($event$$667$$.target).closest("li");
          $menu$$15_openOptions$$5$$ = {launcher:$disabledState_tab$$};
          this.$_menu$.tab = $isDisabled$$2_keyboard$$ ? this.$active$ : $menu$$15_openOptions$$5$$.launcher;
          if (this.$_menu$.tab) {
            if (this.$_menu$.$$elemRemove$) {
              if ((($isDisabled$$2_keyboard$$ = $disabledState_tab$$.hasClass("oj-disabled")) || 0 == this.$_getCloseIcons$($disabledState_tab$$).length) && 1 == this.$_menu$.$$container$.children().length) {
                $event$$667$$.preventDefault();
                return;
              }
              $isDisabled$$2_keyboard$$ || !this.$_isTabRemovable$($disabledState_tab$$) ? this.$_menu$.$$elemRemove$.addClass("oj-disabled") : this.$_menu$.$$elemRemove$.removeClass("oj-disabled");
            }
            if (this.$_menu$.$$elemPasteBefore$ || this.$_menu$.$$elemPasteAfter$) {
              $disabledState_tab$$ = !this.$_menu$.$cutTab$, this.$_menu$.$$elemPasteBefore$.hasClass("oj-disabled") != $disabledState_tab$$ && ($disabledState_tab$$ ? (this.$_menu$.$$elemPasteBefore$.addClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.addClass("oj-disabled")) : (this.$_menu$.$$elemPasteBefore$.removeClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.removeClass("oj-disabled")), this.$_menu$.$$container$.ojMenu("refresh"));
            }
            this.$_OpenContextMenu$($event$$667$$, $eventType$$46$$, $menu$$15_openOptions$$5$$);
          } else {
            $event$$667$$.preventDefault();
          }
        }
      }
    }, $_tabKeydown$:function($event$$668$$) {
      if (!this.$_handlePageNav$($event$$668$$)) {
        var $focusedTab_tab$$1$$ = $$$$50$$(this.document[0].activeElement).closest("li"), $enabledTabs$$ = this.$_getEnabledTabs$(), $selectedIndex$$4$$ = $enabledTabs$$.index($focusedTab_tab$$1$$), $length$$20$$ = $enabledTabs$$.length;
        switch($event$$668$$.keyCode) {
          case $$$$50$$.ui.keyCode.RIGHT:
          ;
          case $$$$50$$.ui.keyCode.DOWN:
            $selectedIndex$$4$$ = ($selectedIndex$$4$$ + 1) % $length$$20$$;
            break;
          case $$$$50$$.ui.keyCode.UP:
          ;
          case $$$$50$$.ui.keyCode.LEFT:
            $selectedIndex$$4$$ = ((0 == $selectedIndex$$4$$ ? $length$$20$$ : $selectedIndex$$4$$) - 1) % $length$$20$$;
            break;
          case $$$$50$$.ui.keyCode.END:
            $selectedIndex$$4$$ = $length$$20$$ - 1;
            break;
          case $$$$50$$.ui.keyCode.HOME:
            $selectedIndex$$4$$ = 0;
            break;
          case 46:
            ($focusedTab_tab$$1$$ = this.$active$) && 0 < this.$_getCloseIcons$($focusedTab_tab$$1$$).length && ($event$$668$$.preventDefault(), this.$_removeTab$($focusedTab_tab$$1$$, null, $event$$668$$));
            return;
          default:
            return;
        }
        $event$$668$$.preventDefault();
        clearTimeout(this.$activating$);
        var $selTab$$ = $$$$50$$($enabledTabs$$[$selectedIndex$$4$$]);
        $selTab$$.focus();
        if (!$event$$668$$.ctrlKey) {
          $focusedTab_tab$$1$$.attr("aria-selected", "false");
          $selTab$$.attr("aria-selected", "true");
          var $self$$191$$ = this;
          this.$activating$ = this._delay(function() {
            $self$$191$$ && $self$$191$$.$tabs$ && $self$$191$$.$_activate$($selTab$$, $event$$668$$);
          }, this.delay);
        }
      }
    }, $_panelKeydown$:function($event$$669$$) {
      $$$$50$$($event$$669$$.target).closest(".oj-tabs-selected").attr("id") === this.element.children(".oj-tabs-selected").attr("id") && !this.$_handlePageNav$($event$$669$$) && $event$$669$$.ctrlKey && $event$$669$$.keyCode === $$$$50$$.ui.keyCode.UP && ($event$$669$$.preventDefault(), this.$active$.focus());
    }, $_handlePageNav$:function($event$$670$$) {
      var $selectedIndex$$5$$ = this.$_getSelectedIndex$();
      if ($event$$670$$.ctrlKey && $event$$670$$.keyCode === $$$$50$$.ui.keyCode.PAGE_UP) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$5$$, !1)), !0;
      }
      if ($event$$670$$.ctrlKey && $event$$670$$.keyCode === $$$$50$$.ui.keyCode.PAGE_DOWN) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$5$$, !0)), !0;
      }
    }, $_isTabDisabled$:function($index$$272$$) {
      return 0 <= $index$$272$$ && $index$$272$$ < this.$tabs$.length ? $$$$50$$(this.$tabs$[$index$$272$$]).hasClass("oj-disabled") : !1;
    }, $_focusNextTab$:function($index$$273$$, $goingForward$$) {
      var $enabledTabs$$1_selTab$$1$$ = this.$_getEnabledTabs$(), $currentIndex$$3$$ = $enabledTabs$$1_selTab$$1$$.index(this.$tabs$[$index$$273$$]), $length$$21$$ = $enabledTabs$$1_selTab$$1$$.length, $enabledTabs$$1_selTab$$1$$ = $$$$50$$($enabledTabs$$1_selTab$$1$$[$goingForward$$ ? ($currentIndex$$3$$ + 1) % $length$$21$$ : ((0 == $currentIndex$$3$$ ? $length$$21$$ : $currentIndex$$3$$) - 1) % $length$$21$$]);
      $enabledTabs$$1_selTab$$1$$.focus();
      return $enabledTabs$$1_selTab$$1$$;
    }, $_getNextEnabledTab$:function($index$$274$$) {
      for (var $next$$8$$ = $index$$274$$ + 1, $lastTabIndex$$ = this.$tabs$.length - 1;$next$$8$$ <= $lastTabIndex$$;) {
        if (!this.$_isTabDisabled$($next$$8$$)) {
          return $next$$8$$;
        }
        $next$$8$$++;
      }
      for ($next$$8$$ = $index$$274$$ - 1;0 <= $next$$8$$;) {
        if (!this.$_isTabDisabled$($next$$8$$)) {
          return $next$$8$$;
        }
        $next$$8$$--;
      }
    }, $_isHorizontal$:function() {
      return "top" == this.options.edge || "bottom" == this.options.edge;
    }, _setOption:function($edge$$19_key$$173_selectedIndex$$6$$, $value$$305$$, $flags$$44$$) {
      "selected" === $edge$$19_key$$173_selectedIndex$$6$$ ? ($value$$305$$ = this.$_getTab$($value$$305$$), void 0 !== $value$$305$$ && this.$_activate$($value$$305$$)) : "disabledTabs" === $edge$$19_key$$173_selectedIndex$$6$$ ? (null === $value$$305$$ && ($value$$305$$ = []), Array.isArray($value$$305$$) && (this.$_setOjDisabledOnTab$($value$$305$$), $edge$$19_key$$173_selectedIndex$$6$$ = this.$_getSelectedIndex$(), this.$_isTabDisabled$($edge$$19_key$$173_selectedIndex$$6$$) && this.$_fireSelectEvents$($edge$$19_key$$173_selectedIndex$$6$$), 
      this.refresh())) : "removable" === $edge$$19_key$$173_selectedIndex$$6$$ || "truncation" === $edge$$19_key$$173_selectedIndex$$6$$ ? $value$$305$$ != this.options[$edge$$19_key$$173_selectedIndex$$6$$] && (this._super($edge$$19_key$$173_selectedIndex$$6$$, $value$$305$$, $flags$$44$$), this.refresh()) : "reorderable" === $edge$$19_key$$173_selectedIndex$$6$$ ? $value$$305$$ !== this.options.reorderable && (this._super($edge$$19_key$$173_selectedIndex$$6$$, $value$$305$$, $flags$$44$$), this.refresh()) : 
      "orientation" === $edge$$19_key$$173_selectedIndex$$6$$ ? this.$_edgeSpecified$ || ($edge$$19_key$$173_selectedIndex$$6$$ = this.$_orientationToEdge$($value$$305$$)) && this.$_setupEdge$($edge$$19_key$$173_selectedIndex$$6$$) && this.refresh() : "edge" === $edge$$19_key$$173_selectedIndex$$6$$ ? this.$_setupEdge$($value$$305$$) && (this.$_edgeSpecified$ = !0, this._super($edge$$19_key$$173_selectedIndex$$6$$, $value$$305$$, $flags$$44$$), this.refresh()) : "selectOn" === $edge$$19_key$$173_selectedIndex$$6$$ ? 
      (this.$_tearDownEvents$(!0), this._super($edge$$19_key$$173_selectedIndex$$6$$, $value$$305$$, $flags$$44$$), this.$_setupEvents$()) : ("contextMenu" === $edge$$19_key$$173_selectedIndex$$6$$ && (this.$_clearMenu$(), $value$$305$$ && this.$_initMenu$($value$$305$$)), this._super($edge$$19_key$$173_selectedIndex$$6$$, $value$$305$$, $flags$$44$$), "translations" === $edge$$19_key$$173_selectedIndex$$6$$ && $flags$$44$$ && "removeCueText" === $flags$$44$$.subkey && this.$tablist$ && this.$_getCloseIcons$(this.$tablist$).attr("aria-label", 
      $value$$305$$ ? $value$$305$$.removeCueText : ""));
    }, refresh:function() {
      this._super();
      this.$_processTabs$();
      this.$_refresh$();
    }, $_refresh$:function() {
      var $selectedPanel$$ = this.element.children(".oj-tabs-selected");
      this.$active$ = $selectedPanel$$.length ? this.$tablist$.children(".oj-selected") : $$$$50$$();
      this.$_createCloseIcons$();
      this.$_setupEvents$();
      this.$tabs$.not(this.$active$).attr({"aria-selected":"false", tabIndex:"-1"});
      this.$panels$.not(this.$_getPanelForTab$(this.$active$)).hide().attr({"aria-expanded":"false", "aria-hidden":"true"});
      this.$active$.length ? (this.$active$.addClass("oj-selected").attr({"aria-selected":"true", tabIndex:"0"}), $selectedPanel$$.show().attr("aria-expanded", "true").removeAttr("aria-hidden")) : $$$$50$$(this.$tabs$[0]).attr("tabIndex", "0");
      this.$_isHorizontal$() && (0 < this.$tabs$.length ? (this.$_truncateBeforeOverflow$(), this.$_addConveyor$()) : this.$_getTabbarWrapper$(), this.$_addFacets$());
      void 0 === this.options.selected || 0 == this.$_getSelectedIndex$() ? this.element.addClass("oj-first-child-selected") : this.element.removeClass("oj-first-child-selected");
      this.$_setupReorder$();
    }, $_addConveyor$:function() {
      var $cparent_tabsId$$ = this.$tablist$.uniqueId().attr("id");
      this.$conveyor$ = this.$_getTabbarWrapper$().parent().ojConveyorBelt({orientation:"horizontal", contentParent:"#" + $cparent_tabsId$$});
      $cparent_tabsId$$ = this.$conveyor$.parent();
      if ($cparent_tabsId$$.hasClass("oj-tabs-conveyorbelt-wrapper")) {
        var $flex$$ = "0 1 " + this.$_getConveyorWrapperMaxWidth$() + "px";
        $cparent_tabsId$$.css("flex", $flex$$);
        $cparent_tabsId$$.css("-webkit-flex", $flex$$);
        $cparent_tabsId$$.css("-ms-flex", $flex$$);
      }
    }, $_processTabs$:function() {
      var $self$$192$$ = this, $edge$$20$$ = this.options.edge;
      this.$_destroyTabBar$();
      this.$_createTabbar$();
      this.$tablist$ = this.element.children("ul").addClass("oj-tabs-nav oj-helper-clearfix").attr("role", "tablist");
      var $tabbarIndex$$ = this.$tablist$.index();
      this.element.children(".oj-tabs-facet").each(function() {
        var $facet$$ = $$$$50$$(this);
        $facet$$.index() < $tabbarIndex$$ ? $facet$$.addClass("oj-start") : $facet$$.removeClass("oj-start");
      });
      var $tabContents$$ = this.element.children(".oj-tabs-panel");
      "start" == $edge$$20$$ || "top" == $edge$$20$$ ? $$$$50$$($tabContents$$[0]).before(this.$tablist$) : $$$$50$$($tabContents$$[$tabContents$$.length - 1]).after(this.$tablist$);
      this.$tabs$ = $$$$50$$();
      this.$panels$ = $$$$50$$();
      this.$tablist$.children("li").each(function() {
        var $tab$$2$$ = $$$$50$$(this).addClass("oj-tabs-tab").attr({role:"tab", tabIndex:"-1"}).removeAttr("aria-hidden"), $anchor$$3_anchorId_div$$6$$ = $tab$$2$$.children();
        $anchor$$3_anchorId_div$$6$$.addClass("oj-tabs-tab-content");
        $anchor$$3_anchorId_div$$6$$ = $anchor$$3_anchorId_div$$6$$.children();
        $anchor$$3_anchorId_div$$6$$.addClass("oj-tabs-anchor").attr({role:"presentation", tabIndex:"-1"});
        $anchor$$3_anchorId_div$$6$$.children().addClass("oj-tabs-title").removeAttr("aria-hidden");
        $self$$192$$.$tabs$ = $self$$192$$.$tabs$.add($tab$$2$$);
        var $anchor$$3_anchorId_div$$6$$ = $anchor$$3_anchorId_div$$6$$.uniqueId().attr("id"), $panelId$$ = $tab$$2$$.attr("data-content"), $panel$$2$$ = $self$$192$$.element.find($self$$192$$.$_sanitizeSelector$("#" + $panelId$$));
        $tab$$2$$.attr({"aria-controls":$panelId$$, "aria-labelledby":$anchor$$3_anchorId_div$$6$$});
        $self$$192$$.$panels$ = $self$$192$$.$panels$.add($panel$$2$$);
        $panel$$2$$.attr("aria-labelledby", $anchor$$3_anchorId_div$$6$$).attr("role", "tabpanel");
      });
      "start" != $edge$$20$$ && "end" != $edge$$20$$ || $self$$192$$.$tablist$.addClass("oj-tabs-nav-root");
      this.$_initialRender$ && this.$_setOjDisabledOnTab$(this.options.disabledTabs);
    }, $_setupEvents$:function() {
      var $self$$193$$ = this, $events$$13$$ = {keydown:this.$_tabKeydown$}, $event$$671_revents$$ = this.options.selectOn, $selectOnClick$$ = !1;
      $event$$671_revents$$ && $$$$50$$.each($event$$671_revents$$.split(" "), function($index$$276$$, $eventName$$2$$) {
        "click" == $eventName$$2$$ && ($selectOnClick$$ = !0);
        $oj$$56$$.$DomUtils$.$isValidIdentifier$($eventName$$2$$) && ($events$$13$$[$eventName$$2$$] = $self$$193$$.$_eventHandler$);
      });
      var $enabledTabs$$2$$ = this.$_getEnabledTabs$();
      this._on($enabledTabs$$2$$, $events$$13$$);
      $selectOnClick$$ || this._on($enabledTabs$$2$$, {click:function($e$$102$$) {
        $e$$102$$.preventDefault();
      }});
      this.$panels$.on("keydown" + this.eventNamespace, this.$_panelKeydown$.bind(this));
      if (this.options.removable) {
        var $event$$671_revents$$ = {click:this.$_removeTabHandler$}, $closeIcons$$ = this.$_getCloseIcons$($enabledTabs$$2$$);
        this._on($closeIcons$$, $event$$671_revents$$);
        this.$_AddHoverAndActiveListeners$($closeIcons$$);
      }
      this._focusable({element:$enabledTabs$$2$$, applyHighlight:!0});
      this.$_AddHoverAndActiveListeners$({element:$enabledTabs$$2$$, afterToggle:function($eventtype$$) {
        "mousedown" === $eventtype$$ && $enabledTabs$$2$$.filter(".oj-focus-highlight").blur();
      }});
    }, $_tearDownEvents$:function($noCloseIcon$$) {
      var $enabledTabs$$3$$ = this.$_getEnabledTabs$();
      $noCloseIcon$$ || this.$_UnregisterChildNode$(this.$_getCloseIcons$($enabledTabs$$3$$));
      this.$_UnregisterChildNode$($enabledTabs$$3$$);
      this.$panels$ && this.$panels$.off("keydown" + this.eventNamespace);
    }, $_eventHandler$:function($event$$672$$, $flags$$45$$) {
      var $active$$6_eventData$$12$$ = this.$active$, $tab$$3$$ = $$$$50$$($event$$672$$.currentTarget).closest("li"), $clickedIsActive$$ = $active$$6_eventData$$12$$ && $tab$$3$$[0] === $active$$6_eventData$$12$$[0], $oToContent$$ = this.$_getPanelForTab$($tab$$3$$), $oFromContent$$ = $active$$6_eventData$$12$$ && $active$$6_eventData$$12$$.length ? this.$_getPanelForTab$($active$$6_eventData$$12$$) : $$$$50$$(), $active$$6_eventData$$12$$ = {fromTab:$active$$6_eventData$$12$$, fromContent:$oFromContent$$, 
      toTab:$tab$$3$$, toContent:$oToContent$$};
      $event$$672$$.preventDefault();
      var $oEvent$$ = $flags$$45$$ ? $flags$$45$$ : $event$$672$$;
      $tab$$3$$.hasClass("oj-disabled") || this.$running$ || $clickedIsActive$$ || $oFromContent$$ && $oFromContent$$.length && !1 === this._trigger("beforeDeselect", $oEvent$$, $active$$6_eventData$$12$$) || !this.$_initialRender$ && !1 === this._trigger("beforeSelect", $oEvent$$, $active$$6_eventData$$12$$) || (this.$_initialRender$ ? this.options.selected = this.$_getTabIdOrIndex$($tab$$3$$) : this.option("selected", this.$_getTabIdOrIndex$($tab$$3$$), {_context:{originalEvent:$oEvent$$, $internalSet$:!0}}), 
      this.$active$ = $tab$$3$$, $oToContent$$.addClass("oj-tabs-selected"), $oFromContent$$ && $oFromContent$$.length && $oFromContent$$.removeClass("oj-tabs-selected"), this.$_toggle$($oEvent$$, $active$$6_eventData$$12$$));
    }, $_toggle$:function($event$$673$$, $eventData$$13$$) {
      var $toTab$$ = $eventData$$13$$.toTab.closest("li"), $toShow$$ = $eventData$$13$$.toContent, $toHide$$ = $eventData$$13$$.fromContent;
      this.$running$ = !0;
      var $fromTab$$ = $eventData$$13$$.fromTab.closest("li").removeClass("oj-selected");
      $toHide$$.hide();
      0 < $toHide$$.length && $oj$$56$$.Components.$subtreeHidden$($toHide$$[0]);
      $toTab$$.addClass("oj-selected");
      this.$_isHorizontal$() && 0 < this.$tabs$.length && (0 == $toTab$$.index() ? this.element.addClass("oj-first-child-selected") : this.element.removeClass("oj-first-child-selected"));
      $toShow$$.show();
      0 < $toShow$$.length && $oj$$56$$.Components.$subtreeShown$($toShow$$[0]);
      this.$running$ = !1;
      this.$_initialRender$ || (this._trigger("deselect", $event$$673$$, $eventData$$13$$), this._trigger("select", $event$$673$$, $eventData$$13$$));
      $toHide$$.attr({"aria-expanded":"false", "aria-hidden":"true"});
      $fromTab$$.attr("aria-selected", "false");
      $toShow$$.length && $toHide$$.length ? $fromTab$$.attr("tabIndex", "-1") : $toShow$$.length && this.$tabs$.filter(function() {
        return "0" === $$$$50$$(this).attr("tabIndex");
      }).attr("tabIndex", "-1");
      $toShow$$.attr("aria-expanded", "true").removeAttr("aria-hidden");
      $toTab$$.attr({"aria-selected":"true", tabIndex:"0"});
    }, $_activate$:function($active$$7$$, $flags$$46$$) {
      if (void 0 !== $active$$7$$) {
        var $anchor$$4$$;
        this.$active$ && $active$$7$$[0] === this.$active$[0] || ($anchor$$4$$ = $active$$7$$.find(".oj-tabs-anchor")[0], this.$_eventHandler$({target:$anchor$$4$$, currentTarget:$anchor$$4$$, preventDefault:$$$$50$$.noop}, $flags$$46$$));
      }
    }, $_createCloseIcons$:function() {
      if (this.options.removable && this.$_isHorizontal$()) {
        var $removeCueText$$ = this.$getTranslatedString$("removeCueText"), $self$$195$$ = this;
        this.$_getEnabledTabs$().each(function($index$$277_rmId$$) {
          if ($self$$195$$.$_isTabRemovable$($$$$50$$(this))) {
            var $div$$7$$ = $$$$50$$(this).find("\x3e :first-child");
            $div$$7$$.addClass("oj-removable");
            $index$$277_rmId$$ = "ojtabs-id_rm_" + $index$$277_rmId$$;
            $$$$50$$(this).attr("aria-describedby", $index$$277_rmId$$);
            $$$$50$$("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon-nocontext oj-tabs-close-icon").attr({id:$index$$277_rmId$$, tabIndex:"-1", "aria-label":$removeCueText$$, role:"presentation"}).appendTo($div$$7$$);
          }
        });
      }
    }, $_getEnabledTabs$:function() {
      return $$$$50$$(this.$tabs$.not(".oj-disabled"));
    }, $_getCloseIcons$:function($elem$$113$$) {
      return $elem$$113$$.find(".oj-tabs-close-icon");
    }, $_destroyTabBar$:function() {
      this.$tabs$ && this.$_tearDownEvents$();
      this.$_hasResizeListener$ && ($oj$$56$$.$DomUtils$.$removeResizeListener$(this.element[0], this.$_resizeHandler$), this.$_hasResizeListener$ = !1, this.$_originalWidth$ = void 0);
      this.$_sortable$ && ($oj$$56$$.$DomUtils$.$isTouchSupported$() && this.$_tearDownTouchReorder$(), this.$tablist$.sortable("destroy"), this.$_sortable$ = void 0);
      var $navRoot$$ = this.element.children(".oj-tabs-nav-root"), $navRootNotUL$$ = !$navRoot$$.hasClass("oj-tabs-nav");
      if (this.$tabs$ && (this.$_getCloseIcons$(this.$tabs$).remove(), $navRoot$$.length)) {
        var $afterMe$$ = $navRoot$$, $noFacet$$ = !0, $tabbar$$ = this.$tablist$;
        $navRoot$$.children().each(function() {
          var $child$$12$$ = $$$$50$$(this);
          if ($child$$12$$.hasClass("oj-tabs-conveyorbelt-wrapper")) {
            $child$$12$$ = $tabbar$$;
          } else {
            if (!$child$$12$$.hasClass("oj-tabs-facet")) {
              return;
            }
          }
          $noFacet$$ = !1;
          $afterMe$$.after($child$$12$$);
          $afterMe$$ = $child$$12$$;
        });
        $noFacet$$ && $navRootNotUL$$ && $navRoot$$.after($tabbar$$);
      }
      this.$conveyor$ && (this.$conveyor$.ojConveyorBelt("destroy"), this.$conveyor$.remove(), this.$active$ = this.$conveyor$ = null);
      $navRootNotUL$$ && $navRoot$$.remove();
      this.$tablist$ = this.$tabs$ = null;
    }, _destroy:function() {
      this.$_clearMenu$();
      this.$_isHorizontal$() ? this.element.removeClass("oj-tabs oj-component oj-tabs-horizontal oj-tabs-top oj-tabs-bottom oj-first-child-selected") : this.element.removeClass("oj-tabs oj-component oj-tabs-vertical oj-tabs-start oj-tabs-end oj-helper-clearfix");
      var $self$$196$$ = this, $tab$$4$$, $div$$8$$, $anchor$$5$$, $header$$42$$;
      this.$tabs$.each(function($index$$278$$) {
        $tab$$4$$ = $$$$50$$(this);
        $tab$$4$$.removeAttr("tabIndex").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-controls").removeAttr("aria-disabled").removeAttr("aria-describedby").removeAttr("role").removeAttr("data-content").removeClass("oj-active oj-disabled oj-selected oj-tabs-gen-id oj-tabs-tab").removeUniqueId().css("display", "");
        $div$$8$$ = $tab$$4$$.children("div").removeClass("oj-tabs-tab-content");
        $anchor$$5$$ = $div$$8$$.children("a").removeClass("oj-tabs-anchor").removeAttr("tabIndex").removeAttr("role");
        $header$$42$$ = $anchor$$5$$.children();
        $header$$42$$.removeClass("oj-tabs-title").removeAttr("aria-hidden");
        $self$$196$$.$_isOldMarkup$ ? $header$$42$$.prependTo($self$$196$$.$panels$.get($index$$278$$)) : $div$$8$$.hasClass("oj-tabs-gen-div") && $anchor$$5$$.hasClass("oj-tabs-gen-a") ? ($header$$42$$.prependTo($tab$$4$$), $div$$8$$.remove()) : $anchor$$5$$.hasClass("oj-tabs-gen-a") ? ($header$$42$$.prependTo($div$$8$$), $anchor$$5$$.remove()) : $div$$8$$.hasClass("oj-tabs-gen-div") && ($anchor$$5$$.prependTo($tab$$4$$), $div$$8$$.remove());
      });
      var $tabbar$$1$$ = this.$tablist$;
      this.$_destroyTabBar$();
      $tabbar$$1$$.removeAttr("tabIndex").removeAttr("role").removeClass("oj-tabs-nav oj-tabs-nav-root oj-helper-clearfix").removeUniqueId();
      this.$_isOldMarkup$ && $tabbar$$1$$.remove();
      this.$panels$.each(function() {
        $$$$50$$(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-tabs-selected oj-tabs-gen-id oj-tabs-panel").removeUniqueId().css("display", "");
      });
      this.element.children(".oj-tabs-facet").removeClass("oj-start");
    }, $_isTabRemovable$:function($tab$$5$$) {
      var $removable$$1$$ = this.options.removable;
      return $removable$$1$$ && (!Array.isArray($removable$$1$$) || -1 < $removable$$1$$.indexOf($tab$$5$$.attr("id")));
    }, $_removeTab$:function($tab$$6$$, $event$$674_nextIndex$$1$$, $flags$$47_oEvent$$1$$) {
      if (this.$_isTabRemovable$($tab$$6$$)) {
        var $panel$$4$$ = this.$_getPanelForTab$($tab$$6$$), $eventData$$14$$ = {tab:$tab$$6$$, content:$panel$$4$$};
        $flags$$47_oEvent$$1$$ = $flags$$47_oEvent$$1$$ ? $flags$$47_oEvent$$1$$ : $event$$674_nextIndex$$1$$ ? $event$$674_nextIndex$$1$$ : {target:$tab$$6$$, currentTarget:$tab$$6$$, preventDefault:$$$$50$$.noop};
        $tab$$6$$ && !1 !== this._trigger("beforeRemove", $flags$$47_oEvent$$1$$, $eventData$$14$$) && ($event$$674_nextIndex$$1$$ && $event$$674_nextIndex$$1$$.preventDefault(), $tab$$6$$.hasClass("oj-selected") && ($event$$674_nextIndex$$1$$ = this.$_getNextEnabledTab$(this.$tabs$.index($tab$$6$$)), void 0 === $event$$674_nextIndex$$1$$ ? (this.$active$ = void 0, this.option("selected", void 0, {_context:{originalEvent:$flags$$47_oEvent$$1$$, $internalSet$:!0}})) : (this.$_fireSelectEvents$($event$$674_nextIndex$$1$$, 
        $flags$$47_oEvent$$1$$), this.option("selected", this.$_getTabIdOrIndex$($$$$50$$(this.$tabs$[$event$$674_nextIndex$$1$$])), {_context:{originalEvent:$flags$$47_oEvent$$1$$, $internalSet$:!0}}))), this.$_tearDownEvents$(), this.$tabs$ = this.$tabs$.not($tab$$6$$), $tab$$6$$.remove(), $panel$$4$$.remove(), this.$_updateDisabledTabs$(), this.refresh(), this._trigger("remove", $flags$$47_oEvent$$1$$, $eventData$$14$$));
      }
    }, $_removeTabHandler$:function($event$$675$$, $flags$$48$$) {
      this.$_removeTab$($$$$50$$($event$$675$$.currentTarget).closest("li"), $event$$675$$, $flags$$48$$);
    }, removeTab:function($tabId$$) {
      if ("string" !== typeof $tabId$$) {
        throw Error("'" + $tabId$$ + "' is not a tab id");
      }
      this.$_removeTab$(this.$_getTab$($tabId$$), null, null);
    }, $_wrapLi$:function($header$$43$$, $contentId$$1$$) {
      var $tab$$7$$;
      if ("li" == $header$$43$$.prop("tagName").toLowerCase()) {
        $tab$$7$$ = $header$$43$$;
        var $anchor$$6_div$$9$$ = $tab$$7$$.children("div");
        1 == $anchor$$6_div$$9$$.length && $anchor$$6_div$$9$$.hasClass("oj-tabs-tab-content") ? ($anchor$$6_div$$9$$ = $anchor$$6_div$$9$$.children("a"), 1 != $anchor$$6_div$$9$$.length && ($tab$$7$$.wrapInner("\x3ca href\x3d'#'\x3e\x3c/a\x3e"), $anchor$$6_div$$9$$.addClass("oj-tabs-gen-a"))) : ($anchor$$6_div$$9$$ = $tab$$7$$.wrapInner("\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e").children(), $anchor$$6_div$$9$$.addClass("oj-tabs-gen-div oj-tabs-tab-content"), $anchor$$6_div$$9$$.children().addClass("oj-tabs-gen-a"));
      } else {
        $tab$$7$$ = $header$$43$$.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent().parent().parent(), $tab$$7$$.addClass("oj-tabs-gen-li"), $tab$$7$$.children().addClass("oj-tabs-gen-div oj-tabs-tab-content");
      }
      $contentId$$1$$ && $tab$$7$$.attr("data-content", $contentId$$1$$);
      return $tab$$7$$;
    }, addTab:function($contentAfter_navRoot$$1_newTab_tabbar$$2$$) {
      var $tab$$8$$, $content$$39$$, $index$$280_tabAfter$$ = -1;
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$.tab && $contentAfter_navRoot$$1_newTab_tabbar$$2$$.content ? ($content$$39$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.content, $tab$$8$$ = this.$_wrapLi$($contentAfter_navRoot$$1_newTab_tabbar$$2$$.tab, this.$_getUniqueId$($content$$39$$)), void 0 !== $contentAfter_navRoot$$1_newTab_tabbar$$2$$.index && ($index$$280_tabAfter$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.index)) : ($content$$39$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$, 
      $tab$$8$$ = this.$_wrapLi$($$$$50$$($contentAfter_navRoot$$1_newTab_tabbar$$2$$).find("\x3e :first-child"), this.$_getUniqueId$($content$$39$$)));
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = this.element.children(".oj-tabs-nav-root");
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.hasClass("oj-tabs-nav") ? $contentAfter_navRoot$$1_newTab_tabbar$$2$$ : $contentAfter_navRoot$$1_newTab_tabbar$$2$$.length ? $contentAfter_navRoot$$1_newTab_tabbar$$2$$.find(".oj-tabs-nav") : this.element.children(".oj-tabs-nav");
      var $isNew$$6$$ = !1;
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$.length || ($contentAfter_navRoot$$1_newTab_tabbar$$2$$ = $$$$50$$("\x3cul\x3e"), $isNew$$6$$ = !0);
      $isNew$$6$$ && $contentAfter_navRoot$$1_newTab_tabbar$$2$$.prependTo(this.element);
      0 <= $index$$280_tabAfter$$ && $index$$280_tabAfter$$ < $contentAfter_navRoot$$1_newTab_tabbar$$2$$.children().length ? ($index$$280_tabAfter$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.children(":eq(" + $index$$280_tabAfter$$ + ")"), $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = this.element.children(this.$_sanitizeSelector$("#" + $index$$280_tabAfter$$.attr("aria-controls"))), $index$$280_tabAfter$$.before($tab$$8$$), $contentAfter_navRoot$$1_newTab_tabbar$$2$$.before($content$$39$$)) : 
      ($tab$$8$$.appendTo($contentAfter_navRoot$$1_newTab_tabbar$$2$$), $content$$39$$.appendTo(this.element));
      this.refresh();
      0 == this.$active$.length && this.$_fireSelectEvents$(0);
      var $self$$197$$ = this;
      window.setTimeout(function() {
        $self$$197$$.$tabs$ && $tab$$8$$[0].scrollIntoView(!1);
      }, 0);
    }, $_setupTouchReorder$:function() {
      this.$_touchProxy$ = $oj$$56$$.$_TouchProxy$.$addTouchListeners$(this.$tablist$);
    }, $_tearDownTouchReorder$:function() {
      $oj$$56$$.$_TouchProxy$.$removeTouchListeners$(this.$tablist$);
    }, $_setupReorder$:function() {
      if (this.options.reorderable) {
        var $self$$198$$ = this;
        $oj$$56$$.$DomUtils$.$isTouchSupported$() && this.$_setupTouchReorder$();
        this.$tablist$.sortable({axis:$self$$198$$.$_isHorizontal$() ? "x" : "y", stop:function($event$$676$$, $ui$$39$$) {
          var $mvTab$$ = $ui$$39$$.item;
          $self$$198$$.$_doReorder$($event$$676$$, $mvTab$$, $mvTab$$.prev()) || $self$$198$$.$tablist$.sortable("cancel");
        }});
        this.$_sortable$ = !0;
      } else {
        this.$_tearDownTouchReorder$(), this.$_sortable$ = !1;
      }
    }, $_InitOptions$:function($originalDefaults$$17$$, $constructorOptions$$19$$) {
      var $edge$$21$$ = $constructorOptions$$19$$.edge;
      this.$_edgeSpecified$ = "top" == $edge$$21$$ || "bottom" == $edge$$21$$ || "start" == $edge$$21$$ || "end" == $edge$$21$$;
      this._super($originalDefaults$$17$$, $constructorOptions$$19$$);
    }, $_orientationToEdge$:function($value$$306$$) {
      return "horizontal" == $value$$306$$ ? "top" : "vertical" == $value$$306$$ ? "start" : null;
    }, $_setupEdge$:function($edge$$22$$) {
      if (this.$_initialRender$ && !this.$_edgeSpecified$ || !$edge$$22$$) {
        $edge$$22$$ = this.$_orientationToEdge$(this.options.orientation);
      }
      var $oEdge$$ = this.options.edge;
      this.element.removeClass("oj-tabs-top oj-tabs-bottom oj-tabs-start oj-tabs-end");
      switch($edge$$22$$) {
        case "top":
        ;
        case "bottom":
          !this.$panels$ || "start" != $oEdge$$ && "end" != $oEdge$$ || this.element.removeClass("oj-tabs-vertical oj-helper-clearfix");
          this.element.addClass("oj-tabs oj-component oj-tabs-horizontal");
          "bottom" == $edge$$22$$ ? this.element.addClass("oj-tabs-bottom") : this.element.addClass("oj-tabs-top");
          this.$_initialRender$ ? this.options.orientation = "horizontal" : "horizontal" != this.options.orientation && this.option("orientation", "horizontal", {_context:{$internalSet$:!0}, changed:!0});
          break;
        case "start":
        ;
        case "end":
          !this.$panels$ || "top" != $oEdge$$ && "bottom" != $oEdge$$ || this.element.removeClass("oj-tabs-horizontal");
          this.element.addClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix");
          "end" == $edge$$22$$ ? this.element.addClass("oj-tabs-end") : this.element.addClass("oj-tabs-start");
          this.$_initialRender$ ? this.options.orientation = "vertical" : "vertical" != this.options.orientation && this.option("orientation", "vertical", {_context:{$internalSet$:!0}, changed:!0});
          break;
        default:
          return!1;
      }
      this.$_initialRender$ ? this.options.edge = $edge$$22$$ : this.options.edge != $edge$$22$$ && this.option("edge", $edge$$22$$, {_context:{$internalSet$:!0}, changed:!0});
      return!0;
    }, $_getTabbarWrapper$:function() {
      var $ulParent$$ = this.$tablist$.parent();
      $ulParent$$.hasClass("oj-tabs-conveyor") || ($ulParent$$ = this.$tablist$.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"), (0 < this.element.children(".oj-tabs-facet").length ? $ulParent$$.wrap("\x3cdiv\x3e").wrap("\x3cdiv\x3e").parent().parent().addClass("oj-tabs-conveyorbelt-wrapper") : $ulParent$$).wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-nav-root").uniqueId().attr("id"));
      return $ulParent$$;
    }, $_addPrefixId$:function($elem$$114$$) {
      0 > $elem$$114$$.id.indexOf("ojtabs-id_") && $$$$50$$($elem$$114$$).attr("id", "ojtabs-id_" + $elem$$114$$.id);
    }, getNodeBySubId:function($index$$281_locator$$55$$) {
      if (null == $index$$281_locator$$55$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$60$$ = $index$$281_locator$$55$$.subId;
      $index$$281_locator$$55$$ = $index$$281_locator$$55$$.index;
      if ("oj-conveyorbelt" != $subId$$60$$ && ("number" !== typeof $index$$281_locator$$55$$ || 0 > $index$$281_locator$$55$$ || $index$$281_locator$$55$$ >= this.$panels$.length)) {
        return null;
      }
      switch($subId$$60$$) {
        case "oj-conveyorbelt":
          return this.$conveyor$ ? this.$conveyor$[0] : null;
        case "oj-tabs-panel":
          return this.$_getPanelForTab$(this.$tabs$[$index$$281_locator$$55$$])[0];
        case "oj-tabs-tab":
          return this.$tabs$[$index$$281_locator$$55$$];
        case "oj-tabs-title":
          return $$$$50$$(this.$tabs$[$index$$281_locator$$55$$]).find(".oj-tabs-title")[0];
        case "oj-tabs-close-icon":
        ;
        case "oj-tabs-close":
          return $$$$50$$(this.$tabs$[$index$$281_locator$$55$$]).find(".oj-tabs-close-icon")[0];
      }
      return null;
    }, getSubIdByNode:function($node$$110$$) {
      for (var $panels_title$$11$$ = [], $i$$427_tabIndex$$8$$ = 0;$i$$427_tabIndex$$8$$ < this.$tabs$.length;$i$$427_tabIndex$$8$$++) {
        $panels_title$$11$$.push(this.$_getPanelForTab$(this.$tabs$[$i$$427_tabIndex$$8$$])[0]);
      }
      for (var $closeIcon_panelIndex$$ = $i$$427_tabIndex$$8$$ = -1, $currentNode$$2$$ = $node$$110$$;$currentNode$$2$$;) {
        if (this.$conveyor$ && $currentNode$$2$$ === this.$conveyor$[0]) {
          return{subId:"oj-conveyorbelt"};
        }
        $i$$427_tabIndex$$8$$ = Array.prototype.indexOf.call(this.$tabs$, $currentNode$$2$$);
        if (-1 != $i$$427_tabIndex$$8$$) {
          break;
        }
        $closeIcon_panelIndex$$ = $panels_title$$11$$.indexOf($currentNode$$2$$);
        if (-1 != $closeIcon_panelIndex$$) {
          return{subId:"oj-tabs-panel", index:$closeIcon_panelIndex$$};
        }
        $currentNode$$2$$ = $currentNode$$2$$.parentElement;
      }
      if (-1 != $i$$427_tabIndex$$8$$) {
        for ($panels_title$$11$$ = this.getNodeBySubId({subId:"oj-tabs-title", index:$i$$427_tabIndex$$8$$}), $closeIcon_panelIndex$$ = this.getNodeBySubId({subId:"oj-tabs-close", index:$i$$427_tabIndex$$8$$}), $currentNode$$2$$ = $node$$110$$;$currentNode$$2$$;) {
          if ($currentNode$$2$$ === $panels_title$$11$$) {
            return{subId:"oj-tabs-title", index:$i$$427_tabIndex$$8$$};
          }
          if ($currentNode$$2$$ === $closeIcon_panelIndex$$) {
            return{subId:"oj-tabs-close", index:$i$$427_tabIndex$$8$$};
          }
          if ($currentNode$$2$$ === this.$tabs$[$i$$427_tabIndex$$8$$]) {
            return{subId:"oj-tabs-tab", index:$i$$427_tabIndex$$8$$};
          }
          $currentNode$$2$$ = $currentNode$$2$$.parentElement;
        }
      }
      return null;
    }, $_getConveyorWrapperMaxWidth$:function() {
      return this.$_originalWidth$ + 10;
    }, $_getTabsWidth$:function() {
      var $tabbar$$3$$ = this.element.find(".oj-tabs-conveyorbelt-wrapper");
      return $tabbar$$3$$.length ? $tabbar$$3$$[0].clientWidth : this.element[0].clientWidth;
    }, $_isOverflow$:function() {
      return this.$_originalWidth$ > this.$_getTabsWidth$();
    }, $_getTabMaxWidth$:function() {
      var $max$$8$$ = Math.floor(this.$_getTabsWidth$() / this.$tabs$.length);
      this.options.removable && ($max$$8$$ -= 28);
      return $max$$8$$;
    }, $_applyTabMaxWidth$:function() {
      var $maxWidth$$3$$ = this.$_getTabMaxWidth$();
      this.$tablist$.find(".oj-tabs-title").each(function() {
        $$$$50$$(this).css("max-width", "" + $maxWidth$$3$$ + "px").addClass("oj-tabs-title-overflow");
      });
    }, $_removeTabMaxWidth$:function() {
      this.$tablist$.find(".oj-tabs-title").each(function() {
        $$$$50$$(this).css("max-width", "").removeClass("oj-tabs-title-overflow");
      });
    }, $_logMessage$:function() {
    }, $_handleResize$:function() {
      this.$_isProgressive$() && (this.$_isOverflow$() ? this.$_applyTabMaxWidth$() : this.$_removeTabMaxWidth$());
    }, $_isProgressive$:function() {
      return "auto" == this.options.truncation || "progressive" == this.options.truncation;
    }, $_truncateBeforeOverflow$:function() {
      this.$_isHorizontal$() && 0 < this.$tabs$.length && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$56$$.$DomUtils$.$addResizeListener$(this.element[0], this.$_resizeHandler$), this.$_hasResizeListener$ = !0, this.$_originalWidth$ = this.$_getTabbarWrapper$()[0].scrollWidth, this.$_isProgressive$() && this.$_isOverflow$() && this.$_applyTabMaxWidth$());
    }, $_NotifyShown$:function() {
      this._super();
      this.refresh();
    }, $_NotifyAttached$:function() {
      this._super();
      this.refresh();
    }, $_buildContextMenuItem$:function($cmd$$) {
      return $$$$50$$("\x3ca\x3e").text(this.$getTranslatedString$($_arMenuKeyMap$$[$cmd$$])).attr("href", "#").wrap("\x3cli\x3e").parent().attr("id", $_arMenuCmdMap$$[$cmd$$]).addClass("oj-menu-item");
    }, $_menu_cut$:function($obj$$65$$) {
      if (!$obj$$65$$ || !$obj$$65$$.length) {
        return!1;
      }
      this.$_menu$.$cutTab$ = $obj$$65$$;
    }, $_menu_paste$:function($event$$677$$, $obj$$66$$, $pasteBefore$$) {
      if (!$obj$$66$$ || !$obj$$66$$.length || !this.$_menu$.$cutTab$) {
        return!1;
      }
      var $mvTab$$1$$ = this.$_menu$.$cutTab$;
      this.$_menu$.$cutTab$ = !1;
      this.$_doReorder$($event$$677$$, $mvTab$$1$$, $obj$$66$$, $pasteBefore$$);
    }, $_menu_remove$:function($event$$678$$, $obj$$67$$) {
      if (!$obj$$67$$ || !$obj$$67$$.length) {
        return!1;
      }
      this.$_removeTab$($obj$$67$$, null, $event$$678$$);
    }, $_handleContextMenuSelect$:function($ev$$3$$, $ui$$40$$) {
      var $id$$56$$ = $ui$$40$$ ? $ui$$40$$.item.attr("id") : void 0;
      "ojtabscut" === $id$$56$$ ? this.$_menu_cut$(this.$_menu$.tab) : "ojtabspastebefore" === $id$$56$$ ? this.$_menu_paste$($ev$$3$$, this.$_menu$.tab, !0) : "ojtabspasteafter" === $id$$56$$ ? this.$_menu_paste$($ev$$3$$, this.$_menu$.tab, !1) : "ojtabsremove" === $id$$56$$ && this.$_menu_remove$($ev$$3$$, this.$_menu$.tab);
    }, $_initMenu$:function($menu$$16_newVal$$4$$) {
      if ($menu$$16_newVal$$4$$ = $menu$$16_newVal$$4$$ || this.options.contextMenu) {
        if ("function" == $$$$50$$.type($menu$$16_newVal$$4$$)) {
          try {
            $menu$$16_newVal$$4$$ = $menu$$16_newVal$$4$$();
          } catch ($e$$103$$) {
            $menu$$16_newVal$$4$$ = null;
          }
          $$$$50$$.type($menu$$16_newVal$$4$$);
        }
        $menu$$16_newVal$$4$$ && $$$$50$$($menu$$16_newVal$$4$$).length && (this.options.contextMenu = $menu$$16_newVal$$4$$);
      }
      this.$_addContextMenu$();
    }, $_addIfNotExist$:function($$ul$$, $itemList_menuItem$$1$$, $command$$12$$) {
      -1 == $itemList_menuItem$$1$$.indexOf($command$$12$$) && ($itemList_menuItem$$1$$ = this.$_buildContextMenuItem$($command$$12$$), $$ul$$.append($itemList_menuItem$$1$$));
    }, $_addContextMenu$:function() {
      var $$menuContainer$$ = $$$$50$$(this.options.contextMenu);
      if ($$menuContainer$$ || this.options.reorderable || this.options.removable) {
        var $self$$199$$ = this;
        if (0 == $$menuContainer$$.length) {
          var $key$$174$$ = this.options.reorderable ? "labelReorder" : $_arMenuKeyMap$$.remove, $menuId$$ = this.element.uniqueId().attr("id") + "contextmenu", $$menuContainer$$ = $$$$50$$("\x3cul\x3e");
          $$menuContainer$$.css("display", "none").attr("id", $menuId$$).attr("aria-label", this.$getTranslatedString$($key$$174$$));
          $$$$50$$(document.body).append($$menuContainer$$);
          $$menuContainer$$.ojMenu();
          this.options.contextMenu = this.$_sanitizeSelector$("#" + $menuId$$);
        }
        var $itemList$$1$$ = [];
        $$menuContainer$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$50$$(this).children("a").length) {
            var $command$$13$$ = $$$$50$$(this).attr("data-oj-command").slice(8);
            $$$$50$$(this).replaceWith($self$$199$$.$_buildContextMenuItem$($command$$13$$));
            $$$$50$$(this).addClass("oj-menu-item");
            $itemList$$1$$.push($command$$13$$);
          }
        });
        this.options.reorderable && (this.$_addIfNotExist$($$menuContainer$$, $itemList$$1$$, "cut"), this.$_addIfNotExist$($$menuContainer$$, $itemList$$1$$, "paste-before"), this.$_addIfNotExist$($$menuContainer$$, $itemList$$1$$, "paste-after"), this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$.find("#ojtabspastebefore"), this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$.find("#ojtabspasteafter"));
        this.options.removable && (this.$_addIfNotExist$($$menuContainer$$, $itemList$$1$$, "remove"), this.$_menu$.$$elemRemove$ = $$menuContainer$$.find("#ojtabsremove"));
        this.$_menu$.$$container$ = $$menuContainer$$;
        $$menuContainer$$.ojMenu("refresh");
        $$menuContainer$$.on("ojselect", $$$$50$$.proxy(this.$_handleContextMenuSelect$, this));
      }
    }, $_clearMenu$:function() {
      var $menu$$17$$ = this.$_menu$;
      $menu$$17$$ && ($menu$$17$$.$$container$.off("ojselect"), $menu$$17$$.$$container$ = null);
    }, $_doReorder$:function($event$$679$$, $mvTab$$2$$, $prevTab$$, $pasteBefore$$1$$) {
      var $mvContent$$ = this.$_getPanelForTab$($mvTab$$2$$), $eventData$$15$$ = {tab:$mvTab$$2$$, content:$mvContent$$};
      if (!1 === this._trigger("beforeReorder", $event$$679$$, $eventData$$15$$)) {
        return!1;
      }
      var $mvInd_prevContent$$ = this.$tabs$.index($mvTab$$2$$);
      if ($prevTab$$.length) {
        if (this.$tabs$.index($prevTab$$) == $mvInd_prevContent$$) {
          return!0;
        }
        $mvInd_prevContent$$ = this.$_getPanelForTab$($prevTab$$);
        $pasteBefore$$1$$ ? ($prevTab$$.before($mvTab$$2$$), $mvInd_prevContent$$.before($mvContent$$)) : ($prevTab$$.after($mvTab$$2$$), $mvInd_prevContent$$.after($mvContent$$));
      } else {
        if (0 < this.$tabs$.length) {
          if (0 == $mvInd_prevContent$$) {
            return!0;
          }
          this.$tabs$.first().before($mvTab$$2$$);
          this.$panels$.first().before($mvContent$$);
        }
      }
      this.$_updateDisabledTabs$();
      this.refresh();
      $prevTab$$.blur();
      $mvTab$$2$$.focus();
      this._trigger("reorder", $event$$679$$, $eventData$$15$$);
      return!0;
    }, $_sanitizeSelector$:function($hash$$7$$) {
      return $hash$$7$$ ? $hash$$7$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : "";
    }, $_getPanelForTab$:function($tab$$9$$) {
      return this.element.find(this.$_sanitizeSelector$("#" + $$$$50$$($tab$$9$$).attr("aria-controls")));
    }, $_getUniqueId$:function($panel$$5$$) {
      var $id$$57$$ = $panel$$5$$.attr("id");
      $id$$57$$ || ($id$$57$$ = $panel$$5$$.uniqueId().attr("id"), $panel$$5$$.addClass("oj-tabs-gen-id"));
      return $id$$57$$;
    }, $_getTab$:function($idOrIndex_index$$284$$) {
      $idOrIndex_index$$284$$ = this.$_getIndexByTabOrContentId$($idOrIndex_index$$284$$);
      if (-1 !== $idOrIndex_index$$284$$) {
        return $$$$50$$(this.$tabs$[$idOrIndex_index$$284$$]);
      }
    }, $_getIndexByTabOrContentId$:function($idOrIndex$$1_selector$$36_tabOrContent$$) {
      var $index$$285$$ = -1;
      "number" === typeof $idOrIndex$$1_selector$$36_tabOrContent$$ ? 0 <= $idOrIndex$$1_selector$$36_tabOrContent$$ && $idOrIndex$$1_selector$$36_tabOrContent$$ < this.$tabs$.length && ($index$$285$$ = $idOrIndex$$1_selector$$36_tabOrContent$$) : "string" === typeof $idOrIndex$$1_selector$$36_tabOrContent$$ && ($idOrIndex$$1_selector$$36_tabOrContent$$ = this.$_sanitizeSelector$($idOrIndex$$1_selector$$36_tabOrContent$$), $oj$$56$$.$DomUtils$.$isValidIdentifier$($idOrIndex$$1_selector$$36_tabOrContent$$) && 
      ($idOrIndex$$1_selector$$36_tabOrContent$$ = this.element.find(this.$_sanitizeSelector$("#" + $idOrIndex$$1_selector$$36_tabOrContent$$)), $idOrIndex$$1_selector$$36_tabOrContent$$.length && ($index$$285$$ = this.$tabs$.index($idOrIndex$$1_selector$$36_tabOrContent$$), -1 == $index$$285$$ && ($index$$285$$ = this.$panels$.index($idOrIndex$$1_selector$$36_tabOrContent$$)))));
      return $index$$285$$;
    }, $_getSelectedIndex$:function() {
      var $selected$$24$$ = this.options.selected;
      return "number" === typeof $selected$$24$$ ? $selected$$24$$ : this.$tabs$.index($$$$50$$(this.$_sanitizeSelector$("#" + $selected$$24$$)));
    }, $_getTabIdOrIndex$:function($tab$$10$$) {
      if ($tab$$10$$) {
        var $id$$58$$ = $tab$$10$$.attr("id");
        return $id$$58$$ ? $id$$58$$ : this.$tabs$.index($tab$$10$$);
      }
    }, $_setOjDisabledOnTab$:function($disTabs$$) {
      var $children$$13$$ = (this.$tablist$ ? this.$tablist$ : this.element.children("ul")).children("li");
      $children$$13$$.removeClass("oj-disabled").removeAttr("aria-disabled");
      var $arr$$24$$ = [];
      if ($disTabs$$ && 0 < $disTabs$$.length) {
        for (var $id$$59$$, $tab$$11$$, $i$$428$$ = 0;$i$$428$$ < $disTabs$$.length;$i$$428$$++) {
          if ($tab$$11$$ = this.$_getTab$($disTabs$$[$i$$428$$])) {
            $tab$$11$$.addClass("oj-disabled"), $tab$$11$$.attr("aria-disabled", "true"), $tab$$11$$.find(".oj-tabs-anchor").removeAttr("href"), $id$$59$$ = $tab$$11$$.attr("id"), $arr$$24$$.push($id$$59$$ ? $id$$59$$ : $children$$13$$.index($tab$$11$$));
          }
        }
      }
      this.$_updateDisabledTabs$($arr$$24$$);
    }, $_updateDisabledTabs$:function($arr$$25$$) {
      if (!$arr$$25$$) {
        $arr$$25$$ = [];
        var $self$$200$$ = this;
        this.$tablist$.children().each(function() {
          var $tab$$12$$ = $$$$50$$(this);
          $tab$$12$$.hasClass("oj-disabled") && $arr$$25$$.push($self$$200$$.$_getTabIdOrIndex$($tab$$12$$));
        });
      }
      $oj$$56$$.$Object$.$_compareSet$(this.options.disabledTabs, $arr$$25$$) || (this.$_initialRender$ ? this.options.disabledTabs = $arr$$25$$ : this.option({disabledTabs:$arr$$25$$}, {_context:{$internalSet$:!0, $writeback$:!0}, changed:!0}));
    }, $_isInATab$:function($element$$234$$) {
      var $found$$8$$ = !1;
      this.$tabs$.each(function() {
        if (this === $element$$234$$ || $$$$50$$.contains(this, $element$$234$$)) {
          return $found$$8$$ = !0, !1;
        }
      });
      return $found$$8$$;
    }, $_createTabbar$:function() {
      var $contentIds$$ = this.$_getContentIds$(), $self$$201$$ = this, $tabbar$$5$$ = this.element.children("ul");
      0 < $tabbar$$5$$.length && $tabbar$$5$$.children("li").each(function($index$$287$$) {
        $self$$201$$.$_wrapLi$($$$$50$$(this), $contentIds$$[$index$$287$$]);
      });
    }, $_createTabbarFromOldMarkup$:function() {
      var $tabbar$$6$$ = this.element.children("ul");
      if (0 == $tabbar$$6$$.length) {
        var $self$$202$$ = this, $contentIds$$1$$ = this.$_getContentIds$(), $tabbar$$6$$ = $$$$50$$("\x3cul\x3e");
        this.element.children().each(function($index$$288$$) {
          $self$$202$$.$_wrapLi$($$$$50$$(this).find("\x3e :first-child"), $contentIds$$1$$[$index$$288$$]).appendTo($tabbar$$6$$);
        });
        $tabbar$$6$$.prependTo(this.element);
      }
    }, $_addFacets$:function() {
      var $navRoot$$3$$ = this.element.children(".oj-tabs-nav-root"), $self$$203$$ = this, $tabbarWrapper$$ = $navRoot$$3$$.children(".oj-tabs-conveyorbelt-wrapper");
      $navRoot$$3$$.index();
      this.element.children(".oj-tabs-facet").each(function() {
        var $facet$$1$$ = $$$$50$$(this), $facetId$$ = $self$$203$$.$_getUniqueId$($facet$$1$$);
        0 == $navRoot$$3$$.find($self$$203$$.$_sanitizeSelector$("#" + $facetId$$)).length && ($facet$$1$$.hasClass("oj-start") ? $tabbarWrapper$$.before($facet$$1$$) : $facet$$1$$.appendTo($navRoot$$3$$));
      });
    }, $_getContentIds$:function() {
      var $contentIds$$2$$ = [], $self$$204$$ = this;
      this.element.children(":not(ul):not(.oj-tabs-facet)").each(function() {
        var $panel$$6$$ = $$$$50$$(this);
        $panel$$6$$.addClass("oj-tabs-panel");
        $contentIds$$2$$.push($self$$204$$.$_getUniqueId$($panel$$6$$));
      });
      return $contentIds$$2$$;
    }});
  })();
});
