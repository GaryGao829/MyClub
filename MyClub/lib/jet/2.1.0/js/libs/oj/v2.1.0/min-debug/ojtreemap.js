/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreeView"], function($oj$$43$$, $$$$40$$, $comp$$11$$, $base$$9$$, $dvt$$7$$) {
  $oj$$43$$.$__registerWidget$("oj.ojTreemap", $$$$40$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$142$$, $callback$$126$$, $callbackObj$$9$$) {
    return $dvt$$7$$.Treemap.newInstance($context$$142$$, $callback$$126$$, $callbackObj$$9$$);
  }, $_ConvertLocatorToSubId$:function($locator$$44$$) {
    var $subId$$48$$ = $locator$$44$$.subId;
    "oj-treemap-node" == $subId$$48$$ ? $subId$$48$$ = "node" + this.$_GetStringFromIndexPath$($locator$$44$$.indexPath) : "oj-treemap-tooltip" == $subId$$48$$ && ($subId$$48$$ = "tooltip");
    return $subId$$48$$;
  }, $_ConvertSubIdToLocator$:function($subId$$49$$) {
    var $locator$$45$$ = {};
    0 == $subId$$49$$.indexOf("node") ? ($locator$$45$$.subId = "oj-treemap-node", $locator$$45$$.indexPath = this.$_GetIndexPath$($subId$$49$$)) : "tooltip" == $subId$$49$$ && ($locator$$45$$.subId = "oj-treemap-tooltip");
    return $locator$$45$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$15$$ = this._super();
    $styleClasses$$15$$.push("oj-treemap");
    return $styleClasses$$15$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$16$$ = this._super();
    $styleClasses$$16$$["oj-treemap-isolate-icon"] = {path:"_resources/isolate", property:"CSS_URL"};
    $styleClasses$$16$$["oj-treemap-isolate-icon oj-hover"] = {path:"_resources/isolateOver", property:"CSS_URL"};
    $styleClasses$$16$$["oj-treemap-isolate-icon oj-active"] = {path:"_resources/isolateDown", property:"CSS_URL"};
    $styleClasses$$16$$["oj-treemap-restore-icon"] = {path:"_resources/restore", property:"CSS_URL"};
    $styleClasses$$16$$["oj-treemap-restore-icon oj-hover"] = {path:"_resources/restoreOver", property:"CSS_URL"};
    $styleClasses$$16$$["oj-treemap-restore-icon oj-active"] = {path:"_resources/restoreDown", property:"CSS_URL"};
    $styleClasses$$16$$["oj-treemap-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$16$$["oj-treemap-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$16$$["oj-treemap-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$16$$["oj-treemap-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$16$$["oj-treemap-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    $styleClasses$$16$$["oj-treemap-node-header"] = [{path:"nodeDefaults/header/backgroundColor", property:"background-color"}, {path:"nodeDefaults/header/borderColor", property:"border-top-color"}, {path:"nodeDefaults/header/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$16$$["oj-treemap-node-header oj-hover"] = [{path:"nodeDefaults/header/hoverBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/hoverOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/hoverInnerColor", property:"border-bottom-color"}, {path:"nodeDefaults/header/_hoverLabelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$16$$["oj-treemap-node-header oj-selected"] = [{path:"nodeDefaults/header/selectedBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/selectedInnerColor", property:"border-bottom-color"}, {path:"nodeDefaults/header/_selectedLabelStyle", property:"CSS_TEXT_PROPERTIES"}];
    return $styleClasses$$16$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$16$$ = this.options.translations, $ret$$43$$ = this._super();
    $ret$$43$$["DvtTreemapBundle.COLOR"] = $translations$$16$$.labelColor;
    $ret$$43$$["DvtTreemapBundle.ISOLATE"] = $translations$$16$$.tooltipIsolate;
    $ret$$43$$["DvtTreemapBundle.RESTORE"] = $translations$$16$$.tooltipRestore;
    $ret$$43$$["DvtTreemapBundle.SIZE"] = $translations$$16$$.labelSize;
    $ret$$43$$["DvtUtilBundle.TREEMAP"] = $translations$$16$$.componentName;
    return $ret$$43$$;
  }, $_HandleEvent$:function($event$$612_isolatedNode$$) {
    if ("isolate" === $event$$612_isolatedNode$$.type) {
      var $isolatedNodes$$ = this.options.$_isolatedNodes$;
      $isolatedNodes$$ || (this.options.$_isolatedNodes$ = [], $isolatedNodes$$ = this.options.$_isolatedNodes$);
      ($event$$612_isolatedNode$$ = $event$$612_isolatedNode$$.id) ? ($isolatedNodes$$.push($event$$612_isolatedNode$$), this.$_UserOptionChange$("isolatedNode", $event$$612_isolatedNode$$)) : ($isolatedNodes$$.pop(), this.$_UserOptionChange$("isolatedNode", 0 < $isolatedNodes$$.length ? $isolatedNodes$$[$isolatedNodes$$.length] : null));
    } else {
      this._super($event$$612_isolatedNode$$);
    }
  }, getNode:function($ret$$44_subIdPath$$1$$) {
    $ret$$44_subIdPath$$1$$ = this.$_component$.getAutomation().getNode($ret$$44_subIdPath$$1$$);
    this.$_AddAutomationGetters$($ret$$44_subIdPath$$1$$);
    return $ret$$44_subIdPath$$1$$;
  }, getContextByNode:function($context$$143_node$$98$$) {
    return($context$$143_node$$98$$ = this.getSubIdByNode($context$$143_node$$98$$)) && "oj-treemap-tooltip" !== $context$$143_node$$98$$.subId ? $context$$143_node$$98$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["nodes"]};
  }});
});
