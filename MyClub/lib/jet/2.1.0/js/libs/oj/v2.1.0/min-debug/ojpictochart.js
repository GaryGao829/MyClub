/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtPictoChart"], function($oj$$53$$, $$$$47$$, $comp$$12$$, $base$$10$$, $dvt$$8$$) {
  $oj$$53$$.$__registerWidget$("oj.ojPictoChart", $$$$47$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null, drill:null}, $_CreateDvtComponent$:function($context$$165$$, $callback$$129$$, $callbackObj$$10$$) {
    return $dvt$$8$$.PictoChart.newInstance($context$$165$$, $callback$$129$$, $callbackObj$$10$$);
  }, $_ConvertLocatorToSubId$:function($locator$$50$$) {
    var $subId$$55$$ = $locator$$50$$.subId;
    "oj-pictochart-item" == $subId$$55$$ ? $subId$$55$$ = "item[" + $locator$$50$$.index + "]" : "oj-pictochart-tooltip" == $subId$$55$$ && ($subId$$55$$ = "tooltip");
    return $subId$$55$$;
  }, $_ConvertSubIdToLocator$:function($subId$$56$$) {
    var $locator$$51$$ = {};
    0 == $subId$$56$$.indexOf("item") ? ($locator$$51$$.subId = "oj-pictochart-item", $locator$$51$$.index = this.$_GetFirstIndex$($subId$$56$$)) : "tooltip" == $subId$$56$$ && ($locator$$51$$.subId = "oj-pictochart-tooltip");
    return $locator$$51$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$17$$ = this._super();
    $styleClasses$$17$$.push("oj-pictochart");
    return $styleClasses$$17$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$18$$ = this._super();
    $styleClasses$$18$$["oj-pictochart-item"] = {path:"_defaultColor", property:"background-color"};
    return $styleClasses$$18$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_HandleEvent$:function($event$$665$$) {
    "drill" === $event$$665$$.type ? this._trigger("drill", null, {id:$event$$665$$.id}) : this._super($event$$665$$);
  }, getItem:function($index$$271$$) {
    return this.$_component$.getAutomation().getItem($index$$271$$);
  }, getItemCount:function() {
    return this.$_component$.getAutomation().getItemCount();
  }, getContextByNode:function($context$$166_node$$107$$) {
    return($context$$166_node$$107$$ = this.getSubIdByNode($context$$166_node$$107$$)) && "oj-pictochart-tooltip" !== $context$$166_node$$107$$.subId ? $context$$166_node$$107$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["items"]};
  }, $_IsFlowingLayoutSupported$:function() {
    return!0;
  }});
});
