/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojbutton", "ojs/ojmenu", "ojs/ojlistview"], function($oj$$20$$, $$$$19$$) {
  $oj$$20$$.$DefaultNavListHandler$ = function $$oj$$20$$$$DefaultNavListHandler$$($widget$$9$$, $root$$25$$, $component$$22$$) {
    this.$m_widget$ = $widget$$9$$;
    this.$m_root$ = $root$$25$$;
    this.$m_component$ = $component$$22$$;
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$DefaultNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-expanded oj-navigationlist-vertical");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$Expand$ = function $$oj$$20$$$$DefaultNavListHandler$$$$Expand$$() {
    return Promise.resolve(null);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$Collapse$ = function $$oj$$20$$$$DefaultNavListHandler$$$$Collapse$$() {
    return Promise.resolve(null);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$HandleExpandAndCollapseKeys$ = function $$oj$$20$$$$DefaultNavListHandler$$$$HandleExpandAndCollapseKeys$$() {
    return!1;
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$ModifyListItem$ = function $$oj$$20$$$$DefaultNavListHandler$$$$ModifyListItem$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$UpdateAriaPropertiesOnSelectedItem$ = function $$oj$$20$$$$DefaultNavListHandler$$$$UpdateAriaPropertiesOnSelectedItem$$($elem$$91$$, $highlight$$1$$) {
    $elem$$91$$.attr("aria-selected", $highlight$$1$$ ? "true" : "false");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$BeforeRenderComplete$ = function $$oj$$20$$$$DefaultNavListHandler$$$$BeforeRenderComplete$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$ItemInsertComplete$ = function $$oj$$20$$$$DefaultNavListHandler$$$$ItemInsertComplete$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$ItemRemoveComplete$ = function $$oj$$20$$$$DefaultNavListHandler$$$$ItemRemoveComplete$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$HandleArrowKeys$ = function $$oj$$20$$$$DefaultNavListHandler$$$$HandleArrowKeys$$($keyCode$$15$$, $isExtend$$4$$, $event$$447$$) {
    return $_ojNavigationListView$$.$superclass$.$HandleArrowKeys$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$IsArrowKey$ = function $$oj$$20$$$$DefaultNavListHandler$$$$IsArrowKey$$($keyCode$$16$$) {
    return $_ojNavigationListView$$.$superclass$.$IsArrowKey$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$GetState$ = function $$oj$$20$$$$DefaultNavListHandler$$$$GetState$$($item$$81$$) {
    return $_ojNavigationListView$$.$superclass$.$GetState$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$SetState$ = function $$oj$$20$$$$DefaultNavListHandler$$$$SetState$$($item$$82$$, $state$$7$$) {
    $_ojNavigationListView$$.$superclass$.$SetState$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.Init = function $$oj$$20$$$$DefaultNavListHandler$$$Init$() {
    this.$m_root$.addClass("oj-navigationlist-expanded oj-navigationlist-vertical");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$IsSelectable$ = function $$oj$$20$$$$DefaultNavListHandler$$$$IsSelectable$$($item$$83$$) {
    return $_ojNavigationListView$$.$superclass$.$IsSelectable$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$DefaultNavListHandler$$$$RestoreItem$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$CollapseCurrentList$ = function $$oj$$20$$$$DefaultNavListHandler$$$$CollapseCurrentList$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$setOptions$ = function $$oj$$20$$$$DefaultNavListHandler$$$$setOptions$$() {
  };
  $oj$$20$$.$HorizontalNavListHandler$ = function $$oj$$20$$$$HorizontalNavListHandler$$($widget$$10$$, $root$$26$$, $component$$23$$) {
    $oj$$20$$.$HorizontalNavListHandler$.$superclass$.constructor.call(this, $widget$$10$$, $root$$26$$, $component$$23$$);
  };
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$HorizontalNavListHandler$, $oj$$20$$.$DefaultNavListHandler$, "oj.HorizontalNavListHandler");
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-expanded oj-navigationlist-horizontal");
    this.$m_root$.find("." + this.$m_widget$.$DIVIDER_STYLE_CLASS$).remove();
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$UpdateAriaPropertiesOnSelectedItem$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$UpdateAriaPropertiesOnSelectedItem$$($elem$$94$$, $highlight$$2$$) {
    $elem$$94$$.attr("aria-pressed", $highlight$$2$$ ? "true" : "false");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$HandleArrowKeys$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$HandleArrowKeys$$($keyCode$$17_processed$$4$$, $isExtend$$5$$, $event$$449$$) {
    $keyCode$$17_processed$$4$$ === $$$$19$$.ui.keyCode.LEFT ? $keyCode$$17_processed$$4$$ = this.$m_widget$.$isRtl$() ? $$$$19$$.ui.keyCode.DOWN : $$$$19$$.ui.keyCode.UP : $keyCode$$17_processed$$4$$ === $$$$19$$.ui.keyCode.RIGHT && ($keyCode$$17_processed$$4$$ = this.$m_widget$.$isRtl$() ? $$$$19$$.ui.keyCode.UP : $$$$19$$.ui.keyCode.DOWN);
    $keyCode$$17_processed$$4$$ = $_ojNavigationListView$$.$superclass$.$HandleArrowKeys$.call(this.$m_widget$, $keyCode$$17_processed$$4$$, $isExtend$$5$$, $event$$449$$);
    "top" === this.$m_widget$.$ojContext$.options.edge && this.$m_widget$.$m_active$.elem[0].scrollIntoView(!1);
    return $keyCode$$17_processed$$4$$;
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$IsArrowKey$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$IsArrowKey$$($keyCode$$18$$) {
    return $keyCode$$18$$ === this.$m_widget$.$UP_KEY$ || $keyCode$$18$$ === this.$m_widget$.$DOWN_KEY$ || $keyCode$$18$$ === this.$m_widget$.$LEFT_KEY$ || $keyCode$$18$$ === this.$m_widget$.$RIGHT_KEY$;
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$ModifyListItem$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$ModifyListItem$$($$item$$1_focusableElement$$) {
    $$item$$1_focusableElement$$ = this.$m_widget$.$getSingleFocusableElement$($$item$$1_focusableElement$$);
    $$item$$1_focusableElement$$.attr("role", "button");
    $$item$$1_focusableElement$$[0].hasAttribute("aria-selected") && ($$item$$1_focusableElement$$.attr("aria-pressed", "false"), $$item$$1_focusableElement$$.removeAttr("aria-selected"));
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$BeforeRenderComplete$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$BeforeRenderComplete$$() {
    var $self$$154$$ = this;
    this.$m_widget$.element.attr("role", "toolbar");
    this.$m_widget$.element.find("." + this.$m_widget$.$getItemElementStyleClass$() + ":visible").each(function($index$$188$$) {
      0 < $index$$188$$ && $self$$154$$.$_addSeparator$(this, $index$$188$$);
    });
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$_addSeparator$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$_addSeparator$$($elem$$95$$, $index$$189$$) {
    var $$elem$$ = $$$$19$$($elem$$95$$), $previousElement$$1$$ = $$elem$$.prev();
    0 < $index$$189$$ && $$elem$$.is(":visible") && $previousElement$$1$$.length && !$previousElement$$1$$.is("li." + this.$m_widget$.$DIVIDER_STYLE_CLASS$) && $$elem$$.before('\x3cli role\x3d"separator" class\x3d"' + this.$m_widget$.$DIVIDER_STYLE_CLASS$ + '"\x3e\x3c/li\x3e');
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$ItemInsertComplete$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$ItemInsertComplete$$($elem$$96$$, $context$$111$$) {
    this.$_addSeparator$($elem$$96$$, $context$$111$$.index);
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$ItemRemoveComplete$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$ItemRemoveComplete$$($$elem$$1_elem$$97_nextElement$$) {
    $$elem$$1_elem$$97_nextElement$$ = $$$$19$$($$elem$$1_elem$$97_nextElement$$);
    var $previousElement$$2$$ = $$elem$$1_elem$$97_nextElement$$.prev();
    $previousElement$$2$$.length && $previousElement$$2$$.is("li." + this.$m_widget$.$DIVIDER_STYLE_CLASS$) ? $previousElement$$2$$.remove() : ($$elem$$1_elem$$97_nextElement$$ = $$elem$$1_elem$$97_nextElement$$.next(), $$elem$$1_elem$$97_nextElement$$.is("li." + this.$m_widget$.$DIVIDER_STYLE_CLASS$) && $$elem$$1_elem$$97_nextElement$$.remove());
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$IsSelectable$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$IsSelectable$$($item$$85$$) {
    return this.$m_widget$.$getFocusItem$($$$$19$$($item$$85$$))[0].hasAttribute("aria-pressed");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.Init = function $$oj$$20$$$$HorizontalNavListHandler$$$Init$() {
    this.$m_root$.addClass("oj-navigationlist-expanded oj-navigationlist-horizontal");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$RestoreItem$$() {
  };
  $oj$$20$$.$CollapsibleNavListHandler$ = function $$oj$$20$$$$CollapsibleNavListHandler$$($widget$$11$$, $root$$27$$, $component$$24$$) {
    $oj$$20$$.$CollapsibleNavListHandler$.$superclass$.constructor.call(this, $widget$$11$$, $root$$27$$, $component$$24$$);
  };
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$CollapsibleNavListHandler$, $oj$$20$$.$DefaultNavListHandler$, "oj.CollapsibleNavListHandler");
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-collapsible oj-navigationlist-vertical");
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.Init = function $$oj$$20$$$$CollapsibleNavListHandler$$$Init$() {
    this.$m_root$.addClass("oj-navigationlist-collapsible oj-navigationlist-vertical");
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$Expand$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$Expand$$($groupItem$$18$$, $animate$$8$$, $event$$450$$) {
    return $_ojNavigationListView$$.$superclass$.$AnimateExpand$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$Collapse$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$Collapse$$($item$$87$$, $animate$$9$$, $event$$451$$) {
    return $_ojNavigationListView$$.$superclass$.$AnimateCollapse$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$HandleExpandAndCollapseKeys$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$HandleExpandAndCollapseKeys$$($event$$452$$, $keyCode$$19$$, $current$$16$$, $currentItemKey$$1$$) {
    var $isGroupItem$$1$$ = 0 < $current$$16$$.children("." + this.$m_widget$.$getGroupStyleClass$()).length;
    if ($keyCode$$19$$ === this.$m_widget$.$LEFT_KEY$ || $keyCode$$19$$ === this.$m_widget$.$RIGHT_KEY$) {
      return $keyCode$$19$$ === this.$m_widget$.$LEFT_KEY$ && !this.$m_widget$.$isRtl$() || $keyCode$$19$$ === this.$m_widget$.$RIGHT_KEY$ && this.$m_widget$.$isRtl$() ? this.$m_widget$.$GetState$($current$$16$$) === this.$m_widget$.$STATE_EXPANDED$ && this.$m_widget$.$CollapseItem$($current$$16$$, $event$$452$$, !0, $currentItemKey$$1$$, !0, !0) : this.$m_widget$.$GetState$($current$$16$$) === this.$m_widget$.$STATE_COLLAPSED$ && this.$m_widget$.$ExpandItem$($current$$16$$, $event$$452$$, !0, $currentItemKey$$1$$, 
      !0, !0, !0), !0;
    }
    if ($isGroupItem$$1$$ && ($keyCode$$19$$ === $$$$19$$.ui.keyCode.ENTER || $keyCode$$19$$ === $$$$19$$.ui.keyCode.SPACE)) {
      if (0 >= $current$$16$$.length) {
        return;
      }
      this.$m_widget$.$GetState$($current$$16$$) === this.$m_widget$.$STATE_COLLAPSED$ ? this.$m_widget$.$ExpandItem$($current$$16$$, null, !0, $currentItemKey$$1$$, !0, !0, !0) : this.$m_widget$.$GetState$($current$$16$$) === this.$m_widget$.$STATE_EXPANDED$ && this.$m_widget$.$CollapseItem$($current$$16$$, null, !0, $currentItemKey$$1$$, !0, !0);
      return!0;
    }
    return!1;
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$RestoreItem$$() {
  };
  $oj$$20$$.$SlidingNavListHandler$ = function $$oj$$20$$$$SlidingNavListHandler$$($widget$$12$$, $root$$28$$, $component$$25$$) {
    $oj$$20$$.$SlidingNavListHandler$.$superclass$.constructor.call(this, $widget$$12$$, $root$$28$$, $component$$25$$);
    this.$m_expanded$ = [];
  };
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$SlidingNavListHandler$, $oj$$20$$.$CollapsibleNavListHandler$, "oj.SlidingNavListHandler");
  $oj$$20$$.$SlidingNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$SlidingNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-slider oj-navigationlist-vertical");
    this.$_toolbar$.remove();
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_slideAnimation$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_slideAnimation$$($item$$89$$, $isMovingNext$$, $focusableElement$$1$$, $event$$453$$, $animationResolve$$4$$) {
    var $self$$155$$ = this, $list_root$$ = this.$m_widget$.$getRootElement$(), $contentWidth$$ = $list_root$$.outerWidth() / 2, $isRtl$$1$$ = this.$m_widget$.$isRtl$();
    $isMovingNext$$ || ($contentWidth$$ *= -1);
    var $hasFocusAncestor$$ = this.$m_widget$.$getRootElement$().hasClass("oj-focus-ancestor");
    $isRtl$$1$$ ? ($list_root$$.css({"margin-right":$contentWidth$$}), $list_root$$.animate({"margin-right":"0px"}, 400, "swing", function() {
      $self$$155$$.$_slideAnimationComplete$($item$$89$$, $isMovingNext$$, $focusableElement$$1$$, $event$$453$$, $hasFocusAncestor$$);
      $animationResolve$$4$$(null);
    })) : ($list_root$$.css({"margin-left":$contentWidth$$}), $list_root$$.animate({"margin-left":"0px"}, 400, "swing", function() {
      $self$$155$$.$_slideAnimationComplete$($item$$89$$, $isMovingNext$$, $focusableElement$$1$$, $event$$453$$, $hasFocusAncestor$$);
      $animationResolve$$4$$(null);
    }));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_slideAnimationComplete$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_slideAnimationComplete$$($item$$90$$, $isMovingNext$$1$$, $focusableElement$$2$$, $event$$454$$, $needFocusAncestor$$) {
    null !== this.$m_widget$.$m_contentHandler$ && ($focusableElement$$2$$ && ($needFocusAncestor$$ && this.$m_widget$.$getRootElement$().addClass("oj-focus-ancestor"), $event$$454$$ && 0 === $event$$454$$.button && this.$m_widget$.$AvoidFocusHighLight$(!0), this.$m_widget$.$HandleClickActive$($focusableElement$$2$$, $event$$454$$), this.$m_widget$.$AvoidFocusHighLight$(!1)), $isMovingNext$$1$$ ? this.$m_widget$.$AnimateExpandComplete$($item$$90$$.children("." + this.$m_widget$.$getGroupStyleClass$())) : 
    this.$m_widget$.$AnimateCollapseComplete$($item$$90$$.children("." + this.$m_widget$.$getGroupStyleClass$())));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$Expand$ = function $$oj$$20$$$$SlidingNavListHandler$$$$Expand$$($groupItem$$19$$, $animate$$10$$, $event$$455$$) {
    var $animationResolve$$5$$, $animationPromise$$4$$ = new Promise(function($resolve$$37$$) {
      $animationResolve$$5$$ = $resolve$$37$$;
    }), $target$$121$$ = $$$$19$$($groupItem$$19$$).parents(".oj-navigationlist-item-element:first"), $sublist$$3$$ = $target$$121$$.children("." + this.$m_widget$.$getGroupStyleClass$()), $parentLabel$$, $nextFocusableItem$$ = null, $currentListRoot$$ = $target$$121$$.closest("." + this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
    if (0 < $currentListRoot$$.length) {
      $currentListRoot$$.removeClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
      $target$$121$$.addClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
      var $nextFocusableItem$$ = $sublist$$3$$.find("." + this.$m_widget$.$getItemElementStyleClass$() + ":eq(0)"), $listOfParents$$ = $target$$121$$.parentsUntil($currentListRoot$$, "ul"), $listOfParents$$ = $currentListRoot$$.is(this.$m_widget$.element) ? $listOfParents$$.get().concat($currentListRoot$$.get()) : $listOfParents$$.get(), $self$$156$$ = this, $itemNode$$, $listOfParents$$ = $$$$19$$($listOfParents$$.reverse());
      $listOfParents$$.each(function($i$$345$$, $parentList$$) {
        $parentLabel$$ = $$$$19$$($parentList$$).is($self$$156$$.$m_widget$.element) ? $self$$156$$.$m_widget$.$getRootLabel$() : $self$$156$$.$m_widget$.$getItemLabel$($$$$19$$($parentList$$).parent());
        $itemNode$$ = $i$$345$$ === $listOfParents$$.length - 1 ? $target$$121$$ : $$$$19$$($listOfParents$$.get($i$$345$$ + 1)).parent();
        $self$$156$$.$_addItemToHviewMenu$($self$$156$$.$m_widget$.$GetKey$($itemNode$$[0]), $self$$156$$.$m_widget$.$getItemLabel$($itemNode$$), $parentLabel$$);
        $self$$156$$.$m_expanded$.push($itemNode$$);
      });
    }
    $animate$$10$$ ? this.$_slideAnimation$($target$$121$$, !0, $nextFocusableItem$$, $event$$455$$, $animationResolve$$5$$) : (this.$_slideAnimationComplete$($target$$121$$, !0, $nextFocusableItem$$, $event$$455$$, !1), $animationResolve$$5$$(null));
    this.$m_widget$.element.focus();
    $target$$121$$.siblings().attr("aria-hidden", "true");
    $target$$121$$.children("." + this.$m_widget$.$getGroupItemStyleClass$()).children("." + this.$m_widget$.$ITEM_CONTENT_STYLE_CLASS$).attr("aria-hidden", "true");
    $sublist$$3$$.removeAttr("aria-hidden");
    $groupItem$$19$$.css("display", "");
    $target$$121$$.addClass("oj-skipfocus");
    return $animationPromise$$4$$;
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$Collapse$ = function $$oj$$20$$$$SlidingNavListHandler$$$$Collapse$$($target$$122$$, $animate$$11$$, $event$$456$$) {
    var $animationResolve$$6$$, $animationPromise$$5$$ = new Promise(function($resolve$$38$$) {
      $animationResolve$$6$$ = $resolve$$38$$;
    }), $currentList$$ = $target$$122$$.children("." + this.$m_widget$.$getGroupStyleClass$()), $parentlist$$ = $target$$122$$.parent();
    $target$$122$$.children("." + this.$m_widget$.$getGroupItemStyleClass$()).children("." + this.$m_widget$.$ITEM_CONTENT_STYLE_CLASS$).removeAttr("aria-hidden");
    $currentList$$.attr("aria-hidden", "true");
    $target$$122$$.siblings().removeAttr("aria-hidden");
    $target$$122$$.removeClass("oj-skipfocus");
    $target$$122$$.removeClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
    0 === $target$$122$$.closest("." + this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$).length && ($parentlist$$.closest("." + this.$m_widget$.$getItemElementStyleClass$()).addClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$), this.$m_widget$.element.is($parentlist$$) && this.$m_widget$.element.addClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$));
    $animate$$11$$ ? this.$_slideAnimation$($target$$122$$, !1, $currentList$$.parent(), $event$$456$$, $animationResolve$$6$$) : (this.$_slideAnimationComplete$($target$$122$$, !1, $currentList$$.parent(), $event$$456$$, !1), $animationResolve$$6$$(null));
    this.$_removeItemFromHviewMenu$();
    this.$m_widget$.element.focus();
    return $animationPromise$$5$$;
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$UpdateAriaPropertiesOnSelectedItem$ = function $$oj$$20$$$$SlidingNavListHandler$$$$UpdateAriaPropertiesOnSelectedItem$$($elem$$98$$, $highlight$$3$$) {
    $highlight$$3$$ ? $elem$$98$$.attr("aria-describedby", "selectedLabel") : $elem$$98$$.removeAttr("aria-describedby");
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$GetState$ = function $$oj$$20$$$$SlidingNavListHandler$$$$GetState$$($expanded$$8_item$$91$$) {
    $expanded$$8_item$$91$$ = this.$m_widget$.$getFocusItem$($expanded$$8_item$$91$$).attr("aria-expanded");
    return "true" === $expanded$$8_item$$91$$ ? this.$m_widget$.$STATE_EXPANDED$ : "false" === $expanded$$8_item$$91$$ ? this.$m_widget$.$STATE_COLLAPSED$ : this.$m_widget$.$STATE_NONE$;
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$SetState$ = function $$oj$$20$$$$SlidingNavListHandler$$$$SetState$$($item$$92$$, $state$$8$$) {
    $state$$8$$ === this.$m_widget$.$STATE_EXPANDED$ ? (this.$m_widget$.$getFocusItem$($item$$92$$).attr("aria-expanded", "true"), $item$$92$$.removeClass(this.$m_widget$.$COLLAPSED_STYLE_CLASS$).addClass(this.$m_widget$.$EXPANDED_STYLE_CLASS$)) : $state$$8$$ === this.$m_widget$.$STATE_COLLAPSED$ && (this.$m_widget$.$getFocusItem$($item$$92$$).attr("aria-expanded", "false"), $item$$92$$.removeClass(this.$m_widget$.$EXPANDED_STYLE_CLASS$).addClass(this.$m_widget$.$COLLAPSED_STYLE_CLASS$));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$ModifyListItem$ = function $$oj$$20$$$$SlidingNavListHandler$$$$ModifyListItem$$($$item$$2$$, $itemContent$$5$$) {
    var $focusableElement$$3$$ = this.$m_widget$.$getFocusItem$($$item$$2$$);
    $focusableElement$$3$$.attr("role", "menuitem");
    $itemContent$$5$$.attr("id") || $itemContent$$5$$.uniqueId();
    var $groupItems$$4$$ = $$item$$2$$.children("." + this.$m_widget$.$getGroupStyleClass$());
    0 < $groupItems$$4$$.length && ($focusableElement$$3$$.attr("aria-haspopup", "true"), $groupItems$$4$$.attr("role", "menu"), $groupItems$$4$$.css("display", ""), $$item$$2$$.removeAttr("aria-expanded"), $focusableElement$$3$$.attr("aria-expanded", "false"));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$BeforeRenderComplete$ = function $$oj$$20$$$$SlidingNavListHandler$$$$BeforeRenderComplete$$() {
    this.$m_widget$.element.attr("role", "menu");
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.Init = function $$oj$$20$$$$SlidingNavListHandler$$$Init$($opts$$24$$) {
    this.$m_root$.addClass("oj-navigationlist-slider oj-navigationlist-vertical");
    $opts$$24$$.element.addClass("oj-navigationlist-current");
    this.$_buildSlidingNavListHeader$($opts$$24$$);
    this.$_initializeHierarchicalView$();
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_buildSlidingNavListHeader$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_buildSlidingNavListHeader$$($opts$$25$$) {
    var $selectedLabel$$;
    this.$_toolbar$ = $$$$19$$(document.createElement("div"));
    this.$_toolbar$.addClass("oj-navigationlist-toolbar");
    this.$_previousLink$ = $$$$19$$(document.createElement("a"));
    this.$_prevIcon$ = $$$$19$$(document.createElement("span"));
    this.$_prevIcon$.addClass("oj-navigationlist-previous-icon oj-component-icon oj-clickable-icon-nocontext").attr("role", "img").attr("alt", this.$m_component$.$getTranslatedString$("previousIcon"));
    this.$_prevIcon$.css("visibility", "hidden");
    this.$_previousLink$.addClass("oj-navigationlist-previous-link").attr("tabindex", "-1").append(this.$_prevIcon$);
    this.$_headerLabel$ = $$$$19$$(document.createElement("label"));
    this.$_headerLabel$.addClass("oj-navigationlist-current-header").text(this.$m_widget$.$getRootLabel$());
    this.$_vSeparator$ = $$$$19$$(document.createElement("span"));
    this.$_vSeparator$.attr("role", "separator").attr("aria-orientation", "vertical").addClass("oj-navigationlist-toolbar-separator");
    this.$_hviewBtn$ = $$$$19$$(document.createElement("button"));
    this.$_hviewBtn$.addClass("oj-navigationlist-hierarchical-button");
    this.$_hviewMenu$ = $$$$19$$(document.createElement("ul"));
    this.$_hviewMenu$.addClass("oj-navigationlist-hierarchical-menu").hide();
    $selectedLabel$$ = $$$$19$$(document.createElement("label"));
    $selectedLabel$$.addClass("oj-helper-hidden-accessible").attr("aria-hidden", "true").attr("id", "selectedLabel");
    $selectedLabel$$.text(this.$m_component$.$getTranslatedString$("selectedLabel"));
    this.$_previousLink$.append(this.$_headerLabel$);
    this.$_toolbar$.append(this.$_previousLink$).append(this.$_vSeparator$).append(this.$_hviewBtn$).append(this.$_hviewMenu$).append($selectedLabel$$);
    this.$m_root$.prepend(this.$_toolbar$);
    this.$_showOrHideHierarchyMenu$($opts$$25$$.hierarchyMenuDisplayThresholdLevel);
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$CollapseCurrentList$ = function $$oj$$20$$$$SlidingNavListHandler$$$$CollapseCurrentList$$($event$$457$$) {
    var $current$$17$$ = this.$m_expanded$.pop();
    $current$$17$$ && this.$m_widget$.$CollapseItem$($current$$17$$, $event$$457$$, !0, null, !0, !0);
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_initializeHierarchicalView$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_initializeHierarchicalView$$() {
    var $self$$157$$ = this, $menuid$$ = this.$_hviewMenu$.uniqueId().attr("id");
    this.$_hviewMenu$.ojMenu({openOptions:{position:{my:"end top", at:"end bottom"}}, select:function($event$$458$$, $ui$$15$$) {
      for (var $itemsToRemove$$ = $ui$$15$$.item.nextAll(), $currentKey$$, $item$$93$$, $expandedItems$$ = $self$$157$$.$m_expanded$, $targetItemKey$$ = $ui$$15$$.item.data("key");0 < $expandedItems$$.length && ($item$$93$$ = $expandedItems$$.pop(), $currentKey$$ = $self$$157$$.$m_widget$.$GetKey$($item$$93$$[0]), $self$$157$$.$m_widget$.$CollapseItem$($$$$19$$($item$$93$$), $event$$458$$, !0, $currentKey$$, !0, !0), $targetItemKey$$ !== $currentKey$$);) {
      }
      $itemsToRemove$$.remove();
      $ui$$15$$.item.remove();
      $self$$157$$.$_hviewMenu$.ojMenu("refresh");
    }});
    this.$_hviewBtn$.ojButton({label:this.$m_component$.$getTranslatedString$("hierMenuBtnLabel"), display:"icons", icons:{start:"oj-fwk-icon oj-hier-icon"}, menu:"#" + $menuid$$, disabled:!0, chroming:"half"});
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_addItemToHviewMenu$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_addItemToHviewMenu$$($itemKey$$, $label$$16$$, $parentLabel$$1$$) {
    var $i$$346_menuItemLabel$$;
    if (this.$_hviewBtn$) {
      var $itemsinTree$$ = this.$_hviewMenu$.find("li").length, $menuListItem$$ = $$$$19$$(document.createElement("li")), $menuItem$$ = $$$$19$$(document.createElement("a"));
      $menuItem$$.attr("href", "#");
      $menuListItem$$.append($menuItem$$);
      if (0 < $itemsinTree$$) {
        for ($i$$346_menuItemLabel$$ = 0;$i$$346_menuItemLabel$$ < $itemsinTree$$;$i$$346_menuItemLabel$$++) {
          0 < $i$$346_menuItemLabel$$ && $menuItem$$.append($$$$19$$(document.createElement("span")).addClass("oj-navigationlist-hvitem-space"));
        }
        $menuItem$$.append($$$$19$$(document.createElement("span")).addClass("oj-menu-item-icon oj-icon oj-navigationlist-level-indicator"));
      }
      $i$$346_menuItemLabel$$ = $$$$19$$(document.createElement("span")).addClass("oj-navigationlist-hierarchical-menu-label");
      $i$$346_menuItemLabel$$.text($parentLabel$$1$$);
      $menuItem$$.append($i$$346_menuItemLabel$$);
      $menuListItem$$.data("key", $itemKey$$);
      this.$_hviewMenu$.append($menuListItem$$);
      this.$_hviewMenu$.ojMenu("refresh");
      this.$_showOrHideHierarchyMenu$(this.$m_widget$.$GetOption$("hierarchyMenuDisplayThresholdLevel"));
      this.$_hviewBtn$.ojButton("option", "disabled", !1);
      this.$_prevIcon$.css("visibility", "visible");
      this.$_previousLink$.attr("tabindex", "0");
      this.$_headerLabel$.text($label$$16$$);
    }
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$setOptions$ = function $$oj$$20$$$$SlidingNavListHandler$$$$setOptions$$($options$$274$$) {
    this.$m_widget$.$GetOption$("hierarchyMenuDisplayThresholdLevel") !== $options$$274$$.hierarchyMenuDisplayThresholdLevel && this.$_showOrHideHierarchyMenu$($options$$274$$.hierarchyMenuDisplayThresholdLevel);
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_showOrHideHierarchyMenu$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_showOrHideHierarchyMenu$$($hierarchyMenuDisplayThresholdLevel$$) {
    var $itemsinTree$$1$$ = this.$_hviewMenu$.find("li").length;
    -1 === $hierarchyMenuDisplayThresholdLevel$$ || $itemsinTree$$1$$ < $hierarchyMenuDisplayThresholdLevel$$ ? (this.$_vSeparator$.css("visibility", "hidden"), this.$_hviewBtn$.css("visibility", "hidden")) : $itemsinTree$$1$$ >= $hierarchyMenuDisplayThresholdLevel$$ && (this.$_vSeparator$.css("visibility", "visible"), this.$_hviewBtn$.css("visibility", "visible"));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_removeItemFromHviewMenu$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_removeItemFromHviewMenu$$() {
    if (this.$_hviewBtn$) {
      var $removed$$3$$ = this.$_hviewMenu$.find("li").last().remove();
      this.$_hviewMenu$.ojMenu("refresh");
      this.$_showOrHideHierarchyMenu$(this.$m_widget$.$GetOption$("hierarchyMenuDisplayThresholdLevel"));
      0 === this.$_hviewMenu$.children("li").length ? (this.$_hviewBtn$.ojButton("option", "disabled", !0), this.$_prevIcon$.css("visibility", "hidden"), this.$_previousLink$.attr("tabindex", "-1"), this.$_headerLabel$.text(this.$m_widget$.$getRootLabel$())) : this.$_headerLabel$.text($removed$$3$$.children("a").text());
    }
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$SlidingNavListHandler$$$$RestoreItem$$($item$$94$$, $itemContent$$6$$) {
    $item$$94$$.removeClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
    $itemContent$$6$$.removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-describedby").removeAttr("aria-hidden");
  };
  var $_ojNavigationListView$$ = function($SuperClass$$2$$, $methods$$3$$) {
    function $constructor$$3$$() {
    }
    $oj$$20$$.$Object$.$createSubclass$($constructor$$3$$, $SuperClass$$2$$, "");
    $$$$19$$.extend($constructor$$3$$.prototype, $methods$$3$$);
    return $constructor$$3$$;
  }($oj$$20$$.$_ojListView$, {$ITEM_CONTENT_STYLE_CLASS$:"oj-navigationlist-item-content", $EXPANDED_STYLE_CLASS$:"oj-expanded", $COLLAPSED_STYLE_CLASS$:"oj-collapsed", $SLIDING_NAVLIST_CURRENT_STYLE_CLASS$:"oj-navigationlist-current", $DIVIDER_STYLE_CLASS$:"oj-navigationlist-divider", $_CATEGORY_DIVIDER_STYLE_CLASS$:"oj-navigationlist-category-divider", $_ITEM_LABEL_STYLE_CLASS$:"oj-navigationlist-item-label", $_ICON_ONLY_STYLE_CLASS$:"oj-navigationlist-icon-only", $_ITEM_ICON_STYLE_CLASS$:"oj-navigationlist-item-icon", 
  $_HORIZONTAL_NAVLIST_STYLE_CLASS$:"oj-navigationlist-horizontal", $_NAVLIST_HAS_ICONS$:"oj-navigationlist-has-icons", $_NAVLIST_ITEM_HAS_NO_ICON$:"oj-navigationlist-item-no-icon", $_NAVLIST_ITEM_TITLE$:"oj-navigationlist-item-title", $_NAVLIST_STYLE_CLASS$:"oj-navigationlist", $_NAVLIST_TOUCH_STYLE_CLASS$:"oj-navigationlist-touch", $_NAVLIST_LISTVIEW_CONTAINER_STYLE_CLASS$:"oj-navigationlist-listview-container", $_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$:"IsTitleAttrDueToTruncation", $_APPLICATION_LEVEL_NAV_STYLE_CLASS$:"oj-navigationlist-app-level", 
  $_PAGE_LEVEL_NAV_STYLE_CLASS$:"oj-navigationlist-page-level", $_NAVLIST_ITEM_ICON_HAS_TITLE$:"navigationListItemIconHastitle", $_NAVLIST_NO_FOLLOW_LINK_CLASS$:"oj-navigationlist-nofollow-link", $getItemLabel$:function($itemContent$$7_target$$123$$) {
    $itemContent$$7_target$$123$$ = this.$getItemContentElement$($itemContent$$7_target$$123$$);
    return $itemContent$$7_target$$123$$.is("a") ? $$$$19$$.trim($itemContent$$7_target$$123$$.text()) : $$$$19$$.trim($itemContent$$7_target$$123$$.find("." + this.$_NAVLIST_ITEM_TITLE$).text());
  }, $getItemContentElement$:function($item$$95$$) {
    var $itemContent$$8$$ = $item$$95$$.children("." + this.$ITEM_CONTENT_STYLE_CLASS$);
    0 === $itemContent$$8$$.length && ($itemContent$$8$$ = $item$$95$$.children("." + this.$getGroupItemStyleClass$()).children("." + this.$ITEM_CONTENT_STYLE_CLASS$), 0 === $itemContent$$8$$.length && ($itemContent$$8$$ = $item$$95$$.children("." + this.$getGroupItemStyleClass$()).children(":not(." + this.$getExpandIconStyleClass$() + "):not(." + this.$getCollapseIconStyleClass$() + ")")));
    return $itemContent$$8$$;
  }, $isRtl$:function() {
    return "rtl" === this.$ojContext$.$_GetReadingDirection$();
  }, $renderComplete$:function() {
    this.$m_listHandler$.$BeforeRenderComplete$();
    $_ojNavigationListView$$.$superclass$.$renderComplete$.apply(this, arguments);
  }, $itemInsertComplete$:function($elem$$99$$, $context$$112$$) {
    this.$m_listHandler$.$ItemInsertComplete$($elem$$99$$, $context$$112$$);
  }, $itemRemoveComplete$:function($elem$$100$$) {
    this.$m_listHandler$.$ItemRemoveComplete$($elem$$100$$);
    $_ojNavigationListView$$.$superclass$.$itemRemoveComplete$.apply(this, arguments);
  }, $_restoreContent$:function($i$$347_list$$11$$) {
    var $item$$96$$, $itemContent$$9$$, $focusableItem_itemIcon_sublist$$5$$, $items$$8$$ = $i$$347_list$$11$$.children();
    $i$$347_list$$11$$.removeAttr("style").removeClass(this.$_NAVLIST_HAS_ICONS$).removeAttr("aria-hidden");
    for ($i$$347_list$$11$$ = 0;$i$$347_list$$11$$ < $items$$8$$.length;$i$$347_list$$11$$++) {
      $item$$96$$ = $items$$8$$[$i$$347_list$$11$$], $item$$96$$ = $$$$19$$($item$$96$$), $item$$96$$.hasClass(this.$DIVIDER_STYLE_CLASS$) ? $item$$96$$.remove() : ($itemContent$$9$$ = this.$getItemContentElement$($item$$96$$), $itemContent$$9$$.removeClass(this.$ITEM_CONTENT_STYLE_CLASS$).removeClass(this.$_NAVLIST_ITEM_HAS_NO_ICON$).removeAttr("aria-haspopup"), ($focusableItem_itemIcon_sublist$$5$$ = $itemContent$$9$$.children("." + this.$_ITEM_ICON_STYLE_CLASS$)) && 0 < $focusableItem_itemIcon_sublist$$5$$.length && 
      ($focusableItem_itemIcon_sublist$$5$$.removeAttr("role"), $focusableItem_itemIcon_sublist$$5$$.removeAttr("aria-label"), this.$_removeToolTipOnIcon$($focusableItem_itemIcon_sublist$$5$$)), $item$$96$$.removeClass("oj-default").removeAttr("role").removeAttr("aria-disabled").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-pressed"), $focusableItem_itemIcon_sublist$$5$$ = this.$getFocusItem$($item$$96$$), $focusableItem_itemIcon_sublist$$5$$.removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-pressed"), 
      $itemContent$$9$$.children("." + this.$_ITEM_LABEL_STYLE_CLASS$).contents().unwrap(), $focusableItem_itemIcon_sublist$$5$$.data(this.$_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$) && $focusableItem_itemIcon_sublist$$5$$.removeAttr("title"), $focusableItem_itemIcon_sublist$$5$$ = $item$$96$$.children("ul"), 0 < $focusableItem_itemIcon_sublist$$5$$.length ? (this.$m_listHandler$.$RestoreItem$($item$$96$$, $itemContent$$9$$, $focusableItem_itemIcon_sublist$$5$$), this.$_restoreContent$($focusableItem_itemIcon_sublist$$5$$)) : 
      this.$m_listHandler$.$RestoreItem$($item$$96$$, $itemContent$$9$$));
    }
  }, $IsNodeEditableOrClickable$:function($node$$76$$) {
    return $node$$76$$.hasClass(this.$ITEM_CONTENT_STYLE_CLASS$) || $node$$76$$.hasClass(this.$getExpandIconStyleClass$()) || $node$$76$$.hasClass(this.$getCollapseIconStyleClass$()) ? !1 : $_ojNavigationListView$$.$superclass$.$IsNodeEditableOrClickable$.apply(this, arguments);
  }, $IsElementEditableOrClickable$:function($node$$77$$) {
    return $node$$77$$.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && !$node$$77$$.hasClass(this.$ITEM_CONTENT_STYLE_CLASS$) || $node$$77$$.hasClass("oj-component");
  }, $_prepareListViewOptions$:function($navlistOptions$$) {
    var $opts$$26$$ = {drillMode:"none" !== $navlistOptions$$.drillMode ? "collapsible" : "none", selection:null !== $navlistOptions$$.selection ? [$navlistOptions$$.selection] : [], item:$navlistOptions$$.item, data:$navlistOptions$$.data, selectionMode:"single"};
    $opts$$26$$.element = this.$_list$;
    $opts$$26$$.item.focusable = function $$opts$$26$$$item$focusable$($context$$113$$) {
      return $$$$19$$($context$$113$$.data).is("li") ? !$$$$19$$($context$$113$$.data).hasClass("oj-disabled") : !$$$$19$$($context$$113$$.parentElement).hasClass("oj-disabled");
    };
    return $opts$$26$$ = $$$$19$$.extend($$$$19$$.extend({}, $navlistOptions$$), $opts$$26$$);
  }, $getRootLabel$:function() {
    return this.$ojContext$.options.rootLabel ? this.$ojContext$.options.rootLabel : this.$ojContext$.$getTranslatedString$("defaultRootLabel");
  }, $SetAriaProperties$:function() {
    var $ariaLabelId$$ = this.$ojContext$.element.attr("aria-labelledby");
    $ariaLabelId$$ ? (this.element.attr("aria-labelledby", $ariaLabelId$$), this.$ojContext$.element.removeAttr("aria-labelledby")) : this.element.attr("aria-label", this.$getRootLabel$());
    $_ojNavigationListView$$.$superclass$.$SetAriaProperties$.apply(this, arguments);
  }, $UnsetAriaProperties$:function() {
    this.element.attr("aria-labelledby") && (this.$ojContext$.element.attr("aria-labelledby", this.element.attr("aria-labelledby")), this.element.removeAttr("aria-labelledby"));
    this.element.attr("aria-label") && this.element.removeAttr("aria-label");
    $_ojNavigationListView$$.$superclass$.$UnsetAriaProperties$.apply(this, arguments);
  }, $init$:function($navlistopts_opts$$27$$) {
    var $self$$158$$ = this, $element$$183_listViewContainer$$ = $navlistopts_opts$$27$$.$ojContext$.element;
    $element$$183_listViewContainer$$.addClass(this.$_NAVLIST_STYLE_CLASS$);
    $oj$$20$$.$DomUtils$.$isTouchSupported$() && $element$$183_listViewContainer$$.addClass(this.$_NAVLIST_TOUCH_STYLE_CLASS$);
    this.$_list$ = $element$$183_listViewContainer$$.children("ul:first");
    0 === this.$_list$.length && (this.$_list$ = $$$$19$$(document.createElement("ul")), $element$$183_listViewContainer$$.append(this.$_list$));
    $element$$183_listViewContainer$$ = $$$$19$$(document.createElement("div"));
    $element$$183_listViewContainer$$.addClass(this.$_NAVLIST_LISTVIEW_CONTAINER_STYLE_CLASS$);
    this.$_list$.wrap($element$$183_listViewContainer$$);
    $navlistopts_opts$$27$$ = this.$_prepareListViewOptions$($navlistopts_opts$$27$$);
    $_ojNavigationListView$$.$superclass$.$init$.call(this, $navlistopts_opts$$27$$);
    this.element.removeClass("oj-component-initnode");
    this.$ojContext$._on(this.$ojContext$.element, {mouseup:function($event$$459$$) {
      $self$$158$$.$_clearActiveState$($event$$459$$);
    }, "click .oj-navigationlist-previous-link":function($event$$460$$) {
      $self$$158$$.$_collapseCurrentList$($event$$460$$);
    }, "keydown .oj-navigationlist-previous-link":function($event$$461$$) {
      $event$$461$$.keyCode === $$$$19$$.ui.keyCode.ENTER && $self$$158$$.$_collapseCurrentList$($event$$461$$);
    }, "keydown .oj-navigationlist-element":function($event$$462$$) {
      $event$$462$$.keyCode !== $$$$19$$.ui.keyCode.ESCAPE || $event$$462$$.isDefaultPrevented() || $self$$158$$.$_collapseCurrentList$($event$$462$$);
    }, "mouseenter a.oj-navigationlist-item-content":function($$itemLink_event$$463$$) {
      $$itemLink_event$$463$$ = $$$$19$$($$itemLink_event$$463$$.currentTarget);
      var $$label$$ = $$itemLink_event$$463$$.find("." + $self$$158$$.$_ITEM_LABEL_STYLE_CLASS$);
      $$label$$[0].offsetWidth < $$label$$[0].scrollWidth && !$$itemLink_event$$463$$.attr("title") && ($$itemLink_event$$463$$.attr("title", $$label$$.text().trim()), $$itemLink_event$$463$$.data($self$$158$$.$_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$, "true"));
    }, "mouseleave a.oj-navigationlist-item-content":function($event$$464$$) {
      var $$itemLink$$1$$ = $$$$19$$($event$$464$$.currentTarget);
      $$itemLink$$1$$.data($self$$158$$.$_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$) && ($$itemLink$$1$$.removeData($self$$158$$.$_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$), $$itemLink$$1$$.removeAttr("title"));
      $self$$158$$.$_clearActiveState$($event$$464$$);
    }});
  }, $_collapseCurrentList$:function($event$$465$$) {
    this.$m_listHandler$.$CollapseCurrentList$($event$$465$$);
  }, $_initListHandler$:function() {
    var $drillMode$$ = this.$ojContext$.options.drillMode, $edge$$ = this.$ojContext$.options.edge;
    this.$m_listHandler$ = "sliding" === $drillMode$$ ? new $oj$$20$$.$SlidingNavListHandler$(this, this.$ojContext$.element, this.$ojContext$) : "collapsible" === $drillMode$$ ? new $oj$$20$$.$CollapsibleNavListHandler$(this, this.$ojContext$.element, this.$ojContext$) : "none" === $drillMode$$ && "top" === $edge$$ ? new $oj$$20$$.$HorizontalNavListHandler$(this, this.$ojContext$.element, this.$ojContext$) : new $oj$$20$$.$DefaultNavListHandler$(this, this.$ojContext$.element, this.$ojContext$);
    this.$m_listHandler$.Init(this.options);
    this.$_setNavigationLevel$(this.$ojContext$.options.navigationLevel);
  }, $_setNavigationLevel$:function($navigationLevel$$1$$) {
    "none" === this.$ojContext$.options.drillMode && ("application" === $navigationLevel$$1$$ ? (this.$ojContext$.element.addClass(this.$_APPLICATION_LEVEL_NAV_STYLE_CLASS$), this.$ojContext$.element.removeClass(this.$_PAGE_LEVEL_NAV_STYLE_CLASS$)) : "page" === $navigationLevel$$1$$ && (this.$ojContext$.element.addClass(this.$_PAGE_LEVEL_NAV_STYLE_CLASS$), this.$ojContext$.element.removeClass(this.$_APPLICATION_LEVEL_NAV_STYLE_CLASS$)));
  }, $_clearActiveState$:function($event$$466_item$$97$$) {
    $event$$466_item$$97$$ = this.$FindItem$($$$$19$$($event$$466_item$$97$$.target));
    null != $event$$466_item$$97$$ && this.$HighlightUnhighlightElem$($event$$466_item$$97$$, "oj-active", !1);
  }, $afterCreate$:function() {
    this.$_initListHandler$();
    $_ojNavigationListView$$.$superclass$.$afterCreate$.apply(this, arguments);
  }, $HandleMouseDownOrTouchStart$:function($event$$467$$) {
    $_ojNavigationListView$$.$superclass$.$HandleMouseDownOrTouchStart$.apply(this, arguments);
    var $item$$98$$ = this.$FindItem$($$$$19$$($event$$467$$.target));
    $item$$98$$ && !$item$$98$$.hasClass("oj-disabled") && this.$HighlightUnhighlightElem$($item$$98$$, "oj-active", !0);
  }, $HandleTouchEndOrCancel$:function($event$$468$$) {
    this.$_clearActiveState$($event$$468$$);
    $_ojNavigationListView$$.$superclass$.$HandleTouchEndOrCancel$.apply(this, arguments);
  }, $GetContainerStyleClass$:function() {
    return "oj-navigationlist-listview";
  }, $GetStyleClass$:function() {
    return "oj-navigationlist-element";
  }, $getItemStyleClass$:function() {
    return "oj-navigationlist-item";
  }, $getFocusedElementStyleClass$:function() {
    return "oj-navigationlist-focused-element";
  }, $getItemElementStyleClass$:function() {
    return "oj-navigationlist-item-element";
  }, $getCollapseIconStyleClass$:function() {
    return "oj-navigationlist-collapse-icon";
  }, $getExpandIconStyleClass$:function() {
    return "oj-navigationlist-expand-icon";
  }, $getDepthStyleClass$:function($depth$$16$$) {
    return "oj-navigationlist-depth-" + $depth$$16$$;
  }, $getGroupItemStyleClass$:function() {
    return "oj-navigationlist-group-item";
  }, $getGroupStyleClass$:function() {
    return "oj-navigationlist-group";
  }, $getGroupExpandStyleClass$:function() {
    return "oj-navigationlist-collapsible-transition";
  }, $getGroupCollapseStyleClass$:function() {
    return this.$getGroupExpandStyleClass$();
  }, $AnimateExpand$:function($groupItem$$20$$, $animate$$12$$, $event$$469$$) {
    return this.$m_listHandler$.$Expand$($groupItem$$20$$, $animate$$12$$, $event$$469$$);
  }, $AnimateCollapse$:function($item$$99$$, $animate$$13$$, $event$$470$$) {
    return this.$m_listHandler$.$Collapse$($item$$99$$, $animate$$13$$, $event$$470$$);
  }, $HandleArrowKeys$:function($keyCode$$20$$, $isExtend$$6$$, $event$$471$$) {
    return this.$m_listHandler$.$HandleArrowKeys$($keyCode$$20$$, $isExtend$$6$$, $event$$471$$);
  }, $IsArrowKey$:function($keyCode$$21$$) {
    return this.$m_listHandler$.$IsArrowKey$($keyCode$$21$$);
  }, $GetState$:function($item$$100$$) {
    return this.$m_listHandler$.$GetState$($item$$100$$);
  }, $SetState$:function($item$$101$$, $state$$9$$) {
    this.$m_listHandler$.$SetState$($item$$101$$, $state$$9$$);
  }, $HandleMouseClick$:function($event$$472$$) {
    var $item$$102_url$$33$$ = this.$FindItem$($$$$19$$($event$$472$$.target));
    null != $item$$102_url$$33$$ && 0 !== $item$$102_url$$33$$.length && (this.$SkipFocus$($item$$102_url$$33$$) ? $event$$472$$.preventDefault() : this.$IsNodeEditableOrClickable$($$$$19$$($event$$472$$.target)) || ($item$$102_url$$33$$ = this.$getItemContentElement$($item$$102_url$$33$$).attr("href"), $item$$102_url$$33$$ && "#" !== $item$$102_url$$33$$ && 0 === $event$$472$$.button && ($event$$472$$.shiftKey || $event$$472$$.ctrlKey) || ($_ojNavigationListView$$.$superclass$.$HandleMouseClick$.apply(this, 
    arguments), $event$$472$$.preventDefault())));
  }, $HandleKeyDown$:function($event$$473$$) {
    var $keyCode$$22_processExpansion$$, $current$$18$$, $currentItemKey$$2$$;
    if (this.$m_active$) {
      if ($keyCode$$22_processExpansion$$ = $event$$473$$.keyCode, $current$$18$$ = this.$m_active$.elem, $currentItemKey$$2$$ = this.$m_active$.key, $keyCode$$22_processExpansion$$ === $$$$19$$.ui.keyCode.HOME || $keyCode$$22_processExpansion$$ === $$$$19$$.ui.keyCode.END) {
        var $item$$103_processed$$5$$;
        $item$$103_processed$$5$$ = $keyCode$$22_processExpansion$$ === $$$$19$$.ui.keyCode.HOME ? this.element.find("." + this.$ITEM_CONTENT_STYLE_CLASS$ + ":visible").first().closest("." + this.$getItemElementStyleClass$()) : this.element.find("." + this.$ITEM_CONTENT_STYLE_CLASS$ + ":visible").last().closest("." + this.$getItemElementStyleClass$());
        this.$HandleClickActive$($item$$103_processed$$5$$, $event$$473$$);
        $event$$473$$.preventDefault();
      } else {
        $item$$103_processed$$5$$ = this.$HandleSelectionOrActiveKeyDown$($event$$473$$), $keyCode$$22_processExpansion$$ = this.$m_listHandler$.$HandleExpandAndCollapseKeys$($event$$473$$, $keyCode$$22_processExpansion$$, $current$$18$$, $currentItemKey$$2$$), !0 !== $item$$103_processed$$5$$ && !0 !== $keyCode$$22_processExpansion$$ || $event$$473$$.preventDefault();
      }
    }
  }, $AvoidFocusHighLight$:function($flag$$8$$) {
    this.$_avoidFocusHighLight$ = $flag$$8$$;
  }, $RecentPointerCallback$:function() {
    var $self$$159$$ = this;
    return function() {
      return!!$self$$159$$.$_avoidFocusHighLight$;
    };
  }, $ShouldApplyHighlight$:function() {
    return!0;
  }, $ToggleSelection$:function($event$$474$$, $keepCurrentSelection$$1$$, $skipIfNotSelected$$1$$) {
    var $item$$104$$ = this.$m_active$.elem;
    this.$IsSelectable$($item$$104$$[0]) && !this.$_isSelected$($item$$104$$) && this.$_fireBeforeSelectEvent$($event$$474$$, $item$$104$$) && ($_ojNavigationListView$$.$superclass$.$ToggleSelection$.apply(this, arguments), this.$_initiateNavigation$($item$$104$$));
  }, $HighlightUnhighlightElem$:function($elem$$101$$, $style$$7$$, $highlight$$4$$) {
    var $group$$4$$;
    $elem$$101$$ = $$$$19$$($elem$$101$$);
    "oj-selected" === $style$$7$$ && this.$m_listHandler$.$UpdateAriaPropertiesOnSelectedItem$(this.$getFocusItem$($elem$$101$$), $highlight$$4$$);
    $group$$4$$ = $elem$$101$$.children("." + this.$getGroupItemStyleClass$());
    0 < $group$$4$$.length && ($elem$$101$$ = $$$$19$$($group$$4$$[0]));
    "oj-focus" === $style$$7$$ ? $highlight$$4$$ ? this.$_focusInHandler$($elem$$101$$) : this.$_focusOutHandler$($elem$$101$$) : $highlight$$4$$ ? $elem$$101$$.addClass($style$$7$$) : $elem$$101$$.removeClass($style$$7$$);
    $elem$$101$$.hasClass("oj-selected") || $elem$$101$$.hasClass("oj-hover") || $elem$$101$$.hasClass("oj-active") || $elem$$101$$.hasClass("oj-disabled") ? $elem$$101$$.removeClass("oj-default") : $elem$$101$$.addClass("oj-default");
  }, $IsSelectable$:function($item$$105$$) {
    return!$$$$19$$($item$$105$$).hasClass("oj-disabled") && this.$m_listHandler$.$IsSelectable$($$$$19$$($item$$105$$));
  }, $Trigger$:function($type$$87$$, $event$$475$$, $ui$$16$$) {
    return "ready" !== $type$$87$$ ? this.$ojContext$._trigger($type$$87$$, $event$$475$$, $ui$$16$$) : !0;
  }, $SetOption$:function($key$$126$$, $value$$269$$, $flags$$29$$) {
    if ("selection" === $key$$126$$) {
      var $context$$114$$ = $flags$$29$$._context, $selectedItem$$ = $context$$114$$ && $context$$114$$.$extraData$ && $context$$114$$.$extraData$.items;
      $selectedItem$$ && ($context$$114$$.$extraData$.item = $selectedItem$$, $context$$114$$.$extraData$.items = void 0);
      $value$$269$$ && 0 < $value$$269$$.length ? this.$ojContext$.option($key$$126$$, $value$$269$$[0], $flags$$29$$) : this.$ojContext$.option($key$$126$$, null, $flags$$29$$);
    } else {
      this.$ojContext$.option($key$$126$$, $value$$269$$, $flags$$29$$);
    }
    this.options[$key$$126$$] = $value$$269$$;
  }, $ShouldRefresh$:function($options$$275$$) {
    return null != $options$$275$$.data || null != $options$$275$$.drillMode || null != $options$$275$$.item || null != $options$$275$$.display || null != $options$$275$$.edge;
  }, $setOptions$:function($options$$276$$, $flags$$30$$) {
    var $result$$53$$ = {$skipOptions$:[]}, $newSelectionValue$$;
    void 0 !== $options$$276$$.hierarchyMenuDisplayThresholdLevel && this.$m_listHandler$.$setOptions$($options$$276$$);
    void 0 !== $options$$276$$.navigationLevel && this.$_setNavigationLevel$($options$$276$$.navigationLevel);
    if (void 0 !== $options$$276$$.selection) {
      if ($newSelectionValue$$ = $options$$276$$.selection) {
        var $item$$106_selection$$23$$ = this.$GetOption$("selection");
        $item$$106_selection$$23$$ && 0 !== $item$$106_selection$$23$$.length && $item$$106_selection$$23$$[0] === $newSelectionValue$$ ? delete $options$$276$$.selection : ($item$$106_selection$$23$$ = this.$FindElementByKey$($newSelectionValue$$)) && this.$IsSelectable$($item$$106_selection$$23$$) ? this.$_fireBeforeSelectEvent$(null, $$$$19$$($item$$106_selection$$23$$)) ? ($options$$276$$.selection = [$newSelectionValue$$], this.$_initiateNavigation$($$$$19$$($item$$106_selection$$23$$))) : (delete $options$$276$$.selection, 
        $result$$53$$.$skipOptions$.push("selection")) : (delete $options$$276$$.selection, $result$$53$$.$skipOptions$.push("selection"));
      } else {
        $options$$276$$.selection = [];
      }
    }
    $result$$53$$.$needRefresh$ = $_ojNavigationListView$$.$superclass$.$setOptions$.call(this, $options$$276$$, $flags$$30$$);
    void 0 !== $newSelectionValue$$ && ($options$$276$$.selection = $newSelectionValue$$);
    return $result$$53$$;
  }, $GetOption$:function($key$$127$$) {
    var $optionValue$$4$$ = this.$ojContext$.option($key$$127$$);
    return "selection" === $key$$127$$ ? $optionValue$$4$$ ? [$optionValue$$4$$] : [] : null === $optionValue$$4$$ ? this.options[$key$$127$$] : $optionValue$$4$$;
  }, $getWidgetConstructor$:function() {
    return $oj$$20$$.Components.$getWidgetConstructor$(this.$ojContext$.element);
  }, $SelectAndFocus$:function($item$$107$$, $event$$476$$) {
    !$item$$107$$.hasClass("oj-disabled") && this.$IsSelectable$($item$$107$$[0]) && (!this.$_isSelected$($item$$107$$) && this.$_fireBeforeSelectEvent$($event$$476$$, $item$$107$$) ? ($_ojNavigationListView$$.$superclass$.$SelectAndFocus$.apply(this, arguments), this.$_initiateNavigation$($item$$107$$)) : this.$HandleClickActive$($item$$107$$, $event$$476$$));
  }, $_fireBeforeSelectEvent$:function($event$$477$$, $item$$108$$) {
    var $key$$128$$ = this.$GetKey$($item$$108$$[0]);
    return this.$Trigger$("beforeSelect", $event$$477$$, {item:$item$$108$$, key:$key$$128$$});
  }, $_initiateNavigation$:function($item$$109_url$$34$$) {
    return this.$ojContext$.element.hasClass(this.$_NAVLIST_NO_FOLLOW_LINK_CLASS$) ? !1 : ($item$$109_url$$34$$ = this.$getItemContentElement$($item$$109_url$$34$$).attr("href")) && "#" !== $item$$109_url$$34$$ ? (window.location.href = $item$$109_url$$34$$, !0) : !1;
  }, $_isSelected$:function($item$$110_key$$129$$) {
    var $selection$$24$$;
    $selection$$24$$ = this.$GetOption$("selection");
    $item$$110_key$$129$$ = this.$GetKey$($item$$110_key$$129$$[0]);
    return-1 < $selection$$24$$.indexOf($item$$110_key$$129$$) ? !0 : !1;
  }, $_setToolTipOnIcon$:function($icon$$6$$, $itemLabel$$1$$) {
    $icon$$6$$.attr("title") || $icon$$6$$.attr("title", $itemLabel$$1$$);
  }, $_removeToolTipOnIcon$:function($icon$$7$$) {
    $icon$$7$$.data(this.$_NAVLIST_ITEM_ICON_HAS_TITLE$) ? $icon$$7$$.removeData(this.$_NAVLIST_ITEM_ICON_HAS_TITLE$) : $icon$$7$$.removeAttr("title");
  }, $itemRenderComplete$:function($elem$$102$$, $context$$115$$) {
    var $$item$$3$$ = $$$$19$$($elem$$102$$);
    if ($$item$$3$$.hasClass(this.$_CATEGORY_DIVIDER_STYLE_CLASS$)) {
      $$item$$3$$.removeClass(this.$getItemElementStyleClass$()), $$item$$3$$.removeClass(this.$getFocusedElementStyleClass$()), $$item$$3$$.removeClass(this.$getItemStyleClass$()), $$item$$3$$.removeAttr("aria-selected"), $$item$$3$$.children().remove(), $$item$$3$$.attr("role", "separator");
    } else {
      var $collapseIconClass$$1_icon$$8$$ = this.$getCollapseIconStyleClass$(), $expandIconClass$$1_groupIcon$$ = this.$getExpandIconStyleClass$(), $itemIconClass_itemLabel$$2$$ = this.$_ITEM_ICON_STYLE_CLASS$, $groupItem$$21$$ = $$item$$3$$.children("." + this.$getGroupItemStyleClass$()), $itemContent$$12$$;
      0 < $groupItem$$21$$.length ? ($groupItem$$21$$.addClass(this.$getItemStyleClass$()), $itemContent$$12$$ = $groupItem$$21$$.children(":not(." + $expandIconClass$$1_groupIcon$$ + "):not(." + $collapseIconClass$$1_icon$$8$$ + ")"), $expandIconClass$$1_groupIcon$$ = $groupItem$$21$$.children("." + $expandIconClass$$1_groupIcon$$), 0 === $expandIconClass$$1_groupIcon$$.length && ($expandIconClass$$1_groupIcon$$ = $groupItem$$21$$.children("." + $collapseIconClass$$1_icon$$8$$)), $expandIconClass$$1_groupIcon$$.attr("role", 
      "presentation"), $expandIconClass$$1_groupIcon$$.removeAttr("aria-labelledby"), $$item$$3$$.hasClass("oj-disabled") && $groupItem$$21$$.addClass("oj-disabled")) : $itemContent$$12$$ = $$item$$3$$.children().first();
      $itemContent$$12$$.addClass(this.$ITEM_CONTENT_STYLE_CLASS$);
      $collapseIconClass$$1_icon$$8$$ = $itemContent$$12$$.wrapInner('\x3cspan class\x3d"' + this.$_ITEM_LABEL_STYLE_CLASS$ + '"\x3e\x3c/span\x3e').find("." + $itemIconClass_itemLabel$$2$$);
      0 < $collapseIconClass$$1_icon$$8$$.length ? ($collapseIconClass$$1_icon$$8$$.insertBefore($collapseIconClass$$1_icon$$8$$.parent()), $collapseIconClass$$1_icon$$8$$.attr("title") && $collapseIconClass$$1_icon$$8$$.data(this.$_NAVLIST_ITEM_ICON_HAS_TITLE$, $collapseIconClass$$1_icon$$8$$.attr("title")), "icons" === this.$ojContext$.options.display && (this.$ojContext$.element.addClass(this.$_ICON_ONLY_STYLE_CLASS$), $itemIconClass_itemLabel$$2$$ = this.$getItemLabel$($$item$$3$$), $collapseIconClass$$1_icon$$8$$.attr("aria-label", 
      $itemIconClass_itemLabel$$2$$), $collapseIconClass$$1_icon$$8$$.attr("role", "img"), this.$_setToolTipOnIcon$($collapseIconClass$$1_icon$$8$$, $itemIconClass_itemLabel$$2$$)), $$item$$3$$.closest("ul").addClass(this.$_NAVLIST_HAS_ICONS$)) : $itemContent$$12$$.addClass(this.$_NAVLIST_ITEM_HAS_NO_ICON$);
      $$item$$3$$.hasClass("oj-disabled") ? this.$getFocusItem$($$item$$3$$).attr("aria-disabled", "true") : 0 < $groupItem$$21$$.length ? $groupItem$$21$$.addClass("oj-default") : $$item$$3$$.addClass("oj-default");
      this.$m_listHandler$.$ModifyListItem$($$item$$3$$, $itemContent$$12$$);
      $_ojNavigationListView$$.$superclass$.$itemRenderComplete$.apply(this, arguments);
    }
  }, getNodeBySubId:function($item$$111_key$$130_locator$$28$$) {
    var $subId$$34$$;
    if (null === $item$$111_key$$130_locator$$28$$) {
      return this.element ? this.element[0] : null;
    }
    $subId$$34$$ = $item$$111_key$$130_locator$$28$$.subId;
    return "oj-navigationlist-item" === $subId$$34$$ ? ($item$$111_key$$130_locator$$28$$ = $item$$111_key$$130_locator$$28$$.key, $item$$111_key$$130_locator$$28$$ = this.$FindElementByKey$($item$$111_key$$130_locator$$28$$)) : "oj-navigationlist-previous-link" === $subId$$34$$ ? this.$m_listHandler$.$_previousLink$ ? this.$m_listHandler$.$_previousLink$[0] : null : "oj-navigationlist-hierarchical-button" === $subId$$34$$ ? this.$m_listHandler$.$_hviewBtn$ ? this.$m_listHandler$.$_hviewBtn$[0] : 
    null : "oj-navigationlist-hierarchical-menu" === $subId$$34$$ ? this.$m_listHandler$.$_hviewMenu$ ? this.$m_listHandler$.$_hviewMenu$[0] : null : null;
  }, getSubIdByNode:function($item$$112_key$$131_node$$78$$) {
    if (this.$m_listHandler$.$_previousLink$ && this.$m_listHandler$.$_previousLink$[0] === $item$$112_key$$131_node$$78$$) {
      return{subId:"oj-navigationlist-previous-link"};
    }
    if (this.$m_listHandler$.$_hviewBtn$ && this.$m_listHandler$.$_hviewBtn$[0] === $item$$112_key$$131_node$$78$$) {
      return{subId:"oj-navigationlist-hierarchical-button"};
    }
    if (this.$m_listHandler$.$_hviewMenu$ && this.$m_listHandler$.$_hviewMenu$[0] === $item$$112_key$$131_node$$78$$) {
      return{subId:"oj-navigationlist-hierarchical-menu"};
    }
    $item$$112_key$$131_node$$78$$ = this.$FindItem$($item$$112_key$$131_node$$78$$);
    return null != $item$$112_key$$131_node$$78$$ && 0 < $item$$112_key$$131_node$$78$$.length && ($item$$112_key$$131_node$$78$$ = this.$GetKey$($item$$112_key$$131_node$$78$$[0]), null != $item$$112_key$$131_node$$78$$) ? {subId:"oj-navigationlist-item", key:$item$$112_key$$131_node$$78$$} : null;
  }, getContextByNode:function($context$$116_node$$79$$) {
    return($context$$116_node$$79$$ = $_ojNavigationListView$$.$superclass$.getContextByNode.call(this, $context$$116_node$$79$$)) && "oj-listview-item" == $context$$116_node$$79$$.subId ? ($context$$116_node$$79$$.subId = "oj-navigationlist-item", $context$$116_node$$79$$) : null;
  }, refresh:function() {
    this.$_resetNavlist$();
    this.$_initListHandler$();
    $_ojNavigationListView$$.$superclass$.refresh.apply(this, arguments);
  }, $_resetNavlist$:function() {
    this.$ojContext$.element.removeClass(this.$_ICON_ONLY_STYLE_CLASS$);
    this.$ojContext$.element.removeClass(this.$_APPLICATION_LEVEL_NAV_STYLE_CLASS$);
    this.$ojContext$.element.removeClass(this.$_PAGE_LEVEL_NAV_STYLE_CLASS$);
    this.$_restoreContent$(this.element);
    this.$m_listHandler$.$Destroy$();
  }, destroy:function() {
    this.$_resetNavlist$();
    $_ojNavigationListView$$.$superclass$.destroy.apply(this, arguments);
    this.$_list$.unwrap();
    this.$_list$.is(":empty") && this.$_list$.remove();
    this.$ojContext$.element.removeClass(this.$_NAVLIST_STYLE_CLASS$ + " " + this.$_NAVLIST_TOUCH_STYLE_CLASS$);
    this.$ojContext$._off(this.element, "click");
    this.$ojContext$._off(this.element, "focus");
    this.$ojContext$._off(this.element, "blur");
    this.$ojContext$._off(this.element, "mouseover");
    this.$ojContext$._off(this.element, "mousein");
    this.$ojContext$._off(this.element, "mouseout");
    this.$ojContext$._off(this.element, "keydown");
  }});
  (function() {
    $oj$$20$$.$__registerWidget$("oj.ojNavigationList", $$$$19$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{currentItem:null, drillMode:"none", edge:"start", hierarchyMenuDisplayThresholdLevel:0, rootLabel:null, selection:null, expanded:"auto", data:null, display:"all", navigationLevel:"page", item:{renderer:null, selectable:!0}, beforeSelect:null, beforeCollapse:null, beforeCurrentItem:null, collapse:null, beforeExpand:null, expand:null, optionChange:null}, _ComponentCreate:function() {
      this._super();
      this.$_setup$();
    }, $_AfterCreate$:function() {
      this._super();
      this.$navlist$.$afterCreate$();
    }, $_NotifyContextMenuGesture$:function($menu$$8$$, $event$$478$$, $eventType$$38$$) {
      this.$navlist$.$notifyContextMenuGesture$($menu$$8$$, $event$$478$$, $eventType$$38$$);
    }, $_setup$:function() {
      for (var $key$$132_opts$$28$$ in this.options) {
        this.$_validateOptionValues$($key$$132_opts$$28$$, this.options[$key$$132_opts$$28$$]);
      }
      this.$_validateOptionsForIconsOnlyAndHorizontalList$(this.options.drillMode, this.options.display, this.options.edge);
      this.$navlist$ = new $_ojNavigationListView$$;
      $key$$132_opts$$28$$ = {$ojContext$:this};
      $key$$132_opts$$28$$ = $$$$19$$.extend(this.options, $key$$132_opts$$28$$);
      this.$navlist$.$init$($key$$132_opts$$28$$);
    }, getNodeBySubId:function($locator$$29$$) {
      return this.$navlist$.getNodeBySubId($locator$$29$$);
    }, getSubIdByNode:function($node$$80$$) {
      return this.$navlist$.getSubIdByNode($node$$80$$);
    }, getContextByNode:function($node$$81$$) {
      return this.$navlist$.getContextByNode($node$$81$$);
    }, expand:function($key$$133$$, $vetoable$$2$$) {
      this.$navlist$.$expandKey$($key$$133$$, $vetoable$$2$$, !0, !0);
    }, collapse:function($key$$134$$, $vetoable$$3$$) {
      this.$navlist$.$collapseKey$($key$$134$$, $vetoable$$3$$, !0);
    }, getExpanded:function() {
      return this.$navlist$.getExpanded();
    }, $_validateOptionsForIconsOnlyAndHorizontalList$:function($drillMode$$2$$, $display$$1$$, $edge$$1$$) {
      if ("none" !== $drillMode$$2$$) {
        if ("icons" === $display$$1$$) {
          throw "Icon only navigation list should have drillMode set to 'none'.";
        }
        if ("top" === $edge$$1$$) {
          throw "Horizontal navigation list should have drillMode set to 'none'.";
        }
      }
    }, $_validateOptionValues$:function($key$$135$$, $value$$270$$) {
      var $valid$$9$$ = !0;
      "drillMode" === $key$$135$$ ? $valid$$9$$ = "none" === $value$$270$$ || "collapsible" === $value$$270$$ || "sliding" === $value$$270$$ : "display" === $key$$135$$ ? $valid$$9$$ = "all" === $value$$270$$ || "icons" === $value$$270$$ : "edge" === $key$$135$$ && ($valid$$9$$ = "top" === $value$$270$$ || "start" === $value$$270$$);
      if (!$valid$$9$$) {
        throw "Invalid value: " + $value$$270$$ + " for key: " + $key$$135$$;
      }
    }, _setOption:function($key$$136$$, $value$$271$$) {
      this.$_validateOptionValues$($key$$136$$, $value$$271$$);
      switch($key$$136$$) {
        case "drillMode":
          this.$_validateOptionsForIconsOnlyAndHorizontalList$($value$$271$$, this.options.display, this.options.edge);
          break;
        case "display":
          this.$_validateOptionsForIconsOnlyAndHorizontalList$(this.options.drillMode, $value$$271$$, this.options.edge);
          break;
        case "edge":
          this.$_validateOptionsForIconsOnlyAndHorizontalList$(this.options.drillMode, this.options.display, $value$$271$$);
      }
      return this._super($key$$136$$, $value$$271$$);
    }, _setOptions:function($options$$277$$, $flags$$31$$) {
      var $key$$137$$, $result$$54$$ = this.$navlist$.$setOptions$($options$$277$$, $flags$$31$$);
      for ($key$$137$$ in $options$$277$$) {
        0 > $result$$54$$.$skipOptions$.indexOf($key$$137$$) && this._setOption($key$$137$$, $options$$277$$[$key$$137$$], $flags$$31$$);
      }
      $result$$54$$.$needRefresh$ && this.$navlist$.refresh();
      return this;
    }, $_NotifyDetached$:function() {
      this.$navlist$.$notifyDetached$();
    }, $_NotifyShown$:function() {
    }, refresh:function() {
      this._super();
      this.$navlist$.refresh();
    }, whenReady:function() {
      return this.$navlist$.whenReady();
    }, _destroy:function() {
      this.$navlist$.destroy();
      this._super();
      delete this.$navlist$;
    }});
    $oj$$20$$.Components.$setDefaultOptions$({ojNavigationList:{hierarchyMenuDisplayThresholdLevel:$oj$$20$$.Components.$createDynamicPropertyGetter$(function() {
      return($oj$$20$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-navigationlist-option-defaults") || {}).hierarchyMenuDisplayThresholdLevel;
    })}});
  })();
});
