/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreeView"], function($oj$$35$$, $$$$32$$, $comp$$8$$, $base$$6$$, $dvt$$4$$) {
  $oj$$35$$.$__registerWidget$("oj.ojSunburst", $$$$32$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null, rotateInput:null}, $_CreateDvtComponent$:function($context$$136$$, $callback$$123$$, $callbackObj$$6$$) {
    return $dvt$$4$$.Sunburst.newInstance($context$$136$$, $callback$$123$$, $callbackObj$$6$$);
  }, $_ConvertLocatorToSubId$:function($locator$$35$$) {
    var $subId$$40$$ = $locator$$35$$.subId;
    "oj-sunburst-node" == $subId$$40$$ ? $subId$$40$$ = "node" + this.$_GetStringFromIndexPath$($locator$$35$$.indexPath) : "oj-sunburst-tooltip" == $subId$$40$$ && ($subId$$40$$ = "tooltip");
    return $subId$$40$$;
  }, $_ConvertSubIdToLocator$:function($subId$$41$$) {
    var $locator$$36$$ = {};
    0 == $subId$$41$$.indexOf("node") ? ($locator$$36$$.subId = "oj-sunburst-node", $locator$$36$$.indexPath = this.$_GetIndexPath$($subId$$41$$)) : "tooltip" == $subId$$41$$ && ($locator$$36$$.subId = "oj-sunburst-tooltip");
    return $locator$$36$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$9$$ = this._super();
    $styleClasses$$9$$.push("oj-sunburst");
    return $styleClasses$$9$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$10$$ = this._super();
    $styleClasses$$10$$["oj-sunburst-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$10$$["oj-sunburst-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$10$$["oj-sunburst-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$10$$["oj-sunburst-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$10$$["oj-sunburst-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$10$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "rotateInput"];
  }, $_GetTranslationMap$:function() {
    var $translations$$13$$ = this.options.translations, $ret$$37$$ = this._super();
    $ret$$37$$["DvtSunburstBundle.COLOR"] = $translations$$13$$.labelColor;
    $ret$$37$$["DvtSunburstBundle.SIZE"] = $translations$$13$$.labelSize;
    $ret$$37$$["DvtUtilBundle.SUNBURST"] = $translations$$13$$.componentName;
    return $ret$$37$$;
  }, $_HandleEvent$:function($event$$551$$) {
    "rotation" === $event$$551$$.type ? $event$$551$$.complete ? this.$_UserOptionChange$("startAngle", $event$$551$$.startAngle) : this._trigger("rotateInput", null, {value:$event$$551$$.startAngle}) : this._super($event$$551$$);
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.rotateCursor = $oj$$35$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/sunburst/rotate.cur");
  }, getNode:function($ret$$38_subIdPath$$) {
    $ret$$38_subIdPath$$ = this.$_component$.getAutomation().getNode($ret$$38_subIdPath$$);
    this.$_AddAutomationGetters$($ret$$38_subIdPath$$);
    return $ret$$38_subIdPath$$;
  }, getContextByNode:function($context$$137_node$$91$$) {
    return($context$$137_node$$91$$ = this.getSubIdByNode($context$$137_node$$91$$)) && "oj-sunburst-tooltip" !== $context$$137_node$$91$$.subId ? $context$$137_node$$91$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["nodes"]};
  }});
});
