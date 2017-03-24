/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "promise", "ojs/ojanimation"], function($oj$$45$$, $ko$$5$$) {
  $oj$$45$$.$ModuleAnimations$ = {};
  $oj$$45$$.$ModuleAnimations$.$_DESCRIPTORS$ = {coverStart:{$oldViewClass$:"oj-animation-coverstart", $newViewClass$:"oj-animation-coverstart", $newViewOnTop$:!0}, coverUp:{$newViewClass$:"oj-animation-coverup", $newViewOnTop$:!0}, fade:{$oldViewClass$:"oj-animation-fade", $newViewClass$:"oj-animation-fade", $newViewOnTop$:!1}, pushLeft:{$oldViewClass$:"oj-animation-revealleft", $newViewClass$:"oj-animation-coverleft", $newViewOnTop$:!1}, pushRight:{$oldViewClass$:"oj-animation-revealright", $newViewClass$:"oj-animation-coverright", 
  $newViewOnTop$:!1}, revealDown:{$oldViewClass$:"oj-animation-revealdown", $newViewOnTop$:!1}, revealEnd:{$oldViewClass$:"oj-animation-revealend", $newViewClass$:"oj-animation-revealend", $newViewOnTop$:!1}, zoomIn:{$newViewClass$:"oj-animation-zoomin", $newViewOnTop$:!0}, zoomOut:{$oldViewClass$:"oj-animation-zoomout", $newViewOnTop$:!1}};
  $oj$$45$$.$ModuleAnimations$.$_animateElement$ = function $$oj$$45$$$$ModuleAnimations$$$_animateElement$$($element$$229$$, $baseClass$$1$$, $action$$10$$) {
    var $jelem$$17$$ = $($element$$229$$);
    return new Promise(function($resolve$$61$$) {
      function $endListener$$1$$() {
        $resolve$$61$$(!0);
      }
      var $duration$$21_fromClass$$ = "oj-" + $action$$10$$, $toClass$$ = $duration$$21_fromClass$$ + "-active";
      $jelem$$17$$.addClass($baseClass$$1$$);
      $jelem$$17$$.addClass($duration$$21_fromClass$$);
      window.requestAnimationFrame(function() {
        $jelem$$17$$.addClass($toClass$$);
      });
      if (($duration$$21_fromClass$$ = $jelem$$17$$.css("animationDuration") || $jelem$$17$$.css("webkitAnimationDuration")) && "0s" != $duration$$21_fromClass$$) {
        $jelem$$17$$.on("animationend webkitAnimationEnd", $endListener$$1$$);
      } else {
        if (($duration$$21_fromClass$$ = $jelem$$17$$.css("transitionDuration") || $jelem$$17$$.css("webkitTransitionDuration")) && "0s" != $duration$$21_fromClass$$) {
          $jelem$$17$$.on("transitionend webkitTransitionEnd", $endListener$$1$$);
        } else {
          $resolve$$61$$(!0);
        }
      }
    });
  };
  $oj$$45$$.$ModuleAnimations$.$_animateView$ = function $$oj$$45$$$$ModuleAnimations$$$_animateView$$($oldElement$$, $newElement$$1$$, $animateName_descriptor$$1$$) {
    var $promises$$1$$ = [];
    $animateName_descriptor$$1$$ = $oj$$45$$.$ModuleAnimations$.$_DESCRIPTORS$[$animateName_descriptor$$1$$];
    $oldElement$$ && $animateName_descriptor$$1$$ && $animateName_descriptor$$1$$.$oldViewClass$ && $promises$$1$$.push($oj$$45$$.$ModuleAnimations$.$_animateElement$($oldElement$$, $animateName_descriptor$$1$$.$oldViewClass$, "leave"));
    $newElement$$1$$ && $animateName_descriptor$$1$$ && $animateName_descriptor$$1$$.$newViewClass$ && $promises$$1$$.push($oj$$45$$.$ModuleAnimations$.$_animateElement$($newElement$$1$$, $animateName_descriptor$$1$$.$newViewClass$, "enter"));
    return Promise.all($promises$$1$$);
  };
  $oj$$45$$.$ModuleAnimations$.$_addContainedElements$ = function $$oj$$45$$$$ModuleAnimations$$$_addContainedElements$$($node$$99$$, $roots$$) {
    for (var $child$$11$$ = $ko$$5$$.virtualElements.firstChild($node$$99$$);$child$$11$$;) {
      1 == $child$$11$$.nodeType ? $roots$$.push($child$$11$$) : 8 == $child$$11$$.nodeType && this.$_addContainedElements$($child$$11$$, $roots$$), $child$$11$$ = $ko$$5$$.virtualElements.nextSibling($child$$11$$);
    }
  };
  $oj$$45$$.$ModuleAnimations$.$_cacheVirtualViewRoot$ = function $$oj$$45$$$$ModuleAnimations$$$_cacheVirtualViewRoot$$($context$$144$$, $root$$30$$) {
    $context$$144$$._ojOldRoot = $root$$30$$;
  };
  $oj$$45$$.$ModuleAnimations$.$_getVirtualViewRoot$ = function $$oj$$45$$$$ModuleAnimations$$$_getVirtualViewRoot$$($context$$145$$) {
    return $context$$145$$._ojOldRoot;
  };
  $oj$$45$$.$ModuleAnimations$.$_defaultCanAnimate$ = function $$oj$$45$$$$ModuleAnimations$$$_defaultCanAnimate$$($context$$146$$) {
    if ($context$$146$$.isInitial) {
      return!1;
    }
    if (1 == $context$$146$$.node.nodeType) {
      return!0;
    }
    if (8 == $context$$146$$.node.nodeType) {
      var $children$$12$$ = [];
      $oj$$45$$.$ModuleAnimations$.$_addContainedElements$($context$$146$$.node, $children$$12$$);
      if ($children$$12$$ && 1 == $children$$12$$.length) {
        return $oj$$45$$.$ModuleAnimations$.$_cacheVirtualViewRoot$($context$$146$$, $children$$12$$[0]), !0;
      }
    }
    return!1;
  };
  $oj$$45$$.$ModuleAnimations$.$_getOldView$ = function $$oj$$45$$$$ModuleAnimations$$$_getOldView$$($context$$147$$) {
    var $oldView$$;
    1 == $context$$147$$.node.nodeType ? $oldView$$ = $context$$147$$.node : 8 == $context$$147$$.node.nodeType && ($oldView$$ = $oj$$45$$.$ModuleAnimations$.$_getVirtualViewRoot$($context$$147$$));
    return $oldView$$;
  };
  $oj$$45$$.$ModuleAnimations$.$_createViewParent$ = function $$oj$$45$$$$ModuleAnimations$$$_createViewParent$$($host_oldView$$1$$) {
    var $viewport$$ = $(document.createElement("div")), $cssStyle$$ = {position:"absolute", height:$host_oldView$$1$$.offsetHeight + "px", width:$host_oldView$$1$$.offsetWidth + "px", left:$host_oldView$$1$$.offsetLeft + "px", top:$host_oldView$$1$$.offsetTop + "px"};
    $viewport$$.appendTo($host_oldView$$1$$.offsetParent);
    $viewport$$.css($cssStyle$$);
    $viewport$$.addClass("oj-animation-host-viewport");
    $host_oldView$$1$$ = document.createElement("div");
    $host_oldView$$1$$.className = "oj-animation-host";
    $viewport$$.append($host_oldView$$1$$);
    return $host_oldView$$1$$;
  };
  $oj$$45$$.$ModuleAnimations$.$_defaultPrepareAnimation$ = function $$oj$$45$$$$ModuleAnimations$$$_defaultPrepareAnimation$$($context$$148$$, $animateName$$1$$) {
    var $viewParents$$ = {}, $descriptor$$2$$ = $oj$$45$$.$ModuleAnimations$.$_DESCRIPTORS$[$animateName$$1$$], $oldView$$2$$ = $oj$$45$$.$ModuleAnimations$.$_getOldView$($context$$148$$);
    $descriptor$$2$$ && ($descriptor$$2$$.$newViewClass$ && !$descriptor$$2$$.$newViewOnTop$ && ($viewParents$$.newViewParent = $oj$$45$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)), $descriptor$$2$$.$oldViewClass$ && ($viewParents$$.oldViewParent = $oj$$45$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)), $descriptor$$2$$.$newViewClass$ && $descriptor$$2$$.$newViewOnTop$ && ($viewParents$$.newViewParent = $oj$$45$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)));
    return $viewParents$$;
  };
  $oj$$45$$.$ModuleAnimations$.$_defaultAnimate$ = function $$oj$$45$$$$ModuleAnimations$$$_defaultAnimate$$($context$$149$$, $animateName$$2$$) {
    return $oj$$45$$.$ModuleAnimations$.$_animateView$($context$$149$$.oldViewParent, $context$$149$$.newViewParent, $animateName$$2$$).then(function() {
      $oj$$45$$.$ModuleAnimations$.$_postAnimationProcess$($context$$149$$);
    });
  };
  $oj$$45$$.$ModuleAnimations$.$_removeViewParent$ = function $$oj$$45$$$$ModuleAnimations$$$_removeViewParent$$($context$$150$$, $hostProp$$) {
    var $host$$1_viewport$$1$$ = $context$$150$$[$hostProp$$];
    $host$$1_viewport$$1$$ && ($host$$1_viewport$$1$$ = $host$$1_viewport$$1$$.parentNode) && $host$$1_viewport$$1$$.parentNode && $host$$1_viewport$$1$$.parentNode.removeChild($host$$1_viewport$$1$$);
  };
  $oj$$45$$.$ModuleAnimations$.$_postAnimationProcess$ = function $$oj$$45$$$$ModuleAnimations$$$_postAnimationProcess$$($context$$151$$) {
    $context$$151$$.removeOldView();
    $context$$151$$.insertNewView();
    $oj$$45$$.$ModuleAnimations$.$_removeViewParent$($context$$151$$, "newViewParent");
    $oj$$45$$.$ModuleAnimations$.$_removeViewParent$($context$$151$$, "oldViewParent");
  };
  $oj$$45$$.$ModuleAnimations$.$_getImplementation$ = function $$oj$$45$$$$ModuleAnimations$$$_getImplementation$$($animateName$$3$$) {
    return{canAnimate:$oj$$45$$.$ModuleAnimations$.$_defaultCanAnimate$, prepareAnimation:function($context$$152$$) {
      return $oj$$45$$.$ModuleAnimations$.$_defaultPrepareAnimation$($context$$152$$, $animateName$$3$$);
    }, animate:function($context$$153$$) {
      return $oj$$45$$.$ModuleAnimations$.$_defaultAnimate$($context$$153$$, $animateName$$3$$);
    }};
  };
  $oj$$45$$.$ModuleAnimations$.$_getNavigateMethod$ = function $$oj$$45$$$$ModuleAnimations$$$_getNavigateMethod$$($navigationType$$) {
    null == $oj$$45$$.$ModuleAnimations$.$_navigateMethods$ && ($oj$$45$$.$ModuleAnimations$.$_navigateMethods$ = $oj$$45$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-animation-navigate-methods"));
    return $oj$$45$$.$ModuleAnimations$.$_navigateMethods$ ? $oj$$45$$.$ModuleAnimations$.$_navigateMethods$[$navigationType$$] : null;
  };
  $oj$$45$$.$ModuleAnimations$.$_navigateCanAnimate$ = function $$oj$$45$$$$ModuleAnimations$$$_navigateCanAnimate$$($context$$155$$, $navigationType$$1$$) {
    return $oj$$45$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$1$$) && $oj$$45$$.$ModuleAnimations$.$_defaultCanAnimate$($context$$155$$);
  };
  $oj$$45$$.$ModuleAnimations$.$_navigatePrepareAnimation$ = function $$oj$$45$$$$ModuleAnimations$$$_navigatePrepareAnimation$$($context$$156$$, $navigationType$$2$$) {
    var $animateName$$4$$ = $oj$$45$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$2$$);
    return $oj$$45$$.$ModuleAnimations$.$_defaultPrepareAnimation$($context$$156$$, $animateName$$4$$);
  };
  $oj$$45$$.$ModuleAnimations$.$_navigateAnimate$ = function $$oj$$45$$$$ModuleAnimations$$$_navigateAnimate$$($context$$157$$, $navigationType$$3$$) {
    var $animateName$$5$$ = $oj$$45$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$3$$);
    return $oj$$45$$.$ModuleAnimations$.$_defaultAnimate$($context$$157$$, $animateName$$5$$);
  };
  $oj$$45$$.$ModuleAnimations$.$_getNavigateImplementation$ = function $$oj$$45$$$$ModuleAnimations$$$_getNavigateImplementation$$($navigationType$$4$$) {
    return{canAnimate:function($context$$158$$) {
      return $oj$$45$$.$ModuleAnimations$.$_navigateCanAnimate$($context$$158$$, $navigationType$$4$$);
    }, prepareAnimation:function($context$$159$$) {
      return $oj$$45$$.$ModuleAnimations$.$_navigatePrepareAnimation$($context$$159$$, $navigationType$$4$$);
    }, animate:function($context$$160$$) {
      return $oj$$45$$.$ModuleAnimations$.$_navigateAnimate$($context$$160$$, $navigationType$$4$$);
    }};
  };
  $oj$$45$$.$ModuleAnimations$.$coverStart$ = $oj$$45$$.$ModuleAnimations$.$_getImplementation$("coverStart");
  $goog$exportPath_$$("ModuleAnimations.coverStart", $oj$$45$$.$ModuleAnimations$.$coverStart$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$revealEnd$ = $oj$$45$$.$ModuleAnimations$.$_getImplementation$("revealEnd");
  $goog$exportPath_$$("ModuleAnimations.revealEnd", $oj$$45$$.$ModuleAnimations$.$revealEnd$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$coverUp$ = $oj$$45$$.$ModuleAnimations$.$_getImplementation$("coverUp");
  $goog$exportPath_$$("ModuleAnimations.coverUp", $oj$$45$$.$ModuleAnimations$.$coverUp$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$revealDown$ = $oj$$45$$.$ModuleAnimations$.$_getImplementation$("revealDown");
  $goog$exportPath_$$("ModuleAnimations.revealDown", $oj$$45$$.$ModuleAnimations$.$revealDown$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$zoomIn$ = $oj$$45$$.$ModuleAnimations$.$_getImplementation$("zoomIn");
  $goog$exportPath_$$("ModuleAnimations.zoomIn", $oj$$45$$.$ModuleAnimations$.$zoomIn$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$zoomOut$ = $oj$$45$$.$ModuleAnimations$.$_getImplementation$("zoomOut");
  $goog$exportPath_$$("ModuleAnimations.zoomOut", $oj$$45$$.$ModuleAnimations$.$zoomOut$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$fade$ = $oj$$45$$.$ModuleAnimations$.$_getImplementation$("fade");
  $goog$exportPath_$$("ModuleAnimations.fade", $oj$$45$$.$ModuleAnimations$.$fade$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$pushLeft$ = $oj$$45$$.$ModuleAnimations$.$_getImplementation$("pushLeft");
  $goog$exportPath_$$("ModuleAnimations.pushLeft", $oj$$45$$.$ModuleAnimations$.$pushLeft$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$pushRight$ = $oj$$45$$.$ModuleAnimations$.$_getImplementation$("pushRight");
  $goog$exportPath_$$("ModuleAnimations.pushRight", $oj$$45$$.$ModuleAnimations$.$pushRight$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$drillIn$ = $oj$$45$$.$ModuleAnimations$.$_getNavigateImplementation$("drillIn");
  $goog$exportPath_$$("ModuleAnimations.drillIn", $oj$$45$$.$ModuleAnimations$.$drillIn$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$drillOut$ = $oj$$45$$.$ModuleAnimations$.$_getNavigateImplementation$("drillOut");
  $goog$exportPath_$$("ModuleAnimations.drillOut", $oj$$45$$.$ModuleAnimations$.$drillOut$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$goLeft$ = $oj$$45$$.$ModuleAnimations$.$_getNavigateImplementation$("goLeft");
  $goog$exportPath_$$("ModuleAnimations.goLeft", $oj$$45$$.$ModuleAnimations$.$goLeft$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$goRight$ = $oj$$45$$.$ModuleAnimations$.$_getNavigateImplementation$("goRight");
  $goog$exportPath_$$("ModuleAnimations.goRight", $oj$$45$$.$ModuleAnimations$.$goRight$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$switcher$ = function $$oj$$45$$$$ModuleAnimations$$$switcher$$($callback$$128$$) {
    return new function() {
      function $_getDelegateInvoker$$($name$$126$$) {
        return function($context$$161$$) {
          return $_delegate$$[$name$$126$$].call($_delegate$$, $context$$161$$);
        };
      }
      var $_delegate$$, $_self$$ = this;
      this.canAnimate = function $this$canAnimate$($context$$162$$) {
        var $methods$$4_type$$96$$ = $callback$$128$$($context$$162$$);
        $_delegate$$ = null == $methods$$4_type$$96$$ ? null : $oj$$45$$.ModuleAnimations[$methods$$4_type$$96$$];
        if (!$_delegate$$) {
          return!1;
        }
        for (var $methods$$4_type$$96$$ = ["prepareAnimation", "animate"], $i$$411$$ = 0;$i$$411$$ < $methods$$4_type$$96$$.length;$i$$411$$++) {
          var $method$$8$$ = $methods$$4_type$$96$$[$i$$411$$];
          $_self$$[$method$$8$$] = $_getDelegateInvoker$$($method$$8$$);
        }
        return $_getDelegateInvoker$$("canAnimate")($context$$162$$);
      };
    };
  };
  $goog$exportPath_$$("ModuleAnimations.switcher", $oj$$45$$.$ModuleAnimations$.$switcher$, $oj$$45$$);
  $oj$$45$$.$ModuleAnimations$.$createAnimation$ = function $$oj$$45$$$$ModuleAnimations$$$createAnimation$$($oldViewEffect$$, $newViewEffect$$, $newViewOnTop$$) {
    return{canAnimate:$oj$$45$$.$ModuleAnimations$.$_defaultCanAnimate$, prepareAnimation:function($context$$163_oldView$$3$$) {
      var $viewParents$$1$$ = {};
      $context$$163_oldView$$3$$ = $oj$$45$$.$ModuleAnimations$.$_getOldView$($context$$163_oldView$$3$$);
      $newViewEffect$$ && !$newViewOnTop$$ && ($viewParents$$1$$.newViewParent = $oj$$45$$.$ModuleAnimations$.$_createViewParent$($context$$163_oldView$$3$$));
      $oldViewEffect$$ && ($viewParents$$1$$.oldViewParent = $oj$$45$$.$ModuleAnimations$.$_createViewParent$($context$$163_oldView$$3$$));
      $newViewEffect$$ && $newViewOnTop$$ && ($viewParents$$1$$.newViewParent = $oj$$45$$.$ModuleAnimations$.$_createViewParent$($context$$163_oldView$$3$$));
      return $viewParents$$1$$;
    }, animate:function($context$$164$$) {
      var $oldViewHost$$1$$ = $context$$164$$.oldViewParent, $newViewHost$$1$$ = $context$$164$$.newViewParent, $promises$$2$$ = [];
      $oldViewHost$$1$$ && $oldViewEffect$$ && $promises$$2$$.push($oj$$45$$.$AnimationUtils$.$startAnimation$($oldViewHost$$1$$, "close", $oldViewEffect$$));
      $newViewHost$$1$$ && $newViewEffect$$ && $promises$$2$$.push($oj$$45$$.$AnimationUtils$.$startAnimation$($newViewHost$$1$$, "open", $newViewEffect$$));
      return Promise.all($promises$$2$$).then(function() {
        $oj$$45$$.$ModuleAnimations$.$_postAnimationProcess$($context$$164$$);
      });
    }};
  };
  $goog$exportPath_$$("ModuleAnimations.createAnimation", $oj$$45$$.$ModuleAnimations$.$createAnimation$, $oj$$45$$);
});
