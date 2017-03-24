/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojdnd", "ojs/ojlistview"], function($oj$$67$$, $$$$61$$) {
  $oj$$67$$.$ListViewDndContext$ = function $$oj$$67$$$$ListViewDndContext$$($listview$$1$$) {
    this.$listview$ = $listview$$1$$;
  };
  $goog$exportPath_$$("ListViewDndContext", $oj$$67$$.$ListViewDndContext$, $oj$$67$$);
  $oj$$67$$.$Object$.$createSubclass$($oj$$67$$.$ListViewDndContext$, $oj$$67$$.$Object$, "oj.ListViewDndContext");
  $oj$$67$$.$ListViewDndContext$.$C_KEY$ = 67;
  $oj$$67$$.$ListViewDndContext$.$V_KEY$ = 86;
  $oj$$67$$.$ListViewDndContext$.$X_KEY$ = 88;
  $oj$$67$$.$ListViewDndContext$.prototype.$_getDndOptions$ = function $$oj$$67$$$$ListViewDndContext$$$$_getDndOptions$$($op$$1$$) {
    var $dnd$$ = this.$listview$.$GetOption$("dnd");
    return null != $dnd$$ && $dnd$$[$op$$1$$] ? $dnd$$[$op$$1$$].items : null;
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_getDragOptions$ = function $$oj$$67$$$$ListViewDndContext$$$$_getDragOptions$$() {
    return this.$_getDndOptions$("drag");
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_getDropOptions$ = function $$oj$$67$$$$ListViewDndContext$$$$_getDropOptions$$() {
    return this.$_getDndOptions$("drop");
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_isItemReordering$ = function $$oj$$67$$$$ListViewDndContext$$$$_isItemReordering$$() {
    return "enabled" == this.$_getDndOptions$("reorder");
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_findItem$ = function $$oj$$67$$$$ListViewDndContext$$$$_findItem$$($target$$136$$) {
    return this.$listview$.$FindItem$($target$$136$$);
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_getSelectedItems$ = function $$oj$$67$$$$ListViewDndContext$$$$_getSelectedItems$$() {
    var $items$$9$$, $selection$$28$$, $i$$443$$, $elem$$116$$;
    $items$$9$$ = [];
    if (this.$listview$.$_isSelectionEnabled$()) {
      for ($selection$$28$$ = this.$listview$.$GetOption$("selection"), $i$$443$$ = 0;$i$$443$$ < $selection$$28$$.length;$i$$443$$++) {
        $elem$$116$$ = this.$listview$.$FindElementByKey$($selection$$28$$[$i$$443$$]), null == $elem$$116$$ || this.$listview$.$SkipFocus$($$$$61$$($elem$$116$$)) || $items$$9$$.push($elem$$116$$);
      }
    } else {
      $elem$$116$$ = this.$_getActiveItem$(), null != $elem$$116$$ && $items$$9$$.push($elem$$116$$);
    }
    null != this.$m_contextMenuItem$ && 0 < this.$m_contextMenuItem$.length && -1 == $items$$9$$.indexOf(this.$m_contextMenuItem$.get(0)) && $items$$9$$.push(this.$m_contextMenuItem$.get(0));
    return $items$$9$$;
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_getActiveItem$ = function $$oj$$67$$$$ListViewDndContext$$$$_getActiveItem$$() {
    return null == this.$listview$.$m_active$ ? null : this.$listview$.$m_active$.elem[0];
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$itemRenderComplete$ = function $$oj$$67$$$$ListViewDndContext$$$$itemRenderComplete$$($dragHandle_elem$$117$$) {
    var $ariaLabelledBy$$1$$;
    $$$$61$$($dragHandle_elem$$117$$).hasClass(this.$listview$.$getItemStyleClass$()) || ($dragHandle_elem$$117$$ = $dragHandle_elem$$117$$.firstElementChild);
    $dragHandle_elem$$117$$ = $$$$61$$($dragHandle_elem$$117$$).find(".oj-listview-drag-handle");
    null != $dragHandle_elem$$117$$ && 0 < $dragHandle_elem$$117$$.length && ($ariaLabelledBy$$1$$ = $dragHandle_elem$$117$$.attr("aria-labelledby"), null == $ariaLabelledBy$$1$$ ? $dragHandle_elem$$117$$.attr("aria-labelledby", this.$listview$.$_createSubId$("instr")) : $dragHandle_elem$$117$$.attr("aria-labelledby", $ariaLabelledBy$$1$$ + " " + this.$listview$.$_createSubId$("instr")), this.$listview$.$_isTouchSupport$() && $dragHandle_elem$$117$$.attr("draggable", "true"));
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_setDraggable$ = function $$oj$$67$$$$ListViewDndContext$$$$_setDraggable$$($item$$123_target$$137$$) {
    var $dragger$$, $activeItem$$1_dragHandle$$1$$;
    if (null != this.$_getDragOptions$() || this.$_isItemReordering$()) {
      if ($item$$123_target$$137$$.hasClass("oj-listview-drag-handle")) {
        $dragger$$ = $$$$61$$($item$$123_target$$137$$);
      } else {
        $item$$123_target$$137$$ = this.$_findItem$($item$$123_target$$137$$);
        if (null != $item$$123_target$$137$$) {
          $activeItem$$1_dragHandle$$1$$ = $item$$123_target$$137$$.find(".oj-listview-drag-handle");
          if (null != $activeItem$$1_dragHandle$$1$$ && 0 < $activeItem$$1_dragHandle$$1$$.length) {
            return;
          }
          $item$$123_target$$137$$.addClass("oj-draggable");
        }
        $activeItem$$1_dragHandle$$1$$ = this.$_getActiveItem$();
        null != $activeItem$$1_dragHandle$$1$$ && (null != $item$$123_target$$137$$ && 0 == $item$$123_target$$137$$.find(".oj-listview-drag-handle").length && $item$$123_target$$137$$[0] == $activeItem$$1_dragHandle$$1$$ ? $dragger$$ = $item$$123_target$$137$$ : $$$$61$$($activeItem$$1_dragHandle$$1$$).removeClass("oj-draggable"));
      }
      null != $dragger$$ && $dragger$$.attr("draggable", !0);
    }
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_unsetDraggable$ = function $$oj$$67$$$$ListViewDndContext$$$$_unsetDraggable$$($dragger$$1_target$$138$$) {
    if (null != this.$_getDragOptions$() || this.$_isItemReordering$()) {
      $dragger$$1_target$$138$$ = $dragger$$1_target$$138$$.hasClass("oj-listview-drag-handle") ? $$$$61$$($dragger$$1_target$$138$$) : this.$_findItem$($dragger$$1_target$$138$$), null != $dragger$$1_target$$138$$ && $dragger$$1_target$$138$$.removeAttr("draggable");
    }
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_invokeDndCallback$ = function $$oj$$67$$$$ListViewDndContext$$$$_invokeDndCallback$$($dndType$$1_options$$380$$, $callback$$137_callbackType$$2$$, $event$$704$$, $ui$$41$$) {
    var $returnValue$$9$$;
    if ($dndType$$1_options$$380$$ = "drag" === $dndType$$1_options$$380$$ ? this.$_getDragOptions$() : this.$_getDropOptions$()) {
      if (($callback$$137_callbackType$$2$$ = $dndType$$1_options$$380$$[$callback$$137_callbackType$$2$$]) && "function" == typeof $callback$$137_callbackType$$2$$) {
        try {
          $event$$704$$.dataTransfer = $event$$704$$.originalEvent.dataTransfer, $returnValue$$9$$ = $callback$$137_callbackType$$2$$($event$$704$$, $ui$$41$$);
        } catch ($e$$107$$) {
          $oj$$67$$.$Logger$.error("Error: " + $e$$107$$);
        }
      } else {
        return-1;
      }
    }
    return $returnValue$$9$$;
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_setDragItemDataTransfer$ = function $$oj$$67$$$$ListViewDndContext$$$$_setDragItemDataTransfer$$($event$$705$$, $dataTypes$$4$$, $items$$11$$) {
    var $i$$444$$, $itemDataArray$$ = [], $data$$167$$;
    for ($i$$444$$ = 0;$i$$444$$ < $items$$11$$.length;$i$$444$$++) {
      ($data$$167$$ = this.$listview$.$_getDataForItem$($items$$11$$[$i$$444$$])) && ($data$$167$$.innerHTML && $data$$167$$.tagName && "LI" == $data$$167$$.tagName ? $itemDataArray$$.push($data$$167$$.innerHTML) : $itemDataArray$$.push($data$$167$$));
    }
    return 0 < $itemDataArray$$.length ? (this.$_setDragItemData$($event$$705$$.originalEvent, $dataTypes$$4$$, $itemDataArray$$), this.$_setDragItemImage$($event$$705$$.originalEvent, $items$$11$$), {items:$itemDataArray$$}) : null;
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_setDragItemData$ = function $$oj$$67$$$$ListViewDndContext$$$$_setDragItemData$$($dataTransfer$$2_nativeEvent$$2$$, $dataTypes$$5$$, $itemDataArray$$1_jsonStr$$2$$) {
    var $i$$445$$;
    $dataTransfer$$2_nativeEvent$$2$$ = $dataTransfer$$2_nativeEvent$$2$$.dataTransfer;
    $itemDataArray$$1_jsonStr$$2$$ = JSON.stringify($itemDataArray$$1_jsonStr$$2$$);
    if ("string" == typeof $dataTypes$$5$$) {
      $dataTransfer$$2_nativeEvent$$2$$.setData($dataTypes$$5$$, $itemDataArray$$1_jsonStr$$2$$);
    } else {
      if ($dataTypes$$5$$) {
        for ($i$$445$$ = 0;$i$$445$$ < $dataTypes$$5$$.length;$i$$445$$++) {
          $dataTransfer$$2_nativeEvent$$2$$.setData($dataTypes$$5$$[$i$$445$$], $itemDataArray$$1_jsonStr$$2$$);
        }
      }
    }
    $dataTransfer$$2_nativeEvent$$2$$.setData("text/ojlistview-dragsource-id", this.$listview$.element.get(0).id);
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_setDragItemImage$ = function $$oj$$67$$$$ListViewDndContext$$$$_setDragItemImage$$($nativeEvent$$3$$, $items$$12$$) {
    var $dragImage$$1_target$$139$$, $i$$446$$, $minTop$$ = Number.MAX_VALUE, $offsetTop$$1$$, $offsetWidth$$, $clone$$5$$, $left$$12$$ = 0, $top$$13$$ = 0;
    $dragImage$$1_target$$139$$ = $nativeEvent$$3$$.target;
    if (1 < $items$$12$$.length) {
      $dragImage$$1_target$$139$$ = $$$$61$$(document.createElement("ul"));
      $dragImage$$1_target$$139$$.get(0).className = this.$listview$.element.get(0).className;
      $dragImage$$1_target$$139$$.addClass("oj-listview-drag-image").css({width:this.$listview$.element.css("width"), height:this.$listview$.element.css("height")});
      for ($i$$446$$ = 0;$i$$446$$ < $items$$12$$.length;$i$$446$$++) {
        $minTop$$ = Math.min($minTop$$, $items$$12$$[$i$$446$$].offsetTop);
      }
      for ($i$$446$$ = 0;$i$$446$$ < $items$$12$$.length;$i$$446$$++) {
        $offsetTop$$1$$ = $items$$12$$[$i$$446$$].offsetTop - $minTop$$, $offsetWidth$$ = $items$$12$$[$i$$446$$].offsetWidth, $clone$$5$$ = $$$$61$$($items$$12$$[$i$$446$$].cloneNode(!0)), $clone$$5$$.removeClass("oj-selected oj-focus oj-hover").css({position:"absolute", top:$offsetTop$$1$$, width:$offsetWidth$$}), $dragImage$$1_target$$139$$.append($clone$$5$$);
      }
    } else {
      $$$$61$$($dragImage$$1_target$$139$$).hasClass("oj-listview-drag-handle") && ($left$$12$$ = Math.max(0, $dragImage$$1_target$$139$$.offsetLeft - $items$$12$$[0].offsetLeft) + $dragImage$$1_target$$139$$.offsetWidth / 2, $top$$13$$ = $dragImage$$1_target$$139$$.offsetTop + $dragImage$$1_target$$139$$.offsetHeight / 2), $clone$$5$$ = $$$$61$$($items$$12$$[0].cloneNode(!0)), $clone$$5$$.removeClass("oj-selected oj-focus oj-hover").addClass("oj-drag"), $dragImage$$1_target$$139$$ = $$$$61$$(document.createElement("ul")), 
      $dragImage$$1_target$$139$$.get(0).className = this.$listview$.element.get(0).className, $dragImage$$1_target$$139$$.addClass("oj-listview-drag-image").css({width:this.$listview$.element.css("width"), height:2 * $items$$12$$[0].offsetHeight}).append($clone$$5$$);
    }
    $$$$61$$("body").append($dragImage$$1_target$$139$$);
    this.$m_dragImage$ = $dragImage$$1_target$$139$$;
    $nativeEvent$$3$$.dataTransfer.setDragImage($dragImage$$1_target$$139$$.get(0), $left$$12$$, $top$$13$$);
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_handleDragStart$ = function $$oj$$67$$$$ListViewDndContext$$$$_handleDragStart$$($event$$706_ret$$64$$) {
    var $options$$381_ui$$42$$, $dataTypes$$6$$, $items$$13$$;
    $options$$381_ui$$42$$ = this.$_getDragOptions$();
    if (null != $options$$381_ui$$42$$ || this.$_isItemReordering$()) {
      if ($dataTypes$$6$$ = null != $options$$381_ui$$42$$ ? $options$$381_ui$$42$$.dataTypes : "text/ojlistview-items-data", $$$$61$$($event$$706_ret$$64$$.target).hasClass("oj-listview-drag-handle") ? ($items$$13$$ = [], $items$$13$$.push(this.$_findItem$($event$$706_ret$$64$$.target)[0])) : $items$$13$$ = this.$_getSelectedItems$(), 0 < $items$$13$$.length) {
        if (null == $options$$381_ui$$42$$ && 1 < $items$$13$$.length) {
          return!1;
        }
        this.$m_dragItems$ = $items$$13$$;
        this.$m_currentDragItem$ = $$$$61$$($items$$13$$[0]);
        if ($options$$381_ui$$42$$ = this.$_setDragItemDataTransfer$($event$$706_ret$$64$$, $dataTypes$$6$$, $items$$13$$)) {
          if ($event$$706_ret$$64$$ = this.$_invokeDndCallback$("drag", "dragStart", $event$$706_ret$$64$$, $options$$381_ui$$42$$), -1 !== $event$$706_ret$$64$$) {
            return $event$$706_ret$$64$$;
          }
        } else {
          return!1;
        }
      }
    }
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_handleDrag$ = function $$oj$$67$$$$ListViewDndContext$$$$_handleDrag$$($event$$707$$) {
    return this.$_invokeDndCallback$("drag", "drag", $event$$707$$);
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_destroyDragImage$ = function $$oj$$67$$$$ListViewDndContext$$$$_destroyDragImage$$() {
    null != this.$m_dragImage$ && (this.$m_dragImage$.remove(), this.$m_dragImage$ = null);
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_handleDragEnd$ = function $$oj$$67$$$$ListViewDndContext$$$$_handleDragEnd$$($event$$708$$) {
    var $i$$447$$;
    if (null != this.$m_currentDragItem$ && null != this.$m_dragItems$) {
      for (this.$m_currentDragItem$.find(".oj-listview-drag-handle").removeAttr("draggable"), this.$m_currentDragItem$.removeClass("oj-drag oj-draggable").removeAttr("draggable"), $i$$447$$ = 0;$i$$447$$ < this.$m_dragItems$.length;$i$$447$$++) {
        $$$$61$$(this.$m_dragItems$[$i$$447$$]).css("display", "block");
      }
    }
    this.$_cleanupDropTarget$();
    this.$_destroyDragImage$();
    this.$_invokeDndCallback$("drag", "dragEnd", $event$$708$$);
    this.$m_currentDragItem$ = this.$m_dragImage$ = null;
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_matchDragDataType$ = function $$oj$$67$$$$ListViewDndContext$$$$_matchDragDataType$$($dragDataTypes$$1_event$$709$$) {
    var $allowedTypeArray$$1_allowedTypes$$1_options$$382$$, $i$$448$$;
    $allowedTypeArray$$1_allowedTypes$$1_options$$382$$ = this.$_getDropOptions$();
    if (this.$_isItemReordering$() && null == $allowedTypeArray$$1_allowedTypes$$1_options$$382$$) {
      return!0;
    }
    if ($allowedTypeArray$$1_allowedTypes$$1_options$$382$$ && $allowedTypeArray$$1_allowedTypes$$1_options$$382$$.dataTypes) {
      for ($allowedTypeArray$$1_allowedTypes$$1_options$$382$$ = $allowedTypeArray$$1_allowedTypes$$1_options$$382$$.dataTypes, $allowedTypeArray$$1_allowedTypes$$1_options$$382$$ = "string" == typeof $allowedTypeArray$$1_allowedTypes$$1_options$$382$$ ? [$allowedTypeArray$$1_allowedTypes$$1_options$$382$$] : $allowedTypeArray$$1_allowedTypes$$1_options$$382$$, $dragDataTypes$$1_event$$709$$ = $dragDataTypes$$1_event$$709$$.originalEvent.dataTransfer.types, $i$$448$$ = 0;$i$$448$$ < $dragDataTypes$$1_event$$709$$.length;$i$$448$$++) {
        if (0 <= $allowedTypeArray$$1_allowedTypes$$1_options$$382$$.indexOf($dragDataTypes$$1_event$$709$$[$i$$448$$])) {
          return!0;
        }
      }
    }
    return!1;
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_invokeDropCallback$ = function $$oj$$67$$$$ListViewDndContext$$$$_invokeDropCallback$$($callbackType$$3_returnValue$$10$$, $event$$710$$, $ui$$43$$) {
    $callbackType$$3_returnValue$$10$$ = this.$_invokeDndCallback$("drop", $callbackType$$3_returnValue$$10$$, $event$$710$$, $ui$$43$$);
    (void 0 === $callbackType$$3_returnValue$$10$$ || -1 === $callbackType$$3_returnValue$$10$$) && this.$_matchDragDataType$($event$$710$$) && $event$$710$$.preventDefault();
    return $callbackType$$3_returnValue$$10$$;
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_createDropTarget$ = function $$oj$$67$$$$ListViewDndContext$$$$_createDropTarget$$($item$$124$$) {
    var $dropTarget$$;
    null == this.$m_dropTarget$ && ($dropTarget$$ = $$$$61$$($item$$124$$.get(0).cloneNode(!1)), $dropTarget$$.addClass("oj-drop").removeClass("oj-drag oj-draggable oj-hover oj-focus oj-selected").css({display:"block", height:$item$$124$$.outerHeight()}), this.$m_dropTarget$ = $dropTarget$$);
    return this.$m_dropTarget$;
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_cleanupGroupItem$ = function $$oj$$67$$$$ListViewDndContext$$$$_cleanupGroupItem$$() {
    null != this.$m_currentDropItem$ && -1 === this.$m_dropTargetIndex$ && this.$m_currentDropItem$.children("." + this.$listview$.$getGroupItemStyleClass$()).removeClass("oj-drop");
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_cleanupDropTarget$ = function $$oj$$67$$$$ListViewDndContext$$$$_cleanupDropTarget$$() {
    null != this.$m_dropTarget$ && (this.$m_dropTarget$.css("height", "0"), this.$m_dropTarget$.remove(), this.$m_dropTarget$ = null);
    this.$_cleanupGroupItem$();
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_handleDragEnter$ = function $$oj$$67$$$$ListViewDndContext$$$$_handleDragEnter$$($event$$711_returnValue$$11$$) {
    var $item$$125$$;
    $item$$125$$ = this.$_findItem$($event$$711_returnValue$$11$$.target);
    $event$$711_returnValue$$11$$ = this.$_invokeDropCallback$("dragEnter", $event$$711_returnValue$$11$$, {item:$item$$125$$.get(0)});
    if (-1 != $event$$711_returnValue$$11$$) {
      return $event$$711_returnValue$$11$$;
    }
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_setCurrentDropItem$ = function $$oj$$67$$$$ListViewDndContext$$$$_setCurrentDropItem$$($item$$126$$) {
    null != this.$m_currentDropItem$ && this.$m_currentDropItem$.removeClass("oj-valid-drop oj-invalid-drop");
    this.$m_currentDropItem$ = $item$$126$$;
    this.$m_currentDropItem$.addClass("oj-valid-drop");
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_setAccInfo$ = function $$oj$$67$$$$ListViewDndContext$$$$_setAccInfo$$($item$$127$$, $position$$37$$) {
    var $label$$19_msg$$26$$;
    $label$$19_msg$$26$$ = $item$$127$$.attr("aria-label");
    null == $label$$19_msg$$26$$ && ($label$$19_msg$$26$$ = $item$$127$$.text());
    $label$$19_msg$$26$$ = this.$listview$.$ojContext$.$getTranslatedString$("accessibleReorder" + $position$$37$$.charAt(0).toUpperCase() + $position$$37$$.substr(1) + "Item", {item:$label$$19_msg$$26$$});
    this.$listview$.$_setAccInfoText$($label$$19_msg$$26$$);
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_adjustGroupItemStyle$ = function $$oj$$67$$$$ListViewDndContext$$$$_adjustGroupItemStyle$$() {
    null == this.$m_maxHeightAdjusted$ && this.$listview$.$_isTouchSupport$() && (this.$listview$.element.find("ul." + this.$listview$.$getGroupStyleClass$()).each(function() {
      $$$$61$$(this).attr("oldMaxHeight", $$$$61$$(this).css("maxHeight").toString());
      $$$$61$$(this).css("maxHeight", 1E4);
    }), this.$m_maxHeightAdjusted$ = "adjusted");
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_restoreGroupItemStyle$ = function $$oj$$67$$$$ListViewDndContext$$$$_restoreGroupItemStyle$$() {
    this.$listview$.$_isTouchSupport$() && this.$listview$.element.find("ul." + this.$listview$.$getGroupStyleClass$()).each(function() {
      $$$$61$$(this).css("maxHeight", parseInt($$$$61$$(this).attr("oldMaxHeight"), 10));
      $$$$61$$(this).removeAttr("oldMaxHeight");
    });
    this.$m_maxHeightAdjusted$ = null;
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_handleDragOver$ = function $$oj$$67$$$$ListViewDndContext$$$$_handleDragOver$$($event$$712_i$$449$$) {
    var $item$$128$$, $dropTarget$$1$$, $returnValue$$12$$, $index$$319$$;
    if (null != this.$_getDropOptions$() || this.$_isItemReordering$()) {
      this.$_adjustGroupItemStyle$();
      if (null != this.$m_dragItems$ && "none" != $$$$61$$(this.$m_dragItems$[0]).css("display")) {
        $item$$128$$ = $$$$61$$(this.$m_dragItems$[0]);
        $dropTarget$$1$$ = this.$_createDropTarget$($item$$128$$);
        for ($event$$712_i$$449$$ = 0;$event$$712_i$$449$$ < this.$m_dragItems$.length;$event$$712_i$$449$$++) {
          $$$$61$$(this.$m_dragItems$[$event$$712_i$$449$$]).css("display", "none");
        }
        $dropTarget$$1$$.insertBefore($item$$128$$);
        this.$m_dropTargetIndex$ = $dropTarget$$1$$.index();
      } else {
        $item$$128$$ = this.$_findItem$($event$$712_i$$449$$.target), null != $item$$128$$ && 0 < $item$$128$$.length && ($returnValue$$12$$ = this.$_invokeDropCallback$("dragOver", $event$$712_i$$449$$, {item:$item$$128$$.get(0)}), -1 === $returnValue$$12$$ && this.$_isItemReordering$() || !1 === $returnValue$$12$$ || $event$$712_i$$449$$.isDefaultPrevented() ? ($item$$128$$.hasClass(this.$listview$.$getItemStyleClass$()) ? (this.$_cleanupGroupItem$(), $item$$128$$.hasClass("oj-drop") || ($dropTarget$$1$$ = 
        this.$_createDropTarget$($item$$128$$), $index$$319$$ = $item$$128$$.index(), null == this.$m_dropTargetIndex$ || this.$m_dropTargetIndex$ < $index$$319$$ ? ($dropTarget$$1$$.insertAfter($item$$128$$), this.$m_dropPosition$ = "after") : ($dropTarget$$1$$.insertBefore($item$$128$$), this.$m_dropPosition$ = "before"), this.$_setAccInfo$($item$$128$$, this.$m_dropPosition$), this.$_setCurrentDropItem$($item$$128$$), this.$m_dropTargetIndex$ = $dropTarget$$1$$.index())) : (this.$_cleanupDropTarget$(), 
        $item$$128$$.children("." + this.$listview$.$getGroupItemStyleClass$()).addClass("oj-drop"), this.$_setCurrentDropItem$($item$$128$$), this.$m_dropTargetIndex$ = -1, this.$m_dropPosition$ = "inside", this.$_setAccInfo$($item$$128$$, this.$m_dropPosition$)), $event$$712_i$$449$$.preventDefault()) : $$$$61$$($event$$712_i$$449$$.target).hasClass(this.$listview$.$getGroupStyleClass$()) || ($item$$128$$.addClass("oj-invalid-drop"), this.$_cleanupDropTarget$()));
      }
      return $returnValue$$12$$;
    }
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_isDndEventInElement$ = function $$oj$$67$$$$ListViewDndContext$$$$_isDndEventInElement$$($event$$713$$, $element$$236$$) {
    var $rect$$3$$, $domEvent$$1$$;
    $rect$$3$$ = $element$$236$$.getBoundingClientRect();
    $domEvent$$1$$ = $event$$713$$.originalEvent;
    return $domEvent$$1$$.clientX >= $rect$$3$$.left && $domEvent$$1$$.clientX < $rect$$3$$.right && $domEvent$$1$$.clientY >= $rect$$3$$.top && $domEvent$$1$$.clientY < $rect$$3$$.bottom;
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_handleDragLeave$ = function $$oj$$67$$$$ListViewDndContext$$$$_handleDragLeave$$($event$$714$$) {
    var $item$$129$$, $returnValue$$13$$;
    if (null != this.$m_currentDropItem$ && ($item$$129$$ = this.$_findItem$($event$$714$$.target), null != $item$$129$$ && 0 < $item$$129$$.length && ($item$$129$$.removeClass("oj-valid-drop oj-invalid-drop"), $returnValue$$13$$ = this.$_invokeDropCallback$("dragLeave", $event$$714$$, {item:$item$$129$$.get(0)}), this.$_isDndEventInElement$($event$$714$$, $event$$714$$.currentTarget) || (this.$_cleanupDropTarget$(), this.$_restoreGroupItemStyle$())), -1 != $returnValue$$13$$)) {
      return $returnValue$$13$$;
    }
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_handleDrop$ = function $$oj$$67$$$$ListViewDndContext$$$$_handleDrop$$($event$$715$$) {
    var $returnValue$$14_source$$14$$, $ui$$44$$;
    if (null != this.$m_currentDropItem$ && ($returnValue$$14_source$$14$$ = $event$$715$$.originalEvent.dataTransfer.getData("text/ojlistview-dragsource-id"), $ui$$44$$ = {item:this.$m_currentDropItem$.get(0), position:this.$m_dropPosition$}, this.$_isItemReordering$() && $returnValue$$14_source$$14$$ === this.$listview$.element.get(0).id ? $ui$$44$$.reorder = !0 : $ui$$44$$.reorder = !1, $returnValue$$14_source$$14$$ = this.$_invokeDropCallback$("drop", $event$$715$$, $ui$$44$$), $ui$$44$$.reorder && 
    ($ui$$44$$.items = this.$m_dragItems$, $ui$$44$$.reference = $ui$$44$$.item, this.$listview$.$Trigger$("reorder", $event$$715$$, $ui$$44$$), $event$$715$$.preventDefault()), null != this.$m_currentDropItem$ && this.$m_currentDropItem$.removeClass("oj-valid-drop"), this.$_cleanupDropTarget$(), this.$_restoreGroupItemStyle$(), this.$_destroyDragImage$(), this.$m_currentDropItem$ = null, this.$m_dropTargetIndex$ = -1, this.$m_dropPosition$ = null, -1 !== $returnValue$$14_source$$14$$)) {
      return $returnValue$$14_source$$14$$;
    }
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$addContextMenu$ = function $$oj$$67$$$$ListViewDndContext$$$$addContextMenu$$($contextMenu$$4_menuContainer$$3$$) {
    var $self$$224$$ = this, $listItems$$3$$, $menuItemsSet$$;
    this.$_isItemReordering$() && (void 0 == $contextMenu$$4_menuContainer$$3$$ && ($contextMenu$$4_menuContainer$$3$$ = this.$listview$.$GetOption$("contextMenu")), null != $contextMenu$$4_menuContainer$$3$$ && (null == this.$m_menuItemsSet$ && (this.$m_menuItemsSet$ = []), $contextMenu$$4_menuContainer$$3$$ = $$$$61$$($contextMenu$$4_menuContainer$$3$$), $listItems$$3$$ = $contextMenu$$4_menuContainer$$3$$.find("[data-oj-command]"), $menuItemsSet$$ = [], $listItems$$3$$.each(function() {
      var $command$$14$$, $newListItem$$1$$;
      0 === $$$$61$$(this).children("a").length ? 0 == $$$$61$$(this).attr("data-oj-command").indexOf("oj-listview-") && ($command$$14$$ = $$$$61$$(this).attr("data-oj-command").substring(12), $newListItem$$1$$ = $self$$224$$.$_buildContextMenuItem$($command$$14$$), $newListItem$$1$$.get(0).className = $$$$61$$(this).get(0).className, $$$$61$$(this).replaceWith($newListItem$$1$$)) : ($command$$14$$ = $$$$61$$(this).attr("data-oj-command"), "pasteBefore" == $command$$14$$ ? $command$$14$$ = "paste-before" : 
      "pasteAfter" == $command$$14$$ && ($command$$14$$ = "paste-after"));
      null != $command$$14$$ && $menuItemsSet$$.push($command$$14$$);
    }), this.$m_menuItemsSet$ = $menuItemsSet$$, 0 < $menuItemsSet$$.length && ($contextMenu$$4_menuContainer$$3$$.data("oj-ojMenu") && $contextMenu$$4_menuContainer$$3$$.ojMenu("refresh"), $contextMenu$$4_menuContainer$$3$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this)))));
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_buildContextMenuItem$ = function $$oj$$67$$$$ListViewDndContext$$$$_buildContextMenuItem$$($command$$15$$) {
    return "paste-before" === $command$$15$$ ? this.$_buildContextMenuListItem$("pasteBefore") : "paste-after" === $command$$15$$ ? this.$_buildContextMenuListItem$("pasteAfter") : this.$_buildContextMenuListItem$($command$$15$$);
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_buildContextMenuListItem$ = function $$oj$$67$$$$ListViewDndContext$$$$_buildContextMenuListItem$$($command$$16$$) {
    var $listItem$$1$$ = $$$$61$$("\x3cli\x3e\x3c/li\x3e");
    $listItem$$1$$.attr("data-oj-command", $command$$16$$);
    $listItem$$1$$.append(this.$_buildContextMenuLabel$($command$$16$$));
    return $listItem$$1$$;
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_buildContextMenuLabel$ = function $$oj$$67$$$$ListViewDndContext$$$$_buildContextMenuLabel$$($command$$17_key$$193$$) {
    $command$$17_key$$193$$ = "label" + $command$$17_key$$193$$.charAt(0).toUpperCase() + $command$$17_key$$193$$.slice(1);
    return $$$$61$$('\x3ca href\x3d"#"\x3e\x3c/a\x3e').text(this.$listview$.$ojContext$.$getTranslatedString$($command$$17_key$$193$$));
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_handleCut$ = function $$oj$$67$$$$ListViewDndContext$$$$_handleCut$$($event$$716$$) {
    var $items$$14$$;
    null != this.$m_clipboard$ && $$$$61$$(this.$m_clipboard$).removeClass("oj-listview-cut");
    $items$$14$$ = this.$_getSelectedItems$();
    $$$$61$$($items$$14$$).addClass("oj-listview-cut");
    this.$m_clipboard$ = $items$$14$$;
    this.$listview$.$Trigger$("cut", $event$$716$$, {items:$items$$14$$});
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_handleCopy$ = function $$oj$$67$$$$ListViewDndContext$$$$_handleCopy$$($event$$717$$) {
    var $items$$15$$;
    null != this.$m_clipboard$ && $$$$61$$(this.$m_clipboard$).removeClass("oj-listview-cut");
    this.$m_clipboard$ = $items$$15$$ = this.$_getSelectedItems$();
    this.$listview$.$Trigger$("copy", $event$$717$$, {items:$items$$15$$});
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_handlePaste$ = function $$oj$$67$$$$ListViewDndContext$$$$_handlePaste$$($event$$718$$, $item$$131$$, $position$$38$$) {
    this.$listview$.$Trigger$("paste", $event$$718$$, {item:$item$$131$$.get(0)});
    $$$$61$$(this.$m_clipboard$).removeClass("oj-listview-cut");
    this.$listview$.$Trigger$("reorder", $event$$718$$, {items:this.$m_clipboard$, position:$position$$38$$, reference:$item$$131$$.get(0)});
    this.$m_clipboard$ = null;
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_handleContextMenuSelect$ = function $$oj$$67$$$$ListViewDndContext$$$$_handleContextMenuSelect$$($event$$719$$, $ui$$45$$) {
    if (null != this.$m_contextMenuItem$) {
      switch($ui$$45$$.item.attr("data-oj-command")) {
        case "cut":
          this.$_handleCut$($event$$719$$);
          break;
        case "copy":
          this.$_handleCopy$($event$$719$$);
          break;
        case "paste":
          var $inside$$ = !0;
        case "pasteBefore":
          var $before$$4$$ = !0;
        case "pasteAfter":
          var $position$$39$$ = "after";
          $inside$$ ? $position$$39$$ = "inside" : $before$$4$$ && ($position$$39$$ = "before");
          this.$_handlePaste$($event$$719$$, this.$m_contextMenuItem$, $position$$39$$);
          this.$m_contextMenuItem$ = null;
      }
    }
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_appendToMenuContainer$ = function $$oj$$67$$$$ListViewDndContext$$$$_appendToMenuContainer$$($menuContainer$$4$$, $command$$18$$) {
    null != this.$m_menuItemsSet$ && ("paste-before" == $command$$18$$ ? $command$$18$$ = "pasteBefore" : "paste-after" == $command$$18$$ && ($command$$18$$ = "pasteAfter"), $menuContainer$$4$$.find("[data-oj-command\x3d'" + $command$$18$$ + "']").removeClass("oj-disabled"));
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$_handleContextMenuBeforeOpen$ = function $$oj$$67$$$$ListViewDndContext$$$$_handleContextMenuBeforeOpen$$($menuContainer$$5$$, $event$$720$$) {
    var $item$$132$$;
    $menuContainer$$5$$.find("[data-oj-command]").addClass("oj-disabled");
    $item$$132$$ = this.$_findItem$($event$$720$$.originalEvent.target);
    null == $item$$132$$ || null == this.$m_menuItemsSet$ || 0 == this.$m_menuItemsSet$.length ? $menuContainer$$5$$.ojMenu("refresh") : ($item$$132$$.children().first().hasClass(this.$listview$.$getGroupItemStyleClass$()) ? null != this.$m_clipboard$ && this.$_appendToMenuContainer$($menuContainer$$5$$, "paste") : (this.$_appendToMenuContainer$($menuContainer$$5$$, "cut"), this.$_appendToMenuContainer$($menuContainer$$5$$, "copy"), null != this.$m_clipboard$ && (this.$_appendToMenuContainer$($menuContainer$$5$$, 
    "paste-before"), this.$_appendToMenuContainer$($menuContainer$$5$$, "paste-after"))), $menuContainer$$5$$.ojMenu("refresh"), this.$m_contextMenuItem$ = $item$$132$$);
  };
  $oj$$67$$.$ListViewDndContext$.prototype.$HandleKeyDown$ = function $$oj$$67$$$$ListViewDndContext$$$$HandleKeyDown$$($event$$721$$) {
    var $active$$8_keyCode$$27$$, $position$$40$$;
    if (!this.$_isItemReordering$() || null == this.$m_menuItemsSet$ || 0 == this.$m_menuItemsSet$.length) {
      return!1;
    }
    if ($event$$721$$.ctrlKey || $event$$721$$.metaKey) {
      $active$$8_keyCode$$27$$ = $event$$721$$.keyCode;
      if ($active$$8_keyCode$$27$$ === $oj$$67$$.$ListViewDndContext$.$X_KEY$ && -1 < this.$m_menuItemsSet$.indexOf("cut")) {
        return this.$_handleCut$($event$$721$$), !0;
      }
      if ($active$$8_keyCode$$27$$ === $oj$$67$$.$ListViewDndContext$.$C_KEY$ && -1 < this.$m_menuItemsSet$.indexOf("copy")) {
        return this.$_handleCopy$($event$$721$$), !0;
      }
      if ($active$$8_keyCode$$27$$ === $oj$$67$$.$ListViewDndContext$.$V_KEY$ && null != this.$m_clipboard$ && ($active$$8_keyCode$$27$$ = $$$$61$$(this.$_getActiveItem$()), $active$$8_keyCode$$27$$.children().first().hasClass(this.$listview$.$getGroupItemStyleClass$()) ? -1 < this.$m_menuItemsSet$.indexOf("paste") && ($position$$40$$ = "inside") : -1 < this.$m_menuItemsSet$.indexOf("paste-before") ? $position$$40$$ = "before" : -1 < this.$m_menuItemsSet$.indexOf("paste-after") && ($position$$40$$ = 
      "after"), null != $position$$40$$)) {
        return this.$_handlePaste$($event$$721$$, $active$$8_keyCode$$27$$, $position$$40$$), !0;
      }
    }
    return!1;
  };
});
