/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTagCloud"], function($oj$$39$$, $$$$36$$, $comp$$10$$, $base$$8$$, $dvt$$6$$) {
  $oj$$39$$.$__registerWidget$("oj.ojTagCloud", $$$$36$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$140$$, $callback$$125$$, $callbackObj$$8$$) {
    return $dvt$$6$$.TagCloud.newInstance($context$$140$$, $callback$$125$$, $callbackObj$$8$$);
  }, $_ConvertLocatorToSubId$:function($locator$$41$$) {
    var $subId$$45$$ = $locator$$41$$.subId;
    "oj-tagcloud-item" == $subId$$45$$ ? $subId$$45$$ = "item[" + $locator$$41$$.index + "]" : "oj-tagcloud-tooltip" == $subId$$45$$ && ($subId$$45$$ = "tooltip");
    return $subId$$45$$;
  }, $_ConvertSubIdToLocator$:function($subId$$46$$) {
    var $locator$$42$$ = {};
    0 == $subId$$46$$.indexOf("item") ? ($locator$$42$$.subId = "oj-tagcloud-item", $locator$$42$$.index = this.$_GetFirstIndex$($subId$$46$$)) : "tooltip" == $subId$$46$$ && ($locator$$42$$.subId = "oj-tagcloud-tooltip");
    return $locator$$42$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$13$$ = this._super();
    $styleClasses$$13$$.push("oj-tagcloud");
    return $styleClasses$$13$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$14$$ = this._super();
    $styleClasses$$14$$["oj-tagcloud"] = {path:"styleDefaults/style", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$14$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$15$$ = this.options.translations, $ret$$42$$ = this._super();
    $ret$$42$$["DvtUtilBundle.TAG_CLOUD"] = $translations$$15$$.componentName;
    return $ret$$42$$;
  }, getItem:function($index$$246$$) {
    return this.$_component$.getAutomation().getItem($index$$246$$);
  }, getItemCount:function() {
    return this.$_component$.getAutomation().getItemCount();
  }, getContextByNode:function($context$$141_node$$96$$) {
    return($context$$141_node$$96$$ = this.getSubIdByNode($context$$141_node$$96$$)) && "oj-tagcloud-tooltip" !== $context$$141_node$$96$$.subId ? $context$$141_node$$96$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["items"]};
  }});
});
