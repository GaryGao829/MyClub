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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$84$$, $$$$76$$) {
  (function() {
    $oj$$84$$.$__registerWidget$("oj.ojMenu", $$$$76$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", delay:300, role:"menu", widgetEventPrefix:"oj", options:{menuSelector:"ul", openOptions:{initialFocus:"menu", launcher:null, position:{my:"start top", at:"start bottom", collision:"flipfit"}}, submenuOpenOptions:{position:{my:"start top", at:"end top", collision:"flipfit"}}, beforeOpen:null, close:null, open:null, select:null}, _ComponentCreate:function() {
      this._super();
      var $self$$257$$ = this;
      this._focusForTesting = this.$_focus$;
      this._nextForTesting = this.$_next$;
      this._selectForTesting = this.$_select$;
      this.$activeMenu$ = this.element;
      this.$mouseHandled$ = !1;
      this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role, tabIndex:"0"});
      this._on(!0, {"mousedown .oj-menu-item":function($event$$821$$) {
        this.options.disabled && $event$$821$$.preventDefault();
      }, click:function($event$$822$$) {
        this.options.disabled && $event$$822$$.preventDefault();
      }, keydown:function($event$$823$$) {
        !this.options.disabled || $event$$823$$.keyCode !== $$$$76$$.ui.keyCode.ESCAPE && $event$$823$$.keyCode !== $$$$76$$.ui.keyCode.TAB || ($event$$823$$.keyCode === $$$$76$$.ui.keyCode.TAB && $event$$823$$.preventDefault(), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$823$$));
      }});
      this.options.disabled && this.element.addClass("oj-disabled").attr("aria-disabled", "true");
      var $handleMouseEnterMenuItem$$ = function($event$$824$$) {
        if (!this.$focusHandled$) {
          this.$focusHandled$ = !0;
          var $target$$148$$ = $$$$76$$($event$$824$$.currentTarget);
          try {
            this.$_focusIsFromPointer$ = !0, this.$_focus$($event$$824$$, $target$$148$$);
          } finally {
            this.$_focusIsFromPointer$ = !1;
          }
        }
      }.bind(this);
      this._on({"mousedown .oj-menu-item \x3e a":function($event$$825$$) {
        $event$$825$$.preventDefault();
      }, "click .oj-disabled \x3e a":function($event$$826$$) {
        $event$$826$$.preventDefault();
      }, click:function() {
        this.$mouseHandled$ = !1;
      }, touchstart:function() {
        this.$focusHandled$ = !1;
      }, mouseover:function() {
        this.$focusHandled$ = !1;
      }, "click .oj-menu-item:has(a)":function($event$$830$$) {
        var $target$$149$$ = $$$$76$$($event$$830$$.target).closest(".oj-menu-item");
        !this.$mouseHandled$ && $target$$149$$.not(".oj-disabled").length && (this.$mouseHandled$ = !0, $event$$830$$.preventDefault(), this.$active$ && this.$active$.closest($target$$149$$).length && this.$active$.get(0) != $target$$149$$.get(0) || ($target$$149$$.has(".oj-menu").length ? this.$_expand$($event$$830$$) : (this.$_select$($event$$830$$), this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.$active$ && 1 === this.$active$.parents(".oj-menu").length && clearTimeout(this.$timer$)))));
      }, "mouseenter .oj-menu-item":$handleMouseEnterMenuItem$$, "touchstart .oj-menu-item":$handleMouseEnterMenuItem$$, mouseleave:function($event$$831$$) {
        this.$_collapse$($event$$831$$, "eventSubtree");
      }, "mouseleave .oj-menu":function($event$$832$$) {
        this.$_collapse$($event$$832$$, "eventSubtree");
      }, focus:function($event$$833$$, $keepActiveItem$$) {
        if (!$keepActiveItem$$) {
          var $item$$137$$ = this.$active$ || this.element.children(".oj-menu-item").eq(0);
          this.$_focus$($event$$833$$, $item$$137$$);
        }
      }, keydown:this.$_keydown$, keyup:function($event$$834$$) {
        if ($event$$834$$.keyCode == $$$$76$$.ui.keyCode.ENTER || $event$$834$$.keyCode == $$$$76$$.ui.keyCode.SPACE) {
          this.$__spaceEnterDownInMenu$ = !1;
        }
      }});
      this._focusable({applyHighlight:!$_IS_MAC_SAFARI$$, recentPointer:function() {
        return $self$$257$$.$_focusIsFromPointer$;
      }, setupHandlers:function($focusInHandler$$3$$, $focusOutHandler$$3$$) {
        $self$$257$$.$_focusInHandler$ = $focusInHandler$$3$$;
        $self$$257$$.$_focusOutHandler$ = $focusOutHandler$$3$$;
      }});
      this.$_usingCallback$ = $$$$76$$.proxy(this.$_usingHandler$, this);
      this.$_setup$();
    }, $__contextMenuPressHoldJustEnded$:function($val$$96$$) {
      if (arguments.length) {
        $_contextMenuPressHoldJustEnded$$ = $val$$96$$;
      } else {
        return $_contextMenuPressHoldJustEnded$$;
      }
    }, $_clickAwayHandler$:function($event$$835$$) {
      if (("focus" === $event$$835$$.type || "mousedown" === $event$$835$$.type || "touchstart" === $event$$835$$.type || 93 == $event$$835$$.which || 121 == $event$$835$$.which && $event$$835$$.shiftKey || 93 == $event$$835$$.keyCode) && ("mousedown" !== $event$$835$$.type || !$_contextMenuPressHoldJustEnded$$)) {
        var $openPopupMenus$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
        $$$$76$$.each($openPopupMenus$$, function($index$$354$$, $menu$$26$$) {
          !$$$$76$$($event$$835$$.target).closest($menu$$26$$.element).length && ("keydown" === $event$$835$$.type || "mousedown" === $event$$835$$.type && 3 === $event$$835$$.which || !$$$$76$$($event$$835$$.target).closest($menu$$26$$.$_launcher$).length || $menu$$26$$.$_launcherClickShouldDismiss$ && ("mousedown" === $event$$835$$.type && 3 !== $event$$835$$.which || "touchstart" === $event$$835$$.type)) && ($menu$$26$$.$_collapse$($event$$835$$, "eventSubtree"), $menu$$26$$.$_launcher$ && $menu$$26$$.$__dismiss$($event$$835$$));
        });
      }
    }, _setOption:function($key$$216$$, $value$$339$$) {
      this._superApply(arguments);
      this.$_launcher$ || ("submenuOpenOptions" === $key$$216$$ ? this.$_submenuPosition$ = $oj$$84$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$339$$.position, this.$isRtl$) : "submenuOpenOptions.position" === $key$$216$$ && (this.$_submenuPosition$ = $oj$$84$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$339$$, this.$isRtl$)));
    }, _destroy:function() {
      this.element.is(":visible") && this.$__dismiss$();
      clearTimeout(this.$timer$);
      delete this.$timer$;
      this.element.removeAttr("aria-activedescendant").removeClass("oj-component").find(".oj-menu").addBack().removeClass("oj-menu oj-menu-submenu oj-menu-icons oj-menu-text-only").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var $elem$$210$$ = $$$$76$$(this);
        $elem$$210$$.data("oj-ojMenu-submenu-icon") && $elem$$210$$.remove();
      });
      this.element.find("a").removeAttr("aria-expanded");
      this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
      delete this.$_popupServiceEvents$;
      delete this.$_usingCallback$;
      var $closeDelayTimer$$2$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$2$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$2$$));
      this._super();
    }, $_keydown$:function($event$$836$$) {
      function $escape$$1$$($value$$340$$) {
        return $value$$340$$.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26");
      }
      var $match$$28_prev$$7$$, $activeItemId_character$$1$$, $skip$$5_topLevelAnchorSelector$$, $regex$$1$$, $preventDefault$$ = !0;
      switch($event$$836$$.keyCode) {
        case $$$$76$$.ui.keyCode.HOME:
          this.$_move$("first", "first", $event$$836$$);
          break;
        case $$$$76$$.ui.keyCode.END:
          this.$_move$("last", "last", $event$$836$$);
          break;
        case $$$$76$$.ui.keyCode.UP:
          this.$_previous$($event$$836$$);
          break;
        case $$$$76$$.ui.keyCode.DOWN:
          this.$_next$($event$$836$$);
          break;
        case $$$$76$$.ui.keyCode.LEFT:
        ;
        case $$$$76$$.ui.keyCode.RIGHT:
          $event$$836$$.keyCode === $$$$76$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? this.$active$ && !this.$active$.is(".oj-disabled") && this.$_expand$($event$$836$$) : this.$_collapse$($event$$836$$, "active");
          break;
        case $$$$76$$.ui.keyCode.ENTER:
        ;
        case $$$$76$$.ui.keyCode.SPACE:
          this.$_handleEnterSpace$($event$$836$$);
          this.$__spaceEnterDownInMenu$ = !0;
          var $self$$258$$ = this;
          setTimeout(function() {
            $self$$258$$.$__spaceEnterDownInMenu$ = !1;
          }, 100);
          break;
        case $$$$76$$.ui.keyCode.TAB:
          $event$$836$$.preventDefault();
          this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$836$$);
          break;
        case $$$$76$$.ui.keyCode.ESCAPE:
          this.$_launcher$ ? ($activeItemId_character$$1$$ = this.element.attr("aria-activedescendant"), $skip$$5_topLevelAnchorSelector$$ = "#" + this.element.attr("id") + "\x3e*\x3ea", $activeItemId_character$$1$$ && !$$$$76$$("#" + $activeItemId_character$$1$$).is($skip$$5_topLevelAnchorSelector$$) ? this.$_collapse$($event$$836$$, "active") : this.$_focusLauncherAndDismiss$($event$$836$$)) : this.$_collapse$($event$$836$$, "active");
          break;
        default:
          $preventDefault$$ = !1, $match$$28_prev$$7$$ = this.$previousFilter$ || "", $activeItemId_character$$1$$ = String.fromCharCode($event$$836$$.keyCode), $skip$$5_topLevelAnchorSelector$$ = !1, clearTimeout(this.$filterTimer$), $activeItemId_character$$1$$ === $match$$28_prev$$7$$ ? $skip$$5_topLevelAnchorSelector$$ = !0 : $activeItemId_character$$1$$ = $match$$28_prev$$7$$ + $activeItemId_character$$1$$, $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$28_prev$$7$$ = 
          this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$76$$(this).children("a").text());
          }), $match$$28_prev$$7$$ = $skip$$5_topLevelAnchorSelector$$ && -1 !== $match$$28_prev$$7$$.index(this.$active$.next()) ? this.$active$.nextAll(".oj-menu-item") : $match$$28_prev$$7$$, $match$$28_prev$$7$$.length || ($activeItemId_character$$1$$ = String.fromCharCode($event$$836$$.keyCode), $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$28_prev$$7$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$76$$(this).children("a").text());
          })), $match$$28_prev$$7$$.length ? (this.$_focus$($event$$836$$, $match$$28_prev$$7$$), 1 < $match$$28_prev$$7$$.length ? (this.$previousFilter$ = $activeItemId_character$$1$$, this.$filterTimer$ = this._delay(function() {
            delete this.$previousFilter$;
          }, 1E3)) : delete this.$previousFilter$) : delete this.$previousFilter$;
      }
      $preventDefault$$ && $event$$836$$.preventDefault();
    }, $_handleEnterSpace$:function($event$$837$$) {
      this.$active$ && !this.$active$.is(".oj-disabled") && (this.$active$.children("a[aria-haspopup\x3d'true']").length ? this.$_expand$($event$$837$$) : this.$_select$($event$$837$$));
    }, refresh:function() {
      this._super();
      this.$_setup$();
      var $element$$255$$ = this.element;
      if ($element$$255$$.is(":visible")) {
        var $position$$57$$ = $element$$255$$.data("oj-menu-position");
        $position$$57$$ && $element$$255$$.position($position$$57$$);
        $element$$255$$.find(".oj-menu").each(function() {
          var $menu$$27$$ = $$$$76$$(this);
          $menu$$27$$.is(":visible") && ($position$$57$$ = $menu$$27$$.data("oj-menu-position")) && $menu$$27$$.position($position$$57$$);
        });
      }
    }, $_setup$:function() {
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_submenuPosition$ = $oj$$84$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.submenuOpenOptions.position, this.$isRtl$);
      var $self$$259$$ = this, $submenus$$ = this.element.find(this.options.menuSelector), $menus$$ = $submenus$$.add(this.element), $children$$34$$ = $menus$$.children();
      $children$$34$$.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
      $children$$34$$.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role", "presentation").children("a").uniqueId().attr({tabIndex:"-1", role:"menuitem"});
      $children$$34$$.filter(":not(.oj-menu-item)").each(function() {
        var $item$$138$$ = $$$$76$$(this);
        /[^\-\u2014\u2013\s]/.test($item$$138$$.text()) || $item$$138$$.addClass("oj-menu-divider").attr("role", "separator");
      });
      $children$$34$$.filter(".oj-disabled").children("a").attr("aria-disabled", "true");
      $children$$34$$.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");
      $submenus$$.filter(":not(.oj-menu)").addClass("oj-menu oj-menu-submenu").hide().attr({role:this.role, "aria-hidden":"true"}).each(function() {
        var $menu$$28$$ = $$$$76$$(this), $item$$139_itemId$$1$$ = $self$$259$$.$_getSubmenuAnchor$($menu$$28$$), $submenuIcon$$ = $$$$76$$("\x3cspan\x3e");
        $submenuIcon$$.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon", !0);
        $item$$139_itemId$$1$$.attr("aria-haspopup", "true").attr("aria-expanded", "false").append($submenuIcon$$);
        $item$$139_itemId$$1$$ = $item$$139_itemId$$1$$.attr("id");
        $menu$$28$$.attr("aria-labelledby", $item$$139_itemId$$1$$);
      });
      $menus$$.each(function() {
        var $menu$$29$$ = $$$$76$$(this), $iconCount$$ = $menu$$29$$.children().children().children(".oj-menu-item-icon").length;
        $menu$$29$$.toggleClass("oj-menu-icons", !!$iconCount$$).toggleClass("oj-menu-text-only", !$iconCount$$);
      });
      this.$active$ && !$$$$76$$.contains(this.element[0], this.$active$[0]) && this.$_blur$();
    }, $_getSubmenuAnchor$:function($submenu$$) {
      return $submenu$$.prev("a");
    }, $_itemRole$:function() {
      return "menuitem";
    }, $_getAdjacentDividers$:function($menuItem$$2$$, $includeItem$$) {
      var $result$$88$$ = $menuItem$$2$$.prev(".oj-menu-divider").add($menuItem$$2$$.next(".oj-menu-divider"));
      $includeItem$$ && ($result$$88$$ = $result$$88$$.add($menuItem$$2$$));
      return $result$$88$$;
    }, $_focus$:function($event$$838$$, $item$$140$$) {
      $event$$838$$ && "focus" === $event$$838$$.type || clearTimeout(this.$timer$);
      $item$$140$$ = $item$$140$$.first();
      this.$_makeActive$($item$$140$$, $event$$838$$);
      var $containingMenu_nested$$1$$ = $item$$140$$.parent(), $parentMenuItem$$ = $containingMenu_nested$$1$$.closest(".oj-menu-item");
      $containingMenu_nested$$1$$.find(".oj-focus-ancestor").removeClass("oj-focus-ancestor");
      this.$_getAdjacentDividers$($parentMenuItem$$, !0).addClass("oj-focus-ancestor");
      $event$$838$$ && "keydown" === $event$$838$$.type ? this.$_close$() : this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
      }, this.delay);
      $containingMenu_nested$$1$$ = $item$$140$$.children(".oj-menu");
      $containingMenu_nested$$1$$.length && $event$$838$$ && /^mouse/.test($event$$838$$.type) && !this.$active$.hasClass("oj-disabled") && this.$_startOpening$($containingMenu_nested$$1$$);
      this.$activeMenu$ = $item$$140$$.parent();
    }, $_makeActive$:function($item$$141$$, $event$$839$$) {
      if (!$item$$141$$.is(this.$active$)) {
        var $previousItem$$2$$ = this.$active$ ? this.$active$ : $$$$76$$(), $anchor$$8$$ = $item$$141$$.children("a");
        this.$active$ = $item$$141$$;
        this.element.attr("aria-activedescendant", $anchor$$8$$.attr("id"));
        this.$_focusOutHandler$($previousItem$$2$$);
        this.$_focusInHandler$($item$$141$$);
        this.$_getAdjacentDividers$($previousItem$$2$$).removeClass("oj-focus");
        this.$_getAdjacentDividers$($item$$141$$).addClass("oj-focus");
        this._trigger("_activeItem", $event$$839$$, {previousItem:$previousItem$$2$$, item:$item$$141$$, privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_removeActive$:function($event$$840$$) {
      if (this.$active$) {
        var $previousItem$$3$$ = this.$active$;
        this.$active$ = null;
        this.element.removeAttr("aria-activedescendant");
        this.$_focusOutHandler$($previousItem$$3$$);
        this.$_getAdjacentDividers$($previousItem$$3$$).removeClass("oj-focus");
        this._trigger("_activeItem", $event$$840$$, {previousItem:$previousItem$$3$$, item:$$$$76$$(), privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_blur$:function($event$$841$$) {
      clearTimeout(this.$timer$);
      this.$_removeActive$($event$$841$$);
    }, $_focusLauncherAndDismiss$:function($event$$842$$, $selectUi$$) {
      this.$_launcher$.focus();
      this.$__dismiss$($event$$842$$, $selectUi$$);
    }, $__dismiss$:function($event$$843$$, $selectUi$$1$$) {
      var $isOpen$$3$$ = this.element.is(":visible"), $psOptions$$8$$ = {};
      $psOptions$$8$$[$oj$$84$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
      $oj$$84$$.$PopupService$.$getInstance$().close($psOptions$$8$$);
      this.element.removeData("oj-menu-position");
      this.$_launcher$ = void 0;
      $selectUi$$1$$ && ($event$$843$$ = this.$_trigger2$("select", $event$$843$$, $selectUi$$1$$).event);
      $isOpen$$3$$ && this._trigger("close", $event$$843$$, {});
      this.$_currentOpenOptions$ = null;
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, getCurrentOpenOptions:function() {
      return $$$$76$$.extend(!0, {}, this.$_currentOpenOptions$ || this.options.openOptions);
    }, open:function($event$$844$$, $initialFocus$$2_openOptions$$7$$, $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$) {
      $initialFocus$$2_openOptions$$7$$ = $$$$76$$.extend({}, this.options.openOptions, $initialFocus$$2_openOptions$$7$$);
      $initialFocus$$2_openOptions$$7$$.position = $$$$76$$.extend({}, $initialFocus$$2_openOptions$$7$$.position);
      $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = $$$$76$$.extend({}, this.options.submenuOpenOptions, $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$);
      var $launcher$$26_oldOpenOptions$$ = this.$_currentOpenOptions$;
      this.$_currentOpenOptions$ = $initialFocus$$2_openOptions$$7$$;
      $oj$$84$$.$PositionUtils$.$_normalizeEventForPosition$($event$$844$$);
      this.$_launcherClickShouldDismiss$ = this.$__openingContextMenu$;
      var $beforeOpenResults_position$$58$$ = this.$_trigger2$("beforeOpen", $event$$844$$, {openOptions:$initialFocus$$2_openOptions$$7$$});
      if ($beforeOpenResults_position$$58$$.proceed) {
        if (this.element.is(":visible") && (this.$_currentOpenOptions$ = $launcher$$26_oldOpenOptions$$, this.$__dismiss$($beforeOpenResults_position$$58$$.event), this.$_currentOpenOptions$ = $initialFocus$$2_openOptions$$7$$), $launcher$$26_oldOpenOptions$$ = $initialFocus$$2_openOptions$$7$$.launcher, ($launcher$$26_oldOpenOptions$$ = "string" === $$$$76$$.type($launcher$$26_oldOpenOptions$$) ? $$$$76$$($launcher$$26_oldOpenOptions$$) : $launcher$$26_oldOpenOptions$$) && $launcher$$26_oldOpenOptions$$.length) {
          if ($beforeOpenResults_position$$58$$ = $oj$$84$$.$PositionUtils$.$normalizeHorizontalAlignment$($initialFocus$$2_openOptions$$7$$.position, this.$isRtl$), $beforeOpenResults_position$$58$$.of = $oj$$84$$.$PositionUtils$.$normalizePositionOf$($beforeOpenResults_position$$58$$.of, $launcher$$26_oldOpenOptions$$, $event$$844$$), null == $beforeOpenResults_position$$58$$.of) {
            $oj$$84$$.$Logger$.warn("position.of passed to Menu.open() is 'event', but the event is null.  Ignoring the call."), this.$_currentOpenOptions$ = null;
          } else {
            var $currentMenu$$ = this.element[0], $openPopupMenus$$1$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
            $$$$76$$.each($openPopupMenus$$1$$, function($index$$355$$, $menu$$30$$) {
              $menu$$30$$.element[0] !== $currentMenu$$ && ($menu$$30$$.$_collapse$($event$$844$$, "eventSubtree"), $menu$$30$$.$_launcher$ && $menu$$30$$.$__dismiss$($event$$844$$));
            });
            this.$_submenuPosition$ = $oj$$84$$.$PositionUtils$.$normalizeHorizontalAlignment$($focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$.position, this.$isRtl$);
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = this.$_usingCallback$;
            $$$$76$$.isFunction($beforeOpenResults_position$$58$$.using) && $beforeOpenResults_position$$58$$.using !== $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ && ($beforeOpenResults_position$$58$$.origUsing = $beforeOpenResults_position$$58$$.using);
            $beforeOpenResults_position$$58$$.using = $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$;
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = {};
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$84$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$84$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$26_oldOpenOptions$$;
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$84$$.$PopupService$.$OPTION$.$POSITION$] = $beforeOpenResults_position$$58$$;
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$84$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$84$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-menu-layer";
            $oj$$84$$.$PopupService$.$getInstance$().open($focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$);
            this.element.data("oj-menu-position", $beforeOpenResults_position$$58$$);
            $initialFocus$$2_openOptions$$7$$ = $initialFocus$$2_openOptions$$7$$.initialFocus;
            (($focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = "firstItem" === $initialFocus$$2_openOptions$$7$$) || "menu" === $initialFocus$$2_openOptions$$7$$) && this.element.focus();
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ ? this.$_focus$($event$$844$$, this.element.children().first()) : this.$_blur$($event$$844$$);
            this.$_launcher$ = $launcher$$26_oldOpenOptions$$;
            $_openPopupMenus$$.push(this);
            this._trigger("open", $event$$844$$, {});
          }
        } else {
          $oj$$84$$.$Logger$.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call."), this.$_currentOpenOptions$ = null;
        }
      } else {
        this.$_currentOpenOptions$ = $launcher$$26_oldOpenOptions$$;
      }
    }, $_startOpening$:function($submenu$$1$$) {
      clearTimeout(this.$timer$);
      "true" === $submenu$$1$$.attr("aria-hidden") && (this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
        this.$_open$($submenu$$1$$);
      }, this.delay));
    }, $_open$:function($submenu$$2$$) {
      var $position$$59$$ = $$$$76$$.extend({of:this.$active$}, this.$_submenuPosition$);
      clearTimeout(this.$timer$);
      this.element.find(".oj-menu").not($submenu$$2$$.parents(".oj-menu")).hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      $submenu$$2$$.show().removeAttr("aria-hidden").position($position$$59$$).data("oj-menu-position", $position$$59$$);
      this.$_getSubmenuAnchor$($submenu$$2$$).attr("aria-expanded", "true");
      !this.$_launcher$ && 0 > $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.push(this);
    }, $__collapseAll$:function($event$$845$$, $all$$1$$, $delay$$6$$) {
      function $collapseMenu$$() {
        delete $self$$260$$.$timer$;
        var $currentMenu$$1$$ = $all$$1$$ ? $self$$260$$.element : $$$$76$$($event$$845$$ && $event$$845$$.target).closest($self$$260$$.element.find(".oj-menu"));
        $currentMenu$$1$$.length || ($currentMenu$$1$$ = $self$$260$$.element);
        $self$$260$$.$_close$($currentMenu$$1$$);
        $self$$260$$.$_blur$($event$$845$$);
        $self$$260$$.$activeMenu$ = $currentMenu$$1$$;
      }
      clearTimeout(this.$timer$);
      var $self$$260$$ = this;
      $delay$$6$$ ? this.$timer$ = this._delay($collapseMenu$$, $delay$$6$$) : $collapseMenu$$();
    }, $_close$:function($startMenu$$) {
      $startMenu$$ || ($startMenu$$ = this.$active$ ? this.$active$.parent() : this.element);
      var $menus$$1$$ = $startMenu$$.find(".oj-menu");
      $menus$$1$$.hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      this.$_getSubmenuAnchor$($menus$$1$$).attr("aria-expanded", "false");
      $startMenu$$.find(".oj-focus-ancestor").removeClass("oj-focus-ancestor");
      this.$_launcher$ || 0 <= $_openPopupMenus$$.indexOf(this) && $startMenu$$ === this.element && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, $_collapse$:function($event$$846$$, $which$$) {
      if (null == $which$$ || "active" === $which$$) {
        var $newItem$$ = this.$activeMenu$ && this.$activeMenu$.closest(".oj-menu-item", this.element);
        $newItem$$ && $newItem$$.length && (this.$_close$(), this.$_focus$($event$$846$$, $newItem$$));
      } else {
        "all" === $which$$ || "eventSubtree" === $which$$ ? this.$__collapseAll$($event$$846$$, "all" === $which$$, this.delay) : $oj$$84$$.$Logger$.warn("Invalid param " + $which$$ + " passed to Menu._collapse().  Ignoring the call.");
      }
    }, $_expand$:function($event$$847$$) {
      var $newItem$$1$$ = this.$active$ && this.$active$.children(".oj-menu ").children(".oj-menu-item").first();
      $newItem$$1$$ && $newItem$$1$$.length && (this.$_open$($newItem$$1$$.parent()), this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_focus$($event$$847$$, $newItem$$1$$);
      }));
    }, $_next$:function($event$$848$$) {
      this.$_move$("next", "first", $event$$848$$);
    }, $_previous$:function($event$$849$$) {
      this.$_move$("prev", "last", $event$$849$$);
    }, $_isFirstItem$:function() {
      return this.$active$ && !this.$active$.prevAll(".oj-menu-item").length;
    }, $_isLastItem$:function() {
      return this.$active$ && !this.$active$.nextAll(".oj-menu-item").length;
    }, $_move$:function($direction$$25$$, $filter$$5$$, $event$$850$$) {
      var $next$$10$$;
      this.$active$ && ($next$$10$$ = "first" === $direction$$25$$ || "last" === $direction$$25$$ ? this.$active$["first" === $direction$$25$$ ? "prevAll" : "nextAll"](".oj-menu-item").eq(-1) : this.$active$[$direction$$25$$ + "All"](".oj-menu-item").eq(0));
      $next$$10$$ && $next$$10$$.length && this.$active$ || ($next$$10$$ = this.$activeMenu$.children(".oj-menu-item")[$filter$$5$$]());
      this.$_focus$($event$$850$$, $next$$10$$);
    }, $_select$:function($event$$851$$) {
      if (!this.$active$ && $event$$851$$ && $event$$851$$.target) {
        var $menuItem$$3_ui$$54$$ = $$$$76$$($event$$851$$.target).closest(".oj-menu-item");
        $menuItem$$3_ui$$54$$.closest(this.element).length && this.$_makeActive$($menuItem$$3_ui$$54$$, $event$$851$$);
      }
      this.$active$ ? this.$active$.has(".oj-menu").length || this.$active$.is(".oj-disabled") ? $oj$$84$$.$Logger$.warn("Selecting a disabled menu item or parent menu item is not allowed.") : ($menuItem$$3_ui$$54$$ = {item:this.$active$}, this.$__collapseAll$($event$$851$$, !0), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$851$$, $menuItem$$3_ui$$54$$)) : $oj$$84$$.$Logger$.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$17$$ = this.$_popupServiceEvents$ = {};
        $events$$17$$[$oj$$84$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$76$$.proxy(this.$_closeAll$, this);
        $events$$17$$[$oj$$84$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$76$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$17$$[$oj$$84$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$76$$.proxy(this.refresh, this);
        $events$$17$$[$oj$$84$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $$$$76$$.proxy(this.$_clickAwayHandler$, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeAll$:function() {
      this.$_close$(this.element);
      this.$__dismiss$(null);
    }, $_usingHandler$:function($pos$$20$$, $props$$34$$) {
      var $origUsing$$1_position$$60_rootMenu$$ = $props$$34$$.element.element;
      $origUsing$$1_position$$60_rootMenu$$.css($pos$$20$$);
      ($origUsing$$1_position$$60_rootMenu$$ = $origUsing$$1_position$$60_rootMenu$$.data("oj-menu-position")) && ($origUsing$$1_position$$60_rootMenu$$ = $origUsing$$1_position$$60_rootMenu$$.origUsing) && $origUsing$$1_position$$60_rootMenu$$($pos$$20$$, $props$$34$$);
      $oj$$84$$.$PositionUtils$.$isAligningPositionClipped$($props$$34$$) && (this.$_closeDelayTimer$ = this._delay($$$$76$$.proxy(this.$_closeAll$, this), 1));
    }});
    var $_openPopupMenus$$ = [], $_contextMenuPressHoldJustEnded$$ = !1, $_IS_MAC_SAFARI$$ = -1 < navigator.userAgent.indexOf("Macintosh") && -1 < navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome");
  })();
});
