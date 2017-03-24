/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$12$$, $$$$12$$) {
  var $_ComboUtils$$ = {$GENERATED_OPTIONS_SELECTOR$:"oj-select-options-generated", $KEY$:{TAB:9, ENTER:13, $ESC$:27, SPACE:32, LEFT:37, UP:38, RIGHT:39, DOWN:40, $SHIFT$:16, $CTRL$:17, $ALT$:18, PAGE_UP:33, PAGE_DOWN:34, HOME:36, END:35, $BACKSPACE$:8, $DELETE$:46, $isControl$:function($e$$52$$) {
    switch($e$$52$$.which) {
      case $_ComboUtils$$.$KEY$.$SHIFT$:
      ;
      case $_ComboUtils$$.$KEY$.$CTRL$:
      ;
      case $_ComboUtils$$.$KEY$.$ALT$:
        return!0;
    }
    return $e$$52$$.metaKey || $e$$52$$.ctrlKey ? !0 : !1;
  }, $isFunctionKey$:function($k$$12$$) {
    $k$$12$$ = $k$$12$$.which ? $k$$12$$.which : $k$$12$$;
    return 112 <= $k$$12$$ && 123 >= $k$$12$$;
  }}, $DEFAULT_QUERY_DELAY$:70, $ValueChangeTriggerTypes$:{$ENTER_PRESSED$:"enter_pressed", $OPTION_SELECTED$:"option_selected", $BLUR$:"blur", $SEARCH_ICON_CLICKED$:"search_icon_clicked"}, $lastMousePosition$:{x:0, y:0}, $nextUid$:function() {
    var $counter$$ = 1;
    return function() {
      return $counter$$++;
    };
  }(), $scrollBarDimensions$:null, $each2$:function($list$$2$$, $c$$42$$) {
    for (var $j$$32$$ = $$$$12$$.isFunction($list$$2$$[0]) ? $$$$12$$($list$$2$$[0]()) : $$$$12$$($list$$2$$[0]), $i$$199$$ = -1, $l$$3$$ = $list$$2$$.length;++$i$$199$$ < $l$$3$$ && ($j$$32$$.context = $j$$32$$[0] = $$$$12$$.isFunction($list$$2$$[0]) ? $list$$2$$[$i$$199$$]() : $list$$2$$[$i$$199$$]) && !1 !== $c$$42$$.call($j$$32$$[0], $i$$199$$, $j$$32$$);) {
    }
    return $list$$2$$;
  }, $measureScrollbar$:function() {
    var $$template$$ = $$$$12$$("\x3cdiv class\x3d'oj-listbox-measure-scrollbar'\x3e\x3c/div\x3e");
    $$template$$.appendTo("body");
    var $dim$$ = {width:$$template$$.width() - $$template$$[0].clientWidth, height:$$template$$.height() - $$template$$[0].clientHeight};
    $$template$$.remove();
    return $dim$$;
  }, $splitVal$:function($string$$3$$, $separator$$) {
    var $val$$32$$, $i$$200$$, $l$$4$$;
    if (null === $string$$3$$ || 1 > $string$$3$$.length) {
      return[];
    }
    $val$$32$$ = $string$$3$$.split($separator$$);
    $i$$200$$ = 0;
    for ($l$$4$$ = $val$$32$$.length;$i$$200$$ < $l$$4$$;$i$$200$$ += 1) {
      $val$$32$$[$i$$200$$] = $$$$12$$.trim($val$$32$$[$i$$200$$]);
    }
    return $val$$32$$;
  }, $getSideBorderPadding$:function($element$$139$$) {
    return $element$$139$$.outerWidth(!1) - $element$$139$$.width();
  }, $installKeyUpChangeEvent$:function($element$$140$$) {
    $element$$140$$.on("keydown", function() {
      void 0 === $$$$12$$.data($element$$140$$, "keyup-change-value") && $$$$12$$.data($element$$140$$, "keyup-change-value", $element$$140$$.val());
    });
    $element$$140$$.on("keyup", function($e$$53_val$$33$$) {
      $e$$53_val$$33$$.which === $_ComboUtils$$.$KEY$.ENTER ? $e$$53_val$$33$$.stopPropagation() : ($e$$53_val$$33$$ = $$$$12$$.data($element$$140$$, "keyup-change-value"), void 0 !== $e$$53_val$$33$$ && $element$$140$$.val() !== $e$$53_val$$33$$ && ($$$$12$$.removeData($element$$140$$, "keyup-change-value"), $element$$140$$.trigger("keyup-change")));
    });
  }, $installFilteredMouseMove$:function($element$$141$$) {
    $element$$141$$.on("mousemove", function($e$$54$$) {
      var $lastpos$$ = $_ComboUtils$$.$lastMousePosition$;
      if (void 0 === $lastpos$$ || $lastpos$$.x !== $e$$54$$.pageX || $lastpos$$.y !== $e$$54$$.pageY) {
        $$$$12$$($e$$54$$.target).trigger("mousemove-filtered", $e$$54$$), $_ComboUtils$$.$lastMousePosition$.x = $e$$54$$.pageX, $_ComboUtils$$.$lastMousePosition$.y = $e$$54$$.pageY;
      }
    });
  }, $thunk$:function($formula$$) {
    var $evaluated$$ = !1, $value$$203$$;
    return function() {
      !1 === $evaluated$$ && ($value$$203$$ = $formula$$(), $evaluated$$ = !0);
      return $value$$203$$;
    };
  }, $_focus$:function($$el$$) {
    $$el$$[0] !== document.activeElement && window.setTimeout(function() {
      var $el$$3_range$$16$$ = $$el$$[0], $pos$$6$$ = $$el$$.val().length;
      $$el$$.focus();
      $$el$$.is(":visible") && $el$$3_range$$16$$ === document.activeElement && ($el$$3_range$$16$$.setSelectionRange ? $el$$3_range$$16$$.setSelectionRange($pos$$6$$, $pos$$6$$) : $el$$3_range$$16$$.createTextRange && ($el$$3_range$$16$$ = $el$$3_range$$16$$.createTextRange(), $el$$3_range$$16$$.collapse(!1), $el$$3_range$$16$$.select()));
    }, 40);
  }, $getCursorInfo$:function($el$$4$$) {
    $el$$4$$ = $$$$12$$($el$$4$$)[0];
    var $offset$$16_sel$$ = 0, $length$$14$$ = 0;
    "selectionStart" in $el$$4$$ ? ($offset$$16_sel$$ = $el$$4$$.selectionStart, $length$$14$$ = $el$$4$$.selectionEnd - $offset$$16_sel$$) : "selection" in document && ($el$$4$$.focus(), $offset$$16_sel$$ = document.selection.createRange(), $length$$14$$ = document.selection.createRange().text.length, $offset$$16_sel$$.moveStart("character", -$el$$4$$.value.length), $offset$$16_sel$$ = $offset$$16_sel$$.text.length - $length$$14$$);
    return{offset:$offset$$16_sel$$, length:$length$$14$$};
  }, $killEvent$:function($event$$226$$) {
    $event$$226$$.preventDefault();
    $event$$226$$.stopPropagation();
  }, $killEventImmediately$:function($event$$227$$) {
    $event$$227$$.preventDefault();
    $event$$227$$.stopImmediatePropagation();
  }, $defaultEscapeMarkup$:function($markup$$) {
    var $replace_map$$ = {"\\":"\x26#92;", "\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#39;"};
    return String($markup$$).replace(/[&<>"'\\]/g, function($match$$17$$) {
      return $replace_map$$[$match$$17$$];
    });
  }, $local$:function($options$$233$$, $optKeys$$) {
    function $text$$14$$($item$$6$$) {
      return "" + $item$$6$$.label;
    }
    var $data$$80$$ = $options$$233$$, $dataText$$, $tmp$$1$$;
    $$$$12$$.isArray($data$$80$$) && ($tmp$$1$$ = $data$$80$$, $data$$80$$ = {$results$:$tmp$$1$$});
    !1 === $$$$12$$.isFunction($data$$80$$) && ($tmp$$1$$ = $data$$80$$, $data$$80$$ = function $$data$$80$$$() {
      return $tmp$$1$$;
    });
    var $dataItem$$ = $data$$80$$();
    $dataItem$$ && $dataItem$$.text && ($text$$14$$ = $dataItem$$.text, $$$$12$$.isFunction($text$$14$$) || ($dataText$$ = $dataItem$$.text, $text$$14$$ = function $$text$$14$$$($item$$7$$) {
      return $item$$7$$[$dataText$$];
    }));
    return function($query$$6$$) {
      var $filtered$$ = {$results$:[]};
      "" !== $query$$6$$.$term$ || $optKeys$$ ? ($data$$80$$() && $_ComboUtils$$.$each2$($$$$12$$($data$$80$$().$results$), function($i$$201$$, $datum$$) {
        $_ComboUtils$$.$_processData$($query$$6$$, $datum$$, $filtered$$.$results$, $optKeys$$, !0, $text$$14$$);
      }), $query$$6$$.$callback$($filtered$$)) : $query$$6$$.$callback$($data$$80$$());
    };
  }, $createOptionTag$:function($depth$$8$$, $value$$204$$, $label$$7$$, $formatFunc$$) {
    var $node$$35$$ = $$$$12$$("\x3coption\x3e");
    $node$$35$$.addClass("oj-listbox-result oj-listbox-result-selectable oj-listbox-results-depth-" + $depth$$8$$);
    $node$$35$$.attr("role", "option");
    $node$$35$$.attr("id", "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$());
    $node$$35$$.text($formatFunc$$($label$$7$$));
    $node$$35$$.attr("value", $value$$204$$);
    return $node$$35$$;
  }, $createOptgroupTag$:function($container$$2$$, $label$$8$$, $formatFunc$$1$$) {
    var $node$$36$$ = $$$$12$$("\x3coptgroup\x3e");
    $node$$36$$.addClass("oj-listbox-results-sub");
    $node$$36$$.attr("label", $formatFunc$$1$$($label$$8$$));
    $container$$2$$.addClass("oj-listbox-result-with-children");
    return $node$$36$$;
  }, $listPopulateResults$:function($container$$3$$, $list$$3$$, $formatFunc$$2$$) {
    function $populate$$($container$$4$$, $list$$4$$, $depth$$9$$) {
      var $node$$37$$, $li$$, $label$$9$$, $ul$$;
      $list$$4$$.each(function() {
        $li$$ = $$$$12$$(this);
        $li$$.is("li") && (0 < $li$$.children("ul").length ? ($label$$9$$ = $li$$.contents().filter(function() {
          return 1 !== this.nodeType || "ul" !== this.tagName.toLowerCase();
        }).text(), $node$$37$$ = $_ComboUtils$$.$createOptgroupTag$($container$$4$$, $label$$9$$, $formatFunc$$2$$), $ul$$ = $li$$.children("ul"), $populate$$($node$$37$$, $ul$$.children(), $depth$$9$$ + 1)) : $node$$37$$ = $_ComboUtils$$.$createOptionTag$($depth$$9$$, $li$$.attr("oj-data-value"), $li$$.text(), $formatFunc$$2$$), $node$$37$$.appendTo($container$$4$$));
      });
    }
    $populate$$($container$$3$$, $list$$3$$, 0);
  }, $lookupOptionKeys$:function($result$$29$$, $optionsKeys$$, $key$$81$$) {
    $key$$81$$ = $optionsKeys$$[$key$$81$$] || $key$$81$$;
    return $result$$29$$[$key$$81$$];
  }, $arrayPopulateResults$:function($container$$5$$, $arrlist$$, $formatFunc$$3$$, $optionsKeys$$1$$) {
    function $populate$$1$$($container$$6$$, $arrlist$$1$$, $depth$$10$$, $optionsKeys$$2$$) {
      for (var $item$$8$$, $label$$10_node$$38$$, $children$$2_value$$205$$, $i$$202$$ = 0, $l$$5$$ = $arrlist$$1$$.length;$i$$202$$ < $l$$5$$;$i$$202$$++) {
        $item$$8$$ = $arrlist$$1$$[$i$$202$$], $children$$2_value$$205$$ = $_ComboUtils$$.$lookupOptionKeys$($item$$8$$, $optionsKeys$$2$$, "children"), $label$$10_node$$38$$ = $_ComboUtils$$.$lookupOptionKeys$($item$$8$$, $optionsKeys$$2$$, "label"), $children$$2_value$$205$$ && 0 < $children$$2_value$$205$$.length ? ($label$$10_node$$38$$ = $_ComboUtils$$.$createOptgroupTag$($container$$6$$, $label$$10_node$$38$$, $formatFunc$$3$$), $populate$$1$$($label$$10_node$$38$$, $children$$2_value$$205$$, 
        $depth$$10$$ + 1, $optionsKeys$$2$$.childKeys || {})) : ($children$$2_value$$205$$ = $_ComboUtils$$.$lookupOptionKeys$($item$$8$$, $optionsKeys$$2$$, "value"), $label$$10_node$$38$$ = $_ComboUtils$$.$createOptionTag$($depth$$10$$, $children$$2_value$$205$$, $label$$10_node$$38$$, $formatFunc$$3$$)), $label$$10_node$$38$$.appendTo($container$$6$$);
      }
    }
    $populate$$1$$($container$$5$$, $arrlist$$, 0, $optionsKeys$$1$$ || {});
  }, $cleanupResults$:function($container$$7$$) {
    $container$$7$$.children().remove();
    $container$$7$$.removeClass("oj-listbox-result-with-children");
  }, $remote$:function($options$$234$$, $optKeys$$1$$) {
    return function($query$$7$$) {
      var $context$$63$$ = {component:this.$ojContext$};
      $query$$7$$.value ? $context$$63$$.value = $query$$7$$.value : $context$$63$$.term = $query$$7$$.$term$ || "";
      $options$$234$$($context$$63$$).then(function($data$$81$$) {
        var $filtered$$1$$ = {$results$:[]};
        $data$$81$$ && $_ComboUtils$$.$each2$($$$$12$$($data$$81$$), function($i$$203$$, $datum$$1$$) {
          $_ComboUtils$$.$_processData$($query$$7$$, $datum$$1$$, $filtered$$1$$.$results$, $optKeys$$1$$, !1);
        });
        $query$$7$$.$callback$($filtered$$1$$);
      });
    };
  }, $_processData$:function($query$$8$$, $datum$$2$$, $collection$$30$$, $keys$$26$$, $isLocal$$, $text$$15$$) {
    var $group$$, $attr$$17$$;
    $datum$$2$$ = $datum$$2$$[0];
    !$datum$$2$$.label && $keys$$26$$ && $keys$$26$$.label && ($datum$$2$$.label = $datum$$2$$[$keys$$26$$.label]);
    !$datum$$2$$.value && $keys$$26$$ && $keys$$26$$.value && ($datum$$2$$.value = $datum$$2$$[$keys$$26$$.value]);
    !$datum$$2$$.children && $keys$$26$$ && $keys$$26$$.children && ($datum$$2$$.children = $datum$$2$$[$keys$$26$$.children], delete $datum$$2$$[$keys$$26$$.children]);
    if ($datum$$2$$.children) {
      $group$$ = {};
      for ($attr$$17$$ in $datum$$2$$) {
        $datum$$2$$.hasOwnProperty($attr$$17$$) && ($group$$[$attr$$17$$] = $datum$$2$$[$attr$$17$$]);
      }
      $group$$.children = [];
      $_ComboUtils$$.$each2$($$$$12$$($datum$$2$$.children), function($i$$204$$, $childDatum$$) {
        $_ComboUtils$$.$_processData$($query$$8$$, $childDatum$$, $group$$.children, $keys$$26$$ && $keys$$26$$.childKeys ? $keys$$26$$.childKeys : null, $isLocal$$, $text$$15$$);
      });
      (!$isLocal$$ || $group$$.children.length || $query$$8$$.$matcher$($query$$8$$.$term$, $text$$15$$($group$$), $datum$$2$$)) && $collection$$30$$.push($group$$);
    } else {
      $isLocal$$ && !$query$$8$$.$matcher$($query$$8$$.$term$, $text$$15$$($datum$$2$$), $datum$$2$$) || $collection$$30$$.push($datum$$2$$);
    }
  }, $checkFormatter$:function($ojContext$$, $formatter$$, $formatterName$$) {
    if ($$$$12$$.isFunction($formatter$$)) {
      return!0;
    }
    if (!$formatter$$) {
      return!1;
    }
    throw Error($formatterName$$ + " must be a function or a false value");
  }, $clazz$:function($SuperClass$$, $methods$$1$$) {
    function $constructor$$1$$() {
    }
    $oj$$12$$.$Object$.$createSubclass$($constructor$$1$$, $SuperClass$$, "");
    $constructor$$1$$.prototype = $$$$12$$.extend($constructor$$1$$.prototype, $methods$$1$$);
    return $constructor$$1$$;
  }, $LAST_QUERY_RESULT$:"last-query-result", $getLastQueryResult$:function($context$$64$$) {
    return $$$$12$$.data($context$$64$$.$container$, $context$$64$$.$_classNm$ + "-" + $_ComboUtils$$.$LAST_QUERY_RESULT$);
  }, $saveLastQueryResult$:function($context$$65$$, $queryResult$$2$$) {
    $$$$12$$.data($context$$65$$.$container$, $context$$65$$.$_classNm$ + "-" + $_ComboUtils$$.$LAST_QUERY_RESULT$, $queryResult$$2$$);
  }}, $_AbstractOjChoice$$ = $_ComboUtils$$.$clazz$(Object, {$_bind$:function($func$$8$$) {
    var $self$$83$$ = this;
    return function() {
      $func$$8$$.apply($self$$83$$, arguments);
    };
  }, _init:function($opts$$11$$) {
    var $disabled$$2_dropdownList_elemName_readonly_results$$1$$, $search$$1$$, $className$$24$$ = this.$_classNm$;
    $disabled$$2_dropdownList_elemName_readonly_results$$1$$ = this.$_elemNm$;
    this.$ojContext$ = $opts$$11$$.$ojContext$;
    this.$opts$ = $opts$$11$$ = this.$_prepareOpts$($opts$$11$$);
    this.id = $opts$$11$$.id;
    this.$headerInitialized$ = !1;
    void 0 !== $opts$$11$$.element.data($disabled$$2_dropdownList_elemName_readonly_results$$1$$) && null !== $opts$$11$$.element.data($disabled$$2_dropdownList_elemName_readonly_results$$1$$) && $opts$$11$$.element.data($disabled$$2_dropdownList_elemName_readonly_results$$1$$)._destroy();
    this.$container$ = this.$_createContainer$();
    var $alabel_label$$11_rootAttr$$ = $opts$$11$$.rootAttributes;
    this.$containerId$ = $alabel_label$$11_rootAttr$$ && $alabel_label$$11_rootAttr$$.id ? $alabel_label$$11_rootAttr$$.id : "ojChoiceId_" + ($opts$$11$$.element.attr("id") || "autogen" + $_ComboUtils$$.$nextUid$());
    this.$containerId$.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1");
    this.$container$.attr("id", this.$containerId$);
    this.body = $_ComboUtils$$.$thunk$(function() {
      return $opts$$11$$.element.closest("body");
    });
    this.$container$.attr("style", $opts$$11$$.element.attr("style"));
    this.$elementTabIndex$ = this.$opts$.element.attr("tabindex");
    this.$opts$.element.data($disabled$$2_dropdownList_elemName_readonly_results$$1$$, this).attr("tabindex", "-1").before(this.$container$);
    this.$container$.data($disabled$$2_dropdownList_elemName_readonly_results$$1$$, this);
    this.$dropdown$ = this.$container$.find(".oj-listbox-drop");
    this.$dropdown$.data("ojlistbox", this);
    this.$_setPickerAttributes$($opts$$11$$.pickerAttributes);
    this.$dropdown$.attr("data-oj-containerid", this.$containerId$);
    this.$results$ = $disabled$$2_dropdownList_elemName_readonly_results$$1$$ = this.$container$.find(".oj-listbox-results");
    this.$results$.on("click", $_ComboUtils$$.$killEvent$);
    if ($alabel_label$$11_rootAttr$$ = this.$ojContext$.$_GetLabelElement$()) {
      var $labelId$$ = $alabel_label$$11_rootAttr$$.attr("id");
      $labelId$$ ? $disabled$$2_dropdownList_elemName_readonly_results$$1$$.attr("aria-labelledby", $labelId$$) : $disabled$$2_dropdownList_elemName_readonly_results$$1$$.attr("aria-label", $alabel_label$$11_rootAttr$$.text());
    } else {
      ($alabel_label$$11_rootAttr$$ = this.$ojContext$.element.attr("aria-label")) && $disabled$$2_dropdownList_elemName_readonly_results$$1$$.attr("aria-label", $alabel_label$$11_rootAttr$$);
    }
    $opts$$11$$.list && $$$$12$$("#" + $opts$$11$$.list).is("ul") && ($disabled$$2_dropdownList_elemName_readonly_results$$1$$ = $$$$12$$("#" + $opts$$11$$.list), this.$dropdownListParent$ = $disabled$$2_dropdownList_elemName_readonly_results$$1$$.parent(), $disabled$$2_dropdownList_elemName_readonly_results$$1$$.addClass("oj-listbox-results").attr("role", "listbox"), this.$results$.replaceWith($disabled$$2_dropdownList_elemName_readonly_results$$1$$), this.$results$ = $disabled$$2_dropdownList_elemName_readonly_results$$1$$ = 
    this.$container$.find(".oj-listbox-results"), this.$results$.css("display", ""));
    this.search = $search$$1$$ = "oj-select" == $className$$24$$ ? this.$container$.find("input.oj-listbox-input") : this.$container$.find("input." + $className$$24$$ + "-input");
    this.$resultsPage$ = this.$queryCount$ = 0;
    this.context = null;
    this.$_initContainer$();
    this.$container$.on("click", $_ComboUtils$$.$killEvent$);
    $_ComboUtils$$.$installFilteredMouseMove$(this.$results$);
    this.$dropdown$.on("mousemove-filtered touchstart touchmove touchend", ".oj-listbox-results", this.$_bind$(this.$_highlightUnderEvent$));
    $$$$12$$(this.$container$).on("change", "." + $className$$24$$ + "-input", function($e$$55$$) {
      $e$$55$$.stopPropagation();
    });
    $$$$12$$(this.$dropdown$).on("change", "." + $className$$24$$ + "-input", function($e$$56$$) {
      $e$$56$$.stopPropagation();
    });
    var $self$$84$$ = this;
    $_ComboUtils$$.$installKeyUpChangeEvent$($search$$1$$);
    $search$$1$$.on("keyup-change input paste", this.$_bind$(this.$_updateResults$));
    $search$$1$$.on("focus", function() {
      $search$$1$$.addClass($className$$24$$ + "-focused");
      "oj-select" !== $className$$24$$ && $self$$84$$.$container$.addClass("oj-focus");
    });
    $search$$1$$.on("blur", function() {
      $search$$1$$.removeClass($className$$24$$ + "-focused");
      "oj-select" !== $className$$24$$ && $self$$84$$.$container$.removeClass("oj-focus");
    });
    this.$dropdown$.on("mouseup", ".oj-listbox-results", this.$_bind$(function($e$$57$$) {
      0 < $$$$12$$($e$$57$$.target).closest(".oj-listbox-result-selectable").length && (this.$_highlightUnderEvent$($e$$57$$), this.$_selectHighlighted$(null, $e$$57$$));
    }));
    this.$dropdown$.on("click mouseup mousedown", function($e$$58$$) {
      $e$$58$$.stopPropagation();
    });
    $$$$12$$.isFunction(this.$opts$.$initSelection$) && this.$_initSelection$();
    $disabled$$2_dropdownList_elemName_readonly_results$$1$$ = $opts$$11$$.element.prop("disabled");
    void 0 === $disabled$$2_dropdownList_elemName_readonly_results$$1$$ && ($disabled$$2_dropdownList_elemName_readonly_results$$1$$ = !1);
    this.$_enable$(!$disabled$$2_dropdownList_elemName_readonly_results$$1$$);
    $disabled$$2_dropdownList_elemName_readonly_results$$1$$ = $opts$$11$$.element.prop("readonly");
    void 0 === $disabled$$2_dropdownList_elemName_readonly_results$$1$$ && ($disabled$$2_dropdownList_elemName_readonly_results$$1$$ = !1);
    this.$_readonly$($disabled$$2_dropdownList_elemName_readonly_results$$1$$);
    $_ComboUtils$$.$scrollBarDimensions$ = $_ComboUtils$$.$scrollBarDimensions$ || $_ComboUtils$$.$measureScrollbar$();
    this.autofocus = $opts$$11$$.element.prop("autofocus");
    $opts$$11$$.element.prop("autofocus", !1);
    this.autofocus && this.$_focus$();
  }, $_clickAwayHandler$:function($event$$228$$) {
    var $dropdown_self$$85$$ = this.$dropdown$;
    !$$$$12$$($event$$228$$.target).closest($dropdown_self$$85$$).length && !$$$$12$$($event$$228$$.target).closest("#" + $dropdown_self$$85$$.attr("data-oj-containerid")).length && 0 < $dropdown_self$$85$$.length && ($dropdown_self$$85$$ = $dropdown_self$$85$$.data("ojlistbox"), $dropdown_self$$85$$.close($event$$228$$));
  }, $_surrogateRemoveHandler$:function() {
    this.$dropdown$ && this.$dropdown$.remove();
  }, _destroy:function() {
    var $closeDelayTimer_element$$142$$ = this.$_closeDelayTimer$;
    isNaN($closeDelayTimer_element$$142$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer_element$$142$$));
    var $closeDelayTimer_element$$142$$ = this.$opts$.element, $ojcomp$$ = $closeDelayTimer_element$$142$$.data(this.$_elemNm$);
    this.close();
    this.$propertyObserver$ && (delete this.$propertyObserver$, this.$propertyObserver$ = null);
    this.$opts$.list && this.$results$ && (this.$_cleanupList$(this.$results$), this.$dropdownListParent$ && this.$dropdownListParent$.append(this.$results$));
    void 0 !== $ojcomp$$ && ($ojcomp$$.$container$.remove(), $ojcomp$$.$dropdown$.remove(), $closeDelayTimer_element$$142$$.removeAttr("aria-hidden").removeData(this.$_elemNm$).off("." + this.$_classNm$).prop("autofocus", this.autofocus || !1), this.$elementTabIndex$ ? $closeDelayTimer_element$$142$$.attr({$tabindex$:this.$elementTabIndex$}) : $closeDelayTimer_element$$142$$.removeAttr("tabindex"), $closeDelayTimer_element$$142$$.show());
  }, $_cleanupList$:function($list$$5$$) {
    if ($list$$5$$ && $list$$5$$.is("ul")) {
      $list$$5$$.removeClass("oj-listbox-results oj-listbox-result-sub");
      $list$$5$$.removeAttr("role");
      for (var $i$$205_wrappingDiv$$ = $list$$5$$.children().length - 1;0 <= $i$$205_wrappingDiv$$;$i$$205_wrappingDiv$$--) {
        this.$_cleanupList$($$$$12$$($list$$5$$.children()[$i$$205_wrappingDiv$$]));
      }
    } else {
      $list$$5$$.is("li") && (($list$$5$$.hasClass("oj-listbox-placeholder") || $list$$5$$.hasClass("oj-listbox-no-results")) && $list$$5$$.remove(), $list$$5$$.attr("class") && $list$$5$$.attr("class", $list$$5$$.attr("class").replace(/\oj-listbox-\S+/g, "")), ($i$$205_wrappingDiv$$ = $list$$5$$.children(".oj-listbox-result-label")) && $i$$205_wrappingDiv$$.contents().unwrap(), "none" == $list$$5$$.css("display") && $list$$5$$.css("display", ""), this.$_cleanupList$($list$$5$$.children("ul")));
    }
  }, $_optionToData$:function($element$$143$$) {
    if ($element$$143$$.is("option")) {
      return{value:$element$$143$$.prop("value"), label:$element$$143$$.text(), element:$element$$143$$.get(), css:$element$$143$$.attr("class"), disabled:$element$$143$$.prop("disabled"), locked:"locked" === $element$$143$$.attr("locked") || !0 === $element$$143$$.data("locked")};
    }
    if ($element$$143$$.is("optgroup")) {
      return{label:$element$$143$$.attr("label"), children:[], element:$element$$143$$.get(), css:$element$$143$$.attr("class")};
    }
    if ($element$$143$$.is("li")) {
      var $elemChildren_itemLabel$$, $groupData$$ = null;
      ($elemChildren_itemLabel$$ = $element$$143$$.children()) && 0 < $elemChildren_itemLabel$$.length && $elemChildren_itemLabel$$.is("ul") ? ($elemChildren_itemLabel$$ = $element$$143$$.attr("oj-data-label") ? $element$$143$$.attr("oj-data-label") : $element$$143$$.clone().children().remove().end().text().trim(), $groupData$$ = []) : $elemChildren_itemLabel$$ = $element$$143$$.attr("oj-data-label") ? $element$$143$$.attr("oj-data-label") : $element$$143$$.text().trim();
      return{value:$element$$143$$.attr("oj-data-value"), label:$elemChildren_itemLabel$$, element:$element$$143$$.get(), css:$element$$143$$.attr("class"), children:$groupData$$};
    }
  }, $_prepareOpts$:function($opts$$12$$) {
    var $element$$144$$, $datalist$$, $self$$86$$ = this;
    $opts$$12$$.options && Array.isArray($opts$$12$$.options) && $opts$$12$$.optionsKeys && ($opts$$12$$.options = $$$$12$$.extend(!0, [], $opts$$12$$.options));
    $element$$144$$ = $opts$$12$$.element;
    var $tagName$$4$$ = $element$$144$$.get(0).tagName.toLowerCase();
    "input" === $tagName$$4$$ && $element$$144$$.attr("list") ? this.$datalist$ = $datalist$$ = $$$$12$$("#" + $element$$144$$.attr("list")) : "select" === $tagName$$4$$ && 0 < $element$$144$$.children().length ? this.$datalist$ = $datalist$$ = $element$$144$$ : $opts$$12$$.list && (this.$datalist$ = $datalist$$ = $$$$12$$("#" + $opts$$12$$.list));
    $opts$$12$$ = $$$$12$$.extend({}, {$populateResults$:function($container$$8$$, $results$$2$$, $query$$9$$, $showPlaceholder$$) {
      var $populate$$2$$, $id$$23$$ = this.$opts$.id, $optionRenderer$$1$$ = this.$opts$.optionRenderer;
      "function" !== typeof $optionRenderer$$1$$ && ($optionRenderer$$1$$ = null);
      $populate$$2$$ = function $$populate$$2$$$($resultsParent$$, $results$$3$$, $container$$9$$, $depth$$11$$, $l$$6_showPlaceholder$$1$$) {
        function $createLabelContent$$($labelNode$$, $result$$32$$) {
          if ($optionRenderer$$1$$) {
            var $content$$18_context$$66_highlighterSection$$1$$ = {index:$i$$206$$, depth:$depth$$11$$, leaf:!$result$$32$$.children, parent:$resultsParent$$, data:$result$$32$$, component:$opts$$12$$.$ojContext$, parentElement:$labelNode$$.get(0)}, $content$$18_context$$66_highlighterSection$$1$$ = $optionRenderer$$1$$.call($opts$$12$$.$ojContext$, $content$$18_context$$66_highlighterSection$$1$$);
            null !== $content$$18_context$$66_highlighterSection$$1$$ && (null === $content$$18_context$$66_highlighterSection$$1$$.parentNode || $content$$18_context$$66_highlighterSection$$1$$.parentNode instanceof DocumentFragment) && $labelNode$$.get(0).appendChild($content$$18_context$$66_highlighterSection$$1$$);
          } else {
            $formatted$$ = $opts$$12$$.$formatResult$($result$$32$$), void 0 !== $formatted$$ && $labelNode$$.text($formatted$$);
          }
          !0 !== $query$$9$$.$initial$ && ($content$$18_context$$66_highlighterSection$$1$$ = $labelNode$$.find(".oj-listbox-highlighter-section"), $content$$18_context$$66_highlighterSection$$1$$.length || ($content$$18_context$$66_highlighterSection$$1$$ = $labelNode$$), $termHighlight$$($content$$18_context$$66_highlighterSection$$1$$, $query$$9$$.$term$));
        }
        function $termHighlight$$($highlighterSection$$, $pattern$$13$$) {
          function $innerHighlight$$($node$$41$$, $pat$$1$$) {
            var $skip$$3_spannode$$ = 0;
            if (3 === $node$$41$$.nodeType) {
              var $i$$207_middlebit_pos$$7$$ = $node$$41$$.data.toUpperCase().indexOf($pat$$1$$);
              if (0 <= $i$$207_middlebit_pos$$7$$) {
                $skip$$3_spannode$$ = document.createElement("span");
                $skip$$3_spannode$$.className = "oj-listbox-highlighter";
                $i$$207_middlebit_pos$$7$$ = $node$$41$$.splitText($i$$207_middlebit_pos$$7$$);
                $i$$207_middlebit_pos$$7$$.splitText($pat$$1$$.length);
                var $middleclone$$ = $i$$207_middlebit_pos$$7$$.cloneNode(!0);
                $skip$$3_spannode$$.appendChild($middleclone$$);
                $i$$207_middlebit_pos$$7$$.parentNode.replaceChild($skip$$3_spannode$$, $i$$207_middlebit_pos$$7$$);
                $skip$$3_spannode$$ = 1;
              }
            } else {
              if (1 === $node$$41$$.nodeType && $node$$41$$.childNodes && !/(script|style)/i.test($node$$41$$.tagName)) {
                for ($i$$207_middlebit_pos$$7$$ = 0;$i$$207_middlebit_pos$$7$$ < $node$$41$$.childNodes.length;++$i$$207_middlebit_pos$$7$$) {
                  $i$$207_middlebit_pos$$7$$ += $innerHighlight$$($node$$41$$.childNodes[$i$$207_middlebit_pos$$7$$], $pat$$1$$);
                }
              }
            }
            return $skip$$3_spannode$$;
          }
          $highlighterSection$$.length && $pattern$$13$$ && $pattern$$13$$.length && $highlighterSection$$.each(function() {
            $innerHighlight$$(this, $pattern$$13$$.toUpperCase());
          });
        }
        function $processChildren$$($node$$40$$, $result$$31$$) {
          if ($result$$31$$.children && 0 < $result$$31$$.children.length) {
            var $nestedList$$ = $result$$31$$.element && $$$$12$$($result$$31$$.element[0]).is("li") && $$$$12$$($result$$31$$.element[0]).children("ul"), $innerContainer$$1$$ = $nestedList$$ ? $$$$12$$($result$$31$$.element[0]).children("ul") : $$$$12$$("\x3cul\x3e\x3c/ul\x3e");
            $innerContainer$$1$$.hasClass("oj-listbox-result-sub") || $innerContainer$$1$$.addClass("oj-listbox-result-sub");
            $populate$$2$$($result$$31$$, $result$$31$$.children, $innerContainer$$1$$, $depth$$11$$ + 1, !1);
            $nestedList$$ || $node$$40$$.append($innerContainer$$1$$);
          }
        }
        var $i$$206$$, $placeholder_result$$30$$, $label$$12_selectable$$, $disabled$$3$$, $node$$39$$, $formatted$$;
        $placeholder_result$$30$$ = $self$$86$$.$_getPlaceholder$();
        $l$$6_showPlaceholder$$1$$ && null !== $placeholder_result$$30$$ && !$query$$9$$.$term$ && 0 >= $container$$9$$.find(".oj-listbox-placeholder").length && ("select" !== $tagName$$4$$ || !$self$$86$$.$ojContext$.$_IsRequired$()) && ($placeholder_result$$30$$ = {value:"", label:$placeholder_result$$30$$}, $node$$39$$ = $$$$12$$("\x3cli\x3e\x3c/li\x3e"), $node$$39$$.addClass("oj-listbox-placeholder oj-listbox-results-depth-0 oj-listbox-result oj-listbox-result-selectable"), $node$$39$$.attr("role", 
        "presentation"), $label$$12_selectable$$ = $$$$12$$(document.createElement("div")), $label$$12_selectable$$.addClass("oj-listbox-result-label"), $label$$12_selectable$$.attr("id", "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$()), $label$$12_selectable$$.attr("role", "option"), $formatted$$ = $opts$$12$$.$formatResult$($placeholder_result$$30$$), void 0 !== $formatted$$ && $label$$12_selectable$$.text($formatted$$), $node$$39$$.append($label$$12_selectable$$), $node$$39$$.data($self$$86$$.$_elemNm$, 
        $placeholder_result$$30$$), $container$$9$$.prepend($node$$39$$));
        $i$$206$$ = 0;
        for ($l$$6_showPlaceholder$$1$$ = $results$$3$$.length;$i$$206$$ < $l$$6_showPlaceholder$$1$$;$i$$206$$ += 1) {
          $placeholder_result$$30$$ = $results$$3$$[$i$$206$$];
          $disabled$$3$$ = !0 === $placeholder_result$$30$$.disabled;
          $label$$12_selectable$$ = !$disabled$$3$$ && void 0 !== $id$$23$$($placeholder_result$$30$$);
          var $isList$$ = $placeholder_result$$30$$.element && $$$$12$$($placeholder_result$$30$$.element[0]).is("li");
          $node$$39$$ = $isList$$ ? $$$$12$$($placeholder_result$$30$$.element[0]) : $$$$12$$("\x3cli\x3e\x3c/li\x3e");
          $node$$39$$.hasClass("oj-listbox-result") ? ($placeholder_result$$30$$.children && 0 < $placeholder_result$$30$$.children.length && $processChildren$$($node$$39$$, $placeholder_result$$30$$), $$$$12$$($placeholder_result$$30$$.element[0]).css("display", "")) : ($node$$39$$.addClass("oj-listbox-results-depth-" + $depth$$11$$), $node$$39$$.addClass("oj-listbox-result"), $node$$39$$.addClass($label$$12_selectable$$ ? "oj-listbox-result-selectable" : "oj-listbox-result-unselectable"), $disabled$$3$$ && 
          $node$$39$$.addClass("oj-disabled"), $placeholder_result$$30$$.children && $node$$39$$.addClass("oj-listbox-result-with-children"), $node$$39$$.attr("role", "presentation"), $label$$12_selectable$$ = $$$$12$$(document.createElement("div")), $label$$12_selectable$$.addClass("oj-listbox-result-label"), $label$$12_selectable$$.attr("id", "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$()), $label$$12_selectable$$.attr("role", "option"), $disabled$$3$$ && $label$$12_selectable$$.attr("aria-disabled", 
          "true"), $isList$$ || ($createLabelContent$$($label$$12_selectable$$, $placeholder_result$$30$$), $node$$39$$.append($label$$12_selectable$$)), $placeholder_result$$30$$.children && 0 < $placeholder_result$$30$$.children.length && $processChildren$$($node$$39$$, $placeholder_result$$30$$), $node$$39$$.data($self$$86$$.$_elemNm$, $placeholder_result$$30$$), $isList$$ ? ($$$$12$$($placeholder_result$$30$$.element[0]).contents().filter(function() {
            return "UL" !== this.tagName;
          }).wrapAll($label$$12_selectable$$), $$$$12$$($placeholder_result$$30$$.element[0]).css("display", "")) : $container$$9$$.append($node$$39$$));
        }
      };
      $populate$$2$$(null, $results$$2$$, $container$$8$$, 0, $showPlaceholder$$);
    }}, $_ojChoice_defaults$$, $opts$$12$$);
    $opts$$12$$.id = function $$opts$$12$$$id$($e$$59$$) {
      return $e$$59$$.value;
    };
    $opts$$12$$.$formatResult$ = function $$opts$$12$$$$formatResult$$($result$$33$$) {
      return isNaN($result$$33$$.label) ? $result$$33$$.label : this.$ojContext$.$_formatValue$($result$$33$$.label);
    };
    $opts$$12$$.$formatSelection$ = function $$opts$$12$$$$formatSelection$$($data$$82$$) {
      return $data$$82$$ && $data$$82$$.label ? isNaN($data$$82$$.label) ? $data$$82$$.label : this.$ojContext$.$_formatValue$($data$$82$$.label) : void 0;
    };
    "select" !== $tagName$$4$$ && null !== $opts$$12$$.manageNewEntry && ($opts$$12$$.manageNewEntry = function $$opts$$12$$$manageNewEntry$($term$$) {
      var $entry$$2$$ = {};
      $entry$$2$$.value = $entry$$2$$.label = $$$$12$$.trim($term$$);
      return $entry$$2$$;
    });
    $datalist$$ ? $opts$$12$$.$query$ = this.$_bind$(function($query$$10$$) {
      var $data$$83$$ = {$results$:[], $more$:!1}, $term$$1$$ = $query$$10$$.$term$, $children$$3$$, $process$$;
      $process$$ = function $$process$$$($element$$145$$, $collection$$31$$) {
        var $group$$1$$, $nestedLi$$ = $element$$145$$.children() && 0 < $element$$145$$.children().length && $element$$145$$.children().is("ul");
        if ($element$$145$$.is("option") || $element$$145$$.is("li") && !$nestedLi$$) {
          $query$$10$$.$matcher$($term$$1$$, $element$$145$$.text(), $element$$145$$) && $collection$$31$$.push($self$$86$$.$_optionToData$($element$$145$$));
        } else {
          if ($element$$145$$.is("optgroup") || $element$$145$$.is("li") && $nestedLi$$) {
            $group$$1$$ = $self$$86$$.$_optionToData$($element$$145$$), $_ComboUtils$$.$each2$($element$$145$$.is("optgroup") ? $element$$145$$.children() : $element$$145$$.children("ul").children(), function($i$$208$$, $elm$$1$$) {
              $process$$($elm$$1$$, $group$$1$$.children);
            }), 0 < $group$$1$$.children.length && $collection$$31$$.push($group$$1$$);
          }
        }
      };
      $children$$3$$ = $datalist$$.children();
      void 0 !== this.$_getPlaceholder$() && 0 < $children$$3$$.length && "" == $children$$3$$.first().attr("value") && ($children$$3$$ = $children$$3$$.slice(1));
      $_ComboUtils$$.$each2$($children$$3$$, function($i$$209$$, $elm$$2$$) {
        $process$$($elm$$2$$, $data$$83$$.$results$);
      });
      $query$$10$$.$callback$($data$$83$$);
    }) : "options" in $opts$$12$$ && ($opts$$12$$.$query$ = $$$$12$$.isFunction($opts$$12$$.options) ? $_ComboUtils$$.$remote$($opts$$12$$.options, $opts$$12$$.optionsKeys ? $opts$$12$$.optionsKeys : null) : $_ComboUtils$$.$local$($opts$$12$$.options, $opts$$12$$.optionsKeys ? $opts$$12$$.optionsKeys : null));
    return $opts$$12$$;
  }, $_createHeader$:function() {
    var $headerElem_resultsNHeaderContainer$$ = this.$opts$.element.find(".oj-listbox-header");
    if ($headerElem_resultsNHeaderContainer$$.length) {
      this.header = $$$$12$$("\x3cli\x3e", {"class":"oj-listbox-result-header oj-listbox-result-unselectable", role:"presentation"});
      this.header.append($headerElem_resultsNHeaderContainer$$.children());
      this.$_initializeHeaderItems$();
      $headerElem_resultsNHeaderContainer$$ = $$$$12$$("\x3cul\x3e", {"class":"oj-listbox-results-with-header", role:"listbox"});
      $headerElem_resultsNHeaderContainer$$.append(this.header);
      $headerElem_resultsNHeaderContainer$$.appendTo(this.$results$.parent());
      var $resultsWrapper$$ = $$$$12$$("\x3cli\x3e", {role:"presentation"});
      $headerElem_resultsNHeaderContainer$$.append($resultsWrapper$$);
      this.$results$.attr("role", "presentation");
      this.$results$.appendTo($resultsWrapper$$);
    }
    this.$headerInitialized$ = !0;
  }, $_initializeHeaderItems$:function() {
    this.$headerItems$ = this.header.find("li[role\x3d'option'], li:not([role])");
    this.$headerItems$.uniqueId();
    this.header.find("ul").attr("role", "presentation");
    this.header.find("li:not([role])").attr("role", "option");
    this.header.find("a, input, select, textarea, button, object, .oj-component-initnode").each(function() {
      $$$$12$$(this).attr("tabIndex", -1);
    });
  }, $_isHeaderItem$:function($item$$9$$) {
    var $isHeaderItem$$ = !1;
    this.$headerItems$.each(function() {
      if ($$$$12$$(this).attr("id") === $item$$9$$) {
        return $isHeaderItem$$ = !0, !1;
      }
    });
    return $isHeaderItem$$;
  }, $_getNextHeaderItem$:function($currentItem$$) {
    if (!this.$headerItems$) {
      return null;
    }
    if (!$currentItem$$) {
      return this.$headerItems$.first();
    }
    var $foundCurrentItem$$ = !1, $nextItem$$ = null;
    this.$headerItems$.each(function() {
      if ($foundCurrentItem$$) {
        return $nextItem$$ = $$$$12$$(this), !1;
      }
      $foundCurrentItem$$ = $$$$12$$(this).attr("id") === $currentItem$$;
    });
    return $nextItem$$;
  }, $_getPreviousHeaderItem$:function($currentItem$$1$$) {
    if (!this.$headerItems$) {
      return null;
    }
    var $previousItem$$ = null;
    this.$headerItems$.each(function() {
      if ($$$$12$$(this).attr("id") === $currentItem$$1$$) {
        return!1;
      }
      $previousItem$$ = $$$$12$$(this);
    });
    return $previousItem$$;
  }, $_setFocusOnHeaderItem$:function($item$$10$$) {
    var $focusable$$1$$ = $item$$10$$.find(".oj-component .oj-enabled").first();
    0 === $focusable$$1$$.length && ($focusable$$1$$ = $item$$10$$.find("a, input, select, textarea, button, object, .oj-component-initnode").first(), 0 === $focusable$$1$$.length && ($focusable$$1$$ = $item$$10$$.children().first()));
    $focusable$$1$$ && $focusable$$1$$.addClass("oj-focus oj-focus-highlight oj-focus-only");
  }, $_removeHighlightFromHeaderItems$:function() {
    this.$headerItems$ && this.$headerItems$.find(".oj-focus").removeClass("oj-focus oj-focus-highlight oj-focus-only");
  }, $_triggerSelect$:function($data$$84_evt$$21$$) {
    $data$$84_evt$$21$$ = $$$$12$$.Event(this.$_elemNm$ + "-selecting", {val:this.id($data$$84_evt$$21$$), object:$data$$84_evt$$21$$});
    this.$opts$.element.trigger($data$$84_evt$$21$$);
    return!$data$$84_evt$$21$$.isDefaultPrevented();
  }, $_isInterfaceEnabled$:function() {
    return!0 === this.$enabledInterface$;
  }, $_enableInterface$:function() {
    var $enabled$$ = this.$_enabled$ && !this.$_readonly$;
    if ($enabled$$ === this.$enabledInterface$) {
      return!1;
    }
    this.$container$.toggleClass("oj-disabled", !$enabled$$);
    this.close();
    this.$enabledInterface$ = $enabled$$;
    return!0;
  }, $_enable$:function($enabled$$1$$) {
    void 0 === $enabled$$1$$ && ($enabled$$1$$ = !0);
    this.$_enabled$ !== $enabled$$1$$ && (this.$_enabled$ = $enabled$$1$$, this.$opts$.element.prop("disabled", !$enabled$$1$$), this.$container$.toggleClass("oj-enabled", $enabled$$1$$), this.$_enableInterface$());
  }, $_disable$:function() {
    this.$_enable$(!1);
  }, $_readonly$:function($enabled$$2$$) {
    void 0 === $enabled$$2$$ && ($enabled$$2$$ = !1);
    if (this.$_readonly$ === $enabled$$2$$) {
      return!1;
    }
    this.$_readonly$ = $enabled$$2$$;
    this.$opts$.element.prop("readonly", $enabled$$2$$);
    this.$_enableInterface$();
    return!0;
  }, $_opened$:function() {
    return this.$container$.hasClass("oj-listbox-dropdown-open");
  }, $_getDropdownPositionElement$:function() {
    return this.$container$.children().first();
  }, $_usingHandler$:function($pos$$8$$, $props$$9$$) {
    if ($oj$$12$$.$PositionUtils$.$isAligningPositionClipped$($props$$9$$)) {
      this.$_closeDelayTimer$ = window.setTimeout($$$$12$$.proxy(this.close, this), 1);
    } else {
      var $container$$10$$ = this.$container$, $dropdown$$1$$ = $props$$9$$.element.element;
      $dropdown$$1$$.css($pos$$8$$);
      "bottom" === $props$$9$$.vertical ? ($container$$10$$.addClass("oj-listbox-drop-above"), $dropdown$$1$$.addClass("oj-listbox-drop-above")) : ($container$$10$$.removeClass("oj-listbox-drop-above"), $dropdown$$1$$.removeClass("oj-listbox-drop-above"));
    }
  }, $_getDropdownPosition$:function() {
    var $position$$4$$ = {my:"start top", at:"start bottom", of:this.$_getDropdownPositionElement$(), collision:"flip", using:$$$$12$$.proxy(this.$_usingHandler$, this)}, $isRtl$$ = "rtl" === $oj$$12$$.$DomUtils$.$getReadingDirection$();
    return $oj$$12$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$4$$, $isRtl$$);
  }, $_positionDropdown$:function() {
    var $dropdown$$2$$ = this.$dropdown$, $position$$5$$ = this.$_getDropdownPosition$();
    $dropdown$$2$$.css("width", this.$container$.outerWidth());
    $dropdown$$2$$.position($position$$5$$);
  }, $_shouldOpen$:function($e$$60$$) {
    return this.$_opened$() || !1 === this.$_enabled$ || !0 === this.$_readonly$ ? !1 : this.$ojContext$._trigger("beforeExpand", $e$$60$$, {component:this.$opts$.element});
  }, $_clearDropdownAlignmentPreference$:function() {
    this.$container$.removeClass("oj-listbox-drop-above");
    this.$dropdown$.removeClass("oj-listbox-drop-above");
  }, open:function($e$$61$$, $dontUpdateResults$$) {
    if (!this.$_shouldOpen$($e$$61$$)) {
      return!1;
    }
    this.$_opening$($e$$61$$, $dontUpdateResults$$);
    return!0;
  }, $_opening$:function() {
    this.$headerInitialized$ || this.$_createHeader$();
    this.$container$.addClass("oj-listbox-dropdown-open");
  }, $_showDropDown$:function() {
    if (this.$_opened$() && "true" !== this.$_getActiveContainer$().attr("aria-expanded")) {
      this.$_clearDropdownAlignmentPreference$();
      this.$dropdown$[0] !== this.body().children().last()[0] && this.$dropdown$.detach().appendTo(this.body());
      this.$dropdown$.appendTo(this.body());
      this.header && (this.$dropdown$.find(".oj-listbox-results-with-header").prepend(this.header), this.header.show());
      var $psEvents$$ = {};
      $psEvents$$[$oj$$12$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$12$$.proxy(this.close, this);
      $psEvents$$[$oj$$12$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$12$$.proxy(this.$_surrogateRemoveHandler$, this);
      $psEvents$$[$oj$$12$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $$$$12$$.proxy(this.$_clickAwayHandler$, this);
      $psEvents$$[$oj$$12$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$12$$.proxy(this.$_positionDropdown$, this);
      var $psOptions$$ = {};
      $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$POPUP$] = this.$dropdown$;
      $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$LAUNCHER$] = this.$opts$.element;
      $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$EVENTS$] = $psEvents$$;
      $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$POSITION$] = this.$_getDropdownPosition$();
      $psOptions$$[$oj$$12$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-listbox-drop-layer";
      $oj$$12$$.$PopupService$.$getInstance$().open($psOptions$$);
      $$$$12$$("#oj-listbox-drop").removeAttr("id");
      this.$dropdown$.attr("id", "oj-listbox-drop");
      this.$dropdown$.attr("data-oj-containerid", this.$containerId$);
      this.$_positionDropdown$();
      this.$_getActiveContainer$().attr("aria-expanded", !0);
    }
  }, close:function() {
    if (this.$_opened$()) {
      this.$container$.removeClass("oj-listbox-dropdown-open");
      var $cid$$7_dropDownVisible_psOptions$$1$$ = this.$_getActiveContainer$().attr("aria-expanded");
      if ($cid$$7_dropDownVisible_psOptions$$1$$ && "false" !== $cid$$7_dropDownVisible_psOptions$$1$$) {
        var $cid$$7_dropDownVisible_psOptions$$1$$ = this.$containerId$, $scroll$$2$$ = "scroll." + $cid$$7_dropDownVisible_psOptions$$1$$, $resize$$ = "resize." + $cid$$7_dropDownVisible_psOptions$$1$$, $orient$$ = "orientationchange." + $cid$$7_dropDownVisible_psOptions$$1$$;
        this.$container$.parents().add(window).each(function() {
          $$$$12$$(this).off($scroll$$2$$).off($resize$$).off($orient$$);
        });
        this.$_clearDropdownAlignmentPreference$();
        $cid$$7_dropDownVisible_psOptions$$1$$ = {};
        $cid$$7_dropDownVisible_psOptions$$1$$[$oj$$12$$.$PopupService$.$OPTION$.$POPUP$] = this.$dropdown$;
        $oj$$12$$.$PopupService$.$getInstance$().close($cid$$7_dropDownVisible_psOptions$$1$$);
        this.header && (this.header.hide(), this.header.appendTo(this.$container$));
        this.$dropdown$.removeAttr("data-oj-containerid");
        this.$dropdown$.removeAttr("id");
        this.$opts$.list ? this.$_removeHighlight$() : (this.$dropdown$.detach(), this.$results$.empty());
        this.$_getActiveContainer$().attr("aria-expanded", !1);
        "ojcombobox" === this.$_elemNm$ && this.$_getActiveContainer$().removeAttr("aria-activedescendant");
      }
    }
  }, $_setPickerAttributes$:function($pickerAttributes$$1$$) {
    $oj$$12$$.$EditableValueUtils$.$setPickerAttributes$(this.$dropdown$, $pickerAttributes$$1$$);
  }, $_clearSearch$:function() {
  }, $_ensureHighlightVisible$:function() {
    var $results$$4$$ = this.$results$, $children$$4_more_rb$$, $index$$147$$, $child$$4$$, $hb_y$$38$$;
    $index$$147$$ = this.$_highlight$();
    0 > $index$$147$$ || (0 == $index$$147$$ ? $results$$4$$.scrollTop(0) : ($children$$4_more_rb$$ = this.$_findHighlightableChoices$().find(".oj-listbox-result-label"), $child$$4$$ = $$$$12$$($children$$4_more_rb$$[$index$$147$$]), $hb_y$$38$$ = $child$$4$$.offset().top + $child$$4$$.outerHeight(!0), $index$$147$$ === $children$$4_more_rb$$.length - 1 && ($children$$4_more_rb$$ = $results$$4$$.find("li.oj-listbox-more-results"), 0 < $children$$4_more_rb$$.length && ($hb_y$$38$$ = $children$$4_more_rb$$.offset().top + 
    $children$$4_more_rb$$.outerHeight(!0))), $children$$4_more_rb$$ = $results$$4$$.offset().top + $results$$4$$.outerHeight(!0), $hb_y$$38$$ > $children$$4_more_rb$$ && $results$$4$$.scrollTop($results$$4$$.scrollTop() + ($hb_y$$38$$ - $children$$4_more_rb$$)), $hb_y$$38$$ = $child$$4$$.offset().top - $results$$4$$.offset().top, 0 > $hb_y$$38$$ && "none" != $child$$4$$.css("display") && $results$$4$$.scrollTop($results$$4$$.scrollTop() + $hb_y$$38$$)));
  }, $_findHighlightableChoices$:function() {
    return this.$results$.find(".oj-listbox-result-selectable:not(.oj-disabled, .oj-selected)").filter(function() {
      return "none" != $$$$12$$(this).css("display");
    });
  }, $_moveHighlight$:function($delta$$5$$) {
    var $choices$$ = this.$_findHighlightableChoices$(), $index$$148$$ = this.$_highlight$();
    if (this.header && (0 >= $index$$148$$ || $index$$148$$ === $choices$$.length - 1)) {
      var $activeDescendant_choice$$ = this.$_getActiveContainer$().attr("aria-activedescendant"), $isHeaderItem$$1$$ = this.$_isHeaderItem$($activeDescendant_choice$$);
      $isHeaderItem$$1$$ || ($activeDescendant_choice$$ = null);
      var $headerItem$$ = null;
      0 < $delta$$5$$ && (0 > $index$$148$$ || $index$$148$$ === $choices$$.length - 1) ? $headerItem$$ = this.$_getNextHeaderItem$($activeDescendant_choice$$) : 0 > $delta$$5$$ && ($isHeaderItem$$1$$ && 0 > $index$$148$$ || 0 === $index$$148$$) && ($headerItem$$ = this.$_getPreviousHeaderItem$($activeDescendant_choice$$));
      if ($headerItem$$) {
        this.$_removeHighlight$();
        this.$_setFocusOnHeaderItem$($headerItem$$);
        this.$_getActiveContainer$().attr("aria-activedescendant", $headerItem$$.attr("id"));
        return;
      }
      $isHeaderItem$$1$$ && 0 > $delta$$5$$ && ($index$$148$$ = 0);
    }
    for (;-1 <= $index$$148$$ && $index$$148$$ < $choices$$.length;) {
      if ($index$$148$$ += $delta$$5$$, $index$$148$$ == $choices$$.length ? $index$$148$$ = 0 : -1 == $index$$148$$ && ($index$$148$$ = $choices$$.length - 1), $activeDescendant_choice$$ = $$$$12$$($choices$$[$index$$148$$]), $activeDescendant_choice$$.hasClass("oj-listbox-result-selectable") && !$activeDescendant_choice$$.hasClass("oj-disabled") && !$activeDescendant_choice$$.hasClass("oj-selected")) {
        this.$_highlight$($index$$148$$);
        break;
      }
    }
  }, $_highlight$:function($index$$149$$) {
    var $choice$$1_choices$$1$$ = this.$_findHighlightableChoices$();
    if (0 === arguments.length) {
      var $curSelected$$ = $choice$$1_choices$$1$$.filter(".oj-hover");
      $curSelected$$.length || ($curSelected$$ = $choice$$1_choices$$1$$.children(".oj-hover").closest(".oj-listbox-result"));
      return $choice$$1_choices$$1$$.get().indexOf($curSelected$$[0]);
    }
    $index$$149$$ >= $choice$$1_choices$$1$$.length && ($index$$149$$ = $choice$$1_choices$$1$$.length - 1);
    0 > $index$$149$$ && ($index$$149$$ = 0);
    this.$_removeHighlight$();
    $choice$$1_choices$$1$$ = $$$$12$$($choice$$1_choices$$1$$[$index$$149$$]);
    $choice$$1_choices$$1$$.hasClass("oj-listbox-result-with-children") ? $choice$$1_choices$$1$$.children(".oj-listbox-result-label").addClass("oj-hover") : $choice$$1_choices$$1$$.addClass("oj-hover");
    this.$_getActiveContainer$().attr("aria-activedescendant", $choice$$1_choices$$1$$.find(".oj-listbox-result-label").attr("id"));
    this.$_ensureHighlightVisible$();
  }, $_removeHighlight$:function() {
    this.$results$.find(".oj-hover").removeClass("oj-hover");
    this.$_removeHighlightFromHeaderItems$();
    "ojcombobox" === this.$_elemNm$ && this.$_getActiveContainer$().removeAttr("aria-activedescendant");
  }, $_highlightUnderEvent$:function($el$$5_event$$230$$) {
    $el$$5_event$$230$$ = $$$$12$$($el$$5_event$$230$$.target).closest(".oj-listbox-result-selectable");
    if (0 < $el$$5_event$$230$$.length && !$el$$5_event$$230$$.is(".oj-hover")) {
      var $choices$$2$$ = this.$_findHighlightableChoices$();
      this.$_highlight$($choices$$2$$.index($el$$5_event$$230$$));
    } else {
      0 == $el$$5_event$$230$$.length && this.$_removeHighlight$();
    }
  }, $_updateResults$:function($initial$$) {
    var $self$$87$$ = this, $term$$2$$ = this.search.val(), $lastTerm$$ = $$$$12$$.data(this.$container$, this.$_classNm$ + "-last-term");
    if (!0 === $initial$$ || !$lastTerm$$ || $term$$2$$ !== $lastTerm$$ || !0 === this.$opts$.multiple) {
      if ($lastTerm$$ || $term$$2$$ || !$initial$$ || "input" !== $initial$$.type) {
        $$$$12$$.data(this.$container$, this.$_classNm$ + "-last-term", $term$$2$$), $term$$2$$.length >= (this.$opts$.minLength || 0) ? (clearTimeout(this.$queryTimer$), $initial$$ && !0 !== $initial$$ ? this.$queryTimer$ = setTimeout(function() {
          $self$$87$$.$_queryResults$($initial$$);
        }, $_ComboUtils$$.$DEFAULT_QUERY_DELAY$) : this.$_queryResults$($initial$$)) : this.close();
      }
    }
  }, $_queryResults$:function($initial$$1$$) {
    function $postRender$$() {
      $self$$88$$.$_positionDropdown$();
      if ($self$$88$$.header && $self$$88$$.$headerItems$.length) {
        var $highlightableChoices_highlightableOptions$$ = $self$$88$$.$_findHighlightableChoices$(), $totalOptions$$ = $self$$88$$.$headerItems$.length + $highlightableChoices_highlightableOptions$$.length;
        $self$$88$$.$headerItems$.attr("aria-setsize", $totalOptions$$);
        $highlightableChoices_highlightableOptions$$.length && ($highlightableChoices_highlightableOptions$$ = $highlightableChoices_highlightableOptions$$.children("[role\x3d'option']"), $highlightableChoices_highlightableOptions$$.attr("aria-setsize", $totalOptions$$), $highlightableChoices_highlightableOptions$$.first().attr("aria-posinset", $self$$88$$.$headerItems$.length + 1));
      }
    }
    var $search$$3$$ = this.search, $results$$5$$ = this.$results$, $opts$$13$$ = this.$opts$, $self$$88$$ = this, $input$$2_term$$3$$;
    $input$$2_term$$3$$ = $search$$3$$.val();
    var $queryNumber$$;
    ($opts$$13$$.minLength || 0) > $input$$2_term$$3$$.length ? this.close() : (this.open(null, !0), $queryNumber$$ = ++this.$queryCount$, this.$_removeHighlight$(), $input$$2_term$$3$$ = this.search.val(), $input$$2_term$$3$$ = void 0 !== $input$$2_term$$3$$ && null !== $input$$2_term$$3$$ && (!0 !== $initial$$1$$ || $opts$$13$$.$inputSearch$ || 0 < $opts$$13$$.minLength) ? $input$$2_term$$3$$ : "", this.$resultsPage$ = 1, $opts$$13$$.$query$({element:$opts$$13$$.element, $term$:$input$$2_term$$3$$, 
    page:this.$resultsPage$, context:null, $matcher$:$opts$$13$$.$matcher$, $callback$:this.$_bind$(function($data$$86_li$$1$$) {
      $queryNumber$$ === this.$queryCount$ && this.$_opened$() && (this.context = $data$$86_li$$1$$ && void 0 !== $data$$86_li$$1$$.context ? $data$$86_li$$1$$.context : null, $data$$86_li$$1$$ && 0 !== $data$$86_li$$1$$.$results$.length || !$_ComboUtils$$.$checkFormatter$($self$$88$$.$ojContext$, $opts$$13$$.$formatNoMatches$, "formatNoMatches") ? ($_ComboUtils$$.$saveLastQueryResult$(this, $data$$86_li$$1$$.$results$), this.$_showDropDown$(), this.$_preprocessResults$($results$$5$$), $self$$88$$.$opts$.$populateResults$.call(this, 
      $results$$5$$, $data$$86_li$$1$$.$results$, {$term$:$search$$3$$.val(), page:this.$resultsPage$, context:null, $initial$:$initial$$1$$}, this.$_showPlaceholder$()), this.$_postprocessResults$($data$$86_li$$1$$, $initial$$1$$), $postRender$$()) : "oj-select" === this.$_classNm$ && !0 !== this.$opts$.multiple || this.header ? ($data$$86_li$$1$$ = $$$$12$$("\x3cli\x3e"), $data$$86_li$$1$$.addClass("oj-listbox-no-results"), $data$$86_li$$1$$.text($opts$$13$$.$formatNoMatches$($self$$88$$.$ojContext$, 
      $search$$3$$.val())), this.$_showDropDown$(), this.$_preprocessResults$($results$$5$$), $results$$5$$.append($data$$86_li$$1$$), $postRender$$()) : this.close());
    })}));
  }, $_preprocessResults$:function($resultList_results$$6$$) {
    this.$opts$.list ? ($resultList_results$$6$$ = $resultList_results$$6$$.children(), this.$_hideResultList$($resultList_results$$6$$)) : $resultList_results$$6$$.empty();
  }, $_hideResultList$:function($resultList$$1$$) {
    for (var $i$$210$$ = 0;$i$$210$$ < $resultList$$1$$.length;$i$$210$$++) {
      $$$$12$$($resultList$$1$$[$i$$210$$]).is("LI") && (($$$$12$$($resultList$$1$$[$i$$210$$]).hasClass("oj-listbox-no-results") || $$$$12$$($resultList$$1$$[$i$$210$$]).hasClass("oj-listbox-placeholder")) && $$$$12$$($resultList$$1$$[$i$$210$$]).remove(), $$$$12$$($resultList$$1$$[$i$$210$$]).css("display", "none"), $$$$12$$($resultList$$1$$[$i$$210$$]).hasClass("oj-selected") && $$$$12$$($resultList$$1$$[$i$$210$$]).removeClass("oj-selected"));
      var $nested$$ = $$$$12$$($resultList$$1$$[$i$$210$$]).children("ul");
      $nested$$ && $nested$$.children() && this.$_hideResultList$($nested$$.children());
    }
  }, $_cancel$:function($event$$231$$) {
    this.close($event$$231$$);
  }, $_focusSearch$:function() {
    $_ComboUtils$$.$_focus$(this.search);
  }, $_selectHighlighted$:function($options$$235$$, $event$$232$$) {
    if (this.header) {
      var $activeDescendant$$1_activeItem_index$$150$$ = this.$_getActiveContainer$().attr("aria-activedescendant");
      if (this.$_isHeaderItem$($activeDescendant$$1_activeItem_index$$150$$)) {
        var $activeDescendant$$1_activeItem_index$$150$$ = $$$$12$$("#" + $activeDescendant$$1_activeItem_index$$150$$), $clickable_data$$87$$ = $activeDescendant$$1_activeItem_index$$150$$.find("a, input, select, textarea, button, object").first();
        0 === $clickable_data$$87$$.length && ($clickable_data$$87$$ = $activeDescendant$$1_activeItem_index$$150$$.children());
        $clickable_data$$87$$.length && $clickable_data$$87$$[0].click();
        this.close($event$$232$$);
        return;
      }
    }
    $activeDescendant$$1_activeItem_index$$150$$ = this.$_highlight$();
    ($clickable_data$$87$$ = this.$results$.find(".oj-hover").closest(".oj-listbox-result").data(this.$_elemNm$)) ? (this.$_highlight$($activeDescendant$$1_activeItem_index$$150$$), $options$$235$$ = $options$$235$$ || {}, $options$$235$$.trigger = $_ComboUtils$$.$ValueChangeTriggerTypes$.$OPTION_SELECTED$, this.$_onSelect$($clickable_data$$87$$, $options$$235$$, $event$$232$$), this.$_triggerUpdateEvent$($clickable_data$$87$$, $options$$235$$, $event$$232$$), $event$$232$$ && "keydown" === $event$$232$$.type && 
    (this.$enterKeyEventHandled$ = !0)) : $options$$235$$ && $options$$235$$.$noFocus$ && this.close($event$$232$$);
  }, $_getPlaceholder$:function() {
    return this.$opts$.element.attr("placeholder") || this.$opts$.element.attr("data-placeholder") || this.$opts$.element.data("placeholder") || this.$opts$.placeholder;
  }, $_setPlaceholder$:function() {
    var $placeholder$$1$$ = this.$_getPlaceholder$();
    $placeholder$$1$$ && (this.search.attr("placeholder", $placeholder$$1$$), this.$container$.removeClass(this.$_classNm$ + "-allowclear"));
  }, $_initContainerWidth$:function() {
    var $attrs$$inline_863_style$$inline_862_width$$31$$;
    a: {
      var $attr$$inline_867_matches$$inline_864$$, $i$$inline_865$$, $l$$inline_866$$;
      $attrs$$inline_863_style$$inline_862_width$$31$$ = this.$opts$.element.attr("style");
      if (void 0 !== $attrs$$inline_863_style$$inline_862_width$$31$$) {
        for ($attrs$$inline_863_style$$inline_862_width$$31$$ = $attrs$$inline_863_style$$inline_862_width$$31$$.split(";"), $i$$inline_865$$ = 0, $l$$inline_866$$ = $attrs$$inline_863_style$$inline_862_width$$31$$.length;$i$$inline_865$$ < $l$$inline_866$$;$i$$inline_865$$ += 1) {
          if ($attr$$inline_867_matches$$inline_864$$ = $attrs$$inline_863_style$$inline_862_width$$31$$[$i$$inline_865$$].replace(/\s/g, ""), $attr$$inline_867_matches$$inline_864$$ = $attr$$inline_867_matches$$inline_864$$.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== $attr$$inline_867_matches$$inline_864$$ && 1 <= $attr$$inline_867_matches$$inline_864$$.length) {
            $attrs$$inline_863_style$$inline_862_width$$31$$ = $attr$$inline_867_matches$$inline_864$$[1];
            break a;
          }
        }
      }
      $attrs$$inline_863_style$$inline_862_width$$31$$ = void 0;
    }
    null !== $attrs$$inline_863_style$$inline_862_width$$31$$ && this.$container$.css("width", $attrs$$inline_863_style$$inline_862_width$$31$$);
  }, $getVal$:function() {
    return this.$ojContext$.option("value");
  }, $setVal$:function($val$$34$$, $event$$233$$, $context$$67$$) {
    var $options$$236$$ = {$doValueChangeCheck$:!1};
    $context$$67$$ && ($options$$236$$._context = $context$$67$$);
    "string" === typeof $val$$34$$ ? this.$ojContext$.$_SetValue$([$val$$34$$], $event$$233$$, $options$$236$$) : this.$ojContext$.$_SetValue$($val$$34$$, $event$$233$$, $options$$236$$);
    this.$opts$.element.val($val$$34$$);
  }, $_triggerUpdateEvent$:function() {
  }, $_showPlaceholder$:function() {
    return!1;
  }, $_getActiveContainer$:function() {
    return this.search;
  }, $_hasSearchBox$:function() {
    return void 0 !== this.$opts$.minimumResultsForSearch && void 0 !== this.$container$.$_hasSearchBox$;
  }, $_findItem$:function($list$$6$$, $value$$206$$) {
    for (var $i$$212$$ = 0;$i$$212$$ < $list$$6$$.length;$i$$212$$++) {
      if ($$$$12$$($list$$6$$[$i$$212$$]).data(this.$_elemNm$).value === $value$$206$$) {
        return $list$$6$$[$i$$212$$];
      }
    }
    return null;
  }}), $_ojChoice_defaults$$ = {$closeOnSelect$:!0, $openOnEnter$:!0, $formatNoMatches$:function($ojContext$$1$$) {
    return $ojContext$$1$$.$getTranslatedString$("noMatchesFound");
  }, id:function($e$$62$$) {
    return $e$$62$$.id;
  }, $matcher$:function($term$$4$$, $text$$16$$) {
    return 0 <= ("" + $text$$16$$).toUpperCase().indexOf(("" + $term$$4$$).toUpperCase());
  }, separator:","}, $_AbstractSingleChoice$$ = $_ComboUtils$$.$clazz$($_AbstractOjChoice$$, {$_enableInterface$:function() {
    $_AbstractSingleChoice$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$());
  }, $_focus$:function() {
    this.$_opened$() && this.close();
  }, _destroy:function() {
    $$$$12$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
    $_AbstractSingleChoice$$.$superclass$._destroy.apply(this, arguments);
  }, $_clear$:function($event$$235$$) {
    this.selection.data(this.$_elemNm$) && ($event$$235$$ || $oj$$12$$.$Logger$.warn("Event should not be null when user modified the value in UI"), "oj-select" === this.$_classNm$ && this.$ojContext$.$_IsRequired$() || this.$setVal$([], $event$$235$$), this.search.val(""), this.selection.removeData(this.$_elemNm$));
    this.$_setPlaceholder$();
  }, $_initSelection$:function() {
    this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, this.$_bind$(this.$_updateSelectedOption$));
  }, $_containerKeydownHandler$:function($e$$63$$) {
    if (this.$_isInterfaceEnabled$()) {
      if ($e$$63$$.which === $_ComboUtils$$.$KEY$.PAGE_UP || $e$$63$$.which === $_ComboUtils$$.$KEY$.PAGE_DOWN) {
        $_ComboUtils$$.$killEvent$($e$$63$$);
      } else {
        switch($e$$63$$.which) {
          case $_ComboUtils$$.$KEY$.UP:
          ;
          case $_ComboUtils$$.$KEY$.DOWN:
            this.$_opened$() ? this.$_moveHighlight$($e$$63$$.which === $_ComboUtils$$.$KEY$.UP ? -1 : 1) : this.open($e$$63$$);
            $_ComboUtils$$.$killEvent$($e$$63$$);
            return;
          case $_ComboUtils$$.$KEY$.ENTER:
            this.$_selectHighlighted$(null, $e$$63$$);
            $_ComboUtils$$.$killEvent$($e$$63$$);
            this.$_opened$() || (this.$_userTyping$ = !1);
            return;
          case $_ComboUtils$$.$KEY$.TAB:
            this.close($e$$63$$);
            this.$_userTyping$ = !1;
            return;
          case $_ComboUtils$$.$KEY$.$ESC$:
            this.$_opened$() && (this.$_cancel$($e$$63$$), $_ComboUtils$$.$killEvent$($e$$63$$));
            this.$_userTyping$ = !1;
            return;
        }
        this.$_userTyping$ = !0;
      }
    }
  }, $_containerKeyupHandler$:function($e$$64$$) {
    this.$_isInterfaceEnabled$() && !this.$_opened$() && this.open($e$$64$$);
  }, $_initContainer$:function() {
    var $container$$12_selection$$12$$;
    $container$$12_selection$$12$$ = this.$container$;
    var $elementLabel$$, $idSuffix_rootAttr$$1$$ = this.$opts$.rootAttributes, $idSuffix_rootAttr$$1$$ = $idSuffix_rootAttr$$1$$ && $idSuffix_rootAttr$$1$$.id ? $idSuffix_rootAttr$$1$$.id : this.$opts$.element.attr("id") || $_ComboUtils$$.$nextUid$();
    this.selection = $container$$12_selection$$12$$ = $container$$12_selection$$12$$.find("." + this.$_classNm$ + "-choice");
    $container$$12_selection$$12$$.attr("id", this.$_classNm$ + "-choice-" + $idSuffix_rootAttr$$1$$);
    $elementLabel$$ = $$$$12$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
    $elementLabel$$.attr("id") || $elementLabel$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix_rootAttr$$1$$);
    $container$$12_selection$$12$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix_rootAttr$$1$$);
    this.$results$.attr("id") || this.$results$.attr("id", "oj-listbox-results-" + $idSuffix_rootAttr$$1$$);
    this.search.attr("aria-owns", this.$results$.attr("id"));
    this.search.attr("aria-labelledby", $elementLabel$$.attr("id"));
    this.$opts$.element.attr("aria-labelledby", $elementLabel$$.attr("id"));
    this.search.attr("id") && $elementLabel$$.attr("for", this.search.attr("id"));
    this.$opts$.element.attr("aria-label") && this.search.attr("aria-label", this.$opts$.element.attr("aria-label"));
    this.$opts$.element.attr("aria-controls") && this.search.attr("aria-controls", this.$opts$.element.attr("aria-controls"));
    $container$$12_selection$$12$$.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
    $container$$12_selection$$12$$.on("mousedown", "abbr", this.$_bind$(function($e$$65$$) {
      this.$_isInterfaceEnabled$() && (this.$_clear$($e$$65$$), $_ComboUtils$$.$killEventImmediately$($e$$65$$), this.close($e$$65$$), this.selection.focus());
    }));
    $container$$12_selection$$12$$.on("mousedown", this.$_bind$(function($e$$66$$) {
      this.$opts$.element.prop("disabled") && $_ComboUtils$$.$killEvent$($e$$66$$);
      this.$_opened$() ? this.close($e$$66$$) : this.$_isInterfaceEnabled$() && this.open($e$$66$$);
      var $hidden$$ = this.search.parent().attr("aria-hidden");
      $hidden$$ && "true" == $hidden$$ ? this.selection.focus() : this.search.focus();
      $$$$12$$($e$$66$$.target).hasClass("oj-combobox-open-icon") && $_ComboUtils$$.$killEvent$($e$$66$$);
      this.$container$.addClass("oj-active");
    }));
    $container$$12_selection$$12$$.on("mouseup", this.$_bind$(function() {
      this.$container$.removeClass("oj-active");
    }));
    $container$$12_selection$$12$$.on("focus", this.$_bind$(function($e$$68$$) {
      $_ComboUtils$$.$killEvent$($e$$68$$);
    }));
    this.search.on("input", this.$_bind$(function($e$$69$$) {
      this.$ojContext$.$_SetRawValue$(this.search.val(), $e$$69$$);
    }));
    this.search.on("blur keyup", this.$_bind$(function($e$$70_formatted$$1$$) {
      if ("keyup" !== $e$$70_formatted$$1$$.type || 10 === $e$$70_formatted$$1$$.keyCode || 13 === $e$$70_formatted$$1$$.keyCode) {
        if (void 0 !== this.search.val() && 0 >= this.$results$.find(".oj-hover").length && ("keyup" !== $e$$70_formatted$$1$$.type || !this.$enterKeyEventHandled$)) {
          if (this.$opts$.manageNewEntry) {
            var $data$$89_selectionData$$ = this.selection.data(this.$_elemNm$);
            if (!$data$$89_selectionData$$ && "" !== this.search.val() || $data$$89_selectionData$$ && $data$$89_selectionData$$.label !== this.search.val() || !this.$ojContext$.isValid() || this.$opts$.$inputSearch$ && "keyup" === $e$$70_formatted$$1$$.type) {
              var $data$$89_selectionData$$ = this.$opts$.manageNewEntry(this.search.val()), $options$$237$$ = {trigger:"blur" === $e$$70_formatted$$1$$.type ? $_ComboUtils$$.$ValueChangeTriggerTypes$.$BLUR$ : $_ComboUtils$$.$ValueChangeTriggerTypes$.$ENTER_PRESSED$};
              this.$_onSelect$($data$$89_selectionData$$, $options$$237$$, $e$$70_formatted$$1$$);
              "blur" !== $e$$70_formatted$$1$$.type && this.$_triggerUpdateEvent$($data$$89_selectionData$$, $options$$237$$, $e$$70_formatted$$1$$);
            }
          } else {
            null == this.$opts$.manageNewEntry && (($data$$89_selectionData$$ = this.selection.data(this.$_elemNm$), "" == this.search.val()) ? this.$_clear$($e$$70_formatted$$1$$) : $data$$89_selectionData$$ || "" === this.search.val() ? "oj-select" !== this.$_classNm$ && ($e$$70_formatted$$1$$ = this.$opts$.$formatSelection$($data$$89_selectionData$$), void 0 !== $e$$70_formatted$$1$$ && this.search.val($e$$70_formatted$$1$$)) : this.$_clearSearch$());
          }
        }
        this.search.removeClass(this.$_classNm$ + "-focused");
        this.$container$.removeClass("oj-focus");
        this.$enterKeyEventHandled$ = !1;
      }
    }));
    this.$_initContainerWidth$();
    this.$opts$.element.hide().attr("aria-hidden", !0);
    this.$_setPlaceholder$();
  }, $_prepareOpts$:function() {
    var $opts$$14$$ = $_AbstractSingleChoice$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$90$$ = this, $tagName$$5$$ = $opts$$14$$.element.get(0).tagName.toLowerCase();
    if ("input" === $tagName$$5$$ && $opts$$14$$.element.attr("list") || "select" === $tagName$$5$$ && 0 < $opts$$14$$.element.children().length || $opts$$14$$.list) {
      var $eleName$$ = $opts$$14$$.list ? "li" : "option";
      $opts$$14$$.$initSelection$ = function $$opts$$14$$$$initSelection$$($element$$147$$, $callback$$97$$) {
        var $selected$$1$$, $value$$207$$ = $self$$90$$.$getVal$();
        Array.isArray($value$$207$$) && ($value$$207$$ = $value$$207$$[0]);
        void 0 !== $value$$207$$ && null !== $value$$207$$ && ($selected$$1$$ = $self$$90$$.$_optionToData$($element$$147$$.find($eleName$$).filter(function() {
          if ("li" == $eleName$$) {
            return this.getAttribute("oj-data-value") === $value$$207$$;
          }
          if ("option" == $eleName$$) {
            return this.value === $value$$207$$;
          }
        })), "select" === $tagName$$5$$ && void 0 === $selected$$1$$ && ($value$$207$$ = null));
        if (void 0 === $value$$207$$ || null === $value$$207$$) {
          $selected$$1$$ = $self$$90$$.$_optionToData$($element$$147$$.find($eleName$$).filter(function() {
            if ("li" == $eleName$$) {
              return!0 === this.getAttribute("oj-data-selected");
            }
            if ("option" == $eleName$$) {
              return this.selected;
            }
          }));
        }
        $callback$$97$$($selected$$1$$);
      };
      $opts$$14$$.validate = function $$opts$$14$$$validate$($element$$148$$, $value$$208$$) {
        var $selected$$2$$;
        void 0 !== $value$$208$$ && null !== $value$$208$$ && ($selected$$2$$ = $self$$90$$.$_optionToData$($element$$148$$.find($eleName$$).filter(function() {
          if ("li" == $eleName$$) {
            return this.getAttribute("oj-data-value") === $value$$208$$;
          }
          if ("option" == $eleName$$) {
            return this.value === $value$$208$$;
          }
        })));
        return!!$selected$$2$$;
      };
    } else {
      if ("options" in $opts$$14$$ || this.$getVal$() && 0 < this.$getVal$().length) {
        $$$$12$$.isFunction($opts$$14$$.options) ? $opts$$14$$.$initSelection$ = function $$opts$$14$$$$initSelection$$($element$$149$$, $callback$$98$$) {
          function $findOption$$($results$$7$$, $optionValue$$1$$) {
            for (var $i$$213$$ = 0, $l$$8$$ = $results$$7$$.length;$i$$213$$ < $l$$8$$;$i$$213$$++) {
              var $found$$4_result$$34$$ = $results$$7$$[$i$$213$$];
              if ($optionValue$$1$$ === $opts$$14$$.id($found$$4_result$$34$$) || $found$$4_result$$34$$.children && ($found$$4_result$$34$$ = $findOption$$($found$$4_result$$34$$.children, $optionValue$$1$$))) {
                return $found$$4_result$$34$$;
              }
            }
            return null;
          }
          var $id$$24$$ = "";
          $self$$90$$.$getVal$() && $self$$90$$.$getVal$().length && ($id$$24$$ = $self$$90$$.$getVal$()[0]);
          var $match$$18$$ = null;
          if ($id$$24$$) {
            var $currentItem$$2_queryResult$$3$$ = $_ComboUtils$$.$getLastQueryResult$($self$$90$$);
            $currentItem$$2_queryResult$$3$$ && ($match$$18$$ = $findOption$$($currentItem$$2_queryResult$$3$$, $id$$24$$));
            $match$$18$$ || ($currentItem$$2_queryResult$$3$$ = $self$$90$$.currentItem) && $currentItem$$2_queryResult$$3$$.length && $id$$24$$ === $opts$$14$$.id($currentItem$$2_queryResult$$3$$[0]) && ($match$$18$$ = $currentItem$$2_queryResult$$3$$[0]);
            $match$$18$$ || $self$$90$$.$valueChangeTrigger$ ? $callback$$98$$($match$$18$$) : $opts$$14$$.$query$({value:[$id$$24$$], $callback$:$$$$12$$.isFunction($callback$$98$$) ? function($queryResult$$4$$) {
              $queryResult$$4$$ && $queryResult$$4$$.$results$ && ($match$$18$$ = $findOption$$($queryResult$$4$$.$results$, $id$$24$$));
              $callback$$98$$($match$$18$$);
            } : $$$$12$$.noop});
          } else {
            $callback$$98$$($match$$18$$);
          }
        } : ($opts$$14$$.$initSelection$ = function $$opts$$14$$$$initSelection$$($element$$150$$, $callback$$99$$) {
          var $id$$25$$ = "";
          $self$$90$$.$getVal$() && $self$$90$$.$getVal$().length && ($id$$25$$ = $self$$90$$.$getVal$()[0]);
          var $first$$5$$ = "select" == $tagName$$5$$ && $self$$90$$.$ojContext$.$_HasPlaceholderSet$() && !$self$$90$$.$ojContext$.$_IsRequired$() ? $self$$90$$.$_getPlaceholder$() : null, $match$$19$$ = null;
          $opts$$14$$.$query$({$matcher$:function($is_match_term$$5$$, $text$$17$$, $el$$6$$) {
            ($is_match_term$$5$$ = $id$$25$$ === $opts$$14$$.id($el$$6$$)) && ($match$$19$$ = $el$$6$$);
            null == $first$$5$$ && ($first$$5$$ = $el$$6$$);
            return $is_match_term$$5$$;
          }, $callback$:$$$$12$$.isFunction($callback$$99$$) ? function() {
            $match$$19$$ || "select" !== $tagName$$5$$ || ($match$$19$$ = $first$$5$$);
            $callback$$99$$($match$$19$$);
          } : $$$$12$$.noop});
        }, $opts$$14$$.validate = function $$opts$$14$$$validate$($element$$151$$, $value$$209$$) {
          var $match$$20$$ = null;
          $opts$$14$$.$query$({$matcher$:function($is_match$$1_term$$6$$, $text$$18$$, $el$$7$$) {
            ($is_match$$1_term$$6$$ = $value$$209$$ === $opts$$14$$.id($el$$7$$)) && ($match$$20$$ = $el$$7$$);
            return $is_match$$1_term$$6$$;
          }, $callback$:$$$$12$$.noop});
          return!!$match$$20$$;
        });
      }
    }
    return $opts$$14$$;
  }, $_postprocessResults$:function($data$$90_highlightableChoices$$1$$, $initial$$2$$, $noHighlightUpdate$$) {
    var $selected$$3$$ = -1, $self$$91$$ = this;
    $data$$90_highlightableChoices$$1$$ = this.$_findHighlightableChoices$();
    $_ComboUtils$$.$each2$($data$$90_highlightableChoices$$1$$, function($i$$214$$, $elm$$3$$) {
      if ($self$$91$$.$getVal$() && $self$$91$$.$getVal$()[0] === $self$$91$$.id($elm$$3$$.data($self$$91$$.$_elemNm$))) {
        return $selected$$3$$ = $i$$214$$, !1;
      }
    });
    !1 !== $noHighlightUpdate$$ && !0 === $initial$$2$$ && 0 <= $selected$$3$$ && this.$_highlight$($selected$$3$$);
  }, $_onSelect$:function($data$$91$$, $options$$238$$, $event$$236$$) {
    if (this.$_triggerSelect$($data$$91$$)) {
      var $context$$69$$;
      $options$$238$$ && $options$$238$$.trigger && ($context$$69$$ = {$optionMetadata$:{trigger:$options$$238$$.trigger}});
      this.close($event$$236$$);
      this.$setVal$(0 === this.id($data$$91$$).length ? [] : this.id($data$$91$$), $event$$236$$, $context$$69$$);
      "blur" !== $event$$236$$.type && this.$_focusSearch$();
    }
  }, $_clearSearch$:function() {
    this.search.val("");
  }}), $_OjSingleCombobox$$ = $_ComboUtils$$.$clazz$($_AbstractSingleChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-combobox oj-component"}).html("\x3cdiv class\x3d'oj-combobox-choice' tabindex\x3d'-1' role\x3d'presentation'\x3e   \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'       spellcheck\x3d'false' class\x3d'oj-combobox-input' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e   \x3cabbr class\x3d'oj-combobox-clear-entry' role\x3d'presentation'\x3e\x3c/abbr\x3e   \x3ca class\x3d'oj-combobox-arrow oj-combobox-icon oj-component-icon oj-clickable-icon-nocontext oj-combobox-open-icon'       role\x3d'button' aria-label\x3d'expand'\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop' style\x3d'display:none' role\x3d'presentation'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }, $_enable$:function($enabled$$3$$) {
    $_OjSingleCombobox$$.$superclass$.$_enable$.apply(this, arguments);
    this.$_enabled$ ? this.$container$.find(".oj-combobox-arrow").removeClass("oj-disabled") : this.$container$.find(".oj-combobox-arrow").addClass("oj-disabled");
  }, close:function($event$$237$$) {
    this.$_opened$() && $_OjSingleCombobox$$.$superclass$.close.apply(this, arguments);
  }, $_opening$:function($event$$238$$, $dontUpdateResults$$1$$) {
    $_OjSingleCombobox$$.$superclass$.$_opening$.apply(this, arguments);
    $dontUpdateResults$$1$$ || this.$_updateResults$(!0);
  }, $_containerKeydownHandler$:function($e$$71$$) {
    $_ComboUtils$$.$KEY$.$isControl$($e$$71$$) || $_ComboUtils$$.$KEY$.$isFunctionKey$($e$$71$$) || $_OjSingleCombobox$$.$superclass$.$_containerKeydownHandler$.apply(this, arguments);
  }, $_updateSelection$:function($data$$92$$) {
    var $formatted$$2$$, $item$$11$$ = [];
    this.selection.data(this.$_elemNm$, $data$$92$$);
    null !== $data$$92$$ && 0 != $data$$92$$.length ? ($formatted$$2$$ = this.$opts$.$formatSelection$($data$$92$$), void 0 !== $formatted$$2$$ && this.search.val() !== $formatted$$2$$ && this.search.val($formatted$$2$$), this.search.removeClass(this.$_classNm$ + "-default"), $item$$11$$.push($data$$92$$)) : (this.search.val(""), this.$_setPlaceholder$());
    this.currentItem = $item$$11$$;
    this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear");
  }, $_updateSelectedOption$:function($data$$93_selected$$4_value$$210$$) {
    if (void 0 === $data$$93_selected$$4_value$$210$$ || null === $data$$93_selected$$4_value$$210$$) {
      $data$$93_selected$$4_value$$210$$ = ($data$$93_selected$$4_value$$210$$ = this.$getVal$()) ? Array.isArray($data$$93_selected$$4_value$$210$$) ? Array.isArray($data$$93_selected$$4_value$$210$$) && $data$$93_selected$$4_value$$210$$.length ? {label:$data$$93_selected$$4_value$$210$$[0]} : null : {label:$data$$93_selected$$4_value$$210$$} : null;
    }
    this.$_updateSelection$($data$$93_selected$$4_value$$210$$);
  }}), $_OjSingleSelect$$ = $_ComboUtils$$.$clazz$($_AbstractSingleChoice$$, {$_elemNm$:"ojselect", $_classNm$:"oj-select", $_userTyping$:!1, $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-select oj-component"}).html("\x3cdiv class\x3d'oj-select-choice' tabindex\x3d'0' role\x3d'combobox'      aria-autocomplete\x3d'none' aria-expanded\x3d'false' aria-ready\x3d'true'\x3e  \x3cspan class\x3d'oj-select-chosen'\x3e\x3c/span\x3e  \x3cabbr class\x3d'oj-select-search-choice-close' role\x3d'presentation'\x3e\x3c/abbr\x3e  \x3ca class\x3d'oj-select-arrow oj-component-icon oj-clickable-icon-nocontext oj-select-open-icon' role\x3d'presentation'\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop' style\x3d'display:none' role\x3d'presentation'\x3e  \x3cdiv class\x3d'oj-listbox-search-wrapper'\x3e  \x3cdiv class\x3d'oj-listbox-search'\x3e    \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'           spellcheck\x3d'false' class\x3d'oj-listbox-input' title\x3d'Search field'            role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e    \x3cspan class\x3d'oj-listbox-spyglass-box'\x3e      \x3cspan class\x3d'oj-component-icon oj-clickable-icon-nocontext oj-listbox-search-icon' role\x3d'presentation'\x3e       \x3cb role\x3d'presentation'\x3e\x3c/b\x3e\x3c/span\x3e    \x3c/span\x3e  \x3c/div\x3e  \x3c/div\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }, $_enable$:function($enabled$$4$$) {
    $_OjSingleSelect$$.$superclass$.$_enable$.apply(this, arguments);
    this.$_enabled$ ? (this.$container$.find(".oj-select-choice").attr("tabindex", "0"), this.$container$.find(".oj-select-arrow").removeClass("oj-disabled")) : (this.$container$.find(".oj-select-choice").attr("tabindex", "-1"), this.$container$.find(".oj-select-arrow").addClass("oj-disabled"));
  }, close:function($event$$239$$) {
    this.$_opened$() && ($_OjSingleSelect$$.$superclass$.close.apply(this, arguments), this.$container$.find(".oj-select-choice").attr("aria-expanded", !1), this.$_testClear$($event$$239$$) || this.$_clearSearch$(), $event$$239$$ instanceof MouseEvent && $event$$239$$.target != this.selection && $event$$239$$.target != this.search || $_ComboUtils$$.$_focus$(this.selection), this.$container$.find(".oj-listbox-spyglass-box").off("mouseup click"));
  }, $_opening$:function($event$$240$$, $dontUpdateResults$$2$$) {
    $_OjSingleSelect$$.$superclass$.$_opening$.apply(this, arguments);
    var $searchText$$;
    $event$$240$$ && "keydown" == $event$$240$$.type && $event$$240$$.which != $_ComboUtils$$.$KEY$.UP && $event$$240$$.which != $_ComboUtils$$.$KEY$.DOWN && $event$$240$$.which != $_ComboUtils$$.$KEY$.LEFT && $event$$240$$.which != $_ComboUtils$$.$KEY$.RIGHT && ($searchText$$ = String.fromCharCode($event$$240$$.which), $_ComboUtils$$.$killEvent$($event$$240$$));
    this.$_showSearchBox$($searchText$$);
    $dontUpdateResults$$2$$ || ($searchText$$ ? this.$_updateResults$() : this.$_updateResults$(!0));
  }, $_showDropDown$:function() {
    this.$_opened$() && ($_OjSingleSelect$$.$superclass$.$_showDropDown$.apply(this, arguments), this.$container$.find(".oj-select-choice").attr("aria-expanded", !0));
  }, $_initContainer$:function() {
    var $label$$13_selectedId$$ = this.$containerId$ + "_selected";
    this.text = this.$container$.find(".oj-select-chosen").attr("id", $label$$13_selectedId$$);
    $_OjSingleSelect$$.$superclass$.$_initContainer$.apply(this, arguments);
    this.$container$.find(".oj-select-choice").attr({"aria-owns":this.search.attr("aria-owns"), "aria-labelledby":this.search.attr("aria-labelledby"), "aria-describedby":$label$$13_selectedId$$});
    ($label$$13_selectedId$$ = this.$opts$.element.attr("aria-label")) && this.selection.attr("aria-label", $label$$13_selectedId$$);
    this.search.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
    this.search.on("keyup-change input", this.$_bind$(this.$_containerKeyupHandler$));
    this.search.attr("title", this.$ojContext$.$getTranslatedString$("seachField"));
    var $self$$92$$ = this;
    this.selection.on("blur", function($e$$72$$) {
      $self$$92$$.$_testClear$($e$$72$$);
    });
  }, $_initSelection$:function() {
    this.$_isPlaceholderOptionSelected$() ? (this.$_updateSelection$(null), this.close(), this.$_setPlaceholder$()) : $_OjSingleSelect$$.$superclass$.$_initSelection$.apply(this, arguments);
  }, $_updateSelectedOption$:function($selected$$5$$) {
    if (void 0 !== $selected$$5$$ && null !== $selected$$5$$) {
      var $selectedVal$$, $value$$211$$ = this.$getVal$(), $value$$211$$ = Array.isArray($value$$211$$) ? $value$$211$$[0] : $value$$211$$;
      $selectedVal$$ = this.$opts$.id($selected$$5$$);
      $value$$211$$ !== $selectedVal$$ && (void 0 === $value$$211$$ || null === $value$$211$$ ? this.$ojContext$.options.value = Array.isArray($selectedVal$$) ? $selectedVal$$ : [$selectedVal$$] : this.$setVal$(Array.isArray($selectedVal$$) ? $selectedVal$$ : [$selectedVal$$]));
      this.$_updateSelection$($selected$$5$$);
      this.close();
    }
  }, $_updateSelection$:function($data$$94$$) {
    this.selection.data(this.$_elemNm$, $data$$94$$);
    null !== $data$$94$$ && this.text.text($data$$94$$.label);
    $data$$94$$ && "" != $data$$94$$.id && this.text.removeClass(this.$_classNm$ + "-default");
    this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear");
  }, $_getActiveContainer$:function() {
    return this.search.attr("aria-expanded") && this.$_hasSearchBox$() ? this.search : this.selection;
  }, $_isPlaceholderOptionSelected$:function() {
    if (null === this.$_getPlaceholder$()) {
      return!1;
    }
    var $cval$$ = this.$getVal$(), $cval$$ = Array.isArray($cval$$) ? $cval$$[0] : $cval$$;
    return "" === $cval$$ || void 0 === $cval$$ || null === $cval$$;
  }, $_getPlaceholder$:function() {
    return this.$opts$.placeholder;
  }, $_showPlaceholder$:function() {
    return!0;
  }, $_setPlaceholder$:function() {
    var $placeholder$$2$$ = this.$_getPlaceholder$();
    this.$_isPlaceholderOptionSelected$() && void 0 !== $placeholder$$2$$ && (void 0 === $placeholder$$2$$ && ($placeholder$$2$$ = ""), this.text.text($placeholder$$2$$).addClass(this.$_classNm$ + "-default"), this.$container$.removeClass(this.$_classNm$ + "-allowclear"));
  }, $setVal$:function($val$$37$$, $event$$241$$, $context$$70$$) {
    $_OjSingleSelect$$.$superclass$.$setVal$.call(this, $val$$37$$, $event$$241$$, $context$$70$$);
    this.selection.data("selectVal", $val$$37$$);
  }, $_containerKeydownHandler$:function($e$$73$$) {
    if (!($_ComboUtils$$.$KEY$.$isControl$($e$$73$$) && $e$$73$$.which != $_ComboUtils$$.$KEY$.$SHIFT$ || $_ComboUtils$$.$KEY$.$isFunctionKey$($e$$73$$))) {
      switch($e$$73$$.which) {
        case $_ComboUtils$$.$KEY$.TAB:
          this.close($e$$73$$);
          this.selection.focus();
          this.$_testClear$($e$$73$$);
          return;
        case $_ComboUtils$$.$KEY$.ENTER:
          if ($e$$73$$.target === this.selection[0] && !this.$_opened$()) {
            this.open($e$$73$$);
            $_ComboUtils$$.$killEvent$($e$$73$$);
            return;
          }
        ;
      }
      var $hasSearchBoxAlready$$ = this.$_hasSearchBox$();
      $_OjSingleSelect$$.$superclass$.$_containerKeydownHandler$.apply(this, arguments);
      this.$_userTyping$ && !this.$_opened$() && this.open($e$$73$$);
      if (!$hasSearchBoxAlready$$ && this.$_userTyping$) {
        var $c$$43$$;
        $e$$73$$.which != $_ComboUtils$$.$KEY$.LEFT && $e$$73$$.which != $_ComboUtils$$.$KEY$.RIGHT && ($c$$43$$ = String.fromCharCode($e$$73$$.which));
        this.$_showSearchBox$($c$$43$$);
        this.$_updateResults$();
        $_ComboUtils$$.$killEvent$($e$$73$$);
      }
    }
  }, $_testClear$:function($event$$242$$) {
    return "" == this.text.text() ? (this.$_clear$($event$$242$$), !0) : !1;
  }, $_showSearchBox$:function($searchText$$1$$) {
    var $focusOnSearchBox$$ = !1, $searchBox$$ = this.$dropdown$.find(".oj-listbox-search");
    $searchBox$$ && (this.$_hasSearchBox$() ? (this.$dropdown$.find(".oj-listbox-search-wrapper").removeClass("oj-helper-hidden-accessible"), $$$$12$$($searchBox$$).removeAttr("aria-hidden"), this.search.val($searchText$$1$$), $focusOnSearchBox$$ = !0) : (this.$dropdown$.find(".oj-listbox-search-wrapper").addClass("oj-helper-hidden-accessible"), $$$$12$$($searchBox$$).attr("aria-hidden", "true")));
    $_ComboUtils$$.$_focus$($focusOnSearchBox$$ ? this.search : this.selection);
    if ($focusOnSearchBox$$) {
      var $self$$93$$ = this;
      $searchBox$$.find(".oj-listbox-spyglass-box").on("mouseup click", function($e$$74$$) {
        $self$$93$$.search.focus();
        $e$$74$$.stopPropagation();
      });
    }
  }, $_hasSearchBox$:function() {
    var $threshold$$7$$ = this.$opts$.minimumResultsForSearch;
    return(this.$opts$.list ? $$$$12$$("#" + this.$opts$.list).find("li").length : this.$datalist$ ? this.$datalist$[0].length : this.$opts$.options ? this.$opts$.options.length : 0) > $threshold$$7$$ || this.$_userTyping$;
  }}), $_AbstractMultiChoice$$ = $_ComboUtils$$.$clazz$($_AbstractOjChoice$$, {$_prepareOpts$:function() {
    var $opts$$15$$ = $_AbstractMultiChoice$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$94$$ = this, $tagName$$6$$ = $opts$$15$$.element.get(0).tagName.toLowerCase();
    if ("input" === $tagName$$6$$ && $opts$$15$$.element.attr("list") || "select" === $tagName$$6$$ && 0 < $opts$$15$$.element.children().length || $opts$$15$$.list) {
      var $eleName$$1$$ = $opts$$15$$.list ? "li" : "option";
      $opts$$15$$.$initSelection$ = function $$opts$$15$$$$initSelection$$($element$$152$$, $callback$$100$$) {
        var $data$$95$$ = [];
        if ($self$$94$$.$getVal$()) {
          for (var $selected$$6$$, $ids$$ = $self$$94$$.$getVal$(), $i$$215$$ = 0;$i$$215$$ < $ids$$.length;$i$$215$$++) {
            var $id$$27$$ = $ids$$[$i$$215$$];
            ($selected$$6$$ = $element$$152$$.find($eleName$$1$$).filter(function() {
              if ("option" === $eleName$$1$$) {
                return this.value === $id$$27$$;
              }
              if ("li" === $eleName$$1$$) {
                return this.getAttribute("oj-data-value") === $id$$27$$;
              }
            })) && $selected$$6$$.length ? $data$$95$$.push($self$$94$$.$_optionToData$($selected$$6$$)) : $data$$95$$.push({value:$id$$27$$, label:$id$$27$$});
          }
        } else {
          "select" !== $tagName$$6$$ && ($selected$$6$$ = $element$$152$$.find($eleName$$1$$).filter(function() {
            if ("option" === $eleName$$1$$) {
              return this.selected;
            }
            if ("li" === $eleName$$1$$) {
              return!0 === this.getAttribute("oj-data-selected");
            }
          }), $_ComboUtils$$.$each2$($selected$$6$$, function($i$$216$$, $elm$$4$$) {
            $data$$95$$.push($self$$94$$.$_optionToData$($elm$$4$$));
          }));
        }
        $callback$$100$$($data$$95$$);
      };
    } else {
      "options" in $opts$$15$$ && ($opts$$15$$.$initSelection$ = $$$$12$$.isFunction($opts$$15$$.options) ? function($element$$153$$, $callback$$101$$) {
        function $reorderOptions$$() {
          for (var $ordered$$ = [], $i$$218$$ = 0;$i$$218$$ < $ids$$1$$.length;$i$$218$$++) {
            for (var $id$$28$$ = $ids$$1$$[$i$$218$$], $found$$5$$ = !1, $currentItem$$3_j$$33$$ = 0;$currentItem$$3_j$$33$$ < $matches$$3$$.length;$currentItem$$3_j$$33$$++) {
              var $k$$13_match$$21$$ = $matches$$3$$[$currentItem$$3_j$$33$$];
              if ($id$$28$$ === $opts$$15$$.id($k$$13_match$$21$$)) {
                $ordered$$.push($k$$13_match$$21$$);
                $matches$$3$$.splice($currentItem$$3_j$$33$$, 1);
                $found$$5$$ = !0;
                break;
              }
            }
            if (!$found$$5$$) {
              if (($currentItem$$3_j$$33$$ = $self$$94$$.currentItem) && $currentItem$$3_j$$33$$.length) {
                for ($k$$13_match$$21$$ = 0;$k$$13_match$$21$$ < $currentItem$$3_j$$33$$.length;$k$$13_match$$21$$++) {
                  if ($id$$28$$ === $opts$$15$$.id($currentItem$$3_j$$33$$[$k$$13_match$$21$$])) {
                    $ordered$$.push($currentItem$$3_j$$33$$[$k$$13_match$$21$$]);
                    $found$$5$$ = !0;
                    break;
                  }
                }
              }
              $found$$5$$ || $ordered$$.push({value:$id$$28$$, label:$id$$28$$});
            }
          }
          $callback$$101$$($ordered$$);
        }
        function $findOptions$$($results$$8$$, $optionValues$$) {
          for (var $foundOptions$$ = [], $i$$217$$ = 0, $l$$9$$ = $results$$8$$.length;$i$$217$$ < $l$$9$$;$i$$217$$++) {
            var $childOptions_result$$35$$ = $results$$8$$[$i$$217$$];
            0 <= $optionValues$$.indexOf($opts$$15$$.id($childOptions_result$$35$$)) && $foundOptions$$.push($childOptions_result$$35$$);
            $childOptions_result$$35$$.children && ($childOptions_result$$35$$ = $findOptions$$($childOptions_result$$35$$.children, $optionValues$$)) && $childOptions_result$$35$$.length && $$$$12$$.merge($foundOptions$$, $childOptions_result$$35$$);
          }
          return $foundOptions$$;
        }
        var $ids$$1$$ = $self$$94$$.$getVal$(), $matches$$3$$ = [], $queryResult$$5$$ = $_ComboUtils$$.$getLastQueryResult$($self$$94$$);
        $queryResult$$5$$ && ($matches$$3$$ = $findOptions$$($queryResult$$5$$, $ids$$1$$));
        $self$$94$$.$valueChangeTrigger$ ? $reorderOptions$$() : $opts$$15$$.$query$({value:$ids$$1$$, $callback$:function($queryResult$$6_results$$9$$) {
          $queryResult$$6_results$$9$$ && $queryResult$$6_results$$9$$.$results$ && ($queryResult$$6_results$$9$$ = $findOptions$$($queryResult$$6_results$$9$$.$results$, $ids$$1$$)) && $queryResult$$6_results$$9$$.length && $$$$12$$.merge($matches$$3$$, $queryResult$$6_results$$9$$);
          $reorderOptions$$();
        }});
      } : $opts$$15$$.$initSelection$ || function($element$$154$$, $callback$$102$$) {
        var $ids$$2$$ = $self$$94$$.$getVal$(), $matches$$4$$ = [];
        $opts$$15$$.$query$({$matcher$:function($is_match$$2_term$$7$$, $text$$19$$, $el$$8$$) {
          ($is_match$$2_term$$7$$ = $$$$12$$.grep($ids$$2$$, function($id$$29$$) {
            return $id$$29$$ === $opts$$15$$.id($el$$8$$);
          }).length) && $matches$$4$$.push($el$$8$$);
          return $is_match$$2_term$$7$$;
        }, $callback$:$$$$12$$.isFunction($callback$$102$$) ? function() {
          for (var $ordered$$1$$ = [], $i$$219$$ = 0;$i$$219$$ < $ids$$2$$.length;$i$$219$$++) {
            for (var $id$$30$$ = $ids$$2$$[$i$$219$$], $found$$6$$ = !1, $j$$34$$ = 0;$j$$34$$ < $matches$$4$$.length;$j$$34$$++) {
              var $match$$22$$ = $matches$$4$$[$j$$34$$];
              if ($id$$30$$ === $opts$$15$$.id($match$$22$$)) {
                $ordered$$1$$.push($match$$22$$);
                $matches$$4$$.splice($j$$34$$, 1);
                $found$$6$$ = !0;
                break;
              }
            }
            $found$$6$$ || $ordered$$1$$.push({value:$id$$30$$, label:$id$$30$$});
          }
          $callback$$102$$($ordered$$1$$);
        } : $$$$12$$.noop});
      });
    }
    return $opts$$15$$;
  }, $_selectChoice$:function($choice$$2$$) {
    var $selected$$7$$ = this.$container$.find("." + this.$_classNm$ + "-selected-choice.oj-focus");
    $selected$$7$$.length && $choice$$2$$ && $choice$$2$$[0] == $selected$$7$$[0] || ($selected$$7$$.length && this.$opts$.element.trigger("choice-deselected", $selected$$7$$), $selected$$7$$.removeClass("oj-focus"), $choice$$2$$ && $choice$$2$$.length && (this.close(), $choice$$2$$.addClass("oj-focus"), this.$container$.find("." + this.$_classNm$ + "-description").text($choice$$2$$.attr("valueText") + ". Press back space to delete.").attr("aria-live", "assertive"), this.$opts$.element.trigger("choice-selected", 
    $choice$$2$$)));
  }, _destroy:function() {
    $$$$12$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
    $_AbstractMultiChoice$$.$superclass$._destroy.apply(this, arguments);
  }, $_initContainer$:function() {
    var $selector$$22$$ = "." + this.$_classNm$ + "-choices", $selection$$13$$, $idSuffix$$1$$ = $_ComboUtils$$.$nextUid$(), $elementLabel$$1$$;
    this.$searchContainer$ = this.$container$.find("." + this.$_classNm$ + "-search-field");
    this.selection = $selection$$13$$ = this.$container$.find($selector$$22$$);
    var $_this$$ = this;
    this.selection.on("click", "." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)", function() {
      $_this$$.search[0].focus();
      $_this$$.$_selectChoice$($$$$12$$(this));
    });
    $elementLabel$$1$$ = $$$$12$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
    $elementLabel$$1$$.attr("id") || $elementLabel$$1$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix$$1$$);
    $selection$$13$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix$$1$$);
    this.$results$.attr("id") || this.$results$.attr("id", "oj-listbox-results-" + $idSuffix$$1$$);
    this.search.attr("aria-owns", this.$results$.attr("id"));
    this.search.attr("aria-labelledby", $elementLabel$$1$$.attr("id"));
    this.$opts$.element.attr("aria-labelledby", $elementLabel$$1$$.attr("id"));
    this.search.attr("id") && $elementLabel$$1$$.attr("for", this.search.attr("id"));
    this.$opts$.element.attr("aria-label") && this.search.attr("aria-label", this.$opts$.element.attr("aria-label"));
    this.$opts$.element.attr("aria-controls") && this.search.attr("aria-controls", this.$opts$.element.attr("aria-controls"));
    this.search.attr("tabindex", this.$elementTabIndex$);
    this.$keydowns$ = 0;
    this.search.on("keydown", this.$_bind$(function($e$$76$$) {
      if (this.$_isInterfaceEnabled$()) {
        ++this.$keydowns$;
        var $selected$$8$$ = $selection$$13$$.find("." + this.$_classNm$ + "-selected-choice.oj-focus"), $prev$$3$$ = $selected$$8$$.prev("." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)"), $next$$ = $selected$$8$$.next("." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)"), $pos$$9_selectedChoice$$ = $_ComboUtils$$.$getCursorInfo$(this.search);
        if (!$selected$$8$$.length || $e$$76$$.which != $_ComboUtils$$.$KEY$.LEFT && $e$$76$$.which != $_ComboUtils$$.$KEY$.RIGHT && $e$$76$$.which != $_ComboUtils$$.$KEY$.$BACKSPACE$ && $e$$76$$.which != $_ComboUtils$$.$KEY$.$DELETE$ && $e$$76$$.which != $_ComboUtils$$.$KEY$.ENTER) {
          if (($e$$76$$.which !== $_ComboUtils$$.$KEY$.$BACKSPACE$ || 1 != this.$keydowns$) && $e$$76$$.which != $_ComboUtils$$.$KEY$.LEFT || 0 != $pos$$9_selectedChoice$$.offset || $pos$$9_selectedChoice$$.length) {
            this.$_selectChoice$(null);
            if (this.$_opened$()) {
              switch($e$$76$$.which) {
                case $_ComboUtils$$.$KEY$.UP:
                ;
                case $_ComboUtils$$.$KEY$.DOWN:
                  this.$_moveHighlight$($e$$76$$.which === $_ComboUtils$$.$KEY$.UP ? -1 : 1);
                  $_ComboUtils$$.$killEvent$($e$$76$$);
                  return;
                case $_ComboUtils$$.$KEY$.ENTER:
                  this.$_selectHighlighted$(null, $e$$76$$);
                  $_ComboUtils$$.$killEvent$($e$$76$$);
                  return;
                case $_ComboUtils$$.$KEY$.TAB:
                  this.close($e$$76$$);
                  return;
                case $_ComboUtils$$.$KEY$.$ESC$:
                  this.$_cancel$($e$$76$$);
                  $_ComboUtils$$.$killEvent$($e$$76$$);
                  return;
              }
            }
            if (!($e$$76$$.which === $_ComboUtils$$.$KEY$.TAB || $_ComboUtils$$.$KEY$.$isControl$($e$$76$$) || $_ComboUtils$$.$KEY$.$isFunctionKey$($e$$76$$) || $e$$76$$.which === $_ComboUtils$$.$KEY$.$ESC$ || $e$$76$$.which === $_ComboUtils$$.$KEY$.ENTER && this.search.val() && "ojcombobox" === this.$_elemNm$)) {
              switch($e$$76$$.which) {
                case $_ComboUtils$$.$KEY$.UP:
                ;
                case $_ComboUtils$$.$KEY$.DOWN:
                  this.open();
                  $_ComboUtils$$.$killEvent$($e$$76$$);
                  break;
                case $_ComboUtils$$.$KEY$.PAGE_UP:
                ;
                case $_ComboUtils$$.$KEY$.PAGE_DOWN:
                  $_ComboUtils$$.$killEvent$($e$$76$$);
                  break;
                case $_ComboUtils$$.$KEY$.ENTER:
                  $_ComboUtils$$.$killEvent$($e$$76$$);
              }
            }
          } else {
            this.$_selectChoice$($selection$$13$$.find("." + this.$_classNm$ + "-selected-choice:not(." + this.$_classNm$ + "-locked)").last()), $_ComboUtils$$.$killEvent$($e$$76$$);
          }
        } else {
          $pos$$9_selectedChoice$$ = $selected$$8$$, $e$$76$$.which == $_ComboUtils$$.$KEY$.LEFT && $prev$$3$$.length ? $pos$$9_selectedChoice$$ = $prev$$3$$ : $e$$76$$.which == $_ComboUtils$$.$KEY$.RIGHT ? $pos$$9_selectedChoice$$ = $next$$.length ? $next$$ : null : $e$$76$$.which === $_ComboUtils$$.$KEY$.$BACKSPACE$ ? (this.$_unselect$($selected$$8$$.first(), $e$$76$$), this.search.width(10), $pos$$9_selectedChoice$$ = $prev$$3$$.length ? $prev$$3$$ : $next$$) : $e$$76$$.which == $_ComboUtils$$.$KEY$.$DELETE$ ? 
          (this.$_unselect$($selected$$8$$.first(), $e$$76$$), this.search.width(10), $pos$$9_selectedChoice$$ = $next$$.length ? $next$$ : null) : $e$$76$$.which == $_ComboUtils$$.$KEY$.ENTER && ($pos$$9_selectedChoice$$ = null), this.$_selectChoice$($pos$$9_selectedChoice$$), $_ComboUtils$$.$killEvent$($e$$76$$), $pos$$9_selectedChoice$$ && $pos$$9_selectedChoice$$.length || this.open();
        }
      }
    }));
    this.search.on("keyup", this.$_bind$(function() {
      this.$keydowns$ = 0;
    }));
    this.search.on("input", this.$_bind$(function($e$$78$$) {
      this.$ojContext$.$_SetRawValue$(this.search.val(), $e$$78$$);
    }));
    this.search.on("blur keyup", this.$_bind$(function($e$$79$$) {
      if ("keyup" !== $e$$79$$.type || 10 === $e$$79$$.keyCode || 13 === $e$$79$$.keyCode) {
        if (this.$opts$.manageNewEntry && this.search.val() && 0 >= this.$results$.find(".oj-hover").length) {
          var $data$$96$$ = this.$opts$.manageNewEntry(this.search.val());
          this.$_onSelect$($data$$96$$, {trigger:"blur" === $e$$79$$.type ? $_ComboUtils$$.$ValueChangeTriggerTypes$.$BLUR$ : $_ComboUtils$$.$ValueChangeTriggerTypes$.$ENTER_PRESSED$}, $e$$79$$);
        }
        this.search.removeClass(this.$_classNm$ + "-focused");
        this.$container$.removeClass("oj-focus");
        this.$_selectChoice$(null);
        this.$_opened$() || this.$_clearSearch$();
        $e$$79$$.stopImmediatePropagation();
      }
    }));
    this.$container$.on("click touchstart", $selector$$22$$, this.$_bind$(function($e$$80$$) {
      !this.$_isInterfaceEnabled$() || 0 < $$$$12$$($e$$80$$.target).closest("." + this.$_classNm$ + "-selected-choice").length || (this.$_selectChoice$(null), this.$_opened$() ? this.close($e$$80$$) : (this.open(), this.$_focusSearch$()), $e$$80$$.preventDefault());
    }));
    this.$container$.on("focus", $selector$$22$$, this.$_bind$(function() {
    }));
    this.$_initContainerWidth$();
    this.$opts$.element.hide().attr("aria-hidden", !0);
    this.$_clearSearch$();
  }, $_enableInterface$:function() {
    $_AbstractMultiChoice$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$());
  }, $_initSelection$:function() {
    null !== this.$getVal$() && 0 !== this.$getVal$().length || "oj-select" !== this.$_classNm$ && "" !== this.$opts$.element.text() || (this.$_updateSelection$([]), this.close(), this.$_clearSearch$());
    if (this.$datalist$ || null !== this.$getVal$() && this.$getVal$().length) {
      var $self$$95$$ = this;
      this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, function($data$$98$$) {
        void 0 !== $data$$98$$ && null !== $data$$98$$ && 0 !== $data$$98$$.length && ($self$$95$$.$_updateSelection$($data$$98$$), $self$$95$$.close(), $self$$95$$.$_clearSearch$());
      });
    }
  }, $_clearSearch$:function() {
    var $placeholder$$3$$ = this.$_getPlaceholder$(), $maxWidth$$ = this.$_getMaxSearchWidth$();
    void 0 === $placeholder$$3$$ || this.$getVal$() && 0 !== this.$getVal$().length ? (this.search.attr("placeholder", ""), this.search.val("").width(10), this.$searchContainer$.width("auto")) : (this.search.attr("placeholder", $placeholder$$3$$), this.search.val("").width(0 < $maxWidth$$ ? $maxWidth$$ : this.$container$.css("width")), this.$searchContainer$.width("100%"));
  }, $_opening$:function($event$$243$$, $dontUpdateResults$$3$$) {
    this.$_resizeSearch$();
    $_AbstractMultiChoice$$.$superclass$.$_opening$.apply(this, arguments);
    this.$_focusSearch$();
    $dontUpdateResults$$3$$ || this.$_updateResults$(!0);
    this.search.focus();
  }, close:function($event$$244$$) {
    this.$_opened$() && $_AbstractMultiChoice$$.$superclass$.close.apply(this, arguments);
  }, $_focus$:function() {
    this.close();
    this.search.focus();
  }, $_updateSelection$:function($data$$99$$) {
    var $ids$$3$$ = [], $filtered$$2$$ = [], $self$$96$$ = this;
    $$$$12$$($data$$99$$).each(function() {
      0 > $ids$$3$$.indexOf($self$$96$$.id(this)) && ($ids$$3$$.push($self$$96$$.id(this)), $filtered$$2$$.push(this));
    });
    $data$$99$$ = $filtered$$2$$;
    this.selection.find("." + this.$_classNm$ + "-selected-choice").remove();
    $$$$12$$($data$$99$$).each(function() {
      $self$$96$$.$_addSelectedChoice$(this);
    });
    this.currentItem = $data$$99$$;
    this.$opts$.element.val(0 === $ids$$3$$.length ? "" : $ids$$3$$.join(this.$opts$.separator));
    $self$$96$$.$_postprocessResults$();
  }, $_onSelect$:function($data$$100$$, $options$$240$$, $event$$245$$) {
    if (this.$_triggerSelect$($data$$100$$)) {
      var $context$$71$$;
      $options$$240$$ && $options$$240$$.trigger && ($context$$71$$ = {$optionMetadata$:{trigger:$options$$240$$.trigger}});
      var $id$$31$$ = this.id($data$$100$$), $val$$38$$ = this.$getVal$() ? this.$getVal$().slice(0) : [];
      this.$ojContext$.isValid() || ($val$$38$$ = $_ComboUtils$$.$splitVal$(this.$opts$.element.val(), this.$opts$.separator));
      $$$$12$$($data$$100$$).each(function() {
        0 > $val$$38$$.indexOf($id$$31$$) && $val$$38$$.push($id$$31$$);
      });
      this.$setVal$($val$$38$$, $event$$245$$, $context$$71$$);
      !this.select && this.$opts$.$closeOnSelect$ || this.$_postprocessResults$($data$$100$$, !1, !0 === this.$opts$.$closeOnSelect$);
      this.$opts$.$closeOnSelect$ && (this.close($event$$245$$), this.search.width(10));
      $options$$240$$ && $options$$240$$.$noFocus$ || this.$_focusSearch$();
    }
  }, $_cancel$:function($event$$246$$) {
    this.close($event$$246$$);
    this.$_focusSearch$();
  }, $_addSelectedChoice$:function($data$$101$$) {
    var $enableChoice$$ = !$data$$101$$.locked, $choice$$3_enabledItem$$ = $$$$12$$("\x3cli class\x3d'" + this.$_classNm$ + "-selected-choice'\x3e    \x3cdiv\x3e\x3c/div\x3e    \x3ca href\x3d'#' onclick\x3d'return false;' role\x3d'button' aria-label\x3d'remove' class\x3d'" + this.$_classNm$ + "-clear-entry       oj-component-icon oj-clickable-icon-nocontext " + this.$_classNm$ + "-clear-entry-icon' tabindex\x3d'-1'\x3e    \x3c/a\x3e\x3c/li\x3e"), $disabledItem_formatted$$3$$ = $$$$12$$("\x3cli class\x3d'" + 
    this.$_classNm$ + "-selected-choice " + this.$_classNm$ + "-locked'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/li\x3e"), $choice$$3_enabledItem$$ = $enableChoice$$ ? $choice$$3_enabledItem$$ : $disabledItem_formatted$$3$$;
    this.id($data$$101$$);
    $disabledItem_formatted$$3$$ = this.$opts$.$formatSelection$($data$$101$$);
    void 0 !== $disabledItem_formatted$$3$$ && ($choice$$3_enabledItem$$.find("div").addClass(this.$_classNm$ + "-selected-choice-label").text($disabledItem_formatted$$3$$), $choice$$3_enabledItem$$.find("." + this.$_classNm$ + "-clear-entry").attr("aria-label", $disabledItem_formatted$$3$$ + " remove"), $choice$$3_enabledItem$$.attr("valueText", $disabledItem_formatted$$3$$));
    if ($enableChoice$$) {
      $choice$$3_enabledItem$$.find("." + this.$_classNm$ + "-clear-entry").on("mousedown", $_ComboUtils$$.$killEvent$).on("click dblclick", this.$_bind$(function($e$$81$$) {
        this.$_isInterfaceEnabled$() && ($$$$12$$($e$$81$$.target).closest("." + this.$_classNm$ + "-selected-choice").fadeOut("fast", this.$_bind$(function() {
          this.$_unselect$($$$$12$$($e$$81$$.target), $e$$81$$);
          this.selection.find("." + this.$_classNm$ + "-selected-choice.oj-focus").removeClass("oj-focus");
          this.close($e$$81$$);
          this.$_focusSearch$();
        })).dequeue(), $_ComboUtils$$.$killEvent$($e$$81$$));
      }));
    }
    $choice$$3_enabledItem$$.data(this.$_elemNm$, $data$$101$$);
    $choice$$3_enabledItem$$.insertBefore(this.$searchContainer$);
  }, $_unselect$:function($selected$$9$$, $event$$247$$) {
    var $val$$39$$ = this.$getVal$() ? this.$getVal$().slice(0) : [], $data$$102$$, $index$$151$$;
    $selected$$9$$ = $selected$$9$$.closest("." + this.$_classNm$ + "-selected-choice");
    if (0 === $selected$$9$$.length) {
      throw "Invalid argument: " + $selected$$9$$ + ". Must be ." + this.$_classNm$ + "-selected-choice";
    }
    if ($data$$102$$ = $selected$$9$$.data(this.$_elemNm$)) {
      for (this.$ojContext$.isValid() || ($val$$39$$ = $_ComboUtils$$.$splitVal$(this.$opts$.element.val(), this.$opts$.separator));0 <= ($index$$151$$ = $val$$39$$.indexOf(this.id($data$$102$$)));) {
        $val$$39$$.splice($index$$151$$, 1), this.$setVal$($val$$39$$, $event$$247$$), this.select && this.$_postprocessResults$();
      }
      $selected$$9$$.remove();
    }
  }, $_postprocessResults$:function() {
    var $val$$40$$ = this.$getVal$() && (this.$opts$.element.val() || this.$ojContext$.isValid()) ? this.$getVal$() : [], $choices$$3$$ = this.$results$.find(".oj-listbox-result"), $compound$$ = this.$results$.find(".oj-listbox-result-with-children"), $self$$97$$ = this;
    $_ComboUtils$$.$each2$($choices$$3$$, function($i$$220$$, $choice$$4$$) {
      var $id$$33$$ = $self$$97$$.id($choice$$4$$.data($self$$97$$.$_elemNm$));
      $val$$40$$ && 0 <= $val$$40$$.indexOf($id$$33$$) && ($choice$$4$$.addClass("oj-selected"), $choice$$4$$.find(".oj-listbox-result-selectable").addClass("oj-selected"));
    });
    $_ComboUtils$$.$each2$($compound$$, function($i$$221$$, $choice$$5$$) {
      $choice$$5$$.is(".oj-listbox-result-selectable") || 0 !== $choice$$5$$.find(".oj-listbox-result-selectable:not(.oj-selected)").length || $choice$$5$$.addClass("oj-selected");
    });
    0 < !$choices$$3$$.filter(".oj-listbox-result:not(.oj-selected)").length && this.close();
  }, $_getMaxSearchWidth$:function() {
    return this.selection.width() - $_ComboUtils$$.$getSideBorderPadding$(this.search);
  }, $_textWidth$:function($text$$20_textNode$$) {
    var $textSpan_width$$32$$ = document.createElement("span");
    $text$$20_textNode$$ = document.createTextNode($text$$20_textNode$$);
    $textSpan_width$$32$$.style.display = "none";
    $textSpan_width$$32$$.appendChild($text$$20_textNode$$);
    $$$$12$$("body").append($textSpan_width$$32$$);
    $textSpan_width$$32$$ = $$$$12$$("body").find("span:last").width();
    $$$$12$$("body").find("span:last").remove();
    return $textSpan_width$$32$$;
  }, $_resizeSearch$:function() {
    var $minimumWidth$$, $left$$11_searchWidth$$, $maxWidth$$1$$, $containerLeft$$, $sideBorderPadding$$ = $_ComboUtils$$.$getSideBorderPadding$(this.search);
    $minimumWidth$$ = this.$_textWidth$(this.search.val()) + 10;
    $left$$11_searchWidth$$ = this.search.offset().left;
    $maxWidth$$1$$ = this.selection.width();
    $containerLeft$$ = this.selection.offset().left;
    $left$$11_searchWidth$$ = $maxWidth$$1$$ - ($left$$11_searchWidth$$ - $containerLeft$$) - $sideBorderPadding$$;
    $left$$11_searchWidth$$ < $minimumWidth$$ && ($left$$11_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
    40 > $left$$11_searchWidth$$ && ($left$$11_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
    0 >= $left$$11_searchWidth$$ && ($left$$11_searchWidth$$ = $minimumWidth$$);
    this.search.width(Math.floor($left$$11_searchWidth$$));
  }, $setVal$:function($options$$241_val$$41$$, $event$$248$$, $context$$72$$) {
    var $unique$$;
    $unique$$ = [];
    "string" === typeof $options$$241_val$$41$$ && ($options$$241_val$$41$$ = $_ComboUtils$$.$splitVal$($options$$241_val$$41$$, this.$opts$.separator));
    for (var $i$$222$$ = 0;$i$$222$$ < $options$$241_val$$41$$.length;$i$$222$$++) {
      0 > $unique$$.indexOf($options$$241_val$$41$$[$i$$222$$]) && $unique$$.push($options$$241_val$$41$$[$i$$222$$]);
    }
    $options$$241_val$$41$$ = {$doValueChangeCheck$:!1};
    $context$$72$$ && ($options$$241_val$$41$$._context = $context$$72$$);
    this.$ojContext$.$_SetValue$($unique$$, $event$$248$$, $options$$241_val$$41$$);
    (this.$ojContext$.isValid() || 0 === $unique$$.length) && this.$opts$.element.val(0 === $unique$$.length ? "" : $unique$$.join(this.$opts$.separator));
    this.search.attr("aria-activedescendant", this.$opts$.element.attr("id"));
  }}), $_OjMultiCombobox$$ = $_ComboUtils$$.$clazz$($_AbstractMultiChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-combobox oj-combobox-multi oj-component"}).html("\x3cul class\x3d'oj-combobox-choices'\x3e  \x3cli class\x3d'oj-combobox-search-field'\x3e    \x3cinput type\x3d'text' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off' spellcheck\x3d'false' class\x3d'oj-combobox-input'\x3e  \x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'oj-combobox-description oj-helper-hidden-accessible'/\x3e\x3cdiv class\x3d'oj-listbox-drop oj-listbox-drop-multi' style\x3d'display:none'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }}), $_OjMultiSelect$$ = $_ComboUtils$$.$clazz$($_AbstractMultiChoice$$, {$_elemNm$:"ojselect", $_classNm$:"oj-select", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-select oj-select-multi oj-component"}).html("\x3cul class\x3d'oj-select-choices'\x3e  \x3cli class\x3d'oj-select-search-field'\x3e    \x3cinput type\x3d'text' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off' spellcheck\x3d'false' class\x3d'oj-listbox-input'\x3e  \x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'oj-select-description oj-helper-hidden-accessible'/\x3e\x3cdiv class\x3d'oj-listbox-drop oj-listbox-drop-multi' style\x3d'display:none'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }});
  $oj$$12$$.$__registerWidget$("oj.ojCombobox", $$$$12$$.oj.editableValue, {defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:void 0, placeholder:"", list:void 0, multiple:!1, options:null, optionsKeys:null, pickerAttributes:null, optionRenderer:null, minLength:0, beforeExpand:null, rawValue:void 0}, widget:function() {
    return this.$combobox$.$container$;
  }, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_InitOptions$:function($originalDefaults$$6$$, $constructorOptions$$8$$) {
    this._super($originalDefaults$$6$$, $constructorOptions$$8$$);
    $oj$$12$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"placeholder"}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title"}], $constructorOptions$$8$$, this);
    if (void 0 === this.options.value) {
      this.options.value = void 0 !== this.element.attr("value") ? $_ComboUtils$$.$splitVal$(this.element.val(), ",") : null;
    } else {
      var $value$$212$$ = this.options.value;
      Array.isArray($value$$212$$) ? $value$$212$$ = $value$$212$$.slice(0) : "string" === typeof $value$$212$$ && ($value$$212$$ = !0 === this.options.multiple ? $_ComboUtils$$.$splitVal$($value$$212$$, ",") : [$value$$212$$]);
      this.options.value = $value$$212$$;
    }
  }, $_setup$:function() {
    var $opts$$16$$ = {}, $multiple$$ = this.options.multiple;
    $opts$$16$$.element = this.element;
    $opts$$16$$.$ojContext$ = this;
    $opts$$16$$ = $$$$12$$.extend(this.options, $opts$$16$$);
    this.$combobox$ = $multiple$$ ? new $_OjMultiCombobox$$ : new $_OjSingleCombobox$$;
    this.$combobox$._init($opts$$16$$);
  }, _destroy:function() {
    this.$combobox$._destroy();
    this._super();
  }, refresh:function() {
    this._super();
    this.$combobox$._destroy();
    this.$_setup$();
    this.$_SetRootAttributes$();
    this.$_Refresh$("required", this.options.required);
  }, _setOption:function($key$$82$$, $value$$213$$, $flags$$17$$) {
    "value" === $key$$82$$ && (Array.isArray($value$$213$$) ? $value$$213$$ = $value$$213$$.slice(0) : "string" === typeof $value$$213$$ && ($value$$213$$ = !0 === this.options.multiple ? $_ComboUtils$$.$splitVal$($value$$213$$, ",") : [$value$$213$$]), this.$combobox$.$valueChangeTrigger$ = $flags$$17$$ && $flags$$17$$._context && $flags$$17$$._context.$optionMetadata$ ? $flags$$17$$._context.$optionMetadata$.trigger : null);
    this._super($key$$82$$, $value$$213$$, $flags$$17$$);
    "options" === $key$$82$$ && (this.$combobox$.$opts$.options = $value$$213$$, this.$combobox$.$opts$ = this.$combobox$.$_prepareOpts$(this.$combobox$.$opts$));
    "disabled" === $key$$82$$ && ($value$$213$$ ? this.$combobox$.$_disable$() : this.$combobox$.$_enable$());
  }, $_NotifyDetached$:function() {
    this._superApply(arguments);
    this.$combobox$.close();
  }, $_NotifyHidden$:function() {
    this._superApply(arguments);
    this.$combobox$.close();
  }, $_SetDisplayValue$:function() {
    this.$combobox$.$_initSelection$();
  }, $_SetPlaceholder$:function($value$$214$$) {
    this.$combobox$ && (this.$combobox$.$opts$.placeholder = $value$$214$$, this.$combobox$.$_setPlaceholder$ && this.$combobox$.$_setPlaceholder$());
  }, validate:function() {
    var $displayValue$$4$$ = this.$combobox$.search.val(), $existingValue_newValue$$6$$ = null;
    !0 !== this.options.multiple ? $existingValue_newValue$$6$$ = void 0 === $displayValue$$4$$ || null === $displayValue$$4$$ || "" === $displayValue$$4$$ ? [] : [$displayValue$$4$$] : ($existingValue_newValue$$6$$ = [], this.isValid() && ($existingValue_newValue$$6$$ = this.$combobox$.$getVal$()), void 0 !== $displayValue$$4$$ && null !== $displayValue$$4$$ && "" !== $displayValue$$4$$ && $existingValue_newValue$$6$$.push($displayValue$$4$$));
    return this.$_SetValue$($existingValue_newValue$$6$$, null, this.$_VALIDATE_METHOD_OPTIONS$);
  }, $_parseValue$:function($submittedValue$$2$$) {
    var $parsedVal$$ = [];
    "string" === typeof $submittedValue$$2$$ && ($submittedValue$$2$$ = !0 === this.options.multiple ? $_ComboUtils$$.$splitVal$($submittedValue$$2$$, ",") : [$submittedValue$$2$$]);
    if (Array.isArray($submittedValue$$2$$)) {
      for (var $i$$223$$ = 0;$i$$223$$ < $submittedValue$$2$$.length;$i$$223$$++) {
        var $parsed$$2$$ = this._super($submittedValue$$2$$[$i$$223$$]);
        $parsedVal$$.push($parsed$$2$$.toString());
      }
    }
    return $parsedVal$$;
  }, _GetMessagingLauncherElement:function() {
    return this.$combobox$.search;
  }, $_GetContentElement$:function() {
    return this.$combobox$.search;
  }, _GetDefaultStyleClass:function() {
    return "oj-combobox";
  }, $_getDropdown$:function() {
    if (this.$combobox$ && this.$combobox$.$_opened$()) {
      for (var $dropdown$$4$$ = $$$$12$$(".oj-listbox-drop"), $i$$224$$ = 0;$i$$224$$ < $dropdown$$4$$.length;$i$$224$$++) {
        if ("oj-listbox-drop" == $$$$12$$($dropdown$$4$$[$i$$224$$]).attr("id") && $$$$12$$($dropdown$$4$$[$i$$224$$]).attr("data-oj-containerid") == this.$combobox$.$containerId$) {
          return $$$$12$$($dropdown$$4$$[$i$$224$$]);
        }
      }
    }
    return null;
  }, $_findItem$:function($list$$7$$, $value$$215$$) {
    for (var $i$$225$$ = 0;$i$$225$$ < $list$$7$$.length;$i$$225$$++) {
      if ($$$$12$$($list$$7$$[$i$$225$$]).data("ojcombobox").value === $value$$215$$) {
        return $list$$7$$[$i$$225$$];
      }
    }
    return null;
  }, getNodeBySubId:function($item$$12_locator$$12$$) {
    var $list$$8_node$$42_selectedItems$$ = null, $subId$$9$$;
    if (null == $item$$12_locator$$12$$) {
      return this.$combobox$.$container$ ? this.$combobox$.$container$[0] : null;
    }
    $list$$8_node$$42_selectedItems$$ = this._super($item$$12_locator$$12$$);
    if (!$list$$8_node$$42_selectedItems$$) {
      $subId$$9$$ = $item$$12_locator$$12$$.subId;
      "oj-combobox-drop" === $subId$$9$$ && ($subId$$9$$ = "oj-listbox-drop");
      "oj-combobox-results" === $subId$$9$$ && ($subId$$9$$ = "oj-listbox-results");
      "oj-combobox-selection" === $subId$$9$$ && ($subId$$9$$ = "oj-combobox-selected-choice");
      var $dropdown$$5$$ = this.$_getDropdown$();
      switch($subId$$9$$) {
        case "oj-combobox-input":
        ;
        case "oj-combobox-arrow":
          $list$$8_node$$42_selectedItems$$ = this.widget().find("." + $subId$$9$$)[0];
          break;
        case "oj-listitem":
          $dropdown$$5$$ && ($list$$8_node$$42_selectedItems$$ = $dropdown$$5$$.find(".oj-listbox-result"), $list$$8_node$$42_selectedItems$$ = this.$_findItem$($list$$8_node$$42_selectedItems$$, $item$$12_locator$$12$$.value));
          break;
        case "oj-combobox-remove":
          $list$$8_node$$42_selectedItems$$ = this.widget().find(".oj-combobox-selected-choice");
          $list$$8_node$$42_selectedItems$$ = ($item$$12_locator$$12$$ = this.$_findItem$($list$$8_node$$42_selectedItems$$, $item$$12_locator$$12$$.value)) ? $$$$12$$($item$$12_locator$$12$$).find(".oj-combobox-clear-entry-icon")[0] : null;
          break;
        case "oj-listbox-drop":
          $dropdown$$5$$ && ($list$$8_node$$42_selectedItems$$ = $dropdown$$5$$[0]);
          break;
        case "oj-listbox-results":
          $dropdown$$5$$ && ($list$$8_node$$42_selectedItems$$ = $dropdown$$5$$.find("." + $subId$$9$$)[0]);
          break;
        case "oj-combobox-selected-choice":
          $list$$8_node$$42_selectedItems$$ = this.widget().find("." + $subId$$9$$).toArray();
      }
    }
    return $list$$8_node$$42_selectedItems$$ || null;
  }, getSubIdByNode:function($node$$43_nodeCached$$) {
    var $subId$$10$$ = null;
    null != $node$$43_nodeCached$$ && ($node$$43_nodeCached$$ = $$$$12$$($node$$43_nodeCached$$), $node$$43_nodeCached$$.hasClass("oj-combobox-input") ? $subId$$10$$ = {subId:"oj-combobox-input"} : $node$$43_nodeCached$$.hasClass("oj-combobox-arrow") ? $subId$$10$$ = {subId:"oj-combobox-arrow"} : $node$$43_nodeCached$$.hasClass("oj-listbox-result") ? $subId$$10$$ = {subId:"oj-listitem", value:$node$$43_nodeCached$$.data("ojcombobox").value} : $node$$43_nodeCached$$.hasClass("oj-combobox-clear-entry-icon") && 
    ($subId$$10$$ = {subId:"oj-combobox-remove", value:$node$$43_nodeCached$$.closest(".oj-combobox-selected-choice").data("ojcombobox").value}));
    return $subId$$10$$;
  }});
  $oj$$12$$.$__registerWidget$("oj.ojSelect", $$$$12$$.oj.editableValue, {defaultElement:"\x3cselect\x3e", widgetEventPrefix:"oj", options:{minimumResultsForSearch:10, placeholder:null, list:void 0, multiple:!1, options:null, optionsKeys:null, pickerAttributes:null, beforeExpand:null, renderMode:"jet"}, widget:function() {
    return this.select ? this.select.$container$ : this.element.parent();
  }, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_nativeSetDisabled$:function($disabled$$5$$) {
    $disabled$$5$$ ? (this.element.attr("disabled", ""), this.element.parent().addClass("oj-disabled").removeClass("oj-enabled")) : (this.element.removeAttr("disabled"), this.element.parent().removeClass("oj-disabled").addClass("oj-enabled"));
  }, $_nativeChangeHandler$:function($event$$249$$) {
    var $arr$$22$$ = [], $emptyValueAllowed$$ = !this.$_IsRequired$() && this.$_HasPlaceholderSet$();
    $$$$12$$($event$$249$$.target).find("option").each(function() {
      this.selected && (this.value || $emptyValueAllowed$$ && "" === this.value) && $arr$$22$$.push(this.value);
    });
    this.$_SetValue$($arr$$22$$, $event$$249$$, {$doValueChangeCheck$:!1});
  }, $_nativeSetup$:function() {
    var $element$$156$$ = this.element;
    $element$$156$$.wrap("\x3cdiv\x3e").parent().addClass("oj-select-native oj-component oj-select oj-form-control");
    $element$$156$$.addClass("oj-select-select oj-component-initnode");
    this.options.multiple ? ($element$$156$$.attr("multiple", ""), $element$$156$$.parent().prepend("\x3ca class\x3d'oj-select-arrow oj-component-icon oj-clickable-icon-nocontext oj-select-multiple-open-icon' role\x3d'presentation'\x3e\x3c/a\x3e")) : $element$$156$$.parent().prepend("\x3ca class\x3d'oj-select-arrow oj-component-icon oj-clickable-icon-nocontext oj-select-open-icon' role\x3d'presentation'\x3e\x3c/a\x3e");
    this.$_nativeSetDisabled$(this.options.disabled);
    this.options.list ? ($_ComboUtils$$.$listPopulateResults$($element$$156$$, $$$$12$$("#" + this.options.list).children(), this.$_formatValue$.bind(this)), $element$$156$$.addClass($_ComboUtils$$.$GENERATED_OPTIONS_SELECTOR$)) : this.options.options && ($_ComboUtils$$.$arrayPopulateResults$($element$$156$$, this.options.options, this.$_formatValue$.bind(this), this.options.optionsKeys), $element$$156$$.addClass($_ComboUtils$$.$GENERATED_OPTIONS_SELECTOR$));
    $element$$156$$.change(this.$_nativeChangeHandler$.bind(this));
  }, $_jetSetup$:function() {
    var $opts$$17$$ = {}, $multiple$$1$$ = this.options.multiple;
    $opts$$17$$.element = this.element;
    $opts$$17$$.$ojContext$ = this;
    $opts$$17$$ = $$$$12$$.extend(this.options, $opts$$17$$);
    this.select = $multiple$$1$$ ? new $_OjMultiSelect$$ : new $_OjSingleSelect$$;
    this.select._init($opts$$17$$);
    this.select.$container$.addClass("oj-select-jet oj-form-control");
  }, $_setup$:function() {
    this.$_isNative$() ? this.$_nativeSetup$() : this.$_jetSetup$();
  }, refresh:function() {
    this._super();
    this.$_cleanup$();
    this.$_setup$();
    this.$_SetRootAttributes$();
    this.$_Refresh$("required", this.options.required);
  }, _destroy:function() {
    this.$_cleanup$();
    this._super();
  }, $_NotifyDetached$:function() {
    this._superApply(arguments);
    this.select && this.select.close();
  }, $_NotifyHidden$:function() {
    this._superApply(arguments);
    this.select && this.select.close();
  }, $_SetPlaceholder$:function($value$$216$$) {
    if (this.$_isNative$() && null != $value$$216$$) {
      var $placeholder$$4$$ = $$$$12$$(this.element.children("option:first-child"));
      $placeholder$$4$$ && "" === $placeholder$$4$$.attr("value") ? ($placeholder$$4$$.text(this.options.placeholder), $placeholder$$4$$.attr("value", "")) : ($placeholder$$4$$ = $_ComboUtils$$.$createOptionTag$(0, "", $value$$216$$, this.$_formatValue$.bind(this)), $placeholder$$4$$.addClass("oj-listbox-placeholder"), this.$_hidePlaceholder$($placeholder$$4$$, this.$_IsRequired$()), $placeholder$$4$$.prependTo(this.element));
    }
  }, $_HasPlaceholderSet$:function() {
    return "string" === typeof this.options.placeholder;
  }, $_ClearPlaceholder$:function() {
    this.$_SetPlaceholderOption$(null);
    this.$_SetPlaceholder$(null);
  }, $_InitOptions$:function($originalDefaults$$7$$, $constructorOptions$$9$$) {
    this._super($originalDefaults$$7$$, $constructorOptions$$9$$);
    $oj$$12$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"placeholder"}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title"}], $constructorOptions$$9$$, this);
    if (void 0 === this.options.value) {
      this.options.value = void 0 !== this.element.attr("value") ? $_ComboUtils$$.$splitVal$(this.element.val(), ",") : null;
    } else {
      var $value$$217$$ = this.options.value;
      Array.isArray($value$$217$$) && ($value$$217$$ = $value$$217$$.slice(0));
      this.options.value = $value$$217$$;
    }
  }, validate:function() {
    if (!0 === this.options.multiple) {
      var $displayValue$$5$$ = this.select.search.val(), $existingValue$$1$$ = [];
      this.isValid() && ($existingValue$$1$$ = this.select.$getVal$());
      void 0 !== $displayValue$$5$$ && null !== $displayValue$$5$$ && "" !== $displayValue$$5$$ && $existingValue$$1$$.push($displayValue$$5$$);
      return this.$_SetValue$($existingValue$$1$$, null, this.$_VALIDATE_METHOD_OPTIONS$);
    }
    return this.select ? this.$_SetValue$(this.select.$getVal$(), null, this.$_VALIDATE_METHOD_OPTIONS$) : !0;
  }, $_SetDisplayValue$:function($children$$5_displayValue$$6$$) {
    this.select ? this.select.$_initSelection$() : null == $children$$5_displayValue$$6$$ ? this.$_HasPlaceholderSet$() ? (this.element[0].selectedIndex = 0, this.element.addClass("oj-select-default")) : ($children$$5_displayValue$$6$$ = this.element.children(), 0 < $children$$5_displayValue$$6$$.length && (this.options.value = [$children$$5_displayValue$$6$$.first().attr("value")])) : this.element.val($children$$5_displayValue$$6$$);
  }, $_nativeFindFirstEnabledOptionValue$:function() {
    var $enaOptions$$ = this.element.children("option:not(:disabled)");
    return 0 < $enaOptions$$.length ? [$$$$12$$($enaOptions$$[0]).attr("value")] : null;
  }, $_nativeSetOptions$:function($defVal_value$$218$$) {
    var $oSelected$$ = this.options.value, $element$$157$$ = this.element;
    if ($element$$157$$.hasClass($_ComboUtils$$.$GENERATED_OPTIONS_SELECTOR$)) {
      $_ComboUtils$$.$cleanupResults$($element$$157$$);
    } else {
      var $children$$6$$ = $element$$157$$.children();
      0 < $children$$6$$.length && $children$$6$$.remove();
    }
    $_ComboUtils$$.$arrayPopulateResults$($element$$157$$, $defVal_value$$218$$, this.$_formatValue$.bind(this), this.options.optionsKeys);
    $element$$157$$.addClass($_ComboUtils$$.$GENERATED_OPTIONS_SELECTOR$);
    $defVal_value$$218$$ = null;
    this.$_HasPlaceholderSet$() && (this.options.required && ($defVal_value$$218$$ = this.$_nativeFindFirstEnabledOptionValue$()), this.$_SetPlaceholder$());
    null === $defVal_value$$218$$ && ($defVal_value$$218$$ = this.$_nativeFindFirstEnabledOptionValue$());
    this.options.value = $defVal_value$$218$$;
    this._setOption("value", $oSelected$$);
  }, $_removePlaceholderInMultiValues$:function($valArr$$) {
    for (var $val$$42$$, $narr$$ = [], $i$$226$$ = 0;$i$$226$$ < $valArr$$.length;$i$$226$$++) {
      $val$$42$$ = $valArr$$[$i$$226$$], null != $val$$42$$ && (0 < $val$$42$$.length ? (1 == $narr$$.length && "" === $narr$$[0] && $narr$$.pop(), $narr$$.push($val$$42$$)) : 0 == $narr$$.length && $narr$$.push($val$$42$$));
    }
    return $narr$$;
  }, _setOption:function($key$$83_placeholder$$5$$, $value$$219$$, $flags$$18$$) {
    if ("value" === $key$$83_placeholder$$5$$) {
      if (this.$_HasPlaceholderSet$() && $value$$219$$ && 0 == $value$$219$$.length) {
        this._super($key$$83_placeholder$$5$$, $value$$219$$, $flags$$18$$);
      } else {
        var $element$$158_selected$$10$$;
        this.select && ($element$$158_selected$$10$$ = this.select.$datalist$, $element$$158_selected$$10$$ || ($element$$158_selected$$10$$ = this.select.$opts$.element));
        Array.isArray($value$$219$$) || ($value$$219$$ = [$value$$219$$]);
        this.$_isNative$() && ($value$$219$$ = this.$_removePlaceholderInMultiValues$($value$$219$$), 1 == $value$$219$$.length && "" == $value$$219$$[0] ? this.element.addClass("oj-select-default") : this.element.removeClass("oj-select-default"));
        for (var $newArr$$ = [], $i$$227$$ = 0;$i$$227$$ < $value$$219$$.length;$i$$227$$++) {
          this.select ? (this.options.multiple || this.select.$opts$.validate($element$$158_selected$$10$$, $value$$219$$[$i$$227$$])) && $newArr$$.push($value$$219$$[$i$$227$$]) : 0 < this.element.find("option[value\x3d'" + $value$$219$$[$i$$227$$] + "']").length && $newArr$$.push($value$$219$$[$i$$227$$]);
        }
        (0 < $newArr$$.length || this.options.multiple) && this._super($key$$83_placeholder$$5$$, $newArr$$, $flags$$18$$);
      }
    } else {
      "placeholder" === $key$$83_placeholder$$5$$ ? this.select ? (this.select.$opts$.placeholder = $value$$219$$, this.select.$_setPlaceholder$()) : ($element$$158_selected$$10$$ = this.options.value, $element$$158_selected$$10$$ && 0 !== $element$$158_selected$$10$$.length && $element$$158_selected$$10$$[0] || (this.element[0].selectedIndex = 0)) : "minimumResultsForSearch" === $key$$83_placeholder$$5$$ ? this.select && (this.select.$opts$.minimumResultsForSearch = $value$$219$$) : "renderMode" === 
      $key$$83_placeholder$$5$$ && (this.$_cleanup$(), this.options.renderMode = $value$$219$$, this.refresh()), this._super($key$$83_placeholder$$5$$, $value$$219$$, $flags$$18$$), "disabled" === $key$$83_placeholder$$5$$ ? this.select ? $value$$219$$ ? this.select.$_disable$() : this.select.$_enable$() : this.$_nativeSetDisabled$($value$$219$$) : "options" === $key$$83_placeholder$$5$$ ? this.select ? (this.select.$opts$.options = $value$$219$$, this.select.$opts$ = this.select.$_prepareOpts$(this.select.$opts$), 
      this._super("value", this.select.$getVal$())) : this.$_nativeSetOptions$($value$$219$$) : "required" === $key$$83_placeholder$$5$$ && this.$_isNative$() && ($key$$83_placeholder$$5$$ = $$$$12$$(this.element.find(".oj-listbox-placeholder"))) && "" === $key$$83_placeholder$$5$$.attr("value") && this.$_hidePlaceholder$($key$$83_placeholder$$5$$, $value$$219$$);
    }
  }, $_getDropdown$:function() {
    if (this.select && this.select.$_opened$()) {
      var $dropdown$$6$$ = this.select.$dropdown$;
      if ($dropdown$$6$$ && $dropdown$$6$$.attr("data-oj-containerid") === this.select.$containerId$) {
        return $dropdown$$6$$;
      }
    }
    return null;
  }, $_hidePlaceholder$:function($placeholder$$6$$, $hide$$1$$) {
    $hide$$1$$ ? ($placeholder$$6$$.attr("disabled", ""), $placeholder$$6$$.attr("hidden", "")) : ($placeholder$$6$$.removeAttr("disabled"), $placeholder$$6$$.removeAttr("hidden"));
  }, $_isNative$:function() {
    return "native" === this.options.renderMode;
  }, $_cleanup$:function() {
    var $isNative$$ = this.$_isNative$();
    $isNative$$ && this.element.parent().hasClass("oj-select-native") ? (this.element.off("change"), this.element.hasClass($_ComboUtils$$.$GENERATED_OPTIONS_SELECTOR$) && $_ComboUtils$$.$cleanupResults$(this.element), this.element.parent().hasClass("oj-select-native") && (this.element.parent().children(".oj-select-arrow").remove(), this.element.unwrap()), this.element.removeClass("oj-select-select oj-component-initnode"), this.element.attr({"aria-labelledby":""})) : !$isNative$$ && this.select && 
    (this.select._destroy(), this.select = void 0);
  }, getNodeBySubId:function($container$$17_index$$152_item$$13_locator$$13$$) {
    var $list$$9_node$$44_selectedItems$$1$$ = null, $subId$$11$$;
    if (null == $container$$17_index$$152_item$$13_locator$$13$$) {
      return($container$$17_index$$152_item$$13_locator$$13$$ = this.widget()) ? $container$$17_index$$152_item$$13_locator$$13$$[0] : null;
    }
    if (this.$_isNative$()) {
      return null;
    }
    $list$$9_node$$44_selectedItems$$1$$ = this._super($container$$17_index$$152_item$$13_locator$$13$$);
    if (!$list$$9_node$$44_selectedItems$$1$$) {
      var $ddlist_dropdown$$7$$ = this.$_getDropdown$();
      $subId$$11$$ = $container$$17_index$$152_item$$13_locator$$13$$.subId;
      switch($subId$$11$$) {
        case "oj-select-drop":
          $ddlist_dropdown$$7$$ && ($list$$9_node$$44_selectedItems$$1$$ = $ddlist_dropdown$$7$$[0]);
          break;
        case "oj-select-results":
          $ddlist_dropdown$$7$$ && ($list$$9_node$$44_selectedItems$$1$$ = $ddlist_dropdown$$7$$.find(".oj-listbox-results")[0]);
          break;
        case "oj-select-search":
          $ddlist_dropdown$$7$$ && ($list$$9_node$$44_selectedItems$$1$$ = $ddlist_dropdown$$7$$.find(".oj-listbox-search")[0]);
          break;
        case "oj-select-input":
        ;
        case "oj-listbox-input":
          !0 === this.options.multiple ? $list$$9_node$$44_selectedItems$$1$$ = this.widget().find(".oj-listbox-input")[0] : $ddlist_dropdown$$7$$ && ($list$$9_node$$44_selectedItems$$1$$ = $ddlist_dropdown$$7$$.find(".oj-listbox-input")[0]);
          break;
        case "oj-select-choice":
        ;
        case "oj-select-chosen":
        ;
        case "oj-select-arrow":
          $list$$9_node$$44_selectedItems$$1$$ = this.widget().find("." + $subId$$11$$)[0];
          break;
        case "oj-listitem":
          $ddlist_dropdown$$7$$ && ($list$$9_node$$44_selectedItems$$1$$ = $ddlist_dropdown$$7$$.find(".oj-listbox-result"), $list$$9_node$$44_selectedItems$$1$$ = this.select.$_findItem$($list$$9_node$$44_selectedItems$$1$$, $container$$17_index$$152_item$$13_locator$$13$$.value));
          break;
        case "oj-select-remove":
          $list$$9_node$$44_selectedItems$$1$$ = this.widget().find(".oj-select-selected-choice");
          $list$$9_node$$44_selectedItems$$1$$ = ($container$$17_index$$152_item$$13_locator$$13$$ = this.select.$_findItem$($list$$9_node$$44_selectedItems$$1$$, $container$$17_index$$152_item$$13_locator$$13$$.value)) ? $$$$12$$($container$$17_index$$152_item$$13_locator$$13$$).find(".oj-select-clear-entry-icon")[0] : null;
          break;
        case "oj-listbox-result-label":
          $ddlist_dropdown$$7$$ && ($ddlist_dropdown$$7$$ = $$$$12$$("#" + this.select.$results$.attr("id")).children(), $container$$17_index$$152_item$$13_locator$$13$$ = $container$$17_index$$152_item$$13_locator$$13$$.index, $ddlist_dropdown$$7$$.length && $container$$17_index$$152_item$$13_locator$$13$$ < $ddlist_dropdown$$7$$.length && ($list$$9_node$$44_selectedItems$$1$$ = $ddlist_dropdown$$7$$.eq($container$$17_index$$152_item$$13_locator$$13$$).find("." + $subId$$11$$)[0]));
      }
    }
    return $list$$9_node$$44_selectedItems$$1$$ || null;
  }, getSubIdByNode:function($node$$45_nodeCached$$1$$) {
    if (this.$_isNative$()) {
      return this._super($node$$45_nodeCached$$1$$);
    }
    var $subId$$12$$ = null;
    null != $node$$45_nodeCached$$1$$ && ($node$$45_nodeCached$$1$$ = $$$$12$$($node$$45_nodeCached$$1$$), $node$$45_nodeCached$$1$$.hasClass("oj-listbox-input") ? $subId$$12$$ = {subId:"oj-select-input"} : $node$$45_nodeCached$$1$$.hasClass("oj-select-arrow") ? $subId$$12$$ = {subId:"oj-select-arrow"} : $node$$45_nodeCached$$1$$.hasClass("oj-listbox-result") ? $subId$$12$$ = {subId:"oj-listitem", value:$node$$45_nodeCached$$1$$.data("ojselect").value} : $node$$45_nodeCached$$1$$.hasClass("oj-select-clear-entry-icon") && 
    ($subId$$12$$ = {subId:"oj-select-remove", value:$node$$45_nodeCached$$1$$.closest(".oj-select-selected-choice").data("ojselect").value}));
    return $subId$$12$$;
  }, _GetDefaultStyleClass:function() {
    return "oj-select";
  }, _GetMessagingLauncherElement:function() {
    return this.select ? this.select.selection : this.element;
  }, $_GetContentElement$:function() {
    return this.select ? this.select.selection : this.element;
  }});
  $oj$$12$$.Components.$setDefaultOptions$({ojSelect:{displayOptions:{converterHint:["none"]}, renderMode:$oj$$12$$.Components.$createDynamicPropertyGetter$(function() {
    return($oj$$12$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-select-option-defaults") || {}).renderMode;
  })}});
  var $_OjInputSeachContainer$$ = $_ComboUtils$$.$clazz$($_OjSingleCombobox$$, {$_elemNm$:"ojinputsearch", $_classNm$:"oj-inputsearch", $_createContainer$:function() {
    var $container$$18$$ = $$$$12$$(document.createElement("div")).attr({"class":"oj-inputsearch oj-component"}).html("\x3cdiv class\x3d'oj-inputsearch-choice' tabindex\x3d'-1' role\x3d'presentation'\x3e   \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'       spellcheck\x3d'false' class\x3d'oj-inputsearch-input' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e   \x3ca class\x3d'oj-inputsearch-search-button oj-inputsearch-search-icon oj-component-icon oj-clickable-icon-nocontext'       role\x3d'button' aria-label\x3d'search'\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop' style\x3d'display:none' role\x3d'presentation'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e"), 
    $trigger$$2$$ = $container$$18$$.find(".oj-inputsearch-search-button");
    this.$_attachSearchIconClickHandler$($trigger$$2$$);
    return $container$$18$$;
  }, $_attachSearchIconClickHandler$:function($trigger$$3$$) {
    var $self$$98$$ = this;
    $trigger$$3$$.on("click", function($event$$250$$) {
      if ($self$$98$$.$_isInterfaceEnabled$()) {
        if ($self$$98$$.$opts$.manageNewEntry) {
          var $data$$104$$ = $self$$98$$.$opts$.manageNewEntry($self$$98$$.search.val()), $options$$242$$ = {trigger:$_ComboUtils$$.$ValueChangeTriggerTypes$.$SEARCH_ICON_CLICKED$};
          $self$$98$$.$_onSelect$($data$$104$$, $options$$242$$, $event$$250$$);
          $self$$98$$.$_triggerUpdateEvent$($data$$104$$, $options$$242$$, $event$$250$$);
        }
        return!1;
      }
    }).on("mousedown", function($event$$251$$) {
      $event$$251$$.stopPropagation();
      return!1;
    });
  }, $_enable$:function($enabled$$5$$) {
    $_OjInputSeachContainer$$.$superclass$.$_enable$.apply(this, arguments);
    this.$_enabled$ ? this.$container$.find(".oj-inputsearch-search-button").removeClass("oj-disabled") : this.$container$.find(".oj-inputsearch-search-button").addClass("oj-disabled");
  }, $_triggerUpdateEvent$:function($data$$105_value$$220$$, $context$$73_options$$243$$, $event$$252$$) {
    var $trigger$$4$$;
    $context$$73_options$$243$$ && ($trigger$$4$$ = $context$$73_options$$243$$.trigger);
    $context$$73_options$$243$$ = {_context:{$optionMetadata$:{trigger:$trigger$$4$$}}};
    $data$$105_value$$220$$ = 0 === this.id($data$$105_value$$220$$).length ? [] : this.id($data$$105_value$$220$$);
    void 0 !== this.$ojContext$.$_Validate$($data$$105_value$$220$$, $event$$252$$, $context$$73_options$$243$$) && this.$ojContext$.isValid() && ("string" === typeof $data$$105_value$$220$$ && ($data$$105_value$$220$$ = [$data$$105_value$$220$$]), this.$ojContext$._trigger("update", $event$$252$$, {value:$data$$105_value$$220$$, optionMetadata:{trigger:$trigger$$4$$}}));
  }});
  $oj$$12$$.$__registerWidget$("oj.ojInputSearch", $$$$12$$.oj.editableValue, {defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{placeholder:void 0, list:void 0, options:null, optionsKeys:null, pickerAttributes:null, optionRenderer:null, minLength:0, beforeExpand:null, rawValue:void 0, optionChange:null, update:null}, widget:function() {
    return this.$inputSearch$.$container$;
  }, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_InitOptions$:function($originalDefaults$$8$$, $constructorOptions$$10$$) {
    this._super($originalDefaults$$8$$, $constructorOptions$$10$$);
    $oj$$12$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"placeholder"}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}, {$attribute$:"title"}], $constructorOptions$$10$$, this);
    if (void 0 === this.options.value) {
      this.options.value = void 0 !== this.element.attr("value") ? $_ComboUtils$$.$splitVal$(this.element.val(), ",") : null;
    } else {
      var $value$$221$$ = this.options.value;
      Array.isArray($value$$221$$) ? $value$$221$$ = $value$$221$$.slice(0) : "string" === typeof $value$$221$$ && ($value$$221$$ = [$value$$221$$]);
      this.options.value = $value$$221$$;
    }
  }, $_setup$:function() {
    var $opts$$18$$ = {};
    $opts$$18$$.element = this.element;
    $opts$$18$$.$ojContext$ = this;
    $opts$$18$$.$inputSearch$ = !0;
    $opts$$18$$ = $$$$12$$.extend(this.options, $opts$$18$$);
    this.$inputSearch$ = new $_OjInputSeachContainer$$;
    this.$inputSearch$._init($opts$$18$$);
  }, _destroy:function() {
    this.$inputSearch$._destroy();
    this._super();
  }, refresh:function() {
    this._super();
    this.$inputSearch$._destroy();
    this.$_setup$();
    this.$_SetRootAttributes$();
    this.$_Refresh$("required", this.options.required);
  }, _setOption:function($key$$84$$, $value$$222$$, $flags$$19$$) {
    "value" === $key$$84$$ && (Array.isArray($value$$222$$) ? $value$$222$$ = $value$$222$$.slice(0) : "string" === typeof $value$$222$$ && ($value$$222$$ = [$value$$222$$]), this.$inputSearch$.$valueChangeTrigger$ = $flags$$19$$ && $flags$$19$$._context && $flags$$19$$._context.$optionMetadata$ ? $flags$$19$$._context.$optionMetadata$.trigger : null);
    this._super($key$$84$$, $value$$222$$, $flags$$19$$);
    "options" === $key$$84$$ && (this.$inputSearch$.$opts$.options = $value$$222$$, this.$inputSearch$.$opts$ = this.$inputSearch$.$_prepareOpts$(this.$inputSearch$.$opts$));
    "disabled" === $key$$84$$ && ($value$$222$$ ? this.$inputSearch$.$_disable$() : this.$inputSearch$.$_enable$());
  }, $_NotifyDetached$:function() {
    this._superApply(arguments);
    this.$inputSearch$.close();
  }, $_NotifyHidden$:function() {
    this._superApply(arguments);
    this.$inputSearch$.close();
  }, $_SetDisplayValue$:function() {
    this.$inputSearch$.$_initSelection$();
  }, $_SetPlaceholder$:function($value$$223$$) {
    this.$inputSearch$ && (this.$inputSearch$.$opts$.placeholder = $value$$223$$, this.$inputSearch$.$_setPlaceholder$ && this.$inputSearch$.$_setPlaceholder$());
  }, validate:function() {
    var $displayValue$$8$$ = this.$inputSearch$.search.val(), $existingValue$$2_newValue$$8$$ = null, $existingValue$$2_newValue$$8$$ = this.$inputSearch$.$getVal$(), $existingValue$$2_newValue$$8$$ = void 0 === $displayValue$$8$$ || null === $displayValue$$8$$ || "" === $displayValue$$8$$ ? $existingValue$$2_newValue$$8$$ : $existingValue$$2_newValue$$8$$.push($displayValue$$8$$);
    return this.$_SetValue$($existingValue$$2_newValue$$8$$, null, this.$_VALIDATE_METHOD_OPTIONS$);
  }, $_parseValue$:function($submittedValue$$3$$) {
    var $parsedVal$$1$$ = [];
    "string" === typeof $submittedValue$$3$$ && ($submittedValue$$3$$ = [$submittedValue$$3$$]);
    if (Array.isArray($submittedValue$$3$$)) {
      for (var $i$$228$$ = 0;$i$$228$$ < $submittedValue$$3$$.length;$i$$228$$++) {
        var $parsed$$4$$ = this._super($submittedValue$$3$$[$i$$228$$]);
        $parsedVal$$1$$.push($parsed$$4$$.toString());
      }
    }
    return $parsedVal$$1$$;
  }, _GetMessagingLauncherElement:function() {
    return this.$inputSearch$.search;
  }, $_GetContentElement$:function() {
    return this.$inputSearch$.search;
  }, _GetDefaultStyleClass:function() {
    return "oj-inputsearch";
  }, $_getDropdown$:function() {
    if (this.$inputSearch$ && this.$inputSearch$.$_opened$()) {
      for (var $dropdown$$8$$ = $$$$12$$(".oj-listbox-drop"), $i$$229$$ = 0;$i$$229$$ < $dropdown$$8$$.length;$i$$229$$++) {
        if ("oj-listbox-drop" == $$$$12$$($dropdown$$8$$[$i$$229$$]).attr("id") && $$$$12$$($dropdown$$8$$[$i$$229$$]).attr("data-oj-containerid") == this.$inputSearch$.$containerId$) {
          return $$$$12$$($dropdown$$8$$[$i$$229$$]);
        }
      }
    }
    return null;
  }, expand:function() {
    this.$inputSearch$.open();
  }, collapse:function() {
    this.$inputSearch$.close();
  }, getNodeBySubId:function($locator$$14$$) {
    var $list$$10_node$$46$$ = null, $dropdown$$9_subId$$13$$;
    if (null === $locator$$14$$) {
      return this.$inputSearch$.$container$ ? this.$inputSearch$.$container$[0] : null;
    }
    $list$$10_node$$46$$ = this._super($locator$$14$$);
    if (!$list$$10_node$$46$$) {
      switch($dropdown$$9_subId$$13$$ = $locator$$14$$.subId, "oj-inputsearch-search" === $dropdown$$9_subId$$13$$ && ($dropdown$$9_subId$$13$$ = "oj-inputsearch-search-button"), $dropdown$$9_subId$$13$$) {
        case "oj-inputsearch-input":
        ;
        case "oj-inputsearch-search-button":
          $list$$10_node$$46$$ = this.widget().find("." + $dropdown$$9_subId$$13$$)[0];
          break;
        case "oj-listitem":
          if ($dropdown$$9_subId$$13$$ = this.$_getDropdown$()) {
            $list$$10_node$$46$$ = $dropdown$$9_subId$$13$$.find(".oj-listbox-result"), $list$$10_node$$46$$ = this.$inputSearch$.$_findItem$($list$$10_node$$46$$, $locator$$14$$.value);
          }
        ;
      }
    }
    return $list$$10_node$$46$$ || null;
  }, getSubIdByNode:function($node$$47_nodeCached$$2$$) {
    var $subId$$14$$ = null;
    null != $node$$47_nodeCached$$2$$ && ($node$$47_nodeCached$$2$$ = $$$$12$$($node$$47_nodeCached$$2$$), $node$$47_nodeCached$$2$$.hasClass("oj-inputsearch-input") ? $subId$$14$$ = {subId:"oj-inputsearch-input"} : $node$$47_nodeCached$$2$$.hasClass("oj-inputsearch-search-button") ? $subId$$14$$ = {subId:"oj-inputsearch-search"} : $node$$47_nodeCached$$2$$.hasClass("oj-listbox-result") && ($subId$$14$$ = {subId:"oj-listitem", value:$node$$47_nodeCached$$2$$.data("ojinputsearch").value}));
    return $subId$$14$$;
  }});
});
