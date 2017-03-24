/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery"], function($oj$$32$$, $$$$29$$) {
  $oj$$32$$.$DataCollectionEditUtils$ = {};
  $goog$exportPath_$$("DataCollectionEditUtils", $oj$$32$$.$DataCollectionEditUtils$, $oj$$32$$);
  $oj$$32$$.$DataCollectionEditUtils$.$basicHandleEditEnd$ = function $$oj$$32$$$$DataCollectionEditUtils$$$basicHandleEditEnd$$($event$$531$$, $ui$$20$$) {
    var $input$$8_widgetConstructor$$18$$;
    $input$$8_widgetConstructor$$18$$ = $$$$29$$($ui$$20$$.cellContext.parentElement).find(".oj-component-initnode")[0];
    $input$$8_widgetConstructor$$18$$ = $oj$$32$$.Components.$getWidgetConstructor$($input$$8_widgetConstructor$$18$$);
    if ($ui$$20$$.cancelEdit) {
      $input$$8_widgetConstructor$$18$$("reset");
    } else {
      if ($input$$8_widgetConstructor$$18$$("validate"), !$input$$8_widgetConstructor$$18$$("isValid")) {
        return!1;
      }
    }
    return!0;
  };
  $goog$exportPath_$$("DataCollectionEditUtils.basicHandleEditEnd", $oj$$32$$.$DataCollectionEditUtils$.$basicHandleEditEnd$, $oj$$32$$);
  $oj$$32$$.$DataCollectionEditUtils$.basicHandleRowEditEnd = function $$oj$$32$$$$DataCollectionEditUtils$$basicHandleRowEditEnd$($event$$532$$, $ui$$21$$) {
    var $i$$394$$, $cancel$$2$$, $widgetConsructor$$, $inputComponents$$ = $$$$29$$($ui$$21$$.rowContext.parentElement).find(".oj-component-initnode");
    for ($i$$394$$ = 0;$i$$394$$ < $inputComponents$$.length;$i$$394$$++) {
      $widgetConsructor$$ = $oj$$32$$.Components.$getWidgetConstructor$($inputComponents$$[$i$$394$$]);
      $cancel$$2$$ = $ui$$21$$.cancelEdit;
      try {
        if ($cancel$$2$$) {
          $widgetConsructor$$("reset");
        } else {
          if ($widgetConsructor$$("validate"), !$widgetConsructor$$("isValid")) {
            return!1;
          }
        }
      } catch ($e$$95$$) {
      }
    }
    return!0;
  };
  $goog$exportPath_$$("DataCollectionEditUtils.basicHandleRowEditEnd", $oj$$32$$.$DataCollectionEditUtils$.basicHandleRowEditEnd, $oj$$32$$);
});
