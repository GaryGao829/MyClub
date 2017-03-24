/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$33$$, $$$$30$$) {
  $oj$$33$$.$PullToRefreshUtils$ = {};
  $goog$exportPath_$$("PullToRefreshUtils", $oj$$33$$.$PullToRefreshUtils$, $oj$$33$$);
  $oj$$33$$.$PullToRefreshUtils$.$setupPullToRefresh$ = function $$oj$$33$$$$PullToRefreshUtils$$$setupPullToRefresh$$($element$$215$$, $refreshFunc$$, $options$$334$$) {
    var $outer$$, $content$$26$$, $panel$$, $threshold$$8$$, $start$$57$$, $height$$47$$, $icon$$10$$, $iconOffset$$, $lastIconClass$$, $title$$9$$, $ratio$$, $iconClass$$;
    $outer$$ = $$$$30$$(document.createElement("div"));
    $oj$$33$$.$PullToRefreshUtils$.$_renderAccessibleLink$($outer$$, $refreshFunc$$, $options$$334$$);
    $content$$26$$ = $$$$30$$(document.createElement("div")).addClass("oj-pulltorefresh-panel");
    $outer$$.append($content$$26$$);
    $panel$$ = $$$$30$$($element$$215$$);
    $panel$$.prepend($outer$$);
    $panel$$.on("touchstart.pulltorefresh", function($event$$533$$) {
      null == $$$$30$$.data($content$$26$$[0], "data-pullstart") && 0 === $panel$$[0].scrollTop && ($oj$$33$$.$PullToRefreshUtils$.$_handlePull$($event$$533$$, $content$$26$$, $options$$334$$), $icon$$10$$ = $content$$26$$.find(".oj-pulltorefresh-icon"), 0 < $icon$$10$$.length && ($iconOffset$$ = $icon$$10$$.parent().outerHeight(!0)), $options$$334$$ && !isNaN($options$$334$$.threshold) && ($threshold$$8$$ = parseInt($options$$334$$.threshold, 10)), $threshold$$8$$ = isNaN($threshold$$8$$) ? $content$$26$$.outerHeight(!0) : 
      Math.max(0, Math.min($threshold$$8$$, $content$$26$$.outerHeight(!0))), $content$$26$$.css("height", 0), $content$$26$$.removeClass("oj-pulltorefresh-transition"), $$$$30$$.data($content$$26$$[0], "data-pullstart", $event$$533$$.originalEvent.touches[0].clientY));
    }).on("touchmove.pulltorefresh", function($event$$534$$) {
      $start$$57$$ = $$$$30$$.data($content$$26$$[0], "data-pullstart");
      null != $start$$57$$ && ($height$$47$$ = $event$$534$$.originalEvent.touches[0].clientY - parseInt($start$$57$$, 10), 0 > $height$$47$$ || ($event$$534$$.preventDefault(), null != $$$$30$$.data($content$$26$$[0], "data-loading") ? $content$$26$$.css("height", Math.max($height$$47$$, $threshold$$8$$)) : ($content$$26$$.css("height", $height$$47$$), $oj$$33$$.$PullToRefreshUtils$.$_fireEvent$($event$$534$$, "pull", $content$$26$$, $height$$47$$), null != $icon$$10$$ && 0 < $icon$$10$$.length && 
      ($lastIconClass$$ = $$$$30$$.data($content$$26$$[0], "data-lasticonclass"), null != $lastIconClass$$ && $icon$$10$$.removeClass($lastIconClass$$), $ratio$$ = 10 * Math.round($height$$47$$ / $threshold$$8$$ * 10), 100 <= $ratio$$ ? ($iconClass$$ = "oj-pulltorefresh-icon-full", $title$$9$$ = $oj$$33$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.titleIconFull")) : ($iconClass$$ = "oj-pulltorefresh-icon-" + $ratio$$ + "-percent", $title$$9$$ = $oj$$33$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.titleIcon" + 
      $ratio$$ + "percent")), $icon$$10$$.addClass($iconClass$$), $icon$$10$$.attr("title", $title$$9$$), $$$$30$$.data($content$$26$$[0], "data-lasticonclass", $iconClass$$), $oj$$33$$.$PullToRefreshUtils$.$_showHideDefaultText$($content$$26$$, $height$$47$$ > $iconOffset$$)))));
    }).on("touchcancel.pulltorefresh", function() {
      $oj$$33$$.$PullToRefreshUtils$.$_cleanup$($content$$26$$);
    }).on("touchend.pulltorefresh", function($event$$536$$) {
      $start$$57$$ = $$$$30$$.data($content$$26$$[0], "data-pullstart");
      null != $start$$57$$ && null == $$$$30$$.data($content$$26$$[0], "data-loading") && ($content$$26$$.outerHeight() < $threshold$$8$$ ? ($content$$26$$.addClass("oj-pulltorefresh-transition").css("height", 0), $oj$$33$$.$PullToRefreshUtils$.$_cleanup$($content$$26$$)) : $oj$$33$$.$PullToRefreshUtils$.$_handleRelease$($event$$536$$, $content$$26$$, $refreshFunc$$));
    });
  };
  $goog$exportPath_$$("PullToRefreshUtils.setupPullToRefresh", $oj$$33$$.$PullToRefreshUtils$.$setupPullToRefresh$, $oj$$33$$);
  $oj$$33$$.$PullToRefreshUtils$.$_handlePull$ = function $$oj$$33$$$$PullToRefreshUtils$$$_handlePull$$($event$$537$$, $content$$27$$, $options$$335$$) {
    var $primaryText$$, $secondaryText$$;
    $oj$$33$$.$PullToRefreshUtils$.$_fireEvent$($event$$537$$, "pull", $content$$27$$, 0);
    0 == $content$$27$$.children().length && ($options$$335$$ && ($primaryText$$ = $options$$335$$.primaryText, $secondaryText$$ = $options$$335$$.secondaryText), $oj$$33$$.$PullToRefreshUtils$.$_createDefaultContent$($content$$27$$, $primaryText$$, $secondaryText$$));
    $content$$27$$.prev().text($oj$$33$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.ariaRefreshingLink"));
    $content$$27$$.css("height", "auto");
    $$$$30$$.data($content$$27$$[0], "data-panelheight", $content$$27$$.outerHeight());
  };
  $oj$$33$$.$PullToRefreshUtils$.$_handleRelease$ = function $$oj$$33$$$$PullToRefreshUtils$$$_handleRelease$$($event$$538$$, $content$$28$$, $refreshFunc$$1$$) {
    var $height$$48$$, $icon$$12$$, $lastIconClass$$1$$, $listener$$39$$;
    $height$$48$$ = $$$$30$$.data($content$$28$$[0], "data-panelheight");
    $content$$28$$.addClass("oj-pulltorefresh-transition").css("height", $height$$48$$);
    $oj$$33$$.$PullToRefreshUtils$.$_fireEvent$($event$$538$$, "release", $content$$28$$, $height$$48$$);
    $$$$30$$.data($content$$28$$[0], "data-loading", !0);
    $icon$$12$$ = $content$$28$$.find(".oj-pulltorefresh-icon");
    0 < $icon$$12$$.length && ($lastIconClass$$1$$ = $$$$30$$.data($content$$28$$[0], "data-lasticonclass"), null != $lastIconClass$$1$$ && $icon$$12$$.removeClass($lastIconClass$$1$$), $icon$$12$$.addClass("oj-pulltorefresh-icon-full"));
    $refreshFunc$$1$$().then(function() {
      $listener$$39$$ = function $$listener$$39$$$() {
        $oj$$33$$.$PullToRefreshUtils$.$_fireEvent$($event$$538$$, "complete", $content$$28$$, $height$$48$$);
        $oj$$33$$.$PullToRefreshUtils$.$_cleanup$($content$$28$$);
        $content$$28$$.off("transitionend", $listener$$39$$);
        $content$$28$$.prev().text("");
      };
      $content$$28$$.prev().text($oj$$33$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.ariaRefreshCompleteLink"));
      $content$$28$$.prev().prev().css("position", "");
      $content$$28$$.on("transitionend", $listener$$39$$);
      $content$$28$$.css("height", 0);
    });
  };
  $oj$$33$$.$PullToRefreshUtils$.$tearDownPullToRefresh$ = function $$oj$$33$$$$PullToRefreshUtils$$$tearDownPullToRefresh$$($element$$216$$) {
    $$$$30$$($element$$216$$).children().first().remove();
    $$$$30$$($element$$216$$).off(".pulltorefresh");
  };
  $goog$exportPath_$$("PullToRefreshUtils.tearDownPullToRefresh", $oj$$33$$.$PullToRefreshUtils$.$tearDownPullToRefresh$, $oj$$33$$);
  $oj$$33$$.$PullToRefreshUtils$.$_fireEvent$ = function $$oj$$33$$$$PullToRefreshUtils$$$_fireEvent$$($originalEvent$$3$$, $event$$539_key$$158$$, $content$$29$$, $distance$$1$$) {
    $event$$539_key$$158$$ = $$$$30$$.Event("oj" + $event$$539_key$$158$$);
    $event$$539_key$$158$$.originalEvent = $originalEvent$$3$$;
    $content$$29$$.trigger($event$$539_key$$158$$, {content:$content$$29$$, distance:$distance$$1$$});
  };
  $oj$$33$$.$PullToRefreshUtils$.$_createDefaultContent$ = function $$oj$$33$$$$PullToRefreshUtils$$$_createDefaultContent$$($content$$30$$, $primary_primaryText$$1$$, $secondary$$1_secondaryText$$1$$) {
    var $icon$$13$$, $iconContainer$$;
    $content$$30$$.addClass("oj-pulltorefresh-content").attr("aria-hidden", "true");
    $icon$$13$$ = $$$$30$$(document.createElement("div"));
    $icon$$13$$.addClass("oj-pulltorefresh-icon oj-pulltorefresh-icon-initial");
    $iconContainer$$ = $$$$30$$(document.createElement("div"));
    $iconContainer$$.addClass("oj-pulltorefresh-icon-container");
    $iconContainer$$.append($icon$$13$$);
    $$$$30$$.data($content$$30$$[0], "data-lasticonclass", "oj-pulltorefresh-icon-initial");
    $content$$30$$.append($iconContainer$$);
    null != $primary_primaryText$$1$$ && ($primary_primaryText$$1$$ = $$$$30$$(document.createElement("div")).addClass("oj-pulltorefresh-primary-text").text($primary_primaryText$$1$$), $content$$30$$.append($primary_primaryText$$1$$), null != $secondary$$1_secondaryText$$1$$ && ($secondary$$1_secondaryText$$1$$ = $$$$30$$(document.createElement("div")).addClass("oj-pulltorefresh-secondary-text").text($secondary$$1_secondaryText$$1$$), $content$$30$$.append($secondary$$1_secondaryText$$1$$)));
  };
  $oj$$33$$.$PullToRefreshUtils$.$_showHideDefaultText$ = function $$oj$$33$$$$PullToRefreshUtils$$$_showHideDefaultText$$($content$$31$$, $show$$) {
    var $primaryText$$2$$, $secondaryText$$2$$;
    $primaryText$$2$$ = $content$$31$$.find(".oj-pulltorefresh-primary-text");
    $secondaryText$$2$$ = $content$$31$$.find(".oj-pulltorefresh-secondary-text");
    $show$$ ? ($primaryText$$2$$ && $primaryText$$2$$.show(), $secondaryText$$2$$ && $secondaryText$$2$$.show()) : ($primaryText$$2$$ && $primaryText$$2$$.hide(), $secondaryText$$2$$ && $secondaryText$$2$$.hide());
  };
  $oj$$33$$.$PullToRefreshUtils$.$_renderAccessibleLink$ = function $$oj$$33$$$$PullToRefreshUtils$$$_renderAccessibleLink$$($panel$$1$$, $refreshFunc$$2$$, $options$$336$$) {
    var $link$$4$$, $content$$32$$, $status$$28$$;
    $link$$4$$ = $$$$30$$(document.createElement("a"));
    $link$$4$$.text($oj$$33$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.ariaRefreshLink"));
    $link$$4$$.addClass("oj-helper-hidden-accessible").attr("href", "#").focus(function() {
      $link$$4$$.css("position", "static");
    }).blur(function($event$$540$$) {
      null != $event$$540$$.relatedTarget && $link$$4$$.css("position", "");
    }).click(function($event$$541$$) {
      $content$$32$$ = $panel$$1$$.children().last();
      $oj$$33$$.$PullToRefreshUtils$.$_handlePull$($event$$541$$, $content$$32$$, $options$$336$$);
      $oj$$33$$.$PullToRefreshUtils$.$_handleRelease$($event$$541$$, $content$$32$$, $refreshFunc$$2$$);
      $refreshFunc$$2$$();
    });
    $status$$28$$ = $$$$30$$(document.createElement("div"));
    $status$$28$$.addClass("oj-helper-hidden-accessible").attr("aria-live", "polite");
    $panel$$1$$.append($link$$4$$);
    $panel$$1$$.append($status$$28$$);
  };
  $oj$$33$$.$PullToRefreshUtils$.$_cleanup$ = function $$oj$$33$$$$PullToRefreshUtils$$$_cleanup$$($content$$33$$) {
    $$$$30$$.removeData($content$$33$$[0], "data-pullstart");
    $$$$30$$.removeData($content$$33$$[0], "data-loading");
    0 < $content$$33$$.find(".oj-pulltorefresh-icon").length && $content$$33$$.empty();
  };
});
