/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore", "jqueryui-amd/draggable", "jqueryui-amd/mouse"], function($oj$$40$$, $$$$37$$) {
  (function() {
    $oj$$40$$.$__registerWidget$("oj.ojResizable", $$$$37$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{cancel:"input,textarea,button,select,option", distance:1, delay:0, maxHeight:null, maxWidth:null, minHeight:10, minWidth:10, alsoResize:!1, animate:!1, animateDuration:"slow", animateEasing:"swing", containment:!1, ghost:!1, grid:!1, handles:"e,s,se", helper:!1, resize:null, start:null, stop:null}, $_num$:function($value$$285$$) {
      return parseInt($value$$285$$, 10) || 0;
    }, $_isNumber$:function($value$$286$$) {
      return!isNaN(parseInt($value$$286$$, 10));
    }, $_hasScroll$:function($el$$9$$, $a$$110$$) {
      if ("hidden" === $$$$37$$($el$$9$$).css("overflow")) {
        return!1;
      }
      var $scroll$$3$$ = $a$$110$$ && "left" === $a$$110$$ ? "scrollLeft" : "scrollTop", $has$$ = !1;
      if (0 < $el$$9$$[$scroll$$3$$]) {
        return!0;
      }
      $el$$9$$[$scroll$$3$$] = 1;
      $has$$ = 0 < $el$$9$$[$scroll$$3$$];
      $el$$9$$[$scroll$$3$$] = 0;
      return $has$$;
    }, _ComponentCreate:function() {
      this._super();
      var $n$$25_o$$, $i$$401_mouseConstructor$$, $handle$$19$$, $axis$$69$$, $hname$$, $that$$1$$ = this;
      $n$$25_o$$ = this.options;
      $i$$401_mouseConstructor$$ = this.element.mouse.bind(this.element);
      $i$$401_mouseConstructor$$();
      this.$mouse$ = $i$$401_mouseConstructor$$("instance");
      this.$mouse$._mouseCapture = function $this$$mouse$$_mouseCapture$($event$$573$$) {
        return $that$$1$$.$_mouseCapture$($event$$573$$);
      };
      this.$mouse$._mouseStart = function $this$$mouse$$_mouseStart$($event$$574$$) {
        return $that$$1$$.$_mouseStart$($event$$574$$);
      };
      this.$mouse$._mouseDrag = function $this$$mouse$$_mouseDrag$($event$$575$$) {
        return $that$$1$$.$_mouseDrag$($event$$575$$);
      };
      this.$mouse$._mouseStop = function $this$$mouse$$_mouseStop$($event$$576$$) {
        return $that$$1$$.$_mouseStop$($event$$576$$);
      };
      this.element.addClass("oj-resizable");
      $$$$37$$.extend(this, {$originalElement$:this.element, $_proportionallyResizeElements$:[], $_helper$:null});
      this.handles = $n$$25_o$$.handles || ($$$$37$$(".oj-resizable-handle", this.element).length ? {$n$:".oj-resizable-n", $e$:".oj-resizable-e", $s$:".oj-resizable-s", $w$:".oj-resizable-w", $se$:".oj-resizable-se", $sw$:".oj-resizable-sw", $ne$:".oj-resizable-ne", $nw$:".oj-resizable-nw"} : "e,s,se");
      if (this.handles.constructor === String) {
        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), $n$$25_o$$ = this.handles.split(","), this.handles = {}, $i$$401_mouseConstructor$$ = 0;$i$$401_mouseConstructor$$ < $n$$25_o$$.length;$i$$401_mouseConstructor$$++) {
          $handle$$19$$ = $$$$37$$.trim($n$$25_o$$[$i$$401_mouseConstructor$$]), $hname$$ = "oj-resizable-" + $handle$$19$$, $axis$$69$$ = $$$$37$$("\x3cdiv class\x3d'oj-resizable-handle " + $hname$$ + "'\x3e\x3c/div\x3e"), this.handles[$handle$$19$$] = ".oj-resizable-" + $handle$$19$$, this.element.append($axis$$69$$);
        }
      }
      this.$_renderAxis$ = function $this$$_renderAxis$$() {
        for (var $i$$402$$ in this.handles) {
          this.handles[$i$$402$$].constructor === String && (this.handles[$i$$402$$] = this.element.children(this.handles[$i$$402$$]).first().show());
        }
      };
      this.$_renderAxis$();
      this.$_handles$ = $$$$37$$(".oj-resizable-handle", this.element);
      this.$_handles$.mouseover(function() {
        $that$$1$$.$resizing$ || (this.className && ($axis$$69$$ = this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)), $that$$1$$.axis = $axis$$69$$ && $axis$$69$$[1] ? $axis$$69$$[1] : "se");
      });
      this.$mouse$._mouseInit();
    }, _destroy:function() {
      this.$mouse$ && this.$mouse$._mouseDestroy();
      try {
        this.$mouse$.destroy(), this.$mouse$ = null;
      } catch ($e$$96$$) {
      }
      $$$$37$$(this.$originalElement$).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove();
      return this;
    }, $_mouseCapture$:function($event$$577$$) {
      var $i$$403$$, $handle$$20$$, $capture$$ = !1;
      for ($i$$403$$ in this.handles) {
        if ($handle$$20$$ = $$$$37$$(this.handles[$i$$403$$])[0], $handle$$20$$ === $event$$577$$.target || $$$$37$$.contains($handle$$20$$, $event$$577$$.target)) {
          $capture$$ = !0;
        }
      }
      return!this.options.disabled && $capture$$;
    }, $_mouseStart$:function($event$$578$$) {
      var $curleft_iniPos$$, $curtop$$, $cursor_o$$1$$;
      $cursor_o$$1$$ = this.options;
      $curleft_iniPos$$ = this.element.position();
      var $el$$10$$ = this.element;
      this.$resizing$ = !0;
      /absolute/.test($el$$10$$.css("position")) ? $el$$10$$.css({position:"absolute", top:$el$$10$$.css("top"), left:$el$$10$$.css("left")}) : $el$$10$$.is(".oj-draggable") && $el$$10$$.css({position:"absolute", top:$curleft_iniPos$$.top, left:$curleft_iniPos$$.left});
      this.$_renderProxy$();
      $curleft_iniPos$$ = this.$_num$(this.helper.css("left"));
      $curtop$$ = this.$_num$(this.helper.css("top"));
      $cursor_o$$1$$.containment && ($curleft_iniPos$$ += $$$$37$$($cursor_o$$1$$.containment).scrollLeft() || 0, $curtop$$ += $$$$37$$($cursor_o$$1$$.containment).scrollTop() || 0);
      this.offset = this.helper.offset();
      this.position = {left:$curleft_iniPos$$, top:$curtop$$};
      this.size = {width:$el$$10$$.width(), height:$el$$10$$.height()};
      this.$originalSize$ = {width:$el$$10$$.width(), height:$el$$10$$.height()};
      this.$originalPosition$ = {left:$curleft_iniPos$$, top:$curtop$$};
      this.$sizeDiff$ = {width:$el$$10$$.outerWidth() - $el$$10$$.width(), height:$el$$10$$.outerHeight() - $el$$10$$.height()};
      this.$originalMousePosition$ = {left:$event$$578$$.pageX, top:$event$$578$$.pageY};
      this.$aspectRatio$ = this.$originalSize$.width / this.$originalSize$.height || 1;
      $cursor_o$$1$$ = $$$$37$$(".oj-resizable-" + this.axis).css("cursor");
      $$$$37$$("body").css("cursor", "auto" === $cursor_o$$1$$ ? this.axis + "-resize" : $cursor_o$$1$$);
      $el$$10$$.addClass("oj-resizable-resizing");
      this.$_propagate$("start", $event$$578$$);
      this.$_alsoresize_start$($event$$578$$);
      this.$_containment_start$($event$$578$$);
      return!0;
    }, $_mouseDrag$:function($event$$579$$) {
      var $data$$148_dx$$4$$, $el$$11$$ = this.helper, $props$$18$$ = {}, $dy$$4_smp$$ = this.$originalMousePosition$;
      $data$$148_dx$$4$$ = $event$$579$$.pageX - $dy$$4_smp$$.left || 0;
      var $dy$$4_smp$$ = $event$$579$$.pageY - $dy$$4_smp$$.top || 0, $trigger$$5$$ = this.$_change$[this.axis];
      this.$prevPosition$ = {top:this.position.top, left:this.position.left};
      this.$prevSize$ = {width:this.size.width, height:this.size.height};
      if (!$trigger$$5$$) {
        return!1;
      }
      $data$$148_dx$$4$$ = $trigger$$5$$.apply(this, [$event$$579$$, $data$$148_dx$$4$$, $dy$$4_smp$$]);
      this.$_updateVirtualBoundaries$($event$$579$$.shiftKey);
      $event$$579$$.shiftKey && ($data$$148_dx$$4$$ = this.$_updateRatio$($data$$148_dx$$4$$, $event$$579$$));
      $data$$148_dx$$4$$ = this.$_respectSize$($data$$148_dx$$4$$, $event$$579$$);
      this.$_updateCache$($data$$148_dx$$4$$);
      this.$_propagate$("resize", $event$$579$$);
      this.$_alsoresize_resize$($event$$579$$, this.ui());
      this.$_containment_resize$($event$$579$$, this.ui());
      this.position.top !== this.$prevPosition$.top && ($props$$18$$.top = this.position.top + "px");
      this.position.left !== this.$prevPosition$.left && ($props$$18$$.left = this.position.left + "px");
      this.size.width !== this.$prevSize$.width && ($props$$18$$.width = this.size.width + "px");
      this.size.height !== this.$prevSize$.height && ($props$$18$$.height = this.size.height + "px");
      $el$$11$$.css($props$$18$$);
      !this.$_helper$ && this.$_proportionallyResizeElements$.length && this.$_proportionallyResize$();
      $$$$37$$.isEmptyObject($props$$18$$) || this._trigger("resize", $event$$579$$, this.ui());
      return!1;
    }, $_mouseStop$:function($event$$580$$) {
      this.$resizing$ = !1;
      $$$$37$$("body").css("cursor", "auto");
      this.element.removeClass("oj-resizable-resizing");
      this.$_propagate$("stop", $event$$580$$);
      this.$_alsoresize_stop$($event$$580$$);
      this.$_containment_stop$($event$$580$$);
      return!1;
    }, $_updateVirtualBoundaries$:function($forceAspectRatio_pMinWidth$$) {
      var $pMaxWidth$$, $pMinHeight$$, $pMaxHeight$$, $b$$65_o$$2$$;
      $b$$65_o$$2$$ = this.options;
      $b$$65_o$$2$$ = {minWidth:this.$_isNumber$($b$$65_o$$2$$.minWidth) ? $b$$65_o$$2$$.minWidth : 0, maxWidth:this.$_isNumber$($b$$65_o$$2$$.maxWidth) ? $b$$65_o$$2$$.maxWidth : Infinity, minHeight:this.$_isNumber$($b$$65_o$$2$$.minHeight) ? $b$$65_o$$2$$.minHeight : 0, maxHeight:this.$_isNumber$($b$$65_o$$2$$.maxHeight) ? $b$$65_o$$2$$.maxHeight : Infinity};
      $forceAspectRatio_pMinWidth$$ && ($forceAspectRatio_pMinWidth$$ = $b$$65_o$$2$$.minHeight * this.$aspectRatio$, $pMinHeight$$ = $b$$65_o$$2$$.minWidth / this.$aspectRatio$, $pMaxWidth$$ = $b$$65_o$$2$$.maxHeight * this.$aspectRatio$, $pMaxHeight$$ = $b$$65_o$$2$$.maxWidth / this.$aspectRatio$, $forceAspectRatio_pMinWidth$$ > $b$$65_o$$2$$.minWidth && ($b$$65_o$$2$$.minWidth = $forceAspectRatio_pMinWidth$$), $pMinHeight$$ > $b$$65_o$$2$$.minHeight && ($b$$65_o$$2$$.minHeight = $pMinHeight$$), 
      $pMaxWidth$$ < $b$$65_o$$2$$.maxWidth && ($b$$65_o$$2$$.maxWidth = $pMaxWidth$$), $pMaxHeight$$ < $b$$65_o$$2$$.maxHeight && ($b$$65_o$$2$$.maxHeight = $pMaxHeight$$));
      this.$_vBoundaries$ = $b$$65_o$$2$$;
    }, $_updateCache$:function($data$$149$$) {
      this.offset = this.helper.offset();
      this.$_isNumber$($data$$149$$.left) && (this.position.left = $data$$149$$.left);
      this.$_isNumber$($data$$149$$.top) && (this.position.top = $data$$149$$.top);
      this.$_isNumber$($data$$149$$.height) && (this.size.height = $data$$149$$.height);
      this.$_isNumber$($data$$149$$.width) && (this.size.width = $data$$149$$.width);
    }, $_updateRatio$:function($data$$150$$) {
      var $cpos$$ = this.position, $csize$$ = this.size, $a$$112$$ = this.axis;
      this.$_isNumber$($data$$150$$.height) ? $data$$150$$.width = $data$$150$$.height * this.$aspectRatio$ : this.$_isNumber$($data$$150$$.width) && ($data$$150$$.height = $data$$150$$.width / this.$aspectRatio$);
      "sw" === $a$$112$$ && ($data$$150$$.left = $cpos$$.left + ($csize$$.width - $data$$150$$.width), $data$$150$$.top = null);
      "nw" === $a$$112$$ && ($data$$150$$.top = $cpos$$.top + ($csize$$.height - $data$$150$$.height), $data$$150$$.left = $cpos$$.left + ($csize$$.width - $data$$150$$.width));
      return $data$$150$$;
    }, $_respectSize$:function($data$$151$$) {
      var $o$$3$$ = this.$_vBoundaries$, $a$$113_ch$$2$$ = this.axis, $ismaxw$$ = this.$_isNumber$($data$$151$$.width) && $o$$3$$.maxWidth && $o$$3$$.maxWidth < $data$$151$$.width, $ismaxh$$ = this.$_isNumber$($data$$151$$.height) && $o$$3$$.maxHeight && $o$$3$$.maxHeight < $data$$151$$.height, $isminw$$ = this.$_isNumber$($data$$151$$.width) && $o$$3$$.minWidth && $o$$3$$.minWidth > $data$$151$$.width, $isminh$$ = this.$_isNumber$($data$$151$$.height) && $o$$3$$.minHeight && $o$$3$$.minHeight > 
      $data$$151$$.height, $dw$$ = this.$originalPosition$.left + this.$originalSize$.width, $dh$$ = this.position.top + this.size.height, $cw$$ = /sw|nw|w/.test($a$$113_ch$$2$$), $a$$113_ch$$2$$ = /nw|ne|n/.test($a$$113_ch$$2$$);
      $isminw$$ && ($data$$151$$.width = $o$$3$$.minWidth);
      $isminh$$ && ($data$$151$$.height = $o$$3$$.minHeight);
      $ismaxw$$ && ($data$$151$$.width = $o$$3$$.maxWidth);
      $ismaxh$$ && ($data$$151$$.height = $o$$3$$.maxHeight);
      $isminw$$ && $cw$$ && ($data$$151$$.left = $dw$$ - $o$$3$$.minWidth);
      $ismaxw$$ && $cw$$ && ($data$$151$$.left = $dw$$ - $o$$3$$.maxWidth);
      $isminh$$ && $a$$113_ch$$2$$ && ($data$$151$$.top = $dh$$ - $o$$3$$.minHeight);
      $ismaxh$$ && $a$$113_ch$$2$$ && ($data$$151$$.top = $dh$$ - $o$$3$$.maxHeight);
      $data$$151$$.width || $data$$151$$.height || $data$$151$$.left || !$data$$151$$.top ? $data$$151$$.width || $data$$151$$.height || $data$$151$$.top || !$data$$151$$.left || ($data$$151$$.left = null) : $data$$151$$.top = null;
      return $data$$151$$;
    }, $_proportionallyResize$:function() {
      if (this.$_proportionallyResizeElements$.length) {
        var $i$$404$$, $j$$57$$, $borders$$, $paddings$$, $prel$$, $element$$222$$ = this.helper || this.element;
        for ($i$$404$$ = 0;$i$$404$$ < this.$_proportionallyResizeElements$.length;$i$$404$$++) {
          $prel$$ = this.$_proportionallyResizeElements$[$i$$404$$];
          if (!this.$borderDif$) {
            for (this.$borderDif$ = [], $borders$$ = [$prel$$.css("borderTopWidth"), $prel$$.css("borderRightWidth"), $prel$$.css("borderBottomWidth"), $prel$$.css("borderLeftWidth")], $paddings$$ = [$prel$$.css("paddingTop"), $prel$$.css("paddingRight"), $prel$$.css("paddingBottom"), $prel$$.css("paddingLeft")], $j$$57$$ = 0;$j$$57$$ < $borders$$.length;$j$$57$$++) {
              this.$borderDif$[$j$$57$$] = (parseInt($borders$$[$j$$57$$], 10) || 0) + (parseInt($paddings$$[$j$$57$$], 10) || 0);
            }
          }
          $prel$$.css({height:$element$$222$$.height() - this.$borderDif$[0] - this.$borderDif$[2] || 0, width:$element$$222$$.width() - this.$borderDif$[1] - this.$borderDif$[3] || 0});
        }
      }
    }, $_renderProxy$:function() {
      this.element.offset();
      this.helper = this.element;
    }, $_change$:{e:function($event$$581$$, $dx$$5$$) {
      return{width:this.$originalSize$.width + $dx$$5$$};
    }, w:function($event$$582$$, $dx$$6$$) {
      return{left:this.$originalPosition$.left + $dx$$6$$, width:this.$originalSize$.width - $dx$$6$$};
    }, n:function($event$$583$$, $dx$$7$$, $dy$$5$$) {
      return{top:this.$originalPosition$.top + $dy$$5$$, height:this.$originalSize$.height - $dy$$5$$};
    }, s:function($event$$584$$, $dx$$8$$, $dy$$6$$) {
      return{height:this.$originalSize$.height + $dy$$6$$};
    }, se:function($event$$585$$, $dx$$9$$, $dy$$7$$) {
      return $$$$37$$.extend(this.$_change$.s.apply(this, arguments), this.$_change$.e.apply(this, [$event$$585$$, $dx$$9$$, $dy$$7$$]));
    }, sw:function($event$$586$$, $dx$$10$$, $dy$$8$$) {
      return $$$$37$$.extend(this.$_change$.s.apply(this, arguments), this.$_change$.w.apply(this, [$event$$586$$, $dx$$10$$, $dy$$8$$]));
    }, ne:function($event$$587$$, $dx$$11$$, $dy$$9$$) {
      return $$$$37$$.extend(this.$_change$.n.apply(this, arguments), this.$_change$.e.apply(this, [$event$$587$$, $dx$$11$$, $dy$$9$$]));
    }, nw:function($event$$588$$, $dx$$12$$, $dy$$10$$) {
      return $$$$37$$.extend(this.$_change$.n.apply(this, arguments), this.$_change$.w.apply(this, [$event$$588$$, $dx$$12$$, $dy$$10$$]));
    }}, $_propagate$:function($n$$26$$, $event$$589$$) {
      "resize" !== $n$$26$$ && this._trigger($n$$26$$, $event$$589$$, this.ui());
    }, $_alsoresize_start$:function() {
      function $_store$$($exp$$3$$) {
        $$$$37$$($exp$$3$$).each(function() {
          var $el$$13$$ = $$$$37$$(this);
          $el$$13$$.data("oj-resizable-alsoresize", {width:parseInt($el$$13$$.width(), 10), height:parseInt($el$$13$$.height(), 10), left:parseInt($el$$13$$.css("left"), 10), top:parseInt($el$$13$$.css("top"), 10)});
        });
      }
      var $o$$5$$ = this.options;
      "object" !== typeof $o$$5$$.alsoResize || $o$$5$$.alsoResize.parentNode ? $_store$$($o$$5$$.alsoResize) : $o$$5$$.alsoResize.length ? ($o$$5$$.alsoResize = $o$$5$$.alsoResize[0], $_store$$($o$$5$$.alsoResize)) : $$$$37$$.each($o$$5$$.alsoResize, function($exp$$4$$) {
        $_store$$($exp$$4$$);
      });
    }, $_alsoresize_resize$:function($event$$590$$, $ui$$23$$) {
      function $_alsoResize$$($exp$$5$$, $c$$51$$) {
        $$$$37$$($exp$$5$$).each(function() {
          var $el$$14$$ = $$$$37$$(this), $start$$59$$ = $$$$37$$(this).data("oj-resizable-alsoresize"), $style$$10$$ = {};
          $$$$37$$.each($c$$51$$ && $c$$51$$.length ? $c$$51$$ : $el$$14$$.parents($ui$$23$$.$originalElement$[0]).length ? ["width", "height"] : ["width", "height", "top", "left"], function($i$$405$$, $prop$$76$$) {
            var $sum$$ = ($start$$59$$[$prop$$76$$] || 0) + ($delta$$9$$[$prop$$76$$] || 0);
            $sum$$ && 0 <= $sum$$ && ($style$$10$$[$prop$$76$$] = $sum$$ || null);
          });
          $el$$14$$.css($style$$10$$);
        });
      }
      var $o$$6$$ = this.options, $os$$1$$ = this.$originalSize$, $op$$ = this.$originalPosition$, $delta$$9$$ = {height:this.size.height - $os$$1$$.height || 0, width:this.size.width - $os$$1$$.width || 0, top:this.position.top - $op$$.top || 0, left:this.position.left - $op$$.left || 0};
      "object" !== typeof $o$$6$$.alsoResize || $o$$6$$.alsoResize.nodeType ? $_alsoResize$$($o$$6$$.alsoResize, null) : $$$$37$$.each($o$$6$$.alsoResize, function($exp$$6$$, $c$$52$$) {
        $_alsoResize$$($exp$$6$$, $c$$52$$);
      });
    }, $_alsoresize_stop$:function() {
      $$$$37$$(this).removeData("oj-resizable-alsoresize");
    }, $_containment_start$:function() {
      var $element$$223$$, $p$$7$$, $co_oc$$, $ch$$3_height$$54$$, $cw$$1_width$$48$$, $that$$4$$ = this, $ce_el$$15$$ = $that$$4$$.element;
      $co_oc$$ = $that$$4$$.options.containment;
      if ($ce_el$$15$$ = $co_oc$$ instanceof $$$$37$$ ? $co_oc$$.get(0) : /parent/.test($co_oc$$) ? $ce_el$$15$$.parent().get(0) : $co_oc$$) {
        $that$$4$$.$containerElement$ = $$$$37$$($ce_el$$15$$), /document/.test($co_oc$$) || $co_oc$$ === document ? ($that$$4$$.$containerOffset$ = {left:0, top:0}, $that$$4$$.$containerPosition$ = {left:0, top:0}, $that$$4$$.$parentData$ = {element:$$$$37$$(document), left:0, top:0, width:$$$$37$$(document).width(), height:$$$$37$$(document).height() || document.body.parentNode.scrollHeight}) : ($element$$223$$ = $$$$37$$($ce_el$$15$$), $p$$7$$ = [], $$$$37$$(["Top", "Right", "Left", "Bottom"]).each(function($i$$406$$, 
        $name$$125$$) {
          $p$$7$$[$i$$406$$] = $that$$4$$.$_num$($element$$223$$.css("padding" + $name$$125$$));
        }), $that$$4$$.$containerOffset$ = $element$$223$$.offset(), $that$$4$$.$containerPosition$ = $element$$223$$.position(), $that$$4$$.$containerSize$ = {height:$element$$223$$.innerHeight() - $p$$7$$[3], width:$element$$223$$.innerWidth() - $p$$7$$[1]}, $co_oc$$ = $that$$4$$.$containerOffset$, $ch$$3_height$$54$$ = $that$$4$$.$containerSize$.height, $cw$$1_width$$48$$ = $that$$4$$.$containerSize$.width, $cw$$1_width$$48$$ = $that$$4$$.$_hasScroll$($ce_el$$15$$, "left") ? $ce_el$$15$$.scrollWidth : 
        $cw$$1_width$$48$$, $ch$$3_height$$54$$ = $that$$4$$.$_hasScroll$($ce_el$$15$$) ? $ce_el$$15$$.scrollHeight : $ch$$3_height$$54$$, $that$$4$$.$parentData$ = {element:$ce_el$$15$$, left:$co_oc$$.left, top:$co_oc$$.top, width:$cw$$1_width$$48$$, height:$ch$$3_height$$54$$});
      }
    }, $_containment_resize$:function($event$$591$$, $ui$$24$$) {
      var $o$$8_woset$$, $co$$1_hoset$$, $cop_isParent$$, $cp_isOffsetRelative$$;
      $o$$8_woset$$ = this.options;
      $co$$1_hoset$$ = this.$containerOffset$;
      $cp_isOffsetRelative$$ = this.position;
      var $pRatio$$ = $event$$591$$.shiftKey;
      $cop_isParent$$ = {top:0, left:0};
      var $ce$$1$$ = this.$containerElement$, $continueResize$$ = !0;
      $ce$$1$$[0] !== document && /static/.test($ce$$1$$.css("position")) && ($cop_isParent$$ = $co$$1_hoset$$);
      $cp_isOffsetRelative$$.left < (this.$_helper$ ? $co$$1_hoset$$.left : 0) && (this.size.width += this.$_helper$ ? this.position.left - $co$$1_hoset$$.left : this.position.left - $cop_isParent$$.left, $pRatio$$ && (this.size.height = this.size.width / this.$aspectRatio$, $continueResize$$ = !1), this.position.left = $o$$8_woset$$.helper ? $co$$1_hoset$$.left : 0);
      $cp_isOffsetRelative$$.top < (this.$_helper$ ? $co$$1_hoset$$.top : 0) && (this.size.height += this.$_helper$ ? this.position.top - $co$$1_hoset$$.top : this.position.top, $pRatio$$ && (this.size.width = this.size.height * this.$aspectRatio$, $continueResize$$ = !1), this.position.top = this.$_helper$ ? $co$$1_hoset$$.top : 0);
      this.offset.left = this.$parentData$.left + this.position.left;
      this.offset.top = this.$parentData$.top + this.position.top;
      $o$$8_woset$$ = Math.abs((this.$_helper$ ? this.offset.left - $cop_isParent$$.left : this.offset.left - $co$$1_hoset$$.left) + this.$sizeDiff$.width);
      $co$$1_hoset$$ = Math.abs((this.$_helper$ ? this.offset.top - $cop_isParent$$.top : this.offset.top - $co$$1_hoset$$.top) + this.$sizeDiff$.height);
      $cop_isParent$$ = this.$containerElement$.get(0) === this.element.parent().get(0);
      $cp_isOffsetRelative$$ = /relative|absolute/.test(this.$containerElement$.css("position"));
      $cop_isParent$$ && $cp_isOffsetRelative$$ && ($o$$8_woset$$ -= Math.abs(this.$parentData$.left));
      $o$$8_woset$$ + this.size.width >= this.$parentData$.width && (this.size.width = this.$parentData$.width - $o$$8_woset$$, $pRatio$$ && (this.size.height = this.size.width / this.$aspectRatio$, $continueResize$$ = !1));
      $co$$1_hoset$$ + this.size.height >= this.$parentData$.height && (this.size.height = this.$parentData$.height - $co$$1_hoset$$, $pRatio$$ && (this.size.width = this.size.height * this.$aspectRatio$, $continueResize$$ = !1));
      $continueResize$$ || (this.position.left = $ui$$24$$.$prevPosition$.left, this.position.top = $ui$$24$$.$prevPosition$.top, this.size.width = $ui$$24$$.$prevSize$.width, this.size.height = $ui$$24$$.$prevSize$.height);
    }, $_containment_stop$:function() {
      var $o$$9$$ = this.options, $co$$2$$ = this.$containerOffset$, $cop$$1$$ = this.$containerPosition$, $ce$$2$$ = this.$containerElement$, $h$$6_helper$$ = $$$$37$$(this.helper), $ho$$ = $h$$6_helper$$.offset(), $w$$6$$ = $h$$6_helper$$.outerWidth() - this.$sizeDiff$.width, $h$$6_helper$$ = $h$$6_helper$$.outerHeight() - this.$sizeDiff$.height;
      this.$_helper$ && !$o$$9$$.animate && /relative/.test($ce$$2$$.css("position")) && $$$$37$$(this).css({left:$ho$$.left - $cop$$1$$.left - $co$$2$$.left, width:$w$$6$$, height:$h$$6_helper$$});
      this.$_helper$ && !$o$$9$$.animate && /static/.test($ce$$2$$.css("position")) && $$$$37$$(this).css({left:$ho$$.left - $cop$$1$$.left - $co$$2$$.left, width:$w$$6$$, height:$h$$6_helper$$});
    }, ui:function() {
      return{$originalElement$:this.$originalElement$, element:this.element, helper:this.helper, position:this.position, size:this.size, $originalSize$:this.$originalSize$, $originalPosition$:this.$originalPosition$, $prevSize$:this.$prevSize$, $prevPosition$:this.$prevPosition$};
    }});
  })();
  (function() {
    $oj$$40$$.$__registerWidget$("oj.ojDialog", $$$$37$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{cancelBehavior:"icon", dragAffordance:"title-bar", initialVisibility:"hide", modality:"modal", position:{my:"center", at:"center", of:window, collision:"fit", $using$:function($pos$$10$$) {
      var $topOffset$$ = $$$$37$$(this).css($pos$$10$$).offset().top;
      0 > $topOffset$$ && $$$$37$$(this).css("top", $pos$$10$$.top - $topOffset$$);
    }}, resizeBehavior:"resizable", role:"dialog", title:null, beforeClose:null, beforeOpen:null, close:null, focus:null, open:null, resize:null, resizeStart:null, resizeStop:null}, _ComponentCreate:function() {
      this._super();
      this.$originalCss$ = {display:this.element[0].style.display, width:this.element[0].style.width, height:this.element[0].style.height};
      this.$originalPosition$ = {parent:this.element.parent(), index:this.element.parent().children().index(this.element)};
      this.$originalTitle$ = this.element.attr("title");
      this.options.title = this.options.title || this.$originalTitle$;
      this.$_createWrapper$();
      this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.$uiDialog$);
      this.$userDefinedDialogHeader$ = !1;
      if (this.element.find(".oj-dialog").length) {
        var $that$$7$$ = this;
        this.element.find(".oj-dialog-header").each(function($index$$247$$, $li$$2$$) {
          var $dialogHeader$$ = $$$$37$$($li$$2$$);
          if (!$dialogHeader$$.closest(".oj-dialog-body").length) {
            return $that$$7$$.$_userDefinedHeader$ = $dialogHeader$$, $that$$7$$.$userDefinedDialogHeader$ = !0, !1;
          }
        });
      } else {
        this.$_userDefinedHeader$ = this.element.find(".oj-dialog-header"), this.$_userDefinedHeader$.length && (this.$userDefinedDialogHeader$ = !0);
      }
      this.$userDefinedDialogHeader$ ? (this.$_createPlaceHolderHeader$(this.$_userDefinedHeader$), this.$_userDefinedHeader$.prependTo(this.$uiDialog$), "icon" === this.options.cancelBehavior && (this.$_createCloseButton$(this.$_userDefinedHeader$), this.$_userDefinedTitle$ = this.$_userDefinedHeader$.find(".oj-dialog-title"), this.$_userDefinedTitle$.length && this.$_userDefinedTitle$.insertAfter(this.$uiDialogTitlebarCloseWrapper$))) : this.$_createTitlebar$();
      this.$uiDialogFooter$ = this.element.children(".oj-dialog-footer");
      this.$_createPlaceHolderFooter$(this.$uiDialogFooter$);
      this.$uiDialogFooter$.length && (this.$uiDialogFooter$.addClass("oj-helper-clearfix"), this.$uiDialogFooter$.appendTo(this.$uiDialog$));
      "title-bar" === this.options.dragAffordance && $$$$37$$.fn.draggable && this.$_makeDraggable$();
      this.$_isOpen$ = !1;
    }, $_AfterCreateEvent$:function() {
      "show" === this.options.initialVisibility && this.open();
    }, _destroy:function() {
      this.$_delayId$ && window.clearTimeout(this.$_delayId$);
      this.isOpen() && this.$_closeImplicitly$();
      this.$_resizableComponent$ && (this.$_resizableComponent$("instance") && this.$_resizableComponent$("destroy"), this.$_resizableComponent$ = null);
      this.$uiDialogFooter$.length && (this.$uiDialogFooter$.removeClass("oj-helper-clearfix"), $$$$37$$("#" + this.$_placeHolderFooterId$).replaceWith(this.$uiDialogFooter$));
      this.$_destroyCloseButton$();
      if (this.$userDefinedDialogHeader$) {
        var $header$$40$$ = this.$uiDialog$.find(".oj-dialog-header");
        $header$$40$$ && $$$$37$$("#" + this.$_placeHolderHeaderId$).replaceWith($header$$40$$);
      }
      this.$uiDialogTitle$ && (this.$uiDialogTitle$.remove(), this.$uiDialogTitle$ = null);
      this.element.removeUniqueId().removeClass("oj-dialog-content oj-dialog-default-content").css(this.$originalCss$);
      this.$uiDialog$ && this.$uiDialog$.stop(!0, !0);
      this.element.unwrap();
      this.$originalTitle$ && this.element.attr("title", this.$originalTitle$);
      this.$uiDialogTitlebar$ && (this.$uiDialogTitlebar$.remove(), this.$uiDialogTitlebar$ = null);
      delete this.$_popupServiceEvents$;
      delete this.$_isOpen$;
      this._super();
    }, widget:function() {
      return this.$uiDialog$;
    }, disable:$$$$37$$.noop, enable:$$$$37$$.noop, close:function($event$$592$$) {
      if (this.isOpen() && (!1 !== this._trigger("beforeClose", $event$$592$$) || this.$_ignoreBeforeCloseResultant$)) {
        this.$_isOpen$ = !1;
        this.$_focusedElement$ = null;
        this.opener.filter(":focusable").focus().length || $$$$37$$(this.document[0].activeElement).blur();
        var $psOptions$$2$$ = {};
        $psOptions$$2$$[$oj$$40$$.$PopupService$.$OPTION$.$POPUP$] = this.$uiDialog$;
        $oj$$40$$.$PopupService$.$getInstance$().close($psOptions$$2$$);
        this._trigger("close", $event$$592$$);
      }
    }, isOpen:function() {
      return this.$_isOpen$;
    }, open:function($event$$593_isRtl$$3_position$$25$$) {
      if (!1 !== this._trigger("beforeOpen", $event$$593_isRtl$$3_position$$25$$)) {
        if (!this.isOpen()) {
          this.$_isOpen$ = !0;
          this.opener = $$$$37$$(this.document[0].activeElement);
          "resizable" === this.options.resizeBehavior && this.$_makeResizable$();
          $event$$593_isRtl$$3_position$$25$$ = "rtl" === this.$_GetReadingDirection$();
          $event$$593_isRtl$$3_position$$25$$ = $oj$$40$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $event$$593_isRtl$$3_position$$25$$);
          var $psOptions$$3$$ = {};
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$POPUP$] = this.$uiDialog$;
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$LAUNCHER$] = this.opener;
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$POSITION$] = $event$$593_isRtl$$3_position$$25$$;
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$MODALITY$] = this.options.modality;
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-dialog-layer";
          $psOptions$$3$$[$oj$$40$$.$PopupService$.$OPTION$.$LAYER_LEVEL$] = $oj$$40$$.$PopupService$.$LAYER_LEVEL$.$TOP_LEVEL$;
          $oj$$40$$.$PopupService$.$getInstance$().open($psOptions$$3$$);
          this._trigger("open");
        }
        this.$_focusTabbable$();
      }
    }, refresh:function() {
      this._super();
    }, $_focusTabbable$:function() {
      var $hasFocus$$ = this.$_focusedElement$;
      $hasFocus$$ && 0 < $hasFocus$$.length && $oj$$40$$.$DomUtils$.$isAncestorOrSelf$(this.$uiDialog$[0], $hasFocus$$[0]) || ($hasFocus$$ || ($hasFocus$$ = this.element.find("[autofocus]")), $hasFocus$$.length || ($hasFocus$$ = this.element.find(":tabbable")), $hasFocus$$.length || this.$uiDialogFooter$.length && ($hasFocus$$ = this.$uiDialogFooter$.find(":tabbable")), $hasFocus$$.length || this.$uiDialogTitlebarClose$ && ($hasFocus$$ = this.$uiDialogTitlebarClose$.filter(":tabbable")), $hasFocus$$.length || 
      ($hasFocus$$ = this.$uiDialog$), $hasFocus$$.eq(0).focus(), this._trigger("focus"));
    }, _keepFocus:function($activeElement$$inline_1144_event$$594$$) {
      $activeElement$$inline_1144_event$$594$$.preventDefault();
      $activeElement$$inline_1144_event$$594$$ = this.document[0].activeElement;
      this.$uiDialog$[0] === $activeElement$$inline_1144_event$$594$$ || $$$$37$$.contains(this.$uiDialog$[0], $activeElement$$inline_1144_event$$594$$) || this.$_focusTabbable$();
    }, $_isNumber$:function($value$$287$$) {
      return!isNaN(parseInt($value$$287$$, 10));
    }, $_createWrapper$:function() {
      this.$_isResizing$ = !1;
      this.element.uniqueId();
      this.$_elementId$ = this.element.attr("id");
      this.$_wrapperId$ = "ojDialogWrapper-" + this.$_elementId$;
      this.$uiDialog$ = $$$$37$$("\x3cdiv\x3e");
      this.$uiDialog$.addClass("oj-dialog oj-component").hide().attr({tabIndex:-1, role:this.options.role, id:this.$_wrapperId$});
      this.$uiDialog$.insertBefore(this.element);
      this._on(this.$uiDialog$, {keyup:function() {
      }, keydown:function($event$$596$$) {
        if ("none" != this.options.cancelBehavior && !$event$$596$$.isDefaultPrevented() && $event$$596$$.keyCode && $event$$596$$.keyCode === $$$$37$$.ui.keyCode.ESCAPE) {
          $event$$596$$.preventDefault(), $event$$596$$.stopImmediatePropagation(), this.close($event$$596$$);
        } else {
          if ($event$$596$$.keyCode === $$$$37$$.ui.keyCode.TAB) {
            var $tabbables$$ = this.$uiDialog$.find(":tabbable"), $first$$9_index$$248$$ = $tabbables$$.filter(":first"), $last$$5$$ = $tabbables$$.filter(":last");
            $event$$596$$.shiftKey ? $event$$596$$.shiftKey && ($event$$596$$.target === $first$$9_index$$248$$[0] || $event$$596$$.target === this.$uiDialog$[0] ? ($last$$5$$.focus(), $event$$596$$.preventDefault()) : ($first$$9_index$$248$$ = $tabbables$$.index(document.activeElement), 1 == $first$$9_index$$248$$ && $tabbables$$[0] && ($tabbables$$[0].focus(), $event$$596$$.preventDefault()))) : $event$$596$$.target === $last$$5$$[0] || $event$$596$$.target === this.$uiDialog$[0] ? ($first$$9_index$$248$$.focus(), 
            $event$$596$$.preventDefault()) : ($first$$9_index$$248$$ = $tabbables$$.index(document.activeElement), 0 == $first$$9_index$$248$$ && $tabbables$$[1] && ($tabbables$$[1].focus(), $event$$596$$.preventDefault()));
          }
        }
      }});
      this.element.find("[aria-describedby]").length || this.$uiDialog$.attr({"aria-describedby":this.element.uniqueId().attr("id")});
    }, $_destroyCloseButton$:function() {
      this.$uiDialogTitlebarCloseWrapper$ && (this.$uiDialogTitlebarCloseWrapper$.remove(), this.$uiDialogTitlebarClose$ = this.$uiDialogTitlebarCloseWrapper$ = null);
    }, $_createCloseButton$:function($domDestination$$) {
      this.$uiDialogTitlebarCloseWrapper$ = $$$$37$$("\x3cdiv\x3e").addClass("oj-dialog-header-close-wrapper").attr("tabindex", "1").attr("aria-label", "close").attr("role", "button").appendTo($domDestination$$);
      this.$uiDialogTitlebarClose$ = $$$$37$$("\x3cspan\x3e").addClass("oj-component-icon oj-clickable-icon oj-dialog-close-icon").attr("alt", "close icon").prependTo(this.$uiDialogTitlebarCloseWrapper$);
      this._on(this.$uiDialogTitlebarCloseWrapper$, {click:function($event$$597$$) {
        $event$$597$$.preventDefault();
        $event$$597$$.stopImmediatePropagation();
        this.close($event$$597$$);
      }, mousedown:function($event$$598$$) {
        $$$$37$$($event$$598$$.currentTarget).addClass("oj-active");
      }, mouseup:function($event$$599$$) {
        $$$$37$$($event$$599$$.currentTarget).removeClass("oj-active");
      }, mouseenter:function($event$$600$$) {
        $$$$37$$($event$$600$$.currentTarget).addClass("oj-hover");
      }, mouseleave:function($currTarget$$3_event$$601$$) {
        $currTarget$$3_event$$601$$ = $currTarget$$3_event$$601$$.currentTarget;
        $$$$37$$($currTarget$$3_event$$601$$).removeClass("oj-hover");
        $$$$37$$($currTarget$$3_event$$601$$).removeClass("oj-active");
      }, keyup:function($event$$602$$) {
        if ($event$$602$$.keyCode && $event$$602$$.keyCode === $$$$37$$.ui.keyCode.SPACE || $event$$602$$.keyCode === $$$$37$$.ui.keyCode.ENTER) {
          $event$$602$$.preventDefault(), $event$$602$$.stopImmediatePropagation(), this.close($event$$602$$);
        }
      }});
    }, $_createTitlebar$:function() {
      var $uiDialogTitle$$;
      this.$uiDialogTitlebar$ = $$$$37$$("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix").prependTo(this.$uiDialog$);
      this._on(this.$uiDialogTitlebar$, {mousedown:function($event$$603$$) {
        $$$$37$$($event$$603$$.target).closest(".oj-dialog-close-icon") || this.$uiDialog$.focus();
      }});
      "icon" === this.options.cancelBehavior && this.$_createCloseButton$(this.$uiDialogTitlebar$);
      $uiDialogTitle$$ = $$$$37$$("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").appendTo(this.$uiDialogTitlebar$);
      this.$_title$($uiDialogTitle$$);
      this.$uiDialog$.attr({"aria-labelledby":$uiDialogTitle$$.attr("id")});
    }, $_title$:function($title$$10$$) {
      this.options.title || $title$$10$$.html("\x26#160;");
      $title$$10$$.text(this.options.title);
    }, $_makeDraggable$:function() {
      function $filteredUi$$($ui$$25$$) {
        return{position:$ui$$25$$.position, offset:$ui$$25$$.offset};
      }
      var $that$$8$$ = this, $options$$342$$ = this.options;
      this.$uiDialog$.draggable({$addClasses$:!1, cancel:".oj-dialog-content, .oj-dialog-header-close", handle:".oj-dialog-header", containment:"document", start:function($event$$604$$, $ui$$26$$) {
        $$$$37$$(this).addClass("oj-dialog-dragging");
        $that$$8$$.$_positionDescendents$();
        $that$$8$$._trigger("dragStart", $event$$604$$, $filteredUi$$($ui$$26$$));
      }, drag:function($event$$605$$, $ui$$27$$) {
        $that$$8$$.$_positionDescendents$();
        $that$$8$$._trigger("drag", $event$$605$$, $filteredUi$$($ui$$27$$));
      }, stop:function($event$$606$$, $ui$$28$$) {
        $options$$342$$.position = [$ui$$28$$.position.left - $that$$8$$.document.scrollLeft(), $ui$$28$$.position.top - $that$$8$$.document.scrollTop()];
        $$$$37$$(this).removeClass("oj-dialog-dragging");
        $that$$8$$.$_positionDescendents$();
        $that$$8$$._trigger("dragStop", $event$$606$$, $filteredUi$$($ui$$28$$));
      }});
      this.$uiDialog$.addClass("oj-draggable");
    }, $_makeResizable$:function() {
      function $filteredUi$$1$$($ui$$29$$) {
        return{originalPosition:$ui$$29$$.$originalPosition$, originalSize:$ui$$29$$.$originalSize$, position:$ui$$29$$.position, size:$ui$$29$$.size};
      }
      var $that$$9$$ = this;
      this.$uiDialog$.css("position");
      this.$_resizableComponent$ = this.$uiDialog$.ojResizable.bind(this.$uiDialog$);
      this.$_resizableComponent$({cancel:".oj-dialog-content", containment:"document", handles:"n,e,s,w,se,sw,ne,nw", start:function($event$$607$$, $ui$$30$$) {
        $that$$9$$.$_isResizing$ = !0;
        $$$$37$$(this).addClass("oj-dialog-resizing");
        $that$$9$$._trigger("resizeStart", $event$$607$$, $filteredUi$$1$$($ui$$30$$));
      }, resize:function($event$$608$$, $ui$$31$$) {
        $that$$9$$._trigger("resize", $event$$608$$, $filteredUi$$1$$($ui$$31$$));
      }, stop:function($event$$609$$, $ui$$32$$) {
        $that$$9$$.$_isResizing$ = !1;
        $$$$37$$(this).removeClass("oj-dialog-resizing");
        $that$$9$$._trigger("resizeStop", $event$$609$$, $filteredUi$$1$$($ui$$32$$));
      }});
    }, $_position$:function() {
      var $isRtl$$4_position$$27$$ = "rtl" === this.$_GetReadingDirection$(), $isRtl$$4_position$$27$$ = $oj$$40$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $isRtl$$4_position$$27$$);
      this.$uiDialog$.position($isRtl$$4_position$$27$$);
      this.$_positionDescendents$();
    }, $_positionDescendents$:function() {
      $oj$$40$$.$PopupService$.$getInstance$().$triggerOnDescendents$(this.$uiDialog$, $oj$$40$$.$PopupService$.$EVENT$.$POPUP_REFRESH$);
    }, _setOption:function($isDraggable$$1_key$$164$$, $value$$288$$, $flags$$37$$) {
      var $isResizable_psOptions$$4_uiDialog$$;
      $isResizable_psOptions$$4_uiDialog$$ = this.$uiDialog$;
      if ("disabled" !== $isDraggable$$1_key$$164$$) {
        switch(this._super($isDraggable$$1_key$$164$$, $value$$288$$, $flags$$37$$), $isDraggable$$1_key$$164$$) {
          case "dragAffordance":
            ($isDraggable$$1_key$$164$$ = $isResizable_psOptions$$4_uiDialog$$.hasClass("oj-draggable")) && "none" === $value$$288$$ && ($isResizable_psOptions$$4_uiDialog$$.draggable("destroy"), this.$uiDialog$.removeClass("oj-draggable"));
            $isDraggable$$1_key$$164$$ || "title-bar" !== $value$$288$$ || this.$_makeDraggable$();
            break;
          case "position":
            this.$_position$();
            break;
          case "resizeBehavior":
            $isResizable_psOptions$$4_uiDialog$$ = !1;
            this.$_resizableComponent$ && ($isResizable_psOptions$$4_uiDialog$$ = !0);
            $isResizable_psOptions$$4_uiDialog$$ && "resizable" != $value$$288$$ && (this.$_resizableComponent$("instance") && this.$_resizableComponent$("destroy"), this.$_resizableComponent$ = null);
            $isResizable_psOptions$$4_uiDialog$$ || "resizable" !== $value$$288$$ || this.$_makeResizable$();
            break;
          case "title":
            this.$_title$(this.$uiDialogTitlebar$.find(".oj-dialog-title"));
            break;
          case "role":
            $isResizable_psOptions$$4_uiDialog$$.attr("role", $value$$288$$);
            break;
          case "modality":
            this.isOpen() && ($isResizable_psOptions$$4_uiDialog$$ = {}, $isResizable_psOptions$$4_uiDialog$$[$oj$$40$$.$PopupService$.$OPTION$.$POPUP$] = this.$uiDialog$, $isResizable_psOptions$$4_uiDialog$$[$oj$$40$$.$PopupService$.$OPTION$.$MODALITY$] = $value$$288$$, $oj$$40$$.$PopupService$.$getInstance$().$changeOptions$($isResizable_psOptions$$4_uiDialog$$));
            break;
          case "cancelBehavior":
            "none" === $value$$288$$ || "escape" === $value$$288$$ ? this.$_destroyCloseButton$() : "icon" === $value$$288$$ && (this.$userDefinedDialogHeader$ ? (this.$_destroyCloseButton$(), this.$_createCloseButton$(this.$_userDefinedHeader$), this.$_userDefinedTitle$ = this.$_userDefinedHeader$.find(".oj-dialog-title"), this.$_userDefinedTitle$.length && this.$_userDefinedTitle$.insertAfter(this.$uiDialogTitlebarCloseWrapper$)) : (this.$_destroyCloseButton$(), this.$_createCloseButton$(this.$uiDialogTitlebar$), 
            this.$standardTitle$ = this.$uiDialogTitlebar$.find(".oj-dialog-title"), this.$standardTitle$.length && this.$standardTitle$.insertAfter(this.$uiDialogTitlebarCloseWrapper$)));
        }
      }
    }, $_createPlaceHolderFooter$:function($domElement$$4$$) {
      this.$_placeHolderFooterId$ = "ojDialogPlaceHolderFooter-" + this.$_elementId$;
      this.$_placeHolderFooter$ = $$$$37$$("\x3cdiv\x3e").hide().attr({id:this.$_placeHolderFooterId$});
      this.$_placeHolderFooter$.insertBefore($domElement$$4$$);
    }, $_createPlaceHolderHeader$:function($domElement$$5$$) {
      this.$_placeHolderHeaderId$ = "ojDialogPlaceHolderHeader-" + this.$_elementId$;
      this.$_placeHolderHeader$ = $$$$37$$("\x3cdiv\x3e").hide().attr({id:this.$_placeHolderHeaderId$});
      this.$_placeHolderHeader$.insertBefore($domElement$$5$$);
    }, getNodeBySubId:function($dotSubId_locator$$43_subId$$47$$) {
      if (null == $dotSubId_locator$$43_subId$$47$$) {
        return this.element ? this.element[0] : null;
      }
      $dotSubId_locator$$43_subId$$47$$ = $dotSubId_locator$$43_subId$$47$$.subId;
      switch($dotSubId_locator$$43_subId$$47$$) {
        case "oj-dialog-header":
        ;
        case "oj-dialog-body":
        ;
        case "oj-dialog-footer":
        ;
        case "oj-dialog-content":
        ;
        case "oj-dialog-header-close-wrapper":
        ;
        case "oj-resizable-n":
        ;
        case "oj-resizable-e":
        ;
        case "oj-resizable-s":
        ;
        case "oj-resizable-w":
        ;
        case "oj-resizable-se":
        ;
        case "oj-resizable-sw":
        ;
        case "oj-resizable-ne":
        ;
        case "oj-resizable-nw":
          $dotSubId_locator$$43_subId$$47$$ = "." + $dotSubId_locator$$43_subId$$47$$;
          if (!this.widget().find($dotSubId_locator$$43_subId$$47$$)) {
            break;
          }
          return this.widget().find($dotSubId_locator$$43_subId$$47$$)[0];
        case "oj-dialog-close-icon":
        ;
        case "oj-dialog-close":
          if (!this.widget().find(".oj-dialog-close-icon")) {
            break;
          }
          return this.widget().find(".oj-dialog-close-icon")[0];
      }
      return null;
    }, getSubIdByNode:function($node$$97_nodeCached$$3$$) {
      if (null != $node$$97_nodeCached$$3$$) {
        $node$$97_nodeCached$$3$$ = $$$$37$$($node$$97_nodeCached$$3$$);
        if ($node$$97_nodeCached$$3$$.hasClass("oj-dialog-header")) {
          return{subId:"oj-dialog-header"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-dialog-footer")) {
          return{subId:"oj-dialog-footer"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-dialog-content")) {
          return{subId:"oj-dialog-content"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-dialog-header-close-wrapper")) {
          return{subId:"oj-dialog-header-close-wrapper"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-dialog-close-icon")) {
          return{subId:"oj-dialog-close"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-n")) {
          return{subId:"oj-resizable-n"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-e")) {
          return{subId:"oj-resizable-e"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-s")) {
          return{subId:"oj-resizable-s"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-w")) {
          return{subId:"oj-resizable-w"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-se")) {
          return{subId:"oj-resizable-se"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-sw")) {
          return{subId:"oj-resizable-sw"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-ne")) {
          return{subId:"oj-resizable-ne"};
        }
        if ($node$$97_nodeCached$$3$$.hasClass("oj-resizable-nw")) {
          return{subId:"oj-resizable-nw"};
        }
      }
      return null;
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$12$$ = this.$_popupServiceEvents$ = {};
        $events$$12$$[$oj$$40$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$37$$.proxy(this.$_closeImplicitly$, this);
        $events$$12$$[$oj$$40$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$37$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$12$$[$oj$$40$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$37$$.proxy(this.$_positionDescendents$, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeImplicitly$:function() {
      this.$_ignoreBeforeCloseResultant$ = !0;
      this.close();
      delete this.$_ignoreBeforeCloseResultant$;
    }});
  })();
});
