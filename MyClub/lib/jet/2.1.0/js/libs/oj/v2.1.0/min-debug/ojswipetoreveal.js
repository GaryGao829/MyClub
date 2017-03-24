/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojoffcanvas"], function($oj$$49$$, $$$$44$$) {
  $oj$$49$$.$SwipeToRevealUtils$ = {};
  $goog$exportPath_$$("SwipeToRevealUtils", $oj$$49$$.$SwipeToRevealUtils$, $oj$$49$$);
  $oj$$49$$.$SwipeToRevealUtils$.$setupSwipeActions$ = function $$oj$$49$$$$SwipeToRevealUtils$$$setupSwipeActions$$($elem$$110$$, $options$$351$$) {
    var $drawer$$36$$, $direction$$21$$, $offcanvas$$38$$, $outerWrapper$$3$$, $threshold$$9$$, $minimum$$2$$, $drawerShown$$, $evt$$28$$, $checkpoint$$, $defaultAction$$, $distance$$3$$;
    $drawer$$36$$ = $$$$44$$($elem$$110$$);
    $drawer$$36$$.hasClass("oj-swipetoreveal") || ($drawer$$36$$.addClass("oj-swipetoreveal"), $direction$$21$$ = $drawer$$36$$.hasClass("oj-offcanvas-start") ? "end" : "start", $offcanvas$$38$$ = {}, $offcanvas$$38$$.selector = $drawer$$36$$, $oj$$49$$.$OffcanvasUtils$.$setupPanToReveal$($offcanvas$$38$$), $outerWrapper$$3$$ = $oj$$49$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$36$$), null != $options$$351$$ && ($threshold$$9$$ = $options$$351$$.threshold), null != $threshold$$9$$ ? ($threshold$$9$$ = 
    parseInt($threshold$$9$$, 10), /%$/.test($options$$351$$.threshold) && ($threshold$$9$$ = $threshold$$9$$ / 100 * $outerWrapper$$3$$.outerWidth())) : $threshold$$9$$ = .55 * $outerWrapper$$3$$.outerWidth(), $minimum$$2$$ = Math.min(.3 * $outerWrapper$$3$$.outerWidth(), $drawer$$36$$.outerWidth()), $drawerShown$$ = !1, $outerWrapper$$3$$.on("click.swipetoreveal", function($event$$637$$) {
      $drawerShown$$ && ($event$$637$$.stopImmediatePropagation(), $drawerShown$$ = !1);
    }), $drawer$$36$$.on("ojpanstart", function($event$$638$$, $ui$$36$$) {
      $ui$$36$$.direction != $direction$$21$$ ? $event$$638$$.preventDefault() : ($drawer$$36$$.children().addClass("oj-swipetoreveal-action"), $defaultAction$$ = $drawer$$36$$.children(".oj-swipetoreveal-default").get(0), $checkpoint$$ = (new Date).getTime());
    }).on("ojpanmove", function($event$$639$$, $ui$$37$$) {
      $drawerShown$$ = !0;
      null != $defaultAction$$ && ($ui$$37$$.distance > $threshold$$9$$ ? $drawer$$36$$.children().each(function() {
        this != $defaultAction$$ && $$$$44$$(this).addClass("oj-swipetoreveal-hide-when-full");
      }) : $drawer$$36$$.children().removeClass("oj-swipetoreveal-hide-when-full"));
    }).on("ojpanend", function($event$$640$$, $ui$$38$$) {
      $distance$$3$$ = $ui$$38$$.distance;
      null != $defaultAction$$ && $distance$$3$$ > $threshold$$9$$ && ($evt$$28$$ = $$$$44$$.Event("ojdefaultaction"), $drawer$$36$$.trigger($evt$$28$$, $offcanvas$$38$$), $event$$640$$.preventDefault());
      $distance$$3$$ < $minimum$$2$$ && (200 < (new Date).getTime() - $checkpoint$$ || 10 > $distance$$3$$) && $event$$640$$.preventDefault();
    }));
  };
  $goog$exportPath_$$("SwipeToRevealUtils.setupSwipeActions", $oj$$49$$.$SwipeToRevealUtils$.$setupSwipeActions$, $oj$$49$$);
  $oj$$49$$.$SwipeToRevealUtils$.$tearDownSwipeActions$ = function $$oj$$49$$$$SwipeToRevealUtils$$$tearDownSwipeActions$$($elem$$111_offcanvas$$39$$) {
    var $drawer$$37_outerWrapper$$4$$;
    $drawer$$37_outerWrapper$$4$$ = $$$$44$$($elem$$111_offcanvas$$39$$);
    $elem$$111_offcanvas$$39$$ = {};
    $elem$$111_offcanvas$$39$$.selector = $drawer$$37_outerWrapper$$4$$;
    $drawer$$37_outerWrapper$$4$$ = $oj$$49$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$37_outerWrapper$$4$$);
    null != $drawer$$37_outerWrapper$$4$$ && $drawer$$37_outerWrapper$$4$$.off("click.swipetoreveal");
    $oj$$49$$.$OffcanvasUtils$.$tearDownPanToReveal$($elem$$111_offcanvas$$39$$);
  };
  $goog$exportPath_$$("SwipeToRevealUtils.tearDownSwipeActions", $oj$$49$$.$SwipeToRevealUtils$.$tearDownSwipeActions$, $oj$$49$$);
});
